"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let pathElement = null;
    const nav = document.querySelector("nav");
    const scrollerWrapper = document.querySelector(".scroller-wrapper");
    const h1 = document.querySelector("h1");
    const scrollers = document.querySelectorAll(".scroller");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const navUl = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");
    const preloader = document.querySelector(".preloader");
    const spinner = document.querySelector(".spinner");
    if (!nav || !scrollerWrapper || !h1) {
        console.error("Required elements not found");
        return;
    }
    // Function to add animation to scroller elements
    const addAnimation = () => {
        scrollers.forEach((scroller) => {
            // Mark the scroller as animated
            scroller.setAttribute("data-animated", "true");
            // Select the inner container of the scroller
            const scrollerInner = scroller.querySelector(".scroller-inner");
            if (scrollerInner) {
                // Duplicate each child element of the scroller inner container
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    // Does not show duplicates for screen readers
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            }
            else {
                console.error("Element with class 'scroller-inner' not found.");
            }
        });
    };
    // Disables animations if the user has reduced motion enabled
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
    const updateFillColor = () => {
        pathElement = document.getElementById("wave-path");
        if (pathElement) {
            const currentTheme = localStorage.getItem("theme") ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light");
            if (currentTheme === "dark") {
                pathElement.setAttribute("fill", "#0e121d");
            }
            else {
                pathElement.setAttribute("fill", "#e0e0e0");
            }
        }
        else {
            console.error("SVG path element not found.");
        }
    };
    // Smooth scrolling effect for navigation links
    const setupSmoothScrolling = () => {
        document
            .querySelectorAll("nav ul li a")
            .forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                const href = event.currentTarget.getAttribute("href");
                // Check if the href is a mailto link or if the element has the scroll-to-top class
                if (href &&
                    !href.startsWith("mailto:") &&
                    anchor.className !== "scroll-to-top") {
                    // Prevent default behavior only if the href is a fragment identifier
                    if (href.startsWith("#")) {
                        event.preventDefault();
                        // Get the target element's ID from the href attribute
                        const target = document.querySelector(href);
                        if (target) {
                            // Scroll to the target element smoothly
                            target.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }
                }
            });
        });
    };
    // Scroll to top functionality for elements with the 'scroll-to-top' class
    const setupScrollToTop = () => {
        document
            .querySelectorAll(".scroll-to-top")
            .forEach((element) => {
            element.addEventListener("click", (event) => {
                const href = event.currentTarget.getAttribute("href");
                // Only prevent default if href is not a mailto link
                if (!href || !href.startsWith("mailto:")) {
                    event.preventDefault();
                    // Scroll to the top of the page smoothly
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            });
        });
    };
    const handleScroll = () => {
        // Get elements actual sizes in the DOM
        const navRect = nav.getBoundingClientRect();
        const h1Rect = h1.getBoundingClientRect();
        // Check if the nav is overlapping the h1 element
        const isOverlapping = !(navRect.bottom < h1Rect.top ||
            navRect.top > h1Rect.bottom ||
            navRect.right < h1Rect.left ||
            navRect.left > h1Rect.right);
        // Check if the nav is above the h1 element
        const isAbove = navRect.bottom < h1Rect.top;
        if (isOverlapping || !isAbove) {
            nav.classList.add("fixed-nav");
            nav.classList.remove("floating-nav");
        }
        else {
            nav.classList.remove("fixed-nav");
            nav.classList.add("floating-nav");
        }
    };
    // Function to check screen size and add/remove event listener if appropriate
    const checkScreenSizeAndAddListener = () => {
        if (window.innerWidth > 450) {
            window.addEventListener("scroll", handleScroll);
            // Initial check
            handleScroll();
        }
        else {
            window.removeEventListener("scroll", handleScroll);
            // Ensure nav is in the floating state if the screen is small
            nav.classList.remove("fixed-nav");
            nav.classList.add("floating-nav");
        }
    };
    // Function to apply the theme
    const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateFillColor();
        // Show/hide the appropriate icon
        if (theme === "dark") {
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        }
        else {
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        }
        // Load the particles configuration and modify it based on the theme
        fetch("assets/particles.json")
            .then((response) => response.json())
            .then((config) => {
            if (theme === "dark") {
                config.particles.color.value = "#0e121d";
                config.particles.shape.stroke.color = "#0e121d";
                config.particles.line_linked.color = "#0e121d";
            }
            else {
                config.particles.color.value = "#e0e0e0";
                config.particles.shape.stroke.color = "#e0e0e0";
                config.particles.line_linked.color = "#e0e0e0";
            }
            particlesJS("particles-js", config);
        })
            .catch((error) => console.error("Error loading particles configuration:", error));
    };
    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
    applyTheme(savedTheme);
    // Function to toggle the theme
    const toggleTheme = () => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            applyTheme("light");
        }
        else {
            applyTheme("dark");
        }
    };
    // Function to show the preloader
    const showPreloader = () => {
        if (preloader && spinner) {
            preloader.classList.remove("fade-out");
            preloader.style.visibility = "visible";
            preloader.style.opacity = "1";
            spinner.style.animation = "spin 0.3s linear infinite";
        }
    };
    // Function to stop spinner
    const stopSpinner = () => {
        if (spinner) {
            spinner.style.animation = "none";
        }
    };
    // Function to fadeout the preloader
    const fadeOutPreloader = () => {
        if (preloader) {
            preloader.classList.add("fade-out");
            preloader.addEventListener("transitionend", () => {
                preloader.style.visibility = "hidden";
            });
        }
    };
    // Stop the spinner after 1 second and then fade out the preloader
    setTimeout(() => {
        stopSpinner();
        fadeOutPreloader();
    }, 300);
    const toggleMenu = () => {
        if (navUl) {
            navUl.classList.toggle("show");
            // Add event listener to each li element
            const navItems = navUl.querySelectorAll("li");
            navItems.forEach((item) => {
                item.addEventListener("click", () => {
                    navUl.classList.remove("show");
                    if (hamburger) {
                        hamburger.classList.remove("open");
                    }
                });
            });
        }
        if (hamburger) {
            hamburger.classList.toggle("open");
        }
    };
    const trackUserPosition = () => {
        if (!navUl)
            return;
        const sections = document.querySelectorAll("section");
        const navItems = navUl.querySelectorAll("li");
        const updateNavItemColor = () => {
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionId = section.getAttribute("id");
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                    navItems.forEach((item) => {
                        item.style.color = "";
                        if (sectionId && item.classList.contains(sectionId)) {
                            item.style.color = "var(--secondary)";
                        }
                    });
                }
            });
        };
        window.addEventListener("scroll", updateNavItemColor);
        window.addEventListener("resize", updateNavItemColor);
        // Initial call to set the correct color on page load
        updateNavItemColor();
    };
    // Initial call to update the SVG fill color
    updateFillColor();
    // Call the function to set up smooth scrolling
    setupSmoothScrolling();
    // Call the function to set up scroll-to-top behavior
    setupScrollToTop();
    // Initial check
    checkScreenSizeAndAddListener();
    // Event listeners for the icons
    sunIcon.addEventListener("click", () => {
        showPreloader();
        setTimeout(() => {
            toggleTheme();
        }, 250);
        setTimeout(() => {
            stopSpinner();
            fadeOutPreloader();
        }, 300);
    });
    moonIcon.addEventListener("click", () => {
        showPreloader();
        setTimeout(() => {
            toggleTheme();
        }, 250);
        setTimeout(() => {
            stopSpinner();
            fadeOutPreloader();
        }, 300);
    });
    // Initial call to trackUserPosition
    trackUserPosition();
    // Event listener for window resize to re-check screen size
    window.addEventListener("resize", checkScreenSizeAndAddListener);
    // Ensure the function is available globally
    window.toggleMenu = toggleMenu;
});
