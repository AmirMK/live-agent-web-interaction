function Rd(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var of = { exports: {} }, Dn = {};
var Sd;
function a0() {
  if (Sd) return Dn;
  Sd = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.fragment");
  function N(f, M, D) {
    var O = null;
    if (D !== void 0 && (O = "" + D), M.key !== void 0 && (O = "" + M.key), "key" in M) {
      D = {};
      for (var X in M)
        X !== "key" && (D[X] = M[X]);
    } else D = M;
    return M = D.ref, {
      $$typeof: b,
      type: f,
      key: O,
      ref: M !== void 0 ? M : null,
      props: D
    };
  }
  return Dn.Fragment = x, Dn.jsx = N, Dn.jsxs = N, Dn;
}
var bd;
function n0() {
  return bd || (bd = 1, of.exports = a0()), of.exports;
}
var C = n0(), rf = { exports: {} }, J = {};
var Ad;
function u0() {
  if (Ad) return J;
  Ad = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), O = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function st(r) {
    return r === null || typeof r != "object" ? null : (r = w && r[w] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var yt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, dt = Object.assign, K = {};
  function it(r, _, R) {
    this.props = r, this.context = _, this.refs = K, this.updater = R || yt;
  }
  it.prototype.isReactComponent = {}, it.prototype.setState = function(r, _) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, _, "setState");
  }, it.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = it.prototype;
  function zt(r, _, R) {
    this.props = r, this.context = _, this.refs = K, this.updater = R || yt;
  }
  var Vt = zt.prototype = new vt();
  Vt.constructor = zt, dt(Vt, it.prototype), Vt.isPureReactComponent = !0;
  var Kt = Array.isArray;
  function jt() {
  }
  var W = { H: null, A: null, T: null, S: null }, Xt = Object.prototype.hasOwnProperty;
  function te(r, _, R) {
    var q = R.ref;
    return {
      $$typeof: b,
      type: r,
      key: _,
      ref: q !== void 0 ? q : null,
      props: R
    };
  }
  function qe(r, _) {
    return te(r.type, _, r.props);
  }
  function qt(r) {
    return typeof r == "object" && r !== null && r.$$typeof === b;
  }
  function Qt(r) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(R) {
      return _[R];
    });
  }
  var Ae = /\/+/g;
  function Zt(r, _) {
    return typeof r == "object" && r !== null && r.key != null ? Qt("" + r.key) : _.toString(36);
  }
  function Tt(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(jt, jt) : (r.status = "pending", r.then(
          function(_) {
            r.status === "pending" && (r.status = "fulfilled", r.value = _);
          },
          function(_) {
            r.status === "pending" && (r.status = "rejected", r.reason = _);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function A(r, _, R, q, V) {
    var k = typeof r;
    (k === "undefined" || k === "boolean") && (r = null);
    var nt = !1;
    if (r === null) nt = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case b:
            case x:
              nt = !0;
              break;
            case j:
              return nt = r._init, A(
                nt(r._payload),
                _,
                R,
                q,
                V
              );
          }
      }
    if (nt)
      return V = V(r), nt = q === "" ? "." + Zt(r, 0) : q, Kt(V) ? (R = "", nt != null && (R = nt.replace(Ae, "$&/") + "/"), A(V, _, R, "", function(Mt) {
        return Mt;
      })) : V != null && (qt(V) && (V = qe(
        V,
        R + (V.key == null || r && r.key === V.key ? "" : ("" + V.key).replace(
          Ae,
          "$&/"
        ) + "/") + nt
      )), _.push(V)), 1;
    nt = 0;
    var Y = q === "" ? "." : q + ":";
    if (Kt(r))
      for (var Q = 0; Q < r.length; Q++)
        q = r[Q], k = Y + Zt(q, Q), nt += A(
          q,
          _,
          R,
          k,
          V
        );
    else if (Q = st(r), typeof Q == "function")
      for (r = Q.call(r), Q = 0; !(q = r.next()).done; )
        q = q.value, k = Y + Zt(q, Q++), nt += A(
          q,
          _,
          R,
          k,
          V
        );
    else if (k === "object") {
      if (typeof r.then == "function")
        return A(
          Tt(r),
          _,
          R,
          q,
          V
        );
      throw _ = String(r), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return nt;
  }
  function S(r, _, R) {
    if (r == null) return r;
    var q = [], V = 0;
    return A(r, q, "", "", function(k) {
      return _.call(R, k, V++);
    }), q;
  }
  function H(r) {
    if (r._status === -1) {
      var _ = r._result;
      _ = _(), _.then(
        function(R) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = R);
        },
        function(R) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = R);
        }
      ), r._status === -1 && (r._status = 0, r._result = _);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var at = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, ot = {
    map: S,
    forEach: function(r, _, R) {
      S(
        r,
        function() {
          _.apply(this, arguments);
        },
        R
      );
    },
    count: function(r) {
      var _ = 0;
      return S(r, function() {
        _++;
      }), _;
    },
    toArray: function(r) {
      return S(r, function(_) {
        return _;
      }) || [];
    },
    only: function(r) {
      if (!qt(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return J.Activity = U, J.Children = ot, J.Component = it, J.Fragment = N, J.Profiler = M, J.PureComponent = zt, J.StrictMode = f, J.Suspense = m, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return W.H.useMemoCache(r);
    }
  }, J.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(r, _, R) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var q = dt({}, r.props), V = r.key;
    if (_ != null)
      for (k in _.key !== void 0 && (V = "" + _.key), _)
        !Xt.call(_, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && _.ref === void 0 || (q[k] = _[k]);
    var k = arguments.length - 2;
    if (k === 1) q.children = R;
    else if (1 < k) {
      for (var nt = Array(k), Y = 0; Y < k; Y++)
        nt[Y] = arguments[Y + 2];
      q.children = nt;
    }
    return te(r.type, V, q);
  }, J.createContext = function(r) {
    return r = {
      $$typeof: O,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: D,
      _context: r
    }, r;
  }, J.createElement = function(r, _, R) {
    var q, V = {}, k = null;
    if (_ != null)
      for (q in _.key !== void 0 && (k = "" + _.key), _)
        Xt.call(_, q) && q !== "key" && q !== "__self" && q !== "__source" && (V[q] = _[q]);
    var nt = arguments.length - 2;
    if (nt === 1) V.children = R;
    else if (1 < nt) {
      for (var Y = Array(nt), Q = 0; Q < nt; Q++)
        Y[Q] = arguments[Q + 2];
      V.children = Y;
    }
    if (r && r.defaultProps)
      for (q in nt = r.defaultProps, nt)
        V[q] === void 0 && (V[q] = nt[q]);
    return te(r, k, V);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(r) {
    return { $$typeof: X, render: r };
  }, J.isValidElement = qt, J.lazy = function(r) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: r },
      _init: H
    };
  }, J.memo = function(r, _) {
    return {
      $$typeof: v,
      type: r,
      compare: _ === void 0 ? null : _
    };
  }, J.startTransition = function(r) {
    var _ = W.T, R = {};
    W.T = R;
    try {
      var q = r(), V = W.S;
      V !== null && V(R, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(jt, at);
    } catch (k) {
      at(k);
    } finally {
      _ !== null && R.types !== null && (_.types = R.types), W.T = _;
    }
  }, J.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, J.use = function(r) {
    return W.H.use(r);
  }, J.useActionState = function(r, _, R) {
    return W.H.useActionState(r, _, R);
  }, J.useCallback = function(r, _) {
    return W.H.useCallback(r, _);
  }, J.useContext = function(r) {
    return W.H.useContext(r);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(r, _) {
    return W.H.useDeferredValue(r, _);
  }, J.useEffect = function(r, _) {
    return W.H.useEffect(r, _);
  }, J.useEffectEvent = function(r) {
    return W.H.useEffectEvent(r);
  }, J.useId = function() {
    return W.H.useId();
  }, J.useImperativeHandle = function(r, _, R) {
    return W.H.useImperativeHandle(r, _, R);
  }, J.useInsertionEffect = function(r, _) {
    return W.H.useInsertionEffect(r, _);
  }, J.useLayoutEffect = function(r, _) {
    return W.H.useLayoutEffect(r, _);
  }, J.useMemo = function(r, _) {
    return W.H.useMemo(r, _);
  }, J.useOptimistic = function(r, _) {
    return W.H.useOptimistic(r, _);
  }, J.useReducer = function(r, _, R) {
    return W.H.useReducer(r, _, R);
  }, J.useRef = function(r) {
    return W.H.useRef(r);
  }, J.useState = function(r) {
    return W.H.useState(r);
  }, J.useSyncExternalStore = function(r, _, R) {
    return W.H.useSyncExternalStore(
      r,
      _,
      R
    );
  }, J.useTransition = function() {
    return W.H.useTransition();
  }, J.version = "19.2.8", J;
}
var Ed;
function pf() {
  return Ed || (Ed = 1, rf.exports = u0()), rf.exports;
}
var At = pf();
const i0 = /* @__PURE__ */ Rd(At);
var df = { exports: {} }, Un = {}, mf = { exports: {} }, hf = {};
var Td;
function c0() {
  return Td || (Td = 1, (function(b) {
    function x(A, S) {
      var H = A.length;
      A.push(S);
      t: for (; 0 < H; ) {
        var at = H - 1 >>> 1, ot = A[at];
        if (0 < M(ot, S))
          A[at] = S, A[H] = ot, H = at;
        else break t;
      }
    }
    function N(A) {
      return A.length === 0 ? null : A[0];
    }
    function f(A) {
      if (A.length === 0) return null;
      var S = A[0], H = A.pop();
      if (H !== S) {
        A[0] = H;
        t: for (var at = 0, ot = A.length, r = ot >>> 1; at < r; ) {
          var _ = 2 * (at + 1) - 1, R = A[_], q = _ + 1, V = A[q];
          if (0 > M(R, H))
            q < ot && 0 > M(V, R) ? (A[at] = V, A[q] = H, at = q) : (A[at] = R, A[_] = H, at = _);
          else if (q < ot && 0 > M(V, H))
            A[at] = V, A[q] = H, at = q;
          else break t;
        }
      }
      return S;
    }
    function M(A, S) {
      var H = A.sortIndex - S.sortIndex;
      return H !== 0 ? H : A.id - S.id;
    }
    if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      b.unstable_now = function() {
        return D.now();
      };
    } else {
      var O = Date, X = O.now();
      b.unstable_now = function() {
        return O.now() - X;
      };
    }
    var m = [], v = [], j = 1, U = null, w = 3, st = !1, yt = !1, dt = !1, K = !1, it = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, zt = typeof setImmediate < "u" ? setImmediate : null;
    function Vt(A) {
      for (var S = N(v); S !== null; ) {
        if (S.callback === null) f(v);
        else if (S.startTime <= A)
          f(v), S.sortIndex = S.expirationTime, x(m, S);
        else break;
        S = N(v);
      }
    }
    function Kt(A) {
      if (dt = !1, Vt(A), !yt)
        if (N(m) !== null)
          yt = !0, jt || (jt = !0, Qt());
        else {
          var S = N(v);
          S !== null && Tt(Kt, S.startTime - A);
        }
    }
    var jt = !1, W = -1, Xt = 5, te = -1;
    function qe() {
      return K ? !0 : !(b.unstable_now() - te < Xt);
    }
    function qt() {
      if (K = !1, jt) {
        var A = b.unstable_now();
        te = A;
        var S = !0;
        try {
          t: {
            yt = !1, dt && (dt = !1, vt(W), W = -1), st = !0;
            var H = w;
            try {
              e: {
                for (Vt(A), U = N(m); U !== null && !(U.expirationTime > A && qe()); ) {
                  var at = U.callback;
                  if (typeof at == "function") {
                    U.callback = null, w = U.priorityLevel;
                    var ot = at(
                      U.expirationTime <= A
                    );
                    if (A = b.unstable_now(), typeof ot == "function") {
                      U.callback = ot, Vt(A), S = !0;
                      break e;
                    }
                    U === N(m) && f(m), Vt(A);
                  } else f(m);
                  U = N(m);
                }
                if (U !== null) S = !0;
                else {
                  var r = N(v);
                  r !== null && Tt(
                    Kt,
                    r.startTime - A
                  ), S = !1;
                }
              }
              break t;
            } finally {
              U = null, w = H, st = !1;
            }
            S = void 0;
          }
        } finally {
          S ? Qt() : jt = !1;
        }
      }
    }
    var Qt;
    if (typeof zt == "function")
      Qt = function() {
        zt(qt);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Zt = Ae.port2;
      Ae.port1.onmessage = qt, Qt = function() {
        Zt.postMessage(null);
      };
    } else
      Qt = function() {
        it(qt, 0);
      };
    function Tt(A, S) {
      W = it(function() {
        A(b.unstable_now());
      }, S);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, b.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, b.unstable_next = function(A) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var S = 3;
          break;
        default:
          S = w;
      }
      var H = w;
      w = S;
      try {
        return A();
      } finally {
        w = H;
      }
    }, b.unstable_requestPaint = function() {
      K = !0;
    }, b.unstable_runWithPriority = function(A, S) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var H = w;
      w = A;
      try {
        return S();
      } finally {
        w = H;
      }
    }, b.unstable_scheduleCallback = function(A, S, H) {
      var at = b.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? at + H : at) : H = at, A) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = H + ot, A = {
        id: j++,
        callback: S,
        priorityLevel: A,
        startTime: H,
        expirationTime: ot,
        sortIndex: -1
      }, H > at ? (A.sortIndex = H, x(v, A), N(m) === null && A === N(v) && (dt ? (vt(W), W = -1) : dt = !0, Tt(Kt, H - at))) : (A.sortIndex = ot, x(m, A), yt || st || (yt = !0, jt || (jt = !0, Qt()))), A;
    }, b.unstable_shouldYield = qe, b.unstable_wrapCallback = function(A) {
      var S = w;
      return function() {
        var H = w;
        w = S;
        try {
          return A.apply(this, arguments);
        } finally {
          w = H;
        }
      };
    };
  })(hf)), hf;
}
var xd;
function f0() {
  return xd || (xd = 1, mf.exports = c0()), mf.exports;
}
var yf = { exports: {} }, ee = {};
var _d;
function s0() {
  if (_d) return ee;
  _d = 1;
  var b = pf();
  function x(m) {
    var v = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        v += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + m + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N() {
  }
  var f = {
    d: {
      f: N,
      r: function() {
        throw Error(x(522));
      },
      D: N,
      C: N,
      L: N,
      m: N,
      X: N,
      S: N,
      M: N
    },
    p: 0,
    findDOMNode: null
  }, M = /* @__PURE__ */ Symbol.for("react.portal");
  function D(m, v, j) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: U == null ? null : "" + U,
      children: m,
      containerInfo: v,
      implementation: j
    };
  }
  var O = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(m, v) {
    if (m === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ee.createPortal = function(m, v) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(x(299));
    return D(m, v, null, j);
  }, ee.flushSync = function(m) {
    var v = O.T, j = f.p;
    try {
      if (O.T = null, f.p = 2, m) return m();
    } finally {
      O.T = v, f.p = j, f.d.f();
    }
  }, ee.preconnect = function(m, v) {
    typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(m, v));
  }, ee.prefetchDNS = function(m) {
    typeof m == "string" && f.d.D(m);
  }, ee.preinit = function(m, v) {
    if (typeof m == "string" && v && typeof v.as == "string") {
      var j = v.as, U = X(j, v.crossOrigin), w = typeof v.integrity == "string" ? v.integrity : void 0, st = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      j === "style" ? f.d.S(
        m,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: U,
          integrity: w,
          fetchPriority: st
        }
      ) : j === "script" && f.d.X(m, {
        crossOrigin: U,
        integrity: w,
        fetchPriority: st,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, ee.preinitModule = function(m, v) {
    if (typeof m == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var j = X(
            v.as,
            v.crossOrigin
          );
          f.d.M(m, {
            crossOrigin: j,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(m);
  }, ee.preload = function(m, v) {
    if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var j = v.as, U = X(j, v.crossOrigin);
      f.d.L(m, j, {
        crossOrigin: U,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, ee.preloadModule = function(m, v) {
    if (typeof m == "string")
      if (v) {
        var j = X(v.as, v.crossOrigin);
        f.d.m(m, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: j,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(m);
  }, ee.requestFormReset = function(m) {
    f.d.r(m);
  }, ee.unstable_batchedUpdates = function(m, v) {
    return m(v);
  }, ee.useFormState = function(m, v, j) {
    return O.H.useFormState(m, v, j);
  }, ee.useFormStatus = function() {
    return O.H.useHostTransitionStatus();
  }, ee.version = "19.2.8", ee;
}
var zd;
function o0() {
  if (zd) return yf.exports;
  zd = 1;
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (x) {
        console.error(x);
      }
  }
  return b(), yf.exports = s0(), yf.exports;
}
var Md;
function r0() {
  if (Md) return Un;
  Md = 1;
  var b = f0(), x = pf(), N = o0();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function D(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function O(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function X(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (D(t) !== t)
      throw Error(f(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = D(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return m(n), t;
          if (u === a) return m(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, l = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, l = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function j(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = j(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), st = /* @__PURE__ */ Symbol.for("react.transitional.element"), yt = /* @__PURE__ */ Symbol.for("react.portal"), dt = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), it = /* @__PURE__ */ Symbol.for("react.profiler"), vt = /* @__PURE__ */ Symbol.for("react.consumer"), zt = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Kt = /* @__PURE__ */ Symbol.for("react.suspense"), jt = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), qe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), qt = Symbol.iterator;
  function Qt(t) {
    return t === null || typeof t != "object" ? null : (t = qt && t[qt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Zt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ae ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case dt:
        return "Fragment";
      case it:
        return "Profiler";
      case K:
        return "StrictMode";
      case Kt:
        return "Suspense";
      case jt:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case yt:
          return "Portal";
        case zt:
          return t.displayName || "Context";
        case vt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Vt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return e = t.displayName || null, e !== null ? e : Zt(t.type) || "Memo";
        case Xt:
          e = t._payload, t = t._init;
          try {
            return Zt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Tt = Array.isArray, A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, S = N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], ot = -1;
  function r(t) {
    return { current: t };
  }
  function _(t) {
    0 > ot || (t.current = at[ot], at[ot] = null, ot--);
  }
  function R(t, e) {
    ot++, at[ot] = t.current, t.current = e;
  }
  var q = r(null), V = r(null), k = r(null), nt = r(null);
  function Y(t, e) {
    switch (R(k, e), R(V, t), R(q, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Qr(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Qr(e), t = Zr(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    _(q), R(q, t);
  }
  function Q() {
    _(q), _(V), _(k);
  }
  function Mt(t) {
    t.memoizedState !== null && R(nt, t);
    var e = q.current, l = Zr(e, t.type);
    e !== l && (R(V, t), R(q, l));
  }
  function Be(t) {
    V.current === t && (_(q), _(V)), nt.current === t && (_(nt), Mn._currentValue = H);
  }
  var Ye, Hl;
  function we(t) {
    if (Ye === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Ye = e && e[1] || "", Hl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ye + t + Hl;
  }
  var Ee = !1;
  function I(t, e) {
    if (!t || Ee) return "";
    Ee = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (p) {
                  g = p;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string")
              return [p.stack, g.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), y = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === s.length || n === y.length)
          for (a = s.length - 1, n = y.length - 1; 1 <= a && 0 <= n && s[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || s[a] !== y[n]) {
                  var E = `
` + s[a].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ee = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? we(l) : "";
  }
  function Ot(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return we(t.type);
      case 16:
        return we("Lazy");
      case 13:
        return t.child !== e && e !== null ? we("Suspense Fallback") : we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 15:
        return I(t.type, !1);
      case 11:
        return I(t.type.render, !1);
      case 1:
        return I(t.type, !0);
      case 31:
        return we("Activity");
      default:
        return "";
    }
  }
  function Et(t) {
    try {
      var e = "", l = null;
      do
        e += Ot(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ct = Object.prototype.hasOwnProperty, oe = b.unstable_scheduleCallback, Ba = b.unstable_cancelCallback, Rn = b.unstable_shouldYield, qd = b.unstable_requestPaint, re = b.unstable_now, Bd = b.unstable_getCurrentPriorityLevel, Sf = b.unstable_ImmediatePriority, bf = b.unstable_UserBlockingPriority, Hn = b.unstable_NormalPriority, Yd = b.unstable_LowPriority, Af = b.unstable_IdlePriority, Gd = b.log, Ld = b.unstable_setDisableYieldValue, Ya = null, de = null;
  function sl(t) {
    if (typeof Gd == "function" && Ld(t), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(Ya, t);
      } catch {
      }
  }
  var me = Math.clz32 ? Math.clz32 : Zd, Xd = Math.log, Qd = Math.LN2;
  function Zd(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xd(t) / Qd | 0) | 0;
  }
  var jn = 256, qn = 262144, Bn = 4194304;
  function jl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = jl(a) : (i &= c, i !== 0 ? n = jl(i) : l || (l = c & ~t, l !== 0 && (n = jl(l))))) : (c = a & ~u, c !== 0 ? n = jl(c) : i !== 0 ? n = jl(i) : l || (l = a & ~t, l !== 0 && (n = jl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Ga(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wd(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ef() {
    var t = Bn;
    return Bn <<= 1, (Bn & 62914560) === 0 && (Bn = 4194304), t;
  }
  function Fu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function La(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Vd(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, y = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var E = 31 - me(l), z = 1 << E;
      c[E] = 0, s[E] = -1;
      var g = y[E];
      if (g !== null)
        for (y[E] = null, E = 0; E < g.length; E++) {
          var p = g[E];
          p !== null && (p.lane &= -536870913);
        }
      l &= ~z;
    }
    a !== 0 && Tf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function Tf(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - me(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function xf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - me(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function _f(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Iu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Iu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Pu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zf() {
    var t = S.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : dd(t.type));
  }
  function Mf(t, e) {
    var l = S.p;
    try {
      return S.p = t, e();
    } finally {
      S.p = l;
    }
  }
  var ol = Math.random().toString(36).slice(2), $t = "__reactFiber$" + ol, ae = "__reactProps$" + ol, Pl = "__reactContainer$" + ol, ti = "__reactEvents$" + ol, Kd = "__reactListeners$" + ol, Jd = "__reactHandles$" + ol, Nf = "__reactResources$" + ol, Xa = "__reactMarker$" + ol;
  function ei(t) {
    delete t[$t], delete t[ae], delete t[ti], delete t[Kd], delete t[Jd];
  }
  function ta(t) {
    var e = t[$t];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Pl] || l[$t]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Wr(t); t !== null; ) {
            if (l = t[$t]) return l;
            t = Wr(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ea(t) {
    if (t = t[$t] || t[Pl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function la(t) {
    var e = t[Nf];
    return e || (e = t[Nf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Jt(t) {
    t[Xa] = !0;
  }
  var Of = /* @__PURE__ */ new Set(), Cf = {};
  function ql(t, e) {
    aa(t, e), aa(t + "Capture", e);
  }
  function aa(t, e) {
    for (Cf[t] = e, t = 0; t < e.length; t++)
      Of.add(e[t]);
  }
  var kd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Df = {}, Uf = {};
  function $d(t) {
    return Ct.call(Uf, t) ? !0 : Ct.call(Df, t) ? !1 : kd.test(t) ? Uf[t] = !0 : (Df[t] = !0, !1);
  }
  function Gn(t, e, l) {
    if ($d(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Ln(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ve(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Te(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Rf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Wd(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function li(t) {
    if (!t._valueTracker) {
      var e = Rf(t) ? "checked" : "value";
      t._valueTracker = Wd(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Hf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Rf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Xn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Fd = /[\n"\\]/g;
  function xe(t) {
    return t.replace(
      Fd,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ai(t, e, l, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? ni(t, i, Te(e)) : l != null ? ni(t, i, Te(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + Te(c) : t.removeAttribute("name");
  }
  function jf(t, e, l, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        li(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), li(t);
  }
  function ni(t, e, l) {
    e === "number" && Xn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function na(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Te(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qf(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function Bf(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Tt(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Te(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), li(t);
  }
  function ua(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Id = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yf(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Id.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Gf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && Yf(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Yf(t, u, e[u]);
  }
  function ui(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Pd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), tm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qn(t) {
    return tm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ke() {
  }
  var ii = null;
  function ci(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ia = null, ca = null;
  function Lf(t) {
    var e = ea(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ai(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + xe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ae] || null;
                if (!n) throw Error(f(90));
                ai(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && Hf(a);
          }
          break t;
        case "textarea":
          qf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && na(t, !!l.multiple, e, !1);
      }
    }
  }
  var fi = !1;
  function Xf(t, e, l) {
    if (fi) return t(e, l);
    fi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (fi = !1, (ia !== null || ca !== null) && (Ou(), ia && (e = ia, t = ca, ca = ia = null, Lf(e), t)))
        for (e = 0; e < t.length; e++) Lf(t[e]);
    }
  }
  function Za(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ae] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), si = !1;
  if (Je)
    try {
      var wa = {};
      Object.defineProperty(wa, "passive", {
        get: function() {
          si = !0;
        }
      }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
    } catch {
      si = !1;
    }
  var rl = null, oi = null, Zn = null;
  function Qf() {
    if (Zn) return Zn;
    var t, e = oi, l = e.length, a, n = "value" in rl ? rl.value : rl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Zn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function wn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Vn() {
    return !0;
  }
  function Zf() {
    return !1;
  }
  function ne(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (l = t[c], this[c] = l ? l(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Vn : Zf, this.isPropagationStopped = Zf, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Vn);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Vn);
      },
      persist: function() {
      },
      isPersistent: Vn
    }), e;
  }
  var Bl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kn = ne(Bl), Va = U({}, Bl, { view: 0, detail: 0 }), em = ne(Va), ri, di, Ka, Jn = U({}, Va, {
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
    getModifierState: hi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ka && (Ka && t.type === "mousemove" ? (ri = t.screenX - Ka.screenX, di = t.screenY - Ka.screenY) : di = ri = 0, Ka = t), ri);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : di;
    }
  }), wf = ne(Jn), lm = U({}, Jn, { dataTransfer: 0 }), am = ne(lm), nm = U({}, Va, { relatedTarget: 0 }), mi = ne(nm), um = U({}, Bl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), im = ne(um), cm = U({}, Bl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), fm = ne(cm), sm = U({}, Bl, { data: 0 }), Vf = ne(sm), om = {
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
    MozPrintableKey: "Unidentified"
  }, rm = {
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
    224: "Meta"
  }, dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = dm[t]) ? !!e[t] : !1;
  }
  function hi() {
    return mm;
  }
  var hm = U({}, Va, {
    key: function(t) {
      if (t.key) {
        var e = om[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = wn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? rm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hi,
    charCode: function(t) {
      return t.type === "keypress" ? wn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? wn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), ym = ne(hm), vm = U({}, Jn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Kf = ne(vm), gm = U({}, Va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hi
  }), pm = ne(gm), Sm = U({}, Bl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = ne(Sm), Am = U({}, Jn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Em = ne(Am), Tm = U({}, Bl, {
    newState: 0,
    oldState: 0
  }), xm = ne(Tm), _m = [9, 13, 27, 32], yi = Je && "CompositionEvent" in window, Ja = null;
  Je && "documentMode" in document && (Ja = document.documentMode);
  var zm = Je && "TextEvent" in window && !Ja, Jf = Je && (!yi || Ja && 8 < Ja && 11 >= Ja), kf = " ", $f = !1;
  function Wf(t, e) {
    switch (t) {
      case "keyup":
        return _m.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ff(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var fa = !1;
  function Mm(t, e) {
    switch (t) {
      case "compositionend":
        return Ff(e);
      case "keypress":
        return e.which !== 32 ? null : ($f = !0, kf);
      case "textInput":
        return t = e.data, t === kf && $f ? null : t;
      default:
        return null;
    }
  }
  function Nm(t, e) {
    if (fa)
      return t === "compositionend" || !yi && Wf(t, e) ? (t = Qf(), Zn = oi = rl = null, fa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Jf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Om = {
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
    week: !0
  };
  function If(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Om[t.type] : e === "textarea";
  }
  function Pf(t, e, l, a) {
    ia ? ca ? ca.push(a) : ca = [a] : ia = a, e = qu(e, "onChange"), 0 < e.length && (l = new Kn(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var ka = null, $a = null;
  function Cm(t) {
    qr(t, 0);
  }
  function kn(t) {
    var e = Qa(t);
    if (Hf(e)) return t;
  }
  function ts(t, e) {
    if (t === "change") return e;
  }
  var es = !1;
  if (Je) {
    var vi;
    if (Je) {
      var gi = "oninput" in document;
      if (!gi) {
        var ls = document.createElement("div");
        ls.setAttribute("oninput", "return;"), gi = typeof ls.oninput == "function";
      }
      vi = gi;
    } else vi = !1;
    es = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function as() {
    ka && (ka.detachEvent("onpropertychange", ns), $a = ka = null);
  }
  function ns(t) {
    if (t.propertyName === "value" && kn($a)) {
      var e = [];
      Pf(
        e,
        $a,
        t,
        ci(t)
      ), Xf(Cm, e);
    }
  }
  function Dm(t, e, l) {
    t === "focusin" ? (as(), ka = e, $a = l, ka.attachEvent("onpropertychange", ns)) : t === "focusout" && as();
  }
  function Um(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return kn($a);
  }
  function Rm(t, e) {
    if (t === "click") return kn(e);
  }
  function Hm(t, e) {
    if (t === "input" || t === "change")
      return kn(e);
  }
  function jm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var he = typeof Object.is == "function" ? Object.is : jm;
  function Wa(t, e) {
    if (he(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ct.call(e, n) || !he(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function us(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function is(t, e) {
    var l = us(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = us(l);
    }
  }
  function cs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? cs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function fs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Xn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Xn(t.document);
    }
    return e;
  }
  function pi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var qm = Je && "documentMode" in document && 11 >= document.documentMode, sa = null, Si = null, Fa = null, bi = !1;
  function ss(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    bi || sa == null || sa !== Xn(a) || (a = sa, "selectionStart" in a && pi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fa && Wa(Fa, a) || (Fa = a, a = qu(Si, "onSelect"), 0 < a.length && (e = new Kn(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = sa)));
  }
  function Yl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var oa = {
    animationend: Yl("Animation", "AnimationEnd"),
    animationiteration: Yl("Animation", "AnimationIteration"),
    animationstart: Yl("Animation", "AnimationStart"),
    transitionrun: Yl("Transition", "TransitionRun"),
    transitionstart: Yl("Transition", "TransitionStart"),
    transitioncancel: Yl("Transition", "TransitionCancel"),
    transitionend: Yl("Transition", "TransitionEnd")
  }, Ai = {}, os = {};
  Je && (os = document.createElement("div").style, "AnimationEvent" in window || (delete oa.animationend.animation, delete oa.animationiteration.animation, delete oa.animationstart.animation), "TransitionEvent" in window || delete oa.transitionend.transition);
  function Gl(t) {
    if (Ai[t]) return Ai[t];
    if (!oa[t]) return t;
    var e = oa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in os)
        return Ai[t] = e[l];
    return t;
  }
  var rs = Gl("animationend"), ds = Gl("animationiteration"), ms = Gl("animationstart"), Bm = Gl("transitionrun"), Ym = Gl("transitionstart"), Gm = Gl("transitioncancel"), hs = Gl("transitionend"), ys = /* @__PURE__ */ new Map(), Ei = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ei.push("scrollEnd");
  function Re(t, e) {
    ys.set(t, e), ql(e, [t]);
  }
  var $n = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, _e = [], ra = 0, Ti = 0;
  function Wn() {
    for (var t = ra, e = Ti = ra = 0; e < t; ) {
      var l = _e[e];
      _e[e++] = null;
      var a = _e[e];
      _e[e++] = null;
      var n = _e[e];
      _e[e++] = null;
      var u = _e[e];
      if (_e[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && vs(l, n, u);
    }
  }
  function Fn(t, e, l, a) {
    _e[ra++] = t, _e[ra++] = e, _e[ra++] = l, _e[ra++] = a, Ti |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function xi(t, e, l, a) {
    return Fn(t, e, l, a), In(t);
  }
  function Ll(t, e) {
    return Fn(t, null, null, e), In(t);
  }
  function vs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - me(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function In(t) {
    if (50 < bn)
      throw bn = 0, Rc = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var da = {};
  function Lm(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, l, a) {
    return new Lm(t, e, l, a);
  }
  function _i(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ke(t, e) {
    var l = t.alternate;
    return l === null ? (l = ye(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function gs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Pn(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") _i(t) && (i = 1);
    else if (typeof t == "string")
      i = Vh(
        t,
        l,
        q.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case te:
          return t = ye(31, l, e, n), t.elementType = te, t.lanes = u, t;
        case dt:
          return Xl(l.children, n, u, e);
        case K:
          i = 8, n |= 24;
          break;
        case it:
          return t = ye(12, l, e, n | 2), t.elementType = it, t.lanes = u, t;
        case Kt:
          return t = ye(13, l, e, n), t.elementType = Kt, t.lanes = u, t;
        case jt:
          return t = ye(19, l, e, n), t.elementType = jt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case zt:
                i = 10;
                break t;
              case vt:
                i = 9;
                break t;
              case Vt:
                i = 11;
                break t;
              case W:
                i = 14;
                break t;
              case Xt:
                i = 16, a = null;
                break t;
            }
          i = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ye(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Xl(t, e, l, a) {
    return t = ye(7, t, a, e), t.lanes = l, t;
  }
  function zi(t, e, l) {
    return t = ye(6, t, null, e), t.lanes = l, t;
  }
  function ps(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Mi(t, e, l) {
    return e = ye(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ss = /* @__PURE__ */ new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ss.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Et(e)
      }, Ss.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Et(e)
    };
  }
  var ma = [], ha = 0, tu = null, Ia = 0, Me = [], Ne = 0, dl = null, Ge = 1, Le = "";
  function $e(t, e) {
    ma[ha++] = Ia, ma[ha++] = tu, tu = t, Ia = e;
  }
  function bs(t, e, l) {
    Me[Ne++] = Ge, Me[Ne++] = Le, Me[Ne++] = dl, dl = t;
    var a = Ge;
    t = Le;
    var n = 32 - me(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - me(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Ge = 1 << 32 - me(e) + n | l << n | a, Le = u + t;
    } else
      Ge = 1 << u | l << n | a, Le = t;
  }
  function Ni(t) {
    t.return !== null && ($e(t, 1), bs(t, 1, 0));
  }
  function Oi(t) {
    for (; t === tu; )
      tu = ma[--ha], ma[ha] = null, Ia = ma[--ha], ma[ha] = null;
    for (; t === dl; )
      dl = Me[--Ne], Me[Ne] = null, Le = Me[--Ne], Me[Ne] = null, Ge = Me[--Ne], Me[Ne] = null;
  }
  function As(t, e) {
    Me[Ne++] = Ge, Me[Ne++] = Le, Me[Ne++] = dl, Ge = e.id, Le = e.overflow, dl = t;
  }
  var Wt = null, xt = null, ut = !1, ml = null, Oe = !1, Ci = Error(f(519));
  function hl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Pa(ze(e, t)), Ci;
  }
  function Es(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[$t] = t, e[ae] = a, l) {
      case "dialog":
        tt("cancel", e), tt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        tt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++)
          tt(En[l], e);
        break;
      case "source":
        tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        tt("error", e), tt("load", e);
        break;
      case "details":
        tt("toggle", e);
        break;
      case "input":
        tt("invalid", e), jf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        tt("invalid", e);
        break;
      case "textarea":
        tt("invalid", e), Bf(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Lr(e.textContent, l) ? (a.popover != null && (tt("beforetoggle", e), tt("toggle", e)), a.onScroll != null && tt("scroll", e), a.onScrollEnd != null && tt("scrollend", e), a.onClick != null && (e.onclick = Ke), e = !0) : e = !1, e || hl(t, !0);
  }
  function Ts(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 31:
        case 13:
          Oe = !1;
          return;
        case 27:
        case 3:
          Oe = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function ya(t) {
    if (t !== Wt) return !1;
    if (!ut) return Ts(t), ut = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || kc(t.type, t.memoizedProps)), l = !l), l && xt && hl(t), Ts(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      xt = $r(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      xt = $r(t);
    } else
      e === 27 ? (e = xt, Nl(t.type) ? (t = Pc, Pc = null, xt = t) : xt = e) : xt = Wt ? De(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ql() {
    xt = Wt = null, ut = !1;
  }
  function Di() {
    var t = ml;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), ml = null), t;
  }
  function Pa(t) {
    ml === null ? ml = [t] : ml.push(t);
  }
  var Ui = r(null), Zl = null, We = null;
  function yl(t, e, l) {
    R(Ui, e._currentValue), e._currentValue = l;
  }
  function Fe(t) {
    t._currentValue = Ui.current, _(Ui);
  }
  function Ri(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Hi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < e.length; s++)
            if (c.context === e[s]) {
              u.lanes |= l, c = u.alternate, c !== null && (c.lanes |= l), Ri(
                u.return,
                l,
                t
              ), a || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Ri(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function va(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          he(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === nt.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Mn) : t = [Mn]);
      }
      n = n.return;
    }
    t !== null && Hi(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!he(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function wl(t) {
    Zl = t, We = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ft(t) {
    return xs(Zl, t);
  }
  function lu(t, e) {
    return Zl === null && wl(t), xs(t, e);
  }
  function xs(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(f(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var Xm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Qm = b.unstable_scheduleCallback, Zm = b.unstable_NormalPriority, Bt = {
    $$typeof: zt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ji() {
    return {
      controller: new Xm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function tn(t) {
    t.refCount--, t.refCount === 0 && Qm(Zm, function() {
      t.controller.abort();
    });
  }
  var en = null, qi = 0, ga = 0, pa = null;
  function wm(t, e) {
    if (en === null) {
      var l = en = [];
      qi = 0, ga = Gc(), pa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return qi++, e.then(_s, _s), e;
  }
  function _s() {
    if (--qi === 0 && en !== null) {
      pa !== null && (pa.status = "fulfilled");
      var t = en;
      en = null, ga = 0, pa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Vm(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var zs = A.S;
  A.S = function(t, e) {
    or = re(), typeof e == "object" && e !== null && typeof e.then == "function" && wm(t, e), zs !== null && zs(t, e);
  };
  var Vl = r(null);
  function Bi() {
    var t = Vl.current;
    return t !== null ? t : bt.pooledCache;
  }
  function au(t, e) {
    e === null ? R(Vl, Vl.current) : R(Vl, e.pool);
  }
  function Ms() {
    var t = Bi();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var Sa = Error(f(460)), Yi = Error(f(474)), nu = Error(f(542)), uu = { then: function() {
  } };
  function Ns(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Os(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ke, Ke), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ds(t), t;
      default:
        if (typeof e.status == "string") e.then(Ke, Ke);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ds(t), t;
        }
        throw Jl = e, Sa;
    }
  }
  function Kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Jl = l, Sa) : l;
    }
  }
  var Jl = null;
  function Cs() {
    if (Jl === null) throw Error(f(459));
    var t = Jl;
    return Jl = null, t;
  }
  function Ds(t) {
    if (t === Sa || t === nu)
      throw Error(f(483));
  }
  var ba = null, ln = 0;
  function iu(t) {
    var e = ln;
    return ln += 1, ba === null && (ba = []), Os(ba, t, e);
  }
  function an(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function cu(t, e) {
    throw e.$$typeof === w ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Us(t) {
    function e(d, o) {
      if (t) {
        var h = d.deletions;
        h === null ? (d.deletions = [o], d.flags |= 16) : h.push(o);
      }
    }
    function l(d, o) {
      if (!t) return null;
      for (; o !== null; )
        e(d, o), o = o.sibling;
      return null;
    }
    function a(d) {
      for (var o = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
      return o;
    }
    function n(d, o) {
      return d = ke(d, o), d.index = 0, d.sibling = null, d;
    }
    function u(d, o, h) {
      return d.index = h, t ? (h = d.alternate, h !== null ? (h = h.index, h < o ? (d.flags |= 67108866, o) : h) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
    }
    function i(d) {
      return t && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, o, h, T) {
      return o === null || o.tag !== 6 ? (o = zi(h, d.mode, T), o.return = d, o) : (o = n(o, h), o.return = d, o);
    }
    function s(d, o, h, T) {
      var L = h.type;
      return L === dt ? E(
        d,
        o,
        h.props.children,
        T,
        h.key
      ) : o !== null && (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Xt && Kl(L) === o.type) ? (o = n(o, h.props), an(o, h), o.return = d, o) : (o = Pn(
        h.type,
        h.key,
        h.props,
        null,
        d.mode,
        T
      ), an(o, h), o.return = d, o);
    }
    function y(d, o, h, T) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Mi(h, d.mode, T), o.return = d, o) : (o = n(o, h.children || []), o.return = d, o);
    }
    function E(d, o, h, T, L) {
      return o === null || o.tag !== 7 ? (o = Xl(
        h,
        d.mode,
        T,
        L
      ), o.return = d, o) : (o = n(o, h), o.return = d, o);
    }
    function z(d, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = zi(
          "" + o,
          d.mode,
          h
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case st:
            return h = Pn(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              h
            ), an(h, o), h.return = d, h;
          case yt:
            return o = Mi(
              o,
              d.mode,
              h
            ), o.return = d, o;
          case Xt:
            return o = Kl(o), z(d, o, h);
        }
        if (Tt(o) || Qt(o))
          return o = Xl(
            o,
            d.mode,
            h,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return z(d, iu(o), h);
        if (o.$$typeof === zt)
          return z(
            d,
            lu(d, o),
            h
          );
        cu(d, o);
      }
      return null;
    }
    function g(d, o, h, T) {
      var L = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return L !== null ? null : c(d, o, "" + h, T);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case st:
            return h.key === L ? s(d, o, h, T) : null;
          case yt:
            return h.key === L ? y(d, o, h, T) : null;
          case Xt:
            return h = Kl(h), g(d, o, h, T);
        }
        if (Tt(h) || Qt(h))
          return L !== null ? null : E(d, o, h, T, null);
        if (typeof h.then == "function")
          return g(
            d,
            o,
            iu(h),
            T
          );
        if (h.$$typeof === zt)
          return g(
            d,
            o,
            lu(d, h),
            T
          );
        cu(d, h);
      }
      return null;
    }
    function p(d, o, h, T, L) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return d = d.get(h) || null, c(o, d, "" + T, L);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case st:
            return d = d.get(
              T.key === null ? h : T.key
            ) || null, s(o, d, T, L);
          case yt:
            return d = d.get(
              T.key === null ? h : T.key
            ) || null, y(o, d, T, L);
          case Xt:
            return T = Kl(T), p(
              d,
              o,
              h,
              T,
              L
            );
        }
        if (Tt(T) || Qt(T))
          return d = d.get(h) || null, E(o, d, T, L, null);
        if (typeof T.then == "function")
          return p(
            d,
            o,
            h,
            iu(T),
            L
          );
        if (T.$$typeof === zt)
          return p(
            d,
            o,
            h,
            lu(o, T),
            L
          );
        cu(o, T);
      }
      return null;
    }
    function B(d, o, h, T) {
      for (var L = null, ct = null, G = o, F = o = 0, lt = null; G !== null && F < h.length; F++) {
        G.index > F ? (lt = G, G = null) : lt = G.sibling;
        var ft = g(
          d,
          G,
          h[F],
          T
        );
        if (ft === null) {
          G === null && (G = lt);
          break;
        }
        t && G && ft.alternate === null && e(d, G), o = u(ft, o, F), ct === null ? L = ft : ct.sibling = ft, ct = ft, G = lt;
      }
      if (F === h.length)
        return l(d, G), ut && $e(d, F), L;
      if (G === null) {
        for (; F < h.length; F++)
          G = z(d, h[F], T), G !== null && (o = u(
            G,
            o,
            F
          ), ct === null ? L = G : ct.sibling = G, ct = G);
        return ut && $e(d, F), L;
      }
      for (G = a(G); F < h.length; F++)
        lt = p(
          G,
          d,
          F,
          h[F],
          T
        ), lt !== null && (t && lt.alternate !== null && G.delete(
          lt.key === null ? F : lt.key
        ), o = u(
          lt,
          o,
          F
        ), ct === null ? L = lt : ct.sibling = lt, ct = lt);
      return t && G.forEach(function(Rl) {
        return e(d, Rl);
      }), ut && $e(d, F), L;
    }
    function Z(d, o, h, T) {
      if (h == null) throw Error(f(151));
      for (var L = null, ct = null, G = o, F = o = 0, lt = null, ft = h.next(); G !== null && !ft.done; F++, ft = h.next()) {
        G.index > F ? (lt = G, G = null) : lt = G.sibling;
        var Rl = g(d, G, ft.value, T);
        if (Rl === null) {
          G === null && (G = lt);
          break;
        }
        t && G && Rl.alternate === null && e(d, G), o = u(Rl, o, F), ct === null ? L = Rl : ct.sibling = Rl, ct = Rl, G = lt;
      }
      if (ft.done)
        return l(d, G), ut && $e(d, F), L;
      if (G === null) {
        for (; !ft.done; F++, ft = h.next())
          ft = z(d, ft.value, T), ft !== null && (o = u(ft, o, F), ct === null ? L = ft : ct.sibling = ft, ct = ft);
        return ut && $e(d, F), L;
      }
      for (G = a(G); !ft.done; F++, ft = h.next())
        ft = p(G, d, F, ft.value, T), ft !== null && (t && ft.alternate !== null && G.delete(ft.key === null ? F : ft.key), o = u(ft, o, F), ct === null ? L = ft : ct.sibling = ft, ct = ft);
      return t && G.forEach(function(l0) {
        return e(d, l0);
      }), ut && $e(d, F), L;
    }
    function St(d, o, h, T) {
      if (typeof h == "object" && h !== null && h.type === dt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case st:
            t: {
              for (var L = h.key; o !== null; ) {
                if (o.key === L) {
                  if (L = h.type, L === dt) {
                    if (o.tag === 7) {
                      l(
                        d,
                        o.sibling
                      ), T = n(
                        o,
                        h.props.children
                      ), T.return = d, d = T;
                      break t;
                    }
                  } else if (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Xt && Kl(L) === o.type) {
                    l(
                      d,
                      o.sibling
                    ), T = n(o, h.props), an(T, h), T.return = d, d = T;
                    break t;
                  }
                  l(d, o);
                  break;
                } else e(d, o);
                o = o.sibling;
              }
              h.type === dt ? (T = Xl(
                h.props.children,
                d.mode,
                T,
                h.key
              ), T.return = d, d = T) : (T = Pn(
                h.type,
                h.key,
                h.props,
                null,
                d.mode,
                T
              ), an(T, h), T.return = d, d = T);
            }
            return i(d);
          case yt:
            t: {
              for (L = h.key; o !== null; ) {
                if (o.key === L)
                  if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    l(
                      d,
                      o.sibling
                    ), T = n(o, h.children || []), T.return = d, d = T;
                    break t;
                  } else {
                    l(d, o);
                    break;
                  }
                else e(d, o);
                o = o.sibling;
              }
              T = Mi(h, d.mode, T), T.return = d, d = T;
            }
            return i(d);
          case Xt:
            return h = Kl(h), St(
              d,
              o,
              h,
              T
            );
        }
        if (Tt(h))
          return B(
            d,
            o,
            h,
            T
          );
        if (Qt(h)) {
          if (L = Qt(h), typeof L != "function") throw Error(f(150));
          return h = L.call(h), Z(
            d,
            o,
            h,
            T
          );
        }
        if (typeof h.then == "function")
          return St(
            d,
            o,
            iu(h),
            T
          );
        if (h.$$typeof === zt)
          return St(
            d,
            o,
            lu(d, h),
            T
          );
        cu(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (l(d, o.sibling), T = n(o, h), T.return = d, d = T) : (l(d, o), T = zi(h, d.mode, T), T.return = d, d = T), i(d)) : l(d, o);
    }
    return function(d, o, h, T) {
      try {
        ln = 0;
        var L = St(
          d,
          o,
          h,
          T
        );
        return ba = null, L;
      } catch (G) {
        if (G === Sa || G === nu) throw G;
        var ct = ye(29, G, null, d.mode);
        return ct.lanes = T, ct.return = d, ct;
      }
    };
  }
  var kl = Us(!0), Rs = Us(!1), vl = !1;
  function Gi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Li(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function gl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (rt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = In(t), vs(t, null, l), e;
    }
    return Fn(t, a, e, l), In(t);
  }
  function nn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, xf(t, l);
    }
  }
  function Xi(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Qi = !1;
  function un() {
    if (Qi) {
      var t = pa;
      if (t !== null) throw t;
    }
  }
  function cn(t, e, l, a) {
    Qi = !1;
    var n = t.updateQueue;
    vl = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? u = y : i.next = y, i = s;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = y : c.next = y, E.lastBaseUpdate = s));
    }
    if (u !== null) {
      var z = n.baseState;
      i = 0, E = y = s = null, c = u;
      do {
        var g = c.lane & -536870913, p = g !== c.lane;
        if (p ? (et & g) === g : (a & g) === g) {
          g !== 0 && g === ga && (Qi = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var B = t, Z = c;
            g = e;
            var St = l;
            switch (Z.tag) {
              case 1:
                if (B = Z.payload, typeof B == "function") {
                  z = B.call(St, z, g);
                  break t;
                }
                z = B;
                break t;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = Z.payload, g = typeof B == "function" ? B.call(St, z, g) : B, g == null) break t;
                z = U({}, z, g);
                break t;
              case 2:
                vl = !0;
            }
          }
          g = c.callback, g !== null && (t.flags |= 64, p && (t.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [g] : p.push(g));
        } else
          p = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, E === null ? (y = E = p, s = z) : E = E.next = p, i |= g;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (!0);
      E === null && (s = z), n.baseState = s, n.firstBaseUpdate = y, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), Tl |= i, t.lanes = i, t.memoizedState = z;
    }
  }
  function Hs(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function js(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Hs(l[t], e);
  }
  var Aa = r(null), fu = r(0);
  function qs(t, e) {
    t = il, R(fu, t), R(Aa, e), il = t | e.baseLanes;
  }
  function Zi() {
    R(fu, il), R(Aa, Aa.current);
  }
  function wi() {
    il = fu.current, _(Aa), _(fu);
  }
  var ve = r(null), Ce = null;
  function Sl(t) {
    var e = t.alternate;
    R(Rt, Rt.current & 1), R(ve, t), Ce === null && (e === null || Aa.current !== null || e.memoizedState !== null) && (Ce = t);
  }
  function Vi(t) {
    R(Rt, Rt.current), R(ve, t), Ce === null && (Ce = t);
  }
  function Bs(t) {
    t.tag === 22 ? (R(Rt, Rt.current), R(ve, t), Ce === null && (Ce = t)) : bl();
  }
  function bl() {
    R(Rt, Rt.current), R(ve, ve.current);
  }
  function ge(t) {
    _(ve), Ce === t && (Ce = null), _(Rt);
  }
  var Rt = r(0);
  function su(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Fc(l) || Ic(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ie = 0, $ = null, gt = null, Yt = null, ou = !1, Ea = !1, $l = !1, ru = 0, fn = 0, Ta = null, Km = 0;
  function Dt() {
    throw Error(f(321));
  }
  function Ki(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!he(t[l], e[l])) return !1;
    return !0;
  }
  function Ji(t, e, l, a, n, u) {
    return Ie = u, $ = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, A.H = t === null || t.memoizedState === null ? Ao : fc, $l = !1, u = l(a, n), $l = !1, Ea && (u = Gs(
      e,
      l,
      a,
      n
    )), Ys(t), u;
  }
  function Ys(t) {
    A.H = rn;
    var e = gt !== null && gt.next !== null;
    if (Ie = 0, Yt = gt = $ = null, ou = !1, fn = 0, Ta = null, e) throw Error(f(300));
    t === null || Gt || (t = t.dependencies, t !== null && eu(t) && (Gt = !0));
  }
  function Gs(t, e, l, a) {
    $ = t;
    var n = 0;
    do {
      if (Ea && (Ta = null), fn = 0, Ea = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Yt = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      A.H = Eo, u = e(l, a);
    } while (Ea);
    return u;
  }
  function Jm() {
    var t = A.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? sn(e) : e, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && ($.flags |= 1024), e;
  }
  function ki() {
    var t = ru !== 0;
    return ru = 0, t;
  }
  function $i(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Wi(t) {
    if (ou) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ou = !1;
    }
    Ie = 0, Yt = gt = $ = null, Ea = !1, fn = ru = 0, Ta = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? $.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function Ht() {
    if (gt === null) {
      var t = $.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Yt === null ? $.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, gt = t;
    else {
      if (t === null)
        throw $.alternate === null ? Error(f(467)) : Error(f(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Yt === null ? $.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sn(t) {
    var e = fn;
    return fn += 1, Ta === null && (Ta = []), t = Os(Ta, t, e), e = $, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, A.H = e === null || e.memoizedState === null ? Ao : fc), t;
  }
  function mu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sn(t);
      if (t.$$typeof === zt) return Ft(t);
    }
    throw Error(f(438, String(t)));
  }
  function Fi(t) {
    var e = null, l = $.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = $.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = du(), $.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = qe;
    return e.index++, l;
  }
  function Pe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hu(t) {
    var e = Ht();
    return Ii(e, gt, t);
  }
  function Ii(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var c = i = null, s = null, y = e, E = !1;
      do {
        var z = y.lane & -536870913;
        if (z !== y.lane ? (et & z) === z : (Ie & z) === z) {
          var g = y.revertLane;
          if (g === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), z === ga && (E = !0);
          else if ((Ie & g) === g) {
            y = y.next, g === ga && (E = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, s === null ? (c = s = z, i = u) : s = s.next = z, $.lanes |= g, Tl |= g;
          z = y.action, $l && l(u, z), u = y.hasEagerState ? y.eagerState : l(u, z);
        } else
          g = {
            lane: z,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, s === null ? (c = s = g, i = u) : s = s.next = g, $.lanes |= z, Tl |= z;
        y = y.next;
      } while (y !== null && y !== e);
      if (s === null ? i = u : s.next = c, !he(u, t.memoizedState) && (Gt = !0, E && (l = pa, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Pi(t) {
    var e = Ht(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      he(u, e.memoizedState) || (Gt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ls(t, e, l) {
    var a = $, n = Ht(), u = ut;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !he(
      (gt || n).memoizedState,
      l
    );
    if (i && (n.memoizedState = l, Gt = !0), n = n.queue, lc(Zs.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Qs.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), bt === null) throw Error(f(349));
      u || (Ie & 127) !== 0 || Xs(a, e, l);
    }
    return l;
  }
  function Xs(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = $.updateQueue, e === null ? (e = du(), $.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Qs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, ws(e) && Vs(t);
  }
  function Zs(t, e, l) {
    return l(function() {
      ws(e) && Vs(t);
    });
  }
  function ws(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return !0;
    }
  }
  function Vs(t) {
    var e = Ll(t, 2);
    e !== null && se(e, t, 2);
  }
  function tc(t) {
    var e = le();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), $l) {
        sl(!0);
        try {
          l();
        } finally {
          sl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pe,
      lastRenderedState: t
    }, e;
  }
  function Ks(t, e, l, a) {
    return t.baseState = l, Ii(
      t,
      gt,
      typeof a == "function" ? a : Pe
    );
  }
  function km(t, e, l, a, n) {
    if (gu(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      A.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Js(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Js(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = A.T, i = {};
      A.T = i;
      try {
        var c = l(n, a), s = A.S;
        s !== null && s(i, c), ks(t, e, c);
      } catch (y) {
        ec(t, e, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), A.T = u;
      }
    } else
      try {
        u = l(n, a), ks(t, e, u);
      } catch (y) {
        ec(t, e, y);
      }
  }
  function ks(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        $s(t, e, a);
      },
      function(a) {
        return ec(t, e, a);
      }
    ) : $s(t, e, l);
  }
  function $s(t, e, l) {
    e.status = "fulfilled", e.value = l, Ws(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Js(t, l)));
  }
  function ec(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, Ws(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Ws(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Fs(t, e) {
    return e;
  }
  function Is(t, e) {
    if (ut) {
      var l = bt.formState;
      if (l !== null) {
        t: {
          var a = $;
          if (ut) {
            if (xt) {
              e: {
                for (var n = xt, u = Oe; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = De(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                xt = De(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            hl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = le(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fs,
      lastRenderedState: e
    }, l.queue = a, l = po.bind(
      null,
      $,
      a
    ), a.dispatch = l, a = tc(!1), u = cc.bind(
      null,
      $,
      !1,
      a.queue
    ), a = le(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = km.bind(
      null,
      $,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Ps(t) {
    var e = Ht();
    return to(e, gt, t);
  }
  function to(t, e, l) {
    if (e = Ii(
      t,
      e,
      Fs
    )[0], t = hu(Pe)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = sn(e);
      } catch (i) {
        throw i === Sa ? nu : i;
      }
    else a = e;
    e = Ht();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && ($.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      $m.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function $m(t, e) {
    t.action = e;
  }
  function eo(t) {
    var e = Ht(), l = gt;
    if (l !== null)
      return to(e, l, t);
    Ht(), e = e.memoizedState, l = Ht();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function xa(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = $.updateQueue, e === null && (e = du(), $.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function lo() {
    return Ht().memoizedState;
  }
  function yu(t, e, l, a) {
    var n = le();
    $.flags |= t, n.memoizedState = xa(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function vu(t, e, l, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && Ki(a, gt.memoizedState.deps) ? n.memoizedState = xa(e, u, l, a) : ($.flags |= t, n.memoizedState = xa(
      1 | e,
      u,
      l,
      a
    ));
  }
  function ao(t, e) {
    yu(8390656, 8, t, e);
  }
  function lc(t, e) {
    vu(2048, 8, t, e);
  }
  function Wm(t) {
    $.flags |= 4;
    var e = $.updateQueue;
    if (e === null)
      e = du(), $.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function no(t) {
    var e = Ht().memoizedState;
    return Wm({ ref: e, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function uo(t, e) {
    return vu(4, 2, t, e);
  }
  function io(t, e) {
    return vu(4, 4, t, e);
  }
  function co(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function fo(t, e, l) {
    l = l != null ? l.concat([t]) : null, vu(4, 4, co.bind(null, e, t), l);
  }
  function ac() {
  }
  function so(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Ki(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function oo(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Ki(e, a[1]))
      return a[0];
    if (a = t(), $l) {
      sl(!0);
      try {
        t();
      } finally {
        sl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function nc(t, e, l) {
    return l === void 0 || (Ie & 1073741824) !== 0 && (et & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = dr(), $.lanes |= t, Tl |= t, l);
  }
  function ro(t, e, l, a) {
    return he(l, e) ? l : Aa.current !== null ? (t = nc(t, l, a), he(t, e) || (Gt = !0), t) : (Ie & 42) === 0 || (Ie & 1073741824) !== 0 && (et & 261930) === 0 ? (Gt = !0, t.memoizedState = l) : (t = dr(), $.lanes |= t, Tl |= t, e);
  }
  function mo(t, e, l, a, n) {
    var u = S.p;
    S.p = u !== 0 && 8 > u ? u : 8;
    var i = A.T, c = {};
    A.T = c, cc(t, !1, e, l);
    try {
      var s = n(), y = A.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var E = Vm(
          s,
          a
        );
        on(
          t,
          e,
          E,
          be(t)
        );
      } else
        on(
          t,
          e,
          a,
          be(t)
        );
    } catch (z) {
      on(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: z },
        be()
      );
    } finally {
      S.p = u, i !== null && c.types !== null && (i.types = c.types), A.T = i;
    }
  }
  function Fm() {
  }
  function uc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = ho(t).queue;
    mo(
      t,
      n,
      e,
      H,
      l === null ? Fm : function() {
        return yo(t), l(a);
      }
    );
  }
  function ho(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pe,
        lastRenderedState: H
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pe,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function yo(t) {
    var e = ho(t);
    e.next === null && (e = t.alternate.memoizedState), on(
      t,
      e.next.queue,
      {},
      be()
    );
  }
  function ic() {
    return Ft(Mn);
  }
  function vo() {
    return Ht().memoizedState;
  }
  function go() {
    return Ht().memoizedState;
  }
  function Im(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = be();
          t = gl(l);
          var a = pl(e, t, l);
          a !== null && (se(a, e, l), nn(a, e, l)), e = { cache: ji() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Pm(t, e, l) {
    var a = be();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gu(t) ? So(e, l) : (l = xi(t, e, l, a), l !== null && (se(l, t, a), bo(l, e, a)));
  }
  function po(t, e, l) {
    var a = be();
    on(t, e, l, a);
  }
  function on(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gu(t)) So(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, c = u(i, l);
          if (n.hasEagerState = !0, n.eagerState = c, he(c, i))
            return Fn(t, e, n, 0), bt === null && Wn(), !1;
        } catch {
        }
      if (l = xi(t, e, n, a), l !== null)
        return se(l, t, a), bo(l, e, a), !0;
    }
    return !1;
  }
  function cc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Gc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gu(t)) {
      if (e) throw Error(f(479));
    } else
      e = xi(
        t,
        l,
        a,
        2
      ), e !== null && se(e, t, 2);
  }
  function gu(t) {
    var e = t.alternate;
    return t === $ || e !== null && e === $;
  }
  function So(t, e) {
    Ea = ou = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function bo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, xf(t, l);
    }
  }
  var rn = {
    readContext: Ft,
    use: mu,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useLayoutEffect: Dt,
    useInsertionEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    useHostTransitionStatus: Dt,
    useFormState: Dt,
    useActionState: Dt,
    useOptimistic: Dt,
    useMemoCache: Dt,
    useCacheRefresh: Dt
  };
  rn.useEffectEvent = Dt;
  var Ao = {
    readContext: Ft,
    use: mu,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Ft,
    useEffect: ao,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, yu(
        4194308,
        4,
        co.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return yu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      yu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = le();
      e = e === void 0 ? null : e;
      var a = t();
      if ($l) {
        sl(!0);
        try {
          t();
        } finally {
          sl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = le();
      if (l !== void 0) {
        var n = l(e);
        if ($l) {
          sl(!0);
          try {
            l(e);
          } finally {
            sl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = Pm.bind(
        null,
        $,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = tc(t);
      var e = t.queue, l = po.bind(null, $, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: ac,
    useDeferredValue: function(t, e) {
      var l = le();
      return nc(l, t, e);
    },
    useTransition: function() {
      var t = tc(!1);
      return t = mo.bind(
        null,
        $,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = $, n = le();
      if (ut) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), bt === null)
          throw Error(f(349));
        (et & 127) !== 0 || Xs(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, ao(Zs.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Qs.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = le(), e = bt.identifierPrefix;
      if (ut) {
        var l = Le, a = Ge;
        l = (a & ~(1 << 32 - me(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ru++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Km++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ic,
    useFormState: Is,
    useActionState: Is,
    useOptimistic: function(t) {
      var e = le();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = cc.bind(
        null,
        $,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Fi,
    useCacheRefresh: function() {
      return le().memoizedState = Im.bind(
        null,
        $
      );
    },
    useEffectEvent: function(t) {
      var e = le(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((rt & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, fc = {
    readContext: Ft,
    use: mu,
    useCallback: so,
    useContext: Ft,
    useEffect: lc,
    useImperativeHandle: fo,
    useInsertionEffect: uo,
    useLayoutEffect: io,
    useMemo: oo,
    useReducer: hu,
    useRef: lo,
    useState: function() {
      return hu(Pe);
    },
    useDebugValue: ac,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return ro(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = hu(Pe)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : sn(t),
        e
      ];
    },
    useSyncExternalStore: Ls,
    useId: vo,
    useHostTransitionStatus: ic,
    useFormState: Ps,
    useActionState: Ps,
    useOptimistic: function(t, e) {
      var l = Ht();
      return Ks(l, gt, t, e);
    },
    useMemoCache: Fi,
    useCacheRefresh: go
  };
  fc.useEffectEvent = no;
  var Eo = {
    readContext: Ft,
    use: mu,
    useCallback: so,
    useContext: Ft,
    useEffect: lc,
    useImperativeHandle: fo,
    useInsertionEffect: uo,
    useLayoutEffect: io,
    useMemo: oo,
    useReducer: Pi,
    useRef: lo,
    useState: function() {
      return Pi(Pe);
    },
    useDebugValue: ac,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return gt === null ? nc(l, t, e) : ro(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pi(Pe)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : sn(t),
        e
      ];
    },
    useSyncExternalStore: Ls,
    useId: vo,
    useHostTransitionStatus: ic,
    useFormState: eo,
    useActionState: eo,
    useOptimistic: function(t, e) {
      var l = Ht();
      return gt !== null ? Ks(l, gt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Fi,
    useCacheRefresh: go
  };
  Eo.useEffectEvent = no;
  function sc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : U({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var oc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = be(), n = gl(a);
      n.payload = e, l != null && (n.callback = l), e = pl(t, n, a), e !== null && (se(e, t, a), nn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = be(), n = gl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = pl(t, n, a), e !== null && (se(e, t, a), nn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = be(), a = gl(l);
      a.tag = 2, e != null && (a.callback = e), e = pl(t, a, l), e !== null && (se(e, t, l), nn(e, t, l));
    }
  };
  function To(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Wa(l, a) || !Wa(n, u) : !0;
  }
  function xo(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && oc.enqueueReplaceState(e, e.state, null);
  }
  function Wl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = U({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function _o(t) {
    $n(t);
  }
  function zo(t) {
    console.error(t);
  }
  function Mo(t) {
    $n(t);
  }
  function pu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function No(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function rc(t, e, l) {
    return l = gl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      pu(t, e);
    }, l;
  }
  function Oo(t) {
    return t = gl(t), t.tag = 3, t;
  }
  function Co(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        No(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      No(e, l, a), typeof n != "function" && (xl === null ? xl = /* @__PURE__ */ new Set([this]) : xl.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function th(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && va(
        e,
        l,
        n,
        !0
      ), l = ve.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ce === null ? Cu() : l.alternate === null && Ut === 0 && (Ut = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), qc(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), qc(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return qc(t, a, n), Cu(), !1;
    }
    if (ut)
      return e = ve.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Ci && (t = Error(f(422), { cause: a }), Pa(ze(t, l)))) : (a !== Ci && (e = Error(f(423), {
        cause: a
      }), Pa(
        ze(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = ze(a, l), n = rc(
        t.stateNode,
        a,
        n
      ), Xi(t, n), Ut !== 4 && (Ut = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = ze(u, l), Sn === null ? Sn = [u] : Sn.push(u), Ut !== 4 && (Ut = 2), e === null) return !0;
    a = ze(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = rc(l.stateNode, a, t), Xi(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (xl === null || !xl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Oo(n), Co(
              n,
              t,
              l,
              a
            ), Xi(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var dc = Error(f(461)), Gt = !1;
  function It(t, e, l, a) {
    e.child = t === null ? Rs(e, null, l, a) : kl(
      e,
      t.child,
      l,
      a
    );
  }
  function Do(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return wl(e), a = Ji(
      t,
      e,
      l,
      i,
      u,
      n
    ), c = ki(), t !== null && !Gt ? ($i(t, e, n), tl(t, e, n)) : (ut && c && Ni(e), e.flags |= 1, It(t, e, a, n), e.child);
  }
  function Uo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !_i(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Ro(
        t,
        e,
        u,
        a,
        n
      )) : (t = Pn(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !bc(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Wa, l(i, a) && t.ref === e.ref)
        return tl(t, e, n);
    }
    return e.flags |= 1, t = ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ro(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Wa(u, a) && t.ref === e.ref)
        if (Gt = !1, e.pendingProps = a = u, bc(t, n))
          (t.flags & 131072) !== 0 && (Gt = !0);
        else
          return e.lanes = t.lanes, tl(t, e, n);
    }
    return mc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function Ho(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return jo(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && au(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? qs(e, u) : Zi(), Bs(e);
      else
        return a = e.lanes = 536870912, jo(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (au(e, u.cachePool), qs(e, u), bl(), e.memoizedState = null) : (t !== null && au(e, null), Zi(), bl());
    return It(t, e, n, l), e.child;
  }
  function dn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function jo(t, e, l, a, n) {
    var u = Bi();
    return u = u === null ? null : { parent: Bt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && au(e, null), Zi(), Bs(e), t !== null && va(t, e, a, !0), e.childLanes = n, null;
  }
  function Su(t, e) {
    return e = Au(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function qo(t, e, l) {
    return kl(e, t.child, null, l), t = Su(e, e.pendingProps), t.flags |= 2, ge(e), e.memoizedState = null, t;
  }
  function eh(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ut) {
        if (a.mode === "hidden")
          return t = Su(e, a), e.lanes = 536870912, dn(null, t);
        if (Vi(e), (t = xt) ? (t = kr(
          t,
          Oe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: dl !== null ? { id: Ge, overflow: Le } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ps(t), l.return = e, e.child = l, Wt = e, xt = null)) : t = null, t === null) throw hl(e);
        return e.lanes = 536870912, null;
      }
      return Su(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Vi(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = qo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (Gt || va(t, e, l, !1), n = (l & t.childLanes) !== 0, Gt || n) {
        if (a = bt, a !== null && (i = _f(a, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Ll(t, i), se(a, t, i), dc;
        Cu(), e = qo(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, xt = De(i.nextSibling), Wt = e, ut = !0, ml = null, Oe = !1, t !== null && As(e, t), e = Su(e, a), e.flags |= 4096;
      return e;
    }
    return t = ke(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function bu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function mc(t, e, l, a, n) {
    return wl(e), l = Ji(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = ki(), t !== null && !Gt ? ($i(t, e, n), tl(t, e, n)) : (ut && a && Ni(e), e.flags |= 1, It(t, e, l, n), e.child);
  }
  function Bo(t, e, l, a, n, u) {
    return wl(e), e.updateQueue = null, l = Gs(
      e,
      a,
      l,
      n
    ), Ys(t), a = ki(), t !== null && !Gt ? ($i(t, e, u), tl(t, e, u)) : (ut && a && Ni(e), e.flags |= 1, It(t, e, l, u), e.child);
  }
  function Yo(t, e, l, a, n) {
    if (wl(e), e.stateNode === null) {
      var u = da, i = l.contextType;
      typeof i == "object" && i !== null && (u = Ft(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = oc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Gi(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Ft(i) : da, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (sc(
        e,
        l,
        i,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && oc.enqueueReplaceState(u, u.state, null), cn(e, a, u, n), un(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, s = Wl(l, c);
      u.props = s;
      var y = u.context, E = l.contextType;
      i = da, typeof E == "object" && E !== null && (i = Ft(E));
      var z = l.getDerivedStateFromProps;
      E = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && xo(
        e,
        u,
        a,
        i
      ), vl = !1;
      var g = e.memoizedState;
      u.state = g, cn(e, a, u, n), un(), y = e.memoizedState, c || g !== y || vl ? (typeof z == "function" && (sc(
        e,
        l,
        z,
        a
      ), y = e.memoizedState), (s = vl || To(
        e,
        l,
        s,
        a,
        g,
        y,
        i
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = y), u.props = a, u.state = y, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Li(t, e), i = e.memoizedProps, E = Wl(l, i), u.props = E, z = e.pendingProps, g = u.context, y = l.contextType, s = da, typeof y == "object" && y !== null && (s = Ft(y)), c = l.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== z || g !== s) && xo(
        e,
        u,
        a,
        s
      ), vl = !1, g = e.memoizedState, u.state = g, cn(e, a, u, n), un();
      var p = e.memoizedState;
      i !== z || g !== p || vl || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof c == "function" && (sc(
        e,
        l,
        c,
        a
      ), p = e.memoizedState), (E = vl || To(
        e,
        l,
        E,
        a,
        g,
        p,
        s
      ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        p,
        s
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = p), u.props = a, u.state = p, u.context = s, a = E) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, bu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = kl(
      e,
      t.child,
      null,
      n
    ), e.child = kl(
      e,
      null,
      l,
      n
    )) : It(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = tl(
      t,
      e,
      n
    ), t;
  }
  function Go(t, e, l, a) {
    return Ql(), e.flags |= 256, It(t, e, l, a), e.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(t) {
    return { baseLanes: t, cachePool: Ms() };
  }
  function vc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function Lo(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Rt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ut) {
        if (n ? Sl(e) : bl(), (t = xt) ? (t = kr(
          t,
          Oe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: dl !== null ? { id: Ge, overflow: Le } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ps(t), l.return = e, e.child = l, Wt = e, xt = null)) : t = null, t === null) throw hl(e);
        return Ic(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (bl(), n = e.mode, c = Au(
        { mode: "hidden", children: c },
        n
      ), a = Xl(
        a,
        n,
        l,
        null
      ), c.return = e, a.return = e, c.sibling = a, e.child = c, a = e.child, a.memoizedState = yc(l), a.childLanes = vc(
        t,
        i,
        l
      ), e.memoizedState = hc, dn(null, a)) : (Sl(e), gc(e, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u)
        e.flags & 256 ? (Sl(e), e.flags &= -257, e = pc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (bl(), e.child = t.child, e.flags |= 128, e = null) : (bl(), c = a.fallback, n = e.mode, a = Au(
          { mode: "visible", children: a.children },
          n
        ), c = Xl(
          c,
          n,
          l,
          null
        ), c.flags |= 2, a.return = e, c.return = e, a.sibling = c, e.child = a, kl(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = yc(l), a.childLanes = vc(
          t,
          i,
          l
        ), e.memoizedState = hc, e = dn(null, a));
      else if (Sl(e), Ic(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(f(419)), a.stack = "", a.digest = i, Pa({ value: a, source: null, stack: null }), e = pc(
          t,
          e,
          l
        );
      } else if (Gt || va(t, e, l, !1), i = (l & t.childLanes) !== 0, Gt || i) {
        if (i = bt, i !== null && (a = _f(i, l), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Ll(t, a), se(i, t, a), dc;
        Fc(c) || Cu(), e = pc(
          t,
          e,
          l
        );
      } else
        Fc(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = s.treeContext, xt = De(
          c.nextSibling
        ), Wt = e, ut = !0, ml = null, Oe = !1, t !== null && As(e, t), e = gc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (bl(), c = a.fallback, n = e.mode, s = t.child, y = s.sibling, a = ke(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = ke(
      y,
      c
    ) : (c = Xl(
      c,
      n,
      l,
      null
    ), c.flags |= 2), c.return = e, a.return = e, a.sibling = c, e.child = a, dn(null, a), a = e.child, c = t.child.memoizedState, c === null ? c = yc(l) : (n = c.cachePool, n !== null ? (s = Bt._currentValue, n = n.parent !== s ? { parent: s, pool: s } : n) : n = Ms(), c = {
      baseLanes: c.baseLanes | l,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = vc(
      t,
      i,
      l
    ), e.memoizedState = hc, dn(t.child, a)) : (Sl(e), l = t.child, t = l.sibling, l = ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function gc(t, e) {
    return e = Au(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Au(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function pc(t, e, l) {
    return kl(e, t.child, null, l), t = gc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Xo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ri(t.return, e, l);
  }
  function Sc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function Qo(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Rt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, R(Rt, i), It(t, e, a, l), a = ut ? Ia : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Xo(t, l, e);
        else if (t.tag === 19)
          Xo(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && su(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Sc(
          e,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && su(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Sc(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Sc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Tl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (va(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = ke(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function bc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
  }
  function lh(t, e, l) {
    switch (e.tag) {
      case 3:
        Y(e, e.stateNode.containerInfo), yl(e, Bt, t.memoizedState.cache), Ql();
        break;
      case 27:
      case 5:
        Mt(e);
        break;
      case 4:
        Y(e, e.stateNode.containerInfo);
        break;
      case 10:
        yl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Vi(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Lo(t, e, l) : (Sl(e), t = tl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (va(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return Qo(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Rt, Rt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Ho(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        yl(e, Bt, t.memoizedState.cache);
    }
    return tl(t, e, l);
  }
  function Zo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Gt = !0;
      else {
        if (!bc(t, l) && (e.flags & 128) === 0)
          return Gt = !1, lh(
            t,
            e,
            l
          );
        Gt = (t.flags & 131072) !== 0;
      }
    else
      Gt = !1, ut && (e.flags & 1048576) !== 0 && bs(e, Ia, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Kl(e.elementType), e.type = t, typeof t == "function")
            _i(t) ? (a = Wl(t, a), e.tag = 1, e = Yo(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = mc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Vt) {
                e.tag = 11, e = Do(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === W) {
                e.tag = 14, e = Uo(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = Zt(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return mc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = Wl(
          a,
          e.pendingProps
        ), Yo(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Y(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, Li(t, e), cn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, yl(e, Bt, a), a !== u.cache && Hi(
            e,
            [Bt],
            l,
            !0
          ), un(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Go(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = ze(
                Error(f(424)),
                e
              ), Pa(n), e = Go(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, xt = De(t.firstChild), Wt = e, ut = !0, ml = null, Oe = !0, l = Rs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ql(), a === n) {
              e = tl(
                t,
                e,
                l
              );
              break t;
            }
            It(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return bu(t, e), t === null ? (l = td(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ut || (l = e.type, t = e.pendingProps, a = Bu(
          k.current
        ).createElement(l), a[$t] = e, a[ae] = t, Pt(a, l, t), Jt(a), e.stateNode = a) : e.memoizedState = td(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Mt(e), t === null && ut && (a = e.stateNode = Fr(
          e.type,
          e.pendingProps,
          k.current
        ), Wt = e, Oe = !0, n = xt, Nl(e.type) ? (Pc = n, xt = De(a.firstChild)) : xt = n), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), bu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ut && ((n = a = xt) && (a = Uh(
          a,
          e.type,
          e.pendingProps,
          Oe
        ), a !== null ? (e.stateNode = a, Wt = e, xt = De(a.firstChild), Oe = !1, n = !0) : n = !1), n || hl(e)), Mt(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, kc(n, u) ? a = null : i !== null && kc(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = Ji(
          t,
          e,
          Jm,
          null,
          null,
          l
        ), Mn._currentValue = n), bu(t, e), It(t, e, a, l), e.child;
      case 6:
        return t === null && ut && ((t = l = xt) && (l = Rh(
          l,
          e.pendingProps,
          Oe
        ), l !== null ? (e.stateNode = l, Wt = e, xt = null, t = !0) : t = !1), t || hl(e)), null;
      case 13:
        return Lo(t, e, l);
      case 4:
        return Y(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = kl(
          e,
          null,
          a,
          l
        ) : It(t, e, a, l), e.child;
      case 11:
        return Do(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return It(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, yl(e, e.type, a.value), It(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, wl(e), n = Ft(n), a = a(n), e.flags |= 1, It(t, e, a, l), e.child;
      case 14:
        return Uo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Ro(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Qo(t, e, l);
      case 31:
        return eh(t, e, l);
      case 22:
        return Ho(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return wl(e), a = Ft(Bt), t === null ? (n = Bi(), n === null && (n = bt, u = ji(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, Gi(e), yl(e, Bt, n)) : ((t.lanes & l) !== 0 && (Li(t, e), cn(e, null, null, l), un()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), yl(e, Bt, a)) : (a = u.cache, yl(e, Bt, a), a !== n.cache && Hi(
          e,
          [Bt],
          l,
          !0
        ))), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function el(t) {
    t.flags |= 4;
  }
  function Ac(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (vr()) t.flags |= 8192;
        else
          throw Jl = uu, Yi;
    } else t.flags &= -16777217;
  }
  function wo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ud(e))
      if (vr()) t.flags |= 8192;
      else
        throw Jl = uu, Yi;
  }
  function Eu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ef() : 536870912, t.lanes |= e, Na |= e);
  }
  function mn(t, e) {
    if (!ut)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function ah(t, e, l) {
    var a = e.pendingProps;
    switch (Oi(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Fe(Bt), Q(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ya(e) ? el(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Di())), _t(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (el(e), u !== null ? (_t(e), wo(e, u)) : (_t(e), Ac(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (el(e), _t(e), wo(e, u)) : (_t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && el(e), _t(e), Ac(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (Be(e), l = k.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && el(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return _t(e), null;
          }
          t = q.current, ya(e) ? Es(e) : (t = Fr(n, a, l), e.stateNode = t, el(e));
        }
        return _t(e), null;
      case 5:
        if (Be(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && el(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return _t(e), null;
          }
          if (u = q.current, ya(e))
            Es(e);
          else {
            var i = Bu(
              k.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[$t] = e, u[ae] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Pt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && el(e);
          }
        }
        return _t(e), Ac(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && el(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = k.current, ya(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Wt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[$t] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Lr(t.nodeValue, l)), t || hl(e, !0);
          } else
            t = Bu(t).createTextNode(
              a
            ), t[$t] = e, e.stateNode = t;
        }
        return _t(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = ya(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[$t] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), t = !1;
          } else
            l = Di(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return _t(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = ya(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[$t] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), n = !1;
          } else
            n = Di(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
        }
        return ge(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Eu(e, e.updateQueue), _t(e), null);
      case 4:
        return Q(), t === null && Zc(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return Fe(e.type), _t(e), null;
      case 19:
        if (_(Rt), a = e.memoizedState, a === null) return _t(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) mn(a, !1);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = su(t), u !== null) {
                  for (e.flags |= 128, mn(a, !1), t = u.updateQueue, e.updateQueue = t, Eu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    gs(l, t), l = l.sibling;
                  return R(
                    Rt,
                    Rt.current & 1 | 2
                  ), ut && $e(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && re() > Mu && (e.flags |= 128, n = !0, mn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = su(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Eu(e, t), mn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ut)
                return _t(e), null;
            } else
              2 * re() - a.renderingStartTime > Mu && l !== 536870912 && (e.flags |= 128, n = !0, mn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = re(), t.sibling = null, l = Rt.current, R(
          Rt,
          n ? l & 1 | 2 : l & 1
        ), ut && $e(e, a.treeForkCount), t) : (_t(e), null);
      case 22:
      case 23:
        return ge(e), wi(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _t(e), l = e.updateQueue, l !== null && Eu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && _(Vl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Fe(Bt), _t(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function nh(t, e) {
    switch (Oi(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Fe(Bt), Q(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Be(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ge(e), e.alternate === null)
            throw Error(f(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return _(Rt), null;
      case 4:
        return Q(), null;
      case 10:
        return Fe(e.type), null;
      case 22:
      case 23:
        return ge(e), wi(), t !== null && _(Vl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Fe(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vo(t, e) {
    switch (Oi(e), e.tag) {
      case 3:
        Fe(Bt), Q();
        break;
      case 26:
      case 27:
      case 5:
        Be(e);
        break;
      case 4:
        Q();
        break;
      case 31:
        e.memoizedState !== null && ge(e);
        break;
      case 13:
        ge(e);
        break;
      case 19:
        _(Rt);
        break;
      case 10:
        Fe(e.type);
        break;
      case 22:
      case 23:
        ge(e), wi(), t !== null && _(Vl);
        break;
      case 24:
        Fe(Bt);
    }
  }
  function hn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (c) {
      ht(e, e.return, c);
    }
  }
  function Al(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = e;
              var s = l, y = c;
              try {
                y();
              } catch (E) {
                ht(
                  n,
                  s,
                  E
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      ht(e, e.return, E);
    }
  }
  function Ko(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        js(e, l);
      } catch (a) {
        ht(t, t.return, a);
      }
    }
  }
  function Jo(t, e, l) {
    l.props = Wl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      ht(t, e, a);
    }
  }
  function yn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      ht(t, e, n);
    }
  }
  function Xe(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ht(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          ht(t, e, n);
        }
      else l.current = null;
  }
  function ko(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      ht(t, t.return, n);
    }
  }
  function Ec(t, e, l) {
    try {
      var a = t.stateNode;
      zh(a, t.type, l, e), a[ae] = e;
    } catch (n) {
      ht(t, t.return, n);
    }
  }
  function $o(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Nl(t.type) || t.tag === 4;
  }
  function Tc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || $o(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Nl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ke));
    else if (a !== 4 && (a === 27 && Nl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (xc(t, e, l), t = t.sibling; t !== null; )
        xc(t, e, l), t = t.sibling;
  }
  function Tu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Nl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Tu(t, e, l), t = t.sibling; t !== null; )
        Tu(t, e, l), t = t.sibling;
  }
  function Wo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Pt(e, a, l), e[$t] = t, e[ae] = l;
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  var ll = !1, Lt = !1, _c = !1, Fo = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function uh(t, e) {
    if (t = t.containerInfo, Kc = wu, t = fs(t), pi(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0, c = -1, s = -1, y = 0, E = 0, z = t, g = null;
            e: for (; ; ) {
              for (var p; z !== l || n !== 0 && z.nodeType !== 3 || (c = i + n), z !== u || a !== 0 && z.nodeType !== 3 || (s = i + a), z.nodeType === 3 && (i += z.nodeValue.length), (p = z.firstChild) !== null; )
                g = z, z = p;
              for (; ; ) {
                if (z === t) break e;
                if (g === l && ++y === n && (c = i), g === u && ++E === a && (s = i), (p = z.nextSibling) !== null) break;
                z = g, g = z.parentNode;
              }
              z = p;
            }
            l = c === -1 || s === -1 ? null : { start: c, end: s };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Jc = { focusedElem: t, selectionRange: l }, wu = !1, kt = e; kt !== null; )
      if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, kt = t;
      else
        for (; kt !== null; ) {
          switch (e = kt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var B = Wl(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    B,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Z) {
                  ht(
                    l,
                    l.return,
                    Z
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Wc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break;
          }
          kt = e.return;
        }
  }
  function Io(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        nl(t, l), a & 4 && hn(5, l);
        break;
      case 1:
        if (nl(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              ht(l, l.return, i);
            }
          else {
            var n = Wl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              ht(
                l,
                l.return,
                i
              );
            }
          }
        a & 64 && Ko(l), a & 512 && yn(l, l.return);
        break;
      case 3:
        if (nl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            js(t, e);
          } catch (i) {
            ht(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Wo(l);
      case 26:
      case 5:
        nl(t, l), e === null && a & 4 && ko(l), a & 512 && yn(l, l.return);
        break;
      case 12:
        nl(t, l);
        break;
      case 31:
        nl(t, l), a & 4 && er(t, l);
        break;
      case 13:
        nl(t, l), a & 4 && lr(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = hh.bind(
          null,
          l
        ), Hh(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || ll, !a) {
          e = e !== null && e.memoizedState !== null || Lt, n = ll;
          var u = Lt;
          ll = a, (Lt = e) && !u ? ul(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : nl(t, l), ll = n, Lt = u;
        }
        break;
      case 30:
        break;
      default:
        nl(t, l);
    }
  }
  function Po(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Po(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ei(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, ue = !1;
  function al(t, e, l) {
    for (l = l.child; l !== null; )
      tr(t, e, l), l = l.sibling;
  }
  function tr(t, e, l) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(Ya, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Lt || Xe(l, e), al(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Lt || Xe(l, e);
        var a = Nt, n = ue;
        Nl(l.type) && (Nt = l.stateNode, ue = !1), al(
          t,
          e,
          l
        ), xn(l.stateNode), Nt = a, ue = n;
        break;
      case 5:
        Lt || Xe(l, e);
      case 6:
        if (a = Nt, n = ue, Nt = null, al(
          t,
          e,
          l
        ), Nt = a, ue = n, Nt !== null)
          if (ue)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(l.stateNode);
            } catch (u) {
              ht(
                l,
                e,
                u
              );
            }
          else
            try {
              Nt.removeChild(l.stateNode);
            } catch (u) {
              ht(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Nt !== null && (ue ? (t = Nt, Kr(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), qa(t)) : Kr(Nt, l.stateNode));
        break;
      case 4:
        a = Nt, n = ue, Nt = l.stateNode.containerInfo, ue = !0, al(
          t,
          e,
          l
        ), Nt = a, ue = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Al(2, l, e), Lt || Al(4, l, e), al(
          t,
          e,
          l
        );
        break;
      case 1:
        Lt || (Xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Jo(
          l,
          e,
          a
        )), al(
          t,
          e,
          l
        );
        break;
      case 21:
        al(
          t,
          e,
          l
        );
        break;
      case 22:
        Lt = (a = Lt) || l.memoizedState !== null, al(
          t,
          e,
          l
        ), Lt = a;
        break;
      default:
        al(
          t,
          e,
          l
        );
    }
  }
  function er(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        qa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
    }
  }
  function lr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        qa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
  }
  function ih(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Fo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Fo()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function xu(t, e) {
    var l = ih(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = yh.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ie(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Nl(c.type)) {
                Nt = c.stateNode, ue = !1;
                break t;
              }
              break;
            case 5:
              Nt = c.stateNode, ue = !1;
              break t;
            case 3:
            case 4:
              Nt = c.stateNode.containerInfo, ue = !0;
              break t;
          }
          c = c.return;
        }
        if (Nt === null) throw Error(f(160));
        tr(u, i, n), Nt = null, ue = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        ar(e, t), e = e.sibling;
  }
  var He = null;
  function ar(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, t), ce(t), a & 4 && (Al(3, t, t.return), hn(3, t), Al(5, t, t.return));
        break;
      case 1:
        ie(e, t), ce(t), a & 512 && (Lt || l === null || Xe(l, l.return)), a & 64 && ll && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = He;
        if (ie(e, t), ce(t), a & 512 && (Lt || l === null || Xe(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Xa] || u[$t] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Pt(u, a, l), u[$t] = t, Jt(u), a = u;
                      break t;
                    case "link":
                      var i = ad(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Pt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = ad(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Pt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[$t] = t, Jt(u), a = u;
                }
                t.stateNode = a;
              } else
                nd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ld(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? nd(
              n,
              t.type,
              t.stateNode
            ) : ld(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Ec(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, t), ce(t), a & 512 && (Lt || l === null || Xe(l, l.return)), l !== null && a & 4 && Ec(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ie(e, t), ce(t), a & 512 && (Lt || l === null || Xe(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            ua(n, "");
          } catch (B) {
            ht(t, t.return, B);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Ec(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (_c = !0);
        break;
      case 6:
        if (ie(e, t), ce(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (B) {
            ht(t, t.return, B);
          }
        }
        break;
      case 3:
        if (Lu = null, n = He, He = Yu(e.containerInfo), ie(e, t), He = n, ce(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            qa(e.containerInfo);
          } catch (B) {
            ht(t, t.return, B);
          }
        _c && (_c = !1, nr(t));
        break;
      case 4:
        a = He, He = Yu(
          t.stateNode.containerInfo
        ), ie(e, t), ce(t), He = a;
        break;
      case 12:
        ie(e, t), ce(t);
        break;
      case 31:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, xu(t, a)));
        break;
      case 13:
        ie(e, t), ce(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (zu = re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, xu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = l !== null && l.memoizedState !== null, y = ll, E = Lt;
        if (ll = y || n, Lt = E || s, ie(e, t), Lt = E, ll = y, ce(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || s || ll || Lt || Fl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                s = l = e;
                try {
                  if (u = s.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var z = s.memoizedProps.style, g = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (B) {
                  ht(s, s.return, B);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                s = e;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (B) {
                  ht(s, s.return, B);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                s = e;
                try {
                  var p = s.stateNode;
                  n ? Jr(p, !0) : Jr(s.stateNode, !1);
                } catch (B) {
                  ht(s, s.return, B);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, xu(t, l))));
        break;
      case 19:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, xu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ie(e, t), ce(t);
    }
  }
  function ce(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if ($o(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Tc(t);
            Tu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ua(i, ""), l.flags &= -33);
            var c = Tc(t);
            Tu(t, c, i);
            break;
          case 3:
          case 4:
            var s = l.stateNode.containerInfo, y = Tc(t);
            xc(
              t,
              y,
              s
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (E) {
        ht(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function nr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        nr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function nl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Io(t, e.alternate, e), e = e.sibling;
  }
  function Fl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(4, e, e.return), Fl(e);
          break;
        case 1:
          Xe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Jo(
            e,
            e.return,
            l
          ), Fl(e);
          break;
        case 27:
          xn(e.stateNode);
        case 26:
        case 5:
          Xe(e, e.return), Fl(e);
          break;
        case 22:
          e.memoizedState === null && Fl(e);
          break;
        case 30:
          Fl(e);
          break;
        default:
          Fl(e);
      }
      t = t.sibling;
    }
  }
  function ul(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ul(
            n,
            u,
            l
          ), hn(4, u);
          break;
        case 1:
          if (ul(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              ht(a, a.return, y);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Hs(s[n], c);
            } catch (y) {
              ht(a, a.return, y);
            }
          }
          l && i & 64 && Ko(u), yn(u, u.return);
          break;
        case 27:
          Wo(u);
        case 26:
        case 5:
          ul(
            n,
            u,
            l
          ), l && a === null && i & 4 && ko(u), yn(u, u.return);
          break;
        case 12:
          ul(
            n,
            u,
            l
          );
          break;
        case 31:
          ul(
            n,
            u,
            l
          ), l && i & 4 && er(n, u);
          break;
        case 13:
          ul(
            n,
            u,
            l
          ), l && i & 4 && lr(n, u);
          break;
        case 22:
          u.memoizedState === null && ul(
            n,
            u,
            l
          ), yn(u, u.return);
          break;
        case 30:
          break;
        default:
          ul(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function zc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && tn(l));
  }
  function Mc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && tn(t));
  }
  function je(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ur(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function ur(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        je(
          t,
          e,
          l,
          a
        ), n & 2048 && hn(9, e);
        break;
      case 1:
        je(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        je(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && tn(t)));
        break;
      case 12:
        if (n & 2048) {
          je(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (s) {
            ht(e, e.return, s);
          }
        } else
          je(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        je(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        je(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? je(
          t,
          e,
          l,
          a
        ) : vn(t, e) : u._visibility & 2 ? je(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, _a(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && zc(i, e);
        break;
      case 24:
        je(
          t,
          e,
          l,
          a
        ), n & 2048 && Mc(e.alternate, e);
        break;
      default:
        je(
          t,
          e,
          l,
          a
        );
    }
  }
  function _a(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, c = l, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            u,
            i,
            c,
            s,
            n
          ), hn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? _a(
            u,
            i,
            c,
            s,
            n
          ) : vn(
            u,
            i
          ) : (E._visibility |= 2, _a(
            u,
            i,
            c,
            s,
            n
          )), n && y & 2048 && zc(
            i.alternate,
            i
          );
          break;
        case 24:
          _a(
            u,
            i,
            c,
            s,
            n
          ), n && y & 2048 && Mc(i.alternate, i);
          break;
        default:
          _a(
            u,
            i,
            c,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            vn(l, a), n & 2048 && zc(
              a.alternate,
              a
            );
            break;
          case 24:
            vn(l, a), n & 2048 && Mc(a.alternate, a);
            break;
          default:
            vn(l, a);
        }
        e = e.sibling;
      }
  }
  var gn = 8192;
  function za(t, e, l) {
    if (t.subtreeFlags & gn)
      for (t = t.child; t !== null; )
        ir(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function ir(t, e, l) {
    switch (t.tag) {
      case 26:
        za(
          t,
          e,
          l
        ), t.flags & gn && t.memoizedState !== null && Kh(
          l,
          He,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        za(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = He;
        He = Yu(t.stateNode.containerInfo), za(
          t,
          e,
          l
        ), He = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = gn, gn = 16777216, za(
          t,
          e,
          l
        ), gn = a) : za(
          t,
          e,
          l
        ));
        break;
      default:
        za(
          t,
          e,
          l
        );
    }
  }
  function cr(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function pn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, sr(
            a,
            t
          );
        }
      cr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        fr(t), t = t.sibling;
  }
  function fr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pn(t), t.flags & 2048 && Al(9, t, t.return);
        break;
      case 3:
        pn(t);
        break;
      case 12:
        pn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, _u(t)) : pn(t);
        break;
      default:
        pn(t);
    }
  }
  function _u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, sr(
            a,
            t
          );
        }
      cr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, e, e.return), _u(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, _u(e));
          break;
        default:
          _u(e);
      }
      t = t.sibling;
    }
  }
  function sr(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, kt = a;
      else
        t: for (l = t; kt !== null; ) {
          a = kt;
          var n = a.sibling, u = a.return;
          if (Po(a), a === l) {
            kt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, kt = n;
            break t;
          }
          kt = u;
        }
    }
  }
  var ch = {
    getCacheForType: function(t) {
      var e = Ft(Bt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Ft(Bt).controller.signal;
    }
  }, fh = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, bt = null, P = null, et = 0, mt = 0, pe = null, El = !1, Ma = !1, Nc = !1, il = 0, Ut = 0, Tl = 0, Il = 0, Oc = 0, Se = 0, Na = 0, Sn = null, fe = null, Cc = !1, zu = 0, or = 0, Mu = 1 / 0, Nu = null, xl = null, wt = 0, _l = null, Oa = null, cl = 0, Dc = 0, Uc = null, rr = null, bn = 0, Rc = null;
  function be() {
    return (rt & 2) !== 0 && et !== 0 ? et & -et : A.T !== null ? Gc() : zf();
  }
  function dr() {
    if (Se === 0)
      if ((et & 536870912) === 0 || ut) {
        var t = qn;
        qn <<= 1, (qn & 3932160) === 0 && (qn = 262144), Se = t;
      } else Se = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), Se;
  }
  function se(t, e, l) {
    (t === bt && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0), zl(
      t,
      et,
      Se,
      !1
    )), La(t, l), ((rt & 2) === 0 || t !== bt) && (t === bt && ((rt & 2) === 0 && (Il |= l), Ut === 4 && zl(
      t,
      et,
      Se,
      !1
    )), Qe(t));
  }
  function mr(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ga(t, e), n = a ? rh(t, e) : jc(t, e, !0), u = a;
    do {
      if (n === 0) {
        Ma && !a && zl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !sh(l)) {
          n = jc(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              n = Sn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Ca(c, i).flags |= 256), i = jc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Nc && !s) {
                  c.errorRecoveryDisabledLanes |= u, Il |= u, n = 4;
                  break t;
                }
                u = fe, fe = n, u !== null && (fe === null ? fe = u : fe.push.apply(
                  fe,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ca(t, 0), zl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              zl(
                a,
                e,
                Se,
                !El
              );
              break t;
            case 2:
              fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = zu + 300 - re(), 10 < n)) {
            if (zl(
              a,
              e,
              Se,
              !El
            ), Yn(a, 0, !0) !== 0) break t;
            cl = e, a.timeoutHandle = wr(
              hr.bind(
                null,
                a,
                l,
                fe,
                Nu,
                Cc,
                e,
                Se,
                Il,
                Na,
                El,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          hr(
            a,
            l,
            fe,
            Nu,
            Cc,
            e,
            Se,
            Il,
            Na,
            El,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qe(t);
  }
  function hr(t, e, l, a, n, u, i, c, s, y, E, z, g, p) {
    if (t.timeoutHandle = -1, z = e.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ke
      }, ir(
        e,
        u,
        z
      );
      var B = (u & 62914560) === u ? zu - re() : (u & 4194048) === u ? or - re() : 0;
      if (B = Jh(
        z,
        B
      ), B !== null) {
        cl = u, t.cancelPendingCommit = B(
          Er.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            i,
            c,
            s,
            E,
            z,
            null,
            g,
            p
          )
        ), zl(t, u, i, !y);
        return;
      }
    }
    Er(
      t,
      e,
      u,
      l,
      a,
      n,
      i,
      c,
      s
    );
  }
  function sh(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!he(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function zl(t, e, l, a) {
    e &= ~Oc, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - me(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && Tf(t, l, e);
  }
  function Ou() {
    return (rt & 6) === 0 ? (An(0), !1) : !0;
  }
  function Hc() {
    if (P !== null) {
      if (mt === 0)
        var t = P.return;
      else
        t = P, We = Zl = null, Wi(t), ba = null, ln = 0, t = P;
      for (; t !== null; )
        Vo(t.alternate, t), t = t.return;
      P = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Oh(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), cl = 0, Hc(), bt = t, P = l = ke(t.current, null), et = e, mt = 0, pe = null, El = !1, Ma = Ga(t, e), Nc = !1, Na = Se = Oc = Il = Tl = Ut = 0, fe = Sn = null, Cc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - me(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return il = e, Wn(), l;
  }
  function yr(t, e) {
    $ = null, A.H = rn, e === Sa || e === nu ? (e = Cs(), mt = 3) : e === Yi ? (e = Cs(), mt = 4) : mt = e === dc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, pe = e, P === null && (Ut = 1, pu(
      t,
      ze(e, t.current)
    ));
  }
  function vr() {
    var t = ve.current;
    return t === null ? !0 : (et & 4194048) === et ? Ce === null : (et & 62914560) === et || (et & 536870912) !== 0 ? t === Ce : !1;
  }
  function gr() {
    var t = A.H;
    return A.H = rn, t === null ? rn : t;
  }
  function pr() {
    var t = A.A;
    return A.A = ch, t;
  }
  function Cu() {
    Ut = 4, El || (et & 4194048) !== et && ve.current !== null || (Ma = !0), (Tl & 134217727) === 0 && (Il & 134217727) === 0 || bt === null || zl(
      bt,
      et,
      Se,
      !1
    );
  }
  function jc(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = gr(), u = pr();
    (bt !== t || et !== e) && (Nu = null, Ca(t, e)), e = !1;
    var i = Ut;
    t: do
      try {
        if (mt !== 0 && P !== null) {
          var c = P, s = pe;
          switch (mt) {
            case 8:
              Hc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = !0);
              var y = mt;
              if (mt = 0, pe = null, Da(t, c, s, y), l && Ma) {
                i = 0;
                break t;
              }
              break;
            default:
              y = mt, mt = 0, pe = null, Da(t, c, s, y);
          }
        }
        oh(), i = Ut;
        break;
      } catch (E) {
        yr(t, E);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Zl = null, rt = a, A.H = n, A.A = u, P === null && (bt = null, et = 0, Wn()), i;
  }
  function oh() {
    for (; P !== null; ) Sr(P);
  }
  function rh(t, e) {
    var l = rt;
    rt |= 2;
    var a = gr(), n = pr();
    bt !== t || et !== e ? (Nu = null, Mu = re() + 500, Ca(t, e)) : Ma = Ga(
      t,
      e
    );
    t: do
      try {
        if (mt !== 0 && P !== null) {
          e = P;
          var u = pe;
          e: switch (mt) {
            case 1:
              mt = 0, pe = null, Da(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Ns(u)) {
                mt = 0, pe = null, br(e);
                break;
              }
              e = function() {
                mt !== 2 && mt !== 9 || bt !== t || (mt = 7), Qe(t);
              }, u.then(e, e);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Ns(u) ? (mt = 0, pe = null, br(e)) : (mt = 0, pe = null, Da(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (P.tag) {
                case 26:
                  i = P.memoizedState;
                case 5:
                case 27:
                  var c = P;
                  if (i ? ud(i) : c.stateNode.complete) {
                    mt = 0, pe = null;
                    var s = c.sibling;
                    if (s !== null) P = s;
                    else {
                      var y = c.return;
                      y !== null ? (P = y, Du(y)) : P = null;
                    }
                    break e;
                  }
              }
              mt = 0, pe = null, Da(t, e, u, 5);
              break;
            case 6:
              mt = 0, pe = null, Da(t, e, u, 6);
              break;
            case 8:
              Hc(), Ut = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        dh();
        break;
      } catch (E) {
        yr(t, E);
      }
    while (!0);
    return We = Zl = null, A.H = a, A.A = n, rt = l, P !== null ? 0 : (bt = null, et = 0, Wn(), Ut);
  }
  function dh() {
    for (; P !== null && !Rn(); )
      Sr(P);
  }
  function Sr(t) {
    var e = Zo(t.alternate, t, il);
    t.memoizedProps = t.pendingProps, e === null ? Du(t) : P = e;
  }
  function br(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Bo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          et
        );
        break;
      case 11:
        e = Bo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          et
        );
        break;
      case 5:
        Wi(e);
      default:
        Vo(l, e), e = P = gs(e, il), e = Zo(l, e, il);
    }
    t.memoizedProps = t.pendingProps, e === null ? Du(t) : P = e;
  }
  function Da(t, e, l, a) {
    We = Zl = null, Wi(e), ba = null, ln = 0;
    var n = e.return;
    try {
      if (th(
        t,
        n,
        e,
        l,
        et
      )) {
        Ut = 1, pu(
          t,
          ze(l, t.current)
        ), P = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw P = n, u;
      Ut = 1, pu(
        t,
        ze(l, t.current)
      ), P = null;
      return;
    }
    e.flags & 32768 ? (ut || a === 1 ? t = !0 : Ma || (et & 536870912) !== 0 ? t = !1 : (El = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ve.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ar(e, t)) : Du(e);
  }
  function Du(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ar(
          e,
          El
        );
        return;
      }
      t = e.return;
      var l = ah(
        e.alternate,
        e,
        il
      );
      if (l !== null) {
        P = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        P = e;
        return;
      }
      P = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function Ar(t, e) {
    do {
      var l = nh(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, P = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        P = t;
        return;
      }
      P = t = l;
    } while (t !== null);
    Ut = 6, P = null;
  }
  function Er(t, e, l, a, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      Uu();
    while (wt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= Ti, Vd(
        t,
        l,
        u,
        i,
        c,
        s
      ), t === bt && (P = bt = null, et = 0), Oa = e, _l = t, cl = l, Dc = u, Uc = n, rr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, vh(Hn, function() {
        return Mr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, n = S.p, S.p = 2, i = rt, rt |= 4;
        try {
          uh(t, e, l);
        } finally {
          rt = i, S.p = n, A.T = a;
        }
      }
      wt = 1, Tr(), xr(), _r();
    }
  }
  function Tr() {
    if (wt === 1) {
      wt = 0;
      var t = _l, e = Oa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = A.T, A.T = null;
        var a = S.p;
        S.p = 2;
        var n = rt;
        rt |= 4;
        try {
          ar(e, t);
          var u = Jc, i = fs(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && cs(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && pi(c)) {
              var y = s.start, E = s.end;
              if (E === void 0 && (E = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  E,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, g = z && z.defaultView || window;
                if (g.getSelection) {
                  var p = g.getSelection(), B = c.textContent.length, Z = Math.min(s.start, B), St = s.end === void 0 ? Z : Math.min(s.end, B);
                  !p.extend && Z > St && (i = St, St = Z, Z = i);
                  var d = is(
                    c,
                    Z
                  ), o = is(
                    c,
                    St
                  );
                  if (d && o && (p.rangeCount !== 1 || p.anchorNode !== d.node || p.anchorOffset !== d.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                    var h = z.createRange();
                    h.setStart(d.node, d.offset), p.removeAllRanges(), Z > St ? (p.addRange(h), p.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), p.addRange(h));
                  }
                }
              }
            }
            for (z = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && z.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var T = z[c];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          wu = !!Kc, Jc = Kc = null;
        } finally {
          rt = n, S.p = a, A.T = l;
        }
      }
      t.current = e, wt = 2;
    }
  }
  function xr() {
    if (wt === 2) {
      wt = 0;
      var t = _l, e = Oa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = A.T, A.T = null;
        var a = S.p;
        S.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Io(t, e.alternate, e);
        } finally {
          rt = n, S.p = a, A.T = l;
        }
      }
      wt = 3;
    }
  }
  function _r() {
    if (wt === 4 || wt === 3) {
      wt = 0, qd();
      var t = _l, e = Oa, l = cl, a = rr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? wt = 5 : (wt = 0, Oa = _l = null, zr(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (xl = null), Pu(l), e = e.stateNode, de && typeof de.onCommitFiberRoot == "function")
        try {
          de.onCommitFiberRoot(
            Ya,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = A.T, n = S.p, S.p = 2, A.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          A.T = e, S.p = n;
        }
      }
      (cl & 3) !== 0 && Uu(), Qe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Rc ? bn++ : (bn = 0, Rc = t) : bn = 0, An(0);
    }
  }
  function zr(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, tn(e)));
  }
  function Uu() {
    return Tr(), xr(), _r(), Mr();
  }
  function Mr() {
    if (wt !== 5) return !1;
    var t = _l, e = Dc;
    Dc = 0;
    var l = Pu(cl), a = A.T, n = S.p;
    try {
      S.p = 32 > l ? 32 : l, A.T = null, l = Uc, Uc = null;
      var u = _l, i = cl;
      if (wt = 0, Oa = _l = null, cl = 0, (rt & 6) !== 0) throw Error(f(331));
      var c = rt;
      if (rt |= 4, fr(u.current), ur(
        u,
        u.current,
        i,
        l
      ), rt = c, An(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
        try {
          de.onPostCommitFiberRoot(Ya, u);
        } catch {
        }
      return !0;
    } finally {
      S.p = n, A.T = a, zr(t, e);
    }
  }
  function Nr(t, e, l) {
    e = ze(l, e), e = rc(t.stateNode, e, 2), t = pl(t, e, 2), t !== null && (La(t, 2), Qe(t));
  }
  function ht(t, e, l) {
    if (t.tag === 3)
      Nr(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Nr(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xl === null || !xl.has(a))) {
            t = ze(l, t), l = Oo(2), a = pl(e, l, 2), a !== null && (Co(
              l,
              a,
              e,
              t
            ), La(a, 2), Qe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function qc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new fh();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Nc = !0, n.add(l), t = mh.bind(null, t, e, l), e.then(t, t));
  }
  function mh(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, bt === t && (et & l) === l && (Ut === 4 || Ut === 3 && (et & 62914560) === et && 300 > re() - zu ? (rt & 2) === 0 && Ca(t, 0) : Oc |= l, Na === et && (Na = 0)), Qe(t);
  }
  function Or(t, e) {
    e === 0 && (e = Ef()), t = Ll(t, e), t !== null && (La(t, e), Qe(t));
  }
  function hh(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Or(t, l);
  }
  function yh(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), Or(t, l);
  }
  function vh(t, e) {
    return oe(t, e);
  }
  var Ru = null, Ua = null, Bc = !1, Hu = !1, Yc = !1, Ml = 0;
  function Qe(t) {
    t !== Ua && t.next === null && (Ua === null ? Ru = Ua = t : Ua = Ua.next = t), Hu = !0, Bc || (Bc = !0, ph());
  }
  function An(t, e) {
    if (!Yc && Hu) {
      Yc = !0;
      do
        for (var l = !1, a = Ru; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - me(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Rr(a, u));
          } else
            u = et, u = Yn(
              a,
              a === bt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ga(a, u) || (l = !0, Rr(a, u));
          a = a.next;
        }
      while (l);
      Yc = !1;
    }
  }
  function gh() {
    Cr();
  }
  function Cr() {
    Hu = Bc = !1;
    var t = 0;
    Ml !== 0 && Nh() && (t = Ml);
    for (var e = re(), l = null, a = Ru; a !== null; ) {
      var n = a.next, u = Dr(a, e);
      u === 0 ? (a.next = null, l === null ? Ru = n : l.next = n, n === null && (Ua = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Hu = !0)), a = n;
    }
    wt !== 0 && wt !== 5 || An(t), Ml !== 0 && (Ml = 0);
  }
  function Dr(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - me(u), c = 1 << i, s = n[i];
      s === -1 ? ((c & l) === 0 || (c & a) !== 0) && (n[i] = wd(c, e)) : s <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = bt, l = et, l = Yn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ba(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ga(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Ba(a), Pu(l)) {
        case 2:
        case 8:
          l = bf;
          break;
        case 32:
          l = Hn;
          break;
        case 268435456:
          l = Af;
          break;
        default:
          l = Hn;
      }
      return a = Ur.bind(null, t), l = oe(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Ba(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ur(t, e) {
    if (wt !== 0 && wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Uu() && t.callbackNode !== l)
      return null;
    var a = et;
    return a = Yn(
      t,
      t === bt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (mr(t, a, e), Dr(t, re()), t.callbackNode != null && t.callbackNode === l ? Ur.bind(null, t) : null);
  }
  function Rr(t, e) {
    if (Uu()) return null;
    mr(t, e, !0);
  }
  function ph() {
    Ch(function() {
      (rt & 6) !== 0 ? oe(
        Sf,
        gh
      ) : Cr();
    });
  }
  function Gc() {
    if (Ml === 0) {
      var t = ga;
      t === 0 && (t = jn, jn <<= 1, (jn & 261888) === 0 && (jn = 256)), Ml = t;
    }
    return Ml;
  }
  function Hr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Qn("" + t);
  }
  function jr(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Sh(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = Hr(
        (n[ae] || null).action
      ), i = a.submitter;
      i && (e = (e = i[ae] || null) ? Hr(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new Kn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ml !== 0) {
                  var s = i ? jr(n, i) : new FormData(n);
                  uc(
                    l,
                    {
                      pending: !0,
                      data: s,
                      method: n.method,
                      action: u
                    },
                    null,
                    s
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), s = i ? jr(n, i) : new FormData(n), uc(
                  l,
                  {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: u
                  },
                  u,
                  s
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Lc = 0; Lc < Ei.length; Lc++) {
    var Xc = Ei[Lc], bh = Xc.toLowerCase(), Ah = Xc[0].toUpperCase() + Xc.slice(1);
    Re(
      bh,
      "on" + Ah
    );
  }
  Re(rs, "onAnimationEnd"), Re(ds, "onAnimationIteration"), Re(ms, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(Bm, "onTransitionRun"), Re(Ym, "onTransitionStart"), Re(Gm, "onTransitionCancel"), Re(hs, "onTransitionEnd"), aa("onMouseEnter", ["mouseout", "mouseover"]), aa("onMouseLeave", ["mouseout", "mouseover"]), aa("onPointerEnter", ["pointerout", "pointerover"]), aa("onPointerLeave", ["pointerout", "pointerover"]), ql(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ql(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ql(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ql(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ql(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Eh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En)
  );
  function qr(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], s = c.instance, y = c.currentTarget;
            if (c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (E) {
              $n(E);
            }
            n.currentTarget = null, u = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], s = c.instance, y = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (E) {
              $n(E);
            }
            n.currentTarget = null, u = s;
          }
      }
    }
  }
  function tt(t, e) {
    var l = e[ti];
    l === void 0 && (l = e[ti] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Br(e, t, 2, !1), l.add(a));
  }
  function Qc(t, e, l) {
    var a = 0;
    e && (a |= 4), Br(
      l,
      t,
      a,
      e
    );
  }
  var ju = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(t) {
    if (!t[ju]) {
      t[ju] = !0, Of.forEach(function(l) {
        l !== "selectionchange" && (Eh.has(l) || Qc(l, !1, t), Qc(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ju] || (e[ju] = !0, Qc("selectionchange", !1, e));
    }
  }
  function Br(t, e, l, a) {
    switch (dd(e)) {
      case 2:
        var n = Wh;
        break;
      case 8:
        n = Fh;
        break;
      default:
        n = nf;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !si || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function wc(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ta(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Xf(function() {
      var y = u, E = ci(l), z = [];
      t: {
        var g = ys.get(t);
        if (g !== void 0) {
          var p = Kn, B = t;
          switch (t) {
            case "keypress":
              if (wn(l) === 0) break t;
            case "keydown":
            case "keyup":
              p = ym;
              break;
            case "focusin":
              B = "focus", p = mi;
              break;
            case "focusout":
              B = "blur", p = mi;
              break;
            case "beforeblur":
            case "afterblur":
              p = mi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = pm;
              break;
            case rs:
            case ds:
            case ms:
              p = im;
              break;
            case hs:
              p = bm;
              break;
            case "scroll":
            case "scrollend":
              p = em;
              break;
            case "wheel":
              p = Em;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              p = xm;
          }
          var Z = (e & 4) !== 0, St = !Z && (t === "scroll" || t === "scrollend"), d = Z ? g !== null ? g + "Capture" : null : g;
          Z = [];
          for (var o = y, h; o !== null; ) {
            var T = o;
            if (h = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || h === null || d === null || (T = Za(o, d), T != null && Z.push(
              Tn(o, T, h)
            )), St) break;
            o = o.return;
          }
          0 < Z.length && (g = new p(
            g,
            B,
            null,
            l,
            E
          ), z.push({ event: g, listeners: Z }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", g && l !== ii && (B = l.relatedTarget || l.fromElement) && (ta(B) || B[Pl]))
            break t;
          if ((p || g) && (g = E.window === E ? E : (g = E.ownerDocument) ? g.defaultView || g.parentWindow : window, p ? (B = l.relatedTarget || l.toElement, p = y, B = B ? ta(B) : null, B !== null && (St = D(B), Z = B.tag, B !== St || Z !== 5 && Z !== 27 && Z !== 6) && (B = null)) : (p = null, B = y), p !== B)) {
            if (Z = wf, T = "onMouseLeave", d = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Kf, T = "onPointerLeave", d = "onPointerEnter", o = "pointer"), St = p == null ? g : Qa(p), h = B == null ? g : Qa(B), g = new Z(
              T,
              o + "leave",
              p,
              l,
              E
            ), g.target = St, g.relatedTarget = h, T = null, ta(E) === y && (Z = new Z(
              d,
              o + "enter",
              B,
              l,
              E
            ), Z.target = h, Z.relatedTarget = St, T = Z), St = T, p && B)
              e: {
                for (Z = Th, d = p, o = B, h = 0, T = d; T; T = Z(T))
                  h++;
                T = 0;
                for (var L = o; L; L = Z(L))
                  T++;
                for (; 0 < h - T; )
                  d = Z(d), h--;
                for (; 0 < T - h; )
                  o = Z(o), T--;
                for (; h--; ) {
                  if (d === o || o !== null && d === o.alternate) {
                    Z = d;
                    break e;
                  }
                  d = Z(d), o = Z(o);
                }
                Z = null;
              }
            else Z = null;
            p !== null && Yr(
              z,
              g,
              p,
              Z,
              !1
            ), B !== null && St !== null && Yr(
              z,
              St,
              B,
              Z,
              !0
            );
          }
        }
        t: {
          if (g = y ? Qa(y) : window, p = g.nodeName && g.nodeName.toLowerCase(), p === "select" || p === "input" && g.type === "file")
            var ct = ts;
          else if (If(g))
            if (es)
              ct = Hm;
            else {
              ct = Um;
              var G = Dm;
            }
          else
            p = g.nodeName, !p || p.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && ui(y.elementType) && (ct = ts) : ct = Rm;
          if (ct && (ct = ct(t, y))) {
            Pf(
              z,
              ct,
              l,
              E
            );
            break t;
          }
          G && G(t, g, y), t === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && ni(g, "number", g.value);
        }
        switch (G = y ? Qa(y) : window, t) {
          case "focusin":
            (If(G) || G.contentEditable === "true") && (sa = G, Si = y, Fa = null);
            break;
          case "focusout":
            Fa = Si = sa = null;
            break;
          case "mousedown":
            bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bi = !1, ss(z, l, E);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            ss(z, l, E);
        }
        var F;
        if (yi)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          fa ? Wf(t, l) && (lt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Jf && l.locale !== "ko" && (fa || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && fa && (F = Qf()) : (rl = E, oi = "value" in rl ? rl.value : rl.textContent, fa = !0)), G = qu(y, lt), 0 < G.length && (lt = new Vf(
          lt,
          t,
          null,
          l,
          E
        ), z.push({ event: lt, listeners: G }), F ? lt.data = F : (F = Ff(l), F !== null && (lt.data = F)))), (F = zm ? Mm(t, l) : Nm(t, l)) && (lt = qu(y, "onBeforeInput"), 0 < lt.length && (G = new Vf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          E
        ), z.push({
          event: G,
          listeners: lt
        }), G.data = F)), Sh(
          z,
          t,
          y,
          l,
          E
        );
      }
      qr(z, e);
    });
  }
  function Tn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function qu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Za(t, l), n != null && a.unshift(
        Tn(t, n, u)
      ), n = Za(t, e), n != null && a.push(
        Tn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Th(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Yr(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var c = l, s = c.alternate, y = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, n ? (y = Za(l, u), y != null && i.unshift(
        Tn(l, y, s)
      )) : n || (y = Za(l, u), y != null && i.push(
        Tn(l, y, s)
      ))), l = l.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var xh = /\r\n?/g, _h = /\u0000|\uFFFD/g;
  function Gr(t) {
    return (typeof t == "string" ? t : "" + t).replace(xh, `
`).replace(_h, "");
  }
  function Lr(t, e) {
    return e = Gr(e), Gr(t) === e;
  }
  function pt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ua(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ua(t, "" + a);
        break;
      case "className":
        Ln(t, "class", a);
        break;
      case "tabIndex":
        Ln(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ln(t, l, a);
        break;
      case "style":
        Gf(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Ln(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Qn("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && pt(t, e, "name", n.name, n, null), pt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), pt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), pt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (pt(t, e, "encType", n.encType, n, null), pt(t, e, "method", n.method, n, null), pt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Qn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ke);
        break;
      case "onScroll":
        a != null && tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Qn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        tt("beforetoggle", t), tt("toggle", t), Gn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Gn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Pd.get(l) || l, Gn(t, l, a));
    }
  }
  function Vc(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        Gf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ua(t, a) : (typeof a == "number" || typeof a == "bigint") && ua(t, "" + a);
        break;
      case "onScroll":
        a != null && tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && tt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ke);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cf.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ae] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Gn(t, l, a);
          }
    }
  }
  function Pt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        tt("error", t), tt("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  pt(t, e, u, i, l, null);
              }
          }
        n && pt(t, e, "srcSet", l.srcSet, l, null), a && pt(t, e, "src", l.src, l, null);
        return;
      case "input":
        tt("invalid", t);
        var c = u = i = n = null, s = null, y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var E = l[a];
            if (E != null)
              switch (a) {
                case "name":
                  n = E;
                  break;
                case "type":
                  i = E;
                  break;
                case "checked":
                  s = E;
                  break;
                case "defaultChecked":
                  y = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  c = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(f(137, e));
                  break;
                default:
                  pt(t, e, a, E, l, null);
              }
          }
        jf(
          t,
          u,
          c,
          s,
          y,
          i,
          n,
          !1
        );
        return;
      case "select":
        tt("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (c = l[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                pt(t, e, n, c, l, null);
            }
        e = u, l = i, t.multiple = !!a, e != null ? na(t, !!a, e, !1) : l != null && na(t, !!a, l, !0);
        return;
      case "textarea":
        tt("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (c = l[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(f(91));
                break;
              default:
                pt(t, e, i, c, l, null);
            }
        Bf(t, a, n, u);
        return;
      case "option":
        for (s in l)
          l.hasOwnProperty(s) && (a = l[s], a != null) && (s === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : pt(t, e, s, a, l, null));
        return;
      case "dialog":
        tt("beforetoggle", t), tt("toggle", t), tt("cancel", t), tt("close", t);
        break;
      case "iframe":
      case "object":
        tt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++)
          tt(En[a], t);
        break;
      case "image":
        tt("error", t), tt("load", t);
        break;
      case "details":
        tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        tt("error", t), tt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && (a = l[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                pt(t, e, y, a, l, null);
            }
        return;
      default:
        if (ui(e)) {
          for (E in l)
            l.hasOwnProperty(E) && (a = l[E], a !== void 0 && Vc(
              t,
              e,
              E,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && (a = l[c], a != null && pt(t, e, c, a, l, null));
  }
  function zh(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, s = null, y = null, E = null;
        for (p in l) {
          var z = l[p];
          if (l.hasOwnProperty(p) && z != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = z;
              default:
                a.hasOwnProperty(p) || pt(t, e, p, null, a, z);
            }
        }
        for (var g in a) {
          var p = a[g];
          if (z = l[g], a.hasOwnProperty(g) && (p != null || z != null))
            switch (g) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                y = p;
                break;
              case "defaultChecked":
                E = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(f(137, e));
                break;
              default:
                p !== z && pt(
                  t,
                  e,
                  g,
                  p,
                  a,
                  z
                );
            }
        }
        ai(
          t,
          i,
          c,
          s,
          y,
          E,
          u,
          n
        );
        return;
      case "select":
        p = i = c = g = null;
        for (u in l)
          if (s = l[u], l.hasOwnProperty(u) && s != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(u) || pt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  s
                );
            }
        for (n in a)
          if (u = a[n], s = l[n], a.hasOwnProperty(n) && (u != null || s != null))
            switch (n) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && pt(
                  t,
                  e,
                  n,
                  u,
                  a,
                  s
                );
            }
        e = c, l = i, a = p, g != null ? na(t, !!l, g, !1) : !!a != !!l && (e != null ? na(t, !!l, e, !0) : na(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        p = g = null;
        for (c in l)
          if (n = l[c], l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                pt(t, e, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && pt(t, e, i, n, a, u);
            }
        qf(t, g, p);
        return;
      case "option":
        for (var B in l)
          g = l[B], l.hasOwnProperty(B) && g != null && !a.hasOwnProperty(B) && (B === "selected" ? t.selected = !1 : pt(
            t,
            e,
            B,
            null,
            a,
            g
          ));
        for (s in a)
          g = a[s], p = l[s], a.hasOwnProperty(s) && g !== p && (g != null || p != null) && (s === "selected" ? t.selected = g && typeof g != "function" && typeof g != "symbol" : pt(
            t,
            e,
            s,
            g,
            a,
            p
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in l)
          g = l[Z], l.hasOwnProperty(Z) && g != null && !a.hasOwnProperty(Z) && pt(t, e, Z, null, a, g);
        for (y in a)
          if (g = a[y], p = l[y], a.hasOwnProperty(y) && g !== p && (g != null || p != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(f(137, e));
                break;
              default:
                pt(
                  t,
                  e,
                  y,
                  g,
                  a,
                  p
                );
            }
        return;
      default:
        if (ui(e)) {
          for (var St in l)
            g = l[St], l.hasOwnProperty(St) && g !== void 0 && !a.hasOwnProperty(St) && Vc(
              t,
              e,
              St,
              void 0,
              a,
              g
            );
          for (E in a)
            g = a[E], p = l[E], !a.hasOwnProperty(E) || g === p || g === void 0 && p === void 0 || Vc(
              t,
              e,
              E,
              g,
              a,
              p
            );
          return;
        }
    }
    for (var d in l)
      g = l[d], l.hasOwnProperty(d) && g != null && !a.hasOwnProperty(d) && pt(t, e, d, null, a, g);
    for (z in a)
      g = a[z], p = l[z], !a.hasOwnProperty(z) || g === p || g == null && p == null || pt(t, e, z, g, a, p);
  }
  function Xr(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Mh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Xr(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
            var s = l[a], y = s.startTime;
            if (y > c) break;
            var E = s.transferSize, z = s.initiatorType;
            E && Xr(z) && (s = s.responseEnd, i += E * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Kc = null, Jc = null;
  function Bu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zr(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function kc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var $c = null;
  function Nh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === $c ? !1 : ($c = t, !0) : ($c = null, !1);
  }
  var wr = typeof setTimeout == "function" ? setTimeout : void 0, Oh = typeof clearTimeout == "function" ? clearTimeout : void 0, Vr = typeof Promise == "function" ? Promise : void 0, Ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vr < "u" ? function(t) {
    return Vr.resolve(null).then(t).catch(Dh);
  } : wr;
  function Dh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Nl(t) {
    return t === "head";
  }
  function Kr(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), qa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          xn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, xn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Xa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && xn(t.ownerDocument.body);
      l = n;
    } while (l);
    qa(e);
  }
  function Jr(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function Wc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wc(l), ei(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Uh(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = De(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Rh(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function kr(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function Fc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ic(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Hh(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function De(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Pc = null;
  function $r(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return De(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Wr(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fr(t, e, l) {
    switch (e = Bu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function xn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ei(t);
  }
  var Ue = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Set();
  function Yu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var fl = S.d;
  S.d = {
    f: jh,
    r: qh,
    D: Bh,
    C: Yh,
    L: Gh,
    m: Lh,
    X: Qh,
    S: Xh,
    M: Zh
  };
  function jh() {
    var t = fl.f(), e = Ou();
    return t || e;
  }
  function qh(t) {
    var e = ea(t);
    e !== null && e.tag === 5 && e.type === "form" ? yo(e) : fl.r(t);
  }
  var Ra = typeof document > "u" ? null : document;
  function Pr(t, e, l) {
    var a = Ra;
    if (a && typeof e == "string" && e) {
      var n = xe(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Ir.has(n) || (Ir.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Pt(e, "link", t), Jt(e), a.head.appendChild(e)));
    }
  }
  function Bh(t) {
    fl.D(t), Pr("dns-prefetch", t, null);
  }
  function Yh(t, e) {
    fl.C(t, e), Pr("preconnect", t, e);
  }
  function Gh(t, e, l) {
    fl.L(t, e, l);
    var a = Ra;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + xe(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + xe(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + xe(
        l.imageSizes
      ) + '"]')) : n += '[href="' + xe(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Ha(t);
          break;
        case "script":
          u = ja(t);
      }
      Ue.has(u) || (t = U(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ue.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(_n(u)) || e === "script" && a.querySelector(zn(u)) || (e = a.createElement("link"), Pt(e, "link", t), Jt(e), a.head.appendChild(e)));
    }
  }
  function Lh(t, e) {
    fl.m(t, e);
    var l = Ra;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + xe(a) + '"][href="' + xe(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ja(t);
      }
      if (!Ue.has(u) && (t = U({ rel: "modulepreload", href: t }, e), Ue.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(zn(u)))
              return;
        }
        a = l.createElement("link"), Pt(a, "link", t), Jt(a), l.head.appendChild(a);
      }
    }
  }
  function Xh(t, e, l) {
    fl.S(t, e, l);
    var a = Ra;
    if (a && t) {
      var n = la(a).hoistableStyles, u = Ha(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          _n(u)
        ))
          c.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ue.get(u)) && tf(t, l);
          var s = i = a.createElement("link");
          Jt(s), Pt(s, "link", t), s._p = new Promise(function(y, E) {
            s.onload = y, s.onerror = E;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Gu(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function Qh(t, e) {
    fl.X(t, e);
    var l = Ra;
    if (l && t) {
      var a = la(l).hoistableScripts, n = ja(t), u = a.get(n);
      u || (u = l.querySelector(zn(n)), u || (t = U({ src: t, async: !0 }, e), (e = Ue.get(n)) && ef(t, e), u = l.createElement("script"), Jt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Zh(t, e) {
    fl.M(t, e);
    var l = Ra;
    if (l && t) {
      var a = la(l).hoistableScripts, n = ja(t), u = a.get(n);
      u || (u = l.querySelector(zn(n)), u || (t = U({ src: t, async: !0, type: "module" }, e), (e = Ue.get(n)) && ef(t, e), u = l.createElement("script"), Jt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function td(t, e, l, a) {
    var n = (n = k.current) ? Yu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ha(l.href), l = la(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ha(l.href);
          var u = la(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            _n(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Ue.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ue.set(t, l), u || wh(
            n,
            t,
            l,
            i.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ja(l), l = la(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Ha(t) {
    return 'href="' + xe(t) + '"';
  }
  function _n(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ed(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function wh(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pt(e, "link", l), Jt(e), t.head.appendChild(e));
  }
  function ja(t) {
    return '[src="' + xe(t) + '"]';
  }
  function zn(t) {
    return "script[async]" + t;
  }
  function ld(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + xe(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Jt(a), a;
          var n = U({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Jt(a), Pt(a, "style", n), Gu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ha(l.href);
          var u = t.querySelector(
            _n(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Jt(u), u;
          a = ed(l), (n = Ue.get(n)) && tf(a, n), u = (t.ownerDocument || t).createElement("link"), Jt(u);
          var i = u;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), Pt(u, "link", a), e.state.loading |= 4, Gu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = ja(l.src), (n = t.querySelector(
            zn(u)
          )) ? (e.instance = n, Jt(n), n) : (a = l, (n = Ue.get(u)) && (a = U({}, l), ef(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Jt(n), Pt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Gu(a, l.precedence, t));
    return e.instance;
  }
  function Gu(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function tf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function ef(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Lu = null;
  function ad(t, e, l) {
    if (Lu === null) {
      var a = /* @__PURE__ */ new Map(), n = Lu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Lu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Xa] || u[$t] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function nd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Vh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function ud(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Kh(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Ha(a.href), u = e.querySelector(
          _n(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Xu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Jt(u);
          return;
        }
        u = e.ownerDocument || e, a = ed(a), (n = Ue.get(n)) && tf(a, n), u = u.createElement("link"), Jt(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Pt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Xu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var lf = 0;
  function Jh(t, e) {
    return t.stylesheets && t.count === 0 && Zu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Zu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && lf === 0 && (lf = 62500 * Mh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Zu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > lf ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Xu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Qu = null;
  function Zu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Qu = /* @__PURE__ */ new Map(), e.forEach(kh, t), Qu = null, Xu.call(t));
  }
  function kh(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Qu.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Qu.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Xu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Mn = {
    $$typeof: zt,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function $h(t, e, l, a, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fu(0), this.hiddenUpdates = Fu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function id(t, e, l, a, n, u, i, c, s, y, E, z) {
    return t = new $h(
      t,
      e,
      l,
      i,
      s,
      y,
      E,
      z,
      c
    ), e = 1, u === !0 && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = ji(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Gi(u), t;
  }
  function cd(t) {
    return t ? (t = da, t) : da;
  }
  function fd(t, e, l, a, n, u) {
    n = cd(n), a.context === null ? a.context = n : a.pendingContext = n, a = gl(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = pl(t, a, e), l !== null && (se(l, t, e), nn(l, t, e));
  }
  function sd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function af(t, e) {
    sd(t, e), (t = t.alternate) && sd(t, e);
  }
  function od(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ll(t, 67108864);
      e !== null && se(e, t, 67108864), af(t, 67108864);
    }
  }
  function rd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = be();
      e = Iu(e);
      var l = Ll(t, e);
      l !== null && se(l, t, e), af(t, e);
    }
  }
  var wu = !0;
  function Wh(t, e, l, a) {
    var n = A.T;
    A.T = null;
    var u = S.p;
    try {
      S.p = 2, nf(t, e, l, a);
    } finally {
      S.p = u, A.T = n;
    }
  }
  function Fh(t, e, l, a) {
    var n = A.T;
    A.T = null;
    var u = S.p;
    try {
      S.p = 8, nf(t, e, l, a);
    } finally {
      S.p = u, A.T = n;
    }
  }
  function nf(t, e, l, a) {
    if (wu) {
      var n = uf(a);
      if (n === null)
        wc(
          t,
          e,
          a,
          Vu,
          l
        ), md(t, a);
      else if (Ph(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (md(t, a), e & 4 && -1 < Ih.indexOf(t)) {
        for (; n !== null; ) {
          var u = ea(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = jl(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - me(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Qe(u), (rt & 6) === 0 && (Mu = re() + 500, An(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ll(u, 2), c !== null && se(c, u, 2), Ou(), af(u, 2);
            }
          if (u = uf(a), u === null && wc(
            t,
            e,
            a,
            Vu,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        wc(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function uf(t) {
    return t = ci(t), cf(t);
  }
  var Vu = null;
  function cf(t) {
    if (Vu = null, t = ta(t), t !== null) {
      var e = D(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = O(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = X(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Vu = t, null;
  }
  function dd(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bd()) {
          case Sf:
            return 2;
          case bf:
            return 8;
          case Hn:
          case Yd:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ff = !1, Ol = null, Cl = null, Dl = null, Nn = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), Ul = [], Ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function md(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ol = null;
        break;
      case "dragenter":
      case "dragleave":
        Cl = null;
        break;
      case "mouseover":
      case "mouseout":
        Dl = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(e.pointerId);
    }
  }
  function Cn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = ea(e), e !== null && od(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function Ph(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Ol = Cn(
          Ol,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Cl = Cn(
          Cl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Dl = Cn(
          Dl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Nn.set(
          u,
          Cn(
            Nn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, On.set(
          u,
          Cn(
            On.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function hd(t) {
    var e = ta(t.target);
    if (e !== null) {
      var l = D(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = O(l), e !== null) {
            t.blockedOn = e, Mf(t.priority, function() {
              rd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = X(l), e !== null) {
            t.blockedOn = e, Mf(t.priority, function() {
              rd(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = uf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ii = a, l.target.dispatchEvent(a), ii = null;
      } else
        return e = ea(l), e !== null && od(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function yd(t, e, l) {
    Ku(t) && l.delete(e);
  }
  function t0() {
    ff = !1, Ol !== null && Ku(Ol) && (Ol = null), Cl !== null && Ku(Cl) && (Cl = null), Dl !== null && Ku(Dl) && (Dl = null), Nn.forEach(yd), On.forEach(yd);
  }
  function Ju(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ff || (ff = !0, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      t0
    )));
  }
  var ku = null;
  function vd(t) {
    ku !== t && (ku = t, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      function() {
        ku === t && (ku = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (cf(a || l) === null)
              continue;
            break;
          }
          var u = ea(l);
          u !== null && (t.splice(e, 3), e -= 3, uc(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function qa(t) {
    function e(s) {
      return Ju(s, t);
    }
    Ol !== null && Ju(Ol, t), Cl !== null && Ju(Cl, t), Dl !== null && Ju(Dl, t), Nn.forEach(e), On.forEach(e);
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && (l = Ul[0], l.blockedOn === null); )
      hd(l), l.blockedOn === null && Ul.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[ae] || null;
        if (typeof u == "function")
          i || vd(l);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[ae] || null)
              c = i.formAction;
            else if (cf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? l[a + 1] = c : (l.splice(a, 3), a -= 3), vd(l);
        }
      }
  }
  function gd() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function sf(t) {
    this._internalRoot = t;
  }
  $u.prototype.render = sf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = be();
    fd(l, a, t, e, null, null);
  }, $u.prototype.unmount = sf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      fd(t.current, 2, null, t, null, null), Ou(), e[Pl] = null;
    }
  };
  function $u(t) {
    this._internalRoot = t;
  }
  $u.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = zf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ul.length && e !== 0 && e < Ul[l].priority; l++) ;
      Ul.splice(l, 0, t), l === 0 && hd(t);
    }
  };
  var pd = x.version;
  if (pd !== "19.2.8")
    throw Error(
      f(
        527,
        pd,
        "19.2.8"
      )
    );
  S.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = v(e), t = t !== null ? j(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var e0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wu.isDisabled && Wu.supportsFiber)
      try {
        Ya = Wu.inject(
          e0
        ), de = Wu;
      } catch {
      }
  }
  return Un.createRoot = function(t, e) {
    if (!M(t)) throw Error(f(299));
    var l = !1, a = "", n = _o, u = zo, i = Mo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = id(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      i,
      gd
    ), t[Pl] = e.current, Zc(t), new sf(e);
  }, Un.hydrateRoot = function(t, e, l) {
    if (!M(t)) throw Error(f(299));
    var a = !1, n = "", u = _o, i = zo, c = Mo, s = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.formState !== void 0 && (s = l.formState)), e = id(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      s,
      u,
      i,
      c,
      gd
    ), e.context = cd(null), l = e.current, a = be(), a = Iu(a), n = gl(a), n.callback = null, pl(l, n, a), l = a, e.current.lanes = l, La(e, l), Qe(e), t[Pl] = e.current, Zc(t), new $u(e);
  }, Un.version = "19.2.8", Un;
}
var Nd;
function d0() {
  if (Nd) return df.exports;
  Nd = 1;
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (x) {
        console.error(x);
      }
  }
  return b(), df.exports = r0(), df.exports;
}
var m0 = d0();
const h0 = /* @__PURE__ */ Rd(m0), vf = {
  /**
   * Convert Float32Array (Web Audio API) to Int16Array (PCM 16-bit)
   */
  float32ToInt16: (b) => {
    const x = new Int16Array(b.length);
    for (let N = 0; N < b.length; N++) {
      const f = Math.max(-1, Math.min(1, b[N]));
      x[N] = f < 0 ? f * 32768 : f * 32767;
    }
    return x;
  },
  /**
   * Convert Int16Array (PCM 16-bit) to Float32Array (Web Audio API)
   */
  int16ToFloat32: (b) => {
    const x = new Float32Array(b.length);
    for (let N = 0; N < b.length; N++) {
      const f = b[N];
      x[N] = f < 0 ? f / 32768 : f / 32767;
    }
    return x;
  },
  /**
   * Resample audio buffer to target sample rate
   */
  resample: (b, x, N) => {
    if (x === N) return b;
    const f = x / N, M = Math.round(b.length / f), D = new Float32Array(M);
    for (let O = 0; O < M; O++) {
      const X = O * f, m = Math.floor(X), v = X - m, j = Math.min(m + 1, b.length - 1);
      D[O] = b[m] * (1 - v) + b[j] * v;
    }
    return D;
  },
  /**
   * Convert Blob to Base64 string
   */
  blobToBase64: (b) => new Promise((x, N) => {
    const f = new FileReader();
    f.onloadend = () => {
      const D = f.result.split(",")[1];
      x(D);
    }, f.onerror = N, f.readAsDataURL(b);
  }),
  /**
   * Convert ArrayBuffer to Base64 string
   */
  arrayBufferToBase64: (b) => {
    let x = "";
    const N = new Uint8Array(b), f = N.byteLength;
    for (let M = 0; M < f; M++)
      x += String.fromCharCode(N[M]);
    return window.btoa(x);
  }
};
function y0(b) {
  let x = b.trim();
  return x ? (x.startsWith("http://") ? x = "ws://" + x.slice(7) : x.startsWith("https://") ? x = "wss://" + x.slice(8) : !x.startsWith("ws://") && !x.startsWith("wss://") && (x = "wss://" + x), x.endsWith("/") && (x = x.slice(0, -1)), x.endsWith("/ws") || (x += "/ws"), x) : "";
}
class v0 {
  ws = null;
  audioContext = null;
  mediaStream = null;
  audioWorkletNode = null;
  messageHandler;
  config;
  isConnected = !1;
  scheduledSources = [];
  nextPlayTime = 0;
  ignoreAudioUntil = 0;
  isMuted = !1;
  isMicMuted = !1;
  maxReconnectAttempts = 3;
  reconnectAttempts = 0;
  intentionalDisconnect = !1;
  reconnectTimeout = null;
  onDisconnect = null;
  constructor(x, N) {
    this.config = x, this.messageHandler = N;
  }
  setMuted(x) {
    this.isMuted = x, x ? (this.scheduledSources.forEach((N) => {
      try {
        N.stop();
      } catch {
      }
    }), this.scheduledSources = [], this.nextPlayTime = 0, window.dispatchEvent(new CustomEvent("gemini-speaking", { detail: { speaking: !1 } }))) : this.audioContext && this.audioContext.state === "suspended" && this.audioContext.resume();
  }
  setSpeakerMuted(x) {
    this.setMuted(x);
  }
  setMicMuted(x) {
    this.isMicMuted = x;
  }
  interrupt() {
    this.scheduledSources.forEach((x) => {
      try {
        x.stop();
      } catch {
      }
    }), this.scheduledSources = [], this.nextPlayTime = 0, this.ignoreAudioUntil = Date.now() + 1500, window.dispatchEvent(new CustomEvent("gemini-speaking", { detail: { speaking: !1 } }));
  }
  async connect() {
    if (this.isConnected) return;
    this.intentionalDisconnect = !1, this.scheduledSources = [], this.nextPlayTime = 0;
    const x = (this.config.model || "gemini-live-2.5-flash-native-audio").trim(), N = x.startsWith("models/") ? x : `models/${x}`, f = y0(this.config.proxyUrl || "");
    if (!f) {
      this.messageHandler({ type: "error", error: "Proxy URL is missing. Please enter your Proxy URL in Settings ⚙️." });
      return;
    }
    const M = `${f}?key=${encodeURIComponent(this.config.apiKey)}&model=${encodeURIComponent(N)}`;
    console.log("[GeminiLiveClient] Connecting to Python Proxy Bridge at:", f), console.log("[GeminiLiveClient] Target Model Name:", N);
    try {
      this.ws = new WebSocket(M);
    } catch (D) {
      console.error("Failed to construct WebSocket connection:", D), this.messageHandler({ type: "error", error: `Invalid WebSocket URL or Key: ${D.message}` });
      return;
    }
    this.ws.onopen = async () => {
      console.log("Connected to Proxy Bridge Server. Waiting for Gemini connection..."), this.isConnected = !0, this.reconnectAttempts = 0;
      try {
        await this.startAudioInput();
      } catch (D) {
        console.error("Failed to start audio input during connect:", D);
        let O = "Failed to access microphone";
        D.message && (D.message.includes("Extension context invalidated") || D.message.includes("context invalidated")) ? O = "Extension reloaded or updated. Please refresh this page." : D.name === "NotAllowedError" || D.name === "PermissionDeniedError" ? O = "Microphone permission denied. Please allow microphone access in your browser settings." : D.message && (O = `Microphone error: ${D.message}`), this.messageHandler({ type: "error", error: O }), this.disconnect();
        return;
      }
      this.messageHandler({ type: "status", status: "connected" }), this.messageHandler({ type: "connected" });
    }, this.ws.onmessage = async (D) => {
      let O;
      try {
        O = typeof D.data == "string" ? JSON.parse(D.data) : D.data;
      } catch (X) {
        console.error("Error parsing WS message", X);
        return;
      }
      if (console.log("[GeminiLiveClient] Received message type:", O.type), O.type === "status")
        O.status === "connected" && this.messageHandler({ type: "connected" });
      else if (O.type === "audio") {
        if (Date.now() < this.ignoreAudioUntil) return;
        const X = O.data;
        if (X) {
          const m = atob(X), v = new ArrayBuffer(m.length), j = new Uint8Array(v);
          for (let st = 0; st < m.length; st++)
            j[st] = m.charCodeAt(st);
          const U = new Int16Array(v), w = vf.int16ToFloat32(U);
          this.isMuted || this.queueAudio(w);
        }
      } else O.type === "transcript" ? this.messageHandler({ type: "transcript", text: O.text }) : O.type === "user_transcript" ? this.messageHandler({ type: "user_transcript", text: O.text }) : O.type === "interrupted" ? this.interrupt() : O.type === "tool_call" ? (console.log("ToolCall received from Python Bridge:", O.functionCalls), O.functionCalls && this.messageHandler({
        type: "tool_call",
        data: {
          functionCalls: O.functionCalls.map((X) => ({
            name: X.name,
            args: X.args || {},
            id: X.id
          }))
        }
      })) : O.type === "error" && this.messageHandler({ type: "error", error: O.message });
      this.messageHandler({ type: "raw", data: O });
    }, this.ws.onclose = (D) => {
      if (console.warn("Disconnected from Proxy Server:", D.code, D.reason || "No reason provided"), this.isConnected = !1, this.cleanup(), this.intentionalDisconnect) {
        this.messageHandler({ type: "disconnected" });
        return;
      }
      this.reconnectAttempts < this.maxReconnectAttempts ? (this.reconnectAttempts++, console.log(`Attempting reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`), this.messageHandler({
        type: "status",
        status: `Reconnecting (Attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})...`
      }), this.reconnectTimeout = setTimeout(() => {
        this.connect();
      }, 2e3)) : (this.messageHandler({
        type: "error",
        error: "Connection to proxy server closed. Please check that the server is running."
      }), this.messageHandler({ type: "disconnected" }), this.onDisconnect && this.onDisconnect());
    }, this.ws.onerror = (D) => {
      console.error("WebSocket Error:", D), this.messageHandler({
        type: "error",
        error: "WebSocket connection failed. Verify your Proxy URL and Network."
      });
    };
  }
  async startAudioInput() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 16e3
      }), this.audioContext.state === "suspended" && await this.audioContext.resume();
      const x = this.audioContext;
      if (this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16e3,
          echoCancellation: !0,
          noiseSuppression: !0,
          autoGainControl: !0
        }
      }), !this.isConnected) {
        this.mediaStream.getTracks().forEach((M) => M.stop());
        return;
      }
      const N = x.createMediaStreamSource(this.mediaStream), f = typeof chrome < "u" && chrome.runtime?.getURL ? chrome.runtime.getURL("pcm-processor.js") : "./pcm-processor.js";
      if (await x.audioWorklet.addModule(f), !this.isConnected) {
        this.mediaStream.getTracks().forEach((M) => M.stop());
        return;
      }
      this.audioWorkletNode = new AudioWorkletNode(x, "pcm-processor"), this.audioWorkletNode.port.onmessage = (M) => {
        if (!this.isConnected || this.isMicMuted) return;
        const D = M.data, O = vf.float32ToInt16(D), X = vf.arrayBufferToBase64(O.buffer);
        if (this.ws?.readyState === WebSocket.OPEN) {
          const m = {
            type: "audio",
            data: X
          };
          this.ws.send(JSON.stringify(m));
        }
      }, N.connect(this.audioWorkletNode), this.audioWorkletNode.connect(x.destination);
    } catch (x) {
      throw console.error("Audio capture failed", x), x;
    }
  }
  queueAudio(x) {
    if (!(!this.audioContext || this.isMuted))
      try {
        const N = this.audioContext;
        N.state === "suspended" && N.resume();
        const f = N.createBuffer(1, x.length, 24e3);
        f.getChannelData(0).set(x);
        const M = N.createBufferSource();
        M.buffer = f, M.connect(N.destination);
        const D = N.currentTime;
        this.nextPlayTime < D && (this.nextPlayTime = D + 0.05);
        const O = this.scheduledSources.length > 0;
        M.start(this.nextPlayTime), this.scheduledSources.push(M), O || window.dispatchEvent(new CustomEvent("gemini-speaking", { detail: { speaking: !0 } })), M.onended = () => {
          const X = this.scheduledSources.indexOf(M);
          X > -1 && this.scheduledSources.splice(X, 1), this.scheduledSources.length === 0 && window.dispatchEvent(new CustomEvent("gemini-speaking", { detail: { speaking: !1 } }));
        }, this.nextPlayTime += f.duration;
      } catch (N) {
        console.error("Error playing audio chunk", N);
      }
  }
  sendToolResponse(x) {
    const f = {
      type: "tool_response",
      data: x.map((M) => {
        const D = M.functionCall || M;
        return {
          id: D.id,
          name: D.name,
          response: {
            result: D.result
          }
        };
      })
    };
    console.log("[GeminiLiveClient] Sending tool_response payload:", f), this.ws?.send(JSON.stringify(f));
  }
  disconnect() {
    this.intentionalDisconnect = !0, this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null), this.isConnected = !1, this.ws?.close(), this.cleanup();
  }
  cleanup() {
    this.mediaStream?.getTracks().forEach((x) => x.stop()), this.scheduledSources && this.scheduledSources.forEach((x) => {
      try {
        x.stop();
      } catch {
      }
    }), this.scheduledSources = [], this.nextPlayTime = 0, window.dispatchEvent(new CustomEvent("gemini-speaking", { detail: { speaking: !1 } })), this.audioWorkletNode?.disconnect(), this.audioWorkletNode = null;
  }
}
const Hd = (...b) => b.filter((x, N, f) => !!x && x.trim() !== "" && f.indexOf(x) === N).join(" ").trim();
const g0 = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const p0 = (b) => b.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (x, N, f) => f ? f.toUpperCase() : N.toLowerCase()
);
const Od = (b) => {
  const x = p0(b);
  return x.charAt(0).toUpperCase() + x.slice(1);
};
var S0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const b0 = (b) => {
  for (const x in b)
    if (x.startsWith("aria-") || x === "role" || x === "title")
      return !0;
  return !1;
};
const A0 = At.forwardRef(
  ({
    color: b = "currentColor",
    size: x = 24,
    strokeWidth: N = 2,
    absoluteStrokeWidth: f,
    className: M = "",
    children: D,
    iconNode: O,
    ...X
  }, m) => At.createElement(
    "svg",
    {
      ref: m,
      ...S0,
      width: x,
      height: x,
      stroke: b,
      strokeWidth: f ? Number(N) * 24 / Number(x) : N,
      className: Hd("lucide", M),
      ...!D && !b0(X) && { "aria-hidden": "true" },
      ...X
    },
    [
      ...O.map(([v, j]) => At.createElement(v, j)),
      ...Array.isArray(D) ? D : [D]
    ]
  )
);
const Ze = (b, x) => {
  const N = At.forwardRef(
    ({ className: f, ...M }, D) => At.createElement(A0, {
      ref: D,
      iconNode: x,
      className: Hd(
        `lucide-${g0(Od(b))}`,
        `lucide-${b}`,
        f
      ),
      ...M
    })
  );
  return N.displayName = Od(b), N;
};
const E0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], T0 = Ze("circle-alert", E0);
const x0 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], _0 = Ze("mic-off", x0);
const z0 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], M0 = Ze("mic", z0);
const N0 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Cd = Ze("settings", N0);
const O0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], C0 = Ze("sliders-horizontal", O0);
const D0 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], Dd = Ze("smartphone", D0);
const U0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], R0 = Ze("trash-2", U0);
const H0 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], j0 = Ze("volume-2", H0);
const q0 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], B0 = Ze("volume-x", q0);
const Y0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], gf = Ze("x", Y0);
function jd() {
  if (document.getElementById("live-agent-highlight-style")) return;
  const b = document.createElement("style");
  b.id = "live-agent-highlight-style", b.textContent = `
    .live-agent-highlight {
      outline: 3px solid #0ea5e9 !important;
      outline-offset: 4px !important;
      box-shadow: 0 0 25px rgba(14, 165, 233, 0.8) !important;
      transition: all 0.3s ease !important;
      position: relative !important;
    }
    .live-agent-highlight::after {
      content: "★ TECH EXPERT PICK";
      position: absolute;
      top: 10px;
      right: 10px;
      background: #0ea5e9;
      color: #020617;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.5px;
      padding: 3px 8px;
      border-radius: 9999px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      z-index: 20;
      pointer-events: none;
    }
  `, document.head.appendChild(b);
}
function G0() {
  const b = window.location.pathname.endsWith("/index.html") || window.location.pathname === "/" || !!document.getElementById("home-filter-sidebar"), x = window.location.href, N = new URLSearchParams(window.location.search), f = [];
  if (f.push(`PAGE URL: ${x}`), f.push(`PAGE TITLE: ${document.title}`), f.push(`PAGE TYPE: ${b ? "HOME SEARCH FORM & TRENDING DEALS (/index.html)" : "DYNAMIC PHONE CATALOG SEARCH (/search.html)"}`), N.toString() && f.push(`ACTIVE URL QUERY PARAMS: ?${N.toString()}`), b) {
    f.push(`
=== TOP TRENDING DEALS OF THE WEEK ===`);
    const M = Array.from(document.querySelectorAll("#trending-phones-grid .trending-card"));
    M.length > 0 ? M.forEach((K) => {
      const it = K.getAttribute("data-phone-id") || K.getAttribute("data-id") || "", vt = K.querySelector(".trending-title")?.textContent?.trim() || "Unknown Phone", zt = K.querySelector(".trending-price")?.textContent?.trim() || "", Vt = K.querySelector(".star-rating, .trending-meta-row")?.textContent?.trim() || "", Kt = K.querySelector(".spec-pill")?.textContent?.trim() || "", jt = K.querySelector(".trending-desc")?.textContent?.trim() || "";
      f.push(`- [ID: ${it}] "${vt}" | Price: ${zt} | Rating: ${Vt} | Specs: ${Kt} | Summary: ${jt}`);
    }) : f.push("No trending cards rendered."), f.push(`
=== HOME SEARCH FORM CONTROLS ===`);
    const D = Array.from(document.querySelectorAll('#home-brand-checkboxes input[name="brand"]:checked')).map((K) => K.value), O = Array.from(document.querySelectorAll('#home-brand-checkboxes input[name="brand"]')).map((K) => K.value);
    f.push(`- Brands: Active=[${D.join(", ") || "None"}], Available=[${O.join(", ") || "None"}]`);
    const X = document.getElementById("home-min-price")?.value || "None", m = document.getElementById("home-max-price")?.value || "None";
    f.push(`- Budget Range: Min="${X}", Max="${m}"`);
    const v = document.querySelector('input[name="system"]:checked')?.value || "All", j = Array.from(document.querySelectorAll('input[name="system"]')).map((K) => K.value);
    f.push(`- Operating System: Active="${v}", Available=[${j.join(", ") || "None"}]`);
    const U = Array.from(document.querySelectorAll("#home-storage-pills .storage-pill.active")).map((K) => K.getAttribute("data-storage") || K.textContent?.trim()).filter(Boolean), w = Array.from(document.querySelectorAll("#home-storage-pills .storage-pill")).map((K) => K.getAttribute("data-storage") || K.textContent?.trim()).filter(Boolean);
    f.push(`- Storage: Active=[${U.join(", ") || "None"}], Available=[${w.join(", ") || "None"}]`);
    const st = document.getElementById("home-5g-toggle")?.checked;
    f.push(`- 5G Network Only (#home-5g-toggle): ${st ? "CHECKED (ON)" : "UNCHECKED (OFF)"}`);
    const yt = document.getElementById("home-rating-select");
    if (yt) {
      const K = yt.options[yt.selectedIndex], it = Array.from(yt.options).map((vt) => `${vt.value ? `${vt.value}+ Stars` : "Any Rating"}`);
      f.push(`- Minimum Rating: Active="${K ? K.text : yt.value}", Available=[${it.join(", ") || "None"}]`);
    }
    const dt = document.getElementById("btn-home-search");
    dt && f.push(`- Submit Button: "#btn-home-search" (Label: "${dt.textContent ? dt.textContent.trim() : "SEARCH PHONES"}") -> Navigates to /search.html`);
  } else {
    f.push(`
=== ACTIVE APPLIED FILTERS & AVAILABLE OPTIONS ===`);
    const M = document.getElementById("search-keyword-input");
    M && M.value && f.push(`- Keyword Search: "${M.value}"`);
    const D = Array.from(document.querySelectorAll(".filter-input-brand:checked")).map((S) => S.value), O = Array.from(document.querySelectorAll(".filter-input-brand")).map((S) => S.value);
    f.push(`- Brands: Active=[${D.join(", ") || "None"}], Available=[${O.join(", ") || "None"}]`);
    const X = Array.from(document.querySelectorAll(".filter-input-system:checked")).map((S) => S.value), m = Array.from(document.querySelectorAll(".filter-input-system")).map((S) => S.value);
    f.push(`- Operating System: Active=[${X.join(", ") || "None"}], Available=[${m.join(", ") || "None"}]`);
    const v = Array.from(document.querySelectorAll(".filter-input-net:checked")).map((S) => S.value), j = Array.from(document.querySelectorAll(".filter-input-net")).map((S) => S.value);
    f.push(`- Network Type: Active=[${v.join(", ") || "None"}], Available=[${j.join(", ") || "None"}]`);
    const U = document.getElementById("search-min-price")?.value || "None", w = document.getElementById("search-max-price")?.value || "None";
    f.push(`- Price Filter: Active=[Min="${U}", Max="${w}"]`);
    const st = Array.from(document.querySelectorAll(".filter-input-rating:checked")).map((S) => S.value), yt = Array.from(document.querySelectorAll(".filter-input-rating")).map((S) => S.value);
    f.push(`- Rating Filter: Active=[${st.join(", ") || "None"}], Available=[${yt.map((S) => `${S} Stars & Up`).join(", ") || "None"}]`);
    const dt = Array.from(document.querySelectorAll(".filter-input-storage:checked")).map((S) => S.value), K = Array.from(document.querySelectorAll(".filter-input-storage")).map((S) => S.value);
    f.push(`- Storage Options: Active=[${dt.join(", ") || "None"}], Available=[${K.join(", ") || "None"}]`);
    const it = Array.from(document.querySelectorAll(".filter-input-color:checked")).map((S) => S.value), vt = Array.from(document.querySelectorAll(".filter-input-color")).map((S) => S.value);
    f.push(`- Colors: Active=[${it.join(", ") || "None"}], Available=[${vt.join(", ") || "None"}]`);
    const zt = Array.from(document.querySelectorAll(".filter-input-resolution:checked")).map((S) => S.value), Vt = Array.from(document.querySelectorAll(".filter-input-resolution")).map((S) => S.value);
    f.push(`- Resolution Category: Active=[${zt.join(", ") || "None"}], Available=[${Vt.join(", ") || "None"}]`);
    const Kt = Array.from(document.querySelectorAll(".filter-input-detailed-res:checked")).map((S) => S.value), jt = Array.from(document.querySelectorAll(".filter-input-detailed-res")).map((S) => S.value);
    f.push(`- Detailed Resolution: Active=[${Kt.join(", ") || "None"}], Available=[${jt.join(", ") || "None"}]`);
    const W = Array.from(document.querySelectorAll(".filter-input-camera:checked")).map((S) => S.value), Xt = Array.from(document.querySelectorAll(".filter-input-camera")).map((S) => S.value);
    f.push(`- Primary Camera: Active=[${W.join(", ") || "None"}], Available=[${Xt.join(", ") || "None"}]`);
    const te = Array.from(document.querySelectorAll(".filter-input-screen:checked")).map((S) => S.value), qe = Array.from(document.querySelectorAll(".filter-input-screen")).map((S) => S.value);
    f.push(`- Screen Size: Active=[${te.join(", ") || "None"}], Available=[${qe.join(", ") || "None"}]`);
    const qt = document.getElementById("sort-by-select");
    if (qt) {
      const S = qt.options[qt.selectedIndex], H = Array.from(qt.options).map((at) => `${at.value} ("${at.text}")`);
      f.push(`- Sort By (#sort-by-select): Selected="${S ? S.text : qt.value}" (${qt.value}), Available=[${H.join(", ")}]`);
    }
    const Qt = document.getElementById("results-count"), Ae = Qt ? Qt.textContent?.trim() : "0", Zt = document.getElementById("selected-count-badge");
    Zt && Zt.textContent && f.push(`- Selected Items Badge: ${Zt.textContent.trim()}`);
    const Tt = Array.from(document.querySelectorAll("#phones-results-grid .phone-card"));
    f.push(`
=== CATALOG SMARTPHONES (${Ae} Matching Phones, ${Tt.length} Loaded on Screen) ===`);
    const A = (S) => {
      const H = S.getAttribute("data-id") || S.getAttribute("data-phone-id") || "", at = S.querySelector(".phone-brand-title, h3")?.textContent?.trim() || "Unknown Smartphone", ot = S.querySelector(".phone-price")?.textContent?.trim() || "", r = S.querySelector(".star-rating, .rating")?.textContent?.trim() || "", _ = S.classList.contains("selected") || S.getAttribute("aria-selected") === "true", R = !!S.querySelector(".phone-5g-badge"), q = S.querySelector(".phone-os-badge")?.textContent?.trim() || "", V = Array.from(S.querySelectorAll(".spec-pill")).map((nt) => nt.textContent?.trim()).filter(Boolean).join(" | "), k = S.querySelector(".phone-full-desc-box")?.textContent?.trim() || "";
      return `Phone [ID: ${H}] "${at}" | Price: ${ot} | Rating: ${r || "N/A"}${q ? ` | OS: ${q}` : ""}${R ? " | [5G]" : ""} | Specs: [${V}]${_ ? " | [SELECTED / CHECKED]" : ""}
   Description: ${k.slice(0, 150)}${k.length > 150 ? "..." : ""}`;
    };
    Tt.length > 0 ? Tt.slice(0, 20).forEach((S) => f.push(A(S))) : f.push("No smartphones currently match the selected filter criteria.");
  }
  return f.join(`
`);
}
function L0(b, x) {
  if (!b && !x)
    return { success: !1, message: "Missing fieldName and value" };
  const N = window.location.pathname.endsWith("/index.html") || window.location.pathname === "/" || !!document.getElementById("home-filter-sidebar"), f = (b || "").toLowerCase().trim(), M = (x || "").toLowerCase().trim(), D = (m) => {
    m.dispatchEvent(new Event("input", { bubbles: !0 })), m.dispatchEvent(new Event("change", { bubbles: !0 }));
  };
  if (f === "reset filters" || f === "reset all" || f === "reset all filters" || f === "reset" || f === "clear all" || f === "#btn-search-reset" || f === "#btn-home-reset") {
    const m = document.getElementById("btn-search-reset") || document.getElementById("btn-home-reset") || document.querySelector(".btn-reset-filters");
    if (m)
      return m.click(), { success: !0, message: "Clicked Reset All Filters button." };
  }
  if (f === "clear selection" || f === "#btn-clear-selection") {
    const m = document.getElementById("btn-clear-selection");
    if (m)
      return m.click(), { success: !0, message: "Clicked Clear Selection button." };
  }
  if (f === "search phones" || f === "search phone" || f === "search" || f === "submit" || f === "#btn-home-search") {
    const m = document.getElementById("btn-home-search") || document.querySelector('#home-filter-form button[type="submit"]');
    if (m)
      return m.click(), { success: !0, message: "Clicked Search Phones button. Navigating to dynamic search catalog..." };
  }
  const O = (m, v, j) => {
    const U = Array.from(document.querySelectorAll(v));
    if (U.length === 0) return null;
    const w = j.toLowerCase().trim();
    if (w === "all" || w === "none" || w === "clear" || w === "clear all" || w === "reset" || w === "false") {
      let it = 0;
      return U.forEach((vt) => {
        vt.checked && (vt.checked = !1, D(vt), it++);
      }), { success: !0, message: `Cleared all ${m} filters (${it} unchecked).` };
    }
    const yt = w.startsWith("uncheck ") || w.startsWith("remove ") || w.startsWith("deselect ") || w.endsWith(" false") || w.endsWith(" off"), dt = w.replace(/^(uncheck|remove|deselect|check)\s+/, "").replace(/\s+(false|off|true|on)$/, "").trim(), K = U.find((it) => {
      const vt = (it.value || it.parentElement?.textContent || "").toLowerCase().trim();
      return vt === dt || vt.includes(dt) || dt.length > 2 && dt.includes(vt);
    });
    if (K) {
      const it = !yt;
      return K.checked = it, D(K), { success: !0, message: `Set ${m} filter "${K.value}" to ${it ? "checked" : "unchecked"}` };
    }
    return null;
  }, X = (m) => {
    const v = m.replace(/[$,]/g, "").match(/\d+(\.\d+)?/);
    if (!v) return "";
    let j = parseFloat(v[0]);
    return m.toLowerCase().includes("k") && (j *= 1e3), Math.round(j).toString();
  };
  if (f === "keyword" || f === "model" || f === "search keyword" || f === "#search-keyword-input") {
    const m = document.getElementById("search-keyword-input");
    if (m)
      return m.value = x === "clear" || x === "none" ? "" : x, D(m), { success: !0, message: `Set search keyword to "${m.value}"` };
  }
  if (f === "brand" || f === "brands" || f === "#search-brand-checkboxes" || f === "#home-brand-checkboxes") {
    const v = O("Brand", N ? '#home-brand-checkboxes input[name="brand"]' : ".filter-input-brand", M);
    if (v) return v;
  }
  if (f === "operating system" || f === "system" || f === "os" || f === "#search-system-pills")
    if (N) {
      const v = Array.from(document.querySelectorAll('input[name="system"]')).find((j) => j.value.toLowerCase() === M || M.includes(j.value.toLowerCase()));
      if (v)
        return v.checked = !0, D(v), { success: !0, message: `Set Operating System to ${v.value}` };
    } else {
      const m = O("Operating System", ".filter-input-system", M);
      if (m) return m;
    }
  if (f === "network" || f === "network type" || f === "5g" || f === "is5g" || f === "#home-5g-toggle" || f === "#search-network-checkboxes")
    if (N) {
      const m = document.getElementById("home-5g-toggle");
      if (m) {
        const v = !(M === "false" || M === "off" || M === "uncheck" || M === "0" || M === "no");
        return m.checked = v, D(m), { success: !0, message: `Set 5G Network Only toggle on Home page form to ${v ? "CHECKED (ON)" : "UNCHECKED (OFF)"}. Call enter_form_data(field_name='Search Phones', value='click') to view results.` };
      }
    } else {
      let m = M;
      (f === "5g" || f === "is5g") && (m === "uncheck" || m === "false" || m === "off" || m === "0" || m === "no") ? m = "uncheck 5G" : (f === "5g" || f === "is5g") && (m === "check" || m === "true" || m === "on" || m === "1" || m === "yes" || m === "5g") && (m = "5G");
      const v = O("Network Type", ".filter-input-net", m);
      if (v) return v;
    }
  if (f === "min price" || f === "price min" || f === "minprice" || f === "#search-min-price" || f === "#home-min-price") {
    const m = document.getElementById("search-min-price") || document.getElementById("home-min-price");
    if (m) {
      const v = X(x);
      return m.value = v, D(m), { success: !0, message: `Set minimum price to ${v || "None"}` };
    }
  }
  if (f === "max price" || f === "price max" || f === "maxprice" || f === "budget" || f === "#search-max-price" || f === "#home-max-price") {
    const m = document.getElementById("search-max-price") || document.getElementById("home-max-price");
    if (m) {
      const v = X(x);
      return m.value = v, D(m), { success: !0, message: `Set maximum price to ${v || "None"}` };
    }
  }
  if (f === "rating" || f === "min rating" || f === "minimum rating" || f === "stars" || f === "#search-rating-checkboxes" || f === "#home-rating-select")
    if (N) {
      const m = document.getElementById("home-rating-select");
      if (m) {
        const v = M.match(/\d+/), j = v ? v[0] : "", U = Array.from(m.options), w = U.findIndex((st) => j ? st.value === j : st.text.toLowerCase().includes(M));
        if (w !== -1)
          return m.selectedIndex = w, D(m), { success: !0, message: `Set home rating filter to "${U[w].text}"` };
      }
    } else {
      const m = O("Rating", ".filter-input-rating", M);
      if (m) return m;
    }
  if (f === "storage" || f === "internal storage" || f === "capacity" || f === "#search-storage-pills" || f === "#home-storage-pills")
    if (N) {
      const m = Array.from(document.querySelectorAll("#home-storage-pills .storage-pill")), v = M.replace("gb", "").replace("tb", "000").trim(), j = m.find((U) => (U.getAttribute("data-storage") || U.textContent || "").toLowerCase().includes(v));
      if (j)
        return j.click(), { success: !0, message: `Selected storage pill "${j.textContent?.trim()}" on home form` };
    } else {
      const m = O("Storage", ".filter-input-storage", M);
      if (m) return m;
    }
  if (f === "color" || f === "colour" || f === "#search-color-swatches") {
    const m = O("Color", ".filter-input-color", M);
    if (m) return m;
  }
  if (f === "resolution" || f === "display resolution" || f === "resolution category" || f === "#search-resolution-checkboxes") {
    const m = O("Resolution", ".filter-input-resolution", M);
    if (m) return m;
  }
  if (f === "detailed resolution" || f === "exact resolution" || f === "#search-detailed-res-pills") {
    const m = O("Detailed Resolution", ".filter-input-detailed-res", M);
    if (m) return m;
  }
  if (f === "camera" || f === "primary camera" || f === "camera mp" || f === "#search-camera-checkboxes") {
    const m = O("Camera", ".filter-input-camera", M);
    if (m) return m;
  }
  if (f === "screen" || f === "screen size" || f === "display size" || f === "#search-screensize-pills") {
    const m = O("Screen Size", ".filter-input-screen", M);
    if (m) return m;
  }
  if (f === "sort by" || f === "sort" || f === "order by" || f === "#sort-by-select") {
    const m = document.getElementById("sort-by-select");
    if (m) {
      const v = Array.from(m.options);
      let j = -1;
      if (M.includes("rating") || M.includes("popular") || M.includes("top rated") || M === "rating-desc" ? j = v.findIndex((U) => U.value === "rating-desc") : M.includes("low to high") || M.includes("cheap") || M === "price-asc" ? j = v.findIndex((U) => U.value === "price-asc") : M.includes("high to low") || M.includes("expensive") || M === "price-desc" ? j = v.findIndex((U) => U.value === "price-desc") : M.includes("name") || M.includes("a-z") || M === "name-asc" ? j = v.findIndex((U) => U.value === "name-asc") : (M.includes("relevance") || M.includes("feature") || M === "relevance") && (j = v.findIndex((U) => U.value === "relevance")), j !== -1)
        return m.selectedIndex = j, D(m), { success: !0, message: `Updated sort by to "${v[j].text}" (${v[j].value})` };
    }
  }
  return { success: !1, message: `Could not find filter matching "${b}" with value "${x}" on current page.` };
}
function X0(b) {
  jd(), document.querySelectorAll(".live-agent-highlight").forEach((M) => M.classList.remove("live-agent-highlight"));
  const x = document.getElementById("btn-clear-selection");
  if (x ? x.click() : document.querySelectorAll(".phone-card.selected, .trending-card.selected").forEach((M) => {
    M.classList.remove("selected"), M.removeAttribute("aria-selected");
  }), !b || b.length === 0)
    return { success: !0, highlightedCount: 0 };
  let N = 0;
  const f = Array.from(document.querySelectorAll("#phones-results-grid .phone-card, #trending-phones-grid .trending-card, .phone-card, .trending-card"));
  return b.forEach((M) => {
    const D = (M || "").toLowerCase().trim();
    if (!D) return;
    let O = f.find((X) => {
      const m = (X.getAttribute("data-id") || X.getAttribute("data-phone-id") || X.id || "").toLowerCase().trim();
      return m.length > 0 && m === D;
    });
    O || (O = f.find((X) => {
      const m = (X.querySelector(".phone-brand-title, .trending-title, h3")?.textContent || "").toLowerCase().trim();
      return m.length > 0 && (m === D || m.includes(D) || D.includes(m));
    })), O && (O.classList.add("live-agent-highlight"), !O.classList.contains("selected") && O.getAttribute("aria-selected") !== "true" && O.click(), N === 0 && O.scrollIntoView({ behavior: "smooth", block: "center" }), N++);
  }), { success: !0, highlightedCount: N };
}
const Q0 = [
  {
    name: "get_screen_content",
    description: "Retrieve active filters, URL search params, catalog listings, trending phones, prices, specs, ratings, and page context from the PhoneVerse store page.",
    parameters: { type: "OBJECT", properties: {} }
  },
  {
    name: "enter_form_data",
    description: "Modify search filters or form fields on the PhoneVerse store page. Use 'Keyword' for model series/names ('Galaxy', 'Pixel', 'iPhone', 'Ultra', 'Fold', 'Pro', 'Flip'). Use 'Brand' ONLY for manufacturer names ('Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Motorola', 'Sony', 'Nothing').",
    parameters: {
      type: "OBJECT",
      properties: {
        field_name: {
          type: "STRING",
          description: "Name, ID, or label text of the filter/input: Use 'Keyword' for model series/names like 'Galaxy', 'Pixel', 'iPhone', 'Ultra', 'Fold', 'Pro', 'Flip'. Use 'Brand' ONLY for manufacturer names like 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Motorola', 'Sony', 'Nothing'. Other fields: 'Operating System', 'System', 'Network', '5G', 'Min Price', 'Max Price', 'Rating', 'Storage', 'Color', 'Resolution', 'Detailed Resolution', 'Camera', 'Screen Size', 'Sort By', 'Search Phones', 'Reset Filters', 'Clear All', 'Clear Selection'."
        },
        value: {
          type: "STRING",
          description: "The value to enter, option to select, 'true'/'false' for toggles, or 'click' for buttons."
        }
      },
      required: ["field_name", "value"]
    }
  },
  {
    name: "highlight_elements",
    description: "Spotlight-highlight and select recommended smartphone cards on the catalog grid. Pass an array of exact unique Phone IDs (e.g. ['0', '1', '12']) extracted from get_screen_content. Supports passing one OR multiple Phone IDs simultaneously.",
    parameters: {
      type: "OBJECT",
      properties: {
        element_texts: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "List of exact unique Phone IDs from get_screen_content to highlight and select."
        }
      },
      required: ["element_texts"]
    }
  },
  {
    name: "manage_user_profile",
    description: "Store, retrieve, or update customer preferences, phone requirements, budget limits, or trade-in info in their profile memory.",
    parameters: {
      type: "OBJECT",
      properties: {
        action: {
          type: "STRING",
          description: "The action to perform: 'add_fact', 'remove_fact', 'clear_all', or 'get_profile'."
        },
        fact: {
          type: "STRING",
          description: "The customer fact or preference to record (e.g. 'Prefers compact phones under 6.2 inches', 'Max budget is $800', 'Wants 512GB storage for 4K video')."
        }
      },
      required: ["action"]
    }
  }
], Z0 = `You are the official Senior Smartphone Tech Specialist and Live Shopping Assistant for PhoneVerse — a premier smartphone retail store.

Your role is to guide customers naturally over low-latency voice, helping them discover, compare, and choose their ideal smartphone from our live catalog.

Capabilities & Tools:
1. 'get_screen_content': ALWAYS call this FIRST at the start of a session or whenever the customer asks about available phones, current deals, prices, or specs to inspect what is visible on their screen.
2. 'enter_form_data': Modify the store's search filters.
   - For specific model lines ('Galaxy', 'Pixel', 'iPhone', 'Ultra', 'Fold', 'Pro', 'Flip'), ALWAYS enter them into 'Keyword'.
   - Use 'Brand' ONLY for manufacturer names ('Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Motorola', 'Sony', 'Nothing').
   - On the Home page 3-Step Protocol:
     * STEP 1: Apply requested filters immediately.
     * STEP 2: Verbally tell the customer what filters were set and ask: "I've configured your preferences on the form. Would you like me to run the search?"
     * STEP 3: ONLY call 'Search Phones' AFTER the customer explicitly confirms (e.g. "yes", "go ahead", "search").
3. 'highlight_elements': Spotlight recommended smartphones on their screen by passing an array of exact unique Phone IDs (e.g. ["0", "3", "12"]). Always use the exact ID: <number> from get_screen_content. Multiple IDs can be passed simultaneously.
4. 'manage_user_profile': Save key user preferences (e.g. "Looking for flagship camera", "Budget $700", "Needs iOS").

Guidelines:
- Keep voice responses concise, conversational, and energetic.
- Speak naturally like a friendly in-store phone expert.
- Proactively use tools to update the customer's screen while talking.
- When recommending phones, always mention key strengths like chipset, battery life, camera MP, and screen refresh rate.
- Phone IDs (e.g., [ID: 12]) are strictly internal technical identifiers for tool arguments. NEVER speak, read aloud, or mention Phone ID numbers to the customer. Always refer to phones naturally by their model name.`;
function w0() {
  const b = typeof window < "u" && window !== window.parent, [x, N] = At.useState(!b), [f, M] = At.useState(!1), [D, O] = At.useState("Ready to Connect"), [X, m] = At.useState(!1), [v, j] = At.useState(!1), [U, w] = At.useState(!1), [st, yt] = At.useState([]), [dt, K] = At.useState([]), [it, vt] = At.useState(!1), [zt, Vt] = At.useState(!1), [Kt, jt] = At.useState(!1), [W, Xt] = At.useState([]), [te, qe] = At.useState(() => localStorage.getItem("live_agent_phone_api_key") || ""), [qt, Qt] = At.useState(() => localStorage.getItem("live_agent_phone_proxy_url") || ""), [Ae, Zt] = At.useState(null), Tt = At.useRef(null), A = At.useRef(null), S = At.useRef(null);
  At.useEffect(() => {
    jd();
    fetch("/api/config").then((Mt) => Mt.json()).then((Mt) => {
      Mt.apiKey && !localStorage.getItem("live_agent_phone_api_key") && qe(Mt.apiKey);
      Mt.proxyUrl && !localStorage.getItem("live_agent_phone_proxy_url") && Qt(Mt.proxyUrl);
    }).catch(() => {});
    const Y = localStorage.getItem("live_agent_phone_facts");
    if (Y)
      try {
        K(JSON.parse(Y));
      } catch (Mt) {
        console.error("Failed to parse saved facts", Mt);
      }
    const Q = (Mt) => {
      m(!!Mt.detail?.speaking);
    };
    return window.addEventListener("gemini-speaking", Q), () => window.removeEventListener("gemini-speaking", Q);
  }, []), At.useEffect(() => {
    A.current?.scrollIntoView({ behavior: "smooth" });
  }, [st]), At.useEffect(() => {
    S.current?.scrollIntoView({ behavior: "smooth" });
  }, [W]);
  const H = (Y, Q, Mt) => {
    const Be = (/* @__PURE__ */ new Date()).toLocaleTimeString(), Ye = Mt ? typeof Mt == "string" ? Mt : JSON.stringify(Mt, null, 2) : void 0;
    Xt((Hl) => [...Hl.slice(-100), { timestamp: Be, type: Y, message: Q, payload: Ye }]);
  }, at = (Y) => {
    qe(Y), localStorage.setItem("live_agent_phone_api_key", Y);
  }, ot = (Y) => {
    Qt(Y), localStorage.setItem("live_agent_phone_proxy_url", Y);
  }, r = (Y) => {
    const Q = Y.length, Mt = [];
    let Be = !1;
    const Ye = [], Hl = () => {
      Be || (Be = !0, Ye.forEach((I) => I()), Tt.current?.sendToolResponse(Mt), O("Connected"));
    }, we = setTimeout(() => {
      Be || (H("ERROR", "Tool execution timed out, returning fallback responses"), Y.forEach((I) => {
        Mt.some((Et) => Et.functionCall?.id === I.id) || Mt.push({
          functionCall: {
            name: I.name,
            id: I.id,
            result: { status: "error", error: "Action timed out on page" }
          }
        });
      }), Hl());
    }, 6e3), Ee = (I, Ot) => {
      Mt.push({
        functionCall: {
          name: I.name,
          id: I.id,
          result: Ot
        }
      }), Mt.length === Q && (clearTimeout(we), Hl());
    };
    Y.forEach((I) => {
      if (H("TOOL_CALL", `Executing ${I.name}`, I.args), I.name === "get_screen_content")
        if (O("Reading phone catalog..."), b) {
          window.parent.postMessage({ type: "GET_SCREEN_CONTENT", callId: I.id, payload: {} }, "*");
          const Ot = (Et) => {
            Et.data?.type === "SCREEN_CONTENT_RESPONSE" && (!Et.data.callId || Et.data.callId === I.id) && (window.removeEventListener("message", Ot), H("TOOL_RESULT", "Screen content extracted", Et.data.content), Ee(I, Et.data.content));
          };
          window.addEventListener("message", Ot), Ye.push(() => window.removeEventListener("message", Ot));
        } else {
          const Ot = G0();
          H("TOOL_RESULT", "Screen content extracted directly", Ot), Ee(I, Ot);
        }
      else if (I.name === "enter_form_data") {
        const { field_name: Ot, value: Et } = I.args;
        if (O(`Updating filter: ${Ot || ""} = ${Et || ""}`), b) {
          window.parent.postMessage({
            type: "ENTER_FORM_DATA",
            callId: I.id,
            fieldName: Ot,
            value: Et,
            payload: { fieldName: Ot, value: Et }
          }, "*");
          const Ct = (oe) => {
            oe.data?.type === "ENTER_FORM_DATA_RESPONSE" && (!oe.data.callId || oe.data.callId === I.id) && (window.removeEventListener("message", Ct), H("TOOL_RESULT", "enter_form_data output", oe.data.result), Ee(I, oe.data.result));
          };
          window.addEventListener("message", Ct), Ye.push(() => window.removeEventListener("message", Ct));
        } else {
          const Ct = L0(Ot, Et);
          H("TOOL_RESULT", "enter_form_data output directly", Ct), Ee(I, Ct);
        }
      } else if (I.name === "highlight_elements") {
        const { element_texts: Ot } = I.args;
        if (O("Highlighting recommendations..."), b) {
          window.parent.postMessage({
            type: "HIGHLIGHT_ELEMENT",
            callId: I.id,
            elementTexts: Ot,
            payload: { elementTexts: Ot }
          }, "*");
          const Et = (Ct) => {
            Ct.data?.type === "HIGHLIGHT_ELEMENT_RESPONSE" && (!Ct.data.callId || Ct.data.callId === I.id) && (window.removeEventListener("message", Et), H("TOOL_RESULT", "highlight_elements output", Ct.data.result), Ee(I, Ct.data.result));
          };
          window.addEventListener("message", Et), Ye.push(() => window.removeEventListener("message", Et));
        } else {
          const Et = X0(Ot || []);
          H("TOOL_RESULT", "highlight_elements output directly", Et), Ee(I, Et);
        }
      } else if (I.name === "manage_user_profile") {
        const { action: Ot, fact: Et } = I.args;
        let Ct = "";
        if (Ot === "add_fact" && Et) {
          const oe = { text: Et, status: "added" };
          K((Ba) => {
            const Rn = [...Ba, oe];
            return localStorage.setItem("live_agent_phone_facts", JSON.stringify(Rn)), Rn;
          }), Ct = `Fact added to profile: "${Et}"`;
        } else Ot === "clear_all" ? (K([]), localStorage.removeItem("live_agent_phone_facts"), Ct = "Cleared all profile facts.") : Ct = `Current profile: ${JSON.stringify(dt.map((oe) => oe.text))}`;
        H("TOOL_RESULT", "manage_user_profile result", Ct), Ee(I, { status: "success", message: Ct });
      } else
        Ee(I, { status: "error", error: `Unknown tool name: ${I.name}` });
    });
  }, _ = async () => {
    if (Zt(null), !te) {
      vt(!0), Zt("Please provide a Gemini API Key to connect.");
      return;
    }
    O("Connecting to AI Tech Specialist..."), H("SYSTEM", "Initiating connection to Gemini Live...");
    try {
      const Y = new v0(
        {
          apiKey: te,
          proxyUrl: qt.trim() || void 0,
          systemInstruction: Z0,
          tools: Q0
        },
        (Q) => {
          Q.type === "connected" ? (M(!0), O("Connected"), H("SYSTEM", "Successfully connected to Gemini Live.")) : Q.type === "status" ? (O(Q.status), H("STATUS", Q.status)) : Q.type === "transcript" ? (yt((Mt) => [...Mt, { role: "agent", text: Q.text }]), H("TRANSCRIPT", `[AGENT]: ${Q.text}`)) : Q.type === "user_transcript" ? (yt((Mt) => [...Mt, { role: "user", text: Q.text }]), H("TRANSCRIPT", `[USER]: ${Q.text}`)) : Q.type === "tool_call" ? r(Q.data?.functionCalls || []) : Q.type === "error" ? (Zt(Q.error || "Connection error occurred."), O("Error"), H("ERROR", Q.error || "Unknown error")) : Q.type === "disconnected" && (M(!1), O("Disconnected"), H("SYSTEM", "Disconnected from server"));
        }
      );
      Tt.current = Y, await Y.connect();
    } catch (Y) {
      console.error("[LiveAgentPhone] Connection failed:", Y), Zt(Y.message || "Failed to establish live session."), M(!1), O("Disconnected"), H("ERROR", `Connection failed: ${Y.message}`);
    }
  }, R = () => {
    Tt.current && (Tt.current.disconnect(), Tt.current = null), M(!1), m(!1), O("Disconnected"), H("SYSTEM", "Session terminated by user.");
  }, q = () => {
    if (Tt.current) {
      const Y = !v;
      Tt.current.setMicMuted(Y), j(Y);
    }
  }, V = () => {
    if (Tt.current) {
      const Y = !U;
      Tt.current.setSpeakerMuted(Y), w(Y);
    }
  }, k = () => {
    yt([]), Xt([]);
  }, nt = /* @__PURE__ */ C.jsxs("div", { className: "w-full h-full flex flex-col bg-slate-950 text-slate-100 font-sans select-none overflow-hidden", children: [
    /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ C.jsx("div", { className: "p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20", children: /* @__PURE__ */ C.jsx(Dd, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("h1", { className: "text-sm font-semibold text-slate-100 leading-none", children: "PhoneVerse Live Assistant" }),
          /* @__PURE__ */ C.jsx("span", { className: "text-[10px] text-sky-400 font-medium", children: "Gemini Multimodal Specialist" })
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: () => Vt(!zt),
            className: `p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ${zt ? "bg-slate-800 text-sky-400" : ""}`,
            title: "Customer Profile & Memory",
            children: /* @__PURE__ */ C.jsx(C0, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: () => vt(!it),
            className: `p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ${it ? "bg-slate-800 text-sky-400" : ""}`,
            title: "Settings & BYOK API Key",
            children: /* @__PURE__ */ C.jsx(Cd, { className: "w-4 h-4" })
          }
        ),
        !b && /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: () => N(!1),
            className: "p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ml-1",
            title: "Close Drawer",
            children: /* @__PURE__ */ C.jsx(gf, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    zt && /* @__PURE__ */ C.jsxs("div", { className: "p-4 bg-slate-900/90 border-b border-slate-800 space-y-3", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ C.jsx("span", { className: "text-xs font-semibold text-slate-200", children: "Customer Memory & Preferences" }),
        /* @__PURE__ */ C.jsxs(
          "button",
          {
            onClick: () => {
              K([]), localStorage.removeItem("live_agent_phone_facts");
            },
            className: "text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer",
            children: [
              /* @__PURE__ */ C.jsx(R0, { className: "w-3 h-3" }),
              " Clear All"
            ]
          }
        )
      ] }),
      dt.length === 0 ? /* @__PURE__ */ C.jsx("p", { className: "text-xs text-slate-400 italic", children: "No customer facts recorded yet. The specialist will remember preferences as you chat." }) : /* @__PURE__ */ C.jsx("div", { className: "space-y-1.5 max-h-36 overflow-y-auto pr-1", children: dt.map((Y, Q) => /* @__PURE__ */ C.jsx("div", { className: "text-xs bg-slate-950 px-2.5 py-1.5 rounded border border-slate-800 text-slate-300 flex items-center justify-between", children: /* @__PURE__ */ C.jsx("span", { children: Y.text }) }, Q)) })
    ] }),
    it && /* @__PURE__ */ C.jsx("div", { className: "fixed inset-0 z-[2147483648] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ C.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ C.jsx(Cd, { className: "w-4 h-4 text-sky-400" }),
          /* @__PURE__ */ C.jsx("h3", { className: "text-sm font-semibold text-slate-100", children: "Live Agent Configuration" })
        ] }),
        /* @__PURE__ */ C.jsx("button", { onClick: () => vt(!1), className: "p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800", children: /* @__PURE__ */ C.jsx(gf, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx("label", { className: "block text-xs font-medium text-slate-300 mb-1", children: "Gemini API Key (BYOK)" }),
        /* @__PURE__ */ C.jsx(
          "input",
          {
            type: "password",
            value: te,
            onChange: (Y) => at(Y.target.value),
            placeholder: "AIzaSy...",
            className: "w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
          }
        ),
        /* @__PURE__ */ C.jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: "Your API key is securely saved in local storage and never shared." })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx("label", { className: "block text-xs font-medium text-slate-300 mb-1", children: "Live WebSocket Proxy Server URL" }),
        /* @__PURE__ */ C.jsx(
          "input",
          {
            type: "text",
            value: qt,
            onChange: (Y) => ot(Y.target.value),
            placeholder: "https://your-proxy-server.run.app",
            className: "w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
          }
        ),
        /* @__PURE__ */ C.jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: "Deployed Cloud Run proxy URL for low-latency bidirectional voice." })
      ] }),
      /* @__PURE__ */ C.jsx("div", { className: "pt-2 flex justify-end", children: /* @__PURE__ */ C.jsx(
        "button",
        {
          onClick: () => vt(!1),
          className: "px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold rounded-lg shadow cursor-pointer",
          children: "Save & Close"
        }
      ) })
    ] }) }),
    Ae && /* @__PURE__ */ C.jsxs("div", { className: "px-4 py-2.5 bg-rose-950/90 border-b border-rose-800 text-rose-200 text-xs flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ C.jsx(T0, { className: "w-4 h-4 text-rose-400 shrink-0 mt-0.5" }),
        /* @__PURE__ */ C.jsx("span", { className: "leading-snug", children: Ae })
      ] }),
      /* @__PURE__ */ C.jsx("button", { onClick: () => Zt(null), className: "text-rose-400 hover:text-rose-200 shrink-0", children: /* @__PURE__ */ C.jsx(gf, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "p-6 bg-slate-900/50 border-b border-slate-800/80 flex flex-col items-center justify-center relative", children: [
      /* @__PURE__ */ C.jsx("div", { className: `absolute w-32 h-32 rounded-full bg-sky-500/15 blur-xl transition-all duration-700 ${X ? "scale-150 opacity-80" : "scale-100 opacity-20"}` }),
      /* @__PURE__ */ C.jsx("div", { className: "flex items-end justify-center gap-1.5 h-12 my-2 z-10", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((Y) => /* @__PURE__ */ C.jsx(
        "div",
        {
          className: `w-1 rounded-full bg-gradient-to-t from-sky-500 to-blue-400 transition-all duration-300 ${X ? "h-full opacity-100 animate-pulse" : "h-2 opacity-30"}`,
          style: { animationDelay: `${Y * 0.1}s` }
        },
        Y
      )) }),
      /* @__PURE__ */ C.jsx("span", { className: "text-xs font-mono uppercase tracking-widest text-slate-400 mt-2 z-10", children: D }),
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-3 mt-4 z-10", children: [
        f ? /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: R,
            className: "px-5 py-2 text-xs font-semibold rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 transition-all cursor-pointer",
            children: "Disconnect"
          }
        ) : /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: _,
            className: "px-5 py-2 text-xs font-semibold rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 transition-all cursor-pointer",
            children: "Connect Agent"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: q,
            disabled: !f,
            className: `p-2.5 rounded-full transition-all cursor-pointer ${v ? "bg-rose-950/80 text-rose-400 border border-rose-800" : "bg-slate-800 text-slate-200 hover:bg-slate-700"} disabled:opacity-40`,
            title: v ? "Unmute Mic" : "Mute Mic",
            children: v ? /* @__PURE__ */ C.jsx(_0, { className: "w-4 h-4" }) : /* @__PURE__ */ C.jsx(M0, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: V,
            disabled: !f,
            className: `p-2.5 rounded-full transition-all cursor-pointer ${U ? "bg-rose-950/80 text-rose-400 border border-rose-800" : "bg-slate-800 text-slate-200 hover:bg-slate-700"} disabled:opacity-40`,
            title: U ? "Unmute Speaker" : "Mute Speaker",
            children: U ? /* @__PURE__ */ C.jsx(B0, { className: "w-4 h-4" }) : /* @__PURE__ */ C.jsx(j0, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-3", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ C.jsx("span", { className: "text-[10px] uppercase font-mono tracking-wider text-slate-500", children: "Live Transcript" }),
        st.length > 0 && /* @__PURE__ */ C.jsx("button", { onClick: k, className: "text-[10px] text-slate-500 hover:text-slate-300", children: "Clear" })
      ] }),
      st.length === 0 ? /* @__PURE__ */ C.jsx("div", { className: "text-center py-8 text-xs text-slate-600", children: "Connect agent and speak to start finding smartphones..." }) : st.map((Y, Q) => /* @__PURE__ */ C.jsxs(
        "div",
        {
          className: `p-3 rounded-lg text-xs leading-relaxed max-w-[85%] ${Y.role === "user" ? "ml-auto bg-sky-500/15 text-sky-100 border border-sky-500/30" : "bg-slate-900 text-slate-200 border border-slate-800"}`,
          children: [
            /* @__PURE__ */ C.jsx("div", { className: "text-[10px] font-mono text-slate-500 mb-1", children: Y.role === "user" ? "You" : "Tech Specialist" }),
            Y.text
          ]
        },
        Q
      )),
      /* @__PURE__ */ C.jsx("div", { ref: A })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500", children: [
      /* @__PURE__ */ C.jsx("button", { onClick: () => jt(!Kt), className: "hover:text-slate-300", children: Kt ? "▼ Hide Diagnostics" : "▲ Show Diagnostics" }),
      /* @__PURE__ */ C.jsx("span", { children: "v1.0.0" })
    ] }),
    Kt && /* @__PURE__ */ C.jsxs("div", { className: "h-44 bg-slate-950 border-t border-slate-800 p-3 overflow-y-auto font-mono text-[10px] text-slate-400 space-y-1", children: [
      W.length === 0 ? /* @__PURE__ */ C.jsx("div", { children: "No events recorded yet." }) : W.map((Y, Q) => /* @__PURE__ */ C.jsxs("div", { className: "border-b border-slate-900 pb-1", children: [
        /* @__PURE__ */ C.jsxs("span", { className: "text-slate-600", children: [
          "[",
          Y.timestamp,
          "]"
        ] }),
        " ",
        /* @__PURE__ */ C.jsxs("span", { className: "text-sky-400 font-semibold", children: [
          Y.type,
          ":"
        ] }),
        " ",
        Y.message,
        Y.payload && /* @__PURE__ */ C.jsx("pre", { className: "mt-0.5 text-slate-500 overflow-x-auto whitespace-pre-wrap", children: Y.payload })
      ] }, Q)),
      /* @__PURE__ */ C.jsx("div", { ref: S })
    ] })
  ] });
  return b ? nt : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    !x && /* @__PURE__ */ C.jsxs(
      "button",
      {
        id: "live-phone-agent-floating-btn",
        onClick: () => N(!0),
        className: "fixed right-0 top-1/2 -translate-y-1/2 z-[2147483646] bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs py-3 px-2 rounded-l-xl shadow-2xl flex items-center gap-1.5 transition-all duration-300 cursor-pointer [writing-mode:vertical-rl] tracking-widest border border-r-0 border-sky-400/40",
        children: [
          /* @__PURE__ */ C.jsx(Dd, { className: "w-3.5 h-3.5 rotate-90" }),
          "LIVE PHONE AGENT"
        ]
      }
    ),
    /* @__PURE__ */ C.jsx(
      "div",
      {
        id: "live-phone-agent-drawer",
        className: `fixed top-0 right-0 h-screen w-full sm:w-[440px] max-w-[100vw] z-[2147483647] bg-slate-950 text-slate-100 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out border-l border-slate-800 ${x ? "translate-x-0" : "translate-x-full"}`,
        children: nt
      }
    )
  ] });
}
function Ud() {
  let b = document.getElementById("live-phone-agent-root");
  b || (b = document.createElement("div"), b.id = "live-phone-agent-root", document.body.appendChild(b)), h0.createRoot(b).render(
    /* @__PURE__ */ C.jsx(i0.StrictMode, { children: /* @__PURE__ */ C.jsx(w0, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ud) : Ud();
