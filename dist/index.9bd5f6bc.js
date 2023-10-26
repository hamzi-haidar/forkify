var e,
  t,
  r,
  n,
  i,
  o,
  a,
  s,
  c,
  u,
  l,
  d,
  p,
  f,
  h,
  g,
  v =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {};
function y(e) {
  return e && e.__esModule ? e.default : e;
}
var m = {},
  _ = {},
  b = v.parcelRequire3a11;
null == b &&
  (((b = function (e) {
    if (e in m) return m[e].exports;
    if (e in _) {
      var t = _[e];
      delete _[e];
      var r = { id: e, exports: {} };
      return (m[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var n = Error("Cannot find module '" + e + "'");
    throw ((n.code = 'MODULE_NOT_FOUND'), n);
  }).register = function (e, t) {
    _[e] = t;
  }),
  (v.parcelRequire3a11 = b));
var w = {},
  k = {},
  E = function (e) {
    return e && e.Math === Math && e;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k =
  E('object' == typeof globalThis && globalThis) ||
  E('object' == typeof window && window) || // eslint-disable-next-line no-restricted-globals -- safe
  E('object' == typeof self && self) ||
  E('object' == typeof v && v) || // eslint-disable-next-line no-new-func -- fallback
  (function () {
    return this;
  })() ||
  k ||
  Function('return this')();
var S = {},
  $ = {}; // Detect IE8's incomplete defineProperty implementation
S = !($ = function (e) {
  try {
    return !!e();
  } catch (e) {
    return !0;
  }
})(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return (
    7 !==
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var j = {},
  O = {};
O = !$(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var e = function () {}.bind(); // eslint-disable-next-line no-prototype-builtins -- safe
  return 'function' != typeof e || e.hasOwnProperty('prototype');
});
var L = Function.prototype.call;
j = O
  ? L.bind(L)
  : function () {
      return L.apply(L, arguments);
    };
var P = {}.propertyIsEnumerable,
  M = Object.getOwnPropertyDescriptor;
n =
  M && !P.call({ 1: 2 }, 1)
    ? function (e) {
        var t = M(this, e);
        return !!t && t.enumerable;
      }
    : P;
var x = {};
x = function (e, t) {
  return {
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t,
  };
};
var T = {},
  I = {},
  q = {},
  H = Function.prototype,
  F = H.call,
  N = O && H.bind.bind(F, F),
  D = {},
  A = (q = O
    ? N
    : function (e) {
        return function () {
          return F.apply(e, arguments);
        };
      })({}.toString),
  C = q(''.slice);
D = function (e) {
  return C(A(e), 8, -1);
};
var R = Object,
  W = q(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings
I = $(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !R('z').propertyIsEnumerable(0);
})
  ? function (e) {
      return 'String' === D(e) ? W(e, '') : R(e);
    }
  : R;
var U = {},
  B = {}; // we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
B = function (e) {
  return null == e;
};
var G = TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
(U = function (e) {
  if (B(e)) throw G("Can't call method on " + e);
  return e;
}),
  (T = function (e) {
    return I(U(e));
  });
var z = {},
  Y = {},
  J = {},
  Q = {},
  V = {},
  K = 'object' == typeof document && document.all,
  X = (V = { all: K, IS_HTMLDDA: void 0 === K && void 0 !== K }).all; // `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Q = V.IS_HTMLDDA
  ? function (e) {
      return 'function' == typeof e || e === X;
    }
  : function (e) {
      return 'function' == typeof e;
    };
var Z = V.all;
J = V.IS_HTMLDDA
  ? function (e) {
      return 'object' == typeof e ? null !== e : Q(e) || e === Z;
    }
  : function (e) {
      return 'object' == typeof e ? null !== e : Q(e);
    };
var ee = {},
  et = {};
et = function (e, t) {
  var r;
  return arguments.length < 2
    ? ((r = k[e]), Q(r) ? r : void 0)
    : k[e] && k[e][t];
};
var er = {};
er = q({}.isPrototypeOf);
var en = {},
  ei = {},
  eo = {},
  ea = {};
ea = ('undefined' != typeof navigator && String(navigator.userAgent)) || '';
var es = k.process,
  ec = k.Deno,
  eu = (es && es.versions) || (ec && ec.version),
  el = eu && eu.v8;
el && // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  (o = (i = el.split('.'))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
  !o &&
    ea &&
    (!(i = ea.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
    (i = ea.match(/Chrome\/(\d+)/)) &&
    (o = +i[1]),
  (eo = o);
var ed = k.String;
en = // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  (ei =
    !!Object.getOwnPropertySymbols &&
    !$(function () {
      var e = Symbol('symbol detection'); // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
      // of course, fail.
      return (
        !ed(e) ||
        !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        (!Symbol.sham && eo && eo < 41)
      );
    })) &&
  !Symbol.sham &&
  'symbol' == typeof Symbol.iterator;
var ep = Object;
ee = en
  ? function (e) {
      return 'symbol' == typeof e;
    }
  : function (e) {
      var t = et('Symbol');
      return Q(t) && er(t.prototype, ep(e));
    };
var ef = {},
  eh = {},
  eg = {},
  ev = String;
eg = function (e) {
  try {
    return ev(e);
  } catch (e) {
    return 'Object';
  }
};
var ey = TypeError; // `Assert: IsCallable(argument) is true`
(eh = function (e) {
  if (Q(e)) return e;
  throw ey(eg(e) + ' is not a function');
}), // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  (ef = function (e, t) {
    var r = e[t];
    return B(r) ? void 0 : eh(r);
  });
var em = {},
  e_ = TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em = function (e, t) {
  var r, n;
  if (
    ('string' === t && Q((r = e.toString)) && !J((n = j(r, e)))) ||
    (Q((r = e.valueOf)) && !J((n = j(r, e)))) ||
    ('string' !== t && Q((r = e.toString)) && !J((n = j(r, e))))
  )
    return n;
  throw e_("Can't convert object to primitive value");
};
var eb = {},
  ew = {};
ew = !1;
var ek = {},
  eE = {},
  eS = Object.defineProperty;
eE = function (e, t) {
  try {
    eS(k, e, { value: t, configurable: !0, writable: !0 });
  } catch (r) {
    k[e] = t;
  }
  return t;
};
var e$ = '__core-js_shared__';
(ek = k[e$] || eE(e$, {})),
  (eb = function (e, t) {
    return ek[e] || (ek[e] = void 0 !== t ? t : {});
  })('versions', []).push({
    version: '3.32.2',
    mode: ew ? 'pure' : 'global',
    copyright: '\xa9 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE',
    source: 'https://github.com/zloirock/core-js',
  });
var ej = {},
  eO = {},
  eL = Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eO = function (e) {
  return eL(U(e));
};
var eP = q({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ej =
  Object.hasOwn ||
  function (e, t) {
    return eP(eO(e), t);
  };
var eM = {},
  ex = 0,
  eT = Math.random(),
  eI = q((1).toString);
eM = function (e) {
  return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + eI(++ex + eT, 36);
};
var eq = k.Symbol,
  eH = eb('wks'),
  eF = en ? eq.for || eq : (eq && eq.withoutSetter) || eM,
  eN = TypeError,
  eD =
    (ej(eH, (e = 'toPrimitive')) ||
      (eH[e] = ei && ej(eq, e) ? eq[e] : eF('Symbol.' + e)),
    eH[e]); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
(Y = function (e, t) {
  if (!J(e) || ee(e)) return e;
  var r,
    n = ef(e, eD);
  if (n) {
    if ((void 0 === t && (t = 'default'), (r = j(n, e, t)), !J(r) || ee(r)))
      return r;
    throw eN("Can't convert object to primitive value");
  }
  return void 0 === t && (t = 'number'), em(e, t);
}), // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  (z = function (e) {
    var t = Y(e, 'string');
    return ee(t) ? t : t + '';
  });
var eA = {},
  eC = {},
  eR = k.document,
  eW = J(eR) && J(eR.createElement);
(eC = function (e) {
  return eW ? eR.createElement(e) : {};
}), // Thanks to IE8 for its funny defineProperty
  (eA =
    !S &&
    !$(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return (
        7 !==
        Object.defineProperty(eC('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    })); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eU = Object.getOwnPropertyDescriptor;
r = S
  ? eU
  : function (e, t) {
      if (((e = T(e)), (t = z(t)), eA))
        try {
          return eU(e, t);
        } catch (e) {}
      if (ej(e, t)) return x(!j(n, e, t), e[t]);
    };
var eB = {},
  eG = {}; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eG =
  S &&
  $(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return (
      42 !==
      Object.defineProperty(function () {}, 'prototype', {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var ez = {},
  eY = String,
  eJ = TypeError; // `Assert: Type(argument) is Object`
ez = function (e) {
  if (J(e)) return e;
  throw eJ(eY(e) + ' is not an object');
};
var eQ = TypeError,
  eV = Object.defineProperty,
  eK = Object.getOwnPropertyDescriptor,
  eX = 'enumerable',
  eZ = 'configurable',
  e0 = 'writable';
(a = S
  ? eG
    ? function (e, t, r) {
        if (
          (ez(e),
          (t = z(t)),
          ez(r),
          'function' == typeof e &&
            'prototype' === t &&
            'value' in r &&
            e0 in r &&
            !r[e0])
        ) {
          var n = eK(e, t);
          n &&
            n[e0] &&
            ((e[t] = r.value),
            (r = {
              configurable: eZ in r ? r[eZ] : n[eZ],
              enumerable: eX in r ? r[eX] : n[eX],
              writable: !1,
            }));
        }
        return eV(e, t, r);
      }
    : eV
  : function (e, t, r) {
      if ((ez(e), (t = z(t)), ez(r), eA))
        try {
          return eV(e, t, r);
        } catch (e) {}
      if ('get' in r || 'set' in r) throw eQ('Accessors not supported');
      return 'value' in r && (e[t] = r.value), e;
    }),
  (eB = S
    ? function (e, t, r) {
        return a(e, t, x(1, r));
      }
    : function (e, t, r) {
        return (e[t] = r), e;
      });
var e1 = {},
  e2 = {},
  e9 = Function.prototype,
  e3 = S && Object.getOwnPropertyDescriptor,
  e4 = ej(e9, 'name') && (!S || (S && e3(e9, 'name').configurable)),
  e7 = {},
  e5 = q(Function.toString);
Q(ek.inspectSource) ||
  (ek.inspectSource = function (e) {
    return e5(e);
  }),
  (e7 = ek.inspectSource);
var e6 = {},
  e8 = {},
  te = k.WeakMap;
e8 = Q(te) && /native code/.test(String(te));
var tt = {},
  tr = eb('keys');
tt = function (e) {
  return tr[e] || (tr[e] = eM(e));
};
var tn = {};
tn = {};
var ti = 'Object already initialized',
  to = k.TypeError,
  ta = k.WeakMap;
if (e8 || ek.state) {
  var ts = ek.state || (ek.state = new ta());
  /* eslint-disable no-self-assign -- prototype methods protection */ (ts.get =
    ts.get),
    (ts.has = ts.has),
    (ts.set = ts.set),
    /* eslint-enable no-self-assign -- prototype methods protection */ (s =
      function (e, t) {
        if (ts.has(e)) throw to(ti);
        return (t.facade = e), ts.set(e, t), t;
      }),
    (c = function (e) {
      return ts.get(e) || {};
    }),
    (u = function (e) {
      return ts.has(e);
    });
} else {
  var tc = tt('state');
  (tn[tc] = !0),
    (s = function (e, t) {
      if (ej(e, tc)) throw to(ti);
      return (t.facade = e), eB(e, tc, t), t;
    }),
    (c = function (e) {
      return ej(e, tc) ? e[tc] : {};
    }),
    (u = function (e) {
      return ej(e, tc);
    });
}
var tu = (e6 = {
    set: s,
    get: c,
    has: u,
    enforce: function (e) {
      return u(e) ? c(e) : s(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var r;
        if (!J(t) || (r = c(t)).type !== e)
          throw to('Incompatible receiver, ' + e + ' required');
        return r;
      };
    },
  }).enforce,
  tl = e6.get,
  td = String,
  tp = Object.defineProperty,
  tf = q(''.slice),
  th = q(''.replace),
  tg = q([].join),
  tv =
    S &&
    !$(function () {
      return 8 !== tp(function () {}, 'length', { value: 8 }).length;
    }),
  ty = String(String).split('String'),
  tm = (e2 = function (e, t, r) {
    'Symbol(' === tf(td(t), 0, 7) &&
      (t = '[' + th(td(t), /^Symbol\(([^)]*)\)/, '$1') + ']'),
      r && r.getter && (t = 'get ' + t),
      r && r.setter && (t = 'set ' + t),
      (!ej(e, 'name') || (e4 && e.name !== t)) &&
        (S ? tp(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
      tv &&
        r &&
        ej(r, 'arity') &&
        e.length !== r.arity &&
        tp(e, 'length', { value: r.arity });
    try {
      r && ej(r, 'constructor') && r.constructor
        ? S && tp(e, 'prototype', { writable: !1 })
        : e.prototype && (e.prototype = void 0);
    } catch (e) {}
    var n = tu(e);
    return (
      ej(n, 'source') || (n.source = tg(ty, 'string' == typeof t ? t : '')), e
    );
  }); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
(Function.prototype.toString = tm(function () {
  return (Q(this) && tl(this).source) || e7(this);
}, 'toString')),
  (e1 = function (e, t, r, n) {
    n || (n = {});
    var i = n.enumerable,
      o = void 0 !== n.name ? n.name : t;
    if ((Q(r) && e2(r, o, n), n.global)) i ? (e[t] = r) : eE(t, r);
    else {
      try {
        n.unsafe ? e[t] && (i = !0) : delete e[t];
      } catch (e) {}
      i
        ? (e[t] = r)
        : a(e, t, {
            value: r,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable,
          });
    }
    return e;
  });
var t_ = {},
  tb = {},
  tw = {},
  tk = {},
  tE = {},
  tS = {},
  t$ = Math.ceil,
  tj = Math.floor; // `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
(tS =
  Math.trunc ||
  function (e) {
    var t = +e;
    return (t > 0 ? tj : t$)(t);
  }), // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  (tE = function (e) {
    var t = +e; // eslint-disable-next-line no-self-compare -- NaN check
    return t != t || 0 === t ? 0 : tS(t);
  });
var tO = Math.max,
  tL = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tk = function (e, t) {
  var r = tE(e);
  return r < 0 ? tO(r + t, 0) : tL(r, t);
};
var tP = {},
  tM = {},
  tx = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
(tM = function (e) {
  return e > 0 ? tx(tE(e), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
}), // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  (tP = function (e) {
    return tM(e.length);
  }); // `Array.prototype.{ indexOf, includes }` methods implementation
var tT = function (e) {
    return function (t, r, n) {
      var i,
        o = T(t),
        a = tP(o),
        s = tk(n, a); // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (e && r != r) {
        for (
          ;
          a > s; // eslint-disable-next-line no-self-compare -- NaN check

        )
          if ((i = o[s++]) != i) return !0; // Array#indexOf ignores holes, Array#includes - not
      } else
        for (; a > s; s++) if ((e || s in o) && o[s] === r) return e || s || 0;
      return !e && -1;
    };
  },
  tI = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: tT(!0), // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: tT(!1),
  }.indexOf,
  tq = q([].push);
tw = function (e, t) {
  var r,
    n = T(e),
    i = 0,
    o = [];
  for (r in n) !ej(tn, r) && ej(n, r) && tq(o, r); // Don't enum bug & hidden keys
  for (; t.length > i; ) ej(n, (r = t[i++])) && (~tI(o, r) || tq(o, r));
  return o;
};
var tH = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf',
].concat('length', 'prototype');
(l =
  Object.getOwnPropertyNames ||
  function (e) {
    return tw(e, tH);
  }),
  (d = Object.getOwnPropertySymbols);
var tF = q([].concat); // all object keys, includes non-enumerable and symbols
(tb =
  et('Reflect', 'ownKeys') ||
  function (e) {
    var t = l(ez(e));
    return d ? tF(t, d(e)) : t;
  }),
  (t_ = function (e, t, n) {
    for (var i = tb(t), o = 0; o < i.length; o++) {
      var s = i[o];
      ej(e, s) || (n && ej(n, s)) || a(e, s, r(t, s));
    }
  });
var tN = {},
  tD = /#|\.prototype\./,
  tA = function (e, t) {
    var r = tR[tC(e)];
    return r === tU || (r !== tW && (Q(t) ? $(t) : !!t));
  },
  tC = (tA.normalize = function (e) {
    return String(e).replace(tD, '.').toLowerCase();
  }),
  tR = (tA.data = {}),
  tW = (tA.NATIVE = 'N'),
  tU = (tA.POLYFILL = 'P');
(tN = tA),
  /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ (w = function (e, t) {
    var n,
      i,
      o,
      a,
      s,
      c = e.target,
      u = e.global,
      l = e.stat;
    if ((n = u ? k : l ? k[c] || eE(c, {}) : (k[c] || {}).prototype))
      for (i in t) {
        // contained in target
        if (
          ((a = t[i]),
          (o = e.dontCallGetSet ? (s = r(n, i)) && s.value : n[i]),
          !tN(u ? i : c + (l ? '.' : '#') + i, e.forced) && void 0 !== o)
        ) {
          if (typeof a == typeof o) continue;
          t_(a, o);
        }
        (e.sham || (o && o.sham)) && eB(a, 'sham', !0), e1(n, i, a, e);
      }
  });
var tB = {},
  tG = {},
  tz = Function.prototype,
  tY = tz.apply,
  tJ = tz.call; // eslint-disable-next-line es/no-reflect -- safe
tG =
  ('object' == typeof Reflect && Reflect.apply) ||
  (O
    ? tJ.bind(tY)
    : function () {
        return tJ.apply(tY, arguments);
      });
var tQ = {},
  tV = {},
  tK = (tV = function (e) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if ('Function' === D(e)) return q(e);
  })(tV.bind); // optional / simple context binding
tQ = function (e, t) {
  return (
    eh(e),
    void 0 === t
      ? e
      : O
      ? tK(e, t)
      : function () {
          return e.apply(t, arguments);
        }
  );
};
var tX = {};
tX = et('document', 'documentElement');
var tZ = {};
tZ = q([].slice);
var t0 = {},
  t1 = TypeError;
t0 = function (e, t) {
  if (e < t) throw t1('Not enough arguments');
  return e;
};
var t2 = {}; // eslint-disable-next-line redos/no-vulnerable -- safe
t2 = /(?:ipad|iphone|ipod).*applewebkit/i.test(ea);
var t9 = {};
t9 = 'process' === D(k.process);
var t3 = k.setImmediate,
  t4 = k.clearImmediate,
  t7 = k.process,
  t5 = k.Dispatch,
  t6 = k.Function,
  t8 = k.MessageChannel,
  re = k.String,
  rt = 0,
  rr = {},
  rn = 'onreadystatechange';
$(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  p = k.location;
});
var ri = function (e) {
    if (ej(rr, e)) {
      var t = rr[e];
      delete rr[e], t();
    }
  },
  ro = function (e) {
    return function () {
      ri(e);
    };
  },
  ra = function (e) {
    ri(e.data);
  },
  rs = function (e) {
    // old engines have not location.origin
    k.postMessage(re(e), p.protocol + '//' + p.host);
  };
(t3 && t4) ||
  ((t3 = function (e) {
    t0(arguments.length, 1);
    var t = Q(e) ? e : t6(e),
      r = tZ(arguments, 1);
    return (
      (rr[++rt] = function () {
        tG(t, void 0, r);
      }),
      f(rt),
      rt
    );
  }),
  (t4 = function (e) {
    delete rr[e];
  }),
  t9
    ? (f = function (e) {
        t7.nextTick(ro(e));
      })
    : t5 && t5.now
    ? (f = function (e) {
        t5.now(ro(e));
      })
    : t8 && !t2
    ? ((g = (h = new t8()).port2),
      (h.port1.onmessage = ra),
      (f = tQ(g.postMessage, g)))
    : k.addEventListener &&
      Q(k.postMessage) &&
      !k.importScripts &&
      p &&
      'file:' !== p.protocol &&
      !$(rs)
    ? ((f = rs), k.addEventListener('message', ra, !1))
    : (f =
        rn in eC('script')
          ? function (e) {
              tX.appendChild(eC('script'))[rn] = function () {
                tX.removeChild(this), ri(e);
              };
            }
          : function (e) {
              setTimeout(ro(e), 0);
            }));
var rc = (tB = { set: t3, clear: t4 }).clear; // `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w(
  { global: !0, bind: !0, enumerable: !0, forced: k.clearImmediate !== rc },
  { clearImmediate: rc }
);
var ru = tB.set,
  rl = {},
  rd = {};
/* global Bun -- Deno case */ rd =
  'function' == typeof Bun && Bun && 'string' == typeof Bun.version;
var rp = k.Function,
  rf =
    /MSIE .\./.test(ea) ||
    (rd &&
      ((t = k.Bun.version.split('.')).length < 3 ||
        ('0' === t[0] && (t[1] < 3 || ('3' === t[1] && '0' === t[2]))))); // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl = function (e, t) {
  var r = t ? 2 : 1;
  return rf
    ? function (n, i /* , ...arguments */) {
        var o = t0(arguments.length, 1) > r,
          a = Q(n) ? n : rp(n),
          s = o ? tZ(arguments, r) : [],
          c = o
            ? function () {
                tG(a, this, s);
              }
            : a;
        return t ? e(c, i) : e(c);
      }
    : e;
}; // https://github.com/oven-sh/bun/issues/1633
var rh = k.setImmediate ? rl(ru, !1) : ru; // `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w(
  { global: !0, bind: !0, enumerable: !0, forced: k.setImmediate !== rh },
  { setImmediate: rh }
);
const rg = 'https://forkify-api.herokuapp.com/api/v2/recipes/',
  rv = 'ed1ec483-e762-41f1-b99c-ba74615b5efb',
  ry = async function (e, t) {
    try {
      let r = t
          ? fetch(e, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(t),
            })
          : fetch(e),
        n = await Promise.race([
          r,
          new Promise(function (e, t) {
            setTimeout(function () {
              t(Error('Request took too long! Timeout after 10 second'));
            }, 1e4);
          }),
        ]),
        i = await n.json();
      if (!n.ok) throw Error(`${i.message} (${n.status})`);
      return i;
    } catch (e) {
      throw e;
    }
  },
  rm = {
    recipe: {},
    search: { query: '', results: [], page: 1, resultsPerPage: 10 },
    bookmarks: [],
  },
  r_ = function (e) {
    let { recipe: t } = e.data;
    return {
      id: t.id,
      title: t.title,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      image: t.image_url,
      servings: t.servings,
      cookingTime: t.cooking_time,
      ingredients: t.ingredients,
      ...(t.key && { key: t.key }),
    };
  },
  rb = async function (e) {
    try {
      let t = await ry(`${rg}${e}?key=${rv}`);
      (rm.recipe = r_(t)),
        rm.bookmarks.some(t => t.id === e)
          ? (rm.recipe.bookmarked = !0)
          : (rm.recipe.bookmarked = !1),
        console.log(rm.recipe);
    } catch (e) {
      throw (console.log(`${e} 💥💥💥💥`), e);
    }
  },
  rw = async function (e) {
    try {
      rm.search.query = e;
      let t = await ry(`${rg}?search=${e}&key=${rv}`);
      console.log(t),
        (rm.search.results = t.data.recipes.map(e => ({
          id: e.id,
          title: e.title,
          publisher: e.publisher,
          image: e.image_url,
          ...(e.key && { key: e.key }),
        }))),
        (rm.search.page = 1);
    } catch (e) {
      throw (console.log(`${e} 💥💥💥💥`), e);
    }
  },
  rk = function (e = rm.search.page) {
    rm.search.page = e;
    let t = (e - 1) * rm.search.resultsPerPage,
      r = e * rm.search.resultsPerPage;
    return rm.search.results.slice(t, r);
  },
  rE = function (e) {
    rm.recipe.ingredients.forEach(t => {
      // new quantity = old quantity * newServings / oldSeervings
      t.quantity = t.quantity * (e / rm.recipe.servings);
    }),
      (rm.recipe.servings = e);
  },
  rS = function () {
    localStorage.setItem('bookmarks', JSON.stringify(rm.bookmarks));
  },
  r$ = function (e) {
    // Add bookmark
    rm.bookmarks.push(e),
      e.id === rm.recipe.id && (rm.recipe.bookmarked = !0),
      rS();
  },
  rj = function (e) {
    let t = rm.bookmarks.findIndex(t => t.id === e);
    rm.bookmarks.splice(t, 1),
      e === rm.recipe.id && (rm.recipe.bookmarked = !1),
      rS();
  };
!(function () {
  let e = localStorage.getItem('bookmarks');
  e && (rm.bookmarks = JSON.parse(e));
})();
const rO = async function (e) {
    try {
      let t = Object.entries(e)
          .filter(e => e[0].startsWith('ingredient') && '' !== e[1])
          .map(e => {
            let t = e[1].split(',').map(e => e.trim());
            if (3 !== t.length)
              throw Error(
                'Wrong ingredient format! please use the correct fromat :)'
              );
            let [r, n, i] = t;
            return { quantity: r ? +r : null, unit: n, description: i };
          }),
        r = {
          title: e.title,
          source_url: e.sourceUrl,
          image_url: e.image,
          publisher: e.publisher,
          cooking_time: +e.cookingTime,
          servings: +e.servings,
          ingredients: t,
        },
        n = await ry(`${rg}?key=${rv}`, r);
      (rm.recipe = r_(n)), r$(rm.recipe);
    } catch (e) {
      throw e;
    }
  },
  rL = new Date().getFullYear();
document.querySelector('.year').textContent = rL;
var rP = {};
rP = new URL(b('27Lyk').resolve('eyyUD'), import.meta.url).toString();
var rM = {}; //FRACTY REDUCES THE FRACTION.
function rx(e, t, r, n, i) {
  var o, a, s;
  let c = [2, 3, 5]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
  if (!0 === i) for (let t = 3; t * t <= e; t += 2) e % t == 0 && c.push(t);
  let u = 0,
    l = e,
    d = t; //Initialize counter over the prime number array for the while loop.
  for (; u <= c.length; )
    l % c[u] == 0 && d % c[u] == 0 ? (c[u], (l /= c[u]), (d /= c[u])) : u++;
  return (
    (o = d),
    (a = l),
    (s = r),
    1 === o && 1 === a
      ? `${(s = `${n}${(parseInt(s) + 1).toString()}`)}`
      : 0 === a
      ? `${n}${s}`
      : '0' == s
      ? `${n}${a}/${o}`
      : `${n}${s} ${a}/${o}`
  ); //If there's an integer and a fraction return both.
} // FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rM = function (e) {
  let t, r;
  if ((e < 0 ? ((e = Math.abs(e)), (t = '-')) : (t = ''), void 0 === e))
    return 'Your input was undefined.';
  if (isNaN(e)) return `"${e}" is not a number.`;
  if (1e16 == e) return `${t}9999999999999999`;
  if (e > 1e16)
    return 'Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.';
  if (Number.isInteger(e)) return `${t}${e}`;
  if (e < 1e-6) return '0';
  let n = e.toString(),
    i = n.split('.'),
    o = i[0];
  if ('0' == r && '0' !== o) return o;
  if ('0' == r && '0' == o) return '0';
  if (
    '99' == (r = n.length >= 17 ? i[1].slice(0, i[1].length - 1) : i[1]) &&
    '0' !== o
  )
    return `${o} 99/100`;
  if ('99' == r && '0' == o) return '99/100';
  if ((1 - parseFloat(`.${r}`) < 0.0011 && (r = '999'), void 0 == r)) return o;
  let a = r.split('').reverse().join(''),
    s = a.match(/^(\d+)\1{1,2}/); //Reverse the string to look for patterns.
  if (!s || !(r.length > 2))
    return (
      //IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
      (function (e, t, r) {
        let n = parseInt(e, 10),
          i = Math.pow(10, e.length); //Numerator begins as decimal input converted into an integer.
        return rx(n, i, t, r, !1); //Reduce the numerator and denominator.
      })(r, o, t)
    ); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
  {
    let e = s[0].split('').reverse().join(''),
      n = s[1].split('').reverse().join('');
    if (n.length > 1) {
      let e = n.split(''),
        t = 1;
      for (let r = 0; r < e.length; r++) t /= e[0] / e[r];
      1 === t && (n = e[0]);
    }
    return (
      n.length > 1 &&
        n.length % 2 == 0 &&
        (n =
          parseInt(n.slice(0, n.length / 2), 10) -
            parseInt(n.slice(n.length / 2, n.length), 10) ==
          0
            ? n.slice(0, n.length / 2)
            : n), //IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
      (function (e, t, r, n, i) {
        let o = e.length - r.length >= 1 ? e.length - r.length : 1,
          a = Math.pow(10, o),
          s = parseFloat(`0.${e}`),
          c = Math.pow(10, t.length),
          u = Math.round((s * c - s) * Math.pow(10, o)); //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
        return rx(u, (c - 1) * a, n, i, !0); //Further reduce the numerator and denominator.
      })(r, n, e, o, t)
    ); //Begin calculating the numerator and denominator for decimals that have a pattern.
  }
};
class rT {
  _data;
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Hamzi Haidar
   * @todo Finish the implementation
   */ render(e, t = !0) {
    if (!e || (Array.isArray(e) && 0 === e.length)) return this.renderError();
    this._data = e;
    let r = this._generateMarkup();
    if (!t) return r;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
  update(e) {
    this._data = e;
    let t = this._generateMarkup(),
      r = document.createRange().createContextualFragment(t),
      n = Array.from(r.querySelectorAll('*')),
      i = Array.from(this._parentElement.querySelectorAll('*'));
    n.forEach((e, t) => {
      let r = i[t];
      e.isEqualNode(r) ||
        e.firstChild?.nodeValue.trim() === '' ||
        (r.textContent = e.textContent),
        e.isEqualNode(r) ||
          Array.from(e.attributes).forEach(e =>
            r.setAttribute(e.name, e.value)
          );
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    let e = `<div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/ y(rP)}#icon-loader"></use>
    </svg>
  </div>`;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
  }
  renderError(e = this._errorMessage) {
    let t = `<div class="error">
    <div>
      <svg>
        <use href="${/*@__PURE__*/ y(rP)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
  renderMessage(e = this._message) {
    let t = `<div class="message">
    <div>
      <svg>
        <use href="${/*@__PURE__*/ y(rP)}#icon-smile"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
}
class rI extends rT {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We would not find that recipe. please try another one!';
  _message = '';
  addHandlerRender(e) {
    ['hashchange', 'load'].forEach(t => window.addEventListener(t, e));
  }
  addHandlerUpdateServings(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--update-servings');
      if (!r) return;
      let { updateTo: n } = r.dataset;
      +n > 0 && e(+n);
    });
  }
  addHandlerAddbookmark(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--bookmark');
      r && e();
    });
  }
  _generateMarkup() {
    return `  
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt=">${
      this._data.title
    }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/ y(rP)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/ y(rP)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings - 1
            }">
              <svg>
                <use href="${/*@__PURE__*/ y(rP)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings + 1
            }">
              <svg>
                <use href="${/*@__PURE__*/ y(rP)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${/*@__PURE__*/ y(rP)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${/*@__PURE__*/ y(rP)}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this._data.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/ y(rP)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
  }
  _generateMarkupIngredient(e) {
    return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/ y(rP)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        e.quantity ? /*@__PURE__*/ y(rM)(e.quantity.toFixed(2)).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>`;
  }
}
var rq = new rI();
class rH {
  _parentElement = document.querySelector('.search');
  getQuery() {
    let e = this._parentElement.querySelector('.search__field').value;
    return this._clearInput(), e;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault(), e();
    });
  }
}
var rF = new rH(),
  rN = new (class extends rT {
    _parentElement = '';
    _generateMarkup() {
      let e = window.location.hash.slice(1);
      return `
    <li class="preview">
      <a class="preview__link ${
        this._data.id === e ? 'preview__link--active' : ''
      }" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${
            this._data.key ? '' : 'hidden'
          }">
            <svg>
            <use href="${/*@__PURE__*/ y(rP)}#icon-user"></use>
            </svg>
        </div>
      </div>
     </a>
   </li>`;
    }
  })();
class rD extends rT {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';
  _generateMarkup() {
    return this._data.map(e => rN.render(e, !1)).join('');
  }
}
var rA = new rD();
class rC extends rT {
  _parentElement = document.querySelector('.pagination');
  _curPage = 1;
  addHandlerClick(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--inline');
      if (!r) return;
      let n = +r.dataset.goto;
      e(n);
    });
  }
  _generateMarkup() {
    this._curPage = this._data.page;
    let e = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return (
      // Page 1, and there are other pages
      1 === this._curPage && e > 1
        ? `<span class="pages-info">page ${
            this._curPage
          } of ${e}</span> ${this._generateMarkupButton('next')}`
        : this._curPage === e && e > 1
        ? `${this._generateMarkupButton('prev')}<span class="pages-info">page ${
            this._curPage
          } of ${e}</span>`
        : this._curPage < e
        ? `${this._generateMarkupButton('prev')}<span class="pages-info">page ${
            this._curPage
          } of ${e}</span> ${this._generateMarkupButton('next')}`
        : ''
    );
  }
  _generateMarkupButton(e) {
    return 'next' === e
      ? `  
      <button data-goto="${
        this._curPage + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${this._curPage + 1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/ y(rP)}#icon-arrow-right"></use>
          </svg>
      </button>`
      : 'prev' === e
      ? `  
       <button data-goto="${
         this._curPage - 1
       }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/ y(rP)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._curPage - 1}</span>
       </button>`
      : void 0;
  }
}
var rR = new rC();
class rW extends rT {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';
  addHandlerRender(e) {
    window.addEventListener('load', e);
  }
  _generateMarkup() {
    return this._data.map(e => rN.render(e, !1)).join('');
  }
}
var rU = new rW();
class rB extends rT {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden'),
      this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this)),
      this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault();
      let r = [...new FormData(this)],
        n = Object.fromEntries(r);
      e(n);
    });
  }
  _generateMarkup() {}
}
var rG = new rB(),
  rz = (function (e) {
    var t,
      r = Object.prototype,
      n = r.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value;
        },
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      s = o.asyncIterator || '@@asyncIterator',
      c = o.toStringTag || '@@toStringTag';
    function u(e, t, r) {
      return (
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      u({}, '');
    } catch (e) {
      u = function (e, t, r) {
        return (e[t] = r);
      };
    }
    function l(e, r, n, o) {
      var a,
        s,
        c = Object.create((r && r.prototype instanceof v ? r : v).prototype);
      return (
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        i(c, '_invoke', {
          value:
            ((a = new O(o || [])),
            (s = p),
            function (r, i) {
              if (s === f) throw Error('Generator is already running');
              if (s === h) {
                if ('throw' === r) throw i; // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return { value: t, done: !0 };
              }
              for (a.method = r, a.arg = i; ; ) {
                var o = a.delegate;
                if (o) {
                  var c = // Call delegate.iterator[context.method](context.arg) and handle the
                    // result, either by returning a { value, done } result from the
                    // delegate iterator, or by modifying context.method and context.arg,
                    // setting context.delegate to null, and returning the ContinueSentinel.
                    (function e(r, n) {
                      var i = n.method,
                        o = r.iterator[i];
                      if (o === t)
                        return (
                          // A .throw or .return when the delegate iterator has no .throw
                          // method, or a missing .next mehtod, always terminate the
                          // yield* loop.
                          (n.delegate = null),
                          ('throw' === i &&
                            r.iterator.return && // If the delegate iterator has a return method, give it a
                            // chance to clean up.
                            ((n.method = 'return'),
                            (n.arg = t),
                            e(r, n),
                            'throw' === n.method)) ||
                            ('return' !== i &&
                              ((n.method = 'throw'),
                              (n.arg = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method"
                              )))),
                          g
                        );
                      var a = d(o, r.iterator, n.arg);
                      if ('throw' === a.type)
                        return (
                          (n.method = 'throw'),
                          (n.arg = a.arg),
                          (n.delegate = null),
                          g
                        );
                      var s = a.arg;
                      return s
                        ? s.done // Assign the result of the finished delegate to the temporary
                          ? // variable specified by delegate.resultName (see delegateYield).
                            ((n[r.resultName] = s.value), // Resume execution at the desired location (see delegateYield).
                            (n.next = r.nextLoc),
                            'return' !== n.method &&
                              ((n.method = 'next'), (n.arg = t)), // The delegate iterator is finished, so forget it and continue with
                            // the outer generator.
                            (n.delegate = null),
                            g)
                          : s
                        : ((n.method = 'throw'),
                          (n.arg = TypeError(
                            'iterator result is not an object'
                          )),
                          (n.delegate = null),
                          g);
                    })(o, a);
                  if (c) {
                    if (c === g) continue;
                    return c;
                  }
                }
                if ('next' === a.method)
                  // function.sent implementation.
                  a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if (s === p) throw ((s = h), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                s = f;
                var u = d(e, n, a);
                if ('normal' === u.type) {
                  if (
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    ((s = a.done ? h : 'suspendedYield'), u.arg === g)
                  )
                    continue;
                  return { value: u.arg, done: a.done };
                }
                'throw' === u.type &&
                  ((s = h), // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  (a.method = 'throw'),
                  (a.arg = u.arg));
              }
            }),
        }),
        c
      );
    } // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function d(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    e.wrap = l;
    var p = 'suspendedStart',
      f = 'executing',
      h = 'completed',
      g = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function v() {}
    function y() {}
    function m() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var _ = {};
    u(_, a, function () {
      return this;
    });
    var b = Object.getPrototypeOf,
      w = b && b(b(L([])));
    w &&
      w !== r &&
      n.call(w, a) && // of the polyfill.
      (_ = w);
    var k = (m.prototype = v.prototype = Object.create(_)); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function E(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      var r; // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      i(this, '_invoke', {
        value: function (i, o) {
          function a() {
            return new t(function (r, a) {
              !(function r(i, o, a, s) {
                var c = d(e[i], e, o);
                if ('throw' === c.type) s(c.arg);
                else {
                  var u = c.arg,
                    l = u.value;
                  return l && 'object' == typeof l && n.call(l, '__await')
                    ? t.resolve(l.__await).then(
                        function (e) {
                          r('next', e, a, s);
                        },
                        function (e) {
                          r('throw', e, a, s);
                        }
                      )
                    : t.resolve(l).then(
                        function (e) {
                          // When a yielded Promise is resolved, its final value becomes
                          // the .value of the Promise<{value,done}> result for the
                          // current iteration.
                          (u.value = e), a(u);
                        },
                        function (e) {
                          // If a rejected Promise was yielded, throw the rejection back
                          // into the async generator function so it can be handled there.
                          return r('throw', e, a, s);
                        }
                      );
                }
              })(i, o, r, a);
            });
          }
          return (r = // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            r
              ? r.then(
                  a, // invocations of the iterator.
                  a
                )
              : a());
        },
      });
    }
    function $(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function j(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function O(e) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      (this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach($, this),
        this.reset(!0);
    }
    function L(e) {
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var i = -1,
            o = function r() {
              for (; ++i < e.length; )
                if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (o.next = o);
        }
      }
      throw TypeError(typeof e + ' is not iterable');
    }
    return (
      (y.prototype = m),
      i(k, 'constructor', { value: m, configurable: !0 }),
      i(m, 'constructor', { value: y, configurable: !0 }),
      (y.displayName = u(m, c, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return (
          !!t &&
          (t === y ||
            'GeneratorFunction' === // For the native GeneratorFunction constructor, the best we can
              // do is to check its .name property.
              (t.displayName || t.name))
        );
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, m)
            : ((e.__proto__ = m), u(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(k)),
          e
        );
      }), // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      (e.awrap = function (e) {
        return { __await: e };
      }),
      E(S.prototype),
      u(S.prototype, s, function () {
        return this;
      }),
      (e.AsyncIterator = S), // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      (e.async = function (t, r, n, i, o) {
        void 0 === o && (o = Promise);
        var a = new S(l(t, r, n, i), o);
        return e.isGeneratorFunction(r)
          ? a // If outerFn is a generator, return the full iterator.
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }), // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      E(k),
      u(k, c, 'Generator'), // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      u(k, a, function () {
        return this;
      }),
      u(k, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (e) {
        var t = Object(e),
          r = [];
        for (var n in t) r.push(n); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in t) return (e.value = n), (e.done = !1), e;
            }
            return (
              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              (e.done = !0), e
            );
          }
        );
      }),
      (e.values = L),
      (O.prototype = {
        constructor: O,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0), // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(j),
            !e)
          )
            for (var r in this)
              't' === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function i(n, i) {
            return (
              (s.type = 'throw'),
              (s.arg = e),
              (r.next = n),
              i && // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                ((r.method = 'next'), (r.arg = t)),
              !!i
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              s = a.completion;
            if ('root' === a.tryLoc)
              // it, so set the completion value of the entire function to
              // throw the exception.
              return i('end');
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, 'catchLoc'),
                u = n.call(a, 'finallyLoc');
              if (c && u) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              } else if (u) {
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              } else throw Error('try statement without catch or finally');
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r];
            if (
              i.tryLoc <= this.prev &&
              n.call(i, 'finallyLoc') &&
              this.prev < i.finallyLoc
            ) {
              var o = i;
              break;
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc && // location outside the try/catch block.
            (o = null);
          var a = o ? o.completion : {};
          return ((a.type = e), (a.arg = t), o)
            ? ((this.method = 'next'), (this.next = o.finallyLoc), g)
            : this.complete(a);
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e)
              return this.complete(r.completion, r.afterLoc), j(r), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ('throw' === n.type) {
                var i = n.arg;
                j(r);
              }
              return i;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: L(e), resultName: r, nextLoc: n }),
            'next' === this.method && // accidentally pass it on to the delegate.
              (this.arg = t),
            g
          );
        },
      }),
      e
    );
  })({});
try {
  regeneratorRuntime = rz;
} catch (e) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = rz)
    : Function('r', 'regeneratorRuntime = r')(rz);
} // if (module.hot) {
//   module.hot.accept();
// }
// const recipeContainer = document.querySelector('.recipe');
const rY = async function () {
    try {
      let e = window.location.hash.slice(1);
      if (!e) return;
      rq.renderSpinner(),
        rA.update(rk()),
        rU.update(rm.bookmarks), // 2) loading recipe
        await rb(e),
        rq.render(rm.recipe);
    } catch (e) {
      rq.renderError(), console.error(e);
    }
  },
  rJ = async function () {
    try {
      rA.renderSpinner(); // 1) Get search query
      let e = rF.getQuery();
      if (!e) return; // 2) load search results
      await rw(e), rA.render(rk()), rR.render(rm.search);
    } catch (e) {
      console.log(e);
    }
  },
  rQ = async function (e) {
    try {
      rG.renderSpinner(), // Upload the new recipe data
        await rO(e),
        console.log(rm.recipe),
        rq.render(rm.recipe),
        rG.renderMessage(),
        rU.render(rm.bookmarks), // Change ID in the URL
        window.history.pushState(null, '', `#${rm.recipe.id}`), // Close form window
        setTimeout(function () {
          rG.toggleWindow();
        }, 2500);
    } catch (e) {
      console.error('\uD83D\uDCA5', e), rG.renderError(e.message);
    }
  };
rU.addHandlerRender(function () {
  rU.render(rm.bookmarks);
}),
  rq.addHandlerRender(rY),
  rq.addHandlerUpdateServings(function (e) {
    // Update the recipe servings (in state)
    rE(e), rq.update(rm.recipe);
  }),
  rq.addHandlerAddbookmark(function () {
    rm.recipe.bookmarked ? rj(rm.recipe.id) : r$(rm.recipe),
      rq.update(rm.recipe),
      rU.render(rm.bookmarks);
  }),
  rF.addHandlerSearch(rJ),
  rR.addHandlerClick(function (e) {
    rA.render(rk(e)), rR.render(rm.search);
  }),
  rG.addHandlerUpload(rQ); //# sourceMappingURL=index.9bd5f6bc.js.map

//# sourceMappingURL=index.9bd5f6bc.js.map
