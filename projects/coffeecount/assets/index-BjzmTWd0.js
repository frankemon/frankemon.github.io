(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zu = { exports: {} },
  rl = {},
  Ju = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
  hc = Symbol.for("react.portal"),
  vc = Symbol.for("react.fragment"),
  yc = Symbol.for("react.strict_mode"),
  gc = Symbol.for("react.profiler"),
  wc = Symbol.for("react.provider"),
  Sc = Symbol.for("react.context"),
  kc = Symbol.for("react.forward_ref"),
  xc = Symbol.for("react.suspense"),
  Cc = Symbol.for("react.memo"),
  Ec = Symbol.for("react.lazy"),
  Uo = Symbol.iterator;
function _c(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uo && e[Uo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bu = Object.assign,
  es = {};
function ot(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = es),
    (this.updater = t || qu);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {}
ns.prototype = ot.prototype;
function Hi(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = es),
    (this.updater = t || qu);
}
var Vi = (Hi.prototype = new ns());
Vi.constructor = Hi;
bu(Vi, ot.prototype);
Vi.isPureReactComponent = !0;
var $o = Array.isArray,
  ts = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      ts.call(n, r) && !rs.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Bi.current,
  };
}
function Nc(e, n) {
  return {
    $$typeof: Gt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function Pc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Ao = /\/+/g;
function xl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pc("" + e.key)
    : n.toString(36);
}
function wr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case hc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + xl(o, 0) : r),
      $o(l)
        ? ((t = ""),
          e != null && (t = e.replace(Ao, "$&/") + "/"),
          wr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Wi(l) &&
            (l = Nc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ao, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), $o(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xl(i, u);
      o += wr(i, n, t, s, l);
    }
  else if (((s = _c(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, u++)), (o += wr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function jc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Sr = { transition: null },
  zc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Bi,
  };
function is() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = ot;
T.Fragment = vc;
T.Profiler = gc;
T.PureComponent = Hi;
T.StrictMode = yc;
T.Suspense = xc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.act = is;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Bi.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      ts.call(n, s) &&
        !rs.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ls;
T.createFactory = function (e) {
  var n = ls.bind(null, e);
  return (n.type = e), n;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: kc, render: e };
};
T.isValidElement = Wi;
T.lazy = function (e) {
  return { $$typeof: Ec, _payload: { _status: -1, _result: e }, _init: jc };
};
T.memo = function (e, n) {
  return { $$typeof: Cc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
T.unstable_act = is;
T.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Ju.exports = T;
var J = Ju.exports;
const ve = mc(J);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = J,
  Lc = Symbol.for("react.element"),
  Oc = Symbol.for("react.fragment"),
  Rc = Object.prototype.hasOwnProperty,
  Mc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function os(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Rc.call(n, r) && !Dc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Lc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Mc.current,
  };
}
rl.Fragment = Oc;
rl.jsx = os;
rl.jsxs = os;
Zu.exports = rl;
var v = Zu.exports,
  us = { exports: {} },
  Se = {},
  ss = { exports: {} },
  as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, j) {
    var z = E.length;
    E.push(j);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = E[W];
      if (0 < l(G, j)) (E[W] = j), (E[z] = G), (z = W);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      z = E.pop();
    if (z !== j) {
      E[0] = z;
      e: for (var W = 0, G = E.length, er = G >>> 1; W < er; ) {
        var gn = 2 * (W + 1) - 1,
          kl = E[gn],
          wn = gn + 1,
          nr = E[wn];
        if (0 > l(kl, z))
          wn < G && 0 > l(nr, kl)
            ? ((E[W] = nr), (E[wn] = z), (W = wn))
            : ((E[W] = kl), (E[gn] = z), (W = gn));
        else if (wn < G && 0 > l(nr, z)) (E[W] = nr), (E[wn] = z), (W = wn);
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var z = E.sortIndex - j.sortIndex;
    return z !== 0 ? z : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    w = !1,
    S = !1,
    k = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var j = t(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= E)
        r(c), (j.sortIndex = j.expirationTime), n(s, j);
      else break;
      j = t(c);
    }
  }
  function y(E) {
    if (((k = !1), d(E), !S))
      if (t(s) !== null) (S = !0), wl(C);
      else {
        var j = t(c);
        j !== null && Sl(y, j.startTime - E);
      }
  }
  function C(E, j) {
    (S = !1), k && ((k = !1), f(P), (P = -1)), (w = !0);
    var z = p;
    try {
      for (
        d(j), h = t(s);
        h !== null && (!(h.expirationTime > j) || (E && !je()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var G = W(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === t(s) && r(s),
            d(j);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var er = !0;
      else {
        var gn = t(c);
        gn !== null && Sl(y, gn.startTime - j), (er = !1);
      }
      return er;
    } finally {
      (h = null), (p = z), (w = !1);
    }
  }
  var _ = !1,
    N = null,
    P = -1,
    B = 5,
    L = -1;
  function je() {
    return !(e.unstable_now() - L < B);
  }
  function at() {
    if (N !== null) {
      var E = e.unstable_now();
      L = E;
      var j = !0;
      try {
        j = N(!0, E);
      } finally {
        j ? ct() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var ct;
  if (typeof a == "function")
    ct = function () {
      a(at);
    };
  else if (typeof MessageChannel < "u") {
    var Fo = new MessageChannel(),
      pc = Fo.port2;
    (Fo.port1.onmessage = at),
      (ct = function () {
        pc.postMessage(null);
      });
  } else
    ct = function () {
      M(at, 0);
    };
  function wl(E) {
    (N = E), _ || ((_ = !0), ct());
  }
  function Sl(E, j) {
    P = M(function () {
      E(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), wl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = p;
      }
      var z = p;
      p = j;
      try {
        return E();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = p;
      p = E;
      try {
        return j();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = {
          id: m++,
          callback: j,
          priorityLevel: E,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((E.sortIndex = z),
            n(c, E),
            t(s) === null &&
              E === t(c) &&
              (k ? (f(P), (P = -1)) : (k = !0), Sl(y, z - W)))
          : ((E.sortIndex = G), n(s, E), S || w || ((S = !0), wl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (E) {
      var j = p;
      return function () {
        var z = p;
        p = j;
        try {
          return E.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(as);
ss.exports = as;
var Ic = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc = J,
  we = Ic;
function g(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cs = new Set(),
  Ot = {};
function On(e, n) {
  bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++) cs.add(n[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Uc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ho = {},
  Vo = {};
function $c(e) {
  return Gl.call(Vo, e)
    ? !0
    : Gl.call(Ho, e)
    ? !1
    : Uc.test(e)
    ? (Vo[e] = !0)
    : ((Ho[e] = !0), !1);
}
function Ac(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hc(e, n, t, r) {
  if (n === null || typeof n > "u" || Ac(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Qi, Ki);
  ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Hc(n, t, l, r) && (t = null),
    r || l === null
      ? $c(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ze = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  In = Symbol.for("react.fragment"),
  Xi = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  fs = Symbol.for("react.provider"),
  ds = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Zi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ps = Symbol.for("react.offscreen"),
  Bo = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bo && e[Bo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Cl;
function wt(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Cl = (n && n[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var El = !1;
function _l(e, n) {
  if (!e || El) return "";
  El = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Vc(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Dn:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ds:
        return (e.displayName || "Context") + ".Consumer";
      case fs:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zi:
        return (
          (n = e.displayName || null), n !== null ? n : bl(e.type) || "Memo"
        );
      case qe:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Bc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Xi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ms(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Wc(e) {
  var n = ms(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Wc(e));
}
function hs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = ms(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, n) {
  var t = n.checked;
  return H({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Wo(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function vs(e, n) {
  (n = n.checked), n != null && Yi(e, "checked", n, !1);
}
function ni(e, n) {
  vs(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ti(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ti(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Qo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ti(e, n, t) {
  (n !== "number" || Lr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ri(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return H({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ko(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(g(92));
      if (St(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: pn(t) };
}
function ys(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Yo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gs(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  ws = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Rt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ct = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ct).forEach(function (e) {
  Qc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ct[n] = Ct[e]);
  });
});
function Ss(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Ct.hasOwnProperty(e) && Ct[e])
    ? ("" + n).trim()
    : n + "px";
}
function ks(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Ss(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Kc = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ii(e, n) {
  if (n) {
    if (Kc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function oi(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Xn = null,
  Gn = null;
function Xo(e) {
  if ((e = qt(e))) {
    if (typeof si != "function") throw Error(g(280));
    var n = e.stateNode;
    n && ((n = sl(n)), si(e.stateNode, e.type, n));
  }
}
function xs(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function Cs() {
  if (Xn) {
    var e = Xn,
      n = Gn;
    if (((Gn = Xn = null), Xo(e), n)) for (e = 0; e < n.length; e++) Xo(n[e]);
  }
}
function Es(e, n) {
  return e(n);
}
function _s() {}
var Nl = !1;
function Ns(e, n, t) {
  if (Nl) return e(n, t);
  Nl = !0;
  try {
    return Es(e, n, t);
  } finally {
    (Nl = !1), (Xn !== null || Gn !== null) && (_s(), Cs());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var ai = !1;
if (Ke)
  try {
    var dt = {};
    Object.defineProperty(dt, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", dt, dt),
      window.removeEventListener("test", dt, dt);
  } catch {
    ai = !1;
  }
function Yc(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var Et = !1,
  Or = null,
  Rr = !1,
  ci = null,
  Xc = {
    onError: function (e) {
      (Et = !0), (Or = e);
    },
  };
function Gc(e, n, t, r, l, i, o, u, s) {
  (Et = !1), (Or = null), Yc.apply(Xc, arguments);
}
function Zc(e, n, t, r, l, i, o, u, s) {
  if ((Gc.apply(this, arguments), Et)) {
    if (Et) {
      var c = Or;
      (Et = !1), (Or = null);
    } else throw Error(g(198));
    Rr || ((Rr = !0), (ci = c));
  }
}
function Rn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Ps(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Go(e) {
  if (Rn(e) !== e) throw Error(g(188));
}
function Jc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Rn(e)), n === null)) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Go(l), e;
        if (i === r) return Go(l), n;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function js(e) {
  return (e = Jc(e)), e !== null ? zs(e) : null;
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = zs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ts = we.unstable_scheduleCallback,
  Zo = we.unstable_cancelCallback,
  qc = we.unstable_shouldYield,
  bc = we.unstable_requestPaint,
  Q = we.unstable_now,
  ef = we.unstable_getCurrentPriorityLevel,
  qi = we.unstable_ImmediatePriority,
  Ls = we.unstable_UserBlockingPriority,
  Mr = we.unstable_NormalPriority,
  nf = we.unstable_LowPriority,
  Os = we.unstable_IdlePriority,
  ll = null,
  $e = null;
function tf(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : of,
  rf = Math.log,
  lf = Math.LN2;
function of(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rf(e) / lf) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kt(u)) : ((i &= o), i !== 0 && (r = kt(i)));
  } else (o = t & ~l), o !== 0 ? (r = kt(o)) : i !== 0 && (r = kt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function uf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Re(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & t) || u & r) && (l[o] = uf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Rs() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Re(n)),
    (e[n] = t);
}
function af(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function bi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var R = 0;
function Ms(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ds,
  eo,
  Is,
  Fs,
  Us,
  di = !1,
  sr = [],
  ln = null,
  on = null,
  un = null,
  Dt = new Map(),
  It = new Map(),
  en = [],
  cf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function pt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = qt(n)), n !== null && eo(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function ff(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (ln = pt(ln, e, n, t, r, l)), !0;
    case "dragenter":
      return (on = pt(on, e, n, t, r, l)), !0;
    case "mouseover":
      return (un = pt(un, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Dt.set(i, pt(Dt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), It.set(i, pt(It.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function $s(e) {
  var n = xn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Ps(t)), n !== null)) {
          (e.blockedOn = n),
            Us(e.priority, function () {
              Is(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = pi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ui = r), t.target.dispatchEvent(r), (ui = null);
    } else return (n = qt(t)), n !== null && eo(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function qo(e, n, t) {
  kr(e) && t.delete(n);
}
function df() {
  (di = !1),
    ln !== null && kr(ln) && (ln = null),
    on !== null && kr(on) && (on = null),
    un !== null && kr(un) && (un = null),
    Dt.forEach(qo),
    It.forEach(qo);
}
function mt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, df)));
}
function Ft(e) {
  function n(l) {
    return mt(l, e);
  }
  if (0 < sr.length) {
    mt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && mt(ln, e),
      on !== null && mt(on, e),
      un !== null && mt(un, e),
      Dt.forEach(n),
      It.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    $s(t), t.blockedOn === null && en.shift();
}
var Zn = Ze.ReactCurrentBatchConfig,
  Ir = !0;
function pf(e, n, t, r) {
  var l = R,
    i = Zn.transition;
  Zn.transition = null;
  try {
    (R = 1), no(e, n, t, r);
  } finally {
    (R = l), (Zn.transition = i);
  }
}
function mf(e, n, t, r) {
  var l = R,
    i = Zn.transition;
  Zn.transition = null;
  try {
    (R = 4), no(e, n, t, r);
  } finally {
    (R = l), (Zn.transition = i);
  }
}
function no(e, n, t, r) {
  if (Ir) {
    var l = pi(e, n, t, r);
    if (l === null) Fl(e, n, r, Fr, t), Jo(e, r);
    else if (ff(l, e, n, t, r)) r.stopPropagation();
    else if ((Jo(e, r), n & 4 && -1 < cf.indexOf(e))) {
      for (; l !== null; ) {
        var i = qt(l);
        if (
          (i !== null && Ds(i),
          (i = pi(e, n, t, r)),
          i === null && Fl(e, n, r, Fr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, n, r, null, t);
  }
}
var Fr = null;
function pi(e, n, t, r) {
  if (((Fr = null), (e = Ji(r)), (e = xn(e)), e !== null))
    if (((n = Rn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Ps(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Fr = e), null;
}
function As(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ef()) {
        case qi:
          return 1;
        case Ls:
          return 4;
        case Mr:
        case nf:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  to = null,
  xr = null;
function Hs() {
  if (xr) return xr;
  var e,
    n = to,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function bo() {
  return !1;
}
function ke(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : bo),
      (this.isPropagationStopped = bo),
      this
    );
  }
  return (
    H(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    n
  );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = ke(ut),
  Jt = H({}, ut, { view: 0, detail: 0 }),
  hf = ke(Jt),
  jl,
  zl,
  ht,
  il = H({}, Jt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ht &&
            (ht && e.type === "mousemove"
              ? ((jl = e.screenX - ht.screenX), (zl = e.screenY - ht.screenY))
              : (zl = jl = 0),
            (ht = e)),
          jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  eu = ke(il),
  vf = H({}, il, { dataTransfer: 0 }),
  yf = ke(vf),
  gf = H({}, Jt, { relatedTarget: 0 }),
  Tl = ke(gf),
  wf = H({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(wf),
  kf = H({}, ut, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xf = ke(kf),
  Cf = H({}, ut, { data: 0 }),
  nu = ke(Cf),
  Ef = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _f = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Nf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Nf[e]) ? !!n[e] : !1;
}
function lo() {
  return Pf;
}
var jf = H({}, Jt, {
    key: function (e) {
      if (e.key) {
        var n = Ef[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _f[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  zf = ke(jf),
  Tf = H({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tu = ke(Tf),
  Lf = H({}, Jt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Of = ke(Lf),
  Rf = H({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mf = ke(Rf),
  Df = H({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  If = ke(Df),
  Ff = [9, 13, 27, 32],
  io = Ke && "CompositionEvent" in window,
  _t = null;
Ke && "documentMode" in document && (_t = document.documentMode);
var Uf = Ke && "TextEvent" in window && !_t,
  Vs = Ke && (!io || (_t && 8 < _t && 11 >= _t)),
  ru = " ",
  lu = !1;
function Bs(e, n) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ws(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function $f(e, n) {
  switch (e) {
    case "compositionend":
      return Ws(n);
    case "keypress":
      return n.which !== 32 ? null : ((lu = !0), ru);
    case "textInput":
      return (e = n.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Af(e, n) {
  if (Fn)
    return e === "compositionend" || (!io && Bs(e, n))
      ? ((e = Hs()), (xr = to = tn = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Vs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Hf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function iu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Hf[e.type] : n === "textarea";
}
function Qs(e, n, t, r) {
  xs(r),
    (n = Ur(n, "onChange")),
    0 < n.length &&
      ((t = new ro("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Nt = null,
  Ut = null;
function Vf(e) {
  ta(e, 0);
}
function ol(e) {
  var n = An(e);
  if (hs(n)) return e;
}
function Bf(e, n) {
  if (e === "change") return n;
}
var Ks = !1;
if (Ke) {
  var Ll;
  if (Ke) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"),
        (Ol = typeof ou.oninput == "function");
    }
    Ll = Ol;
  } else Ll = !1;
  Ks = Ll && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Nt && (Nt.detachEvent("onpropertychange", Ys), (Ut = Nt = null));
}
function Ys(e) {
  if (e.propertyName === "value" && ol(Ut)) {
    var n = [];
    Qs(n, Ut, e, Ji(e)), Ns(Vf, n);
  }
}
function Wf(e, n, t) {
  e === "focusin"
    ? (uu(), (Nt = n), (Ut = t), Nt.attachEvent("onpropertychange", Ys))
    : e === "focusout" && uu();
}
function Qf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Ut);
}
function Kf(e, n) {
  if (e === "click") return ol(n);
}
function Yf(e, n) {
  if (e === "input" || e === "change") return ol(n);
}
function Xf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var De = typeof Object.is == "function" ? Object.is : Xf;
function $t(e, n) {
  if (De(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !De(e[l], n[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, n) {
  var t = su(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = su(t);
  }
}
function Xs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Xs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Gs() {
  for (var e = window, n = Lr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Lr(e.document);
  }
  return n;
}
function oo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gf(e) {
  var n = Gs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Xs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && oo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = au(t, i));
        var o = au(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Zf = Ke && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  mi = null,
  Pt = null,
  hi = !1;
function cu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  hi ||
    Un == null ||
    Un !== Lr(r) ||
    ((r = Un),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && $t(Pt, r)) ||
      ((Pt = r),
      (r = Ur(mi, "onSelect")),
      0 < r.length &&
        ((n = new ro("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Un))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var $n = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Rl = {},
  Zs = {};
Ke &&
  ((Zs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function ul(e) {
  if (Rl[e]) return Rl[e];
  if (!$n[e]) return e;
  var n = $n[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Zs) return (Rl[e] = n[t]);
  return e;
}
var Js = ul("animationend"),
  qs = ul("animationiteration"),
  bs = ul("animationstart"),
  ea = ul("transitionend"),
  na = new Map(),
  fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, n) {
  na.set(e, n), On(n, [e]);
}
for (var Ml = 0; Ml < fu.length; Ml++) {
  var Dl = fu[Ml],
    Jf = Dl.toLowerCase(),
    qf = Dl[0].toUpperCase() + Dl.slice(1);
  hn(Jf, "on" + qf);
}
hn(Js, "onAnimationEnd");
hn(qs, "onAnimationIteration");
hn(bs, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(ea, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));
function du(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Zc(r, n, void 0, e), (e.currentTarget = null);
}
function ta(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          du(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ci), (Rr = !1), (ci = null), e);
}
function I(e, n) {
  var t = n[Si];
  t === void 0 && (t = n[Si] = new Set());
  var r = e + "__bubble";
  t.has(r) || (ra(n, e, 2, !1), t.add(r));
}
function Il(e, n, t) {
  var r = 0;
  n && (r |= 4), ra(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      cs.forEach(function (t) {
        t !== "selectionchange" && (bf.has(t) || Il(t, !1, e), Il(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Il("selectionchange", !1, n));
  }
}
function ra(e, n, t, r) {
  switch (As(n)) {
    case 1:
      var l = pf;
      break;
    case 4:
      l = mf;
      break;
    default:
      l = no;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ai ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Fl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = xn(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ns(function () {
    var c = i,
      m = Ji(t),
      h = [];
    e: {
      var p = na.get(e);
      if (p !== void 0) {
        var w = ro,
          S = e;
        switch (e) {
          case "keypress":
            if (Cr(t) === 0) break e;
          case "keydown":
          case "keyup":
            w = zf;
            break;
          case "focusin":
            (S = "focus"), (w = Tl);
            break;
          case "focusout":
            (S = "blur"), (w = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Tl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = yf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Of;
            break;
          case Js:
          case qs:
          case bs:
            w = Sf;
            break;
          case ea:
            w = Mf;
            break;
          case "scroll":
            w = hf;
            break;
          case "wheel":
            w = If;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = tu;
        }
        var k = (n & 4) !== 0,
          M = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Mt(a, f)), y != null && k.push(Ht(a, y, d)))),
            M)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new w(p, S, null, t, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            t !== ui &&
            (S = t.relatedTarget || t.fromElement) &&
            (xn(S) || S[Ye]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((S = t.relatedTarget || t.toElement),
              (w = c),
              (S = S ? xn(S) : null),
              S !== null &&
                ((M = Rn(S)), S !== M || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = c)),
          w !== S)
        ) {
          if (
            ((k = eu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = tu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (M = w == null ? p : An(w)),
            (d = S == null ? p : An(S)),
            (p = new k(y, a + "leave", w, t, m)),
            (p.target = M),
            (p.relatedTarget = d),
            (y = null),
            xn(m) === c &&
              ((k = new k(f, a + "enter", S, t, m)),
              (k.target = d),
              (k.relatedTarget = M),
              (y = k)),
            (M = y),
            w && S)
          )
            n: {
              for (k = w, f = S, a = 0, d = k; d; d = Mn(d)) a++;
              for (d = 0, y = f; y; y = Mn(y)) d++;
              for (; 0 < a - d; ) (k = Mn(k)), a--;
              for (; 0 < d - a; ) (f = Mn(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break n;
                (k = Mn(k)), (f = Mn(f));
              }
              k = null;
            }
          else k = null;
          w !== null && pu(h, p, w, k, !1),
            S !== null && M !== null && pu(h, M, S, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? An(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var C = Bf;
        else if (iu(p))
          if (Ks) C = Yf;
          else {
            C = Qf;
            var _ = Wf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Kf);
        if (C && (C = C(e, c))) {
          Qs(h, C, t, m);
          break e;
        }
        _ && _(e, p, c),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            ti(p, "number", p.value);
      }
      switch (((_ = c ? An(c) : window), e)) {
        case "focusin":
          (iu(_) || _.contentEditable === "true") &&
            ((Un = _), (mi = c), (Pt = null));
          break;
        case "focusout":
          Pt = mi = Un = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), cu(h, t, m);
          break;
        case "selectionchange":
          if (Zf) break;
        case "keydown":
        case "keyup":
          cu(h, t, m);
      }
      var N;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Fn
          ? Bs(e, t) && (P = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Vs &&
          t.locale !== "ko" &&
          (Fn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Fn && (N = Hs())
            : ((tn = m),
              (to = "value" in tn ? tn.value : tn.textContent),
              (Fn = !0))),
        (_ = Ur(c, P)),
        0 < _.length &&
          ((P = new nu(P, e, null, t, m)),
          h.push({ event: P, listeners: _ }),
          N ? (P.data = N) : ((N = Ws(t)), N !== null && (P.data = N)))),
        (N = Uf ? $f(e, t) : Af(e, t)) &&
          ((c = Ur(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new nu("onBeforeInput", "beforeinput", null, t, m)),
            h.push({ event: m, listeners: c }),
            (m.data = N)));
    }
    ta(h, n);
  });
}
function Ht(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Mt(e, t)),
      i != null && r.unshift(Ht(e, i, l)),
      (i = Mt(e, n)),
      i != null && r.push(Ht(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Mt(t, i)), s != null && o.unshift(Ht(t, s, u)))
        : l || ((s = Mt(t, i)), s != null && o.push(Ht(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var ed = /\r\n?/g,
  nd = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ed,
      `
`
    )
    .replace(nd, "");
}
function dr(e, n, t) {
  if (((n = mu(n)), mu(e) !== n && t)) throw Error(g(425));
}
function $r() {}
var vi = null,
  yi = null;
function gi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  td = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  rd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(ld);
        }
      : wi;
function ld(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ft(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ft(n);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var st = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + st,
  Vt = "__reactProps$" + st,
  Ye = "__reactContainer$" + st,
  Si = "__reactEvents$" + st,
  id = "__reactListeners$" + st,
  od = "__reactHandles$" + st;
function xn(e) {
  var n = e[Ue];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ye] || t[Ue])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = vu(e); e !== null; ) {
          if ((t = e[Ue])) return t;
          e = vu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function qt(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function sl(e) {
  return e[Vt] || null;
}
var ki = [],
  Hn = -1;
function vn(e) {
  return { current: e };
}
function F(e) {
  0 > Hn || ((e.current = ki[Hn]), (ki[Hn] = null), Hn--);
}
function D(e, n) {
  Hn++, (ki[Hn] = e.current), (e.current = n);
}
var mn = {},
  ie = vn(mn),
  de = vn(!1),
  Pn = mn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  F(de), F(ie);
}
function yu(e, n, t) {
  if (ie.current !== mn) throw Error(g(168));
  D(ie, n), D(de, t);
}
function la(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Bc(e) || "Unknown", l));
  return H({}, t, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Pn = ie.current),
    D(ie, e),
    D(de, de.current),
    !0
  );
}
function gu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t
    ? ((e = la(e, n, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(ie),
      D(ie, e))
    : F(de),
    D(de, t);
}
var Ve = null,
  al = !1,
  $l = !1;
function ia(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function ud(e) {
  (al = !0), ia(e);
}
function yn() {
  if (!$l && Ve !== null) {
    $l = !0;
    var e = 0,
      n = R;
    try {
      var t = Ve;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (al = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ts(qi, yn), l);
    } finally {
      (R = n), ($l = !1);
    }
  }
  return null;
}
var Vn = [],
  Bn = 0,
  Vr = null,
  Br = 0,
  xe = [],
  Ce = 0,
  jn = null,
  Be = 1,
  We = "";
function Sn(e, n) {
  (Vn[Bn++] = Br), (Vn[Bn++] = Vr), (Vr = e), (Br = n);
}
function oa(e, n, t) {
  (xe[Ce++] = Be), (xe[Ce++] = We), (xe[Ce++] = jn), (jn = e);
  var r = Be;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Re(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - Re(n) + l)) | (t << l) | r),
      (We = i + e);
  } else (Be = (1 << i) | (t << l) | r), (We = e);
}
function uo(e) {
  e.return !== null && (Sn(e, 1), oa(e, 1, 0));
}
function so(e) {
  for (; e === Vr; )
    (Vr = Vn[--Bn]), (Vn[Bn] = null), (Br = Vn[--Bn]), (Vn[Bn] = null);
  for (; e === jn; )
    (jn = xe[--Ce]),
      (xe[Ce] = null),
      (We = xe[--Ce]),
      (xe[Ce] = null),
      (Be = xe[--Ce]),
      (xe[Ce] = null);
}
var ge = null,
  ye = null,
  U = !1,
  Oe = null;
function ua(e, n) {
  var t = Ee(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function wu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ge = e), (ye = sn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = jn !== null ? { id: Be, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ee(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ci(e) {
  if (U) {
    var n = ye;
    if (n) {
      var t = n;
      if (!wu(e, n)) {
        if (xi(e)) throw Error(g(418));
        n = sn(t.nextSibling);
        var r = ge;
        n && wu(e, n)
          ? ua(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (xi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function pr(e) {
  if (e !== ge) return !1;
  if (!U) return Su(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !gi(e.type, e.memoizedProps))),
    n && (n = ye))
  ) {
    if (xi(e)) throw (sa(), Error(g(418)));
    for (; n; ) ua(e, n), (n = sn(n.nextSibling));
  }
  if ((Su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ye = sn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function sa() {
  for (var e = ye; e; ) e = sn(e.nextSibling);
}
function nt() {
  (ye = ge = null), (U = !1);
}
function ao(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var sd = Ze.ReactCurrentBatchConfig;
function vt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function ku(e) {
  var n = e._init;
  return n(e._payload);
}
function aa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = dn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var C = d.type;
    return C === In
      ? m(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === qe &&
            ku(C) === a.type))
      ? ((y = l(a, d.props)), (y.ref = vt(f, a, d)), (y.return = f), y)
      : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = vt(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, y, C) {
    return a === null || a.tag !== 7
      ? ((a = Nn(d, f.mode, y, C)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vt(f, null, a)),
            (d.return = f),
            d
          );
        case Dn:
          return (a = Yl(a, f.mode, d)), (a.return = f), a;
        case qe:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (St(a) || ft(a))
        return (a = Nn(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var C = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === C ? s(f, a, d, y) : null;
        case Dn:
          return d.key === C ? c(f, a, d, y) : null;
        case qe:
          return (C = d._init), p(f, a, C(d._payload), y);
      }
      if (St(d) || ft(d)) return C !== null ? null : m(f, a, d, y, null);
      mr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(a, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case rr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, C);
        case Dn:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, C);
        case qe:
          var _ = y._init;
          return w(f, a, d, _(y._payload), C);
      }
      if (St(y) || ft(y)) return (f = f.get(d) || null), m(a, f, y, C, null);
      mr(a, y);
    }
    return null;
  }
  function S(f, a, d, y) {
    for (
      var C = null, _ = null, N = a, P = (a = 0), B = null;
      N !== null && P < d.length;
      P++
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var L = p(f, N, d[P], y);
      if (L === null) {
        N === null && (N = B);
        break;
      }
      e && N && L.alternate === null && n(f, N),
        (a = i(L, a, P)),
        _ === null ? (C = L) : (_.sibling = L),
        (_ = L),
        (N = B);
    }
    if (P === d.length) return t(f, N), U && Sn(f, P), C;
    if (N === null) {
      for (; P < d.length; P++)
        (N = h(f, d[P], y)),
          N !== null &&
            ((a = i(N, a, P)), _ === null ? (C = N) : (_.sibling = N), (_ = N));
      return U && Sn(f, P), C;
    }
    for (N = r(f, N); P < d.length; P++)
      (B = w(N, f, P, d[P], y)),
        B !== null &&
          (e && B.alternate !== null && N.delete(B.key === null ? P : B.key),
          (a = i(B, a, P)),
          _ === null ? (C = B) : (_.sibling = B),
          (_ = B));
    return (
      e &&
        N.forEach(function (je) {
          return n(f, je);
        }),
      U && Sn(f, P),
      C
    );
  }
  function k(f, a, d, y) {
    var C = ft(d);
    if (typeof C != "function") throw Error(g(150));
    if (((d = C.call(d)), d == null)) throw Error(g(151));
    for (
      var _ = (C = null), N = a, P = (a = 0), B = null, L = d.next();
      N !== null && !L.done;
      P++, L = d.next()
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var je = p(f, N, L.value, y);
      if (je === null) {
        N === null && (N = B);
        break;
      }
      e && N && je.alternate === null && n(f, N),
        (a = i(je, a, P)),
        _ === null ? (C = je) : (_.sibling = je),
        (_ = je),
        (N = B);
    }
    if (L.done) return t(f, N), U && Sn(f, P), C;
    if (N === null) {
      for (; !L.done; P++, L = d.next())
        (L = h(f, L.value, y)),
          L !== null &&
            ((a = i(L, a, P)), _ === null ? (C = L) : (_.sibling = L), (_ = L));
      return U && Sn(f, P), C;
    }
    for (N = r(f, N); !L.done; P++, L = d.next())
      (L = w(N, f, P, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? P : L.key),
          (a = i(L, a, P)),
          _ === null ? (C = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        N.forEach(function (at) {
          return n(f, at);
        }),
      U && Sn(f, P),
      C
    );
  }
  function M(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === In &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var C = d.key, _ = a; _ !== null; ) {
              if (_.key === C) {
                if (((C = d.type), C === In)) {
                  if (_.tag === 7) {
                    t(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === qe &&
                    ku(C) === _.type)
                ) {
                  t(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = vt(f, _, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === In
              ? ((a = Nn(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = vt(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Dn:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Yl(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case qe:
          return (_ = d._init), M(f, a, _(d._payload), y);
      }
      if (St(d)) return S(f, a, d, y);
      if (ft(d)) return k(f, a, d, y);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Kl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return M;
}
var tt = aa(!0),
  ca = aa(!1),
  Wr = vn(null),
  Qr = null,
  Wn = null,
  co = null;
function fo() {
  co = Wn = Qr = null;
}
function po(e) {
  var n = Wr.current;
  F(Wr), (e._currentValue = n);
}
function Ei(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  (Qr = e),
    (co = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var n = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
      if (Qr === null) throw Error(g(308));
      (Wn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return n;
}
var Cn = null;
function mo(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function fa(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), mo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Xe(e, r)
  );
}
function Xe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function da(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Xe(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), mo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Xe(e, t)
  );
}
function Er(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
function xu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            k = u;
          switch (((p = n), (w = t), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                h = S.call(w, h, p);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (p = typeof S == "function" ? S.call(w, h, p) : S),
                p == null)
              )
                break e;
              h = H({}, h, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = w), (s = h)) : (m = m.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Tn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Cu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bt = {},
  Ae = vn(bt),
  Bt = vn(bt),
  Wt = vn(bt);
function En(e) {
  if (e === bt) throw Error(g(174));
  return e;
}
function vo(e, n) {
  switch ((D(Wt, n), D(Bt, e), D(Ae, bt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = li(n, e));
  }
  F(Ae), D(Ae, n);
}
function rt() {
  F(Ae), F(Bt), F(Wt);
}
function pa(e) {
  En(Wt.current);
  var n = En(Ae.current),
    t = li(n, e.type);
  n !== t && (D(Bt, e), D(Ae, t));
}
function yo(e) {
  Bt.current === e && (F(Ae), F(Bt));
}
var $ = vn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Al = [];
function go() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var _r = Ze.ReactCurrentDispatcher,
  Hl = Ze.ReactCurrentBatchConfig,
  zn = 0,
  A = null,
  Y = null,
  Z = null,
  Xr = !1,
  jt = !1,
  Qt = 0,
  ad = 0;
function te() {
  throw Error(g(321));
}
function wo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!De(e[t], n[t])) return !1;
  return !0;
}
function So(e, n, t, r, l, i) {
  if (
    ((zn = i),
    (A = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? pd : md),
    (e = t(r, l)),
    jt)
  ) {
    i = 0;
    do {
      if (((jt = !1), (Qt = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (_r.current = hd),
        (e = t(r, l));
    } while (jt);
  }
  if (
    ((_r.current = Gr),
    (n = Y !== null && Y.next !== null),
    (zn = 0),
    (Z = Y = A = null),
    (Xr = !1),
    n)
  )
    throw Error(g(300));
  return e;
}
function ko() {
  var e = Qt !== 0;
  return (Qt = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Pe() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? A.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(g(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((zn & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (A.lanes |= m),
          (Tn |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      De(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Tn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Bl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    De(i, n.memoizedState) || (fe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function ma() {}
function ha(e, n) {
  var t = A,
    r = Pe(),
    l = n(),
    i = !De(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xo(ga.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Yt(9, ya.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(g(349));
    zn & 30 || va(t, n, l);
  }
  return l;
}
function va(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ya(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), wa(n) && Sa(e);
}
function ga(e, n, t) {
  return t(function () {
    wa(n) && Sa(e);
  });
}
function wa(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !De(e, t);
  } catch {
    return !0;
  }
}
function Sa(e) {
  var n = Xe(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function Eu(e) {
  var n = Fe();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = dd.bind(null, A, e)),
    [n.memoizedState, e]
  );
}
function Yt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ka() {
  return Pe().memoizedState;
}
function Nr(e, n, t, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function cl(e, n, t, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Yt(n, t, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Yt(1 | n, t, i, r));
}
function _u(e, n) {
  return Nr(8390656, 8, e, n);
}
function xo(e, n) {
  return cl(2048, 8, e, n);
}
function xa(e, n) {
  return cl(4, 2, e, n);
}
function Ca(e, n) {
  return cl(4, 4, e, n);
}
function Ea(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function _a(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), cl(4, 4, Ea.bind(null, n, e), t)
  );
}
function Co() {}
function Na(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Pa(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function ja(e, n, t) {
  return zn & 21
    ? (De(t, n) || ((t = Rs()), (A.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t));
}
function cd(e, n) {
  var t = R;
  (R = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), n();
  } finally {
    (R = t), (Hl.transition = r);
  }
}
function za() {
  return Pe().memoizedState;
}
function fd(e, n, t) {
  var r = fn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ta(e))
  )
    La(n, t);
  else if (((t = fa(e, n, t, r)), t !== null)) {
    var l = ue();
    Me(t, e, r, l), Oa(t, n, r);
  }
}
function dd(e, n, t) {
  var r = fn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) La(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), mo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = fa(e, n, l, r)),
      t !== null && ((l = ue()), Me(t, e, r, l), Oa(t, n, r));
  }
}
function Ta(e) {
  var n = e.alternate;
  return e === A || (n !== null && n === A);
}
function La(e, n) {
  jt = Xr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Oa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
var Gr = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  pd = {
    readContext: Ne,
    useCallback: function (e, n) {
      return (Fe().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ne,
    useEffect: _u,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Nr(4194308, 4, Ea.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Nr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Nr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Fe();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Fe();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = fd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Fe();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: Co,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        n = e[0];
      return (e = cd.bind(null, e[1])), (Fe().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = A,
        l = Fe();
      if (U) {
        if (t === void 0) throw Error(g(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(g(349));
        zn & 30 || va(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        _u(ga.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yt(9, ya.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Fe(),
        n = q.identifierPrefix;
      if (U) {
        var t = We,
          r = Be;
        (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Qt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = ad++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: Ne,
    useCallback: Na,
    useContext: Ne,
    useEffect: xo,
    useImperativeHandle: _a,
    useInsertionEffect: xa,
    useLayoutEffect: Ca,
    useMemo: Pa,
    useReducer: Vl,
    useRef: ka,
    useState: function () {
      return Vl(Kt);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = Pe();
      return ja(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Kt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: ma,
    useSyncExternalStore: ha,
    useId: za,
    unstable_isNewReconciler: !1,
  },
  hd = {
    readContext: Ne,
    useCallback: Na,
    useContext: Ne,
    useEffect: xo,
    useImperativeHandle: _a,
    useInsertionEffect: xa,
    useLayoutEffect: Ca,
    useMemo: Pa,
    useReducer: Bl,
    useRef: ka,
    useState: function () {
      return Bl(Kt);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = Pe();
      return Y === null ? (n.memoizedState = e) : ja(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: ma,
    useSyncExternalStore: ha,
    useId: za,
    unstable_isNewReconciler: !1,
  };
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = H({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function _i(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : H({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      i = Qe(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (Me(n, e, l, r), Er(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (Me(n, e, l, r), Er(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ue(),
      r = fn(e),
      l = Qe(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = an(e, l, r)),
      n !== null && (Me(n, e, r, t), Er(n, e, r));
  },
};
function Nu(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !$t(t, r) || !$t(l, i)
      : !0
  );
}
function Ra(e, n, t) {
  var r = !1,
    l = mn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(n) ? Pn : ie.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? et(e, l) : mn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = fl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Pu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && fl.enqueueReplaceState(n, n.state, null);
}
function Ni(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), ho(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(n) ? Pn : ie.current), (l.context = et(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (_i(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Kr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Vc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Pi(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var vd = typeof WeakMap == "function" ? WeakMap : Map;
function Ma(e, n, t) {
  (t = Qe(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Jr || ((Jr = !0), (Fi = r)), Pi(e, n);
    }),
    t
  );
}
function Da(e, n, t) {
  (t = Qe(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Pi(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Pi(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function ju(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Td.bind(null, e, n, t)), n.then(e, e));
}
function zu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Qe(-1, 1)), (n.tag = 2), an(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var yd = Ze.ReactCurrentOwner,
  fe = !1;
function oe(e, n, t, r) {
  n.child = e === null ? ca(n, null, t, r) : tt(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Jn(n, l),
    (r = So(e, n, t, r, i, l)),
    (t = ko()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (U && t && uo(n), (n.flags |= 1), oe(e, n, r, l), n.child)
  );
}
function Ou(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Lo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ia(e, n, i, r, l))
      : ((e = Tr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : $t), t(o, r) && e.ref === n.ref)
    )
      return Ge(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = dn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ia(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($t(i, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (n.lanes = e.lanes), Ge(e, n, l);
  }
  return ji(e, n, t, r, l);
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kn, he),
        (he |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          D(Kn, he),
          (he |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        D(Kn, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      D(Kn, he),
      (he |= r);
  return oe(e, n, l, t), n.child;
}
function Ua(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function ji(e, n, t, r, l) {
  var i = pe(t) ? Pn : ie.current;
  return (
    (i = et(n, i)),
    Jn(n, l),
    (t = So(e, n, t, r, i, l)),
    (r = ko()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (U && r && uo(n), (n.flags |= 1), oe(e, n, t, l), n.child)
  );
}
function Ru(e, n, t, r, l) {
  if (pe(t)) {
    var i = !0;
    Hr(n);
  } else i = !1;
  if ((Jn(n, l), n.stateNode === null))
    Pr(e, n), Ra(n, t, r), Ni(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(t) ? Pn : ie.current), (c = et(n, c)));
    var m = t.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Pu(n, o, r, c)),
      (be = !1);
    var p = n.memoizedState;
    (o.state = p),
      Kr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || p !== s || de.current || be
        ? (typeof m == "function" && (_i(n, t, m, r), (s = n.memoizedState)),
          (u = be || Nu(n, t, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      da(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : Te(n.type, u)),
      (o.props = c),
      (h = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(t) ? Pn : ie.current), (s = et(n, s)));
    var w = t.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Pu(n, o, r, s)),
      (be = !1),
      (p = n.memoizedState),
      (o.state = p),
      Kr(n, r, o, l);
    var S = n.memoizedState;
    u !== h || p !== S || de.current || be
      ? (typeof w == "function" && (_i(n, t, w, r), (S = n.memoizedState)),
        (c = be || Nu(n, t, c, r, p, S, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return zi(e, n, t, r, i, l);
}
function zi(e, n, t, r, l, i) {
  Ua(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && gu(n, t, !1), Ge(e, n, i);
  (r = n.stateNode), (yd.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = tt(n, e.child, null, i)), (n.child = tt(n, null, u, i)))
      : oe(e, n, u, i),
    (n.memoizedState = r.state),
    l && gu(n, t, !0),
    n.child
  );
}
function $a(e) {
  var n = e.stateNode;
  n.pendingContext
    ? yu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && yu(e, n.context, !1),
    vo(e, n.containerInfo);
}
function Mu(e, n, t, r, l) {
  return nt(), ao(l), (n.flags |= 256), oe(e, n, t, r), n.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D($, l & 1),
    e === null)
  )
    return (
      Ci(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = Nn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Li(t)),
              (n.memoizedState = Ti),
              e)
            : Eo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return gd(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = dn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dn(u, i)) : ((i = Nn(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Li(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ti),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Eo(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && ao(r),
    tt(n, e.child, null, t),
    (e = Eo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function gd(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Wl(Error(g(422)))), hr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && tt(n, e.child, null, o),
        (n.child.memoizedState = Li(o)),
        (n.memoizedState = Ti),
        i);
  if (!(n.mode & 1)) return hr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Wl(i, r, void 0)), hr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Me(r, e, l, -1));
    }
    return To(), (r = Wl(Error(g(421)))), hr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Ld.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (ye = sn(l.nextSibling)),
      (ge = n),
      (U = !0),
      (Oe = null),
      e !== null &&
        ((xe[Ce++] = Be),
        (xe[Ce++] = We),
        (xe[Ce++] = jn),
        (Be = e.id),
        (We = e.overflow),
        (jn = n)),
      (n = Eo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Du(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ei(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Ha(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, n, r.children, t), (r = $.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Du(e, t, n);
        else if (e.tag === 19) Du(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Yr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, i);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Pr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ge(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (
      e = n.child, t = dn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = dn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function wd(e, n, t) {
  switch (n.tag) {
    case 3:
      $a(n), nt();
      break;
    case 5:
      pa(n);
      break;
    case 1:
      pe(n.type) && Hr(n);
      break;
    case 4:
      vo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      D(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Aa(e, n, t)
          : (D($, $.current & 1),
            (e = Ge(e, n, t)),
            e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ha(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Fa(e, n, t);
  }
  return Ge(e, n, t);
}
var Va, Oi, Ba, Wa;
Va = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Oi = function () {};
Ba = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), En(Ae.current);
    var i = null;
    switch (t) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    ii(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ot.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ot.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && I("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Wa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Sd(e, n, t) {
  var r = n.pendingProps;
  switch ((so(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(n), null;
    case 1:
      return pe(n.type) && Ar(), re(n), null;
    case 3:
      return (
        (r = n.stateNode),
        rt(),
        F(de),
        F(ie),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Oe !== null && (Ai(Oe), (Oe = null)))),
        Oi(e, n),
        re(n),
        null
      );
    case 5:
      yo(n);
      var l = En(Wt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ba(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return re(n), null;
        }
        if (((e = En(Ae.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Ue] = n), (r[Vt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xt.length; l++) I(xt[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Wo(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Ko(r, i), I("invalid", r);
          }
          ii(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ot.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (t) {
            case "input":
              lr(r), Qo(r, i, !0);
              break;
            case "textarea":
              lr(r), Yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gs(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ue] = n),
            (e[Vt] = r),
            Va(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = oi(t, r)), t)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xt.length; l++) I(xt[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Wo(e, r), (l = ei(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                Ko(e, r), (l = ri(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            ii(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ks(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ws(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Rt(e, s)
                    : typeof s == "number" && Rt(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ot.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && I("scroll", e)
                      : s != null && Yi(e, i, s, o));
              }
            switch (t) {
              case "input":
                lr(e), Qo(e, r, !1);
                break;
              case "textarea":
                lr(e), Yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return re(n), null;
    case 6:
      if (e && n.stateNode != null) Wa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (((t = En(Wt.current)), En(Ae.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ue] = n),
            (i = r.nodeValue !== t) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ue] = n),
            (n.stateNode = r);
      }
      return re(n), null;
    case 13:
      if (
        (F($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ye !== null && n.mode & 1 && !(n.flags & 128))
          sa(), nt(), (n.flags |= 98560), (i = !1);
        else if (((i = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ue] = n;
          } else
            nt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          re(n), (i = !1);
        } else Oe !== null && (Ai(Oe), (Oe = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : To())),
          n.updateQueue !== null && (n.flags |= 4),
          re(n),
          null);
    case 4:
      return (
        rt(), Oi(e, n), e === null && At(n.stateNode.containerInfo), re(n), null
      );
    case 10:
      return po(n.type._context), re(n), null;
    case 17:
      return pe(n.type) && Ar(), re(n), null;
    case 19:
      if ((F($), (i = n.memoizedState), i === null)) return re(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Yr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    yt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return D($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > it &&
            ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              yt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return re(n), null;
          } else
            2 * Q() - i.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Q()),
          (n.sibling = null),
          (t = $.current),
          D($, r ? (t & 1) | 2 : t & 1),
          n)
        : (re(n), null);
    case 22:
    case 23:
      return (
        zo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? he & 1073741824 && (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : re(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function kd(e, n) {
  switch ((so(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Ar(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        rt(),
        F(de),
        F(ie),
        go(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return yo(n), null;
    case 13:
      if ((F($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(g(340));
        nt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return F($), null;
    case 4:
      return rt(), null;
    case 10:
      return po(n.type._context), null;
    case 22:
    case 23:
      return zo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  xd = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function Ri(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Iu = !1;
function Cd(e, n) {
  if (((vi = Ir), (e = Gs()), oo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var w;
              h !== t || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break n;
              if (
                (p === t && ++c === l && (u = o),
                p === i && ++m === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (yi = { focusedElem: e, selectionRange: t }, Ir = !1, x = n; x !== null; )
    if (((n = x), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (x = e);
    else
      for (; x !== null; ) {
        n = x;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    M = S.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Te(n.type, k),
                      M
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          V(n, n.return, y);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (x = e);
          break;
        }
        x = n.return;
      }
  return (S = Iu), (Iu = !1), S;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ri(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Mi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Qa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Qa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ue], delete n[Vt], delete n[Si], delete n[id], delete n[od])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ka(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ka(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Di(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Di(e, n, t), e = e.sibling; e !== null; ) Di(e, n, t), (e = e.sibling);
}
function Ii(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, n, t), e = e.sibling; e !== null; ) Ii(e, n, t), (e = e.sibling);
}
var b = null,
  Le = !1;
function Je(e, n, t) {
  for (t = t.child; t !== null; ) Ya(e, n, t), (t = t.sibling);
}
function Ya(e, n, t) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      le || Qn(t, n);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Je(e, n, t),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, t)
              : e.nodeType === 1 && Ul(e, t),
            Ft(e))
          : Ul(b, t.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = t.stateNode.containerInfo),
        (Le = !0),
        Je(e, n, t),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ri(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, n, t);
      break;
    case 1:
      if (
        !le &&
        (Qn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Je(e, n, t);
      break;
    case 21:
      Je(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((le = (r = le) || t.memoizedState !== null), Je(e, n, t), (le = r))
        : Je(e, n, t);
      break;
    default:
      Je(e, n, t);
  }
}
function Uu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new xd()),
      n.forEach(function (r) {
        var l = Od.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Le = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(g(160));
        Ya(i, o, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Xa(n, e), (n = n.sibling);
}
function Xa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), Ie(e), r & 4)) {
        try {
          zt(3, e, e.return), dl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          zt(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(n, e), Ie(e), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        Ie(e),
        r & 512 && t !== null && Qn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rt(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && vs(l, i),
              oi(u, o);
            var c = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? ks(l, h)
                : m === "dangerouslySetInnerHTML"
                ? ws(l, h)
                : m === "children"
                ? Rt(l, h)
                : Yi(l, m, h, c);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                ys(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Yn(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(l, !!i.multiple, i.defaultValue, !0)
                      : Yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Vt] = i;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(n, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ft(n.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      ze(n, e), Ie(e);
      break;
    case 13:
      ze(n, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Po = Q())),
        r & 4 && Uu(e);
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || m), ze(n, e), (le = c)) : ze(n, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (x = e, m = e.child; m !== null; ) {
            for (h = x = m; x !== null; ) {
              switch (((p = x), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Qn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      V(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Qn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Au(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (x = w)) : Au(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ss("display", o)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), Ie(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), Ie(e);
  }
}
function Ie(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ka(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rt(l, ""), (r.flags &= -33));
          var i = Fu(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Fu(e);
          Di(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Ed(e, n, t) {
  (x = e), Ga(e);
}
function Ga(e, n, t) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = vr;
        var c = le;
        if (((vr = o), (le = s) && !c))
          for (x = l; x !== null; )
            (o = x),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Hu(l)
                : s !== null
                ? ((s.return = o), (x = s))
                : Hu(l);
        for (; i !== null; ) (x = i), Ga(i), (i = i.sibling);
        (x = l), (vr = u), (le = c);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : $u(e);
  }
}
function $u(e) {
  for (; x !== null; ) {
    var n = x;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !le)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Cu(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Cu(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Ft(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        le || (n.flags & 512 && Mi(n));
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      x = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (x = t);
      break;
    }
    x = n.return;
  }
}
function Au(e) {
  for (; x !== null; ) {
    var n = x;
    if (n === e) {
      x = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (x = t);
      break;
    }
    x = n.return;
  }
}
function Hu(e) {
  for (; x !== null; ) {
    var n = x;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var i = n.return;
          try {
            Mi(n);
          } catch (s) {
            V(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Mi(n);
          } catch (s) {
            V(n, o, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      x = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (x = u);
      break;
    }
    x = n.return;
  }
}
var _d = Math.ceil,
  Zr = Ze.ReactCurrentDispatcher,
  _o = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  O = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Kn = vn(0),
  X = 0,
  Xt = null,
  Tn = 0,
  pl = 0,
  No = 0,
  Tt = null,
  ce = null,
  Po = 0,
  it = 1 / 0,
  He = null,
  Jr = !1,
  Fi = null,
  cn = null,
  yr = !1,
  rn = null,
  qr = 0,
  Lt = 0,
  Ui = null,
  jr = -1,
  zr = 0;
function ue() {
  return O & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function fn(e) {
  return e.mode & 1
    ? O & 2 && ee !== 0
      ? ee & -ee
      : sd.transition !== null
      ? (zr === 0 && (zr = Rs()), zr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : As(e.type))),
        e)
    : 1;
}
function Me(e, n, t, r) {
  if (50 < Lt) throw ((Lt = 0), (Ui = null), Error(g(185)));
  Zt(e, t, r),
    (!(O & 2) || e !== q) &&
      (e === q && (!(O & 2) && (pl |= t), X === 4 && nn(e, ee)),
      me(e, r),
      t === 1 && O === 0 && !(n.mode & 1) && ((it = Q() + 500), al && yn()));
}
function me(e, n) {
  var t = e.callbackNode;
  sf(e, n);
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0)
    t !== null && Zo(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Zo(t), n === 1))
      e.tag === 0 ? ud(Vu.bind(null, e)) : ia(Vu.bind(null, e)),
        rd(function () {
          !(O & 6) && yn();
        }),
        (t = null);
    else {
      switch (Ms(r)) {
        case 1:
          t = qi;
          break;
        case 4:
          t = Ls;
          break;
        case 16:
          t = Mr;
          break;
        case 536870912:
          t = Os;
          break;
        default:
          t = Mr;
      }
      t = rc(t, Za.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Za(e, n) {
  if (((jr = -1), (zr = 0), O & 6)) throw Error(g(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t) return null;
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var i = qa();
    (q !== e || ee !== n) && ((He = null), (it = Q() + 500), _n(e, n));
    do
      try {
        jd();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    fo(),
      (Zr.current = i),
      (O = l),
      K !== null ? (n = 0) : ((q = null), (ee = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = fi(e)), l !== 0 && ((r = l), (n = $i(e, l)))), n === 1)
    )
      throw ((t = Xt), _n(e, 0), nn(e, r), me(e, Q()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Nd(l) &&
          ((n = br(e, r)),
          n === 2 && ((i = fi(e)), i !== 0 && ((r = i), (n = $i(e, i)))),
          n === 1))
      )
        throw ((t = Xt), _n(e, 0), nn(e, r), me(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          kn(e, ce, He);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = Po + 500 - Q()), 10 < n))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(kn.bind(null, e, ce, He), n);
            break;
          }
          kn(e, ce, He);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * _d(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(kn.bind(null, e, ce, He), r);
            break;
          }
          kn(e, ce, He);
          break;
        case 5:
          kn(e, ce, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === t ? Za.bind(null, e) : null;
}
function $i(e, n) {
  var t = Tt;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
    (e = br(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Ai(n)),
    e
  );
}
function Ai(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Nd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!De(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~No,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Re(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Vu(e) {
  if (O & 6) throw Error(g(327));
  qn();
  var n = Dr(e, 0);
  if (!(n & 1)) return me(e, Q()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fi(e);
    r !== 0 && ((n = r), (t = $i(e, r)));
  }
  if (t === 1) throw ((t = Xt), _n(e, 0), nn(e, n), me(e, Q()), t);
  if (t === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    kn(e, ce, He),
    me(e, Q()),
    null
  );
}
function jo(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    (O = t), O === 0 && ((it = Q() + 500), al && yn());
  }
}
function Ln(e) {
  rn !== null && rn.tag === 0 && !(O & 6) && qn();
  var n = O;
  O |= 1;
  var t = _e.transition,
    r = R;
  try {
    if (((_e.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (_e.transition = t), (O = n), !(O & 6) && yn();
  }
}
function zo() {
  (he = Kn.current), F(Kn);
}
function _n(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), td(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          rt(), F(de), F(ie), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          zo();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (K = e = dn(e.current, null)),
    (ee = he = n),
    (X = 0),
    (Xt = null),
    (No = pl = Tn = 0),
    (ce = Tt = null),
    Cn !== null)
  ) {
    for (n = 0; n < Cn.length; n++)
      if (((t = Cn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    Cn = null;
  }
  return e;
}
function Ja(e, n) {
  do {
    var t = K;
    try {
      if ((fo(), (_r.current = Gr), Xr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((zn = 0),
        (Z = Y = A = null),
        (jt = !1),
        (Qt = 0),
        (_o.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Xt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = zu(o);
          if (w !== null) {
            (w.flags &= -257),
              Tu(w, o, u, i, n),
              w.mode & 1 && ju(i, c, n),
              (n = w),
              (s = c);
            var S = n.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else S.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              ju(i, c, n), To();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var M = zu(o);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              Tu(M, o, u, i, n),
              ao(lt(s, u));
            break e;
          }
        }
        (i = s = lt(s, u)),
          X !== 4 && (X = 2),
          Tt === null ? (Tt = [i]) : Tt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Ma(i, s, n);
              xu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (cn === null || !cn.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var y = Da(i, u, n);
                xu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ec(t);
    } catch (C) {
      (n = C), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = Zr.current;
  return (Zr.current = Gr), e === null ? Gr : e;
}
function To() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Tn & 268435455) && !(pl & 268435455)) || nn(q, ee);
}
function br(e, n) {
  var t = O;
  O |= 2;
  var r = qa();
  (q !== e || ee !== n) && ((He = null), _n(e, n));
  do
    try {
      Pd();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if ((fo(), (O = t), (Zr.current = r), K !== null)) throw Error(g(261));
  return (q = null), (ee = 0), X;
}
function Pd() {
  for (; K !== null; ) ba(K);
}
function jd() {
  for (; K !== null && !qc(); ) ba(K);
}
function ba(e) {
  var n = tc(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    n === null ? ec(e) : (K = n),
    (_o.current = null);
}
function ec(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = kd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = Sd(t, n, he)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function kn(e, n, t) {
  var r = R,
    l = _e.transition;
  try {
    (_e.transition = null), (R = 1), zd(e, n, t, r);
  } finally {
    (_e.transition = l), (R = r);
  }
  return null;
}
function zd(e, n, t, r) {
  do qn();
  while (rn !== null);
  if (O & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (af(e, i),
    e === q && ((K = q = null), (ee = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      rc(Mr, function () {
        return qn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = R;
    R = 1;
    var u = O;
    (O |= 4),
      (_o.current = null),
      Cd(e, t),
      Xa(t, e),
      Gf(yi),
      (Ir = !!vi),
      (yi = vi = null),
      (e.current = t),
      Ed(t),
      bc(),
      (O = u),
      (R = o),
      (_e.transition = i);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (rn = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    tf(t.stateNode),
    me(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Fi), (Fi = null), e);
  return (
    qr & 1 && e.tag !== 0 && qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ui ? Lt++ : ((Lt = 0), (Ui = e))) : (Lt = 0),
    yn(),
    null
  );
}
function qn() {
  if (rn !== null) {
    var e = Ms(qr),
      n = _e.transition,
      t = R;
    try {
      if (((_e.transition = null), (R = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (qr = 0), O & 6)) throw Error(g(331));
        var l = O;
        for (O |= 4, x = e.current; x !== null; ) {
          var i = x,
            o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var m = x;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (x = h);
                  else
                    for (; x !== null; ) {
                      m = x;
                      var p = m.sibling,
                        w = m.return;
                      if ((Qa(m), m === c)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (x = p);
                        break;
                      }
                      x = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var M = k.sibling;
                    (k.sibling = null), (k = M);
                  } while (k !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (x = f);
                break e;
              }
              x = i.return;
            }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
          else
            e: for (o = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (C) {
                  V(u, u.return, C);
                }
              if (u === o) {
                x = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (x = y);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((O = l), yn(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = t), (_e.transition = n);
    }
  }
  return !1;
}
function Bu(e, n, t) {
  (n = lt(t, n)),
    (n = Ma(e, n, 1)),
    (e = an(e, n, 1)),
    (n = ue()),
    e !== null && (Zt(e, 1, n), me(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) Bu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Bu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = lt(t, e)),
            (e = Da(n, e, 1)),
            (n = an(n, e, 1)),
            (e = ue()),
            n !== null && (Zt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Td(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ue()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Q() - Po)
        ? _n(e, 0)
        : (No |= t)),
    me(e, n);
}
function nc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (n = 1));
  var t = ue();
  (e = Xe(e, n)), e !== null && (Zt(e, n, t), me(e, t));
}
function Ld(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), nc(e, t);
}
function Od(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(n), nc(e, t);
}
var tc;
tc = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (fe = !1), wd(e, n, t);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && n.flags & 1048576 && oa(n, Br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Pr(e, n), (e = n.pendingProps);
      var l = et(n, ie.current);
      Jn(n, t), (l = So(null, n, r, e, l, t));
      var i = ko();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((i = !0), Hr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(n),
            (l.updater = fl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ni(n, r, e, t),
            (n = zi(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && uo(n), oe(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Pr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Md(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = ji(null, n, r, e, t);
            break e;
          case 1:
            n = Ru(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = Ou(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        ji(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Ru(e, n, r, l, t)
      );
    case 3:
      e: {
        if (($a(n), e === null)) throw Error(g(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          da(e, n),
          Kr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = lt(Error(g(423)), n)), (n = Mu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = lt(Error(g(424)), n)), (n = Mu(e, n, r, t, l));
            break e;
          } else
            for (
              ye = sn(n.stateNode.containerInfo.firstChild),
                ge = n,
                U = !0,
                Oe = null,
                t = ca(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((nt(), r === l)) {
            n = Ge(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        pa(n),
        e === null && Ci(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (n.flags |= 32),
        Ua(e, n),
        oe(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && Ci(n), null;
    case 13:
      return Aa(e, n, t);
    case 4:
      return (
        vo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = tt(n, null, r, t)) : oe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Lu(e, n, r, l, t)
      );
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          D(Wr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (De(i.value, o)) {
            if (i.children === l.children && !de.current) {
              n = Ge(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Ei(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  Ei(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Jn(n, t),
        (l = Ne(l)),
        (r = r(l)),
        (n.flags |= 1),
        oe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Te(r, n.pendingProps)),
        (l = Te(r.type, l)),
        Ou(e, n, r, l, t)
      );
    case 15:
      return Ia(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Pr(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Hr(n)) : (e = !1),
        Jn(n, t),
        Ra(n, r, l),
        Ni(n, r, l, t),
        zi(null, n, r, !0, e, t)
      );
    case 19:
      return Ha(e, n, t);
    case 22:
      return Fa(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function rc(e, n) {
  return Ts(e, n);
}
function Rd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, n, t, r) {
  return new Rd(e, n, t, r);
}
function Lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Md(e) {
  if (typeof e == "function") return Lo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function dn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ee(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Tr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Lo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case In:
        return Nn(t.children, l, i, n);
      case Xi:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Ee(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = i), e
        );
      case Jl:
        return (e = Ee(13, t, n, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = Ee(19, t, n, l)), (e.elementType = ql), (e.lanes = i), e;
      case ps:
        return ml(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fs:
              o = 10;
              break e;
            case ds:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Zi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ee(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Nn(e, n, t, r) {
  return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ee(22, e, r, n)),
    (e.elementType = ps),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Dd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oo(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new Dd(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Ee(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Id(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function lc(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(g(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return la(e, t, n);
  }
  return n;
}
function ic(e, n, t, r, l, i, o, u, s) {
  return (
    (e = Oo(t, r, !0, e, l, i, o, u, s)),
    (e.context = lc(null)),
    (t = e.current),
    (r = ue()),
    (l = fn(t)),
    (i = Qe(r, l)),
    (i.callback = n ?? null),
    an(t, i, l),
    (e.current.lanes = l),
    Zt(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, n, t, r) {
  var l = n.current,
    i = ue(),
    o = fn(l);
  return (
    (t = lc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Qe(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = an(l, n, o)),
    e !== null && (Me(e, l, o, i), Er(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ro(e, n) {
  Wu(e, n), (e = e.alternate) && Wu(e, n);
}
function Fd() {
  return null;
}
var oc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mo(e) {
  this._internalRoot = e;
}
vl.prototype.render = Mo.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Mo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function () {
      hl(null, e, null, null);
    }),
      (n[Ye] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Fs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && $s(e);
  }
};
function Do(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qu() {}
function Ud(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = ic(n, r, e, 0, null, !1, !1, "", Qu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      At(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Oo(e, 0, !1, null, null, !1, !1, "", Qu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      hl(n, s, t, r);
    }),
    s
  );
}
function gl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    hl(n, o, e, l);
  } else o = Ud(t, n, e, l, r);
  return el(o);
}
Ds = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (bi(n, t | 1), me(n, Q()), !(O & 6) && ((it = Q() + 500), yn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var n = Xe(e, 134217728);
    if (n !== null) {
      var t = ue();
      Me(n, e, 134217728, t);
    }
    Ro(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var n = fn(e),
      t = Xe(e, n);
    if (t !== null) {
      var r = ue();
      Me(t, e, n, r);
    }
    Ro(e, n);
  }
};
Fs = function () {
  return R;
};
Us = function (e, n) {
  var t = R;
  try {
    return (R = e), n();
  } finally {
    R = t;
  }
};
si = function (e, n, t) {
  switch (n) {
    case "input":
      if ((ni(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(g(90));
            hs(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      ys(e, t);
      break;
    case "select":
      (n = t.value), n != null && Yn(e, !!t.multiple, n, !1);
  }
};
Es = jo;
_s = Ln;
var $d = { usingClientEntryPoint: !1, Events: [qt, An, sl, xs, Cs, jo] },
  gt = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ad = {
    bundleType: gt.bundleType,
    version: gt.version,
    rendererPackageName: gt.rendererPackageName,
    rendererConfig: gt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = js(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gt.findFiberByHostInstance || Fd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (ll = gr.inject(Ad)), ($e = gr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
Se.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Do(n)) throw Error(g(200));
  return Id(e, n, null, t);
};
Se.createRoot = function (e, n) {
  if (!Do(e)) throw Error(g(299));
  var t = !1,
    r = "",
    l = oc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Oo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ye] = n.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    new Mo(n)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = js(n)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ln(e);
};
Se.hydrate = function (e, n, t) {
  if (!yl(n)) throw Error(g(200));
  return gl(null, e, n, !0, t);
};
Se.hydrateRoot = function (e, n, t) {
  if (!Do(e)) throw Error(g(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = oc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = ic(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Ye] = n.current),
    At(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new vl(n);
};
Se.render = function (e, n, t) {
  if (!yl(n)) throw Error(g(200));
  return gl(null, e, n, !1, t);
};
Se.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Ln(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = jo;
Se.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!yl(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return gl(e, n, t, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), (us.exports = Se);
var Hd = us.exports,
  sc,
  Ku = Hd;
(sc = Ku.createRoot), Ku.hydrateRoot;
const ac = "/projects/coffeecount/assets/cup-D552bq0l.svg",
  Vd = ({ onShowDisclaimerModal: e }) => {
    const [n, t] = J.useState(!1),
      r = () => {
        t((i) => !i);
      },
      l = () => {
        t(!1);
      };
    return v.jsx("div", {
      className:
        "fixed top-0 w-full border-b-2 border-primary font-bold bg-secondary",
      children: v.jsxs("nav", {
        className: "relative flex justify-between items-center p-4",
        children: [
          v.jsx("p", { children: "CoffeeCount" }),
          v.jsx("div", {
            onClick: r,
            className: "w-8 lg:hidden cursor-pointer",
            children: v.jsx("img", { src: ac, alt: "White image of a cup" }),
          }),
          v.jsxs("ul", {
            className: `lg:flex lg:flex-row lg:gap-8 lg:static lg:shadow-none lg:bg-transparent lg:border-none lg:space-y-0 lg:py-0 
            absolute z-10 top-20 left-0 w-full flex flex-col justify-end items-center py-8 space-y-8 gap-4 border-b-2 shadow-md bg-secondary transition-all duration-300 ease-in-out ${
              n
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
            } overflow-hidden`,
            children: [
              v.jsx("li", {
                onClick: () => {
                  l(), e();
                },
                className: "cursor-pointer",
                children: "Disclaimer",
              }),
              v.jsx("li", {
                onClick: l,
                children: v.jsx("a", {
                  href: "https://www.efsa.europa.eu/en/topics/topic/caffeine",
                  target: "_blank",
                  children: "Recommendation source",
                }),
              }),
              v.jsx("li", {
                onClick: l,
                children: v.jsx("a", {
                  href: "https://en.wikipedia.org/wiki/Coffee",
                  target: "_blank",
                  children: "Coffee Wiki",
                }),
              }),
              v.jsx("li", {
                onClick: l,
                children: v.jsx("a", {
                  href: "https://github.com/frankemon",
                  target: "_blank",
                  children: "My GitHub",
                }),
              }),
              v.jsx("li", {
                onClick: l,
                children: v.jsx("a", {
                  href: "https://frankemon.github.io/",
                  target: "_blank",
                  children: "More from me",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Bd = ({ onRecommendedCaffeineChange: e }) => {
    const [n, t] = J.useState(0),
      r = (l) => {
        const i = l * 3;
        t(i), e(i);
      };
    return v.jsxs("div", {
      className: "flex flex-col items-start w-full gap-4",
      children: [
        v.jsx(Wd, { onCalculate: r }),
        v.jsx(Qd, { recommendedCaffeine: n }),
      ],
    });
  },
  Wd = ({ onCalculate: e }) => {
    const [n, t] = J.useState(0),
      r = (i) => {
        t(Number(i.target.value));
      },
      l = (i) => {
        i.preventDefault(), e(n);
      };
    return v.jsx("div", {
      className: "w-full",
      children: v.jsxs("form", {
        onSubmit: l,
        className: "w-full",
        children: [
          v.jsx("label", {
            htmlFor: "weight",
            className: "",
            children: "Your weight:",
          }),
          v.jsxs("div", {
            className: "flex flex-col sm:flex-row w-full gap-4 sm:gap-2",
            children: [
              v.jsx("input", {
                type: "number",
                onChange: r,
                className:
                  "rounded-md p-2 bg-secondary border-2 border-primary text-primary",
              }),
              v.jsx("button", {
                type: "submit",
                disabled: n === 0,
                className:
                  "bg-secondary text-primary p-2 border-2 border-primary rounded-md cursor-pointer",
                children: "Calculate",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Qd = ({ recommendedCaffeine: e }) =>
    v.jsx("div", {
      className: "w-full text-center",
      children:
        e === 0
          ? v.jsx("p", { children: "Please fill in your weight!" })
          : v.jsxs("p", {
              children: ["Your recommended daily intake is: ", e, "mg"],
            }),
    }),
  Kd = ({
    recommendedCaffeine: e,
    totalCaffeine: n,
    totalServings: t,
    onTotalCaffeineChange: r,
    onServingsChange: l,
    onAddCaffeine: i,
  }) => {
    const o = (s) => {
        if (e === 0) return;
        const c = n + s,
          m = t + 1;
        r(c), l(m), i();
      },
      u = (s) => {
        if (t === 0 || s === 0) return;
        let c = n - s;
        const m = t - 1;
        m === 0 && (c = 0), c <= 0 && (c = 0), r(c), l(m);
      };
    return v.jsxs("div", {
      children: [
        v.jsx("p", { className: "pb-4", children: "Select serving size:" }),
        v.jsxs("div", {
          className: "flex flex-col lg:flex-row gap-4 w-full",
          children: [
            v.jsx(Xl, {
              type: "Espresso",
              size: 50,
              caffeine: 80,
              onClickPlus: o,
              onClickMinus: u,
            }),
            v.jsx(Xl, {
              type: "Cup",
              size: 240,
              caffeine: 250,
              onClickPlus: o,
              onClickMinus: u,
            }),
            v.jsx(Xl, {
              type: "XL cup",
              size: 500,
              caffeine: 350,
              onClickPlus: o,
              onClickMinus: u,
            }),
          ],
        }),
      ],
    });
  },
  Yu = 6 * 60 * 60,
  Yd = 3 * 60 * 60,
  Xd = ({
    caffeine: e,
    resetTimer: n,
    onResetComplete: t,
    onTimeChange: r,
    onShowHalflifeModal: l,
  }) => {
    const [i, o] = J.useState(Yu);
    J.useEffect(() => {
      n &&
        (o(Yu),
        setTimeout(() => {
          t();
        }, 500));
    }, [n, t]),
      J.useEffect(() => {
        if (e > 0) {
          const m = setInterval(() => {
            o((h) => {
              const p = h - 1;
              return (
                p === Yd && l(!0),
                p <= 0 ? (clearInterval(m), r(0), 0) : (r(p), p)
              );
            });
          }, 1e3);
          return () => clearInterval(m);
        }
      }, [e, r, l]);
    const u = Math.floor(i / 3600),
      s = Math.floor((i % 3600) / 60),
      c = i % 60;
    return v.jsx("div", {
      className: "py-4",
      children:
        e > 0
          ? v.jsxs("div", {
              children: [
                u,
                "hrs ",
                s.toString().padStart(2, "0"),
                "min",
                " ",
                c.toString().padStart(2, "0"),
                "sec",
              ],
            })
          : v.jsx("p", { children: "Add coffee to start the timer" }),
    });
  },
  Gd = ({ caffeine: e, time: n }) => {
    const [, r] = J.useState(0),
      [l, i] = J.useState(0);
    J.useEffect(() => {
      r(e), i(n);
    }, [e, n]);
    let o = (l / 21600) * 100 + "%";
    e === 0 && (o = "0%");
    let u = Math.floor(parseFloat(o));
    return v.jsxs("div", {
      className: "flex items-center gap-1",
      children: [
        v.jsx("div", {
          id: "timerBarOuter",
          className: "border-2 border-primary h-12 w-[90%] rounded-md",
          children: v.jsx("div", {
            id: "timerBarInner",
            className:
              "bg-primary h-full transition-all duration-500 ease-in-out",
            style: { width: o },
          }),
        }),
        v.jsx("div", {
          className: "flex justify-center items-center w-[10%]",
          children: v.jsxs("p", { children: [u, "%"] }),
        }),
      ],
    });
  };
var cc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Xu = ve.createContext && ve.createContext(cc),
  Zd = ["attr", "size", "title"];
function Jd(e, n) {
  if (e == null) return {};
  var t = qd(e, n),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(n.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (t[r] = e[r]);
  }
  return t;
}
function qd(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function nl() {
  return (
    (nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
    nl.apply(this, arguments)
  );
}
function Gu(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function tl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Gu(Object(t), !0).forEach(function (r) {
          bd(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : Gu(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function bd(e, n, t) {
  return (
    (n = ep(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function ep(e) {
  var n = np(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function np(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function fc(e) {
  return (
    e &&
    e.map((n, t) =>
      ve.createElement(n.tag, tl({ key: t }, n.attr), fc(n.child))
    )
  );
}
function Io(e) {
  return (n) =>
    ve.createElement(tp, nl({ attr: tl({}, e.attr) }, n), fc(e.child));
}
function tp(e) {
  var n = (t) => {
    var { attr: r, size: l, title: i } = e,
      o = Jd(e, Zd),
      u = l || t.size || "1em",
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      ve.createElement(
        "svg",
        nl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          r,
          o,
          {
            className: s,
            style: tl(tl({ color: e.color || t.color }, t.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ve.createElement("title", null, i),
        e.children
      )
    );
  };
  return Xu !== void 0
    ? ve.createElement(Xu.Consumer, null, (t) => n(t))
    : n(cc);
}
function rp(e) {
  return Io({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z",
        },
        child: [],
      },
    ],
  })(e);
}
const lp = ({
  recommended: e,
  total: n,
  cups: t,
  resetTimer: r,
  onResetComplete: l,
}) => {
  const [i, o] = ve.useState(0),
    [u, s] = ve.useState(0),
    [c, m] = ve.useState(0),
    [h, p] = ve.useState(0),
    [w, S] = ve.useState(!1),
    k = (d) => {
      p(d);
    },
    M = () => {
      m(0), s(0);
    },
    f = () => {
      S(!0);
    },
    a = () => {
      S(!1);
    };
  return (
    ve.useEffect(() => {
      o(e), s(n), m(t);
    }, [e, n, t]),
    v.jsxs("div", {
      className: "",
      children: [
        w &&
          v.jsx(dc, {
            onClose: a,
            buttonText: "Okay",
            children: v.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                v.jsx("p", {
                  children:
                    "Hi, it's been 3 hours since you last drank coffee.",
                }),
                v.jsx("p", {
                  children:
                    "Caffeine's half-life is typically around 5-6 hours. This means that your caffeine levels have decreased by about half since your last cup.",
                }),
                v.jsx("p", {
                  children:
                    "If you're feeling tired or need a boost, now might be a good time to consider another cup of coffee. However, be mindful of your overall caffeine intake and listen to your body.",
                }),
                v.jsx("p", { children: "Enjoy!" }),
              ],
            }),
          }),
        v.jsxs("div", {
          className: "flex gap-4 justify-center items-center py-4",
          children: [
            v.jsxs("div", {
              className:
                "flex flex-col items-center justify-center w-full gap-4",
              children: [
                v.jsxs("div", {
                  children: ["Total: ", u, "mg / Recommended: ", i, "mg"],
                }),
                v.jsx("div", {
                  className: "border-t-2 border-primary w-full rounded-full",
                }),
                v.jsxs("div", {
                  children: ["Cups today: ", v.jsx("span", { children: c })],
                }),
              ],
            }),
            v.jsx("div", {
              children: v.jsxs("button", {
                onClick: M,
                className:
                  "flex flex-col justify-center items-center mt-4 p-2 lg:p-4 border-2 border-primary rounded-md cursor-pointer",
                children: [v.jsx(rp, { className: "bg-secondary" }), "Reset"],
              }),
            }),
          ],
        }),
        v.jsx(Gd, { caffeine: u, time: h }),
        v.jsx(Xd, {
          resetTimer: r,
          onResetComplete: l,
          caffeine: u,
          onTimeChange: k,
          onShowHalflifeModal: f,
        }),
      ],
    })
  );
};
function ip(e) {
  return Io({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function op(e) {
  return Io({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
const Xl = ({
    type: e,
    size: n,
    caffeine: t,
    onClickPlus: r,
    onClickMinus: l,
  }) => {
    const i = () => {
        l(t);
      },
      o = () => {
        r(t);
      };
    return v.jsxs("div", {
      className:
        "flex lg:flex-col justify-between lg:justify-center items-center w-full gap-2 p-2 lg:p-4 border-2 rounded-md border-primary",
      children: [
        v.jsxs("p", { children: [e, ": (~", n, "ml)"] }),
        v.jsxs("p", { children: ["~", t, "mg"] }),
        v.jsxs("div", {
          className: "flex gap-4 items-center",
          children: [
            v.jsx("div", {
              onClick: i,
              className:
                "flex flex-col justify-center items-center w-8 h-8 border-2 border-primary rounded-full cursor-pointer bg-secondary",
              children: v.jsx(ip, { className: "text-primary" }),
            }),
            v.jsx("div", {
              className: "w-8",
              children: v.jsx("img", { src: ac, alt: "White image of a cup" }),
            }),
            v.jsx("div", {
              onClick: o,
              className:
                "flex flex-col justify-center items-center w-8 h-8 border-2 border-primary rounded-full cursor-pointer bg-secondary",
              children: v.jsx(op, { className: "text-primary" }),
            }),
          ],
        }),
      ],
    });
  },
  up = () =>
    v.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [
        v.jsx("p", { children: "Disclaimer before using:" }),
        v.jsx("p", {
          children:
            "The caffeine information and advice provided in this app is based on estimates and averages. Actual caffeine content can vary depending on factors such as coffee bean type, brewing method, metabolism, your sensitivity and strength.",
        }),
        v.jsx("p", {
          children:
            "It's important to consult with a healthcare professional if you have concerns about your caffeine intake or if you are pregnant, breastfeeding, or have underlying health conditions. This app is intended for informational purposes only and should not be considered a substitute for professional medical advice.",
        }),
      ],
    }),
  dc = ({ onClose: e, children: n, buttonText: t }) =>
    v.jsx("div", {
      className:
        "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20",
      children: v.jsxs("div", {
        className:
          "relative p-4 m-4 h-fit rounded-md bg-secondary border-2 border-primary shadow-md max-w-md",
        children: [
          n,
          v.jsx("div", {
            className: "flex w-full justify-center items-center pt-4",
            children: v.jsx("button", {
              onClick: e,
              className:
                "bg-secondary text-primary p-2 border-2 border-primary rounded-md cursor-pointer w-full lg:w-fit",
              children: t,
            }),
          }),
        ],
      }),
    }),
  sp = () =>
    v.jsx("div", {
      className:
        "fixed bottom-0 w-full border-t-2 p-4 border-primary font-bold bg-secondary",
      children: v.jsx("footer", {
        className: "flex justify-center items-center",
        children: v.jsx("p", {
          children: "© 2024 CoffeeCount. All rights reserved.",
        }),
      }),
    }),
  ap = () => {
    const [e, n] = J.useState(0),
      [t, r] = J.useState(0),
      [l, i] = J.useState(0),
      [o, u] = J.useState(!1),
      [s, c] = J.useState(!1),
      m = (f) => {
        n(f);
      },
      h = (f) => {
        r(f);
      },
      p = (f) => {
        i(f);
      },
      w = () => {
        u((f) => !f);
      },
      S = () => {
        u(!1);
      },
      k = () => {
        c(!0);
      },
      M = () => {
        c(!1);
      };
    return v.jsxs("div", {
      className:
        "relative flex flex-col justify-center sm:items-center h-screen font-bold text-sm sm:text-xl",
      children: [
        v.jsx(Vd, { onShowDisclaimerModal: k }),
        v.jsx("div", {
          className: "mt-20 mb-14 h-full",
          children: v.jsxs("div", {
            className:
              "w-full h-full flex flex-col items-center justify-between p-4",
            children: [
              s &&
                v.jsx(dc, {
                  onClose: M,
                  buttonText: "Got it!",
                  children: v.jsx(up, {}),
                }),
              e === 0
                ? v.jsx("div", {
                    className: "flex flex-col h-full justify-around w-full",
                    children: v.jsx(Bd, { onRecommendedCaffeineChange: m }),
                  })
                : v.jsxs(v.Fragment, {
                    children: [
                      v.jsx("div", {
                        className: "w-full",
                        children: v.jsx(Kd, {
                          recommendedCaffeine: e,
                          onTotalCaffeineChange: h,
                          onServingsChange: p,
                          totalCaffeine: t,
                          totalServings: l,
                          onAddCaffeine: w,
                        }),
                      }),
                      v.jsx("div", {
                        className: "w-full",
                        children: v.jsx(lp, {
                          recommended: e,
                          total: t,
                          cups: l,
                          resetTimer: o,
                          onResetComplete: S,
                        }),
                      }),
                      v.jsx("div", {
                        className: "w-full",
                        children: v.jsxs("p", {
                          className: "italic",
                          children: [
                            v.jsx("a", {
                              href: "https://www.efsa.europa.eu/en/topics/topic/caffeine",
                              children: "*Recommended",
                            }),
                            " ",
                            "daily intake is suggested as 3mg/kg of bodyweight",
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        }),
        v.jsx(sp, {}),
      ],
    });
  };
sc(document.getElementById("root")).render(
  v.jsx(J.StrictMode, { children: v.jsx(ap, {}) })
);
