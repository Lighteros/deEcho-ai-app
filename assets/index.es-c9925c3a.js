import {
  b7 as uf,
  b8 as sn,
  b9 as te,
  ba as Um,
  bb as hf,
  bc as lf,
  bd as jc,
  be as To,
  bf as Hm,
  bg as qr,
  bh as Ii,
  bi as km,
  bj as Bm,
  bk as G,
  bl as Km,
  bm as Rc,
  bn as Vm,
  bo as Gm,
  bp as Wm,
  bq as Gh,
  br as Jm,
  bs as Qm,
  bt as Ym,
  bu as Wh,
  bv as Zm,
  bw as Xm,
  bx as e1,
  by as en,
  bz as Jh,
  bA as t1,
  bB as r1,
  bC as ff,
  bD as jr,
  bE as i1,
  bF as Qh,
  bG as vs,
  bH as Ct,
  bI as Gt,
  bJ as Ei,
  bK as ur,
  bL as s1,
  bM as ms,
  bN as pf,
  bO as n1,
  bP as o1,
  bQ as a1,
  bR as df,
  bS as c1,
  bT as gf,
  bU as yf,
  bV as bs,
  bW as Ac,
  bX as Eo,
  bY as Es,
  bZ as u1,
  b_ as Io,
  b$ as h1,
  c0 as l1,
  c1 as f1,
  c2 as p1,
  c3 as go,
  c4 as d1,
  c5 as g1,
  c6 as hc,
  c7 as Yh,
  c8 as y1,
  c9 as v1,
  ca as m1,
  cb as Zh,
  cc as w1,
  cd as b1,
  ce as _1,
  cf as E1,
  cg as I1,
  ch as x1,
  ci as P1,
  cj as S1,
  ck as Qs,
  cl as vf,
  cm as lc,
  cn as R1,
  co as A1,
  az as O1,
} from "./index-5ce6b57e.js";
var Dt = {},
  C1 = {
    get exports() {
      return Dt;
    },
    set exports(a) {
      Dt = a;
    },
  },
  _s = typeof Reflect == "object" ? Reflect : null,
  Xh =
    _s && typeof _s.apply == "function"
      ? _s.apply
      : function (t, r, s) {
          return Function.prototype.apply.call(t, r, s);
        },
  xo;
_s && typeof _s.ownKeys == "function"
  ? (xo = _s.ownKeys)
  : Object.getOwnPropertySymbols
  ? (xo = function (t) {
      return Object.getOwnPropertyNames(t).concat(
        Object.getOwnPropertySymbols(t)
      );
    })
  : (xo = function (t) {
      return Object.getOwnPropertyNames(t);
    });
function T1(a) {
  console && console.warn && console.warn(a);
}
var mf =
  Number.isNaN ||
  function (t) {
    return t !== t;
  };
function je() {
  je.init.call(this);
}
C1.exports = je;
Dt.once = F1;
je.EventEmitter = je;
je.prototype._events = void 0;
je.prototype._eventsCount = 0;
je.prototype._maxListeners = void 0;
var el = 10;
function No(a) {
  if (typeof a != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof a
    );
}
Object.defineProperty(je, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return el;
  },
  set: function (a) {
    if (typeof a != "number" || a < 0 || mf(a))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          a +
          "."
      );
    el = a;
  },
});
je.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
je.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || mf(t))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        t +
        "."
    );
  return (this._maxListeners = t), this;
};
function wf(a) {
  return a._maxListeners === void 0 ? je.defaultMaxListeners : a._maxListeners;
}
je.prototype.getMaxListeners = function () {
  return wf(this);
};
je.prototype.emit = function (t) {
  for (var r = [], s = 1; s < arguments.length; s++) r.push(arguments[s]);
  var o = t === "error",
    h = this._events;
  if (h !== void 0) o = o && h.error === void 0;
  else if (!o) return !1;
  if (o) {
    var f;
    if ((r.length > 0 && (f = r[0]), f instanceof Error)) throw f;
    var g = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw ((g.context = f), g);
  }
  var m = h[t];
  if (m === void 0) return !1;
  if (typeof m == "function") Xh(m, this, r);
  else
    for (var y = m.length, E = xf(m, y), s = 0; s < y; ++s) Xh(E[s], this, r);
  return !0;
};
function bf(a, t, r, s) {
  var o, h, f;
  if (
    (No(r),
    (h = a._events),
    h === void 0
      ? ((h = a._events = Object.create(null)), (a._eventsCount = 0))
      : (h.newListener !== void 0 &&
          (a.emit("newListener", t, r.listener ? r.listener : r),
          (h = a._events)),
        (f = h[t])),
    f === void 0)
  )
    (f = h[t] = r), ++a._eventsCount;
  else if (
    (typeof f == "function"
      ? (f = h[t] = s ? [r, f] : [f, r])
      : s
      ? f.unshift(r)
      : f.push(r),
    (o = wf(a)),
    o > 0 && f.length > o && !f.warned)
  ) {
    f.warned = !0;
    var g = new Error(
      "Possible EventEmitter memory leak detected. " +
        f.length +
        " " +
        String(t) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (g.name = "MaxListenersExceededWarning"),
      (g.emitter = a),
      (g.type = t),
      (g.count = f.length),
      T1(g);
  }
  return a;
}
je.prototype.addListener = function (t, r) {
  return bf(this, t, r, !1);
};
je.prototype.on = je.prototype.addListener;
je.prototype.prependListener = function (t, r) {
  return bf(this, t, r, !0);
};
function N1() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function _f(a, t, r) {
  var s = { fired: !1, wrapFn: void 0, target: a, type: t, listener: r },
    o = N1.bind(s);
  return (o.listener = r), (s.wrapFn = o), o;
}
je.prototype.once = function (t, r) {
  return No(r), this.on(t, _f(this, t, r)), this;
};
je.prototype.prependOnceListener = function (t, r) {
  return No(r), this.prependListener(t, _f(this, t, r)), this;
};
je.prototype.removeListener = function (t, r) {
  var s, o, h, f, g;
  if ((No(r), (o = this._events), o === void 0)) return this;
  if (((s = o[t]), s === void 0)) return this;
  if (s === r || s.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete o[t],
        o.removeListener && this.emit("removeListener", t, s.listener || r));
  else if (typeof s != "function") {
    for (h = -1, f = s.length - 1; f >= 0; f--)
      if (s[f] === r || s[f].listener === r) {
        (g = s[f].listener), (h = f);
        break;
      }
    if (h < 0) return this;
    h === 0 ? s.shift() : $1(s, h),
      s.length === 1 && (o[t] = s[0]),
      o.removeListener !== void 0 && this.emit("removeListener", t, g || r);
  }
  return this;
};
je.prototype.off = je.prototype.removeListener;
je.prototype.removeAllListeners = function (t) {
  var r, s, o;
  if (((s = this._events), s === void 0)) return this;
  if (s.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : s[t] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete s[t]),
      this
    );
  if (arguments.length === 0) {
    var h = Object.keys(s),
      f;
    for (o = 0; o < h.length; ++o)
      (f = h[o]), f !== "removeListener" && this.removeAllListeners(f);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = s[t]), typeof r == "function")) this.removeListener(t, r);
  else if (r !== void 0)
    for (o = r.length - 1; o >= 0; o--) this.removeListener(t, r[o]);
  return this;
};
function Ef(a, t, r) {
  var s = a._events;
  if (s === void 0) return [];
  var o = s[t];
  return o === void 0
    ? []
    : typeof o == "function"
    ? r
      ? [o.listener || o]
      : [o]
    : r
    ? D1(o)
    : xf(o, o.length);
}
je.prototype.listeners = function (t) {
  return Ef(this, t, !0);
};
je.prototype.rawListeners = function (t) {
  return Ef(this, t, !1);
};
je.listenerCount = function (a, t) {
  return typeof a.listenerCount == "function"
    ? a.listenerCount(t)
    : If.call(a, t);
};
je.prototype.listenerCount = If;
function If(a) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[a];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
je.prototype.eventNames = function () {
  return this._eventsCount > 0 ? xo(this._events) : [];
};
function xf(a, t) {
  for (var r = new Array(t), s = 0; s < t; ++s) r[s] = a[s];
  return r;
}
function $1(a, t) {
  for (; t + 1 < a.length; t++) a[t] = a[t + 1];
  a.pop();
}
function D1(a) {
  for (var t = new Array(a.length), r = 0; r < t.length; ++r)
    t[r] = a[r].listener || a[r];
  return t;
}
function F1(a, t) {
  return new Promise(function (r, s) {
    function o(f) {
      a.removeListener(t, h), s(f);
    }
    function h() {
      typeof a.removeListener == "function" && a.removeListener("error", o),
        r([].slice.call(arguments));
    }
    Pf(a, t, h, { once: !0 }), t !== "error" && L1(a, o, { once: !0 });
  });
}
function L1(a, t, r) {
  typeof a.on == "function" && Pf(a, "error", t, r);
}
function Pf(a, t, r, s) {
  if (typeof a.on == "function") s.once ? a.once(t, r) : a.on(t, r);
  else if (typeof a.addEventListener == "function")
    a.addEventListener(t, function o(h) {
      s.once && a.removeEventListener(t, o), r(h);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof a
    );
}
const j1 =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  q1 =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  M1 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function z1(a, t) {
  if (
    a === "__proto__" ||
    (a === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    U1(a);
    return;
  }
  return t;
}
function U1(a) {
  console.warn(`[destr] Dropping "${a}" key to prevent prototype pollution.`);
}
function yo(a, t = {}) {
  if (typeof a != "string") return a;
  const r = a.trim();
  if (a[0] === '"' && a.endsWith('"') && !a.includes("\\"))
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!M1.test(a)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return a;
  }
  try {
    if (j1.test(a) || q1.test(a)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(a, z1);
    }
    return JSON.parse(a);
  } catch (s) {
    if (t.strict) throw s;
    return a;
  }
}
function H1(a) {
  return !a || typeof a.then != "function" ? Promise.resolve(a) : a;
}
function qt(a, ...t) {
  try {
    return H1(a(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function k1(a) {
  const t = typeof a;
  return a === null || (t !== "object" && t !== "function");
}
function B1(a) {
  const t = Object.getPrototypeOf(a);
  return !t || t.isPrototypeOf(Object);
}
function Po(a) {
  if (k1(a)) return String(a);
  if (B1(a) || Array.isArray(a)) return JSON.stringify(a);
  if (typeof a.toJSON == "function") return Po(a.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Sf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Oc = "base64:";
function K1(a) {
  if (typeof a == "string") return a;
  Sf();
  const t = Buffer.from(a).toString("base64");
  return Oc + t;
}
function V1(a) {
  return typeof a != "string" || !a.startsWith(Oc)
    ? a
    : (Sf(), Buffer.from(a.slice(Oc.length), "base64"));
}
function cr(a) {
  return a
    ? a
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function G1(...a) {
  return cr(a.join(":"));
}
function vo(a) {
  return (a = cr(a)), a ? a + ":" : "";
}
const W1 = "memory",
  J1 = () => {
    const a = new Map();
    return {
      name: W1,
      options: {},
      hasItem(t) {
        return a.has(t);
      },
      getItem(t) {
        return a.get(t) ?? null;
      },
      getItemRaw(t) {
        return a.get(t) ?? null;
      },
      setItem(t, r) {
        a.set(t, r);
      },
      setItemRaw(t, r) {
        a.set(t, r);
      },
      removeItem(t) {
        a.delete(t);
      },
      getKeys() {
        return Array.from(a.keys());
      },
      clear() {
        a.clear();
      },
      dispose() {
        a.clear();
      },
    };
  };
function Q1(a = {}) {
  const t = {
      mounts: { "": a.driver || J1() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (y) => {
      for (const E of t.mountpoints)
        if (y.startsWith(E))
          return {
            base: E,
            relativeKey: y.slice(E.length),
            driver: t.mounts[E],
          };
      return { base: "", relativeKey: y, driver: t.mounts[""] };
    },
    s = (y, E) =>
      t.mountpoints
        .filter((A) => A.startsWith(y) || (E && y.startsWith(A)))
        .map((A) => ({
          relativeBase: y.length > A.length ? y.slice(A.length) : void 0,
          mountpoint: A,
          driver: t.mounts[A],
        })),
    o = (y, E) => {
      if (t.watching) {
        E = cr(E);
        for (const A of t.watchListeners) A(y, E);
      }
    },
    h = async () => {
      if (!t.watching) {
        t.watching = !0;
        for (const y in t.mounts) t.unwatch[y] = await tl(t.mounts[y], o, y);
      }
    },
    f = async () => {
      if (t.watching) {
        for (const y in t.unwatch) await t.unwatch[y]();
        (t.unwatch = {}), (t.watching = !1);
      }
    },
    g = (y, E, A) => {
      const $ = new Map(),
        L = (C) => {
          let Y = $.get(C.base);
          return (
            Y ||
              ((Y = { driver: C.driver, base: C.base, items: [] }),
              $.set(C.base, Y)),
            Y
          );
        };
      for (const C of y) {
        const Y = typeof C == "string",
          re = cr(Y ? C : C.key),
          oe = Y ? void 0 : C.value,
          ce = Y || !C.options ? E : { ...E, ...C.options },
          ae = r(re);
        L(ae).items.push({
          key: re,
          value: oe,
          relativeKey: ae.relativeKey,
          options: ce,
        });
      }
      return Promise.all([...$.values()].map((C) => A(C))).then((C) =>
        C.flat()
      );
    },
    m = {
      hasItem(y, E = {}) {
        y = cr(y);
        const { relativeKey: A, driver: $ } = r(y);
        return qt($.hasItem, A, E);
      },
      getItem(y, E = {}) {
        y = cr(y);
        const { relativeKey: A, driver: $ } = r(y);
        return qt($.getItem, A, E).then((L) => yo(L));
      },
      getItems(y, E) {
        return g(y, E, (A) =>
          A.driver.getItems
            ? qt(
                A.driver.getItems,
                A.items.map(($) => ({
                  key: $.relativeKey,
                  options: $.options,
                })),
                E
              ).then(($) =>
                $.map((L) => ({ key: G1(A.base, L.key), value: yo(L.value) }))
              )
            : Promise.all(
                A.items.map(($) =>
                  qt(A.driver.getItem, $.relativeKey, $.options).then((L) => ({
                    key: $.key,
                    value: yo(L),
                  }))
                )
              )
        );
      },
      getItemRaw(y, E = {}) {
        y = cr(y);
        const { relativeKey: A, driver: $ } = r(y);
        return $.getItemRaw
          ? qt($.getItemRaw, A, E)
          : qt($.getItem, A, E).then((L) => V1(L));
      },
      async setItem(y, E, A = {}) {
        if (E === void 0) return m.removeItem(y);
        y = cr(y);
        const { relativeKey: $, driver: L } = r(y);
        L.setItem &&
          (await qt(L.setItem, $, Po(E), A), L.watch || o("update", y));
      },
      async setItems(y, E) {
        await g(y, E, async (A) => {
          if (A.driver.setItems)
            return qt(
              A.driver.setItems,
              A.items.map(($) => ({
                key: $.relativeKey,
                value: Po($.value),
                options: $.options,
              })),
              E
            );
          A.driver.setItem &&
            (await Promise.all(
              A.items.map(($) =>
                qt(A.driver.setItem, $.relativeKey, Po($.value), $.options)
              )
            ));
        });
      },
      async setItemRaw(y, E, A = {}) {
        if (E === void 0) return m.removeItem(y, A);
        y = cr(y);
        const { relativeKey: $, driver: L } = r(y);
        if (L.setItemRaw) await qt(L.setItemRaw, $, E, A);
        else if (L.setItem) await qt(L.setItem, $, K1(E), A);
        else return;
        L.watch || o("update", y);
      },
      async removeItem(y, E = {}) {
        typeof E == "boolean" && (E = { removeMeta: E }), (y = cr(y));
        const { relativeKey: A, driver: $ } = r(y);
        $.removeItem &&
          (await qt($.removeItem, A, E),
          (E.removeMeta || E.removeMata) &&
            (await qt($.removeItem, A + "$", E)),
          $.watch || o("remove", y));
      },
      async getMeta(y, E = {}) {
        typeof E == "boolean" && (E = { nativeOnly: E }), (y = cr(y));
        const { relativeKey: A, driver: $ } = r(y),
          L = Object.create(null);
        if (
          ($.getMeta && Object.assign(L, await qt($.getMeta, A, E)),
          !E.nativeOnly)
        ) {
          const C = await qt($.getItem, A + "$", E).then((Y) => yo(Y));
          C &&
            typeof C == "object" &&
            (typeof C.atime == "string" && (C.atime = new Date(C.atime)),
            typeof C.mtime == "string" && (C.mtime = new Date(C.mtime)),
            Object.assign(L, C));
        }
        return L;
      },
      setMeta(y, E, A = {}) {
        return this.setItem(y + "$", E, A);
      },
      removeMeta(y, E = {}) {
        return this.removeItem(y + "$", E);
      },
      async getKeys(y, E = {}) {
        y = vo(y);
        const A = s(y, !0);
        let $ = [];
        const L = [];
        for (const C of A) {
          const re = (await qt(C.driver.getKeys, C.relativeBase, E))
            .map((oe) => C.mountpoint + cr(oe))
            .filter((oe) => !$.some((ce) => oe.startsWith(ce)));
          L.push(...re),
            ($ = [
              C.mountpoint,
              ...$.filter((oe) => !oe.startsWith(C.mountpoint)),
            ]);
        }
        return y
          ? L.filter((C) => C.startsWith(y) && !C.endsWith("$"))
          : L.filter((C) => !C.endsWith("$"));
      },
      async clear(y, E = {}) {
        (y = vo(y)),
          await Promise.all(
            s(y, !1).map(async (A) => {
              if (A.driver.clear) return qt(A.driver.clear, A.relativeBase, E);
              if (A.driver.removeItem) {
                const $ = await A.driver.getKeys(A.relativeBase || "", E);
                return Promise.all($.map((L) => A.driver.removeItem(L, E)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(t.mounts).map((y) => rl(y)));
      },
      async watch(y) {
        return (
          await h(),
          t.watchListeners.push(y),
          async () => {
            (t.watchListeners = t.watchListeners.filter((E) => E !== y)),
              t.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (t.watchListeners = []), await f();
      },
      mount(y, E) {
        if (((y = vo(y)), y && t.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (t.mountpoints.push(y),
            t.mountpoints.sort((A, $) => $.length - A.length)),
          (t.mounts[y] = E),
          t.watching &&
            Promise.resolve(tl(E, o, y))
              .then((A) => {
                t.unwatch[y] = A;
              })
              .catch(console.error),
          m
        );
      },
      async unmount(y, E = !0) {
        (y = vo(y)),
          !(!y || !t.mounts[y]) &&
            (t.watching &&
              y in t.unwatch &&
              (t.unwatch[y](), delete t.unwatch[y]),
            E && (await rl(t.mounts[y])),
            (t.mountpoints = t.mountpoints.filter((A) => A !== y)),
            delete t.mounts[y]);
      },
      getMount(y = "") {
        y = cr(y) + ":";
        const E = r(y);
        return { driver: E.driver, base: E.base };
      },
      getMounts(y = "", E = {}) {
        return (
          (y = cr(y)),
          s(y, E.parents).map(($) => ({ driver: $.driver, base: $.mountpoint }))
        );
      },
    };
  return m;
}
function tl(a, t, r) {
  return a.watch ? a.watch((s, o) => t(s, r + o)) : () => {};
}
async function rl(a) {
  typeof a.dispose == "function" && (await qt(a.dispose));
}
function Vi(a) {
  return new Promise((t, r) => {
    (a.oncomplete = a.onsuccess = () => t(a.result)),
      (a.onabort = a.onerror = () => r(a.error));
  });
}
function Rf(a, t) {
  const r = indexedDB.open(a);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const s = Vi(r);
  return (o, h) => s.then((f) => h(f.transaction(t, o).objectStore(t)));
}
let fc;
function nn() {
  return fc || (fc = Rf("keyval-store", "keyval")), fc;
}
function il(a, t = nn()) {
  return t("readonly", (r) => Vi(r.get(a)));
}
function Y1(a, t, r = nn()) {
  return r("readwrite", (s) => (s.put(t, a), Vi(s.transaction)));
}
function Z1(a, t = nn()) {
  return t("readwrite", (r) => (r.delete(a), Vi(r.transaction)));
}
function X1(a = nn()) {
  return a("readwrite", (t) => (t.clear(), Vi(t.transaction)));
}
function ew(a, t) {
  return (
    (a.openCursor().onsuccess = function () {
      this.result && (t(this.result), this.result.continue());
    }),
    Vi(a.transaction)
  );
}
function tw(a = nn()) {
  return a("readonly", (t) => {
    if (t.getAllKeys) return Vi(t.getAllKeys());
    const r = [];
    return ew(t, (s) => r.push(s.key)).then(() => r);
  });
}
const rw = (a) =>
    JSON.stringify(a, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  iw = (a) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = a.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function on(a) {
  if (typeof a != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof a}`);
  try {
    return iw(a);
  } catch {
    return a;
  }
}
function Ki(a) {
  return typeof a == "string" ? a : rw(a) || "";
}
const sw = "idb-keyval";
var nw = (a = {}) => {
  const t = a.base && a.base.length > 0 ? `${a.base}:` : "",
    r = (o) => t + o;
  let s;
  return (
    a.dbName && a.storeName && (s = Rf(a.dbName, a.storeName)),
    {
      name: sw,
      options: a,
      async hasItem(o) {
        return !(typeof (await il(r(o), s)) > "u");
      },
      async getItem(o) {
        return (await il(r(o), s)) ?? null;
      },
      setItem(o, h) {
        return Y1(r(o), h, s);
      },
      removeItem(o) {
        return Z1(r(o), s);
      },
      getKeys() {
        return tw(s);
      },
      clear() {
        return X1(s);
      },
    }
  );
};
const ow = "WALLET_CONNECT_V2_INDEXED_DB",
  aw = "keyvaluestorage";
let cw = class {
  constructor() {
    this.indexedDb = Q1({ driver: nw({ dbName: ow, storeName: aw }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (t) => [t.key, t.value]
    );
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null) return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Ki(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var pc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  So = { exports: {} };
(function () {
  let a;
  function t() {}
  (a = t),
    (a.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (a.prototype.setItem = function (r, s) {
      this[r] = String(s);
    }),
    (a.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (a.prototype.clear = function () {
      const r = this;
      Object.keys(r).forEach(function (s) {
        (r[s] = void 0), delete r[s];
      });
    }),
    (a.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    a.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof pc < "u" && pc.localStorage
      ? (So.exports = pc.localStorage)
      : typeof window < "u" && window.localStorage
      ? (So.exports = window.localStorage)
      : (So.exports = new t());
})();
function uw(a) {
  var t;
  return [a[0], on((t = a[1]) != null ? t : "")];
}
class hw {
  constructor() {
    this.localStorage = So.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(uw);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null) return on(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Ki(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const lw = "wc_storage_version",
  sl = 1,
  fw = async (a, t, r) => {
    const s = lw,
      o = await t.getItem(s);
    if (o && o >= sl) {
      r(t);
      return;
    }
    const h = await a.getKeys();
    if (!h.length) {
      r(t);
      return;
    }
    const f = [];
    for (; h.length; ) {
      const g = h.shift();
      if (!g) continue;
      const m = g.toLowerCase();
      if (
        m.includes("wc@") ||
        m.includes("walletconnect") ||
        m.includes("wc_") ||
        m.includes("wallet_connect")
      ) {
        const y = await a.getItem(g);
        await t.setItem(g, y), f.push(g);
      }
    }
    await t.setItem(s, sl), r(t), pw(a, f);
  },
  pw = async (a, t) => {
    t.length &&
      t.forEach(async (r) => {
        await a.removeItem(r);
      });
  };
let dw = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (r) => {
        (this.storage = r), (this.initialized = !0);
      });
    const t = new hw();
    this.storage = t;
    try {
      const r = new cw();
      fw(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.initialized && (clearInterval(r), t());
        }, 20);
      }));
  }
};
var Is = {},
  ks = {},
  dc = {},
  Bs = {};
class Gi {}
const gw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: Gi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yw = uf(gw);
var nl;
function vw() {
  if (nl) return Bs;
  (nl = 1),
    Object.defineProperty(Bs, "__esModule", { value: !0 }),
    (Bs.IHeartBeat = void 0);
  const a = yw;
  class t extends a.IEvents {
    constructor(s) {
      super();
    }
  }
  return (Bs.IHeartBeat = t), Bs;
}
var ol;
function Af() {
  return (
    ol ||
      ((ol = 1),
      (function (a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          sn.__exportStar(vw(), a);
      })(dc)),
    dc
  );
}
var gc = {},
  ki = {},
  al;
function mw() {
  if (al) return ki;
  (al = 1),
    Object.defineProperty(ki, "__esModule", { value: !0 }),
    (ki.HEARTBEAT_EVENTS = ki.HEARTBEAT_INTERVAL = void 0);
  const a = te;
  return (
    (ki.HEARTBEAT_INTERVAL = a.FIVE_SECONDS),
    (ki.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    ki
  );
}
var cl;
function Of() {
  return (
    cl ||
      ((cl = 1),
      (function (a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          sn.__exportStar(mw(), a);
      })(gc)),
    gc
  );
}
var ul;
function ww() {
  if (ul) return ks;
  (ul = 1),
    Object.defineProperty(ks, "__esModule", { value: !0 }),
    (ks.HeartBeat = void 0);
  const a = sn,
    t = Dt,
    r = te,
    s = Af(),
    o = Of();
  class h extends s.IHeartBeat {
    constructor(g) {
      super(g),
        (this.events = new t.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval = g?.interval || o.HEARTBEAT_INTERVAL);
    }
    static init(g) {
      return a.__awaiter(this, void 0, void 0, function* () {
        const m = new h(g);
        return yield m.init(), m;
      });
    }
    init() {
      return a.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(g, m) {
      this.events.on(g, m);
    }
    once(g, m) {
      this.events.once(g, m);
    }
    off(g, m) {
      this.events.off(g, m);
    }
    removeListener(g, m) {
      this.events.removeListener(g, m);
    }
    initialize() {
      return a.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          r.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (ks.HeartBeat = h), ks;
}
(function (a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  const t = sn;
  t.__exportStar(ww(), a), t.__exportStar(Af(), a), t.__exportStar(Of(), a);
})(Is);
function bw(a) {
  try {
    return JSON.stringify(a);
  } catch {
    return '"[Circular]"';
  }
}
var _w = Ew;
function Ew(a, t, r) {
  var s = (r && r.stringify) || bw,
    o = 1;
  if (typeof a == "object" && a !== null) {
    var h = t.length + o;
    if (h === 1) return a;
    var f = new Array(h);
    f[0] = s(a);
    for (var g = 1; g < h; g++) f[g] = s(t[g]);
    return f.join(" ");
  }
  if (typeof a != "string") return a;
  var m = t.length;
  if (m === 0) return a;
  for (
    var y = "", E = 1 - o, A = -1, $ = (a && a.length) || 0, L = 0;
    L < $;

  ) {
    if (a.charCodeAt(L) === 37 && L + 1 < $) {
      switch (((A = A > -1 ? A : 0), a.charCodeAt(L + 1))) {
        case 100:
        case 102:
          if (E >= m || t[E] == null) break;
          A < L && (y += a.slice(A, L)), (y += Number(t[E])), (A = L + 2), L++;
          break;
        case 105:
          if (E >= m || t[E] == null) break;
          A < L && (y += a.slice(A, L)),
            (y += Math.floor(Number(t[E]))),
            (A = L + 2),
            L++;
          break;
        case 79:
        case 111:
        case 106:
          if (E >= m || t[E] === void 0) break;
          A < L && (y += a.slice(A, L));
          var C = typeof t[E];
          if (C === "string") {
            (y += "'" + t[E] + "'"), (A = L + 2), L++;
            break;
          }
          if (C === "function") {
            (y += t[E].name || "<anonymous>"), (A = L + 2), L++;
            break;
          }
          (y += s(t[E])), (A = L + 2), L++;
          break;
        case 115:
          if (E >= m) break;
          A < L && (y += a.slice(A, L)), (y += String(t[E])), (A = L + 2), L++;
          break;
        case 37:
          A < L && (y += a.slice(A, L)), (y += "%"), (A = L + 2), L++, E--;
          break;
      }
      ++E;
    }
    ++L;
  }
  return A === -1 ? a : (A < $ && (y += a.slice(A)), y);
}
const hl = _w;
var $o = Vr;
const tn = Nw().console || {},
  Iw = {
    mapHttpRequest: mo,
    mapHttpResponse: mo,
    wrapRequestSerializer: yc,
    wrapResponseSerializer: yc,
    wrapErrorSerializer: yc,
    req: mo,
    res: mo,
    err: Aw,
  };
function xw(a, t) {
  return Array.isArray(a)
    ? a.filter(function (s) {
        return s !== "!stdSerializers.err";
      })
    : a === !0
    ? Object.keys(t)
    : !1;
}
function Vr(a) {
  (a = a || {}), (a.browser = a.browser || {});
  const t = a.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const r = a.browser.write || tn;
  a.browser.write && (a.browser.asObject = !0);
  const s = a.serializers || {},
    o = xw(a.browser.serialize, s);
  let h = a.browser.serialize;
  Array.isArray(a.browser.serialize) &&
    a.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (h = !1);
  const f = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" &&
    (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
    a.enabled === !1 && (a.level = "silent");
  const g = a.level || "info",
    m = Object.create(r);
  m.log || (m.log = rn),
    Object.defineProperty(m, "levelVal", { get: E }),
    Object.defineProperty(m, "level", { get: A, set: $ });
  const y = {
    transmit: t,
    serialize: o,
    asObject: a.browser.asObject,
    levels: f,
    timestamp: Ow(a),
  };
  (m.levels = Vr.levels),
    (m.level = g),
    (m.setMaxListeners =
      m.getMaxListeners =
      m.emit =
      m.addListener =
      m.on =
      m.prependListener =
      m.once =
      m.prependOnceListener =
      m.removeListener =
      m.removeAllListeners =
      m.listeners =
      m.listenerCount =
      m.eventNames =
      m.write =
      m.flush =
        rn),
    (m.serializers = s),
    (m._serialize = o),
    (m._stdErrSerialize = h),
    (m.child = L),
    t && (m._logEvent = Cc());
  function E() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function A() {
    return this._level;
  }
  function $(C) {
    if (C !== "silent" && !this.levels.values[C])
      throw Error("unknown level " + C);
    (this._level = C),
      gs(y, m, "error", "log"),
      gs(y, m, "fatal", "error"),
      gs(y, m, "warn", "error"),
      gs(y, m, "info", "log"),
      gs(y, m, "debug", "log"),
      gs(y, m, "trace", "log");
  }
  function L(C, Y) {
    if (!C) throw new Error("missing bindings for child Pino");
    (Y = Y || {}), o && C.serializers && (Y.serializers = C.serializers);
    const re = Y.serializers;
    if (o && re) {
      var oe = Object.assign({}, s, re),
        ce = a.browser.serialize === !0 ? Object.keys(oe) : o;
      delete C.serializers, Do([C], ce, oe, this._stdErrSerialize);
    }
    function ae(ee) {
      (this._childLevel = (ee._childLevel | 0) + 1),
        (this.error = ys(ee, C, "error")),
        (this.fatal = ys(ee, C, "fatal")),
        (this.warn = ys(ee, C, "warn")),
        (this.info = ys(ee, C, "info")),
        (this.debug = ys(ee, C, "debug")),
        (this.trace = ys(ee, C, "trace")),
        oe && ((this.serializers = oe), (this._serialize = ce)),
        t && (this._logEvent = Cc([].concat(ee._logEvent.bindings, C)));
    }
    return (ae.prototype = this), new ae(this);
  }
  return m;
}
Vr.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
Vr.stdSerializers = Iw;
Vr.stdTimeFunctions = Object.assign(
  {},
  { nullTime: Cf, epochTime: Tf, unixTime: Cw, isoTime: Tw }
);
function gs(a, t, r, s) {
  const o = Object.getPrototypeOf(t);
  (t[r] =
    t.levelVal > t.levels.values[r] ? rn : o[r] ? o[r] : tn[r] || tn[s] || rn),
    Pw(a, t, r);
}
function Pw(a, t, r) {
  (!a.transmit && t[r] === rn) ||
    (t[r] = (function (s) {
      return function () {
        const h = a.timestamp(),
          f = new Array(arguments.length),
          g =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === tn
              ? tn
              : this;
        for (var m = 0; m < f.length; m++) f[m] = arguments[m];
        if (
          (a.serialize &&
            !a.asObject &&
            Do(f, this._serialize, this.serializers, this._stdErrSerialize),
          a.asObject ? s.call(g, Sw(this, r, f, h)) : s.apply(g, f),
          a.transmit)
        ) {
          const y = a.transmit.level || t.level,
            E = Vr.levels.values[y],
            A = Vr.levels.values[r];
          if (A < E) return;
          Rw(
            this,
            {
              ts: h,
              methodLevel: r,
              methodValue: A,
              transmitLevel: y,
              transmitValue: Vr.levels.values[a.transmit.level || t.level],
              send: a.transmit.send,
              val: t.levelVal,
            },
            f
          );
        }
      };
    })(t[r]));
}
function Sw(a, t, r, s) {
  a._serialize && Do(r, a._serialize, a.serializers, a._stdErrSerialize);
  const o = r.slice();
  let h = o[0];
  const f = {};
  s && (f.time = s), (f.level = Vr.levels.values[t]);
  let g = (a._childLevel | 0) + 1;
  if ((g < 1 && (g = 1), h !== null && typeof h == "object")) {
    for (; g-- && typeof o[0] == "object"; ) Object.assign(f, o.shift());
    h = o.length ? hl(o.shift(), o) : void 0;
  } else typeof h == "string" && (h = hl(o.shift(), o));
  return h !== void 0 && (f.msg = h), f;
}
function Do(a, t, r, s) {
  for (const o in a)
    if (s && a[o] instanceof Error) a[o] = Vr.stdSerializers.err(a[o]);
    else if (typeof a[o] == "object" && !Array.isArray(a[o]))
      for (const h in a[o])
        t && t.indexOf(h) > -1 && h in r && (a[o][h] = r[h](a[o][h]));
}
function ys(a, t, r) {
  return function () {
    const s = new Array(1 + arguments.length);
    s[0] = t;
    for (var o = 1; o < s.length; o++) s[o] = arguments[o - 1];
    return a[r].apply(this, s);
  };
}
function Rw(a, t, r) {
  const s = t.send,
    o = t.ts,
    h = t.methodLevel,
    f = t.methodValue,
    g = t.val,
    m = a._logEvent.bindings;
  Do(
    r,
    a._serialize || Object.keys(a.serializers),
    a.serializers,
    a._stdErrSerialize === void 0 ? !0 : a._stdErrSerialize
  ),
    (a._logEvent.ts = o),
    (a._logEvent.messages = r.filter(function (y) {
      return m.indexOf(y) === -1;
    })),
    (a._logEvent.level.label = h),
    (a._logEvent.level.value = f),
    s(h, a._logEvent, g),
    (a._logEvent = Cc(m));
}
function Cc(a) {
  return {
    ts: 0,
    messages: [],
    bindings: a || [],
    level: { label: "", value: 0 },
  };
}
function Aw(a) {
  const t = { type: a.constructor.name, msg: a.message, stack: a.stack };
  for (const r in a) t[r] === void 0 && (t[r] = a[r]);
  return t;
}
function Ow(a) {
  return typeof a.timestamp == "function"
    ? a.timestamp
    : a.timestamp === !1
    ? Cf
    : Tf;
}
function mo() {
  return {};
}
function yc(a) {
  return a;
}
function rn() {}
function Cf() {
  return !1;
}
function Tf() {
  return Date.now();
}
function Cw() {
  return Math.round(Date.now() / 1e3);
}
function Tw() {
  return new Date(Date.now()).toISOString();
}
function Nw() {
  function a(t) {
    return typeof t < "u" && t;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return a(self) || a(window) || a(this) || {};
  }
}
const $w = { level: "info" },
  an = "custom_context";
var Dw = Object.defineProperty,
  Fw = Object.defineProperties,
  Lw = Object.getOwnPropertyDescriptors,
  ll = Object.getOwnPropertySymbols,
  jw = Object.prototype.hasOwnProperty,
  qw = Object.prototype.propertyIsEnumerable,
  fl = (a, t, r) =>
    t in a
      ? Dw(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  Mw = (a, t) => {
    for (var r in t || (t = {})) jw.call(t, r) && fl(a, r, t[r]);
    if (ll) for (var r of ll(t)) qw.call(t, r) && fl(a, r, t[r]);
    return a;
  },
  zw = (a, t) => Fw(a, Lw(t));
function Fo(a) {
  return zw(Mw({}, a), { level: a?.level || $w.level });
}
function Uw(a, t = an) {
  return a[t] || "";
}
function Hw(a, t, r = an) {
  return (a[r] = t), a;
}
function hr(a, t = an) {
  let r = "";
  return (
    typeof a.bindings > "u" ? (r = Uw(a, t)) : (r = a.bindings().context || ""),
    r
  );
}
function kw(a, t, r = an) {
  const s = hr(a, r);
  return s.trim() ? `${s}/${t}` : t;
}
function lr(a, t, r = an) {
  const s = kw(a, t, r),
    o = a.child({ context: s });
  return Hw(o, s, r);
}
let Bw = class extends Gi {
    constructor(t) {
      super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  Kw = class extends Gi {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r), (this.records = new Map());
    }
  },
  Vw = class {
    constructor(t, r) {
      (this.logger = t), (this.core = r);
    }
  },
  Gw = class extends Gi {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  Ww = class extends Gi {
    constructor(t) {
      super();
    }
  },
  Jw = class {
    constructor(t, r, s, o) {
      (this.core = t), (this.logger = r), (this.name = s);
    }
  },
  Qw = class extends Gi {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  Yw = class extends Gi {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  Zw = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  Xw = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  eb = class {
    constructor(t) {
      (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  tb = class {
    constructor(t) {
      this.client = t;
    }
  };
var qc = {},
  Nf = {};
(function (a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  var t = Um,
    r = hf;
  (a.DIGEST_LENGTH = 64), (a.BLOCK_SIZE = 128);
  var s = (function () {
    function g() {
      (this.digestLength = a.DIGEST_LENGTH),
        (this.blockSize = a.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (g.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (g.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.clean = function () {
        r.wipe(this._buffer),
          r.wipe(this._tempHi),
          r.wipe(this._tempLo),
          this.reset();
      }),
      (g.prototype.update = function (m, y) {
        if ((y === void 0 && (y = m.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var E = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < a.BLOCK_SIZE && y > 0; )
            (this._buffer[this._bufferLength++] = m[E++]), y--;
          this._bufferLength === this.blockSize &&
            (h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((E = h(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            m,
            E,
            y
          )),
          (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = m[E++]), y--;
        return this;
      }),
      (g.prototype.finish = function (m) {
        if (!this._finished) {
          var y = this._bytesHashed,
            E = this._bufferLength,
            A = (y / 536870912) | 0,
            $ = y << 3,
            L = y % 128 < 112 ? 128 : 256;
          this._buffer[E] = 128;
          for (var C = E + 1; C < L - 8; C++) this._buffer[C] = 0;
          t.writeUint32BE(A, this._buffer, L - 8),
            t.writeUint32BE($, this._buffer, L - 4),
            h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              L
            ),
            (this._finished = !0);
        }
        for (var C = 0; C < this.digestLength / 8; C++)
          t.writeUint32BE(this._stateHi[C], m, C * 8),
            t.writeUint32BE(this._stateLo[C], m, C * 8 + 4);
        return this;
      }),
      (g.prototype.digest = function () {
        var m = new Uint8Array(this.digestLength);
        return this.finish(m), m;
      }),
      (g.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (g.prototype.restoreState = function (m) {
        return (
          this._stateHi.set(m.stateHi),
          this._stateLo.set(m.stateLo),
          (this._bufferLength = m.bufferLength),
          m.buffer && this._buffer.set(m.buffer),
          (this._bytesHashed = m.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.cleanSavedState = function (m) {
        r.wipe(m.stateHi),
          r.wipe(m.stateLo),
          m.buffer && r.wipe(m.buffer),
          (m.bufferLength = 0),
          (m.bytesHashed = 0);
      }),
      g
    );
  })();
  a.SHA512 = s;
  var o = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function h(g, m, y, E, A, $, L) {
    for (
      var C = y[0],
        Y = y[1],
        re = y[2],
        oe = y[3],
        ce = y[4],
        ae = y[5],
        ee = y[6],
        he = y[7],
        pe = E[0],
        Q = E[1],
        ve = E[2],
        bt = E[3],
        nt = E[4],
        Be = E[5],
        Mt = E[6],
        zt = E[7],
        b,
        S,
        J,
        le,
        H,
        U,
        k,
        B;
      L >= 128;

    ) {
      for (var et = 0; et < 16; et++) {
        var ot = 8 * et + $;
        (g[et] = t.readUint32BE(A, ot)), (m[et] = t.readUint32BE(A, ot + 4));
      }
      for (var et = 0; et < 80; et++) {
        var Ai = C,
          Ee = Y,
          Or = re,
          D = oe,
          N = ce,
          O = ae,
          u = ee,
          I = he,
          Z = pe,
          ue = Q,
          me = ve,
          Re = bt,
          Oe = nt,
          Ie = Be,
          _t = Mt,
          gt = zt;
        if (
          ((b = he),
          (S = zt),
          (H = S & 65535),
          (U = S >>> 16),
          (k = b & 65535),
          (B = b >>> 16),
          (b =
            ((ce >>> 14) | (nt << (32 - 14))) ^
            ((ce >>> 18) | (nt << (32 - 18))) ^
            ((nt >>> (41 - 32)) | (ce << (32 - (41 - 32))))),
          (S =
            ((nt >>> 14) | (ce << (32 - 14))) ^
            ((nt >>> 18) | (ce << (32 - 18))) ^
            ((ce >>> (41 - 32)) | (nt << (32 - (41 - 32))))),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (b = (ce & ae) ^ (~ce & ee)),
          (S = (nt & Be) ^ (~nt & Mt)),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (b = o[et * 2]),
          (S = o[et * 2 + 1]),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (b = g[et % 16]),
          (S = m[et % 16]),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (U += H >>> 16),
          (k += U >>> 16),
          (B += k >>> 16),
          (J = (k & 65535) | (B << 16)),
          (le = (H & 65535) | (U << 16)),
          (b = J),
          (S = le),
          (H = S & 65535),
          (U = S >>> 16),
          (k = b & 65535),
          (B = b >>> 16),
          (b =
            ((C >>> 28) | (pe << (32 - 28))) ^
            ((pe >>> (34 - 32)) | (C << (32 - (34 - 32)))) ^
            ((pe >>> (39 - 32)) | (C << (32 - (39 - 32))))),
          (S =
            ((pe >>> 28) | (C << (32 - 28))) ^
            ((C >>> (34 - 32)) | (pe << (32 - (34 - 32)))) ^
            ((C >>> (39 - 32)) | (pe << (32 - (39 - 32))))),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (b = (C & Y) ^ (C & re) ^ (Y & re)),
          (S = (pe & Q) ^ (pe & ve) ^ (Q & ve)),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (U += H >>> 16),
          (k += U >>> 16),
          (B += k >>> 16),
          (I = (k & 65535) | (B << 16)),
          (gt = (H & 65535) | (U << 16)),
          (b = D),
          (S = Re),
          (H = S & 65535),
          (U = S >>> 16),
          (k = b & 65535),
          (B = b >>> 16),
          (b = J),
          (S = le),
          (H += S & 65535),
          (U += S >>> 16),
          (k += b & 65535),
          (B += b >>> 16),
          (U += H >>> 16),
          (k += U >>> 16),
          (B += k >>> 16),
          (D = (k & 65535) | (B << 16)),
          (Re = (H & 65535) | (U << 16)),
          (Y = Ai),
          (re = Ee),
          (oe = Or),
          (ce = D),
          (ae = N),
          (ee = O),
          (he = u),
          (C = I),
          (Q = Z),
          (ve = ue),
          (bt = me),
          (nt = Re),
          (Be = Oe),
          (Mt = Ie),
          (zt = _t),
          (pe = gt),
          et % 16 === 15)
        )
          for (var ot = 0; ot < 16; ot++)
            (b = g[ot]),
              (S = m[ot]),
              (H = S & 65535),
              (U = S >>> 16),
              (k = b & 65535),
              (B = b >>> 16),
              (b = g[(ot + 9) % 16]),
              (S = m[(ot + 9) % 16]),
              (H += S & 65535),
              (U += S >>> 16),
              (k += b & 65535),
              (B += b >>> 16),
              (J = g[(ot + 1) % 16]),
              (le = m[(ot + 1) % 16]),
              (b =
                ((J >>> 1) | (le << (32 - 1))) ^
                ((J >>> 8) | (le << (32 - 8))) ^
                (J >>> 7)),
              (S =
                ((le >>> 1) | (J << (32 - 1))) ^
                ((le >>> 8) | (J << (32 - 8))) ^
                ((le >>> 7) | (J << (32 - 7)))),
              (H += S & 65535),
              (U += S >>> 16),
              (k += b & 65535),
              (B += b >>> 16),
              (J = g[(ot + 14) % 16]),
              (le = m[(ot + 14) % 16]),
              (b =
                ((J >>> 19) | (le << (32 - 19))) ^
                ((le >>> (61 - 32)) | (J << (32 - (61 - 32)))) ^
                (J >>> 6)),
              (S =
                ((le >>> 19) | (J << (32 - 19))) ^
                ((J >>> (61 - 32)) | (le << (32 - (61 - 32)))) ^
                ((le >>> 6) | (J << (32 - 6)))),
              (H += S & 65535),
              (U += S >>> 16),
              (k += b & 65535),
              (B += b >>> 16),
              (U += H >>> 16),
              (k += U >>> 16),
              (B += k >>> 16),
              (g[ot] = (k & 65535) | (B << 16)),
              (m[ot] = (H & 65535) | (U << 16));
      }
      (b = C),
        (S = pe),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[0]),
        (S = E[0]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[0] = C = (k & 65535) | (B << 16)),
        (E[0] = pe = (H & 65535) | (U << 16)),
        (b = Y),
        (S = Q),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[1]),
        (S = E[1]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[1] = Y = (k & 65535) | (B << 16)),
        (E[1] = Q = (H & 65535) | (U << 16)),
        (b = re),
        (S = ve),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[2]),
        (S = E[2]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[2] = re = (k & 65535) | (B << 16)),
        (E[2] = ve = (H & 65535) | (U << 16)),
        (b = oe),
        (S = bt),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[3]),
        (S = E[3]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[3] = oe = (k & 65535) | (B << 16)),
        (E[3] = bt = (H & 65535) | (U << 16)),
        (b = ce),
        (S = nt),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[4]),
        (S = E[4]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[4] = ce = (k & 65535) | (B << 16)),
        (E[4] = nt = (H & 65535) | (U << 16)),
        (b = ae),
        (S = Be),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[5]),
        (S = E[5]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[5] = ae = (k & 65535) | (B << 16)),
        (E[5] = Be = (H & 65535) | (U << 16)),
        (b = ee),
        (S = Mt),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[6]),
        (S = E[6]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[6] = ee = (k & 65535) | (B << 16)),
        (E[6] = Mt = (H & 65535) | (U << 16)),
        (b = he),
        (S = zt),
        (H = S & 65535),
        (U = S >>> 16),
        (k = b & 65535),
        (B = b >>> 16),
        (b = y[7]),
        (S = E[7]),
        (H += S & 65535),
        (U += S >>> 16),
        (k += b & 65535),
        (B += b >>> 16),
        (U += H >>> 16),
        (k += U >>> 16),
        (B += k >>> 16),
        (y[7] = he = (k & 65535) | (B << 16)),
        (E[7] = zt = (H & 65535) | (U << 16)),
        ($ += 128),
        (L -= 128);
    }
    return $;
  }
  function f(g) {
    var m = new s();
    m.update(g);
    var y = m.digest();
    return m.clean(), y;
  }
  a.hash = f;
})(Nf);
(function (a) {
  Object.defineProperty(a, "__esModule", { value: !0 }),
    (a.convertSecretKeyToX25519 =
      a.convertPublicKeyToX25519 =
      a.verify =
      a.sign =
      a.extractPublicKeyFromSecretKey =
      a.generateKeyPair =
      a.generateKeyPairFromSeed =
      a.SEED_LENGTH =
      a.SECRET_KEY_LENGTH =
      a.PUBLIC_KEY_LENGTH =
      a.SIGNATURE_LENGTH =
        void 0);
  const t = lf,
    r = Nf,
    s = hf;
  (a.SIGNATURE_LENGTH = 64),
    (a.PUBLIC_KEY_LENGTH = 32),
    (a.SECRET_KEY_LENGTH = 64),
    (a.SEED_LENGTH = 32);
  function o(D) {
    const N = new Float64Array(16);
    if (D) for (let O = 0; O < D.length; O++) N[O] = D[O];
    return N;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const f = o(),
    g = o([1]),
    m = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    y = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    E = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    A = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    $ = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function L(D, N) {
    for (let O = 0; O < 16; O++) D[O] = N[O] | 0;
  }
  function C(D) {
    let N = 1;
    for (let O = 0; O < 16; O++) {
      let u = D[O] + N + 65535;
      (N = Math.floor(u / 65536)), (D[O] = u - N * 65536);
    }
    D[0] += N - 1 + 37 * (N - 1);
  }
  function Y(D, N, O) {
    const u = ~(O - 1);
    for (let I = 0; I < 16; I++) {
      const Z = u & (D[I] ^ N[I]);
      (D[I] ^= Z), (N[I] ^= Z);
    }
  }
  function re(D, N) {
    const O = o(),
      u = o();
    for (let I = 0; I < 16; I++) u[I] = N[I];
    C(u), C(u), C(u);
    for (let I = 0; I < 2; I++) {
      O[0] = u[0] - 65517;
      for (let ue = 1; ue < 15; ue++)
        (O[ue] = u[ue] - 65535 - ((O[ue - 1] >> 16) & 1)), (O[ue - 1] &= 65535);
      O[15] = u[15] - 32767 - ((O[14] >> 16) & 1);
      const Z = (O[15] >> 16) & 1;
      (O[14] &= 65535), Y(u, O, 1 - Z);
    }
    for (let I = 0; I < 16; I++)
      (D[2 * I] = u[I] & 255), (D[2 * I + 1] = u[I] >> 8);
  }
  function oe(D, N) {
    let O = 0;
    for (let u = 0; u < 32; u++) O |= D[u] ^ N[u];
    return (1 & ((O - 1) >>> 8)) - 1;
  }
  function ce(D, N) {
    const O = new Uint8Array(32),
      u = new Uint8Array(32);
    return re(O, D), re(u, N), oe(O, u);
  }
  function ae(D) {
    const N = new Uint8Array(32);
    return re(N, D), N[0] & 1;
  }
  function ee(D, N) {
    for (let O = 0; O < 16; O++) D[O] = N[2 * O] + (N[2 * O + 1] << 8);
    D[15] &= 32767;
  }
  function he(D, N, O) {
    for (let u = 0; u < 16; u++) D[u] = N[u] + O[u];
  }
  function pe(D, N, O) {
    for (let u = 0; u < 16; u++) D[u] = N[u] - O[u];
  }
  function Q(D, N, O) {
    let u,
      I,
      Z = 0,
      ue = 0,
      me = 0,
      Re = 0,
      Oe = 0,
      Ie = 0,
      _t = 0,
      gt = 0,
      tt = 0,
      Te = 0,
      Ke = 0,
      Ve = 0,
      rt = 0,
      Fe = 0,
      Ge = 0,
      Ae = 0,
      qe = 0,
      at = 0,
      $e = 0,
      Et = 0,
      Tt = 0,
      Ut = 0,
      Ht = 0,
      Ft = 0,
      Jt = 0,
      tr = 0,
      Mr = 0,
      Qt = 0,
      Gr = 0,
      li = 0,
      Oi = 0,
      ct = O[0],
      Qe = O[1],
      ut = O[2],
      ht = O[3],
      it = O[4],
      Ye = O[5],
      It = O[6],
      xt = O[7],
      lt = O[8],
      Pt = O[9],
      ft = O[10],
      yt = O[11],
      pt = O[12],
      ke = O[13],
      St = O[14],
      Rt = O[15];
    (u = N[0]),
      (Z += u * ct),
      (ue += u * Qe),
      (me += u * ut),
      (Re += u * ht),
      (Oe += u * it),
      (Ie += u * Ye),
      (_t += u * It),
      (gt += u * xt),
      (tt += u * lt),
      (Te += u * Pt),
      (Ke += u * ft),
      (Ve += u * yt),
      (rt += u * pt),
      (Fe += u * ke),
      (Ge += u * St),
      (Ae += u * Rt),
      (u = N[1]),
      (ue += u * ct),
      (me += u * Qe),
      (Re += u * ut),
      (Oe += u * ht),
      (Ie += u * it),
      (_t += u * Ye),
      (gt += u * It),
      (tt += u * xt),
      (Te += u * lt),
      (Ke += u * Pt),
      (Ve += u * ft),
      (rt += u * yt),
      (Fe += u * pt),
      (Ge += u * ke),
      (Ae += u * St),
      (qe += u * Rt),
      (u = N[2]),
      (me += u * ct),
      (Re += u * Qe),
      (Oe += u * ut),
      (Ie += u * ht),
      (_t += u * it),
      (gt += u * Ye),
      (tt += u * It),
      (Te += u * xt),
      (Ke += u * lt),
      (Ve += u * Pt),
      (rt += u * ft),
      (Fe += u * yt),
      (Ge += u * pt),
      (Ae += u * ke),
      (qe += u * St),
      (at += u * Rt),
      (u = N[3]),
      (Re += u * ct),
      (Oe += u * Qe),
      (Ie += u * ut),
      (_t += u * ht),
      (gt += u * it),
      (tt += u * Ye),
      (Te += u * It),
      (Ke += u * xt),
      (Ve += u * lt),
      (rt += u * Pt),
      (Fe += u * ft),
      (Ge += u * yt),
      (Ae += u * pt),
      (qe += u * ke),
      (at += u * St),
      ($e += u * Rt),
      (u = N[4]),
      (Oe += u * ct),
      (Ie += u * Qe),
      (_t += u * ut),
      (gt += u * ht),
      (tt += u * it),
      (Te += u * Ye),
      (Ke += u * It),
      (Ve += u * xt),
      (rt += u * lt),
      (Fe += u * Pt),
      (Ge += u * ft),
      (Ae += u * yt),
      (qe += u * pt),
      (at += u * ke),
      ($e += u * St),
      (Et += u * Rt),
      (u = N[5]),
      (Ie += u * ct),
      (_t += u * Qe),
      (gt += u * ut),
      (tt += u * ht),
      (Te += u * it),
      (Ke += u * Ye),
      (Ve += u * It),
      (rt += u * xt),
      (Fe += u * lt),
      (Ge += u * Pt),
      (Ae += u * ft),
      (qe += u * yt),
      (at += u * pt),
      ($e += u * ke),
      (Et += u * St),
      (Tt += u * Rt),
      (u = N[6]),
      (_t += u * ct),
      (gt += u * Qe),
      (tt += u * ut),
      (Te += u * ht),
      (Ke += u * it),
      (Ve += u * Ye),
      (rt += u * It),
      (Fe += u * xt),
      (Ge += u * lt),
      (Ae += u * Pt),
      (qe += u * ft),
      (at += u * yt),
      ($e += u * pt),
      (Et += u * ke),
      (Tt += u * St),
      (Ut += u * Rt),
      (u = N[7]),
      (gt += u * ct),
      (tt += u * Qe),
      (Te += u * ut),
      (Ke += u * ht),
      (Ve += u * it),
      (rt += u * Ye),
      (Fe += u * It),
      (Ge += u * xt),
      (Ae += u * lt),
      (qe += u * Pt),
      (at += u * ft),
      ($e += u * yt),
      (Et += u * pt),
      (Tt += u * ke),
      (Ut += u * St),
      (Ht += u * Rt),
      (u = N[8]),
      (tt += u * ct),
      (Te += u * Qe),
      (Ke += u * ut),
      (Ve += u * ht),
      (rt += u * it),
      (Fe += u * Ye),
      (Ge += u * It),
      (Ae += u * xt),
      (qe += u * lt),
      (at += u * Pt),
      ($e += u * ft),
      (Et += u * yt),
      (Tt += u * pt),
      (Ut += u * ke),
      (Ht += u * St),
      (Ft += u * Rt),
      (u = N[9]),
      (Te += u * ct),
      (Ke += u * Qe),
      (Ve += u * ut),
      (rt += u * ht),
      (Fe += u * it),
      (Ge += u * Ye),
      (Ae += u * It),
      (qe += u * xt),
      (at += u * lt),
      ($e += u * Pt),
      (Et += u * ft),
      (Tt += u * yt),
      (Ut += u * pt),
      (Ht += u * ke),
      (Ft += u * St),
      (Jt += u * Rt),
      (u = N[10]),
      (Ke += u * ct),
      (Ve += u * Qe),
      (rt += u * ut),
      (Fe += u * ht),
      (Ge += u * it),
      (Ae += u * Ye),
      (qe += u * It),
      (at += u * xt),
      ($e += u * lt),
      (Et += u * Pt),
      (Tt += u * ft),
      (Ut += u * yt),
      (Ht += u * pt),
      (Ft += u * ke),
      (Jt += u * St),
      (tr += u * Rt),
      (u = N[11]),
      (Ve += u * ct),
      (rt += u * Qe),
      (Fe += u * ut),
      (Ge += u * ht),
      (Ae += u * it),
      (qe += u * Ye),
      (at += u * It),
      ($e += u * xt),
      (Et += u * lt),
      (Tt += u * Pt),
      (Ut += u * ft),
      (Ht += u * yt),
      (Ft += u * pt),
      (Jt += u * ke),
      (tr += u * St),
      (Mr += u * Rt),
      (u = N[12]),
      (rt += u * ct),
      (Fe += u * Qe),
      (Ge += u * ut),
      (Ae += u * ht),
      (qe += u * it),
      (at += u * Ye),
      ($e += u * It),
      (Et += u * xt),
      (Tt += u * lt),
      (Ut += u * Pt),
      (Ht += u * ft),
      (Ft += u * yt),
      (Jt += u * pt),
      (tr += u * ke),
      (Mr += u * St),
      (Qt += u * Rt),
      (u = N[13]),
      (Fe += u * ct),
      (Ge += u * Qe),
      (Ae += u * ut),
      (qe += u * ht),
      (at += u * it),
      ($e += u * Ye),
      (Et += u * It),
      (Tt += u * xt),
      (Ut += u * lt),
      (Ht += u * Pt),
      (Ft += u * ft),
      (Jt += u * yt),
      (tr += u * pt),
      (Mr += u * ke),
      (Qt += u * St),
      (Gr += u * Rt),
      (u = N[14]),
      (Ge += u * ct),
      (Ae += u * Qe),
      (qe += u * ut),
      (at += u * ht),
      ($e += u * it),
      (Et += u * Ye),
      (Tt += u * It),
      (Ut += u * xt),
      (Ht += u * lt),
      (Ft += u * Pt),
      (Jt += u * ft),
      (tr += u * yt),
      (Mr += u * pt),
      (Qt += u * ke),
      (Gr += u * St),
      (li += u * Rt),
      (u = N[15]),
      (Ae += u * ct),
      (qe += u * Qe),
      (at += u * ut),
      ($e += u * ht),
      (Et += u * it),
      (Tt += u * Ye),
      (Ut += u * It),
      (Ht += u * xt),
      (Ft += u * lt),
      (Jt += u * Pt),
      (tr += u * ft),
      (Mr += u * yt),
      (Qt += u * pt),
      (Gr += u * ke),
      (li += u * St),
      (Oi += u * Rt),
      (Z += 38 * qe),
      (ue += 38 * at),
      (me += 38 * $e),
      (Re += 38 * Et),
      (Oe += 38 * Tt),
      (Ie += 38 * Ut),
      (_t += 38 * Ht),
      (gt += 38 * Ft),
      (tt += 38 * Jt),
      (Te += 38 * tr),
      (Ke += 38 * Mr),
      (Ve += 38 * Qt),
      (rt += 38 * Gr),
      (Fe += 38 * li),
      (Ge += 38 * Oi),
      (I = 1),
      (u = Z + I + 65535),
      (I = Math.floor(u / 65536)),
      (Z = u - I * 65536),
      (u = ue + I + 65535),
      (I = Math.floor(u / 65536)),
      (ue = u - I * 65536),
      (u = me + I + 65535),
      (I = Math.floor(u / 65536)),
      (me = u - I * 65536),
      (u = Re + I + 65535),
      (I = Math.floor(u / 65536)),
      (Re = u - I * 65536),
      (u = Oe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Oe = u - I * 65536),
      (u = Ie + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ie = u - I * 65536),
      (u = _t + I + 65535),
      (I = Math.floor(u / 65536)),
      (_t = u - I * 65536),
      (u = gt + I + 65535),
      (I = Math.floor(u / 65536)),
      (gt = u - I * 65536),
      (u = tt + I + 65535),
      (I = Math.floor(u / 65536)),
      (tt = u - I * 65536),
      (u = Te + I + 65535),
      (I = Math.floor(u / 65536)),
      (Te = u - I * 65536),
      (u = Ke + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ke = u - I * 65536),
      (u = Ve + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ve = u - I * 65536),
      (u = rt + I + 65535),
      (I = Math.floor(u / 65536)),
      (rt = u - I * 65536),
      (u = Fe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Fe = u - I * 65536),
      (u = Ge + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ge = u - I * 65536),
      (u = Ae + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ae = u - I * 65536),
      (Z += I - 1 + 37 * (I - 1)),
      (I = 1),
      (u = Z + I + 65535),
      (I = Math.floor(u / 65536)),
      (Z = u - I * 65536),
      (u = ue + I + 65535),
      (I = Math.floor(u / 65536)),
      (ue = u - I * 65536),
      (u = me + I + 65535),
      (I = Math.floor(u / 65536)),
      (me = u - I * 65536),
      (u = Re + I + 65535),
      (I = Math.floor(u / 65536)),
      (Re = u - I * 65536),
      (u = Oe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Oe = u - I * 65536),
      (u = Ie + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ie = u - I * 65536),
      (u = _t + I + 65535),
      (I = Math.floor(u / 65536)),
      (_t = u - I * 65536),
      (u = gt + I + 65535),
      (I = Math.floor(u / 65536)),
      (gt = u - I * 65536),
      (u = tt + I + 65535),
      (I = Math.floor(u / 65536)),
      (tt = u - I * 65536),
      (u = Te + I + 65535),
      (I = Math.floor(u / 65536)),
      (Te = u - I * 65536),
      (u = Ke + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ke = u - I * 65536),
      (u = Ve + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ve = u - I * 65536),
      (u = rt + I + 65535),
      (I = Math.floor(u / 65536)),
      (rt = u - I * 65536),
      (u = Fe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Fe = u - I * 65536),
      (u = Ge + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ge = u - I * 65536),
      (u = Ae + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ae = u - I * 65536),
      (Z += I - 1 + 37 * (I - 1)),
      (D[0] = Z),
      (D[1] = ue),
      (D[2] = me),
      (D[3] = Re),
      (D[4] = Oe),
      (D[5] = Ie),
      (D[6] = _t),
      (D[7] = gt),
      (D[8] = tt),
      (D[9] = Te),
      (D[10] = Ke),
      (D[11] = Ve),
      (D[12] = rt),
      (D[13] = Fe),
      (D[14] = Ge),
      (D[15] = Ae);
  }
  function ve(D, N) {
    Q(D, N, N);
  }
  function bt(D, N) {
    const O = o();
    let u;
    for (u = 0; u < 16; u++) O[u] = N[u];
    for (u = 253; u >= 0; u--) ve(O, O), u !== 2 && u !== 4 && Q(O, O, N);
    for (u = 0; u < 16; u++) D[u] = O[u];
  }
  function nt(D, N) {
    const O = o();
    let u;
    for (u = 0; u < 16; u++) O[u] = N[u];
    for (u = 250; u >= 0; u--) ve(O, O), u !== 1 && Q(O, O, N);
    for (u = 0; u < 16; u++) D[u] = O[u];
  }
  function Be(D, N) {
    const O = o(),
      u = o(),
      I = o(),
      Z = o(),
      ue = o(),
      me = o(),
      Re = o(),
      Oe = o(),
      Ie = o();
    pe(O, D[1], D[0]),
      pe(Ie, N[1], N[0]),
      Q(O, O, Ie),
      he(u, D[0], D[1]),
      he(Ie, N[0], N[1]),
      Q(u, u, Ie),
      Q(I, D[3], N[3]),
      Q(I, I, y),
      Q(Z, D[2], N[2]),
      he(Z, Z, Z),
      pe(ue, u, O),
      pe(me, Z, I),
      he(Re, Z, I),
      he(Oe, u, O),
      Q(D[0], ue, me),
      Q(D[1], Oe, Re),
      Q(D[2], Re, me),
      Q(D[3], ue, Oe);
  }
  function Mt(D, N, O) {
    for (let u = 0; u < 4; u++) Y(D[u], N[u], O);
  }
  function zt(D, N) {
    const O = o(),
      u = o(),
      I = o();
    bt(I, N[2]), Q(O, N[0], I), Q(u, N[1], I), re(D, u), (D[31] ^= ae(O) << 7);
  }
  function b(D, N, O) {
    L(D[0], f), L(D[1], g), L(D[2], g), L(D[3], f);
    for (let u = 255; u >= 0; --u) {
      const I = (O[(u / 8) | 0] >> (u & 7)) & 1;
      Mt(D, N, I), Be(N, D), Be(D, D), Mt(D, N, I);
    }
  }
  function S(D, N) {
    const O = [o(), o(), o(), o()];
    L(O[0], E), L(O[1], A), L(O[2], g), Q(O[3], E, A), b(D, O, N);
  }
  function J(D) {
    if (D.length !== a.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${a.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(D);
    (N[0] &= 248), (N[31] &= 127), (N[31] |= 64);
    const O = new Uint8Array(32),
      u = [o(), o(), o(), o()];
    S(u, N), zt(O, u);
    const I = new Uint8Array(64);
    return I.set(D), I.set(O, 32), { publicKey: O, secretKey: I };
  }
  a.generateKeyPairFromSeed = J;
  function le(D) {
    const N = (0, t.randomBytes)(32, D),
      O = J(N);
    return (0, s.wipe)(N), O;
  }
  a.generateKeyPair = le;
  function H(D) {
    if (D.length !== a.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${a.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(D.subarray(32));
  }
  a.extractPublicKeyFromSecretKey = H;
  const U = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function k(D, N) {
    let O, u, I, Z;
    for (u = 63; u >= 32; --u) {
      for (O = 0, I = u - 32, Z = u - 12; I < Z; ++I)
        (N[I] += O - 16 * N[u] * U[I - (u - 32)]),
          (O = Math.floor((N[I] + 128) / 256)),
          (N[I] -= O * 256);
      (N[I] += O), (N[u] = 0);
    }
    for (O = 0, I = 0; I < 32; I++)
      (N[I] += O - (N[31] >> 4) * U[I]), (O = N[I] >> 8), (N[I] &= 255);
    for (I = 0; I < 32; I++) N[I] -= O * U[I];
    for (u = 0; u < 32; u++) (N[u + 1] += N[u] >> 8), (D[u] = N[u] & 255);
  }
  function B(D) {
    const N = new Float64Array(64);
    for (let O = 0; O < 64; O++) N[O] = D[O];
    for (let O = 0; O < 64; O++) D[O] = 0;
    k(D, N);
  }
  function et(D, N) {
    const O = new Float64Array(64),
      u = [o(), o(), o(), o()],
      I = (0, r.hash)(D.subarray(0, 32));
    (I[0] &= 248), (I[31] &= 127), (I[31] |= 64);
    const Z = new Uint8Array(64);
    Z.set(I.subarray(32), 32);
    const ue = new r.SHA512();
    ue.update(Z.subarray(32)), ue.update(N);
    const me = ue.digest();
    ue.clean(),
      B(me),
      S(u, me),
      zt(Z, u),
      ue.reset(),
      ue.update(Z.subarray(0, 32)),
      ue.update(D.subarray(32)),
      ue.update(N);
    const Re = ue.digest();
    B(Re);
    for (let Oe = 0; Oe < 32; Oe++) O[Oe] = me[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let Ie = 0; Ie < 32; Ie++) O[Oe + Ie] += Re[Oe] * I[Ie];
    return k(Z.subarray(32), O), Z;
  }
  a.sign = et;
  function ot(D, N) {
    const O = o(),
      u = o(),
      I = o(),
      Z = o(),
      ue = o(),
      me = o(),
      Re = o();
    return (
      L(D[2], g),
      ee(D[1], N),
      ve(I, D[1]),
      Q(Z, I, m),
      pe(I, I, D[2]),
      he(Z, D[2], Z),
      ve(ue, Z),
      ve(me, ue),
      Q(Re, me, ue),
      Q(O, Re, I),
      Q(O, O, Z),
      nt(O, O),
      Q(O, O, I),
      Q(O, O, Z),
      Q(O, O, Z),
      Q(D[0], O, Z),
      ve(u, D[0]),
      Q(u, u, Z),
      ce(u, I) && Q(D[0], D[0], $),
      ve(u, D[0]),
      Q(u, u, Z),
      ce(u, I)
        ? -1
        : (ae(D[0]) === N[31] >> 7 && pe(D[0], f, D[0]), Q(D[3], D[0], D[1]), 0)
    );
  }
  function Ai(D, N, O) {
    const u = new Uint8Array(32),
      I = [o(), o(), o(), o()],
      Z = [o(), o(), o(), o()];
    if (O.length !== a.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${a.SIGNATURE_LENGTH} bytes`);
    if (ot(Z, D)) return !1;
    const ue = new r.SHA512();
    ue.update(O.subarray(0, 32)), ue.update(D), ue.update(N);
    const me = ue.digest();
    return (
      B(me), b(I, Z, me), S(Z, O.subarray(32)), Be(I, Z), zt(u, I), !oe(O, u)
    );
  }
  a.verify = Ai;
  function Ee(D) {
    let N = [o(), o(), o(), o()];
    if (ot(N, D)) throw new Error("Ed25519: invalid public key");
    let O = o(),
      u = o(),
      I = N[1];
    he(O, g, I), pe(u, g, I), bt(u, u), Q(O, O, u);
    let Z = new Uint8Array(32);
    return re(Z, O), Z;
  }
  a.convertPublicKeyToX25519 = Ee;
  function Or(D) {
    const N = (0, r.hash)(D.subarray(0, 32));
    (N[0] &= 248), (N[31] &= 127), (N[31] |= 64);
    const O = new Uint8Array(N.subarray(0, 32));
    return (0, s.wipe)(N), O;
  }
  a.convertSecretKeyToX25519 = Or;
})(qc);
const rb = "EdDSA",
  ib = "JWT",
  $f = ".",
  Df = "base64url",
  sb = "utf8",
  nb = "utf8",
  ob = ":",
  ab = "did",
  cb = "key",
  pl = "base58btc",
  ub = "z",
  hb = "K36",
  lb = 32;
function Ro(a) {
  return To(jc(Ki(a), sb), Df);
}
function Ff(a) {
  const t = jc(hb, pl),
    r = ub + To(Hm([t, a]), pl);
  return [ab, cb, r].join(ob);
}
function fb(a) {
  return To(a, Df);
}
function pb(a) {
  return jc([Ro(a.header), Ro(a.payload)].join($f), nb);
}
function db(a) {
  return [Ro(a.header), Ro(a.payload), fb(a.signature)].join($f);
}
function dl(a = lf.randomBytes(lb)) {
  return qc.generateKeyPairFromSeed(a);
}
async function gb(a, t, r, s, o = te.fromMiliseconds(Date.now())) {
  const h = { alg: rb, typ: ib },
    f = Ff(s.publicKey),
    g = o + r,
    m = { iss: f, sub: a, aud: t, iat: o, exp: g },
    y = pb({ header: h, payload: m }),
    E = qc.sign(s.secretKey, y);
  return db({ header: h, payload: m, signature: E });
}
const yb = "PARSE_ERROR",
  vb = "INVALID_REQUEST",
  mb = "METHOD_NOT_FOUND",
  wb = "INVALID_PARAMS",
  Lf = "INTERNAL_ERROR",
  Mc = "SERVER_ERROR",
  bb = [-32700, -32600, -32601, -32602, -32603],
  Xs = {
    [yb]: { code: -32700, message: "Parse error" },
    [vb]: { code: -32600, message: "Invalid Request" },
    [mb]: { code: -32601, message: "Method not found" },
    [wb]: { code: -32602, message: "Invalid params" },
    [Lf]: { code: -32603, message: "Internal error" },
    [Mc]: { code: -32e3, message: "Server error" },
  },
  jf = Mc;
function _b(a) {
  return bb.includes(a);
}
function gl(a) {
  return Object.keys(Xs).includes(a) ? Xs[a] : Xs[jf];
}
function Eb(a) {
  const t = Object.values(Xs).find((r) => r.code === a);
  return t || Xs[jf];
}
function qf(a, t, r) {
  return a.message.includes("getaddrinfo ENOTFOUND") ||
    a.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : a;
}
var Mf = {},
  ni = {},
  yl;
function Ib() {
  if (yl) return ni;
  (yl = 1),
    Object.defineProperty(ni, "__esModule", { value: !0 }),
    (ni.isBrowserCryptoAvailable =
      ni.getSubtleCrypto =
      ni.getBrowerCrypto =
        void 0);
  function a() {
    return (
      (qr === null || qr === void 0 ? void 0 : qr.crypto) ||
      (qr === null || qr === void 0 ? void 0 : qr.msCrypto) ||
      {}
    );
  }
  ni.getBrowerCrypto = a;
  function t() {
    const s = a();
    return s.subtle || s.webkitSubtle;
  }
  ni.getSubtleCrypto = t;
  function r() {
    return !!a() && !!t();
  }
  return (ni.isBrowserCryptoAvailable = r), ni;
}
var oi = {},
  vl;
function xb() {
  if (vl) return oi;
  (vl = 1),
    Object.defineProperty(oi, "__esModule", { value: !0 }),
    (oi.isBrowser = oi.isNode = oi.isReactNative = void 0);
  function a() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  oi.isReactNative = a;
  function t() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  oi.isNode = t;
  function r() {
    return !a() && !t();
  }
  return (oi.isBrowser = r), oi;
}
(function (a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  const t = sn;
  t.__exportStar(Ib(), a), t.__exportStar(xb(), a);
})(Mf);
function zc(a = 3) {
  const t = Date.now() * Math.pow(10, a),
    r = Math.floor(Math.random() * Math.pow(10, a));
  return t + r;
}
function Uc(a = 6) {
  return BigInt(zc(a));
}
function Bi(a, t, r) {
  return { id: r || zc(), jsonrpc: "2.0", method: a, params: t };
}
function Lo(a, t) {
  return { id: a, jsonrpc: "2.0", result: t };
}
function jo(a, t, r) {
  return { id: a, jsonrpc: "2.0", error: Pb(t, r) };
}
function Pb(a, t) {
  return typeof a > "u"
    ? gl(Lf)
    : (typeof a == "string" &&
        (a = Object.assign(Object.assign({}, gl(Mc)), { message: a })),
      typeof t < "u" && (a.data = t),
      _b(a.code) && (a = Eb(a.code)),
      a);
}
class Sb {}
class Rb extends Sb {
  constructor() {
    super();
  }
}
class zf extends Rb {
  constructor(t) {
    super();
  }
}
const Ab = "^https?:",
  Ob = "^wss?:";
function Cb(a) {
  const t = a.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function Uf(a, t) {
  const r = Cb(a);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function ml(a) {
  return Uf(a, Ab);
}
function wl(a) {
  return Uf(a, Ob);
}
function Tb(a) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(a);
}
function Hf(a) {
  return (
    typeof a == "object" && "id" in a && "jsonrpc" in a && a.jsonrpc === "2.0"
  );
}
function Hc(a) {
  return Hf(a) && "method" in a;
}
function cn(a) {
  return Hf(a) && (ui(a) || Ar(a));
}
function ui(a) {
  return "result" in a;
}
function Ar(a) {
  return "error" in a;
}
let Nb = class extends zf {
  constructor(t) {
    super(t),
      (this.events = new Dt.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(
      Bi(t.method, t.params || [], t.id || Uc().toString()),
      r
    );
  }
  async requestStrict(t, r) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (h) {
          o(h);
        }
      this.events.on(`${t.id}`, (h) => {
        Ar(h) ? o(h.error) : s(h.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (h) {
        o(h);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      cn(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == "string" &&
        (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
var vc, bl;
function $b() {
  return (
    bl ||
      ((bl = 1),
      (vc = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      })),
    vc
  );
}
const Db = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : $b(),
  Fb = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  _l = (a) => a.split("?")[0],
  El = 10,
  Lb = Db();
let jb = class {
  constructor(t) {
    if (
      ((this.url = t),
      (this.events = new Dt.EventEmitter()),
      (this.registering = !1),
      !wl(t))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), t();
      }),
        this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ki(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!wl(t))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), o(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, s) => {
        const o = new URLSearchParams(t).get("origin"),
          h = Mf.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !Tb(t) },
          f = new Lb(t, [], h);
        Fb()
          ? (f.onerror = (g) => {
              const m = g;
              s(this.emitError(m.error));
            })
          : f.on("error", (g) => {
              s(this.emitError(g));
            }),
          (f.onopen = () => {
            this.onOpen(f), r(f);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(t) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? on(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      o = s.message || s.toString(),
      h = jo(t, o);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return qf(t, _l(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > El && this.events.setMaxListeners(El);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        t?.message || `WebSocket connection failed for host: ${_l(this.url)}`
      )
    );
    return this.events.emit("register_error", r), r;
  }
};
var Ao = {},
  qb = {
    get exports() {
      return Ao;
    },
    set exports(a) {
      Ao = a;
    },
  };
(function (a, t) {
  var r = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    h = 2,
    f = 9007199254740991,
    g = "[object Arguments]",
    m = "[object Array]",
    y = "[object AsyncFunction]",
    E = "[object Boolean]",
    A = "[object Date]",
    $ = "[object Error]",
    L = "[object Function]",
    C = "[object GeneratorFunction]",
    Y = "[object Map]",
    re = "[object Number]",
    oe = "[object Null]",
    ce = "[object Object]",
    ae = "[object Promise]",
    ee = "[object Proxy]",
    he = "[object RegExp]",
    pe = "[object Set]",
    Q = "[object String]",
    ve = "[object Symbol]",
    bt = "[object Undefined]",
    nt = "[object WeakMap]",
    Be = "[object ArrayBuffer]",
    Mt = "[object DataView]",
    zt = "[object Float32Array]",
    b = "[object Float64Array]",
    S = "[object Int8Array]",
    J = "[object Int16Array]",
    le = "[object Int32Array]",
    H = "[object Uint8Array]",
    U = "[object Uint8ClampedArray]",
    k = "[object Uint16Array]",
    B = "[object Uint32Array]",
    et = /[\\^$.*+?()[\]{}|]/g,
    ot = /^\[object .+?Constructor\]$/,
    Ai = /^(?:0|[1-9]\d*)$/,
    Ee = {};
  (Ee[zt] =
    Ee[b] =
    Ee[S] =
    Ee[J] =
    Ee[le] =
    Ee[H] =
    Ee[U] =
    Ee[k] =
    Ee[B] =
      !0),
    (Ee[g] =
      Ee[m] =
      Ee[Be] =
      Ee[E] =
      Ee[Mt] =
      Ee[A] =
      Ee[$] =
      Ee[L] =
      Ee[Y] =
      Ee[re] =
      Ee[ce] =
      Ee[he] =
      Ee[pe] =
      Ee[Q] =
      Ee[nt] =
        !1);
  var Or = typeof qr == "object" && qr && qr.Object === Object && qr,
    D = typeof self == "object" && self && self.Object === Object && self,
    N = Or || D || Function("return this")(),
    O = t && !t.nodeType && t,
    u = O && !0 && a && !a.nodeType && a,
    I = u && u.exports === O,
    Z = I && Or.process,
    ue = (function () {
      try {
        return Z && Z.binding && Z.binding("util");
      } catch {}
    })(),
    me = ue && ue.isTypedArray;
  function Re(v, x) {
    for (var M = -1, V = v == null ? 0 : v.length, ze = 0, de = []; ++M < V; ) {
      var We = v[M];
      x(We, M, v) && (de[ze++] = We);
    }
    return de;
  }
  function Oe(v, x) {
    for (var M = -1, V = x.length, ze = v.length; ++M < V; ) v[ze + M] = x[M];
    return v;
  }
  function Ie(v, x) {
    for (var M = -1, V = v == null ? 0 : v.length; ++M < V; )
      if (x(v[M], M, v)) return !0;
    return !1;
  }
  function _t(v, x) {
    for (var M = -1, V = Array(v); ++M < v; ) V[M] = x(M);
    return V;
  }
  function gt(v) {
    return function (x) {
      return v(x);
    };
  }
  function tt(v, x) {
    return v.has(x);
  }
  function Te(v, x) {
    return v?.[x];
  }
  function Ke(v) {
    var x = -1,
      M = Array(v.size);
    return (
      v.forEach(function (V, ze) {
        M[++x] = [ze, V];
      }),
      M
    );
  }
  function Ve(v, x) {
    return function (M) {
      return v(x(M));
    };
  }
  function rt(v) {
    var x = -1,
      M = Array(v.size);
    return (
      v.forEach(function (V) {
        M[++x] = V;
      }),
      M
    );
  }
  var Fe = Array.prototype,
    Ge = Function.prototype,
    Ae = Object.prototype,
    qe = N["__core-js_shared__"],
    at = Ge.toString,
    $e = Ae.hasOwnProperty,
    Et = (function () {
      var v = /[^.]+$/.exec((qe && qe.keys && qe.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    Tt = Ae.toString,
    Ut = RegExp(
      "^" +
        at
          .call($e)
          .replace(et, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ht = I ? N.Buffer : void 0,
    Ft = N.Symbol,
    Jt = N.Uint8Array,
    tr = Ae.propertyIsEnumerable,
    Mr = Fe.splice,
    Qt = Ft ? Ft.toStringTag : void 0,
    Gr = Object.getOwnPropertySymbols,
    li = Ht ? Ht.isBuffer : void 0,
    Oi = Ve(Object.keys, Object),
    ct = fr(N, "DataView"),
    Qe = fr(N, "Map"),
    ut = fr(N, "Promise"),
    ht = fr(N, "Set"),
    it = fr(N, "WeakMap"),
    Ye = fr(Object, "create"),
    It = Jr(ct),
    xt = Jr(Qe),
    lt = Jr(ut),
    Pt = Jr(ht),
    ft = Jr(it),
    yt = Ft ? Ft.prototype : void 0,
    pt = yt ? yt.valueOf : void 0;
  function ke(v) {
    var x = -1,
      M = v == null ? 0 : v.length;
    for (this.clear(); ++x < M; ) {
      var V = v[x];
      this.set(V[0], V[1]);
    }
  }
  function St() {
    (this.__data__ = Ye ? Ye(null) : {}), (this.size = 0);
  }
  function Rt(v) {
    var x = this.has(v) && delete this.__data__[v];
    return (this.size -= x ? 1 : 0), x;
  }
  function zo(v) {
    var x = this.__data__;
    if (Ye) {
      var M = x[v];
      return M === s ? void 0 : M;
    }
    return $e.call(x, v) ? x[v] : void 0;
  }
  function Uo(v) {
    var x = this.__data__;
    return Ye ? x[v] !== void 0 : $e.call(x, v);
  }
  function Ho(v, x) {
    var M = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (M[v] = Ye && x === void 0 ? s : x),
      this
    );
  }
  (ke.prototype.clear = St),
    (ke.prototype.delete = Rt),
    (ke.prototype.get = zo),
    (ke.prototype.has = Uo),
    (ke.prototype.set = Ho);
  function mr(v) {
    var x = -1,
      M = v == null ? 0 : v.length;
    for (this.clear(); ++x < M; ) {
      var V = v[x];
      this.set(V[0], V[1]);
    }
  }
  function ko() {
    (this.__data__ = []), (this.size = 0);
  }
  function Bo(v) {
    var x = this.__data__,
      M = Ci(x, v);
    if (M < 0) return !1;
    var V = x.length - 1;
    return M == V ? x.pop() : Mr.call(x, M, 1), --this.size, !0;
  }
  function Ko(v) {
    var x = this.__data__,
      M = Ci(x, v);
    return M < 0 ? void 0 : x[M][1];
  }
  function Vo(v) {
    return Ci(this.__data__, v) > -1;
  }
  function Go(v, x) {
    var M = this.__data__,
      V = Ci(M, v);
    return V < 0 ? (++this.size, M.push([v, x])) : (M[V][1] = x), this;
  }
  (mr.prototype.clear = ko),
    (mr.prototype.delete = Bo),
    (mr.prototype.get = Ko),
    (mr.prototype.has = Vo),
    (mr.prototype.set = Go);
  function Wr(v) {
    var x = -1,
      M = v == null ? 0 : v.length;
    for (this.clear(); ++x < M; ) {
      var V = v[x];
      this.set(V[0], V[1]);
    }
  }
  function Ji() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ke(),
        map: new (Qe || mr)(),
        string: new ke(),
      });
  }
  function Wo(v) {
    var x = fi(this, v).delete(v);
    return (this.size -= x ? 1 : 0), x;
  }
  function Qi(v) {
    return fi(this, v).get(v);
  }
  function Jo(v) {
    return fi(this, v).has(v);
  }
  function Qo(v, x) {
    var M = fi(this, v),
      V = M.size;
    return M.set(v, x), (this.size += M.size == V ? 0 : 1), this;
  }
  (Wr.prototype.clear = Ji),
    (Wr.prototype.delete = Wo),
    (Wr.prototype.get = Qi),
    (Wr.prototype.has = Jo),
    (Wr.prototype.set = Qo);
  function Yi(v) {
    var x = -1,
      M = v == null ? 0 : v.length;
    for (this.__data__ = new Wr(); ++x < M; ) this.add(v[x]);
  }
  function hn(v) {
    return this.__data__.set(v, s), this;
  }
  function ln(v) {
    return this.__data__.has(v);
  }
  (Yi.prototype.add = Yi.prototype.push = hn), (Yi.prototype.has = ln);
  function Cr(v) {
    var x = (this.__data__ = new mr(v));
    this.size = x.size;
  }
  function Yo() {
    (this.__data__ = new mr()), (this.size = 0);
  }
  function Zo(v) {
    var x = this.__data__,
      M = x.delete(v);
    return (this.size = x.size), M;
  }
  function Xo(v) {
    return this.__data__.get(v);
  }
  function ea(v) {
    return this.__data__.has(v);
  }
  function fn(v, x) {
    var M = this.__data__;
    if (M instanceof mr) {
      var V = M.__data__;
      if (!Qe || V.length < r - 1)
        return V.push([v, x]), (this.size = ++M.size), this;
      M = this.__data__ = new Wr(V);
    }
    return M.set(v, x), (this.size = M.size), this;
  }
  (Cr.prototype.clear = Yo),
    (Cr.prototype.delete = Zo),
    (Cr.prototype.get = Xo),
    (Cr.prototype.has = ea),
    (Cr.prototype.set = fn);
  function pn(v, x) {
    var M = es(v),
      V = !M && Pn(v),
      ze = !M && !V && Ss(v),
      de = !M && !V && !ze && An(v),
      We = M || V || ze || de,
      At = We ? _t(v.length, String) : [],
      Pe = At.length;
    for (var Ue in v)
      (x || $e.call(v, Ue)) &&
        !(
          We &&
          (Ue == "length" ||
            (ze && (Ue == "offset" || Ue == "parent")) ||
            (de &&
              (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset")) ||
            bn(Ue, Pe))
        ) &&
        At.push(Ue);
    return At;
  }
  function Ci(v, x) {
    for (var M = v.length; M--; ) if (xn(v[M][0], x)) return M;
    return -1;
  }
  function xs(v, x, M) {
    var V = x(v);
    return es(v) ? V : Oe(V, M(v));
  }
  function Ti(v) {
    return v == null
      ? v === void 0
        ? bt
        : oe
      : Qt && Qt in Object(v)
      ? mn(v)
      : ia(v);
  }
  function Ps(v) {
    return $i(v) && Ti(v) == g;
  }
  function Ni(v, x, M, V, ze) {
    return v === x
      ? !0
      : v == null || x == null || (!$i(v) && !$i(x))
      ? v !== v && x !== x
      : dn(v, x, M, V, Ni, ze);
  }
  function dn(v, x, M, V, ze, de) {
    var We = es(v),
      At = es(x),
      Pe = We ? m : zr(v),
      Ue = At ? m : zr(x);
    (Pe = Pe == g ? ce : Pe), (Ue = Ue == g ? ce : Ue);
    var vt = Pe == ce,
      rr = Ue == ce,
      Ot = Pe == Ue;
    if (Ot && Ss(v)) {
      if (!Ss(x)) return !1;
      (We = !0), (vt = !1);
    }
    if (Ot && !vt)
      return (
        de || (de = new Cr()),
        We || An(v) ? Zi(v, x, M, V, ze, de) : ra(v, x, Pe, M, V, ze, de)
      );
    if (!(M & o)) {
      var Je = vt && $e.call(v, "__wrapped__"),
        Yt = rr && $e.call(x, "__wrapped__");
      if (Je || Yt) {
        var Tr = Je ? v.value() : v,
          wr = Yt ? x.value() : x;
        return de || (de = new Cr()), ze(Tr, wr, M, V, de);
      }
    }
    return Ot ? (de || (de = new Cr()), vn(v, x, M, V, ze, de)) : !1;
  }
  function ta(v) {
    if (!Rn(v) || En(v)) return !1;
    var x = ts(v) ? Ut : ot;
    return x.test(Jr(v));
  }
  function gn(v) {
    return $i(v) && Sn(v.length) && !!Ee[Ti(v)];
  }
  function yn(v) {
    if (!In(v)) return Oi(v);
    var x = [];
    for (var M in Object(v)) $e.call(v, M) && M != "constructor" && x.push(M);
    return x;
  }
  function Zi(v, x, M, V, ze, de) {
    var We = M & o,
      At = v.length,
      Pe = x.length;
    if (At != Pe && !(We && Pe > At)) return !1;
    var Ue = de.get(v);
    if (Ue && de.get(x)) return Ue == x;
    var vt = -1,
      rr = !0,
      Ot = M & h ? new Yi() : void 0;
    for (de.set(v, x), de.set(x, v); ++vt < At; ) {
      var Je = v[vt],
        Yt = x[vt];
      if (V) var Tr = We ? V(Yt, Je, vt, x, v, de) : V(Je, Yt, vt, v, x, de);
      if (Tr !== void 0) {
        if (Tr) continue;
        rr = !1;
        break;
      }
      if (Ot) {
        if (
          !Ie(x, function (wr, Ur) {
            if (!tt(Ot, Ur) && (Je === wr || ze(Je, wr, M, V, de)))
              return Ot.push(Ur);
          })
        ) {
          rr = !1;
          break;
        }
      } else if (!(Je === Yt || ze(Je, Yt, M, V, de))) {
        rr = !1;
        break;
      }
    }
    return de.delete(v), de.delete(x), rr;
  }
  function ra(v, x, M, V, ze, de, We) {
    switch (M) {
      case Mt:
        if (v.byteLength != x.byteLength || v.byteOffset != x.byteOffset)
          return !1;
        (v = v.buffer), (x = x.buffer);
      case Be:
        return !(v.byteLength != x.byteLength || !de(new Jt(v), new Jt(x)));
      case E:
      case A:
      case re:
        return xn(+v, +x);
      case $:
        return v.name == x.name && v.message == x.message;
      case he:
      case Q:
        return v == x + "";
      case Y:
        var At = Ke;
      case pe:
        var Pe = V & o;
        if ((At || (At = rt), v.size != x.size && !Pe)) return !1;
        var Ue = We.get(v);
        if (Ue) return Ue == x;
        (V |= h), We.set(v, x);
        var vt = Zi(At(v), At(x), V, ze, de, We);
        return We.delete(v), vt;
      case ve:
        if (pt) return pt.call(v) == pt.call(x);
    }
    return !1;
  }
  function vn(v, x, M, V, ze, de) {
    var We = M & o,
      At = Xi(v),
      Pe = At.length,
      Ue = Xi(x),
      vt = Ue.length;
    if (Pe != vt && !We) return !1;
    for (var rr = Pe; rr--; ) {
      var Ot = At[rr];
      if (!(We ? Ot in x : $e.call(x, Ot))) return !1;
    }
    var Je = de.get(v);
    if (Je && de.get(x)) return Je == x;
    var Yt = !0;
    de.set(v, x), de.set(x, v);
    for (var Tr = We; ++rr < Pe; ) {
      Ot = At[rr];
      var wr = v[Ot],
        Ur = x[Ot];
      if (V) var Rs = We ? V(Ur, wr, Ot, x, v, de) : V(wr, Ur, Ot, v, x, de);
      if (!(Rs === void 0 ? wr === Ur || ze(wr, Ur, M, V, de) : Rs)) {
        Yt = !1;
        break;
      }
      Tr || (Tr = Ot == "constructor");
    }
    if (Yt && !Tr) {
      var Di = v.constructor,
        Lt = x.constructor;
      Di != Lt &&
        "constructor" in v &&
        "constructor" in x &&
        !(
          typeof Di == "function" &&
          Di instanceof Di &&
          typeof Lt == "function" &&
          Lt instanceof Lt
        ) &&
        (Yt = !1);
    }
    return de.delete(v), de.delete(x), Yt;
  }
  function Xi(v) {
    return xs(v, oa, wn);
  }
  function fi(v, x) {
    var M = v.__data__;
    return _n(x) ? M[typeof x == "string" ? "string" : "hash"] : M.map;
  }
  function fr(v, x) {
    var M = Te(v, x);
    return ta(M) ? M : void 0;
  }
  function mn(v) {
    var x = $e.call(v, Qt),
      M = v[Qt];
    try {
      v[Qt] = void 0;
      var V = !0;
    } catch {}
    var ze = Tt.call(v);
    return V && (x ? (v[Qt] = M) : delete v[Qt]), ze;
  }
  var wn = Gr
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              Re(Gr(v), function (x) {
                return tr.call(v, x);
              }));
        }
      : Me,
    zr = Ti;
  ((ct && zr(new ct(new ArrayBuffer(1))) != Mt) ||
    (Qe && zr(new Qe()) != Y) ||
    (ut && zr(ut.resolve()) != ae) ||
    (ht && zr(new ht()) != pe) ||
    (it && zr(new it()) != nt)) &&
    (zr = function (v) {
      var x = Ti(v),
        M = x == ce ? v.constructor : void 0,
        V = M ? Jr(M) : "";
      if (V)
        switch (V) {
          case It:
            return Mt;
          case xt:
            return Y;
          case lt:
            return ae;
          case Pt:
            return pe;
          case ft:
            return nt;
        }
      return x;
    });
  function bn(v, x) {
    return (
      (x = x ?? f),
      !!x &&
        (typeof v == "number" || Ai.test(v)) &&
        v > -1 &&
        v % 1 == 0 &&
        v < x
    );
  }
  function _n(v) {
    var x = typeof v;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function En(v) {
    return !!Et && Et in v;
  }
  function In(v) {
    var x = v && v.constructor,
      M = (typeof x == "function" && x.prototype) || Ae;
    return v === M;
  }
  function ia(v) {
    return Tt.call(v);
  }
  function Jr(v) {
    if (v != null) {
      try {
        return at.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function xn(v, x) {
    return v === x || (v !== v && x !== x);
  }
  var Pn = Ps(
      (function () {
        return arguments;
      })()
    )
      ? Ps
      : function (v) {
          return $i(v) && $e.call(v, "callee") && !tr.call(v, "callee");
        },
    es = Array.isArray;
  function sa(v) {
    return v != null && Sn(v.length) && !ts(v);
  }
  var Ss = li || Le;
  function na(v, x) {
    return Ni(v, x);
  }
  function ts(v) {
    if (!Rn(v)) return !1;
    var x = Ti(v);
    return x == L || x == C || x == y || x == ee;
  }
  function Sn(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= f;
  }
  function Rn(v) {
    var x = typeof v;
    return v != null && (x == "object" || x == "function");
  }
  function $i(v) {
    return v != null && typeof v == "object";
  }
  var An = me ? gt(me) : gn;
  function oa(v) {
    return sa(v) ? pn(v) : yn(v);
  }
  function Me() {
    return [];
  }
  function Le() {
    return !1;
  }
  a.exports = na;
})(qb, Ao);
function Mb(a, t) {
  return (
    (t = t || {}),
    new Promise(function (r, s) {
      var o = new XMLHttpRequest(),
        h = [],
        f = [],
        g = {},
        m = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: m,
            headers: {
              keys: function () {
                return h;
              },
              entries: function () {
                return f;
              },
              get: function (E) {
                return g[E.toLowerCase()];
              },
              has: function (E) {
                return E.toLowerCase() in g;
              },
            },
          };
        };
      for (var y in (o.open(t.method || "get", a, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (E, A, $) {
            h.push((A = A.toLowerCase())),
              f.push([A, $]),
              (g[A] = g[A] ? g[A] + "," + $ : $);
          }),
          r(m());
      }),
      (o.onerror = s),
      (o.withCredentials = t.credentials == "include"),
      t.headers))
        o.setRequestHeader(y, t.headers[y]);
      o.send(t.body || null);
    })
  );
}
const zb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Il = uf(zb);
var Ub = self.fetch || (self.fetch = Il.default || Il);
function Hb(a, t) {
  if (a.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++) r[s] = 255;
  for (var o = 0; o < a.length; o++) {
    var h = a.charAt(o),
      f = h.charCodeAt(0);
    if (r[f] !== 255) throw new TypeError(h + " is ambiguous");
    r[f] = o;
  }
  var g = a.length,
    m = a.charAt(0),
    y = Math.log(g) / Math.log(256),
    E = Math.log(256) / Math.log(g);
  function A(C) {
    if (
      (C instanceof Uint8Array ||
        (ArrayBuffer.isView(C)
          ? (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength))
          : Array.isArray(C) && (C = Uint8Array.from(C))),
      !(C instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (C.length === 0) return "";
    for (var Y = 0, re = 0, oe = 0, ce = C.length; oe !== ce && C[oe] === 0; )
      oe++, Y++;
    for (
      var ae = ((ce - oe) * E + 1) >>> 0, ee = new Uint8Array(ae);
      oe !== ce;

    ) {
      for (
        var he = C[oe], pe = 0, Q = ae - 1;
        (he !== 0 || pe < re) && Q !== -1;
        Q--, pe++
      )
        (he += (256 * ee[Q]) >>> 0),
          (ee[Q] = he % g >>> 0),
          (he = (he / g) >>> 0);
      if (he !== 0) throw new Error("Non-zero carry");
      (re = pe), oe++;
    }
    for (var ve = ae - re; ve !== ae && ee[ve] === 0; ) ve++;
    for (var bt = m.repeat(Y); ve < ae; ++ve) bt += a.charAt(ee[ve]);
    return bt;
  }
  function $(C) {
    if (typeof C != "string") throw new TypeError("Expected String");
    if (C.length === 0) return new Uint8Array();
    var Y = 0;
    if (C[Y] !== " ") {
      for (var re = 0, oe = 0; C[Y] === m; ) re++, Y++;
      for (
        var ce = ((C.length - Y) * y + 1) >>> 0, ae = new Uint8Array(ce);
        C[Y];

      ) {
        var ee = r[C.charCodeAt(Y)];
        if (ee === 255) return;
        for (
          var he = 0, pe = ce - 1;
          (ee !== 0 || he < oe) && pe !== -1;
          pe--, he++
        )
          (ee += (g * ae[pe]) >>> 0),
            (ae[pe] = ee % 256 >>> 0),
            (ee = (ee / 256) >>> 0);
        if (ee !== 0) throw new Error("Non-zero carry");
        (oe = he), Y++;
      }
      if (C[Y] !== " ") {
        for (var Q = ce - oe; Q !== ce && ae[Q] === 0; ) Q++;
        for (var ve = new Uint8Array(re + (ce - Q)), bt = re; Q !== ce; )
          ve[bt++] = ae[Q++];
        return ve;
      }
    }
  }
  function L(C) {
    var Y = $(C);
    if (Y) return Y;
    throw new Error(`Non-${t} character`);
  }
  return { encode: A, decodeUnsafe: $, decode: L };
}
var kb = Hb,
  Bb = kb;
const kf = (a) => {
    if (a instanceof Uint8Array && a.constructor.name === "Uint8Array")
      return a;
    if (a instanceof ArrayBuffer) return new Uint8Array(a);
    if (ArrayBuffer.isView(a))
      return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Kb = (a) => new TextEncoder().encode(a),
  Vb = (a) => new TextDecoder().decode(a);
class Gb {
  constructor(t, r, s) {
    (this.name = t), (this.prefix = r), (this.baseEncode = s);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Wb {
  constructor(t, r, s) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = s);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Bf(this, t);
  }
}
class Jb {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Bf(this, t);
  }
  decode(t) {
    const r = t[0],
      s = this.decoders[r];
    if (s) return s.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Bf = (a, t) =>
  new Jb({
    ...(a.decoders || { [a.prefix]: a }),
    ...(t.decoders || { [t.prefix]: t }),
  });
class Qb {
  constructor(t, r, s, o) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new Gb(t, r, s)),
      (this.decoder = new Wb(t, r, o));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const qo = ({ name: a, prefix: t, encode: r, decode: s }) => new Qb(a, t, r, s),
  un = ({ prefix: a, name: t, alphabet: r }) => {
    const { encode: s, decode: o } = Bb(r, t);
    return qo({ prefix: a, name: t, encode: s, decode: (h) => kf(o(h)) });
  },
  Yb = (a, t, r, s) => {
    const o = {};
    for (let E = 0; E < t.length; ++E) o[t[E]] = E;
    let h = a.length;
    for (; a[h - 1] === "="; ) --h;
    const f = new Uint8Array(((h * r) / 8) | 0);
    let g = 0,
      m = 0,
      y = 0;
    for (let E = 0; E < h; ++E) {
      const A = o[a[E]];
      if (A === void 0) throw new SyntaxError(`Non-${s} character`);
      (m = (m << r) | A),
        (g += r),
        g >= 8 && ((g -= 8), (f[y++] = 255 & (m >> g)));
    }
    if (g >= r || 255 & (m << (8 - g)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  Zb = (a, t, r) => {
    const s = t[t.length - 1] === "=",
      o = (1 << r) - 1;
    let h = "",
      f = 0,
      g = 0;
    for (let m = 0; m < a.length; ++m)
      for (g = (g << 8) | a[m], f += 8; f > r; )
        (f -= r), (h += t[o & (g >> f)]);
    if ((f && (h += t[o & (g << (r - f))]), s))
      for (; (h.length * r) & 7; ) h += "=";
    return h;
  },
  Bt = ({ name: a, prefix: t, bitsPerChar: r, alphabet: s }) =>
    qo({
      prefix: t,
      name: a,
      encode(o) {
        return Zb(o, s, r);
      },
      decode(o) {
        return Yb(o, s, r, a);
      },
    }),
  Xb = qo({
    prefix: "\0",
    name: "identity",
    encode: (a) => Vb(a),
    decode: (a) => Kb(a),
  });
var e_ = Object.freeze({ __proto__: null, identity: Xb });
const t_ = Bt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var r_ = Object.freeze({ __proto__: null, base2: t_ });
const i_ = Bt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var s_ = Object.freeze({ __proto__: null, base8: i_ });
const n_ = un({ prefix: "9", name: "base10", alphabet: "0123456789" });
var o_ = Object.freeze({ __proto__: null, base10: n_ });
const a_ = Bt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  c_ = Bt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var u_ = Object.freeze({ __proto__: null, base16: a_, base16upper: c_ });
const h_ = Bt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  l_ = Bt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  f_ = Bt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  p_ = Bt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  d_ = Bt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  g_ = Bt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  y_ = Bt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  v_ = Bt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  m_ = Bt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var w_ = Object.freeze({
  __proto__: null,
  base32: h_,
  base32upper: l_,
  base32pad: f_,
  base32padupper: p_,
  base32hex: d_,
  base32hexupper: g_,
  base32hexpad: y_,
  base32hexpadupper: v_,
  base32z: m_,
});
const b_ = un({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  __ = un({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var E_ = Object.freeze({ __proto__: null, base36: b_, base36upper: __ });
const I_ = un({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  x_ = un({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var P_ = Object.freeze({ __proto__: null, base58btc: I_, base58flickr: x_ });
const S_ = Bt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  R_ = Bt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  A_ = Bt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  O_ = Bt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var C_ = Object.freeze({
  __proto__: null,
  base64: S_,
  base64pad: R_,
  base64url: A_,
  base64urlpad: O_,
});
const Kf = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  T_ = Kf.reduce((a, t, r) => ((a[r] = t), a), []),
  N_ = Kf.reduce((a, t, r) => ((a[t.codePointAt(0)] = r), a), []);
function $_(a) {
  return a.reduce((t, r) => ((t += T_[r]), t), "");
}
function D_(a) {
  const t = [];
  for (const r of a) {
    const s = N_[r.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const F_ = qo({ prefix: "🚀", name: "base256emoji", encode: $_, decode: D_ });
var L_ = Object.freeze({ __proto__: null, base256emoji: F_ }),
  j_ = Vf,
  xl = 128,
  q_ = 127,
  M_ = ~q_,
  z_ = Math.pow(2, 31);
function Vf(a, t, r) {
  (t = t || []), (r = r || 0);
  for (var s = r; a >= z_; ) (t[r++] = (a & 255) | xl), (a /= 128);
  for (; a & M_; ) (t[r++] = (a & 255) | xl), (a >>>= 7);
  return (t[r] = a | 0), (Vf.bytes = r - s + 1), t;
}
var U_ = Tc,
  H_ = 128,
  Pl = 127;
function Tc(a, s) {
  var r = 0,
    s = s || 0,
    o = 0,
    h = s,
    f,
    g = a.length;
  do {
    if (h >= g)
      throw ((Tc.bytes = 0), new RangeError("Could not decode varint"));
    (f = a[h++]),
      (r += o < 28 ? (f & Pl) << o : (f & Pl) * Math.pow(2, o)),
      (o += 7);
  } while (f >= H_);
  return (Tc.bytes = h - s), r;
}
var k_ = Math.pow(2, 7),
  B_ = Math.pow(2, 14),
  K_ = Math.pow(2, 21),
  V_ = Math.pow(2, 28),
  G_ = Math.pow(2, 35),
  W_ = Math.pow(2, 42),
  J_ = Math.pow(2, 49),
  Q_ = Math.pow(2, 56),
  Y_ = Math.pow(2, 63),
  Z_ = function (a) {
    return a < k_
      ? 1
      : a < B_
      ? 2
      : a < K_
      ? 3
      : a < V_
      ? 4
      : a < G_
      ? 5
      : a < W_
      ? 6
      : a < J_
      ? 7
      : a < Q_
      ? 8
      : a < Y_
      ? 9
      : 10;
  },
  X_ = { encode: j_, decode: U_, encodingLength: Z_ },
  Gf = X_;
const Sl = (a, t, r = 0) => (Gf.encode(a, t, r), t),
  Rl = (a) => Gf.encodingLength(a),
  Nc = (a, t) => {
    const r = t.byteLength,
      s = Rl(a),
      o = s + Rl(r),
      h = new Uint8Array(o + r);
    return Sl(a, h, 0), Sl(r, h, s), h.set(t, o), new eE(a, r, t, h);
  };
class eE {
  constructor(t, r, s, o) {
    (this.code = t), (this.size = r), (this.digest = s), (this.bytes = o);
  }
}
const Wf = ({ name: a, code: t, encode: r }) => new tE(a, t, r);
class tE {
  constructor(t, r, s) {
    (this.name = t), (this.code = r), (this.encode = s);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array
        ? Nc(this.code, r)
        : r.then((s) => Nc(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Jf = (a) => async (t) => new Uint8Array(await crypto.subtle.digest(a, t)),
  rE = Wf({ name: "sha2-256", code: 18, encode: Jf("SHA-256") }),
  iE = Wf({ name: "sha2-512", code: 19, encode: Jf("SHA-512") });
var sE = Object.freeze({ __proto__: null, sha256: rE, sha512: iE });
const Qf = 0,
  nE = "identity",
  Yf = kf,
  oE = (a) => Nc(Qf, Yf(a)),
  aE = { code: Qf, name: nE, encode: Yf, digest: oE };
var cE = Object.freeze({ __proto__: null, identity: aE });
new TextEncoder(), new TextDecoder();
const Al = {
  ...e_,
  ...r_,
  ...s_,
  ...o_,
  ...u_,
  ...w_,
  ...E_,
  ...P_,
  ...C_,
  ...L_,
};
({ ...sE, ...cE });
function Zf(a) {
  return globalThis.Buffer != null
    ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength)
    : a;
}
function uE(a = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Zf(globalThis.Buffer.allocUnsafe(a))
    : new Uint8Array(a);
}
function Xf(a, t, r, s) {
  return {
    name: a,
    prefix: t,
    encoder: { name: a, prefix: t, encode: r },
    decoder: { decode: s },
  };
}
const Ol = Xf(
    "utf8",
    "u",
    (a) => "u" + new TextDecoder("utf8").decode(a),
    (a) => new TextEncoder().encode(a.substring(1))
  ),
  mc = Xf(
    "ascii",
    "a",
    (a) => {
      let t = "a";
      for (let r = 0; r < a.length; r++) t += String.fromCharCode(a[r]);
      return t;
    },
    (a) => {
      a = a.substring(1);
      const t = uE(a.length);
      for (let r = 0; r < a.length; r++) t[r] = a.charCodeAt(r);
      return t;
    }
  ),
  hE = {
    utf8: Ol,
    "utf-8": Ol,
    hex: Al.base16,
    latin1: mc,
    ascii: mc,
    binary: mc,
    ...Al,
  };
function lE(a, t = "utf8") {
  const r = hE[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Zf(globalThis.Buffer.from(a, "utf-8"))
    : r.decoder.decode(`${r.prefix}${a}`);
}
const ep = "wc",
  fE = 2,
  kc = "core",
  xi = `${ep}@2:${kc}:`,
  pE = { name: kc, logger: "error" },
  dE = { database: ":memory:" },
  gE = "crypto",
  Cl = "client_ed25519_seed",
  yE = te.ONE_DAY,
  vE = "keychain",
  mE = "0.3",
  wE = "messages",
  bE = "0.3",
  _E = te.SIX_HOURS,
  EE = "publisher",
  tp = "irn",
  IE = "error",
  rp = "wss://relay.walletconnect.com",
  Tl = "wss://relay.walletconnect.org",
  xE = "relayer",
  Wt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  PE = "_subscription",
  ai = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  SE = te.ONE_SECOND,
  RE = "2.11.0",
  AE = 1e4,
  OE = "0.3",
  CE = "WALLETCONNECT_CLIENT_ID",
  Lr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  TE = "subscription",
  NE = "0.3",
  $E = te.FIVE_SECONDS * 1e3,
  DE = "pairing",
  FE = "0.3",
  Ks = {
    wc_pairingDelete: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Ys = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Kr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  LE = "history",
  jE = "0.3",
  qE = "expirer",
  Rr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  ME = "0.3",
  wc = "verify-api",
  ws = "https://verify.walletconnect.com",
  $c = "https://verify.walletconnect.org",
  zE = [ws, $c],
  UE = "echo",
  HE = "https://echo.walletconnect.com";
class kE {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = vE),
      (this.version = mE),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: h } = G("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(h);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = t),
      (this.logger = lr(r, this.name));
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, gf(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? yf(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class BE {
  constructor(t, r, s) {
    (this.core = t),
      (this.logger = r),
      (this.name = gE),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          h = dl(o);
        return Ff(h.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = Km();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const h = await this.getClientSeed(),
          f = dl(h),
          g = Rc();
        return await gb(g, o, yE, f);
      }),
      (this.generateSharedKey = (o, h, f) => {
        this.isInitialized();
        const g = this.getPrivateKey(o),
          m = Vm(g, h);
        return this.setSymKey(m, f);
      }),
      (this.setSymKey = async (o, h) => {
        this.isInitialized();
        const f = h || Gm(o);
        return await this.keychain.set(f, o), f;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, h, f) => {
        this.isInitialized();
        const g = Wm(f),
          m = Ki(h);
        if (Gh(g)) {
          const $ = g.senderPublicKey,
            L = g.receiverPublicKey;
          o = await this.generateSharedKey($, L);
        }
        const y = this.getSymKey(o),
          { type: E, senderPublicKey: A } = g;
        return Jm({ type: E, symKey: y, message: m, senderPublicKey: A });
      }),
      (this.decode = async (o, h, f) => {
        this.isInitialized();
        const g = Qm(h, f);
        if (Gh(g)) {
          const m = g.receiverPublicKey,
            y = g.senderPublicKey;
          o = await this.generateSharedKey(m, y);
        }
        try {
          const m = this.getSymKey(o),
            y = Ym({ symKey: m, encoded: h });
          return on(y);
        } catch (m) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(m);
        }
      }),
      (this.getPayloadType = (o) => {
        const h = Wh(o);
        return Zm(h.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const h = Wh(o);
        return h.senderPublicKey ? To(h.senderPublicKey, Xm) : void 0;
      }),
      (this.core = t),
      (this.logger = lr(r, this.name)),
      (this.keychain = s || new kE(this.core, this.logger));
  }
  get context() {
    return hr(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(Cl);
    } catch {
      (t = Rc()), await this.keychain.set(Cl, t);
    }
    return lE(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class KE extends Vw {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = wE),
      (this.version = bE),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const h = bs(o);
        let f = this.messages.get(s);
        return (
          typeof f > "u" && (f = {}),
          typeof f[h] < "u" ||
            ((f[h] = o), this.messages.set(s, f), await this.persist()),
          h
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const h = this.get(s),
          f = bs(o);
        return typeof h[f] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = lr(t, this.name)),
      (this.core = r);
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, gf(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? yf(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class VE extends Gw {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new Dt.EventEmitter()),
      (this.name = EE),
      (this.queue = new Map()),
      (this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, h) => {
        var f;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: h },
          });
        try {
          const g = h?.ttl || _E,
            m = Ac(h),
            y = h?.prompt || !1,
            E = h?.tag || 0,
            A = h?.id || Uc().toString(),
            $ = {
              topic: s,
              message: o,
              opts: { ttl: g, relay: m, prompt: y, tag: E, id: A },
            },
            L = setTimeout(() => this.queue.set(A, $), this.publishTimeout);
          try {
            await await en(
              this.rpcPublish(s, o, g, m, y, E, A),
              this.publishTimeout,
              "Failed to publish payload, please try again."
            ),
              this.removeRequestFromQueue(A),
              this.relayer.events.emit(Wt.publish, $);
          } catch (C) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (f = h?.internal) != null && f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(A), C);
            return;
          } finally {
            clearTimeout(L);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: h },
            });
        } catch (g) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(g),
            g)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = t),
      (this.logger = lr(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return hr(this.logger);
  }
  rpcPublish(t, r, s, o, h, f, g) {
    var m, y, E, A;
    const $ = {
      method: Eo(o.protocol).publish,
      params: { topic: t, message: r, ttl: s, prompt: h, tag: f },
      id: g,
    };
    return (
      Ii((m = $.params) == null ? void 0 : m.prompt) &&
        ((y = $.params) == null || delete y.prompt),
      Ii((E = $.params) == null ? void 0 : E.tag) &&
        ((A = $.params) == null || delete A.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: $ }),
      this.relayer.request($)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: o } = t;
      await this.publish(r, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Is.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(Wt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(Wt.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class GE {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const s = this.get(t);
        this.exists(t, r) || this.map.set(t, [...s, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > "u") {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const s = this.get(t);
        if (!this.exists(t, r)) return;
        const o = s.filter((h) => h !== r);
        if (!o.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var WE = Object.defineProperty,
  JE = Object.defineProperties,
  QE = Object.getOwnPropertyDescriptors,
  Nl = Object.getOwnPropertySymbols,
  YE = Object.prototype.hasOwnProperty,
  ZE = Object.prototype.propertyIsEnumerable,
  $l = (a, t, r) =>
    t in a
      ? WE(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  Vs = (a, t) => {
    for (var r in t || (t = {})) YE.call(t, r) && $l(a, r, t[r]);
    if (Nl) for (var r of Nl(t)) ZE.call(t, r) && $l(a, r, t[r]);
    return a;
  },
  bc = (a, t) => JE(a, QE(t));
class XE extends Qw {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new GE()),
      (this.events = new Dt.EventEmitter()),
      (this.name = TE),
      (this.version = NE),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = xi),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const h = Ac(o),
            f = { topic: s, relay: h };
          this.pending.set(s, f);
          const g = await this.rpcSubscribe(s, h);
          return (
            this.onSubscribe(g, f),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            g
          );
        } catch (h) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(h),
            h)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof o?.id < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) =>
        this.topics.includes(s)
          ? !0
          : await new Promise((o, h) => {
              const f = new te.Watch();
              f.start(this.pendingSubscriptionWatchLabel);
              const g = setInterval(() => {
                !this.pending.has(s) &&
                  this.topics.includes(s) &&
                  (clearInterval(g),
                  f.stop(this.pendingSubscriptionWatchLabel),
                  o(!0)),
                  f.elapsed(this.pendingSubscriptionWatchLabel) >= $E &&
                    (clearInterval(g),
                    f.stop(this.pendingSubscriptionWatchLabel),
                    h(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1)),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = t),
      (this.logger = lr(r, this.name)),
      (this.clientId = "");
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(t, o, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: t, id: r, opts: s },
      });
    try {
      const o = Ac(s);
      await this.rpcUnsubscribe(t, r, o);
      const h = Gt("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, h),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: t, id: r, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: Eo(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await en(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(Wt.connection_stalled);
    }
    return bs(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay,
      s = {
        method: Eo(r.protocol).batchSubscribe,
        params: { topics: t.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await en(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(Wt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const o = {
      method: Eo(s.protocol).unsubscribe,
      params: { topic: t, id: r },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, bc(Vs({}, r), { id: t })),
      this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, Vs({}, r)), this.pending.delete(r.topic);
      });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r),
      this.hasSubscription(r, t) && this.deleteSubscription(r, s),
      await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: t,
        subscription: r,
      }),
      this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, Vs({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(Lr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: t,
        reason: r,
      });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(s.topic, t),
      this.events.emit(Lr.deleted, bc(Vs({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Lr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Lr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(r),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(r))
        );
      }
      (this.cached = t),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    Es(r) &&
      this.onBatchSubscribe(r.map((s, o) => bc(Vs({}, t[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }),
      await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Is.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(Wt.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(Wt.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Lr.created, async (t) => {
        const r = Lr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      }),
      this.events.on(Lr.deleted, async (t) => {
        const r = Lr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.restartInProgress || (clearInterval(r), t());
        }, this.pollingInterval);
      }));
  }
}
var eI = Object.defineProperty,
  Dl = Object.getOwnPropertySymbols,
  tI = Object.prototype.hasOwnProperty,
  rI = Object.prototype.propertyIsEnumerable,
  Fl = (a, t, r) =>
    t in a
      ? eI(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  iI = (a, t) => {
    for (var r in t || (t = {})) tI.call(t, r) && Fl(a, r, t[r]);
    if (Dl) for (var r of Dl(t)) rI.call(t, r) && Fl(a, r, t[r]);
    return a;
  };
class sI extends Ww {
  constructor(t) {
    super(t),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Dt.EventEmitter()),
      (this.name = xE),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.request = async (r) => {
        this.logger.debug("Publishing Request Payload");
        try {
          return (
            await this.toEstablishConnection(), await this.provider.request(r)
          );
        } catch (s) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(s),
            s)
          );
        }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(Wt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(Wt.error, r),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(ai.payload, this.onPayloadHandler),
          this.provider.on(ai.connect, this.onConnectHandler),
          this.provider.on(ai.disconnect, this.onDisconnectHandler),
          this.provider.on(ai.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < "u" && typeof t.logger != "string"
          ? lr(t.logger, this.name)
          : $o(Fo({ level: t.logger || IE }))),
      (this.messages = new KE(this.logger, t.core)),
      (this.subscriber = new XE(this, this.logger)),
      (this.publisher = new VE(this, this.logger)),
      (this.relayUrl = t?.relayUrl || rp),
      (this.projectId = t.projectId),
      (this.bundleId = e1()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Tl}...`
      ),
        await this.restartTransport(Tl);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, AE);
  }
  get context() {
    return hr(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(),
      await this.publisher.publish(t, r, s),
      await this.recordMessageEvent({
        topic: t,
        message: r,
        publishedAt: Date.now(),
      });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let h;
    const f = (g) => {
      g.topic === t && (this.subscriber.off(Lr.created, f), h());
    };
    return (
      await Promise.all([
        new Promise((g) => {
          (h = g), this.subscriber.on(Lr.created, f);
        }),
        new Promise(async (g) => {
          (o = await this.subscriber.subscribe(t, r)), g();
        }),
      ]),
      o
    );
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await en(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(t) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      t &&
        t !== this.relayUrl &&
        ((this.relayUrl = t),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((r) => {
            if (!this.initialized) return r();
            this.subscriber.once(Lr.resubscribed, () => {
              r();
            });
          }),
          new Promise(async (r, s) => {
            try {
              await en(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            r();
          }),
        ]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message)) throw r;
        this.provider.events.emit(ai.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = t || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await Jh()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new Nb(
      new jb(
        t1({
          sdkVersion: RE,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(r)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0
      );
    const o = this.messages.has(r, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(t) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: t }),
      Hc(t))
    ) {
      if (!t.method.endsWith(PE)) return;
      const r = t.params,
        { topic: s, message: o, publishedAt: h } = r.data,
        f = { topic: s, message: o, publishedAt: h };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(iI({ type: "event", event: r.id }, f)),
        this.events.emit(r.id, f),
        await this.acknowledgePayload(t),
        await this.onMessageEvent(f);
    } else cn(t) && this.events.emit(Wt.message_ack, t);
  }
  async onMessageEvent(t) {
    (await this.shouldIgnoreMessageEvent(t)) ||
      (this.events.emit(Wt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Lo(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(ai.payload, this.onPayloadHandler),
      this.provider.off(ai.connect, this.onConnectHandler),
      this.provider.off(ai.disconnect, this.onDisconnectHandler),
      this.provider.off(ai.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Wt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Jh();
    r1(async (r) => {
      this.initialized &&
        t !== r &&
        ((t = r),
        r
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Wt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((t) => this.logger.error(t));
      }, te.toMiliseconds(SE)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var nI = Object.defineProperty,
  Ll = Object.getOwnPropertySymbols,
  oI = Object.prototype.hasOwnProperty,
  aI = Object.prototype.propertyIsEnumerable,
  jl = (a, t, r) =>
    t in a
      ? nI(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  ql = (a, t) => {
    for (var r in t || (t = {})) oI.call(t, r) && jl(a, r, t[r]);
    if (Ll) for (var r of Ll(t)) aI.call(t, r) && jl(a, r, t[r]);
    return a;
  };
class Mo extends Jw {
  constructor(t, r, s, o = xi, h = void 0) {
    super(t, r, s, o),
      (this.core = t),
      (this.logger = r),
      (this.name = s),
      (this.map = new Map()),
      (this.version = OE),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !Ii(f)
              ? this.map.set(this.getKey(f), f)
              : km(f)
              ? this.map.set(f.id, f)
              : Bm(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, g) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, g)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: g,
              }),
              this.map.set(f, g),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f
          ? this.values.filter((g) =>
              Object.keys(f).every((m) => Ao(g[m], f[m]))
            )
          : this.values
      )),
      (this.update = async (f, g) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: f,
            update: g,
          });
        const m = ql(ql({}, this.getData(f)), g);
        this.map.set(f, m), await this.persist();
      }),
      (this.delete = async (f, g) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: f,
              reason: g,
            }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = lr(r, this.name)),
      (this.storagePrefix = o),
      (this.getKey = h);
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length) return;
      if (this.map.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class cI {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = DE),
      (this.version = FE),
      (this.events = new Dt()),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.ignoredPayloadTypes = [ff]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Rc(),
          o = await this.core.crypto.setSymKey(s),
          h = jr(te.FIVE_MINUTES),
          f = { protocol: tp },
          g = { topic: o, expiry: h, relay: f, active: !1 },
          m = i1({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: f,
          });
        return (
          await this.pairings.set(o, g),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, h),
          { topic: o, uri: m }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: h, relay: f } = Qh(s.uri);
        let g;
        if (
          this.pairings.keys.includes(o) &&
          ((g = this.pairings.get(o)), g.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const m = jr(te.FIVE_MINUTES),
          y = { topic: o, relay: f, expiry: m, active: !1 };
        return (
          await this.pairings.set(o, y),
          this.core.expirer.set(o, m),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(Ys.create, y),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(h, o),
            await this.core.relayer.subscribe(o, { relay: f })),
          y
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = jr(te.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const h = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: f, resolve: g, reject: m } = vs();
          this.events.once(Ct("pairing_ping", h), ({ error: y }) => {
            y ? m(y) : g();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            Gt("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, h) => {
        const f = Bi(o, h),
          g = await this.core.crypto.encode(s, f),
          m = Ks[o].req;
        return (
          this.core.history.set(s, f), this.core.relayer.publish(s, g, m), f.id
        );
      }),
      (this.sendResult = async (s, o, h) => {
        const f = Lo(s, h),
          g = await this.core.crypto.encode(o, f),
          m = await this.core.history.get(o, s),
          y = Ks[m.request.method].res;
        await this.core.relayer.publish(o, g, y),
          await this.core.history.resolve(f);
      }),
      (this.sendError = async (s, o, h) => {
        const f = jo(s, h),
          g = await this.core.crypto.encode(o, f),
          m = await this.core.history.get(o, s),
          y = Ks[m.request.method]
            ? Ks[m.request.method].res
            : Ks.unregistered_method.res;
        await this.core.relayer.publish(o, g, y),
          await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, Gt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => Ei(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: h } = s;
        switch (h.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, h);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, h);
          default:
            return this.onUnknownRpcMethodRequest(o, h);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: h } = s,
          f = (await this.core.history.get(o, h.id)).request.method;
        switch (f) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, h);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: h } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(h, s, !0),
            this.events.emit(Ys.ping, { id: h, topic: s });
        } catch (f) {
          await this.sendError(h, s, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: h } = o;
        setTimeout(() => {
          ui(o)
            ? this.events.emit(Ct("pairing_ping", h), {})
            : Ar(o) &&
              this.events.emit(Ct("pairing_ping", h), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: h } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(Ys.delete, { id: h, topic: s });
        } catch (f) {
          await this.sendError(h, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: h, method: f } = o;
        try {
          if (this.registeredMethods.includes(f)) return;
          const g = Gt("WC_METHOD_UNSUPPORTED", f);
          await this.sendError(h, s, g), this.logger.error(g);
        } catch (g) {
          await this.sendError(h, s, g), this.logger.error(g);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error(Gt("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!ur(s)) {
          const { message: f } = G("MISSING_OR_INVALID", `pair() params: ${s}`);
          throw new Error(f);
        }
        if (!s1(s.uri)) {
          const { message: f } = G(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(f);
        }
        const h = Qh(s.uri);
        if (!((o = h?.relay) != null && o.protocol)) {
          const { message: f } = G(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(f);
        }
        if (!(h != null && h.symKey)) {
          const { message: f } = G("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!ur(s)) {
          const { message: h } = G("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(h);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!ur(s)) {
          const { message: h } = G(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(h);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!ms(s, !1)) {
          const { message: o } = G(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = G(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (Ei(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = G("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = t),
      (this.logger = lr(r, this.name)),
      (this.pairings = new Mo(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return hr(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Wt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (
        !this.pairings.keys.includes(r) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(r, s);
      try {
        Hc(o)
          ? (this.core.history.set(r, o),
            this.onRelayEventRequest({ topic: r, payload: o }))
          : cn(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: r, payload: o }),
            this.core.history.delete(r, o.id));
      } catch (h) {
        this.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Rr.expired, async (t) => {
      const { topic: r } = pf(t.target);
      r &&
        this.pairings.keys.includes(r) &&
        (await this.deletePairing(r, !0),
        this.events.emit(Ys.expire, { topic: r }));
    });
  }
}
class uI extends Kw {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new Dt.EventEmitter()),
      (this.name = LE),
      (this.version = jE),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, h) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: h,
          }),
          this.records.has(o.id))
        )
          return;
        const f = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: h,
          expiry: jr(te.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(Kr.created, f);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Ar(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(Kr.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((h) => {
            if (h.topic === s) {
              if (typeof o < "u" && h.id !== o) return;
              this.records.delete(h.id), this.events.emit(Kr.deleted, h);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = lr(r, this.name));
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < "u") return;
        const s = {
          topic: r.topic,
          request: Bi(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(s);
      }),
      t
    );
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Kr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length) return;
      if (this.records.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Kr.created, (t) => {
      const r = Kr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: "event", event: r, record: t }),
        this.persist();
    }),
      this.events.on(Kr.updated, (t) => {
        const r = Kr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.events.on(Kr.deleted, (t) => {
        const r = Kr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.core.heartbeat.on(Is.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        te.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class hI extends Yw {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new Dt.EventEmitter()),
      (this.name = qE),
      (this.version = ME),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const h = this.formatTarget(s),
          f = { target: h, expiry: o };
        this.expirations.set(h, f),
          this.checkExpiry(h, f),
          this.events.emit(Rr.created, { target: h, expiration: f });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            h = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit(Rr.deleted, { target: o, expiration: h });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = lr(r, this.name));
  }
  get context() {
    return hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return n1(t);
    if (typeof t == "number") return o1(t);
    const { message: r } = G("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Rr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    te.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t),
      this.events.emit(Rr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Is.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Rr.created, (t) => {
        const r = Rr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Rr.expired, (t) => {
        const r = Rr.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Rr.deleted, (t) => {
        const r = Rr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class lI extends Zw {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = wc),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || a1() || !df()) return;
        const o = this.getVerifyUrl(s?.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (h) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(h);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = $c);
          try {
            await this.createIframe();
          } catch (h) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(h),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s?.verifyUrl);
        let h;
        try {
          h = await this.fetchAttestation(s.attestationId, o);
        } catch (f) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(f),
            (h = await this.fetchAttestation(s.attestationId, $c));
        }
        return h;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const h = this.startAbortTimer(te.ONE_SECOND * 2),
          f = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(h), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (h) => {
          h.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((h) => {
            if (document.getElementById(wc)) return h();
            window.addEventListener("message", o);
            const f = document.createElement("iframe");
            (f.id = wc),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = "none"),
              document.body.append(f),
              (this.iframe = f),
              (s = h);
          }),
          new Promise((h, f) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                f("verify iframe load timeout");
            }, te.toMiliseconds(te.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || ws;
        return (
          zE.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${ws}`
            ),
            (o = ws)),
          o
        );
      }),
      (this.logger = lr(r, this.name)),
      (this.verifyUrl = ws),
      (this.abortController = new AbortController()),
      (this.isDevEnv = c1() && {}.IS_VITEST);
  }
  get context() {
    return hr(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), te.toMiliseconds(t))
    );
  }
}
class fI extends Xw {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.context = UE),
      (this.registerDeviceToken = async (s) => {
        const {
            clientId: o,
            token: h,
            notificationType: f,
            enableEncrypted: g = !1,
          } = s,
          m = `${HE}/${this.projectId}/clients`;
        await Ub(m, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: o,
            type: f,
            token: h,
            always_raw: g,
          }),
        });
      }),
      (this.logger = lr(r, this.context));
  }
}
var pI = Object.defineProperty,
  Ml = Object.getOwnPropertySymbols,
  dI = Object.prototype.hasOwnProperty,
  gI = Object.prototype.propertyIsEnumerable,
  zl = (a, t, r) =>
    t in a
      ? pI(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  Ul = (a, t) => {
    for (var r in t || (t = {})) dI.call(t, r) && zl(a, r, t[r]);
    if (Ml) for (var r of Ml(t)) gI.call(t, r) && zl(a, r, t[r]);
    return a;
  };
class Bc extends Bw {
  constructor(t) {
    super(t),
      (this.protocol = ep),
      (this.version = fE),
      (this.name = kc),
      (this.events = new Dt.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = t?.projectId),
      (this.relayUrl = t?.relayUrl || rp),
      (this.customStoragePrefix =
        t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "");
    const r =
      typeof t?.logger < "u" && typeof t?.logger != "string"
        ? t.logger
        : $o(Fo({ level: t?.logger || pE.logger }));
    (this.logger = lr(r, this.name)),
      (this.heartbeat = new Is.HeartBeat()),
      (this.crypto = new BE(this, this.logger, t?.keychain)),
      (this.history = new uI(this, this.logger)),
      (this.expirer = new hI(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new dw(Ul(Ul({}, dE), t?.storageOptions))),
      (this.relayer = new sI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new cI(this, this.logger)),
      (this.verify = new lI(this.projectId || "", this.logger)),
      (this.echoClient = new fI(this.projectId || "", this.logger));
  }
  static async init(t) {
    const r = new Bc(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(CE, s), r;
  }
  get context() {
    return hr(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (t) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          t
        ),
        this.logger.error(t.message),
        t)
      );
    }
  }
}
const yI = Bc,
  ip = "wc",
  sp = 2,
  np = "client",
  Kc = `${ip}@${sp}:${np}:`,
  _c = {
    name: np,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  Hl = "WALLETCONNECT_DEEPLINK_CHOICE",
  vI = "proposal",
  op = "Proposal expired",
  mI = "session",
  wo = te.SEVEN_DAYS,
  wI = "engine",
  Gs = {
    wc_sessionPropose: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  Ec = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS },
  ci = { idle: "IDLE", active: "ACTIVE" },
  bI = "request",
  _I = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var EI = Object.defineProperty,
  II = Object.defineProperties,
  xI = Object.getOwnPropertyDescriptors,
  kl = Object.getOwnPropertySymbols,
  PI = Object.prototype.hasOwnProperty,
  SI = Object.prototype.propertyIsEnumerable,
  Bl = (a, t, r) =>
    t in a
      ? EI(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  ar = (a, t) => {
    for (var r in t || (t = {})) PI.call(t, r) && Bl(a, r, t[r]);
    if (kl) for (var r of kl(t)) SI.call(t, r) && Bl(a, r, t[r]);
    return a;
  },
  Ws = (a, t) => II(a, xI(t));
class RI extends tb {
  constructor(t) {
    super(t),
      (this.name = wI),
      (this.events = new Dt()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [ff]),
      (this.requestQueue = { state: ci.idle, queue: [] }),
      (this.sessionRequestQueue = { state: ci.idle, queue: [] }),
      (this.requestQueueDelay = te.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(Gs) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, te.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (r) => {
        await this.isInitialized();
        const s = Ws(ar({}, r), {
          requiredNamespaces: r.requiredNamespaces || {},
          optionalNamespaces: r.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: h,
          optionalNamespaces: f,
          sessionProperties: g,
          relays: m,
        } = s;
        let y = o,
          E,
          A = !1;
        if (
          (y && (A = this.client.core.pairing.pairings.get(y).active), !y || !A)
        ) {
          const { topic: ae, uri: ee } =
            await this.client.core.pairing.create();
          (y = ae), (E = ee);
        }
        const $ = await this.client.core.crypto.generateKeyPair(),
          L = ar(
            {
              requiredNamespaces: h,
              optionalNamespaces: f,
              relays: m ?? [{ protocol: tp }],
              proposer: { publicKey: $, metadata: this.client.metadata },
            },
            g && { sessionProperties: g }
          ),
          { reject: C, resolve: Y, done: re } = vs(te.FIVE_MINUTES, op);
        if (
          (this.events.once(
            Ct("session_connect"),
            async ({ error: ae, session: ee }) => {
              if (ae) C(ae);
              else if (ee) {
                ee.self.publicKey = $;
                const he = Ws(ar({}, ee), {
                  requiredNamespaces: ee.requiredNamespaces,
                  optionalNamespaces: ee.optionalNamespaces,
                });
                await this.client.session.set(ee.topic, he),
                  await this.setExpiry(ee.topic, ee.expiry),
                  y &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: y,
                      metadata: ee.peer.metadata,
                    })),
                  Y(he);
              }
            }
          ),
          !y)
        ) {
          const { message: ae } = G(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${y}`
          );
          throw new Error(ae);
        }
        const oe = await this.sendRequest({
            topic: y,
            method: "wc_sessionPropose",
            params: L,
          }),
          ce = jr(te.FIVE_MINUTES);
        return (
          await this.setProposal(oe, ar({ id: oe, expiry: ce }, L)),
          { uri: E, approval: re }
        );
      }),
      (this.pair = async (r) => (
        await this.isInitialized(), await this.client.core.pairing.pair(r)
      )),
      (this.approve = async (r) => {
        await this.isInitialized(), await this.isValidApprove(r);
        const {
            id: s,
            relayProtocol: o,
            namespaces: h,
            sessionProperties: f,
          } = r,
          g = this.client.proposal.get(s);
        let {
          pairingTopic: m,
          proposer: y,
          requiredNamespaces: E,
          optionalNamespaces: A,
        } = g;
        (m = m || ""), Io(E) || (E = h1(h, "approve()"));
        const $ = await this.client.core.crypto.generateKeyPair(),
          L = y.publicKey,
          C = await this.client.core.crypto.generateSharedKey($, L);
        m &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: m,
            metadata: y.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: m,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: $ },
          }),
          await this.client.proposal.delete(s, Gt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: m }));
        const Y = ar(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: h,
            requiredNamespaces: E,
            optionalNamespaces: A,
            pairingTopic: m,
            controller: { publicKey: $, metadata: this.client.metadata },
            expiry: jr(wo),
          },
          f && { sessionProperties: f }
        );
        await this.client.core.relayer.subscribe(C),
          await this.sendRequest({
            topic: C,
            method: "wc_sessionSettle",
            params: Y,
            throwOnFailedPublish: !0,
          });
        const re = Ws(ar({}, Y), {
          topic: C,
          pairingTopic: m,
          acknowledged: !1,
          self: Y.controller,
          peer: { publicKey: y.publicKey, metadata: y.metadata },
          controller: $,
        });
        return (
          await this.client.session.set(C, re),
          await this.setExpiry(C, jr(wo)),
          {
            topic: C,
            acknowledged: () =>
              new Promise((oe) =>
                setTimeout(() => oe(this.client.session.get(C)), 500)
              ),
          }
        );
      }),
      (this.reject = async (r) => {
        await this.isInitialized(), await this.isValidReject(r);
        const { id: s, reason: o } = r,
          { pairingTopic: h } = this.client.proposal.get(s);
        h &&
          (await this.sendError(s, h, o),
          await this.client.proposal.delete(s, Gt("USER_DISCONNECTED")));
      }),
      (this.update = async (r) => {
        await this.isInitialized(), await this.isValidUpdate(r);
        const { topic: s, namespaces: o } = r,
          h = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: f, resolve: g, reject: m } = vs();
        return (
          this.events.once(Ct("session_update", h), ({ error: y }) => {
            y ? m(y) : g();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (r) => {
        await this.isInitialized(), await this.isValidExtend(r);
        const { topic: s } = r,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: h, resolve: f, reject: g } = vs();
        return (
          this.events.once(Ct("session_extend", o), ({ error: m }) => {
            m ? g(m) : f();
          }),
          await this.setExpiry(s, jr(wo)),
          { acknowledged: h }
        );
      }),
      (this.request = async (r) => {
        await this.isInitialized(), await this.isValidRequest(r);
        const { chainId: s, request: o, topic: h, expiry: f } = r,
          g = zc(),
          {
            done: m,
            resolve: y,
            reject: E,
          } = vs(f, "Request expired. Please try again.");
        return (
          this.events.once(
            Ct("session_request", g),
            ({ error: A, result: $ }) => {
              A ? E(A) : y($);
            }
          ),
          await Promise.all([
            new Promise(async (A) => {
              await this.sendRequest({
                clientRpcId: g,
                topic: h,
                method: "wc_sessionRequest",
                params: { request: o, chainId: s },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch(($) => E($)),
                this.client.events.emit("session_request_sent", {
                  topic: h,
                  request: o,
                  chainId: s,
                  id: g,
                }),
                A();
            }),
            new Promise(async (A) => {
              const $ = await l1(this.client.core.storage, Hl);
              f1({ id: g, topic: h, wcDeepLink: $ }), A();
            }),
            m(),
          ]).then((A) => A[2])
        );
      }),
      (this.respond = async (r) => {
        await this.isInitialized(), await this.isValidRespond(r);
        const { topic: s, response: o } = r,
          { id: h } = o;
        ui(o)
          ? await this.sendResult({
              id: h,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Ar(o) && (await this.sendError(h, s, o.error)),
          this.cleanupAfterResponse(r);
      }),
      (this.ping = async (r) => {
        await this.isInitialized(), await this.isValidPing(r);
        const { topic: s } = r;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: h, resolve: f, reject: g } = vs();
          this.events.once(Ct("session_ping", o), ({ error: m }) => {
            m ? g(m) : f();
          }),
            await h();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (r) => {
        await this.isInitialized(), await this.isValidEmit(r);
        const { topic: s, event: o, chainId: h } = r;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: h },
        });
      }),
      (this.disconnect = async (r) => {
        await this.isInitialized(), await this.isValidDisconnect(r);
        const { topic: s } = r;
        this.client.session.keys.includes(s)
          ? (await this.sendRequest({
              topic: s,
              method: "wc_sessionDelete",
              params: Gt("USER_DISCONNECTED"),
              throwOnFailedPublish: !0,
            }),
            await this.deleteSession(s))
          : await this.client.core.pairing.disconnect({ topic: s });
      }),
      (this.find = (r) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => p1(s, r))
      )),
      (this.getPendingSessionRequests = () => (
        this.isInitialized(), this.client.pendingRequest.getAll()
      )),
      (this.cleanupDuplicatePairings = async (r) => {
        if (r.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(r.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((h) => {
                var f, g;
                return (
                  ((f = h.peerMetadata) == null ? void 0 : f.url) &&
                  ((g = h.peerMetadata) == null ? void 0 : g.url) ===
                    r.peer.metadata.url &&
                  h.topic &&
                  h.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((h) =>
                  this.client.core.pairing.disconnect({ topic: h.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (r, s) => {
        const { self: o } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r),
          this.client.session.delete(r, Gt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(o.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
          this.client.core.crypto.keychain.has(r) &&
            (await this.client.core.crypto.deleteSymKey(r)),
          s || this.client.core.expirer.del(r),
          this.client.core.storage
            .removeItem(Hl)
            .catch((h) => this.client.logger.warn(h)),
          this.getPendingSessionRequests().forEach((h) => {
            h.topic === r &&
              this.deletePendingSessionRequest(h.id, Gt("USER_DISCONNECTED"));
          });
      }),
      (this.deleteProposal = async (r, s) => {
        await Promise.all([
          this.client.proposal.delete(r, Gt("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(r),
        ]);
      }),
      (this.deletePendingSessionRequest = async (r, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(r, s),
          o ? Promise.resolve() : this.client.core.expirer.del(r),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((h) => h.id !== r)),
          o && (this.sessionRequestQueue.state = ci.idle);
      }),
      (this.setExpiry = async (r, s) => {
        this.client.session.keys.includes(r) &&
          (await this.client.session.update(r, { expiry: s })),
          this.client.core.expirer.set(r, s);
      }),
      (this.setProposal = async (r, s) => {
        await this.client.proposal.set(r, s),
          this.client.core.expirer.set(r, s.expiry);
      }),
      (this.setPendingSessionRequest = async (r) => {
        const s = Gs.wc_sessionRequest.req.ttl,
          { id: o, topic: h, params: f, verifyContext: g } = r;
        await this.client.pendingRequest.set(o, {
          id: o,
          topic: h,
          params: f,
          verifyContext: g,
        }),
          s && this.client.core.expirer.set(o, jr(s));
      }),
      (this.sendRequest = async (r) => {
        const {
            topic: s,
            method: o,
            params: h,
            expiry: f,
            relayRpcId: g,
            clientRpcId: m,
            throwOnFailedPublish: y,
          } = r,
          E = Bi(o, h, m);
        if (df() && _I.includes(o)) {
          const L = bs(JSON.stringify(E));
          this.client.core.verify.register({ attestationId: L });
        }
        const A = await this.client.core.crypto.encode(s, E),
          $ = Gs[o].req;
        return (
          f && ($.ttl = f),
          g && ($.id = g),
          this.client.core.history.set(s, E),
          y
            ? (($.internal = Ws(ar({}, $.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, A, $))
            : this.client.core.relayer
                .publish(s, A, $)
                .catch((L) => this.client.logger.error(L)),
          E.id
        );
      }),
      (this.sendResult = async (r) => {
        const { id: s, topic: o, result: h, throwOnFailedPublish: f } = r,
          g = Lo(s, h),
          m = await this.client.core.crypto.encode(o, g),
          y = await this.client.core.history.get(o, s),
          E = Gs[y.request.method].res;
        f
          ? ((E.internal = Ws(ar({}, E.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, m, E))
          : this.client.core.relayer
              .publish(o, m, E)
              .catch((A) => this.client.logger.error(A)),
          await this.client.core.history.resolve(g);
      }),
      (this.sendError = async (r, s, o) => {
        const h = jo(r, o),
          f = await this.client.core.crypto.encode(s, h),
          g = await this.client.core.history.get(s, r),
          m = Gs[g.request.method].res;
        this.client.core.relayer.publish(s, f, m),
          await this.client.core.history.resolve(h);
      }),
      (this.cleanup = async () => {
        const r = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          Ei(o.expiry) && r.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            Ei(o.expiry) && s.push(o.id);
          }),
          await Promise.all([
            ...r.map((o) => this.deleteSession(o)),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (r) => {
        this.requestQueue.queue.push(r), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === ci.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = ci.active;
          const r = this.requestQueue.queue.shift();
          if (r)
            try {
              this.processRequest(r),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = ci.idle;
      }),
      (this.processRequest = (r) => {
        const { topic: s, payload: o } = r,
          h = o.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${h}`);
        }
      }),
      (this.onRelayEventResponse = async (r) => {
        const { topic: s, payload: o } = r,
          h = (await this.client.core.history.get(s, o.id)).request.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${h}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: s } = r,
          { message: o } = G(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (r, s) => {
        const { params: o, id: h } = s;
        try {
          this.isValidConnect(ar({}, s.params));
          const f = jr(te.FIVE_MINUTES),
            g = ar({ id: h, pairingTopic: r, expiry: f }, o);
          await this.setProposal(h, g);
          const m = bs(JSON.stringify(s)),
            y = await this.getVerifyContext(m, g.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: h,
            params: g,
            verifyContext: y,
          });
        } catch (f) {
          await this.sendError(h, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (r, s) => {
        const { id: o } = s;
        if (ui(s)) {
          const { result: h } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: h,
          });
          const f = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: f,
          });
          const g = f.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: g,
          });
          const m = h.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: m,
          });
          const y = await this.client.core.crypto.generateSharedKey(g, m);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: y,
          });
          const E = await this.client.core.relayer.subscribe(y);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: E,
          }),
            await this.client.core.pairing.activate({ topic: r });
        } else
          Ar(s) &&
            (await this.client.proposal.delete(o, Gt("USER_DISCONNECTED")),
            this.events.emit(Ct("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (r, s) => {
        const { id: o, params: h } = s;
        try {
          this.isValidSessionSettleRequest(h);
          const {
              relay: f,
              controller: g,
              expiry: m,
              namespaces: y,
              requiredNamespaces: E,
              optionalNamespaces: A,
              sessionProperties: $,
              pairingTopic: L,
            } = s.params,
            C = ar(
              {
                topic: r,
                relay: f,
                expiry: m,
                namespaces: y,
                acknowledged: !0,
                pairingTopic: L,
                requiredNamespaces: E,
                optionalNamespaces: A,
                controller: g.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: g.publicKey, metadata: g.metadata },
              },
              $ && { sessionProperties: $ }
            );
          await this.sendResult({ id: s.id, topic: r, result: !0 }),
            this.events.emit(Ct("session_connect"), { session: C }),
            this.cleanupDuplicatePairings(C);
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (r, s) => {
        const { id: o } = s;
        ui(s)
          ? (await this.client.session.update(r, { acknowledged: !0 }),
            this.events.emit(Ct("session_approve", o), {}))
          : Ar(s) &&
            (await this.client.session.delete(r, Gt("USER_DISCONNECTED")),
            this.events.emit(Ct("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (r, s) => {
        const { params: o, id: h } = s;
        try {
          const f = `${r}_session_update`,
            g = go.get(f);
          if (g && this.isRequestOutOfSync(g, h)) {
            this.client.logger.info(`Discarding out of sync request - ${h}`);
            return;
          }
          this.isValidUpdate(ar({ topic: r }, o)),
            await this.client.session.update(r, { namespaces: o.namespaces }),
            await this.sendResult({ id: h, topic: r, result: !0 }),
            this.client.events.emit("session_update", {
              id: h,
              topic: r,
              params: o,
            }),
            go.set(f, h);
        } catch (f) {
          await this.sendError(h, r, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (r, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, s) => {
        const { id: o } = s;
        ui(s)
          ? this.events.emit(Ct("session_update", o), {})
          : Ar(s) &&
            this.events.emit(Ct("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: r }),
            await this.setExpiry(r, jr(wo)),
            await this.sendResult({ id: o, topic: r, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: r });
        } catch (h) {
          await this.sendError(o, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionExtendResponse = (r, s) => {
        const { id: o } = s;
        ui(s)
          ? this.events.emit(Ct("session_extend", o), {})
          : Ar(s) &&
            this.events.emit(Ct("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: r }),
            await this.sendResult({ id: o, topic: r, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: r });
        } catch (h) {
          await this.sendError(o, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionPingResponse = (r, s) => {
        const { id: o } = s;
        setTimeout(() => {
          ui(s)
            ? this.events.emit(Ct("session_ping", o), {})
            : Ar(s) &&
              this.events.emit(Ct("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: r, reason: s.params }),
            await Promise.all([
              new Promise((h) => {
                this.client.core.relayer.once(Wt.publish, async () => {
                  h(await this.deleteSession(r));
                });
              }),
              this.sendResult({ id: o, topic: r, result: !0 }),
            ]),
            this.client.events.emit("session_delete", { id: o, topic: r });
        } catch (h) {
          this.client.logger.error(h);
        }
      }),
      (this.onSessionRequest = async (r, s) => {
        const { id: o, params: h } = s;
        try {
          this.isValidRequest(ar({ topic: r }, h));
          const f = bs(JSON.stringify(Bi("wc_sessionRequest", h, o))),
            g = this.client.session.get(r),
            m = await this.getVerifyContext(f, g.peer.metadata),
            y = { id: o, topic: r, params: h, verifyContext: m };
          await this.setPendingSessionRequest(y),
            this.addSessionRequestToSessionRequestQueue(y),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (r, s) => {
        const { id: o } = s;
        ui(s)
          ? this.events.emit(Ct("session_request", o), { result: s.result })
          : Ar(s) &&
            this.events.emit(Ct("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (r, s) => {
        const { id: o, params: h } = s;
        try {
          const f = `${r}_session_event_${h.event.name}`,
            g = go.get(f);
          if (g && this.isRequestOutOfSync(g, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(ar({ topic: r }, h)),
            this.client.events.emit("session_event", {
              id: o,
              topic: r,
              params: h,
            }),
            go.set(f, o);
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = ci.idle),
              this.processSessionRequestQueue();
          }, te.toMiliseconds(this.requestQueueDelay));
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === ci.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = ci.active),
            this.client.events.emit("session_request", r);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (r) => {
        if (r.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === r.topic);
        s &&
          this.onSessionProposeRequest(
            r.topic,
            Bi(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (r) => {
        if (!ur(r)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(r)}`
          );
          throw new Error(m);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: h,
          sessionProperties: f,
          relays: g,
        } = r;
        if ((Ii(s) || (await this.isValidPairingTopic(s)), !d1(g, !0))) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `connect() relays: ${g}`
          );
          throw new Error(m);
        }
        !Ii(o) &&
          Io(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !Ii(h) &&
            Io(h) !== 0 &&
            this.validateNamespaces(h, "optionalNamespaces"),
          Ii(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.validateNamespaces = (r, s) => {
        const o = g1(r, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (r) => {
        if (!ur(r))
          throw new Error(
            G("MISSING_OR_INVALID", `approve() params: ${r}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: h,
          sessionProperties: f,
        } = r;
        await this.isValidProposalId(s);
        const g = this.client.proposal.get(s),
          m = hc(o, "approve()");
        if (m) throw new Error(m.message);
        const y = Yh(g.requiredNamespaces, o, "approve()");
        if (y) throw new Error(y.message);
        if (!ms(h, !0)) {
          const { message: E } = G(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${h}`
          );
          throw new Error(E);
        }
        Ii(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.isValidReject = async (r) => {
        if (!ur(r)) {
          const { message: h } = G(
            "MISSING_OR_INVALID",
            `reject() params: ${r}`
          );
          throw new Error(h);
        }
        const { id: s, reason: o } = r;
        if ((await this.isValidProposalId(s), !y1(o))) {
          const { message: h } = G(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidSessionSettleRequest = (r) => {
        if (!ur(r)) {
          const { message: y } = G(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${r}`
          );
          throw new Error(y);
        }
        const { relay: s, controller: o, namespaces: h, expiry: f } = r;
        if (!v1(s)) {
          const { message: y } = G(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(y);
        }
        const g = m1(o, "onSessionSettleRequest()");
        if (g) throw new Error(g.message);
        const m = hc(h, "onSessionSettleRequest()");
        if (m) throw new Error(m.message);
        if (Ei(f)) {
          const { message: y } = G("EXPIRED", "onSessionSettleRequest()");
          throw new Error(y);
        }
      }),
      (this.isValidUpdate = async (r) => {
        if (!ur(r)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `update() params: ${r}`
          );
          throw new Error(m);
        }
        const { topic: s, namespaces: o } = r;
        await this.isValidSessionTopic(s);
        const h = this.client.session.get(s),
          f = hc(o, "update()");
        if (f) throw new Error(f.message);
        const g = Yh(h.requiredNamespaces, o, "update()");
        if (g) throw new Error(g.message);
      }),
      (this.isValidExtend = async (r) => {
        if (!ur(r)) {
          const { message: o } = G(
            "MISSING_OR_INVALID",
            `extend() params: ${r}`
          );
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (r) => {
        if (!ur(r)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `request() params: ${r}`
          );
          throw new Error(m);
        }
        const { topic: s, request: o, chainId: h, expiry: f } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: g } = this.client.session.get(s);
        if (!Zh(g, h)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `request() chainId: ${h}`
          );
          throw new Error(m);
        }
        if (!w1(o)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(m);
        }
        if (!b1(g, h, o.method)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(m);
        }
        if (f && !_1(f, Ec)) {
          const { message: m } = G(
            "MISSING_OR_INVALID",
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Ec.min} and ${Ec.max}`
          );
          throw new Error(m);
        }
      }),
      (this.isValidRespond = async (r) => {
        var s;
        if (!ur(r)) {
          const { message: f } = G(
            "MISSING_OR_INVALID",
            `respond() params: ${r}`
          );
          throw new Error(f);
        }
        const { topic: o, response: h } = r;
        try {
          await this.isValidSessionTopic(o);
        } catch (f) {
          throw (
            ((s = r?.response) != null && s.id && this.cleanupAfterResponse(r),
            f)
          );
        }
        if (!E1(h)) {
          const { message: f } = G(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(h)}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (r) => {
        if (!ur(r)) {
          const { message: o } = G("MISSING_OR_INVALID", `ping() params: ${r}`);
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (r) => {
        if (!ur(r)) {
          const { message: g } = G("MISSING_OR_INVALID", `emit() params: ${r}`);
          throw new Error(g);
        }
        const { topic: s, event: o, chainId: h } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!Zh(f, h)) {
          const { message: g } = G(
            "MISSING_OR_INVALID",
            `emit() chainId: ${h}`
          );
          throw new Error(g);
        }
        if (!I1(o)) {
          const { message: g } = G(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(g);
        }
        if (!x1(f, h, o.name)) {
          const { message: g } = G(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(g);
        }
      }),
      (this.isValidDisconnect = async (r) => {
        if (!ur(r)) {
          const { message: o } = G(
            "MISSING_OR_INVALID",
            `disconnect() params: ${r}`
          );
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (r, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || ws,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const h = await this.client.core.verify.resolve({
            attestationId: r,
            verifyUrl: s.verifyUrl,
          });
          h &&
            ((o.verified.origin = h.origin),
            (o.verified.isScam = h.isScam),
            (o.verified.validation =
              h.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (h) {
          this.client.logger.info(h);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (r, s) => {
        Object.values(r).forEach((o) => {
          if (!ms(o, !1)) {
            const { message: h } = G(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(h);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Wt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(r, s);
      try {
        Hc(o)
          ? (this.client.core.history.set(r, o),
            this.onRelayEventRequest({ topic: r, payload: o }))
          : cn(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: r, payload: o }),
            this.client.core.history.delete(r, o.id))
          : this.onRelayEventUnknownPayload({ topic: r, payload: o });
      } catch (h) {
        this.client.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Rr.expired, async (t) => {
      const { topic: r, id: s } = pf(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, G("EXPIRED"), !0);
      r
        ? this.client.session.keys.includes(r) &&
          (await this.deleteSession(r, !0),
          this.client.events.emit("session_expire", { topic: r }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ys.create, (t) =>
      this.onPairingCreated(t)
    );
  }
  isValidPairingTopic(t) {
    if (!ms(t, !1)) {
      const { message: r } = G(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = G(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ei(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = G("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!ms(t, !1)) {
      const { message: r } = G(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = G(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ei(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = G("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (ms(t, !1)) {
      const { message: r } = G(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    } else {
      const { message: r } = G(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!P1(t)) {
      const { message: r } = G(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = G(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ei(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = G("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class AI extends Mo {
  constructor(t, r) {
    super(t, r, vI, Kc), (this.core = t), (this.logger = r);
  }
}
class OI extends Mo {
  constructor(t, r) {
    super(t, r, mI, Kc), (this.core = t), (this.logger = r);
  }
}
class CI extends Mo {
  constructor(t, r) {
    super(t, r, bI, Kc, (s) => s.id), (this.core = t), (this.logger = r);
  }
}
let TI = class ap extends eb {
  constructor(t) {
    super(t),
      (this.protocol = ip),
      (this.version = sp),
      (this.name = _c.name),
      (this.events = new Dt.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = t?.name || _c.name),
      (this.metadata = t?.metadata || u1());
    const r =
      typeof t?.logger < "u" && typeof t?.logger != "string"
        ? t.logger
        : $o(Fo({ level: t?.logger || _c.logger }));
    (this.core = t?.core || new yI(t)),
      (this.logger = lr(r, this.name)),
      (this.session = new OI(this.core, this.logger)),
      (this.proposal = new AI(this.core, this.logger)),
      (this.pendingRequest = new CI(this.core, this.logger)),
      (this.engine = new RI(this));
  }
  static async init(t) {
    const r = new ap(t);
    return await r.initialize(), r;
  }
  get context() {
    return hr(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(t.message),
        t)
      );
    }
  }
};
var Oo = {},
  NI = {
    get exports() {
      return Oo;
    },
    set exports(a) {
      Oo = a;
    },
  };
(function (a, t) {
  var r = typeof self < "u" ? self : qr,
    s = (function () {
      function h() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (h.prototype = r), new h();
    })();
  (function (h) {
    (function (f) {
      var g = {
        searchParams: "URLSearchParams" in h,
        iterable: "Symbol" in h && "iterator" in Symbol,
        blob:
          "FileReader" in h &&
          "Blob" in h &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in h,
        arrayBuffer: "ArrayBuffer" in h,
      };
      function m(b) {
        return b && DataView.prototype.isPrototypeOf(b);
      }
      if (g.arrayBuffer)
        var y = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          E =
            ArrayBuffer.isView ||
            function (b) {
              return b && y.indexOf(Object.prototype.toString.call(b)) > -1;
            };
      function A(b) {
        if (
          (typeof b != "string" && (b = String(b)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
        )
          throw new TypeError("Invalid character in header field name");
        return b.toLowerCase();
      }
      function $(b) {
        return typeof b != "string" && (b = String(b)), b;
      }
      function L(b) {
        var S = {
          next: function () {
            var J = b.shift();
            return { done: J === void 0, value: J };
          },
        };
        return (
          g.iterable &&
            (S[Symbol.iterator] = function () {
              return S;
            }),
          S
        );
      }
      function C(b) {
        (this.map = {}),
          b instanceof C
            ? b.forEach(function (S, J) {
                this.append(J, S);
              }, this)
            : Array.isArray(b)
            ? b.forEach(function (S) {
                this.append(S[0], S[1]);
              }, this)
            : b &&
              Object.getOwnPropertyNames(b).forEach(function (S) {
                this.append(S, b[S]);
              }, this);
      }
      (C.prototype.append = function (b, S) {
        (b = A(b)), (S = $(S));
        var J = this.map[b];
        this.map[b] = J ? J + ", " + S : S;
      }),
        (C.prototype.delete = function (b) {
          delete this.map[A(b)];
        }),
        (C.prototype.get = function (b) {
          return (b = A(b)), this.has(b) ? this.map[b] : null;
        }),
        (C.prototype.has = function (b) {
          return this.map.hasOwnProperty(A(b));
        }),
        (C.prototype.set = function (b, S) {
          this.map[A(b)] = $(S);
        }),
        (C.prototype.forEach = function (b, S) {
          for (var J in this.map)
            this.map.hasOwnProperty(J) && b.call(S, this.map[J], J, this);
        }),
        (C.prototype.keys = function () {
          var b = [];
          return (
            this.forEach(function (S, J) {
              b.push(J);
            }),
            L(b)
          );
        }),
        (C.prototype.values = function () {
          var b = [];
          return (
            this.forEach(function (S) {
              b.push(S);
            }),
            L(b)
          );
        }),
        (C.prototype.entries = function () {
          var b = [];
          return (
            this.forEach(function (S, J) {
              b.push([J, S]);
            }),
            L(b)
          );
        }),
        g.iterable && (C.prototype[Symbol.iterator] = C.prototype.entries);
      function Y(b) {
        if (b.bodyUsed) return Promise.reject(new TypeError("Already read"));
        b.bodyUsed = !0;
      }
      function re(b) {
        return new Promise(function (S, J) {
          (b.onload = function () {
            S(b.result);
          }),
            (b.onerror = function () {
              J(b.error);
            });
        });
      }
      function oe(b) {
        var S = new FileReader(),
          J = re(S);
        return S.readAsArrayBuffer(b), J;
      }
      function ce(b) {
        var S = new FileReader(),
          J = re(S);
        return S.readAsText(b), J;
      }
      function ae(b) {
        for (
          var S = new Uint8Array(b), J = new Array(S.length), le = 0;
          le < S.length;
          le++
        )
          J[le] = String.fromCharCode(S[le]);
        return J.join("");
      }
      function ee(b) {
        if (b.slice) return b.slice(0);
        var S = new Uint8Array(b.byteLength);
        return S.set(new Uint8Array(b)), S.buffer;
      }
      function he() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (b) {
            (this._bodyInit = b),
              b
                ? typeof b == "string"
                  ? (this._bodyText = b)
                  : g.blob && Blob.prototype.isPrototypeOf(b)
                  ? (this._bodyBlob = b)
                  : g.formData && FormData.prototype.isPrototypeOf(b)
                  ? (this._bodyFormData = b)
                  : g.searchParams && URLSearchParams.prototype.isPrototypeOf(b)
                  ? (this._bodyText = b.toString())
                  : g.arrayBuffer && g.blob && m(b)
                  ? ((this._bodyArrayBuffer = ee(b.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : g.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(b) || E(b))
                  ? (this._bodyArrayBuffer = ee(b))
                  : (this._bodyText = b = Object.prototype.toString.call(b))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof b == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : g.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(b) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          g.blob &&
            ((this.blob = function () {
              var b = Y(this);
              if (b) return b;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? Y(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(oe);
            })),
          (this.text = function () {
            var b = Y(this);
            if (b) return b;
            if (this._bodyBlob) return ce(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(ae(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          g.formData &&
            (this.formData = function () {
              return this.text().then(bt);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var pe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function Q(b) {
        var S = b.toUpperCase();
        return pe.indexOf(S) > -1 ? S : b;
      }
      function ve(b, S) {
        S = S || {};
        var J = S.body;
        if (b instanceof ve) {
          if (b.bodyUsed) throw new TypeError("Already read");
          (this.url = b.url),
            (this.credentials = b.credentials),
            S.headers || (this.headers = new C(b.headers)),
            (this.method = b.method),
            (this.mode = b.mode),
            (this.signal = b.signal),
            !J && b._bodyInit != null && ((J = b._bodyInit), (b.bodyUsed = !0));
        } else this.url = String(b);
        if (
          ((this.credentials =
            S.credentials || this.credentials || "same-origin"),
          (S.headers || !this.headers) && (this.headers = new C(S.headers)),
          (this.method = Q(S.method || this.method || "GET")),
          (this.mode = S.mode || this.mode || null),
          (this.signal = S.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && J)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(J);
      }
      ve.prototype.clone = function () {
        return new ve(this, { body: this._bodyInit });
      };
      function bt(b) {
        var S = new FormData();
        return (
          b
            .trim()
            .split("&")
            .forEach(function (J) {
              if (J) {
                var le = J.split("="),
                  H = le.shift().replace(/\+/g, " "),
                  U = le.join("=").replace(/\+/g, " ");
                S.append(decodeURIComponent(H), decodeURIComponent(U));
              }
            }),
          S
        );
      }
      function nt(b) {
        var S = new C(),
          J = b.replace(/\r?\n[\t ]+/g, " ");
        return (
          J.split(/\r?\n/).forEach(function (le) {
            var H = le.split(":"),
              U = H.shift().trim();
            if (U) {
              var k = H.join(":").trim();
              S.append(U, k);
            }
          }),
          S
        );
      }
      he.call(ve.prototype);
      function Be(b, S) {
        S || (S = {}),
          (this.type = "default"),
          (this.status = S.status === void 0 ? 200 : S.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in S ? S.statusText : "OK"),
          (this.headers = new C(S.headers)),
          (this.url = S.url || ""),
          this._initBody(b);
      }
      he.call(Be.prototype),
        (Be.prototype.clone = function () {
          return new Be(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new C(this.headers),
            url: this.url,
          });
        }),
        (Be.error = function () {
          var b = new Be(null, { status: 0, statusText: "" });
          return (b.type = "error"), b;
        });
      var Mt = [301, 302, 303, 307, 308];
      (Be.redirect = function (b, S) {
        if (Mt.indexOf(S) === -1) throw new RangeError("Invalid status code");
        return new Be(null, { status: S, headers: { location: b } });
      }),
        (f.DOMException = h.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (S, J) {
          (this.message = S), (this.name = J);
          var le = Error(S);
          this.stack = le.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function zt(b, S) {
        return new Promise(function (J, le) {
          var H = new ve(b, S);
          if (H.signal && H.signal.aborted)
            return le(new f.DOMException("Aborted", "AbortError"));
          var U = new XMLHttpRequest();
          function k() {
            U.abort();
          }
          (U.onload = function () {
            var B = {
              status: U.status,
              statusText: U.statusText,
              headers: nt(U.getAllResponseHeaders() || ""),
            };
            B.url =
              "responseURL" in U
                ? U.responseURL
                : B.headers.get("X-Request-URL");
            var et = "response" in U ? U.response : U.responseText;
            J(new Be(et, B));
          }),
            (U.onerror = function () {
              le(new TypeError("Network request failed"));
            }),
            (U.ontimeout = function () {
              le(new TypeError("Network request failed"));
            }),
            (U.onabort = function () {
              le(new f.DOMException("Aborted", "AbortError"));
            }),
            U.open(H.method, H.url, !0),
            H.credentials === "include"
              ? (U.withCredentials = !0)
              : H.credentials === "omit" && (U.withCredentials = !1),
            "responseType" in U && g.blob && (U.responseType = "blob"),
            H.headers.forEach(function (B, et) {
              U.setRequestHeader(et, B);
            }),
            H.signal &&
              (H.signal.addEventListener("abort", k),
              (U.onreadystatechange = function () {
                U.readyState === 4 && H.signal.removeEventListener("abort", k);
              })),
            U.send(typeof H._bodyInit > "u" ? null : H._bodyInit);
        });
      }
      return (
        (zt.polyfill = !0),
        h.fetch ||
          ((h.fetch = zt),
          (h.Headers = C),
          (h.Request = ve),
          (h.Response = Be)),
        (f.Headers = C),
        (f.Request = ve),
        (f.Response = Be),
        (f.fetch = zt),
        Object.defineProperty(f, "__esModule", { value: !0 }),
        f
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (t = o.fetch),
    (t.default = o.fetch),
    (t.fetch = o.fetch),
    (t.Headers = o.Headers),
    (t.Request = o.Request),
    (t.Response = o.Response),
    (a.exports = t);
})(NI, Oo);
const Kl = S1(Oo);
var $I = Object.defineProperty,
  DI = Object.defineProperties,
  FI = Object.getOwnPropertyDescriptors,
  Vl = Object.getOwnPropertySymbols,
  LI = Object.prototype.hasOwnProperty,
  jI = Object.prototype.propertyIsEnumerable,
  Gl = (a, t, r) =>
    t in a
      ? $I(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  Wl = (a, t) => {
    for (var r in t || (t = {})) LI.call(t, r) && Gl(a, r, t[r]);
    if (Vl) for (var r of Vl(t)) jI.call(t, r) && Gl(a, r, t[r]);
    return a;
  },
  Jl = (a, t) => DI(a, FI(t));
const qI = { Accept: "application/json", "Content-Type": "application/json" },
  MI = "POST",
  Ql = { headers: qI, method: MI },
  Yl = 10;
let Si = class {
  constructor(t, r = !1) {
    if (
      ((this.url = t),
      (this.disableProviderPing = r),
      (this.events = new Dt.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !ml(t))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    (this.url = t), (this.disableProviderPing = r);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || (await this.register());
    try {
      const r = Ki(t),
        s = await (await Kl(this.url, Jl(Wl({}, Ql), { body: r }))).json();
      this.onPayload({ data: s });
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  async register(t = this.url) {
    if (!ml(t))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), o(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = t), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const r = Ki({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Kl(t, Jl(Wl({}, Ql), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const s = this.parseError(r);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? on(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      o = s.message || s.toString(),
      h = jo(t, o);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return qf(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Yl && this.events.setMaxListeners(Yl);
  }
};
class Ri extends zf {
  constructor(t) {
    super(t),
      (this.events = new Dt.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(
      Bi(t.method, t.params || [], t.id || Uc().toString()),
      r
    );
  }
  async requestStrict(t, r) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (h) {
          o(h);
        }
      this.events.on(`${t.id}`, (h) => {
        Ar(h) ? o(h.error) : s(h.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (h) {
        o(h);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      cn(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == "string" &&
        (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const Zl = "error",
  zI = "wss://relay.walletconnect.com",
  UI = "wc",
  HI = "universal_provider",
  Xl = `${UI}@2:${HI}:`,
  kI = "https://rpc.walletconnect.com/v1/",
  hi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Js =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Dc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (a, t) {
  (function () {
    var r,
      s = "4.17.21",
      o = 200,
      h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      f = "Expected a function",
      g = "Invalid `variable` option passed into `_.template`",
      m = "__lodash_hash_undefined__",
      y = 500,
      E = "__lodash_placeholder__",
      A = 1,
      $ = 2,
      L = 4,
      C = 1,
      Y = 2,
      re = 1,
      oe = 2,
      ce = 4,
      ae = 8,
      ee = 16,
      he = 32,
      pe = 64,
      Q = 128,
      ve = 256,
      bt = 512,
      nt = 30,
      Be = "...",
      Mt = 800,
      zt = 16,
      b = 1,
      S = 2,
      J = 3,
      le = 1 / 0,
      H = 9007199254740991,
      U = 17976931348623157e292,
      k = 0 / 0,
      B = 4294967295,
      et = B - 1,
      ot = B >>> 1,
      Ai = [
        ["ary", Q],
        ["bind", re],
        ["bindKey", oe],
        ["curry", ae],
        ["curryRight", ee],
        ["flip", bt],
        ["partial", he],
        ["partialRight", pe],
        ["rearg", ve],
      ],
      Ee = "[object Arguments]",
      Or = "[object Array]",
      D = "[object AsyncFunction]",
      N = "[object Boolean]",
      O = "[object Date]",
      u = "[object DOMException]",
      I = "[object Error]",
      Z = "[object Function]",
      ue = "[object GeneratorFunction]",
      me = "[object Map]",
      Re = "[object Number]",
      Oe = "[object Null]",
      Ie = "[object Object]",
      _t = "[object Promise]",
      gt = "[object Proxy]",
      tt = "[object RegExp]",
      Te = "[object Set]",
      Ke = "[object String]",
      Ve = "[object Symbol]",
      rt = "[object Undefined]",
      Fe = "[object WeakMap]",
      Ge = "[object WeakSet]",
      Ae = "[object ArrayBuffer]",
      qe = "[object DataView]",
      at = "[object Float32Array]",
      $e = "[object Float64Array]",
      Et = "[object Int8Array]",
      Tt = "[object Int16Array]",
      Ut = "[object Int32Array]",
      Ht = "[object Uint8Array]",
      Ft = "[object Uint8ClampedArray]",
      Jt = "[object Uint16Array]",
      tr = "[object Uint32Array]",
      Mr = /\b__p \+= '';/g,
      Qt = /\b(__p \+=) '' \+/g,
      Gr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      li = /&(?:amp|lt|gt|quot|#39);/g,
      Oi = /[&<>"']/g,
      ct = RegExp(li.source),
      Qe = RegExp(Oi.source),
      ut = /<%-([\s\S]+?)%>/g,
      ht = /<%([\s\S]+?)%>/g,
      it = /<%=([\s\S]+?)%>/g,
      Ye = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      It = /^\w*$/,
      xt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      lt = /[\\^$.*+?()[\]{}|]/g,
      Pt = RegExp(lt.source),
      ft = /^\s+/,
      yt = /\s/,
      pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ke = /\{\n\/\* \[wrapped with (.+)\] \*/,
      St = /,? & /,
      Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      zo = /[()=,{}\[\]\/\s]/,
      Uo = /\\(\\)?/g,
      Ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      mr = /\w*$/,
      ko = /^[-+]0x[0-9a-f]+$/i,
      Bo = /^0b[01]+$/i,
      Ko = /^\[object .+?Constructor\]$/,
      Vo = /^0o[0-7]+$/i,
      Go = /^(?:0|[1-9]\d*)$/,
      Wr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Ji = /($^)/,
      Wo = /['\n\r\u2028\u2029\\]/g,
      Qi = "\\ud800-\\udfff",
      Jo = "\\u0300-\\u036f",
      Qo = "\\ufe20-\\ufe2f",
      Yi = "\\u20d0-\\u20ff",
      hn = Jo + Qo + Yi,
      ln = "\\u2700-\\u27bf",
      Cr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Yo = "\\xac\\xb1\\xd7\\xf7",
      Zo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Xo = "\\u2000-\\u206f",
      ea =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      fn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      pn = "\\ufe0e\\ufe0f",
      Ci = Yo + Zo + Xo + ea,
      xs = "['’]",
      Ti = "[" + Qi + "]",
      Ps = "[" + Ci + "]",
      Ni = "[" + hn + "]",
      dn = "\\d+",
      ta = "[" + ln + "]",
      gn = "[" + Cr + "]",
      yn = "[^" + Qi + Ci + dn + ln + Cr + fn + "]",
      Zi = "\\ud83c[\\udffb-\\udfff]",
      ra = "(?:" + Ni + "|" + Zi + ")",
      vn = "[^" + Qi + "]",
      Xi = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      fi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      fr = "[" + fn + "]",
      mn = "\\u200d",
      wn = "(?:" + gn + "|" + yn + ")",
      zr = "(?:" + fr + "|" + yn + ")",
      bn = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?",
      _n = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?",
      En = ra + "?",
      In = "[" + pn + "]?",
      ia = "(?:" + mn + "(?:" + [vn, Xi, fi].join("|") + ")" + In + En + ")*",
      Jr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      xn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Pn = In + En + ia,
      es = "(?:" + [ta, Xi, fi].join("|") + ")" + Pn,
      sa = "(?:" + [vn + Ni + "?", Ni, Xi, fi, Ti].join("|") + ")",
      Ss = RegExp(xs, "g"),
      na = RegExp(Ni, "g"),
      ts = RegExp(Zi + "(?=" + Zi + ")|" + sa + Pn, "g"),
      Sn = RegExp(
        [
          fr + "?" + gn + "+" + bn + "(?=" + [Ps, fr, "$"].join("|") + ")",
          zr + "+" + _n + "(?=" + [Ps, fr + wn, "$"].join("|") + ")",
          fr + "?" + wn + "+" + bn,
          fr + "+" + _n,
          xn,
          Jr,
          dn,
          es,
        ].join("|"),
        "g"
      ),
      Rn = RegExp("[" + mn + Qi + hn + pn + "]"),
      $i = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      An = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      oa = -1,
      Me = {};
    (Me[at] =
      Me[$e] =
      Me[Et] =
      Me[Tt] =
      Me[Ut] =
      Me[Ht] =
      Me[Ft] =
      Me[Jt] =
      Me[tr] =
        !0),
      (Me[Ee] =
        Me[Or] =
        Me[Ae] =
        Me[N] =
        Me[qe] =
        Me[O] =
        Me[I] =
        Me[Z] =
        Me[me] =
        Me[Re] =
        Me[Ie] =
        Me[tt] =
        Me[Te] =
        Me[Ke] =
        Me[Fe] =
          !1);
    var Le = {};
    (Le[Ee] =
      Le[Or] =
      Le[Ae] =
      Le[qe] =
      Le[N] =
      Le[O] =
      Le[at] =
      Le[$e] =
      Le[Et] =
      Le[Tt] =
      Le[Ut] =
      Le[me] =
      Le[Re] =
      Le[Ie] =
      Le[tt] =
      Le[Te] =
      Le[Ke] =
      Le[Ve] =
      Le[Ht] =
      Le[Ft] =
      Le[Jt] =
      Le[tr] =
        !0),
      (Le[I] = Le[Z] = Le[Fe] = !1);
    var v = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      x = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      M = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      V = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      ze = parseFloat,
      de = parseInt,
      We = typeof Js == "object" && Js && Js.Object === Object && Js,
      At = typeof self == "object" && self && self.Object === Object && self,
      Pe = We || At || Function("return this")(),
      Ue = t && !t.nodeType && t,
      vt = Ue && !0 && a && !a.nodeType && a,
      rr = vt && vt.exports === Ue,
      Ot = rr && We.process,
      Je = (function () {
        try {
          var P = vt && vt.require && vt.require("util").types;
          return P || (Ot && Ot.binding && Ot.binding("util"));
        } catch {}
      })(),
      Yt = Je && Je.isArrayBuffer,
      Tr = Je && Je.isDate,
      wr = Je && Je.isMap,
      Ur = Je && Je.isRegExp,
      Rs = Je && Je.isSet,
      Di = Je && Je.isTypedArray;
    function Lt(P, F, T) {
      switch (T.length) {
        case 0:
          return P.call(F);
        case 1:
          return P.call(F, T[0]);
        case 2:
          return P.call(F, T[0], T[1]);
        case 3:
          return P.call(F, T[0], T[1], T[2]);
      }
      return P.apply(F, T);
    }
    function hp(P, F, T, W) {
      for (var fe = -1, Ce = P == null ? 0 : P.length; ++fe < Ce; ) {
        var Nt = P[fe];
        F(W, Nt, T(Nt), P);
      }
      return W;
    }
    function br(P, F) {
      for (
        var T = -1, W = P == null ? 0 : P.length;
        ++T < W && F(P[T], T, P) !== !1;

      );
      return P;
    }
    function lp(P, F) {
      for (var T = P == null ? 0 : P.length; T-- && F(P[T], T, P) !== !1; );
      return P;
    }
    function Wc(P, F) {
      for (var T = -1, W = P == null ? 0 : P.length; ++T < W; )
        if (!F(P[T], T, P)) return !1;
      return !0;
    }
    function pi(P, F) {
      for (
        var T = -1, W = P == null ? 0 : P.length, fe = 0, Ce = [];
        ++T < W;

      ) {
        var Nt = P[T];
        F(Nt, T, P) && (Ce[fe++] = Nt);
      }
      return Ce;
    }
    function On(P, F) {
      var T = P == null ? 0 : P.length;
      return !!T && rs(P, F, 0) > -1;
    }
    function aa(P, F, T) {
      for (var W = -1, fe = P == null ? 0 : P.length; ++W < fe; )
        if (T(F, P[W])) return !0;
      return !1;
    }
    function Ze(P, F) {
      for (var T = -1, W = P == null ? 0 : P.length, fe = Array(W); ++T < W; )
        fe[T] = F(P[T], T, P);
      return fe;
    }
    function di(P, F) {
      for (var T = -1, W = F.length, fe = P.length; ++T < W; ) P[fe + T] = F[T];
      return P;
    }
    function ca(P, F, T, W) {
      var fe = -1,
        Ce = P == null ? 0 : P.length;
      for (W && Ce && (T = P[++fe]); ++fe < Ce; ) T = F(T, P[fe], fe, P);
      return T;
    }
    function fp(P, F, T, W) {
      var fe = P == null ? 0 : P.length;
      for (W && fe && (T = P[--fe]); fe--; ) T = F(T, P[fe], fe, P);
      return T;
    }
    function ua(P, F) {
      for (var T = -1, W = P == null ? 0 : P.length; ++T < W; )
        if (F(P[T], T, P)) return !0;
      return !1;
    }
    var pp = ha("length");
    function dp(P) {
      return P.split("");
    }
    function gp(P) {
      return P.match(Rt) || [];
    }
    function Jc(P, F, T) {
      var W;
      return (
        T(P, function (fe, Ce, Nt) {
          if (F(fe, Ce, Nt)) return (W = Ce), !1;
        }),
        W
      );
    }
    function Cn(P, F, T, W) {
      for (var fe = P.length, Ce = T + (W ? 1 : -1); W ? Ce-- : ++Ce < fe; )
        if (F(P[Ce], Ce, P)) return Ce;
      return -1;
    }
    function rs(P, F, T) {
      return F === F ? Rp(P, F, T) : Cn(P, Qc, T);
    }
    function yp(P, F, T, W) {
      for (var fe = T - 1, Ce = P.length; ++fe < Ce; )
        if (W(P[fe], F)) return fe;
      return -1;
    }
    function Qc(P) {
      return P !== P;
    }
    function Yc(P, F) {
      var T = P == null ? 0 : P.length;
      return T ? fa(P, F) / T : k;
    }
    function ha(P) {
      return function (F) {
        return F == null ? r : F[P];
      };
    }
    function la(P) {
      return function (F) {
        return P == null ? r : P[F];
      };
    }
    function Zc(P, F, T, W, fe) {
      return (
        fe(P, function (Ce, Nt, He) {
          T = W ? ((W = !1), Ce) : F(T, Ce, Nt, He);
        }),
        T
      );
    }
    function vp(P, F) {
      var T = P.length;
      for (P.sort(F); T--; ) P[T] = P[T].value;
      return P;
    }
    function fa(P, F) {
      for (var T, W = -1, fe = P.length; ++W < fe; ) {
        var Ce = F(P[W]);
        Ce !== r && (T = T === r ? Ce : T + Ce);
      }
      return T;
    }
    function pa(P, F) {
      for (var T = -1, W = Array(P); ++T < P; ) W[T] = F(T);
      return W;
    }
    function mp(P, F) {
      return Ze(F, function (T) {
        return [T, P[T]];
      });
    }
    function Xc(P) {
      return P && P.slice(0, iu(P) + 1).replace(ft, "");
    }
    function pr(P) {
      return function (F) {
        return P(F);
      };
    }
    function da(P, F) {
      return Ze(F, function (T) {
        return P[T];
      });
    }
    function As(P, F) {
      return P.has(F);
    }
    function eu(P, F) {
      for (var T = -1, W = P.length; ++T < W && rs(F, P[T], 0) > -1; );
      return T;
    }
    function tu(P, F) {
      for (var T = P.length; T-- && rs(F, P[T], 0) > -1; );
      return T;
    }
    function wp(P, F) {
      for (var T = P.length, W = 0; T--; ) P[T] === F && ++W;
      return W;
    }
    var bp = la(v),
      _p = la(x);
    function Ep(P) {
      return "\\" + V[P];
    }
    function Ip(P, F) {
      return P == null ? r : P[F];
    }
    function is(P) {
      return Rn.test(P);
    }
    function xp(P) {
      return $i.test(P);
    }
    function Pp(P) {
      for (var F, T = []; !(F = P.next()).done; ) T.push(F.value);
      return T;
    }
    function ga(P) {
      var F = -1,
        T = Array(P.size);
      return (
        P.forEach(function (W, fe) {
          T[++F] = [fe, W];
        }),
        T
      );
    }
    function ru(P, F) {
      return function (T) {
        return P(F(T));
      };
    }
    function gi(P, F) {
      for (var T = -1, W = P.length, fe = 0, Ce = []; ++T < W; ) {
        var Nt = P[T];
        (Nt === F || Nt === E) && ((P[T] = E), (Ce[fe++] = T));
      }
      return Ce;
    }
    function Tn(P) {
      var F = -1,
        T = Array(P.size);
      return (
        P.forEach(function (W) {
          T[++F] = W;
        }),
        T
      );
    }
    function Sp(P) {
      var F = -1,
        T = Array(P.size);
      return (
        P.forEach(function (W) {
          T[++F] = [W, W];
        }),
        T
      );
    }
    function Rp(P, F, T) {
      for (var W = T - 1, fe = P.length; ++W < fe; ) if (P[W] === F) return W;
      return -1;
    }
    function Ap(P, F, T) {
      for (var W = T + 1; W--; ) if (P[W] === F) return W;
      return W;
    }
    function ss(P) {
      return is(P) ? Cp(P) : pp(P);
    }
    function Nr(P) {
      return is(P) ? Tp(P) : dp(P);
    }
    function iu(P) {
      for (var F = P.length; F-- && yt.test(P.charAt(F)); );
      return F;
    }
    var Op = la(M);
    function Cp(P) {
      for (var F = (ts.lastIndex = 0); ts.test(P); ) ++F;
      return F;
    }
    function Tp(P) {
      return P.match(ts) || [];
    }
    function Np(P) {
      return P.match(Sn) || [];
    }
    var $p = function P(F) {
        F = F == null ? Pe : ns.defaults(Pe.Object(), F, ns.pick(Pe, An));
        var T = F.Array,
          W = F.Date,
          fe = F.Error,
          Ce = F.Function,
          Nt = F.Math,
          He = F.Object,
          ya = F.RegExp,
          Dp = F.String,
          _r = F.TypeError,
          Nn = T.prototype,
          Fp = Ce.prototype,
          os = He.prototype,
          $n = F["__core-js_shared__"],
          Dn = Fp.toString,
          De = os.hasOwnProperty,
          Lp = 0,
          su = (function () {
            var e = /[^.]+$/.exec(($n && $n.keys && $n.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          Fn = os.toString,
          jp = Dn.call(He),
          qp = Pe._,
          Mp = ya(
            "^" +
              Dn.call(De)
                .replace(lt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ln = rr ? F.Buffer : r,
          yi = F.Symbol,
          jn = F.Uint8Array,
          nu = Ln ? Ln.allocUnsafe : r,
          qn = ru(He.getPrototypeOf, He),
          ou = He.create,
          au = os.propertyIsEnumerable,
          Mn = Nn.splice,
          cu = yi ? yi.isConcatSpreadable : r,
          Os = yi ? yi.iterator : r,
          Fi = yi ? yi.toStringTag : r,
          zn = (function () {
            try {
              var e = zi(He, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          zp = F.clearTimeout !== Pe.clearTimeout && F.clearTimeout,
          Up = W && W.now !== Pe.Date.now && W.now,
          Hp = F.setTimeout !== Pe.setTimeout && F.setTimeout,
          Un = Nt.ceil,
          Hn = Nt.floor,
          va = He.getOwnPropertySymbols,
          kp = Ln ? Ln.isBuffer : r,
          uu = F.isFinite,
          Bp = Nn.join,
          Kp = ru(He.keys, He),
          $t = Nt.max,
          Kt = Nt.min,
          Vp = W.now,
          Gp = F.parseInt,
          hu = Nt.random,
          Wp = Nn.reverse,
          ma = zi(F, "DataView"),
          Cs = zi(F, "Map"),
          wa = zi(F, "Promise"),
          as = zi(F, "Set"),
          Ts = zi(F, "WeakMap"),
          Ns = zi(He, "create"),
          kn = Ts && new Ts(),
          cs = {},
          Jp = Ui(ma),
          Qp = Ui(Cs),
          Yp = Ui(wa),
          Zp = Ui(as),
          Xp = Ui(Ts),
          Bn = yi ? yi.prototype : r,
          $s = Bn ? Bn.valueOf : r,
          lu = Bn ? Bn.toString : r;
        function p(e) {
          if (dt(e) && !ge(e) && !(e instanceof xe)) {
            if (e instanceof Er) return e;
            if (De.call(e, "__wrapped__")) return fh(e);
          }
          return new Er(e);
        }
        var us = (function () {
          function e() {}
          return function (i) {
            if (!st(i)) return {};
            if (ou) return ou(i);
            e.prototype = i;
            var n = new e();
            return (e.prototype = r), n;
          };
        })();
        function Kn() {}
        function Er(e, i) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!i),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (p.templateSettings = {
          escape: ut,
          evaluate: ht,
          interpolate: it,
          variable: "",
          imports: { _: p },
        }),
          (p.prototype = Kn.prototype),
          (p.prototype.constructor = p),
          (Er.prototype = us(Kn.prototype)),
          (Er.prototype.constructor = Er);
        function xe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = B),
            (this.__views__ = []);
        }
        function ed() {
          var e = new xe(this.__wrapped__);
          return (
            (e.__actions__ = ir(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = ir(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = ir(this.__views__)),
            e
          );
        }
        function td() {
          if (this.__filtered__) {
            var e = new xe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function rd() {
          var e = this.__wrapped__.value(),
            i = this.__dir__,
            n = ge(e),
            c = i < 0,
            l = n ? e.length : 0,
            d = dg(0, l, this.__views__),
            w = d.start,
            _ = d.end,
            R = _ - w,
            j = c ? _ : w - 1,
            q = this.__iteratees__,
            z = q.length,
            K = 0,
            X = Kt(R, this.__takeCount__);
          if (!n || (!c && l == R && X == R)) return Fu(e, this.__actions__);
          var se = [];
          e: for (; R-- && K < X; ) {
            j += i;
            for (var we = -1, ne = e[j]; ++we < z; ) {
              var _e = q[we],
                Se = _e.iteratee,
                yr = _e.type,
                er = Se(ne);
              if (yr == S) ne = er;
              else if (!er) {
                if (yr == b) continue e;
                break e;
              }
            }
            se[K++] = ne;
          }
          return se;
        }
        (xe.prototype = us(Kn.prototype)), (xe.prototype.constructor = xe);
        function Li(e) {
          var i = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++i < n; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function id() {
          (this.__data__ = Ns ? Ns(null) : {}), (this.size = 0);
        }
        function sd(e) {
          var i = this.has(e) && delete this.__data__[e];
          return (this.size -= i ? 1 : 0), i;
        }
        function nd(e) {
          var i = this.__data__;
          if (Ns) {
            var n = i[e];
            return n === m ? r : n;
          }
          return De.call(i, e) ? i[e] : r;
        }
        function od(e) {
          var i = this.__data__;
          return Ns ? i[e] !== r : De.call(i, e);
        }
        function ad(e, i) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = Ns && i === r ? m : i),
            this
          );
        }
        (Li.prototype.clear = id),
          (Li.prototype.delete = sd),
          (Li.prototype.get = nd),
          (Li.prototype.has = od),
          (Li.prototype.set = ad);
        function Qr(e) {
          var i = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++i < n; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function cd() {
          (this.__data__ = []), (this.size = 0);
        }
        function ud(e) {
          var i = this.__data__,
            n = Vn(i, e);
          if (n < 0) return !1;
          var c = i.length - 1;
          return n == c ? i.pop() : Mn.call(i, n, 1), --this.size, !0;
        }
        function hd(e) {
          var i = this.__data__,
            n = Vn(i, e);
          return n < 0 ? r : i[n][1];
        }
        function ld(e) {
          return Vn(this.__data__, e) > -1;
        }
        function fd(e, i) {
          var n = this.__data__,
            c = Vn(n, e);
          return c < 0 ? (++this.size, n.push([e, i])) : (n[c][1] = i), this;
        }
        (Qr.prototype.clear = cd),
          (Qr.prototype.delete = ud),
          (Qr.prototype.get = hd),
          (Qr.prototype.has = ld),
          (Qr.prototype.set = fd);
        function Yr(e) {
          var i = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++i < n; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function pd() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Li(),
              map: new (Cs || Qr)(),
              string: new Li(),
            });
        }
        function dd(e) {
          var i = so(this, e).delete(e);
          return (this.size -= i ? 1 : 0), i;
        }
        function gd(e) {
          return so(this, e).get(e);
        }
        function yd(e) {
          return so(this, e).has(e);
        }
        function vd(e, i) {
          var n = so(this, e),
            c = n.size;
          return n.set(e, i), (this.size += n.size == c ? 0 : 1), this;
        }
        (Yr.prototype.clear = pd),
          (Yr.prototype.delete = dd),
          (Yr.prototype.get = gd),
          (Yr.prototype.has = yd),
          (Yr.prototype.set = vd);
        function ji(e) {
          var i = -1,
            n = e == null ? 0 : e.length;
          for (this.__data__ = new Yr(); ++i < n; ) this.add(e[i]);
        }
        function md(e) {
          return this.__data__.set(e, m), this;
        }
        function wd(e) {
          return this.__data__.has(e);
        }
        (ji.prototype.add = ji.prototype.push = md), (ji.prototype.has = wd);
        function $r(e) {
          var i = (this.__data__ = new Qr(e));
          this.size = i.size;
        }
        function bd() {
          (this.__data__ = new Qr()), (this.size = 0);
        }
        function _d(e) {
          var i = this.__data__,
            n = i.delete(e);
          return (this.size = i.size), n;
        }
        function Ed(e) {
          return this.__data__.get(e);
        }
        function Id(e) {
          return this.__data__.has(e);
        }
        function xd(e, i) {
          var n = this.__data__;
          if (n instanceof Qr) {
            var c = n.__data__;
            if (!Cs || c.length < o - 1)
              return c.push([e, i]), (this.size = ++n.size), this;
            n = this.__data__ = new Yr(c);
          }
          return n.set(e, i), (this.size = n.size), this;
        }
        ($r.prototype.clear = bd),
          ($r.prototype.delete = _d),
          ($r.prototype.get = Ed),
          ($r.prototype.has = Id),
          ($r.prototype.set = xd);
        function fu(e, i) {
          var n = ge(e),
            c = !n && Hi(e),
            l = !n && !c && _i(e),
            d = !n && !c && !l && ps(e),
            w = n || c || l || d,
            _ = w ? pa(e.length, Dp) : [],
            R = _.length;
          for (var j in e)
            (i || De.call(e, j)) &&
              !(
                w &&
                (j == "length" ||
                  (l && (j == "offset" || j == "parent")) ||
                  (d &&
                    (j == "buffer" ||
                      j == "byteLength" ||
                      j == "byteOffset")) ||
                  ti(j, R))
              ) &&
              _.push(j);
          return _;
        }
        function pu(e) {
          var i = e.length;
          return i ? e[Ca(0, i - 1)] : r;
        }
        function Pd(e, i) {
          return no(ir(e), qi(i, 0, e.length));
        }
        function Sd(e) {
          return no(ir(e));
        }
        function ba(e, i, n) {
          ((n !== r && !Dr(e[i], n)) || (n === r && !(i in e))) && Zr(e, i, n);
        }
        function Ds(e, i, n) {
          var c = e[i];
          (!(De.call(e, i) && Dr(c, n)) || (n === r && !(i in e))) &&
            Zr(e, i, n);
        }
        function Vn(e, i) {
          for (var n = e.length; n--; ) if (Dr(e[n][0], i)) return n;
          return -1;
        }
        function Rd(e, i, n, c) {
          return (
            vi(e, function (l, d, w) {
              i(c, l, n(l), w);
            }),
            c
          );
        }
        function du(e, i) {
          return e && kr(i, jt(i), e);
        }
        function Ad(e, i) {
          return e && kr(i, nr(i), e);
        }
        function Zr(e, i, n) {
          i == "__proto__" && zn
            ? zn(e, i, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[i] = n);
        }
        function _a(e, i) {
          for (var n = -1, c = i.length, l = T(c), d = e == null; ++n < c; )
            l[n] = d ? r : tc(e, i[n]);
          return l;
        }
        function qi(e, i, n) {
          return (
            e === e &&
              (n !== r && (e = e <= n ? e : n),
              i !== r && (e = e >= i ? e : i)),
            e
          );
        }
        function Ir(e, i, n, c, l, d) {
          var w,
            _ = i & A,
            R = i & $,
            j = i & L;
          if ((n && (w = l ? n(e, c, l, d) : n(e)), w !== r)) return w;
          if (!st(e)) return e;
          var q = ge(e);
          if (q) {
            if (((w = yg(e)), !_)) return ir(e, w);
          } else {
            var z = Vt(e),
              K = z == Z || z == ue;
            if (_i(e)) return qu(e, _);
            if (z == Ie || z == Ee || (K && !l)) {
              if (((w = R || K ? {} : ih(e)), !_))
                return R ? ng(e, Ad(w, e)) : sg(e, du(w, e));
            } else {
              if (!Le[z]) return l ? e : {};
              w = vg(e, z, _);
            }
          }
          d || (d = new $r());
          var X = d.get(e);
          if (X) return X;
          d.set(e, w),
            Nh(e)
              ? e.forEach(function (ne) {
                  w.add(Ir(ne, i, n, ne, e, d));
                })
              : Ch(e) &&
                e.forEach(function (ne, _e) {
                  w.set(_e, Ir(ne, i, n, _e, e, d));
                });
          var se = j ? (R ? Ua : za) : R ? nr : jt,
            we = q ? r : se(e);
          return (
            br(we || e, function (ne, _e) {
              we && ((_e = ne), (ne = e[_e])),
                Ds(w, _e, Ir(ne, i, n, _e, e, d));
            }),
            w
          );
        }
        function Od(e) {
          var i = jt(e);
          return function (n) {
            return gu(n, e, i);
          };
        }
        function gu(e, i, n) {
          var c = n.length;
          if (e == null) return !c;
          for (e = He(e); c--; ) {
            var l = n[c],
              d = i[l],
              w = e[l];
            if ((w === r && !(l in e)) || !d(w)) return !1;
          }
          return !0;
        }
        function yu(e, i, n) {
          if (typeof e != "function") throw new _r(f);
          return Us(function () {
            e.apply(r, n);
          }, i);
        }
        function Fs(e, i, n, c) {
          var l = -1,
            d = On,
            w = !0,
            _ = e.length,
            R = [],
            j = i.length;
          if (!_) return R;
          n && (i = Ze(i, pr(n))),
            c
              ? ((d = aa), (w = !1))
              : i.length >= o && ((d = As), (w = !1), (i = new ji(i)));
          e: for (; ++l < _; ) {
            var q = e[l],
              z = n == null ? q : n(q);
            if (((q = c || q !== 0 ? q : 0), w && z === z)) {
              for (var K = j; K--; ) if (i[K] === z) continue e;
              R.push(q);
            } else d(i, z, c) || R.push(q);
          }
          return R;
        }
        var vi = ku(Hr),
          vu = ku(Ia, !0);
        function Cd(e, i) {
          var n = !0;
          return (
            vi(e, function (c, l, d) {
              return (n = !!i(c, l, d)), n;
            }),
            n
          );
        }
        function Gn(e, i, n) {
          for (var c = -1, l = e.length; ++c < l; ) {
            var d = e[c],
              w = i(d);
            if (w != null && (_ === r ? w === w && !gr(w) : n(w, _)))
              var _ = w,
                R = d;
          }
          return R;
        }
        function Td(e, i, n, c) {
          var l = e.length;
          for (
            n = ye(n),
              n < 0 && (n = -n > l ? 0 : l + n),
              c = c === r || c > l ? l : ye(c),
              c < 0 && (c += l),
              c = n > c ? 0 : Dh(c);
            n < c;

          )
            e[n++] = i;
          return e;
        }
        function mu(e, i) {
          var n = [];
          return (
            vi(e, function (c, l, d) {
              i(c, l, d) && n.push(c);
            }),
            n
          );
        }
        function kt(e, i, n, c, l) {
          var d = -1,
            w = e.length;
          for (n || (n = wg), l || (l = []); ++d < w; ) {
            var _ = e[d];
            i > 0 && n(_)
              ? i > 1
                ? kt(_, i - 1, n, c, l)
                : di(l, _)
              : c || (l[l.length] = _);
          }
          return l;
        }
        var Ea = Bu(),
          wu = Bu(!0);
        function Hr(e, i) {
          return e && Ea(e, i, jt);
        }
        function Ia(e, i) {
          return e && wu(e, i, jt);
        }
        function Wn(e, i) {
          return pi(i, function (n) {
            return ri(e[n]);
          });
        }
        function Mi(e, i) {
          i = wi(i, e);
          for (var n = 0, c = i.length; e != null && n < c; ) e = e[Br(i[n++])];
          return n && n == c ? e : r;
        }
        function bu(e, i, n) {
          var c = i(e);
          return ge(e) ? c : di(c, n(e));
        }
        function Zt(e) {
          return e == null
            ? e === r
              ? rt
              : Oe
            : Fi && Fi in He(e)
            ? pg(e)
            : Sg(e);
        }
        function xa(e, i) {
          return e > i;
        }
        function Nd(e, i) {
          return e != null && De.call(e, i);
        }
        function $d(e, i) {
          return e != null && i in He(e);
        }
        function Dd(e, i, n) {
          return e >= Kt(i, n) && e < $t(i, n);
        }
        function Pa(e, i, n) {
          for (
            var c = n ? aa : On,
              l = e[0].length,
              d = e.length,
              w = d,
              _ = T(d),
              R = 1 / 0,
              j = [];
            w--;

          ) {
            var q = e[w];
            w && i && (q = Ze(q, pr(i))),
              (R = Kt(q.length, R)),
              (_[w] =
                !n && (i || (l >= 120 && q.length >= 120))
                  ? new ji(w && q)
                  : r);
          }
          q = e[0];
          var z = -1,
            K = _[0];
          e: for (; ++z < l && j.length < R; ) {
            var X = q[z],
              se = i ? i(X) : X;
            if (((X = n || X !== 0 ? X : 0), !(K ? As(K, se) : c(j, se, n)))) {
              for (w = d; --w; ) {
                var we = _[w];
                if (!(we ? As(we, se) : c(e[w], se, n))) continue e;
              }
              K && K.push(se), j.push(X);
            }
          }
          return j;
        }
        function Fd(e, i, n, c) {
          return (
            Hr(e, function (l, d, w) {
              i(c, n(l), d, w);
            }),
            c
          );
        }
        function Ls(e, i, n) {
          (i = wi(i, e)), (e = ah(e, i));
          var c = e == null ? e : e[Br(Pr(i))];
          return c == null ? r : Lt(c, e, n);
        }
        function _u(e) {
          return dt(e) && Zt(e) == Ee;
        }
        function Ld(e) {
          return dt(e) && Zt(e) == Ae;
        }
        function jd(e) {
          return dt(e) && Zt(e) == O;
        }
        function js(e, i, n, c, l) {
          return e === i
            ? !0
            : e == null || i == null || (!dt(e) && !dt(i))
            ? e !== e && i !== i
            : qd(e, i, n, c, js, l);
        }
        function qd(e, i, n, c, l, d) {
          var w = ge(e),
            _ = ge(i),
            R = w ? Or : Vt(e),
            j = _ ? Or : Vt(i);
          (R = R == Ee ? Ie : R), (j = j == Ee ? Ie : j);
          var q = R == Ie,
            z = j == Ie,
            K = R == j;
          if (K && _i(e)) {
            if (!_i(i)) return !1;
            (w = !0), (q = !1);
          }
          if (K && !q)
            return (
              d || (d = new $r()),
              w || ps(e) ? eh(e, i, n, c, l, d) : lg(e, i, R, n, c, l, d)
            );
          if (!(n & C)) {
            var X = q && De.call(e, "__wrapped__"),
              se = z && De.call(i, "__wrapped__");
            if (X || se) {
              var we = X ? e.value() : e,
                ne = se ? i.value() : i;
              return d || (d = new $r()), l(we, ne, n, c, d);
            }
          }
          return K ? (d || (d = new $r()), fg(e, i, n, c, l, d)) : !1;
        }
        function Md(e) {
          return dt(e) && Vt(e) == me;
        }
        function Sa(e, i, n, c) {
          var l = n.length,
            d = l,
            w = !c;
          if (e == null) return !d;
          for (e = He(e); l--; ) {
            var _ = n[l];
            if (w && _[2] ? _[1] !== e[_[0]] : !(_[0] in e)) return !1;
          }
          for (; ++l < d; ) {
            _ = n[l];
            var R = _[0],
              j = e[R],
              q = _[1];
            if (w && _[2]) {
              if (j === r && !(R in e)) return !1;
            } else {
              var z = new $r();
              if (c) var K = c(j, q, R, e, i, z);
              if (!(K === r ? js(q, j, C | Y, c, z) : K)) return !1;
            }
          }
          return !0;
        }
        function Eu(e) {
          if (!st(e) || _g(e)) return !1;
          var i = ri(e) ? Mp : Ko;
          return i.test(Ui(e));
        }
        function zd(e) {
          return dt(e) && Zt(e) == tt;
        }
        function Ud(e) {
          return dt(e) && Vt(e) == Te;
        }
        function Hd(e) {
          return dt(e) && lo(e.length) && !!Me[Zt(e)];
        }
        function Iu(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? or
            : typeof e == "object"
            ? ge(e)
              ? Su(e[0], e[1])
              : Pu(e)
            : Kh(e);
        }
        function Ra(e) {
          if (!zs(e)) return Kp(e);
          var i = [];
          for (var n in He(e)) De.call(e, n) && n != "constructor" && i.push(n);
          return i;
        }
        function kd(e) {
          if (!st(e)) return Pg(e);
          var i = zs(e),
            n = [];
          for (var c in e)
            (c == "constructor" && (i || !De.call(e, c))) || n.push(c);
          return n;
        }
        function Aa(e, i) {
          return e < i;
        }
        function xu(e, i) {
          var n = -1,
            c = sr(e) ? T(e.length) : [];
          return (
            vi(e, function (l, d, w) {
              c[++n] = i(l, d, w);
            }),
            c
          );
        }
        function Pu(e) {
          var i = ka(e);
          return i.length == 1 && i[0][2]
            ? nh(i[0][0], i[0][1])
            : function (n) {
                return n === e || Sa(n, e, i);
              };
        }
        function Su(e, i) {
          return Ka(e) && sh(i)
            ? nh(Br(e), i)
            : function (n) {
                var c = tc(n, e);
                return c === r && c === i ? rc(n, e) : js(i, c, C | Y);
              };
        }
        function Jn(e, i, n, c, l) {
          e !== i &&
            Ea(
              i,
              function (d, w) {
                if ((l || (l = new $r()), st(d))) Bd(e, i, w, n, Jn, c, l);
                else {
                  var _ = c ? c(Ga(e, w), d, w + "", e, i, l) : r;
                  _ === r && (_ = d), ba(e, w, _);
                }
              },
              nr
            );
        }
        function Bd(e, i, n, c, l, d, w) {
          var _ = Ga(e, n),
            R = Ga(i, n),
            j = w.get(R);
          if (j) {
            ba(e, n, j);
            return;
          }
          var q = d ? d(_, R, n + "", e, i, w) : r,
            z = q === r;
          if (z) {
            var K = ge(R),
              X = !K && _i(R),
              se = !K && !X && ps(R);
            (q = R),
              K || X || se
                ? ge(_)
                  ? (q = _)
                  : mt(_)
                  ? (q = ir(_))
                  : X
                  ? ((z = !1), (q = qu(R, !0)))
                  : se
                  ? ((z = !1), (q = Mu(R, !0)))
                  : (q = [])
                : Hs(R) || Hi(R)
                ? ((q = _),
                  Hi(_) ? (q = Fh(_)) : (!st(_) || ri(_)) && (q = ih(R)))
                : (z = !1);
          }
          z && (w.set(R, q), l(q, R, c, d, w), w.delete(R)), ba(e, n, q);
        }
        function Ru(e, i) {
          var n = e.length;
          if (n) return (i += i < 0 ? n : 0), ti(i, n) ? e[i] : r;
        }
        function Au(e, i, n) {
          i.length
            ? (i = Ze(i, function (d) {
                return ge(d)
                  ? function (w) {
                      return Mi(w, d.length === 1 ? d[0] : d);
                    }
                  : d;
              }))
            : (i = [or]);
          var c = -1;
          i = Ze(i, pr(ie()));
          var l = xu(e, function (d, w, _) {
            var R = Ze(i, function (j) {
              return j(d);
            });
            return { criteria: R, index: ++c, value: d };
          });
          return vp(l, function (d, w) {
            return ig(d, w, n);
          });
        }
        function Kd(e, i) {
          return Ou(e, i, function (n, c) {
            return rc(e, c);
          });
        }
        function Ou(e, i, n) {
          for (var c = -1, l = i.length, d = {}; ++c < l; ) {
            var w = i[c],
              _ = Mi(e, w);
            n(_, w) && qs(d, wi(w, e), _);
          }
          return d;
        }
        function Vd(e) {
          return function (i) {
            return Mi(i, e);
          };
        }
        function Oa(e, i, n, c) {
          var l = c ? yp : rs,
            d = -1,
            w = i.length,
            _ = e;
          for (e === i && (i = ir(i)), n && (_ = Ze(e, pr(n))); ++d < w; )
            for (
              var R = 0, j = i[d], q = n ? n(j) : j;
              (R = l(_, q, R, c)) > -1;

            )
              _ !== e && Mn.call(_, R, 1), Mn.call(e, R, 1);
          return e;
        }
        function Cu(e, i) {
          for (var n = e ? i.length : 0, c = n - 1; n--; ) {
            var l = i[n];
            if (n == c || l !== d) {
              var d = l;
              ti(l) ? Mn.call(e, l, 1) : $a(e, l);
            }
          }
          return e;
        }
        function Ca(e, i) {
          return e + Hn(hu() * (i - e + 1));
        }
        function Gd(e, i, n, c) {
          for (var l = -1, d = $t(Un((i - e) / (n || 1)), 0), w = T(d); d--; )
            (w[c ? d : ++l] = e), (e += n);
          return w;
        }
        function Ta(e, i) {
          var n = "";
          if (!e || i < 1 || i > H) return n;
          do i % 2 && (n += e), (i = Hn(i / 2)), i && (e += e);
          while (i);
          return n;
        }
        function be(e, i) {
          return Wa(oh(e, i, or), e + "");
        }
        function Wd(e) {
          return pu(ds(e));
        }
        function Jd(e, i) {
          var n = ds(e);
          return no(n, qi(i, 0, n.length));
        }
        function qs(e, i, n, c) {
          if (!st(e)) return e;
          i = wi(i, e);
          for (
            var l = -1, d = i.length, w = d - 1, _ = e;
            _ != null && ++l < d;

          ) {
            var R = Br(i[l]),
              j = n;
            if (R === "__proto__" || R === "constructor" || R === "prototype")
              return e;
            if (l != w) {
              var q = _[R];
              (j = c ? c(q, R, _) : r),
                j === r && (j = st(q) ? q : ti(i[l + 1]) ? [] : {});
            }
            Ds(_, R, j), (_ = _[R]);
          }
          return e;
        }
        var Tu = kn
            ? function (e, i) {
                return kn.set(e, i), e;
              }
            : or,
          Qd = zn
            ? function (e, i) {
                return zn(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: sc(i),
                  writable: !0,
                });
              }
            : or;
        function Yd(e) {
          return no(ds(e));
        }
        function xr(e, i, n) {
          var c = -1,
            l = e.length;
          i < 0 && (i = -i > l ? 0 : l + i),
            (n = n > l ? l : n),
            n < 0 && (n += l),
            (l = i > n ? 0 : (n - i) >>> 0),
            (i >>>= 0);
          for (var d = T(l); ++c < l; ) d[c] = e[c + i];
          return d;
        }
        function Zd(e, i) {
          var n;
          return (
            vi(e, function (c, l, d) {
              return (n = i(c, l, d)), !n;
            }),
            !!n
          );
        }
        function Qn(e, i, n) {
          var c = 0,
            l = e == null ? c : e.length;
          if (typeof i == "number" && i === i && l <= ot) {
            for (; c < l; ) {
              var d = (c + l) >>> 1,
                w = e[d];
              w !== null && !gr(w) && (n ? w <= i : w < i)
                ? (c = d + 1)
                : (l = d);
            }
            return l;
          }
          return Na(e, i, or, n);
        }
        function Na(e, i, n, c) {
          var l = 0,
            d = e == null ? 0 : e.length;
          if (d === 0) return 0;
          i = n(i);
          for (
            var w = i !== i, _ = i === null, R = gr(i), j = i === r;
            l < d;

          ) {
            var q = Hn((l + d) / 2),
              z = n(e[q]),
              K = z !== r,
              X = z === null,
              se = z === z,
              we = gr(z);
            if (w) var ne = c || se;
            else
              j
                ? (ne = se && (c || K))
                : _
                ? (ne = se && K && (c || !X))
                : R
                ? (ne = se && K && !X && (c || !we))
                : X || we
                ? (ne = !1)
                : (ne = c ? z <= i : z < i);
            ne ? (l = q + 1) : (d = q);
          }
          return Kt(d, et);
        }
        function Nu(e, i) {
          for (var n = -1, c = e.length, l = 0, d = []; ++n < c; ) {
            var w = e[n],
              _ = i ? i(w) : w;
            if (!n || !Dr(_, R)) {
              var R = _;
              d[l++] = w === 0 ? 0 : w;
            }
          }
          return d;
        }
        function $u(e) {
          return typeof e == "number" ? e : gr(e) ? k : +e;
        }
        function dr(e) {
          if (typeof e == "string") return e;
          if (ge(e)) return Ze(e, dr) + "";
          if (gr(e)) return lu ? lu.call(e) : "";
          var i = e + "";
          return i == "0" && 1 / e == -le ? "-0" : i;
        }
        function mi(e, i, n) {
          var c = -1,
            l = On,
            d = e.length,
            w = !0,
            _ = [],
            R = _;
          if (n) (w = !1), (l = aa);
          else if (d >= o) {
            var j = i ? null : ug(e);
            if (j) return Tn(j);
            (w = !1), (l = As), (R = new ji());
          } else R = i ? [] : _;
          e: for (; ++c < d; ) {
            var q = e[c],
              z = i ? i(q) : q;
            if (((q = n || q !== 0 ? q : 0), w && z === z)) {
              for (var K = R.length; K--; ) if (R[K] === z) continue e;
              i && R.push(z), _.push(q);
            } else l(R, z, n) || (R !== _ && R.push(z), _.push(q));
          }
          return _;
        }
        function $a(e, i) {
          return (
            (i = wi(i, e)), (e = ah(e, i)), e == null || delete e[Br(Pr(i))]
          );
        }
        function Du(e, i, n, c) {
          return qs(e, i, n(Mi(e, i)), c);
        }
        function Yn(e, i, n, c) {
          for (
            var l = e.length, d = c ? l : -1;
            (c ? d-- : ++d < l) && i(e[d], d, e);

          );
          return n
            ? xr(e, c ? 0 : d, c ? d + 1 : l)
            : xr(e, c ? d + 1 : 0, c ? l : d);
        }
        function Fu(e, i) {
          var n = e;
          return (
            n instanceof xe && (n = n.value()),
            ca(
              i,
              function (c, l) {
                return l.func.apply(l.thisArg, di([c], l.args));
              },
              n
            )
          );
        }
        function Da(e, i, n) {
          var c = e.length;
          if (c < 2) return c ? mi(e[0]) : [];
          for (var l = -1, d = T(c); ++l < c; )
            for (var w = e[l], _ = -1; ++_ < c; )
              _ != l && (d[l] = Fs(d[l] || w, e[_], i, n));
          return mi(kt(d, 1), i, n);
        }
        function Lu(e, i, n) {
          for (var c = -1, l = e.length, d = i.length, w = {}; ++c < l; ) {
            var _ = c < d ? i[c] : r;
            n(w, e[c], _);
          }
          return w;
        }
        function Fa(e) {
          return mt(e) ? e : [];
        }
        function La(e) {
          return typeof e == "function" ? e : or;
        }
        function wi(e, i) {
          return ge(e) ? e : Ka(e, i) ? [e] : lh(Ne(e));
        }
        var Xd = be;
        function bi(e, i, n) {
          var c = e.length;
          return (n = n === r ? c : n), !i && n >= c ? e : xr(e, i, n);
        }
        var ju =
          zp ||
          function (e) {
            return Pe.clearTimeout(e);
          };
        function qu(e, i) {
          if (i) return e.slice();
          var n = e.length,
            c = nu ? nu(n) : new e.constructor(n);
          return e.copy(c), c;
        }
        function ja(e) {
          var i = new e.constructor(e.byteLength);
          return new jn(i).set(new jn(e)), i;
        }
        function eg(e, i) {
          var n = i ? ja(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function tg(e) {
          var i = new e.constructor(e.source, mr.exec(e));
          return (i.lastIndex = e.lastIndex), i;
        }
        function rg(e) {
          return $s ? He($s.call(e)) : {};
        }
        function Mu(e, i) {
          var n = i ? ja(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function zu(e, i) {
          if (e !== i) {
            var n = e !== r,
              c = e === null,
              l = e === e,
              d = gr(e),
              w = i !== r,
              _ = i === null,
              R = i === i,
              j = gr(i);
            if (
              (!_ && !j && !d && e > i) ||
              (d && w && R && !_ && !j) ||
              (c && w && R) ||
              (!n && R) ||
              !l
            )
              return 1;
            if (
              (!c && !d && !j && e < i) ||
              (j && n && l && !c && !d) ||
              (_ && n && l) ||
              (!w && l) ||
              !R
            )
              return -1;
          }
          return 0;
        }
        function ig(e, i, n) {
          for (
            var c = -1,
              l = e.criteria,
              d = i.criteria,
              w = l.length,
              _ = n.length;
            ++c < w;

          ) {
            var R = zu(l[c], d[c]);
            if (R) {
              if (c >= _) return R;
              var j = n[c];
              return R * (j == "desc" ? -1 : 1);
            }
          }
          return e.index - i.index;
        }
        function Uu(e, i, n, c) {
          for (
            var l = -1,
              d = e.length,
              w = n.length,
              _ = -1,
              R = i.length,
              j = $t(d - w, 0),
              q = T(R + j),
              z = !c;
            ++_ < R;

          )
            q[_] = i[_];
          for (; ++l < w; ) (z || l < d) && (q[n[l]] = e[l]);
          for (; j--; ) q[_++] = e[l++];
          return q;
        }
        function Hu(e, i, n, c) {
          for (
            var l = -1,
              d = e.length,
              w = -1,
              _ = n.length,
              R = -1,
              j = i.length,
              q = $t(d - _, 0),
              z = T(q + j),
              K = !c;
            ++l < q;

          )
            z[l] = e[l];
          for (var X = l; ++R < j; ) z[X + R] = i[R];
          for (; ++w < _; ) (K || l < d) && (z[X + n[w]] = e[l++]);
          return z;
        }
        function ir(e, i) {
          var n = -1,
            c = e.length;
          for (i || (i = T(c)); ++n < c; ) i[n] = e[n];
          return i;
        }
        function kr(e, i, n, c) {
          var l = !n;
          n || (n = {});
          for (var d = -1, w = i.length; ++d < w; ) {
            var _ = i[d],
              R = c ? c(n[_], e[_], _, n, e) : r;
            R === r && (R = e[_]), l ? Zr(n, _, R) : Ds(n, _, R);
          }
          return n;
        }
        function sg(e, i) {
          return kr(e, Ba(e), i);
        }
        function ng(e, i) {
          return kr(e, th(e), i);
        }
        function Zn(e, i) {
          return function (n, c) {
            var l = ge(n) ? hp : Rd,
              d = i ? i() : {};
            return l(n, e, ie(c, 2), d);
          };
        }
        function hs(e) {
          return be(function (i, n) {
            var c = -1,
              l = n.length,
              d = l > 1 ? n[l - 1] : r,
              w = l > 2 ? n[2] : r;
            for (
              d = e.length > 3 && typeof d == "function" ? (l--, d) : r,
                w && Xt(n[0], n[1], w) && ((d = l < 3 ? r : d), (l = 1)),
                i = He(i);
              ++c < l;

            ) {
              var _ = n[c];
              _ && e(i, _, c, d);
            }
            return i;
          });
        }
        function ku(e, i) {
          return function (n, c) {
            if (n == null) return n;
            if (!sr(n)) return e(n, c);
            for (
              var l = n.length, d = i ? l : -1, w = He(n);
              (i ? d-- : ++d < l) && c(w[d], d, w) !== !1;

            );
            return n;
          };
        }
        function Bu(e) {
          return function (i, n, c) {
            for (var l = -1, d = He(i), w = c(i), _ = w.length; _--; ) {
              var R = w[e ? _ : ++l];
              if (n(d[R], R, d) === !1) break;
            }
            return i;
          };
        }
        function og(e, i, n) {
          var c = i & re,
            l = Ms(e);
          function d() {
            var w = this && this !== Pe && this instanceof d ? l : e;
            return w.apply(c ? n : this, arguments);
          }
          return d;
        }
        function Ku(e) {
          return function (i) {
            i = Ne(i);
            var n = is(i) ? Nr(i) : r,
              c = n ? n[0] : i.charAt(0),
              l = n ? bi(n, 1).join("") : i.slice(1);
            return c[e]() + l;
          };
        }
        function ls(e) {
          return function (i) {
            return ca(kh(Hh(i).replace(Ss, "")), e, "");
          };
        }
        function Ms(e) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new e();
              case 1:
                return new e(i[0]);
              case 2:
                return new e(i[0], i[1]);
              case 3:
                return new e(i[0], i[1], i[2]);
              case 4:
                return new e(i[0], i[1], i[2], i[3]);
              case 5:
                return new e(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var n = us(e.prototype),
              c = e.apply(n, i);
            return st(c) ? c : n;
          };
        }
        function ag(e, i, n) {
          var c = Ms(e);
          function l() {
            for (var d = arguments.length, w = T(d), _ = d, R = fs(l); _--; )
              w[_] = arguments[_];
            var j = d < 3 && w[0] !== R && w[d - 1] !== R ? [] : gi(w, R);
            if (((d -= j.length), d < n))
              return Qu(e, i, Xn, l.placeholder, r, w, j, r, r, n - d);
            var q = this && this !== Pe && this instanceof l ? c : e;
            return Lt(q, this, w);
          }
          return l;
        }
        function Vu(e) {
          return function (i, n, c) {
            var l = He(i);
            if (!sr(i)) {
              var d = ie(n, 3);
              (i = jt(i)),
                (n = function (_) {
                  return d(l[_], _, l);
                });
            }
            var w = e(i, n, c);
            return w > -1 ? l[d ? i[w] : w] : r;
          };
        }
        function Gu(e) {
          return ei(function (i) {
            var n = i.length,
              c = n,
              l = Er.prototype.thru;
            for (e && i.reverse(); c--; ) {
              var d = i[c];
              if (typeof d != "function") throw new _r(f);
              if (l && !w && io(d) == "wrapper") var w = new Er([], !0);
            }
            for (c = w ? c : n; ++c < n; ) {
              d = i[c];
              var _ = io(d),
                R = _ == "wrapper" ? Ha(d) : r;
              R &&
              Va(R[0]) &&
              R[1] == (Q | ae | he | ve) &&
              !R[4].length &&
              R[9] == 1
                ? (w = w[io(R[0])].apply(w, R[3]))
                : (w = d.length == 1 && Va(d) ? w[_]() : w.thru(d));
            }
            return function () {
              var j = arguments,
                q = j[0];
              if (w && j.length == 1 && ge(q)) return w.plant(q).value();
              for (var z = 0, K = n ? i[z].apply(this, j) : q; ++z < n; )
                K = i[z].call(this, K);
              return K;
            };
          });
        }
        function Xn(e, i, n, c, l, d, w, _, R, j) {
          var q = i & Q,
            z = i & re,
            K = i & oe,
            X = i & (ae | ee),
            se = i & bt,
            we = K ? r : Ms(e);
          function ne() {
            for (var _e = arguments.length, Se = T(_e), yr = _e; yr--; )
              Se[yr] = arguments[yr];
            if (X)
              var er = fs(ne),
                vr = wp(Se, er);
            if (
              (c && (Se = Uu(Se, c, l, X)),
              d && (Se = Hu(Se, d, w, X)),
              (_e -= vr),
              X && _e < j)
            ) {
              var wt = gi(Se, er);
              return Qu(e, i, Xn, ne.placeholder, n, Se, wt, _, R, j - _e);
            }
            var Fr = z ? n : this,
              si = K ? Fr[e] : e;
            return (
              (_e = Se.length),
              _ ? (Se = Rg(Se, _)) : se && _e > 1 && Se.reverse(),
              q && R < _e && (Se.length = R),
              this && this !== Pe && this instanceof ne && (si = we || Ms(si)),
              si.apply(Fr, Se)
            );
          }
          return ne;
        }
        function Wu(e, i) {
          return function (n, c) {
            return Fd(n, e, i(c), {});
          };
        }
        function eo(e, i) {
          return function (n, c) {
            var l;
            if (n === r && c === r) return i;
            if ((n !== r && (l = n), c !== r)) {
              if (l === r) return c;
              typeof n == "string" || typeof c == "string"
                ? ((n = dr(n)), (c = dr(c)))
                : ((n = $u(n)), (c = $u(c))),
                (l = e(n, c));
            }
            return l;
          };
        }
        function qa(e) {
          return ei(function (i) {
            return (
              (i = Ze(i, pr(ie()))),
              be(function (n) {
                var c = this;
                return e(i, function (l) {
                  return Lt(l, c, n);
                });
              })
            );
          });
        }
        function to(e, i) {
          i = i === r ? " " : dr(i);
          var n = i.length;
          if (n < 2) return n ? Ta(i, e) : i;
          var c = Ta(i, Un(e / ss(i)));
          return is(i) ? bi(Nr(c), 0, e).join("") : c.slice(0, e);
        }
        function cg(e, i, n, c) {
          var l = i & re,
            d = Ms(e);
          function w() {
            for (
              var _ = -1,
                R = arguments.length,
                j = -1,
                q = c.length,
                z = T(q + R),
                K = this && this !== Pe && this instanceof w ? d : e;
              ++j < q;

            )
              z[j] = c[j];
            for (; R--; ) z[j++] = arguments[++_];
            return Lt(K, l ? n : this, z);
          }
          return w;
        }
        function Ju(e) {
          return function (i, n, c) {
            return (
              c && typeof c != "number" && Xt(i, n, c) && (n = c = r),
              (i = ii(i)),
              n === r ? ((n = i), (i = 0)) : (n = ii(n)),
              (c = c === r ? (i < n ? 1 : -1) : ii(c)),
              Gd(i, n, c, e)
            );
          };
        }
        function ro(e) {
          return function (i, n) {
            return (
              (typeof i == "string" && typeof n == "string") ||
                ((i = Sr(i)), (n = Sr(n))),
              e(i, n)
            );
          };
        }
        function Qu(e, i, n, c, l, d, w, _, R, j) {
          var q = i & ae,
            z = q ? w : r,
            K = q ? r : w,
            X = q ? d : r,
            se = q ? r : d;
          (i |= q ? he : pe),
            (i &= ~(q ? pe : he)),
            i & ce || (i &= ~(re | oe));
          var we = [e, i, l, X, z, se, K, _, R, j],
            ne = n.apply(r, we);
          return Va(e) && ch(ne, we), (ne.placeholder = c), uh(ne, e, i);
        }
        function Ma(e) {
          var i = Nt[e];
          return function (n, c) {
            if (
              ((n = Sr(n)), (c = c == null ? 0 : Kt(ye(c), 292)), c && uu(n))
            ) {
              var l = (Ne(n) + "e").split("e"),
                d = i(l[0] + "e" + (+l[1] + c));
              return (
                (l = (Ne(d) + "e").split("e")), +(l[0] + "e" + (+l[1] - c))
              );
            }
            return i(n);
          };
        }
        var ug =
          as && 1 / Tn(new as([, -0]))[1] == le
            ? function (e) {
                return new as(e);
              }
            : ac;
        function Yu(e) {
          return function (i) {
            var n = Vt(i);
            return n == me ? ga(i) : n == Te ? Sp(i) : mp(i, e(i));
          };
        }
        function Xr(e, i, n, c, l, d, w, _) {
          var R = i & oe;
          if (!R && typeof e != "function") throw new _r(f);
          var j = c ? c.length : 0;
          if (
            (j || ((i &= ~(he | pe)), (c = l = r)),
            (w = w === r ? w : $t(ye(w), 0)),
            (_ = _ === r ? _ : ye(_)),
            (j -= l ? l.length : 0),
            i & pe)
          ) {
            var q = c,
              z = l;
            c = l = r;
          }
          var K = R ? r : Ha(e),
            X = [e, i, n, c, l, q, z, d, w, _];
          if (
            (K && xg(X, K),
            (e = X[0]),
            (i = X[1]),
            (n = X[2]),
            (c = X[3]),
            (l = X[4]),
            (_ = X[9] = X[9] === r ? (R ? 0 : e.length) : $t(X[9] - j, 0)),
            !_ && i & (ae | ee) && (i &= ~(ae | ee)),
            !i || i == re)
          )
            var se = og(e, i, n);
          else
            i == ae || i == ee
              ? (se = ag(e, i, _))
              : (i == he || i == (re | he)) && !l.length
              ? (se = cg(e, i, n, c))
              : (se = Xn.apply(r, X));
          var we = K ? Tu : ch;
          return uh(we(se, X), e, i);
        }
        function Zu(e, i, n, c) {
          return e === r || (Dr(e, os[n]) && !De.call(c, n)) ? i : e;
        }
        function Xu(e, i, n, c, l, d) {
          return (
            st(e) && st(i) && (d.set(i, e), Jn(e, i, r, Xu, d), d.delete(i)), e
          );
        }
        function hg(e) {
          return Hs(e) ? r : e;
        }
        function eh(e, i, n, c, l, d) {
          var w = n & C,
            _ = e.length,
            R = i.length;
          if (_ != R && !(w && R > _)) return !1;
          var j = d.get(e),
            q = d.get(i);
          if (j && q) return j == i && q == e;
          var z = -1,
            K = !0,
            X = n & Y ? new ji() : r;
          for (d.set(e, i), d.set(i, e); ++z < _; ) {
            var se = e[z],
              we = i[z];
            if (c) var ne = w ? c(we, se, z, i, e, d) : c(se, we, z, e, i, d);
            if (ne !== r) {
              if (ne) continue;
              K = !1;
              break;
            }
            if (X) {
              if (
                !ua(i, function (_e, Se) {
                  if (!As(X, Se) && (se === _e || l(se, _e, n, c, d)))
                    return X.push(Se);
                })
              ) {
                K = !1;
                break;
              }
            } else if (!(se === we || l(se, we, n, c, d))) {
              K = !1;
              break;
            }
          }
          return d.delete(e), d.delete(i), K;
        }
        function lg(e, i, n, c, l, d, w) {
          switch (n) {
            case qe:
              if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                return !1;
              (e = e.buffer), (i = i.buffer);
            case Ae:
              return !(
                e.byteLength != i.byteLength || !d(new jn(e), new jn(i))
              );
            case N:
            case O:
            case Re:
              return Dr(+e, +i);
            case I:
              return e.name == i.name && e.message == i.message;
            case tt:
            case Ke:
              return e == i + "";
            case me:
              var _ = ga;
            case Te:
              var R = c & C;
              if ((_ || (_ = Tn), e.size != i.size && !R)) return !1;
              var j = w.get(e);
              if (j) return j == i;
              (c |= Y), w.set(e, i);
              var q = eh(_(e), _(i), c, l, d, w);
              return w.delete(e), q;
            case Ve:
              if ($s) return $s.call(e) == $s.call(i);
          }
          return !1;
        }
        function fg(e, i, n, c, l, d) {
          var w = n & C,
            _ = za(e),
            R = _.length,
            j = za(i),
            q = j.length;
          if (R != q && !w) return !1;
          for (var z = R; z--; ) {
            var K = _[z];
            if (!(w ? K in i : De.call(i, K))) return !1;
          }
          var X = d.get(e),
            se = d.get(i);
          if (X && se) return X == i && se == e;
          var we = !0;
          d.set(e, i), d.set(i, e);
          for (var ne = w; ++z < R; ) {
            K = _[z];
            var _e = e[K],
              Se = i[K];
            if (c) var yr = w ? c(Se, _e, K, i, e, d) : c(_e, Se, K, e, i, d);
            if (!(yr === r ? _e === Se || l(_e, Se, n, c, d) : yr)) {
              we = !1;
              break;
            }
            ne || (ne = K == "constructor");
          }
          if (we && !ne) {
            var er = e.constructor,
              vr = i.constructor;
            er != vr &&
              "constructor" in e &&
              "constructor" in i &&
              !(
                typeof er == "function" &&
                er instanceof er &&
                typeof vr == "function" &&
                vr instanceof vr
              ) &&
              (we = !1);
          }
          return d.delete(e), d.delete(i), we;
        }
        function ei(e) {
          return Wa(oh(e, r, gh), e + "");
        }
        function za(e) {
          return bu(e, jt, Ba);
        }
        function Ua(e) {
          return bu(e, nr, th);
        }
        var Ha = kn
          ? function (e) {
              return kn.get(e);
            }
          : ac;
        function io(e) {
          for (
            var i = e.name + "", n = cs[i], c = De.call(cs, i) ? n.length : 0;
            c--;

          ) {
            var l = n[c],
              d = l.func;
            if (d == null || d == e) return l.name;
          }
          return i;
        }
        function fs(e) {
          var i = De.call(p, "placeholder") ? p : e;
          return i.placeholder;
        }
        function ie() {
          var e = p.iteratee || nc;
          return (
            (e = e === nc ? Iu : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function so(e, i) {
          var n = e.__data__;
          return bg(i) ? n[typeof i == "string" ? "string" : "hash"] : n.map;
        }
        function ka(e) {
          for (var i = jt(e), n = i.length; n--; ) {
            var c = i[n],
              l = e[c];
            i[n] = [c, l, sh(l)];
          }
          return i;
        }
        function zi(e, i) {
          var n = Ip(e, i);
          return Eu(n) ? n : r;
        }
        function pg(e) {
          var i = De.call(e, Fi),
            n = e[Fi];
          try {
            e[Fi] = r;
            var c = !0;
          } catch {}
          var l = Fn.call(e);
          return c && (i ? (e[Fi] = n) : delete e[Fi]), l;
        }
        var Ba = va
            ? function (e) {
                return e == null
                  ? []
                  : ((e = He(e)),
                    pi(va(e), function (i) {
                      return au.call(e, i);
                    }));
              }
            : cc,
          th = va
            ? function (e) {
                for (var i = []; e; ) di(i, Ba(e)), (e = qn(e));
                return i;
              }
            : cc,
          Vt = Zt;
        ((ma && Vt(new ma(new ArrayBuffer(1))) != qe) ||
          (Cs && Vt(new Cs()) != me) ||
          (wa && Vt(wa.resolve()) != _t) ||
          (as && Vt(new as()) != Te) ||
          (Ts && Vt(new Ts()) != Fe)) &&
          (Vt = function (e) {
            var i = Zt(e),
              n = i == Ie ? e.constructor : r,
              c = n ? Ui(n) : "";
            if (c)
              switch (c) {
                case Jp:
                  return qe;
                case Qp:
                  return me;
                case Yp:
                  return _t;
                case Zp:
                  return Te;
                case Xp:
                  return Fe;
              }
            return i;
          });
        function dg(e, i, n) {
          for (var c = -1, l = n.length; ++c < l; ) {
            var d = n[c],
              w = d.size;
            switch (d.type) {
              case "drop":
                e += w;
                break;
              case "dropRight":
                i -= w;
                break;
              case "take":
                i = Kt(i, e + w);
                break;
              case "takeRight":
                e = $t(e, i - w);
                break;
            }
          }
          return { start: e, end: i };
        }
        function gg(e) {
          var i = e.match(ke);
          return i ? i[1].split(St) : [];
        }
        function rh(e, i, n) {
          i = wi(i, e);
          for (var c = -1, l = i.length, d = !1; ++c < l; ) {
            var w = Br(i[c]);
            if (!(d = e != null && n(e, w))) break;
            e = e[w];
          }
          return d || ++c != l
            ? d
            : ((l = e == null ? 0 : e.length),
              !!l && lo(l) && ti(w, l) && (ge(e) || Hi(e)));
        }
        function yg(e) {
          var i = e.length,
            n = new e.constructor(i);
          return (
            i &&
              typeof e[0] == "string" &&
              De.call(e, "index") &&
              ((n.index = e.index), (n.input = e.input)),
            n
          );
        }
        function ih(e) {
          return typeof e.constructor == "function" && !zs(e) ? us(qn(e)) : {};
        }
        function vg(e, i, n) {
          var c = e.constructor;
          switch (i) {
            case Ae:
              return ja(e);
            case N:
            case O:
              return new c(+e);
            case qe:
              return eg(e, n);
            case at:
            case $e:
            case Et:
            case Tt:
            case Ut:
            case Ht:
            case Ft:
            case Jt:
            case tr:
              return Mu(e, n);
            case me:
              return new c();
            case Re:
            case Ke:
              return new c(e);
            case tt:
              return tg(e);
            case Te:
              return new c();
            case Ve:
              return rg(e);
          }
        }
        function mg(e, i) {
          var n = i.length;
          if (!n) return e;
          var c = n - 1;
          return (
            (i[c] = (n > 1 ? "& " : "") + i[c]),
            (i = i.join(n > 2 ? ", " : " ")),
            e.replace(
              pt,
              `{
/* [wrapped with ` +
                i +
                `] */
`
            )
          );
        }
        function wg(e) {
          return ge(e) || Hi(e) || !!(cu && e && e[cu]);
        }
        function ti(e, i) {
          var n = typeof e;
          return (
            (i = i ?? H),
            !!i &&
              (n == "number" || (n != "symbol" && Go.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < i
          );
        }
        function Xt(e, i, n) {
          if (!st(n)) return !1;
          var c = typeof i;
          return (
            c == "number" ? sr(n) && ti(i, n.length) : c == "string" && i in n
          )
            ? Dr(n[i], e)
            : !1;
        }
        function Ka(e, i) {
          if (ge(e)) return !1;
          var n = typeof e;
          return n == "number" ||
            n == "symbol" ||
            n == "boolean" ||
            e == null ||
            gr(e)
            ? !0
            : It.test(e) || !Ye.test(e) || (i != null && e in He(i));
        }
        function bg(e) {
          var i = typeof e;
          return i == "string" ||
            i == "number" ||
            i == "symbol" ||
            i == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function Va(e) {
          var i = io(e),
            n = p[i];
          if (typeof n != "function" || !(i in xe.prototype)) return !1;
          if (e === n) return !0;
          var c = Ha(n);
          return !!c && e === c[0];
        }
        function _g(e) {
          return !!su && su in e;
        }
        var Eg = $n ? ri : uc;
        function zs(e) {
          var i = e && e.constructor,
            n = (typeof i == "function" && i.prototype) || os;
          return e === n;
        }
        function sh(e) {
          return e === e && !st(e);
        }
        function nh(e, i) {
          return function (n) {
            return n == null ? !1 : n[e] === i && (i !== r || e in He(n));
          };
        }
        function Ig(e) {
          var i = uo(e, function (c) {
              return n.size === y && n.clear(), c;
            }),
            n = i.cache;
          return i;
        }
        function xg(e, i) {
          var n = e[1],
            c = i[1],
            l = n | c,
            d = l < (re | oe | Q),
            w =
              (c == Q && n == ae) ||
              (c == Q && n == ve && e[7].length <= i[8]) ||
              (c == (Q | ve) && i[7].length <= i[8] && n == ae);
          if (!(d || w)) return e;
          c & re && ((e[2] = i[2]), (l |= n & re ? 0 : ce));
          var _ = i[3];
          if (_) {
            var R = e[3];
            (e[3] = R ? Uu(R, _, i[4]) : _), (e[4] = R ? gi(e[3], E) : i[4]);
          }
          return (
            (_ = i[5]),
            _ &&
              ((R = e[5]),
              (e[5] = R ? Hu(R, _, i[6]) : _),
              (e[6] = R ? gi(e[5], E) : i[6])),
            (_ = i[7]),
            _ && (e[7] = _),
            c & Q && (e[8] = e[8] == null ? i[8] : Kt(e[8], i[8])),
            e[9] == null && (e[9] = i[9]),
            (e[0] = i[0]),
            (e[1] = l),
            e
          );
        }
        function Pg(e) {
          var i = [];
          if (e != null) for (var n in He(e)) i.push(n);
          return i;
        }
        function Sg(e) {
          return Fn.call(e);
        }
        function oh(e, i, n) {
          return (
            (i = $t(i === r ? e.length - 1 : i, 0)),
            function () {
              for (
                var c = arguments, l = -1, d = $t(c.length - i, 0), w = T(d);
                ++l < d;

              )
                w[l] = c[i + l];
              l = -1;
              for (var _ = T(i + 1); ++l < i; ) _[l] = c[l];
              return (_[i] = n(w)), Lt(e, this, _);
            }
          );
        }
        function ah(e, i) {
          return i.length < 2 ? e : Mi(e, xr(i, 0, -1));
        }
        function Rg(e, i) {
          for (var n = e.length, c = Kt(i.length, n), l = ir(e); c--; ) {
            var d = i[c];
            e[c] = ti(d, n) ? l[d] : r;
          }
          return e;
        }
        function Ga(e, i) {
          if (
            !(i === "constructor" && typeof e[i] == "function") &&
            i != "__proto__"
          )
            return e[i];
        }
        var ch = hh(Tu),
          Us =
            Hp ||
            function (e, i) {
              return Pe.setTimeout(e, i);
            },
          Wa = hh(Qd);
        function uh(e, i, n) {
          var c = i + "";
          return Wa(e, mg(c, Ag(gg(c), n)));
        }
        function hh(e) {
          var i = 0,
            n = 0;
          return function () {
            var c = Vp(),
              l = zt - (c - n);
            if (((n = c), l > 0)) {
              if (++i >= Mt) return arguments[0];
            } else i = 0;
            return e.apply(r, arguments);
          };
        }
        function no(e, i) {
          var n = -1,
            c = e.length,
            l = c - 1;
          for (i = i === r ? c : i; ++n < i; ) {
            var d = Ca(n, l),
              w = e[d];
            (e[d] = e[n]), (e[n] = w);
          }
          return (e.length = i), e;
        }
        var lh = Ig(function (e) {
          var i = [];
          return (
            e.charCodeAt(0) === 46 && i.push(""),
            e.replace(xt, function (n, c, l, d) {
              i.push(l ? d.replace(Uo, "$1") : c || n);
            }),
            i
          );
        });
        function Br(e) {
          if (typeof e == "string" || gr(e)) return e;
          var i = e + "";
          return i == "0" && 1 / e == -le ? "-0" : i;
        }
        function Ui(e) {
          if (e != null) {
            try {
              return Dn.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function Ag(e, i) {
          return (
            br(Ai, function (n) {
              var c = "_." + n[0];
              i & n[1] && !On(e, c) && e.push(c);
            }),
            e.sort()
          );
        }
        function fh(e) {
          if (e instanceof xe) return e.clone();
          var i = new Er(e.__wrapped__, e.__chain__);
          return (
            (i.__actions__ = ir(e.__actions__)),
            (i.__index__ = e.__index__),
            (i.__values__ = e.__values__),
            i
          );
        }
        function Og(e, i, n) {
          (n ? Xt(e, i, n) : i === r) ? (i = 1) : (i = $t(ye(i), 0));
          var c = e == null ? 0 : e.length;
          if (!c || i < 1) return [];
          for (var l = 0, d = 0, w = T(Un(c / i)); l < c; )
            w[d++] = xr(e, l, (l += i));
          return w;
        }
        function Cg(e) {
          for (
            var i = -1, n = e == null ? 0 : e.length, c = 0, l = [];
            ++i < n;

          ) {
            var d = e[i];
            d && (l[c++] = d);
          }
          return l;
        }
        function Tg() {
          var e = arguments.length;
          if (!e) return [];
          for (var i = T(e - 1), n = arguments[0], c = e; c--; )
            i[c - 1] = arguments[c];
          return di(ge(n) ? ir(n) : [n], kt(i, 1));
        }
        var Ng = be(function (e, i) {
            return mt(e) ? Fs(e, kt(i, 1, mt, !0)) : [];
          }),
          $g = be(function (e, i) {
            var n = Pr(i);
            return (
              mt(n) && (n = r), mt(e) ? Fs(e, kt(i, 1, mt, !0), ie(n, 2)) : []
            );
          }),
          Dg = be(function (e, i) {
            var n = Pr(i);
            return mt(n) && (n = r), mt(e) ? Fs(e, kt(i, 1, mt, !0), r, n) : [];
          });
        function Fg(e, i, n) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = n || i === r ? 1 : ye(i)), xr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function Lg(e, i, n) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = n || i === r ? 1 : ye(i)),
              (i = c - i),
              xr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function jg(e, i) {
          return e && e.length ? Yn(e, ie(i, 3), !0, !0) : [];
        }
        function qg(e, i) {
          return e && e.length ? Yn(e, ie(i, 3), !0) : [];
        }
        function Mg(e, i, n, c) {
          var l = e == null ? 0 : e.length;
          return l
            ? (n && typeof n != "number" && Xt(e, i, n) && ((n = 0), (c = l)),
              Td(e, i, n, c))
            : [];
        }
        function ph(e, i, n) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = n == null ? 0 : ye(n);
          return l < 0 && (l = $t(c + l, 0)), Cn(e, ie(i, 3), l);
        }
        function dh(e, i, n) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c - 1;
          return (
            n !== r && ((l = ye(n)), (l = n < 0 ? $t(c + l, 0) : Kt(l, c - 1))),
            Cn(e, ie(i, 3), l, !0)
          );
        }
        function gh(e) {
          var i = e == null ? 0 : e.length;
          return i ? kt(e, 1) : [];
        }
        function zg(e) {
          var i = e == null ? 0 : e.length;
          return i ? kt(e, le) : [];
        }
        function Ug(e, i) {
          var n = e == null ? 0 : e.length;
          return n ? ((i = i === r ? 1 : ye(i)), kt(e, i)) : [];
        }
        function Hg(e) {
          for (var i = -1, n = e == null ? 0 : e.length, c = {}; ++i < n; ) {
            var l = e[i];
            c[l[0]] = l[1];
          }
          return c;
        }
        function yh(e) {
          return e && e.length ? e[0] : r;
        }
        function kg(e, i, n) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = n == null ? 0 : ye(n);
          return l < 0 && (l = $t(c + l, 0)), rs(e, i, l);
        }
        function Bg(e) {
          var i = e == null ? 0 : e.length;
          return i ? xr(e, 0, -1) : [];
        }
        var Kg = be(function (e) {
            var i = Ze(e, Fa);
            return i.length && i[0] === e[0] ? Pa(i) : [];
          }),
          Vg = be(function (e) {
            var i = Pr(e),
              n = Ze(e, Fa);
            return (
              i === Pr(n) ? (i = r) : n.pop(),
              n.length && n[0] === e[0] ? Pa(n, ie(i, 2)) : []
            );
          }),
          Gg = be(function (e) {
            var i = Pr(e),
              n = Ze(e, Fa);
            return (
              (i = typeof i == "function" ? i : r),
              i && n.pop(),
              n.length && n[0] === e[0] ? Pa(n, r, i) : []
            );
          });
        function Wg(e, i) {
          return e == null ? "" : Bp.call(e, i);
        }
        function Pr(e) {
          var i = e == null ? 0 : e.length;
          return i ? e[i - 1] : r;
        }
        function Jg(e, i, n) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c;
          return (
            n !== r && ((l = ye(n)), (l = l < 0 ? $t(c + l, 0) : Kt(l, c - 1))),
            i === i ? Ap(e, i, l) : Cn(e, Qc, l, !0)
          );
        }
        function Qg(e, i) {
          return e && e.length ? Ru(e, ye(i)) : r;
        }
        var Yg = be(vh);
        function vh(e, i) {
          return e && e.length && i && i.length ? Oa(e, i) : e;
        }
        function Zg(e, i, n) {
          return e && e.length && i && i.length ? Oa(e, i, ie(n, 2)) : e;
        }
        function Xg(e, i, n) {
          return e && e.length && i && i.length ? Oa(e, i, r, n) : e;
        }
        var ey = ei(function (e, i) {
          var n = e == null ? 0 : e.length,
            c = _a(e, i);
          return (
            Cu(
              e,
              Ze(i, function (l) {
                return ti(l, n) ? +l : l;
              }).sort(zu)
            ),
            c
          );
        });
        function ty(e, i) {
          var n = [];
          if (!(e && e.length)) return n;
          var c = -1,
            l = [],
            d = e.length;
          for (i = ie(i, 3); ++c < d; ) {
            var w = e[c];
            i(w, c, e) && (n.push(w), l.push(c));
          }
          return Cu(e, l), n;
        }
        function Ja(e) {
          return e == null ? e : Wp.call(e);
        }
        function ry(e, i, n) {
          var c = e == null ? 0 : e.length;
          return c
            ? (n && typeof n != "number" && Xt(e, i, n)
                ? ((i = 0), (n = c))
                : ((i = i == null ? 0 : ye(i)), (n = n === r ? c : ye(n))),
              xr(e, i, n))
            : [];
        }
        function iy(e, i) {
          return Qn(e, i);
        }
        function sy(e, i, n) {
          return Na(e, i, ie(n, 2));
        }
        function ny(e, i) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var c = Qn(e, i);
            if (c < n && Dr(e[c], i)) return c;
          }
          return -1;
        }
        function oy(e, i) {
          return Qn(e, i, !0);
        }
        function ay(e, i, n) {
          return Na(e, i, ie(n, 2), !0);
        }
        function cy(e, i) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var c = Qn(e, i, !0) - 1;
            if (Dr(e[c], i)) return c;
          }
          return -1;
        }
        function uy(e) {
          return e && e.length ? Nu(e) : [];
        }
        function hy(e, i) {
          return e && e.length ? Nu(e, ie(i, 2)) : [];
        }
        function ly(e) {
          var i = e == null ? 0 : e.length;
          return i ? xr(e, 1, i) : [];
        }
        function fy(e, i, n) {
          return e && e.length
            ? ((i = n || i === r ? 1 : ye(i)), xr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function py(e, i, n) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = n || i === r ? 1 : ye(i)),
              (i = c - i),
              xr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function dy(e, i) {
          return e && e.length ? Yn(e, ie(i, 3), !1, !0) : [];
        }
        function gy(e, i) {
          return e && e.length ? Yn(e, ie(i, 3)) : [];
        }
        var yy = be(function (e) {
            return mi(kt(e, 1, mt, !0));
          }),
          vy = be(function (e) {
            var i = Pr(e);
            return mt(i) && (i = r), mi(kt(e, 1, mt, !0), ie(i, 2));
          }),
          my = be(function (e) {
            var i = Pr(e);
            return (
              (i = typeof i == "function" ? i : r), mi(kt(e, 1, mt, !0), r, i)
            );
          });
        function wy(e) {
          return e && e.length ? mi(e) : [];
        }
        function by(e, i) {
          return e && e.length ? mi(e, ie(i, 2)) : [];
        }
        function _y(e, i) {
          return (
            (i = typeof i == "function" ? i : r),
            e && e.length ? mi(e, r, i) : []
          );
        }
        function Qa(e) {
          if (!(e && e.length)) return [];
          var i = 0;
          return (
            (e = pi(e, function (n) {
              if (mt(n)) return (i = $t(n.length, i)), !0;
            })),
            pa(i, function (n) {
              return Ze(e, ha(n));
            })
          );
        }
        function mh(e, i) {
          if (!(e && e.length)) return [];
          var n = Qa(e);
          return i == null
            ? n
            : Ze(n, function (c) {
                return Lt(i, r, c);
              });
        }
        var Ey = be(function (e, i) {
            return mt(e) ? Fs(e, i) : [];
          }),
          Iy = be(function (e) {
            return Da(pi(e, mt));
          }),
          xy = be(function (e) {
            var i = Pr(e);
            return mt(i) && (i = r), Da(pi(e, mt), ie(i, 2));
          }),
          Py = be(function (e) {
            var i = Pr(e);
            return (i = typeof i == "function" ? i : r), Da(pi(e, mt), r, i);
          }),
          Sy = be(Qa);
        function Ry(e, i) {
          return Lu(e || [], i || [], Ds);
        }
        function Ay(e, i) {
          return Lu(e || [], i || [], qs);
        }
        var Oy = be(function (e) {
          var i = e.length,
            n = i > 1 ? e[i - 1] : r;
          return (n = typeof n == "function" ? (e.pop(), n) : r), mh(e, n);
        });
        function wh(e) {
          var i = p(e);
          return (i.__chain__ = !0), i;
        }
        function Cy(e, i) {
          return i(e), e;
        }
        function oo(e, i) {
          return i(e);
        }
        var Ty = ei(function (e) {
          var i = e.length,
            n = i ? e[0] : 0,
            c = this.__wrapped__,
            l = function (d) {
              return _a(d, e);
            };
          return i > 1 ||
            this.__actions__.length ||
            !(c instanceof xe) ||
            !ti(n)
            ? this.thru(l)
            : ((c = c.slice(n, +n + (i ? 1 : 0))),
              c.__actions__.push({ func: oo, args: [l], thisArg: r }),
              new Er(c, this.__chain__).thru(function (d) {
                return i && !d.length && d.push(r), d;
              }));
        });
        function Ny() {
          return wh(this);
        }
        function $y() {
          return new Er(this.value(), this.__chain__);
        }
        function Dy() {
          this.__values__ === r && (this.__values__ = $h(this.value()));
          var e = this.__index__ >= this.__values__.length,
            i = e ? r : this.__values__[this.__index__++];
          return { done: e, value: i };
        }
        function Fy() {
          return this;
        }
        function Ly(e) {
          for (var i, n = this; n instanceof Kn; ) {
            var c = fh(n);
            (c.__index__ = 0),
              (c.__values__ = r),
              i ? (l.__wrapped__ = c) : (i = c);
            var l = c;
            n = n.__wrapped__;
          }
          return (l.__wrapped__ = e), i;
        }
        function jy() {
          var e = this.__wrapped__;
          if (e instanceof xe) {
            var i = e;
            return (
              this.__actions__.length && (i = new xe(this)),
              (i = i.reverse()),
              i.__actions__.push({ func: oo, args: [Ja], thisArg: r }),
              new Er(i, this.__chain__)
            );
          }
          return this.thru(Ja);
        }
        function qy() {
          return Fu(this.__wrapped__, this.__actions__);
        }
        var My = Zn(function (e, i, n) {
          De.call(e, n) ? ++e[n] : Zr(e, n, 1);
        });
        function zy(e, i, n) {
          var c = ge(e) ? Wc : Cd;
          return n && Xt(e, i, n) && (i = r), c(e, ie(i, 3));
        }
        function Uy(e, i) {
          var n = ge(e) ? pi : mu;
          return n(e, ie(i, 3));
        }
        var Hy = Vu(ph),
          ky = Vu(dh);
        function By(e, i) {
          return kt(ao(e, i), 1);
        }
        function Ky(e, i) {
          return kt(ao(e, i), le);
        }
        function Vy(e, i, n) {
          return (n = n === r ? 1 : ye(n)), kt(ao(e, i), n);
        }
        function bh(e, i) {
          var n = ge(e) ? br : vi;
          return n(e, ie(i, 3));
        }
        function _h(e, i) {
          var n = ge(e) ? lp : vu;
          return n(e, ie(i, 3));
        }
        var Gy = Zn(function (e, i, n) {
          De.call(e, n) ? e[n].push(i) : Zr(e, n, [i]);
        });
        function Wy(e, i, n, c) {
          (e = sr(e) ? e : ds(e)), (n = n && !c ? ye(n) : 0);
          var l = e.length;
          return (
            n < 0 && (n = $t(l + n, 0)),
            fo(e) ? n <= l && e.indexOf(i, n) > -1 : !!l && rs(e, i, n) > -1
          );
        }
        var Jy = be(function (e, i, n) {
            var c = -1,
              l = typeof i == "function",
              d = sr(e) ? T(e.length) : [];
            return (
              vi(e, function (w) {
                d[++c] = l ? Lt(i, w, n) : Ls(w, i, n);
              }),
              d
            );
          }),
          Qy = Zn(function (e, i, n) {
            Zr(e, n, i);
          });
        function ao(e, i) {
          var n = ge(e) ? Ze : xu;
          return n(e, ie(i, 3));
        }
        function Yy(e, i, n, c) {
          return e == null
            ? []
            : (ge(i) || (i = i == null ? [] : [i]),
              (n = c ? r : n),
              ge(n) || (n = n == null ? [] : [n]),
              Au(e, i, n));
        }
        var Zy = Zn(
          function (e, i, n) {
            e[n ? 0 : 1].push(i);
          },
          function () {
            return [[], []];
          }
        );
        function Xy(e, i, n) {
          var c = ge(e) ? ca : Zc,
            l = arguments.length < 3;
          return c(e, ie(i, 4), n, l, vi);
        }
        function ev(e, i, n) {
          var c = ge(e) ? fp : Zc,
            l = arguments.length < 3;
          return c(e, ie(i, 4), n, l, vu);
        }
        function tv(e, i) {
          var n = ge(e) ? pi : mu;
          return n(e, ho(ie(i, 3)));
        }
        function rv(e) {
          var i = ge(e) ? pu : Wd;
          return i(e);
        }
        function iv(e, i, n) {
          (n ? Xt(e, i, n) : i === r) ? (i = 1) : (i = ye(i));
          var c = ge(e) ? Pd : Jd;
          return c(e, i);
        }
        function sv(e) {
          var i = ge(e) ? Sd : Yd;
          return i(e);
        }
        function nv(e) {
          if (e == null) return 0;
          if (sr(e)) return fo(e) ? ss(e) : e.length;
          var i = Vt(e);
          return i == me || i == Te ? e.size : Ra(e).length;
        }
        function ov(e, i, n) {
          var c = ge(e) ? ua : Zd;
          return n && Xt(e, i, n) && (i = r), c(e, ie(i, 3));
        }
        var av = be(function (e, i) {
            if (e == null) return [];
            var n = i.length;
            return (
              n > 1 && Xt(e, i[0], i[1])
                ? (i = [])
                : n > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]),
              Au(e, kt(i, 1), [])
            );
          }),
          co =
            Up ||
            function () {
              return Pe.Date.now();
            };
        function cv(e, i) {
          if (typeof i != "function") throw new _r(f);
          return (
            (e = ye(e)),
            function () {
              if (--e < 1) return i.apply(this, arguments);
            }
          );
        }
        function Eh(e, i, n) {
          return (
            (i = n ? r : i),
            (i = e && i == null ? e.length : i),
            Xr(e, Q, r, r, r, r, i)
          );
        }
        function Ih(e, i) {
          var n;
          if (typeof i != "function") throw new _r(f);
          return (
            (e = ye(e)),
            function () {
              return (
                --e > 0 && (n = i.apply(this, arguments)), e <= 1 && (i = r), n
              );
            }
          );
        }
        var Ya = be(function (e, i, n) {
            var c = re;
            if (n.length) {
              var l = gi(n, fs(Ya));
              c |= he;
            }
            return Xr(e, c, i, n, l);
          }),
          xh = be(function (e, i, n) {
            var c = re | oe;
            if (n.length) {
              var l = gi(n, fs(xh));
              c |= he;
            }
            return Xr(i, c, e, n, l);
          });
        function Ph(e, i, n) {
          i = n ? r : i;
          var c = Xr(e, ae, r, r, r, r, r, i);
          return (c.placeholder = Ph.placeholder), c;
        }
        function Sh(e, i, n) {
          i = n ? r : i;
          var c = Xr(e, ee, r, r, r, r, r, i);
          return (c.placeholder = Sh.placeholder), c;
        }
        function Rh(e, i, n) {
          var c,
            l,
            d,
            w,
            _,
            R,
            j = 0,
            q = !1,
            z = !1,
            K = !0;
          if (typeof e != "function") throw new _r(f);
          (i = Sr(i) || 0),
            st(n) &&
              ((q = !!n.leading),
              (z = "maxWait" in n),
              (d = z ? $t(Sr(n.maxWait) || 0, i) : d),
              (K = "trailing" in n ? !!n.trailing : K));
          function X(wt) {
            var Fr = c,
              si = l;
            return (c = l = r), (j = wt), (w = e.apply(si, Fr)), w;
          }
          function se(wt) {
            return (j = wt), (_ = Us(_e, i)), q ? X(wt) : w;
          }
          function we(wt) {
            var Fr = wt - R,
              si = wt - j,
              Vh = i - Fr;
            return z ? Kt(Vh, d - si) : Vh;
          }
          function ne(wt) {
            var Fr = wt - R,
              si = wt - j;
            return R === r || Fr >= i || Fr < 0 || (z && si >= d);
          }
          function _e() {
            var wt = co();
            if (ne(wt)) return Se(wt);
            _ = Us(_e, we(wt));
          }
          function Se(wt) {
            return (_ = r), K && c ? X(wt) : ((c = l = r), w);
          }
          function yr() {
            _ !== r && ju(_), (j = 0), (c = R = l = _ = r);
          }
          function er() {
            return _ === r ? w : Se(co());
          }
          function vr() {
            var wt = co(),
              Fr = ne(wt);
            if (((c = arguments), (l = this), (R = wt), Fr)) {
              if (_ === r) return se(R);
              if (z) return ju(_), (_ = Us(_e, i)), X(R);
            }
            return _ === r && (_ = Us(_e, i)), w;
          }
          return (vr.cancel = yr), (vr.flush = er), vr;
        }
        var uv = be(function (e, i) {
            return yu(e, 1, i);
          }),
          hv = be(function (e, i, n) {
            return yu(e, Sr(i) || 0, n);
          });
        function lv(e) {
          return Xr(e, bt);
        }
        function uo(e, i) {
          if (typeof e != "function" || (i != null && typeof i != "function"))
            throw new _r(f);
          var n = function () {
            var c = arguments,
              l = i ? i.apply(this, c) : c[0],
              d = n.cache;
            if (d.has(l)) return d.get(l);
            var w = e.apply(this, c);
            return (n.cache = d.set(l, w) || d), w;
          };
          return (n.cache = new (uo.Cache || Yr)()), n;
        }
        uo.Cache = Yr;
        function ho(e) {
          if (typeof e != "function") throw new _r(f);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, i[0]);
              case 2:
                return !e.call(this, i[0], i[1]);
              case 3:
                return !e.call(this, i[0], i[1], i[2]);
            }
            return !e.apply(this, i);
          };
        }
        function fv(e) {
          return Ih(2, e);
        }
        var pv = Xd(function (e, i) {
            i =
              i.length == 1 && ge(i[0])
                ? Ze(i[0], pr(ie()))
                : Ze(kt(i, 1), pr(ie()));
            var n = i.length;
            return be(function (c) {
              for (var l = -1, d = Kt(c.length, n); ++l < d; )
                c[l] = i[l].call(this, c[l]);
              return Lt(e, this, c);
            });
          }),
          Za = be(function (e, i) {
            var n = gi(i, fs(Za));
            return Xr(e, he, r, i, n);
          }),
          Ah = be(function (e, i) {
            var n = gi(i, fs(Ah));
            return Xr(e, pe, r, i, n);
          }),
          dv = ei(function (e, i) {
            return Xr(e, ve, r, r, r, i);
          });
        function gv(e, i) {
          if (typeof e != "function") throw new _r(f);
          return (i = i === r ? i : ye(i)), be(e, i);
        }
        function yv(e, i) {
          if (typeof e != "function") throw new _r(f);
          return (
            (i = i == null ? 0 : $t(ye(i), 0)),
            be(function (n) {
              var c = n[i],
                l = bi(n, 0, i);
              return c && di(l, c), Lt(e, this, l);
            })
          );
        }
        function vv(e, i, n) {
          var c = !0,
            l = !0;
          if (typeof e != "function") throw new _r(f);
          return (
            st(n) &&
              ((c = "leading" in n ? !!n.leading : c),
              (l = "trailing" in n ? !!n.trailing : l)),
            Rh(e, i, { leading: c, maxWait: i, trailing: l })
          );
        }
        function mv(e) {
          return Eh(e, 1);
        }
        function wv(e, i) {
          return Za(La(i), e);
        }
        function bv() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return ge(e) ? e : [e];
        }
        function _v(e) {
          return Ir(e, L);
        }
        function Ev(e, i) {
          return (i = typeof i == "function" ? i : r), Ir(e, L, i);
        }
        function Iv(e) {
          return Ir(e, A | L);
        }
        function xv(e, i) {
          return (i = typeof i == "function" ? i : r), Ir(e, A | L, i);
        }
        function Pv(e, i) {
          return i == null || gu(e, i, jt(i));
        }
        function Dr(e, i) {
          return e === i || (e !== e && i !== i);
        }
        var Sv = ro(xa),
          Rv = ro(function (e, i) {
            return e >= i;
          }),
          Hi = _u(
            (function () {
              return arguments;
            })()
          )
            ? _u
            : function (e) {
                return dt(e) && De.call(e, "callee") && !au.call(e, "callee");
              },
          ge = T.isArray,
          Av = Yt ? pr(Yt) : Ld;
        function sr(e) {
          return e != null && lo(e.length) && !ri(e);
        }
        function mt(e) {
          return dt(e) && sr(e);
        }
        function Ov(e) {
          return e === !0 || e === !1 || (dt(e) && Zt(e) == N);
        }
        var _i = kp || uc,
          Cv = Tr ? pr(Tr) : jd;
        function Tv(e) {
          return dt(e) && e.nodeType === 1 && !Hs(e);
        }
        function Nv(e) {
          if (e == null) return !0;
          if (
            sr(e) &&
            (ge(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              _i(e) ||
              ps(e) ||
              Hi(e))
          )
            return !e.length;
          var i = Vt(e);
          if (i == me || i == Te) return !e.size;
          if (zs(e)) return !Ra(e).length;
          for (var n in e) if (De.call(e, n)) return !1;
          return !0;
        }
        function $v(e, i) {
          return js(e, i);
        }
        function Dv(e, i, n) {
          n = typeof n == "function" ? n : r;
          var c = n ? n(e, i) : r;
          return c === r ? js(e, i, r, n) : !!c;
        }
        function Xa(e) {
          if (!dt(e)) return !1;
          var i = Zt(e);
          return (
            i == I ||
            i == u ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !Hs(e))
          );
        }
        function Fv(e) {
          return typeof e == "number" && uu(e);
        }
        function ri(e) {
          if (!st(e)) return !1;
          var i = Zt(e);
          return i == Z || i == ue || i == D || i == gt;
        }
        function Oh(e) {
          return typeof e == "number" && e == ye(e);
        }
        function lo(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= H;
        }
        function st(e) {
          var i = typeof e;
          return e != null && (i == "object" || i == "function");
        }
        function dt(e) {
          return e != null && typeof e == "object";
        }
        var Ch = wr ? pr(wr) : Md;
        function Lv(e, i) {
          return e === i || Sa(e, i, ka(i));
        }
        function jv(e, i, n) {
          return (n = typeof n == "function" ? n : r), Sa(e, i, ka(i), n);
        }
        function qv(e) {
          return Th(e) && e != +e;
        }
        function Mv(e) {
          if (Eg(e)) throw new fe(h);
          return Eu(e);
        }
        function zv(e) {
          return e === null;
        }
        function Uv(e) {
          return e == null;
        }
        function Th(e) {
          return typeof e == "number" || (dt(e) && Zt(e) == Re);
        }
        function Hs(e) {
          if (!dt(e) || Zt(e) != Ie) return !1;
          var i = qn(e);
          if (i === null) return !0;
          var n = De.call(i, "constructor") && i.constructor;
          return typeof n == "function" && n instanceof n && Dn.call(n) == jp;
        }
        var ec = Ur ? pr(Ur) : zd;
        function Hv(e) {
          return Oh(e) && e >= -H && e <= H;
        }
        var Nh = Rs ? pr(Rs) : Ud;
        function fo(e) {
          return typeof e == "string" || (!ge(e) && dt(e) && Zt(e) == Ke);
        }
        function gr(e) {
          return typeof e == "symbol" || (dt(e) && Zt(e) == Ve);
        }
        var ps = Di ? pr(Di) : Hd;
        function kv(e) {
          return e === r;
        }
        function Bv(e) {
          return dt(e) && Vt(e) == Fe;
        }
        function Kv(e) {
          return dt(e) && Zt(e) == Ge;
        }
        var Vv = ro(Aa),
          Gv = ro(function (e, i) {
            return e <= i;
          });
        function $h(e) {
          if (!e) return [];
          if (sr(e)) return fo(e) ? Nr(e) : ir(e);
          if (Os && e[Os]) return Pp(e[Os]());
          var i = Vt(e),
            n = i == me ? ga : i == Te ? Tn : ds;
          return n(e);
        }
        function ii(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = Sr(e)), e === le || e === -le)) {
            var i = e < 0 ? -1 : 1;
            return i * U;
          }
          return e === e ? e : 0;
        }
        function ye(e) {
          var i = ii(e),
            n = i % 1;
          return i === i ? (n ? i - n : i) : 0;
        }
        function Dh(e) {
          return e ? qi(ye(e), 0, B) : 0;
        }
        function Sr(e) {
          if (typeof e == "number") return e;
          if (gr(e)) return k;
          if (st(e)) {
            var i = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = st(i) ? i + "" : i;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = Xc(e);
          var n = Bo.test(e);
          return n || Vo.test(e)
            ? de(e.slice(2), n ? 2 : 8)
            : ko.test(e)
            ? k
            : +e;
        }
        function Fh(e) {
          return kr(e, nr(e));
        }
        function Wv(e) {
          return e ? qi(ye(e), -H, H) : e === 0 ? e : 0;
        }
        function Ne(e) {
          return e == null ? "" : dr(e);
        }
        var Jv = hs(function (e, i) {
            if (zs(i) || sr(i)) {
              kr(i, jt(i), e);
              return;
            }
            for (var n in i) De.call(i, n) && Ds(e, n, i[n]);
          }),
          Lh = hs(function (e, i) {
            kr(i, nr(i), e);
          }),
          po = hs(function (e, i, n, c) {
            kr(i, nr(i), e, c);
          }),
          Qv = hs(function (e, i, n, c) {
            kr(i, jt(i), e, c);
          }),
          Yv = ei(_a);
        function Zv(e, i) {
          var n = us(e);
          return i == null ? n : du(n, i);
        }
        var Xv = be(function (e, i) {
            e = He(e);
            var n = -1,
              c = i.length,
              l = c > 2 ? i[2] : r;
            for (l && Xt(i[0], i[1], l) && (c = 1); ++n < c; )
              for (var d = i[n], w = nr(d), _ = -1, R = w.length; ++_ < R; ) {
                var j = w[_],
                  q = e[j];
                (q === r || (Dr(q, os[j]) && !De.call(e, j))) && (e[j] = d[j]);
              }
            return e;
          }),
          e0 = be(function (e) {
            return e.push(r, Xu), Lt(jh, r, e);
          });
        function t0(e, i) {
          return Jc(e, ie(i, 3), Hr);
        }
        function r0(e, i) {
          return Jc(e, ie(i, 3), Ia);
        }
        function i0(e, i) {
          return e == null ? e : Ea(e, ie(i, 3), nr);
        }
        function s0(e, i) {
          return e == null ? e : wu(e, ie(i, 3), nr);
        }
        function n0(e, i) {
          return e && Hr(e, ie(i, 3));
        }
        function o0(e, i) {
          return e && Ia(e, ie(i, 3));
        }
        function a0(e) {
          return e == null ? [] : Wn(e, jt(e));
        }
        function c0(e) {
          return e == null ? [] : Wn(e, nr(e));
        }
        function tc(e, i, n) {
          var c = e == null ? r : Mi(e, i);
          return c === r ? n : c;
        }
        function u0(e, i) {
          return e != null && rh(e, i, Nd);
        }
        function rc(e, i) {
          return e != null && rh(e, i, $d);
        }
        var h0 = Wu(function (e, i, n) {
            i != null && typeof i.toString != "function" && (i = Fn.call(i)),
              (e[i] = n);
          }, sc(or)),
          l0 = Wu(function (e, i, n) {
            i != null && typeof i.toString != "function" && (i = Fn.call(i)),
              De.call(e, i) ? e[i].push(n) : (e[i] = [n]);
          }, ie),
          f0 = be(Ls);
        function jt(e) {
          return sr(e) ? fu(e) : Ra(e);
        }
        function nr(e) {
          return sr(e) ? fu(e, !0) : kd(e);
        }
        function p0(e, i) {
          var n = {};
          return (
            (i = ie(i, 3)),
            Hr(e, function (c, l, d) {
              Zr(n, i(c, l, d), c);
            }),
            n
          );
        }
        function d0(e, i) {
          var n = {};
          return (
            (i = ie(i, 3)),
            Hr(e, function (c, l, d) {
              Zr(n, l, i(c, l, d));
            }),
            n
          );
        }
        var g0 = hs(function (e, i, n) {
            Jn(e, i, n);
          }),
          jh = hs(function (e, i, n, c) {
            Jn(e, i, n, c);
          }),
          y0 = ei(function (e, i) {
            var n = {};
            if (e == null) return n;
            var c = !1;
            (i = Ze(i, function (d) {
              return (d = wi(d, e)), c || (c = d.length > 1), d;
            })),
              kr(e, Ua(e), n),
              c && (n = Ir(n, A | $ | L, hg));
            for (var l = i.length; l--; ) $a(n, i[l]);
            return n;
          });
        function v0(e, i) {
          return qh(e, ho(ie(i)));
        }
        var m0 = ei(function (e, i) {
          return e == null ? {} : Kd(e, i);
        });
        function qh(e, i) {
          if (e == null) return {};
          var n = Ze(Ua(e), function (c) {
            return [c];
          });
          return (
            (i = ie(i)),
            Ou(e, n, function (c, l) {
              return i(c, l[0]);
            })
          );
        }
        function w0(e, i, n) {
          i = wi(i, e);
          var c = -1,
            l = i.length;
          for (l || ((l = 1), (e = r)); ++c < l; ) {
            var d = e == null ? r : e[Br(i[c])];
            d === r && ((c = l), (d = n)), (e = ri(d) ? d.call(e) : d);
          }
          return e;
        }
        function b0(e, i, n) {
          return e == null ? e : qs(e, i, n);
        }
        function _0(e, i, n, c) {
          return (
            (c = typeof c == "function" ? c : r), e == null ? e : qs(e, i, n, c)
          );
        }
        var Mh = Yu(jt),
          zh = Yu(nr);
        function E0(e, i, n) {
          var c = ge(e),
            l = c || _i(e) || ps(e);
          if (((i = ie(i, 4)), n == null)) {
            var d = e && e.constructor;
            l
              ? (n = c ? new d() : [])
              : st(e)
              ? (n = ri(d) ? us(qn(e)) : {})
              : (n = {});
          }
          return (
            (l ? br : Hr)(e, function (w, _, R) {
              return i(n, w, _, R);
            }),
            n
          );
        }
        function I0(e, i) {
          return e == null ? !0 : $a(e, i);
        }
        function x0(e, i, n) {
          return e == null ? e : Du(e, i, La(n));
        }
        function P0(e, i, n, c) {
          return (
            (c = typeof c == "function" ? c : r),
            e == null ? e : Du(e, i, La(n), c)
          );
        }
        function ds(e) {
          return e == null ? [] : da(e, jt(e));
        }
        function S0(e) {
          return e == null ? [] : da(e, nr(e));
        }
        function R0(e, i, n) {
          return (
            n === r && ((n = i), (i = r)),
            n !== r && ((n = Sr(n)), (n = n === n ? n : 0)),
            i !== r && ((i = Sr(i)), (i = i === i ? i : 0)),
            qi(Sr(e), i, n)
          );
        }
        function A0(e, i, n) {
          return (
            (i = ii(i)),
            n === r ? ((n = i), (i = 0)) : (n = ii(n)),
            (e = Sr(e)),
            Dd(e, i, n)
          );
        }
        function O0(e, i, n) {
          if (
            (n && typeof n != "boolean" && Xt(e, i, n) && (i = n = r),
            n === r &&
              (typeof i == "boolean"
                ? ((n = i), (i = r))
                : typeof e == "boolean" && ((n = e), (e = r))),
            e === r && i === r
              ? ((e = 0), (i = 1))
              : ((e = ii(e)), i === r ? ((i = e), (e = 0)) : (i = ii(i))),
            e > i)
          ) {
            var c = e;
            (e = i), (i = c);
          }
          if (n || e % 1 || i % 1) {
            var l = hu();
            return Kt(e + l * (i - e + ze("1e-" + ((l + "").length - 1))), i);
          }
          return Ca(e, i);
        }
        var C0 = ls(function (e, i, n) {
          return (i = i.toLowerCase()), e + (n ? Uh(i) : i);
        });
        function Uh(e) {
          return ic(Ne(e).toLowerCase());
        }
        function Hh(e) {
          return (e = Ne(e)), e && e.replace(Wr, bp).replace(na, "");
        }
        function T0(e, i, n) {
          (e = Ne(e)), (i = dr(i));
          var c = e.length;
          n = n === r ? c : qi(ye(n), 0, c);
          var l = n;
          return (n -= i.length), n >= 0 && e.slice(n, l) == i;
        }
        function N0(e) {
          return (e = Ne(e)), e && Qe.test(e) ? e.replace(Oi, _p) : e;
        }
        function $0(e) {
          return (e = Ne(e)), e && Pt.test(e) ? e.replace(lt, "\\$&") : e;
        }
        var D0 = ls(function (e, i, n) {
            return e + (n ? "-" : "") + i.toLowerCase();
          }),
          F0 = ls(function (e, i, n) {
            return e + (n ? " " : "") + i.toLowerCase();
          }),
          L0 = Ku("toLowerCase");
        function j0(e, i, n) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? ss(e) : 0;
          if (!i || c >= i) return e;
          var l = (i - c) / 2;
          return to(Hn(l), n) + e + to(Un(l), n);
        }
        function q0(e, i, n) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? ss(e) : 0;
          return i && c < i ? e + to(i - c, n) : e;
        }
        function M0(e, i, n) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? ss(e) : 0;
          return i && c < i ? to(i - c, n) + e : e;
        }
        function z0(e, i, n) {
          return (
            n || i == null ? (i = 0) : i && (i = +i),
            Gp(Ne(e).replace(ft, ""), i || 0)
          );
        }
        function U0(e, i, n) {
          return (
            (n ? Xt(e, i, n) : i === r) ? (i = 1) : (i = ye(i)), Ta(Ne(e), i)
          );
        }
        function H0() {
          var e = arguments,
            i = Ne(e[0]);
          return e.length < 3 ? i : i.replace(e[1], e[2]);
        }
        var k0 = ls(function (e, i, n) {
          return e + (n ? "_" : "") + i.toLowerCase();
        });
        function B0(e, i, n) {
          return (
            n && typeof n != "number" && Xt(e, i, n) && (i = n = r),
            (n = n === r ? B : n >>> 0),
            n
              ? ((e = Ne(e)),
                e &&
                (typeof i == "string" || (i != null && !ec(i))) &&
                ((i = dr(i)), !i && is(e))
                  ? bi(Nr(e), 0, n)
                  : e.split(i, n))
              : []
          );
        }
        var K0 = ls(function (e, i, n) {
          return e + (n ? " " : "") + ic(i);
        });
        function V0(e, i, n) {
          return (
            (e = Ne(e)),
            (n = n == null ? 0 : qi(ye(n), 0, e.length)),
            (i = dr(i)),
            e.slice(n, n + i.length) == i
          );
        }
        function G0(e, i, n) {
          var c = p.templateSettings;
          n && Xt(e, i, n) && (i = r), (e = Ne(e)), (i = po({}, i, c, Zu));
          var l = po({}, i.imports, c.imports, Zu),
            d = jt(l),
            w = da(l, d),
            _,
            R,
            j = 0,
            q = i.interpolate || Ji,
            z = "__p += '",
            K = ya(
              (i.escape || Ji).source +
                "|" +
                q.source +
                "|" +
                (q === it ? Ho : Ji).source +
                "|" +
                (i.evaluate || Ji).source +
                "|$",
              "g"
            ),
            X =
              "//# sourceURL=" +
              (De.call(i, "sourceURL")
                ? (i.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++oa + "]") +
              `
`;
          e.replace(K, function (ne, _e, Se, yr, er, vr) {
            return (
              Se || (Se = yr),
              (z += e.slice(j, vr).replace(Wo, Ep)),
              _e &&
                ((_ = !0),
                (z +=
                  `' +
__e(` +
                  _e +
                  `) +
'`)),
              er &&
                ((R = !0),
                (z +=
                  `';
` +
                  er +
                  `;
__p += '`)),
              Se &&
                (z +=
                  `' +
((__t = (` +
                  Se +
                  `)) == null ? '' : __t) +
'`),
              (j = vr + ne.length),
              ne
            );
          }),
            (z += `';
`);
          var se = De.call(i, "variable") && i.variable;
          if (!se)
            z =
              `with (obj) {
` +
              z +
              `
}
`;
          else if (zo.test(se)) throw new fe(g);
          (z = (R ? z.replace(Mr, "") : z)
            .replace(Qt, "$1")
            .replace(Gr, "$1;")),
            (z =
              "function(" +
              (se || "obj") +
              `) {
` +
              (se
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (_ ? ", __e = _.escape" : "") +
              (R
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              z +
              `return __p
}`);
          var we = Bh(function () {
            return Ce(d, X + "return " + z).apply(r, w);
          });
          if (((we.source = z), Xa(we))) throw we;
          return we;
        }
        function W0(e) {
          return Ne(e).toLowerCase();
        }
        function J0(e) {
          return Ne(e).toUpperCase();
        }
        function Q0(e, i, n) {
          if (((e = Ne(e)), e && (n || i === r))) return Xc(e);
          if (!e || !(i = dr(i))) return e;
          var c = Nr(e),
            l = Nr(i),
            d = eu(c, l),
            w = tu(c, l) + 1;
          return bi(c, d, w).join("");
        }
        function Y0(e, i, n) {
          if (((e = Ne(e)), e && (n || i === r))) return e.slice(0, iu(e) + 1);
          if (!e || !(i = dr(i))) return e;
          var c = Nr(e),
            l = tu(c, Nr(i)) + 1;
          return bi(c, 0, l).join("");
        }
        function Z0(e, i, n) {
          if (((e = Ne(e)), e && (n || i === r))) return e.replace(ft, "");
          if (!e || !(i = dr(i))) return e;
          var c = Nr(e),
            l = eu(c, Nr(i));
          return bi(c, l).join("");
        }
        function X0(e, i) {
          var n = nt,
            c = Be;
          if (st(i)) {
            var l = "separator" in i ? i.separator : l;
            (n = "length" in i ? ye(i.length) : n),
              (c = "omission" in i ? dr(i.omission) : c);
          }
          e = Ne(e);
          var d = e.length;
          if (is(e)) {
            var w = Nr(e);
            d = w.length;
          }
          if (n >= d) return e;
          var _ = n - ss(c);
          if (_ < 1) return c;
          var R = w ? bi(w, 0, _).join("") : e.slice(0, _);
          if (l === r) return R + c;
          if ((w && (_ += R.length - _), ec(l))) {
            if (e.slice(_).search(l)) {
              var j,
                q = R;
              for (
                l.global || (l = ya(l.source, Ne(mr.exec(l)) + "g")),
                  l.lastIndex = 0;
                (j = l.exec(q));

              )
                var z = j.index;
              R = R.slice(0, z === r ? _ : z);
            }
          } else if (e.indexOf(dr(l), _) != _) {
            var K = R.lastIndexOf(l);
            K > -1 && (R = R.slice(0, K));
          }
          return R + c;
        }
        function em(e) {
          return (e = Ne(e)), e && ct.test(e) ? e.replace(li, Op) : e;
        }
        var tm = ls(function (e, i, n) {
            return e + (n ? " " : "") + i.toUpperCase();
          }),
          ic = Ku("toUpperCase");
        function kh(e, i, n) {
          return (
            (e = Ne(e)),
            (i = n ? r : i),
            i === r ? (xp(e) ? Np(e) : gp(e)) : e.match(i) || []
          );
        }
        var Bh = be(function (e, i) {
            try {
              return Lt(e, r, i);
            } catch (n) {
              return Xa(n) ? n : new fe(n);
            }
          }),
          rm = ei(function (e, i) {
            return (
              br(i, function (n) {
                (n = Br(n)), Zr(e, n, Ya(e[n], e));
              }),
              e
            );
          });
        function im(e) {
          var i = e == null ? 0 : e.length,
            n = ie();
          return (
            (e = i
              ? Ze(e, function (c) {
                  if (typeof c[1] != "function") throw new _r(f);
                  return [n(c[0]), c[1]];
                })
              : []),
            be(function (c) {
              for (var l = -1; ++l < i; ) {
                var d = e[l];
                if (Lt(d[0], this, c)) return Lt(d[1], this, c);
              }
            })
          );
        }
        function sm(e) {
          return Od(Ir(e, A));
        }
        function sc(e) {
          return function () {
            return e;
          };
        }
        function nm(e, i) {
          return e == null || e !== e ? i : e;
        }
        var om = Gu(),
          am = Gu(!0);
        function or(e) {
          return e;
        }
        function nc(e) {
          return Iu(typeof e == "function" ? e : Ir(e, A));
        }
        function cm(e) {
          return Pu(Ir(e, A));
        }
        function um(e, i) {
          return Su(e, Ir(i, A));
        }
        var hm = be(function (e, i) {
            return function (n) {
              return Ls(n, e, i);
            };
          }),
          lm = be(function (e, i) {
            return function (n) {
              return Ls(e, n, i);
            };
          });
        function oc(e, i, n) {
          var c = jt(i),
            l = Wn(i, c);
          n == null &&
            !(st(i) && (l.length || !c.length)) &&
            ((n = i), (i = e), (e = this), (l = Wn(i, jt(i))));
          var d = !(st(n) && "chain" in n) || !!n.chain,
            w = ri(e);
          return (
            br(l, function (_) {
              var R = i[_];
              (e[_] = R),
                w &&
                  (e.prototype[_] = function () {
                    var j = this.__chain__;
                    if (d || j) {
                      var q = e(this.__wrapped__),
                        z = (q.__actions__ = ir(this.__actions__));
                      return (
                        z.push({ func: R, args: arguments, thisArg: e }),
                        (q.__chain__ = j),
                        q
                      );
                    }
                    return R.apply(e, di([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function fm() {
          return Pe._ === this && (Pe._ = qp), this;
        }
        function ac() {}
        function pm(e) {
          return (
            (e = ye(e)),
            be(function (i) {
              return Ru(i, e);
            })
          );
        }
        var dm = qa(Ze),
          gm = qa(Wc),
          ym = qa(ua);
        function Kh(e) {
          return Ka(e) ? ha(Br(e)) : Vd(e);
        }
        function vm(e) {
          return function (i) {
            return e == null ? r : Mi(e, i);
          };
        }
        var mm = Ju(),
          wm = Ju(!0);
        function cc() {
          return [];
        }
        function uc() {
          return !1;
        }
        function bm() {
          return {};
        }
        function _m() {
          return "";
        }
        function Em() {
          return !0;
        }
        function Im(e, i) {
          if (((e = ye(e)), e < 1 || e > H)) return [];
          var n = B,
            c = Kt(e, B);
          (i = ie(i)), (e -= B);
          for (var l = pa(c, i); ++n < e; ) i(n);
          return l;
        }
        function xm(e) {
          return ge(e) ? Ze(e, Br) : gr(e) ? [e] : ir(lh(Ne(e)));
        }
        function Pm(e) {
          var i = ++Lp;
          return Ne(e) + i;
        }
        var Sm = eo(function (e, i) {
            return e + i;
          }, 0),
          Rm = Ma("ceil"),
          Am = eo(function (e, i) {
            return e / i;
          }, 1),
          Om = Ma("floor");
        function Cm(e) {
          return e && e.length ? Gn(e, or, xa) : r;
        }
        function Tm(e, i) {
          return e && e.length ? Gn(e, ie(i, 2), xa) : r;
        }
        function Nm(e) {
          return Yc(e, or);
        }
        function $m(e, i) {
          return Yc(e, ie(i, 2));
        }
        function Dm(e) {
          return e && e.length ? Gn(e, or, Aa) : r;
        }
        function Fm(e, i) {
          return e && e.length ? Gn(e, ie(i, 2), Aa) : r;
        }
        var Lm = eo(function (e, i) {
            return e * i;
          }, 1),
          jm = Ma("round"),
          qm = eo(function (e, i) {
            return e - i;
          }, 0);
        function Mm(e) {
          return e && e.length ? fa(e, or) : 0;
        }
        function zm(e, i) {
          return e && e.length ? fa(e, ie(i, 2)) : 0;
        }
        return (
          (p.after = cv),
          (p.ary = Eh),
          (p.assign = Jv),
          (p.assignIn = Lh),
          (p.assignInWith = po),
          (p.assignWith = Qv),
          (p.at = Yv),
          (p.before = Ih),
          (p.bind = Ya),
          (p.bindAll = rm),
          (p.bindKey = xh),
          (p.castArray = bv),
          (p.chain = wh),
          (p.chunk = Og),
          (p.compact = Cg),
          (p.concat = Tg),
          (p.cond = im),
          (p.conforms = sm),
          (p.constant = sc),
          (p.countBy = My),
          (p.create = Zv),
          (p.curry = Ph),
          (p.curryRight = Sh),
          (p.debounce = Rh),
          (p.defaults = Xv),
          (p.defaultsDeep = e0),
          (p.defer = uv),
          (p.delay = hv),
          (p.difference = Ng),
          (p.differenceBy = $g),
          (p.differenceWith = Dg),
          (p.drop = Fg),
          (p.dropRight = Lg),
          (p.dropRightWhile = jg),
          (p.dropWhile = qg),
          (p.fill = Mg),
          (p.filter = Uy),
          (p.flatMap = By),
          (p.flatMapDeep = Ky),
          (p.flatMapDepth = Vy),
          (p.flatten = gh),
          (p.flattenDeep = zg),
          (p.flattenDepth = Ug),
          (p.flip = lv),
          (p.flow = om),
          (p.flowRight = am),
          (p.fromPairs = Hg),
          (p.functions = a0),
          (p.functionsIn = c0),
          (p.groupBy = Gy),
          (p.initial = Bg),
          (p.intersection = Kg),
          (p.intersectionBy = Vg),
          (p.intersectionWith = Gg),
          (p.invert = h0),
          (p.invertBy = l0),
          (p.invokeMap = Jy),
          (p.iteratee = nc),
          (p.keyBy = Qy),
          (p.keys = jt),
          (p.keysIn = nr),
          (p.map = ao),
          (p.mapKeys = p0),
          (p.mapValues = d0),
          (p.matches = cm),
          (p.matchesProperty = um),
          (p.memoize = uo),
          (p.merge = g0),
          (p.mergeWith = jh),
          (p.method = hm),
          (p.methodOf = lm),
          (p.mixin = oc),
          (p.negate = ho),
          (p.nthArg = pm),
          (p.omit = y0),
          (p.omitBy = v0),
          (p.once = fv),
          (p.orderBy = Yy),
          (p.over = dm),
          (p.overArgs = pv),
          (p.overEvery = gm),
          (p.overSome = ym),
          (p.partial = Za),
          (p.partialRight = Ah),
          (p.partition = Zy),
          (p.pick = m0),
          (p.pickBy = qh),
          (p.property = Kh),
          (p.propertyOf = vm),
          (p.pull = Yg),
          (p.pullAll = vh),
          (p.pullAllBy = Zg),
          (p.pullAllWith = Xg),
          (p.pullAt = ey),
          (p.range = mm),
          (p.rangeRight = wm),
          (p.rearg = dv),
          (p.reject = tv),
          (p.remove = ty),
          (p.rest = gv),
          (p.reverse = Ja),
          (p.sampleSize = iv),
          (p.set = b0),
          (p.setWith = _0),
          (p.shuffle = sv),
          (p.slice = ry),
          (p.sortBy = av),
          (p.sortedUniq = uy),
          (p.sortedUniqBy = hy),
          (p.split = B0),
          (p.spread = yv),
          (p.tail = ly),
          (p.take = fy),
          (p.takeRight = py),
          (p.takeRightWhile = dy),
          (p.takeWhile = gy),
          (p.tap = Cy),
          (p.throttle = vv),
          (p.thru = oo),
          (p.toArray = $h),
          (p.toPairs = Mh),
          (p.toPairsIn = zh),
          (p.toPath = xm),
          (p.toPlainObject = Fh),
          (p.transform = E0),
          (p.unary = mv),
          (p.union = yy),
          (p.unionBy = vy),
          (p.unionWith = my),
          (p.uniq = wy),
          (p.uniqBy = by),
          (p.uniqWith = _y),
          (p.unset = I0),
          (p.unzip = Qa),
          (p.unzipWith = mh),
          (p.update = x0),
          (p.updateWith = P0),
          (p.values = ds),
          (p.valuesIn = S0),
          (p.without = Ey),
          (p.words = kh),
          (p.wrap = wv),
          (p.xor = Iy),
          (p.xorBy = xy),
          (p.xorWith = Py),
          (p.zip = Sy),
          (p.zipObject = Ry),
          (p.zipObjectDeep = Ay),
          (p.zipWith = Oy),
          (p.entries = Mh),
          (p.entriesIn = zh),
          (p.extend = Lh),
          (p.extendWith = po),
          oc(p, p),
          (p.add = Sm),
          (p.attempt = Bh),
          (p.camelCase = C0),
          (p.capitalize = Uh),
          (p.ceil = Rm),
          (p.clamp = R0),
          (p.clone = _v),
          (p.cloneDeep = Iv),
          (p.cloneDeepWith = xv),
          (p.cloneWith = Ev),
          (p.conformsTo = Pv),
          (p.deburr = Hh),
          (p.defaultTo = nm),
          (p.divide = Am),
          (p.endsWith = T0),
          (p.eq = Dr),
          (p.escape = N0),
          (p.escapeRegExp = $0),
          (p.every = zy),
          (p.find = Hy),
          (p.findIndex = ph),
          (p.findKey = t0),
          (p.findLast = ky),
          (p.findLastIndex = dh),
          (p.findLastKey = r0),
          (p.floor = Om),
          (p.forEach = bh),
          (p.forEachRight = _h),
          (p.forIn = i0),
          (p.forInRight = s0),
          (p.forOwn = n0),
          (p.forOwnRight = o0),
          (p.get = tc),
          (p.gt = Sv),
          (p.gte = Rv),
          (p.has = u0),
          (p.hasIn = rc),
          (p.head = yh),
          (p.identity = or),
          (p.includes = Wy),
          (p.indexOf = kg),
          (p.inRange = A0),
          (p.invoke = f0),
          (p.isArguments = Hi),
          (p.isArray = ge),
          (p.isArrayBuffer = Av),
          (p.isArrayLike = sr),
          (p.isArrayLikeObject = mt),
          (p.isBoolean = Ov),
          (p.isBuffer = _i),
          (p.isDate = Cv),
          (p.isElement = Tv),
          (p.isEmpty = Nv),
          (p.isEqual = $v),
          (p.isEqualWith = Dv),
          (p.isError = Xa),
          (p.isFinite = Fv),
          (p.isFunction = ri),
          (p.isInteger = Oh),
          (p.isLength = lo),
          (p.isMap = Ch),
          (p.isMatch = Lv),
          (p.isMatchWith = jv),
          (p.isNaN = qv),
          (p.isNative = Mv),
          (p.isNil = Uv),
          (p.isNull = zv),
          (p.isNumber = Th),
          (p.isObject = st),
          (p.isObjectLike = dt),
          (p.isPlainObject = Hs),
          (p.isRegExp = ec),
          (p.isSafeInteger = Hv),
          (p.isSet = Nh),
          (p.isString = fo),
          (p.isSymbol = gr),
          (p.isTypedArray = ps),
          (p.isUndefined = kv),
          (p.isWeakMap = Bv),
          (p.isWeakSet = Kv),
          (p.join = Wg),
          (p.kebabCase = D0),
          (p.last = Pr),
          (p.lastIndexOf = Jg),
          (p.lowerCase = F0),
          (p.lowerFirst = L0),
          (p.lt = Vv),
          (p.lte = Gv),
          (p.max = Cm),
          (p.maxBy = Tm),
          (p.mean = Nm),
          (p.meanBy = $m),
          (p.min = Dm),
          (p.minBy = Fm),
          (p.stubArray = cc),
          (p.stubFalse = uc),
          (p.stubObject = bm),
          (p.stubString = _m),
          (p.stubTrue = Em),
          (p.multiply = Lm),
          (p.nth = Qg),
          (p.noConflict = fm),
          (p.noop = ac),
          (p.now = co),
          (p.pad = j0),
          (p.padEnd = q0),
          (p.padStart = M0),
          (p.parseInt = z0),
          (p.random = O0),
          (p.reduce = Xy),
          (p.reduceRight = ev),
          (p.repeat = U0),
          (p.replace = H0),
          (p.result = w0),
          (p.round = jm),
          (p.runInContext = P),
          (p.sample = rv),
          (p.size = nv),
          (p.snakeCase = k0),
          (p.some = ov),
          (p.sortedIndex = iy),
          (p.sortedIndexBy = sy),
          (p.sortedIndexOf = ny),
          (p.sortedLastIndex = oy),
          (p.sortedLastIndexBy = ay),
          (p.sortedLastIndexOf = cy),
          (p.startCase = K0),
          (p.startsWith = V0),
          (p.subtract = qm),
          (p.sum = Mm),
          (p.sumBy = zm),
          (p.template = G0),
          (p.times = Im),
          (p.toFinite = ii),
          (p.toInteger = ye),
          (p.toLength = Dh),
          (p.toLower = W0),
          (p.toNumber = Sr),
          (p.toSafeInteger = Wv),
          (p.toString = Ne),
          (p.toUpper = J0),
          (p.trim = Q0),
          (p.trimEnd = Y0),
          (p.trimStart = Z0),
          (p.truncate = X0),
          (p.unescape = em),
          (p.uniqueId = Pm),
          (p.upperCase = tm),
          (p.upperFirst = ic),
          (p.each = bh),
          (p.eachRight = _h),
          (p.first = yh),
          oc(
            p,
            (function () {
              var e = {};
              return (
                Hr(p, function (i, n) {
                  De.call(p.prototype, n) || (e[n] = i);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (p.VERSION = s),
          br(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              p[e].placeholder = p;
            }
          ),
          br(["drop", "take"], function (e, i) {
            (xe.prototype[e] = function (n) {
              n = n === r ? 1 : $t(ye(n), 0);
              var c = this.__filtered__ && !i ? new xe(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Kt(n, c.__takeCount__))
                  : c.__views__.push({
                      size: Kt(n, B),
                      type: e + (c.__dir__ < 0 ? "Right" : ""),
                    }),
                c
              );
            }),
              (xe.prototype[e + "Right"] = function (n) {
                return this.reverse()[e](n).reverse();
              });
          }),
          br(["filter", "map", "takeWhile"], function (e, i) {
            var n = i + 1,
              c = n == b || n == J;
            xe.prototype[e] = function (l) {
              var d = this.clone();
              return (
                d.__iteratees__.push({ iteratee: ie(l, 3), type: n }),
                (d.__filtered__ = d.__filtered__ || c),
                d
              );
            };
          }),
          br(["head", "last"], function (e, i) {
            var n = "take" + (i ? "Right" : "");
            xe.prototype[e] = function () {
              return this[n](1).value()[0];
            };
          }),
          br(["initial", "tail"], function (e, i) {
            var n = "drop" + (i ? "" : "Right");
            xe.prototype[e] = function () {
              return this.__filtered__ ? new xe(this) : this[n](1);
            };
          }),
          (xe.prototype.compact = function () {
            return this.filter(or);
          }),
          (xe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (xe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (xe.prototype.invokeMap = be(function (e, i) {
            return typeof e == "function"
              ? new xe(this)
              : this.map(function (n) {
                  return Ls(n, e, i);
                });
          })),
          (xe.prototype.reject = function (e) {
            return this.filter(ho(ie(e)));
          }),
          (xe.prototype.slice = function (e, i) {
            e = ye(e);
            var n = this;
            return n.__filtered__ && (e > 0 || i < 0)
              ? new xe(n)
              : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                i !== r &&
                  ((i = ye(i)), (n = i < 0 ? n.dropRight(-i) : n.take(i - e))),
                n);
          }),
          (xe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (xe.prototype.toArray = function () {
            return this.take(B);
          }),
          Hr(xe.prototype, function (e, i) {
            var n = /^(?:filter|find|map|reject)|While$/.test(i),
              c = /^(?:head|last)$/.test(i),
              l = p[c ? "take" + (i == "last" ? "Right" : "") : i],
              d = c || /^find/.test(i);
            l &&
              (p.prototype[i] = function () {
                var w = this.__wrapped__,
                  _ = c ? [1] : arguments,
                  R = w instanceof xe,
                  j = _[0],
                  q = R || ge(w),
                  z = function (_e) {
                    var Se = l.apply(p, di([_e], _));
                    return c && K ? Se[0] : Se;
                  };
                q &&
                  n &&
                  typeof j == "function" &&
                  j.length != 1 &&
                  (R = q = !1);
                var K = this.__chain__,
                  X = !!this.__actions__.length,
                  se = d && !K,
                  we = R && !X;
                if (!d && q) {
                  w = we ? w : new xe(this);
                  var ne = e.apply(w, _);
                  return (
                    ne.__actions__.push({ func: oo, args: [z], thisArg: r }),
                    new Er(ne, K)
                  );
                }
                return se && we
                  ? e.apply(this, _)
                  : ((ne = this.thru(z)),
                    se ? (c ? ne.value()[0] : ne.value()) : ne);
              });
          }),
          br(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var i = Nn[e],
                n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                c = /^(?:pop|shift)$/.test(e);
              p.prototype[e] = function () {
                var l = arguments;
                if (c && !this.__chain__) {
                  var d = this.value();
                  return i.apply(ge(d) ? d : [], l);
                }
                return this[n](function (w) {
                  return i.apply(ge(w) ? w : [], l);
                });
              };
            }
          ),
          Hr(xe.prototype, function (e, i) {
            var n = p[i];
            if (n) {
              var c = n.name + "";
              De.call(cs, c) || (cs[c] = []), cs[c].push({ name: i, func: n });
            }
          }),
          (cs[Xn(r, oe).name] = [{ name: "wrapper", func: r }]),
          (xe.prototype.clone = ed),
          (xe.prototype.reverse = td),
          (xe.prototype.value = rd),
          (p.prototype.at = Ty),
          (p.prototype.chain = Ny),
          (p.prototype.commit = $y),
          (p.prototype.next = Dy),
          (p.prototype.plant = Ly),
          (p.prototype.reverse = jy),
          (p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = qy),
          (p.prototype.first = p.prototype.head),
          Os && (p.prototype[Os] = Fy),
          p
        );
      },
      ns = $p();
    vt ? (((vt.exports = ns)._ = ns), (Ue._ = ns)) : (Pe._ = ns);
  }.call(Js));
})(Dc, Dc.exports);
var BI = Object.defineProperty,
  KI = Object.defineProperties,
  VI = Object.getOwnPropertyDescriptors,
  ef = Object.getOwnPropertySymbols,
  GI = Object.prototype.hasOwnProperty,
  WI = Object.prototype.propertyIsEnumerable,
  tf = (a, t, r) =>
    t in a
      ? BI(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  bo = (a, t) => {
    for (var r in t || (t = {})) GI.call(t, r) && tf(a, r, t[r]);
    if (ef) for (var r of ef(t)) WI.call(t, r) && tf(a, r, t[r]);
    return a;
  },
  JI = (a, t) => KI(a, VI(t));
function Pi(a, t, r) {
  var s;
  const o = R1(a);
  return (
    ((s = t.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${kI}?chainId=${o.namespace}:${o.reference}&projectId=${r}`
  );
}
function Wi(a) {
  return a.includes(":") ? a.split(":")[1] : a;
}
function cp(a) {
  return a.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function QI(a, t) {
  const r = Object.keys(t.namespaces).filter((o) => o.includes(a));
  if (!r.length) return [];
  const s = [];
  return (
    r.forEach((o) => {
      const h = t.namespaces[o].accounts;
      s.push(...h);
    }),
    s
  );
}
function YI(a = {}, t = {}) {
  const r = rf(a),
    s = rf(t);
  return Dc.exports.merge(r, s);
}
function rf(a) {
  var t, r, s, o;
  const h = {};
  if (!Io(a)) return h;
  for (const [f, g] of Object.entries(a)) {
    const m = vf(f) ? [f] : g.chains,
      y = g.methods || [],
      E = g.events || [],
      A = g.rpcMap || {},
      $ = Qs(f);
    h[$] = JI(bo(bo({}, h[$]), g), {
      chains: lc(m, (t = h[$]) == null ? void 0 : t.chains),
      methods: lc(y, (r = h[$]) == null ? void 0 : r.methods),
      events: lc(E, (s = h[$]) == null ? void 0 : s.events),
      rpcMap: bo(bo({}, A), (o = h[$]) == null ? void 0 : o.rpcMap),
    });
  }
  return h;
}
function ZI(a) {
  return a.includes(":") ? a.split(":")[2] : a;
}
function XI(a) {
  const t = {};
  for (const [r, s] of Object.entries(a)) {
    const o = s.methods || [],
      h = s.events || [],
      f = s.accounts || [],
      g = vf(r) ? [r] : s.chains ? s.chains : cp(s.accounts);
    t[r] = { chains: g, methods: o, events: h, accounts: f };
  }
  return t;
}
function Ic(a) {
  return typeof a == "number"
    ? a
    : a.includes("0x")
    ? parseInt(a, 16)
    : a.includes(":")
    ? Number(a.split(":")[1])
    : Number(a);
}
const up = {},
  Xe = (a) => up[a],
  xc = (a, t) => {
    up[a] = t;
  };
class ex {
  constructor(t) {
    (this.name = "polkadot"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = Wi(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class tx {
  constructor(t) {
    (this.name = "eip155"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method)
      ? await this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
      (this.chainId = parseInt(t)),
      this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const s =
      r || Pi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = parseInt(Wi(r));
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const t = this.chainId,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let o = t.request.params
      ? (r = t.request.params[0]) == null
        ? void 0
        : r.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const h = parseInt(o, 16);
    if (this.isChainApproved(h)) this.setDefaultChain(`${h}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: t.topic,
        request: { method: t.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${h}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class rx {
  constructor(t) {
    (this.name = "solana"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = Wi(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class ix {
  constructor(t) {
    (this.name = "cosmos"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        hi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = Wi(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class sx {
  constructor(t) {
    (this.name = "cip34"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        hi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        const s = this.getCardanoRPCUrl(r),
          o = Wi(r);
        t[o] = this.createHttpProvider(o, s);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class nx {
  constructor(t) {
    (this.name = "elrond"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = Wi(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class ox {
  constructor(t) {
    (this.name = "multiversx"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = Wi(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
class ax {
  constructor(t) {
    (this.name = "near"),
      (this.namespace = t.namespace),
      (this.events = Xe("events")),
      (this.client = Xe("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (((this.chainId = t), !this.httpProviders[t])) {
      const s = r || Pi(`${this.name}:${t}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(hi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        t[r] = this.createHttpProvider(
          r,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Pi(t, this.namespace);
    return typeof s > "u"
      ? void 0
      : new Ri(new Si(s, Xe("disableProviderPing")));
  }
}
var cx = Object.defineProperty,
  ux = Object.defineProperties,
  hx = Object.getOwnPropertyDescriptors,
  sf = Object.getOwnPropertySymbols,
  lx = Object.prototype.hasOwnProperty,
  fx = Object.prototype.propertyIsEnumerable,
  nf = (a, t, r) =>
    t in a
      ? cx(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  _o = (a, t) => {
    for (var r in t || (t = {})) lx.call(t, r) && nf(a, r, t[r]);
    if (sf) for (var r of sf(t)) fx.call(t, r) && nf(a, r, t[r]);
    return a;
  },
  Pc = (a, t) => ux(a, hx(t));
class Vc {
  constructor(t) {
    (this.events = new Dt()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = t),
      (this.logger =
        typeof t?.logger < "u" && typeof t?.logger != "string"
          ? t.logger
          : $o(Fo({ level: t?.logger || Zl }))),
      (this.disableProviderPing = t?.disableProviderPing || !1);
  }
  static async init(t) {
    const r = new Vc(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, o] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({
      request: _o({}, t),
      chainId: `${s}:${o}`,
      topic: this.session.topic,
    });
  }
  sendAsync(t, r, s) {
    const o = new Date().getTime();
    this.request(t, s)
      .then((h) => r(null, Lo(o, h)))
      .catch((h) => r(h, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (t = this.session) == null ? void 0 : t.topic,
      reason: Gt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(t),
      await this.cleanupPendingPairings(),
      !t.skipPairing)
    )
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: t,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((h) => {
            (this.session = h),
              this.namespaces ||
                ((this.namespaces = XI(h.namespaces)),
                this.persist("namespaces", this.namespaces));
          })
          .catch((h) => {
            if (h.message !== op) throw h;
            r++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(o, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (Es(r)) {
      for (const s of r)
        t.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const t = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[t])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await TI.init({
        logger: this.providerOpts.logger || Zl,
        relayUrl: this.providerOpts.relayUrl || zI,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const t = [
      ...new Set(Object.keys(this.session.namespaces).map((r) => Qs(r))),
    ];
    xc("client", this.client),
      xc("events", this.events),
      xc("disableProviderPing", this.disableProviderPing),
      t.forEach((r) => {
        if (!this.session) return;
        const s = QI(r, this.session),
          o = cp(s),
          h = YI(this.namespaces, this.optionalNamespaces),
          f = Pc(_o({}, h[r]), { accounts: s, chains: o });
        switch (r) {
          case "eip155":
            this.rpcProviders[r] = new tx({ namespace: f });
            break;
          case "solana":
            this.rpcProviders[r] = new rx({ namespace: f });
            break;
          case "cosmos":
            this.rpcProviders[r] = new ix({ namespace: f });
            break;
          case "polkadot":
            this.rpcProviders[r] = new ex({ namespace: f });
            break;
          case "cip34":
            this.rpcProviders[r] = new sx({ namespace: f });
            break;
          case "elrond":
            this.rpcProviders[r] = new nx({ namespace: f });
            break;
          case "multiversx":
            this.rpcProviders[r] = new ox({ namespace: f });
            break;
          case "near":
            this.rpcProviders[r] = new ax({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }),
      this.client.on("session_event", (t) => {
        const { params: r } = t,
          { event: s } = r;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && Es(o) && this.events.emit("accountsChanged", o.map(ZI));
        } else if (s.name === "chainChanged") {
          const o = r.chainId,
            h = r.event.data,
            f = Qs(o),
            g = Ic(o) !== Ic(h) ? `${f}:${Ic(h)}` : o;
          this.onChainChanged(g);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", t);
      }),
      this.client.on("session_update", ({ topic: t, params: r }) => {
        var s;
        const { namespaces: o } = r,
          h = (s = this.client) == null ? void 0 : s.session.get(t);
        (this.session = Pc(_o({}, h), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: t, params: r });
      }),
      this.client.on("session_delete", async (t) => {
        await this.cleanup(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            Pc(_o({}, Gt("USER_DISCONNECTED")), { data: t.topic })
          );
      }),
      this.on(hi.DEFAULT_CHAIN_CHANGED, (t) => {
        this.onChainChanged(t, !0);
      });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace(
        (r = this.session) == null ? void 0 : r.namespaces[t]
      );
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: o } = t;
    r && Object.keys(r).length && (this.namespaces = r),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", r),
      this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [r, s] = t?.split(":") || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, s];
    if (
      r &&
      !Object.keys(this.namespaces || {})
        .map((f) => Qs(f))
        .includes(r)
    )
      throw new Error(
        `Namespace '${r}' is not configured. Please call connect() first with namespace config.`
      );
    if (r && s) return [r, s];
    const o = Qs(Object.keys(this.namespaces)[0]),
      h = this.rpcProviders[o].getDefaultChain();
    return [o, h];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces) return;
    const [o, h] = this.validateChain(t);
    r || this.getProvider(o).setDefaultChain(h),
      (((s = this.namespaces[o]) != null
        ? s
        : this.namespaces[`${o}:${h}`]
      ).defaultChain = h),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", h);
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Xl}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Xl}/${t}`);
  }
}
const px = Vc,
  dx = "wc",
  gx = "ethereum_provider",
  yx = `${dx}@2:${gx}:`,
  vx = "https://rpc.walletconnect.com/v1/",
  Fc = ["eth_sendTransaction", "personal_sign"],
  mx = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  Lc = ["chainChanged", "accountsChanged"],
  wx = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var bx = Object.defineProperty,
  _x = Object.defineProperties,
  Ex = Object.getOwnPropertyDescriptors,
  of = Object.getOwnPropertySymbols,
  Ix = Object.prototype.hasOwnProperty,
  xx = Object.prototype.propertyIsEnumerable,
  af = (a, t, r) =>
    t in a
      ? bx(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  Zs = (a, t) => {
    for (var r in t || (t = {})) Ix.call(t, r) && af(a, r, t[r]);
    if (of) for (var r of of(t)) xx.call(t, r) && af(a, r, t[r]);
    return a;
  },
  cf = (a, t) => _x(a, Ex(t));
function Co(a) {
  return Number(a[0].split(":")[1]);
}
function Sc(a) {
  return `0x${a.toString(16)}`;
}
function Px(a) {
  const {
    chains: t,
    optionalChains: r,
    methods: s,
    optionalMethods: o,
    events: h,
    optionalEvents: f,
    rpcMap: g,
  } = a;
  if (!Es(t)) throw new Error("Invalid chains");
  const m = {
      chains: t,
      methods: s || Fc,
      events: h || Lc,
      rpcMap: Zs({}, t.length ? { [Co(t)]: g[Co(t)] } : {}),
    },
    y = h?.filter((L) => !Lc.includes(L)),
    E = s?.filter((L) => !Fc.includes(L));
  if (!r && !f && !o && !(y != null && y.length) && !(E != null && E.length))
    return { required: t.length ? m : void 0 };
  const A = (y?.length && E?.length) || !r,
    $ = {
      chains: [...new Set(A ? m.chains.concat(r || []) : r)],
      methods: [...new Set(m.methods.concat(o != null && o.length ? o : mx))],
      events: [...new Set(m.events.concat(f != null && f.length ? f : wx))],
      rpcMap: g,
    };
  return { required: t.length ? m : void 0, optional: r.length ? $ : void 0 };
}
class Gc {
  constructor() {
    (this.events = new Dt.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = yx),
      (this.on = (t, r) => (this.events.on(t, r), this)),
      (this.once = (t, r) => (this.events.once(t, r), this)),
      (this.removeListener = (t, r) => (
        this.events.removeListener(t, r), this
      )),
      (this.off = (t, r) => (this.events.off(t, r), this)),
      (this.parseAccount = (t) =>
        this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(t) {
    const r = new Gc();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: s } = Px(this.rpc);
    try {
      const o = await new Promise(async (f, g) => {
        var m;
        this.rpc.showQrModal &&
          ((m = this.modal) == null ||
            m.subscribeModal((y) => {
              !y.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                g(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              cf(
                Zs(
                  { namespaces: Zs({}, r && { [this.namespace]: r }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: t?.pairingTopic }
              )
            )
            .then((y) => {
              f(y);
            })
            .catch((y) => {
              g(new Error(y.message));
            });
      });
      if (!o) return;
      const h = A1(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h),
        this.setAccounts(h),
        this.events.emit("connect", { chainId: Sc(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t,
        { event: s } = r;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", t);
    }),
      this.signer.on("chainChanged", (t) => {
        const r = parseInt(t);
        (this.chainId = r),
          this.events.emit("chainChanged", Sc(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (t) => {
        this.events.emit("session_update", t);
      }),
      this.signer.on("session_delete", (t) => {
        this.reset(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            cf(Zs({}, Gt("USER_DISCONNECTED")), {
              data: t.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (t) => {
        var r, s;
        this.rpc.showQrModal &&
          ((r = this.modal) == null || r.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: t })),
          this.events.emit("display_uri", t);
      });
  }
  switchEthereumChain(t) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: t.toString(16) }],
    });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    r.length &&
      ((this.chainId = r[0]),
      this.events.emit("chainChanged", Sc(this.chainId)),
      this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      (this.chainId = r), this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, o] = t.split(":");
    return { chainId: `${r}:${s}`, address: o };
  }
  setAccounts(t) {
    (this.accounts = t
      .filter(
        (r) =>
          this.parseChainId(this.parseAccountId(r).chainId) === this.chainId
      )
      .map((r) => this.parseAccountId(r).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const o = (r = t?.chains) != null ? r : [],
      h = (s = t?.optionalChains) != null ? s : [],
      f = o.concat(h);
    if (!f.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const g = o.length ? t?.methods || Fc : [],
      m = o.length ? t?.events || Lc : [],
      y = t?.optionalMethods || [],
      E = t?.optionalEvents || [],
      A = t?.rpcMap || this.buildRpcMap(f, t.projectId),
      $ = t?.qrModalOptions || void 0;
    return {
      chains: o?.map((L) => this.formatChainId(L)),
      optionalChains: h.map((L) => this.formatChainId(L)),
      methods: g,
      events: m,
      optionalMethods: y,
      optionalEvents: E,
      rpcMap: A,
      showQrModal: !!(t != null && t.showQrModal),
      qrModalOptions: $,
      projectId: t.projectId,
      metadata: t.metadata,
    };
  }
  buildRpcMap(t, r) {
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = this.getRpcUrl(o, r);
      }),
      s
    );
  }
  async initialize(t) {
    if (
      ((this.rpc = this.getRpcConfig(t)),
      (this.chainId = this.rpc.chains.length
        ? Co(this.rpc.chains)
        : Co(this.rpc.optionalChains)),
      (this.signer = await px.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: t.disableProviderPing,
        relayUrl: t.relayUrl,
        storageOptions: t.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let r;
      try {
        const { WalletConnectModal: s } = await O1(
          () => import("./index-6900389a.js").then((o) => o.i),
          [
            "assets/index-6900389a.js",
            "assets/index-5ce6b57e.js",
            "assets/index-6d4c3ccb.css",
          ]
        );
        r = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (r)
        try {
          this.modal = new r(
            Zs({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: s, rpcMap: o } = t;
    r &&
      Es(r) &&
      ((this.rpc.chains = r.map((h) => this.formatChainId(h))),
      r.forEach((h) => {
        this.rpc.rpcMap[h] = o?.[h] || this.getRpcUrl(h);
      })),
      s &&
        Es(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains = s?.map((h) => this.formatChainId(h))),
        s.forEach((h) => {
          this.rpc.rpcMap[h] = o?.[h] || this.getRpcUrl(h);
        }));
  }
  getRpcUrl(t, r) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) ||
      `${vx}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      r = this.session.namespaces[`${this.namespace}:${t}`]
        ? this.session.namespaces[`${this.namespace}:${t}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : r?.accounts),
      this.setAccounts(r?.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String
      ? [this.parseAccount(t)]
      : t.map((r) => this.parseAccount(r));
  }
}
const Bx = Gc;
export {
  Bx as EthereumProvider,
  wx as OPTIONAL_EVENTS,
  mx as OPTIONAL_METHODS,
  Lc as REQUIRED_EVENTS,
  Fc as REQUIRED_METHODS,
  Gc as default,
};
