import {
  a2 as ae,
  a4 as R,
  aL as he,
  aM as ue,
  a3 as j,
  aN as fe,
  aO as le,
  aP as ce,
  aQ as de,
  a5 as ge,
  ak as wt,
  aR as pe,
  a8 as St,
  a9 as ve,
  aa as ye,
  ab as A,
  af as ot,
  ag as Tt,
  aj as Ht,
  ah as N,
  aS as me,
  aT as we,
  aU as bt,
  ao as Et,
  aV as z,
  aW as Lt,
  aX as Se,
  aY as Te,
  aZ as Dt,
  a_ as xt,
  a$ as kt,
  b0 as qt,
  ae as be,
  am as Ee,
  an as De,
  ai as xe,
  b1 as It,
  b2 as Ie,
  b3 as Ut,
  b4 as Re,
  b5 as Be,
} from "./index-5ce6b57e.js";
const Ae = "/assets/logo-47a5e465.png";
var Oe = "0123456789abcdefghijklmnopqrstuvwxyz";
function q(n) {
  return Oe.charAt(n);
}
function Ve(n, t) {
  return n & t;
}
function at(n, t) {
  return n | t;
}
function Ft(n, t) {
  return n ^ t;
}
function Kt(n, t) {
  return n & ~t;
}
function _e(n) {
  if (n == 0) return -1;
  var t = 0;
  return (
    n & 65535 || ((n >>= 16), (t += 16)),
    n & 255 || ((n >>= 8), (t += 8)),
    n & 15 || ((n >>= 4), (t += 4)),
    n & 3 || ((n >>= 2), (t += 2)),
    n & 1 || ++t,
    t
  );
}
function Ne(n) {
  for (var t = 0; n != 0; ) (n &= n - 1), ++t;
  return t;
}
var et = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Qt = "=";
function gt(n) {
  var t,
    e,
    i = "";
  for (t = 0; t + 3 <= n.length; t += 3)
    (e = parseInt(n.substring(t, t + 3), 16)),
      (i += et.charAt(e >> 6) + et.charAt(e & 63));
  for (
    t + 1 == n.length
      ? ((e = parseInt(n.substring(t, t + 1), 16)), (i += et.charAt(e << 2)))
      : t + 2 == n.length &&
        ((e = parseInt(n.substring(t, t + 2), 16)),
        (i += et.charAt(e >> 2) + et.charAt((e & 3) << 4)));
    (i.length & 3) > 0;

  )
    i += Qt;
  return i;
}
function jt(n) {
  var t = "",
    e,
    i = 0,
    r = 0;
  for (e = 0; e < n.length && n.charAt(e) != Qt; ++e) {
    var s = et.indexOf(n.charAt(e));
    s < 0 ||
      (i == 0
        ? ((t += q(s >> 2)), (r = s & 3), (i = 1))
        : i == 1
        ? ((t += q((r << 2) | (s >> 4))), (r = s & 15), (i = 2))
        : i == 2
        ? ((t += q(r)), (t += q(s >> 2)), (r = s & 3), (i = 3))
        : ((t += q((r << 2) | (s >> 4))), (t += q(s & 15)), (i = 0)));
  }
  return i == 1 && (t += q(r << 2)), t;
}
var X,
  Pe = {
    decode: function (n) {
      var t;
      if (X === void 0) {
        var e = "0123456789ABCDEF",
          i = ` \f
\r	 \u2028\u2029`;
        for (X = {}, t = 0; t < 16; ++t) X[e.charAt(t)] = t;
        for (e = e.toLowerCase(), t = 10; t < 16; ++t) X[e.charAt(t)] = t;
        for (t = 0; t < i.length; ++t) X[i.charAt(t)] = -1;
      }
      var r = [],
        s = 0,
        o = 0;
      for (t = 0; t < n.length; ++t) {
        var a = n.charAt(t);
        if (a == "=") break;
        if (((a = X[a]), a != -1)) {
          if (a === void 0) throw new Error("Illegal character at offset " + t);
          (s |= a),
            ++o >= 2 ? ((r[r.length] = s), (s = 0), (o = 0)) : (s <<= 4);
        }
      }
      if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
      return r;
    },
  },
  Y,
  Ot = {
    decode: function (n) {
      var t;
      if (Y === void 0) {
        var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          i = `= \f
\r	 \u2028\u2029`;
        for (Y = Object.create(null), t = 0; t < 64; ++t) Y[e.charAt(t)] = t;
        for (Y["-"] = 62, Y._ = 63, t = 0; t < i.length; ++t)
          Y[i.charAt(t)] = -1;
      }
      var r = [],
        s = 0,
        o = 0;
      for (t = 0; t < n.length; ++t) {
        var a = n.charAt(t);
        if (a == "=") break;
        if (((a = Y[a]), a != -1)) {
          if (a === void 0) throw new Error("Illegal character at offset " + t);
          (s |= a),
            ++o >= 4
              ? ((r[r.length] = s >> 16),
                (r[r.length] = (s >> 8) & 255),
                (r[r.length] = s & 255),
                (s = 0),
                (o = 0))
              : (s <<= 6);
        }
      }
      switch (o) {
        case 1:
          throw new Error(
            "Base64 encoding incomplete: at least 2 bits missing"
          );
        case 2:
          r[r.length] = s >> 10;
          break;
        case 3:
          (r[r.length] = s >> 16), (r[r.length] = (s >> 8) & 255);
          break;
      }
      return r;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function (n) {
      var t = Ot.re.exec(n);
      if (t)
        if (t[1]) n = t[1];
        else if (t[2]) n = t[2];
        else throw new Error("RegExp out of sync");
      return Ot.decode(n);
    },
  },
  tt = 1e13,
  rt = (function () {
    function n(t) {
      this.buf = [+t || 0];
    }
    return (
      (n.prototype.mulAdd = function (t, e) {
        var i = this.buf,
          r = i.length,
          s,
          o;
        for (s = 0; s < r; ++s)
          (o = i[s] * t + e),
            o < tt ? (e = 0) : ((e = 0 | (o / tt)), (o -= e * tt)),
            (i[s] = o);
        e > 0 && (i[s] = e);
      }),
      (n.prototype.sub = function (t) {
        var e = this.buf,
          i = e.length,
          r,
          s;
        for (r = 0; r < i; ++r)
          (s = e[r] - t), s < 0 ? ((s += tt), (t = 1)) : (t = 0), (e[r] = s);
        for (; e[e.length - 1] === 0; ) e.pop();
      }),
      (n.prototype.toString = function (t) {
        if ((t || 10) != 10) throw new Error("only base 10 is supported");
        for (
          var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2;
          r >= 0;
          --r
        )
          i += (tt + e[r]).toString().substring(1);
        return i;
      }),
      (n.prototype.valueOf = function () {
        for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i)
          e = e * tt + t[i];
        return e;
      }),
      (n.prototype.simplify = function () {
        var t = this.buf;
        return t.length == 1 ? t[0] : this;
      }),
      n
    );
  })(),
  Xt = "…",
  Ce =
    /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
  Me =
    /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function it(n, t) {
  return n.length > t && (n = n.substring(0, t) + Xt), n;
}
var Rt = (function () {
    function n(t, e) {
      (this.hexDigits = "0123456789ABCDEF"),
        t instanceof n
          ? ((this.enc = t.enc), (this.pos = t.pos))
          : ((this.enc = t), (this.pos = e));
    }
    return (
      (n.prototype.get = function (t) {
        if ((t === void 0 && (t = this.pos++), t >= this.enc.length))
          throw new Error(
            "Requesting byte offset "
              .concat(t, " on a stream of length ")
              .concat(this.enc.length)
          );
        return typeof this.enc == "string"
          ? this.enc.charCodeAt(t)
          : this.enc[t];
      }),
      (n.prototype.hexByte = function (t) {
        return (
          this.hexDigits.charAt((t >> 4) & 15) + this.hexDigits.charAt(t & 15)
        );
      }),
      (n.prototype.hexDump = function (t, e, i) {
        for (var r = "", s = t; s < e; ++s)
          if (((r += this.hexByte(this.get(s))), i !== !0))
            switch (s & 15) {
              case 7:
                r += "  ";
                break;
              case 15:
                r += `
`;
                break;
              default:
                r += " ";
            }
        return r;
      }),
      (n.prototype.isASCII = function (t, e) {
        for (var i = t; i < e; ++i) {
          var r = this.get(i);
          if (r < 32 || r > 176) return !1;
        }
        return !0;
      }),
      (n.prototype.parseStringISO = function (t, e) {
        for (var i = "", r = t; r < e; ++r)
          i += String.fromCharCode(this.get(r));
        return i;
      }),
      (n.prototype.parseStringUTF = function (t, e) {
        for (var i = "", r = t; r < e; ) {
          var s = this.get(r++);
          s < 128
            ? (i += String.fromCharCode(s))
            : s > 191 && s < 224
            ? (i += String.fromCharCode(((s & 31) << 6) | (this.get(r++) & 63)))
            : (i += String.fromCharCode(
                ((s & 15) << 12) |
                  ((this.get(r++) & 63) << 6) |
                  (this.get(r++) & 63)
              ));
        }
        return i;
      }),
      (n.prototype.parseStringBMP = function (t, e) {
        for (var i = "", r, s, o = t; o < e; )
          (r = this.get(o++)),
            (s = this.get(o++)),
            (i += String.fromCharCode((r << 8) | s));
        return i;
      }),
      (n.prototype.parseTime = function (t, e, i) {
        var r = this.parseStringISO(t, e),
          s = (i ? Ce : Me).exec(r);
        return s
          ? (i && ((s[1] = +s[1]), (s[1] += +s[1] < 70 ? 2e3 : 1900)),
            (r = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4]),
            s[5] &&
              ((r += ":" + s[5]),
              s[6] && ((r += ":" + s[6]), s[7] && (r += "." + s[7]))),
            s[8] &&
              ((r += " UTC"),
              s[8] != "Z" && ((r += s[8]), s[9] && (r += ":" + s[9]))),
            r)
          : "Unrecognized time: " + r;
      }),
      (n.prototype.parseInteger = function (t, e) {
        for (
          var i = this.get(t), r = i > 127, s = r ? 255 : 0, o, a = "";
          i == s && ++t < e;

        )
          i = this.get(t);
        if (((o = e - t), o === 0)) return r ? -1 : 0;
        if (o > 4) {
          for (a = i, o <<= 3; !((+a ^ s) & 128); ) (a = +a << 1), --o;
          a =
            "(" +
            o +
            ` bit)
`;
        }
        r && (i = i - 256);
        for (var h = new rt(i), f = t + 1; f < e; ++f)
          h.mulAdd(256, this.get(f));
        return a + h.toString();
      }),
      (n.prototype.parseBitString = function (t, e, i) {
        for (
          var r = this.get(t),
            s = ((e - t - 1) << 3) - r,
            o =
              "(" +
              s +
              ` bit)
`,
            a = "",
            h = t + 1;
          h < e;
          ++h
        ) {
          for (var f = this.get(h), l = h == e - 1 ? r : 0, p = 7; p >= l; --p)
            a += (f >> p) & 1 ? "1" : "0";
          if (a.length > i) return o + it(a, i);
        }
        return o + a;
      }),
      (n.prototype.parseOctetString = function (t, e, i) {
        if (this.isASCII(t, e)) return it(this.parseStringISO(t, e), i);
        var r = e - t,
          s =
            "(" +
            r +
            ` byte)
`;
        (i /= 2), r > i && (e = t + i);
        for (var o = t; o < e; ++o) s += this.hexByte(this.get(o));
        return r > i && (s += Xt), s;
      }),
      (n.prototype.parseOID = function (t, e, i) {
        for (var r = "", s = new rt(), o = 0, a = t; a < e; ++a) {
          var h = this.get(a);
          if ((s.mulAdd(128, h & 127), (o += 7), !(h & 128))) {
            if (r === "")
              if (((s = s.simplify()), s instanceof rt))
                s.sub(80), (r = "2." + s.toString());
              else {
                var f = s < 80 ? (s < 40 ? 0 : 1) : 2;
                r = f + "." + (s - f * 40);
              }
            else r += "." + s.toString();
            if (r.length > i) return it(r, i);
            (s = new rt()), (o = 0);
          }
        }
        return o > 0 && (r += ".incomplete"), r;
      }),
      n
    );
  })(),
  He = (function () {
    function n(t, e, i, r, s) {
      if (!(r instanceof zt)) throw new Error("Invalid tag value.");
      (this.stream = t),
        (this.header = e),
        (this.length = i),
        (this.tag = r),
        (this.sub = s);
    }
    return (
      (n.prototype.typeName = function () {
        switch (this.tag.tagClass) {
          case 0:
            switch (this.tag.tagNumber) {
              case 0:
                return "EOC";
              case 1:
                return "BOOLEAN";
              case 2:
                return "INTEGER";
              case 3:
                return "BIT_STRING";
              case 4:
                return "OCTET_STRING";
              case 5:
                return "NULL";
              case 6:
                return "OBJECT_IDENTIFIER";
              case 7:
                return "ObjectDescriptor";
              case 8:
                return "EXTERNAL";
              case 9:
                return "REAL";
              case 10:
                return "ENUMERATED";
              case 11:
                return "EMBEDDED_PDV";
              case 12:
                return "UTF8String";
              case 16:
                return "SEQUENCE";
              case 17:
                return "SET";
              case 18:
                return "NumericString";
              case 19:
                return "PrintableString";
              case 20:
                return "TeletexString";
              case 21:
                return "VideotexString";
              case 22:
                return "IA5String";
              case 23:
                return "UTCTime";
              case 24:
                return "GeneralizedTime";
              case 25:
                return "GraphicString";
              case 26:
                return "VisibleString";
              case 27:
                return "GeneralString";
              case 28:
                return "UniversalString";
              case 30:
                return "BMPString";
            }
            return "Universal_" + this.tag.tagNumber.toString();
          case 1:
            return "Application_" + this.tag.tagNumber.toString();
          case 2:
            return "[" + this.tag.tagNumber.toString() + "]";
          case 3:
            return "Private_" + this.tag.tagNumber.toString();
        }
      }),
      (n.prototype.content = function (t) {
        if (this.tag === void 0) return null;
        t === void 0 && (t = 1 / 0);
        var e = this.posContent(),
          i = Math.abs(this.length);
        if (!this.tag.isUniversal())
          return this.sub !== null
            ? "(" + this.sub.length + " elem)"
            : this.stream.parseOctetString(e, e + i, t);
        switch (this.tag.tagNumber) {
          case 1:
            return this.stream.get(e) === 0 ? "false" : "true";
          case 2:
            return this.stream.parseInteger(e, e + i);
          case 3:
            return this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseBitString(e, e + i, t);
          case 4:
            return this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseOctetString(e, e + i, t);
          case 6:
            return this.stream.parseOID(e, e + i, t);
          case 16:
          case 17:
            return this.sub !== null
              ? "(" + this.sub.length + " elem)"
              : "(no elem)";
          case 12:
            return it(this.stream.parseStringUTF(e, e + i), t);
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 26:
            return it(this.stream.parseStringISO(e, e + i), t);
          case 30:
            return it(this.stream.parseStringBMP(e, e + i), t);
          case 23:
          case 24:
            return this.stream.parseTime(e, e + i, this.tag.tagNumber == 23);
        }
        return null;
      }),
      (n.prototype.toString = function () {
        return (
          this.typeName() +
          "@" +
          this.stream.pos +
          "[header:" +
          this.header +
          ",length:" +
          this.length +
          ",sub:" +
          (this.sub === null ? "null" : this.sub.length) +
          "]"
        );
      }),
      (n.prototype.toPrettyString = function (t) {
        t === void 0 && (t = "");
        var e = t + this.typeName() + " @" + this.stream.pos;
        if (
          (this.length >= 0 && (e += "+"),
          (e += this.length),
          this.tag.tagConstructed
            ? (e += " (constructed)")
            : this.tag.isUniversal() &&
              (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) &&
              this.sub !== null &&
              (e += " (encapsulates)"),
          (e += `
`),
          this.sub !== null)
        ) {
          t += "  ";
          for (var i = 0, r = this.sub.length; i < r; ++i)
            e += this.sub[i].toPrettyString(t);
        }
        return e;
      }),
      (n.prototype.posStart = function () {
        return this.stream.pos;
      }),
      (n.prototype.posContent = function () {
        return this.stream.pos + this.header;
      }),
      (n.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
      }),
      (n.prototype.toHexString = function () {
        return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
      }),
      (n.decodeLength = function (t) {
        var e = t.get(),
          i = e & 127;
        if (i == e) return i;
        if (i > 6)
          throw new Error(
            "Length over 48 bits not supported at position " + (t.pos - 1)
          );
        if (i === 0) return null;
        e = 0;
        for (var r = 0; r < i; ++r) e = e * 256 + t.get();
        return e;
      }),
      (n.prototype.getHexStringValue = function () {
        var t = this.toHexString(),
          e = this.header * 2,
          i = this.length * 2;
        return t.substr(e, i);
      }),
      (n.decode = function (t) {
        var e;
        t instanceof Rt ? (e = t) : (e = new Rt(t, 0));
        var i = new Rt(e),
          r = new zt(e),
          s = n.decodeLength(e),
          o = e.pos,
          a = o - i.pos,
          h = null,
          f = function () {
            var p = [];
            if (s !== null) {
              for (var y = o + s; e.pos < y; ) p[p.length] = n.decode(e);
              if (e.pos != y)
                throw new Error(
                  "Content size is not correct for container starting at offset " +
                    o
                );
            } else
              try {
                for (;;) {
                  var w = n.decode(e);
                  if (w.tag.isEOC()) break;
                  p[p.length] = w;
                }
                s = o - e.pos;
              } catch (b) {
                throw new Error(
                  "Exception while decoding undefined length content: " + b
                );
              }
            return p;
          };
        if (r.tagConstructed) h = f();
        else if (r.isUniversal() && (r.tagNumber == 3 || r.tagNumber == 4))
          try {
            if (r.tagNumber == 3 && e.get() != 0)
              throw new Error(
                "BIT STRINGs with unused bits cannot encapsulate."
              );
            h = f();
            for (var l = 0; l < h.length; ++l)
              if (h[l].tag.isEOC())
                throw new Error("EOC is not supposed to be actual content.");
          } catch {
            h = null;
          }
        if (h === null) {
          if (s === null)
            throw new Error(
              "We can't skip over an invalid tag with undefined length at offset " +
                o
            );
          e.pos = o + Math.abs(s);
        }
        return new n(i, a, s, r, h);
      }),
      n
    );
  })(),
  zt = (function () {
    function n(t) {
      var e = t.get();
      if (
        ((this.tagClass = e >> 6),
        (this.tagConstructed = (e & 32) !== 0),
        (this.tagNumber = e & 31),
        this.tagNumber == 31)
      ) {
        var i = new rt();
        do (e = t.get()), i.mulAdd(128, e & 127);
        while (e & 128);
        this.tagNumber = i.simplify();
      }
    }
    return (
      (n.prototype.isUniversal = function () {
        return this.tagClass === 0;
      }),
      (n.prototype.isEOC = function () {
        return this.tagClass === 0 && this.tagNumber === 0;
      }),
      n
    );
  })(),
  Z,
  Le = 0xdeadbeefcafe,
  Gt = (Le & 16777215) == 15715070,
  V = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
  ],
  ke = (1 << 26) / V[V.length - 1],
  g = (function () {
    function n(t, e, i) {
      t != null &&
        (typeof t == "number"
          ? this.fromNumber(t, e, i)
          : e == null && typeof t != "string"
          ? this.fromString(t, 256)
          : this.fromString(t, e));
    }
    return (
      (n.prototype.toString = function (t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var e;
        if (t == 16) e = 4;
        else if (t == 8) e = 3;
        else if (t == 2) e = 1;
        else if (t == 32) e = 5;
        else if (t == 4) e = 2;
        else return this.toRadix(t);
        var i = (1 << e) - 1,
          r,
          s = !1,
          o = "",
          a = this.t,
          h = this.DB - ((a * this.DB) % e);
        if (a-- > 0)
          for (
            h < this.DB && (r = this[a] >> h) > 0 && ((s = !0), (o = q(r)));
            a >= 0;

          )
            h < e
              ? ((r = (this[a] & ((1 << h) - 1)) << (e - h)),
                (r |= this[--a] >> (h += this.DB - e)))
              : ((r = (this[a] >> (h -= e)) & i),
                h <= 0 && ((h += this.DB), --a)),
              r > 0 && (s = !0),
              s && (o += q(r));
        return s ? o : "0";
      }),
      (n.prototype.negate = function () {
        var t = m();
        return n.ZERO.subTo(this, t), t;
      }),
      (n.prototype.abs = function () {
        return this.s < 0 ? this.negate() : this;
      }),
      (n.prototype.compareTo = function (t) {
        var e = this.s - t.s;
        if (e != 0) return e;
        var i = this.t;
        if (((e = i - t.t), e != 0)) return this.s < 0 ? -e : e;
        for (; --i >= 0; ) if ((e = this[i] - t[i]) != 0) return e;
        return 0;
      }),
      (n.prototype.bitLength = function () {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + ht(this[this.t - 1] ^ (this.s & this.DM));
      }),
      (n.prototype.mod = function (t) {
        var e = m();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(n.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }),
      (n.prototype.modPowInt = function (t, e) {
        var i;
        return (
          t < 256 || e.isEven() ? (i = new $t(e)) : (i = new Zt(e)),
          this.exp(t, i)
        );
      }),
      (n.prototype.clone = function () {
        var t = m();
        return this.copyTo(t), t;
      }),
      (n.prototype.intValue = function () {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;
          if (this.t == 0) return -1;
        } else {
          if (this.t == 1) return this[0];
          if (this.t == 0) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }),
      (n.prototype.byteValue = function () {
        return this.t == 0 ? this.s : (this[0] << 24) >> 24;
      }),
      (n.prototype.shortValue = function () {
        return this.t == 0 ? this.s : (this[0] << 16) >> 16;
      }),
      (n.prototype.signum = function () {
        return this.s < 0
          ? -1
          : this.t <= 0 || (this.t == 1 && this[0] <= 0)
          ? 0
          : 1;
      }),
      (n.prototype.toByteArray = function () {
        var t = this.t,
          e = [];
        e[0] = this.s;
        var i = this.DB - ((t * this.DB) % 8),
          r,
          s = 0;
        if (t-- > 0)
          for (
            i < this.DB &&
            (r = this[t] >> i) != (this.s & this.DM) >> i &&
            (e[s++] = r | (this.s << (this.DB - i)));
            t >= 0;

          )
            i < 8
              ? ((r = (this[t] & ((1 << i) - 1)) << (8 - i)),
                (r |= this[--t] >> (i += this.DB - 8)))
              : ((r = (this[t] >> (i -= 8)) & 255),
                i <= 0 && ((i += this.DB), --t)),
              r & 128 && (r |= -256),
              s == 0 && (this.s & 128) != (r & 128) && ++s,
              (s > 0 || r != this.s) && (e[s++] = r);
        return e;
      }),
      (n.prototype.equals = function (t) {
        return this.compareTo(t) == 0;
      }),
      (n.prototype.min = function (t) {
        return this.compareTo(t) < 0 ? this : t;
      }),
      (n.prototype.max = function (t) {
        return this.compareTo(t) > 0 ? this : t;
      }),
      (n.prototype.and = function (t) {
        var e = m();
        return this.bitwiseTo(t, Ve, e), e;
      }),
      (n.prototype.or = function (t) {
        var e = m();
        return this.bitwiseTo(t, at, e), e;
      }),
      (n.prototype.xor = function (t) {
        var e = m();
        return this.bitwiseTo(t, Ft, e), e;
      }),
      (n.prototype.andNot = function (t) {
        var e = m();
        return this.bitwiseTo(t, Kt, e), e;
      }),
      (n.prototype.not = function () {
        for (var t = m(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
        return (t.t = this.t), (t.s = ~this.s), t;
      }),
      (n.prototype.shiftLeft = function (t) {
        var e = m();
        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
      }),
      (n.prototype.shiftRight = function (t) {
        var e = m();
        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
      }),
      (n.prototype.getLowestSetBit = function () {
        for (var t = 0; t < this.t; ++t)
          if (this[t] != 0) return t * this.DB + _e(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }),
      (n.prototype.bitCount = function () {
        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
          t += Ne(this[i] ^ e);
        return t;
      }),
      (n.prototype.testBit = function (t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t ? this.s != 0 : (this[e] & (1 << t % this.DB)) != 0;
      }),
      (n.prototype.setBit = function (t) {
        return this.changeBit(t, at);
      }),
      (n.prototype.clearBit = function (t) {
        return this.changeBit(t, Kt);
      }),
      (n.prototype.flipBit = function (t) {
        return this.changeBit(t, Ft);
      }),
      (n.prototype.add = function (t) {
        var e = m();
        return this.addTo(t, e), e;
      }),
      (n.prototype.subtract = function (t) {
        var e = m();
        return this.subTo(t, e), e;
      }),
      (n.prototype.multiply = function (t) {
        var e = m();
        return this.multiplyTo(t, e), e;
      }),
      (n.prototype.divide = function (t) {
        var e = m();
        return this.divRemTo(t, e, null), e;
      }),
      (n.prototype.remainder = function (t) {
        var e = m();
        return this.divRemTo(t, null, e), e;
      }),
      (n.prototype.divideAndRemainder = function (t) {
        var e = m(),
          i = m();
        return this.divRemTo(t, e, i), [e, i];
      }),
      (n.prototype.modPow = function (t, e) {
        var i = t.bitLength(),
          r,
          s = G(1),
          o;
        if (i <= 0) return s;
        i < 18
          ? (r = 1)
          : i < 48
          ? (r = 3)
          : i < 144
          ? (r = 4)
          : i < 768
          ? (r = 5)
          : (r = 6),
          i < 8
            ? (o = new $t(e))
            : e.isEven()
            ? (o = new Ue(e))
            : (o = new Zt(e));
        var a = [],
          h = 3,
          f = r - 1,
          l = (1 << r) - 1;
        if (((a[1] = o.convert(this)), r > 1)) {
          var p = m();
          for (o.sqrTo(a[1], p); h <= l; )
            (a[h] = m()), o.mulTo(p, a[h - 2], a[h]), (h += 2);
        }
        var y = t.t - 1,
          w,
          b = !0,
          S = m(),
          I;
        for (i = ht(t[y]) - 1; y >= 0; ) {
          for (
            i >= f
              ? (w = (t[y] >> (i - f)) & l)
              : ((w = (t[y] & ((1 << (i + 1)) - 1)) << (f - i)),
                y > 0 && (w |= t[y - 1] >> (this.DB + i - f))),
              h = r;
            !(w & 1);

          )
            (w >>= 1), --h;
          if (((i -= h) < 0 && ((i += this.DB), --y), b))
            a[w].copyTo(s), (b = !1);
          else {
            for (; h > 1; ) o.sqrTo(s, S), o.sqrTo(S, s), (h -= 2);
            h > 0 ? o.sqrTo(s, S) : ((I = s), (s = S), (S = I)),
              o.mulTo(S, a[w], s);
          }
          for (; y >= 0 && !(t[y] & (1 << i)); )
            o.sqrTo(s, S),
              (I = s),
              (s = S),
              (S = I),
              --i < 0 && ((i = this.DB - 1), --y);
        }
        return o.revert(s);
      }),
      (n.prototype.modInverse = function (t) {
        var e = t.isEven();
        if ((this.isEven() && e) || t.signum() == 0) return n.ZERO;
        for (
          var i = t.clone(),
            r = this.clone(),
            s = G(1),
            o = G(0),
            a = G(0),
            h = G(1);
          i.signum() != 0;

        ) {
          for (; i.isEven(); )
            i.rShiftTo(1, i),
              e
                ? ((!s.isEven() || !o.isEven()) &&
                    (s.addTo(this, s), o.subTo(t, o)),
                  s.rShiftTo(1, s))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o);
          for (; r.isEven(); )
            r.rShiftTo(1, r),
              e
                ? ((!a.isEven() || !h.isEven()) &&
                    (a.addTo(this, a), h.subTo(t, h)),
                  a.rShiftTo(1, a))
                : h.isEven() || h.subTo(t, h),
              h.rShiftTo(1, h);
          i.compareTo(r) >= 0
            ? (i.subTo(r, i), e && s.subTo(a, s), o.subTo(h, o))
            : (r.subTo(i, r), e && a.subTo(s, a), h.subTo(o, h));
        }
        if (r.compareTo(n.ONE) != 0) return n.ZERO;
        if (h.compareTo(t) >= 0) return h.subtract(t);
        if (h.signum() < 0) h.addTo(t, h);
        else return h;
        return h.signum() < 0 ? h.add(t) : h;
      }),
      (n.prototype.pow = function (t) {
        return this.exp(t, new qe());
      }),
      (n.prototype.gcd = function (t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          i = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(i) < 0) {
          var r = e;
          (e = i), (i = r);
        }
        var s = e.getLowestSetBit(),
          o = i.getLowestSetBit();
        if (o < 0) return e;
        for (
          s < o && (o = s), o > 0 && (e.rShiftTo(o, e), i.rShiftTo(o, i));
          e.signum() > 0;

        )
          (s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e),
            (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
            e.compareTo(i) >= 0
              ? (e.subTo(i, e), e.rShiftTo(1, e))
              : (i.subTo(e, i), i.rShiftTo(1, i));
        return o > 0 && i.lShiftTo(o, i), i;
      }),
      (n.prototype.isProbablePrime = function (t) {
        var e,
          i = this.abs();
        if (i.t == 1 && i[0] <= V[V.length - 1]) {
          for (e = 0; e < V.length; ++e) if (i[0] == V[e]) return !0;
          return !1;
        }
        if (i.isEven()) return !1;
        for (e = 1; e < V.length; ) {
          for (var r = V[e], s = e + 1; s < V.length && r < ke; ) r *= V[s++];
          for (r = i.modInt(r); e < s; ) if (r % V[e++] == 0) return !1;
        }
        return i.millerRabin(t);
      }),
      (n.prototype.copyTo = function (t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        (t.t = this.t), (t.s = this.s);
      }),
      (n.prototype.fromInt = function (t) {
        (this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0
            ? (this[0] = t)
            : t < -1
            ? (this[0] = t + this.DV)
            : (this.t = 0);
      }),
      (n.prototype.fromString = function (t, e) {
        var i;
        if (e == 16) i = 4;
        else if (e == 8) i = 3;
        else if (e == 256) i = 8;
        else if (e == 2) i = 1;
        else if (e == 32) i = 5;
        else if (e == 4) i = 2;
        else {
          this.fromRadix(t, e);
          return;
        }
        (this.t = 0), (this.s = 0);
        for (var r = t.length, s = !1, o = 0; --r >= 0; ) {
          var a = i == 8 ? +t[r] & 255 : Wt(t, r);
          if (a < 0) {
            t.charAt(r) == "-" && (s = !0);
            continue;
          }
          (s = !1),
            o == 0
              ? (this[this.t++] = a)
              : o + i > this.DB
              ? ((this[this.t - 1] |= (a & ((1 << (this.DB - o)) - 1)) << o),
                (this[this.t++] = a >> (this.DB - o)))
              : (this[this.t - 1] |= a << o),
            (o += i),
            o >= this.DB && (o -= this.DB);
        }
        i == 8 &&
          +t[0] & 128 &&
          ((this.s = -1),
          o > 0 && (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
          this.clamp(),
          s && n.ZERO.subTo(this, this);
      }),
      (n.prototype.clamp = function () {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
          --this.t;
      }),
      (n.prototype.dlShiftTo = function (t, e) {
        var i;
        for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
        for (i = t - 1; i >= 0; --i) e[i] = 0;
        (e.t = this.t + t), (e.s = this.s);
      }),
      (n.prototype.drShiftTo = function (t, e) {
        for (var i = t; i < this.t; ++i) e[i - t] = this[i];
        (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
      }),
      (n.prototype.lShiftTo = function (t, e) {
        for (
          var i = t % this.DB,
            r = this.DB - i,
            s = (1 << r) - 1,
            o = Math.floor(t / this.DB),
            a = (this.s << i) & this.DM,
            h = this.t - 1;
          h >= 0;
          --h
        )
          (e[h + o + 1] = (this[h] >> r) | a), (a = (this[h] & s) << i);
        for (var h = o - 1; h >= 0; --h) e[h] = 0;
        (e[o] = a), (e.t = this.t + o + 1), (e.s = this.s), e.clamp();
      }),
      (n.prototype.rShiftTo = function (t, e) {
        e.s = this.s;
        var i = Math.floor(t / this.DB);
        if (i >= this.t) {
          e.t = 0;
          return;
        }
        var r = t % this.DB,
          s = this.DB - r,
          o = (1 << r) - 1;
        e[0] = this[i] >> r;
        for (var a = i + 1; a < this.t; ++a)
          (e[a - i - 1] |= (this[a] & o) << s), (e[a - i] = this[a] >> r);
        r > 0 && (e[this.t - i - 1] |= (this.s & o) << s),
          (e.t = this.t - i),
          e.clamp();
      }),
      (n.prototype.subTo = function (t, e) {
        for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s; )
          (r += this[i] - t[i]), (e[i++] = r & this.DM), (r >>= this.DB);
        if (t.t < this.t) {
          for (r -= t.s; i < this.t; )
            (r += this[i]), (e[i++] = r & this.DM), (r >>= this.DB);
          r += this.s;
        } else {
          for (r += this.s; i < t.t; )
            (r -= t[i]), (e[i++] = r & this.DM), (r >>= this.DB);
          r -= t.s;
        }
        (e.s = r < 0 ? -1 : 0),
          r < -1 ? (e[i++] = this.DV + r) : r > 0 && (e[i++] = r),
          (e.t = i),
          e.clamp();
      }),
      (n.prototype.multiplyTo = function (t, e) {
        var i = this.abs(),
          r = t.abs(),
          s = i.t;
        for (e.t = s + r.t; --s >= 0; ) e[s] = 0;
        for (s = 0; s < r.t; ++s) e[s + i.t] = i.am(0, r[s], e, s, 0, i.t);
        (e.s = 0), e.clamp(), this.s != t.s && n.ZERO.subTo(e, e);
      }),
      (n.prototype.squareTo = function (t) {
        for (var e = this.abs(), i = (t.t = 2 * e.t); --i >= 0; ) t[i] = 0;
        for (i = 0; i < e.t - 1; ++i) {
          var r = e.am(i, e[i], t, 2 * i, 0, 1);
          (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >=
            e.DV && ((t[i + e.t] -= e.DV), (t[i + e.t + 1] = 1));
        }
        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
          (t.s = 0),
          t.clamp();
      }),
      (n.prototype.divRemTo = function (t, e, i) {
        var r = t.abs();
        if (!(r.t <= 0)) {
          var s = this.abs();
          if (s.t < r.t) {
            e?.fromInt(0), i != null && this.copyTo(i);
            return;
          }
          i == null && (i = m());
          var o = m(),
            a = this.s,
            h = t.s,
            f = this.DB - ht(r[r.t - 1]);
          f > 0
            ? (r.lShiftTo(f, o), s.lShiftTo(f, i))
            : (r.copyTo(o), s.copyTo(i));
          var l = o.t,
            p = o[l - 1];
          if (p != 0) {
            var y = p * (1 << this.F1) + (l > 1 ? o[l - 2] >> this.F2 : 0),
              w = this.FV / y,
              b = (1 << this.F1) / y,
              S = 1 << this.F2,
              I = i.t,
              M = I - l,
              _ = e ?? m();
            for (
              o.dlShiftTo(M, _),
                i.compareTo(_) >= 0 && ((i[i.t++] = 1), i.subTo(_, i)),
                n.ONE.dlShiftTo(l, _),
                _.subTo(o, o);
              o.t < l;

            )
              o[o.t++] = 0;
            for (; --M >= 0; ) {
              var L =
                i[--I] == p
                  ? this.DM
                  : Math.floor(i[I] * w + (i[I - 1] + S) * b);
              if ((i[I] += o.am(0, L, i, M, 0, l)) < L)
                for (o.dlShiftTo(M, _), i.subTo(_, i); i[I] < --L; )
                  i.subTo(_, i);
            }
            e != null && (i.drShiftTo(l, e), a != h && n.ZERO.subTo(e, e)),
              (i.t = l),
              i.clamp(),
              f > 0 && i.rShiftTo(f, i),
              a < 0 && n.ZERO.subTo(i, i);
          }
        }
      }),
      (n.prototype.invDigit = function () {
        if (this.t < 1) return 0;
        var t = this[0];
        if (!(t & 1)) return 0;
        var e = t & 3;
        return (
          (e = (e * (2 - (t & 15) * e)) & 15),
          (e = (e * (2 - (t & 255) * e)) & 255),
          (e = (e * (2 - (((t & 65535) * e) & 65535))) & 65535),
          (e = (e * (2 - ((t * e) % this.DV))) % this.DV),
          e > 0 ? this.DV - e : -e
        );
      }),
      (n.prototype.isEven = function () {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }),
      (n.prototype.exp = function (t, e) {
        if (t > 4294967295 || t < 1) return n.ONE;
        var i = m(),
          r = m(),
          s = e.convert(this),
          o = ht(t) - 1;
        for (s.copyTo(i); --o >= 0; )
          if ((e.sqrTo(i, r), (t & (1 << o)) > 0)) e.mulTo(r, s, i);
          else {
            var a = i;
            (i = r), (r = a);
          }
        return e.revert(i);
      }),
      (n.prototype.chunkSize = function (t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }),
      (n.prototype.toRadix = function (t) {
        if ((t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          i = Math.pow(t, e),
          r = G(i),
          s = m(),
          o = m(),
          a = "";
        for (this.divRemTo(r, s, o); s.signum() > 0; )
          (a = (i + o.intValue()).toString(t).substr(1) + a),
            s.divRemTo(r, s, o);
        return o.intValue().toString(t) + a;
      }),
      (n.prototype.fromRadix = function (t, e) {
        this.fromInt(0), e == null && (e = 10);
        for (
          var i = this.chunkSize(e),
            r = Math.pow(e, i),
            s = !1,
            o = 0,
            a = 0,
            h = 0;
          h < t.length;
          ++h
        ) {
          var f = Wt(t, h);
          if (f < 0) {
            t.charAt(h) == "-" && this.signum() == 0 && (s = !0);
            continue;
          }
          (a = e * a + f),
            ++o >= i &&
              (this.dMultiply(r), this.dAddOffset(a, 0), (o = 0), (a = 0));
        }
        o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(a, 0)),
          s && n.ZERO.subTo(this, this);
      }),
      (n.prototype.fromNumber = function (t, e, i) {
        if (typeof e == "number")
          if (t < 2) this.fromInt(1);
          else
            for (
              this.fromNumber(t, i),
                this.testBit(t - 1) ||
                  this.bitwiseTo(n.ONE.shiftLeft(t - 1), at, this),
                this.isEven() && this.dAddOffset(1, 0);
              !this.isProbablePrime(e);

            )
              this.dAddOffset(2, 0),
                this.bitLength() > t &&
                  this.subTo(n.ONE.shiftLeft(t - 1), this);
        else {
          var r = [],
            s = t & 7;
          (r.length = (t >> 3) + 1),
            e.nextBytes(r),
            s > 0 ? (r[0] &= (1 << s) - 1) : (r[0] = 0),
            this.fromString(r, 256);
        }
      }),
      (n.prototype.bitwiseTo = function (t, e, i) {
        var r,
          s,
          o = Math.min(t.t, this.t);
        for (r = 0; r < o; ++r) i[r] = e(this[r], t[r]);
        if (t.t < this.t) {
          for (s = t.s & this.DM, r = o; r < this.t; ++r) i[r] = e(this[r], s);
          i.t = this.t;
        } else {
          for (s = this.s & this.DM, r = o; r < t.t; ++r) i[r] = e(s, t[r]);
          i.t = t.t;
        }
        (i.s = e(this.s, t.s)), i.clamp();
      }),
      (n.prototype.changeBit = function (t, e) {
        var i = n.ONE.shiftLeft(t);
        return this.bitwiseTo(i, e, i), i;
      }),
      (n.prototype.addTo = function (t, e) {
        for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s; )
          (r += this[i] + t[i]), (e[i++] = r & this.DM), (r >>= this.DB);
        if (t.t < this.t) {
          for (r += t.s; i < this.t; )
            (r += this[i]), (e[i++] = r & this.DM), (r >>= this.DB);
          r += this.s;
        } else {
          for (r += this.s; i < t.t; )
            (r += t[i]), (e[i++] = r & this.DM), (r >>= this.DB);
          r += t.s;
        }
        (e.s = r < 0 ? -1 : 0),
          r > 0 ? (e[i++] = r) : r < -1 && (e[i++] = this.DV + r),
          (e.t = i),
          e.clamp();
      }),
      (n.prototype.dMultiply = function (t) {
        (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp();
      }),
      (n.prototype.dAddOffset = function (t, e) {
        if (t != 0) {
          for (; this.t <= e; ) this[this.t++] = 0;
          for (this[e] += t; this[e] >= this.DV; )
            (this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e];
        }
      }),
      (n.prototype.multiplyLowerTo = function (t, e, i) {
        var r = Math.min(this.t + t.t, e);
        for (i.s = 0, i.t = r; r > 0; ) i[--r] = 0;
        for (var s = i.t - this.t; r < s; ++r)
          i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
        for (var s = Math.min(t.t, e); r < s; ++r)
          this.am(0, t[r], i, r, 0, e - r);
        i.clamp();
      }),
      (n.prototype.multiplyUpperTo = function (t, e, i) {
        --e;
        var r = (i.t = this.t + t.t - e);
        for (i.s = 0; --r >= 0; ) i[r] = 0;
        for (r = Math.max(e - this.t, 0); r < t.t; ++r)
          i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
        i.clamp(), i.drShiftTo(1, i);
      }),
      (n.prototype.modInt = function (t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          i = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (e == 0) i = this[0] % t;
          else for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
        return i;
      }),
      (n.prototype.millerRabin = function (t) {
        var e = this.subtract(n.ONE),
          i = e.getLowestSetBit();
        if (i <= 0) return !1;
        var r = e.shiftRight(i);
        (t = (t + 1) >> 1), t > V.length && (t = V.length);
        for (var s = m(), o = 0; o < t; ++o) {
          s.fromInt(V[Math.floor(Math.random() * V.length)]);
          var a = s.modPow(r, this);
          if (a.compareTo(n.ONE) != 0 && a.compareTo(e) != 0) {
            for (var h = 1; h++ < i && a.compareTo(e) != 0; )
              if (((a = a.modPowInt(2, this)), a.compareTo(n.ONE) == 0))
                return !1;
            if (a.compareTo(e) != 0) return !1;
          }
        }
        return !0;
      }),
      (n.prototype.square = function () {
        var t = m();
        return this.squareTo(t), t;
      }),
      (n.prototype.gcda = function (t, e) {
        var i = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (i.compareTo(r) < 0) {
          var s = i;
          (i = r), (r = s);
        }
        var o = i.getLowestSetBit(),
          a = r.getLowestSetBit();
        if (a < 0) {
          e(i);
          return;
        }
        o < a && (a = o), a > 0 && (i.rShiftTo(a, i), r.rShiftTo(a, r));
        var h = function () {
          (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
            (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
            i.compareTo(r) >= 0
              ? (i.subTo(r, i), i.rShiftTo(1, i))
              : (r.subTo(i, r), r.rShiftTo(1, r)),
            i.signum() > 0
              ? setTimeout(h, 0)
              : (a > 0 && r.lShiftTo(a, r),
                setTimeout(function () {
                  e(r);
                }, 0));
        };
        setTimeout(h, 10);
      }),
      (n.prototype.fromNumberAsync = function (t, e, i, r) {
        if (typeof e == "number")
          if (t < 2) this.fromInt(1);
          else {
            this.fromNumber(t, i),
              this.testBit(t - 1) ||
                this.bitwiseTo(n.ONE.shiftLeft(t - 1), at, this),
              this.isEven() && this.dAddOffset(1, 0);
            var s = this,
              o = function () {
                s.dAddOffset(2, 0),
                  s.bitLength() > t && s.subTo(n.ONE.shiftLeft(t - 1), s),
                  s.isProbablePrime(e)
                    ? setTimeout(function () {
                        r();
                      }, 0)
                    : setTimeout(o, 0);
              };
            setTimeout(o, 0);
          }
        else {
          var a = [],
            h = t & 7;
          (a.length = (t >> 3) + 1),
            e.nextBytes(a),
            h > 0 ? (a[0] &= (1 << h) - 1) : (a[0] = 0),
            this.fromString(a, 256);
        }
      }),
      n
    );
  })(),
  qe = (function () {
    function n() {}
    return (
      (n.prototype.convert = function (t) {
        return t;
      }),
      (n.prototype.revert = function (t) {
        return t;
      }),
      (n.prototype.mulTo = function (t, e, i) {
        t.multiplyTo(e, i);
      }),
      (n.prototype.sqrTo = function (t, e) {
        t.squareTo(e);
      }),
      n
    );
  })(),
  $t = (function () {
    function n(t) {
      this.m = t;
    }
    return (
      (n.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }),
      (n.prototype.revert = function (t) {
        return t;
      }),
      (n.prototype.reduce = function (t) {
        t.divRemTo(this.m, null, t);
      }),
      (n.prototype.mulTo = function (t, e, i) {
        t.multiplyTo(e, i), this.reduce(i);
      }),
      (n.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }),
      n
    );
  })(),
  Zt = (function () {
    function n(t) {
      (this.m = t),
        (this.mp = t.invDigit()),
        (this.mpl = this.mp & 32767),
        (this.mph = this.mp >> 15),
        (this.um = (1 << (t.DB - 15)) - 1),
        (this.mt2 = 2 * t.t);
    }
    return (
      (n.prototype.convert = function (t) {
        var e = m();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(g.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }),
      (n.prototype.revert = function (t) {
        var e = m();
        return t.copyTo(e), this.reduce(e), e;
      }),
      (n.prototype.reduce = function (t) {
        for (; t.t <= this.mt2; ) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var i = t[e] & 32767,
            r =
              (i * this.mpl +
                (((i * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          for (
            i = e + this.m.t, t[i] += this.m.am(0, r, t, e, 0, this.m.t);
            t[i] >= t.DV;

          )
            (t[i] -= t.DV), t[++i]++;
        }
        t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
      }),
      (n.prototype.mulTo = function (t, e, i) {
        t.multiplyTo(e, i), this.reduce(i);
      }),
      (n.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }),
      n
    );
  })(),
  Ue = (function () {
    function n(t) {
      (this.m = t),
        (this.r2 = m()),
        (this.q3 = m()),
        g.ONE.dlShiftTo(2 * t.t, this.r2),
        (this.mu = this.r2.divide(t));
    }
    return (
      (n.prototype.convert = function (t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = m();
        return t.copyTo(e), this.reduce(e), e;
      }),
      (n.prototype.revert = function (t) {
        return t;
      }),
      (n.prototype.reduce = function (t) {
        for (
          t.drShiftTo(this.m.t - 1, this.r2),
            t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
          t.compareTo(this.r2) < 0;

        )
          t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
          t.subTo(this.m, t);
      }),
      (n.prototype.mulTo = function (t, e, i) {
        t.multiplyTo(e, i), this.reduce(i);
      }),
      (n.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }),
      n
    );
  })();
function m() {
  return new g(null);
}
function E(n, t) {
  return new g(n, t);
}
var Jt = typeof navigator < "u";
Jt && Gt && navigator.appName == "Microsoft Internet Explorer"
  ? ((g.prototype.am = function (t, e, i, r, s, o) {
      for (var a = e & 32767, h = e >> 15; --o >= 0; ) {
        var f = this[t] & 32767,
          l = this[t++] >> 15,
          p = h * f + l * a;
        (f = a * f + ((p & 32767) << 15) + i[r] + (s & 1073741823)),
          (s = (f >>> 30) + (p >>> 15) + h * l + (s >>> 30)),
          (i[r++] = f & 1073741823);
      }
      return s;
    }),
    (Z = 30))
  : Jt && Gt && navigator.appName != "Netscape"
  ? ((g.prototype.am = function (t, e, i, r, s, o) {
      for (; --o >= 0; ) {
        var a = e * this[t++] + i[r] + s;
        (s = Math.floor(a / 67108864)), (i[r++] = a & 67108863);
      }
      return s;
    }),
    (Z = 26))
  : ((g.prototype.am = function (t, e, i, r, s, o) {
      for (var a = e & 16383, h = e >> 14; --o >= 0; ) {
        var f = this[t] & 16383,
          l = this[t++] >> 14,
          p = h * f + l * a;
        (f = a * f + ((p & 16383) << 14) + i[r] + s),
          (s = (f >> 28) + (p >> 14) + h * l),
          (i[r++] = f & 268435455);
      }
      return s;
    }),
    (Z = 28));
g.prototype.DB = Z;
g.prototype.DM = (1 << Z) - 1;
g.prototype.DV = 1 << Z;
var _t = 52;
g.prototype.FV = Math.pow(2, _t);
g.prototype.F1 = _t - Z;
g.prototype.F2 = 2 * Z - _t;
var pt = [],
  nt,
  P;
nt = "0".charCodeAt(0);
for (P = 0; P <= 9; ++P) pt[nt++] = P;
nt = "a".charCodeAt(0);
for (P = 10; P < 36; ++P) pt[nt++] = P;
nt = "A".charCodeAt(0);
for (P = 10; P < 36; ++P) pt[nt++] = P;
function Wt(n, t) {
  var e = pt[n.charCodeAt(t)];
  return e ?? -1;
}
function G(n) {
  var t = m();
  return t.fromInt(n), t;
}
function ht(n) {
  var t = 1,
    e;
  return (
    (e = n >>> 16) != 0 && ((n = e), (t += 16)),
    (e = n >> 8) != 0 && ((n = e), (t += 8)),
    (e = n >> 4) != 0 && ((n = e), (t += 4)),
    (e = n >> 2) != 0 && ((n = e), (t += 2)),
    (e = n >> 1) != 0 && ((n = e), (t += 1)),
    t
  );
}
g.ZERO = G(0);
g.ONE = G(1);
var Fe = (function () {
  function n() {
    (this.i = 0), (this.j = 0), (this.S = []);
  }
  return (
    (n.prototype.init = function (t) {
      var e, i, r;
      for (e = 0; e < 256; ++e) this.S[e] = e;
      for (i = 0, e = 0; e < 256; ++e)
        (i = (i + this.S[e] + t[e % t.length]) & 255),
          (r = this.S[e]),
          (this.S[e] = this.S[i]),
          (this.S[i] = r);
      (this.i = 0), (this.j = 0);
    }),
    (n.prototype.next = function () {
      var t;
      return (
        (this.i = (this.i + 1) & 255),
        (this.j = (this.j + this.S[this.i]) & 255),
        (t = this.S[this.i]),
        (this.S[this.i] = this.S[this.j]),
        (this.S[this.j] = t),
        this.S[(t + this.S[this.i]) & 255]
      );
    }),
    n
  );
})();
function Ke() {
  return new Fe();
}
var te = 256,
  ut,
  $ = null,
  C;
if ($ == null) {
  ($ = []), (C = 0);
  var ft = void 0;
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    var Bt = new Uint32Array(256);
    for (window.crypto.getRandomValues(Bt), ft = 0; ft < Bt.length; ++ft)
      $[C++] = Bt[ft] & 255;
  }
  var lt = 0,
    ct = function (n) {
      if (((lt = lt || 0), lt >= 256 || C >= te)) {
        window.removeEventListener
          ? window.removeEventListener("mousemove", ct, !1)
          : window.detachEvent && window.detachEvent("onmousemove", ct);
        return;
      }
      try {
        var t = n.x + n.y;
        ($[C++] = t & 255), (lt += 1);
      } catch {}
    };
  typeof window < "u" &&
    (window.addEventListener
      ? window.addEventListener("mousemove", ct, !1)
      : window.attachEvent && window.attachEvent("onmousemove", ct));
}
function je() {
  if (ut == null) {
    for (ut = Ke(); C < te; ) {
      var n = Math.floor(65536 * Math.random());
      $[C++] = n & 255;
    }
    for (ut.init($), C = 0; C < $.length; ++C) $[C] = 0;
    C = 0;
  }
  return ut.next();
}
var Vt = (function () {
  function n() {}
  return (
    (n.prototype.nextBytes = function (t) {
      for (var e = 0; e < t.length; ++e) t[e] = je();
    }),
    n
  );
})();
function ze(n, t) {
  if (t < n.length + 22) return console.error("Message too long for RSA"), null;
  for (var e = t - n.length - 6, i = "", r = 0; r < e; r += 2) i += "ff";
  var s = "0001" + i + "00" + n;
  return E(s, 16);
}
function Ge(n, t) {
  if (t < n.length + 11) return console.error("Message too long for RSA"), null;
  for (var e = [], i = n.length - 1; i >= 0 && t > 0; ) {
    var r = n.charCodeAt(i--);
    r < 128
      ? (e[--t] = r)
      : r > 127 && r < 2048
      ? ((e[--t] = (r & 63) | 128), (e[--t] = (r >> 6) | 192))
      : ((e[--t] = (r & 63) | 128),
        (e[--t] = ((r >> 6) & 63) | 128),
        (e[--t] = (r >> 12) | 224));
  }
  e[--t] = 0;
  for (var s = new Vt(), o = []; t > 2; ) {
    for (o[0] = 0; o[0] == 0; ) s.nextBytes(o);
    e[--t] = o[0];
  }
  return (e[--t] = 2), (e[--t] = 0), new g(e);
}
var $e = (function () {
  function n() {
    (this.n = null),
      (this.e = 0),
      (this.d = null),
      (this.p = null),
      (this.q = null),
      (this.dmp1 = null),
      (this.dmq1 = null),
      (this.coeff = null);
  }
  return (
    (n.prototype.doPublic = function (t) {
      return t.modPowInt(this.e, this.n);
    }),
    (n.prototype.doPrivate = function (t) {
      if (this.p == null || this.q == null) return t.modPow(this.d, this.n);
      for (
        var e = t.mod(this.p).modPow(this.dmp1, this.p),
          i = t.mod(this.q).modPow(this.dmq1, this.q);
        e.compareTo(i) < 0;

      )
        e = e.add(this.p);
      return e
        .subtract(i)
        .multiply(this.coeff)
        .mod(this.p)
        .multiply(this.q)
        .add(i);
    }),
    (n.prototype.setPublic = function (t, e) {
      t != null && e != null && t.length > 0 && e.length > 0
        ? ((this.n = E(t, 16)), (this.e = parseInt(e, 16)))
        : console.error("Invalid RSA public key");
    }),
    (n.prototype.encrypt = function (t) {
      var e = (this.n.bitLength() + 7) >> 3,
        i = Ge(t, e);
      if (i == null) return null;
      var r = this.doPublic(i);
      if (r == null) return null;
      for (var s = r.toString(16), o = s.length, a = 0; a < e * 2 - o; a++)
        s = "0" + s;
      return s;
    }),
    (n.prototype.setPrivate = function (t, e, i) {
      t != null && e != null && t.length > 0 && e.length > 0
        ? ((this.n = E(t, 16)), (this.e = parseInt(e, 16)), (this.d = E(i, 16)))
        : console.error("Invalid RSA private key");
    }),
    (n.prototype.setPrivateEx = function (t, e, i, r, s, o, a, h) {
      t != null && e != null && t.length > 0 && e.length > 0
        ? ((this.n = E(t, 16)),
          (this.e = parseInt(e, 16)),
          (this.d = E(i, 16)),
          (this.p = E(r, 16)),
          (this.q = E(s, 16)),
          (this.dmp1 = E(o, 16)),
          (this.dmq1 = E(a, 16)),
          (this.coeff = E(h, 16)))
        : console.error("Invalid RSA private key");
    }),
    (n.prototype.generate = function (t, e) {
      var i = new Vt(),
        r = t >> 1;
      this.e = parseInt(e, 16);
      for (var s = new g(e, 16); ; ) {
        for (
          ;
          (this.p = new g(t - r, 1, i)),
            !(
              this.p.subtract(g.ONE).gcd(s).compareTo(g.ONE) == 0 &&
              this.p.isProbablePrime(10)
            );

        );
        for (
          ;
          (this.q = new g(r, 1, i)),
            !(
              this.q.subtract(g.ONE).gcd(s).compareTo(g.ONE) == 0 &&
              this.q.isProbablePrime(10)
            );

        );
        if (this.p.compareTo(this.q) <= 0) {
          var o = this.p;
          (this.p = this.q), (this.q = o);
        }
        var a = this.p.subtract(g.ONE),
          h = this.q.subtract(g.ONE),
          f = a.multiply(h);
        if (f.gcd(s).compareTo(g.ONE) == 0) {
          (this.n = this.p.multiply(this.q)),
            (this.d = s.modInverse(f)),
            (this.dmp1 = this.d.mod(a)),
            (this.dmq1 = this.d.mod(h)),
            (this.coeff = this.q.modInverse(this.p));
          break;
        }
      }
    }),
    (n.prototype.decrypt = function (t) {
      var e = E(t, 16),
        i = this.doPrivate(e);
      return i == null ? null : Ze(i, (this.n.bitLength() + 7) >> 3);
    }),
    (n.prototype.generateAsync = function (t, e, i) {
      var r = new Vt(),
        s = t >> 1;
      this.e = parseInt(e, 16);
      var o = new g(e, 16),
        a = this,
        h = function () {
          var f = function () {
              if (a.p.compareTo(a.q) <= 0) {
                var y = a.p;
                (a.p = a.q), (a.q = y);
              }
              var w = a.p.subtract(g.ONE),
                b = a.q.subtract(g.ONE),
                S = w.multiply(b);
              S.gcd(o).compareTo(g.ONE) == 0
                ? ((a.n = a.p.multiply(a.q)),
                  (a.d = o.modInverse(S)),
                  (a.dmp1 = a.d.mod(w)),
                  (a.dmq1 = a.d.mod(b)),
                  (a.coeff = a.q.modInverse(a.p)),
                  setTimeout(function () {
                    i();
                  }, 0))
                : setTimeout(h, 0);
            },
            l = function () {
              (a.q = m()),
                a.q.fromNumberAsync(s, 1, r, function () {
                  a.q.subtract(g.ONE).gcda(o, function (y) {
                    y.compareTo(g.ONE) == 0 && a.q.isProbablePrime(10)
                      ? setTimeout(f, 0)
                      : setTimeout(l, 0);
                  });
                });
            },
            p = function () {
              (a.p = m()),
                a.p.fromNumberAsync(t - s, 1, r, function () {
                  a.p.subtract(g.ONE).gcda(o, function (y) {
                    y.compareTo(g.ONE) == 0 && a.p.isProbablePrime(10)
                      ? setTimeout(l, 0)
                      : setTimeout(p, 0);
                  });
                });
            };
          setTimeout(p, 0);
        };
      setTimeout(h, 0);
    }),
    (n.prototype.sign = function (t, e, i) {
      var r = Je(i),
        s = r + e(t).toString(),
        o = ze(s, this.n.bitLength() / 4);
      if (o == null) return null;
      var a = this.doPrivate(o);
      if (a == null) return null;
      var h = a.toString(16);
      return h.length & 1 ? "0" + h : h;
    }),
    (n.prototype.verify = function (t, e, i) {
      var r = E(e, 16),
        s = this.doPublic(r);
      if (s == null) return null;
      var o = s.toString(16).replace(/^1f+00/, ""),
        a = We(o);
      return a == i(t).toString();
    }),
    n
  );
})();
function Ze(n, t) {
  for (var e = n.toByteArray(), i = 0; i < e.length && e[i] == 0; ) ++i;
  if (e.length - i != t - 1 || e[i] != 2) return null;
  for (++i; e[i] != 0; ) if (++i >= e.length) return null;
  for (var r = ""; ++i < e.length; ) {
    var s = e[i] & 255;
    s < 128
      ? (r += String.fromCharCode(s))
      : s > 191 && s < 224
      ? ((r += String.fromCharCode(((s & 31) << 6) | (e[i + 1] & 63))), ++i)
      : ((r += String.fromCharCode(
          ((s & 15) << 12) | ((e[i + 1] & 63) << 6) | (e[i + 2] & 63)
        )),
        (i += 2));
  }
  return r;
}
var dt = {
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  ripemd160: "3021300906052b2403020105000414",
};
function Je(n) {
  return dt[n] || "";
}
function We(n) {
  for (var t in dt)
    if (dt.hasOwnProperty(t)) {
      var e = dt[t],
        i = e.length;
      if (n.substr(0, i) == e) return n.substr(i);
    }
  return n;
}
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/ var D = {};
D.lang = {
  extend: function (n, t, e) {
    if (!t || !n)
      throw new Error(
        "YAHOO.lang.extend failed, please check that all dependencies are included."
      );
    var i = function () {};
    if (
      ((i.prototype = t.prototype),
      (n.prototype = new i()),
      (n.prototype.constructor = n),
      (n.superclass = t.prototype),
      t.prototype.constructor == Object.prototype.constructor &&
        (t.prototype.constructor = t),
      e)
    ) {
      var r;
      for (r in e) n.prototype[r] = e[r];
      var s = function () {},
        o = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) &&
          (s = function (a, h) {
            for (r = 0; r < o.length; r = r + 1) {
              var f = o[r],
                l = h[f];
              typeof l == "function" && l != Object.prototype[f] && (a[f] = l);
            }
          });
      } catch {}
      s(n.prototype, e);
    }
  },
};
/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */ var u = {};
(typeof u.asn1 > "u" || !u.asn1) && (u.asn1 = {});
u.asn1.ASN1Util = new (function () {
  (this.integerToByteHex = function (n) {
    var t = n.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), t;
  }),
    (this.bigIntToMinTwosComplementsHex = function (n) {
      var t = n.toString(16);
      if (t.substr(0, 1) != "-")
        t.length % 2 == 1 ? (t = "0" + t) : t.match(/^[0-7]/) || (t = "00" + t);
      else {
        var e = t.substr(1),
          i = e.length;
        i % 2 == 1 ? (i += 1) : t.match(/^[0-7]/) || (i += 2);
        for (var r = "", s = 0; s < i; s++) r += "f";
        var o = new g(r, 16),
          a = o.xor(n).add(g.ONE);
        t = a.toString(16).replace(/^-/, "");
      }
      return t;
    }),
    (this.getPEMStringFromHex = function (n, t) {
      return hextopem(n, t);
    }),
    (this.newObject = function (n) {
      var t = u,
        e = t.asn1,
        i = e.DERBoolean,
        r = e.DERInteger,
        s = e.DERBitString,
        o = e.DEROctetString,
        a = e.DERNull,
        h = e.DERObjectIdentifier,
        f = e.DEREnumerated,
        l = e.DERUTF8String,
        p = e.DERNumericString,
        y = e.DERPrintableString,
        w = e.DERTeletexString,
        b = e.DERIA5String,
        S = e.DERUTCTime,
        I = e.DERGeneralizedTime,
        M = e.DERSequence,
        _ = e.DERSet,
        L = e.DERTaggedObject,
        U = e.ASN1Util.newObject,
        st = Object.keys(n);
      if (st.length != 1) throw "key of param shall be only one.";
      var v = st[0];
      if (
        ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(
          ":" + v + ":"
        ) == -1
      )
        throw "undefined key: " + v;
      if (v == "bool") return new i(n[v]);
      if (v == "int") return new r(n[v]);
      if (v == "bitstr") return new s(n[v]);
      if (v == "octstr") return new o(n[v]);
      if (v == "null") return new a(n[v]);
      if (v == "oid") return new h(n[v]);
      if (v == "enum") return new f(n[v]);
      if (v == "utf8str") return new l(n[v]);
      if (v == "numstr") return new p(n[v]);
      if (v == "prnstr") return new y(n[v]);
      if (v == "telstr") return new w(n[v]);
      if (v == "ia5str") return new b(n[v]);
      if (v == "utctime") return new S(n[v]);
      if (v == "gentime") return new I(n[v]);
      if (v == "seq") {
        for (var J = n[v], F = [], k = 0; k < J.length; k++) {
          var Q = U(J[k]);
          F.push(Q);
        }
        return new M({ array: F });
      }
      if (v == "set") {
        for (var J = n[v], F = [], k = 0; k < J.length; k++) {
          var Q = U(J[k]);
          F.push(Q);
        }
        return new _({ array: F });
      }
      if (v == "tag") {
        var B = n[v];
        if (
          Object.prototype.toString.call(B) === "[object Array]" &&
          B.length == 3
        ) {
          var yt = U(B[2]);
          return new L({ tag: B[0], explicit: B[1], obj: yt });
        } else {
          var K = {};
          if (
            (B.explicit !== void 0 && (K.explicit = B.explicit),
            B.tag !== void 0 && (K.tag = B.tag),
            B.obj === void 0)
          )
            throw "obj shall be specified for 'tag'.";
          return (K.obj = U(B.obj)), new L(K);
        }
      }
    }),
    (this.jsonToASN1HEX = function (n) {
      var t = this.newObject(n);
      return t.getEncodedHex();
    });
})();
u.asn1.ASN1Util.oidHexToInt = function (n) {
  for (
    var r = "",
      t = parseInt(n.substr(0, 2), 16),
      e = Math.floor(t / 40),
      i = t % 40,
      r = e + "." + i,
      s = "",
      o = 2;
    o < n.length;
    o += 2
  ) {
    var a = parseInt(n.substr(o, 2), 16),
      h = ("00000000" + a.toString(2)).slice(-8);
    if (((s = s + h.substr(1, 7)), h.substr(0, 1) == "0")) {
      var f = new g(s, 2);
      (r = r + "." + f.toString(10)), (s = "");
    }
  }
  return r;
};
u.asn1.ASN1Util.oidIntToHex = function (n) {
  var t = function (a) {
      var h = a.toString(16);
      return h.length == 1 && (h = "0" + h), h;
    },
    e = function (a) {
      var h = "",
        f = new g(a, 10),
        l = f.toString(2),
        p = 7 - (l.length % 7);
      p == 7 && (p = 0);
      for (var y = "", w = 0; w < p; w++) y += "0";
      l = y + l;
      for (var w = 0; w < l.length - 1; w += 7) {
        var b = l.substr(w, 7);
        w != l.length - 7 && (b = "1" + b), (h += t(parseInt(b, 2)));
      }
      return h;
    };
  if (!n.match(/^[0-9.]+$/)) throw "malformed oid string: " + n;
  var i = "",
    r = n.split("."),
    s = parseInt(r[0]) * 40 + parseInt(r[1]);
  (i += t(s)), r.splice(0, 2);
  for (var o = 0; o < r.length; o++) i += e(r[o]);
  return i;
};
u.asn1.ASN1Object = function () {
  var n = "";
  (this.getLengthHexFromValue = function () {
    if (typeof this.hV > "u" || this.hV == null)
      throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1)
      throw "value hex must be even length: n=" + n.length + ",v=" + this.hV;
    var t = this.hV.length / 2,
      e = t.toString(16);
    if ((e.length % 2 == 1 && (e = "0" + e), t < 128)) return e;
    var i = e.length / 2;
    if (i > 15)
      throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
    var r = 128 + i;
    return r.toString(16) + e;
  }),
    (this.getEncodedHex = function () {
      return (
        (this.hTLV == null || this.isModified) &&
          ((this.hV = this.getFreshValueHex()),
          (this.hL = this.getLengthHexFromValue()),
          (this.hTLV = this.hT + this.hL + this.hV),
          (this.isModified = !1)),
        this.hTLV
      );
    }),
    (this.getValueHex = function () {
      return this.getEncodedHex(), this.hV;
    }),
    (this.getFreshValueHex = function () {
      return "";
    });
};
u.asn1.DERAbstractString = function (n) {
  u.asn1.DERAbstractString.superclass.constructor.call(this),
    (this.getString = function () {
      return this.s;
    }),
    (this.setString = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = t),
        (this.hV = stohex(this.s));
    }),
    (this.setStringHex = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = t);
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof n < "u" &&
      (typeof n == "string"
        ? this.setString(n)
        : typeof n.str < "u"
        ? this.setString(n.str)
        : typeof n.hex < "u" && this.setStringHex(n.hex));
};
D.lang.extend(u.asn1.DERAbstractString, u.asn1.ASN1Object);
u.asn1.DERAbstractTime = function (n) {
  u.asn1.DERAbstractTime.superclass.constructor.call(this),
    (this.localDateToUTC = function (t) {
      utc = t.getTime() + t.getTimezoneOffset() * 6e4;
      var e = new Date(utc);
      return e;
    }),
    (this.formatDate = function (t, e, i) {
      var r = this.zeroPadding,
        s = this.localDateToUTC(t),
        o = String(s.getFullYear());
      e == "utc" && (o = o.substr(2, 2));
      var a = r(String(s.getMonth() + 1), 2),
        h = r(String(s.getDate()), 2),
        f = r(String(s.getHours()), 2),
        l = r(String(s.getMinutes()), 2),
        p = r(String(s.getSeconds()), 2),
        y = o + a + h + f + l + p;
      if (i === !0) {
        var w = s.getMilliseconds();
        if (w != 0) {
          var b = r(String(w), 3);
          (b = b.replace(/[0]+$/, "")), (y = y + "." + b);
        }
      }
      return y + "Z";
    }),
    (this.zeroPadding = function (t, e) {
      return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
    }),
    (this.getString = function () {
      return this.s;
    }),
    (this.setString = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = t),
        (this.hV = stohex(t));
    }),
    (this.setByDateValue = function (t, e, i, r, s, o) {
      var a = new Date(Date.UTC(t, e - 1, i, r, s, o, 0));
      this.setByDate(a);
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    });
};
D.lang.extend(u.asn1.DERAbstractTime, u.asn1.ASN1Object);
u.asn1.DERAbstractStructured = function (n) {
  u.asn1.DERAbstractString.superclass.constructor.call(this),
    (this.setByASN1ObjectArray = function (t) {
      (this.hTLV = null), (this.isModified = !0), (this.asn1Array = t);
    }),
    (this.appendASN1Object = function (t) {
      (this.hTLV = null), (this.isModified = !0), this.asn1Array.push(t);
    }),
    (this.asn1Array = new Array()),
    typeof n < "u" && typeof n.array < "u" && (this.asn1Array = n.array);
};
D.lang.extend(u.asn1.DERAbstractStructured, u.asn1.ASN1Object);
u.asn1.DERBoolean = function () {
  u.asn1.DERBoolean.superclass.constructor.call(this),
    (this.hT = "01"),
    (this.hTLV = "0101ff");
};
D.lang.extend(u.asn1.DERBoolean, u.asn1.ASN1Object);
u.asn1.DERInteger = function (n) {
  u.asn1.DERInteger.superclass.constructor.call(this),
    (this.hT = "02"),
    (this.setByBigInteger = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.hV = u.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
    }),
    (this.setByInteger = function (t) {
      var e = new g(String(t), 10);
      this.setByBigInteger(e);
    }),
    (this.setValueHex = function (t) {
      this.hV = t;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof n < "u" &&
      (typeof n.bigint < "u"
        ? this.setByBigInteger(n.bigint)
        : typeof n.int < "u"
        ? this.setByInteger(n.int)
        : typeof n == "number"
        ? this.setByInteger(n)
        : typeof n.hex < "u" && this.setValueHex(n.hex));
};
D.lang.extend(u.asn1.DERInteger, u.asn1.ASN1Object);
u.asn1.DERBitString = function (n) {
  if (n !== void 0 && typeof n.obj < "u") {
    var t = u.asn1.ASN1Util.newObject(n.obj);
    n.hex = "00" + t.getEncodedHex();
  }
  u.asn1.DERBitString.superclass.constructor.call(this),
    (this.hT = "03"),
    (this.setHexValueIncludingUnusedBits = function (e) {
      (this.hTLV = null), (this.isModified = !0), (this.hV = e);
    }),
    (this.setUnusedBitsAndHexValue = function (e, i) {
      if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
      var r = "0" + e;
      (this.hTLV = null), (this.isModified = !0), (this.hV = r + i);
    }),
    (this.setByBinaryString = function (e) {
      e = e.replace(/0+$/, "");
      var i = 8 - (e.length % 8);
      i == 8 && (i = 0);
      for (var r = 0; r <= i; r++) e += "0";
      for (var s = "", r = 0; r < e.length - 1; r += 8) {
        var o = e.substr(r, 8),
          a = parseInt(o, 2).toString(16);
        a.length == 1 && (a = "0" + a), (s += a);
      }
      (this.hTLV = null), (this.isModified = !0), (this.hV = "0" + i + s);
    }),
    (this.setByBooleanArray = function (e) {
      for (var i = "", r = 0; r < e.length; r++)
        e[r] == !0 ? (i += "1") : (i += "0");
      this.setByBinaryString(i);
    }),
    (this.newFalseArray = function (e) {
      for (var i = new Array(e), r = 0; r < e; r++) i[r] = !1;
      return i;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof n < "u" &&
      (typeof n == "string" && n.toLowerCase().match(/^[0-9a-f]+$/)
        ? this.setHexValueIncludingUnusedBits(n)
        : typeof n.hex < "u"
        ? this.setHexValueIncludingUnusedBits(n.hex)
        : typeof n.bin < "u"
        ? this.setByBinaryString(n.bin)
        : typeof n.array < "u" && this.setByBooleanArray(n.array));
};
D.lang.extend(u.asn1.DERBitString, u.asn1.ASN1Object);
u.asn1.DEROctetString = function (n) {
  if (n !== void 0 && typeof n.obj < "u") {
    var t = u.asn1.ASN1Util.newObject(n.obj);
    n.hex = t.getEncodedHex();
  }
  u.asn1.DEROctetString.superclass.constructor.call(this, n), (this.hT = "04");
};
D.lang.extend(u.asn1.DEROctetString, u.asn1.DERAbstractString);
u.asn1.DERNull = function () {
  u.asn1.DERNull.superclass.constructor.call(this),
    (this.hT = "05"),
    (this.hTLV = "0500");
};
D.lang.extend(u.asn1.DERNull, u.asn1.ASN1Object);
u.asn1.DERObjectIdentifier = function (n) {
  var t = function (i) {
      var r = i.toString(16);
      return r.length == 1 && (r = "0" + r), r;
    },
    e = function (i) {
      var r = "",
        s = new g(i, 10),
        o = s.toString(2),
        a = 7 - (o.length % 7);
      a == 7 && (a = 0);
      for (var h = "", f = 0; f < a; f++) h += "0";
      o = h + o;
      for (var f = 0; f < o.length - 1; f += 7) {
        var l = o.substr(f, 7);
        f != o.length - 7 && (l = "1" + l), (r += t(parseInt(l, 2)));
      }
      return r;
    };
  u.asn1.DERObjectIdentifier.superclass.constructor.call(this),
    (this.hT = "06"),
    (this.setValueHex = function (i) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = i);
    }),
    (this.setValueOidString = function (i) {
      if (!i.match(/^[0-9.]+$/)) throw "malformed oid string: " + i;
      var r = "",
        s = i.split("."),
        o = parseInt(s[0]) * 40 + parseInt(s[1]);
      (r += t(o)), s.splice(0, 2);
      for (var a = 0; a < s.length; a++) r += e(s[a]);
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = r);
    }),
    (this.setValueName = function (i) {
      var r = u.asn1.x509.OID.name2oid(i);
      if (r !== "") this.setValueOidString(r);
      else throw "DERObjectIdentifier oidName undefined: " + i;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    n !== void 0 &&
      (typeof n == "string"
        ? n.match(/^[0-2].[0-9.]+$/)
          ? this.setValueOidString(n)
          : this.setValueName(n)
        : n.oid !== void 0
        ? this.setValueOidString(n.oid)
        : n.hex !== void 0
        ? this.setValueHex(n.hex)
        : n.name !== void 0 && this.setValueName(n.name));
};
D.lang.extend(u.asn1.DERObjectIdentifier, u.asn1.ASN1Object);
u.asn1.DEREnumerated = function (n) {
  u.asn1.DEREnumerated.superclass.constructor.call(this),
    (this.hT = "0a"),
    (this.setByBigInteger = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.hV = u.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
    }),
    (this.setByInteger = function (t) {
      var e = new g(String(t), 10);
      this.setByBigInteger(e);
    }),
    (this.setValueHex = function (t) {
      this.hV = t;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof n < "u" &&
      (typeof n.int < "u"
        ? this.setByInteger(n.int)
        : typeof n == "number"
        ? this.setByInteger(n)
        : typeof n.hex < "u" && this.setValueHex(n.hex));
};
D.lang.extend(u.asn1.DEREnumerated, u.asn1.ASN1Object);
u.asn1.DERUTF8String = function (n) {
  u.asn1.DERUTF8String.superclass.constructor.call(this, n), (this.hT = "0c");
};
D.lang.extend(u.asn1.DERUTF8String, u.asn1.DERAbstractString);
u.asn1.DERNumericString = function (n) {
  u.asn1.DERNumericString.superclass.constructor.call(this, n),
    (this.hT = "12");
};
D.lang.extend(u.asn1.DERNumericString, u.asn1.DERAbstractString);
u.asn1.DERPrintableString = function (n) {
  u.asn1.DERPrintableString.superclass.constructor.call(this, n),
    (this.hT = "13");
};
D.lang.extend(u.asn1.DERPrintableString, u.asn1.DERAbstractString);
u.asn1.DERTeletexString = function (n) {
  u.asn1.DERTeletexString.superclass.constructor.call(this, n),
    (this.hT = "14");
};
D.lang.extend(u.asn1.DERTeletexString, u.asn1.DERAbstractString);
u.asn1.DERIA5String = function (n) {
  u.asn1.DERIA5String.superclass.constructor.call(this, n), (this.hT = "16");
};
D.lang.extend(u.asn1.DERIA5String, u.asn1.DERAbstractString);
u.asn1.DERUTCTime = function (n) {
  u.asn1.DERUTCTime.superclass.constructor.call(this, n),
    (this.hT = "17"),
    (this.setByDate = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.date = t),
        (this.s = this.formatDate(this.date, "utc")),
        (this.hV = stohex(this.s));
    }),
    (this.getFreshValueHex = function () {
      return (
        typeof this.date > "u" &&
          typeof this.s > "u" &&
          ((this.date = new Date()),
          (this.s = this.formatDate(this.date, "utc")),
          (this.hV = stohex(this.s))),
        this.hV
      );
    }),
    n !== void 0 &&
      (n.str !== void 0
        ? this.setString(n.str)
        : typeof n == "string" && n.match(/^[0-9]{12}Z$/)
        ? this.setString(n)
        : n.hex !== void 0
        ? this.setStringHex(n.hex)
        : n.date !== void 0 && this.setByDate(n.date));
};
D.lang.extend(u.asn1.DERUTCTime, u.asn1.DERAbstractTime);
u.asn1.DERGeneralizedTime = function (n) {
  u.asn1.DERGeneralizedTime.superclass.constructor.call(this, n),
    (this.hT = "18"),
    (this.withMillis = !1),
    (this.setByDate = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.date = t),
        (this.s = this.formatDate(this.date, "gen", this.withMillis)),
        (this.hV = stohex(this.s));
    }),
    (this.getFreshValueHex = function () {
      return (
        this.date === void 0 &&
          this.s === void 0 &&
          ((this.date = new Date()),
          (this.s = this.formatDate(this.date, "gen", this.withMillis)),
          (this.hV = stohex(this.s))),
        this.hV
      );
    }),
    n !== void 0 &&
      (n.str !== void 0
        ? this.setString(n.str)
        : typeof n == "string" && n.match(/^[0-9]{14}Z$/)
        ? this.setString(n)
        : n.hex !== void 0
        ? this.setStringHex(n.hex)
        : n.date !== void 0 && this.setByDate(n.date),
      n.millis === !0 && (this.withMillis = !0));
};
D.lang.extend(u.asn1.DERGeneralizedTime, u.asn1.DERAbstractTime);
u.asn1.DERSequence = function (n) {
  u.asn1.DERSequence.superclass.constructor.call(this, n),
    (this.hT = "30"),
    (this.getFreshValueHex = function () {
      for (var t = "", e = 0; e < this.asn1Array.length; e++) {
        var i = this.asn1Array[e];
        t += i.getEncodedHex();
      }
      return (this.hV = t), this.hV;
    });
};
D.lang.extend(u.asn1.DERSequence, u.asn1.DERAbstractStructured);
u.asn1.DERSet = function (n) {
  u.asn1.DERSet.superclass.constructor.call(this, n),
    (this.hT = "31"),
    (this.sortFlag = !0),
    (this.getFreshValueHex = function () {
      for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
        var i = this.asn1Array[e];
        t.push(i.getEncodedHex());
      }
      return this.sortFlag == !0 && t.sort(), (this.hV = t.join("")), this.hV;
    }),
    typeof n < "u" &&
      typeof n.sortflag < "u" &&
      n.sortflag == !1 &&
      (this.sortFlag = !1);
};
D.lang.extend(u.asn1.DERSet, u.asn1.DERAbstractStructured);
u.asn1.DERTaggedObject = function (n) {
  u.asn1.DERTaggedObject.superclass.constructor.call(this),
    (this.hT = "a0"),
    (this.hV = ""),
    (this.isExplicit = !0),
    (this.asn1Object = null),
    (this.setASN1Object = function (t, e, i) {
      (this.hT = e),
        (this.isExplicit = t),
        (this.asn1Object = i),
        this.isExplicit
          ? ((this.hV = this.asn1Object.getEncodedHex()),
            (this.hTLV = null),
            (this.isModified = !0))
          : ((this.hV = null),
            (this.hTLV = i.getEncodedHex()),
            (this.hTLV = this.hTLV.replace(/^../, e)),
            (this.isModified = !1));
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof n < "u" &&
      (typeof n.tag < "u" && (this.hT = n.tag),
      typeof n.explicit < "u" && (this.isExplicit = n.explicit),
      typeof n.obj < "u" &&
        ((this.asn1Object = n.obj),
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
D.lang.extend(u.asn1.DERTaggedObject, u.asn1.ASN1Object);
var Ye =
    (globalThis && globalThis.__extends) ||
    (function () {
      var n = function (t, e) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, r) {
                i.__proto__ = r;
              }) ||
            function (i, r) {
              for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
            }),
          n(t, e)
        );
      };
      return function (t, e) {
        if (typeof e != "function" && e !== null)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        n(t, e);
        function i() {
          this.constructor = t;
        }
        t.prototype =
          e === null
            ? Object.create(e)
            : ((i.prototype = e.prototype), new i());
      };
    })(),
  Yt = (function (n) {
    Ye(t, n);
    function t(e) {
      var i = n.call(this) || this;
      return (
        e &&
          (typeof e == "string"
            ? i.parseKey(e)
            : (t.hasPrivateKeyProperty(e) || t.hasPublicKeyProperty(e)) &&
              i.parsePropertiesFrom(e)),
        i
      );
    }
    return (
      (t.prototype.parseKey = function (e) {
        try {
          var i = 0,
            r = 0,
            s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
            o = s.test(e) ? Pe.decode(e) : Ot.unarmor(e),
            a = He.decode(o);
          if (
            (a.sub.length === 3 && (a = a.sub[2].sub[0]), a.sub.length === 9)
          ) {
            (i = a.sub[1].getHexStringValue()),
              (this.n = E(i, 16)),
              (r = a.sub[2].getHexStringValue()),
              (this.e = parseInt(r, 16));
            var h = a.sub[3].getHexStringValue();
            this.d = E(h, 16);
            var f = a.sub[4].getHexStringValue();
            this.p = E(f, 16);
            var l = a.sub[5].getHexStringValue();
            this.q = E(l, 16);
            var p = a.sub[6].getHexStringValue();
            this.dmp1 = E(p, 16);
            var y = a.sub[7].getHexStringValue();
            this.dmq1 = E(y, 16);
            var w = a.sub[8].getHexStringValue();
            this.coeff = E(w, 16);
          } else if (a.sub.length === 2)
            if (a.sub[0].sub) {
              var b = a.sub[1],
                S = b.sub[0];
              (i = S.sub[0].getHexStringValue()),
                (this.n = E(i, 16)),
                (r = S.sub[1].getHexStringValue()),
                (this.e = parseInt(r, 16));
            } else
              (i = a.sub[0].getHexStringValue()),
                (this.n = E(i, 16)),
                (r = a.sub[1].getHexStringValue()),
                (this.e = parseInt(r, 16));
          else return !1;
          return !0;
        } catch {
          return !1;
        }
      }),
      (t.prototype.getPrivateBaseKey = function () {
        var e = {
            array: [
              new u.asn1.DERInteger({ int: 0 }),
              new u.asn1.DERInteger({ bigint: this.n }),
              new u.asn1.DERInteger({ int: this.e }),
              new u.asn1.DERInteger({ bigint: this.d }),
              new u.asn1.DERInteger({ bigint: this.p }),
              new u.asn1.DERInteger({ bigint: this.q }),
              new u.asn1.DERInteger({ bigint: this.dmp1 }),
              new u.asn1.DERInteger({ bigint: this.dmq1 }),
              new u.asn1.DERInteger({ bigint: this.coeff }),
            ],
          },
          i = new u.asn1.DERSequence(e);
        return i.getEncodedHex();
      }),
      (t.prototype.getPrivateBaseKeyB64 = function () {
        return gt(this.getPrivateBaseKey());
      }),
      (t.prototype.getPublicBaseKey = function () {
        var e = new u.asn1.DERSequence({
            array: [
              new u.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
              new u.asn1.DERNull(),
            ],
          }),
          i = new u.asn1.DERSequence({
            array: [
              new u.asn1.DERInteger({ bigint: this.n }),
              new u.asn1.DERInteger({ int: this.e }),
            ],
          }),
          r = new u.asn1.DERBitString({ hex: "00" + i.getEncodedHex() }),
          s = new u.asn1.DERSequence({ array: [e, r] });
        return s.getEncodedHex();
      }),
      (t.prototype.getPublicBaseKeyB64 = function () {
        return gt(this.getPublicBaseKey());
      }),
      (t.wordwrap = function (e, i) {
        if (((i = i || 64), !e)) return e;
        var r =
          "(.{1," +
          i +
          `})( +|$
?)|(.{1,` +
          i +
          "})";
        return e.match(RegExp(r, "g")).join(`
`);
      }),
      (t.prototype.getPrivateKey = function () {
        var e = `-----BEGIN RSA PRIVATE KEY-----
`;
        return (
          (e +=
            t.wordwrap(this.getPrivateBaseKeyB64()) +
            `
`),
          (e += "-----END RSA PRIVATE KEY-----"),
          e
        );
      }),
      (t.prototype.getPublicKey = function () {
        var e = `-----BEGIN PUBLIC KEY-----
`;
        return (
          (e +=
            t.wordwrap(this.getPublicBaseKeyB64()) +
            `
`),
          (e += "-----END PUBLIC KEY-----"),
          e
        );
      }),
      (t.hasPublicKeyProperty = function (e) {
        return (e = e || {}), e.hasOwnProperty("n") && e.hasOwnProperty("e");
      }),
      (t.hasPrivateKeyProperty = function (e) {
        return (
          (e = e || {}),
          e.hasOwnProperty("n") &&
            e.hasOwnProperty("e") &&
            e.hasOwnProperty("d") &&
            e.hasOwnProperty("p") &&
            e.hasOwnProperty("q") &&
            e.hasOwnProperty("dmp1") &&
            e.hasOwnProperty("dmq1") &&
            e.hasOwnProperty("coeff")
        );
      }),
      (t.prototype.parsePropertiesFrom = function (e) {
        (this.n = e.n),
          (this.e = e.e),
          e.hasOwnProperty("d") &&
            ((this.d = e.d),
            (this.p = e.p),
            (this.q = e.q),
            (this.dmp1 = e.dmp1),
            (this.dmq1 = e.dmq1),
            (this.coeff = e.coeff));
      }),
      t
    );
  })($e),
  At,
  Qe =
    typeof process < "u"
      ? (At = process.env) === null || At === void 0
        ? void 0
        : At.npm_package_version
      : void 0,
  Xe = (function () {
    function n(t) {
      t === void 0 && (t = {}),
        (t = t || {}),
        (this.default_key_size = t.default_key_size
          ? parseInt(t.default_key_size, 10)
          : 1024),
        (this.default_public_exponent = t.default_public_exponent || "010001"),
        (this.log = t.log || !1),
        (this.key = null);
    }
    return (
      (n.prototype.setKey = function (t) {
        this.log &&
          this.key &&
          console.warn("A key was already set, overriding existing."),
          (this.key = new Yt(t));
      }),
      (n.prototype.setPrivateKey = function (t) {
        this.setKey(t);
      }),
      (n.prototype.setPublicKey = function (t) {
        this.setKey(t);
      }),
      (n.prototype.decrypt = function (t) {
        try {
          return this.getKey().decrypt(jt(t));
        } catch {
          return !1;
        }
      }),
      (n.prototype.encrypt = function (t) {
        try {
          return gt(this.getKey().encrypt(t));
        } catch {
          return !1;
        }
      }),
      (n.prototype.sign = function (t, e, i) {
        try {
          return gt(this.getKey().sign(t, e, i));
        } catch {
          return !1;
        }
      }),
      (n.prototype.verify = function (t, e, i) {
        try {
          return this.getKey().verify(t, jt(e), i);
        } catch {
          return !1;
        }
      }),
      (n.prototype.getKey = function (t) {
        if (!this.key) {
          if (
            ((this.key = new Yt()),
            t && {}.toString.call(t) === "[object Function]")
          ) {
            this.key.generateAsync(
              this.default_key_size,
              this.default_public_exponent,
              t
            );
            return;
          }
          this.key.generate(
            this.default_key_size,
            this.default_public_exponent
          );
        }
        return this.key;
      }),
      (n.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey();
      }),
      (n.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64();
      }),
      (n.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey();
      }),
      (n.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64();
      }),
      (n.version = Qe),
      n
    );
  })();
const vt = (n) => (Ee("data-v-e7def070"), (n = n()), De(), n),
  ti = { class: "btn_box" },
  ei = vt(() => A("img", { class: "img", src: Ae, alt: "" }, null, -1)),
  ii = vt(() => A("div", { class: "title" }, "Welcome To Dechat", -1)),
  ni = { class: "protocolbox" },
  ri = { class: "text-i" },
  si = { class: "protocol_box" },
  oi = ["innerHTML"],
  ai = vt(() =>
    A("div", { class: "top_img" }, [A("img", { src: xe, alt: "" })], -1)
  ),
  hi = vt(() =>
    A(
      "div",
      { class: "content_titles" },
      " The current account is in the process of deletion, continuing to log in will Withdrawal of account deletion application. are you sure want to log in and Withdrawal of account deletion application? ",
      -1
    )
  ),
  ui = {
    __name: "Login",
    emits: ["changeLanguage"],
    setup(n, { emit: t }) {
      const e = R(!1),
        i = he(),
        r = R(),
        s = R(""),
        o = R(!1);
      ue();
      const a = R(!1),
        h = R(!1),
        f = R(!1);
      R(!1);
      const l = R(!1),
        p = R(!1),
        y = R(""),
        w = R(""),
        b = R(null),
        S = R("");
      R();
      const I = R({}),
        M = R(""),
        { address: _ } = j(),
        { open: L } = fe(),
        U = R(null),
        st = le();
      if (localStorage.getItem("TUIKit-userInfo")) {
        const c = localStorage.getItem("TUIKit-userInfo") || "",
          d = JSON.parse(c);
        new Date(d?.expire) > new Date() &&
          ((a.value = !0), (ruleForm.value.userID = d.userID || ""));
      }
      ce(st, (c, d) => {
        c.data.event == "MODAL_CLOSE" &&
          d.data.event == "MODAL_CLOSE" &&
          (l.value = !1);
      }),
        de(() => {
          f.value = !1;
        });
      const v = (c) => {
          fetch("https://api.dechat.io/v1/user/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Bearer " + c.token,
              Platform: "PC",
              lang: "en",
            },
            body: "nickname=" + c.nickname + "&headimgurl=" + c.headimgurl,
          })
            .then((d) => d.json())
            .then((d) => {});
        },
        J = (c) => {
          fetch(
            `https://api.dechat.io/v1/user/agreement?name=${
              c == "user" ? "agreement" : "privacy_policy"
            }`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Platform: "PC",
                lang: "en",
              },
            }
          )
            .then((d) => d.json())
            .then((d) => {
              d.status == 200 &&
                ((r.value = d.data.replace(/\r\n/g, "<br>")), (o.value = !0));
            });
        },
        F = (c) => {
          J(c), (s.value = c);
        },
        k = (c) =>
          c
            ? c.substring(0, 3) + "****" + c.substring(c.length - 4, c.length)
            : "",
        Q = (c) => {
          It.login(c)
            .then(async (d) => {
              i.push({
                path: "home",
                query: w.value
                  ? { status: w.value }
                  : y.value
                  ? { type: y.value }
                  : M.value
                  ? { page: M.value }
                  : "",
              }),
                Ie.switchUserStatus({ displayOnlineStatus: !0 }),
                (l.value = !1);
              const { chat: x } = It.getContext(),
                T = function (W) {
                  W.data.type == Ut.TYPES.KICKED_OUT_MULT_ACCOUNT &&
                    (f.value ||
                      It.logout().then(() => {
                        Re({
                          message:
                            "The current account has been logged in on other devices, please pay attention to account security!",
                          type: Be.ERROR,
                        }),
                          (f.value = !0);
                      }),
                    Dt(),
                    window.sessionStorage.clear());
                };
              x.on(Ut.EVENT.KICKED_OUT, T);
            })
            .catch((d) => {
              console.warn("login err in :", d),
                window.sessionStorage.getItem("addressString"),
                !window.sessionStorage.getItem("token") &&
                  !window.sessionStorage.getItem("code") &&
                  ((l.value = !1),
                  z({
                    message: xt.t("Login Failed"),
                    grouping: !0,
                    type: "error",
                  }));
            });
        },
        B = async () => {
          p.value = !1;
          const { address: c } = j();
          c
            ? K(c)
            : ((l.value = !1),
              z({
                message: "Please link wallet first",
                grouping: !0,
                type: "error",
              }));
        },
        yt = () => {
          if (!h.value) {
            z({
              message: "Please read and agree to the agreement",
              grouping: !0,
              type: "error",
            });
            return;
          }
          const { address: c } = j();
          let d = j();
          if (c)
            d.isConnected || L({ view: "Networks" }),
              (l.value = !0),
              setTimeout(() => {
                B();
              }, 2e3);
          else {
            d.isConnected || L({ view: "Networks" }), (l.value = !0);
            const x = setInterval(() => {
              let { address: T } = j();
              T && Lt && ((l.value = !0), B(), clearInterval(x));
            }, 4e3);
            p.value = !0;
          }
        },
        K = (c) => {
          const d = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCebwHPPiyHZ93iMte4P/ceE8mJ
    pjxbAgqH/KfPVys1B3j58v2G0wdpmRAnYSKz2gTqnQJvvm/aH4QHl1GwbfCfydre
    LFgjVI8Ea9h3gpMjlS57PqlKxoytZDUpmcsqU8I3IGXkjWVeVEWIyxv+eWe++jyc
    LUd3B3xvhH6WXyurmQIDAQAB
    -----END PUBLIC KEY-----`,
            x = { message: "deChat Login", address: c.toLowerCase() };
          let T = Se().unix() * 1e3;
          const W = new Xe();
          W.setPublicKey(d);
          const H = W.encrypt(JSON.stringify(x));
          let Pt = encodeURIComponent(H),
            re = `{"signed":"${Pt}"}dechatPlsio${T}`;
          const se = Te.SHA1(re).toString();
          window.sessionStorage.getItem("token") &&
          window.sessionStorage.getItem("code") &&
          window.sessionStorage.getItem("userId")
            ? (mt(c, window.sessionStorage.getItem("token")),
              window.sessionStorage.getItem("signss") &&
                window.sessionStorage.getItem("islogged") == "firsted" &&
                (console.log(123),
                window.sessionStorage.setItem("islogged", "firsted")))
            : (window.sessionStorage.setItem("islogged", "firsted"),
              window.sessionStorage.setItem("userId", c),
              fetch("https://api.dechat.io/v1/user/wallet-login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  time: T,
                  sign: encodeURIComponent(se),
                  Platform: "PC",
                  lang: "en",
                },
                body: "signed=" + encodeURIComponent(Pt),
              })
                .then((O) => O.json())
                .then((O) => {
                  if (O.status === 200) {
                    if (((I.value = O.data), O.data.is_logoff == 1)) {
                      e.value = !0;
                      return;
                    }
                    O.data && v(O.data),
                      window.sessionStorage.setItem("token", O.data.token),
                      window.sessionStorage.setItem("code", O.data.code),
                      mt(c, O.data.token);
                  } else if (O.status === 9027) {
                    let Ct = O.msg;
                    const oe = /\d{4}-\d{2}-\d{2}/,
                      Mt = Ct.match(oe);
                    (l.value = !1),
                      Dt(),
                      z({
                        message: Mt
                          ? "This account has been deleted successfully, please login after " +
                            Mt[0]
                          : Ct,
                        grouping: !0,
                        type: "error",
                      });
                  } else
                    (l.value = !1),
                      z({ message: O.msg, grouping: !0, type: "error" });
                })
                .catch((O) => {
                  (l.value = !1),
                    z({ message: O, grouping: !0, type: "error" });
                }));
        },
        ee = () => {
          (l.value = !1), Dt(), window.sessionStorage.clear(), (e.value = !1);
        },
        ie = () => {
          ne();
        },
        ne = () => {
          const { address: c } = j();
          fetch("https://api.dechat.io/v1/user/cancel-logoff", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              platform: "PC",
              lang: "en",
            },
            body: "userid=" + I.value.id + "&address=" + I.value.address,
          })
            .then((d) => d.json())
            .then((d) => {
              d.status === 200
                ? (window.sessionStorage.clear(),
                  (e.value = !1),
                  z({ type: "success", message: "Success" }),
                  c && K(c))
                : z({ type: "error", message: d.msg });
            });
        },
        mt = (c, d) => {
          window.sessionStorage.getItem("signss")
            ? xt.changeLanguage("en").then(() => {
                const x = {
                  SDKAppID: kt,
                  userID: c.toLowerCase(),
                  userSig: window.sessionStorage.getItem("signss"),
                  useUploadPlugin: !0,
                  useProfanityFilterPlugin: !0,
                  framework: `vue${qt}`,
                };
                Q(x);
              })
            : fetch("https://api.dechat.io/v1/user/tx-sign", {
                method: "get",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  Authorization: "Bearer " + d,
                  Platform: "PC",
                  lang: "en",
                },
              })
                .then((x) => x.json())
                .then(async (x) => {
                  x.status === 200 &&
                    (x.data
                      ? xt.changeLanguage("en").then(() => {
                          const T = {
                            SDKAppID: kt,
                            userID: c.toLowerCase(),
                            userSig: x.data,
                            useUploadPlugin: !0,
                            useProfanityFilterPlugin: !0,
                            framework: `vue${qt}`,
                          };
                          window.sessionStorage.setItem("signss", x.data), Q(T);
                        })
                      : K(c));
                });
        };
      ge(() => {
        const c = new URL(window.location.href);
        if (c.searchParams.has("type")) y.value = c.href.split("=")[1];
        else if (c.searchParams.get("tolink")) {
          const T = c.searchParams.get("tolink");
          M.value = T;
        } else {
          const T = c.searchParams.get("status");
          w.value = T;
        }
        wt &&
          window.ethereum !== void 0 &&
          window.ethereum.on("accountsChanged", Nt),
          (U.value = setInterval(() => {
            let T = j();
            T.isConnected
              ? (!window.sessionStorage.getItem("addressString") ||
                  window.sessionStorage.getItem("addressString") !==
                    T.address) &&
                (window.sessionStorage.setItem("addressString", T.address),
                (S.value = T.address))
              : ((S.value = ""),
                window.sessionStorage.clear("addressString"),
                clearInterval(U.value));
          }, 1e3)),
          _ &&
            window.sessionStorage.getItem("token") &&
            mt(_, window.sessionStorage.getItem("token"));
        const x = setInterval(() => {
          let T = j();
          T.isConnected
            ? ((l.value = !0),
              B(),
              (h.value = !0),
              window.sessionStorage.setItem("addressString", T.address),
              (S.value = T.address),
              window.sessionStorage.getItem("userId") &&
                window.sessionStorage.getItem("userId").toLowerCase() !==
                  window.sessionStorage
                    .getItem("addressString")
                    .toLowerCase() &&
                ((l.value = !0), B()),
              (!p.value && T.isConnected) || ((l.value = !0), B()),
              window.clearInterval(x))
            : window.sessionStorage.removeItem("addressString");
        }, 2e3);
      }),
        pe(() => {
          window.ethereum !== void 0 &&
            window.ethereum.off("accountsChanged", Nt),
            window.clearInterval(b),
            clearInterval(U.value);
        });
      const Nt = (c) => {
        window.sessionStorage.getItem("token") &&
          window.sessionStorage.getItem("code");
      };
      return (c, d) => {
        const x = St("el-button"),
          T = St("el-checkbox"),
          W = St("el-dialog");
        return (
          ve(),
          ye(
            "div",
            { class: Ht(["login", !N(wt) && "login-h5"]) },
            [
              A("div", ti, [
                ei,
                ii,
                ot(
                  x,
                  {
                    type: "primary",
                    class: Ht(N(h) ? "btn wallet" : "btn notwallet"),
                    onClick: d[0] || (d[0] = (H) => yt()),
                    loading: N(l),
                  },
                  {
                    default: Tt(() => [Et(be(N(S) ? k(N(S)) : "Connect"), 1)]),
                    _: 1,
                  },
                  8,
                  ["class", "loading"]
                ),
                me(
                  A(
                    "div",
                    ni,
                    [
                      ot(
                        T,
                        {
                          modelValue: N(h),
                          "onUpdate:modelValue":
                            d[1] ||
                            (d[1] = (H) => (bt(h) ? (h.value = H) : null)),
                          size: "large",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      A("div", ri, [
                        Et(" I have read and agree to the "),
                        A(
                          "span",
                          { onClick: d[2] || (d[2] = (H) => F("user")) },
                          "user agreement"
                        ),
                        Et(" and "),
                        A(
                          "span",
                          { onClick: d[3] || (d[3] = (H) => F("privacy")) },
                          "privacy policy"
                        ),
                      ]),
                    ],
                    512
                  ),
                  [[we, !N(S)]]
                ),
              ]),
              ot(
                W,
                {
                  modelValue: N(o),
                  "onUpdate:modelValue":
                    d[4] || (d[4] = (H) => (bt(o) ? (o.value = H) : null)),
                  width: N(Lt) ? "90%" : 600,
                  "show-close": !0,
                  center: !0,
                  title: N(s) == "user" ? "User Agreement" : "Privacy Policy",
                  "align-center": !0,
                  "before-close": () => (o.value = !1),
                },
                {
                  default: Tt(() => [
                    A("div", si, [A("div", { innerHTML: N(r) }, null, 8, oi)]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "width", "title", "before-close"]
              ),
              ot(
                W,
                {
                  modelValue: N(e),
                  "onUpdate:modelValue":
                    d[5] || (d[5] = (H) => (bt(e) ? (e.value = H) : null)),
                  "close-on-click-modal": !1,
                  "align-center": !0,
                  width: N(wt) ? "500" : "90%",
                  "show-close": !1,
                },
                {
                  default: Tt(() => [
                    A("div", { class: "logoff_modal" }, [
                      ai,
                      hi,
                      A("div", { class: "btntwoboxs" }, [
                        A("button", { onClick: ie }, "Log In"),
                        A("button", { onClick: ee }, "Cancel"),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "width"]
              ),
            ],
            2
          )
        );
      };
    },
  },
  li = ae(ui, [["__scopeId", "data-v-e7def070"]]);
export { li as default };
