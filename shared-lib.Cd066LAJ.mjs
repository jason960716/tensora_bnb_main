import {
  __esmMin as e
} from "./rolldown-runtime.ao81ExY3.mjs";
import {
  Y as t,
  ae as n,
  e as r,
  init_jsx_runtime as i,
  init_npm_react_18_2 as a,
  init_ssg_sandbox_shims as o,
  npm_react_18_2_exports as s,
  p as c,
  pe as l,
  re as u,
  se as d,
  u as f,
  ue as p,
  window as m,
  x as h,
  ye as g
} from "./react.BIFsWNFj.mjs";
import {
  LayoutGroup as _,
  MotionConfigContext as v,
  init_framer_motion_H2BOCUWP as y,
  motion as b
} from "./motion.B__zowhw.mjs";
import {
  ComponentViewportProvider as x,
  Container as S,
  ControlType as C,
  GeneratedComponentContext as ee,
  Image3 as te,
  Link as w,
  PropertyOverrides2 as T,
  RenderTarget as E,
  RichText as D,
  SVG as O,
  SmartComponentScopedContainer as ne,
  addFonts as re,
  addPropertyControls as ie,
  cx as ae,
  fontStore as k,
  getFonts as oe,
  getFontsFromSharedStyle as se,
  getLoadingLazyAtYPosition as A,
  init_framer_6OU4CHSM as j,
  useActiveVariantCallback as ce,
  useComponentViewport as le,
  useCustomCursors as ue,
  useHydratedBreakpointVariants as de,
  useIsOnFramerCanvas as fe,
  useLocaleInfo as pe,
  useMetadata as me,
  useRouteElementId as he,
  useVariantState as ge,
  withCSS as _e,
  withFX as ve,
  withOptimizedAppearEffect as ye
} from "./framer.DcQS0xr4.mjs";

function M(e) {
  for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
  return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
}

function be(e) {
  return K.call(Xn, e) ? !0 : K.call(Yn, e) ? !1 : Jn.test(e) ? Xn[e] = !0 : (Yn[e] = !0, !1)
}

function N(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
}

function xe(e) {
  return e[1].toUpperCase()
}

function P(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = er.exec(e);
  if (t) {
    var n, r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue
      }
      i !== n && (r += e.substring(i, n)), i = n + 1, r += t
    }
    e = i === n ? r : r + e.substring(i, n)
  }
  return e
}

function Se(e, t) {
  return {
    insertionMode: e,
    selectedValue: t
  }
}

function Ce(e, t, n) {
  switch (t) {
    case `select`:
      return Se(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Se(2, null);
    case `math`:
      return Se(3, null);
    case `foreignObject`:
      return Se(1, null);
    case `table`:
      return Se(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Se(5, null);
    case `colgroup`:
      return Se(7, null);
    case `tr`:
      return Se(6, null)
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Se(1, null) : e
}

function we(e, t, n) {
  if (typeof n != `object`) throw Error(M(62));
  for (var r in t = !0, n)
    if (K.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = P(r);
          i = P((`` + i).trim())
        } else {
          a = r;
          var o = ir.get(a);
          o !== void 0 || (o = P(a.replace(tr, `-$1`).toLowerCase().replace(nr, `-ms-`)), ir.set(a, o)), a = o, i = typeof i == `number` ? i === 0 || K.call(Qn, r) ? `` + i : i + `px` : P((`` + i).trim())
        }
        t ? (t = !1, e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i)
      }
    } t || e.push(`"`)
}

function F(e, t, n, r) {
  switch (n) {
    case `style`:
      we(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return
  }
  if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
    if (t = q.hasOwnProperty(n) ? q[n] : null, t !== null) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, P(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, P(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, P(r), `"`);
          break;
        default:
          t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, P(r), `"`)
      }
    } else if (be(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (t = n.toLowerCase().slice(0, 5), t !== `data-` && t !== `aria-`) return
      }
      e.push(` `, n, `="`, P(r), `"`)
    }
  }
}

function Te(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(M(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(M(61));
    t = t.__html, t != null && e.push(`` + t)
  }
}

function Ee(e) {
  var t = ``;
  return qn.Children.forEach(e, (function (e) {
    e != null && (t += e)
  })), t
}

function De(e, t, n, r) {
  e.push(Oe(n));
  var i, a = n = null;
  for (i in t)
    if (K.call(t, i)) {
      var o = t[i];
      if (o != null) switch (i) {
        case `children`:
          n = o;
          break;
        case `dangerouslySetInnerHTML`:
          a = o;
          break;
        default:
          F(e, r, i, o)
      }
    } return e.push(`>`), Te(e, a, n), typeof n == `string` ? (e.push(P(n)), null) : n
}

function Oe(e) {
  var t = or.get(e);
  if (t === void 0) {
    if (!ar.test(e)) throw Error(M(65, e));
    t = `<` + e, or.set(e, t)
  }
  return t
}

function ke(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Oe(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (K.call(n, u)) {
          var s = n[u];
          if (s != null) switch (u) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `defaultValue`:
            case `value`:
              break;
            default:
              F(e, r, u, s)
          }
        } return e.push(`>`), Te(e, o, a), a;
    case `option`:
      o = i.selectedValue, e.push(Oe(`option`));
      var c = s = null,
        l = null,
        u = null;
      for (a in n)
        if (K.call(n, a)) {
          var d = n[a];
          if (d != null) switch (a) {
            case `children`:
              s = d;
              break;
            case `selected`:
              l = d;
              break;
            case `dangerouslySetInnerHTML`:
              u = d;
              break;
            case `value`:
              c = d;
            default:
              F(e, r, a, d)
          }
        } if (o != null)
        if (n = c === null ? Ee(s) : `` + c, rr(o)) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return e.push(`>`), Te(e, u, s), s;
    case `textarea`:
      for (s in e.push(Oe(`textarea`)), u = o = a = null, n)
        if (K.call(n, s) && (c = n[s], c != null)) switch (s) {
          case `children`:
            u = c;
            break;
          case `value`:
            a = c;
            break;
          case `defaultValue`:
            o = c;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(M(91));
          default:
            F(e, r, s, c)
        }
      if (a === null && o !== null && (a = o), e.push(`>`), u != null) {
        if (a != null) throw Error(M(92));
        if (rr(u) && 1 < u.length) throw Error(M(93));
        a = `` + u
      }
      return typeof a == `string` && a[0] === `
` && e.push(`
`), a !== null && e.push(P(`` + a)), null;
    case `input`:
      for (o in e.push(Oe(`input`)), c = u = s = a = null, n)
        if (K.call(n, o) && (l = n[o], l != null)) switch (o) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(M(399, `input`));
          case `defaultChecked`:
            c = l;
            break;
          case `defaultValue`:
            s = l;
            break;
          case `checked`:
            u = l;
            break;
          case `value`:
            a = l;
            break;
          default:
            F(e, r, o, l)
        }
      return u === null ? c !== null && F(e, r, `checked`, c) : F(e, r, `checked`, u), a === null ? s !== null && F(e, r, `value`, s) : F(e, r, `value`, a), e.push(`/>`), null;
    case `menuitem`:
      for (var f in e.push(Oe(`menuitem`)), n)
        if (K.call(n, f) && (a = n[f], a != null)) switch (f) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(M(400));
          default:
            F(e, r, f, a)
        }
      return e.push(`>`), null;
    case `title`:
      for (d in e.push(Oe(`title`)), a = null, n)
        if (K.call(n, d) && (o = n[d], o != null)) switch (d) {
          case `children`:
            a = o;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(M(434));
          default:
            F(e, r, d, o)
        }
      return e.push(`>`), a;
    case `listing`:
    case `pre`:
      for (c in e.push(Oe(t)), o = a = null, n)
        if (K.call(n, c) && (s = n[c], s != null)) switch (c) {
          case `children`:
            a = s;
            break;
          case `dangerouslySetInnerHTML`:
            o = s;
            break;
          default:
            F(e, r, c, s)
        }
      if (e.push(`>`), o != null) {
        if (a != null) throw Error(M(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(M(61));
        n = o.__html, n != null && (typeof n == `string` && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push(`` + n))
      }
      return typeof a == `string` && a[0] === `
` && e.push(`
`), a;
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in e.push(Oe(t)), n)
        if (K.call(n, p) && (a = n[p], a != null)) switch (p) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(M(399, t));
          default:
            F(e, r, p, a)
        }
      return e.push(`/>`), null;
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return De(e, n, t, r);
    case `html`:
      return i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), De(e, n, t, r);
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return De(e, n, t, r);
      for (l in e.push(Oe(t)), o = a = null, n)
        if (K.call(n, l) && (s = n[l], s != null)) switch (l) {
          case `children`:
            a = s;
            break;
          case `dangerouslySetInnerHTML`:
            o = s;
            break;
          case `style`:
            we(e, r, s);
            break;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
            break;
          default:
            be(l) && typeof s != `function` && typeof s != `symbol` && e.push(` `, l, `="`, P(s), `"`)
        }
      return e.push(`>`), Te(e, o, a), a
  }
}

function Ae(e, t, n) {
  if (e.push(`<!--$?--><template id="`), n === null) throw Error(M(395));
  return e.push(n), e.push(`"></template>`)
}

function je(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push(`<div hidden id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 2:
      return e.push(`<svg aria-hidden="true" style="display:none" id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 3:
      return e.push(`<math aria-hidden="true" style="display:none" id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 4:
      return e.push(`<table hidden id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 5:
      return e.push(`<table hidden><tbody id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 6:
      return e.push(`<table hidden><tr id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    case 7:
      return e.push(`<table hidden><colgroup id="`), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(`">`);
    default:
      throw Error(M(397))
  }
}

function Me(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(M(397))
  }
}

function Ne(e) {
  return JSON.stringify(e).replace(sr, (function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)
    }
  }))
}

function Pe(e, t) {
  return t = t === void 0 ? `` : t, {
    bootstrapChunks: [],
    startInlineScript: `<script>`,
    placeholderPrefix: t + `P:`,
    segmentPrefix: t + `S:`,
    boundaryPrefix: t + `B:`,
    idPrefix: t,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
    generateStaticMarkup: e
  }
}

function Fe(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(P(t)), !1) : (t === `` ? e = r : (r && e.push(`<!-- -->`), e.push(P(t)), e = !0), e)
}

function Ie(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case dr:
      return `Fragment`;
    case ur:
      return `Portal`;
    case pr:
      return `Profiler`;
    case fr:
      return `StrictMode`;
    case _r:
      return `Suspense`;
    case vr:
      return `SuspenseList`
  }
  if (typeof e == `object`) switch (e.$$typeof) {
    case hr:
      return (e.displayName || `Context`) + `.Consumer`;
    case mr:
      return (e._context.displayName || `Context`) + `.Provider`;
    case gr:
      var t = e.render;
      return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
    case yr:
      return t = e.displayName || null, t === null ? Ie(e.type) || `Memo` : t;
    case br:
      t = e._payload, e = e._init;
      try {
        return Ie(e(t))
      } catch {}
  }
  return null
}

function Le(e, t) {
  if (e = e.contextTypes, !e) return Er;
  var n, r = {};
  for (n in e) r[n] = t[n];
  return r
}

function Re(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(M(401))
    } else {
      if (n === null) throw Error(M(401));
      Re(e, n)
    }
    t.context._currentValue2 = t.value
  }
}

function ze(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && ze(e)
}

function Be(e) {
  var t = e.parent;
  t !== null && Be(t), e.context._currentValue2 = e.value
}

function Ve(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(M(402));
  e.depth === t.depth ? Re(e, t) : Ve(e, t)
}

function He(e, t) {
  var n = t.parent;
  if (n === null) throw Error(M(402));
  e.depth === n.depth ? Re(e, n) : He(e, n), t.context._currentValue2 = t.value
}

function Ue(e) {
  var t = Dr;
  t !== e && (t === null ? Be(e) : e === null ? ze(t) : t.depth === e.depth ? Re(t, e) : t.depth > e.depth ? Ve(t, e) : He(t, e), Dr = e)
}

function We(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  e.updater = Or, e.props = n, e.state = i;
  var a = {
    queue: [],
    replace: !1
  };
  e._reactInternals = a;
  var o = t.contextType;
  if (e.context = typeof o == `object` && o ? o._currentValue2 : r, o = t.getDerivedStateFromProps, typeof o == `function` && (o = o(n, i), i = o == null ? i : cr({}, i, o), e.state = i), typeof t.getDerivedStateFromProps != `function` && typeof e.getSnapshotBeforeUpdate != `function` && (typeof e.UNSAFE_componentWillMount == `function` || typeof e.componentWillMount == `function`))
    if (t = e.state, typeof e.componentWillMount == `function` && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(), t !== e.state && Or.enqueueReplaceState(e, e.state, null), a.queue !== null && 0 < a.queue.length)
      if (t = a.queue, o = a.replace, a.queue = null, a.replace = !1, o && t.length === 1) e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          s = typeof s == `function` ? s.call(e, a, n, r) : s, s != null && (i ? (i = !1, a = cr({}, a, s)) : cr(a, s))
        }
        e.state = a
      }
  else a.queue = null
}

function Ge(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Ar(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Ar(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
      id: 1 << 32 - Ar(t) + i | n << i | r,
      overflow: a + e
    }
  }
  return {
    id: 1 << a | n << i | r,
    overflow: e
  }
}

function Ke(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (jr(e) / Mr | 0) | 0
}

function qe(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
}

function Je() {
  if (Pr === null) throw Error(M(321));
  return Pr
}

function Ye() {
  if (0 < Vr) throw Error(M(312));
  return {
    memoizedState: null,
    queue: null,
    next: null
  }
}

function Xe() {
  return J === null ? Ir === null ? (Lr = !1, Ir = J = Ye()) : (Lr = !0, J = Ir) : J.next === null ? (Lr = !1, J = J.next = Ye()) : (Lr = !0, J = J.next), J
}

function Ze() {
  Fr = Pr = null, Rr = !1, Ir = null, Vr = 0, J = Br = null
}

function Qe(e, t) {
  return typeof t == `function` ? t(e) : t
}

function $e(e, t, n) {
  if (Pr = Je(), J = Xe(), Lr) {
    var r = J.queue;
    if (t = r.dispatch, Br !== null && (n = Br.get(r), n !== void 0)) {
      Br.delete(r), r = J.memoizedState;
      do r = e(r, n.action), n = n.next; while (n !== null);
      return J.memoizedState = r, [r, t]
    }
    return [J.memoizedState, t]
  }
  return e = e === Qe ? typeof t == `function` ? t() : t : n === void 0 ? t : n(t), J.memoizedState = e, e = J.queue = {
    last: null,
    dispatch: null
  }, e = e.dispatch = tt.bind(null, Pr, e), [J.memoizedState, e]
}

function et(e, t) {
  if (Pr = Je(), J = Xe(), t = t === void 0 ? null : t, J !== null) {
    var n = J.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
        else {
          for (var i = 0; i < r.length && i < t.length; i++)
            if (!Nr(t[i], r[i])) {
              r = !1;
              break e
            } r = !0
        }
      if (r) return n[0]
    }
  }
  return e = e(), J.memoizedState = [e, t], e
}

function tt(e, t, n) {
  if (25 <= Vr) throw Error(M(301));
  if (e === Pr)
    if (Rr = !0, e = {
        action: n,
        next: null
      }, Br === null && (Br = new Map), n = Br.get(t), n === void 0) Br.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e
    }
}

function nt() {
  throw Error(M(394))
}

function rt() {}

function it(e) {
  return console.error(e), null
}

function at() {}

function ot(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set;
  return t = {
    destination: null,
    responseState: t,
    progressiveChunkSize: r === void 0 ? 12800 : r,
    status: 0,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: u,
    pingedTasks: l,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: i === void 0 ? it : i,
    onAllReady: a === void 0 ? at : a,
    onShellReady: o === void 0 ? at : o,
    onShellError: s === void 0 ? at : s,
    onFatalError: c === void 0 ? at : c
  }, n = ct(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = st(t, e, null, n, u, Er, null, kr), l.push(e), t
}

function st(e, t, n, r, i, a, o, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      t.push(c), t.length === 1 && xt(e)
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s
  };
  return i.add(c), c
}

function ct(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a
  }
}

function lt(e, t) {
  if (e = e.onError(t), e != null && typeof e != `string`) throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` + typeof e + `" instead`);
  return e
}

function ut(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination === null ? (e.status = 1, e.fatalError = t) : (e.status = 2, e.destination.destroy(t))
}

function dt(e, t, n, r, i) {
  for (Pr = {}, Fr = t, zr = 0, e = n(r, i); Rr;) Rr = !1, zr = 0, Vr += 1, J = null, e = n(r, i);
  return Ze(), e
}

function ft(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in n = n.getChildContext(), n)
        if (!(s in a)) throw Error(M(108, Ie(r) || `Unknown`, s));
      r = cr({}, o, n)
    }
    t.legacyContext = r, I(e, t, i), t.legacyContext = o
  } else I(e, t, i)
}

function pt(e, t) {
  if (e && e.defaultProps) {
    for (var n in t = cr({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function mt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Le(n, t.legacyContext);
      var a = n.contextType;
      a = new n(r, typeof a == `object` && a ? a._currentValue2 : i), We(a, n, r, i), ft(e, t, a, n)
    } else {
      a = Le(n, t.legacyContext), i = dt(e, t, n, r, a);
      var o = zr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0) We(i, n, r, a), ft(e, t, i, n);
      else if (o) {
        r = t.treeContext, t.treeContext = Ge(r, 1, 0);
        try {
          I(e, t, i)
        } finally {
          t.treeContext = r
        }
      } else I(e, t, i)
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Cr:
        case Sr:
        case fr:
        case pr:
        case dr:
          I(e, t, r.children);
          return;
        case vr:
          I(e, t, r.children);
          return;
        case xr:
          throw Error(M(343));
        case _r:
          e: {
            n = t.blockedBoundary,
            i = t.blockedSegment,
            a = r.fallback,
            r = r.children,
            o = new Set;
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null
              },
              c = ct(e, i.chunks.length, s, i.formatContext, !1, !1);i.children.push(c),
            i.lastPushedText = !1;
            var l = ct(e, 0, null, i.formatContext, !1, !1);l.parentFlushed = !0,
            t.blockedBoundary = s,
            t.blockedSegment = l;
            try {
              if (gt(e, t, r), e.responseState.generateStaticMarkup || l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`), l.status = 1, yt(s, l), s.pendingTasks === 0) break e
            } catch (t) {
              l.status = 4, s.forceClientRender = !0, s.errorDigest = lt(e, t)
            } finally {
              t.blockedBoundary = n, t.blockedSegment = i
            }
            t = st(e, a, n, c, o, t.legacyContext, t.context, t.treeContext),
            e.pingedTasks.push(t)
          }
          return
      }
      if (typeof n == `object` && n) switch (n.$$typeof) {
        case gr:
          if (r = dt(e, t, n.render, r, i), zr !== 0) {
            n = t.treeContext, t.treeContext = Ge(n, 1, 0);
            try {
              I(e, t, r)
            } finally {
              t.treeContext = n
            }
          } else I(e, t, r);
          return;
        case yr:
          n = n.type, r = pt(n, r), mt(e, t, n, r, i);
          return;
        case mr:
          if (i = r.children, n = n._context, r = r.value, a = n._currentValue2, n._currentValue2 = r, o = Dr, Dr = r = {
              parent: o,
              depth: o === null ? 0 : o.depth + 1,
              context: n,
              parentValue: a,
              value: r
            }, t.context = r, I(e, t, i), e = Dr, e === null) throw Error(M(403));
          r = e.parentValue, e.context._currentValue2 = r === wr ? e.context._defaultValue : r, e = Dr = e.parent, t.context = e;
          return;
        case hr:
          r = r.children, r = r(n._currentValue2), I(e, t, r);
          return;
        case br:
          i = n._init, n = i(n._payload), r = pt(n, r), mt(e, t, n, r, void 0);
          return
      }
      throw Error(M(130, n == null ? n : typeof n, ``))
    }
    switch (i = t.blockedSegment, a = ke(i.chunks, n, r, e.responseState, i.formatContext), i.lastPushedText = !1, o = i.formatContext, i.formatContext = Ce(o, n, r), gt(e, t, a), i.formatContext = o, n) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`)
    }
    i.lastPushedText = !1
  }
}

function I(e, t, n) {
  if (t.node = n, typeof n == `object` && n) {
    switch (n.$$typeof) {
      case lr:
        mt(e, t, n.type, n.props, n.ref);
        return;
      case ur:
        throw Error(M(257));
      case br:
        var r = n._init;
        n = r(n._payload), I(e, t, n);
        return
    }
    if (rr(n)) {
      ht(e, t, n);
      return
    }
    if (typeof n != `object` || !n ? r = null : (r = Tr && n[Tr] || n[`@@iterator`], r = typeof r == `function` ? r : null), r &&= r.call(n)) {
      if (n = r.next(), !n.done) {
        var i = [];
        do i.push(n.value), n = r.next(); while (!n.done);
        ht(e, t, i)
      }
      return
    }
    throw e = Object.prototype.toString.call(n), Error(M(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e))
  }
  typeof n == `string` ? (r = t.blockedSegment, r.lastPushedText = Fe(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == `number` && (r = t.blockedSegment, r.lastPushedText = Fe(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText))
}

function ht(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Ge(a, r, i);
    try {
      gt(e, t, n[i])
    } finally {
      t.treeContext = a
    }
  }
}

function gt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return I(e, t, n)
  } catch (c) {
    if (Ze(), typeof c != `object` || !c || typeof c.then != `function`) throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Ue(a), c;
    n = c;
    var o = t.blockedSegment,
      s = ct(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    o.children.push(s), o.lastPushedText = !1, e = st(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Ue(a)
  }
}

function _t(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, bt(this, t, e)
}

function vt(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(M(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach((function (e) {
    return vt(e, t, n)
  })), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()))
}

function yt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && yt(e, n)
  } else e.completedSegments.push(t)
}

function bt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(M(389));
      e.completedRootSegment = n
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = at, t = e.onShellReady, t())
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && yt(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(_t, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (yt(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e())
}

function xt(e) {
  if (e.status !== 2) {
    var t = Dr,
      n = Wr.current;
    Wr.current = Hr;
    var r = Ur;
    Ur = e.responseState;
    try {
      var i, a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          Ue(o.context);
          try {
            I(s, o, o.node), s.responseState.generateStaticMarkup || c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`), o.abortSet.delete(o), c.status = 1, bt(s, o.blockedBoundary, c)
          } catch (e) {
            if (Ze(), typeof e == `object` && e && typeof e.then == `function`) {
              var l = o.ping;
              e.then(l, l)
            } else {
              o.abortSet.delete(o), c.status = 4;
              var u = o.blockedBoundary,
                d = e,
                f = lt(s, d);
              if (u === null ? ut(s, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = f, u.parentFlushed && s.clientRenderedBoundaries.push(u))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var p = s.onAllReady;
                p()
              }
            }
          }
        }
      }
      a.splice(0, i), e.destination !== null && Dt(e, e.destination)
    } catch (t) {
      lt(e, t), ut(e, t)
    } finally {
      Ur = r, Wr.current = n, n === Hr && Ue(t)
    }
  }
}

function St(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push(`<template id="`), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push(`"></template>`);
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Ct(e, t, i)
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return a < r.length && (i = t.push(r[a])), i;
    default:
      throw Error(M(390))
  }
}

function Ct(e, t, n) {
  var r = n.boundary;
  if (r === null) return St(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push(`<!--$!-->`), t.push(`<template`), r && (t.push(` data-dgst="`), r = P(r), t.push(r), t.push(`"`)), t.push(`></template>`)), St(e, t, n), e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return i = i.boundaryPrefix + a.toString(16), r = r.id = i, Ae(t, e.responseState, r), St(e, t, n), t.push(`<!--/$-->`)
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Ae(t, e.responseState, r.id), St(e, t, n), t.push(`<!--/$-->`);
  if (e.responseState.generateStaticMarkup || t.push(`<!--$-->`), n = r.completedSegments, n.length !== 1) throw Error(M(391));
  return Ct(e, t, n[0]), e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`), e
}

function wt(e, t, n) {
  return je(t, e.responseState, n.formatContext, n.id), Ct(e, t, n), Me(t, n.formatContext)
}

function Tt(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Et(e, t, n, r[i]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push(`$RC("`) : (e.sentCompleteBoundaryFunction = !0, t.push(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`)), r === null) throw Error(M(395));
  return n = n.toString(16), t.push(r), t.push(`","`), t.push(e.segmentPrefix), t.push(n), t.push(`")<\/script>`)
}

function Et(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(M(392));
    return wt(e, t, r)
  }
  return wt(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push(`$RS("`) : (e.sentCompleteSegmentFunction = !0, t.push(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)), t.push(e.segmentPrefix), i = i.toString(16), t.push(i), t.push(`","`), t.push(e.placeholderPrefix), t.push(i), t.push(`")<\/script>`)
}

function Dt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Ct(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n])
    }
    var i, a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push(`$RX("`) : (s.sentClientRenderFunction = !0, r.push(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`)), c === null) throw Error(M(395));
      if (r.push(c), r.push(`"`), l || u || d) {
        r.push(`,`);
        var f = Ne(l || ``);
        r.push(f)
      }
      if (u || d) {
        r.push(`,`);
        var p = Ne(u || ``);
        r.push(p)
      }
      if (d) {
        r.push(`,`);
        var m = Ne(d);
        r.push(m)
      }
      if (!r.push(`)<\/script>`)) {
        e.destination = null, i++, a.splice(0, i);
        return
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!Tt(e, t, h[i])) {
        e.destination = null, i++, h.splice(0, i);
        return
      } h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        a = e,
        o = t;
        var v = _.completedSegments;
        for (s = 0; s < v.length; s++)
          if (!Et(a, o, _, v[s])) {
            s++, v.splice(0, s);
            var y = !1;
            break e
          } v.splice(0, s),
        y = !0
      }
      if (!y) {
        e.destination = null, i++, g.splice(0, i);
        return
      }
    }
    g.splice(0, i);
    var b = e.completedBoundaries;
    for (i = 0; i < b.length; i++)
      if (!Tt(e, t, b[i])) {
        e.destination = null, i++, b.splice(0, i);
        return
      } b.splice(0, i)
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null)
  }
}

function Ot(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach((function (n) {
      return vt(n, e, t)
    })), n.clear(), e.destination !== null && Dt(e, e.destination)
  } catch (t) {
    lt(e, t), ut(e, t)
  }
}

function kt() {}

function At(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return e !== null && (o += e), !0
      },
      destroy: function (e) {
        i = !0, a = e
      }
    },
    c = !1;
  if (e = ot(e, Pe(n, t ? t.identifierPrefix : void 0), {
      insertionMode: 1,
      selectedValue: null
    }, 1 / 0, kt, void 0, (function () {
      c = !0
    }), void 0, void 0), xt(e), Ot(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Dt(e, s)
    } catch (t) {
      lt(e, t), ut(e, t)
    }
  }
  if (i) throw a;
  if (!c) throw Error(M(426));
  return o
}

function L(e) {
  for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
  return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
}

function R(e, t) {
  if (t.length !== 0)
    if (512 < t.length) 0 < X && (e.enqueue(new Uint8Array(Y.buffer, 0, X)), Y = new Uint8Array(512), X = 0), e.enqueue(t);
    else {
      var n = Y.length - X;
      n < t.length && (n === 0 ? e.enqueue(Y) : (Y.set(t.subarray(0, n), X), e.enqueue(Y), t = t.subarray(n)), Y = new Uint8Array(512), X = 0), Y.set(t, X), X += t.length
    }
}

function z(e, t) {
  return R(e, t), !0
}

function jt(e) {
  Y && 0 < X && (e.enqueue(new Uint8Array(Y.buffer, 0, X)), Y = null, X = 0)
}

function B(e) {
  return Jr.encode(e)
}

function V(e) {
  return Jr.encode(e)
}

function Mt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close()
}

function Nt(e) {
  return Z.call(Zr, e) ? !0 : Z.call(Xr, e) ? !1 : Yr.test(e) ? Zr[e] = !0 : (Xr[e] = !0, !1)
}

function H(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
}

function Pt(e) {
  return e[1].toUpperCase()
}

function U(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ti.exec(e);
  if (t) {
    var n, r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue
      }
      i !== n && (r += e.substring(i, n)), i = n + 1, r += t
    }
    e = i === n ? r : r + e.substring(i, n)
  }
  return e
}

function Ft(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r
}

function It(e, t, n, r, i) {
  e = e === void 0 ? `` : e, t = t === void 0 ? ai : V(`<script nonce="` + U(t) + `">`);
  var a = [];
  if (n !== void 0 && a.push(t, B((`` + n).replace(ui, Ft)), oi), r !== void 0)
    for (n = 0; n < r.length; n++) a.push(si, B(U(r[n])), li);
  if (i !== void 0)
    for (r = 0; r < i.length; r++) a.push(ci, B(U(i[r])), li);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: V(e + `P:`),
    segmentPrefix: V(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1
  }
}

function Lt(e, t) {
  return {
    insertionMode: e,
    selectedValue: t
  }
}

function Rt(e) {
  return Lt(e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0, null)
}

function zt(e, t, n) {
  switch (t) {
    case `select`:
      return Lt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Lt(2, null);
    case `math`:
      return Lt(3, null);
    case `foreignObject`:
      return Lt(1, null);
    case `table`:
      return Lt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Lt(5, null);
    case `colgroup`:
      return Lt(7, null);
    case `tr`:
      return Lt(6, null)
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Lt(1, null) : e
}

function Bt(e, t, n, r) {
  return t === `` ? r : (r && e.push(di), e.push(B(U(t))), !0)
}

function Vt(e, t, n) {
  if (typeof n != `object`) throw Error(L(62));
  for (var r in t = !0, n)
    if (Z.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = B(U(r));
          i = B(U((`` + i).trim()))
        } else {
          a = r;
          var o = fi.get(a);
          o !== void 0 || (o = V(U(a.replace(ni, `-$1`).toLowerCase().replace(ri, `-ms-`))), fi.set(a, o)), a = o, i = typeof i == `number` ? i === 0 || Z.call($r, r) ? B(`` + i) : B(i + `px`) : B(U((`` + i).trim()))
        }
        t ? (t = !1, e.push(pi, a, mi, i)) : e.push(hi, a, mi, i)
      }
    } t || e.push(vi)
}

function W(e, t, n, r) {
  switch (n) {
    case `style`:
      Vt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return
  }
  if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
    if (t = Q.hasOwnProperty(n) ? Q[n] : null, t !== null) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return
      }
      switch (n = B(t.attributeName), t.type) {
        case 3:
          r && e.push(gi, n, yi);
          break;
        case 4:
          !0 === r ? e.push(gi, n, yi) : !1 !== r && e.push(gi, n, _i, B(U(r)), vi);
          break;
        case 5:
          isNaN(r) || e.push(gi, n, _i, B(U(r)), vi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(gi, n, _i, B(U(r)), vi);
          break;
        default:
          t.sanitizeURL && (r = `` + r), e.push(gi, n, _i, B(U(r)), vi)
      }
    } else if (Nt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (t = n.toLowerCase().slice(0, 5), t !== `data-` && t !== `aria-`) return
      }
      e.push(gi, B(n), _i, B(U(r)), vi)
    }
  }
}

function Ht(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(L(61));
    t = t.__html, t != null && e.push(B(`` + t))
  }
}

function Ut(e) {
  var t = ``;
  return qr.Children.forEach(e, (function (e) {
    e != null && (t += e)
  })), t
}

function Wt(e, t, n, r) {
  e.push(Gt(n));
  var i, a = n = null;
  for (i in t)
    if (Z.call(t, i)) {
      var o = t[i];
      if (o != null) switch (i) {
        case `children`:
          n = o;
          break;
        case `dangerouslySetInnerHTML`:
          a = o;
          break;
        default:
          W(e, r, i, o)
      }
    } return e.push(bi), Ht(e, a, n), typeof n == `string` ? (e.push(B(U(n))), null) : n
}

function Gt(e) {
  var t = Ti.get(e);
  if (t === void 0) {
    if (!wi.test(e)) throw Error(L(65, e));
    t = V(`<` + e), Ti.set(e, t)
  }
  return t
}

function Kt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Gt(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (Z.call(n, u)) {
          var s = n[u];
          if (s != null) switch (u) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `defaultValue`:
            case `value`:
              break;
            default:
              W(e, r, u, s)
          }
        } return e.push(bi), Ht(e, o, a), a;
    case `option`:
      o = i.selectedValue, e.push(Gt(`option`));
      var c = s = null,
        l = null,
        u = null;
      for (a in n)
        if (Z.call(n, a)) {
          var d = n[a];
          if (d != null) switch (a) {
            case `children`:
              s = d;
              break;
            case `selected`:
              l = d;
              break;
            case `dangerouslySetInnerHTML`:
              u = d;
              break;
            case `value`:
              c = d;
            default:
              W(e, r, a, d)
          }
        } if (o != null)
        if (n = c === null ? Ut(s) : `` + c, ii(o)) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Si);
              break
            }
        } else `` + o === n && e.push(Si);
      else l && e.push(Si);
      return e.push(bi), Ht(e, u, s), s;
    case `textarea`:
      for (s in e.push(Gt(`textarea`)), u = o = a = null, n)
        if (Z.call(n, s) && (c = n[s], c != null)) switch (s) {
          case `children`:
            u = c;
            break;
          case `value`:
            a = c;
            break;
          case `defaultValue`:
            o = c;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(L(91));
          default:
            W(e, r, s, c)
        }
      if (a === null && o !== null && (a = o), e.push(bi), u != null) {
        if (a != null) throw Error(L(92));
        if (ii(u) && 1 < u.length) throw Error(L(93));
        a = `` + u
      }
      return typeof a == `string` && a[0] === `
` && e.push(Ci), a !== null && e.push(B(U(`` + a))), null;
    case `input`:
      for (o in e.push(Gt(`input`)), c = u = s = a = null, n)
        if (Z.call(n, o) && (l = n[o], l != null)) switch (o) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(L(399, `input`));
          case `defaultChecked`:
            c = l;
            break;
          case `defaultValue`:
            s = l;
            break;
          case `checked`:
            u = l;
            break;
          case `value`:
            a = l;
            break;
          default:
            W(e, r, o, l)
        }
      return u === null ? c !== null && W(e, r, `checked`, c) : W(e, r, `checked`, u), a === null ? s !== null && W(e, r, `value`, s) : W(e, r, `value`, a), e.push(xi), null;
    case `menuitem`:
      for (var f in e.push(Gt(`menuitem`)), n)
        if (Z.call(n, f) && (a = n[f], a != null)) switch (f) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(L(400));
          default:
            W(e, r, f, a)
        }
      return e.push(bi), null;
    case `title`:
      for (d in e.push(Gt(`title`)), a = null, n)
        if (Z.call(n, d) && (o = n[d], o != null)) switch (d) {
          case `children`:
            a = o;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(L(434));
          default:
            W(e, r, d, o)
        }
      return e.push(bi), a;
    case `listing`:
    case `pre`:
      for (c in e.push(Gt(t)), o = a = null, n)
        if (Z.call(n, c) && (s = n[c], s != null)) switch (c) {
          case `children`:
            a = s;
            break;
          case `dangerouslySetInnerHTML`:
            o = s;
            break;
          default:
            W(e, r, c, s)
        }
      if (e.push(bi), o != null) {
        if (a != null) throw Error(L(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(L(61));
        n = o.__html, n != null && (typeof n == `string` && 0 < n.length && n[0] === `
` ? e.push(Ci, B(n)) : e.push(B(`` + n)))
      }
      return typeof a == `string` && a[0] === `
` && e.push(Ci), a;
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in e.push(Gt(t)), n)
        if (Z.call(n, p) && (a = n[p], a != null)) switch (p) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(L(399, t));
          default:
            W(e, r, p, a)
        }
      return e.push(xi), null;
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Wt(e, n, t, r);
    case `html`:
      return i.insertionMode === 0 && e.push(Ei), Wt(e, n, t, r);
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Wt(e, n, t, r);
      for (l in e.push(Gt(t)), o = a = null, n)
        if (Z.call(n, l) && (s = n[l], s != null)) switch (l) {
          case `children`:
            a = s;
            break;
          case `dangerouslySetInnerHTML`:
            o = s;
            break;
          case `style`:
            Vt(e, r, s);
            break;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
            break;
          default:
            Nt(l) && typeof s != `function` && typeof s != `symbol` && e.push(gi, B(l), _i, B(U(s)), vi)
        }
      return e.push(bi), Ht(e, o, a), a
  }
}

function qt(e, t, n) {
  if (R(e, Mi), n === null) throw Error(L(395));
  return R(e, n), z(e, Ni)
}

function Jt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return R(e, Bi), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, Vi);
    case 2:
      return R(e, Ui), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, Wi);
    case 3:
      return R(e, Ki), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, qi);
    case 4:
      return R(e, Yi), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, Xi);
    case 5:
      return R(e, Qi), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, $i);
    case 6:
      return R(e, ta), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, na);
    case 7:
      return R(e, ia), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, aa);
    default:
      throw Error(L(397))
  }
}

function Yt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return z(e, Hi);
    case 2:
      return z(e, Gi);
    case 3:
      return z(e, Ji);
    case 4:
      return z(e, Zi);
    case 5:
      return z(e, ea);
    case 6:
      return z(e, ra);
    case 7:
      return z(e, oa);
    default:
      throw Error(L(397))
  }
}

function Xt(e) {
  return JSON.stringify(e).replace(ba, (function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)
    }
  }))
}

function Zt(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case wa:
      return `Fragment`;
    case Ca:
      return `Portal`;
    case Ea:
      return `Profiler`;
    case Ta:
      return `StrictMode`;
    case Aa:
      return `Suspense`;
    case ja:
      return `SuspenseList`
  }
  if (typeof e == `object`) switch (e.$$typeof) {
    case Oa:
      return (e.displayName || `Context`) + `.Consumer`;
    case Da:
      return (e._context.displayName || `Context`) + `.Provider`;
    case ka:
      var t = e.render;
      return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
    case Ma:
      return t = e.displayName || null, t === null ? Zt(e.type) || `Memo` : t;
    case Na:
      t = e._payload, e = e._init;
      try {
        return Zt(e(t))
      } catch {}
  }
  return null
}

function Qt(e, t) {
  if (e = e.contextTypes, !e) return za;
  var n, r = {};
  for (n in e) r[n] = t[n];
  return r
}

function $t(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401))
    } else {
      if (n === null) throw Error(L(401));
      $t(e, n)
    }
    t.context._currentValue = t.value
  }
}

function en(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && en(e)
}

function tn(e) {
  var t = e.parent;
  t !== null && tn(t), e.context._currentValue = e.value
}

function nn(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? $t(e, t) : nn(e, t)
}

function rn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? $t(e, n) : rn(e, n), t.context._currentValue = t.value
}

function an(e) {
  var t = Ba;
  t !== e && (t === null ? tn(e) : e === null ? en(t) : t.depth === e.depth ? $t(t, e) : t.depth > e.depth ? nn(t, e) : rn(t, e), Ba = e)
}

function on(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  e.updater = Va, e.props = n, e.state = i;
  var a = {
    queue: [],
    replace: !1
  };
  e._reactInternals = a;
  var o = t.contextType;
  if (e.context = typeof o == `object` && o ? o._currentValue : r, o = t.getDerivedStateFromProps, typeof o == `function` && (o = o(n, i), i = o == null ? i : xa({}, i, o), e.state = i), typeof t.getDerivedStateFromProps != `function` && typeof e.getSnapshotBeforeUpdate != `function` && (typeof e.UNSAFE_componentWillMount == `function` || typeof e.componentWillMount == `function`))
    if (t = e.state, typeof e.componentWillMount == `function` && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(), t !== e.state && Va.enqueueReplaceState(e, e.state, null), a.queue !== null && 0 < a.queue.length)
      if (t = a.queue, o = a.replace, a.queue = null, a.replace = !1, o && t.length === 1) e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          s = typeof s == `function` ? s.call(e, a, n, r) : s, s != null && (i ? (i = !1, a = xa({}, a, s)) : xa(a, s))
        }
        e.state = a
      }
  else a.queue = null
}

function sn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Ua(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Ua(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
      id: 1 << 32 - Ua(t) + i | n << i | r,
      overflow: a + e
    }
  }
  return {
    id: 1 << a | n << i | r,
    overflow: e
  }
}

function cn(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Wa(e) / Ga | 0) | 0
}

function ln(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
}

function un() {
  if (qa === null) throw Error(L(321));
  return qa
}

function dn() {
  if (0 < eo) throw Error(L(312));
  return {
    memoizedState: null,
    queue: null,
    next: null
  }
}

function fn() {
  return $ === null ? Ya === null ? (Xa = !1, Ya = $ = dn()) : (Xa = !0, $ = Ya) : $.next === null ? (Xa = !1, $ = $.next = dn()) : (Xa = !0, $ = $.next), $
}

function pn() {
  Ja = qa = null, Za = !1, Ya = null, eo = 0, $ = $a = null
}

function mn(e, t) {
  return typeof t == `function` ? t(e) : t
}

function hn(e, t, n) {
  if (qa = un(), $ = fn(), Xa) {
    var r = $.queue;
    if (t = r.dispatch, $a !== null && (n = $a.get(r), n !== void 0)) {
      $a.delete(r), r = $.memoizedState;
      do r = e(r, n.action), n = n.next; while (n !== null);
      return $.memoizedState = r, [r, t]
    }
    return [$.memoizedState, t]
  }
  return e = e === mn ? typeof t == `function` ? t() : t : n === void 0 ? t : n(t), $.memoizedState = e, e = $.queue = {
    last: null,
    dispatch: null
  }, e = e.dispatch = _n.bind(null, qa, e), [$.memoizedState, e]
}

function gn(e, t) {
  if (qa = un(), $ = fn(), t = t === void 0 ? null : t, $ !== null) {
    var n = $.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
        else {
          for (var i = 0; i < r.length && i < t.length; i++)
            if (!Ka(t[i], r[i])) {
              r = !1;
              break e
            } r = !0
        }
      if (r) return n[0]
    }
  }
  return e = e(), $.memoizedState = [e, t], e
}

function _n(e, t, n) {
  if (25 <= eo) throw Error(L(301));
  if (e === qa)
    if (Za = !0, e = {
        action: n,
        next: null
      }, $a === null && ($a = new Map), n = $a.get(t), n === void 0) $a.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e
    }
}

function vn() {
  throw Error(L(394))
}

function yn() {}

function bn(e) {
  return console.error(e), null
}

function xn() {}

function Sn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set;
  return t = {
    destination: null,
    responseState: t,
    progressiveChunkSize: r === void 0 ? 12800 : r,
    status: 0,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: u,
    pingedTasks: l,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: i === void 0 ? bn : i,
    onAllReady: a === void 0 ? xn : a,
    onShellReady: o === void 0 ? xn : o,
    onShellError: s === void 0 ? xn : s,
    onFatalError: c === void 0 ? xn : c
  }, n = wn(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = Cn(t, e, null, n, u, za, null, Ha), l.push(e), t
}

function Cn(e, t, n, r, i, a, o, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      t.push(c), t.length === 1 && Ln(e)
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s
  };
  return i.add(c), c
}

function wn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a
  }
}

function Tn(e, t) {
  if (e = e.onError(t), e != null && typeof e != `string`) throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` + typeof e + `" instead`);
  return e
}

function En(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination === null ? (e.status = 1, e.fatalError = t) : (e.status = 2, Mt(e.destination, t))
}

function Dn(e, t, n, r, i) {
  for (qa = {}, Ja = t, Qa = 0, e = n(r, i); Za;) Za = !1, Qa = 0, eo += 1, $ = null, e = n(r, i);
  return pn(), e
}

function On(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in n = n.getChildContext(), n)
        if (!(s in a)) throw Error(L(108, Zt(r) || `Unknown`, s));
      r = xa({}, o, n)
    }
    t.legacyContext = r, G(e, t, i), t.legacyContext = o
  } else G(e, t, i)
}

function kn(e, t) {
  if (e && e.defaultProps) {
    for (var n in t = xa({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function An(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Qt(n, t.legacyContext);
      var a = n.contextType;
      a = new n(r, typeof a == `object` && a ? a._currentValue : i), on(a, n, r, i), On(e, t, a, n)
    } else {
      a = Qt(n, t.legacyContext), i = Dn(e, t, n, r, a);
      var o = Qa !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0) on(i, n, r, a), On(e, t, i, n);
      else if (o) {
        r = t.treeContext, t.treeContext = sn(r, 1, 0);
        try {
          G(e, t, i)
        } finally {
          t.treeContext = r
        }
      } else G(e, t, i)
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Ia:
        case Fa:
        case Ta:
        case Ea:
        case wa:
          G(e, t, r.children);
          return;
        case ja:
          G(e, t, r.children);
          return;
        case Pa:
          throw Error(L(343));
        case Aa:
          e: {
            n = t.blockedBoundary,
            i = t.blockedSegment,
            a = r.fallback,
            r = r.children,
            o = new Set;
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null
              },
              c = wn(e, i.chunks.length, s, i.formatContext, !1, !1);i.children.push(c),
            i.lastPushedText = !1;
            var l = wn(e, 0, null, i.formatContext, !1, !1);l.parentFlushed = !0,
            t.blockedBoundary = s,
            t.blockedSegment = l;
            try {
              if (Mn(e, t, r), l.lastPushedText && l.textEmbedded && l.chunks.push(di), l.status = 1, Fn(s, l), s.pendingTasks === 0) break e
            } catch (t) {
              l.status = 4, s.forceClientRender = !0, s.errorDigest = Tn(e, t)
            } finally {
              t.blockedBoundary = n, t.blockedSegment = i
            }
            t = Cn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext),
            e.pingedTasks.push(t)
          }
          return
      }
      if (typeof n == `object` && n) switch (n.$$typeof) {
        case ka:
          if (r = Dn(e, t, n.render, r, i), Qa !== 0) {
            n = t.treeContext, t.treeContext = sn(n, 1, 0);
            try {
              G(e, t, r)
            } finally {
              t.treeContext = n
            }
          } else G(e, t, r);
          return;
        case Ma:
          n = n.type, r = kn(n, r), An(e, t, n, r, i);
          return;
        case Da:
          if (i = r.children, n = n._context, r = r.value, a = n._currentValue, n._currentValue = r, o = Ba, Ba = r = {
              parent: o,
              depth: o === null ? 0 : o.depth + 1,
              context: n,
              parentValue: a,
              value: r
            }, t.context = r, G(e, t, i), e = Ba, e === null) throw Error(L(403));
          r = e.parentValue, e.context._currentValue = r === La ? e.context._defaultValue : r, e = Ba = e.parent, t.context = e;
          return;
        case Oa:
          r = r.children, r = r(n._currentValue), G(e, t, r);
          return;
        case Na:
          i = n._init, n = i(n._payload), r = kn(n, r), An(e, t, n, r, void 0);
          return
      }
      throw Error(L(130, n == null ? n : typeof n, ``))
    }
    switch (i = t.blockedSegment, a = Kt(i.chunks, n, r, e.responseState, i.formatContext), i.lastPushedText = !1, o = i.formatContext, i.formatContext = zt(o, n, r), Mn(e, t, a), i.formatContext = o, n) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Di, B(n), Oi)
    }
    i.lastPushedText = !1
  }
}

function G(e, t, n) {
  if (t.node = n, typeof n == `object` && n) {
    switch (n.$$typeof) {
      case Sa:
        An(e, t, n.type, n.props, n.ref);
        return;
      case Ca:
        throw Error(L(257));
      case Na:
        var r = n._init;
        n = r(n._payload), G(e, t, n);
        return
    }
    if (ii(n)) {
      jn(e, t, n);
      return
    }
    if (typeof n != `object` || !n ? r = null : (r = Ra && n[Ra] || n[`@@iterator`], r = typeof r == `function` ? r : null), r &&= r.call(n)) {
      if (n = r.next(), !n.done) {
        var i = [];
        do i.push(n.value), n = r.next(); while (!n.done);
        jn(e, t, i)
      }
      return
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e))
  }
  typeof n == `string` ? (r = t.blockedSegment, r.lastPushedText = Bt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == `number` && (r = t.blockedSegment, r.lastPushedText = Bt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText))
}

function jn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = sn(a, r, i);
    try {
      Mn(e, t, n[i])
    } finally {
      t.treeContext = a
    }
  }
}

function Mn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return G(e, t, n)
  } catch (c) {
    if (pn(), typeof c != `object` || !c || typeof c.then != `function`) throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, an(a), c;
    n = c;
    var o = t.blockedSegment,
      s = wn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    o.children.push(s), o.lastPushedText = !1, e = Cn(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, an(a)
  }
}

function Nn(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, In(this, t, e)
}

function Pn(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach((function (e) {
    return Pn(e, t, n)
  })), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()))
}

function Fn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Fn(e, n)
  } else e.completedSegments.push(t)
}

function In(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = xn, t = e.onShellReady, t())
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Fn(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Nn, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Fn(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e())
}

function Ln(e) {
  if (e.status !== 2) {
    var t = Ba,
      n = ro.current;
    ro.current = to;
    var r = no;
    no = e.responseState;
    try {
      var i, a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          an(o.context);
          try {
            G(s, o, o.node), c.lastPushedText && c.textEmbedded && c.chunks.push(di), o.abortSet.delete(o), c.status = 1, In(s, o.blockedBoundary, c)
          } catch (e) {
            if (pn(), typeof e == `object` && e && typeof e.then == `function`) {
              var l = o.ping;
              e.then(l, l)
            } else {
              o.abortSet.delete(o), c.status = 4;
              var u = o.blockedBoundary,
                d = e,
                f = Tn(s, d);
              if (u === null ? En(s, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = f, u.parentFlushed && s.clientRenderedBoundaries.push(u))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var p = s.onAllReady;
                p()
              }
            }
          }
        }
      }
      a.splice(0, i), e.destination !== null && Un(e, e.destination)
    } catch (t) {
      Tn(e, t), En(e, t)
    } finally {
      no = r, ro.current = n, n === to && an(t)
    }
  }
}

function Rn(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, R(t, ki), R(t, e.placeholderPrefix), e = B(r.toString(16)), R(t, e), z(t, Ai);
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) R(t, r[a]);
        i = zn(e, t, i)
      }
      for (; a < r.length - 1; a++) R(t, r[a]);
      return a < r.length && (i = z(t, r[a])), i;
    default:
      throw Error(L(390))
  }
}

function zn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Rn(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, z(t, Pi), R(t, Ii), r && (R(t, Ri), R(t, B(U(r))), R(t, Li)), z(t, zi), Rn(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      a = i.nextSuspenseID++;
    i = V(i.boundaryPrefix + a.toString(16)), r = r.id = i, qt(t, e.responseState, r), Rn(e, t, n)
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), qt(t, e.responseState, r.id), Rn(e, t, n);
  else {
    if (z(t, ji), n = r.completedSegments, n.length !== 1) throw Error(L(391));
    zn(e, t, n[0])
  }
  return z(t, Fi)
}

function Bn(e, t, n) {
  return Jt(t, e.responseState, n.formatContext, n.id), zn(e, t, n), Yt(t, n.formatContext)
}

function Vn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Hn(e, t, n, r[i]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, R(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(t, fa) : (e.sentCompleteBoundaryFunction = !0, R(t, da)), r === null) throw Error(L(395));
  return n = B(n.toString(16)), R(t, r), R(t, pa), R(t, e.segmentPrefix), R(t, n), z(t, ma)
}

function Hn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return Bn(e, t, r)
  }
  return Bn(e, t, r), e = e.responseState, R(t, e.startInlineScript), e.sentCompleteSegmentFunction ? R(t, ca) : (e.sentCompleteSegmentFunction = !0, R(t, sa)), R(t, e.segmentPrefix), i = B(i.toString(16)), R(t, i), R(t, la), R(t, e.placeholderPrefix), R(t, i), z(t, ua)
}

function Un(e, t) {
  Y = new Uint8Array(512), X = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      zn(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) R(t, r[n]);
      n < r.length && z(t, r[n])
    }
    var i, a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (R(r, s.startInlineScript), s.sentClientRenderFunction ? R(r, ga) : (s.sentClientRenderFunction = !0, R(r, ha)), c === null) throw Error(L(395));
      if (R(r, c), R(r, _a), (l || u || d) && (R(r, ya), R(r, B(Xt(l || ``)))), (u || d) && (R(r, ya), R(r, B(Xt(u || ``)))), d && (R(r, ya), R(r, B(Xt(d)))), !z(r, va)) {
        e.destination = null, i++, a.splice(0, i);
        return
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Vn(e, t, f[i])) {
        e.destination = null, i++, f.splice(0, i);
        return
      } f.splice(0, i), jt(t), Y = new Uint8Array(512), X = 0;
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        a = e,
        o = t;
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Hn(a, o, m, h[s])) {
            s++, h.splice(0, s);
            var g = !1;
            break e
          } h.splice(0, s),
        g = !0
      }
      if (!g) {
        e.destination = null, i++, p.splice(0, i);
        return
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Vn(e, t, _[i])) {
        e.destination = null, i++, _.splice(0, i);
        return
      } _.splice(0, i)
  } finally {
    jt(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close()
  }
}

function Wn(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach((function (n) {
      return Pn(n, e, t)
    })), n.clear(), e.destination !== null && Un(e, e.destination)
  } catch (t) {
    Tn(e, t), En(e, t)
  }
}
var Gn, Kn, qn, K, Jn, Yn, Xn, q, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, J, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Y, X, Jr, Z, Yr, Xr, Zr, Q, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, $, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co = e((() => {
    a(), Gn = `default` in s ? r : s, Kn = {}, qn = Gn, K = Object.prototype.hasOwnProperty, Jn = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yn = {}, Xn = {}, q = {}, `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function (e) {
      q[e] = new N(e, 0, !1, e, null, !1, !1)
    })), [
      [`acceptCharset`, `accept-charset`],
      [`className`, `class`],
      [`htmlFor`, `for`],
      [`httpEquiv`, `http-equiv`]
    ].forEach((function (e) {
      var t = e[0];
      q[t] = new N(t, 1, !1, e[1], null, !1, !1)
    })), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach((function (e) {
      q[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1)
    })), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach((function (e) {
      q[e] = new N(e, 2, !1, e, null, !1, !1)
    })), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function (e) {
      q[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })), [`checked`, `multiple`, `muted`, `selected`].forEach((function (e) {
      q[e] = new N(e, 3, !0, e, null, !1, !1)
    })), [`capture`, `download`].forEach((function (e) {
      q[e] = new N(e, 4, !1, e, null, !1, !1)
    })), [`cols`, `rows`, `size`, `span`].forEach((function (e) {
      q[e] = new N(e, 6, !1, e, null, !1, !1)
    })), [`rowSpan`, `start`].forEach((function (e) {
      q[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })), Zn = /[\-:]([a-z])/g, `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function (e) {
      var t = e.replace(Zn, xe);
      q[t] = new N(t, 1, !1, e, null, !1, !1)
    })), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function (e) {
      var t = e.replace(Zn, xe);
      q[t] = new N(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1)
    })), [`xml:base`, `xml:lang`, `xml:space`].forEach((function (e) {
      var t = e.replace(Zn, xe);
      q[t] = new N(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1)
    })), [`tabIndex`, `crossOrigin`].forEach((function (e) {
      q[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1)
    })), q.xlinkHref = new N(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), [`src`, `href`, `action`, `formAction`].forEach((function (e) {
      q[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })), Qn = {
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
      strokeWidth: !0
    }, $n = [`Webkit`, `ms`, `Moz`, `O`], Object.keys(Qn).forEach((function (e) {
      $n.forEach((function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Qn[t] = Qn[e]
      }))
    })), er = /["'&<>]/, tr = /([A-Z])/g, nr = /^ms-/, rr = Array.isArray, ir = new Map, ar = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, or = new Map, sr = /[<\u2028\u2029]/g, cr = Object.assign, lr = Symbol.for(`react.element`), ur = Symbol.for(`react.portal`), dr = Symbol.for(`react.fragment`), fr = Symbol.for(`react.strict_mode`), pr = Symbol.for(`react.profiler`), mr = Symbol.for(`react.provider`), hr = Symbol.for(`react.context`), gr = Symbol.for(`react.forward_ref`), _r = Symbol.for(`react.suspense`), vr = Symbol.for(`react.suspense_list`), yr = Symbol.for(`react.memo`), br = Symbol.for(`react.lazy`), xr = Symbol.for(`react.scope`), Sr = Symbol.for(`react.debug_trace_mode`), Cr = Symbol.for(`react.legacy_hidden`), wr = Symbol.for(`react.default_value`), Tr = Symbol.iterator, Er = {}, Dr = null, Or = {
      isMounted: function () {
        return !1
      },
      enqueueSetState: function (e, t) {
        e = e._reactInternals, e.queue !== null && e.queue.push(t)
      },
      enqueueReplaceState: function (e, t) {
        e = e._reactInternals, e.replace = !0, e.queue = [t]
      },
      enqueueForceUpdate: function () {}
    }, kr = {
      id: 1,
      overflow: ``
    }, Ar = Math.clz32 ? Math.clz32 : Ke, jr = Math.log, Mr = Math.LN2, Nr = typeof Object.is == `function` ? Object.is : qe, Pr = null, Fr = null, Ir = null, J = null, Lr = !1, Rr = !1, zr = 0, Br = null, Vr = 0, Hr = {
      readContext: function (e) {
        return e._currentValue2
      },
      useContext: function (e) {
        return Je(), e._currentValue2
      },
      useMemo: et,
      useReducer: $e,
      useRef: function (e) {
        Pr = Je(), J = Xe();
        var t = J.memoizedState;
        return t === null ? (e = {
          current: e
        }, J.memoizedState = e) : t
      },
      useState: function (e) {
        return $e(Qe, e)
      },
      useInsertionEffect: rt,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return et((function () {
          return e
        }), t)
      },
      useImperativeHandle: rt,
      useEffect: rt,
      useDebugValue: rt,
      useDeferredValue: function (e) {
        return Je(), e
      },
      useTransition: function () {
        return Je(), [!1, nt]
      },
      useId: function () {
        var e = Fr.treeContext,
          t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - Ar(e) - 1)).toString(32) + t;
        var n = Ur;
        if (n === null) throw Error(M(404));
        return t = zr++, e = `:` + n.idPrefix + `R` + e, 0 < t && (e += `H` + t.toString(32)), e + `:`
      },
      useMutableSource: function (e, t) {
        return Je(), t(e._source)
      },
      useSyncExternalStore: function (e, t, n) {
        if (n === void 0) throw Error(M(407));
        return n()
      }
    }, Ur = null, Wr = qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher, Kn.renderToNodeStream = function () {
      throw Error(M(207))
    }, Kn.renderToStaticMarkup = function (e, t) {
      return At(e, t, !0, `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)
    }, Kn.renderToStaticNodeStream = function () {
      throw Error(M(208))
    }, Kn.renderToString = function (e, t) {
      return At(e, t, !1, `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)
    }, Kn.version = `18.2.0`, Gr = `default` in s ? r : s, Kr = {}, qr = Gr, Y = null, X = 0, Jr = new TextEncoder, Z = Object.prototype.hasOwnProperty, Yr = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xr = {}, Zr = {}, Q = {}, `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function (e) {
      Q[e] = new H(e, 0, !1, e, null, !1, !1)
    })), [
      [`acceptCharset`, `accept-charset`],
      [`className`, `class`],
      [`htmlFor`, `for`],
      [`httpEquiv`, `http-equiv`]
    ].forEach((function (e) {
      var t = e[0];
      Q[t] = new H(t, 1, !1, e[1], null, !1, !1)
    })), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach((function (e) {
      Q[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1)
    })), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach((function (e) {
      Q[e] = new H(e, 2, !1, e, null, !1, !1)
    })), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function (e) {
      Q[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })), [`checked`, `multiple`, `muted`, `selected`].forEach((function (e) {
      Q[e] = new H(e, 3, !0, e, null, !1, !1)
    })), [`capture`, `download`].forEach((function (e) {
      Q[e] = new H(e, 4, !1, e, null, !1, !1)
    })), [`cols`, `rows`, `size`, `span`].forEach((function (e) {
      Q[e] = new H(e, 6, !1, e, null, !1, !1)
    })), [`rowSpan`, `start`].forEach((function (e) {
      Q[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })), Qr = /[\-:]([a-z])/g, `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function (e) {
      var t = e.replace(Qr, Pt);
      Q[t] = new H(t, 1, !1, e, null, !1, !1)
    })), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function (e) {
      var t = e.replace(Qr, Pt);
      Q[t] = new H(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1)
    })), [`xml:base`, `xml:lang`, `xml:space`].forEach((function (e) {
      var t = e.replace(Qr, Pt);
      Q[t] = new H(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1)
    })), [`tabIndex`, `crossOrigin`].forEach((function (e) {
      Q[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1)
    })), Q.xlinkHref = new H(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), [`src`, `href`, `action`, `formAction`].forEach((function (e) {
      Q[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })), $r = {
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
      strokeWidth: !0
    }, ei = [`Webkit`, `ms`, `Moz`, `O`], Object.keys($r).forEach((function (e) {
      ei.forEach((function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), $r[t] = $r[e]
      }))
    })), ti = /["'&<>]/, ni = /([A-Z])/g, ri = /^ms-/, ii = Array.isArray, ai = V(`<script>`), oi = V(`<\/script>`), si = V(`<script src="`), ci = V(`<script type="module" src="`), li = V(`" async=""><\/script>`), ui = /(<\/|<)(s)(cript)/gi, di = V(`<!-- -->`), fi = new Map, pi = V(` style="`), mi = V(`:`), hi = V(`;`), gi = V(` `), _i = V(`="`), vi = V(`"`), yi = V(`=""`), bi = V(`>`), xi = V(`/>`), Si = V(` selected=""`), Ci = V(`
`), wi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ti = new Map, Ei = V(`<!DOCTYPE html>`), Di = V(`</`), Oi = V(`>`), ki = V(`<template id="`), Ai = V(`"></template>`), ji = V(`<!--$-->`), Mi = V(`<!--$?--><template id="`), Ni = V(`"></template>`), Pi = V(`<!--$!-->`), Fi = V(`<!--/$-->`), Ii = V(`<template`), Li = V(`"`), Ri = V(` data-dgst="`), V(` data-msg="`), V(` data-stck="`), zi = V(`></template>`), Bi = V(`<div hidden id="`), Vi = V(`">`), Hi = V(`</div>`), Ui = V(`<svg aria-hidden="true" style="display:none" id="`), Wi = V(`">`), Gi = V(`</svg>`), Ki = V(`<math aria-hidden="true" style="display:none" id="`), qi = V(`">`), Ji = V(`</math>`), Yi = V(`<table hidden id="`), Xi = V(`">`), Zi = V(`</table>`), Qi = V(`<table hidden><tbody id="`), $i = V(`">`), ea = V(`</tbody></table>`), ta = V(`<table hidden><tr id="`), na = V(`">`), ra = V(`</tr></table>`), ia = V(`<table hidden><colgroup id="`), aa = V(`">`), oa = V(`</colgroup></table>`), sa = V(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`), ca = V(`$RS("`), la = V(`","`), ua = V(`")<\/script>`), da = V(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`), fa = V(`$RC("`), pa = V(`","`), ma = V(`")<\/script>`), ha = V(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`), ga = V(`$RX("`), _a = V(`"`), va = V(`)<\/script>`), ya = V(`,`), ba = /[<\u2028\u2029]/g, xa = Object.assign, Sa = Symbol.for(`react.element`), Ca = Symbol.for(`react.portal`), wa = Symbol.for(`react.fragment`), Ta = Symbol.for(`react.strict_mode`), Ea = Symbol.for(`react.profiler`), Da = Symbol.for(`react.provider`), Oa = Symbol.for(`react.context`), ka = Symbol.for(`react.forward_ref`), Aa = Symbol.for(`react.suspense`), ja = Symbol.for(`react.suspense_list`), Ma = Symbol.for(`react.memo`), Na = Symbol.for(`react.lazy`), Pa = Symbol.for(`react.scope`), Fa = Symbol.for(`react.debug_trace_mode`), Ia = Symbol.for(`react.legacy_hidden`), La = Symbol.for(`react.default_value`), Ra = Symbol.iterator, za = {}, Ba = null, Va = {
      isMounted: function () {
        return !1
      },
      enqueueSetState: function (e, t) {
        e = e._reactInternals, e.queue !== null && e.queue.push(t)
      },
      enqueueReplaceState: function (e, t) {
        e = e._reactInternals, e.replace = !0, e.queue = [t]
      },
      enqueueForceUpdate: function () {}
    }, Ha = {
      id: 1,
      overflow: ``
    }, Ua = Math.clz32 ? Math.clz32 : cn, Wa = Math.log, Ga = Math.LN2, Ka = typeof Object.is == `function` ? Object.is : ln, qa = null, Ja = null, Ya = null, $ = null, Xa = !1, Za = !1, Qa = 0, $a = null, eo = 0, to = {
      readContext: function (e) {
        return e._currentValue
      },
      useContext: function (e) {
        return un(), e._currentValue
      },
      useMemo: gn,
      useReducer: hn,
      useRef: function (e) {
        qa = un(), $ = fn();
        var t = $.memoizedState;
        return t === null ? (e = {
          current: e
        }, $.memoizedState = e) : t
      },
      useState: function (e) {
        return hn(mn, e)
      },
      useInsertionEffect: yn,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return gn((function () {
          return e
        }), t)
      },
      useImperativeHandle: yn,
      useEffect: yn,
      useDebugValue: yn,
      useDeferredValue: function (e) {
        return un(), e
      },
      useTransition: function () {
        return un(), [!1, vn]
      },
      useId: function () {
        var e = Ja.treeContext,
          t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - Ua(e) - 1)).toString(32) + t;
        var n = no;
        if (n === null) throw Error(L(404));
        return t = Qa++, e = `:` + n.idPrefix + `R` + e, 0 < t && (e += `H` + t.toString(32)), e + `:`
      },
      useMutableSource: function (e, t) {
        return un(), t(e._source)
      },
      useSyncExternalStore: function (e, t, n) {
        if (n === void 0) throw Error(L(407));
        return n()
      }
    }, no = null, ro = qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher, Kr.renderToReadableStream = function (e, t) {
      return new Promise((function (n, r) {
        var i, a, o = new Promise((function (e, t) {
            a = e, i = t
          })),
          s = Sn(e, It(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), Rt(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, a, (function () {
            var e = new ReadableStream({
              type: `bytes`,
              pull: function (e) {
                if (s.status === 1) s.status = 2, Mt(e, s.fatalError);
                else if (s.status !== 2 && s.destination === null) {
                  s.destination = e;
                  try {
                    Un(s, e)
                  } catch (e) {
                    Tn(s, e), En(s, e)
                  }
                }
              },
              cancel: function () {
                Wn(s)
              }
            }, {
              highWaterMark: 0
            });
            e.allReady = o, n(e)
          }), (function (e) {
            o.catch((function () {})), r(e)
          }), i);
        if (t && t.signal) {
          var c = t.signal,
            l = function () {
              Wn(s, c.reason), c.removeEventListener(`abort`, l)
            };
          c.addEventListener(`abort`, l)
        }
        Ln(s)
      }))
    }, Kr.version = `18.2.0`, io = {}, ao = Kn, oo = Kr, io.version = ao.version, io.renderToString = ao.renderToString, io.renderToStaticMarkup = ao.renderToStaticMarkup, io.renderToNodeStream = ao.renderToNodeStream, io.renderToStaticNodeStream = ao.renderToStaticNodeStream, io.renderToReadableStream = oo.renderToReadableStream, io.version, io.renderToString, io.renderToStaticMarkup, io.renderToNodeStream, io.renderToStaticNodeStream, so = io.renderToReadableStream
  })),
  lo, uo, fo = e((() => {
    j(), lo = {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`
    }, uo = {
      ...lo,
      borderRadius: 6,
      background: `rgba(136, 85, 255, 0.3)`,
      color: `#85F`,
      border: `1px dashed #85F`,
      flexDirection: `column`
    }, C.EventHandler, C.EventHandler, C.EventHandler, C.Number, C.Boolean, C.String, C.Enum
  })),
  po = e((() => {
    j(), a()
  })),
  mo = e((() => {
    a()
  })),
  ho = e((() => {
    j()
  })),
  go = e((() => {
    j()
  })),
  _o = e((() => {
    a()
  })),
  vo = e((() => {
    j()
  })),
  yo = e((() => {
    o(), a()
  })),
  bo = e((() => {
    a(), go()
  })),
  xo = e((() => {
    a(), j(), go(), mo()
  })),
  So = e((() => {
    j(), a(), fo()
  }));

function Co() {
  return d(() => E.current() === E.canvas, [])
}
var wo = e((() => {
    a(), j()
  })),
  To = e((() => {
    a()
  })),
  Eo = e((() => {
    a(), j(), C.FusedNumber, C.FusedNumber
  })),
  Do = e((() => {
    fo(), po(), mo(), ho(), go(), _o(), vo(), yo(), bo(), xo(), So(), wo(), To(), Eo()
  }));

function Oo({
  type: e,
  url: t,
  html: n,
  zoom: r,
  radius: i,
  border: a,
  style: o = {}
}) {
  return e === `url` && t ? c(Ao, {
    url: t,
    zoom: r,
    radius: i,
    border: a,
    style: o
  }) : e === `html` && n ? c(Mo, {
    html: n,
    style: o
  }) : c(ko, {
    style: o
  })
}

function ko({
  style: e
}) {
  return c(`div`, {
    style: {
      minHeight: zo(e),
      ...uo,
      overflow: `hidden`,
      ...e
    },
    children: c(`div`, {
      style: Ho,
      children: `To embed a website or widget, add it to the properties\xA0panel.`
    })
  })
}

function Ao({
  url: e,
  zoom: t,
  radius: n,
  border: r,
  style: i
}) {
  let a = !i.height;
  /[a-z]+:\/\//.test(e) || (e = `https://` + e);
  let o = Co(),
    [s, l] = g(o ? void 0 : !1);
  if (p(() => {
      if (!o) return;
      let t = !0;
      l(void 0);
      async function n() {
        let n = await fetch(`https://api.framer.com/functions/check-iframe-url?url=` + encodeURIComponent(e));
        if (n.status == 200) {
          let {
            isBlocked: e
          } = await n.json();
          t && l(e)
        } else {
          let e = await n.text();
          console.error(e), l(Error(`This site can’t be reached.`))
        }
      }
      return n().catch(e => {
        console.error(e), l(e)
      }), () => {
        t = !1
      }
    }, [e]), o && a) return c(Ro, {
    message: `URL embeds do not support auto height.`,
    style: i
  });
  if (!e.startsWith(`https://`)) return c(Ro, {
    message: `Unsupported protocol.`,
    style: i
  });
  if (s === void 0) return c(Lo, {});
  if (s instanceof Error) return c(Ro, {
    message: s.message,
    style: i
  });
  if (s === !0) {
    let t = `Can’t embed ${e} due to its content security policy.`;
    return c(Ro, {
      message: t,
      style: i
    })
  }
  return c(`iframe`, {
    src: e,
    style: {
      ...Bo,
      ...i,
      ...r,
      zoom: t,
      borderRadius: n,
      transformOrigin: `top center`
    },
    loading: `lazy`,
    fetchPriority: o ? `low` : `auto`,
    referrerPolicy: `no-referrer`,
    sandbox: jo(o)
  })
}

function jo(e) {
  let t = [`allow-same-origin`, `allow-scripts`];
  return e || t.push(`allow-downloads`, `allow-forms`, `allow-modals`, `allow-orientation-lock`, `allow-pointer-lock`, `allow-popups`, `allow-popups-to-escape-sandbox`, `allow-presentation`, `allow-storage-access-by-user-activation`, `allow-top-navigation-by-user-activation`), t.join(` `)
}

function Mo({
  html: e,
  ...t
}) {
  if (e.includes(`<\/script>`)) {
    let n = e.includes(`</spline-viewer>`),
      r = e.includes(`<!-- framer-direct-embed -->`);
    return c(n || r ? Po : No, {
      html: e,
      ...t
    })
  }
  return c(Fo, {
    html: e,
    ...t
  })
}

function No({
  html: e,
  style: t
}) {
  let n = l(),
    [r, i] = g(0);
  p(() => {
    let e = n.current ?.contentWindow;

    function t(t) {
      if (t.source !== e) return;
      let n = t.data;
      if (typeof n != `object` || !n) return;
      let r = n.embedHeight;
      typeof r == `number` && i(r)
    }
    return m.addEventListener(`message`, t), e ?.postMessage(`getEmbedHeight`, `*`), () => {
      m.removeEventListener(`message`, t)
    }
  }, []);
  let a = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
    o = {
      ...Bo,
      ...t
    };
  return t.height || (o.height = r + `px`), c(`iframe`, {
    ref: n,
    style: o,
    srcDoc: a
  })
}

function Po({
  html: e,
  style: t
}) {
  let n = l();
  return p(() => {
    let t = n.current;
    if (t) return t.innerHTML = e, Io(t), () => {
      t.innerHTML = ``
    }
  }, [e]), c(`div`, {
    ref: n,
    style: {
      ...Vo,
      ...t
    }
  })
}

function Fo({
  html: e,
  style: t
}) {
  return c(`div`, {
    style: {
      ...Vo,
      ...t
    },
    dangerouslySetInnerHTML: {
      __html: e
    }
  })
}

function Io(e) {
  if (e instanceof Element && e.tagName === `SCRIPT`) {
    let t = document.createElement(`script`);
    t.text = e.innerHTML;
    for (let {
        name: n,
        value: r
      } of e.attributes) t.setAttribute(n, r);
    e.parentElement.replaceChild(t, e)
  } else
    for (let t of e.childNodes) Io(t)
}

function Lo() {
  return c(`div`, {
    className: `framerInternalUI-componentPlaceholder`,
    style: {
      ...lo,
      overflow: `hidden`
    },
    children: c(`div`, {
      style: Ho,
      children: `Loading…`
    })
  })
}

function Ro({
  message: e,
  style: t
}) {
  return c(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: {
      minHeight: zo(t),
      ...lo,
      overflow: `hidden`,
      ...t
    },
    children: c(`div`, {
      style: Ho,
      children: e
    })
  })
}

function zo(e) {
  if (!e.height) return 200
}
var Bo, Vo, Ho, Uo = e((() => {
  o(), i(), a(), j(), Do(), ie(Oo, {
    type: {
      type: C.Enum,
      defaultValue: `url`,
      displaySegmentedControl: !0,
      options: [`url`, `html`],
      optionTitles: [`URL`, `HTML`]
    },
    url: {
      title: `URL`,
      type: C.String,
      description: `Some websites don’t support embedding.`,
      hidden(e) {
        return e.type !== `url`
      }
    },
    html: {
      title: `HTML`,
      type: C.String,
      displayTextArea: !0,
      hidden(e) {
        return e.type !== `html`
      }
    },
    border: {
      title: `Border`,
      type: C.Border,
      optional: !0,
      hidden(e) {
        return e.type !== `url`
      }
    },
    radius: {
      type: C.BorderRadius,
      title: `Radius`,
      hidden(e) {
        return e.type !== `url`
      }
    },
    zoom: {
      title: `Zoom`,
      defaultValue: 1,
      type: C.Number,
      hidden(e) {
        return e.type !== `url`
      },
      min: .1,
      max: 1,
      step: .1,
      displayStepper: !0
    }
  }), Bo = {
    width: `100%`,
    height: `100%`,
    border: `none`
  }, Vo = {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
  }, Ho = {
    textAlign: `center`,
    minWidth: 140
  }
}));

function Wo(e, ...t) {
  let n = {};
  return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es = e((() => {
    i(), j(), y(), a(), Go = [`FNA6OXj_0`, `IZeEBjU2F`], Ko = {
      FNA6OXj_0: `framer-v-14tk2f5`,
      IZeEBjU2F: `framer-v-1lu244l`
    }, qo = {
      default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
      }
    }, Jo = ({
      value: e,
      children: t
    }) => {
      let n = u(v),
        r = e ?? n.transition,
        i = d(() => ({
          ...n,
          transition: r
        }), [JSON.stringify(r)]);
      return c(v.Provider, {
        value: i,
        children: t
      })
    }, Yo = {
      Transparent: `IZeEBjU2F`,
      White: `FNA6OXj_0`
    }, Xo = ({
      height: e,
      id: t,
      title: n,
      width: r,
      ...i
    }) => ({
      ...i,
      a98X6lqsf: n ?? i.a98X6lqsf ?? `Title`,
      variant: Yo[i.variant] ?? i.variant ?? `FNA6OXj_0`
    }), Zo = (e, t) => t.join(`-`) + e.layoutDependency, Qo = _e(t(function (e, t) {
      let {
        activeLocale: r
      } = pe(), {
        style: i,
        className: a,
        layoutId: o,
        variant: s,
        a98X6lqsf: l,
        ...u
      } = Xo(e), {
        baseVariant: d,
        classNames: f,
        gestureVariant: p,
        setGestureState: m,
        setVariant: g,
        transition: v,
        variants: y
      } = ge({
        cycleOrder: Go,
        defaultVariant: `FNA6OXj_0`,
        transitions: qo,
        variant: s,
        variantClassNames: Ko
      }), x = Zo(e, y), S = n();
      return c(_, {
        id: o ?? S,
        children: c(b.div, {
          initial: s,
          animate: y,
          onHoverStart: () => m({
            isHovered: !0
          }),
          onHoverEnd: () => m({
            isHovered: !1
          }),
          onTapStart: () => m({
            isPressed: !0
          }),
          onTap: () => m({
            isPressed: !1
          }),
          onTapCancel: () => m({
            isPressed: !1
          }),
          className: ae(`framer-hrrZN`, f),
          style: {
            display: `contents`
          },
          children: c(Jo, {
            value: v,
            children: c(b.div, {
              ...u,
              className: ae(`framer-14tk2f5`, a),
              "data-border": !0,
              "data-framer-name": `White`,
              layoutDependency: x,
              layoutId: `FNA6OXj_0`,
              ref: t,
              style: {
                "--border-bottom-width": `1px`,
                "--border-color": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)) /* {"name":"Tristesse"} */`,
                "--border-left-width": `1px`,
                "--border-right-width": `1px`,
                "--border-style": `solid`,
                "--border-top-width": `1px`,
                backdropFilter: `blur(32.798831939697266px)`,
                backgroundColor: `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                WebkitBackdropFilter: `blur(32.798831939697266px)`,
                ...i
              },
              variants: {
                IZeEBjU2F: {
                  "--border-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)) /* {"name":"White"} */`,
                  backgroundColor: `rgba(0, 0, 0, 0)`
                }
              },
              ...Wo({
                IZeEBjU2F: {
                  "data-framer-name": `Transparent`
                }
              }, d, p),
              children: c(D, {
                __fromCanvasComponent: !0,
                children: c(h, {
                  children: c(b.p, {
                    style: {
                      "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                      "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                      "--framer-font-size": `14px`,
                      "--framer-letter-spacing": `-0.28px`,
                      "--framer-line-height": `150%`,
                      "--framer-text-color": `var(--extracted-r6o4lv)`
                    },
                    children: `Title`
                  })
                }),
                className: `framer-6l51w1`,
                "data-framer-name": `AI for Everyone`,
                fonts: [`GF;Instrument Sans-regular`],
                layoutDependency: x,
                layoutId: `I93:299;93:297`,
                style: {
                  "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`,
                  "--framer-paragraph-spacing": `0px`
                },
                text: l,
                variants: {
                  IZeEBjU2F: {
                    "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                  }
                },
                verticalAlignment: `top`,
                withExternalLayout: !0
              })
            })
          })
        })
      })
    }), [`.framer-hrrZN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`, `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-hrrZN .framer-p3evq2 { display: block; }`, `.framer-hrrZN .framer-14tk2f5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 2px 10px 4px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-hrrZN .framer-6l51w1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hrrZN .framer-14tk2f5 { gap: 0px; } .framer-hrrZN .framer-14tk2f5 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-hrrZN .framer-14tk2f5 > :first-child { margin-left: 0px; } .framer-hrrZN .framer-14tk2f5 > :last-child { margin-right: 0px; } }`], `framer-hrrZN`), $o = Qo, Qo.displayName = `Top Tag`, Qo.defaultProps = {
      height: 27,
      width: 47
    }, ie(Qo, {
      variant: {
        options: [`FNA6OXj_0`, `IZeEBjU2F`],
        optionTitles: [`White`, `Transparent`],
        title: `Variant`,
        type: C.Enum
      },
      a98X6lqsf: {
        defaultValue: `Title`,
        displayTextArea: !1,
        title: `Title`,
        type: C.String
      }
    }), re(Qo, [{
      family: `Instrument Sans`,
      moduleAsset: {
        localModuleIdentifier: `local-module:canvasComponent/d7AOj09G7:default`,
        url: `https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-Qf1mS0v3_7Y.ttf`
      },
      style: `normal`,
      url: `https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-Qf1mS0v3_7Y.ttf`,
      weight: `400`
    }])
  })),
  ts, ns, rs, os = e((() => {
    j(), k.loadWebFontsFromSelectors([]), ts = [], ns = [`.framer-0dBk3 .framer-styles-preset-jfrssf:not(.rich-text-wrapper), .framer-0dBk3 .framer-styles-preset-jfrssf.rich-text-wrapper a { --framer-link-current-text-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #6836f5) /* {"name":"Purplish Blue"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, #ffffff) /* {"name":"White"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, #ffffff); --framer-link-text-decoration: none; }`], rs = `framer-0dBk3`
  }));

function ss(e, ...t) {
  let n = {};
  return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs = e((() => {
    i(), j(), y(), a(), os(), cs = [`XnHrgRKCP`, `w4mBibSZ0`, `rNw5JLRNX`], ls = `framer-XbRjC`, us = {
      rNw5JLRNX: `framer-v-1iyrafj`,
      w4mBibSZ0: `framer-v-1atobpl`,
      XnHrgRKCP: `framer-v-1kmhvp6`
    }, ds = {
      damping: 60,
      delay: 0,
      mass: 1,
      stiffness: 500,
      type: `spring`
    }, fs = ({
      value: e,
      children: t
    }) => {
      let n = u(v),
        r = e ?? n.transition,
        i = d(() => ({
          ...n,
          transition: r
        }), [JSON.stringify(r)]);
      return c(v.Provider, {
        value: i,
        children: t
      })
    }, ps = b.create(h), ms = {
      Desktop: `XnHrgRKCP`,
      Mobile: `rNw5JLRNX`,
      Tablet: `w4mBibSZ0`
    }, hs = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: ms[r.variant] ?? r.variant ?? `XnHrgRKCP`
    }), gs = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), _s = t(function (e, t) {
      let r = l(null),
        i = t ?? r,
        a = n(),
        {
          activeLocale: o,
          setLocale: s
        } = pe();
      le();
      let {
        style: u,
        className: d,
        layoutId: p,
        variant: m,
        ...g
      } = hs(e), {
        baseVariant: v,
        classNames: y,
        clearLoadingGesture: x,
        gestureHandlers: S,
        gestureVariant: C,
        isLoading: ee,
        setGestureState: te,
        setVariant: T,
        variants: E
      } = ge({
        cycleOrder: cs,
        defaultVariant: `XnHrgRKCP`,
        ref: i,
        variant: m,
        variantClassNames: us
      }), O = gs(e, E), ne = ae(ls, rs);
      return c(_, {
        id: p ?? a,
        children: c(ps, {
          animate: E,
          initial: !1,
          children: c(fs, {
            value: ds,
            children: c(b.div, {
              ...g,
              ...S,
              className: ae(ne, `framer-1kmhvp6`, d, y),
              "data-border": !0,
              "data-framer-name": `Desktop`,
              layoutDependency: O,
              layoutId: `XnHrgRKCP`,
              ref: i,
              style: {
                "--border-bottom-width": `0px`,
                "--border-color": `rgb(171, 138, 19)`,
                "--border-left-width": `0px`,
                "--border-right-width": `0px`,
                "--border-style": `solid`,
                "--border-top-width": `1px`,
                backgroundColor: `var(--token-3d2e05c0-9f07-4a51-b2be-06583b023af9, rgb(20, 20, 20))`,
                ...u
              },
              ...ss({
                rNw5JLRNX: {
                  "data-framer-name": `Mobile`
                },
                w4mBibSZ0: {
                  "data-framer-name": `Tablet`
                }
              }, v, C),
              children: f(b.div, {
                className: `framer-whvwy5`,
                layoutDependency: O,
                layoutId: `ZxSSlXsZ5`,
                children: [c(D, {
                  __fromCanvasComponent: !0,
                  children: c(h, {
                    children: c(b.p, {
                      style: {
                        "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                        "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                        "--framer-font-size": `14px`,
                        "--framer-font-weight": `500`,
                        "--framer-letter-spacing": `-0.3px`,
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                      },
                      children: `© Tensora 2025.`
                    })
                  }),
                  className: `framer-1l658bf`,
                  "data-framer-name": `FAQ`,
                  fonts: [`GF;Instrument Sans-500`],
                  layoutDependency: O,
                  layoutId: `hhrRqty3b`,
                  style: {
                    "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                  },
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                  ...ss({
                    rNw5JLRNX: {
                      children: c(h, {
                        children: c(b.p, {
                          style: {
                            "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                            "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                            "--framer-font-size": `20px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.3px`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                          },
                          children: `© Tensora 2025.`
                        })
                      })
                    }
                  }, v, C)
                }), f(b.div, {
                  className: `framer-1iawrak`,
                  "data-framer-name": `menu`,
                  layoutDependency: O,
                  layoutId: `QwIWMy6c_`,
                  children: [c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://x.com/TensoraNetwork`,
                          motionChild: !0,
                          nodeId: `beSaASqXU`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `i_AmUXq5Y`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Twitter/X`
                          })
                        })
                      })
                    }),
                    className: `framer-mzyupz`,
                    "data-framer-name": `Solutions`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: O,
                    layoutId: `beSaASqXU`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://t.me/TensoraNetwork`,
                          motionChild: !0,
                          nodeId: `ewqtFAHwg`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `i_AmUXq5Y`,
                          smoothScroll: !0,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Telegram`
                          })
                        })
                      })
                    }),
                    className: `framer-1wxay2s`,
                    "data-framer-name": `Testimonials`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: O,
                    layoutId: `ewqtFAHwg`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...ss({
                      rNw5JLRNX: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                            },
                            children: c(w, {
                              href: `https://t.me/TensoraNetwork`,
                              motionChild: !0,
                              nodeId: `ewqtFAHwg`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `i_AmUXq5Y`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-jfrssf`,
                                "data-styles-preset": `L6EzZR8ZL`,
                                children: `Telegram`
                              })
                            })
                          })
                        })
                      }
                    }, v, C)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://docs.tensora.network`,
                          motionChild: !0,
                          nodeId: `QuBiT2o57`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `i_AmUXq5Y`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Docs`
                          })
                        })
                      })
                    }),
                    className: `framer-ushwze`,
                    "data-framer-name": `Features`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: O,
                    layoutId: `QuBiT2o57`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...ss({
                      rNw5JLRNX: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                            },
                            children: c(w, {
                              href: `https://docs.tensora.network`,
                              motionChild: !0,
                              nodeId: `QuBiT2o57`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `i_AmUXq5Y`,
                              smoothScroll: !1,
                              children: c(b.a, {
                                className: `framer-styles-preset-jfrssf`,
                                "data-styles-preset": `L6EzZR8ZL`,
                                children: `Docs`
                              })
                            })
                          })
                        })
                      }
                    }, v, C)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://explorer.tensora.network`,
                          motionChild: !0,
                          nodeId: `flk0yspLQ`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `i_AmUXq5Y`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Explorer`
                          })
                        })
                      })
                    }),
                    className: `framer-r63phi`,
                    "data-framer-name": `FAQ`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: O,
                    layoutId: `flk0yspLQ`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...ss({
                      rNw5JLRNX: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                            },
                            children: c(w, {
                              href: `https://explorer.tensora.network`,
                              motionChild: !0,
                              nodeId: `flk0yspLQ`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `i_AmUXq5Y`,
                              smoothScroll: !1,
                              children: c(b.a, {
                                className: `framer-styles-preset-jfrssf`,
                                "data-styles-preset": `L6EzZR8ZL`,
                                children: `Explorer`
                              })
                            })
                          })
                        })
                      }
                    }, v, C)
                  })]
                })]
              })
            })
          })
        })
      })
    }), vs = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-XbRjC.framer-ctjwje, .framer-XbRjC .framer-ctjwje { display: block; }`, `.framer-XbRjC.framer-1kmhvp6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 633px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 50px 10px 50px; position: relative; width: 1200px; }`, `.framer-XbRjC .framer-whvwy5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 63px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-XbRjC .framer-1l658bf, .framer-XbRjC .framer-mzyupz, .framer-XbRjC .framer-1wxay2s, .framer-XbRjC .framer-ushwze, .framer-XbRjC .framer-pmwf2, .framer-XbRjC .framer-r63phi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-XbRjC .framer-1iawrak { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-XbRjC.framer-v-1atobpl.framer-1kmhvp6 { padding: 20px 40px 20px 40px; }`, `.framer-XbRjC.framer-v-1atobpl .framer-whvwy5 { height: min-content; }`, `.framer-XbRjC.framer-v-1atobpl .framer-1iawrak { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-wrap: wrap; justify-content: flex-end; padding: 0px 0px 0px 30px; width: 1px; }`, `.framer-XbRjC.framer-v-1iyrafj.framer-1kmhvp6 { flex-direction: column; gap: 0px; padding: 40px 20px 60px 20px; }`, `.framer-XbRjC.framer-v-1iyrafj .framer-whvwy5 { flex: none; flex-direction: column; gap: 60px; height: min-content; justify-content: center; width: 100%; }`, `.framer-XbRjC.framer-v-1iyrafj .framer-1iawrak { flex-direction: column; flex-wrap: wrap; width: 100%; }`, ...ns, `.framer-XbRjC[data-border="true"]::after, .framer-XbRjC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], ys = _e(_s, vs, `framer-XbRjC`), bs = ys, ys.displayName = `Footer`, ys.defaultProps = {
      height: 83,
      width: 1200
    }, ie(ys, {
      variant: {
        options: [`XnHrgRKCP`, `w4mBibSZ0`, `rNw5JLRNX`],
        optionTitles: [`Desktop`, `Tablet`, `Mobile`],
        title: `Variant`,
        type: C.Enum
      }
    }), re(ys, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Instrument Sans`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Instrument Sans`,
        url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npST3-QfwmS0v3_7Y.woff2`,
        weight: `500`
      }]
    }, ...se(ts)], {
      supportsExplicitInterCodegen: !0
    })
  })),
  Ss, Cs, ws, Ts = e((() => {
    i(), a(), Ss = {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`
    }, Cs = {
      ...Ss,
      borderRadius: 6,
      background: `rgba(149, 149, 149, 0.1)`,
      border: `1px dashed rgba(149, 149, 149, 0.15)`,
      color: `#a5a5a5`,
      flexDirection: `column`
    }, ws = t((e, t) => c(`div`, {
      style: Cs,
      ref: t
    }))
  })),
  Es, Ds, Os = e((() => {
    Ds = e => {
      if (!Es) {
        let t = (e, t, n) => n.get(e) ? n.get(e)(t) : null,
          n = new Map;
        n.set(`bold`, t => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          fill: `none`,
          stroke: t,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `24`
        }))), n.set(`duotone`, t => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          opacity: `0.2`
        }), e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          fill: `none`,
          stroke: t,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `16`
        }))), n.set(`fill`, () => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z`
        }))), n.set(`light`, t => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          fill: `none`,
          stroke: t,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `12`
        }))), n.set(`thin`, t => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          fill: `none`,
          stroke: t,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `8`
        }))), n.set(`regular`, t => e.createElement(e.Fragment, null, e.createElement(`path`, {
          d: `M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z`,
          fill: `none`,
          stroke: t,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `16`
        })));
        let r = (e, r) => t(e, r, n),
          i = e.forwardRef((t, n) => e.createElement(`g`, {
            ref: n,
            ...t
          }, r(t.weight, t.color)));
        i.displayName = `House`, Es = i
      }
      return Es
    }
  }));

function ks(e, t, n = ``, r, i) {
  let a = d(() => {
    if (n == null || n ?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? js(e, t)
  }, [r, n]);
  return t ? r : a
}
var As, js, Ms = e((() => {
  a(), j(), As = {
    onClick: {
      type: C.EventHandler
    },
    onMouseDown: {
      type: C.EventHandler
    },
    onMouseUp: {
      type: C.EventHandler
    },
    onMouseEnter: {
      type: C.EventHandler
    },
    onMouseLeave: {
      type: C.EventHandler
    }
  }, js = (e, t) => e.find(e => e.toLowerCase().includes(t))
}));

function Ns(e) {
  let {
    color: t,
    selectByList: n,
    iconSearch: r,
    iconSelection: i,
    onClick: a,
    onMouseDown: o,
    onMouseUp: u,
    onMouseEnter: d,
    onMouseLeave: f,
    weight: m,
    mirrored: h
  } = e, _ = l(!1), v = ks(Ps, n, r, i, Ls), [y, x] = g(v === `Home` ? Ds(s) : null);
  async function S() {
    try {
      let e = await import(`${Fs}${v}.js@0.0.50`);
      _.current && x(e.default(s))
    } catch {
      _.current && x(null)
    }
  }
  p(() => (_.current = !0, S(), () => {
    _.current = !1
  }), [v]);
  let C = E.current() === E.canvas ? c(ws, {}) : null;
  return c(b.div, {
    style: {
      display: `contents`
    },
    onClick: a,
    onMouseEnter: d,
    onMouseLeave: f,
    onMouseDown: o,
    onMouseUp: u,
    children: y ? c(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 256 256`,
      style: {
        userSelect: `none`,
        width: `100%`,
        height: `100%`,
        display: `inline-block`,
        fill: t,
        flexShrink: 0,
        transform: h ? `scale(-1, 1)` : void 0
      },
      focusable: `false`,
      color: t,
      children: c(y, {
        color: t,
        weight: m
      })
    }) : C
  })
}
var Ps, Fs, Is, Ls, Rs = e((() => {
    i(), a(), j(), y(), Ts(), Os(), Ms(), Ps = `Activity.AddressBook.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.Anchor.AnchorSimple.AndroidLogo.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asterisk.AsteriskSimple.At.Atom.Baby.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barricade.Baseball.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryWarning.Bed.BeerBottle.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.BezierCurve.Bicycle.Binoculars.Bird.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Book.BookBookmark.BookOpen.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.BoundingBox.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Briefcase.BriefcaseMetal.Broadcast.Browser.Browsers.Bug.BugBeetle.BugDroid.Buildings.Bus.Butterfly.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarPlus.CalendarX.Camera.CameraRotate.CameraSlash.Campfire.Car.CarSimple.Cardholder.Cards.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretRight.CaretUp.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.Chalkboard.ChalkboardSimple.ChalkboardTeacher.ChartBar.ChartBarHorizontal.ChartLine.ChartLineUp.ChartPie.ChartPieSlice.Chat.ChatCentered.ChatCenteredDots.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleText.ChatDots.ChatTeardrop.ChatTeardropDots.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckSquare.CheckSquareOffset.Checks.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CircleWavy.CircleWavyCheck.CircleWavyQuestion.CircleWavyWarning.CirclesFour.CirclesThree.CirclesThreePlus.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.Club.CoatHanger.Code.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.Coin.CoinVertical.Coins.Columns.Command.Compass.ComputerTower.Confetti.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Cpu.CreditCard.Crop.Crosshair.CrosshairSimple.Crown.CrownSimple.Cube.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorText.Cylinder.Database.Desktop.DesktopTower.Detective.DeviceMobile.DeviceMobileCamera.DeviceMobileSpeaker.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscordLogo.Divide.Dog.Door.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.DribbbleLogo.Drop.DropHalf.DropHalfBottom.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.Exam.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FastForward.FastForwardCircle.FigmaLogo.File.FileArrowDown.FileArrowUp.FileAudio.FileCloud.FileCode.FileCss.FileCsv.FileDoc.FileDotted.FileHtml.FileImage.FileJpg.FileJs.FileJsx.FileLock.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FileRs.FileSearch.FileText.FileTs.FileTsx.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireSimple.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagCheckered.Flame.Flashlight.Flask.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlyingSaucer.Folder.FolderDotted.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDotted.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.ForkKnife.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.GameController.GasPump.Gauge.Gear.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeStand.GoogleChromeLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gradient.GraduationCap.Graph.GridFour.Hamburger.Hand.HandEye.HandFist.HandGrabbing.HandPalm.HandPointing.HandSoap.HandWaving.Handbag.HandbagSimple.HandsClapping.Handshake.HardDrive.HardDrives.Hash.HashStraight.Headlights.Headphones.Headset.Heart.HeartBreak.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighlighterCircle.Horse.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.IdentificationBadge.IdentificationCard.Image.ImageSquare.Infinity.Info.InstagramLogo.Intersect.Jeep.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.Laptop.Layout.Leaf.Lifebuoy.Lightbulb.LightbulbFilament.Lightning.LightningSlash.LineSegment.LineSegments.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListNumbers.ListPlus.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.MapPin.MapPinLine.MapTrifold.MarkerCircle.Martini.MaskHappy.MaskSad.MathOperations.Medal.MediumLogo.Megaphone.MegaphoneSimple.MessengerLogo.Microphone.MicrophoneSlash.MicrophoneStage.MicrosoftExcelLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.Money.Monitor.MonitorPlay.Moon.MoonStars.Mountains.Mouse.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Newspaper.NewspaperClipping.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Nut.NyTimesLogo.Octagon.Option.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Password.Path.Pause.PauseCircle.PawPrint.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilSimple.PencilSimpleLine.Percent.Person.PersonSimple.PersonSimpleRun.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneOutgoing.PhoneSlash.PhoneX.PhosphorLogo.PianoKeys.PictureInPicture.Pill.PinterestLogo.Pinwheel.Pizza.Placeholder.Planet.Play.PlayCircle.Playlist.Plug.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PokerChip.PoliceCar.Polygon.Popcorn.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.Queue.Quotes.Radical.Radio.RadioButton.Rainbow.RainbowCloud.Receipt.Record.Rectangle.Recycle.RedditLogo.Repeat.RepeatOnce.Rewind.RewindCircle.Robot.Rocket.RocketLaunch.Rows.Rss.RssSimple.Rug.Ruler.Scales.Scan.Scissors.Screencast.ScribbleLoop.Scroll.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Share.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shower.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.SignIn.SignOut.Signpost.SimCard.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SlackLogo.Sliders.SlidersHorizontal.Smiley.SmileyBlank.SmileyMeh.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Snowflake.SoccerBall.SortAscending.SortDescending.Spade.Sparkle.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Spinner.SpinnerGap.Spiral.SpotifyLogo.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquaresFour.Stack.StackOverflowLogo.StackSimple.Stamp.Star.StarFour.StarHalf.Sticker.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.Suitcase.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.Swap.Swatches.Sword.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TelegramLogo.Television.TelevisionSimple.TennisBall.Terminal.TerminalWindow.TestTube.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextBolder.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextT.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThumbsDown.ThumbsUp.Ticket.TiktokLogo.Timer.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Tote.ToteSimple.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Translate.Trash.TrashSimple.Tray.Tree.TreeEvergreen.TreeStructure.TrendDown.TrendUp.Triangle.Trophy.Truck.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Upload.UploadSimple.User.UserCircle.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Vault.Vibrate.VideoCamera.VideoCameraSlash.Vignette.Voicemail.Volleyball.Wall.Wallet.Warning.WarningCircle.WarningOctagon.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waves.Webcam.WhatsappLogo.Wheelchair.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.WindowsLogo.Wine.Wrench.X.XCircle.XSquare.YinYang.YoutubeLogo`.split(`.`), Fs = `https://framer.com/m/phosphor-icons/`, Is = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`], Ls = Ps.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}), Ns.displayName = `Phosphor`, Ns.defaultProps = {
      width: 24,
      height: 24,
      iconSelection: `House`,
      iconSearch: `House`,
      color: `#66F`,
      selectByList: !0,
      weight: `regular`,
      mirrored: !1
    }, ie(Ns, {
      selectByList: {
        type: C.Boolean,
        title: `Select`,
        enabledTitle: `List`,
        disabledTitle: `Search`,
        defaultValue: Ns.defaultProps.selectByList
      },
      iconSelection: {
        type: C.Enum,
        options: Ps,
        defaultValue: Ns.defaultProps.iconSelection,
        title: `Name`,
        hidden: ({
          selectByList: e
        }) => !e,
        description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`
      },
      iconSearch: {
        type: C.String,
        title: `Name`,
        placeholder: `Menu, Wifi, Box…`,
        hidden: ({
          selectByList: e
        }) => e
      },
      color: {
        type: C.Color,
        title: `Color`,
        defaultValue: Ns.defaultProps.color
      },
      weight: {
        type: C.Enum,
        title: `Weight`,
        optionTitles: Is.map(e => e.charAt(0).toUpperCase() + e.slice(1)),
        options: Is,
        defaultValue: Ns.defaultProps.weight
      },
      mirrored: {
        type: C.Boolean,
        enabledTitle: `Yes`,
        disabledTitle: `No`,
        defaultValue: Ns.defaultProps.mirrored
      },
      ...As
    })
  })),
  zs, Bs, Vs, Hs = e((() => {
    j(), k.loadWebFontsFromSelectors([]), zs = [], Bs = [`.framer-BGaIx .framer-styles-preset-1x5q87:not(.rich-text-wrapper), .framer-BGaIx .framer-styles-preset-1x5q87.rich-text-wrapper a { --framer-link-current-text-color: #111; --framer-link-hover-text-color: #333; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #333333; --framer-link-text-decoration: none; }`], Vs = `framer-BGaIx`
  }));

function Us(e, ...t) {
  let n = {};
  return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic = e((() => {
    i(), j(), y(), a(), Rs(), os(), Hs(), Ws = oe(Ns), Gs = [`OXy4ejM2h`, `ohZHzxIWW`, `wEFqBieom`, `tR9JEuqj1`], Ks = `framer-hOCXH`, qs = {
      ohZHzxIWW: `framer-v-zymd3j`,
      OXy4ejM2h: `framer-v-11u8w4q`,
      tR9JEuqj1: `framer-v-14qeqr7`,
      wEFqBieom: `framer-v-jjdbds`
    }, Js = {
      damping: 30,
      delay: 0,
      mass: 1,
      stiffness: 400,
      type: `spring`
    }, Ys = ({
      value: e,
      children: t
    }) => {
      let n = u(v),
        r = e ?? n.transition,
        i = d(() => ({
          ...n,
          transition: r
        }), [JSON.stringify(r)]);
      return c(v.Provider, {
        value: i,
        children: t
      })
    }, Xs = b.create(h), Zs = {
      "Phone Expanded": `tR9JEuqj1`,
      Desktop: `OXy4ejM2h`,
      Phone: `wEFqBieom`,
      Tablet: `ohZHzxIWW`
    }, Qs = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: Zs[r.variant] ?? r.variant ?? `OXy4ejM2h`
    }), $s = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), ec = t(function (e, t) {
      let r = l(null),
        i = t ?? r,
        a = n(),
        {
          activeLocale: o,
          setLocale: s
        } = pe(),
        u = le(),
        {
          style: d,
          className: p,
          layoutId: m,
          variant: g,
          ...v
        } = Qs(e),
        {
          baseVariant: y,
          classNames: S,
          clearLoadingGesture: C,
          gestureHandlers: ee,
          gestureVariant: T,
          isLoading: E,
          setGestureState: O,
          setVariant: re,
          variants: ie
        } = ge({
          cycleOrder: Gs,
          defaultVariant: `OXy4ejM2h`,
          ref: i,
          variant: g,
          variantClassNames: qs
        }),
        k = $s(e, ie),
        {
          activeVariantCallback: oe,
          delay: se
        } = ce(y),
        j = oe(async (...e) => {
          re(`tR9JEuqj1`)
        }),
        ue = oe(async (...e) => {
          re(`wEFqBieom`)
        }),
        de = ae(Ks, rs, Vs),
        fe = () => !![`wEFqBieom`, `tR9JEuqj1`].includes(y);
      return c(_, {
        id: m ?? a,
        children: c(Xs, {
          animate: ie,
          initial: !1,
          children: c(Ys, {
            value: Js,
            children: c(b.nav, {
              ...v,
              ...ee,
              className: ae(de, `framer-11u8w4q`, p, S),
              "data-framer-name": `Desktop`,
              layoutDependency: k,
              layoutId: `OXy4ejM2h`,
              ref: i,
              style: {
                ...d
              },
              ...Us({
                ohZHzxIWW: {
                  "data-framer-name": `Tablet`
                },
                tR9JEuqj1: {
                  "data-framer-name": `Phone Expanded`
                },
                wEFqBieom: {
                  "data-framer-name": `Phone`
                }
              }, y, T),
              children: f(b.div, {
                className: `framer-172fncu`,
                layoutDependency: k,
                layoutId: `zy3k0jbk8`,
                style: {
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                variants: {
                  tR9JEuqj1: {
                    backgroundColor: `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16
                  },
                  wEFqBieom: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16
                  }
                },
                children: [f(b.div, {
                  className: `framer-12pkugs`,
                  "data-framer-name": `Icons`,
                  layoutDependency: k,
                  layoutId: `fDoSaM2iy`,
                  children: [c(w, {
                    href: {
                      webPageId: `augiA20Il`
                    },
                    motionChild: !0,
                    nodeId: `vIR7co8hq`,
                    scopeId: `vXdLshXaZ`,
                    children: c(b.a, {
                      className: `framer-1csqiup framer-1s1j86n`,
                      "data-framer-name": `Logo`,
                      layoutDependency: k,
                      layoutId: `vIR7co8hq`,
                      children: c(te, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 500,
                          intrinsicWidth: 1500,
                          loading: A((u ?.y || 0) + (20 + ((u ?.height || 78) - 20 - 58) / 2) + 4.5 + 0 + 0),
                          pixelHeight: 500,
                          pixelWidth: 1500,
                          sizes: `147px`,
                          src: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500`,
                          srcSet: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=512&width=1500&height=500 512w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=1024&width=1500&height=500 1024w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500 1500w`
                        },
                        className: `framer-1li0kr9`,
                        "data-framer-name": `NAME`,
                        layoutDependency: k,
                        layoutId: `htgfzgFx0`,
                        ...Us({
                          tR9JEuqj1: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 500,
                              intrinsicWidth: 1500,
                              loading: A((u ?.y || 0) + 0 + 16 + 0 + 0 + 0),
                              pixelHeight: 500,
                              pixelWidth: 1500,
                              sizes: `147px`,
                              src: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500`,
                              srcSet: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=512&width=1500&height=500 512w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=1024&width=1500&height=500 1024w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500 1500w`
                            }
                          },
                          wEFqBieom: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 500,
                              intrinsicWidth: 1500,
                              loading: A((u ?.y || 0) + 0 + 16 + 0 + 0 + 0),
                              pixelHeight: 500,
                              pixelWidth: 1500,
                              sizes: `147px`,
                              src: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500`,
                              srcSet: `https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=512&width=1500&height=500 512w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?scale-down-to=1024&width=1500&height=500 1024w,https://framerusercontent.com/images/oDc6aaRBkx8adZem2yfTv156M78.png?width=1500&height=500 1500w`
                            }
                          }
                        }, y, T)
                      })
                    })
                  }), fe() && c(x, {
                    children: c(ne, {
                      className: `framer-myuy4z-container`,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: `ijUIXraIO-container`,
                      nodeId: `ijUIXraIO`,
                      rendersWithMotion: !0,
                      scopeId: `vXdLshXaZ`,
                      children: c(Ns, {
                        color: `var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))`,
                        height: `100%`,
                        iconSearch: `House`,
                        iconSelection: `List`,
                        id: `ijUIXraIO`,
                        layoutId: `ijUIXraIO`,
                        mirrored: !1,
                        selectByList: !0,
                        style: {
                          height: `100%`,
                          width: `100%`
                        },
                        weight: `regular`,
                        width: `100%`,
                        ...Us({
                          tR9JEuqj1: {
                            color: `rgb(51, 51, 51)`,
                            iconSelection: `X`,
                            onClick: ue
                          },
                          wEFqBieom: {
                            color: `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                            onClick: j
                          }
                        }, y, T)
                      })
                    })
                  })]
                }), f(b.div, {
                  className: `framer-1taprpk`,
                  "data-framer-name": `Links`,
                  layoutDependency: k,
                  layoutId: `WaYkVwu0N`,
                  style: {
                    opacity: 1
                  },
                  variants: {
                    tR9JEuqj1: {
                      opacity: 1
                    },
                    wEFqBieom: {
                      opacity: 0
                    }
                  },
                  children: [ c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://explorer.tensora.network`,
                          motionChild: !0,
                          nodeId: `okHMOI_Op`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `vXdLshXaZ`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Explorer`
                          })
                        })
                      })
                    }),
                    className: `framer-1w6zlz4`,
                    "data-framer-name": `Testimonials`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: k,
                    layoutId: `okHMOI_Op`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    variants: {
                      tR9JEuqj1: {
                        "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Us({
                      tR9JEuqj1: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`
                            },
                            children: c(w, {
                              href: `https://explorer.tensora.network`,
                              motionChild: !0,
                              nodeId: `okHMOI_Op`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `vXdLshXaZ`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-1x5q87`,
                                "data-styles-preset": `sJ2QEITYH`,
                                children: `Explorer`
                              })
                            })
                          })
                        })
                      }
                    }, y, T)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://docs.tensora.network`,
                          motionChild: !0,
                          nodeId: `WrsGgjtu9`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `vXdLshXaZ`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Docs`
                          })
                        })
                      })
                    }),
                    className: `framer-u2ri7r`,
                    "data-framer-name": `Solutions`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: k,
                    layoutId: `WrsGgjtu9`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    variants: {
                      tR9JEuqj1: {
                        "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Us({
                      tR9JEuqj1: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`
                            },
                            children: c(w, {
                              href: `https://docs.tensora.network`,
                              motionChild: !0,
                              nodeId: `WrsGgjtu9`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `vXdLshXaZ`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-1x5q87`,
                                "data-styles-preset": `sJ2QEITYH`,
                                children: `Docs`
                              })
                            })
                          })
                        })
                      }
                    }, y, T)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://x.com/TensoraNetwork`,
                          motionChild: !0,
                          nodeId: `hCEF06uSf`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `vXdLshXaZ`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Twitter/X`
                          })
                        })
                      })
                    }),
                    className: `framer-1b18pcz`,
                    "data-framer-name": `Pricing`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: k,
                    layoutId: `hCEF06uSf`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    variants: {
                      tR9JEuqj1: {
                        "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Us({
                      tR9JEuqj1: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`
                            },
                            children: c(w, {
                              href: `https://x.com/TensoraNetwork`,
                              motionChild: !0,
                              nodeId: `hCEF06uSf`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `vXdLshXaZ`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-1x5q87`,
                                "data-styles-preset": `sJ2QEITYH`,
                                children: `Twitter/X`
                              })
                            })
                          })
                        })
                      }
                    }, y, T)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: `https://t.me/TensoraNetwork`,
                          motionChild: !0,
                          nodeId: `Gn0Gv5vZq`,
                          openInNewTab: !0,
                          relValues: [],
                          scopeId: `vXdLshXaZ`,
                          smoothScroll: !1,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `Telegram`
                          })
                        })
                      })
                    }),
                    className: `framer-2cghts`,
                    "data-framer-name": `Pricing`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: k,
                    layoutId: `Gn0Gv5vZq`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    variants: {
                      tR9JEuqj1: {
                        "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Us({
                      tR9JEuqj1: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`
                            },
                            children: c(w, {
                              href: `https://t.me/TensoraNetwork`,
                              motionChild: !0,
                              nodeId: `Gn0Gv5vZq`,
                              openInNewTab: !0,
                              preserveParams: !1,
                              relValues: [],
                              scopeId: `vXdLshXaZ`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-1x5q87`,
                                "data-styles-preset": `sJ2QEITYH`,
                                children: `Telegram`
                              })
                            })
                          })
                        })
                      }
                    }, y, T)
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        style: {
                          "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                          "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.3px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: c(w, {
                          href: {
                            hash: `:CBIsf_FR6`,
                            webPageId: `augiA20Il`
                          },
                          motionChild: !0,
                          nodeId: `gQ4ric5Wn`,
                          openInNewTab: !1,
                          relValues: [],
                          scopeId: `vXdLshXaZ`,
                          smoothScroll: !0,
                          children: c(b.a, {
                            className: `framer-styles-preset-jfrssf`,
                            "data-styles-preset": `L6EzZR8ZL`,
                            children: `FAQ`
                          })
                        })
                      })
                    }),
                    className: `framer-1968dhv`,
                    "data-framer-name": `FAQ`,
                    fonts: [`GF;Instrument Sans-500`],
                    layoutDependency: k,
                    layoutId: `gQ4ric5Wn`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    variants: {
                      tR9JEuqj1: {
                        "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Us({
                      tR9JEuqj1: {
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`
                            },
                            children: c(w, {
                              href: {
                                hash: `:CBIsf_FR6`,
                                webPageId: `augiA20Il`
                              },
                              motionChild: !0,
                              nodeId: `gQ4ric5Wn`,
                              openInNewTab: !1,
                              relValues: [],
                              scopeId: `vXdLshXaZ`,
                              smoothScroll: !0,
                              children: c(b.a, {
                                className: `framer-styles-preset-1x5q87`,
                                "data-styles-preset": `sJ2QEITYH`,
                                children: `FAQ`
                              })
                            })
                          })
                        })
                      }
                    }, y, T)
                  }), c(w, {
                    href: `https://www.dextools.io/app/en/token/tensoranetwork?t=1761235491096`,
                    motionChild: !0,
                    nodeId: `gVT8fk9gC`,
                    openInNewTab: !0,
                    scopeId: `vXdLshXaZ`,
                    smoothScroll: !0,
                    children: c(b.a, {
                      className: `framer-4a4ujd framer-1s1j86n`,
                      "data-border": !0,
                      "data-framer-name": `Button`,
                      "data-reset": `button`,
                      layoutDependency: k,
                      layoutId: `gVT8fk9gC`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(104, 54, 245))`,
                        borderBottomLeftRadius: 150,
                        borderBottomRightRadius: 150,
                        borderTopLeftRadius: 150,
                        borderTopRightRadius: 150
                      },
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(b.p, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)))`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Chart`
                          })
                        }),
                        className: `framer-1biwkb6`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Instrument Sans-500`],
                        layoutDependency: k,
                        layoutId: `amwfxOeEW`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                })]
              })
            })
          })
        })
      })
    }), tc = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-hOCXH.framer-1s1j86n, .framer-hOCXH .framer-1s1j86n { display: block; }`, `.framer-hOCXH.framer-11u8w4q { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 50px 0px 50px; position: relative; width: 1200px; }`, `.framer-hOCXH .framer-172fncu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 58px; justify-content: space-between; max-width: 1100px; overflow: visible; padding: 10px; position: relative; width: 1px; }`, `.framer-hOCXH .framer-12pkugs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-hOCXH .framer-1csqiup { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`, `.framer-hOCXH .framer-1li0kr9 { aspect-ratio: 3 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); overflow: visible; position: relative; width: 147px; }`, `.framer-hOCXH .framer-myuy4z-container { flex: none; height: 30px; position: relative; width: 30px; }`, `.framer-hOCXH .framer-1taprpk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-hOCXH .framer-1mlv9ao, .framer-hOCXH .framer-1w6zlz4, .framer-hOCXH .framer-u2ri7r, .framer-hOCXH .framer-1b18pcz, .framer-hOCXH .framer-2cghts, .framer-hOCXH .framer-1968dhv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-hOCXH .framer-4a4ujd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: min-content; }`, `.framer-hOCXH .framer-1biwkb6 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`, `.framer-hOCXH.framer-v-zymd3j.framer-11u8w4q { padding: 20px 40px 0px 40px; }`, `.framer-hOCXH.framer-v-jjdbds.framer-11u8w4q, .framer-hOCXH.framer-v-14qeqr7.framer-11u8w4q { align-content: flex-start; align-items: flex-start; gap: 0px; padding: 0px; width: 810px; }`, `.framer-hOCXH.framer-v-jjdbds .framer-172fncu, .framer-hOCXH.framer-v-14qeqr7 .framer-172fncu { flex-direction: column; height: min-content; padding: 16px 20px 16px 20px; }`, `.framer-hOCXH.framer-v-jjdbds .framer-12pkugs, .framer-hOCXH.framer-v-jjdbds .framer-4a4ujd, .framer-hOCXH.framer-v-14qeqr7 .framer-12pkugs, .framer-hOCXH.framer-v-14qeqr7 .framer-4a4ujd { width: 100%; }`, `.framer-hOCXH.framer-v-jjdbds .framer-1csqiup, .framer-hOCXH.framer-v-14qeqr7 .framer-1csqiup { flex: 1 0 0px; order: 0; width: 1px; }`, `.framer-hOCXH.framer-v-jjdbds .framer-myuy4z-container, .framer-hOCXH.framer-v-14qeqr7 .framer-myuy4z-container { height: 28px; order: 2; width: 28px; }`, `.framer-hOCXH.framer-v-jjdbds .framer-1taprpk { flex-direction: column; gap: 40px; height: 1px; overflow: hidden; width: 100%; }`, `.framer-hOCXH.framer-v-14qeqr7 .framer-1taprpk { flex-direction: column; gap: 40px; overflow: hidden; padding: 20px 0px 20px 0px; width: 100%; }`, ...ns, ...Bs, `.framer-hOCXH[data-border="true"]::after, .framer-hOCXH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], nc = _e(ec, tc, `framer-hOCXH`), rc = nc, nc.displayName = `Topbar`, nc.defaultProps = {
      height: 78,
      width: 1200
    }, ie(nc, {
      variant: {
        options: [`OXy4ejM2h`, `ohZHzxIWW`, `wEFqBieom`, `tR9JEuqj1`],
        optionTitles: [`Desktop`, `Tablet`, `Phone`, `Phone Expanded`],
        title: `Variant`,
        type: C.Enum
      }
    }), re(nc, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Instrument Sans`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Instrument Sans`,
        url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npST3-QfwmS0v3_7Y.woff2`,
        weight: `500`
      }]
    }, ...Ws, ...se(ts), ...se(zs)], {
      supportsExplicitInterCodegen: !0
    })
  })),
  ac, oc, sc, cc = e((() => {
    j(), k.loadFonts([`GF;Geist Mono-regular`, `GF;Geist Mono-700`]), ac = [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
        weight: `700`
      }]
    }], oc = [`.framer-YNgVh .framer-styles-preset-yid2g2:not(.rich-text-wrapper), .framer-YNgVh .framer-styles-preset-yid2g2.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-YNgVh .framer-styles-preset-yid2g2:not(.rich-text-wrapper), .framer-YNgVh .framer-styles-preset-yid2g2.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-YNgVh .framer-styles-preset-yid2g2:not(.rich-text-wrapper), .framer-YNgVh .framer-styles-preset-yid2g2.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`], sc = `framer-YNgVh`
  })),
  lc, uc, dc, fc = e((() => {
    j(), k.loadFonts([`GF;Geist Mono-500`, `GF;Geist Mono-700`]), lc = [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2`,
        weight: `500`
      }, {
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
        weight: `700`
      }]
    }], uc = [`.framer-VsDqX .framer-styles-preset-zee8bd:not(.rich-text-wrapper), .framer-VsDqX .framer-styles-preset-zee8bd.rich-text-wrapper h3 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-VsDqX .framer-styles-preset-zee8bd:not(.rich-text-wrapper), .framer-VsDqX .framer-styles-preset-zee8bd.rich-text-wrapper h3 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 35px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-VsDqX .framer-styles-preset-zee8bd:not(.rich-text-wrapper), .framer-VsDqX .framer-styles-preset-zee8bd.rich-text-wrapper h3 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`], dc = `framer-VsDqX`
  }));

function pc(e, ...t) {
  let n = {};
  return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc = e((() => {
    i(), j(), y(), a(), cc(), fc(), mc = [`YqoXNcedV`, `X6hlOhnw4`], hc = `framer-v58uS`, gc = {
      X6hlOhnw4: `framer-v-182iqt7`,
      YqoXNcedV: `framer-v-94x2ff`
    }, _c = {
      delay: 0,
      duration: .3,
      ease: [.44, 0, .56, 1],
      type: `tween`
    }, vc = (e, t) => `translateX(-50%) ${t}`, yc = ({
      value: e,
      children: t
    }) => {
      let n = u(v),
        r = e ?? n.transition,
        i = d(() => ({
          ...n,
          transition: r
        }), [JSON.stringify(r)]);
      return c(v.Provider, {
        value: i,
        children: t
      })
    }, bc = b.create(h), xc = {
      "FAQ Closed": `YqoXNcedV`,
      "FAQ Opened": `X6hlOhnw4`
    }, Sc = ({
      answer: e,
      height: t,
      id: n,
      question: r,
      width: i,
      ...a
    }) => ({
      ...a,
      NYBvM5Kte: e ?? a.NYBvM5Kte ?? `We can extract data from most publicly accessible websites. However, certain sites have protections in place that can make scraping difficult. We respect all terms of service and will advise you if a target website falls into this category.`,
      variant: xc[a.variant] ?? a.variant ?? `YqoXNcedV`,
      VZzOp8XV4: r ?? a.VZzOp8XV4 ?? `What are the pricing options?`
    }), Cc = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), wc = t(function (e, t) {
      let r = l(null),
        i = t ?? r,
        a = n(),
        {
          activeLocale: o,
          setLocale: s
        } = pe();
      le();
      let {
        style: u,
        className: d,
        layoutId: p,
        variant: m,
        VZzOp8XV4: g,
        NYBvM5Kte: v,
        ...y
      } = Sc(e), {
        baseVariant: x,
        classNames: S,
        clearLoadingGesture: C,
        gestureHandlers: ee,
        gestureVariant: te,
        isLoading: w,
        setGestureState: T,
        setVariant: E,
        variants: O
      } = ge({
        cycleOrder: mc,
        defaultVariant: `YqoXNcedV`,
        ref: i,
        variant: m,
        variantClassNames: gc
      }), ne = Cc(e, O), {
        activeVariantCallback: re,
        delay: ie
      } = ce(x), k = re(async (...e) => {
        T({
          isPressed: !1
        }), E(`X6hlOhnw4`)
      }), oe = re(async (...e) => {
        T({
          isPressed: !1
        }), E(`YqoXNcedV`)
      }), se = ae(hc, dc, sc), A = () => x === `X6hlOhnw4`;
      return c(_, {
        id: p ?? a,
        children: c(bc, {
          animate: O,
          initial: !1,
          children: c(yc, {
            value: _c,
            children: f(b.div, {
              ...y,
              ...ee,
              className: ae(se, `framer-94x2ff`, d, S),
              "data-border": !0,
              "data-framer-name": `FAQ Closed`,
              "data-highlight": !0,
              layoutDependency: ne,
              layoutId: `YqoXNcedV`,
              onTap: k,
              ref: i,
              style: {
                "--border-bottom-width": `1px`,
                "--border-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                "--border-left-width": `1px`,
                "--border-right-width": `1px`,
                "--border-style": `solid`,
                "--border-top-width": `1px`,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                ...u
              },
              ...pc({
                X6hlOhnw4: {
                  "data-framer-name": `FAQ Opened`,
                  onTap: oe
                }
              }, x, te),
              children: [c(b.div, {
                className: `framer-1etstl0`,
                layoutDependency: ne,
                layoutId: `I74:496;3:7137`,
                children: f(b.div, {
                  className: `framer-xoz3p1`,
                  "data-framer-name": `Plus`,
                  layoutDependency: ne,
                  layoutId: `I74:496;3:7138`,
                  transformTemplate: vc,
                  children: [c(b.div, {
                    className: `framer-10qmkzk`,
                    "data-framer-name": `Vertical Line`,
                    layoutDependency: ne,
                    layoutId: `I74:496;3:7138;1692:1695`,
                    style: {
                      backgroundColor: `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                      rotate: 90
                    },
                    variants: {
                      X6hlOhnw4: {
                        rotate: 0
                      }
                    }
                  }), c(b.div, {
                    className: `framer-1tfl842`,
                    "data-framer-name": `Horizontal Line`,
                    layoutDependency: ne,
                    layoutId: `I74:496;3:7138;1692:1696`,
                    style: {
                      backgroundColor: `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                    }
                  })]
                })
              }), c(b.div, {
                className: `framer-k8w43f`,
                layoutDependency: ne,
                layoutId: `I74:496;3:7139`,
                children: f(b.div, {
                  className: `framer-1x0bnd4`,
                  layoutDependency: ne,
                  layoutId: `I74:496;3:7140`,
                  children: [c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.h3, {
                        className: `framer-styles-preset-zee8bd`,
                        "data-styles-preset": `XJmVSJpIB`,
                        style: {
                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255)))`
                        },
                        children: `What are the pricing options?`
                      })
                    }),
                    className: `framer-ed0omz`,
                    "data-framer-name": `Question`,
                    fonts: [`Inter`],
                    layoutDependency: ne,
                    layoutId: `I74:496;3:7141`,
                    style: {
                      "--extracted-a0htzi": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                    },
                    text: g,
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  }), A() && c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(b.p, {
                        className: `framer-styles-preset-yid2g2`,
                        "data-styles-preset": `I2hFkbamD`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184)))`
                        },
                        children: `We can extract data from most publicly accessible websites. However, certain sites have protections in place that can make scraping difficult. We respect all terms of service and will advise you if a target website falls into this category.`
                      })
                    }),
                    className: `framer-o2l048`,
                    "data-framer-name": `Answer`,
                    fonts: [`Inter`],
                    layoutDependency: ne,
                    layoutId: `I74:496;3:7142`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`,
                      opacity: 0
                    },
                    text: v,
                    variants: {
                      X6hlOhnw4: {
                        opacity: 1
                      }
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  })]
                })
              })]
            })
          })
        })
      })
    }), Tc = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-v58uS.framer-11719by, .framer-v58uS .framer-11719by { display: block; }`, `.framer-v58uS.framer-94x2ff { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 60px 20px 20px; position: relative; width: 820px; will-change: var(--framer-will-change-override, transform); }`, `.framer-v58uS .framer-1etstl0 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; max-width: 40px; min-width: 25px; overflow: visible; padding: 4px 0px 4px 0px; position: relative; width: 5%; }`, `.framer-v58uS .framer-xoz3p1 { align-content: center; align-items: center; aspect-ratio: 0.925 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; left: 49%; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`, `.framer-v58uS .framer-10qmkzk, .framer-v58uS .framer-1tfl842 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 4px; justify-content: center; left: calc(50.00000000000002% - 86.48648648648648% / 2); padding: 0px; position: absolute; top: calc(50.00000000000002% - 4px / 2); width: 86%; z-index: 1; }`, `.framer-v58uS .framer-k8w43f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-v58uS .framer-1x0bnd4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-v58uS .framer-ed0omz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-v58uS .framer-o2l048 { flex: none; height: auto; max-width: 660px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, ...uc, ...oc, `.framer-v58uS[data-border="true"]::after, .framer-v58uS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], Ec = _e(wc, Tc, `framer-v58uS`), Dc = Ec, Ec.displayName = `FAQ Item`, Ec.defaultProps = {
      height: 88,
      width: 820
    }, ie(Ec, {
      variant: {
        options: [`YqoXNcedV`, `X6hlOhnw4`],
        optionTitles: [`FAQ Closed`, `FAQ Opened`],
        title: `Variant`,
        type: C.Enum
      },
      VZzOp8XV4: {
        defaultValue: `What are the pricing options?`,
        displayTextArea: !1,
        title: `Question`,
        type: C.String
      },
      NYBvM5Kte: {
        defaultValue: `We can extract data from most publicly accessible websites. However, certain sites have protections in place that can make scraping difficult. We respect all terms of service and will advise you if a target website falls into this category.`,
        displayTextArea: !1,
        title: `Answer`,
        type: C.String
      }
    }), re(Ec, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
        weight: `400`
      }]
    }, ...se(lc), ...se(ac)], {
      supportsExplicitInterCodegen: !0
    })
  })),
  kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc = e((() => {
    i(), j(), y(), a(), kc = `framer-wEqfv`, Ac = {
      OXkH_FBkM: `framer-v-1afs96e`
    }, jc = {
      damping: 60,
      delay: 0,
      mass: 1,
      stiffness: 500,
      type: `spring`
    }, Mc = ({
      value: e,
      children: t
    }) => {
      let n = u(v),
        r = e ?? n.transition,
        i = d(() => ({
          ...n,
          transition: r
        }), [JSON.stringify(r)]);
      return c(v.Provider, {
        value: i,
        children: t
      })
    }, Nc = b.create(h), Pc = ({
      height: e,
      id: t,
      text: n,
      width: r,
      ...i
    }) => ({
      ...i,
      LSkl_Y_MR: n ?? i.LSkl_Y_MR ?? `GIthub`
    }), Fc = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Ic = _e(t(function (e, t) {
      let r = l(null),
        i = t ?? r,
        a = n(),
        {
          activeLocale: o,
          setLocale: s
        } = pe();
      le();
      let {
        style: u,
        className: d,
        layoutId: f,
        variant: p,
        LSkl_Y_MR: m,
        ...g
      } = Pc(e), {
        baseVariant: v,
        classNames: y,
        clearLoadingGesture: x,
        gestureHandlers: S,
        gestureVariant: C,
        isLoading: ee,
        setGestureState: te,
        setVariant: T,
        variants: E
      } = ge({
        defaultVariant: `OXkH_FBkM`,
        ref: i,
        variant: p,
        variantClassNames: Ac
      }), O = Fc(e, E), ne = ae(kc);
      return c(_, {
        id: f ?? a,
        children: c(Nc, {
          animate: E,
          initial: !1,
          // children: c(Mc, {
          //   value: jc,
          //   children: c(w, {
          //     href: `https://github.com/TensoraL2`,
          //     motionChild: !0,
          //     nodeId: `OXkH_FBkM`,
          //     openInNewTab: !0,
          //     scopeId: `z5uI9FfWU`,
          //     children: c(b.a, {
          //       ...g,
          //       ...S,
          //       className: `${ae(ne,`framer-1afs96e`,d,y)} framer-1fijt8k`,
          //       "data-framer-name": `White Button`,
          //       layoutDependency: O,
          //       layoutId: `OXkH_FBkM`,
          //       ref: i,
          //       style: {
          //         backgroundColor: `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
          //         borderBottomLeftRadius: 11,
          //         borderBottomRightRadius: 11,
          //         borderTopLeftRadius: 11,
          //         borderTopRightRadius: 11,
          //         ...u
          //       },
          //       children: c(D, {
          //         __fromCanvasComponent: !0,
          //         children: c(h, {
          //           children: c(b.p, {
          //             style: {
          //               "--font-selector": `SW50ZXItQm9sZA==`,
          //               "--framer-font-size": `13px`,
          //               "--framer-font-weight": `700`,
          //               "--framer-letter-spacing": `-0.4px`,
          //               "--framer-line-height": `1.75em`,
          //               "--framer-text-color": `var(--extracted-r6o4lv, rgb(71, 68, 68))`
          //             },
          //             children: `GIthub`
          //           })
          //         }),
          //         className: `framer-zffnz5`,
          //         fonts: [`Inter-Bold`],
          //         layoutDependency: O,
          //         layoutId: `S8VIyuNcS`,
          //         style: {
          //           "--extracted-r6o4lv": `rgb(71, 68, 68)`
          //         },
          //         text: m,
          //         verticalAlignment: `top`,
          //         withExternalLayout: !0
          //       })
          //     })
          //   })
          // })
        })
      })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-wEqfv.framer-1fijt8k, .framer-wEqfv .framer-1fijt8k { display: block; }`, `.framer-wEqfv.framer-1afs96e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; padding: 8px 20px 8px 20px; position: relative; text-decoration: none; width: min-content; }`, `.framer-wEqfv .framer-zffnz5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`], `framer-wEqfv`), Lc = Ic, Ic.displayName = `Fixed Button`, Ic.defaultProps = {
      height: 39,
      width: 80
    }, ie(Ic, {
      LSkl_Y_MR: {
        defaultValue: `GIthub`,
        description: ``,
        displayTextArea: !1,
        title: `Text`,
        type: C.String
      }
    }), re(Ic, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
        weight: `700`
      }]
    }], {
      supportsExplicitInterCodegen: !0
    })
  })),
  zc, Bc, Vc, Hc = e((() => {
    j(), k.loadFonts([`GF;Geist Mono-regular`, `GF;Geist Mono-700`]), zc = [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
        weight: `700`
      }]
    }], Bc = [`.framer-06g49 .framer-styles-preset-cywbxm:not(.rich-text-wrapper), .framer-06g49 .framer-styles-preset-cywbxm.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-06g49 .framer-styles-preset-cywbxm:not(.rich-text-wrapper), .framer-06g49 .framer-styles-preset-cywbxm.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-06g49 .framer-styles-preset-cywbxm:not(.rich-text-wrapper), .framer-06g49 .framer-styles-preset-cywbxm.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e263a55b-7ee4-4b06-b803-a66bd5e50333, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`], Vc = `framer-06g49`
  })),
  Uc, Wc, Gc, Kc = e((() => {
    j(), k.loadFonts([`GF;Geist Mono-500`, `GF;Geist Mono-700`]), Uc = [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2`,
        weight: `500`
      }, {
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
        weight: `700`
      }]
    }], Wc = [`.framer-8mOlW .framer-styles-preset-ahi1gi:not(.rich-text-wrapper), .framer-8mOlW .framer-styles-preset-ahi1gi.rich-text-wrapper h2 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 90px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -2.88px; --framer-line-height: 110%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-8mOlW .framer-styles-preset-ahi1gi:not(.rich-text-wrapper), .framer-8mOlW .framer-styles-preset-ahi1gi.rich-text-wrapper h2 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.88px; --framer-line-height: 110%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-8mOlW .framer-styles-preset-ahi1gi:not(.rich-text-wrapper), .framer-8mOlW .framer-styles-preset-ahi1gi.rich-text-wrapper h2 { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1px; --framer-line-height: 110%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`], Gc = `framer-8mOlW`
  }));

function qc(e, t) {
  return {
    description: `Tensora is an OP Stack Layer 2 on BNB Chain powering a decentralized AI economy. Built for scalability, intelligence, and governance with $TORA, Tensora rewards miners and validators for providing real machine intelligence onchain.
`,
    favicon: `https://framerusercontent.com/assets/vAZY5rkPHbJgWDokveCoahOONGM.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/Rl2T7VgvtvnMvWOnWkdcaIiSHg.jpeg`,
    title: `Tensora – The Intelligence Layer 2 on BNB Chain`
  }
}
var Jc = e((() => {}));

function Yc(e, t) {
  return {
    breakpoints: [{
      hash: `72rtr7`,
      mediaQuery: `(min-width: 1200px)`
    }, {
      hash: `1vbwlyi`,
      mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`
    }, {
      hash: `11rz7pc`,
      mediaQuery: `(max-width: 809.98px)`
    }],
    description: `Tensora is an OP Stack Layer 2 on BNB Chain powering a decentralized AI economy. Built for scalability, intelligence, and governance with $TORA, Tensora rewards miners and validators for providing real machine intelligence onchain.
`,
    elements: {
      CBIsf_FR6: `faqs`,
      nILo6kHia: `signup`,
      O84DTIErx: `howitworks`,
      ol3YTZ9ZJ: `pricing`,
      rsnU9mcNb: `testimonials`,
      ZCbSnKGv9: `features`
    },
    framerSearch: {
      index: !0
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-uWmMi`,
    socialImage: `https://framerusercontent.com/assets/Rl2T7VgvtvnMvWOnWkdcaIiSHg.jpeg`,
    title: qc(e, t).title || `Home`,
    viewport: `width=device-width`
  }
}
var Xc, Zc, Qc = e((() => {
    Jc(), Xc = 1, Zc = {
      exports: {
        default: {
          type: `function`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        metadataVersion: {
          type: `variable`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        __FramerMetadata__: {
          type: `variable`
        }
      }
    }
  })),
  $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El = e((() => {
    i(), j(), y(), a(), Uo(), es(), xs(), ic(), Oc(), Rc(), Hc(), cc(), os(), Kc(), fc(), Qc(), $c = oe(rc), el = oe($o), tl = ye(b.div), nl = ve(b.div), rl = ve(te), il = oe(Dc), al = oe(Oo), ol = oe(bs), sl = oe(Lc), cl = {
      jA56J6b3g: `(min-width: 810px) and (max-width: 1199.98px)`,
      S8AOEfzlz: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`
    }, ll = `framer-uWmMi`, ul = {
      jA56J6b3g: `framer-v-1vbwlyi`,
      S8AOEfzlz: `framer-v-11rz7pc`,
      WQLkyLRf1: `framer-v-72rtr7`
    }, dl = {
      delay: 0,
      duration: .3,
      ease: [.44, 0, .56, 1],
      type: `tween`
    }, fl = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: dl,
      x: 0,
      y: 0
    }, pl = {
      opacity: .001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 20
    }, ml = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 40
    }, hl = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: dl,
      x: 0,
      y: 40
    }, gl = {
      delay: 0,
      duration: 3.5,
      ease: [.44, 0, .56, 1],
      type: `tween`
    }, _l = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20
    }, vl = ({
      value: e
    }) => fe() ? null : c(`style`, {
      dangerouslySetInnerHTML: {
        __html: e
      },
      "data-framer-html-style": ``
    }), yl = {
      Desktop: `WQLkyLRf1`,
      Phone: `S8AOEfzlz`,
      Tablet: `jA56J6b3g`
    }, bl = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: yl[r.variant] ?? r.variant ?? `WQLkyLRf1`
    }), xl = t(function (e, t) {
      let r = l(null),
        i = t ?? r,
        a = n(),
        {
          activeLocale: o,
          setLocale: s
        } = pe(),
        u = le(),
        {
          style: p,
          className: m,
          layoutId: g,
          variant: v,
          ...y
        } = bl(e),
        C = d(() => Yc({}, o), [o]);
      me(C);
      let [E, ne] = de(v, cl, !1), re = ae(ll, Vc, Gc, sc, dc, rs), ie = he(`O84DTIErx`), k = l(null), oe = he(`rsnU9mcNb`), se = l(null), j = he(`ZCbSnKGv9`), ce = l(null), fe = he(`ol3YTZ9ZJ`), ge = l(null), _e = he(`CBIsf_FR6`), ve = l(null), ye = he(`nILo6kHia`), M = l(null);
      return ue({}), c(ee.Provider, {
        value: {
          primaryVariantId: `WQLkyLRf1`,
          variantClassNames: ul
        },
        children: f(_, {
          id: g ?? a,
          children: [c(vl, {
            value: `html body { background: rgb(10, 10, 10); }`
          }), f(b.div, {
            ...y,
            className: ae(re, `framer-72rtr7`, m),
            ref: i,
            style: {
              ...p
            },
            children: [c(T, {
              breakpoint: E,
              overrides: {
                jA56J6b3g: {
                  width: u ?.width || `100vw`
                },
                S8AOEfzlz: {
                  width: u ?.width || `100vw`
                }
              },
              children: c(x, {
                height: 78,
                y: (u ?.y || 0) + 0,
                children: c(S, {
                  className: `framer-vpjptw-container`,
                  "data-framer-name": `Navbar`,
                  name: `Navbar`,
                  nodeId: `Ygm8YMedJ`,
                  scopeId: `augiA20Il`,
                  children: c(T, {
                    breakpoint: E,
                    overrides: {
                      jA56J6b3g: {
                        style: {
                          width: `100%`
                        },
                        variant: `ohZHzxIWW`
                      },
                      S8AOEfzlz: {
                        style: {
                          width: `100%`
                        },
                        variant: `wEFqBieom`
                      }
                    },
                    children: c(rc, {
                      height: `100%`,
                      id: `Ygm8YMedJ`,
                      layoutId: `Ygm8YMedJ`,
                      name: `Navbar`,
                      variant: `OXy4ejM2h`,
                      width: `100%`
                    })
                  })
                })
              })
            }), f(`div`, {
              className: `framer-13ixd3`,
              "data-framer-name": `Hero`,
              children: [c(T, {
                breakpoint: E,
                overrides: {
                  S8AOEfzlz: {
                    animate: void 0,
                    initial: void 0,
                    optimized: void 0,
                    style: {}
                  }
                },
                children: f(tl, {
                  animate: fl,
                  className: `framer-76q86h`,
                  "data-framer-appear-id": `76q86h`,
                  initial: pl,
                  optimized: !0,
                  style: {
                    transformPerspective: 1200
                  },
                  children: [c(x, {
                    children: c(S, {
                      className: `framer-57ckn-container`,
                      nodeId: `hfDiSBKxb`,
                      scopeId: `augiA20Il`,
                      children: c($o, {
                        height: `100%`,
                        id: `hfDiSBKxb`,
                        layoutId: `hfDiSBKxb`,
                        title: `Tensora L2`,
                        variant: `IZeEBjU2F`,
                        width: `100%`
                      })
                    })
                  }), f(`div`, {
                    className: `framer-1sq0uzu`,
                    children: [f(`div`, {
                      className: `framer-ik1xba`,
                      children: [c(T, {
                        breakpoint: E,
                        overrides: {
                          jA56J6b3g: {
                            children: c(h, {
                              children: c(`h1`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `88px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-2.6px`,
                                  "--framer-line-height": `110%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                                },
                                children: `The Intelligence Layer of BNB Chain`
                              })
                            })
                          },
                          S8AOEfzlz: {
                            children: c(h, {
                              children: c(`h1`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `37px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-1px`,
                                  "--framer-line-height": `110%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                                },
                                children: `The Intelligence Layer of BNB Chain`
                              })
                            })
                          }
                        },
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h1`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `95px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-3.6px`,
                                "--framer-line-height": `110%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `The Intelligence Layer of BNB Chain`
                            })
                          }),
                          className: `framer-1iuikgz`,
                          "data-framer-name": `Revolutionize AI with that SaaS template`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      }), c(T, {
                        breakpoint: E,
                        overrides: {
                          S8AOEfzlz: {
                            children: c(h, {
                              children: c(`p`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `14px`,
                                  "--framer-line-height": `150%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                                },
                                children: `Tensora is the decentralized intelligence layer built on BNB Chain. Powered by OP Stack and secured by BNB, it rewards miners and validators for providing real AI, compute, and insight onchain.`
                              })
                            }),
                            fonts: [`GF;Geist Mono-regular`]
                          }
                        },
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              className: `framer-styles-preset-cywbxm`,
                              "data-styles-preset": `fXzExxgas`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `Tensora is the decentralized intelligence layer built on BNB Chain. Powered by OP Stack and secured by BNB, it rewards miners and validators for providing real AI, compute, and insight onchain.`
                            })
                          }),
                          className: `framer-84n7n8`,
                          "data-framer-name": `Text`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      })]
                    }), f(`div`, {
                      className: `framer-ewv3x`,
                      "data-framer-name": `2 Buttons`,
                      children: [c(w, {
                        href: `https://dexscreener.com/bsc/0x27aa5b209a011caaf5204a79f99f75a0f02b6bf6`,
                        motionChild: !0,
                        nodeId: `syYm6yxtj`,
                        openInNewTab: !0,
                        scopeId: `augiA20Il`,
                        smoothScroll: !0,
                        children: c(b.a, {
                          className: `framer-1spj9gf framer-lux5qc`,
                          "data-border": !0,
                          "data-framer-name": `Button`,
                          "data-reset": `button`,
                          children: c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                style: {
                                  "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                                  "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.3px`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33))`,
                                  "--framer-text-transform": `capitalize`
                                },
                                children: `Chart`
                              })
                            }),
                            className: `framer-11ss567`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Instrument Sans-500`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })
                        })
                      }), c(w, {
                        href: `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x27aa5b209a011caaf5204a79f99f75a0f02b6bf6`,
                        motionChild: !0,
                        nodeId: `Rk6Ha3gCf`,
                        openInNewTab: !0,
                        scopeId: `augiA20Il`,
                        smoothScroll: !0,
                        children: c(b.a, {
                          className: `framer-19i89el framer-lux5qc`,
                          "data-border": !0,
                          "data-framer-name": `Button`,
                          "data-reset": `button`,
                          children: c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                style: {
                                  "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                                  "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.3px`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                                  "--framer-text-transform": `capitalize`
                                },
                                children: `Buy $TORA`
                              })
                            }),
                            className: `framer-52yhl`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Instrument Sans-500`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })
                        })
                      })]
                    })]
                  })]
                })
              }), c(`div`, {
                className: `framer-y1to3x`,
                "data-framer-name": `gradient`
              }), c(T, {
                breakpoint: E,
                overrides: {
                  jA56J6b3g: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 0 + 666.4 - 666.4),
                      pixelHeight: 640,
                      pixelWidth: 1138,
                      src: `https://framerusercontent.com/images/v9AJAzMY2TabOxscDzJ5cJwjyk.gif?width=1138&height=640`
                    }
                  },
                  S8AOEfzlz: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 0 + 587.9 - 587.9),
                      pixelHeight: 640,
                      pixelWidth: 1138,
                      src: `https://framerusercontent.com/images/v9AJAzMY2TabOxscDzJ5cJwjyk.gif?width=1138&height=640`
                    }
                  }
                },
                children: c(te, {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 540,
                    intrinsicWidth: 960,
                    loading: A((u ?.y || 0) + 0 + 0 + 754.1 - 754.1),
                    pixelHeight: 640,
                    pixelWidth: 1138,
                    src: `https://framerusercontent.com/images/v9AJAzMY2TabOxscDzJ5cJwjyk.gif?width=1138&height=640`
                  },
                  className: `framer-1yktl0t`,
                  "data-framer-name": `HeroBG`
                })
              })]
            }), c(T, {
              breakpoint: E,
              overrides: {
                jA56J6b3g: {
                  __framer__styleAppearEffectEnabled: void 0,
                  style: {}
                }
              },
              children: c(nl, {
                __framer__animate: {
                  transition: dl
                },
                __framer__animateOnce: !0,
                __framer__enter: ml,
                __framer__exit: hl,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                className: `framer-1fu90f7`,
                "data-framer-name": `How it works`,
                id: ie,
                ref: k,
                style: {
                  transformPerspective: 1200
                },
                children: f(`div`, {
                  className: `framer-1rk5ih2`,
                  children: [f(`div`, {
                    className: `framer-192zc3z`,
                    "data-framer-name": `Content`,
                    children: [c(x, {
                      children: c(S, {
                        className: `framer-c1bbh5-container`,
                        nodeId: `nrbaUY3YZ`,
                        scopeId: `augiA20Il`,
                        children: c($o, {
                          height: `100%`,
                          id: `nrbaUY3YZ`,
                          layoutId: `nrbaUY3YZ`,
                          title: `How Tensora Works`,
                          variant: `IZeEBjU2F`,
                          width: `100%`
                        })
                      })
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h2`, {
                          className: `framer-styles-preset-ahi1gi`,
                          "data-styles-preset": `TN9X8dCQj`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                          },
                          children: `How Tensora Works`
                        })
                      }),
                      className: `framer-18umnbo`,
                      "data-framer-name": `Heading`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`p`, {
                          className: `framer-styles-preset-cywbxm`,
                          "data-styles-preset": `fXzExxgas`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                          },
                          children: `Tensora transforms AI computation into a decentralized economy. It bridges compute, intelligence, and liquidity between BNB Chain and its AI-driven Layer 2, rewarding miners, validators, and subnet creators for powering real intelligence onchain.`
                        })
                      }),
                      className: `framer-f3a8xb`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  }), c(`div`, {
                    className: `framer-t8h596`,
                    "data-framer-name": `Content`,
                    children: f(`div`, {
                      className: `framer-1ojcjwh`,
                      "data-framer-name": `Row`,
                      children: [f(`div`, {
                        className: `framer-dmdijj`,
                        "data-border": !0,
                        children: [c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h3`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `22px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-1.2px`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `1. Deploy a Subnet`
                            })
                          }),
                          className: `framer-1v3o4q5`,
                          "data-framer-name": `Heading`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        }), c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: `Launch a subnet dedicated to AI inference, training, or analytics. Each subnet has its own validator set and can issue rewards based on compute output.`
                            })
                          }),
                          className: `framer-12lr0mk`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist Mono-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })]
                      }), f(`div`, {
                        className: `framer-3jmvfy`,
                        "data-border": !0,
                        children: [c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h3`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `22px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-1.2px`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `2. Register as a Miner`
                            })
                          }),
                          className: `framer-bqxwoj`,
                          "data-framer-name": `Heading`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        }), c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: `Provide GPU or compute power, connect through the Tensora CLI, and start earning $TORA for verified contributions. Mining is based on proof-of-intelligence — measurable work from real models.`
                            })
                          }),
                          className: `framer-l6koqd`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist Mono-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })]
                      }), f(`div`, {
                        className: `framer-1nn8txv`,
                        "data-border": !0,
                        children: [c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h3`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `22px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-1.2px`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `3. Validate and Earn`
                            })
                          }),
                          className: `framer-15u1b12`,
                          "data-framer-name": `Heading`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        }), c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: `Validators confirm computation proofs and maintain consensus. Verified results generate shared rewards between miners and subnet owners.`
                            })
                          }),
                          className: `framer-2tabqv`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist Mono-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })]
                      }), f(`div`, {
                        className: `framer-1wiah1a`,
                        "data-border": !0,
                        children: [c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h3`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `22px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-1.2px`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `Bridge and Expand`
                            })
                          }),
                          className: `framer-bjhxqy`,
                          "data-framer-name": `Heading`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        }), c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: `Bridge assets between BNB Chain and Tensora instantly, enabling developers and AI agents to access cross-chain liquidity and deploy seamlessly.`
                            })
                          }),
                          className: `framer-fpmpo`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist Mono-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })]
                      })]
                    })
                  })]
                })
              })
            }), f(`div`, {
              className: `framer-1fiookv`,
              "data-framer-name": `Map`,
              children: [f(nl, {
                __framer__animate: {
                  transition: dl
                },
                __framer__animateOnce: !0,
                __framer__enter: ml,
                __framer__exit: hl,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                className: `framer-13t99iw`,
                "data-border": !0,
                "data-framer-name": `Container`,
                style: {
                  transformPerspective: 1200
                },
                children: [c(T, {
                  breakpoint: E,
                  overrides: {
                    jA56J6b3g: {
                      background: {
                        alt: `Map`,
                        fit: `fill`,
                        intrinsicHeight: 476,
                        intrinsicWidth: 1100,
                        loading: A((u ?.y || 0) + 0 + 2221 + 100 + 0 + 0 + 0),
                        pixelHeight: 1080,
                        pixelWidth: 1920,
                        positionX: `51.4%`,
                        positionY: `82.3%`,
                        sizes: `min(${u?.width||`100vw`} - 80px, 1100px)`,
                        src: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080`,
                        srcSet: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080 1920w`
                      }
                    },
                    S8AOEfzlz: {
                      background: {
                        alt: `Map`,
                        fit: `fill`,
                        intrinsicHeight: 476,
                        intrinsicWidth: 1100,
                        loading: A((u ?.y || 0) + 0 + 2082.5 + 80 + 0 + 0 + 0),
                        pixelHeight: 1080,
                        pixelWidth: 1920,
                        positionX: `51.4%`,
                        positionY: `82.3%`,
                        sizes: `min(${u?.width||`100vw`} - 40px, 1100px)`,
                        src: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080`,
                        srcSet: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080 1920w`
                      }
                    }
                  },
                  children: c(te, {
                    background: {
                      alt: `Map`,
                      fit: `fill`,
                      intrinsicHeight: 476,
                      intrinsicWidth: 1100,
                      loading: A((u ?.y || 0) + 0 + 1759.1 + 120 + 0 + 0 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      positionX: `51.4%`,
                      positionY: `82.3%`,
                      sizes: `min(${u?.width||`100vw`} - 100px, 1100px)`,
                      src: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080`,
                      srcSet: `https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/d8BGe5mGKm3QJthf6QLjEzaRKTY.png?width=1920&height=1080 1920w`
                    },
                    className: `framer-yqs6fa`
                  })
                }), f(`div`, {
                  className: `framer-156f6wi`,
                  "data-framer-name": `Content`,
                  children: [f(`div`, {
                    className: `framer-187onu2`,
                    "data-framer-name": `Section Title`,
                    children: [c(x, {
                      children: c(S, {
                        className: `framer-1ksq5fd-container`,
                        nodeId: `LgzuMGESJ`,
                        scopeId: `augiA20Il`,
                        children: c($o, {
                          height: `100%`,
                          id: `LgzuMGESJ`,
                          layoutId: `LgzuMGESJ`,
                          title: `Explore`,
                          variant: `FNA6OXj_0`,
                          width: `100%`
                        })
                      })
                    }), f(`div`, {
                      className: `framer-j8y51w`,
                      "data-framer-name": `Content`,
                      children: [c(T, {
                        breakpoint: E,
                        overrides: {
                          jA56J6b3g: {
                            children: c(h, {
                              children: c(`h2`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `70px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-1.88px`,
                                  "--framer-line-height": `110%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                                  "--framer-text-transform": `capitalize`
                                },
                                children: `Build With Intelligence`
                              })
                            })
                          },
                          S8AOEfzlz: {
                            children: c(h, {
                              children: c(`h2`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `43px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-1px`,
                                  "--framer-line-height": `110%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                                  "--framer-text-transform": `capitalize`
                                },
                                children: `Build With Intelligence`
                              })
                            })
                          }
                        },
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h2`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `90px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-2.88px`,
                                "--framer-line-height": `110%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`,
                                "--framer-text-transform": `capitalize`
                              },
                              children: `Build With Intelligence`
                            })
                          }),
                          className: `framer-1ew25u0`,
                          "data-framer-name": `Heading`,
                          fonts: [`GF;Geist Mono-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      }), c(T, {
                        breakpoint: E,
                        overrides: {
                          S8AOEfzlz: {
                            children: c(h, {
                              children: c(`p`, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-line-height": `150%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                                },
                                children: `Deploy AI-powered dApps and subnets directly on Tensora. From compute networks to onchain inference, the infrastructure is designed to scale machine intelligence on BNB Chain and beyond.`
                              })
                            })
                          }
                        },
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,
                                "--framer-font-family": `"Geist Mono", monospace`,
                                "--framer-font-size": `18px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                              },
                              children: `Deploy AI-powered dApps and subnets directly on Tensora. From compute networks to onchain inference, the infrastructure is designed to scale machine intelligence on BNB Chain and beyond.`
                            })
                          }),
                          className: `framer-1l0wfyi`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist Mono-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      })]
                    })]
                  }), c(w, {
                    href: `https://docs.tensora.network/`,
                    motionChild: !0,
                    nodeId: `rTtwuPbae`,
                    openInNewTab: !0,
                    scopeId: `augiA20Il`,
                    smoothScroll: !0,
                    children: c(b.a, {
                      className: `framer-slsrep framer-lux5qc`,
                      "data-border": !0,
                      "data-framer-name": `Button`,
                      "data-reset": `button`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `rgb(18, 18, 18)`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Read our Docs`
                          })
                        }),
                        className: `framer-1h40m09`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Instrument Sans-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                })]
              }), c(T, {
                breakpoint: E,
                overrides: {
                  jA56J6b3g: {
                    background: {
                      alt: `Gear Icon`,
                      fit: `fill`,
                      loading: A((u ?.y || 0) + 0 + 2221 + 0),
                      pixelHeight: 1500,
                      pixelWidth: 1500,
                      sizes: `250px`,
                      src: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500`,
                      srcSet: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=512&width=1500&height=1500 512w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=1024&width=1500&height=1500 1024w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500 1500w`
                    }
                  },
                  S8AOEfzlz: {
                    background: {
                      alt: `Gear Icon`,
                      fit: `fill`,
                      loading: A((u ?.y || 0) + 0 + 2082.5 + 134),
                      pixelHeight: 1500,
                      pixelWidth: 1500,
                      sizes: `calc(${u?.width||`100vw`} - 1152px)`,
                      src: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500`,
                      srcSet: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=512&width=1500&height=1500 512w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=1024&width=1500&height=1500 1024w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500 1500w`
                    }
                  }
                },
                children: c(rl, {
                  __framer__loop: _l,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopPauseOffscreen: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: `mirror`,
                  __framer__loopTransition: gl,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: `Gear Icon`,
                    fit: `fill`,
                    loading: A((u ?.y || 0) + 0 + 1759.1 + 0),
                    pixelHeight: 1500,
                    pixelWidth: 1500,
                    sizes: `204px`,
                    src: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500`,
                    srcSet: `https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=512&width=1500&height=1500 512w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?scale-down-to=1024&width=1500&height=1500 1024w,https://framerusercontent.com/images/F2s7oAHHSHCtZdJRXnaB8Njjhk.png?width=1500&height=1500 1500w`
                  },
                  className: `framer-1ovf410`,
                  "data-framer-name": `Icon 2`,
                  style: {
                    rotate: 11
                  }
                })
              })]
            }), c(T, {
              breakpoint: E,
              overrides: {
                jA56J6b3g: {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: A((u ?.y || 0) + 0 + 3433.6),
                    pixelHeight: 1080,
                    pixelWidth: 1920,
                    sizes: u ?.width || `100vw`,
                    src: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080`,
                    srcSet: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080 1920w`
                  }
                },
                S8AOEfzlz: {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: A((u ?.y || 0) + 0 + 3110.4),
                    pixelHeight: 1080,
                    pixelWidth: 1920,
                    sizes: u ?.width || `100vw`,
                    src: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080`,
                    srcSet: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080 1920w`
                  }
                }
              },
              children: f(rl, {
                __framer__animate: {
                  transition: dl
                },
                __framer__animateOnce: !0,
                __framer__enter: ml,
                __framer__exit: hl,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                background: {
                  alt: ``,
                  fit: `fill`,
                  loading: A((u ?.y || 0) + 0 + 3013.7),
                  pixelHeight: 1080,
                  pixelWidth: 1920,
                  sizes: u ?.width || `100vw`,
                  src: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080`,
                  srcSet: `https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/YUXTMssniT8IzlbZ1fBMjOGyfM.png?width=1920&height=1080 1920w`
                },
                className: `framer-yyqzup`,
                "data-framer-name": `Testimonial`,
                id: oe,
                ref: se,
                style: {
                  transformPerspective: 1200
                },
                children: [f(`div`, {
                  className: `framer-gykcu8`,
                  children: [c(x, {
                    children: c(S, {
                      className: `framer-1uj2xww-container`,
                      nodeId: `ibOXcUsek`,
                      scopeId: `augiA20Il`,
                      children: c($o, {
                        height: `100%`,
                        id: `ibOXcUsek`,
                        layoutId: `ibOXcUsek`,
                        title: `Tensora Roadmap`,
                        variant: `IZeEBjU2F`,
                        width: `100%`
                      })
                    })
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(`h2`, {
                        className: `framer-styles-preset-ahi1gi`,
                        "data-styles-preset": `TN9X8dCQj`,
                        style: {
                          "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                        },
                        children: `The Road Ahead`
                      })
                    }),
                    className: `framer-10llf6m`,
                    "data-framer-name": `Heading`,
                    fonts: [`Inter`],
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(`p`, {
                        className: `framer-styles-preset-cywbxm`,
                        "data-styles-preset": `fXzExxgas`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                        },
                        children: `Tensora evolves continuously — new subnets, improved consensus, and expanded AI functionality are already on the horizon.`
                      })
                    }),
                    className: `framer-1f8yy6v`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  })]
                }), f(`div`, {
                  className: `framer-24pjgb`,
                  "data-framer-name": `Content`,
                  children: [c(`div`, {
                    className: `framer-1x9y9sg`,
                    "data-border": !0,
                    "data-framer-name": `Column`,
                    children: c(`div`, {
                      className: `framer-15g31h5`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: f(`p`, {
                            className: `framer-styles-preset-yid2g2`,
                            "data-styles-preset": `I2hFkbamD`,
                            style: {
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                            },
                            children: [c(`strong`, {
                              children: `Phase 1:`
                            }), ` `, c(`br`, {}), c(`br`, {}), `Tensora L2 Mainnet Launch`, c(`br`, {}), f(`em`, {
                              children: [`Bridge`, c(`br`, {}), `Validator Registry`, c(`br`, {}), `Explorer`]
                            })]
                          })
                        }),
                        className: `framer-1lcqh62`,
                        "data-framer-name": `Quote`,
                        fonts: [`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  }), f(`div`, {
                    className: `framer-990sqd`,
                    "data-border": !0,
                    "data-framer-name": `Column`,
                    children: [c(`div`, {
                      className: `framer-1lbxvzj`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: f(`p`, {
                            className: `framer-styles-preset-yid2g2`,
                            "data-styles-preset": `I2hFkbamD`,
                            style: {
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                            },
                            children: [f(`strong`, {
                              children: [`Phase 2:`, c(`br`, {})]
                            }), ` `, c(`br`, {}), `AI Mining Activation`, c(`br`, {}), c(`em`, {
                              children: `Compute-to-Earn`
                            }), c(`em`, {
                              children: c(`br`, {})
                            }), c(`em`, {
                              children: `Subnet Creation`
                            }), c(`em`, {
                              children: c(`br`, {})
                            }), c(`em`, {
                              children: `Model Verification`
                            })]
                          })
                        }),
                        className: `framer-tc7get`,
                        "data-framer-name": `Quote`,
                        fonts: [`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    }), c(`div`, {
                      className: `framer-1ru3iy7`,
                      "data-framer-name": `Avatar`
                    })]
                  }), c(`div`, {
                    className: `framer-1q6r8a8`,
                    "data-border": !0,
                    "data-framer-name": `Column`,
                    children: c(`div`, {
                      className: `framer-1oe9p7b`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: f(`p`, {
                            className: `framer-styles-preset-yid2g2`,
                            "data-styles-preset": `I2hFkbamD`,
                            style: {
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                            },
                            children: [c(`strong`, {
                              children: `Phase 3:`
                            }), ` `, c(`br`, {}), `Intelligence Marketplace`, c(`br`, {}), f(`em`, {
                              children: [`Decentralized model sharing Governance`, c(`br`, {}), ` Incentive layers.`]
                            })]
                          })
                        }),
                        className: `framer-tn3wl9`,
                        "data-framer-name": `Quote`,
                        fonts: [`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                })]
              })
            }), c(`div`, {
              className: `framer-kprneg`,
              "data-framer-name": `Solutions`,
              id: j,
              ref: ce,
              children: f(nl, {
                __framer__animate: {
                  transition: dl
                },
                __framer__animateOnce: !0,
                __framer__enter: ml,
                __framer__exit: hl,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                className: `framer-lnfhfj`,
                "data-framer-name": `Content`,
                style: {
                  transformPerspective: 1200
                },
                children: [c(`div`, {
                  className: `framer-uujm2d`,
                  "data-framer-name": `Content`,
                  children: f(`div`, {
                    className: `framer-qxzwzo`,
                    "data-framer-name": `Section Title`,
                    children: [f(`div`, {
                      className: `framer-8lun2t`,
                      "data-framer-name": `Content`,
                      children: [f(`div`, {
                        className: `framer-3pvwr6`,
                        children: [c(x, {
                          children: c(S, {
                            className: `framer-136tp56-container`,
                            nodeId: `r6THGNDYz`,
                            scopeId: `augiA20Il`,
                            children: c($o, {
                              height: `100%`,
                              id: `r6THGNDYz`,
                              layoutId: `r6THGNDYz`,
                              title: `Solutions`,
                              variant: `IZeEBjU2F`,
                              width: `100%`
                            })
                          })
                        }), c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`h2`, {
                              className: `framer-styles-preset-ahi1gi`,
                              "data-styles-preset": `TN9X8dCQj`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                              },
                              children: `Tensora Core Modules`
                            })
                          }),
                          className: `framer-e8a6ws`,
                          "data-framer-name": `Heading`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })]
                      }), c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            className: `framer-styles-preset-yid2g2`,
                            "data-styles-preset": `I2hFkbamD`,
                            style: {
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                            },
                            children: `Tensora is built around a modular system that merges AI compute, consensus, and decentralized rewards. Each module strengthens the intelligence layer on BNB Chain.`
                          })
                        }),
                        className: `framer-89r7el`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })]
                    }), c(`div`, {
                      className: `framer-1n8mczu`,
                      "data-framer-name": `2 Buttons`,
                      children: c(w, {
                        href: `https://docs.tensora.network/`,
                        motionChild: !0,
                        nodeId: `EuNS_cXox`,
                        openInNewTab: !0,
                        scopeId: `augiA20Il`,
                        smoothScroll: !0,
                        children: c(b.a, {
                          className: `framer-1vsrhcb framer-lux5qc`,
                          "data-border": !0,
                          "data-framer-name": `Button`,
                          "data-reset": `button`,
                          children: c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                style: {
                                  "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                                  "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.3px`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `rgb(46, 46, 46)`,
                                  "--framer-text-transform": `capitalize`
                                },
                                children: `Learn More`
                              })
                            }),
                            className: `framer-4osnv6`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Instrument Sans-500`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })
                        })
                      })
                    })]
                  })
                }), f(`div`, {
                  className: `framer-1nzenti`,
                  "data-framer-name": `Content`,
                  children: [f(`div`, {
                    className: `framer-4x173i`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    children: [c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h3`, {
                          className: `framer-styles-preset-zee8bd`,
                          "data-styles-preset": `XJmVSJpIB`,
                          style: {
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                          },
                          children: `Subnets`
                        })
                      }),
                      className: `framer-1cdvmwu`,
                      "data-framer-name": `Heading`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`blockquote`, {
                          children: f(`p`, {
                            className: `framer-styles-preset-yid2g2`,
                            "data-styles-preset": `I2hFkbamD`,
                            style: {
                              "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                            },
                            children: [`Independent AI environments deployed on Tensora.`, c(`br`, {}), `Each subnet operates as a micro-network — hosting models, datasets, or logic. They’re managed by creators, validated by the network, and rewarded in $TORA.`]
                          })
                        })
                      }),
                      className: `framer-15u39i`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  }), f(`div`, {
                    className: `framer-1bxqe2r`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    children: [c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h3`, {
                          className: `framer-styles-preset-zee8bd`,
                          "data-styles-preset": `XJmVSJpIB`,
                          style: {
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                          },
                          children: `Consensus`
                        })
                      }),
                      className: `framer-1tjcki5`,
                      "data-framer-name": `Heading`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: f(`p`, {
                          className: `framer-styles-preset-yid2g2`,
                          "data-styles-preset": `I2hFkbamD`,
                          style: {
                            "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                          },
                          children: [`A hybrid system combining Proof-of-Stake with Proof-of-Intelligence.`, c(`br`, {}), `Validators confirm both computation and result accuracy, maintaining reliability and fairness across subnets.`]
                        })
                      }),
                      className: `framer-1aod89i`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  }), f(`div`, {
                    className: `framer-14xsiey`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    children: [c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h3`, {
                          className: `framer-styles-preset-zee8bd`,
                          "data-styles-preset": `XJmVSJpIB`,
                          style: {
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                          },
                          children: `Compute Layer`
                        })
                      }),
                      className: `framer-k0e9yu`,
                      "data-framer-name": `Heading`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: f(`p`, {
                          className: `framer-styles-preset-yid2g2`,
                          "data-styles-preset": `I2hFkbamD`,
                          style: {
                            "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                          },
                          children: [`The engine that powers AI mining.`, c(`br`, {}), `GPU nodes perform training or inference tasks submitted by subnets. Verified compute is rewarded in real time via emission cycles.`]
                        })
                      }),
                      className: `framer-fzwxpe`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  }), f(`div`, {
                    className: `framer-tu59wr`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    children: [c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h3`, {
                          className: `framer-styles-preset-zee8bd`,
                          "data-styles-preset": `XJmVSJpIB`,
                          style: {
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                          },
                          children: `Economy`
                        })
                      }),
                      className: `framer-3zo6cv`,
                      "data-framer-name": `Heading`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: f(`p`, {
                          className: `framer-styles-preset-yid2g2`,
                          "data-styles-preset": `I2hFkbamD`,
                          style: {
                            "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                          },
                          children: [`The $TORA token drives the system.`, c(`br`, {}), `It fuels gas fees, validator staking, miner incentives, and subnet creation — anchoring Tensora’s onchain intelligence economy.`]
                        })
                      }),
                      className: `framer-1tzfyoq`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  })]
                })]
              })
            }), f(nl, {
              __framer__animate: {
                transition: dl
              },
              __framer__animateOnce: !0,
              __framer__enter: ml,
              __framer__exit: hl,
              __framer__styleAppearEffectEnabled: !0,
              __framer__threshold: 0,
              __perspectiveFX: !1,
              __targetOpacity: 1,
              className: `framer-1ysgqxc`,
              "data-framer-name": `Pricing`,
              id: fe,
              ref: ge,
              style: {
                transformPerspective: 1200
              },
              children: [f(`div`, {
                className: `framer-19d5y7h`,
                "data-framer-name": `Section Title`,
                children: [c(T, {
                  breakpoint: E,
                  overrides: {
                    jA56J6b3g: {
                      children: c(h, {
                        children: c(`h2`, {
                          style: {
                            "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                            "--framer-font-family": `"Geist Mono", monospace`,
                            "--framer-font-size": `55px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-1.49px`,
                            "--framer-line-height": `110%`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                            "--framer-text-transform": `capitalize`
                          },
                          children: `Join the Tensora Network`
                        })
                      })
                    },
                    S8AOEfzlz: {
                      children: c(h, {
                        children: c(`h2`, {
                          style: {
                            "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                            "--framer-font-family": `"Geist Mono", monospace`,
                            "--framer-font-size": `25px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.87px`,
                            "--framer-line-height": `110%`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                            "--framer-text-transform": `capitalize`
                          },
                          children: `Join the Tensora Network`
                        })
                      })
                    }
                  },
                  children: c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(`h2`, {
                        style: {
                          "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                          "--framer-font-family": `"Geist Mono", monospace`,
                          "--framer-font-size": `73px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-2.88px`,
                          "--framer-line-height": `110%`,
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                          "--framer-text-transform": `capitalize`
                        },
                        children: `Join the Tensora Network`
                      })
                    }),
                    className: `framer-m31r4h`,
                    "data-framer-name": `Heading`,
                    fonts: [`GF;Geist Mono-500`],
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  })
                }), c(D, {
                  __fromCanvasComponent: !0,
                  children: c(h, {
                    children: c(`p`, {
                      className: `framer-styles-preset-cywbxm`,
                      "data-styles-preset": `fXzExxgas`,
                      style: {
                        "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                      },
                      children: `Be part of the decentralized intelligence layer on BNB Chain. Whether you’re providing compute, validating outputs, or building subnets — there’s a role for everyone in the Tensora ecosystem.`
                    })
                  }),
                  className: `framer-t8govv`,
                  "data-framer-name": `Text`,
                  fonts: [`Inter`],
                  verticalAlignment: `top`,
                  withExternalLayout: !0
                })]
              }), f(`div`, {
                className: `framer-jf3inl`,
                "data-framer-name": `Content`,
                children: [f(`div`, {
                  className: `framer-173qjkh`,
                  "data-border": !0,
                  "data-framer-name": `Content`,
                  children: [f(`div`, {
                    className: `framer-ih411t`,
                    "data-framer-name": `Content`,
                    children: [f(`div`, {
                      className: `framer-1sotfka`,
                      "data-framer-name": `Price`,
                      children: [c(`div`, {
                        className: `framer-9f6zje`,
                        "data-border": !0,
                        "data-framer-name": `Top Tag`,
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.28px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: c(w, {
                                href: `https://docs.tensora.network/`,
                                motionChild: !0,
                                nodeId: `I128:270;93:297`,
                                openInNewTab: !0,
                                relValues: [],
                                scopeId: `augiA20Il`,
                                smoothScroll: !1,
                                children: c(b.a, {
                                  className: `framer-styles-preset-jfrssf`,
                                  "data-styles-preset": `L6EzZR8ZL`,
                                  children: `Miner`
                                })
                              })
                            })
                          }),
                          className: `framer-1ckj03o`,
                          "data-framer-name": `AI for Everyone`,
                          fonts: [`GF;Instrument Sans-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      }), c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `17px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.77px`,
                              "--framer-line-height": `110%`,
                              "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                            },
                            children: `Earn by providing compute power`
                          })
                        }),
                        className: `framer-18wfd90`,
                        "data-framer-name": `Price`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })]
                    }), c(`div`, {
                      className: `framer-nhjz64`,
                      "data-framer-name": `Divider`
                    }), c(`div`, {
                      className: `framer-mpy66g`,
                      "data-framer-name": `Content`,
                      children: f(`div`, {
                        className: `framer-1rtzlch`,
                        "data-framer-name": `List`,
                        children: [f(`div`, {
                          className: `framer-d6vub`,
                          "data-framer-name": `List Item`,
                          children: [c(O, {
                            className: `framer-1eqjwdf`,
                            "data-framer-name": `Check`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                            svgContentId: 9136532440,
                            withExternalLayout: !0
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(199, 199, 199))`
                                },
                                children: `Contribute GPU resources`
                              })
                            }),
                            className: `framer-18p6kbr`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-gbyxs4`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-etd2xs`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: f(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: [`Perform AI inference and `, c(`br`, {}), `model execution`]
                              })
                            }),
                            className: `framer-ninefo`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-1is6jgi`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-p74zms`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: `Receive rewards in $TORA`
                              })
                            }),
                            className: `framer-ytpml`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        })]
                      })
                    })]
                  }), c(w, {
                    href: `https://docs.tensora.network/`,
                    motionChild: !0,
                    nodeId: `kcMz12uzO`,
                    openInNewTab: !0,
                    scopeId: `augiA20Il`,
                    smoothScroll: !0,
                    children: c(b.a, {
                      className: `framer-peg9n7 framer-lux5qc`,
                      "data-border": !0,
                      "data-framer-name": `Button`,
                      "data-reset": `button`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `rgb(36, 36, 36)`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Start Mining`
                          })
                        }),
                        className: `framer-1kq5k6l`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                }), f(`div`, {
                  className: `framer-vfx85a`,
                  "data-border": !0,
                  "data-framer-name": `Content`,
                  children: [f(`div`, {
                    className: `framer-cn3b6u`,
                    "data-framer-name": `Content`,
                    children: [f(`div`, {
                      className: `framer-yl5rh2`,
                      "data-framer-name": `Price`,
                      children: [c(`div`, {
                        className: `framer-y50e7d`,
                        "data-border": !0,
                        "data-framer-name": `Top Tag`,
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.28px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: c(w, {
                                href: `https://docs.tensora.network/`,
                                motionChild: !0,
                                nodeId: `I128:272;93:297`,
                                openInNewTab: !0,
                                relValues: [],
                                scopeId: `augiA20Il`,
                                smoothScroll: !1,
                                children: c(b.a, {
                                  className: `framer-styles-preset-jfrssf`,
                                  "data-styles-preset": `L6EzZR8ZL`,
                                  children: `Validator`
                                })
                              })
                            })
                          }),
                          className: `framer-dprwma`,
                          "data-framer-name": `AI for Everyone`,
                          fonts: [`GF;Instrument Sans-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      }), c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `17px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.77px`,
                              "--framer-line-height": `110%`,
                              "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                            },
                            children: `Secure and verify intelligence`
                          })
                        }),
                        className: `framer-1bebcck`,
                        "data-framer-name": `Price`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })]
                    }), c(`div`, {
                      className: `framer-5vo3y`,
                      "data-framer-name": `Divider`
                    }), c(`div`, {
                      className: `framer-tahaf4`,
                      "data-framer-name": `Content`,
                      children: f(`div`, {
                        className: `framer-1g4ul6e`,
                        "data-framer-name": `List`,
                        children: [f(`div`, {
                          className: `framer-1jyvipy`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-ymc8kz`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: `Validate subnet outputs and accuracy`
                              })
                            }),
                            className: `framer-1hmvjm3`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-yk18ey`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-1bcj9bv`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: `Participate in Yuma consensus`
                              })
                            }),
                            className: `framer-i7y6pa`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-9hpd7r`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-18ex25a`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: f(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: [`Earn validator and `, c(`br`, {}), `delegator rewards`]
                              })
                            }),
                            className: `framer-1wt7el1`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        })]
                      })
                    })]
                  }), c(w, {
                    href: `https://docs.tensora.network/`,
                    motionChild: !0,
                    nodeId: `o_lAFlJh0`,
                    openInNewTab: !0,
                    scopeId: `augiA20Il`,
                    smoothScroll: !0,
                    children: c(b.a, {
                      className: `framer-hge01a framer-lux5qc`,
                      "data-border": !0,
                      "data-framer-name": `Button`,
                      "data-reset": `button`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `rgb(36, 36, 36)`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Become a Validator`
                          })
                        }),
                        className: `framer-hazdun`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                }), f(`div`, {
                  className: `framer-8tityc`,
                  "data-border": !0,
                  "data-framer-name": `Content`,
                  children: [f(`div`, {
                    className: `framer-o3sm2u`,
                    "data-framer-name": `Content`,
                    children: [f(`div`, {
                      className: `framer-gth2x8`,
                      "data-framer-name": `Price`,
                      children: [c(`div`, {
                        className: `framer-1w5351f`,
                        "data-border": !0,
                        "data-framer-name": `Top Tag`,
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.28px`,
                                "--framer-line-height": `150%`,
                                "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                              },
                              children: c(w, {
                                href: `https://docs.tensora.network/`,
                                motionChild: !0,
                                nodeId: `I128:274;93:297`,
                                openInNewTab: !0,
                                relValues: [],
                                scopeId: `augiA20Il`,
                                smoothScroll: !1,
                                children: c(b.a, {
                                  className: `framer-styles-preset-jfrssf`,
                                  "data-styles-preset": `L6EzZR8ZL`,
                                  children: `Subnet Builder`
                                })
                              })
                            })
                          }),
                          className: `framer-1101dle`,
                          "data-framer-name": `AI for Everyone`,
                          fonts: [`GF;Instrument Sans-regular`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      }), c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `17px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.84px`,
                              "--framer-line-height": `110%`,
                              "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                            },
                            children: `Launch your own AI network`
                          })
                        }),
                        className: `framer-zz52dk`,
                        "data-framer-name": `Price`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })]
                    }), c(`div`, {
                      className: `framer-16s39h1`,
                      "data-framer-name": `Divider`
                    }), c(`div`, {
                      className: `framer-1j3ioiw`,
                      "data-framer-name": `Content`,
                      children: f(`div`, {
                        className: `framer-1sx3shn`,
                        "data-framer-name": `List`,
                        children: [f(`div`, {
                          className: `framer-bq6cv0`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-1ft3lgy`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: c(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: `Deploy decentralized AI subnets`
                              })
                            }),
                            className: `framer-1ao1ycm`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-2t4x7g`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-tvk4o5`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: f(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: [`Define hyperparameters `, c(`br`, {}), `and rewards`]
                              })
                            }),
                            className: `framer-105i62l`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), f(`div`, {
                          className: `framer-1ukiqla`,
                          "data-framer-name": `List Item`,
                          children: [c(T, {
                            breakpoint: E,
                            overrides: {
                              jA56J6b3g: {
                                svgContentId: 9136532440
                              },
                              S8AOEfzlz: {
                                svgContentId: 9136532440
                              }
                            },
                            children: c(O, {
                              className: `framer-19o8rh4`,
                              "data-framer-name": `Check`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 20.348 7.564 L 9.748 18.164 C 9.654 18.259 9.526 18.312 9.393 18.312 C 9.26 18.312 9.132 18.259 9.038 18.164 L 3.648 12.774 C 3.553 12.68 3.5 12.552 3.5 12.419 C 3.5 12.286 3.553 12.158 3.648 12.064 L 4.348 11.364 C 4.442 11.269 4.57 11.216 4.703 11.216 C 4.836 11.216 4.964 11.269 5.058 11.364 L 9.388 15.694 L 18.938 6.144 C 19.136 5.952 19.45 5.952 19.648 6.144 L 20.348 6.854 C 20.443 6.948 20.496 7.076 20.496 7.209 C 20.496 7.342 20.443 7.47 20.348 7.564 Z" fill="var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41)) /* {&quot;name&quot;:&quot;Purplish Blue&quot;} */"></path></svg>`,
                              svgContentId: 546597848,
                              withExternalLayout: !0
                            })
                          }), c(D, {
                            __fromCanvasComponent: !0,
                            children: c(h, {
                              children: f(`p`, {
                                className: `framer-styles-preset-yid2g2`,
                                "data-styles-preset": `I2hFkbamD`,
                                style: {
                                  "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                                },
                                children: [`Monetize your models `, c(`br`, {}), `and datasets`]
                              })
                            }),
                            className: `framer-1costcb`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                          })]
                        }), c(`div`, {
                          className: `framer-1xdktd2`,
                          "data-framer-name": `List Item`
                        })]
                      })
                    })]
                  }), c(w, {
                    href: `https://docs.tensora.network/`,
                    motionChild: !0,
                    nodeId: `xNrLQoNBq`,
                    openInNewTab: !0,
                    scopeId: `augiA20Il`,
                    smoothScroll: !0,
                    children: c(b.a, {
                      className: `framer-gjvcra framer-lux5qc`,
                      "data-border": !0,
                      "data-framer-name": `Button`,
                      "data-reset": `button`,
                      children: c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.3px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `rgb(36, 36, 36)`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Create a Subnet`
                          })
                        }),
                        className: `framer-161z0o9`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Geist Mono-500`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })
                    })
                  })]
                })]
              }), c(T, {
                breakpoint: E,
                overrides: {
                  jA56J6b3g: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 6450.2 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      positionX: `62.4%`,
                      positionY: `85.9%`,
                      sizes: u ?.width || `100vw`,
                      src: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080`,
                      srcSet: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?width=1920&height=1080 1920w`
                    }
                  },
                  S8AOEfzlz: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 5897 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      positionX: `62.4%`,
                      positionY: `85.9%`,
                      sizes: u ?.width || `100vw`,
                      src: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080`,
                      srcSet: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?width=1920&height=1080 1920w`
                    }
                  }
                },
                children: c(te, {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 540,
                    intrinsicWidth: 960,
                    loading: A((u ?.y || 0) + 0 + 5287.7 + 0),
                    pixelHeight: 1080,
                    pixelWidth: 1920,
                    positionX: `62.4%`,
                    positionY: `85.9%`,
                    sizes: u ?.width || `100vw`,
                    src: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080`,
                    srcSet: `https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/xzM1sE62GAoGIUavZYNtbX6Nw.png?width=1920&height=1080 1920w`
                  },
                  className: `framer-n4bcz1`,
                  "data-framer-name": `gradient`
                })
              }), c(T, {
                breakpoint: E,
                overrides: {
                  jA56J6b3g: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 6450.2 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      sizes: u ?.width || `100vw`,
                      src: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080`,
                      srcSet: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?width=1920&height=1080 1920w`
                    }
                  },
                  S8AOEfzlz: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 5897 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      sizes: u ?.width || `100vw`,
                      src: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080`,
                      srcSet: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?width=1920&height=1080 1920w`
                    }
                  }
                },
                children: c(te, {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 540,
                    intrinsicWidth: 960,
                    loading: A((u ?.y || 0) + 0 + 5287.7 + 0),
                    pixelHeight: 1080,
                    pixelWidth: 1920,
                    sizes: u ?.width || `100vw`,
                    src: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080`,
                    srcSet: `https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/oqpGSBYVGH3NssbzxMG8EjTz98.png?width=1920&height=1080 1920w`
                  },
                  className: `framer-126l0d9`,
                  "data-framer-name": `waterfall_1920x1080_dark_rocks_5k_23728`
                })
              })]
            }), c(nl, {
              __framer__animate: {
                transition: dl
              },
              __framer__animateOnce: !0,
              __framer__enter: ml,
              __framer__exit: hl,
              __framer__styleAppearEffectEnabled: !0,
              __framer__threshold: 0,
              __perspectiveFX: !1,
              __targetOpacity: 1,
              className: `framer-30uuls`,
              "data-framer-name": `FAQ`,
              id: _e,
              ref: ve,
              style: {
                transformPerspective: 1200
              },
              children: f(`div`, {
                className: `framer-c3r0ne`,
                "data-framer-name": `Container`,
                children: [f(`div`, {
                  className: `framer-fh9vex`,
                  children: [c(x, {
                    children: c(S, {
                      className: `framer-13t9key-container`,
                      nodeId: `z5d88ALVh`,
                      scopeId: `augiA20Il`,
                      children: c($o, {
                        height: `100%`,
                        id: `z5d88ALVh`,
                        layoutId: `z5d88ALVh`,
                        title: `Help`,
                        variant: `IZeEBjU2F`,
                        width: `100%`
                      })
                    })
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(`h2`, {
                        className: `framer-styles-preset-ahi1gi`,
                        "data-styles-preset": `TN9X8dCQj`,
                        style: {
                          "--framer-text-color": `var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, rgb(255, 207, 41))`
                        },
                        children: `FAQs`
                      })
                    }),
                    className: `framer-8s291s`,
                    "data-framer-name": `Heading`,
                    fonts: [`Inter`],
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  }), c(D, {
                    __fromCanvasComponent: !0,
                    children: c(h, {
                      children: c(`p`, {
                        className: `framer-styles-preset-cywbxm`,
                        "data-styles-preset": `fXzExxgas`,
                        style: {
                          "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                        },
                        children: `Get quick answers about Tensora — from the AI mining system and subnets, to bridging, staking, and earning $TORA.`
                      })
                    }),
                    className: `framer-bje7sw`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    verticalAlignment: `top`,
                    withExternalLayout: !0
                  })]
                }), f(`div`, {
                  className: `framer-fnb4zk`,
                  "data-framer-name": `FAQ`,
                  children: [f(`div`, {
                    className: `framer-mmscny`,
                    children: [c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 0
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 0
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 0,
                        children: c(S, {
                          className: `framer-1egbfm6-container`,
                          nodeId: `HU1LY8ZGK`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `HU1LY8ZGK`,
                            layoutId: `HU1LY8ZGK`,
                            NYBvM5Kte: `Tensora is a decentralized intelligence layer on BNB Chain, built using the OP Stack. It transforms AI compute into a tokenized economy where miners, validators, and subnet builders earn $TORA for providing real intelligence and validation onchain.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `What is Tensora?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 108
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 108
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 108,
                        children: c(S, {
                          className: `framer-1tn38sz-container`,
                          nodeId: `ud8hECgrd`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `ud8hECgrd`,
                            layoutId: `ud8hECgrd`,
                            NYBvM5Kte: `You can participate as a miner, validator, or subnet builder. Miners contribute compute power, validators verify results for accuracy, and subnet builders deploy specialized AI environments. Each role earns proportional $TORA rewards.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `How can I earn $TORA?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 216
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 216
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 216,
                        children: c(S, {
                          className: `framer-19p3wge-container`,
                          nodeId: `SsB0Hu_1I`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `SsB0Hu_1I`,
                            layoutId: `SsB0Hu_1I`,
                            NYBvM5Kte: `Subnets are independent AI networks that run inside Tensora — think of them as decentralized marketplaces for models or inference tasks. Each subnet can define its own parameters, incentives, and logic.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `What are subnets?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 324
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 324
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 324,
                        children: c(S, {
                          className: `framer-qtw0e9-container`,
                          nodeId: `ZpbAF51QR`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `ZpbAF51QR`,
                            layoutId: `ZpbAF51QR`,
                            NYBvM5Kte: `Tensora is built as an OP Stack Layer 2 that settles to BNB Chain. This means it inherits BNB security, low fees, and uses BNB as gas, while supporting native ERC-4337 smart wallets and $TORA Paymaster transactions.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `What chain does Tensora use?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 432
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 432
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 432,
                        children: c(S, {
                          className: `framer-11kemil-container`,
                          nodeId: `PdzBsI9Wi`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `PdzBsI9Wi`,
                            layoutId: `PdzBsI9Wi`,
                            NYBvM5Kte: `You can use the Tensora Bridge to move BNB or $WTORA from BNB Chain to Tensora. Once bridged, you can stake, deploy, or use them for AI-related tasks directly on L2.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `How do I bridge assets to Tensora?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 540
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 540
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 540,
                        children: c(S, {
                          className: `framer-5rwuho-container`,
                          nodeId: `QFvQHLW_Q`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `QFvQHLW_Q`,
                            layoutId: `QFvQHLW_Q`,
                            NYBvM5Kte: `The mining and validation system launches in Phase 2, shortly after the mainnet bridge goes live. Early supporters will be able to register as pre-miners and validators before the emission window opens.`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `When will mining be live?`,
                            width: `100%`
                          })
                        })
                      })
                    }), c(T, {
                      breakpoint: E,
                      overrides: {
                        jA56J6b3g: {
                          width: `min(${u?.width||`100vw`} - 80px, 900px)`,
                          y: (u ?.y || 0) + 0 + 8709.7 + 100 + 0 + 361 + 0 + 0 + 0 + 648
                        },
                        S8AOEfzlz: {
                          width: `min(${u?.width||`100vw`} - 40px, 900px)`,
                          y: (u ?.y || 0) + 0 + 7959.4 + 80 + 0 + 341 + 0 + 0 + 0 + 648
                        }
                      },
                      children: c(x, {
                        height: 88,
                        width: `min(${u?.width||`100vw`} - 100px, 900px)`,
                        y: (u ?.y || 0) + 0 + 6411 + 120 + 0 + 361 + 0 + 0 + 0 + 648,
                        children: c(S, {
                          className: `framer-6qpzz2-container`,
                          nodeId: `Ifw6MALNP`,
                          scopeId: `augiA20Il`,
                          children: c(Dc, {
                            height: `100%`,
                            id: `Ifw6MALNP`,
                            layoutId: `Ifw6MALNP`,
                            NYBvM5Kte: `Join the community on Telegram for early testnet invites, validator setup guides, and subnet creation tutorials.  https://discord.gg/tensora`,
                            style: {
                              width: `100%`
                            },
                            variant: `YqoXNcedV`,
                            VZzOp8XV4: `Where can I learn more or join early?`,
                            width: `100%`
                          })
                        })
                      })
                    })]
                  }), f(`div`, {
                    className: `framer-tldks5`,
                    "data-framer-name": `Content`,
                    children: [f(`div`, {
                      className: `framer-w7ei2`,
                      children: [c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`h3`, {
                            className: `framer-styles-preset-zee8bd`,
                            "data-styles-preset": `XJmVSJpIB`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`
                            },
                            children: `Need more help?`
                          })
                        }),
                        className: `framer-s36lbh`,
                        "data-framer-name": `Heading`,
                        fonts: [`Inter`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      }), c(D, {
                        __fromCanvasComponent: !0,
                        children: c(h, {
                          children: c(`p`, {
                            className: `framer-styles-preset-cywbxm`,
                            "data-styles-preset": `fXzExxgas`,
                            style: {
                              "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                            },
                            children: `If you have any further questions about Tensora. Kindly Join our discord or read our Docs https://docs.tensora.network`
                          })
                        }),
                        className: `framer-m1sknm`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      })]
                    }), c(w, {
                      href: `https://t.me/TensoraNetwork`,
                      motionChild: !0,
                      nodeId: `BDqAWEzZt`,
                      openInNewTab: !0,
                      scopeId: `augiA20Il`,
                      smoothScroll: !0,
                      children: c(b.a, {
                        className: `framer-tju3eq framer-lux5qc`,
                        "data-border": !0,
                        "data-framer-name": `Button`,
                        "data-reset": `button`,
                        children: c(D, {
                          __fromCanvasComponent: !0,
                          children: c(h, {
                            children: c(`p`, {
                              style: {
                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLTUwMA==`,
                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.3px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-3d2e05c0-9f07-4a51-b2be-06583b023af9, rgb(20, 20, 20))`,
                                "--framer-text-transform": `capitalize`
                              },
                              children: `Join Telegram`
                            })
                          }),
                          className: `framer-yiz1s`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Instrument Sans-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        })
                      })
                    })]
                  })]
                })]
              })
            }), f(`div`, {
              className: `framer-gu0ben`,
              "data-framer-name": `CTA`,
              id: ye,
              ref: M,
              children: [f(nl, {
                __framer__animate: {
                  transition: dl
                },
                __framer__animateOnce: !0,
                __framer__enter: ml,
                __framer__exit: hl,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                className: `framer-r91v0d`,
                "data-framer-name": `Content`,
                style: {
                  transformPerspective: 1200
                },
                children: [f(`div`, {
                  className: `framer-gsexom`,
                  "data-framer-name": `Content`,
                  children: [c(x, {
                    children: c(S, {
                      className: `framer-oxck3r-container`,
                      nodeId: `KeUW2kqhV`,
                      scopeId: `augiA20Il`,
                      children: c($o, {
                        height: `100%`,
                        id: `KeUW2kqhV`,
                        layoutId: `KeUW2kqhV`,
                        title: `Pre-Mining Registration`,
                        variant: `IZeEBjU2F`,
                        width: `100%`
                      })
                    })
                  }), c(T, {
                    breakpoint: E,
                    overrides: {
                      jA56J6b3g: {
                        children: c(h, {
                          children: c(`h2`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `55px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-1.88px`,
                              "--framer-line-height": `110%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Become a Pre-Miner or Validator`
                          })
                        })
                      },
                      S8AOEfzlz: {
                        children: c(h, {
                          children: c(`h2`, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Geist Mono", monospace`,
                              "--framer-font-size": `48px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-1px`,
                              "--framer-line-height": `110%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                              "--framer-text-transform": `capitalize`
                            },
                            children: `Become a Pre-Miner or Validator`
                          })
                        })
                      }
                    },
                    children: c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(`h2`, {
                          style: {
                            "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                            "--framer-font-family": `"Geist Mono", monospace`,
                            "--framer-font-size": `74px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-2.88px`,
                            "--framer-line-height": `110%`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--token-b4275e64-9ebb-4bcc-bdb9-31ecf77f64c2, rgb(255, 255, 255))`,
                            "--framer-text-transform": `capitalize`
                          },
                          children: `Become a Pre-Miner or Validator`
                        })
                      }),
                      className: `framer-nblb4c`,
                      "data-framer-name": `Heading`,
                      fonts: [`GF;Geist Mono-500`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })
                  })]
                }), c(`div`, {
                  className: `framer-5i8av9`,
                  children: c(`div`, {
                    className: `framer-1a9l4nd`,
                    "data-framer-name": `Actions`,
                    children: c(D, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: f(`p`, {
                          style: {
                            "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                            "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-letter-spacing": `-0.28px`,
                            "--framer-line-height": `150%`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, rgb(184, 184, 184))`
                          },
                          children: [`Tensora Phase 2 opens mining and validation on the BNB Layer 2 network.`, c(`br`, {}), `Join early to reserve your role, register your wallet, and gain access to upcoming subnet deployment.`]
                        })
                      }),
                      className: `framer-1g6dji4`,
                      "data-framer-name": `By clicking Sign Up you're confirming you agree with our Terms and Conditions.`,
                      fonts: [`GF;Instrument Sans-regular`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })
                  })
                }), c(x, {
                  children: c(S, {
                    className: `framer-jh20a0-container`,
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    nodeId: `qNtaRzxyO`,
                    scopeId: `augiA20Il`,
                    children: c(Oo, {
                      height: `100%`,
                      html: ``,
                      id: `qNtaRzxyO`,
                      layoutId: `qNtaRzxyO`,
                      radius: `11px`,
                      style: {
                        height: `100%`,
                        width: `100%`
                      },
                      type: `url`,
                      url: `https://form.typeform.com/to/DFlJUKdB`,
                      width: `100%`,
                      zoom: 1
                    })
                  })
                })]
              }), c(T, {
                breakpoint: E,
                overrides: {
                  jA56J6b3g: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 10327.3 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      positionX: `23.3%`,
                      positionY: `16.7%`,
                      src: `https://framerusercontent.com/images/31VnBZxppAp4HD1EmnLNCYHqv0.png?width=1920&height=1080`
                    }
                  },
                  S8AOEfzlz: {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 540,
                      intrinsicWidth: 960,
                      loading: A((u ?.y || 0) + 0 + 9517 + 0),
                      pixelHeight: 1080,
                      pixelWidth: 1920,
                      positionX: `23.3%`,
                      positionY: `16.7%`,
                      src: `https://framerusercontent.com/images/31VnBZxppAp4HD1EmnLNCYHqv0.png?width=1920&height=1080`
                    }
                  }
                },
                children: c(te, {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 540,
                    intrinsicWidth: 960,
                    loading: A((u ?.y || 0) + 0 + 8068.6 + 0),
                    pixelHeight: 1080,
                    pixelWidth: 1920,
                    positionX: `23.3%`,
                    positionY: `16.7%`,
                    src: `https://framerusercontent.com/images/31VnBZxppAp4HD1EmnLNCYHqv0.png?width=1920&height=1080`
                  },
                  className: `framer-2ws1if`,
                  "data-framer-name": `gradient`
                })
              }), c(`div`, {
                className: `framer-11uokwr`,
                "data-framer-name": `waterfall_1920x1080_dark_rocks_5k_23728`
              })]
            }), c(T, {
              breakpoint: E,
              overrides: {
                jA56J6b3g: {
                  y: (u ?.y || 0) + 0 + 11060.8
                },
                S8AOEfzlz: {
                  y: (u ?.y || 0) + 0 + 10647.8
                }
              },
              children: c(x, {
                height: 83,
                width: u ?.width || `100vw`,
                y: (u ?.y || 0) + 0 + 8997,
                children: c(S, {
                  className: `framer-h2so8n-container`,
                  nodeId: `hAu9OoNDB`,
                  scopeId: `augiA20Il`,
                  children: c(T, {
                    breakpoint: E,
                    overrides: {
                      jA56J6b3g: {
                        variant: `w4mBibSZ0`
                      },
                      S8AOEfzlz: {
                        variant: `rNw5JLRNX`
                      }
                    },
                    children: c(bs, {
                      height: `100%`,
                      id: `hAu9OoNDB`,
                      layoutId: `hAu9OoNDB`,
                      style: {
                        width: `100%`
                      },
                      variant: `XnHrgRKCP`,
                      width: `100%`
                    })
                  })
                })
              })
            }), c(x, {
              height: 39,
              y: 895,
              children: c(S, {
                className: `framer-222vgw-container`,
                layoutScroll: !0,
                nodeId: `GCr7ITPCz`,
                scopeId: `augiA20Il`,
                children: c(Lc, {
                  height: `100%`,
                  id: `GCr7ITPCz`,
                  layoutId: `GCr7ITPCz`,
                  LSkl_Y_MR: `GIthub`,
                  width: `100%`
                })
              })
            })]
          }), c(`div`, {
            id: `overlay`
          })]
        })
      })
    }), Sl = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-uWmMi.framer-lux5qc, .framer-uWmMi .framer-lux5qc { display: block; }`, `.framer-uWmMi.framer-72rtr7 { align-content: center; align-items: center; background-color: #0a0a0a; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`, `.framer-uWmMi .framer-vpjptw-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 10; }`, `.framer-uWmMi .framer-13ixd3 { align-content: center; align-items: center; background: linear-gradient(180deg, var(--token-59459805-22e4-4677-b84b-c701f4cd17a5, #391e86) 0%, var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, rgb(10, 6, 33)) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 50px 180px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-76q86h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`, `.framer-uWmMi .framer-57ckn-container, .framer-uWmMi .framer-c1bbh5-container, .framer-uWmMi .framer-1ksq5fd-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`, `.framer-uWmMi .framer-1sq0uzu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 860px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-uWmMi .framer-ik1xba, .framer-uWmMi .framer-j8y51w, .framer-uWmMi .framer-gsexom { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1iuikgz, .framer-uWmMi .framer-18umnbo, .framer-uWmMi .framer-f3a8xb, .framer-uWmMi .framer-1v3o4q5, .framer-uWmMi .framer-12lr0mk, .framer-uWmMi .framer-bqxwoj, .framer-uWmMi .framer-l6koqd, .framer-uWmMi .framer-15u1b12, .framer-uWmMi .framer-2tabqv, .framer-uWmMi .framer-bjhxqy, .framer-uWmMi .framer-fpmpo, .framer-uWmMi .framer-1ew25u0, .framer-uWmMi .framer-10llf6m, .framer-uWmMi .framer-1f8yy6v, .framer-uWmMi .framer-1lcqh62, .framer-uWmMi .framer-tc7get, .framer-uWmMi .framer-tn3wl9, .framer-uWmMi .framer-8s291s, .framer-uWmMi .framer-bje7sw, .framer-uWmMi .framer-nblb4c, .framer-uWmMi .framer-1g6dji4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-84n7n8 { flex: none; height: auto; max-width: 71%; position: relative; white-space: pre-wrap; width: 610px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-ewv3x, .framer-uWmMi .framer-1n8mczu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-uWmMi .framer-1spj9gf, .framer-uWmMi .framer-slsrep, .framer-uWmMi .framer-1vsrhcb, .framer-uWmMi .framer-tju3eq { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #6836f5); border-bottom-left-radius: 150px; border-bottom-right-radius: 150px; border-top-left-radius: 150px; border-top-right-radius: 150px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 13px 30px 13px 30px; position: relative; text-decoration: none; width: min-content; }`, `.framer-uWmMi .framer-11ss567, .framer-uWmMi .framer-52yhl, .framer-uWmMi .framer-1h40m09, .framer-uWmMi .framer-4osnv6, .framer-uWmMi .framer-1kq5k6l, .framer-uWmMi .framer-hazdun, .framer-uWmMi .framer-161z0o9, .framer-uWmMi .framer-yiz1s { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`, `.framer-uWmMi .framer-19i89el { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #6836f5); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 150px; border-bottom-right-radius: 150px; border-top-left-radius: 150px; border-top-right-radius: 150px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 13px 30px 13px 30px; position: relative; text-decoration: none; width: min-content; }`, `.framer-uWmMi .framer-y1to3x { background: linear-gradient(0deg, #000000 0%, rgba(28, 20, 0, 0.5) 89.37404748693706%); bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; width: 100%; z-index: 2; }`, `.framer-uWmMi .framer-1yktl0t { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; width: 100%; }`, `.framer-uWmMi .framer-1fu90f7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 64px 80px 64px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1rk5ih2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1100px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-192zc3z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-t8h596 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1ojcjwh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: flex-start; max-width: 1100px; overflow: visible; padding: 4px 0px 4px 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-dmdijj { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #000000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 416px; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-3jmvfy { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #000000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 415px; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-1nn8txv { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #000000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 415px; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-1wiah1a { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #000000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 413px; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-1fiookv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 120px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-13t99iw { --border-bottom-width: 1px; --border-color: #b89000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #121212; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1100px; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-yqs6fa { aspect-ratio: 2.310924369747899 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 476px); max-width: 1100px; overflow: visible; position: relative; width: 100%; }`, `.framer-uWmMi .framer-156f6wi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 740px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-187onu2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1l0wfyi { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-1ovf410 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 204px); left: 1107px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 204px; z-index: 0; }`, `.framer-uWmMi .framer-yyqzup { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 50px 120px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-gykcu8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`, `.framer-uWmMi .framer-1uj2xww-container, .framer-uWmMi .framer-136tp56-container, .framer-uWmMi .framer-13t9key-container, .framer-uWmMi .framer-oxck3r-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-uWmMi .framer-24pjgb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 1100px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`, `.framer-uWmMi .framer-1x9y9sg, .framer-uWmMi .framer-990sqd, .framer-uWmMi .framer-1q6r8a8 { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 281px; justify-content: space-between; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-15g31h5, .framer-uWmMi .framer-1lbxvzj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1ru3iy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; min-height: 48px; min-width: 134px; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-uWmMi .framer-1oe9p7b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-kprneg { align-content: center; align-items: center; background-color: var(--token-3d2e05c0-9f07-4a51-b2be-06583b023af9, #141414); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 120px 50px 120px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-lnfhfj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1100px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-uujm2d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`, `.framer-uWmMi .framer-qxzwzo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-uWmMi .framer-8lun2t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-3pvwr6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-uWmMi .framer-e8a6ws, .framer-uWmMi .framer-89r7el { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 470px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-1nzenti { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 550px; }`, `.framer-uWmMi .framer-4x173i, .framer-uWmMi .framer-1bxqe2r, .framer-uWmMi .framer-14xsiey, .framer-uWmMi .framer-tu59wr { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #000000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-1cdvmwu, .framer-uWmMi .framer-15u39i, .framer-uWmMi .framer-1tjcki5, .framer-uWmMi .framer-1aod89i, .framer-uWmMi .framer-k0e9yu, .framer-uWmMi .framer-fzwxpe, .framer-uWmMi .framer-3zo6cv, .framer-uWmMi .framer-1tzfyoq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 490px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-1ysgqxc { align-content: center; align-items: center; background-color: var(--token-59459805-22e4-4677-b84b-c701f4cd17a5, #391e86); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 120px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-19d5y7h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 768px; z-index: 5; }`, `.framer-uWmMi .framer-m31r4h, .framer-uWmMi .framer-1ckj03o, .framer-uWmMi .framer-18wfd90, .framer-uWmMi .framer-18p6kbr, .framer-uWmMi .framer-ninefo, .framer-uWmMi .framer-ytpml, .framer-uWmMi .framer-dprwma, .framer-uWmMi .framer-1bebcck, .framer-uWmMi .framer-1wt7el1, .framer-uWmMi .framer-1101dle, .framer-uWmMi .framer-zz52dk, .framer-uWmMi .framer-105i62l, .framer-uWmMi .framer-1costcb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-uWmMi .framer-t8govv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 510px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-jf3inl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; max-width: 1100px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`, `.framer-uWmMi .framer-173qjkh, .framer-uWmMi .framer-8tityc { --border-bottom-width: 1px; --border-color: var(--token-db6d19a1-7e74-463f-b273-f83b75dd4135, #0a0621); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, #171304 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 568px; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 1px; }`, `.framer-uWmMi .framer-ih411t, .framer-uWmMi .framer-cn3b6u, .framer-uWmMi .framer-o3sm2u { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1sotfka, .framer-uWmMi .framer-yl5rh2, .framer-uWmMi .framer-gth2x8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-9f6zje, .framer-uWmMi .framer-y50e7d, .framer-uWmMi .framer-1w5351f { --border-bottom-width: 1px; --border-color: var(--token-a17b1ae9-8d78-40f3-a8a1-76615fcf0cd0, #b8b8b8); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 2px 10px 4px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-uWmMi .framer-nhjz64, .framer-uWmMi .framer-5vo3y, .framer-uWmMi .framer-16s39h1 { background-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); flex: none; height: 1px; opacity: 0.5; overflow: hidden; position: relative; width: 100%; }`, `.framer-uWmMi .framer-mpy66g, .framer-uWmMi .framer-tahaf4, .framer-uWmMi .framer-1j3ioiw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1rtzlch, .framer-uWmMi .framer-1g4ul6e, .framer-uWmMi .framer-1sx3shn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-d6vub { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-1eqjwdf, .framer-uWmMi .framer-etd2xs, .framer-uWmMi .framer-p74zms, .framer-uWmMi .framer-ymc8kz, .framer-uWmMi .framer-1bcj9bv, .framer-uWmMi .framer-18ex25a, .framer-uWmMi .framer-1ft3lgy, .framer-uWmMi .framer-tvk4o5, .framer-uWmMi .framer-19o8rh4 { flex: none; height: 24px; position: relative; width: 24px; }`, `.framer-uWmMi .framer-gbyxs4, .framer-uWmMi .framer-1is6jgi, .framer-uWmMi .framer-1jyvipy, .framer-uWmMi .framer-9hpd7r, .framer-uWmMi .framer-bq6cv0, .framer-uWmMi .framer-2t4x7g, .framer-uWmMi .framer-1ukiqla { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-peg9n7, .framer-uWmMi .framer-gjvcra { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #6836f5); border-bottom-left-radius: 150px; border-bottom-right-radius: 150px; border-top-left-radius: 150px; border-top-right-radius: 150px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 13px 30px 13px 30px; position: relative; text-decoration: none; width: 100%; }`, `.framer-uWmMi .framer-vfx85a { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, #171304 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 568px; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 1px; }`, `.framer-uWmMi .framer-1hmvjm3, .framer-uWmMi .framer-i7y6pa, .framer-uWmMi .framer-1ao1ycm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-yk18ey { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 27px 0px 27px 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-hge01a { --border-bottom-width: 1px; --border-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #ffcf29); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-f3f2ac2f-be2a-43c7-9fb4-7eb5fe8036e7, #6836f5); border-bottom-left-radius: 150px; border-bottom-right-radius: 150px; border-top-left-radius: 150px; border-top-right-radius: 150px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: 100%; }`, `.framer-uWmMi .framer-1xdktd2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; min-height: 24px; min-width: 24px; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-uWmMi .framer-n4bcz1 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 2; }`, `.framer-uWmMi .framer-126l0d9 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; }`, `.framer-uWmMi .framer-30uuls { align-content: flex-start; align-items: flex-start; background-color: var(--token-3d2e05c0-9f07-4a51-b2be-06583b023af9, #141414); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 120px 50px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-c3r0ne { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-fh9vex { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-fnb4zk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-mmscny { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; user-select: none; width: 100%; }`, `.framer-uWmMi .framer-1egbfm6-container, .framer-uWmMi .framer-1tn38sz-container, .framer-uWmMi .framer-19p3wge-container, .framer-uWmMi .framer-qtw0e9-container, .framer-uWmMi .framer-11kemil-container, .framer-uWmMi .framer-5rwuho-container, .framer-uWmMi .framer-6qpzz2-container, .framer-uWmMi .framer-h2so8n-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-uWmMi .framer-tldks5 { align-content: center; align-items: center; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 820px; }`, `.framer-uWmMi .framer-w7ei2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-uWmMi .framer-s36lbh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 820px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-m1sknm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 438px; word-break: break-word; word-wrap: break-word; }`, `.framer-uWmMi .framer-gu0ben { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 64px 120px 64px; position: relative; width: 100%; }`, `.framer-uWmMi .framer-r91v0d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 10; }`, `.framer-uWmMi .framer-5i8av9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 506px; }`, `.framer-uWmMi .framer-1a9l4nd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 506px; }`, `.framer-uWmMi .framer-jh20a0-container { flex: none; height: 395px; position: relative; width: 66%; }`, `.framer-uWmMi .framer-2ws1if { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.25; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 2; }`, `.framer-uWmMi .framer-11uokwr { background: linear-gradient(180deg, rgba(217, 163, 0, 0) 0%, rgb(0, 0, 0) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; }`, `.framer-uWmMi .framer-222vgw-container { bottom: 66px; flex: none; height: auto; position: fixed; right: 22px; width: auto; z-index: 10; }`, ...Bc, ...Wc, ...oc, ...uc, ...ns, `.framer-uWmMi[data-border="true"]::after, .framer-uWmMi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`, `@media (max-width: 809.98px) { .framer-uWmMi.framer-72rtr7 { overflow: hidden; width: 390px; } .framer-uWmMi .framer-vpjptw-container, .framer-uWmMi .framer-84n7n8, .framer-uWmMi .framer-1spj9gf, .framer-uWmMi .framer-19i89el, .framer-uWmMi .framer-slsrep, .framer-uWmMi .framer-3pvwr6, .framer-uWmMi .framer-e8a6ws, .framer-uWmMi .framer-89r7el, .framer-uWmMi .framer-1vsrhcb, .framer-uWmMi .framer-1nzenti, .framer-uWmMi .framer-1cdvmwu, .framer-uWmMi .framer-15u39i, .framer-uWmMi .framer-1tjcki5, .framer-uWmMi .framer-1aod89i, .framer-uWmMi .framer-k0e9yu, .framer-uWmMi .framer-fzwxpe, .framer-uWmMi .framer-3zo6cv, .framer-uWmMi .framer-1tzfyoq, .framer-uWmMi .framer-19d5y7h, .framer-uWmMi .framer-t8govv, .framer-uWmMi .framer-5i8av9 { width: 100%; } .framer-uWmMi .framer-13ixd3 { gap: 20px; padding: 150px 20px 80px 20px; } .framer-uWmMi .framer-76q86h { will-change: unset; z-index: 9; } .framer-uWmMi .framer-ik1xba { max-width: 320px; } .framer-uWmMi .framer-ewv3x { flex-direction: column; gap: 10px; max-width: 320px; width: 100%; } .framer-uWmMi .framer-1fu90f7, .framer-uWmMi .framer-kprneg, .framer-uWmMi .framer-30uuls { padding: 80px 20px 80px 20px; } .framer-uWmMi .framer-t8h596, .framer-uWmMi .framer-c3r0ne { gap: 40px; } .framer-uWmMi .framer-1ojcjwh, .framer-uWmMi .framer-lnfhfj { flex-direction: column; gap: 40px; } .framer-uWmMi .framer-dmdijj, .framer-uWmMi .framer-3jmvfy, .framer-uWmMi .framer-1nn8txv, .framer-uWmMi .framer-1wiah1a { flex: none; height: min-content; padding: 30px 20px 30px 20px; width: 100%; } .framer-uWmMi .framer-1fiookv { gap: 80px; padding: 80px 20px 80px 20px; } .framer-uWmMi .framer-13t99iw { gap: 40px; padding: 0px 0px 40px 0px; } .framer-uWmMi .framer-yqs6fa { height: var(--framer-aspect-ratio-supported, 151px); } .framer-uWmMi .framer-156f6wi { padding: 0px 20px 0px 20px; } .framer-uWmMi .framer-1ovf410 { height: var(--framer-aspect-ratio-supported, 0px); right: 45px; top: 134px; width: unset; } .framer-uWmMi .framer-yyqzup, .framer-uWmMi .framer-1ysgqxc { gap: 40px; padding: 80px 20px 80px 20px; } .framer-uWmMi .framer-24pjgb { flex-direction: column; } .framer-uWmMi .framer-1x9y9sg, .framer-uWmMi .framer-1q6r8a8 { flex: none; gap: 30px; height: min-content; justify-content: center; padding: 30px 20px 30px 20px; width: 100%; } .framer-uWmMi .framer-990sqd { flex: none; gap: 0px; height: min-content; justify-content: center; padding: 30px 20px 30px 20px; width: 100%; } .framer-uWmMi .framer-uujm2d { flex: none; position: relative; top: unset; width: 100%; } .framer-uWmMi .framer-1n8mczu { flex-direction: column; width: 100%; } .framer-uWmMi .framer-4x173i, .framer-uWmMi .framer-1bxqe2r, .framer-uWmMi .framer-14xsiey, .framer-uWmMi .framer-tu59wr { padding: 30px 20px 30px 20px; } .framer-uWmMi .framer-jf3inl { flex-direction: column; gap: 50px; } .framer-uWmMi .framer-173qjkh, .framer-uWmMi .framer-vfx85a, .framer-uWmMi .framer-8tityc { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; gap: 20px; height: min-content; justify-content: center; padding: 30px 20px 30px 20px; width: 100%; } .framer-uWmMi .framer-d6vub { gap: 20px; } .framer-uWmMi .framer-s36lbh { width: 340px; } .framer-uWmMi .framer-m1sknm { width: 322px; } .framer-uWmMi .framer-gu0ben { padding: 120px 20px 80px 20px; } .framer-uWmMi .framer-r91v0d, .framer-uWmMi .framer-1a9l4nd { flex: 1 0 0px; width: 1px; } .framer-uWmMi .framer-jh20a0-container { height: 666px; }}`, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-uWmMi.framer-72rtr7 { width: 810px; } .framer-uWmMi .framer-vpjptw-container, .framer-uWmMi .framer-3pvwr6, .framer-uWmMi .framer-e8a6ws, .framer-uWmMi .framer-89r7el, .framer-uWmMi .framer-1nzenti { width: 100%; } .framer-uWmMi .framer-13ixd3 { padding: 180px 40px 100px 40px; } .framer-uWmMi .framer-1sq0uzu { max-width: 560px; } .framer-uWmMi .framer-1fu90f7, .framer-uWmMi .framer-kprneg, .framer-uWmMi .framer-30uuls { padding: 100px 40px 100px 40px; } .framer-uWmMi .framer-t8h596 { align-content: flex-start; align-items: flex-start; gap: 60px; } .framer-uWmMi .framer-1ojcjwh { flex-direction: column; gap: 20px; } .framer-uWmMi .framer-dmdijj, .framer-uWmMi .framer-3jmvfy, .framer-uWmMi .framer-1nn8txv, .framer-uWmMi .framer-1wiah1a { flex: none; height: min-content; width: 100%; } .framer-uWmMi .framer-1fiookv { gap: 100px; padding: 100px 40px 120px 40px; } .framer-uWmMi .framer-yqs6fa { height: var(--framer-aspect-ratio-supported, 316px); } .framer-uWmMi .framer-1ovf410 { height: var(--framer-aspect-ratio-supported, 250px); width: 250px; } .framer-uWmMi .framer-yyqzup { padding: 80px 40px 100px 40px; } .framer-uWmMi .framer-24pjgb, .framer-uWmMi .framer-lnfhfj { flex-direction: column; } .framer-uWmMi .framer-1x9y9sg, .framer-uWmMi .framer-990sqd, .framer-uWmMi .framer-1q6r8a8 { flex: none; gap: 30px; height: min-content; justify-content: flex-start; width: 100%; } .framer-uWmMi .framer-uujm2d { flex: none; position: relative; top: unset; width: 100%; } .framer-uWmMi .framer-1ysgqxc { gap: 40px; padding: 100px 40px 100px 40px; } .framer-uWmMi .framer-19d5y7h { order: 0; } .framer-uWmMi .framer-jf3inl { align-content: center; align-items: center; flex-direction: column; gap: 50px; order: 1; } .framer-uWmMi .framer-173qjkh, .framer-uWmMi .framer-vfx85a, .framer-uWmMi .framer-8tityc { flex: none; width: 100%; } .framer-uWmMi .framer-n4bcz1 { order: 3; } .framer-uWmMi .framer-126l0d9 { order: 2; } .framer-uWmMi .framer-gu0ben { padding: 75px 40px 75px 40px; } .framer-uWmMi .framer-r91v0d { max-width: 680px; } .framer-uWmMi .framer-5i8av9, .framer-uWmMi .framer-1a9l4nd { width: min-content; } .framer-uWmMi .framer-1g6dji4 { white-space: pre; width: auto; }}`], Cl = _e(xl, Sl, `framer-uWmMi`), wl = Cl, Cl.displayName = `Home`, Cl.defaultProps = {
      height: 9379,
      width: 1200
    }, re(Cl, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2`,
        weight: `500`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Geist Mono`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Geist Mono`,
        url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Instrument Sans`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Instrument Sans`,
        url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npST3-QfwmS0v3_7Y.woff2`,
        weight: `500`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Instrument Sans`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Instrument Sans`,
        url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-QfwmS0v3_7Y.woff2`,
        weight: `400`
      }]
    }, ...$c, ...el, ...il, ...al, ...ol, ...sl, ...se(zc), ...se(Uc), ...se(ac), ...se(lc), ...se(ts)], {
      supportsExplicitInterCodegen: !0
    }), Tl = {
      exports: {
        Props: {
          type: `tsType`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"O84DTIErx":{"pattern":":O84DTIErx","name":"howitworks"},"rsnU9mcNb":{"pattern":":rsnU9mcNb","name":"testimonials"},"ZCbSnKGv9":{"pattern":":ZCbSnKGv9","name":"features"},"ol3YTZ9ZJ":{"pattern":":ol3YTZ9ZJ","name":"pricing"},"CBIsf_FR6":{"pattern":":CBIsf_FR6","name":"faqs"},"nILo6kHia":{"pattern":":nILo6kHia","name":"signup"}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"S8AOEfzlz":{"layout":["fixed","auto"]},"jA56J6b3g":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: ``,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `9379`
          }
        },
        __FramerMetadata__: {
          type: `variable`
        }
      }
    }
  })),
  Dl, Ol, kl, Al, jl = e((() => {
    i(), a(), j(), Dl = () => (p(() => {
      let e = document.querySelector(`meta[name="robots"]`);
      e ? e.setAttribute(`content`, `noindex`) : (e = document.createElement(`meta`), e.setAttribute(`name`, `robots`), e.setAttribute(`content`, `noindex`), document.head.appendChild(e))
    }, []), c(`div`, {
      className: `__framer-not-found-page`,
      style: {
        display: `flex`,
        height: `100vh`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: `var(--color-primary)`,
        background: `var(--color-background)`,
        fontSize: `var(--font-size-body)`,
        boxSizing: `border-box`,
        fontFeatureSettings: `"liga", "clig"`,
        fontVariantLigatures: `common-ligatures`,
        textRendering: `optimizeLegibility`
      },
      children: f(`main`, {
        style: {
          boxSizing: `border-box`,
          fontFamily: `"Inter", sans-serif`,
          fontWeight: 500,
          maxWidth: `240px`,
          width: `100%`,
          display: `flex`,
          alignItems: `center`,
          flexDirection: `column`,
          padding: `0 20px`,
          textWrap: `balance`
        },
        children: [c(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `14`,
          height: `21`,
          style: {
            verticalAlign: `middle`,
            color: `var(--color-primary)`,
            marginBottom: `20px`
          },
          children: c(`path`, {
            d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
            fill: `currentColor`
          })
        }), c(`h1`, {
          style: {
            margin: `0 0 10px 0`,
            fontSize: `var(--font-size-title)`,
            color: `var(--color-primary)`,
            textAlign: `center`
          },
          children: `Page Not Found`
        }), c(`div`, {
          style: {
            color: `var(--color-secondary)`,
            marginBottom: `20px`,
            lineHeight: `1.5em`,
            textAlign: `center`
          },
          children: `The page you are looking for does not exist or may have been moved.`
        }), c(`a`, {
          href: `/`,
          role: `button`,
          style: {
            backgroundColor: `var(--color-tint)`,
            color: `#ffffff`,
            paddingLeft: `8px`,
            paddingRight: `8px`,
            borderRadius: `8px`,
            lineHeight: `30px`,
            height: `30px`,
            textDecoration: `none`,
            verticalAlign: `baseline`
          },
          children: `Back to Home`
        })]
      })
    })), Ol = _e(Dl, [`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`, `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`, `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`, `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`, `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`]), kl = Ol, Al = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `component`,
          slots: [],
          annotations: {
            framerContractVersion: `1`
          }
        },
        __FramerMetadata__: {
          type: `variable`
        }
      }
    }
  }));
export {
  kl as SitesNotFoundPage_js_1_4_default, Al as __FramerMetadata__, Tl as __FramerMetadata__$1, Zc as __FramerMetadata__$2, wl as augiA20Il_default, so as er, jl as init_SitesNotFoundPage_js_1_4, El as init_augiA20Il, Qc as init_augiA20Il$1, co as init_server_browser, Yc as metadata, Xc as metadataVersion
};
//# sourceMappingURL=shared-lib.Cd066LAJ.mjs.map