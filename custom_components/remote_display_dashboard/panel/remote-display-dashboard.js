/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, hn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Re = () => {
}, Hi = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rn = (e) => e.startsWith("onUpdate:"), Ve = Object.assign, mo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ol = Object.prototype.hasOwnProperty, he = (e, t) => Ol.call(e, t), z = Array.isArray, Zt = (e) => Yn(e) === "[object Map]", Ri = (e) => Yn(e) === "[object Set]", Fo = (e) => Yn(e) === "[object Date]", G = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Ot = (e) => typeof e == "symbol", pe = (e) => e !== null && typeof e == "object", _o = (e) => (pe(e) || G(e)) && G(e.then) && G(e.catch), ji = Object.prototype.toString, Yn = (e) => ji.call(e), yo = (e) => Yn(e).slice(8, -1), Fi = (e) => Yn(e) === "[object Object]", bo = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ Mt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cl = /* @__PURE__ */ Mt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), $s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xl = /-\w/g, Be = $s(
  (e) => e.replace(xl, (t) => t.slice(1).toUpperCase())
), Sl = /\B([A-Z])/g, Ft = $s(
  (e) => e.replace(Sl, "-$1").toLowerCase()
), nn = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gt = $s(
  (e) => e ? `on${nn(e)}` : ""
), Et = (e, t) => !Object.is(e, t), fn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ms = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Eo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vl = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bo;
const Gn = () => Bo || (Bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Oe(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ce(s) ? Tl(s) : Oe(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ce(e) || pe(e))
    return e;
}
const Dl = /;(?![^(]*\))/g, $l = /:([^]+)/, kl = /\/\*[^]*?\*\//g;
function Tl(e) {
  const t = {};
  return e.replace(kl, "").split(Dl).forEach((n) => {
    if (n) {
      const s = n.split($l);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function de(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const s = de(e[n]);
      s && (t += s + " ");
    }
  else if (pe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ml = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Pl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Al = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Il = /* @__PURE__ */ Mt(Ml), Ll = /* @__PURE__ */ Mt(Pl), Hl = /* @__PURE__ */ Mt(Al), Rl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jl = /* @__PURE__ */ Mt(Rl);
function Bi(e) {
  return !!e || e === "";
}
function Fl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = No(e[s], t[s]);
  return n;
}
function No(e, t) {
  if (e === t) return !0;
  let n = Fo(e), s = Fo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ot(e), s = Ot(t), n || s)
    return e === t;
  if (n = z(e), s = z(t), n || s)
    return n && s ? Fl(e, t) : !1;
  if (n = pe(e), s = pe(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
      if (l && !c || !l && c || !No(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const zi = (e) => !!(e && e.__v_isRef === !0), Z = (e) => Ce(e) ? e : e == null ? "" : z(e) || pe(e) && (e.toString === ji || !G(e.toString)) ? zi(e) ? Z(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => zi(t) ? Ui(e, t.value) : Zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Rs(s, i) + " =>"] = o, n),
    {}
  )
} : Ri(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rs(n))
} : Ot(t) ? Rs(t) : pe(t) && !z(t) && !Fi(t) ? String(t) : t, Rs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ut(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ze;
class Bl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ze, !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ze;
      try {
        return Ze = this, t();
      } finally {
        Ze = n;
      }
    } else process.env.NODE_ENV !== "production" && ut("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ze, Ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ze = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zl() {
  return Ze;
}
let ge;
const js = /* @__PURE__ */ new WeakSet();
class Ki {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ze && Ze.active && Ze.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, js.has(this) && (js.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, zo(this), Yi(this);
    const t = ge, n = at;
    ge = this, at = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && ge !== this && ut(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Gi(this), ge = t, at = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Co(t);
      this.deps = this.depsTail = void 0, zo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? js.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qs(this) && this.run();
  }
  get dirty() {
    return Qs(this);
  }
}
let Wi = 0, Mn, Pn;
function qi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pn, Pn = e;
    return;
  }
  e.next = Mn, Mn = e;
}
function wo() {
  Wi++;
}
function Oo() {
  if (--Wi > 0)
    return;
  if (Pn) {
    let t = Pn;
    for (Pn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mn; ) {
    let t = Mn;
    for (Mn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Co(s), Ul(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ji(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ji(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jn) || (e.globalVersion = jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ge, s = at;
  ge = e, at = !0;
  try {
    Yi(e);
    const o = e.fn(e._value);
    (t.version === 0 || Et(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ge = n, at = s, Gi(e), e.flags &= -3;
  }
}
function Co(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Co(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let at = !0;
const Xi = [];
function ft() {
  Xi.push(at), at = !1;
}
function dt() {
  const e = Xi.pop();
  at = e === void 0 ? !0 : e;
}
function zo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ge;
    ge = void 0;
    try {
      t();
    } finally {
      ge = n;
    }
  }
}
let jn = 0;
class Kl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!ge || !at || ge === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ge)
      n = this.activeLink = new Kl(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, Zi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = s);
    }
    return process.env.NODE_ENV !== "production" && ge.onTrack && ge.onTrack(
      Ve(
        {
          effect: ge
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, jn++, this.notify(t);
  }
  notify(t) {
    wo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Ve(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Oo();
    }
  }
}
function Zi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Zi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const eo = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), to = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Fn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function He(e, t, n) {
  if (at && ge) {
    let s = eo.get(e);
    s || eo.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new xo()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Nt(e, t, n, s, o, i) {
  const r = eo.get(e);
  if (!r) {
    jn++;
    return;
  }
  const l = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : c.trigger());
  };
  if (wo(), t === "clear")
    r.forEach(l);
  else {
    const c = z(e), p = c && bo(n);
    if (c && n === "length") {
      const f = Number(s);
      r.forEach((a, h) => {
        (h === "length" || h === Fn || !Ot(h) && h >= f) && l(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), p && l(r.get(Fn)), t) {
        case "add":
          c ? p && l(r.get("length")) : (l(r.get(Qt)), Zt(e) && l(r.get(to)));
          break;
        case "delete":
          c || (l(r.get(Qt)), Zt(e) && l(r.get(to)));
          break;
        case "set":
          Zt(e) && l(r.get(Qt));
          break;
      }
  }
  Oo();
}
function cn(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (He(t, "iterate", Fn), /* @__PURE__ */ Ye(e) ? t : t.map(ht));
}
function ks(e) {
  return He(e = /* @__PURE__ */ te(e), "iterate", Fn), e;
}
function bt(e, t) {
  return /* @__PURE__ */ pt(e) ? mn(/* @__PURE__ */ jt(e) ? ht(t) : t) : ht(t);
}
const Wl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fs(this, Symbol.iterator, (e) => bt(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => z(t) ? cn(t) : t)
    );
  },
  entries() {
    return Fs(this, "entries", (e) => (e[1] = bt(this, e[1]), e));
  },
  every(e, t) {
    return xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => bt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return xt(
      this,
      "find",
      e,
      t,
      (n) => bt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xt(
      this,
      "findLast",
      e,
      t,
      (n) => bt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bs(this, "includes", e);
  },
  indexOf(...e) {
    return Bs(this, "indexOf", e);
  },
  join(e) {
    return cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Bs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return Uo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Uo(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return cn(this).toReversed();
  },
  toSorted(e) {
    return cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return Fs(this, "values", (e) => bt(this, e));
  }
};
function Fs(e, t, n) {
  const s = ks(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ye(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const ql = Array.prototype;
function xt(e, t, n, s, o, i) {
  const r = ks(e), l = r !== e && !/* @__PURE__ */ Ye(e), c = r[t];
  if (c !== ql[t]) {
    const a = c.apply(e, i);
    return l ? ht(a) : a;
  }
  let p = n;
  r !== e && (l ? p = function(a, h) {
    return n.call(this, bt(e, a), h, e);
  } : n.length > 2 && (p = function(a, h) {
    return n.call(this, a, h, e);
  }));
  const f = c.call(r, p, s);
  return l && o ? o(f) : f;
}
function Uo(e, t, n, s) {
  const o = ks(e), i = o !== e && !/* @__PURE__ */ Ye(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(p, f, a) {
    return l && (l = !1, p = bt(e, p)), n.call(this, p, bt(e, f), a, e);
  }) : n.length > 3 && (r = function(p, f, a) {
    return n.call(this, p, f, a, e);
  }));
  const c = o[t](r, ...s);
  return l ? bt(e, c) : c;
}
function Bs(e, t, n) {
  const s = /* @__PURE__ */ te(e);
  He(s, "iterate", Fn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ _s(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), s[t](...n)) : o;
}
function On(e, t, n = []) {
  ft(), wo();
  const s = (/* @__PURE__ */ te(e))[t].apply(e, n);
  return Oo(), dt(), s;
}
const Yl = /* @__PURE__ */ Mt("__proto__,__v_isRef,__isVue"), Qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ot)
);
function Gl(e) {
  Ot(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return He(t, "has", e), t.hasOwnProperty(e);
}
class er {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? rr : ir : i ? or : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = z(t);
    if (!o) {
      let c;
      if (r && (c = Wl[n]))
        return c;
      if (n === "hasOwnProperty")
        return Gl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ie(t) ? t : s
    );
    if ((Ot(n) ? Qi.has(n) : Yl(n)) || (o || He(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ie(l)) {
      const c = r && bo(n) ? l : l.value;
      return o && pe(c) ? /* @__PURE__ */ so(c) : c;
    }
    return pe(l) ? o ? /* @__PURE__ */ so(l) : /* @__PURE__ */ So(l) : l;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = z(t) && bo(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ pt(i);
      if (!/* @__PURE__ */ Ye(s) && !/* @__PURE__ */ pt(s) && (i = /* @__PURE__ */ te(i), s = /* @__PURE__ */ te(s)), !r && /* @__PURE__ */ Ie(i) && !/* @__PURE__ */ Ie(s))
        return p ? (process.env.NODE_ENV !== "production" && ut(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (i.value = s, !0);
    }
    const l = r ? Number(n) < t.length : he(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ie(t) ? t : o
    );
    return t === /* @__PURE__ */ te(o) && (l ? Et(s, i) && Nt(t, "set", n, s, i) : Nt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = he(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && Nt(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ot(n) || !Qi.has(n)) && He(t, "has", n), s;
  }
  ownKeys(t) {
    return He(
      t,
      "iterate",
      z(t) ? "length" : Qt
    ), Reflect.ownKeys(t);
  }
}
class nr extends er {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ut(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ut(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Jl = /* @__PURE__ */ new tr(), Xl = /* @__PURE__ */ new nr(), Zl = /* @__PURE__ */ new tr(!0), Ql = /* @__PURE__ */ new nr(!0), no = (e) => e, is = (e) => Reflect.getPrototypeOf(e);
function ec(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ te(o), r = Zt(i), l = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, p = o[e](...s), f = n ? no : t ? mn : ht;
    return !t && He(
      i,
      "iterate",
      c ? to : Qt
    ), Ve(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: a, done: h } = p.next();
          return h ? { value: a, done: h } : {
            value: l ? [f(a[0]), f(a[1])] : f(a),
            done: h
          };
        }
      }
    );
  };
}
function rs(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ut(
        `${nn(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ te(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function tc(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ te(i), l = /* @__PURE__ */ te(o);
      e || (Et(o, l) && He(r, "get", o), He(r, "get", l));
      const { has: c } = is(r), p = t ? no : e ? mn : ht;
      if (c.call(r, o))
        return p(i.get(o));
      if (c.call(r, l))
        return p(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && He(/* @__PURE__ */ te(o), "iterate", Qt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ te(i), l = /* @__PURE__ */ te(o);
      return e || (Et(o, l) && He(r, "has", o), He(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, c = /* @__PURE__ */ te(l), p = t ? no : e ? mn : ht;
      return !e && He(c, "iterate", Qt), l.forEach((f, a) => o.call(i, p(f), p(a), r));
    }
  };
  return Ve(
    n,
    e ? {
      add: rs("add"),
      set: rs("set"),
      delete: rs("delete"),
      clear: rs("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ te(this), r = is(i), l = /* @__PURE__ */ te(o), c = !t && !/* @__PURE__ */ Ye(o) && !/* @__PURE__ */ pt(o) ? l : o;
        return r.has.call(i, c) || Et(o, c) && r.has.call(i, o) || Et(l, c) && r.has.call(i, l) || (i.add(c), Nt(i, "add", c, c)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ye(i) && !/* @__PURE__ */ pt(i) && (i = /* @__PURE__ */ te(i));
        const r = /* @__PURE__ */ te(this), { has: l, get: c } = is(r);
        let p = l.call(r, o);
        p ? process.env.NODE_ENV !== "production" && Ko(r, l, o) : (o = /* @__PURE__ */ te(o), p = l.call(r, o));
        const f = c.call(r, o);
        return r.set(o, i), p ? Et(i, f) && Nt(r, "set", o, i, f) : Nt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ te(this), { has: r, get: l } = is(i);
        let c = r.call(i, o);
        c ? process.env.NODE_ENV !== "production" && Ko(i, r, o) : (o = /* @__PURE__ */ te(o), c = r.call(i, o));
        const p = l ? l.call(i, o) : void 0, f = i.delete(o);
        return c && Nt(i, "delete", o, void 0, p), f;
      },
      clear() {
        const o = /* @__PURE__ */ te(this), i = o.size !== 0, r = process.env.NODE_ENV !== "production" ? Zt(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && Nt(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = ec(o, e, t);
  }), n;
}
function Ts(e, t) {
  const n = tc(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    he(n, o) && o in s ? n : s,
    o,
    i
  );
}
const nc = {
  get: /* @__PURE__ */ Ts(!1, !1)
}, sc = {
  get: /* @__PURE__ */ Ts(!1, !0)
}, oc = {
  get: /* @__PURE__ */ Ts(!0, !1)
}, ic = {
  get: /* @__PURE__ */ Ts(!0, !0)
};
function Ko(e, t, n) {
  const s = /* @__PURE__ */ te(n);
  if (s !== n && t.call(e, s)) {
    const o = yo(e);
    ut(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap();
function rc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rc(yo(e));
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  return /* @__PURE__ */ pt(e) ? e : Ms(
    e,
    !1,
    Jl,
    nc,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function cc(e) {
  return Ms(
    e,
    !1,
    Zl,
    sc,
    or
  );
}
// @__NO_SIDE_EFFECTS__
function so(e) {
  return Ms(
    e,
    !0,
    Xl,
    oc,
    ir
  );
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  return Ms(
    e,
    !0,
    Ql,
    ic,
    rr
  );
}
function Ms(e, t, n, s, o) {
  if (!pe(e))
    return process.env.NODE_ENV !== "production" && ut(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = lc(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return /* @__PURE__ */ pt(e) ? /* @__PURE__ */ jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function ac(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && ms(e, "__v_skip", !0), e;
}
const ht = (e) => pe(e) ? /* @__PURE__ */ So(e) : e, mn = (e) => pe(e) ? /* @__PURE__ */ so(e) : e;
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return uc(e, !1);
}
function uc(e, t) {
  return /* @__PURE__ */ Ie(e) ? e : new fc(e, t);
}
class fc {
  constructor(t, n) {
    this.dep = new xo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ te(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ye(t) || /* @__PURE__ */ pt(t);
    t = s ? t : /* @__PURE__ */ te(t), Et(t, n) && (this._rawValue = t, this._value = s ? t : ht(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function W(e) {
  return /* @__PURE__ */ Ie(e) ? e.value : e;
}
const dc = {
  get: (e, t, n) => t === "__v_raw" ? e : W(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Ie(o) && !/* @__PURE__ */ Ie(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function lr(e) {
  return /* @__PURE__ */ jt(e) ? e : new Proxy(e, dc);
}
class pc {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return qi(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ji(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && ut("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function hc(e, t, n = !1) {
  let s, o;
  G(e) ? s = e : (s = e.get, o = e.set);
  const i = new pc(s, o, n);
  return process.env.NODE_ENV, i;
}
const ls = {}, ys = /* @__PURE__ */ new WeakMap();
let Jt;
function vc(e, t = !1, n = Jt) {
  if (n) {
    let s = ys.get(n);
    s || ys.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && ut(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function gc(e, t, n = me) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: c } = n, p = (I) => {
    (n.onWarn || ut)(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (I) => o ? I : /* @__PURE__ */ Ye(I) || o === !1 || o === 0 ? kt(I, 1) : kt(I);
  let a, h, y, N, b = !1, P = !1;
  if (/* @__PURE__ */ Ie(e) ? (h = () => e.value, b = /* @__PURE__ */ Ye(e)) : /* @__PURE__ */ jt(e) ? (h = () => f(e), b = !0) : z(e) ? (P = !0, b = e.some((I) => /* @__PURE__ */ jt(I) || /* @__PURE__ */ Ye(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Ie(I))
      return I.value;
    if (/* @__PURE__ */ jt(I))
      return f(I);
    if (G(I))
      return c ? c(I, 2) : I();
    process.env.NODE_ENV !== "production" && p(I);
  })) : G(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (y) {
      ft();
      try {
        y();
      } finally {
        dt();
      }
    }
    const I = Jt;
    Jt = a;
    try {
      return c ? c(e, 3, [N]) : e(N);
    } finally {
      Jt = I;
    }
  } : (h = Re, process.env.NODE_ENV !== "production" && p(e)), t && o) {
    const I = h, se = o === !0 ? 1 / 0 : o;
    h = () => kt(I(), se);
  }
  const B = zl(), J = () => {
    a.stop(), B && B.active && mo(B.effects, a);
  };
  if (i && t) {
    const I = t;
    t = (...se) => {
      I(...se), J();
    };
  }
  let U = P ? new Array(e.length).fill(ls) : ls;
  const ye = (I) => {
    if (!(!(a.flags & 1) || !a.dirty && !I))
      if (t) {
        const se = a.run();
        if (o || b || (P ? se.some((Q, re) => Et(Q, U[re])) : Et(se, U))) {
          y && y();
          const Q = Jt;
          Jt = a;
          try {
            const re = [
              se,
              // pass undefined as the old value when it's changed for the first time
              U === ls ? void 0 : P && U[0] === ls ? [] : U,
              N
            ];
            U = se, c ? c(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Jt = Q;
          }
        }
      } else
        a.run();
  };
  return l && l(ye), a = new Ki(h), a.scheduler = r ? () => r(ye, !1) : ye, N = (I) => vc(I, !1, a), y = a.onStop = () => {
    const I = ys.get(a);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const se of I) se();
      ys.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? ye(!0) : U = a.run() : r ? r(ye.bind(null, !0), !0) : a.run(), J.pause = a.pause.bind(a), J.resume = a.resume.bind(a), J.stop = J, J;
}
function kt(e, t = 1 / 0, n) {
  if (t <= 0 || !pe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ie(e))
    kt(e.value, t, n);
  else if (z(e))
    for (let s = 0; s < e.length; s++)
      kt(e[s], t, n);
  else if (Ri(e) || Zt(e))
    e.forEach((s) => {
      kt(s, t, n);
    });
  else if (Fi(e)) {
    for (const s in e)
      kt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && kt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const en = [];
function cs(e) {
  en.push(e);
}
function as() {
  en.pop();
}
let zs = !1;
function k(e, ...t) {
  if (zs) return;
  zs = !0, ft();
  const n = en.length ? en[en.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = mc();
  if (s)
    yn(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${ts(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ..._c(o)), console.warn(...i);
  }
  dt(), zs = !1;
}
function mc() {
  let e = en[en.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function _c(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...yc(n));
  }), t;
}
function yc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ts(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...bc(e.props), i] : [o + i];
}
function bc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...cr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cr(e, t, n) {
  return Ce(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ Ie(t) ? (t = cr(e, /* @__PURE__ */ te(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ te(t), n ? t : [`${e}=`, t]);
}
function Ec(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? k(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && k(`${t} is NaN - the duration expression might be incorrect.`));
}
const Vo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Jn(o, t, n);
  }
}
function vt(e, t, n, s) {
  if (G(e)) {
    const o = yn(e, t, n, s);
    return o && _o(o) && o.catch((i) => {
      Jn(i, t, n);
    }), o;
  }
  if (z(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(vt(e[i], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && k(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Jn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || me;
  if (t) {
    let l = t.parent;
    const c = t.proxy, p = process.env.NODE_ENV !== "production" ? Vo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let a = 0; a < f.length; a++)
          if (f[a](e, c, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      ft(), yn(i, null, 10, [
        e,
        c,
        p
      ]), dt();
      return;
    }
  }
  Nc(e, n, o, s, r);
}
function Nc(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Vo[t];
    if (n && cs(n), k(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && as(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const qe = [];
let _t = -1;
const vn = [];
let Rt = null, dn = 0;
const ar = /* @__PURE__ */ Promise.resolve();
let bs = null;
const wc = 100;
function Oc(e) {
  const t = bs || ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cc(e) {
  let t = _t + 1, n = qe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = qe[s], i = Bn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ps(e) {
  if (!(e.flags & 1)) {
    const t = Bn(e), n = qe[qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Bn(n) ? qe.push(e) : qe.splice(Cc(t), 0, e), e.flags |= 1, ur();
  }
}
function ur() {
  bs || (bs = ar.then(pr));
}
function fr(e) {
  z(e) ? vn.push(...e) : Rt && e.id === -1 ? Rt.splice(dn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), ur();
}
function Wo(e, t, n = _t + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < qe.length; n++) {
    const s = qe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && Do(t, s))
        continue;
      qe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function dr(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, s) => Bn(n) - Bn(s)
    );
    if (vn.length = 0, Rt) {
      Rt.push(...t);
      return;
    }
    for (Rt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), dn = 0; dn < Rt.length; dn++) {
      const n = Rt[dn];
      process.env.NODE_ENV !== "production" && Do(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Rt = null, dn = 0;
  }
}
const Bn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Do(e, n) : Re;
  try {
    for (_t = 0; _t < qe.length; _t++) {
      const n = qe[_t];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; _t < qe.length; _t++) {
      const n = qe[_t];
      n && (n.flags &= -2);
    }
    _t = -1, qe.length = 0, dr(e), bs = null, (qe.length || vn.length) && pr(e);
  }
}
function Do(e, t) {
  const n = e.get(t) || 0;
  if (n > wc) {
    const s = t.i, o = s && Ho(s.type);
    return Jn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Qe = !1;
const qo = (e) => {
  try {
    return Qe;
  } finally {
    Qe = e;
  }
}, us = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Gn().__VUE_HMR_RUNTIME__ = {
  createRecord: Us(hr),
  rerender: Us(Vc),
  reload: Us(Dc)
});
const sn = /* @__PURE__ */ new Map();
function xc(e) {
  const t = e.type.__hmrId;
  let n = sn.get(t);
  n || (hr(t, e.type), n = sn.get(t)), n.instances.add(e);
}
function Sc(e) {
  sn.get(e.type.__hmrId).instances.delete(e);
}
function hr(e, t) {
  return sn.has(e) ? !1 : (sn.set(e, {
    initialDef: Es(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Es(e) {
  return ol(e) ? e.__vccOpts : e;
}
function Vc(e, t) {
  const n = sn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Es(s.type).render = t), s.renderCache = [], Qe = !0, s.job.flags & 8 || s.update(), Qe = !1;
  }));
}
function Dc(e, t) {
  const n = sn.get(e);
  if (!n) return;
  t = Es(t), Yo(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = Es(i.type);
    let l = us.get(r);
    l || (r !== n.initialDef && Yo(r, t), us.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Ps(() => {
      i.job.flags & 8 || (Qe = !0, i.parent.update(), Qe = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  fr(() => {
    us.clear();
  });
}
function Yo(e, t) {
  Ve(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Us(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ct, Dn = [], oo = !1;
function Xn(e, ...t) {
  ct ? ct.emit(e, ...t) : oo || Dn.push({ event: e, args: t });
}
function $o(e, t) {
  var n, s;
  ct = e, ct ? (ct.enabled = !0, Dn.forEach(({ event: o, args: i }) => ct.emit(o, ...i)), Dn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    $o(i, t);
  }), setTimeout(() => {
    ct || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, oo = !0, Dn = []);
  }, 3e3)) : (oo = !0, Dn = []);
}
function $c(e, t) {
  Xn("app:init", e, t, {
    Fragment: Y,
    Text: Qn,
    Comment: Ae,
    Static: ds
  });
}
function kc(e) {
  Xn("app:unmount", e);
}
const Tc = /* @__PURE__ */ ko(
  "component:added"
  /* COMPONENT_ADDED */
), vr = /* @__PURE__ */ ko(
  "component:updated"
  /* COMPONENT_UPDATED */
), Mc = /* @__PURE__ */ ko(
  "component:removed"
  /* COMPONENT_REMOVED */
), Pc = (e) => {
  ct && typeof ct.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ct.cleanupBuffer(e) && Mc(e);
};
// @__NO_SIDE_EFFECTS__
function ko(e) {
  return (t) => {
    Xn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ac = /* @__PURE__ */ gr(
  "perf:start"
  /* PERFORMANCE_START */
), Ic = /* @__PURE__ */ gr(
  "perf:end"
  /* PERFORMANCE_END */
);
function gr(e) {
  return (t, n, s) => {
    Xn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Lc(e, t, n) {
  Xn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ke = null, mr = null;
function Ns(e) {
  const t = Ke;
  return Ke = e, mr = e && e.type.__scopeId || null, t;
}
function _r(e, t = Ke, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ss(-1);
    const i = Ns(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Ns(i), s._d && Ss(1);
    }
    return process.env.NODE_ENV !== "production" && vr(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function yr(e) {
  Cl(e) && k("Do not use built-in directive ids as custom directive id: " + e);
}
function Ht(e, t) {
  if (Ke === null)
    return process.env.NODE_ENV !== "production" && k("withDirectives can only be used inside render functions."), e;
  const n = Ls(Ke), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, c = me] = t[o];
    i && (G(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && kt(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Ut(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let c = l.dir[s];
    c && (ft(), vt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), dt());
  }
}
function Hc(e, t) {
  if (process.env.NODE_ENV !== "production" && (!Pe || Pe.isMounted) && k("provide() can only be used inside setup()."), Pe) {
    let n = Pe.provides;
    const s = Pe.parent && Pe.parent.provides;
    s === n && (n = Pe.provides = Object.create(s)), n[e] = t;
  }
}
function et(e, t, n = !1) {
  const s = Lo();
  if (s || gn) {
    let o = gn ? gn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && k(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
const Rc = /* @__PURE__ */ Symbol.for("v-scx"), jc = () => {
  {
    const e = et(Rc);
    return e || process.env.NODE_ENV !== "production" && k(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ue(e, t, n) {
  return process.env.NODE_ENV !== "production" && !G(t) && k(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), br(e, t, n);
}
function br(e, t, n = me) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && k(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && k(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && k(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Ve({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = k);
  const c = t && s || !t && i !== "post";
  let p;
  if (Kn) {
    if (i === "sync") {
      const y = jc();
      p = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = Re, y.resume = Re, y.pause = Re, y;
    }
  }
  const f = Pe;
  l.call = (y, N, b) => vt(y, f, N, b);
  let a = !1;
  i === "post" ? l.scheduler = (y) => {
    Xe(y, f && f.suspense);
  } : i !== "sync" && (a = !0, l.scheduler = (y, N) => {
    N ? y() : Ps(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), a && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const h = gc(e, t, l);
  return Kn && (p ? p.push(h) : c && h()), h;
}
function Fc(e, t, n) {
  const s = this.proxy, o = Ce(e) ? e.includes(".") ? Er(s, e) : () => s[e] : e.bind(s, s);
  let i;
  G(t) ? i = t : (i = t.handler, n = t);
  const r = es(this), l = br(o, i.bind(s), n);
  return r(), l;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Bc = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, yt = /* @__PURE__ */ Symbol("_leaveCb"), Cn = /* @__PURE__ */ Symbol("_enterCb");
function zc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $r(() => {
    e.isMounted = !0;
  }), kr(() => {
    e.isUnmounting = !0;
  }), e;
}
const rt = [Function, Array], wr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rt,
  onEnter: rt,
  onAfterEnter: rt,
  onEnterCancelled: rt,
  // leave
  onBeforeLeave: rt,
  onLeave: rt,
  onAfterLeave: rt,
  onLeaveCancelled: rt,
  // appear
  onBeforeAppear: rt,
  onAppear: rt,
  onAfterAppear: rt,
  onAppearCancelled: rt
}, Or = (e) => {
  const t = e.subTree;
  return t.component ? Or(t.component) : t;
}, Uc = {
  name: "BaseTransition",
  props: wr,
  setup(e, { slots: t }) {
    const n = Lo(), s = zc();
    return () => {
      const o = t.default && Sr(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Cr(o), r = /* @__PURE__ */ te(e), { mode: l } = r;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && k(`invalid <transition> mode: ${l}`), s.isLeaving)
        return Ks(i);
      const c = Go(i);
      if (!c)
        return Ks(i);
      let p = io(
        c,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (a) => p = a
      );
      c.type !== Ae && zn(c, p);
      let f = n.subTree && Go(n.subTree);
      if (f && f.type !== Ae && !Xt(f, c) && Or(n).type !== Ae) {
        let a = io(
          f,
          r,
          s,
          n
        );
        if (zn(f, a), l === "out-in" && c.type !== Ae)
          return s.isLeaving = !0, a.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete a.afterLeave, f = void 0;
          }, Ks(i);
        l === "in-out" && c.type !== Ae ? a.delayLeave = (h, y, N) => {
          const b = xr(
            s,
            f
          );
          b[String(f.key)] = f, h[yt] = () => {
            y(), h[yt] = void 0, delete p.delayedLeave, f = void 0;
          }, p.delayedLeave = () => {
            N(), delete p.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Cr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Ae) {
        if (process.env.NODE_ENV !== "production" && n) {
          k(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Kc = Uc;
function xr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function io(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: p,
    onAfterEnter: f,
    onEnterCancelled: a,
    onBeforeLeave: h,
    onLeave: y,
    onAfterLeave: N,
    onLeaveCancelled: b,
    onBeforeAppear: P,
    onAppear: B,
    onAfterAppear: J,
    onAppearCancelled: U
  } = t, ye = String(e.key), I = xr(n, e), se = (R, ue) => {
    R && vt(
      R,
      s,
      9,
      ue
    );
  }, Q = (R, ue) => {
    const ve = ue[1];
    se(R, ue), z(R) ? R.every((A) => A.length <= 1) && ve() : R.length <= 1 && ve();
  }, re = {
    mode: r,
    persisted: l,
    beforeEnter(R) {
      let ue = c;
      if (!n.isMounted)
        if (i)
          ue = P || c;
        else
          return;
      R[yt] && R[yt](
        !0
        /* cancelled */
      );
      const ve = I[ye];
      ve && Xt(e, ve) && ve.el[yt] && ve.el[yt](), se(ue, [R]);
    },
    enter(R) {
      if (!Qe && I[ye] === e) return;
      let ue = p, ve = f, A = a;
      if (!n.isMounted)
        if (i)
          ue = B || p, ve = J || f, A = U || a;
        else
          return;
      let q = !1;
      R[Cn] = ($e) => {
        q || (q = !0, $e ? se(A, [R]) : se(ve, [R]), re.delayedLeave && re.delayedLeave(), R[Cn] = void 0);
      };
      const oe = R[Cn].bind(null, !1);
      ue ? Q(ue, [R, oe]) : oe();
    },
    leave(R, ue) {
      const ve = String(e.key);
      if (R[Cn] && R[Cn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ue();
      se(h, [R]);
      let A = !1;
      R[yt] = (oe) => {
        A || (A = !0, ue(), oe ? se(b, [R]) : se(N, [R]), R[yt] = void 0, I[ve] === e && delete I[ve]);
      };
      const q = R[yt].bind(null, !1);
      I[ve] = e, y ? Q(y, [R, q]) : q();
    },
    clone(R) {
      const ue = io(
        R,
        t,
        n,
        s,
        o
      );
      return o && o(ue), ue;
    }
  };
  return re;
}
function Ks(e) {
  if (Zn(e))
    return e = Ct(e), e.children = null, e;
}
function Go(e) {
  if (!Zn(e))
    return Nr(e.type) && e.children ? Cr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && G(n.default))
      return n.default();
  }
}
function zn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Sr(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Y ? (r.patchFlag & 128 && o++, s = s.concat(
      Sr(r.children, t, l)
    )) : (t || r.type !== Ae) && s.push(l != null ? Ct(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
function Vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Jo = /* @__PURE__ */ new WeakSet();
function Xo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ws = /* @__PURE__ */ new WeakMap();
function An(e, t, n, s, o = !1) {
  if (z(e)) {
    e.forEach(
      (b, P) => An(
        b,
        t && (z(t) ? t[P] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (In(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && An(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Ls(s.component) : s.el, r = o ? null : i, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    k(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, f = l.refs === me ? l.refs = {} : l.refs, a = l.setupState, h = /* @__PURE__ */ te(a), y = a === me ? Hi : (b) => process.env.NODE_ENV !== "production" && (he(h, b) && !/* @__PURE__ */ Ie(h[b]) && k(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), Jo.has(h[b])) || Xo(f, b) ? !1 : he(h, b), N = (b, P) => !(process.env.NODE_ENV !== "production" && Jo.has(b) || P && Xo(f, P));
  if (p != null && p !== c) {
    if (Zo(t), Ce(p))
      f[p] = null, y(p) && (a[p] = null);
    else if (/* @__PURE__ */ Ie(p)) {
      const b = t;
      N(p, b.k) && (p.value = null), b.k && (f[b.k] = null);
    }
  }
  if (G(c))
    yn(c, l, 12, [r, f]);
  else {
    const b = Ce(c), P = /* @__PURE__ */ Ie(c);
    if (b || P) {
      const B = () => {
        if (e.f) {
          const J = b ? y(c) ? a[c] : f[c] : N(c) || !e.k ? c.value : f[e.k];
          if (o)
            z(J) && mo(J, i);
          else if (z(J))
            J.includes(i) || J.push(i);
          else if (b)
            f[c] = [i], y(c) && (a[c] = f[c]);
          else {
            const U = [i];
            N(c, e.k) && (c.value = U), e.k && (f[e.k] = U);
          }
        } else b ? (f[c] = r, y(c) && (a[c] = r)) : P ? (N(c, e.k) && (c.value = r), e.k && (f[e.k] = r)) : process.env.NODE_ENV !== "production" && k("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (r) {
        const J = () => {
          B(), ws.delete(e);
        };
        J.id = -1, ws.set(e, J), Xe(J, n);
      } else
        Zo(e), B();
    } else process.env.NODE_ENV !== "production" && k("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function Zo(e) {
  const t = ws.get(e);
  t && (t.flags |= 8, ws.delete(e));
}
Gn().requestIdleCallback;
Gn().cancelIdleCallback;
const In = (e) => !!e.type.__asyncLoader, Zn = (e) => e.type.__isKeepAlive;
function Wc(e, t) {
  Dr(e, "a", t);
}
function qc(e, t) {
  Dr(e, "da", t);
}
function Dr(e, t, n = Pe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (As(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Zn(o.parent.vnode) && Yc(s, t, n, o), o = o.parent;
  }
}
function Yc(e, t, n, s) {
  const o = As(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Tr(() => {
    mo(s[t], o);
  }, n);
}
function As(e, t, n = Pe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      ft();
      const l = es(n), c = vt(t, n, e, r);
      return l(), dt(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Gt(Vo[e].replace(/ hook$/, ""));
    k(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Pt = (e) => (t, n = Pe) => {
  (!Kn || e === "sp") && As(e, (...s) => t(...s), n);
}, Gc = Pt("bm"), $r = Pt("m"), Jc = Pt(
  "bu"
), Xc = Pt("u"), kr = Pt(
  "bum"
), Tr = Pt("um"), Zc = Pt(
  "sp"
), Qc = Pt("rtg"), ea = Pt("rtc");
function ta(e, t = Pe) {
  As("ec", e, t);
}
const na = "components", Mr = /* @__PURE__ */ Symbol.for("v-ndc");
function sa(e) {
  return Ce(e) ? oa(na, e, !1) || e : e || Mr;
}
function oa(e, t, n = !0, s = !1) {
  const o = Ke || Pe;
  if (o) {
    const i = o.type;
    {
      const l = Ho(
        i,
        !1
      );
      if (l && (l === t || l === Be(t) || l === nn(Be(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Qo(o[e] || i[e], t) || // global registration
      Qo(o.appContext[e], t)
    );
    return !r && s ? i : (process.env.NODE_ENV !== "production" && n && !r && k(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && k(
    `resolve${nn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Qo(e, t) {
  return e && (e[t] || e[Be(t)] || e[nn(Be(t))]);
}
function we(e, t, n, s) {
  let o;
  const i = n, r = z(e);
  if (r || Ce(e)) {
    const l = r && /* @__PURE__ */ jt(e);
    let c = !1, p = !1;
    l && (c = !/* @__PURE__ */ Ye(e), p = /* @__PURE__ */ pt(e), e = ks(e)), o = new Array(e.length);
    for (let f = 0, a = e.length; f < a; f++)
      o[f] = t(
        c ? p ? mn(ht(e[f])) : ht(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number")
    if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0))
      k(
        `The v-for range expects a positive integer value but got ${e}.`
      ), o = [];
    else {
      o = new Array(e);
      for (let l = 0; l < e; l++)
        o[l] = t(l + 1, l, void 0, i);
    }
  else if (pe(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let c = 0, p = l.length; c < p; c++) {
        const f = l[c];
        o[c] = t(e[f], f, c, i);
      }
    }
  else
    o = [];
  return o;
}
const ro = (e) => e ? nl(e) ? Ls(e) : ro(e.parent) : null, tn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ve(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(e.refs) : e.refs,
    $parent: (e) => ro(e.parent),
    $root: (e) => ro(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ps(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oc.bind(e.proxy)),
    $watch: (e) => Fc.bind(e)
  })
), To = (e) => e === "_" || e === "$", Ws = (e, t) => e !== me && !e.__isScriptSetup && he(e, t), Pr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const h = r[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Ws(s, t))
          return r[t] = 1, s[t];
        if (o !== me && he(o, t))
          return r[t] = 2, o[t];
        if (he(i, t))
          return r[t] = 3, i[t];
        if (n !== me && he(n, t))
          return r[t] = 4, n[t];
        lo && (r[t] = 0);
      }
    }
    const p = tn[t];
    let f, a;
    if (p)
      return t === "$attrs" ? (He(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Cs()) : process.env.NODE_ENV !== "production" && t === "$slots" && He(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== me && he(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      a = c.config.globalProperties, he(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && Ke && (!Ce(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== me && To(t[0]) && he(o, t) ? k(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ke && k(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Ws(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && he(o, t) ? (k(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== me && he(s, t) ? (s[t] = n, !0) : he(e.props, t) ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && k(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let c;
    return !!(n[l] || e !== me && l[0] !== "$" && he(e, l) || Ws(t, l) || he(i, l) || he(s, l) || he(tn, l) || he(o.config.globalProperties, l) || (c = r.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : he(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Pr.ownKeys = (e) => (k(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ia(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(tn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => tn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Re
    });
  }), t;
}
function ra(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Re
    });
  });
}
function la(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ te(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (To(s[0])) {
        k(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Re
      });
    }
  });
}
function ei(e) {
  return z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ca() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? k(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let lo = !0;
function aa(e) {
  const t = Ir(e), n = e.proxy, s = e.ctx;
  lo = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: c,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: a,
    mounted: h,
    beforeUpdate: y,
    updated: N,
    activated: b,
    deactivated: P,
    beforeDestroy: B,
    beforeUnmount: J,
    destroyed: U,
    unmounted: ye,
    render: I,
    renderTracked: se,
    renderTriggered: Q,
    errorCaptured: re,
    serverPrefetch: R,
    // public API
    expose: ue,
    inheritAttrs: ve,
    // assets
    components: A,
    directives: q,
    filters: oe
  } = t, $e = process.env.NODE_ENV !== "production" ? ca() : null;
  if (process.env.NODE_ENV !== "production") {
    const [ae] = e.propsOptions;
    if (ae)
      for (const le in ae)
        $e("Props", le);
  }
  if (p && ua(p, s, $e), r)
    for (const ae in r) {
      const le = r[ae];
      G(le) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, ae, {
        value: le.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ae] = le.bind(n), process.env.NODE_ENV !== "production" && $e("Methods", ae)) : process.env.NODE_ENV !== "production" && k(
        `Method "${ae}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !G(o) && k(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ae = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && _o(ae) && k(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !pe(ae))
      process.env.NODE_ENV !== "production" && k("data() should return an object.");
    else if (e.data = /* @__PURE__ */ So(ae), process.env.NODE_ENV !== "production")
      for (const le in ae)
        $e("Data", le), To(le[0]) || Object.defineProperty(s, le, {
          configurable: !0,
          enumerable: !0,
          get: () => ae[le],
          set: Re
        });
  }
  if (lo = !0, i)
    for (const ae in i) {
      const le = i[ae], it = G(le) ? le.bind(n, n) : G(le.get) ? le.get.bind(n, n) : Re;
      process.env.NODE_ENV !== "production" && it === Re && k(`Computed property "${ae}" has no getter.`);
      const Te = !G(le) && G(le.set) ? le.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        k(
          `Write operation failed: computed property "${ae}" is readonly.`
        );
      } : Re, xe = V({
        get: it,
        set: Te
      });
      Object.defineProperty(s, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (tt) => xe.value = tt
      }), process.env.NODE_ENV !== "production" && $e("Computed", ae);
    }
  if (l)
    for (const ae in l)
      Ar(l[ae], s, n, ae);
  if (c) {
    const ae = G(c) ? c.call(n) : c;
    Reflect.ownKeys(ae).forEach((le) => {
      Hc(le, ae[le]);
    });
  }
  f && ti(f, e, "c");
  function ke(ae, le) {
    z(le) ? le.forEach((it) => ae(it.bind(n))) : le && ae(le.bind(n));
  }
  if (ke(Gc, a), ke($r, h), ke(Jc, y), ke(Xc, N), ke(Wc, b), ke(qc, P), ke(ta, re), ke(ea, se), ke(Qc, Q), ke(kr, J), ke(Tr, ye), ke(Zc, R), z(ue))
    if (ue.length) {
      const ae = e.exposed || (e.exposed = {});
      ue.forEach((le) => {
        Object.defineProperty(ae, le, {
          get: () => n[le],
          set: (it) => n[le] = it,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === Re && (e.render = I), ve != null && (e.inheritAttrs = ve), A && (e.components = A), q && (e.directives = q), R && Vr(e);
}
function ua(e, t, n = Re) {
  z(e) && (e = co(e));
  for (const s in e) {
    const o = e[s];
    let i;
    pe(o) ? "default" in o ? i = et(
      o.from || s,
      o.default,
      !0
    ) : i = et(o.from || s) : i = et(o), /* @__PURE__ */ Ie(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function ti(e, t, n) {
  vt(
    z(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ar(e, t, n, s) {
  let o = s.includes(".") ? Er(n, s) : () => n[s];
  if (Ce(e)) {
    const i = t[e];
    G(i) ? Ue(o, i) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e}"`, i);
  } else if (G(e))
    Ue(o, e.bind(n));
  else if (pe(e))
    if (z(e))
      e.forEach((i) => Ar(i, t, n, s));
    else {
      const i = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(i) ? Ue(o, i, e) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && k(`Invalid watch option: "${s}"`, e);
}
function Ir(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (p) => Os(c, p, r, !0)
  ), Os(c, t, r)), pe(t) && i.set(t, c), c;
}
function Os(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Os(e, i, n, !0), o && o.forEach(
    (r) => Os(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      process.env.NODE_ENV !== "production" && k(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = fa[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const fa = {
  data: ni,
  props: si,
  emits: si,
  // objects
  methods: $n,
  computed: $n,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: $n,
  directives: $n,
  // watch
  watch: pa,
  // provide / inject
  provide: ni,
  inject: da
};
function ni(e, t) {
  return t ? e ? function() {
    return Ve(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function da(e, t) {
  return $n(co(e), co(t));
}
function co(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $n(e, t) {
  return e ? Ve(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
  return e ? z(e) && z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ve(
    /* @__PURE__ */ Object.create(null),
    ei(e),
    ei(t ?? {})
  ) : t;
}
function pa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ve(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = We(e[s], t[s]);
  return n;
}
function Lr() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ha = 0;
function va(e, t) {
  return function(s, o = null) {
    G(s) || (s = Ve({}, s)), o != null && !pe(o) && (process.env.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), o = null);
    const i = Lr(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const p = i.app = {
      _uid: ha++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: hi,
      get config() {
        return i.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && k(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...a) {
        return r.has(f) ? process.env.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : f && G(f.install) ? (r.add(f), f.install(p, ...a)) : G(f) ? (r.add(f), f(p, ...a)) : process.env.NODE_ENV !== "production" && k(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(f) {
        return i.mixins.includes(f) ? process.env.NODE_ENV !== "production" && k(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), p;
      },
      component(f, a) {
        return process.env.NODE_ENV !== "production" && ho(f, i.config), a ? (process.env.NODE_ENV !== "production" && i.components[f] && k(`Component "${f}" has already been registered in target app.`), i.components[f] = a, p) : i.components[f];
      },
      directive(f, a) {
        return process.env.NODE_ENV !== "production" && yr(f), a ? (process.env.NODE_ENV !== "production" && i.directives[f] && k(`Directive "${f}" has already been registered in target app.`), i.directives[f] = a, p) : i.directives[f];
      },
      mount(f, a, h) {
        if (c)
          process.env.NODE_ENV !== "production" && k(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && k(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = p._ceVNode || Me(s, o);
          return y.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            const N = Ct(y);
            N.el = null, e(N, f, h);
          }), e(y, f, h), c = !0, p._container = f, f.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = y.component, $c(p, hi)), Ls(y.component);
        }
      },
      onUnmount(f) {
        process.env.NODE_ENV !== "production" && typeof f != "function" && k(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        c ? (vt(
          l,
          p._instance,
          16
        ), e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, kc(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(f, a) {
        return process.env.NODE_ENV !== "production" && f in i.provides && (he(i.provides, f) ? k(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : k(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[f] = a, p;
      },
      runWithContext(f) {
        const a = gn;
        gn = p;
        try {
          return f();
        } finally {
          gn = a;
        }
      }
    };
    return p;
  };
}
let gn = null;
const ga = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Ft(t)}Modifiers`];
function ma(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || me;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [a]
    } = e;
    if (f)
      if (!(t in f))
        (!a || !(Gt(Be(t)) in a)) && k(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Gt(Be(t))}" prop.`
        );
      else {
        const h = f[t];
        G(h) && (h(...n) || k(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && ga(s, t.slice(7));
  if (r && (r.trim && (o = n.map((f) => Ce(f) ? f.trim() : f)), r.number && (o = n.map(Eo))), process.env.NODE_ENV !== "production" && Lc(e, t, o), process.env.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && s[Gt(f)] && k(
      `Event "${f}" is emitted in component ${ts(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ft(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = s[l = Gt(t)] || // also try camelCase event handler (#2249)
  s[l = Gt(Be(t))];
  !c && i && (c = s[l = Gt(Ft(t))]), c && vt(
    c,
    e,
    6,
    o
  );
  const p = s[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, vt(
      p,
      e,
      6,
      o
    );
  }
}
const _a = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n = !1) {
  const s = n ? _a : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!G(e)) {
    const c = (p) => {
      const f = Hr(p, t, !0);
      f && (l = !0, Ve(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (pe(e) && s.set(e, null), null) : (z(i) ? i.forEach((c) => r[c] = null) : Ve(r, i), pe(e) && s.set(e, r), r);
}
function Is(e, t) {
  return !e || !qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, Ft(t)) || he(e, t));
}
let ao = !1;
function Cs() {
  ao = !0;
}
function oi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: c,
    render: p,
    renderCache: f,
    props: a,
    data: h,
    setupState: y,
    ctx: N,
    inheritAttrs: b
  } = e, P = Ns(e);
  let B, J;
  process.env.NODE_ENV !== "production" && (ao = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = o || s, se = process.env.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(I, {
        get(Q, re, R) {
          return k(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Q, re, R);
        }
      }) : I;
      B = lt(
        p.call(
          se,
          I,
          f,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(a) : a,
          y,
          h,
          N
        )
      ), J = l;
    } else {
      const I = t;
      process.env.NODE_ENV !== "production" && l === a && Cs(), B = lt(
        I.length > 1 ? I(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Cs(), /* @__PURE__ */ wt(l);
            },
            slots: r,
            emit: c
          } : { attrs: l, slots: r, emit: c }
        ) : I(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(a) : a,
          null
        )
      ), J = t.props ? l : ya(l);
    }
  } catch (I) {
    Ln.length = 0, Jn(I, e, 1), B = Me(Ae);
  }
  let U = B, ye;
  if (process.env.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && ([U, ye] = Rr(B)), J && b !== !1) {
    const I = Object.keys(J), { shapeFlag: se } = U;
    if (I.length) {
      if (se & 7)
        i && I.some(Rn) && (J = ba(
          J,
          i
        )), U = Ct(U, J, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ao && U.type !== Ae) {
        const Q = Object.keys(l), re = [], R = [];
        for (let ue = 0, ve = Q.length; ue < ve; ue++) {
          const A = Q[ue];
          qn(A) ? Rn(A) || re.push(A[2].toLowerCase() + A.slice(3)) : R.push(A);
        }
        R.length && k(
          `Extraneous non-props attributes (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), re.length && k(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !ii(U) && k(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = Ct(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ii(U) && k(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), zn(U, n.transition)), process.env.NODE_ENV !== "production" && ye ? ye(U) : B = U, Ns(P), B;
}
const Rr = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Mo(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Rr(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [lt(s), r];
};
function Mo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (_n(o)) {
      if (o.type !== Ae || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Mo(n.children);
      }
    } else
      return;
  }
  return n;
}
const ya = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ba = (e, t) => {
  const n = {};
  for (const s in e)
    (!Rn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, ii = (e) => e.shapeFlag & 7 || e.type === Ae;
function Ea(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: c } = t, p = i.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Qe || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? ri(s, r, p) : !!r;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let a = 0; a < f.length; a++) {
        const h = f[a];
        if (jr(r, s, h) && !Is(p, h))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? ri(s, r, p) : !0 : !!r;
  return !1;
}
function ri(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (jr(t, e, i) && !Is(n, i))
      return !0;
  }
  return !1;
}
function jr(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && pe(s) && pe(o) ? !No(s, o) : s !== o;
}
function Na({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Fr = {}, Br = () => Object.create(Fr), zr = (e) => Object.getPrototypeOf(e) === Fr;
function wa(e, t, n, s = !1) {
  const o = {}, i = Br();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ur(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  process.env.NODE_ENV !== "production" && Wr(t || {}, o, e), n ? e.props = s ? o : /* @__PURE__ */ cc(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Oa(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ca(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ te(o), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Oa(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let a = 0; a < f.length; a++) {
        let h = f[a];
        if (Is(e.emitsOptions, h))
          continue;
        const y = t[h];
        if (c)
          if (he(i, h))
            y !== i[h] && (i[h] = y, p = !0);
          else {
            const N = Be(h);
            o[N] = uo(
              c,
              l,
              N,
              y,
              e,
              !1
            );
          }
        else
          y !== i[h] && (i[h] = y, p = !0);
      }
    }
  } else {
    Ur(e, t, o, i) && (p = !0);
    let f;
    for (const a in l)
      (!t || // for camelCase
      !he(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ft(a)) === a || !he(t, f))) && (c ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[a] = uo(
        c,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete o[a]);
    if (i !== l)
      for (const a in i)
        (!t || !he(t, a)) && (delete i[a], p = !0);
  }
  p && Nt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Wr(t || {}, o, e);
}
function Ur(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (Tn(c))
        continue;
      const p = t[c];
      let f;
      o && he(o, f = Be(c)) ? !i || !i.includes(f) ? n[f] = p : (l || (l = {}))[f] = p : Is(e.emitsOptions, c) || (!(c in s) || p !== s[c]) && (s[c] = p, r = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ te(n), p = l || me;
    for (let f = 0; f < i.length; f++) {
      const a = i[f];
      n[a] = uo(
        o,
        c,
        a,
        p[a],
        e,
        !he(p, a)
      );
    }
  }
  return r;
}
function uo(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = he(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && G(c)) {
        const { propsDefaults: p } = o;
        if (n in p)
          s = p[n];
        else {
          const f = es(o);
          s = p[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        s = c;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ft(n)) && (s = !0));
  }
  return s;
}
const xa = /* @__PURE__ */ new WeakMap();
function Kr(e, t, n = !1) {
  const s = n ? xa : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let c = !1;
  if (!G(e)) {
    const f = (a) => {
      c = !0;
      const [h, y] = Kr(a, t, !0);
      Ve(r, h), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return pe(e) && s.set(e, hn), hn;
  if (z(i))
    for (let f = 0; f < i.length; f++) {
      process.env.NODE_ENV !== "production" && !Ce(i[f]) && k("props must be strings when using array syntax.", i[f]);
      const a = Be(i[f]);
      li(a) && (r[a] = me);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !pe(i) && k("invalid props options", i);
    for (const f in i) {
      const a = Be(f);
      if (li(a)) {
        const h = i[f], y = r[a] = z(h) || G(h) ? { type: h } : Ve({}, h), N = y.type;
        let b = !1, P = !0;
        if (z(N))
          for (let B = 0; B < N.length; ++B) {
            const J = N[B], U = G(J) && J.name;
            if (U === "Boolean") {
              b = !0;
              break;
            } else U === "String" && (P = !1);
          }
        else
          b = G(N) && N.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = b, y[
          1
          /* shouldCastTrue */
        ] = P, (b || he(y, "default")) && l.push(a);
      }
    }
  }
  const p = [r, l];
  return pe(e) && s.set(e, p), p;
}
function li(e) {
  return e[0] !== "$" && !Tn(e) ? !0 : (process.env.NODE_ENV !== "production" && k(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Sa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Wr(e, t, n) {
  const s = /* @__PURE__ */ te(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Be(r));
  for (const r in o) {
    let l = o[r];
    l != null && Va(
      r,
      s[r],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(s) : s,
      !i.includes(r)
    );
  }
}
function Va(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: c } = n;
  if (r && o) {
    k('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !c) {
      let p = !1;
      const f = z(i) ? i : [i], a = [];
      for (let h = 0; h < f.length && !p; h++) {
        const { valid: y, expectedType: N } = $a(t, f[h]);
        a.push(N || ""), p = y;
      }
      if (!p) {
        k(ka(e, t, a));
        return;
      }
    }
    l && !l(t, s) && k('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Da = /* @__PURE__ */ Mt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function $a(e, t) {
  let n;
  const s = Sa(t);
  if (s === "null")
    n = e === null;
  else if (Da(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = pe(e) : s === "Array" ? n = z(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function ka(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(nn).join(" | ")}`;
  const o = n[0], i = yo(t), r = ci(t, o), l = ci(t, i);
  return n.length === 1 && ai(o) && !Ta(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, ai(i) && (s += `with value ${l}.`), s;
}
function ci(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ai(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ta(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Po = (e) => e === "_" || e === "_ctx" || e === "$stable", Ao = (e) => z(e) ? e.map(lt) : [lt(e)], Ma = (e, t, n) => {
  if (t._n)
    return t;
  const s = _r((...o) => (process.env.NODE_ENV !== "production" && Pe && !(n === null && Ke) && !(n && n.root !== Pe.root) && k(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ao(t(...o))), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Po(o)) continue;
    const i = e[o];
    if (G(i))
      t[o] = Ma(o, i, s);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && k(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Ao(i);
      t[o] = () => r;
    }
  }
}, Yr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Zn(e.vnode) && k(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ao(t);
  e.slots.default = () => n;
}, fo = (e, t, n) => {
  for (const s in t)
    (n || !Po(s)) && (e[s] = t[s]);
}, Pa = (e, t, n) => {
  const s = e.slots = Br();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (fo(s, t, n), n && ms(s, "_", o, !0)) : qr(t, s);
  } else t && Yr(e, t);
}, Aa = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = me;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Qe ? (fo(o, t, n), Nt(e, "set", "$slots")) : n && l === 1 ? i = !1 : fo(o, t, n) : (i = !t.$stable, qr(t, o)), r = t;
  } else t && (Yr(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Po(l) && r[l] == null && delete o[l];
};
let xn, Dt;
function an(e, t) {
  e.appContext.config.performance && xs() && Dt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ac(e, t, xs() ? Dt.now() : Date.now());
}
function un(e, t) {
  if (e.appContext.config.performance && xs()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", o = `<${ts(e, e.type)}> ${t}`;
    Dt.mark(s), Dt.measure(o, n, s), Dt.clearMeasures(o), Dt.clearMarks(n), Dt.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Ic(e, t, xs() ? Dt.now() : Date.now());
}
function xs() {
  return xn !== void 0 || (typeof window < "u" && window.performance ? (xn = !0, Dt = window.performance) : xn = !1), xn;
}
function Ia() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Xe = Fa;
function La(e) {
  return Ha(e);
}
function Ha(e, t) {
  Ia();
  const n = Gn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && $o(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: a,
    nextSibling: h,
    setScopeId: y = Re,
    insertStaticContent: N
  } = e, b = (u, v, E, S = null, O = null, x = null, T = void 0, $ = null, D = process.env.NODE_ENV !== "production" && Qe ? !1 : !!v.dynamicChildren) => {
    if (u === v)
      return;
    u && !Xt(u, v) && (S = rn(u), je(u, O, x, !0), u = null), v.patchFlag === -2 && (D = !1, v.dynamicChildren = null);
    const { type: C, ref: K, shapeFlag: M } = v;
    switch (C) {
      case Qn:
        P(u, v, E, S);
        break;
      case Ae:
        B(u, v, E, S);
        break;
      case ds:
        u == null ? J(v, E, S, T) : process.env.NODE_ENV !== "production" && U(u, v, E, T);
        break;
      case Y:
        q(
          u,
          v,
          E,
          S,
          O,
          x,
          T,
          $,
          D
        );
        break;
      default:
        M & 1 ? se(
          u,
          v,
          E,
          S,
          O,
          x,
          T,
          $,
          D
        ) : M & 6 ? oe(
          u,
          v,
          E,
          S,
          O,
          x,
          T,
          $,
          D
        ) : M & 64 || M & 128 ? C.process(
          u,
          v,
          E,
          S,
          O,
          x,
          T,
          $,
          D,
          gt
        ) : process.env.NODE_ENV !== "production" && k("Invalid VNode type:", C, `(${typeof C})`);
    }
    K != null && O ? An(K, u && u.ref, x, v || u, !v) : K == null && u && u.ref != null && An(u.ref, null, x, u, !0);
  }, P = (u, v, E, S) => {
    if (u == null)
      s(
        v.el = l(v.children),
        E,
        S
      );
    else {
      const O = v.el = u.el;
      v.children !== u.children && p(O, v.children);
    }
  }, B = (u, v, E, S) => {
    u == null ? s(
      v.el = c(v.children || ""),
      E,
      S
    ) : v.el = u.el;
  }, J = (u, v, E, S) => {
    [u.el, u.anchor] = N(
      u.children,
      v,
      E,
      S,
      u.el,
      u.anchor
    );
  }, U = (u, v, E, S) => {
    if (v.children !== u.children) {
      const O = h(u.anchor);
      I(u), [v.el, v.anchor] = N(
        v.children,
        E,
        O,
        S
      );
    } else
      v.el = u.el, v.anchor = u.anchor;
  }, ye = ({ el: u, anchor: v }, E, S) => {
    let O;
    for (; u && u !== v; )
      O = h(u), s(u, E, S), u = O;
    s(v, E, S);
  }, I = ({ el: u, anchor: v }) => {
    let E;
    for (; u && u !== v; )
      E = h(u), o(u), u = E;
    o(v);
  }, se = (u, v, E, S, O, x, T, $, D) => {
    if (v.type === "svg" ? T = "svg" : v.type === "math" && (T = "mathml"), u == null)
      Q(
        v,
        E,
        S,
        O,
        x,
        T,
        $,
        D
      );
    else {
      const C = u.el && u.el._isVueCE ? u.el : null;
      try {
        C && C._beginPatch(), ue(
          u,
          v,
          O,
          x,
          T,
          $,
          D
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Q = (u, v, E, S, O, x, T, $) => {
    let D, C;
    const { props: K, shapeFlag: M, transition: j, dirs: L } = u;
    if (D = u.el = r(
      u.type,
      x,
      K && K.is,
      K
    ), M & 8 ? f(D, u.children) : M & 16 && R(
      u.children,
      D,
      null,
      S,
      O,
      qs(u, x),
      T,
      $
    ), L && Ut(u, null, S, "created"), re(D, u, u.scopeId, T, S), K) {
      for (const fe in K)
        fe !== "value" && !Tn(fe) && i(D, fe, null, K[fe], x, S);
      "value" in K && i(D, "value", null, K.value, x), (C = K.onVnodeBeforeMount) && mt(C, S, u);
    }
    process.env.NODE_ENV !== "production" && (ms(D, "__vnode", u, !0), ms(D, "__vueParentComponent", S, !0)), L && Ut(u, null, S, "beforeMount");
    const ee = Ra(O, j);
    if (ee && j.beforeEnter(D), s(D, v, E), (C = K && K.onVnodeMounted) || ee || L) {
      const fe = process.env.NODE_ENV !== "production" && Qe;
      Xe(() => {
        let ce;
        process.env.NODE_ENV !== "production" && (ce = qo(fe));
        try {
          C && mt(C, S, u), ee && j.enter(D), L && Ut(u, null, S, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && qo(ce);
        }
      }, O);
    }
  }, re = (u, v, E, S, O) => {
    if (E && y(u, E), S)
      for (let x = 0; x < S.length; x++)
        y(u, S[x]);
    if (O) {
      let x = O.subTree;
      if (process.env.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && (x = Mo(x.children) || x), v === x || Xr(x.type) && (x.ssContent === v || x.ssFallback === v)) {
        const T = O.vnode;
        re(
          u,
          T,
          T.scopeId,
          T.slotScopeIds,
          O.parent
        );
      }
    }
  }, R = (u, v, E, S, O, x, T, $, D = 0) => {
    for (let C = D; C < u.length; C++) {
      const K = u[C] = $ ? $t(u[C]) : lt(u[C]);
      b(
        null,
        K,
        v,
        E,
        S,
        O,
        x,
        T,
        $
      );
    }
  }, ue = (u, v, E, S, O, x, T) => {
    const $ = v.el = u.el;
    process.env.NODE_ENV !== "production" && ($.__vnode = v);
    let { patchFlag: D, dynamicChildren: C, dirs: K } = v;
    D |= u.patchFlag & 16;
    const M = u.props || me, j = v.props || me;
    let L;
    if (E && Kt(E, !1), (L = j.onVnodeBeforeUpdate) && mt(L, E, v, u), K && Ut(v, u, E, "beforeUpdate"), E && Kt(E, !0), process.env.NODE_ENV !== "production" && Qe && (D = 0, T = !1, C = null), (M.innerHTML && j.innerHTML == null || M.textContent && j.textContent == null) && f($, ""), C ? (ve(
      u.dynamicChildren,
      C,
      $,
      E,
      S,
      qs(v, O),
      x
    ), process.env.NODE_ENV !== "production" && fs(u, v)) : T || it(
      u,
      v,
      $,
      null,
      E,
      S,
      qs(v, O),
      x,
      !1
    ), D > 0) {
      if (D & 16)
        A($, M, j, E, O);
      else if (D & 2 && M.class !== j.class && i($, "class", null, j.class, O), D & 4 && i($, "style", M.style, j.style, O), D & 8) {
        const ee = v.dynamicProps;
        for (let fe = 0; fe < ee.length; fe++) {
          const ce = ee[fe], Ee = M[ce], De = j[ce];
          (De !== Ee || ce === "value") && i($, ce, Ee, De, O, E);
        }
      }
      D & 1 && u.children !== v.children && f($, v.children);
    } else !T && C == null && A($, M, j, E, O);
    ((L = j.onVnodeUpdated) || K) && Xe(() => {
      L && mt(L, E, v, u), K && Ut(v, u, E, "updated");
    }, S);
  }, ve = (u, v, E, S, O, x, T) => {
    for (let $ = 0; $ < v.length; $++) {
      const D = u[$], C = v[$], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(D, C) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? a(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      b(
        D,
        C,
        K,
        null,
        S,
        O,
        x,
        T,
        !0
      );
    }
  }, A = (u, v, E, S, O) => {
    if (v !== E) {
      if (v !== me)
        for (const x in v)
          !Tn(x) && !(x in E) && i(
            u,
            x,
            v[x],
            null,
            O,
            S
          );
      for (const x in E) {
        if (Tn(x)) continue;
        const T = E[x], $ = v[x];
        T !== $ && x !== "value" && i(u, x, $, T, O, S);
      }
      "value" in E && i(u, "value", v.value, E.value, O);
    }
  }, q = (u, v, E, S, O, x, T, $, D) => {
    const C = v.el = u ? u.el : l(""), K = v.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: j, slotScopeIds: L } = v;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Qe || M & 2048) && (M = 0, D = !1, j = null), L && ($ = $ ? $.concat(L) : L), u == null ? (s(C, E, S), s(K, E, S), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      E,
      K,
      O,
      x,
      T,
      $,
      D
    )) : M > 0 && M & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (ve(
      u.dynamicChildren,
      j,
      E,
      O,
      x,
      T,
      $
    ), process.env.NODE_ENV !== "production" ? fs(u, v) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (v.key != null || O && v === O.subTree) && fs(
        u,
        v,
        !0
        /* shallow */
      )
    )) : it(
      u,
      v,
      E,
      K,
      O,
      x,
      T,
      $,
      D
    );
  }, oe = (u, v, E, S, O, x, T, $, D) => {
    v.slotScopeIds = $, u == null ? v.shapeFlag & 512 ? O.ctx.activate(
      v,
      E,
      S,
      T,
      D
    ) : $e(
      v,
      E,
      S,
      O,
      x,
      T,
      D
    ) : ke(u, v, D);
  }, $e = (u, v, E, S, O, x, T) => {
    const $ = u.component = Ya(
      u,
      S,
      O
    );
    if (process.env.NODE_ENV !== "production" && $.type.__hmrId && xc($), process.env.NODE_ENV !== "production" && (cs(u), an($, "mount")), Zn(u) && ($.ctx.renderer = gt), process.env.NODE_ENV !== "production" && an($, "init"), Ja($, !1, T), process.env.NODE_ENV !== "production" && un($, "init"), process.env.NODE_ENV !== "production" && Qe && (u.el = null), $.asyncDep) {
      if (O && O.registerDep($, ae, T), !u.el) {
        const D = $.subTree = Me(Ae);
        B(null, D, v, E), u.placeholder = D.el;
      }
    } else
      ae(
        $,
        u,
        v,
        E,
        O,
        x,
        T
      );
    process.env.NODE_ENV !== "production" && (as(), un($, "mount"));
  }, ke = (u, v, E) => {
    const S = v.component = u.component;
    if (Ea(u, v, E))
      if (S.asyncDep && !S.asyncResolved) {
        process.env.NODE_ENV !== "production" && cs(v), le(S, v, E), process.env.NODE_ENV !== "production" && as();
        return;
      } else
        S.next = v, S.update();
    else
      v.el = u.el, S.vnode = v;
  }, ae = (u, v, E, S, O, x, T) => {
    const $ = () => {
      if (u.isMounted) {
        let { next: M, bu: j, u: L, parent: ee, vnode: fe } = u;
        {
          const Fe = Gr(u);
          if (Fe) {
            M && (M.el = fe.el, le(u, M, T)), Fe.asyncDep.then(() => {
              Xe(() => {
                u.isUnmounted || C();
              }, O);
            });
            return;
          }
        }
        let ce = M, Ee;
        process.env.NODE_ENV !== "production" && cs(M || u.vnode), Kt(u, !1), M ? (M.el = fe.el, le(u, M, T)) : M = fe, j && fn(j), (Ee = M.props && M.props.onVnodeBeforeUpdate) && mt(Ee, ee, M, fe), Kt(u, !0), process.env.NODE_ENV !== "production" && an(u, "render");
        const De = oi(u);
        process.env.NODE_ENV !== "production" && un(u, "render");
        const Je = u.subTree;
        u.subTree = De, process.env.NODE_ENV !== "production" && an(u, "patch"), b(
          Je,
          De,
          // parent may have changed if it's in a teleport
          a(Je.el),
          // anchor may have changed if it's in a fragment
          rn(Je),
          u,
          O,
          x
        ), process.env.NODE_ENV !== "production" && un(u, "patch"), M.el = De.el, ce === null && Na(u, De.el), L && Xe(L, O), (Ee = M.props && M.props.onVnodeUpdated) && Xe(
          () => mt(Ee, ee, M, fe),
          O
        ), process.env.NODE_ENV !== "production" && vr(u), process.env.NODE_ENV !== "production" && as();
      } else {
        let M;
        const { el: j, props: L } = v, { bm: ee, m: fe, parent: ce, root: Ee, type: De } = u, Je = In(v);
        Kt(u, !1), ee && fn(ee), !Je && (M = L && L.onVnodeBeforeMount) && mt(M, ce, v), Kt(u, !0);
        {
          Ee.ce && Ee.ce._hasShadowRoot() && Ee.ce._injectChildStyle(
            De,
            u.parent ? u.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && an(u, "render");
          const Fe = u.subTree = oi(u);
          process.env.NODE_ENV !== "production" && un(u, "render"), process.env.NODE_ENV !== "production" && an(u, "patch"), b(
            null,
            Fe,
            E,
            S,
            u,
            O,
            x
          ), process.env.NODE_ENV !== "production" && un(u, "patch"), v.el = Fe.el;
        }
        if (fe && Xe(fe, O), !Je && (M = L && L.onVnodeMounted)) {
          const Fe = v;
          Xe(
            () => mt(M, ce, Fe),
            O
          );
        }
        (v.shapeFlag & 256 || ce && In(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && Xe(u.a, O), u.isMounted = !0, process.env.NODE_ENV !== "production" && Tc(u), v = E = S = null;
      }
    };
    u.scope.on();
    const D = u.effect = new Ki($);
    u.scope.off();
    const C = u.update = D.run.bind(D), K = u.job = D.runIfDirty.bind(D);
    K.i = u, K.id = u.uid, D.scheduler = () => Ps(K), Kt(u, !0), process.env.NODE_ENV !== "production" && (D.onTrack = u.rtc ? (M) => fn(u.rtc, M) : void 0, D.onTrigger = u.rtg ? (M) => fn(u.rtg, M) : void 0), C();
  }, le = (u, v, E) => {
    v.component = u;
    const S = u.vnode.props;
    u.vnode = v, u.next = null, Ca(u, v.props, S, E), Aa(u, v.children, E), ft(), Wo(u), dt();
  }, it = (u, v, E, S, O, x, T, $, D = !1) => {
    const C = u && u.children, K = u ? u.shapeFlag : 0, M = v.children, { patchFlag: j, shapeFlag: L } = v;
    if (j > 0) {
      if (j & 128) {
        xe(
          C,
          M,
          E,
          S,
          O,
          x,
          T,
          $,
          D
        );
        return;
      } else if (j & 256) {
        Te(
          C,
          M,
          E,
          S,
          O,
          x,
          T,
          $,
          D
        );
        return;
      }
    }
    L & 8 ? (K & 16 && At(C, O, x), M !== C && f(E, M)) : K & 16 ? L & 16 ? xe(
      C,
      M,
      E,
      S,
      O,
      x,
      T,
      $,
      D
    ) : At(C, O, x, !0) : (K & 8 && f(E, ""), L & 16 && R(
      M,
      E,
      S,
      O,
      x,
      T,
      $,
      D
    ));
  }, Te = (u, v, E, S, O, x, T, $, D) => {
    u = u || hn, v = v || hn;
    const C = u.length, K = v.length, M = Math.min(C, K);
    let j;
    for (j = 0; j < M; j++) {
      const L = v[j] = D ? $t(v[j]) : lt(v[j]);
      b(
        u[j],
        L,
        E,
        null,
        O,
        x,
        T,
        $,
        D
      );
    }
    C > K ? At(
      u,
      O,
      x,
      !0,
      !1,
      M
    ) : R(
      v,
      E,
      S,
      O,
      x,
      T,
      $,
      D,
      M
    );
  }, xe = (u, v, E, S, O, x, T, $, D) => {
    let C = 0;
    const K = v.length;
    let M = u.length - 1, j = K - 1;
    for (; C <= M && C <= j; ) {
      const L = u[C], ee = v[C] = D ? $t(v[C]) : lt(v[C]);
      if (Xt(L, ee))
        b(
          L,
          ee,
          E,
          null,
          O,
          x,
          T,
          $,
          D
        );
      else
        break;
      C++;
    }
    for (; C <= M && C <= j; ) {
      const L = u[M], ee = v[j] = D ? $t(v[j]) : lt(v[j]);
      if (Xt(L, ee))
        b(
          L,
          ee,
          E,
          null,
          O,
          x,
          T,
          $,
          D
        );
      else
        break;
      M--, j--;
    }
    if (C > M) {
      if (C <= j) {
        const L = j + 1, ee = L < K ? v[L].el : S;
        for (; C <= j; )
          b(
            null,
            v[C] = D ? $t(v[C]) : lt(v[C]),
            E,
            ee,
            O,
            x,
            T,
            $,
            D
          ), C++;
      }
    } else if (C > j)
      for (; C <= M; )
        je(u[C], O, x, !0), C++;
    else {
      const L = C, ee = C, fe = /* @__PURE__ */ new Map();
      for (C = ee; C <= j; C++) {
        const Le = v[C] = D ? $t(v[C]) : lt(v[C]);
        Le.key != null && (process.env.NODE_ENV !== "production" && fe.has(Le.key) && k(
          "Duplicate keys found during update:",
          JSON.stringify(Le.key),
          "Make sure keys are unique."
        ), fe.set(Le.key, C));
      }
      let ce, Ee = 0;
      const De = j - ee + 1;
      let Je = !1, Fe = 0;
      const Bt = new Array(De);
      for (C = 0; C < De; C++) Bt[C] = 0;
      for (C = L; C <= M; C++) {
        const Le = u[C];
        if (Ee >= De) {
          je(Le, O, x, !0);
          continue;
        }
        let nt;
        if (Le.key != null)
          nt = fe.get(Le.key);
        else
          for (ce = ee; ce <= j; ce++)
            if (Bt[ce - ee] === 0 && Xt(Le, v[ce])) {
              nt = ce;
              break;
            }
        nt === void 0 ? je(Le, O, x, !0) : (Bt[nt - ee] = C + 1, nt >= Fe ? Fe = nt : Je = !0, b(
          Le,
          v[nt],
          E,
          null,
          O,
          x,
          T,
          $,
          D
        ), Ee++);
      }
      const os = Je ? ja(Bt) : hn;
      for (ce = os.length - 1, C = De - 1; C >= 0; C--) {
        const Le = ee + C, nt = v[Le], wn = v[Le + 1], zt = Le + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          wn.el || Jr(wn)
        ) : S;
        Bt[C] === 0 ? b(
          null,
          nt,
          E,
          zt,
          O,
          x,
          T,
          $,
          D
        ) : Je && (ce < 0 || C !== os[ce] ? tt(nt, E, zt, 2) : ce--);
      }
    }
  }, tt = (u, v, E, S, O = null) => {
    const { el: x, type: T, transition: $, children: D, shapeFlag: C } = u;
    if (C & 6) {
      tt(u.component.subTree, v, E, S);
      return;
    }
    if (C & 128) {
      u.suspense.move(v, E, S);
      return;
    }
    if (C & 64) {
      T.move(u, v, E, gt);
      return;
    }
    if (T === Y) {
      s(x, v, E);
      for (let M = 0; M < D.length; M++)
        tt(D[M], v, E, S);
      s(u.anchor, v, E);
      return;
    }
    if (T === ds) {
      ye(u, v, E);
      return;
    }
    if (S !== 2 && C & 1 && $)
      if (S === 0)
        $.beforeEnter(x), s(x, v, E), Xe(() => $.enter(x), O);
      else {
        const { leave: M, delayLeave: j, afterLeave: L } = $, ee = () => {
          u.ctx.isUnmounted ? o(x) : s(x, v, E);
        }, fe = () => {
          x._isLeaving && x[yt](
            !0
            /* cancelled */
          ), M(x, () => {
            ee(), L && L();
          });
        };
        j ? j(x, ee, fe) : fe();
      }
    else
      s(x, v, E);
  }, je = (u, v, E, S = !1, O = !1) => {
    const {
      type: x,
      props: T,
      ref: $,
      children: D,
      dynamicChildren: C,
      shapeFlag: K,
      patchFlag: M,
      dirs: j,
      cacheIndex: L,
      memo: ee
    } = u;
    if (M === -2 && (O = !1), $ != null && (ft(), An($, null, E, u, !0), dt()), L != null && (v.renderCache[L] = void 0), K & 256) {
      v.ctx.deactivate(u);
      return;
    }
    const fe = K & 1 && j, ce = !In(u);
    let Ee;
    if (ce && (Ee = T && T.onVnodeBeforeUnmount) && mt(Ee, v, u), K & 6)
      ns(u.component, E, S);
    else {
      if (K & 128) {
        u.suspense.unmount(E, S);
        return;
      }
      fe && Ut(u, null, v, "beforeUnmount"), K & 64 ? u.type.remove(
        u,
        v,
        E,
        gt,
        S
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== Y || M > 0 && M & 64) ? At(
        C,
        v,
        E,
        !1,
        !0
      ) : (x === Y && M & 384 || !O && K & 16) && At(D, v, E), S && En(u);
    }
    const De = ee != null && L == null;
    (ce && (Ee = T && T.onVnodeUnmounted) || fe || De) && Xe(() => {
      Ee && mt(Ee, v, u), fe && Ut(u, null, v, "unmounted"), De && (u.el = null);
    }, E);
  }, En = (u) => {
    const { type: v, el: E, anchor: S, transition: O } = u;
    if (v === Y) {
      process.env.NODE_ENV !== "production" && u.patchFlag > 0 && u.patchFlag & 2048 && O && !O.persisted ? u.children.forEach((T) => {
        T.type === Ae ? o(T.el) : En(T);
      }) : Hs(E, S);
      return;
    }
    if (v === ds) {
      I(u);
      return;
    }
    const x = () => {
      o(E), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (u.shapeFlag & 1 && O && !O.persisted) {
      const { leave: T, delayLeave: $ } = O, D = () => T(E, x);
      $ ? $(u.el, x, D) : D();
    } else
      x();
  }, Hs = (u, v) => {
    let E;
    for (; u !== v; )
      E = h(u), o(u), u = E;
    o(v);
  }, ns = (u, v, E) => {
    process.env.NODE_ENV !== "production" && u.type.__hmrId && Sc(u);
    const { bum: S, scope: O, job: x, subTree: T, um: $, m: D, a: C } = u;
    ui(D), ui(C), S && fn(S), O.stop(), x && (x.flags |= 8, je(T, u, v, E)), $ && Xe($, v), Xe(() => {
      u.isUnmounted = !0;
    }, v), process.env.NODE_ENV !== "production" && Pc(u);
  }, At = (u, v, E, S = !1, O = !1, x = 0) => {
    for (let T = x; T < u.length; T++)
      je(u[T], v, E, S, O);
  }, rn = (u) => {
    if (u.shapeFlag & 6)
      return rn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const v = h(u.anchor || u.el), E = v && v[Bc];
    return E ? h(E) : v;
  };
  let Nn = !1;
  const ss = (u, v, E) => {
    let S;
    u == null ? v._vnode && (je(v._vnode, null, null, !0), S = v._vnode.component) : b(
      v._vnode || null,
      u,
      v,
      null,
      null,
      null,
      E
    ), v._vnode = u, Nn || (Nn = !0, Wo(S), dr(), Nn = !1);
  }, gt = {
    p: b,
    um: je,
    m: tt,
    r: En,
    mt: $e,
    mc: R,
    pc: it,
    pbc: ve,
    n: rn,
    o: e
  };
  return {
    render: ss,
    hydrate: void 0,
    createApp: va(ss)
  };
}
function qs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ra(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fs(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (z(s) && z(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = $t(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && fs(r, l)), l.type === Qn && (l.patchFlag === -1 && (l = o[i] = $t(l)), l.el = r.el), l.type === Ae && !l.el && (l.el = r.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ja(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const p = e[s];
    if (p !== 0) {
      if (o = n[n.length - 1], e[o] < p) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < p ? i = l + 1 : r = l;
      p < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Gr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gr(t);
}
function ui(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Jr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Jr(t.subTree) : null;
}
const Xr = (e) => e.__isSuspense;
function Fa(e, t) {
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : fr(e);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), Qn = /* @__PURE__ */ Symbol.for("v-txt"), Ae = /* @__PURE__ */ Symbol.for("v-cmt"), ds = /* @__PURE__ */ Symbol.for("v-stc"), Ln = [];
let ot = null;
function g(e = !1) {
  Ln.push(ot = e ? null : []);
}
function Ba() {
  Ln.pop(), ot = Ln[Ln.length - 1] || null;
}
let Un = 1;
function Ss(e, t = !1) {
  Un += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Zr(e) {
  return e.dynamicChildren = Un > 0 ? ot || hn : null, Ba(), Un > 0 && ot && ot.push(e), e;
}
function _(e, t, n, s, o, i) {
  return Zr(
    d(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Ge(e, t, n, s, o) {
  return Zr(
    Me(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function _n(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = us.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const za = (...e) => el(
  ...e
), Qr = ({ key: e }) => e ?? null, ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ Ie(e) || G(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, o = null, i = e === Y ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qr(t),
    ref: t && ps(t),
    scopeId: mr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke
  };
  return l ? (Io(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ce(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && k("VNode created with invalid key (NaN). VNode type:", c.type), Un > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ot.push(c), c;
}
const Me = process.env.NODE_ENV !== "production" ? za : el;
function el(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Mr) && (process.env.NODE_ENV !== "production" && !e && k(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), _n(e)) {
    const l = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Io(l, n), Un > 0 && !i && ot && (l.shapeFlag & 6 ? ot[ot.indexOf(e)] = l : ot.push(l)), l.patchFlag = -2, l;
  }
  if (ol(e) && (e = e.__vccOpts), t) {
    t = Ua(t);
    let { class: l, style: c } = t;
    l && !Ce(l) && (t.class = de(l)), pe(c) && (/* @__PURE__ */ _s(c) && !z(c) && (c = Ve({}, c)), t.style = Oe(c));
  }
  const r = Ce(e) ? 1 : Xr(e) ? 128 : Nr(e) ? 64 : pe(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && /* @__PURE__ */ _s(e) && (e = /* @__PURE__ */ te(e), k(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), d(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Ua(e) {
  return e ? /* @__PURE__ */ _s(e) || zr(e) ? Ve({}, e) : e : null;
}
function Ct(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: c } = e, p = t ? Ka(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Qr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? z(i) ? i.concat(ps(t)) : [i, ps(t)] : ps(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && z(l) ? l.map(tl) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Y ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && zn(
    f,
    c.clone(f)
  ), f;
}
function tl(e) {
  const t = Ct(e);
  return z(e.children) && (t.children = e.children.map(tl)), t;
}
function st(e = " ", t = 0) {
  return Me(Qn, null, e, t);
}
function ne(e = "", t = !1) {
  return t ? (g(), Ge(Ae, null, e)) : Me(Ae, null, e);
}
function lt(e) {
  return e == null || typeof e == "boolean" ? Me(Ae) : z(e) ? Me(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _n(e) ? $t(e) : Me(Qn, null, String(e));
}
function $t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
}
function Io(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Io(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zr(t) ? t._ctx = Ke : o === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else G(t) ? (t = { default: t, _ctx: Ke }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [st(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ka(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = de([t.class, s.class]));
      else if (o === "style")
        t.style = Oe([t.style, s.style]);
      else if (qn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(z(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function mt(e, t, n, s = null) {
  vt(e, t, 7, [
    n,
    s
  ]);
}
const Wa = Lr();
let qa = 0;
function Ya(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Wa, i = {
    uid: qa++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Bl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Kr(s, o),
    emitsOptions: Hr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? i.ctx = ia(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ma.bind(null, i), e.ce && e.ce(i), i;
}
let Pe = null;
const Lo = () => Pe || Ke;
let Vs, po;
{
  const e = Gn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), po = t(
    "__VUE_SSR_SETTERS__",
    (n) => Kn = n
  );
}
const es = (e) => {
  const t = Pe;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, fi = () => {
  Pe && Pe.scope.off(), Vs(null);
}, Ga = /* @__PURE__ */ Mt("slot,component");
function ho(e, { isNativeTag: t }) {
  (Ga(e) || t(e)) && k(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function nl(e) {
  return e.vnode.shapeFlag & 4;
}
let Kn = !1;
function Ja(e, t = !1, n = !1) {
  t && po(t);
  const { props: s, children: o } = e.vnode, i = nl(e);
  wa(e, s, i, t), Pa(e, o, n || t);
  const r = i ? Xa(e, t) : void 0;
  return t && po(!1), r;
}
function Xa(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && ho(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let i = 0; i < o.length; i++)
        ho(o[i], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let i = 0; i < o.length; i++)
        yr(o[i]);
    }
    n.compilerOptions && Za() && k(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pr), process.env.NODE_ENV !== "production" && ra(e);
  const { setup: s } = n;
  if (s) {
    ft();
    const o = e.setupContext = s.length > 1 ? eu(e) : null, i = es(e), r = yn(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ wt(e.props) : e.props,
        o
      ]
    ), l = _o(r);
    if (dt(), i(), (l || e.sp) && !In(e) && Vr(e), l) {
      if (r.then(fi, fi), t)
        return r.then((c) => {
          di(e, c, t);
        }).catch((c) => {
          Jn(c, e, 0);
        });
      if (e.asyncDep = r, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = ts(e, n);
        k(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      di(e, r, t);
  } else
    sl(e, t);
}
function di(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pe(t) ? (process.env.NODE_ENV !== "production" && _n(t) && k(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = lr(t), process.env.NODE_ENV !== "production" && la(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && k(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), sl(e, n);
}
const Za = () => !0;
function sl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Re);
  {
    const o = es(e);
    ft();
    try {
      aa(e);
    } finally {
      dt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === Re && !t && (s.template ? k(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : k("Component is missing template or render function: ", s));
}
const pi = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Cs(), He(e, "get", ""), e[t];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return He(e, "get", ""), e[t];
  }
};
function Qa(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return He(e, "get", "$slots"), t[n];
    }
  });
}
function eu(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && k("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (z(n) ? s = "array" : /* @__PURE__ */ Ie(n) && (s = "ref")), s !== "object" && k(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, pi));
      },
      get slots() {
        return s || (s = Qa(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, pi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ls(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lr(ac(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in tn)
        return tn[n](e);
    },
    has(t, n) {
      return n in t || n in tn;
    }
  })) : e.proxy;
}
const tu = /(?:^|[-_])\w/g, nu = (e) => e.replace(tu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ho(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ts(e, t, n = !1) {
  let s = Ho(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(e.components) || e.parent && o(
      e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? nu(s) : n ? "App" : "Anonymous";
}
function ol(e) {
  return G(e) && "__vccOpts" in e;
}
const V = (e, t) => {
  const n = /* @__PURE__ */ hc(e, t, Kn);
  if (process.env.NODE_ENV !== "production") {
    const s = Lo();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function su(e, t, n) {
  try {
    Ss(-1);
    const s = arguments.length;
    return s === 2 ? pe(t) && !z(t) ? _n(t) ? Me(e, null, [t]) : Me(e, t) : Me(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && _n(n) && (n = [n]), Me(e, t, n));
  } finally {
    Ss(1);
  }
}
function ou() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!pe(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ Ie(a)) {
        ft();
        const h = a.value;
        return dt(), [
          "div",
          {},
          ["span", e, f(a)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ jt(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Ye(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ pt(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ pt(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Ye(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...i(a.$)
        ];
    }
  };
  function i(a) {
    const h = [];
    a.type.props && a.props && h.push(r("props", /* @__PURE__ */ te(a.props))), a.setupState !== me && h.push(r("setup", a.setupState)), a.data !== me && h.push(r("data", /* @__PURE__ */ te(a.data)));
    const y = c(a, "computed");
    y && h.push(r("computed", y));
    const N = c(a, "inject");
    return N && h.push(r("injected", N)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), h;
  }
  function r(a, h) {
    return h = Ve({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((y) => [
          "div",
          {},
          ["span", s, y + ": "],
          l(h[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, h = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : pe(a) ? ["object", { object: h ? /* @__PURE__ */ te(a) : a }] : ["span", n, String(a)];
  }
  function c(a, h) {
    const y = a.type;
    if (G(y))
      return;
    const N = {};
    for (const b in a.ctx)
      p(y, b, h) && (N[b] = a.ctx[b]);
    return N;
  }
  function p(a, h, y) {
    const N = a[y];
    if (z(N) && N.includes(h) || pe(N) && h in N || a.extends && p(a.extends, h, y) || a.mixins && a.mixins.some((b) => p(b, h, y)))
      return !0;
  }
  function f(a) {
    return /* @__PURE__ */ Ye(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const hi = "3.5.31", Tt = process.env.NODE_ENV !== "production" ? k : Re;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vo;
const vi = typeof window < "u" && window.trustedTypes;
if (vi)
  try {
    vo = /* @__PURE__ */ vi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Tt(`Error creating trusted types policy: ${e}`);
  }
const il = vo ? (e) => vo.createHTML(e) : (e) => e, iu = "http://www.w3.org/2000/svg", ru = "http://www.w3.org/1998/Math/MathML", Vt = typeof document < "u" ? document : null, gi = Vt && /* @__PURE__ */ Vt.createElement("template"), lu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Vt.createElementNS(iu, e) : t === "mathml" ? Vt.createElementNS(ru, e) : n ? Vt.createElement(e, { is: n }) : Vt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Vt.createTextNode(e),
  createComment: (e) => Vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      gi.innerHTML = il(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = gi.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Lt = "transition", Sn = "animation", Wn = /* @__PURE__ */ Symbol("_vtc"), rl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, cu = /* @__PURE__ */ Ve(
  {},
  wr,
  rl
), au = (e) => (e.displayName = "Transition", e.props = cu, e), uu = /* @__PURE__ */ au(
  (e, { slots: t }) => su(Kc, fu(e), t)
), Wt = (e, t = []) => {
  z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mi = (e) => e ? z(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function fu(e) {
  const t = {};
  for (const A in e)
    A in rl || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: p = r,
    appearToClass: f = l,
    leaveFromClass: a = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, N = du(o), b = N && N[0], P = N && N[1], {
    onBeforeEnter: B,
    onEnter: J,
    onEnterCancelled: U,
    onLeave: ye,
    onLeaveCancelled: I,
    onBeforeAppear: se = B,
    onAppear: Q = J,
    onAppearCancelled: re = U
  } = t, R = (A, q, oe, $e) => {
    A._enterCancelled = $e, qt(A, q ? f : l), qt(A, q ? p : r), oe && oe();
  }, ue = (A, q) => {
    A._isLeaving = !1, qt(A, a), qt(A, y), qt(A, h), q && q();
  }, ve = (A) => (q, oe) => {
    const $e = A ? Q : J, ke = () => R(q, A, oe);
    Wt($e, [q, ke]), _i(() => {
      qt(q, A ? c : i), St(q, A ? f : l), mi($e) || yi(q, s, b, ke);
    });
  };
  return Ve(t, {
    onBeforeEnter(A) {
      Wt(B, [A]), St(A, i), St(A, r);
    },
    onBeforeAppear(A) {
      Wt(se, [A]), St(A, c), St(A, p);
    },
    onEnter: ve(!1),
    onAppear: ve(!0),
    onLeave(A, q) {
      A._isLeaving = !0;
      const oe = () => ue(A, q);
      St(A, a), A._enterCancelled ? (St(A, h), Ni(A)) : (Ni(A), St(A, h)), _i(() => {
        A._isLeaving && (qt(A, a), St(A, y), mi(ye) || yi(A, s, P, oe));
      }), Wt(ye, [A, oe]);
    },
    onEnterCancelled(A) {
      R(A, !1, void 0, !0), Wt(U, [A]);
    },
    onAppearCancelled(A) {
      R(A, !0, void 0, !0), Wt(re, [A]);
    },
    onLeaveCancelled(A) {
      ue(A), Wt(I, [A]);
    }
  });
}
function du(e) {
  if (e == null)
    return null;
  if (pe(e))
    return [Ys(e.enter), Ys(e.leave)];
  {
    const t = Ys(e);
    return [t, t];
  }
}
function Ys(e) {
  const t = Vl(e);
  return process.env.NODE_ENV !== "production" && Ec(t, "<transition> explicit duration"), t;
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Wn] || (e[Wn] = /* @__PURE__ */ new Set())).add(t);
}
function qt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Wn];
  n && (n.delete(t), n.size || (e[Wn] = void 0));
}
function _i(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pu = 0;
function yi(e, t, n, s) {
  const o = e._endId = ++pu, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = hu(e, t);
  if (!r)
    return s();
  const p = r + "end";
  let f = 0;
  const a = () => {
    e.removeEventListener(p, h), i();
  }, h = (y) => {
    y.target === e && ++f >= c && a();
  };
  setTimeout(() => {
    f < c && a();
  }, l + 1), e.addEventListener(p, h);
}
function hu(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${Lt}Delay`), i = s(`${Lt}Duration`), r = bi(o, i), l = s(`${Sn}Delay`), c = s(`${Sn}Duration`), p = bi(l, c);
  let f = null, a = 0, h = 0;
  t === Lt ? r > 0 && (f = Lt, a = r, h = i.length) : t === Sn ? p > 0 && (f = Sn, a = p, h = c.length) : (a = Math.max(r, p), f = a > 0 ? r > p ? Lt : Sn : null, h = f ? f === Lt ? i.length : c.length : 0);
  const y = f === Lt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Lt}Property`).toString()
  );
  return {
    type: f,
    timeout: a,
    propCount: h,
    hasTransform: y
  };
}
function bi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ei(n) + Ei(e[s])));
}
function Ei(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ni(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function vu(e, t, n) {
  const s = e[Wn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ds = /* @__PURE__ */ Symbol("_vod"), ll = /* @__PURE__ */ Symbol("_vsh"), Yt = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ds] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Vn(e, !0), s.enter(e)) : s.leave(e, () => {
      Vn(e, !1);
    }) : Vn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vn(e, t);
  }
};
function Vn(e, t) {
  e.style.display = t ? e[Ds] : "none", e[ll] = !t;
}
const gu = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), mu = /(?:^|;)\s*display\s*:/;
function _u(e, t, n) {
  const s = e.style, o = Ce(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Ce(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && hs(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && hs(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), hs(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[gu];
      r && (n += ";" + r), s.cssText = n, i = mu.test(n);
    }
  } else t && e.removeAttribute("style");
  Ds in e && (e[Ds] = i ? s.display : "", e[ll] && (s.display = "none"));
}
const yu = /[^\\];\s*$/, wi = /\s*!important$/;
function hs(e, t, n) {
  if (z(n))
    n.forEach((s) => hs(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && yu.test(n) && Tt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = bu(e, t);
    wi.test(n) ? e.setProperty(
      Ft(s),
      n.replace(wi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Oi = ["Webkit", "Moz", "ms"], Gs = {};
function bu(e, t) {
  const n = Gs[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Gs[t] = s;
  s = nn(s);
  for (let o = 0; o < Oi.length; o++) {
    const i = Oi[o] + s;
    if (i in e)
      return Gs[t] = i;
  }
  return t;
}
const Ci = "http://www.w3.org/1999/xlink";
function xi(e, t, n, s, o, i = jl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ci, t.slice(6, t.length)) : e.setAttributeNS(Ci, t, n) : n == null || i && !Bi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ot(n) ? String(n) : n
  );
}
function Si(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? il(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Bi(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !r && Tt(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Eu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function Nu(e, t, n, s, o = null) {
  const i = e[Vi] || (e[Vi] = {}), r = i[t];
  if (s && r)
    r.value = process.env.NODE_ENV !== "production" ? $i(s, t) : s;
  else {
    const [l, c] = wu(t);
    if (s) {
      const p = i[t] = xu(
        process.env.NODE_ENV !== "production" ? $i(s, t) : s,
        o
      );
      pn(e, l, p, c);
    } else r && (Eu(e, l, r, c), i[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function wu(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Di); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
let Js = 0;
const Ou = /* @__PURE__ */ Promise.resolve(), Cu = () => Js || (Ou.then(() => Js = 0), Js = Date.now());
function xu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    vt(
      Su(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Cu(), n;
}
function $i(e, t) {
  return G(e) || z(e) ? e : (Tt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Re);
}
function Su(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vu = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? vu(e, s, r) : t === "style" ? _u(e, n, s) : qn(t) ? Rn(t) || Nu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Du(e, t, s, r)) ? (Si(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xi(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($u(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(s))) ? Si(e, Be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), xi(e, t, s, r));
};
function Du(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ki(t) && G(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ki(t) && Ce(n) ? !1 : t in e;
}
function $u(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Be(t);
  return Array.isArray(n) ? n.some((o) => Be(o) === s) : Object.keys(n).some((o) => Be(o) === s);
}
const Ti = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return z(t) ? (n) => fn(t, n) : t;
};
function ku(e) {
  e.target.composing = !0;
}
function Mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Xs = /* @__PURE__ */ Symbol("_assign");
function Pi(e, t, n) {
  return t && (e = e.trim()), n && (e = Eo(e)), e;
}
const Tu = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Xs] = Ti(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Xs](Pi(e.value, n, i));
    }), (n || i) && pn(e, "change", () => {
      e.value = Pi(e.value, n, i);
    }), t || (pn(e, "compositionstart", ku), pn(e, "compositionend", Mi), pn(e, "change", Mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Xs] = Ti(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Eo(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c);
  }
}, Mu = ["ctrl", "shift", "alt", "meta"], Pu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Mu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Se = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Pu[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  }));
}, Au = /* @__PURE__ */ Ve({ patchProp: Vu }, lu);
let Ai;
function Iu() {
  return Ai || (Ai = La(Au));
}
const Lu = ((...e) => {
  const t = Iu().createApp(...e);
  process.env.NODE_ENV !== "production" && (Ru(t), ju(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Fu(s);
    if (!o) return;
    const i = t._component;
    !G(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Hu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function Hu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ru(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Il(t) || Ll(t) || Hl(t),
    writable: !1
  });
}
function ju(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Tt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Tt(s), n;
      },
      set() {
        Tt(s);
      }
    });
  }
}
function Fu(e) {
  if (Ce(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Tt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Tt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bu() {
  ou();
}
process.env.NODE_ENV !== "production" && Bu();
const ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zu = { class: "pill-label" }, Uu = { class: "pill-name" }, Ku = {
  key: 0,
  class: "pill-pct"
}, Wu = {
  __name: "LightCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ be(null), s = V(() => t.state.state === "on"), o = V(() => ["unavailable", "unknown"].includes(t.state.state)), i = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), r = V(() => !s.value || t.state.attributes.brightness == null ? null : Math.round(t.state.attributes.brightness / 255 * 100)), l = /* @__PURE__ */ be(r.value);
    Ue(r, (Q) => {
      b || (l.value = Q);
    });
    const c = V(() => {
      const Q = t.state.attributes.supported_color_modes;
      return Q != null && Q.length ? !Q.every((re) => re === "onoff") : (t.state.attributes.supported_features & 1) > 0;
    }), p = V(() => s.value ? l.value ?? 100 : 0), f = V(() => {
      if (!s.value) return {};
      const Q = p.value / 100;
      return {
        boxShadow: `0 0 ${12 + Q * 18}px rgba(255, 220, 120, ${0.04 + Q * 0.07})`,
        borderColor: `rgba(255, 220, 120, ${0.1 + Q * 0.15})`
      };
    }), a = V(() => ({
      "pill--on": s.value,
      "pill--unavailable": o.value
    })), h = V(() => ({ height: p.value + "%" })), y = V(() => ({ bottom: p.value + "%" }));
    let N = null, b = !1, P = null;
    function B(Q) {
      var re;
      o.value || ((re = n.value) == null || re.setPointerCapture(Q.pointerId), N = Q.clientY, b = !1);
    }
    function J(Q) {
      if (N === null || (Math.abs(Q.clientY - N) > 6 && (b = !0), !b || !c.value)) return;
      const re = n.value.getBoundingClientRect(), R = Math.round(Math.max(1, Math.min(
        100,
        100 - (Q.clientY - re.top) / re.height * 100
      )));
      l.value = R, clearTimeout(P), P = setTimeout(() => se(R), 80);
    }
    function U() {
      b ? (clearTimeout(P), se(l.value)) : I(), N = null, b = !1;
    }
    function ye() {
      N = null, b = !1;
    }
    function I() {
      o.value || !t.hass || t.hass.callService("light", "toggle", { entity_id: t.state.entity_id });
    }
    function se(Q) {
      var re;
      (re = t.hass) == null || re.callService("light", "turn_on", {
        entity_id: t.state.entity_id,
        brightness: Math.round(Q / 100 * 255)
      });
    }
    return (Q, re) => (g(), _("div", {
      ref_key: "pillRef",
      ref: n,
      class: de(["pill", a.value]),
      style: Oe(f.value),
      onPointerdown: B,
      onPointermove: J,
      onPointerup: U,
      onPointercancel: ye
    }, [
      s.value ? (g(), _("div", {
        key: 0,
        class: "pill-fill",
        style: Oe(h.value)
      }, null, 4)) : ne("", !0),
      s.value && c.value ? (g(), _("div", {
        key: 1,
        class: "pill-thumb",
        style: Oe(y.value)
      }, null, 4)) : ne("", !0),
      d("div", zu, [
        d("span", Uu, Z(i.value), 1),
        s.value && l.value !== null ? (g(), _("span", Ku, Z(l.value) + "%", 1)) : ne("", !0)
      ])
    ], 38));
  }
}, cl = /* @__PURE__ */ ze(Wu, [["__scopeId", "data-v-0d70cb84"]]);
function al(e) {
  const t = /* @__PURE__ */ be([]), n = /* @__PURE__ */ be([]), s = /* @__PURE__ */ be([]);
  let o = !1;
  return Ue(
    e,
    async (r) => {
      if (!(!(r != null && r.connection) || o)) {
        o = !0;
        try {
          const [l, c, p] = await Promise.all([
            r.connection.sendMessagePromise({ type: "config/area_registry/list" }),
            r.connection.sendMessagePromise({ type: "config/entity_registry/list" }),
            r.connection.sendMessagePromise({ type: "config/device_registry/list" })
          ]);
          t.value = l, n.value = c, s.value = p;
        } catch (l) {
          console.warn("[useAreaLights] Could not fetch registries:", l);
        }
      }
    },
    { immediate: !0 }
  ), { lightsByArea: V(() => {
    var a;
    if (!((a = e == null ? void 0 : e.value) != null && a.states)) return [];
    const r = {};
    for (const h of s.value)
      h.area_id && (r[h.id] = h.area_id);
    const l = {};
    for (const h of n.value) {
      if (h.disabled_by) continue;
      const y = h.area_id ?? (h.device_id ? r[h.device_id] : null);
      y && (l[h.entity_id] = y);
    }
    const c = {};
    for (const h of t.value)
      c[h.area_id] = h.name;
    const p = Object.values(e.value.states).filter(
      (h) => h.entity_id.startsWith("light.")
    ), f = {};
    for (const h of p) {
      const y = l[h.entity_id], N = y ? c[y] ?? "Unknown" : "Unassigned";
      (f[N] ?? (f[N] = [])).push(h);
    }
    return Object.entries(f).sort(([h], [y]) => h === "Unassigned" ? 1 : y === "Unassigned" ? -1 : h.localeCompare(y)).map(([h, y]) => ({
      name: h,
      lights: y.sort(
        (N, b) => (N.attributes.friendly_name ?? N.entity_id).localeCompare(
          b.attributes.friendly_name ?? b.entity_id
        )
      )
    }));
  }) };
}
const ul = "vd-hidden-entities", fl = "vd-group-by-room", dl = "vd-entity-order";
function qu(e) {
  try {
    return new Set(JSON.parse(localStorage.getItem(e) ?? "[]"));
  } catch {
    return /* @__PURE__ */ new Set();
  }
}
const kn = /* @__PURE__ */ be(qu(ul)), vs = /* @__PURE__ */ be(localStorage.getItem(fl) !== "false"), gs = /* @__PURE__ */ be(JSON.parse(localStorage.getItem(dl) ?? "[]"));
Ue(kn, (e) => localStorage.setItem(ul, JSON.stringify([...e])), { deep: !0 });
Ue(vs, (e) => localStorage.setItem(fl, String(e)));
Ue(gs, (e) => localStorage.setItem(dl, JSON.stringify(e)), { deep: !0 });
function on() {
  function e(i) {
    const r = new Set(kn.value);
    r.has(i) ? r.delete(i) : r.add(i), kn.value = r;
  }
  function t(i) {
    return !kn.value.has(i);
  }
  function n() {
    vs.value = !vs.value;
  }
  function s(i) {
    gs.value = [...i];
  }
  function o(i) {
    const r = gs.value;
    return r.length ? [...i].sort((l, c) => {
      const p = r.indexOf(l.entity_id), f = r.indexOf(c.entity_id);
      return p === -1 && f === -1 ? 0 : p === -1 ? 1 : f === -1 ? -1 : p - f;
    }) : i;
  }
  return { hidden: kn, toggle: e, isVisible: t, groupByRoom: vs, toggleGroupByRoom: n, entityOrder: gs, setOrder: s, sortedByOrder: o };
}
const Yu = { class: "lights-view" }, Gu = {
  key: 0,
  class: "empty"
}, Ju = {
  key: 0,
  class: "room-label"
}, Xu = { class: "room-grid" }, Zu = {
  key: 2,
  class: "empty"
}, Qu = {
  __name: "LightsView",
  setup(e) {
    const t = et("hass"), { lightsByArea: n } = al(t), { isVisible: s, groupByRoom: o, sortedByOrder: i } = on(), r = V(() => {
      const l = n.value;
      if (!o.value) {
        const c = i(l.flatMap((p) => p.lights).filter((p) => s(p.entity_id)));
        return c.length ? [{ name: null, lights: c }] : [];
      }
      return l.map((c) => ({ ...c, lights: i(c.lights.filter((p) => s(p.entity_id))) })).filter((c) => c.lights.length);
    });
    return (l, c) => (g(), _("div", Yu, [
      W(t) ? r.value.length ? (g(!0), _(Y, { key: 1 }, we(r.value, (p) => (g(), _("section", {
        key: p.name,
        class: "room"
      }, [
        p.name ? (g(), _("div", Ju, Z(p.name), 1)) : ne("", !0),
        d("div", Xu, [
          (g(!0), _(Y, null, we(p.lights, (f) => (g(), Ge(cl, {
            key: f.entity_id,
            state: f,
            hass: W(t)
          }, null, 8, ["state", "hass"]))), 128))
        ])
      ]))), 128)) : (g(), _("div", Zu, "Loading…")) : (g(), _("div", Gu, "Connecting…"))
    ]));
  }
}, ef = /* @__PURE__ */ ze(Qu, [["__scopeId", "data-v-724fe1c5"]]), tf = { class: "media-info" }, nf = { class: "media-name" }, sf = { class: "media-track" }, of = {
  key: 0,
  class: "media-artist"
}, rf = {
  key: 1,
  class: "media-state"
}, lf = {
  key: 2,
  class: "media-vol"
}, cf = ["disabled"], af = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, uf = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ff = ["disabled"], df = {
  __name: "MediaCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ be(null), s = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), o = V(() => t.state.state === "playing"), i = V(() => ["playing", "paused", "on", "buffering"].includes(t.state.state)), r = V(() => ({ idle: "Idle", off: "Off", paused: "Paused", buffering: "Buffering…", on: "On" })[t.state.state] ?? t.state.state), l = V(() => t.state.attributes.media_title ?? ""), c = V(() => t.state.attributes.media_artist ?? ""), p = V(() => t.state.attributes.volume_level ?? null), f = V(() => p.value !== null), a = V(
      () => p.value !== null ? Math.round(p.value * 100) : null
    ), h = /* @__PURE__ */ be(a.value);
    Ue(a, (q) => {
      U || (h.value = q);
    });
    const y = V(() => i.value ? h.value ?? 80 : 0), N = V(() => {
      if (!i.value) return {};
      const q = y.value / 100;
      return {
        boxShadow: `0 0 ${12 + q * 18}px rgba(99, 102, 241, ${0.05 + q * 0.1})`,
        borderColor: `rgba(99, 102, 241, ${0.12 + q * 0.2})`
      };
    }), b = V(() => ({
      "media-pill--active": i.value,
      "media-pill--playing": o.value
    })), P = V(() => ({ height: y.value + "%" })), B = V(() => ({ bottom: y.value + "%" }));
    let J = null, U = !1, ye = null;
    function I(q) {
      var oe;
      f.value && ((oe = n.value) == null || oe.setPointerCapture(q.pointerId), J = q.clientY, U = !1);
    }
    function se(q) {
      if (J === null || (Math.abs(q.clientY - J) > 6 && (U = !0), !U)) return;
      const oe = n.value.getBoundingClientRect(), $e = Math.round(Math.max(0, Math.min(
        100,
        100 - (q.clientY - oe.top) / oe.height * 100
      )));
      h.value = $e, clearTimeout(ye), ye = setTimeout(() => A($e), 80);
    }
    function Q() {
      !U && !f.value ? R() : U && (clearTimeout(ye), A(h.value)), J = null, U = !1;
    }
    function re() {
      J = null, U = !1;
    }
    function R() {
      var q;
      (q = t.hass) == null || q.callService("media_player", "media_play_pause", { entity_id: t.state.entity_id });
    }
    function ue() {
      var q;
      (q = t.hass) == null || q.callService("media_player", "volume_down", { entity_id: t.state.entity_id });
    }
    function ve() {
      var q;
      (q = t.hass) == null || q.callService("media_player", "volume_up", { entity_id: t.state.entity_id });
    }
    function A(q) {
      var oe;
      (oe = t.hass) == null || oe.callService("media_player", "volume_set", {
        entity_id: t.state.entity_id,
        volume_level: q / 100
      });
    }
    return (q, oe) => (g(), _("div", {
      ref_key: "pillRef",
      ref: n,
      class: de(["media-pill", b.value]),
      style: Oe(N.value),
      onPointerdown: I,
      onPointermove: se,
      onPointerup: Q,
      onPointercancel: re
    }, [
      i.value ? (g(), _("div", {
        key: 0,
        class: "media-fill",
        style: Oe(P.value)
      }, null, 4)) : ne("", !0),
      i.value && f.value ? (g(), _("div", {
        key: 1,
        class: "media-crest",
        style: Oe(B.value)
      }, null, 4)) : ne("", !0),
      d("div", tf, [
        d("span", nf, Z(s.value), 1),
        o.value ? (g(), _(Y, { key: 0 }, [
          d("span", sf, Z(l.value), 1),
          c.value ? (g(), _("span", of, Z(c.value), 1)) : ne("", !0)
        ], 64)) : (g(), _("span", rf, Z(r.value), 1))
      ]),
      i.value && f.value ? (g(), _("span", lf, Z(a.value) + "%", 1)) : ne("", !0),
      d("div", {
        class: "media-controls",
        onPointerdown: oe[0] || (oe[0] = Se(() => {
        }, ["stop"])),
        onPointermove: oe[1] || (oe[1] = Se(() => {
        }, ["stop"]))
      }, [
        d("button", {
          class: "ctrl",
          onClick: ue,
          disabled: !f.value
        }, [...oe[2] || (oe[2] = [
          d("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor"
          }, [
            d("path", { d: "M18.5 12A4.5 4.5 0 0 0 16 7.97V16c1.48-.73 2.5-2.25 2.5-4zM5 9v6h4l5 5V4L9 9H5z" })
          ], -1)
        ])], 8, cf),
        d("button", {
          class: "ctrl ctrl--main",
          onClick: R
        }, [
          o.value ? (g(), _("svg", af, [...oe[3] || (oe[3] = [
            d("path", { d: "M6 19h4V5H6zm8-14v14h4V5z" }, null, -1)
          ])])) : (g(), _("svg", uf, [...oe[4] || (oe[4] = [
            d("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ]),
        d("button", {
          class: "ctrl",
          onClick: ve,
          disabled: !f.value
        }, [...oe[5] || (oe[5] = [
          d("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor"
          }, [
            d("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97V16c1.48-.73 2.5-2.25 2.5-4zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" })
          ], -1)
        ])], 8, ff)
      ], 32)
    ], 38));
  }
}, pl = /* @__PURE__ */ ze(df, [["__scopeId", "data-v-9d626ef1"]]), Ii = /* @__PURE__ */ new Set(["playing", "paused", "buffering", "on"]);
function hl(e) {
  return { mediaPlayers: V(() => {
    var n;
    return (n = e == null ? void 0 : e.value) != null && n.states ? Object.values(e.value.states).filter((s) => s.entity_id.startsWith("media_player.")).filter((s) => s.state !== "unavailable").sort((s, o) => {
      const i = Ii.has(s.state) ? 0 : 1, r = Ii.has(o.state) ? 0 : 1;
      return i !== r ? i - r : (s.attributes.friendly_name ?? s.entity_id).localeCompare(
        o.attributes.friendly_name ?? o.entity_id
      );
    }) : [];
  }) };
}
const pf = { class: "media-view" }, hf = {
  key: 0,
  class: "empty"
}, vf = {
  key: 1,
  class: "media-grid"
}, gf = {
  key: 2,
  class: "empty"
}, mf = {
  __name: "MediaView",
  setup(e) {
    const t = et("hass"), { mediaPlayers: n } = hl(t), { isVisible: s, sortedByOrder: o } = on(), i = V(() => o(n.value.filter((r) => s(r.entity_id))));
    return (r, l) => (g(), _("div", pf, [
      W(t) ? i.value.length ? (g(), _("div", vf, [
        (g(!0), _(Y, null, we(i.value, (c) => (g(), Ge(pl, {
          key: c.entity_id,
          state: c,
          hass: W(t)
        }, null, 8, ["state", "hass"]))), 128))
      ])) : (g(), _("div", gf, "No media players found")) : (g(), _("div", hf, "Connecting…"))
    ]));
  }
}, _f = /* @__PURE__ */ ze(mf, [["__scopeId", "data-v-66edc8c1"]]), yf = { class: "climate-info" }, bf = { class: "climate-name" }, Ef = {
  key: 0,
  class: "climate-current"
}, Nf = { class: "climate-action" }, wf = { class: "climate-target" }, Of = {
  __name: "ClimateCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.state !== "off"), o = V(() => t.state.attributes.hvac_action === "heating"), i = V(() => t.state.attributes.current_temperature ?? null), r = V(() => t.state.attributes.temperature ?? null), l = V(() => s.value ? { heating: "Heating…", idle: "Idle", cooling: "Cooling…", drying: "Drying…", fan: "Fan" }[t.state.attributes.hvac_action] ?? t.state.state : "Off"), c = V(() => i.value === null || !s.value ? 0 : Math.round(Math.max(0, Math.min(100, (i.value - 10) / 25 * 100)))), p = V(() => {
      if (!s.value) return {};
      const N = c.value / 100;
      return {
        boxShadow: `0 0 ${12 + N * 18}px rgba(249, 115, 22, ${0.05 + N * 0.1})`,
        borderColor: `rgba(249, 115, 22, ${0.12 + N * 0.2})`
      };
    }), f = V(() => ({ height: c.value + "%" })), a = V(() => ({ bottom: c.value + "%" }));
    function h() {
      var b;
      const N = s.value ? "off" : "heat";
      (b = t.hass) == null || b.callService("climate", "set_hvac_mode", {
        entity_id: t.state.entity_id,
        hvac_mode: N
      });
    }
    function y(N) {
      var U;
      const b = t.state.attributes.target_temp_step ?? 0.5, P = t.state.attributes.min_temp ?? 5, B = t.state.attributes.max_temp ?? 35, J = Math.max(P, Math.min(B, (r.value ?? 20) + N * b));
      (U = t.hass) == null || U.callService("climate", "set_temperature", {
        entity_id: t.state.entity_id,
        temperature: Math.round(J * 2) / 2
      });
    }
    return (N, b) => (g(), _("div", {
      class: de(["climate-pill", { "climate-pill--active": s.value, "climate-pill--heating": o.value }]),
      style: Oe(p.value),
      onClick: h
    }, [
      s.value ? (g(), _("div", {
        key: 0,
        class: "climate-fill",
        style: Oe(f.value)
      }, null, 4)) : ne("", !0),
      s.value ? (g(), _("div", {
        key: 1,
        class: "climate-crest",
        style: Oe(a.value)
      }, null, 4)) : ne("", !0),
      d("div", yf, [
        d("span", bf, Z(n.value), 1),
        i.value !== null ? (g(), _("span", Ef, Z(i.value) + "°", 1)) : ne("", !0),
        d("span", Nf, Z(l.value), 1)
      ]),
      d("div", {
        class: "climate-controls",
        onClick: b[2] || (b[2] = Se(() => {
        }, ["stop"])),
        onPointerdown: b[3] || (b[3] = Se(() => {
        }, ["stop"]))
      }, [
        d("button", {
          class: "ctrl",
          onClick: b[0] || (b[0] = (P) => y(-1))
        }, "−"),
        d("span", wf, Z(r.value !== null ? r.value + "°" : "—"), 1),
        d("button", {
          class: "ctrl",
          onClick: b[1] || (b[1] = (P) => y(1))
        }, "+")
      ], 32)
    ], 6));
  }
}, vl = /* @__PURE__ */ ze(Of, [["__scopeId", "data-v-a2d35381"]]), Cf = { class: "sensor-info" }, xf = { class: "sensor-name" }, Sf = { class: "sensor-value" }, Vf = { class: "sensor-unit" }, Df = {
  __name: "SensorCard",
  props: {
    state: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.attributes.device_class ?? "generic"), o = V(() => t.state.attributes.unit_of_measurement ?? ""), i = V(() => {
      const p = parseFloat(t.state.state);
      return isNaN(p) ? 0 : s.value === "temperature" ? Math.round(Math.max(0, Math.min(100, (p - 10) / 30 * 100))) : s.value === "humidity" ? Math.round(Math.max(0, Math.min(100, p))) : 0;
    }), r = V(() => ({ height: i.value + "%" })), l = V(() => ({ bottom: i.value + "%" })), c = V(() => {
      if (i.value === 0) return {};
      const p = i.value / 100;
      return s.value === "temperature" ? {
        boxShadow: `0 0 ${10 + p * 14}px rgba(249, 115, 22, ${0.04 + p * 0.08})`,
        borderColor: `rgba(249, 115, 22, ${0.1 + p * 0.2})`
      } : s.value === "humidity" ? {
        boxShadow: `0 0 ${10 + p * 14}px rgba(14, 165, 233, ${0.04 + p * 0.08})`,
        borderColor: `rgba(14, 165, 233, ${0.1 + p * 0.2})`
      } : {};
    });
    return (p, f) => (g(), _("div", {
      class: de(["sensor-pill", `sensor-pill--${s.value}`]),
      style: Oe(c.value)
    }, [
      d("div", {
        class: "sensor-fill",
        style: Oe(r.value)
      }, null, 4),
      i.value > 0 ? (g(), _("div", {
        key: 0,
        class: "sensor-crest",
        style: Oe(l.value)
      }, null, 4)) : ne("", !0),
      d("div", Cf, [
        d("span", xf, Z(n.value), 1),
        d("span", Sf, [
          st(Z(e.state.state), 1),
          d("span", Vf, Z(o.value), 1)
        ])
      ])
    ], 6));
  }
}, go = /* @__PURE__ */ ze(Df, [["__scopeId", "data-v-06ec7a2a"]]);
function bn(e) {
  function t(b) {
    var P;
    return (P = e == null ? void 0 : e.value) != null && P.states ? Object.values(e.value.states).filter((B) => B.entity_id.startsWith(b + ".") && B.state !== "unavailable") : [];
  }
  function n(b, P) {
    return (b.attributes.friendly_name ?? b.entity_id).localeCompare(P.attributes.friendly_name ?? P.entity_id);
  }
  const s = V(() => t("switch").sort(n)), o = V(() => t("climate").sort(n)), i = V(() => t("lock").sort(n)), r = V(() => t("vacuum").sort(n)), l = V(() => t("person").sort(n)), c = V(
    () => t("sensor").filter((b) => b.attributes.device_class === "temperature" && b.state !== "unknown").sort(n)
  ), p = V(
    () => t("sensor").filter((b) => b.attributes.device_class === "humidity" && b.state !== "unknown").sort(n)
  ), f = V(() => o.value.length > 0 || c.value.length > 0 || p.value.length > 0), a = V(() => s.value.length > 0), h = V(() => i.value.length > 0 || r.value.length > 0), y = V(() => l.value.length > 0), N = V(() => f.value || a.value || h.value || y.value);
  return {
    switches: s,
    climate: o,
    locks: i,
    vacuums: r,
    persons: l,
    tempSensors: c,
    humiditySensors: p,
    hasClimate: f,
    hasSwitches: a,
    hasDevices: h,
    hasPresence: y,
    hasAny: N
  };
}
const $f = { class: "climate-view" }, kf = {
  key: 0,
  class: "empty"
}, Tf = {
  key: 0,
  class: "section"
}, Mf = { class: "card-grid" }, Pf = {
  key: 1,
  class: "section"
}, Af = { class: "card-grid" }, If = {
  key: 2,
  class: "section"
}, Lf = { class: "card-grid" }, Hf = {
  key: 3,
  class: "empty"
}, Rf = {
  __name: "ClimateView",
  setup(e) {
    const t = et("hass"), { climate: n, tempSensors: s, humiditySensors: o } = bn(t), { isVisible: i, sortedByOrder: r } = on(), l = V(() => r(n.value.filter((f) => i(f.entity_id)))), c = V(() => r(s.value.filter((f) => i(f.entity_id)))), p = V(() => r(o.value.filter((f) => i(f.entity_id))));
    return (f, a) => (g(), _("div", $f, [
      W(t) ? (g(), _(Y, { key: 1 }, [
        l.value.length ? (g(), _("section", Tf, [
          a[0] || (a[0] = d("div", { class: "section-label" }, "Climate", -1)),
          d("div", Mf, [
            (g(!0), _(Y, null, we(l.value, (h) => (g(), Ge(vl, {
              key: h.entity_id,
              state: h,
              hass: W(t)
            }, null, 8, ["state", "hass"]))), 128))
          ])
        ])) : ne("", !0),
        c.value.length ? (g(), _("section", Pf, [
          a[1] || (a[1] = d("div", { class: "section-label" }, "Temperature", -1)),
          d("div", Af, [
            (g(!0), _(Y, null, we(c.value, (h) => (g(), Ge(go, {
              key: h.entity_id,
              state: h
            }, null, 8, ["state"]))), 128))
          ])
        ])) : ne("", !0),
        p.value.length ? (g(), _("section", If, [
          a[2] || (a[2] = d("div", { class: "section-label" }, "Humidity", -1)),
          d("div", Lf, [
            (g(!0), _(Y, null, we(p.value, (h) => (g(), Ge(go, {
              key: h.entity_id,
              state: h
            }, null, 8, ["state"]))), 128))
          ])
        ])) : ne("", !0),
        !l.value.length && !c.value.length && !p.value.length ? (g(), _("div", Hf, " All hidden ")) : ne("", !0)
      ], 64)) : (g(), _("div", kf, "Connecting…"))
    ]));
  }
}, jf = /* @__PURE__ */ ze(Rf, [["__scopeId", "data-v-7f887d54"]]), Ff = {
  key: 0,
  class: "switch-fill"
}, Bf = {
  key: 1,
  class: "switch-crest"
}, zf = { class: "switch-info" }, Uf = { class: "switch-name" }, Kf = { class: "switch-state" }, Wf = {
  __name: "SwitchCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.state === "on"), o = V(() => s.value ? {
      boxShadow: "0 0 18px rgba(16, 185, 129, 0.12)",
      borderColor: "rgba(16, 185, 129, 0.25)"
    } : {});
    function i() {
      var r;
      (r = t.hass) == null || r.callService("switch", "toggle", { entity_id: t.state.entity_id });
    }
    return (r, l) => (g(), _("div", {
      class: de(["switch-pill", { "switch-pill--on": s.value }]),
      style: Oe(o.value),
      onClick: i
    }, [
      s.value ? (g(), _("div", Ff)) : ne("", !0),
      s.value ? (g(), _("div", Bf)) : ne("", !0),
      d("div", zf, [
        d("span", Uf, Z(n.value), 1),
        d("span", Kf, Z(s.value ? "On" : "Off"), 1)
      ])
    ], 6));
  }
}, gl = /* @__PURE__ */ ze(Wf, [["__scopeId", "data-v-3f88f004"]]), qf = { class: "switches-view" }, Yf = {
  key: 0,
  class: "empty"
}, Gf = {
  key: 1,
  class: "card-grid"
}, Jf = {
  key: 2,
  class: "empty"
}, Xf = {
  __name: "SwitchesView",
  setup(e) {
    const t = et("hass"), { switches: n } = bn(t), { isVisible: s, sortedByOrder: o } = on(), i = V(() => o(n.value.filter((r) => s(r.entity_id))));
    return (r, l) => (g(), _("div", qf, [
      W(t) ? i.value.length ? (g(), _("div", Gf, [
        (g(!0), _(Y, null, we(i.value, (c) => (g(), Ge(gl, {
          key: c.entity_id,
          state: c,
          hass: W(t)
        }, null, 8, ["state", "hass"]))), 128))
      ])) : (g(), _("div", Jf, "All hidden")) : (g(), _("div", Yf, "Connecting…"))
    ]));
  }
}, Zf = /* @__PURE__ */ ze(Xf, [["__scopeId", "data-v-8d9845d1"]]), Qf = { class: "lock-info" }, ed = { class: "lock-name" }, td = {
  class: "lock-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, nd = {
  key: 0,
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}, sd = {
  key: 1,
  d: "M12 1C9.24 1 7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5zm0 2c1.71 0 3.1 1.39 3.1 3.1V8H8.9V6.1C8.9 4.39 10.29 3 12 3zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
  opacity: ".4"
}, od = { class: "lock-state" }, id = {
  key: 2,
  class: "lock-transitioning"
}, rd = {
  __name: "LockCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.state === "locked"), o = V(() => t.state.state === "unlocked"), i = V(() => ({
      locked: "Locked",
      unlocked: "Unlocked",
      locking: "Locking…",
      unlocking: "Unlocking…"
    })[t.state.state] ?? t.state.state), r = V(() => o.value ? 60 : 0), l = V(() => ({ height: r.value + "%" })), c = V(() => o.value ? {
      borderColor: "rgba(245, 158, 11, 0.4)",
      boxShadow: "0 0 18px rgba(245, 158, 11, 0.12)"
    } : s.value ? {
      borderColor: "rgba(16, 185, 129, 0.2)"
    } : {});
    function p(f) {
      var a;
      (a = t.hass) == null || a.callService("lock", f, { entity_id: t.state.entity_id });
    }
    return (f, a) => (g(), _("div", {
      class: de(["lock-pill", `lock-pill--${e.state.state}`]),
      style: Oe(c.value)
    }, [
      d("div", {
        class: "lock-fill",
        style: Oe(l.value)
      }, null, 4),
      d("div", Qf, [
        d("span", ed, Z(n.value), 1),
        (g(), _("svg", td, [
          s.value ? (g(), _("path", nd)) : (g(), _("path", sd))
        ])),
        d("span", od, Z(i.value), 1)
      ]),
      d("div", {
        class: "lock-controls",
        onClick: a[4] || (a[4] = Se(() => {
        }, ["stop"])),
        onPointerdown: a[5] || (a[5] = Se(() => {
        }, ["stop"]))
      }, [
        s.value ? (g(), _(Y, { key: 0 }, [
          d("button", {
            class: "ctrl ctrl--main",
            onClick: a[0] || (a[0] = (h) => p("open")),
            title: "Open latch"
          }, [...a[6] || (a[6] = [
            d("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })
            ], -1)
          ])]),
          d("button", {
            class: "ctrl",
            onClick: a[1] || (a[1] = (h) => p("unlock")),
            title: "Unlock"
          }, [...a[7] || (a[7] = [
            d("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" })
            ], -1)
          ])])
        ], 64)) : o.value ? (g(), _(Y, { key: 1 }, [
          d("button", {
            class: "ctrl ctrl--main ctrl--lock",
            onClick: a[2] || (a[2] = (h) => p("lock")),
            title: "Lock"
          }, [...a[8] || (a[8] = [
            d("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })
            ], -1)
          ])]),
          d("button", {
            class: "ctrl",
            onClick: a[3] || (a[3] = (h) => p("open")),
            title: "Open latch"
          }, [...a[9] || (a[9] = [
            d("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })
            ], -1)
          ])])
        ], 64)) : (g(), _("span", id, "…"))
      ], 32)
    ], 6));
  }
}, ml = /* @__PURE__ */ ze(rd, [["__scopeId", "data-v-36f02328"]]), ld = { class: "vacuum-info" }, cd = { class: "vacuum-name" }, ad = { class: "vacuum-status" }, ud = {
  key: 0,
  class: "vacuum-bat"
}, fd = ["disabled"], dd = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, pd = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, hd = ["disabled"], vd = {
  __name: "VacuumCard",
  props: {
    state: { type: Object, required: !0 },
    hass: { type: Object, default: null }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.state === "docked"), o = V(() => t.state.state === "cleaning"), i = V(() => t.state.state === "returning"), r = V(() => t.state.state === "paused"), l = V(() => o.value || i.value || r.value), c = V(() => ({
      docked: "Docked",
      cleaning: "Cleaning",
      returning: "Returning",
      paused: "Paused",
      idle: "Idle",
      error: "Error"
    })[t.state.state] ?? t.state.state), p = V(() => t.state.attributes.battery_level ?? null), f = V(() => p.value ?? 0), a = V(() => ({ height: f.value + "%" })), h = V(() => ({ bottom: f.value + "%" })), y = V(() => {
      if (!l.value) return {};
      const P = f.value / 100;
      return {
        boxShadow: `0 0 ${12 + P * 14}px rgba(14, 165, 233, ${0.05 + P * 0.08})`,
        borderColor: `rgba(14, 165, 233, ${0.12 + P * 0.18})`
      };
    });
    function N() {
      var P, B;
      o.value ? (P = t.hass) == null || P.callService("vacuum", "pause", { entity_id: t.state.entity_id }) : (B = t.hass) == null || B.callService("vacuum", "start", { entity_id: t.state.entity_id });
    }
    function b() {
      var P;
      (P = t.hass) == null || P.callService("vacuum", "return_to_base", { entity_id: t.state.entity_id });
    }
    return (P, B) => (g(), _("div", {
      class: de(["vacuum-pill", { "vacuum-pill--active": l.value }]),
      style: Oe(y.value)
    }, [
      p.value !== null ? (g(), _("div", {
        key: 0,
        class: "vacuum-fill",
        style: Oe(a.value)
      }, null, 4)) : ne("", !0),
      p.value !== null ? (g(), _("div", {
        key: 1,
        class: "vacuum-crest",
        style: Oe(h.value)
      }, null, 4)) : ne("", !0),
      d("div", ld, [
        d("span", cd, Z(n.value), 1),
        d("span", ad, Z(c.value), 1),
        p.value !== null ? (g(), _("span", ud, Z(p.value) + "%", 1)) : ne("", !0)
      ]),
      d("div", {
        class: "vacuum-controls",
        onClick: B[0] || (B[0] = Se(() => {
        }, ["stop"])),
        onPointerdown: B[1] || (B[1] = Se(() => {
        }, ["stop"]))
      }, [
        d("button", {
          class: "ctrl ctrl--main",
          onClick: N,
          disabled: i.value
        }, [
          o.value || i.value ? (g(), _("svg", dd, [...B[2] || (B[2] = [
            d("path", { d: "M6 19h4V5H6zm8-14v14h4V5z" }, null, -1)
          ])])) : (g(), _("svg", pd, [...B[3] || (B[3] = [
            d("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 8, fd),
        d("button", {
          class: "ctrl",
          onClick: b,
          disabled: s.value
        }, [...B[4] || (B[4] = [
          d("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor"
          }, [
            d("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" })
          ], -1)
        ])], 8, hd)
      ], 32)
    ], 6));
  }
}, _l = /* @__PURE__ */ ze(vd, [["__scopeId", "data-v-26d3a71f"]]), gd = { class: "devices-view" }, md = {
  key: 0,
  class: "empty"
}, _d = {
  key: 1,
  class: "card-grid"
}, yd = {
  key: 2,
  class: "empty"
}, bd = {
  __name: "DevicesView",
  setup(e) {
    const t = et("hass"), { locks: n, vacuums: s } = bn(t), { isVisible: o, sortedByOrder: i } = on(), r = V(() => i(n.value.filter((c) => o(c.entity_id)))), l = V(() => i(s.value.filter((c) => o(c.entity_id))));
    return (c, p) => (g(), _("div", gd, [
      W(t) ? r.value.length || l.value.length ? (g(), _("div", _d, [
        (g(!0), _(Y, null, we(r.value, (f) => (g(), Ge(ml, {
          key: f.entity_id,
          state: f,
          hass: W(t)
        }, null, 8, ["state", "hass"]))), 128)),
        (g(!0), _(Y, null, we(l.value, (f) => (g(), Ge(_l, {
          key: f.entity_id,
          state: f,
          hass: W(t)
        }, null, 8, ["state", "hass"]))), 128))
      ])) : (g(), _("div", yd, "All hidden")) : (g(), _("div", md, "Connecting…"))
    ]));
  }
}, Ed = /* @__PURE__ */ ze(bd, [["__scopeId", "data-v-5e5de159"]]), Nd = {
  key: 0,
  class: "presence-fill"
}, wd = {
  key: 1,
  class: "presence-crest"
}, Od = { class: "presence-info" }, Cd = { class: "presence-name" }, xd = { class: "presence-initial" }, Sd = { class: "presence-state" }, Vd = {
  __name: "PresenceCard",
  props: {
    state: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, n = V(
      () => t.state.attributes.friendly_name ?? t.state.entity_id.split(".")[1].replace(/_/g, " ")
    ), s = V(() => t.state.state === "home"), o = V(() => (n.value[0] ?? "?").toUpperCase());
    return (i, r) => (g(), _("div", {
      class: de(["presence-pill", { "presence-pill--home": s.value }])
    }, [
      s.value ? (g(), _("div", Nd)) : ne("", !0),
      s.value ? (g(), _("div", wd)) : ne("", !0),
      d("div", Od, [
        d("span", Cd, Z(n.value), 1),
        d("span", xd, Z(o.value), 1),
        d("span", Sd, Z(s.value ? "Home" : "Away"), 1)
      ])
    ], 2));
  }
}, yl = /* @__PURE__ */ ze(Vd, [["__scopeId", "data-v-1ab76cb8"]]), Dd = { class: "presence-view" }, $d = {
  key: 0,
  class: "empty"
}, kd = {
  key: 1,
  class: "card-grid"
}, Td = {
  key: 2,
  class: "empty"
}, Md = {
  __name: "PresenceView",
  setup(e) {
    const t = et("hass"), { persons: n } = bn(t), { isVisible: s, sortedByOrder: o } = on(), i = V(() => o(n.value.filter((r) => s(r.entity_id))));
    return (r, l) => (g(), _("div", Dd, [
      W(t) ? i.value.length ? (g(), _("div", kd, [
        (g(!0), _(Y, null, we(i.value, (c) => (g(), Ge(yl, {
          key: c.entity_id,
          state: c
        }, null, 8, ["state"]))), 128))
      ])) : (g(), _("div", Td, "All hidden")) : (g(), _("div", $d, "Connecting…"))
    ]));
  }
}, Pd = /* @__PURE__ */ ze(Md, [["__scopeId", "data-v-1bed4876"]]), Ad = {
  key: 1,
  class: "unknown-card"
}, Id = {
  __name: "EntityCard",
  props: { entityId: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = et("hass"), s = {
      light: cl,
      media_player: pl,
      switch: gl,
      climate: vl,
      lock: ml,
      vacuum: _l,
      person: yl,
      sensor: go
    }, o = V(() => t.entityId.split(".")[0]), i = V(() => {
      var l, c;
      return (c = (l = n == null ? void 0 : n.value) == null ? void 0 : l.states) == null ? void 0 : c[t.entityId];
    }), r = V(() => s[o.value] ?? null);
    return (l, c) => i.value && r.value ? (g(), Ge(sa(r.value), {
      key: 0,
      state: i.value,
      hass: W(n)
    }, null, 8, ["state", "hass"])) : i.value ? (g(), _("div", Ad, Z(i.value.attributes.friendly_name ?? e.entityId), 1)) : ne("", !0);
  }
}, Li = /* @__PURE__ */ ze(Id, [["__scopeId", "data-v-9b180fcb"]]), Ld = { class: "custom-tab-view" }, Hd = {
  key: 0,
  class: "empty"
}, Rd = {
  key: 0,
  class: "section"
}, jd = {
  key: 0,
  class: "section-label"
}, Fd = { class: "card-grid" }, Bd = {
  key: 1,
  class: "card-grid"
}, zd = {
  key: 2,
  class: "empty"
}, Ud = {
  __name: "CustomTabView",
  props: { tab: { type: Object, required: !0 } },
  setup(e) {
    const t = e, n = et("hass"), s = V(() => {
      const o = [];
      let i = [], r = [];
      function l() {
        i.length && (o.push({ kind: "entities", key: "loose-" + r.join("-"), entityIds: [...i] }), i = [], r = []);
      }
      for (const c of t.tab.items)
        c.kind === "entity" ? (i.push(c.entityId), r.push(c.id)) : c.kind === "section" && (l(), o.push({ kind: "section", key: c.id, name: c.name, entityIds: c.entityIds }));
      return l(), o;
    });
    return (o, i) => (g(), _("div", Ld, [
      W(n) ? s.value.length ? (g(!0), _(Y, { key: 1 }, we(s.value, (r) => (g(), _(Y, {
        key: r.key
      }, [
        r.kind === "section" ? (g(), _("section", Rd, [
          r.name ? (g(), _("div", jd, Z(r.name), 1)) : ne("", !0),
          d("div", Fd, [
            (g(!0), _(Y, null, we(r.entityIds, (l) => (g(), Ge(Li, {
              key: l,
              entityId: l
            }, null, 8, ["entityId"]))), 128))
          ])
        ])) : (g(), _("div", Bd, [
          (g(!0), _(Y, null, we(r.entityIds, (l) => (g(), Ge(Li, {
            key: l,
            entityId: l
          }, null, 8, ["entityId"]))), 128))
        ]))
      ], 64))), 128)) : (g(), _("div", zd, " No entities yet — tap Settings to configure. ")) : (g(), _("div", Hd, "Connecting…"))
    ]));
  }
}, Kd = /* @__PURE__ */ ze(Ud, [["__scopeId", "data-v-6dfa82c7"]]), Hn = {
  bulb: "M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 5 9a7 7 0 0 1 7-7zm2.5 17h-5v1.5A1.5 1.5 0 0 0 11 22h2a1.5 1.5 0 0 0 1.5-1.5V19z",
  music: "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",
  thermo: "M13 11.1V7h-2v4.1c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3.08 3 3.08s3-1.43 3-3.08c0-1.31-.84-2.41-2-2.82zM12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z",
  toggle: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
  lock: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  person: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  sun: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2v-2H2v2zm18 0h2v-2h-2v2zM11 2v2h2V2h-2zm0 18v2h2v-2h-2zM5.99 4.58l-1.42 1.42 1.41 1.41 1.42-1.42L5.99 4.58zm12.03 12.03l-1.42 1.42 1.41 1.41 1.42-1.42-1.41-1.41zm1.41-12.03l-1.41 1.41 1.42 1.42 1.41-1.41-1.42-1.42zM5.99 19.42l1.41-1.41-1.42-1.42-1.41 1.41 1.42 1.42z",
  star: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  bolt: "M7 2v11h3v9l7-12h-4l4-8z",
  drop: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z",
  grid: "M3 3h7v7H3zm0 11h7v7H3zm11-11h7v7h-7zm0 11h7v7h-7z"
}, Wd = [
  "#f59e0b",
  "#f97316",
  "#ef4444",
  "#ec4899",
  "#a78bfa",
  "#818cf8",
  "#0ea5e9",
  "#10b981",
  "#14b8a6",
  "#6b7280"
], bl = "vd-custom-tabs", El = "vd-custom-tabs-enabled";
function Zs() {
  return Math.random().toString(36).slice(2, 9);
}
const Ne = /* @__PURE__ */ be(JSON.parse(localStorage.getItem(bl) ?? "null") ?? []), Nl = /* @__PURE__ */ be(localStorage.getItem(El) === "true");
Ue(Ne, (e) => localStorage.setItem(bl, JSON.stringify(e)), { deep: !0 });
Ue(Nl, (e) => localStorage.setItem(El, String(e)));
function wl() {
  function e(h = "New Tab", y = "bulb", N = "#f59e0b") {
    const b = Zs();
    return Ne.value = [...Ne.value, { id: b, name: h, icon: y, color: N, items: [] }], b;
  }
  function t(h, y) {
    Ne.value = Ne.value.map((N) => N.id === h ? { ...N, ...y } : N);
  }
  function n(h) {
    Ne.value = Ne.value.filter((y) => y.id !== h);
  }
  function s(h, y) {
    const N = [...Ne.value];
    N.splice(y, 0, N.splice(h, 1)[0]), Ne.value = N;
  }
  function o(h, y = "Section") {
    const N = Zs();
    return Ne.value = Ne.value.map((b) => b.id !== h ? b : { ...b, items: [...b.items, { kind: "section", id: N, name: y, entityIds: [] }] }), N;
  }
  function i(h, y, N) {
    Ne.value = Ne.value.map((b) => b.id !== h ? b : {
      ...b,
      items: b.items.map(
        (P) => P.kind === "section" && P.id === y ? { ...P, ...N } : P
      )
    });
  }
  function r(h, y) {
    Ne.value = Ne.value.map((N) => N.id !== h ? N : { ...N, items: N.items.filter((b) => !(b.kind === "section" && b.id === y)) });
  }
  function l(h, y) {
    Ne.value = Ne.value.map((N) => N.id !== h || N.items.some((b) => b.kind === "entity" && b.entityId === y) ? N : { ...N, items: [...N.items, { kind: "entity", id: Zs(), entityId: y }] });
  }
  function c(h, y) {
    Ne.value = Ne.value.map((N) => N.id !== h ? N : { ...N, items: N.items.filter((b) => !(b.kind === "entity" && b.entityId === y)) });
  }
  function p(h, y, N) {
    Ne.value = Ne.value.map((b) => b.id !== h ? b : {
      ...b,
      items: b.items.map((P) => P.kind !== "section" || P.id !== y || P.entityIds.includes(N) ? P : { ...P, entityIds: [...P.entityIds, N] })
    });
  }
  function f(h, y, N) {
    Ne.value = Ne.value.map((b) => b.id !== h ? b : {
      ...b,
      items: b.items.map((P) => P.kind !== "section" || P.id !== y ? P : { ...P, entityIds: P.entityIds.filter((B) => B !== N) })
    });
  }
  function a(h, y, N) {
    Ne.value = Ne.value.map((b) => {
      if (b.id !== h) return b;
      const P = [...b.items];
      return P.splice(N, 0, P.splice(y, 1)[0]), { ...b, items: P };
    });
  }
  return {
    customTabs: Ne,
    customTabsEnabled: Nl,
    addTab: e,
    updateTab: t,
    removeTab: n,
    reorderTabs: s,
    addSection: o,
    updateSection: i,
    removeSection: r,
    addEntityToTab: l,
    removeEntityFromTab: c,
    addEntityToSection: p,
    removeEntityFromSection: f,
    reorderItems: a
  };
}
const qd = { class: "sheet" }, Yd = { class: "sheet-header" }, Gd = { class: "sheet-title" }, Jd = {
  key: 2,
  style: { width: "26px" }
}, Xd = ["onPointerdown"], Zd = ["d"], Qd = { class: "entity-name" }, ep = ["onClick"], tp = ["onClick"], np = {
  key: 0,
  class: "hint"
}, sp = ["onPointerdown"], op = { class: "entity-name" }, ip = {
  key: 0,
  class: "entity-sub"
}, rp = ["onClick"], lp = ["onPointerdown"], cp = { class: "entity-name" }, ap = ["onClick"], up = ["onPointerdown"], fp = { class: "entity-name" }, dp = { class: "entity-sub" }, pp = ["onClick"], hp = { class: "input-row" }, vp = ["value"], gp = { class: "icon-grid" }, mp = ["onClick"], _p = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "20",
  height: "20"
}, yp = ["d"], bp = { class: "color-grid" }, Ep = ["onClick"], Np = {
  class: "section-row",
  style: { "margin-top": "1rem" }
}, wp = { style: { display: "flex", gap: ".4rem" } }, Op = {
  key: 0,
  class: "hint"
}, Cp = ["onPointerdown"], xp = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "14",
  height: "14",
  style: { "flex-shrink": "0", color: "#4b5563", "margin-right": ".3rem" }
}, Sp = {
  class: "entity-name",
  style: { flex: "1" }
}, Vp = ["value", "onInput"], Dp = { class: "entity-sub" }, $p = ["onClick"], kp = ["onClick"], Tp = { class: "entity-name" }, Mp = { class: "entity-sub" }, Pp = ["onClick"], Ap = ["onPointerdown"], Ip = { class: "entity-name" }, Lp = { class: "entity-sub" }, Hp = ["onClick"], Rp = {
  key: 2,
  class: "sheet-body picker-body"
}, jp = { class: "search-row" }, Fp = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "16",
  height: "16",
  style: { "flex-shrink": "0", color: "#4b5563" }
}, Bp = { class: "domain-chips" }, zp = ["onClick"], Up = { class: "picker-count" }, Kp = ["onClick"], Wp = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "12",
  height: "12"
}, qp = { class: "entity-name" }, Yp = { class: "entity-sub" }, Gp = { class: "domain-badge" }, Jp = {
  __name: "SettingsSheet",
  props: { open: Boolean },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = et("hass"), { toggle: i, isVisible: r, groupByRoom: l, toggleGroupByRoom: c, entityOrder: p, setOrder: f, sortedByOrder: a } = on(), { lightsByArea: h } = al(o), { mediaPlayers: y } = hl(o), { switches: N, climate: b, locks: P, vacuums: B, persons: J, tempSensors: U, humiditySensors: ye } = bn(o), I = V(() => [
      ...J.value,
      ...b.value,
      ...P.value,
      ...B.value,
      ...N.value,
      ...U.value,
      ...ye.value
    ]), {
      customTabs: se,
      customTabsEnabled: Q,
      addTab: re,
      updateTab: R,
      removeTab: ue,
      reorderTabs: ve,
      addSection: A,
      updateSection: q,
      removeSection: oe,
      addEntityToTab: $e,
      removeEntityFromTab: ke,
      addEntityToSection: ae,
      removeEntityFromSection: le,
      reorderItems: it
    } = wl(), Te = /* @__PURE__ */ be("main"), xe = /* @__PURE__ */ be(null), tt = /* @__PURE__ */ be(null), je = V(() => se.value.find((F) => F.id === xe.value) ?? null), En = V(() => {
      var F;
      if (Te.value === "tab-editor") return ((F = je.value) == null ? void 0 : F.name) || "Edit Tab";
      if (Te.value === "entity-picker") {
        if (!tt.value) return "Add Entities";
        const m = se.value.find((w) => w.id === tt.value.tabId);
        if (tt.value.sectionId) {
          const w = m == null ? void 0 : m.items.find((H) => H.kind === "section" && H.id === tt.value.sectionId);
          return `Add to "${(w == null ? void 0 : w.name) ?? "Section"}"`;
        }
        return `Add to "${(m == null ? void 0 : m.name) ?? "Tab"}"`;
      }
      return "Settings";
    });
    function Hs() {
      if (Te.value === "entity-picker") {
        Te.value = "tab-editor";
        return;
      }
      if (Te.value === "tab-editor") {
        Te.value = "main", xe.value = null;
        return;
      }
      Te.value = "main";
    }
    function ns() {
      Te.value = "main", xe.value = null, s("close");
    }
    function At(F) {
      xe.value = F, Te.value = "tab-editor";
    }
    function rn() {
      const F = re();
      At(F);
    }
    function Nn() {
      A(xe.value);
    }
    function ss() {
      ue(xe.value), Te.value = "main";
    }
    const gt = /* @__PURE__ */ be(""), It = /* @__PURE__ */ be(""), u = /* @__PURE__ */ be(/* @__PURE__ */ new Set()), v = V(() => {
      var F;
      return (F = o == null ? void 0 : o.value) != null && F.states ? Object.values(o.value.states).filter((m) => m.state !== "unavailable").sort((m, w) => {
        const H = m.entity_id.split(".")[0], ie = w.entity_id.split(".")[0];
        return H !== ie ? H.localeCompare(ie) : (m.attributes.friendly_name ?? m.entity_id).localeCompare(w.attributes.friendly_name ?? w.entity_id);
      }) : [];
    }), E = V(() => [
      ...new Set(v.value.map((F) => F.entity_id.split(".")[0]))
    ].sort()), S = V(() => {
      const F = gt.value.toLowerCase();
      return v.value.filter((m) => !(It.value && !m.entity_id.startsWith(It.value + ".") || F && !(m.attributes.friendly_name ?? "").toLowerCase().includes(F) && !m.entity_id.toLowerCase().includes(F)));
    });
    function O(F, m) {
      tt.value = { tabId: F, sectionId: m }, gt.value = "", It.value = "";
      const w = se.value.find((H) => H.id === F);
      if (m) {
        const H = w == null ? void 0 : w.items.find((ie) => ie.kind === "section" && ie.id === m);
        u.value = new Set((H == null ? void 0 : H.entityIds) ?? []);
      } else
        u.value = new Set(
          (w == null ? void 0 : w.items.filter((H) => H.kind === "entity").map((H) => H.entityId)) ?? []
        );
      Te.value = "entity-picker";
    }
    function x(F) {
      const { tabId: m, sectionId: w } = tt.value, H = new Set(u.value);
      H.has(F) ? (H.delete(F), w ? le(m, w, F) : ke(m, F)) : (H.add(F), w ? ae(m, w, F) : $e(m, F)), u.value = H;
    }
    function T(F) {
      var w, H, ie;
      const m = (H = (w = o == null ? void 0 : o.value) == null ? void 0 : w.states) == null ? void 0 : H[F];
      return ((ie = m == null ? void 0 : m.attributes) == null ? void 0 : ie.friendly_name) ?? F;
    }
    const $ = /* @__PURE__ */ be([]), D = /* @__PURE__ */ be([]), C = /* @__PURE__ */ be([]), K = [], M = [], j = [], L = /* @__PURE__ */ be(null), ee = /* @__PURE__ */ be(null), fe = [], ce = /* @__PURE__ */ be(null), Ee = [];
    Ue([h, p], ([F]) => {
      L.value || ($.value = a(F.flatMap((m) => m.lights.map((w) => ({ ...w, roomName: m.name })))));
    }, { immediate: !0 }), Ue([y, p], ([F]) => {
      L.value || (D.value = a([...F]));
    }, { immediate: !0 }), Ue([I, p], ([F]) => {
      L.value || (C.value = a([...F]));
    }, { immediate: !0 }), Ue(() => n.open, (F) => {
      F || (L.value && Fe(), ee.value && Le());
    });
    function De(F, m, w) {
      F.currentTarget.setPointerCapture(F.pointerId), L.value = { type: m, index: w };
    }
    function Je(F) {
      if (!L.value) return;
      const { type: m, index: w } = L.value, H = { lights: K, media: M, controls: j }[m], ie = { lights: $, media: D, controls: C }[m];
      let _e = w, X = 1 / 0;
      for (let ln = 0; ln < H.length; ln++) {
        if (!H[ln]) continue;
        const Ro = H[ln].getBoundingClientRect(), jo = Math.abs(Ro.top + Ro.height / 2 - F.clientY);
        jo < X && (X = jo, _e = ln);
      }
      _e !== w && (ie.value.splice(_e, 0, ie.value.splice(w, 1)[0]), L.value = { type: m, index: _e });
    }
    function Fe() {
      L.value && (L.value = null, f([...$.value, ...D.value, ...C.value].map((F) => F.entity_id)));
    }
    function Bt(F, m) {
      F.currentTarget.setPointerCapture(F.pointerId), ee.value = { index: m };
    }
    function os(F) {
      if (!ee.value) return;
      const { index: m } = ee.value;
      let w = m, H = 1 / 0;
      for (let ie = 0; ie < fe.length; ie++) {
        if (!fe[ie]) continue;
        const _e = fe[ie].getBoundingClientRect(), X = Math.abs(_e.top + _e.height / 2 - F.clientY);
        X < H && (H = X, w = ie);
      }
      w !== m && (ve(m, w), ee.value = { index: w });
    }
    function Le() {
      ee.value = null;
    }
    function nt(F, m) {
      F.currentTarget.setPointerCapture(F.pointerId), ce.value = { index: m };
    }
    function wn(F) {
      if (!ce.value || !xe.value) return;
      const { index: m } = ce.value;
      let w = m, H = 1 / 0;
      for (let ie = 0; ie < Ee.length; ie++) {
        if (!Ee[ie]) continue;
        const _e = Ee[ie].getBoundingClientRect(), X = Math.abs(_e.top + _e.height / 2 - F.clientY);
        X < H && (H = X, w = ie);
      }
      w !== m && (it(xe.value, m, w), ce.value = { index: w });
    }
    function zt() {
      ce.value = null;
    }
    return (F, m) => (g(), Ge(uu, { name: "sheet" }, {
      default: _r(() => [
        e.open ? (g(), _("div", {
          key: 0,
          class: "sheet-backdrop",
          onClick: Se(ns, ["self"])
        }, [
          d("div", qd, [
            d("div", Yd, [
              Te.value !== "main" ? (g(), _("button", {
                key: 0,
                class: "hdr-btn",
                onClick: Hs
              }, [...m[7] || (m[7] = [
                d("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "18",
                  height: "18"
                }, [
                  d("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
                ], -1)
              ])])) : ne("", !0),
              d("span", Gd, Z(En.value), 1),
              Te.value === "main" ? (g(), _("button", {
                key: 1,
                class: "hdr-btn",
                onClick: ns
              }, [...m[8] || (m[8] = [
                d("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "18",
                  height: "18"
                }, [
                  d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                ], -1)
              ])])) : (g(), _("div", Jd))
            ]),
            Te.value === "main" ? (g(), _("div", {
              key: 0,
              class: de(["sheet-body", { "sheet-body--dragging": L.value !== null || ee.value !== null }])
            }, [
              d("div", {
                class: "option-row",
                onClick: m[0] || (m[0] = (w) => Q.value = !W(Q))
              }, [
                m[10] || (m[10] = d("span", { class: "option-label" }, "Custom Tabs", -1)),
                d("span", {
                  class: de(["toggle", { "toggle--on": W(Q) }])
                }, [...m[9] || (m[9] = [
                  d("span", { class: "toggle-thumb" }, null, -1)
                ])], 2)
              ]),
              W(Q) ? (g(), _(Y, { key: 0 }, [
                m[16] || (m[16] = d("div", { class: "divider" }, null, -1)),
                d("div", { class: "section-row" }, [
                  m[12] || (m[12] = d("span", { class: "section-label" }, "Tabs", -1)),
                  d("button", {
                    class: "add-btn",
                    onClick: rn
                  }, [...m[11] || (m[11] = [
                    d("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "14",
                      height: "14"
                    }, [
                      d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
                    ], -1),
                    st(" Add Tab ", -1)
                  ])])
                ]),
                (g(!0), _(Y, null, we(W(se), (w, H) => {
                  var ie;
                  return g(), _("div", {
                    key: w.id,
                    class: de(["entity-row", { "entity-row--dragging": ((ie = ee.value) == null ? void 0 : ie.index) === H }]),
                    ref_for: !0,
                    ref: (_e) => {
                      _e && (fe[H] = _e);
                    }
                  }, [
                    d("div", {
                      class: "drag-handle",
                      onPointerdown: Se((_e) => Bt(_e, H), ["stop"]),
                      onPointermove: os,
                      onPointerup: Le,
                      onPointercancel: Le
                    }, [...m[13] || (m[13] = [
                      d("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor"
                      }, [
                        d("circle", {
                          cx: "9",
                          cy: "7",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "7",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "9",
                          cy: "12",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "12",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "9",
                          cy: "17",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "17",
                          r: "1.5"
                        })
                      ], -1)
                    ])], 40, Xd),
                    (g(), _("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      class: "tab-icon-sm",
                      style: Oe({ color: w.color })
                    }, [
                      d("path", {
                        d: W(Hn)[w.icon] ?? W(Hn).bulb
                      }, null, 8, Zd)
                    ], 4)),
                    d("span", Qd, Z(w.name), 1),
                    d("button", {
                      class: "icon-btn",
                      onClick: Se((_e) => At(w.id), ["stop"])
                    }, [...m[14] || (m[14] = [
                      d("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "16",
                        height: "16"
                      }, [
                        d("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
                      ], -1)
                    ])], 8, ep),
                    d("button", {
                      class: "icon-btn icon-btn--danger",
                      onClick: Se((_e) => W(ue)(w.id), ["stop"])
                    }, [...m[15] || (m[15] = [
                      d("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "16",
                        height: "16"
                      }, [
                        d("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
                      ], -1)
                    ])], 8, tp)
                  ], 2);
                }), 128)),
                W(se).length ? ne("", !0) : (g(), _("div", np, "No tabs yet — tap Add Tab to create one."))
              ], 64)) : (g(), _(Y, { key: 1 }, [
                m[28] || (m[28] = d("div", { class: "divider" }, null, -1)),
                d("div", {
                  class: "option-row",
                  onClick: m[1] || (m[1] = (...w) => W(c) && W(c)(...w))
                }, [
                  m[18] || (m[18] = d("span", { class: "option-label" }, "Group lights by room", -1)),
                  d("span", {
                    class: de(["toggle", { "toggle--on": W(l) }])
                  }, [...m[17] || (m[17] = [
                    d("span", { class: "toggle-thumb" }, null, -1)
                  ])], 2)
                ]),
                m[29] || (m[29] = d("div", { class: "divider" }, null, -1)),
                $.value.length ? (g(), _(Y, { key: 0 }, [
                  m[21] || (m[21] = d("div", { class: "section-label pl" }, "Lights", -1)),
                  (g(!0), _(Y, null, we($.value, (w, H) => {
                    var ie, _e;
                    return g(), _("div", {
                      key: w.entity_id,
                      class: de(["entity-row", { "entity-row--dragging": ((ie = L.value) == null ? void 0 : ie.type) === "lights" && ((_e = L.value) == null ? void 0 : _e.index) === H }]),
                      ref_for: !0,
                      ref: (X) => {
                        X && (K[H] = X);
                      }
                    }, [
                      d("div", {
                        class: "drag-handle",
                        onPointerdown: Se((X) => De(X, "lights", H), ["stop"]),
                        onPointermove: Je,
                        onPointerup: Fe,
                        onPointercancel: Fe
                      }, [...m[19] || (m[19] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor"
                        }, [
                          d("circle", {
                            cx: "9",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "17",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "17",
                            r: "1.5"
                          })
                        ], -1)
                      ])], 40, sp),
                      d("span", op, [
                        st(Z(w.attributes.friendly_name ?? w.entity_id) + " ", 1),
                        w.roomName ? (g(), _("span", ip, Z(w.roomName), 1)) : ne("", !0)
                      ]),
                      d("span", {
                        class: de(["toggle", { "toggle--on": W(r)(w.entity_id) }]),
                        onClick: Se((X) => W(i)(w.entity_id), ["stop"])
                      }, [...m[20] || (m[20] = [
                        d("span", { class: "toggle-thumb" }, null, -1)
                      ])], 10, rp)
                    ], 2);
                  }), 128))
                ], 64)) : ne("", !0),
                D.value.length ? (g(), _(Y, { key: 1 }, [
                  m[24] || (m[24] = d("div", {
                    class: "section-label pl",
                    style: { "margin-top": ".5rem" }
                  }, "Media", -1)),
                  (g(!0), _(Y, null, we(D.value, (w, H) => {
                    var ie, _e;
                    return g(), _("div", {
                      key: w.entity_id,
                      class: de(["entity-row", { "entity-row--dragging": ((ie = L.value) == null ? void 0 : ie.type) === "media" && ((_e = L.value) == null ? void 0 : _e.index) === H }]),
                      ref_for: !0,
                      ref: (X) => {
                        X && (M[H] = X);
                      }
                    }, [
                      d("div", {
                        class: "drag-handle",
                        onPointerdown: Se((X) => De(X, "media", H), ["stop"]),
                        onPointermove: Je,
                        onPointerup: Fe,
                        onPointercancel: Fe
                      }, [...m[22] || (m[22] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor"
                        }, [
                          d("circle", {
                            cx: "9",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "17",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "17",
                            r: "1.5"
                          })
                        ], -1)
                      ])], 40, lp),
                      d("span", cp, Z(w.attributes.friendly_name ?? w.entity_id), 1),
                      d("span", {
                        class: de(["toggle", { "toggle--on": W(r)(w.entity_id) }]),
                        onClick: Se((X) => W(i)(w.entity_id), ["stop"])
                      }, [...m[23] || (m[23] = [
                        d("span", { class: "toggle-thumb" }, null, -1)
                      ])], 10, ap)
                    ], 2);
                  }), 128))
                ], 64)) : ne("", !0),
                C.value.length ? (g(), _(Y, { key: 2 }, [
                  m[27] || (m[27] = d("div", {
                    class: "section-label pl",
                    style: { "margin-top": ".5rem" }
                  }, "Other", -1)),
                  (g(!0), _(Y, null, we(C.value, (w, H) => {
                    var ie, _e;
                    return g(), _("div", {
                      key: w.entity_id,
                      class: de(["entity-row", { "entity-row--dragging": ((ie = L.value) == null ? void 0 : ie.type) === "controls" && ((_e = L.value) == null ? void 0 : _e.index) === H }]),
                      ref_for: !0,
                      ref: (X) => {
                        X && (j[H] = X);
                      }
                    }, [
                      d("div", {
                        class: "drag-handle",
                        onPointerdown: Se((X) => De(X, "controls", H), ["stop"]),
                        onPointermove: Je,
                        onPointerup: Fe,
                        onPointercancel: Fe
                      }, [...m[25] || (m[25] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor"
                        }, [
                          d("circle", {
                            cx: "9",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "17",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "17",
                            r: "1.5"
                          })
                        ], -1)
                      ])], 40, up),
                      d("span", fp, [
                        st(Z(w.attributes.friendly_name ?? w.entity_id) + " ", 1),
                        d("span", dp, Z(w.entity_id.split(".")[0]), 1)
                      ]),
                      d("span", {
                        class: de(["toggle", { "toggle--on": W(r)(w.entity_id) }]),
                        onClick: Se((X) => W(i)(w.entity_id), ["stop"])
                      }, [...m[26] || (m[26] = [
                        d("span", { class: "toggle-thumb" }, null, -1)
                      ])], 10, pp)
                    ], 2);
                  }), 128))
                ], 64)) : ne("", !0)
              ], 64))
            ], 2)) : Te.value === "tab-editor" && je.value ? (g(), _("div", {
              key: 1,
              class: de(["sheet-body", { "sheet-body--dragging": ce.value !== null }])
            }, [
              m[41] || (m[41] = d("div", { class: "field-label" }, "Name", -1)),
              d("div", hp, [
                d("input", {
                  class: "text-input",
                  value: je.value.name,
                  onInput: m[2] || (m[2] = (w) => W(R)(xe.value, { name: w.target.value })),
                  placeholder: "Tab name"
                }, null, 40, vp)
              ]),
              m[42] || (m[42] = d("div", {
                class: "field-label",
                style: { "margin-top": ".85rem" }
              }, "Icon", -1)),
              d("div", gp, [
                (g(!0), _(Y, null, we(W(Hn), (w, H) => (g(), _("button", {
                  key: H,
                  class: de(["icon-option", { "icon-option--active": je.value.icon === H }]),
                  style: Oe(je.value.icon === H ? { color: je.value.color } : {}),
                  onClick: (ie) => W(R)(xe.value, { icon: H })
                }, [
                  (g(), _("svg", _p, [
                    d("path", { d: w }, null, 8, yp)
                  ]))
                ], 14, mp))), 128))
              ]),
              m[43] || (m[43] = d("div", {
                class: "field-label",
                style: { "margin-top": ".85rem" }
              }, "Color", -1)),
              d("div", bp, [
                (g(!0), _(Y, null, we(W(Wd), (w) => (g(), _("button", {
                  key: w,
                  class: de(["color-swatch", { "color-swatch--active": je.value.color === w }]),
                  style: Oe({ background: w }),
                  onClick: (H) => W(R)(xe.value, { color: w })
                }, null, 14, Ep))), 128))
              ]),
              d("div", Np, [
                m[32] || (m[32] = d("span", {
                  class: "field-label",
                  style: { margin: "0" }
                }, "Items", -1)),
                d("div", wp, [
                  d("button", {
                    class: "add-btn",
                    onClick: Nn
                  }, [...m[30] || (m[30] = [
                    d("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "12",
                      height: "12"
                    }, [
                      d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
                    ], -1),
                    st(" Section ", -1)
                  ])]),
                  d("button", {
                    class: "add-btn",
                    onClick: m[3] || (m[3] = (w) => O(xe.value, null))
                  }, [...m[31] || (m[31] = [
                    d("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "12",
                      height: "12"
                    }, [
                      d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
                    ], -1),
                    st(" Entities ", -1)
                  ])])
                ])
              ]),
              je.value.items.length ? ne("", !0) : (g(), _("div", Op, " Add sections or entities above. ")),
              (g(!0), _(Y, null, we(je.value.items, (w, H) => {
                var ie, _e;
                return g(), _(Y, {
                  key: w.id ?? w.entityId
                }, [
                  w.kind === "section" ? (g(), _(Y, { key: 0 }, [
                    d("div", {
                      class: de(["entity-row entity-row--section", { "entity-row--dragging": ((ie = ce.value) == null ? void 0 : ie.index) === H }]),
                      ref_for: !0,
                      ref: (X) => {
                        X && (Ee[H] = X);
                      }
                    }, [
                      d("div", {
                        class: "drag-handle",
                        onPointerdown: Se((X) => nt(X, H), ["stop"]),
                        onPointermove: wn,
                        onPointerup: zt,
                        onPointercancel: zt
                      }, [...m[33] || (m[33] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor"
                        }, [
                          d("circle", {
                            cx: "9",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "7",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "12",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "9",
                            cy: "17",
                            r: "1.5"
                          }),
                          d("circle", {
                            cx: "15",
                            cy: "17",
                            r: "1.5"
                          })
                        ], -1)
                      ])], 40, Cp),
                      (g(), _("svg", xp, [...m[34] || (m[34] = [
                        d("path", { d: "M20 6H4v2h16V6zm-2 5H6v2h12v-2zm2 5H4v2h16v-2z" }, null, -1)
                      ])])),
                      d("span", Sp, [
                        d("input", {
                          class: "inline-input",
                          value: w.name,
                          onInput: (X) => W(q)(xe.value, w.id, { name: X.target.value }),
                          onClick: m[4] || (m[4] = Se(() => {
                          }, ["stop"]))
                        }, null, 40, Vp),
                        d("span", Dp, Z(w.entityIds.length) + " entities", 1)
                      ]),
                      d("button", {
                        class: "icon-btn",
                        onClick: Se((X) => O(xe.value, w.id), ["stop"]),
                        title: "Add entities"
                      }, [...m[35] || (m[35] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "15",
                          height: "15"
                        }, [
                          d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
                        ], -1)
                      ])], 8, $p),
                      d("button", {
                        class: "icon-btn icon-btn--danger",
                        onClick: Se((X) => W(oe)(xe.value, w.id), ["stop"])
                      }, [...m[36] || (m[36] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "15",
                          height: "15"
                        }, [
                          d("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
                        ], -1)
                      ])], 8, kp)
                    ], 2),
                    (g(!0), _(Y, null, we(w.entityIds, (X) => (g(), _("div", {
                      key: X,
                      class: "entity-row entity-row--nested"
                    }, [
                      d("span", Tp, [
                        st(Z(T(X)) + " ", 1),
                        d("span", Mp, Z(X), 1)
                      ]),
                      d("button", {
                        class: "icon-btn icon-btn--danger",
                        onClick: (ln) => W(le)(xe.value, w.id, X)
                      }, [...m[37] || (m[37] = [
                        d("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "14",
                          height: "14"
                        }, [
                          d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                        ], -1)
                      ])], 8, Pp)
                    ]))), 128))
                  ], 64)) : (g(), _("div", {
                    key: 1,
                    class: de(["entity-row", { "entity-row--dragging": ((_e = ce.value) == null ? void 0 : _e.index) === H }]),
                    ref_for: !0,
                    ref: (X) => {
                      X && (Ee[H] = X);
                    }
                  }, [
                    d("div", {
                      class: "drag-handle",
                      onPointerdown: Se((X) => nt(X, H), ["stop"]),
                      onPointermove: wn,
                      onPointerup: zt,
                      onPointercancel: zt
                    }, [...m[38] || (m[38] = [
                      d("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor"
                      }, [
                        d("circle", {
                          cx: "9",
                          cy: "7",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "7",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "9",
                          cy: "12",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "12",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "9",
                          cy: "17",
                          r: "1.5"
                        }),
                        d("circle", {
                          cx: "15",
                          cy: "17",
                          r: "1.5"
                        })
                      ], -1)
                    ])], 40, Ap),
                    d("span", Ip, [
                      st(Z(T(w.entityId)) + " ", 1),
                      d("span", Lp, Z(w.entityId.split(".")[0]), 1)
                    ]),
                    d("button", {
                      class: "icon-btn icon-btn--danger",
                      onClick: (X) => W(ke)(xe.value, w.entityId)
                    }, [...m[39] || (m[39] = [
                      d("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "14",
                        height: "14"
                      }, [
                        d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                      ], -1)
                    ])], 8, Hp)
                  ], 2))
                ], 64);
              }), 128)),
              m[44] || (m[44] = d("div", {
                class: "divider",
                style: { "margin-top": "1.5rem" }
              }, null, -1)),
              d("button", {
                class: "danger-btn",
                onClick: ss
              }, [...m[40] || (m[40] = [
                d("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "15",
                  height: "15"
                }, [
                  d("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
                ], -1),
                st(" Delete Tab ", -1)
              ])])
            ], 2)) : Te.value === "entity-picker" ? (g(), _("div", Rp, [
              d("div", jp, [
                (g(), _("svg", Fp, [...m[45] || (m[45] = [
                  d("path", { d: "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }, null, -1)
                ])])),
                Ht(d("input", {
                  class: "search-input",
                  "onUpdate:modelValue": m[5] || (m[5] = (w) => gt.value = w),
                  placeholder: "Search entities…",
                  autofocus: ""
                }, null, 512), [
                  [Tu, gt.value]
                ])
              ]),
              d("div", Bp, [
                d("button", {
                  class: de(["domain-chip", { "domain-chip--on": It.value === "" }]),
                  onClick: m[6] || (m[6] = (w) => It.value = "")
                }, "All", 2),
                (g(!0), _(Y, null, we(E.value, (w) => (g(), _("button", {
                  key: w,
                  class: de(["domain-chip", { "domain-chip--on": It.value === w }]),
                  onClick: (H) => It.value = w
                }, Z(w), 11, zp))), 128))
              ]),
              d("div", Up, Z(u.value.size) + " selected", 1),
              (g(!0), _(Y, null, we(S.value, (w) => (g(), _("div", {
                key: w.entity_id,
                class: "entity-row picker-row",
                onClick: (H) => x(w.entity_id)
              }, [
                d("span", {
                  class: de(["check-box", { "check-box--on": u.value.has(w.entity_id) }])
                }, [
                  u.value.has(w.entity_id) ? (g(), _("svg", Wp, [...m[46] || (m[46] = [
                    d("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }, null, -1)
                  ])])) : ne("", !0)
                ], 2),
                d("span", qp, [
                  st(Z(w.attributes.friendly_name ?? w.entity_id) + " ", 1),
                  d("span", Yp, Z(w.entity_id), 1)
                ]),
                d("span", Gp, Z(w.entity_id.split(".")[0]), 1)
              ], 8, Kp))), 128))
            ])) : ne("", !0)
          ])
        ])) : ne("", !0)
      ]),
      _: 1
    }));
  }
}, Xp = /* @__PURE__ */ ze(Jp, [["__scopeId", "data-v-47d2b082"]]), Zp = { class: "app" }, Qp = { class: "scroll-area" }, eh = {
  key: 0,
  class: "empty-state"
}, th = { class: "tabbar" }, nh = ["onClick"], sh = {
  class: "tab-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, oh = ["d"], ih = { class: "tab-label" }, rh = {
  __name: "App",
  setup(e) {
    const t = et("hass"), { hasClimate: n, hasSwitches: s, hasDevices: o, hasPresence: i } = bn(t), { customTabs: r, customTabsEnabled: l } = wl(), c = /* @__PURE__ */ be("lights"), p = /* @__PURE__ */ be(!1);
    return Ue(l, (f) => {
      var a;
      c.value = f ? ((a = r.value[0]) == null ? void 0 : a.id) ?? "lights" : "lights";
    }), Ue(r, (f) => {
      var a;
      l.value && !f.find((h) => h.id === c.value) && (c.value = ((a = f[0]) == null ? void 0 : a.id) ?? "");
    }), (f, a) => (g(), _("div", Zp, [
      d("div", Qp, [
        W(l) ? (g(), _(Y, { key: 1 }, [
          (g(!0), _(Y, null, we(W(r), (h) => Ht((g(), Ge(Kd, {
            key: h.id,
            tab: h
          }, null, 8, ["tab"])), [
            [Yt, c.value === h.id]
          ])), 128)),
          W(r).length ? ne("", !0) : (g(), _("div", eh, [...a[8] || (a[8] = [
            st(" No tabs configured — tap ", -1),
            d("strong", null, "Settings", -1),
            st(" to add some. ", -1)
          ])]))
        ], 64)) : (g(), _(Y, { key: 0 }, [
          Ht(Me(ef, null, null, 512), [
            [Yt, c.value === "lights"]
          ]),
          Ht(Me(_f, null, null, 512), [
            [Yt, c.value === "media"]
          ]),
          Ht(Me(jf, null, null, 512), [
            [Yt, c.value === "climate"]
          ]),
          Ht(Me(Zf, null, null, 512), [
            [Yt, c.value === "switches"]
          ]),
          Ht(Me(Ed, null, null, 512), [
            [Yt, c.value === "devices"]
          ]),
          Ht(Me(Pd, null, null, 512), [
            [Yt, c.value === "presence"]
          ])
        ], 64))
      ]),
      d("nav", th, [
        W(l) ? (g(!0), _(Y, { key: 1 }, we(W(r), (h) => (g(), _("button", {
          key: h.id,
          class: "tab",
          style: Oe(c.value === h.id ? { color: h.color } : {}),
          onClick: (y) => c.value = h.id
        }, [
          (g(), _("svg", sh, [
            d("path", {
              d: W(Hn)[h.icon] ?? W(Hn).bulb
            }, null, 8, oh)
          ])),
          d("span", ih, Z(h.name), 1)
        ], 12, nh))), 128)) : (g(), _(Y, { key: 0 }, [
          d("button", {
            class: de(["tab", { "tab--lights": c.value === "lights" }]),
            onClick: a[0] || (a[0] = (h) => c.value = "lights")
          }, [...a[9] || (a[9] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 5 9a7 7 0 0 1 7-7zm2.5 17h-5v1.5A1.5 1.5 0 0 0 11 22h2a1.5 1.5 0 0 0 1.5-1.5V19z" })
            ], -1),
            d("span", { class: "tab-label" }, "Lights", -1)
          ])], 2),
          d("button", {
            class: de(["tab", { "tab--media": c.value === "media" }]),
            onClick: a[1] || (a[1] = (h) => c.value = "media")
          }, [...a[10] || (a[10] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" })
            ], -1),
            d("span", { class: "tab-label" }, "Media", -1)
          ])], 2),
          W(n) ? (g(), _("button", {
            key: 0,
            class: de(["tab", { "tab--climate": c.value === "climate" }]),
            onClick: a[2] || (a[2] = (h) => c.value = "climate")
          }, [...a[11] || (a[11] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M13 11.1V7h-2v4.1c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3.08 3 3.08s3-1.43 3-3.08c0-1.31-.84-2.41-2-2.82zM12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" })
            ], -1),
            d("span", { class: "tab-label" }, "Climate", -1)
          ])], 2)) : ne("", !0),
          W(s) ? (g(), _("button", {
            key: 1,
            class: de(["tab", { "tab--switches": c.value === "switches" }]),
            onClick: a[3] || (a[3] = (h) => c.value = "switches")
          }, [...a[12] || (a[12] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" })
            ], -1),
            d("span", { class: "tab-label" }, "Switches", -1)
          ])], 2)) : ne("", !0),
          W(o) ? (g(), _("button", {
            key: 2,
            class: de(["tab", { "tab--devices": c.value === "devices" }]),
            onClick: a[4] || (a[4] = (h) => c.value = "devices")
          }, [...a[13] || (a[13] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })
            ], -1),
            d("span", { class: "tab-label" }, "Devices", -1)
          ])], 2)) : ne("", !0),
          W(i) ? (g(), _("button", {
            key: 3,
            class: de(["tab", { "tab--presence": c.value === "presence" }]),
            onClick: a[5] || (a[5] = (h) => c.value = "presence")
          }, [...a[14] || (a[14] = [
            d("svg", {
              class: "tab-icon",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              d("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
            ], -1),
            d("span", { class: "tab-label" }, "People", -1)
          ])], 2)) : ne("", !0)
        ], 64)),
        d("button", {
          class: "tab tab--settings",
          onClick: a[6] || (a[6] = (h) => p.value = !0)
        }, [...a[15] || (a[15] = [
          d("svg", {
            class: "tab-icon",
            viewBox: "0 0 24 24",
            fill: "currentColor"
          }, [
            d("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96a6.97 6.97 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" })
          ], -1),
          d("span", { class: "tab-label" }, "Settings", -1)
        ])])
      ]),
      Me(Xp, {
        open: p.value,
        onClose: a[7] || (a[7] = (h) => p.value = !1)
      }, null, 8, ["open"])
    ]));
  }
}, lh = /* @__PURE__ */ ze(rh, [["__scopeId", "data-v-74486075"]]);
class ch extends HTMLElement {
  constructor() {
    super(), this._hassRef = /* @__PURE__ */ be(null), this._app = null;
  }
  connectedCallback() {
    const t = document.createElement("div");
    t.style.cssText = "height:100%;width:100%;", this.appendChild(t), this._app = Lu(lh), this._app.provide("hass", this._hassRef), this._app.mount(t);
  }
  disconnectedCallback() {
    var t;
    (t = this._app) == null || t.unmount(), this._app = null;
  }
  // Called by HA whenever the hass object updates (state changes, etc.)
  set hass(t) {
    this._hassRef.value = t;
  }
}
customElements.define("remote-display-panel", ch);
