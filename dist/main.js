"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Function to update the SVG fill color based on the theme
    let pathElement = null;
    const updateFillColor = () => {
        pathElement = document.getElementById("wave-path");
        if (pathElement) {
            const currentTheme = localStorage.getItem("theme") ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light");
            if (currentTheme === "dark") {
                pathElement.setAttribute("fill", "#0e121d"); // Dark mode color
            }
            else {
                pathElement.setAttribute("fill", "#e0e0e0"); // Light mode color
            }
        }
        else {
            console.error("SVG path element not found.");
        }
    };
    // Smooth scrolling effect for navigation links
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
    // Scroll to top functionality for elements with the 'scroll-to-top' class
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
    // Select all elements with the 'scroller' class
    const scrollers = document.querySelectorAll(".scroller");
    // Disables animations if the user has reduced motion enabled
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
    // Function to add animation to scroller elements
    function addAnimation() {
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
    }
    // Select the navigation bar, scroller wrapper, and h1 elements
    const nav = document.querySelector("nav");
    const scrollerWrapper = document.querySelector(".scroller-wrapper");
    const h1 = document.querySelector("h1");
    if (!nav || !scrollerWrapper || !h1) {
        console.error("Required elements not found");
        return;
    }
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
    // Initial check
    checkScreenSizeAndAddListener();
    // Add event listener for window resize to re-check screen size
    window.addEventListener("resize", checkScreenSizeAndAddListener);
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
    };
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
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
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
    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
    applyTheme(savedTheme);
    // Initial call to update the SVG fill color
    updateFillColor();
    // Initial call to update the SVG fill color
    updateFillColor();
    // Function to show the preloader
    const showPreloader = () => {
        const preloader = document.querySelector(".preloader");
        const spinner = document.querySelector(".spinner");
        if (preloader && spinner) {
            preloader.classList.remove("fade-out");
            preloader.style.visibility = "visible";
            preloader.style.opacity = "1";
            spinner.style.animation = "spin 0.3s linear infinite";
        }
    };
    // Function to stop spinner
    const stopSpinner = () => {
        const spinner = document.querySelector(".spinner");
        if (spinner) {
            spinner.style.animation = "none";
        }
    };
    // Function to fadeout the preloader
    const fadeOutPreloader = () => {
        const preloader = document.querySelector(".preloader");
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
    function toggleMenu() {
        const navUl = document.querySelector("nav ul");
        const hamburger = document.querySelector(".hamburger");
        if (navUl) {
            navUl.classList.toggle("show");
        }
        if (hamburger) {
            hamburger.classList.toggle("open");
        }
    }
    // Ensure the function is available globally
    window.toggleMenu = toggleMenu;
});
