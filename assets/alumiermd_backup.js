/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {
        var i, r = (t = t || se).createElement("script");
        if (r.text = e, n)
            for (i in we) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function i(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[he.call(e)] || "object" : typeof e
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = i(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function s(e, t, n) {
        return ye(t) ? Te.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? Te.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? Te.grep(e, function(e) {
            return de.call(t, e) > -1 !== n
        }) : Te.filter(t, e, n)
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e) {
        var t = {};
        return Te.each(e.match(Ie) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function d(e, t, n, i) {
        var r;
        try {
            e && ye(r = e.promise) ? r.call(e).done(t).fail(n) : e && ye(r = e.then) ? r.call(e, t, n) : t.apply(undefined, [e].slice(i))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }

    function p() {
        se.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Te.ready()
    }

    function h(e, t) {
        return t.toUpperCase()
    }

    function f(e) {
        return e.replace(Re, "ms-").replace(qe, h)
    }

    function m() {
        this.expando = Te.expando + m.uid++
    }

    function v(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e)
    }

    function g(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = v(n)
                } catch (r) {}
                He.set(e, t, n)
            } else n = undefined;
        return n
    }

    function y(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return Te.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (Te.cssNumber[t] ? "" : "px"),
            c = (Te.cssNumber[t] || "px" !== u && +l) && We.exec(Te.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) Te.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, Te.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function b(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ue[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[i] = r, r)
    }

    function w(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = ze.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Ge(i) && (r[o] = b(i))) : "none" !== n && (r[o] = "none", ze.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function x(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && o(e, t) ? Te.merge([e], n) : n
    }

    function T(e, t) {
        for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
    }

    function E(e, t, n, r, o) {
        for (var s, a, l, u, c, d, p = t.createDocumentFragment(), h = [], f = 0, m = e.length; f < m; f++)
            if ((s = e[f]) || 0 === s)
                if ("object" === i(s)) Te.merge(h, s.nodeType ? [s] : s);
                else if (nt.test(s)) {
            for (a = a || p.appendChild(t.createElement("div")), l = (Qe.exec(s) || ["", ""])[1].toLowerCase(), u = Ze[l] || Ze._default, a.innerHTML = u[1] + Te.htmlPrefilter(s) + u[2], d = u[0]; d--;) a = a.lastChild;
            Te.merge(h, a.childNodes), (a = p.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (p.textContent = "", f = 0; s = h[f++];)
            if (r && Te.inArray(s, r) > -1) o && o.push(s);
            else if (c = Te.contains(s.ownerDocument, s), a = x(p.appendChild(s), "script"), c && T(a), n)
            for (d = 0; s = a[d++];) Je.test(s.type || "") && n.push(s);
        return p
    }

    function S() {
        return !0
    }

    function C() {
        return !1
    }

    function k() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function P(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = undefined), t) P(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = C;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return Te().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = Te.guid++)), e.each(function() {
            Te.event.add(this, t, r, i, n)
        })
    }

    function M(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && Te(e).children("tbody")[0] || e
    }

    function L(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function O(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (ze.hasData(e) && (o = ze.access(e), s = ze.set(t, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) Te.event.add(t, r, u[r][n]);
            He.hasData(e) && (a = He.access(e), l = Te.extend({}, a), He.set(t, l))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function I(e, t, i, r) {
        t = ue.apply([], t);
        var o, s, a, l, u, c, d = 0,
            p = e.length,
            h = p - 1,
            f = t[0],
            m = ye(f);
        if (m || p > 1 && "string" == typeof f && !ge.checkClone && ut.test(f)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = f.call(this, n, o.html())), I(o, t, i, r)
        });
        if (p && (s = (o = E(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (l = (a = Te.map(x(o, "script"), L)).length; d < p; d++) u = o, d !== h && (u = Te.clone(u, !0, !0), l && Te.merge(a, x(u, "script"))), i.call(e[d], u, d);
            if (l)
                for (c = a[a.length - 1].ownerDocument, Te.map(a, O), d = 0; d < l; d++) u = a[d], Je.test(u.type || "") && !ze.access(u, "globalEval") && Te.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Te._evalUrl && Te._evalUrl(u.src) : n(u.textContent.replace(ct, ""), c, u))
        }
        return e
    }

    function j(e, t, n) {
        for (var i, r = t ? Te.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Te.cleanData(x(i)), i.parentNode && (n && Te.contains(i.ownerDocument, i) && T(x(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || pt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || Te.contains(e.ownerDocument, e) || (s = Te.style(e, t)), !ge.pixelBoxStyles() && dt.test(s) && ht.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), s !== undefined ? s + "" : s
    }

    function $(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function R(e) {
        if (e in bt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--;)
            if ((e = yt[n] + t) in bt) return e
    }

    function q(e) {
        var t = Te.cssProps[e];
        return t || (t = Te.cssProps[e] = R(e) || e), t
    }

    function _(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function z(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += Te.css(e, n + Xe[s], !0, r)), i ? ("content" === n && (l -= Te.css(e, "padding" + Xe[s], !0, r)), "margin" !== n && (l -= Te.css(e, "border" + Xe[s] + "Width", !0, r))) : (l += Te.css(e, "padding" + Xe[s], !0, r), "padding" !== n ? l += Te.css(e, "border" + Xe[s] + "Width", !0, r) : a += Te.css(e, "border" + Xe[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function H(e, t, n) {
        var i = pt(e),
            r = N(e, t, i),
            o = "border-box" === Te.css(e, "boxSizing", !1, i),
            s = o;
        if (dt.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (ge.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === Te.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + z(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function B(e, t, n, i, r) {
        return new B.prototype.init(e, t, n, i, r)
    }

    function F() {
        xt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, Te.fx.interval), Te.fx.tick())
    }

    function V() {
        return e.setTimeout(function() {
            wt = undefined
        }), wt = Date.now()
    }

    function W(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Xe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e, t, n) {
        for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function G(e, t, n) {
        var i, r, o, s, a, l, u, c, d = "width" in t || "height" in t,
            p = this,
            h = {},
            f = e.style,
            m = e.nodeType && Ge(e),
            v = ze.get(e, "fxshow");
        for (i in n.queue || (null == (s = Te._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, Te.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
            if (r = t[i], Tt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !v || v[i] === undefined) continue;
                    m = !0
                }
                h[i] = v && v[i] || Te.style(e, i)
            } if ((l = !Te.isEmptyObject(t)) || !Te.isEmptyObject(h))
            for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = v && v.display) && (u = ze.get(e, "display")), "none" === (c = Te.css(e, "display")) && (u ? c = u : (w([e], !0), u = e.style.display || u, c = Te.css(e, "display"), w([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === Te.css(e, "float") && (l || (p.done(function() {
                    f.display = u
                }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), l = !1, h) l || (v ? "hidden" in v && (m = v.hidden) : v = ze.access(e, "fxshow", {
                display: u
            }), o && (v.hidden = !m), m && w([e], !0), p.done(function() {
                for (i in m || w([e]), ze.remove(e, "fxshow"), h) Te.style(e, i, h[i])
            })), l = X(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
    }

    function Y(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (r = t[i = f(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = Te.cssHooks[i]) && "expand" in s)
                for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
            else t[i] = r
    }

    function U(e, t, n) {
        var i, r, o = 0,
            s = U.prefilters.length,
            a = Te.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = wt || V(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: Te.extend({}, t),
                opts: Te.extend(!0, {
                    specialEasing: {},
                    easing: Te.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: wt || V(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = Te.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (Y(c, u.opts.specialEasing); o < s; o++)
            if (i = U.prefilters[o].call(u, e, c, u.opts)) return ye(i.stop) && (Te._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return Te.map(c, X, u), ye(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), Te.fx.timer(Te.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function K(e) {
        return (e.match(Ie) || []).join(" ")
    }

    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ie) || []
    }

    function Z(e, t, n, r) {
        var o;
        if (Array.isArray(t)) Te.each(t, function(t, i) {
            n || jt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== i(t)) r(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, r)
    }

    function ee(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ie) || [];
            if (ye(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function te(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, Te.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === Xt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function ne(e, t) {
        var n, i, r = Te.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Te.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function re(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var oe = [],
        se = e.document,
        ae = Object.getPrototypeOf,
        le = oe.slice,
        ue = oe.concat,
        ce = oe.push,
        de = oe.indexOf,
        pe = {},
        he = pe.toString,
        fe = pe.hasOwnProperty,
        me = fe.toString,
        ve = me.call(Object),
        ge = {},
        ye = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        be = function(e) {
            return null != e && e === e.window
        },
        we = {
            type: !0,
            src: !0,
            noModule: !0
        },
        xe = "3.3.1",
        Te = function(e, t) {
            return new Te.fn.init(e, t)
        },
        Ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Te.fn = Te.prototype = {
        jquery: xe,
        constructor: Te,
        length: 0,
        toArray: function() {
            return le.call(this)
        },
        get: function(e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = Te.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return Te.each(this, e)
        },
        map: function(e) {
            return this.pushStack(Te.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: oe.sort,
        splice: oe.splice
    }, Te.extend = Te.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ye(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (Te.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && Te.isPlainObject(n) ? n : {}, s[t] = Te.extend(u, o, i)) : i !== undefined && (s[t] = i));
        return s
    }, Te.extend({
        expando: "jQuery" + (xe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== he.call(e)) && (!(t = ae(e)) || "function" == typeof(n = fe.call(t, "constructor") && t.constructor) && me.call(n) === ve)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            n(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Ee, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : de.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                a = [];
            if (r(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return ue.apply([], a)
        },
        guid: 1,
        support: ge
    }), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = oe[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Se =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, u, c, p = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!i && ((t ? t.ownerDocument || t : H) !== I && A(t), t = t || I, N)) {
                    if (11 !== f && (l = ge.exec(e)))
                        if (r = l[1]) {
                            if (9 === f) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && _(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                        } if (T.qsa && !X[e + " "] && (!$ || !$.test(e))) {
                        if (1 !== f) p = t, c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(xe, Te) : t.setAttribute("id", a = z), o = (u = k(e)).length; o--;) u[o] = "#" + a + " " + h(u[o]);
                            c = u.join(","), p = ye.test(e) && d(t.parentNode) || t
                        }
                        if (c) try {
                            return J.apply(n, p.querySelectorAll(c)), n
                        } catch (m) {} finally {
                            a === z && t.removeAttribute("id")
                        }
                    }
                }
                return M(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[z] = !0, e
            }

            function r(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function p() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    o = r || i,
                    s = n && "parentNode" === o,
                    a = F++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, r);
                    return !1
                } : function(t, n, l) {
                    var u, c, d, p = [B, a];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s)
                                if (c = (d = t[z] || (t[z] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((u = c[o]) && u[0] === B && u[1] === a) return p[2] = u[2];
                                    if (c[o] = p, p[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function v(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }

            function g(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                return s
            }

            function y(e, t, n, r, o, s) {
                return r && !r[z] && (r = y(r)), o && !o[z] && (o = y(o, s)), i(function(i, s, a, l) {
                    var u, c, d, p = [],
                        h = [],
                        f = s.length,
                        m = i || v(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? m : g(m, p, e, a, l),
                        b = n ? o || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = g(b, h), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else b = g(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function b(e) {
                for (var t, n, i, r = e.length, o = E.relative[e[0].type], s = o || E.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, s, !0), u = f(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        var r = !o && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; a < r; a++)
                    if (n = E.relative[e[a].type]) c = [f(m(c), n)];
                    else {
                        if ((n = E.filter[e[a].type].apply(null, e[a].matches))[z]) {
                            for (i = ++a; i < r && !E.relative[e[i].type]; i++);
                            return y(a > 1 && m(c), a > 1 && h(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, a < i && b(e.slice(a, i)), i < r && b(e = e.slice(i)), i < r && h(e))
                        }
                        c.push(n)
                    } return m(c)
            }

            function w(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, d, p, h = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = L,
                            b = i || o && E.find.TAG("*", u),
                            w = B += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && (L = s === I || s || u); f !== x && null != (c = b[f]); f++) {
                            if (o && c) {
                                for (d = 0, s || c.ownerDocument === I || (A(c), a = !N); p = e[d++];)
                                    if (p(c, s || I, a)) {
                                        l.push(c);
                                        break
                                    } u && (B = w)
                            }
                            r && ((c = !p && c) && h--, i && m.push(c))
                        }
                        if (h += f, r && f !== h) {
                            for (d = 0; p = n[d++];) p(m, v, s, a);
                            if (i) {
                                if (h > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = w, L = y), m
                    };
                return r ? i(s) : s
            }
            var x, T, E, S, C, k, P, M, L, O, D, A, I, j, N, $, R, q, _, z = "sizzle" + 1 * new Date,
                H = e.document,
                B = 0,
                F = 0,
                V = n(),
                W = n(),
                X = n(),
                G = function(e, t) {
                    return e === t && (D = !0), 0
                },
                Y = {}.hasOwnProperty,
                U = [],
                K = U.pop,
                Q = U.push,
                J = U.push,
                Z = U.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                pe = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Te = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Ee = function() {
                    A()
                },
                Se = f(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                J.apply(U = Z.call(H.childNodes), H.childNodes), U[H.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: U.length ? function(e, t) {
                        Q.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (x in T = t.support = {}, C = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, A = t.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : H;
                    return i !== I && 9 === i.nodeType && i.documentElement ? (j = (I = i).documentElement, N = !C(I), H !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), T.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = r(function(e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = ve.test(I.getElementsByClassName), T.getById = r(function(e) {
                        return j.appendChild(e).id = z, !I.getElementsByName || !I.getElementsByName(z).length
                    }), T.getById ? (E.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, E.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && N) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (E.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, E.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && N) {
                            var n, i, r, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), E.find.TAG = T.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, E.find.CLASS = T.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && N) return t.getElementsByClassName(e)
                    }, R = [], $ = [], (T.qsa = ve.test(I.querySelectorAll)) && (r(function(e) {
                        j.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || $.push("~="), e.querySelectorAll(":checked").length || $.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || $.push(".#.+[+~]")
                    }), r(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && $.push(":enabled", ":disabled"), j.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
                    })), (T.matchesSelector = ve.test(q = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                        T.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), R.push("!=", oe)
                    }), $ = $.length && new RegExp($.join("|")), R = R.length && new RegExp(R.join("|")), t = ve.test(j.compareDocumentPosition), _ = t || ve.test(j.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, G = t ? function(e, t) {
                        if (e === t) return D = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === H && _(H, e) ? -1 : t === I || t.ownerDocument === H && _(H, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return D = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!r || !o) return e === I ? -1 : t === I ? 1 : r ? -1 : o ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                        if (r === o) return s(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? s(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
                    }, I) : I
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && A(e), n = n.replace(ce, "='$1']"), T.matchesSelector && N && !X[n + " "] && (!R || !R.test(n)) && (!$ || !$.test(n))) try {
                        var i = q.call(e, n);
                        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (Ce) {}
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && A(e), _(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && A(e);
                    var n = E.attrHandle[t.toLowerCase()],
                        i = n && Y.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !N) : undefined;
                    return i !== undefined ? i : T.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(xe, Te)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (D = !T.detectDuplicates, O = !T.sortStable && e.slice(0), e.sort(G), D) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return O = null, e
                }, S = t.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += S(t);
                    return n
                }, (E = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = V[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, c, d, p, h, f, m = o !== s ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    g = a && t.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (v) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (b = (h = (u = (c = (d = (p = v)[z] || (p[z] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === B && u[1]) && u[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                            if (1 === p.nodeType && ++b && p === t) {
                                                c[e] = [B, h, b];
                                                break
                                            }
                                    } else if (y && (b = h = (u = (c = (d = (p = t)[z] || (p[z] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === B && u[1]), !1 === b)
                                        for (;
                                            (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((c = (d = p[z] || (p[z] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [B, b]), p !== t)););
                                    return (b -= r) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[z] ? o(n) : o.length > 1 ? (r = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = o(e, n), s = r.length; s--;) e[i = ee(e, r[s])] = !(t[i] = r[s])
                            }) : function(e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = P(e.replace(ae, "$1"));
                            return r[z] ? i(function(e, t, n, i) {
                                for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return e = e.replace(be, we),
                                function(t) {
                                    return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                                }
                        }),
                        lang: i(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === j
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: u(!1),
                        disabled: u(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !E.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return fe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = E.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[x] = l(x);
            return p.prototype = E.filters = E.pseudos, E.setFilters = new p, k = t.tokenize = function(e, n) {
                var i, r, o, s, a, l, u, c = W[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, l = [], u = E.preFilter; a;) {
                    for (s in i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(ae, " ")
                        }), a = a.slice(i.length)), E.filter) !(r = he[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
            }, P = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = k(e)), n = t.length; n--;)(o = b(t[n]))[z] ? i.push(o) : r.push(o);
                    (o = X(e, w(r, i))).selector = e
                }
                return o
            }, M = t.select = function(e, t, n, i) {
                var r, o, s, a, l, u = "function" == typeof e && e,
                    c = !i && k(e = u.selector || e);
                if (n = n || [], 1 === c.length) {
                    if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && N && E.relative[o[1].type]) {
                        if (!(t = (E.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !E.relative[a = s.type]);)
                        if ((l = E.find[a]) && (i = l(s.matches[0].replace(be, we), ye.test(o[0].type) && d(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && h(o))) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || P(e, c))(i, t, !N, n, !t || ye.test(e) && d(t.parentNode) || t), n
            }, T.sortStable = z.split("").sort(G).join("") === z, T.detectDuplicates = !!D, A(), T.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), T.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    Te.find = Se, Te.expr = Se.selectors, Te.expr[":"] = Te.expr.pseudos, Te.uniqueSort = Te.unique = Se.uniqueSort, Te.text = Se.getText, Te.isXMLDoc = Se.isXML, Te.contains = Se.contains, Te.escapeSelector = Se.escape;
    var Ce = function(e, t, n) {
            for (var i = [], r = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && Te(e).is(n)) break;
                    i.push(e)
                } return i
        },
        ke = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Pe = Te.expr.match.needsContext,
        Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Te.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Te.find.matchesSelector(i, e) ? [i] : [] : Te.find.matches(e, Te.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Te.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(Te(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (Te.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) Te.find(e, r[t], n);
            return i > 1 ? Te.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function(e) {
            return !!s(this, "string" == typeof e && Pe.test(e) ? Te(e) : e || [], !1).length
        }
    });
    var Le, Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Te.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Le, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Oe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Me.test(i[1]) && Te.isPlainObject(t))
                    for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = se.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? n.ready !== undefined ? n.ready(e) : e(Te) : Te.makeArray(e, this)
    }).prototype = Te.fn, Le = Te(se);
    var De = /^(?:parents|prev(?:Until|All))/,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Te.fn.extend({
        has: function(e) {
            var t = Te(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Te.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && Te(e);
            if (!Pe.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? Te.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? de.call(Te(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Te.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Ce(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ce(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ce(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ce(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ce(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ce(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ke((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ke(e.firstChild)
        },
        contents: function(e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), Te.merge([], e.childNodes))
        }
    }, function(e, t) {
        Te.fn[e] = function(n, i) {
            var r = Te.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Te.filter(i, r)), this.length > 1 && (Ae[e] || Te.uniqueSort(r), De.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ie = /[^\x20\t\r\n\f]+/g;
    Te.Callbacks = function(e) {
        e = "string" == typeof e ? l(e) : Te.extend({}, e);
        var t, n, r, o, s = [],
            a = [],
            u = -1,
            c = function() {
                for (o = o || e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            d = {
                add: function() {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function r(t) {
                        Te.each(t, function(t, n) {
                            ye(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== i(n) && r(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return Te.each(arguments, function(e, t) {
                        for (var n;
                            (n = Te.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? Te.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], n || t || (s = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, Te.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2],
                    ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return Te.Deferred(function(t) {
                            Te.each(n, function(n, i) {
                                var r = ye(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, ye(d) ? r ? d.call(e, o(s, n, u, r), o(s, n, c, r)) : (s++, d.call(e, o(s, n, u, r), o(s, n, c, r), o(s, n, u, n.notifyWith))) : (i !== u && (a = undefined, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    p = r ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = undefined, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? p() : (Te.Deferred.getStackHook && (p.stackTrace = Te.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return Te.Deferred(function(e) {
                            n[0][3].add(o(0, e, ye(r) ? r : u, e.notifyWith)), n[1][3].add(o(0, e, ye(t) ? t : u)), n[2][3].add(o(0, e, ye(i) ? i : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Te.extend(e, r) : r
                    }
                },
                o = {};
            return Te.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? undefined : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = le.call(arguments),
                o = Te.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (d(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ye(r[n] && r[n].then))) return o.then();
            for (; n--;) d(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Te.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Te.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ne = Te.Deferred();
    Te.fn.ready = function(e) {
        return Ne.then(e)["catch"](function(e) {
            Te.readyException(e)
        }), this
    }, Te.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --Te.readyWait : Te.isReady) || (Te.isReady = !0, !0 !== e && --Te.readyWait > 0 || Ne.resolveWith(se, [Te]))
        }
    }), Te.ready.then = Ne.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Te.ready) : (se.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
    var $e = function(e, t, n, r, o, s, a) {
            var l = 0,
                u = e.length,
                c = null == n;
            if ("object" === i(n))
                for (l in o = !0, n) $e(e, t, l, n[l], !0, s, a);
            else if (r !== undefined && (o = !0, ye(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Te(e), n)
                })), t))
                for (; l < u; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : s
        },
        Re = /^-ms-/,
        qe = /-([a-z])/g,
        _e = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    m.uid = 1, m.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[f(t)] = n;
            else
                for (i in t) r[f(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
        },
        access: function(e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (i !== undefined) {
                if (t !== undefined) {
                    n = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in i ? [t] : t.match(Ie) || []).length;
                    for (; n--;) delete i[t[n]]
                }(t === undefined || Te.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !Te.isEmptyObject(t)
        }
    };
    var ze = new m,
        He = new m,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    Te.extend({
        hasData: function(e) {
            return He.hasData(e) || ze.hasData(e)
        },
        data: function(e, t, n) {
            return He.access(e, t, n)
        },
        removeData: function(e, t) {
            He.remove(e, t)
        },
        _data: function(e, t, n) {
            return ze.access(e, t, n)
        },
        _removeData: function(e, t) {
            ze.remove(e, t)
        }
    }), Te.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (e === undefined) {
                if (this.length && (r = He.get(o), 1 === o.nodeType && !ze.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = f(i.slice(5)), g(o, i, r[i]));
                    ze.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                He.set(this, e)
            }) : $e(this, function(t) {
                var n;
                if (o && t === undefined) return (n = He.get(o, e)) !== undefined ? n : (n = g(o, e)) !== undefined ? n : void 0;
                this.each(function() {
                    He.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e)
            })
        }
    }), Te.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || Array.isArray(n) ? i = ze.access(e, t, Te.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Te.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = Te._queueHooks(e, t),
                s = function() {
                    Te.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ze.get(e, n) || ze.access(e, n, {
                empty: Te.Callbacks("once memory").add(function() {
                    ze.remove(e, [t + "queue", n])
                })
            })
        }
    }), Te.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = Te.queue(this, e, t);
                Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Te.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = Te.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = ze.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        We = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"),
        Xe = ["Top", "Right", "Bottom", "Left"],
        Ge = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && Te.contains(e.ownerDocument, e) && "none" === Te.css(e, "display")
        },
        Ye = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        },
        Ue = {};
    Te.fn.extend({
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ge(this) ? Te(this).show() : Te(this).hide()
            })
        }
    });
    var Ke = /^(?:checkbox|radio)$/i,
        Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Je = /^$|^module$|\/(?:java|ecma)script/i,
        Ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td;
    var et, tt, nt = /<|&#?\w+;/;
    et = se.createDocumentFragment().appendChild(se.createElement("div")), (tt = se.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), et.appendChild(tt), ge.checkClone = et.cloneNode(!0).cloneNode(!0).lastChild.checked, et.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!et.cloneNode(!0).lastChild.defaultValue;
    var it = se.documentElement,
        rt = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        st = /^([^.]*)(?:\.(.+)|)/;
    Te.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, p, h, f, m, v = ze.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && Te.find.matchesSelector(it, r), n.guid || (n.guid = Te.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return void 0 !== Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : undefined
                    }), u = (t = (t || "").match(Ie) || [""]).length; u--;) h = m = (a = st.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), h && (d = Te.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = Te.event.special[h] || {}, c = Te.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Te.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), Te.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, p, h, f, m, v = ze.hasData(e) && ze.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(Ie) || [""]).length; u--;)
                    if (h = m = (a = st.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = Te.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || Te.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) Te.event.remove(e, h + t[u], n, i, !0);
                Te.isEmptyObject(l) && ze.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = Te.event.fix(e),
                l = new Array(arguments.length),
                u = (ze.get(this, "events") || {})[a.type] || [],
                c = Te.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = Te.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, (i = ((Te.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== undefined && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) s[r = (i = t[n]).selector + " "] === undefined && (s[r] = i.needsContext ? Te(r, this).index(u) > -1 : Te.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(Te.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[Te.expando] ? e : new Te.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Te.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Te.Event = function(e, t) {
        if (!(this instanceof Te.Event)) return new Te.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? S : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Te.expando] = !0
    }, Te.Event.prototype = {
        constructor: Te.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Te.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && rt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Te.event.addProp), Te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Te.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || Te.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Te.fn.extend({
        on: function(e, t, n, i) {
            return P(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return P(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Te(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = C), this.each(function() {
                Te.event.remove(this, e, n, t)
            })
        }
    });
    var at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        lt = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Te.extend({
        htmlPrefilter: function(e) {
            return e.replace(at, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = Te.contains(e.ownerDocument, e);
            if (!(ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e)))
                for (s = x(a), i = 0, r = (o = x(e)).length; i < r; i++) A(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || x(e), s = s || x(a), i = 0, r = o.length; i < r; i++) D(o[i], s[i]);
                else D(e, a);
            return (s = x(a, "script")).length > 0 && T(s, !l && x(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = Te.event.special, o = 0;
                (n = e[o]) !== undefined; o++)
                if (_e(n)) {
                    if (t = n[ze.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? Te.event.remove(n, i) : Te.removeEvent(n, i, t.handle);
                        n[ze.expando] = undefined
                    }
                    n[He.expando] && (n[He.expando] = undefined)
                }
        }
    }), Te.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return $e(this, function(e) {
                return e === undefined ? Te.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return I(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = M(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(x(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Te.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !lt.test(e) && !Ze[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Te.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Te.cleanData(x(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var n = this.parentNode;
                Te.inArray(this, e) < 0 && (Te.cleanData(x(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Te.fn[e] = function(e) {
            for (var n, i = [], r = Te(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Te(r[s])[t](n), ce.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var dt = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"),
        pt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ht = new RegExp(Xe.join("|"), "i");
    ! function() {
        function t() {
            if (u) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(l).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, a = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", it.removeChild(l), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, s, a, l = se.createElement("div"),
            u = se.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === u.style.backgroundClip, Te.extend(ge, {
            boxSizingReliable: function() {
                return t(), r
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), a
            },
            scrollboxSize: function() {
                return t(), o
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/,
        mt = /^--/,
        vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yt = ["Webkit", "Moz", "ms"],
        bt = se.createElement("div").style;
    Te.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = f(t),
                    l = mt.test(t),
                    u = e.style;
                if (l || (t = q(a)), s = Te.cssHooks[t] || Te.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : u[t];
                "string" === (o = typeof n) && (r = We.exec(n)) && r[1] && (n = y(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (Te.cssNumber[a] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === undefined || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = f(t);
            return mt.test(t) || (t = q(a)), (s = Te.cssHooks[t] || Te.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = N(e, t, i)), "normal" === r && t in gt && (r = gt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), Te.each(["height", "width"], function(e, t) {
        Te.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ft.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, i) : Ye(e, vt, function() {
                    return H(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = pt(e),
                    s = "border-box" === Te.css(e, "boxSizing", !1, o),
                    a = i && z(e, t, i, s, o);
                return s && ge.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - z(e, t, "border", !1, o) - .5)), a && (r = We.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), _(e, n, a)
            }
        }
    }), Te.cssHooks.marginLeft = $(ge.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Te.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Te.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Xe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (Te.cssHooks[e + t].set = _)
    }), Te.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = pt(e), r = t.length; s < r; s++) o[t[s]] = Te.css(e, t[s], !1, i);
                    return o
                }
                return n !== undefined ? Te.style(e, t, n) : Te.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Te.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Te.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Te.cssProps[e.prop]] && !Te.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Te.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Te.fx = B.prototype.init, Te.fx.step = {};
    var wt, xt, Tt = /^(?:toggle|show|hide)$/,
        Et = /queueHooks$/;
    Te.Animation = Te.extend(U, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, We.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ye(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [G],
            prefilter: function(e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), Te.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? Te.extend({}, e) : {
                complete: n || !n && t || ye(e) && e,
                duration: e,
                easing: n && t || t && !ye(t) && t
            };
            return Te.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Te.fx.speeds ? i.duration = Te.fx.speeds[i.duration] : i.duration = Te.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ye(i.old) && i.old.call(this), i.queue && Te.dequeue(this, i.queue)
            }, i
        }, Te.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ge).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = Te.isEmptyObject(e),
                    o = Te.speed(t, n, i),
                    s = function() {
                        var t = U(this, Te.extend({}, e), o);
                        (r || ze.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = Te.timers,
                        s = ze.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Et.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || Te.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = ze.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = Te.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Te.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Te.each(["toggle", "show", "hide"], function(e, t) {
            var n = Te.fn[t];
            Te.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
            }
        }), Te.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Te.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), Te.timers = [], Te.fx.tick = function() {
            var e, t = 0,
                n = Te.timers;
            for (wt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Te.fx.stop(), wt = undefined
        }, Te.fx.timer = function(e) {
            Te.timers.push(e), Te.fx.start()
        }, Te.fx.interval = 13, Te.fx.start = function() {
            xt || (xt = !0, F())
        }, Te.fx.stop = function() {
            xt = null
        }, Te.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Te.fn.delay = function(t, n) {
            return t = Te.fx && Te.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = se.createElement("input"),
                t = se.createElement("select").appendChild(se.createElement("option"));
            e.type = "checkbox", ge.checkOn = "" !== e.value, ge.optSelected = t.selected, (e = se.createElement("input")).value = "t", e.type = "radio", ge.radioValue = "t" === e.value
        }();
    var St, Ct = Te.expr.attrHandle;
    Te.fn.extend({
        attr: function(e, t) {
            return $e(this, Te.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Te.removeAttr(this, e)
            })
        }
    }), Te.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Te.prop(e, t, n) : (1 === o && Te.isXMLDoc(e) || (r = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? St : undefined)), n !== undefined ? null === n ? void Te.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Te.find.attr(e, t)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ge.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Ie);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), St = {
        set: function(e, t, n) {
            return !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Te.each(Te.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || Te.find.attr;
        Ct[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = Ct[s], Ct[s] = r, r = null != n(e, t, i) ? s : null, Ct[s] = o), r
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i,
        Pt = /^(?:a|area)$/i;
    Te.fn.extend({
        prop: function(e, t) {
            return $e(this, Te.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Te.propFix[e] || e]
            })
        }
    }), Te.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, r = Te.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Te.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ge.optSelected || (Te.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Te.propFix[this.toLowerCase()] = this
    }), Te.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function(t) {
                Te(this).addClass(e.call(this, t, Q(this)))
            });
            if ((t = J(e)).length)
                for (; n = this[l++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + K(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = K(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function(t) {
                Te(this).removeClass(e.call(this, t, Q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = J(e)).length)
                for (; n = this[l++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + K(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = K(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function(n) {
                Te(this).toggleClass(e.call(this, n, Q(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = Te(this), s = J(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else e !== undefined && "boolean" !== n || ((t = Q(this)) && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ze.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + K(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Mt = /\r/g;
    Te.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = ye(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, Te(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Te.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
            })) : r ? (t = Te.valHooks[r.type] || Te.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : "string" == typeof(n = r.value) ? n.replace(Mt, "") : null == n ? "" : n : void 0
        }
    }), Te.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Te.find.attr(e, "value");
                    return null != t ? t : K(Te.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        u = a ? s + 1 : r.length;
                    for (i = s < 0 ? u : a ? s : 0; i < u; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = Te(n).val(), a) return t;
                            l.push(t)
                        } return l
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = Te.makeArray(t), s = r.length; s--;)((i = r[s]).selected = Te.inArray(Te.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Te.each(["radio", "checkbox"], function() {
        Te.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1
            }
        }, ge.checkOn || (Te.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ge.focusin = "onfocusin" in e;
    var Lt = /^(?:focusinfocus|focusoutblur)$/,
        Ot = function(e) {
            e.stopPropagation()
        };
    Te.extend(Te.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, d, p, h = [i || se],
                f = fe.call(t, "type") ? t.type : t,
                m = fe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = a = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(f + Te.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), u = f.indexOf(":") < 0 && "on" + f, (t = t[Te.expando] ? t : new Te.Event(f, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : Te.makeArray(n, [t]), d = Te.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !be(i)) {
                    for (l = d.delegateType || f, Lt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || se) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = h[o++]) && !t.isPropagationStopped();) p = s, t.type = o > 1 ? l : d.bindType || f, (c = (ze.get(s, "events") || {})[t.type] && ze.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && _e(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !_e(i) || u && ye(i[f]) && !be(i) && ((a = i[u]) && (i[u] = null), Te.event.triggered = f, t.isPropagationStopped() && p.addEventListener(f, Ot), i[f](), t.isPropagationStopped() && p.removeEventListener(f, Ot), Te.event.triggered = undefined, a && (i[u] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = Te.extend(new Te.Event, n, {
                type: e,
                isSimulated: !0
            });
            Te.event.trigger(i, null, t)
        }
    }), Te.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                Te.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return Te.event.trigger(e, t, n, !0)
        }
    }), ge.focusin || Te.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Te.event.simulate(t, e.target, Te.event.fix(e))
        };
        Te.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ze.access(i, t);
                r || i.addEventListener(e, n, !0), ze.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ze.access(i, t) - 1;
                r ? ze.access(i, t, r) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
            }
        }
    });
    var Dt = e.location,
        At = Date.now(),
        It = /\?/;
    Te.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = undefined
        }
        return n && !n.getElementsByTagName("parsererror").length || Te.error("Invalid XML: " + t), n
    };
    var jt = /\[\]$/,
        Nt = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;
    Te.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = ye(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return i.join("&")
    }, Te.fn.extend({
        serialize: function() {
            return Te.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Te.prop(this, "elements");
                return e ? Te.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Te(this).is(":disabled") && Rt.test(this.nodeName) && !$t.test(e) && (this.checked || !Ke.test(e))
            }).map(function(e, t) {
                var n = Te(this).val();
                return null == n ? null : Array.isArray(n) ? Te.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        _t = /#.*$/,
        zt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        Vt = /^\/\//,
        Wt = {},
        Xt = {},
        Gt = "*/".concat("*"),
        Yt = se.createElement("a");
    Yt.href = Dt.href, Te.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Bt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Te.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ne(ne(e, Te.ajaxSettings), t) : ne(Te.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Wt),
        ajaxTransport: ee(Xt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, p, h, w, x, T = n;
                c || (c = !0, l && e.clearTimeout(l), r = undefined, s = a || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = ie(f, E, i)), w = re(f, w, E, u), u ? (f.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (Te.lastModified[o] = x), (x = E.getResponseHeader("etag")) && (Te.etag[o] = x)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, u = !(h = w.error))) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || T) + "", u ? g.resolveWith(m, [p, T, E]) : g.rejectWith(m, [E, T, h]), E.statusCode(b), b = undefined, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [E, f, u ? p : h]), y.fireWith(m, [E, T]), d && (v.trigger("ajaxComplete", [E, f]), --Te.active || Te.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var r, o, s, a, l, u, c, d, p, h, f = Te.ajaxSetup({}, n),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? Te(m) : Te.event,
                g = Te.Deferred(),
                y = Te.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                x = {},
                T = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Ht.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(E), f.url = ((t || f.url || Dt.href) + "").replace(Vt, Dt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ie) || [""], null == f.crossDomain) {
                u = se.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = Yt.protocol + "//" + Yt.host != u.protocol + "//" + u.host
                } catch (S) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = Te.param(f.data, f.traditional)), te(Wt, f, n, E), c) return E;
            for (p in (d = Te.event && f.global) && 0 == Te.active++ && Te.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ft.test(f.type), o = f.url.replace(_t, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(qt, "+")) : (h = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (It.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(zt, "$1"), h = (It.test(o) ? "&" : "?") + "_=" + At++ + h), f.url = o + h), f.ifModified && (Te.lastModified[o] && E.setRequestHeader("If-Modified-Since", Te.lastModified[o]), Te.etag[o] && E.setRequestHeader("If-None-Match", Te.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]), f.headers) E.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, E, f) || c)) return E.abort();
            if (T = "abort", y.add(f.complete), E.done(f.success), E.fail(f.error), r = te(Xt, f, n, E)) {
                if (E.readyState = 1, d && v.trigger("ajaxSend", [E, f]), c) return E;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    E.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, r.send(w, i)
                } catch (S) {
                    if (c) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return Te.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Te.get(e, undefined, t, "script")
        }
    }), Te.each(["get", "post"], function(e, t) {
        Te[t] = function(e, n, i, r) {
            return ye(n) && (r = r || i, i = n, n = undefined), Te.ajax(Te.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, Te.isPlainObject(e) && e))
        }
    }), Te._evalUrl = function(e) {
        return Te.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, Te.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ye(e) ? this.each(function(t) {
                Te(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Te(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ye(e);
            return this.each(function(n) {
                Te(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                Te(this).replaceWith(this.childNodes)
            }), this
        }
    }), Te.expr.pseudos.hidden = function(e) {
        return !Te.expr.pseudos.visible(e)
    }, Te.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Te.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Kt = Te.ajaxSettings.xhr();
    ge.cors = !!Kt && "withCredentials" in Kt, ge.ajax = Kt = !!Kt, Te.ajaxTransport(function(t) {
        var n, i;
        if (ge.cors || Kt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), a.onabort !== undefined ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), Te.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), Te.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return Te.globalEval(e), e
            }
        }
    }), Te.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Te.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, r) {
                t = Te("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), se.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Qt, Jt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    Te.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Jt.pop() || Te.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), Te.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Zt, "$1" + r) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || Te.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            o === undefined ? Te(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Jt.push(r)), s && ye(o) && o(s[0]), s = o = undefined
        }), "script"
    }), ge.createHTMLDocument = ((Qt = se.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), Te.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ge.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), o = !n && [], (r = Me.exec(e)) ? [t.createElement(r[1])] : (r = E([e], t, o), o && o.length && Te(o).remove(), Te.merge([], r.childNodes)));
        var i, r, o
    }, Te.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = K(e.slice(a)), e = e.slice(0, a)), ye(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), s.length > 0 && Te.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? Te("<div>").append(Te.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Te.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Te.expr.pseudos.animated = function(e) {
        return Te.grep(Te.timers, function(t) {
            return e === t.elem
        }).length
    }, Te.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = Te.css(e, "position"),
                c = Te(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = Te.css(e, "top"), l = Te.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ye(t) && (t = t.call(e, n, Te.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, Te.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                Te.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Te.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = Te(e).offset()).top += Te.css(e, "borderTopWidth", !0), r.left += Te.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - Te.css(i, "marginTop", !0),
                    left: t.left - r.left - Te.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent;
                return e || it
            })
        }
    }), Te.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        Te.fn[e] = function(i) {
            return $e(this, function(e, i, r) {
                var o;
                if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), r === undefined) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), Te.each(["top", "left"], function(e, t) {
        Te.cssHooks[t] = $(ge.pixelPosition, function(e, n) {
            if (n) return n = N(e, t), dt.test(n) ? Te(e).position()[t] + "px" : n
        })
    }), Te.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Te.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            Te.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return $e(this, function(t, n, r) {
                    var o;
                    return be(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : r === undefined ? Te.css(t, n, a) : Te.style(t, n, r, a)
                }, t, s ? r : undefined, s)
            }
        })
    }), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        Te.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Te.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Te.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Te.proxy = function(e, t) {
        var n, i, r;
        return "string" == typeof t && (n = e[t], t = e, e = n), ye(e) ? (i = le.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(le.call(arguments)))
        }).guid = e.guid = e.guid || Te.guid++, r) : undefined
    }, Te.holdReady = function(e) {
        e ? Te.readyWait++ : Te.ready(!0)
    }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = o, Te.isFunction = ye, Te.isWindow = be, Te.camelCase = f, Te.type = i, Te.now = Date.now, Te.isNumeric = function(e) {
        var t = Te.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Te
    });
    var en = e.jQuery,
        tn = e.$;
    return Te.noConflict = function(t) {
        return e.$ === Te && (e.$ = tn), t && e.jQuery === Te && (e.jQuery = en), Te
    }, t || (e.jQuery = e.$ = Te), Te
}),
function(e, t) {
    "use strict";
    var n;
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), !1 !== r.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(e, r) {
                        if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                l = n.csrfParam(),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", (i = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function(t, n, i) {
            var r, o, s, a = e(),
                l = n || "input,textarea",
                u = t.find(l),
                c = {};
            return u.each(function() {
                (r = e(this)).is("input[type=radio]") ? (s = r.attr("name"), c[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (o = t.find('input[type=radio][name="' + s + '"]'), a = a.add(o)), c[s] = s)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (a = a.add(r))
            }), !!a.length && a
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(e(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(e(this))
    }), i.on("click.rails", n.linkClickSelector, function(t) {
        var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            s = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o) return !0;
            var a = n.handleRemote(i);
            return !1 === a ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return !1 === r ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r, o, s = e(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === t)
            if (s.data("ujs:formnovalidate-button") === t) {
                if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else s.data("ujs:formnovalidate-button", t);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            s = i.closest("form");
        0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    var e, t;
    e = this.jQuery || window.jQuery, t = e(window), e.fn.stick_in_parent = function(n) {
        var i, r, o, s, a, l, u, c, d, p, h;
        for (null == n && (n = {}), h = n.sticky_class, a = n.inner_scrolling, p = n.recalc_every, d = n.parent, c = n.offset_top, u = n.spacer, r = n.bottoming, null == c && (c = 0), null == d && (d = void 0), null == a && (a = !0), null == h && (h = "is_stuck"), i = e(document), null == r && (r = !0), o = function(n, o, s, l, f, m, v, g) {
                var y, b, w, x, T, E, S, C, k, P, M, L;
                if (!n.data("sticky_kit")) {
                    if (n.data("sticky_kit", !0), T = i.height(), S = n.parent(), null != d && (S = S.closest(d)), !S.length) throw "failed to find stick parent";
                    if (y = w = !1, (M = null != u ? u && n.closest(u) : e("<div />")) && M.css("position", n.css("position")), (C = function() {
                            var e, t, r;
                            if (!g && (T = i.height(), e = parseInt(S.css("border-top-width"), 10), t = parseInt(S.css("padding-top"), 10), o = parseInt(S.css("padding-bottom"), 10), s = S.offset().top + e + t, l = S.height(), w && (y = w = !1, null == u && (n.insertAfter(M), M.detach()), n.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(h), r = !0), f = n.offset().top - (parseInt(n.css("margin-top"), 10) || 0) - c, m = n.outerHeight(!0), v = n.css("float"), M && M.css({
                                    width: n.outerWidth(!0),
                                    height: m,
                                    display: n.css("display"),
                                    "vertical-align": n.css("vertical-align"),
                                    float: v
                                }), r)) return L()
                        })(), m !== l) return x = void 0, E = c, P = p, L = function() {
                        var e, d, b, k;
                        if (!g && (b = !1, null != P && (0 >= --P && (P = p, C(), b = !0)), b || i.height() === T || C(), b = t.scrollTop(), null != x && (d = b - x), x = b, w ? (r && (k = b + m + E > l + s, y && !k && (y = !1, n.css({
                                position: "fixed",
                                bottom: "",
                                top: E
                            }).trigger("sticky_kit:unbottom"))), b < f && (w = !1, E = c, null == u && ("left" !== v && "right" !== v || n.insertAfter(M), M.detach()), e = {
                                position: "",
                                width: "",
                                top: ""
                            }, n.css(e).removeClass(h).trigger("sticky_kit:unstick")), a && (e = t.height(), m + c > e && !y && (E -= d, E = Math.max(e - m, E), E = Math.min(c, E), w && n.css({
                                top: E + "px"
                            })))) : b > f && (w = !0, (e = {
                                position: "fixed",
                                top: E
                            }).width = "border-box" === n.css("box-sizing") ? n.outerWidth() + "px" : n.width() + "px", n.css(e).addClass(h), null == u && (n.after(M), "left" !== v && "right" !== v || M.append(n)), n.trigger("sticky_kit:stick")), w && r && (null == k && (k = b + m + E > l + s), !y && k))) return y = !0, "static" === S.css("position") && S.css({
                            position: "relative"
                        }), n.css({
                            position: "absolute",
                            bottom: o,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, k = function() {
                        return C(), L()
                    }, b = function() {
                        if (g = !0, t.off("touchmove", L), t.off("scroll", L), t.off("resize", k), e(document.body).off("sticky_kit:recalc", k), n.off("sticky_kit:detach", b), n.removeData("sticky_kit"), n.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), S.position("position", ""), w) return null == u && ("left" !== v && "right" !== v || n.insertAfter(M), M.remove()), n.removeClass(h)
                    }, t.on("touchmove", L), t.on("scroll", L), t.on("resize", k), e(document.body).on("sticky_kit:recalc", k), n.on("sticky_kit:detach", b), setTimeout(L, 0)
                }
            }, s = 0, l = this.length; s < l; s++) n = this[s], o(e(n));
        return this
    }
}.call(this),
    /*
    Turbolinks 5.1.0
    Copyright Â© 2018 Basecamp, LLC
     */
    function() {
        this.Turbolinks = {
            supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
            visit: function(e, t) {
                return Turbolinks.controller.visit(e, t)
            },
            clearCache: function() {
                return Turbolinks.controller.clearCache()
            },
            setProgressBarDelay: function(e) {
                return Turbolinks.controller.setProgressBarDelay(e)
            }
        }
    }.call(this),
    function() {
        var e, t, n, i = [].slice;
        Turbolinks.copyObject = function(e) {
            var t, n, i;
            for (t in n = {}, e) i = e[t], n[t] = i;
            return n
        }, Turbolinks.closest = function(t, n) {
            return e.call(t, n)
        }, e = function() {
            var e;
            return null != (e = document.documentElement.closest) ? e : function(e) {
                var n;
                for (n = this; n;) {
                    if (n.nodeType === Node.ELEMENT_NODE && t.call(n, e)) return n;
                    n = n.parentNode
                }
            }
        }(), Turbolinks.defer = function(e) {
            return setTimeout(e, 1)
        }, Turbolinks.throttle = function(e) {
            var t;
            return t = null,
                function() {
                    var n;
                    return n = 1 <= arguments.length ? i.call(arguments, 0) : [], null != t ? t : t = requestAnimationFrame(function(i) {
                        return function() {
                            return t = null, e.apply(i, n)
                        }
                    }(this))
                }
        }, Turbolinks.dispatch = function(e, t) {
            var i, r, o, s, a, l;
            return l = (a = null != t ? t : {}).target, i = a.cancelable, r = a.data, (o = document.createEvent("Events")).initEvent(e, !0, !0 === i), o.data = null != r ? r : {}, o.cancelable && !n && (s = o.preventDefault, o.preventDefault = function() {
                return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                }), s.call(this)
            }), (null != l ? l : document).dispatchEvent(o), o
        }, n = function() {
            var e;
            return (e = document.createEvent("Events")).initEvent("test", !0, !0), e.preventDefault(), e.defaultPrevented
        }(), Turbolinks.match = function(e, n) {
            return t.call(e, n)
        }, t = function() {
            var e, t, n, i;
            return null != (t = null != (n = null != (i = (e = document.documentElement).matchesSelector) ? i : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector
        }(), Turbolinks.uuid = function() {
            var e, t, n;
            for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
            return n
        }
    }.call(this),
    function() {
        Turbolinks.Location = function() {
            function e(e) {
                var t, n;
                null == e && (e = ""), (n = document.createElement("a")).href = e.toString(), this.absoluteURL = n.href, 2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
            }
            var t, n, i, r;
            return e.wrap = function(e) {
                return e instanceof this ? e : new this(e)
            }, e.prototype.getOrigin = function() {
                return this.absoluteURL.split("/", 3).join("/")
            }, e.prototype.getPath = function() {
                var e, t;
                return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
            }, e.prototype.getPathComponents = function() {
                return this.getPath().split("/").slice(1)
            }, e.prototype.getLastPathComponent = function() {
                return this.getPathComponents().slice(-1)[0]
            }, e.prototype.getExtension = function() {
                var e, t;
                return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
            }, e.prototype.isHTML = function() {
                return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
            }, e.prototype.isPrefixedBy = function(e) {
                var t;
                return t = n(e), this.isEqualTo(e) || r(this.absoluteURL, t)
            }, e.prototype.isEqualTo = function(e) {
                return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
            }, e.prototype.toCacheKey = function() {
                return this.requestURL
            }, e.prototype.toJSON = function() {
                return this.absoluteURL
            }, e.prototype.toString = function() {
                return this.absoluteURL
            }, e.prototype.valueOf = function() {
                return this.absoluteURL
            }, n = function(e) {
                return t(e.getOrigin() + e.getPath())
            }, t = function(e) {
                return i(e, "/") ? e : e + "/"
            }, r = function(e, t) {
                return e.slice(0, t.length) === t
            }, i = function(e, t) {
                return e.slice(-t.length) === t
            }, e
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.HttpRequest = function() {
            function t(t, n, i) {
                this.delegate = t, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = Turbolinks.Location.wrap(n).requestURL, this.referrer = Turbolinks.Location.wrap(i).absoluteURL, this.createXHR()
            }
            return t.NETWORK_FAILURE = 0, t.TIMEOUT_FAILURE = -1, t.timeout = 60, t.prototype.send = function() {
                var e;
                return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
            }, t.prototype.cancel = function() {
                return this.xhr && this.sent ? this.xhr.abort() : void 0
            }, t.prototype.requestProgressed = function(e) {
                return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
            }, t.prototype.requestLoaded = function() {
                return this.endRequest((e = this, function() {
                    var t;
                    return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                }));
                var e
            }, t.prototype.requestFailed = function() {
                return this.endRequest((e = this, function() {
                    return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                }));
                var e
            }, t.prototype.requestTimedOut = function() {
                return this.endRequest((e = this, function() {
                    return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                }));
                var e
            }, t.prototype.requestCanceled = function() {
                return this.endRequest()
            }, t.prototype.notifyApplicationBeforeRequestStart = function() {
                return Turbolinks.dispatch("turbolinks:request-start", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, t.prototype.notifyApplicationAfterRequestEnd = function() {
                return Turbolinks.dispatch("turbolinks:request-end", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, t.prototype.createXHR = function() {
                return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
            }, t.prototype.endRequest = function(e) {
                return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
            }, t.prototype.setProgress = function(e) {
                var t;
                return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
            }, t.prototype.destroy = function() {
                var e;
                return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null
            }, t
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.ProgressBar = function() {
            function t() {
                this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
            }
            var n;
            return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
            }, t.prototype.hide = function() {
                return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this, function() {
                    return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1
                }))) : void 0;
                var e
            }, t.prototype.setValue = function(e) {
                return this.value = e, this.refresh()
            }, t.prototype.installStylesheetElement = function() {
                return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
            }, t.prototype.installProgressElement = function() {
                return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
            }, t.prototype.fadeProgressElement = function(e) {
                return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n)
            }, t.prototype.uninstallProgressElement = function() {
                return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
            }, t.prototype.startTrickling = function() {
                return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
            }, t.prototype.stopTrickling = function() {
                return clearInterval(this.trickleInterval), this.trickleInterval = null
            }, t.prototype.trickle = function() {
                return this.setValue(this.value + Math.random() / 100)
            }, t.prototype.refresh = function() {
                return requestAnimationFrame((e = this, function() {
                    return e.progressElement.style.width = 10 + 90 * e.value + "%"
                }));
                var e
            }, t.prototype.createStylesheetElement = function() {
                var e;
                return (e = document.createElement("style")).type = "text/css", e.textContent = this.constructor.defaultCSS, e
            }, t.prototype.createProgressElement = function() {
                var e;
                return (e = document.createElement("div")).className = "turbolinks-progress-bar", e
            }, t
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.BrowserAdapter = function() {
            function t(t) {
                this.controller = t, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new Turbolinks.ProgressBar
            }
            var n, i, r;
            return r = Turbolinks.HttpRequest, n = r.NETWORK_FAILURE, i = r.TIMEOUT_FAILURE, t.prototype.visitProposedToLocationWithAction = function(e, t) {
                return this.controller.startVisitToLocationWithAction(e, t)
            }, t.prototype.visitStarted = function(e) {
                return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot()
            }, t.prototype.visitRequestStarted = function(e) {
                return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
            }, t.prototype.visitRequestProgressed = function(e) {
                return this.progressBar.setValue(e.progress)
            }, t.prototype.visitRequestCompleted = function(e) {
                return e.loadResponse()
            }, t.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                switch (t) {
                    case n:
                    case i:
                        return this.reload();
                    default:
                        return e.loadResponse()
                }
            }, t.prototype.visitRequestFinished = function() {
                return this.hideProgressBar()
            }, t.prototype.visitCompleted = function(e) {
                return e.followRedirect()
            }, t.prototype.pageInvalidated = function() {
                return this.reload()
            }, t.prototype.showProgressBarAfterDelay = function() {
                return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
            }, t.prototype.showProgressBar = function() {
                return this.progressBar.show()
            }, t.prototype.hideProgressBar = function() {
                return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
            }, t.prototype.reload = function() {
                return window.location.reload()
            }, t
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.History = function() {
            function t(t) {
                this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this)
            }
            return t.prototype.start = function() {
                return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
            }, t.prototype.stop = function() {
                return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
            }, t.prototype.push = function(e, t) {
                return e = Turbolinks.Location.wrap(e), this.update("push", e, t)
            }, t.prototype.replace = function(e, t) {
                return e = Turbolinks.Location.wrap(e), this.update("replace", e, t)
            }, t.prototype.onPopState = function(e) {
                var t, n, i, r;
                return this.shouldHandlePopState() && (r = null != (n = e.state) ? n.turbolinks : void 0) ? (t = Turbolinks.Location.wrap(window.location), i = r.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(t, i)) : void 0
            }, t.prototype.onPageLoad = function() {
                return Turbolinks.defer(function(e) {
                    return function() {
                        return e.pageLoaded = !0
                    }
                }(this))
            }, t.prototype.shouldHandlePopState = function() {
                return this.pageIsLoaded()
            }, t.prototype.pageIsLoaded = function() {
                return this.pageLoaded || "complete" === document.readyState
            }, t.prototype.update = function(e, t, n) {
                var i;
                return i = {
                    turbolinks: {
                        restorationIdentifier: n
                    }
                }, history[e + "State"](i, null, t)
            }, t
        }()
    }.call(this),
    function() {
        Turbolinks.Snapshot = function() {
            function e(e) {
                var t, n;
                n = e.head, t = e.body, this.head = null != n ? n : document.createElement("head"), this.body = null != t ? t : document.createElement("body")
            }
            return e.wrap = function(e) {
                return e instanceof this ? e : this.fromHTML(e)
            }, e.fromHTML = function(e) {
                var t;
                return (t = document.createElement("html")).innerHTML = e, this.fromElement(t)
            }, e.fromElement = function(e) {
                return new this({
                    head: e.querySelector("head"),
                    body: e.querySelector("body")
                })
            }, e.prototype.clone = function() {
                return new e({
                    head: this.head.cloneNode(!0),
                    body: this.body.cloneNode(!0)
                })
            }, e.prototype.getRootLocation = function() {
                var e, t;
                return t = null != (e = this.getSetting("root")) ? e : "/", new Turbolinks.Location(t)
            }, e.prototype.getCacheControlValue = function() {
                return this.getSetting("cache-control")
            }, e.prototype.getElementForAnchor = function(e) {
                try {
                    return this.body.querySelector("[id='" + e + "'], a[name='" + e + "']")
                } catch (t) {}
            }, e.prototype.hasAnchor = function(e) {
                return null != this.getElementForAnchor(e)
            }, e.prototype.isPreviewable = function() {
                return "no-preview" !== this.getCacheControlValue()
            }, e.prototype.isCacheable = function() {
                return "no-cache" !== this.getCacheControlValue()
            }, e.prototype.isVisitable = function() {
                return "reload" !== this.getSetting("visit-control")
            }, e.prototype.getSetting = function(e) {
                var t, n;
                return null != (t = (n = this.head.querySelectorAll("meta[name='turbolinks-" + e + "']"))[n.length - 1]) ? t.getAttribute("content") : void 0
            }, e
        }()
    }.call(this),
    function() {
        var e = [].slice;
        Turbolinks.Renderer = function() {
            function t() {}
            var n;
            return t.render = function() {
                var t, n, i;
                return n = arguments[0], t = arguments[1], (i = function(e, t, n) {
                    n.prototype = e.prototype;
                    var i = new n,
                        r = e.apply(i, t);
                    return Object(r) === r ? r : i
                }(this, 3 <= arguments.length ? e.call(arguments, 2) : [], function() {})).delegate = n, i.render(t), i
            }, t.prototype.renderView = function(e) {
                return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody)
            }, t.prototype.invalidateView = function() {
                return this.delegate.viewInvalidated()
            }, t.prototype.createScriptElement = function(e) {
                var t;
                return "false" === e.getAttribute("data-turbolinks-eval") ? e : ((t = document.createElement("script")).textContent = e.textContent, t.async = !1, n(t, e), t)
            }, n = function(e, t) {
                var n, i, r, o, s, a, l;
                for (a = [], n = 0, i = (o = t.attributes).length; i > n; n++) r = (s = o[n]).name, l = s.value, a.push(e.setAttribute(r, l));
                return a
            }, t
        }()
    }.call(this),
    function() {
        Turbolinks.HeadDetails = function() {
            function e(e) {
                var t, n, o, s, a, l;
                for (this.element = e, this.elements = {}, o = 0, a = (l = this.element.childNodes).length; a > o; o++)(n = l[o]).nodeType === Node.ELEMENT_NODE && (s = n.outerHTML, (null != (t = this.elements)[s] ? t[s] : t[s] = {
                    type: r(n),
                    tracked: i(n),
                    elements: []
                }).elements.push(n))
            }
            var t, n, i, r;
            return e.prototype.hasElementWithKey = function(e) {
                return e in this.elements
            }, e.prototype.getTrackedElementSignature = function() {
                var e;
                return function() {
                    var t, n;
                    for (e in n = [], t = this.elements) t[e].tracked && n.push(e);
                    return n
                }.call(this).join("")
            }, e.prototype.getScriptElementsNotInDetails = function(e) {
                return this.getElementsMatchingTypeNotInDetails("script", e)
            }, e.prototype.getStylesheetElementsNotInDetails = function(e) {
                return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
            }, e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) {
                var n, i, r, o, s, a;
                for (i in s = [], r = this.elements) a = (o = r[i]).type, n = o.elements, a !== e || t.hasElementWithKey(i) || s.push(n[0]);
                return s
            }, e.prototype.getProvisionalElements = function() {
                var e, t, n, i, r, o, s;
                for (t in n = [], i = this.elements) s = (r = i[t]).type, o = r.tracked, e = r.elements, null != s || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                return n
            }, r = function(e) {
                return t(e) ? "script" : n(e) ? "stylesheet" : void 0
            }, i = function(e) {
                return "reload" === e.getAttribute("data-turbolinks-track")
            }, t = function(e) {
                return "script" === e.tagName.toLowerCase()
            }, n = function(e) {
                var t;
                return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
            }, e
        }()
    }.call(this),
    function() {
        var e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            t = {}.hasOwnProperty;
        Turbolinks.SnapshotRenderer = function(t) {
            function n(e, t, n) {
                this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = n, this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
            }
            return e(n, t), n.prototype.render = function(e) {
                return this.shouldRender() ? (this.mergeHead(), this.renderView((t = this, function() {
                    return t.replaceBody(), t.isPreview || t.focusFirstAutofocusableElement(), e()
                }))) : this.invalidateView();
                var t
            }, n.prototype.mergeHead = function() {
                return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
            }, n.prototype.replaceBody = function() {
                return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
            }, n.prototype.shouldRender = function() {
                return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
            }, n.prototype.trackedElementsAreIdentical = function() {
                return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
            }, n.prototype.copyNewHeadStylesheetElements = function() {
                var e, t, n, i, r;
                for (r = [], t = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e));
                return r
            }, n.prototype.copyNewHeadScriptElements = function() {
                var e, t, n, i, r;
                for (r = [], t = 0, n = (i = this.getNewHeadScriptElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(this.createScriptElement(e)));
                return r
            }, n.prototype.removeCurrentHeadProvisionalElements = function() {
                var e, t, n, i, r;
                for (r = [], t = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.removeChild(e));
                return r
            }, n.prototype.copyNewHeadProvisionalElements = function() {
                var e, t, n, i, r;
                for (r = [], t = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e));
                return r
            }, n.prototype.importBodyPermanentElements = function() {
                var e, t, n, i, r, o;
                for (o = [], t = 0, n = (i = this.getNewBodyPermanentElements()).length; n > t; t++) r = i[t], (e = this.findCurrentBodyPermanentElement(r)) ? o.push(r.parentNode.replaceChild(e, r)) : o.push(void 0);
                return o
            }, n.prototype.activateBodyScriptElements = function() {
                var e, t, n, i, r, o;
                for (o = [], t = 0, n = (i = this.getNewBodyScriptElements()).length; n > t; t++) r = i[t], e = this.createScriptElement(r), o.push(r.parentNode.replaceChild(e, r));
                return o
            }, n.prototype.assignNewBody = function() {
                return document.body = this.newBody
            }, n.prototype.focusFirstAutofocusableElement = function() {
                var e;
                return null != (e = this.findFirstAutofocusableElement()) ? e.focus() : void 0
            }, n.prototype.getNewHeadStylesheetElements = function() {
                return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
            }, n.prototype.getNewHeadScriptElements = function() {
                return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
            }, n.prototype.getCurrentHeadProvisionalElements = function() {
                return this.currentHeadDetails.getProvisionalElements()
            }, n.prototype.getNewHeadProvisionalElements = function() {
                return this.newHeadDetails.getProvisionalElements()
            }, n.prototype.getNewBodyPermanentElements = function() {
                return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
            }, n.prototype.findCurrentBodyPermanentElement = function(e) {
                return document.body.querySelector("#" + e.id + "[data-turbolinks-permanent]")
            }, n.prototype.getNewBodyScriptElements = function() {
                return this.newBody.querySelectorAll("script")
            }, n.prototype.findFirstAutofocusableElement = function() {
                return document.body.querySelector("[autofocus]")
            }, n
        }(Turbolinks.Renderer)
    }.call(this),
    function() {
        var e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            t = {}.hasOwnProperty;
        Turbolinks.ErrorRenderer = function(t) {
            function n(e) {
                this.html = e
            }
            return e(n, t), n.prototype.render = function(e) {
                return this.renderView((t = this, function() {
                    return t.replaceDocumentHTML(), t.activateBodyScriptElements(), e()
                }));
                var t
            }, n.prototype.replaceDocumentHTML = function() {
                return document.documentElement.innerHTML = this.html
            }, n.prototype.activateBodyScriptElements = function() {
                var e, t, n, i, r, o;
                for (o = [], t = 0, n = (i = this.getScriptElements()).length; n > t; t++) r = i[t], e = this.createScriptElement(r), o.push(r.parentNode.replaceChild(e, r));
                return o
            }, n.prototype.getScriptElements = function() {
                return document.documentElement.querySelectorAll("script")
            }, n
        }(Turbolinks.Renderer)
    }.call(this),
    function() {
        Turbolinks.View = function() {
            function e(e) {
                this.delegate = e, this.element = document.documentElement
            }
            return e.prototype.getRootLocation = function() {
                return this.getSnapshot().getRootLocation()
            }, e.prototype.getElementForAnchor = function(e) {
                return this.getSnapshot().getElementForAnchor(e)
            }, e.prototype.getSnapshot = function() {
                return Turbolinks.Snapshot.fromElement(this.element)
            }, e.prototype.render = function(e, t) {
                var n, i, r;
                return r = e.snapshot, n = e.error, i = e.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, i, t) : this.renderError(n, t)
            }, e.prototype.markAsPreview = function(e) {
                return e ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
            }, e.prototype.renderSnapshot = function(e, t, n) {
                return Turbolinks.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), Turbolinks.Snapshot.wrap(e), t)
            }, e.prototype.renderError = function(e, t) {
                return Turbolinks.ErrorRenderer.render(this.delegate, t, e)
            }, e
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.ScrollManager = function() {
            function t(t) {
                this.delegate = t, this.onScroll = e(this.onScroll, this), this.onScroll = Turbolinks.throttle(this.onScroll)
            }
            return t.prototype.start = function() {
                return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
            }, t.prototype.stop = function() {
                return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
            }, t.prototype.scrollToElement = function(e) {
                return e.scrollIntoView()
            }, t.prototype.scrollToPosition = function(e) {
                var t, n;
                return t = e.x, n = e.y, window.scrollTo(t, n)
            }, t.prototype.onScroll = function() {
                return this.updatePosition({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }, t.prototype.updatePosition = function(e) {
                var t;
                return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
            }, t
        }()
    }.call(this),
    function() {
        Turbolinks.SnapshotCache = function() {
            function e(e) {
                this.size = e, this.keys = [], this.snapshots = {}
            }
            var t;
            return e.prototype.has = function(e) {
                return t(e) in this.snapshots
            }, e.prototype.get = function(e) {
                var t;
                if (this.has(e)) return t = this.read(e), this.touch(e), t
            }, e.prototype.put = function(e, t) {
                return this.write(e, t), this.touch(e), t
            }, e.prototype.read = function(e) {
                var n;
                return n = t(e), this.snapshots[n]
            }, e.prototype.write = function(e, n) {
                var i;
                return i = t(e), this.snapshots[i] = n
            }, e.prototype.touch = function(e) {
                var n, i;
                return i = t(e), (n = this.keys.indexOf(i)) > -1 && this.keys.splice(n, 1), this.keys.unshift(i), this.trim()
            }, e.prototype.trim = function() {
                var e, t, n, i, r;
                for (r = [], e = 0, n = (i = this.keys.splice(this.size)).length; n > e; e++) t = i[e], r.push(delete this.snapshots[t]);
                return r
            }, t = function(e) {
                return Turbolinks.Location.wrap(e).toCacheKey()
            }, e
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.Visit = function() {
            function t(t, n, i) {
                this.controller = t, this.action = i, this.performScroll = e(this.performScroll, this), this.identifier = Turbolinks.uuid(), this.location = Turbolinks.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
            }
            var n;
            return t.prototype.start = function() {
                return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
            }, t.prototype.cancel = function() {
                var e;
                return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0
            }, t.prototype.complete = function() {
                var e;
                return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
            }, t.prototype.fail = function() {
                var e;
                return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
            }, t.prototype.changeHistory = function() {
                var e, t;
                return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = n(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0)
            }, t.prototype.issueRequest = function() {
                return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new Turbolinks.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
            }, t.prototype.getCachedSnapshot = function() {
                var e;
                return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
            }, t.prototype.hasCachedSnapshot = function() {
                return null != this.getCachedSnapshot()
            }, t.prototype.loadCachedSnapshot = function() {
                var e, t;
                return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() {
                    var n;
                    return this.cacheSnapshot(), this.controller.render({
                        snapshot: t,
                        isPreview: e
                    }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete()
                })) : void 0
            }, t.prototype.loadResponse = function() {
                return null != this.response ? this.render(function() {
                    var e, t;
                    return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                        error: this.response
                    }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({
                        snapshot: this.response
                    }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete())
                }) : void 0
            }, t.prototype.followRedirect = function() {
                return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
            }, t.prototype.requestStarted = function() {
                var e;
                return this.recordTimingMetric("requestStart"), "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
            }, t.prototype.requestProgressed = function(e) {
                var t;
                return this.progress = e, "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
            }, t.prototype.requestCompletedWithResponse = function(e, t) {
                return this.response = e, null != t && (this.redirectedToLocation = Turbolinks.Location.wrap(t)), this.adapter.visitRequestCompleted(this)
            }, t.prototype.requestFailedWithStatusCode = function(e, t) {
                return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e)
            }, t.prototype.requestFinished = function() {
                var e;
                return this.recordTimingMetric("requestEnd"), "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
            }, t.prototype.performScroll = function() {
                return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
            }, t.prototype.scrollToRestoredPosition = function() {
                var e, t;
                return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e), !0) : void 0
            }, t.prototype.scrollToAnchor = function() {
                return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
            }, t.prototype.scrollToTop = function() {
                return this.controller.scrollToPosition({
                    x: 0,
                    y: 0
                })
            }, t.prototype.recordTimingMetric = function(e) {
                var t;
                return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
            }, t.prototype.getTimingMetrics = function() {
                return Turbolinks.copyObject(this.timingMetrics)
            }, n = function(e) {
                switch (e) {
                    case "replace":
                        return "replaceHistoryWithLocationAndRestorationIdentifier";
                    case "advance":
                    case "restore":
                        return "pushHistoryWithLocationAndRestorationIdentifier"
                }
            }, t.prototype.shouldIssueRequest = function() {
                return "restore" !== this.action || !this.hasCachedSnapshot()
            }, t.prototype.cacheSnapshot = function() {
                return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
            }, t.prototype.render = function(e) {
                return this.cancelRender(), this.frame = requestAnimationFrame((t = this, function() {
                    return t.frame = null, e.call(t)
                }));
                var t
            }, t.prototype.cancelRender = function() {
                return this.frame ? cancelAnimationFrame(this.frame) : void 0
            }, t
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.Controller = function() {
            function t() {
                this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new Turbolinks.History(this), this.view = new Turbolinks.View(this), this.scrollManager = new Turbolinks.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
            }
            return t.prototype.start = function() {
                return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
            }, t.prototype.disable = function() {
                return this.enabled = !1
            }, t.prototype.stop = function() {
                return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
            }, t.prototype.clearCache = function() {
                return this.cache = new Turbolinks.SnapshotCache(10)
            }, t.prototype.visit = function(e, t) {
                var n, i;
                return null == t && (t = {}), e = Turbolinks.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (n = null != (i = t.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(e, n)) : window.location = e : void 0
            }, t.prototype.startVisitToLocationWithAction = function(e, t, n) {
                var i;
                return Turbolinks.supported ? (i = this.getRestorationDataForIdentifier(n), this.startVisit(e, t, {
                    restorationData: i
                })) : window.location = e
            }, t.prototype.setProgressBarDelay = function(e) {
                return this.progressBarDelay = e
            }, t.prototype.startHistory = function() {
                return this.location = Turbolinks.Location.wrap(window.location), this.restorationIdentifier = Turbolinks.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
            }, t.prototype.stopHistory = function() {
                return this.history.stop()
            }, t.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, t) {
                return this.restorationIdentifier = t, this.location = Turbolinks.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
            }, t.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, t) {
                return this.restorationIdentifier = t, this.location = Turbolinks.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
            }, t.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, t) {
                var n;
                return this.restorationIdentifier = t, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                    restorationIdentifier: this.restorationIdentifier,
                    restorationData: n,
                    historyChanged: !0
                }), this.location = Turbolinks.Location.wrap(e)) : this.adapter.pageInvalidated()
            }, t.prototype.getCachedSnapshotForLocation = function(e) {
                var t;
                return (t = this.cache.get(e)) ? t.clone() : void 0
            }, t.prototype.shouldCacheSnapshot = function() {
                return this.view.getSnapshot().isCacheable()
            }, t.prototype.cacheSnapshot = function() {
                var e;
                return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, e.clone())) : void 0
            }, t.prototype.scrollToAnchor = function(e) {
                var t;
                return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                    x: 0,
                    y: 0
                })
            }, t.prototype.scrollToElement = function(e) {
                return this.scrollManager.scrollToElement(e)
            }, t.prototype.scrollToPosition = function(e) {
                return this.scrollManager.scrollToPosition(e)
            }, t.prototype.scrollPositionChanged = function(e) {
                return this.getCurrentRestorationData().scrollPosition = e
            }, t.prototype.render = function(e, t) {
                return this.view.render(e, t)
            }, t.prototype.viewInvalidated = function() {
                return this.adapter.pageInvalidated()
            }, t.prototype.viewWillRender = function(e) {
                return this.notifyApplicationBeforeRender(e)
            }, t.prototype.viewRendered = function() {
                return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
            }, t.prototype.pageLoaded = function() {
                return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
            }, t.prototype.clickCaptured = function() {
                return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
            }, t.prototype.clickBubbled = function(e) {
                var t, n, i;
                return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(i, {
                    action: t
                })) : void 0
            }, t.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) {
                return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
            }, t.prototype.applicationAllowsVisitingLocation = function(e) {
                return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
            }, t.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, t) {
                return Turbolinks.dispatch("turbolinks:click", {
                    target: e,
                    data: {
                        url: t.absoluteURL
                    },
                    cancelable: !0
                })
            }, t.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                return Turbolinks.dispatch("turbolinks:before-visit", {
                    data: {
                        url: e.absoluteURL
                    },
                    cancelable: !0
                })
            }, t.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                return Turbolinks.dispatch("turbolinks:visit", {
                    data: {
                        url: e.absoluteURL
                    }
                })
            }, t.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                return Turbolinks.dispatch("turbolinks:before-cache")
            }, t.prototype.notifyApplicationBeforeRender = function(e) {
                return Turbolinks.dispatch("turbolinks:before-render", {
                    data: {
                        newBody: e
                    }
                })
            }, t.prototype.notifyApplicationAfterRender = function() {
                return Turbolinks.dispatch("turbolinks:render")
            }, t.prototype.notifyApplicationAfterPageLoad = function(e) {
                return null == e && (e = {}), Turbolinks.dispatch("turbolinks:load", {
                    data: {
                        url: this.location.absoluteURL,
                        timing: e
                    }
                })
            }, t.prototype.startVisit = function(e, t, n) {
                var i;
                return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e)
            }, t.prototype.createVisit = function(e, t, n) {
                var i, r, o, s, a;
                return s = (r = null != n ? n : {}).restorationIdentifier, o = r.restorationData, i = r.historyChanged, (a = new Turbolinks.Visit(this, e, t)).restorationIdentifier = null != s ? s : Turbolinks.uuid(), a.restorationData = Turbolinks.copyObject(o), a.historyChanged = i, a.referrer = this.location, a
            }, t.prototype.visitCompleted = function(e) {
                return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
            }, t.prototype.clickEventIsSignificant = function(e) {
                return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
            }, t.prototype.getVisitableLinkForNode = function(e) {
                return this.nodeIsVisitable(e) ? Turbolinks.closest(e, "a[href]:not([target]):not([download])") : void 0
            }, t.prototype.getVisitableLocationForLink = function(e) {
                var t;
                return t = new Turbolinks.Location(e.getAttribute("href")), this.locationIsVisitable(t) ? t : void 0
            }, t.prototype.getActionForLink = function(e) {
                var t;
                return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
            }, t.prototype.nodeIsVisitable = function(e) {
                var t;
                return !(t = Turbolinks.closest(e, "[data-turbolinks]")) || "false" !== t.getAttribute("data-turbolinks")
            }, t.prototype.locationIsVisitable = function(e) {
                return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
            }, t.prototype.getCurrentRestorationData = function() {
                return this.getRestorationDataForIdentifier(this.restorationIdentifier)
            }, t.prototype.getRestorationDataForIdentifier = function(e) {
                var t;
                return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
            }, t
        }()
    }.call(this),
    function() {
        ! function() {
            var e, t;
            if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning"))
                for (; e = e.parentNode;)
                    if (e === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
        }()
    }.call(this),
    function() {
        var e, t, n;
        Turbolinks.start = function() {
            return t() ? (null == Turbolinks.controller && (Turbolinks.controller = e()), Turbolinks.controller.start()) : void 0
        }, t = function() {
            return null == window.Turbolinks && (window.Turbolinks = Turbolinks), n()
        }, e = function() {
            var e;
            return (e = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(e), e
        }, (n = function() {
            return window.Turbolinks === Turbolinks
        })() && Turbolinks.start()
    }.call(this);
/*! jsUri v1.1.1 | https://github.com/derek-watson/jsUri */
var Query = function(e) {
        "use strict";
        var t = function(e) {
                var t, n, i, r = [];
                if (null == e || "" === e) return r;
                for (0 === e.indexOf("?") && (e = e.substring(1)), n = e.toString().split(/[&;]/), t = 0; t < n.length; t++) i = n[t].split("="), r.push([i[0], i[1]]);
                return r
            }(e),
            n = function(e) {
                return e = (e = decodeURIComponent(e)).replace("+", " ")
            },
            i = function(e, i) {
                var r, o, s, a, l = [];
                for (r = 0; r < t.length; r++) o = t[r], s = n(o[0]) === n(e), a = n(o[1]) === n(i), (1 === arguments.length && !s || 2 === arguments.length && !s && !a) && l.push(o);
                return t = l, this
            },
            r = function(e, n, i) {
                return 3 === arguments.length && -1 !== i ? (i = Math.min(i, t.length), t.splice(i, 0, [e, n])) : arguments.length > 0 && t.push([e, n]), this
            };
        return {
            getParamValue: function(e) {
                var i, r;
                for (r = 0; r < t.length; r++)
                    if (i = t[r], n(e) === n(i[0])) return i[1]
            },
            getParamValues: function(e) {
                var i, r, o = [];
                for (i = 0; i < t.length; i++) r = t[i], n(e) === n(r[0]) && o.push(r[1]);
                return o
            },
            deleteParam: i,
            addParam: r,
            replaceParam: function(e, o, s) {
                var a, l, u = -1;
                if (3 === arguments.length) {
                    for (a = 0; a < t.length; a++)
                        if (l = t[a], n(l[0]) === n(e) && decodeURIComponent(l[1]) === n(s)) {
                            u = a;
                            break
                        } i(e, s).addParam(e, o, u)
                } else {
                    for (a = 0; a < t.length; a++)
                        if (l = t[a], n(l[0]) === n(e)) {
                            u = a;
                            break
                        } i(e), r(e, o, u)
                }
                return this
            },
            toString: function() {
                var e, n, i = "";
                for (e = 0; e < t.length; e++) n = t[e], i.length > 0 && (i += "&"), i += n.join("=");
                return i.length > 0 ? "?" + i : i
            }
        }
    },
    Uri = function(e) {
        "use strict";
        var t = !1,
            n = function(e) {
                for (var n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], i = {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    }, r = {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    } [t ? "strict" : "loose"].exec(e), o = {}, s = 14; s--;) o[n[s]] = r[s] || "";
                return o[i.name] = {}, o[n[12]].replace(i.parser, function(e, t, n) {
                    t && (o[i.name][t] = n)
                }), o
            }(e || ""),
            i = new Query(n.query),
            r = function(e) {
                return void 0 !== e && (n.protocol = e), n.protocol
            },
            o = null,
            s = function(e) {
                return void 0 !== e && (o = e), null === o ? -1 !== n.source.indexOf("//") : o
            },
            a = function(e) {
                return void 0 !== e && (n.userInfo = e), n.userInfo
            },
            l = function(e) {
                return void 0 !== e && (n.host = e), n.host
            },
            u = function(e) {
                return void 0 !== e && (n.port = e), n.port
            },
            c = function(e) {
                return void 0 !== e && (n.path = e), n.path
            },
            d = function(e) {
                return void 0 !== e && (i = new Query(e)), i
            },
            p = function(e) {
                return void 0 !== e && (n.anchor = e), n.anchor
            },
            h = function() {
                var e = "",
                    t = function(e) {
                        return null !== e && "" !== e
                    };
                return t(r()) ? (e += r(), r().indexOf(":") !== r().length - 1 && (e += ":"), e += "//") : s() && t(l()) && (e += "//"), t(a()) && t(l()) && (e += a(), a().indexOf("@") !== a().length - 1 && (e += "@")), t(l()) && (e += l(), t(u()) && (e += ":" + u())), t(c()) ? e += c() : t(l()) && (t(d().toString()) || t(p())) && (e += "/"), t(d().toString()) && (0 !== d().toString().indexOf("?") && (e += "?"), e += d().toString()), t(p()) && (0 !== p().indexOf("#") && (e += "#"), e += p()), e
            };
        return {
            protocol: r,
            hasAuthorityPrefix: s,
            userInfo: a,
            host: l,
            port: u,
            path: c,
            query: d,
            anchor: p,
            setProtocol: function(e) {
                return r(e), this
            },
            setHasAuthorityPrefix: function(e) {
                return s(e), this
            },
            setUserInfo: function(e) {
                return a(e), this
            },
            setHost: function(e) {
                return l(e), this
            },
            setPort: function(e) {
                return u(e), this
            },
            setPath: function(e) {
                return c(e), this
            },
            setQuery: function(e) {
                return d(e), this
            },
            setAnchor: function(e) {
                return p(e), this
            },
            getQueryParamValue: function(e) {
                return d().getParamValue(e)
            },
            getQueryParamValues: function(e) {
                return d().getParamValues(e)
            },
            deleteQueryParam: function(e, t) {
                return 2 === arguments.length ? d().deleteParam(e, t) : d().deleteParam(e), this
            },
            addQueryParam: function(e, t, n) {
                return 3 === arguments.length ? d().addParam(e, t, n) : d().addParam(e, t), this
            },
            replaceQueryParam: function(e, t, n) {
                return 3 === arguments.length ? d().replaceParam(e, t, n) : d().replaceParam(e, t), this
            },
            toString: h,
            clone: function() {
                return new Uri(h())
            }
        }
    },
    jsUri = Uri;
window.Spree = {}, Spree.ready = function(e) {
        "undefined" != typeof Turbolinks && Turbolinks.supported ? jQuery(document).on("turbolinks:load", function() {
            e(jQuery)
        }) : jQuery(document).ready(e)
    }, Spree.mountedAt = function() {
        return "/"
    }, Spree.pathFor = function(e) {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + Spree.mountedAt() + e
    }, Spree.url = function(e, t) {
        return console && console.warn && console.warn("Spree.url is deprecated, and will be removed from a future Solidus version."), e.path === undefined && (e = new Uri(e)), t && $.each(t, function(t, n) {
            return e.addQueryParam(t, n)
        }), e
    }, Spree.ajax = function(e, t) {
        return "object" == typeof e && (t = e, e = undefined), t = t || {}, t = $.extend(t, {
            headers: {
                "X-Spree-Token": Spree.api_key
            }
        }), $.ajax(e, t)
    }, Spree.routes = {
        states_search: Spree.pathFor("api/states"),
        apply_coupon_code: function(e) {
            return Spree.pathFor("api/orders/" + e + "/apply_coupon_code")
        }
    }, Spree.getJSON = function(e, t, n) {
        return "function" == typeof t && (n = t, t = undefined), Spree.ajax({
            dataType: "json",
            url: e,
            data: t,
            success: n
        })
    },
    function() {
        var e, t, n, i, r, o, s, a, l, u, c, d, p, h, f, m, v, g, y, b, w, x, T, E, S = [].slice,
            C = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        (e = window.jQuery || window.Zepto || window.$).payment = {}, e.payment.fn = {}, e.fn.payment = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? S.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
        }, r = /(\d{1,4})/g, e.payment.cards = i = [{
            type: "visaelectron",
            patterns: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            patterns: [5018, 502, 503, 56, 58, 639, 6220, 67],
            format: r,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            patterns: [600],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dankort",
            patterns: [5019],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "visa",
            patterns: [4],
            format: r,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            patterns: [34, 37],
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            patterns: [30, 36, 38, 39],
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            patterns: [60, 64, 65, 622],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            patterns: [62, 88],
            format: r,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "jcb",
            patterns: [35],
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }], t = function(e) {
            var t, n, r, o, s, a, l;
            for (e = (e + "").replace(/\D/g, ""), r = 0, s = i.length; r < s; r++)
                for (o = 0, a = (l = (t = i[r]).patterns).length; o < a; o++)
                    if (n = l[o] + "", e.substr(0, n.length) === n) return t
        }, n = function(e) {
            var t, n, r;
            for (n = 0, r = i.length; n < r; n++)
                if ((t = i[n]).type === e) return t
        }, p = function(e) {
            var t, n, i, r, o, s;
            for (i = !0, r = 0, o = 0, s = (n = (e + "").split("").reverse()).length; o < s; o++) t = n[o], t = parseInt(t, 10), (i = !i) && (t *= 2), t > 9 && (t -= 9), r += t;
            return r % 10 == 0
        }, d = function(e) {
            var t;
            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") || !(null == ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange : void 0) || !document.selection.createRange().text)
        }, T = function(e, t) {
            var n, i;
            try {
                n = t.prop("selectionStart")
            } catch (r) {
                r,
                n = null
            }
            if (i = t.val(), t.val(e), null !== n && t.is(":focus")) return n === i.length && (n = e.length), t.prop("selectionStart", n), t.prop("selectionEnd", n)
        }, g = function(e) {
            var t, n, i, r, o, s, a, l;
            for (null == e && (e = ""), i = "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19", r = "0123456789", s = "", a = 0, l = (t = e.split("")).length; a < l; a++) n = t[a], (o = i.indexOf(n)) > -1 && (n = r[o]), s += n;
            return s
        }, v = function(t) {
            return setTimeout(function() {
                var n, i;
                return i = (n = e(t.currentTarget)).val(), i = (i = g(i)).replace(/\D/g, ""), T(i, n)
            })
        }, f = function(t) {
            return setTimeout(function() {
                var n, i;
                return i = (n = e(t.currentTarget)).val(), i = g(i), i = e.payment.formatCardNumber(i), T(i, n)
            })
        }, a = function(n) {
            var i, r, o, s, a, l, u;
            if (o = String.fromCharCode(n.which), /^\d+$/.test(o) && (i = e(n.currentTarget), u = i.val(), r = t(u + o), s = (u.replace(/\D/g, "") + o).length, l = 16, r && (l = r.length[r.length.length - 1]), !(s >= l || null != i.prop("selectionStart") && i.prop("selectionStart") !== u.length))) return (a = r && "amex" === r.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/).test(u) ? (n.preventDefault(), setTimeout(function() {
                return i.val(u + " " + o)
            })) : a.test(u + o) ? (n.preventDefault(), setTimeout(function() {
                return i.val(u + o + " ")
            })) : void 0
        }, o = function(t) {
            var n, i;
            if (n = e(t.currentTarget), i = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === i.length)) return /\d\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d$/, ""))
            })) : void 0
        }, m = function(t) {
            return setTimeout(function() {
                var n, i;
                return i = (n = e(t.currentTarget)).val(), i = g(i), i = e.payment.formatExpiry(i), T(i, n)
            })
        }, l = function(t) {
            var n, i, r;
            if (i = String.fromCharCode(t.which), /^\d+$/.test(i)) return n = e(t.currentTarget), r = n.val() + i, /^\d$/.test(r) && "0" !== r && "1" !== r ? (t.preventDefault(), setTimeout(function() {
                return n.val("0" + r + " / ")
            })) : /^\d\d$/.test(r) ? (t.preventDefault(), setTimeout(function() {
                var e, t;
                return e = parseInt(r[0], 10), (t = parseInt(r[1], 10)) > 2 && 0 !== e ? n.val("0" + e + " / " + t) : n.val(r + " / ")
            })) : void 0
        }, u = function(t) {
            var n, i, r;
            if (i = String.fromCharCode(t.which), /^\d+$/.test(i)) return r = (n = e(t.currentTarget)).val(), /^\d\d$/.test(r) ? n.val(r + " / ") : void 0
        }, c = function(t) {
            var n, i, r;
            if ("/" === (r = String.fromCharCode(t.which)) || " " === r) return i = (n = e(t.currentTarget)).val(), /^\d$/.test(i) && "0" !== i ? n.val("0" + i + " / ") : void 0
        }, s = function(t) {
            var n, i;
            if (n = e(t.currentTarget), i = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === i.length)) return /\d\s\/\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, h = function(t) {
            return setTimeout(function() {
                var n, i;
                return i = (n = e(t.currentTarget)).val(), i = (i = g(i)).replace(/\D/g, "").slice(0, 4), T(i, n)
            })
        }, x = function(e) {
            var t;
            return !(!e.metaKey && !e.ctrlKey) || 32 !== e.which && (0 === e.which || (e.which < 33 || (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))))
        }, b = function(n) {
            var i, r, o, s;
            if (i = e(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !d(i)) return s = (i.val() + o).replace(/\D/g, ""), (r = t(s)) ? s.length <= r.length[r.length.length - 1] : s.length <= 16
        }, w = function(t) {
            var n, i;
            if (n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i) && !d(n)) return !((n.val() + i).replace(/\D/g, "").length > 6) && void 0
        }, y = function(t) {
            var n, i;
            if (n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i) && !d(n)) return (n.val() + i).length <= 4
        }, E = function(t) {
            var n, r, o, s, a;
            if (a = (n = e(t.currentTarget)).val(), s = e.payment.cardType(a) || "unknown", !n.hasClass(s)) return r = function() {
                var e, t, n;
                for (n = [], e = 0, t = i.length; e < t; e++) o = i[e], n.push(o.type);
                return n
            }(), n.removeClass("unknown"), n.removeClass(r.join(" ")), n.addClass(s), n.toggleClass("identified", "unknown" !== s), n.trigger("payment.cardType", s)
        }, e.payment.fn.formatCardCVC = function() {
            return this.on("keypress", x), this.on("keypress", y), this.on("paste", h), this.on("change", h), this.on("input", h), this
        }, e.payment.fn.formatCardExpiry = function() {
            return this.on("keypress", x), this.on("keypress", w), this.on("keypress", l), this.on("keypress", c), this.on("keypress", u), this.on("keydown", s), this.on("change", m), this.on("input", m), this
        }, e.payment.fn.formatCardNumber = function() {
            return this.on("keypress", x), this.on("keypress", b), this.on("keypress", a), this.on("keydown", o), this.on("keyup", E), this.on("paste", f), this.on("change", f), this.on("input", f), this.on("input", E), this
        }, e.payment.fn.restrictNumeric = function() {
            return this.on("keypress", x), this.on("paste", v), this.on("change", v), this.on("input", v), this
        }, e.payment.fn.cardExpiryVal = function() {
            return e.payment.cardExpiryVal(e(this).val())
        }, e.payment.cardExpiryVal = function(e) {
            var t, n, i;
            return t = (i = e.split(/[\s\/]+/, 2))[0], 2 === (null != (n = i[1]) ? n.length : void 0) && /^\d+$/.test(n) && (n = (new Date).getFullYear().toString().slice(0, 2) + n), {
                month: t = parseInt(t, 10),
                year: n = parseInt(n, 10)
            }
        }, e.payment.validateCardNumber = function(e) {
            var n, i;
            return e = (e + "").replace(/\s+|-/g, ""), !!/^\d+$/.test(e) && (!!(n = t(e)) && (i = e.length, C.call(n.length, i) >= 0 && (!1 === n.luhn || p(e))))
        }, e.payment.validateCardExpiry = function(t, n) {
            var i, r, o;
            return "object" == typeof t && "month" in t && (t = (o = t).month, n = o.year), !(!t || !n) && (t = e.trim(t), n = e.trim(n), !!/^\d+$/.test(t) && (!!/^\d+$/.test(n) && (1 <= t && t <= 12 && (2 === n.length && (n = n < 70 ? "20" + n : "19" + n), 4 === n.length && (r = new Date(n, t), i = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i)))))
        }, e.payment.validateCardCVC = function(t, i) {
            var r, o;
            return t = e.trim(t), !!/^\d+$/.test(t) && (null != (r = n(i)) ? (o = t.length, C.call(r.cvcLength, o) >= 0) : t.length >= 3 && t.length <= 4)
        }, e.payment.cardType = function(e) {
            var n;
            return e && (null != (n = t(e)) ? n.type : void 0) || null
        }, e.payment.formatCardNumber = function(n) {
            var i, r, o, s;
            return n = n.replace(/\D/g, ""), (i = t(n)) ? (o = i.length[i.length.length - 1], n = n.slice(0, o), i.format.global ? null != (s = n.match(i.format)) ? s.join(" ") : void 0 : null != (r = i.format.exec(n)) ? (r.shift(), (r = e.grep(r, function(e) {
                return e
            })).join(" ")) : void 0) : n
        }, e.payment.formatExpiry = function(e) {
            var t, n, i, r;
            return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", i = n[2] || "", (r = n[3] || "").length > 0 ? i = " / " : " /" === i ? (t = t.substring(0, 1), i = "") : 2 === t.length || i.length > 0 ? i = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, i = " / "), t + i + r) : ""
        }
    }.call(this), Spree.disableSaveOnClick = function() {
        $("form.edit_order").submit(function() {
            $(this).find(":submit, :image").attr("disabled", !0).removeClass("primary").addClass("disabled")
        })
    }, Spree.ready(function(e) {
        e("#accept_terms_and_conditions").change(function() {
            var t = e(this.closest("form")).find(":submit");
            t.prop("disabled", !this.checked), t.toggleClass("disabled", !this.checked)
        })
    }), Spree.ready(function(e) {
        if (e("#checkout_form_address").is("*")) {
            e(".js-address-fields").show();
            var t = function(t) {
                    return e("#" + t + "country select").val()
                },
                n = {},
                i = function(i) {
                    var o = t(i);
                    null != o && (null == n[o] ? e.get(Spree.routes.states_search, {
                        country_id: o
                    }, function(e) {
                        n[o] = {
                            states: e.states,
                            states_required: e.states_required
                        }, r(i)
                    }) : r(i))
                },
                r = function(i) {
                    var r = t(i),
                        o = n[r];
                    if (null != o) {
                        var s = o.states_required,
                            a = o.states,
                            l = e("#" + i + "state"),
                            u = l.find("select"),
                            c = l.find("input");
                        if (a.length > 0) {
                            var d = parseInt(u.val());
                            u.html("");
                            var p = [{
                                name: "",
                                id: ""
                            }].concat(a);
                            e.each(p, function(t, n) {
                                var i;
                                i = e(document.createElement("option")).attr("value", n.id).html(n.name), d === n.id && i.prop("selected", !0), u.append(i)
                            }), u.prop("disabled", !1).show(), c.hide().prop("disabled", !0), l.show(), s ? (u.addClass("required"), l.addClass("field-required")) : (u.removeClass("required"), l.removeClass("field-required")), c.removeClass("required")
                        } else u.hide().prop("disabled", !0), c.show(), s ? (l.addClass("field-required"), c.addClass("required")) : (c.val(""), l.removeClass("field-required"), c.removeClass("required")), l.toggle(!!s), c.prop("disabled", !s), u.removeClass("required")
                    }
                };
            e("#bcountry select").change(function() {
                i("b")
            }), e("#scountry select").change(function() {
                i("s")
            }), i("b");
            var o = e("input#order_use_billing");
            o.change(function() {
                s(o)
            });
            var s = function(t) {
                t.is(":checked") ? (e("#shipping .inner").hide(), e("#shipping .inner input, #shipping .inner select").prop("disabled", !0)) : (e("#shipping .inner").show(), e("#shipping .inner input, #shipping .inner select").prop("disabled", !1), i("s"))
            };
            s(o)
        }
    }), Spree.ready(function(e) {
        Spree.onPayment = function() {
            e("#checkout_form_payment").is("*") && (e("#existing_cards").is("*") && (e("#payment-method-fields").hide(), e("#payment-methods").hide(), e("#use_existing_card_yes").click(function() {
                e("#payment-method-fields").hide(), e("#payment-methods").hide(), e(".existing-cc-radio").prop("disabled", !1)
            }), e("#use_existing_card_no").click(function() {
                e("#payment-method-fields").show(), e("#payment-methods").show(), e(".existing-cc-radio").prop("disabled", !0)
            })), e(".cardNumber").payment("formatCardNumber"), e(".cardExpiry").payment("formatCardExpiry"), e(".cardCode").payment("formatCardCVC"), e(".cardNumber").change(function() {
                e(this).parent().siblings(".ccType").val(e.payment.cardType(this.value))
            }), e('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]').click(function() {
                e("#payment-methods li").hide(), this.checked && e("#payment_method_" + this.value).show()
            }), e("#cvv_link").on("click", function(t) {
                var n = "cvv_info",
                    i = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1";
                window.open(e(this).attr("href"), n, i), t.preventDefault()
            }), e('input[type="radio"]:checked').click())
        }, Spree.onPayment()
    }), Spree.onCouponCodeApply = function(e) {
        e.preventDefault();
        var t = $("#order_coupon_code"),
            n = $.trim(t.val());
        if ("" !== n) {
            var i = $("#coupon_status"),
                r = "success",
                o = "alert";
            i.removeClass([r, o].join(" "));
            var s = {
                    order_token: Spree.current_order_token,
                    coupon_code: n
                },
                a = Spree.ajax({
                    method: "PUT",
                    url: Spree.routes.apply_coupon_code(Spree.current_order_id),
                    data: JSON.stringify(s),
                    contentType: "application/json"
                });
            a.done(function() {
                window.location.reload(), t.val(""), i.addClass(r).html("Coupon code applied successfully.")
            }), a.fail(function(e) {
                var t;
                t = e.responseJSON, i.addClass(o).html(t.error)
            })
        }
    }, Spree.ready(function(e) {
        e("#coupon-code-apply-button").click(function(e) {
            Spree.onCouponCodeApply(e)
        })
    }), Spree.ready(function(e) {
        Spree.addImageHandlers = function() {
            var t = e("#product-images ul.thumbnails");
            e("#main-image").data("selectedThumb", e("#main-image img").attr("src")), t.find("li.selected").length || t.find("li").eq(0).addClass("selected"), t.find("a").on("click", function(n) {
                return e("#main-image").data("selectedThumb", e(n.currentTarget).attr("href")), e("#main-image").data("selectedThumbId", e(n.currentTarget).parent().attr("id")), t.find("li").removeClass("selected"), e(n.currentTarget).parent("li").addClass("selected"), !1
            }), t.find("li").on("mouseenter", function(t) {
                e("#main-image img").attr("src", e(t.currentTarget).find("a").attr("href"))
            }), t.find("li").on("mouseleave", function() {
                e("#main-image img").attr("src", e("#main-image").data("selectedThumb"))
            })
        }, Spree.showVariantImages = function(t) {
            if (e("li.vtmb").hide(), e("li.tmb-" + t).show(), !e("#" + e("#main-image").data("selectedThumbId")).hasClass("vtmb-" + t)) {
                var n = e(e("#product-images ul.thumbnails li:visible.vtmb").eq(0));
                n.length > 0 || (n = e(e("#product-images ul.thumbnails li:visible").eq(0)));
                var i = n.find("a").attr("href");
                e("#product-images ul.thumbnails li").removeClass("selected"), n.addClass("selected"), e("#main-image img").attr("src", i), e("#main-image").data("selectedThumb", i), e("#main-image").data("selectedThumbId", n.attr("id"))
            }
        }, Spree.updateVariantPrice = function(t) {
            var n = t.data("price");
            n && e(".price.selling").text(n)
        };
        var t = e('#product-variants input[type="radio"]');
        if (t.length > 0) {
            var n = e('#product-variants input[type="radio"][checked="checked"]');
            Spree.showVariantImages(n.attr("value")), Spree.updateVariantPrice(n)
        }
        Spree.addImageHandlers(), t.click(function() {
            Spree.showVariantImages(this.value), Spree.updateVariantPrice(e(this))
        })
    }), Spree.ready(function(e) {
        e("form#update-cart").is("*") && e("form#update-cart a.delete").show().one("click", function() {
            return e(this).parents(".line-item").first().find("input.line_item_quantity").val(0), e(this).parents("form").first().submit(), !1
        }), e("form#update-cart").submit(function() {
            e("form#update-cart #update-button").attr("disabled", !0)
        })
    }, $(function() {
        $("#locale_selector select").change(function() {
            this.form.submit()
        })
    }), window.SolidusStripe = window.SolidusStripe || {}, SolidusStripe.Payment = function() {
        this.config = $("[data-stripe-config]").data("stripe-config"), this.element = $("#payment_method_" + this.config.id), this.authToken = $('meta[name="csrf-token"]').attr("content"), this.stripe = Stripe(this.config.publishable_key), this.elements = this.stripe.elements(this.elementsBaseOptions())
    }, SolidusStripe.Payment.prototype.elementsBaseOptions = function() {
        return {
            locale: "en"
        }
    }, SolidusStripe.Elements = function() {
        SolidusStripe.Payment.call(this), this.form = this.element.parents("form"), this.errorElement = this.form.find("#card-errors"), this.submitButton = this.form.find('input[type="submit"]')
    }, SolidusStripe.Elements.prototype = Object.create(SolidusStripe.Payment.prototype), Object.defineProperty(SolidusStripe.Elements.prototype, "constructor", {
        value: SolidusStripe.Elements,
        enumerable: !1,
        writable: !0
    }), SolidusStripe.Elements.prototype.init = function() {
        this.initElements()
    }, SolidusStripe.Elements.prototype.initElements = function() {
        var e = this.elements.create("cardExpiry", this.cardExpiryElementOptions());
        e.mount("#card_expiry");
        var t = this.elements.create("cardCvc", this.cardCvcElementOptions());
        t.mount("#card_cvc"), this.cardNumber = this.elements.create("cardNumber", this.cardNumberElementOptions()), this.cardNumber.mount("#card_number"), this.form.bind("submit", this.onFormSubmit.bind(this));
        var n = {};
        [e, t, this.cardNumber].forEach(function(e, t) {
            e.on("change", function(e) {
                if (e.error) n[t] = e.error.message, this.showError(e.error.message);
                else {
                    n[t] = null;
                    var i = Object.keys(n).sort().reduce(function(e, t) {
                        return e || n[t]
                    }, null);
                    i ? this.showError(i) : this.errorElement.hide().text("")
                }
            }.bind(this))
        }.bind(this))
    }, SolidusStripe.Elements.prototype.baseStyle = function() {
        return {
            base: {
                color: "black",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "14px",
                "::placeholder": {
                    color: "silver"
                }
            },
            invalid: {
                color: "red",
                iconColor: "red"
            }
        }
    }, SolidusStripe.Elements.prototype.cardNumberElementOptions = function() {
        return {
            style: this.baseStyle()
        }
    }, SolidusStripe.Elements.prototype.cardExpiryElementOptions = function() {
        return {
            style: this.baseStyle()
        }
    }, SolidusStripe.Elements.prototype.cardCvcElementOptions = function() {
        return {
            style: this.baseStyle()
        }
    }, SolidusStripe.Elements.prototype.showError = function(e) {
        var t = e.message || e;
        this.errorElement.text(t).show(), this.submitButton.removeAttr("disabled").removeClass("disabled")
    }, SolidusStripe.Elements.prototype.onFormSubmit = function(e) {
        if (this.element.is(":visible")) {
            e.preventDefault();
            var t = function(e) {
                e.error ? this.showError(e.error.message) : (this.elementsTokenHandler(e.token), this.form[0].submit())
            };
            this.stripe.createToken(this.cardNumber).then(t.bind(this))
        }
    }, SolidusStripe.Elements.prototype.elementsTokenHandler = function(e) {
        var t = function(e) {
                return "MasterCard" === e || "mastercard" === e ? "mastercard" : "Visa" === e || "visa" === e ? "visa" : "American Express" === e || "amex" === e ? "amex" : "Discover" === e || "discover" === e ? "discover" : "Diners Club" === e || "diners" === e ? "dinersclub" : "JCB" === e || "jcb" === e ? "jcb" : "Unionpay" === e || "unionpay" === e ? "unionpay" : void 0
            },
            n = `<input type='hidden' class='stripeToken' name='payment_source[${this.config.id}]`;
        this.element.append(`${n}[gateway_payment_profile_id]' value='${e.id}'/>`), this.element.append(`${n}[last_digits]' value='${e.card.last4}'/>`), this.element.append(`${n}[month]' value='${e.card.exp_month}'/>`), this.element.append(`${n}[year]' value='${e.card.exp_year}'/>`), this.form.find("input#cc_type").val(t(e.card.brand || e.card.type))
    }, SolidusStripe.PaymentIntents = function() {
        SolidusStripe.Elements.call(this)
    }, SolidusStripe.PaymentIntents.prototype = Object.create(SolidusStripe.Elements.prototype), Object.defineProperty(SolidusStripe.PaymentIntents.prototype, "constructor", {
        value: SolidusStripe.PaymentIntents,
        enumerable: !1,
        writable: !0
    }), SolidusStripe.PaymentIntents.prototype.init = function() {
        this.setUpPaymentRequest(), this.initElements()
    }, SolidusStripe.PaymentIntents.prototype.onPrPayment = function(e) {
        if (e.error) this.showError(e.error.message);
        else {
            var t = this;
            this.elementsTokenHandler(e.paymentMethod), fetch("/stripe/create_intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    form_data: this.form.serialize(),
                    spree_payment_method_id: this.config.id,
                    stripe_payment_method_id: e.paymentMethod.id,
                    authenticity_token: this.authToken
                })
            }).then(function(n) {
                n.json().then(function(n) {
                    t.handleServerResponse(n, e)
                })
            })
        }
    }, SolidusStripe.PaymentIntents.prototype.onFormSubmit = function(e) {
        this.element.is(":visible") && (e.preventDefault(), this.errorElement.text("").hide(), this.stripe.createPaymentMethod("card", this.cardNumber).then(this.onIntentsPayment.bind(this)))
    }, SolidusStripe.PaymentIntents.prototype.submitPayment = function() {
        this.form.unbind("submit").submit()
    }, SolidusStripe.PaymentIntents.prototype.onIntentsPayment = function(e) {
        if (e.error) this.showError(e.error.message);
        else {
            var t = this;
            this.elementsTokenHandler(e.paymentMethod), fetch("/stripe/create_intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    form_data: this.form.serialize(),
                    spree_payment_method_id: this.config.id,
                    stripe_payment_method_id: e.paymentMethod.id,
                    authenticity_token: this.authToken
                })
            }).then(function(n) {
                n.json().then(function(n) {
                    t.handleServerResponse(n, e)
                })
            })
        }
    }, SolidusStripe.CartPageCheckout = function() {
        SolidusStripe.Payment.call(this), this.errorElement = $("#card-errors")
    }, SolidusStripe.CartPageCheckout.prototype = Object.create(SolidusStripe.Payment.prototype), Object.defineProperty(SolidusStripe.CartPageCheckout.prototype, "constructor", {
        value: SolidusStripe.CartPageCheckout,
        enumerable: !1,
        writable: !0
    }), SolidusStripe.CartPageCheckout.prototype.init = function() {
        this.setUpPaymentRequest({
            requestShipping: !0
        })
    }, SolidusStripe.CartPageCheckout.prototype.showError = function(e) {
        var t = e.message || e;
        this.errorElement.text(t).show()
    }, SolidusStripe.CartPageCheckout.prototype.submitPayment = function(e) {
        var t = this.showError.bind(this),
            n = this.prTokenHandler.bind(this);
        $.ajax({
            url: $("[data-submit-url]").data("submit-url"),
            headers: {
                "X-Spree-Order-Token": $("[data-order-token]").data("order-token")
            },
            type: "PATCH",
            contentType: "application/json",
            data: JSON.stringify(n(e.paymentMethod)),
            success: function() {
                window.location = $("[data-complete-url]").data("complete-url")
            },
            error: function(e) {
                t(e.responseJSON.error)
            }
        })
    }, SolidusStripe.CartPageCheckout.prototype.onPrPayment = function(e) {
        var t = this.createIntent.bind(this);
        fetch("/stripe/update_order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                shipping_address: e.shippingAddress,
                shipping_option: e.shippingOption,
                email: e.payerEmail,
                name: e.payerName,
                authenticity_token: this.authToken
            })
        }).then(function(n) {
            n.json().then(function(n) {
                t(n, e)
            })
        })
    }, SolidusStripe.CartPageCheckout.prototype.createIntent = function(e, t) {
        var n = this.handleServerResponse.bind(this);
        e.error ? (this.completePaymentRequest(t, "fail"), this.showError(e.error)) : t.error ? this.showError(t.error.message) : fetch("/stripe/create_intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                form_data: t.shippingAddress,
                spree_payment_method_id: this.config.id,
                stripe_payment_method_id: t.paymentMethod.id,
                authenticity_token: this.authToken
            })
        }).then(function(e) {
            e.json().then(function(e) {
                n(e, t)
            })
        })
    }, SolidusStripe.CartPageCheckout.prototype.onPrButtonMounted = function(e, t) {
        var n = document.getElementById(e).parentElement;
        n.style.display = t ? "" : "none"
    }, SolidusStripe.CartPageCheckout.prototype.prTokenHandler = function(e) {
        return {
            order: {
                payments_attributes: [{
                    payment_method_id: this.config.id,
                    source_attributes: {
                        gateway_payment_profile_id: e.id,
                        last_digits: e.card.last4,
                        month: e.card.exp_month,
                        year: e.card.exp_year
                    }
                }]
            }
        }
    },
    function() {
        var e;
        e = {
            authToken: $('meta[name="csrf-token"]').attr("content"),
            setUpPaymentRequest: function(e) {
                e = e || {};
                var t = this.config.payment_request;
                if (t) {
                    t.requestShipping = e.requestShipping || !1;
                    var n = this.stripe.paymentRequest({
                            country: t.country,
                            currency: t.currency,
                            total: {
                                label: t.label,
                                amount: t.amount
                            },
                            requestPayerName: !0,
                            requestPayerEmail: !0,
                            requestShipping: t.requestShipping,
                            shippingOptions: []
                        }),
                        i = this.elements.create("paymentRequestButton", {
                            paymentRequest: n
                        }),
                        r = function(e) {
                            var t = "payment-request-button";
                            e ? i.mount("#" + t) : document.getElementById(t).style.display = "none", "function" == typeof this.onPrButtonMounted && this.onPrButtonMounted(t, e)
                        };
                    n.canMakePayment().then(r.bind(this));
                    var o = function(e) {
                        this.errorElement.text("").hide(), this.onPrPayment(e)
                    };
                    n.on("paymentmethod", o.bind(this)), onShippingAddressChange = function(e) {
                        var t = this.showError.bind(this);
                        fetch("/stripe/shipping_rates", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                authenticity_token: this.authToken,
                                shipping_address: e.shippingAddress
                            })
                        }).then(function(e) {
                            return e.json()
                        }).then(function(n) {
                            if (n.error) return t(n.error), !1;
                            e.updateWith({
                                status: "success",
                                shippingOptions: n.shipping_rates
                            })
                        })
                    }, n.on("shippingaddresschange", onShippingAddressChange.bind(this))
                }
            },
            handleServerResponse: function(e, t) {
                if (e.error) this.showError(e.error), this.completePaymentRequest(t, "fail");
                else if (e.requires_action) {
                    var n = e.stripe_payment_intent_client_secret,
                        i = this.onConfirmCardPayment.bind(this);
                    this.stripe.confirmCardPayment(n, {
                        payment_method: t.paymentMethod.id
                    }, {
                        handleActions: !1
                    }).then(function(e) {
                        i(e, t, n)
                    })
                } else this.completePayment(t, e.stripe_payment_intent_id)
            },
            onConfirmCardPayment: function(e, t, n) {
                onStripeResponse = function(e, t) {
                    e.error ? this.showError(e.error) : this.completePayment(t, e.paymentIntent.id)
                }.bind(this), e.error ? (this.completePaymentRequest(t, "fail"), this.showError(e.error)) : (this.completePaymentRequest(t, "success"), this.stripe.confirmCardPayment(n).then(function(e) {
                    onStripeResponse(e, t)
                }))
            },
            completePayment: function(e, t) {
                var n = function(t) {
                    t.error ? (this.completePaymentRequest(e, "fail"), this.showError(t.error)) : (this.completePaymentRequest(e, "success"), this.submitPayment(e))
                }.bind(this);
                fetch("/stripe/create_payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        form_data: this.form ? this.form.serialize() : e.shippingAddress,
                        spree_payment_method_id: this.config.id,
                        stripe_payment_intent_id: t,
                        authenticity_token: this.authToken
                    })
                }).then(function(e) {
                    return e.json()
                }).then(n)
            },
            completePaymentRequest: function(e, t) {
                e && "function" == typeof e.complete && (e.complete(t), "fail" === t && (new SolidusStripe.CartPageCheckout).init())
            }
        }, Object.assign(SolidusStripe.PaymentIntents.prototype, e), Object.assign(SolidusStripe.CartPageCheckout.prototype, e)
    }(), $(function() {
        var e = $("[data-v3-api]").data("v3-api");
        e && $.getScript("https://js.stripe.com/v3/").done(function() {
            switch (e) {
                case "elements":
                    (new SolidusStripe.Elements).init();
                    break;
                case "payment-intents":
                    (new SolidusStripe.PaymentIntents).init();
                    break;
                case "payment-request-button":
                    (new SolidusStripe.CartPageCheckout).init()
            }
        })
    }), Spree.ready(function(e) {
        e("form#update-cart").is("*") && e("form#update-cart a.delete").show().off("click").one("click", function() {
            return e(this).parents(".line-item").first().find("select.line_item_quantity").val(0), e(this).parents("form").first().submit(), !1
        })
    }), Spree.ready(function(e) {
        Spree.onPayment = function() {
            e("#checkout_form_payment").is("*") && (e("#existing_cards").is("*") && (e("#payment-method-fields").hide(), e("#payment-methods").hide(), e("#use_existing_card_yes").click(function() {
                e("#payment-method-fields").hide(), e("#payment-methods").hide(), e("#existing_cards").show(), e(".existing-cc-radio").prop("disabled", !1)
            }), e("#use_existing_card_no").click(function() {
                e("#payment-method-fields").show(), e("#payment-methods").show(), e("#existing_cards").hide(), e(".existing-cc-radio").prop("disabled", !0)
            })), e(".cardNumber").payment("formatCardNumber"), e(".cardExpiry").payment("formatCardExpiry"), e(".cardCode").payment("formatCardCVC"), e(".cardNumber").change(function() {
                e(this).parent().siblings(".ccType").val(e.payment.cardType(this.value))
            }), e('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]').click(function() {
                e("#payment-methods li").hide(), this.checked && e("#payment_method_" + this.value).show()
            }), e("#cvv_link").on("click", function(t) {
                var n = "cvv_info",
                    i = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1";
                window.open(e(this).attr("href"), n, i), t.preventDefault()
            }), e('input[type="radio"]:checked').click())
        }, Spree.onPayment()
    }), SolidusStripe.Elements.prototype.initElements = function() {
        var e = this.elements.create("cardExpiry", this.cardExpiryElementOptions());
        e.mount("#stripe_card_expiry");
        var t = this.elements.create("cardCvc", this.cardCvcElementOptions());
        t.mount("#stripe_card_cvc"), this.cardNumber = this.elements.create("cardNumber", this.cardNumberElementOptions()), this.cardNumber.mount("#stripe_card_number"), this.form.bind("submit", this.onFormSubmit.bind(this));
        var n = {};
        [e, t, this.cardNumber].forEach(function(e, t) {
            e.on("change", function(e) {
                if (e.error) n[t] = e.error.message, this.showError(e.error.message);
                else {
                    n[t] = null;
                    var i = Object.keys(n).sort().reduce(function(e, t) {
                        return e || n[t]
                    }, null);
                    i ? this.showError(i) : this.errorElement.hide().text("")
                }
            }.bind(this))
        }.bind(this))
    }, SolidusStripe.Elements.prototype.baseStyle = function() {
        return {
            base: {
                iconColor: "#00f",
                color: "#3F3F41",
                fontWeight: 500,
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                    color: "#3F3F41"
                },
                "::placeholder": {
                    color: "#C2C2C2"
                }
            },
            invalid: {
                iconColor: "#f00",
                color: "#f00"
            }
        }
    },
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
    }(this, function() {
        "use strict";

        function e(e, t) {
            var n = [],
                s = 0;
            if (e && !t && e instanceof o) return e;
            if (e)
                if ("string" == typeof e) {
                    var a, l, u = e.trim();
                    if (u.indexOf("<") >= 0 && u.indexOf(">") >= 0) {
                        var c = "div";
                        for (0 === u.indexOf("<li") && (c = "ul"), 0 === u.indexOf("<tr") && (c = "tbody"), 0 !== u.indexOf("<td") && 0 !== u.indexOf("<th") || (c = "tr"), 0 === u.indexOf("<tbody") && (c = "table"), 0 === u.indexOf("<option") && (c = "select"), (l = i.createElement(c)).innerHTML = u, s = 0; s < l.childNodes.length; s += 1) n.push(l.childNodes[s])
                    } else
                        for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], s = 0; s < a.length; s += 1) a[s] && n.push(a[s])
                } else if (e.nodeType || e === r || e === i) n.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (s = 0; s < e.length; s += 1) n.push(e[s]);
            return new o(n)
        }

        function t(e) {
            for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }

        function n() {
            var e = this.params,
                t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var n = this.allowSlideNext,
                    i = this.allowSlidePrev,
                    r = this.snapGrid;
                if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                    var o = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                this.allowSlidePrev = i, this.allowSlideNext = n, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow()
            }
        }
        var i = "undefined" == typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            r = "undefined" == typeof window ? {
                document: i,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            } : window,
            o = function(e) {
                for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                return this.length = e.length, this
            };
        e.fn = o.prototype, e.Class = o, e.Dom7 = o;
        var s = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.add(t[n]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.remove(t[n]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
                return this
            },
            attr: function(e, t) {
                var n = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === n.length) this[i].setAttribute(e, t);
                    else
                        for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                var n;
                if (void 0 !== t) {
                    for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (n = this[0]) return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage ? n.dom7ElementDataStorage[e] : n.getAttribute("data-" + e) || void 0
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    n.webkitTransform = e, n.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    n.webkitTransitionDuration = e, n.transitionDuration = e
                }
                return this
            },
            on: function() {
                function t(t) {
                    var n = t.target;
                    if (n) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t), e(n).is(a)) l.apply(n, i);
                        else
                            for (var r = e(n).parents(), o = 0; o < r.length; o += 1) e(r[o]).is(a) && l.apply(r[o], i)
                    }
                }

                function n(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t)
                }
                for (var i, r = [], o = arguments.length; o--;) r[o] = arguments[o];
                var s = r[0],
                    a = r[1],
                    l = r[2],
                    u = r[3];
                "function" == typeof r[1] && (s = (i = r)[0], l = i[1], u = i[2], a = void 0), u || (u = !1);
                for (var c, d = s.split(" "), p = 0; p < this.length; p += 1) {
                    var h = this[p];
                    if (a)
                        for (c = 0; c < d.length; c += 1) {
                            var f = d[c];
                            h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                                listener: l,
                                proxyListener: t
                            }), h.addEventListener(f, t, u)
                        } else
                            for (c = 0; c < d.length; c += 1) {
                                var m = d[c];
                                h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[m] || (h.dom7Listeners[m] = []), h.dom7Listeners[m].push({
                                    listener: l,
                                    proxyListener: n
                                }), h.addEventListener(m, n, u)
                            }
                }
                return this
            },
            off: function() {
                for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                var i = t[0],
                    r = t[1],
                    o = t[2],
                    s = t[3];
                "function" == typeof t[1] && (i = (e = t)[0], o = e[1], s = e[2], r = void 0), s || (s = !1);
                for (var a = i.split(" "), l = 0; l < a.length; l += 1)
                    for (var u = a[l], c = 0; c < this.length; c += 1) {
                        var d = this[c],
                            p = void 0;
                        if (!r && d.dom7Listeners ? p = d.dom7Listeners[u] : r && d.dom7LiveListeners && (p = d.dom7LiveListeners[u]), p && p.length)
                            for (var h = p.length - 1; h >= 0; h -= 1) {
                                var f = p[h];
                                o && f.listener === o ? (d.removeEventListener(u, f.proxyListener, s), p.splice(h, 1)) : o || (d.removeEventListener(u, f.proxyListener, s), p.splice(h, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var n = e[0].split(" "), o = e[1], s = 0; s < n.length; s += 1)
                    for (var a = n[s], l = 0; l < this.length; l += 1) {
                        var u = this[l],
                            c = void 0;
                        try {
                            c = new r.CustomEvent(a, {
                                detail: o,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (r) {
                            (c = i.createEvent("Event")).initEvent(a, !0, !0), c.detail = o
                        }
                        u.dom7EventData = e.filter(function(e, t) {
                            return t > 0
                        }), u.dispatchEvent(c), u.dom7EventData = [], delete u.dom7EventData
                    }
                return this
            },
            transitionEnd: function(e) {
                function t(o) {
                    if (o.target === this)
                        for (e.call(this, o), n = 0; n < i.length; n += 1) r.off(i[n], t)
                }
                var n, i = ["webkitTransitionEnd", "transitionend"],
                    r = this;
                if (e)
                    for (n = 0; n < i.length; n += 1) r.on(i[n], t);
                return this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        n = i.body,
                        o = e.clientTop || n.clientTop || 0,
                        s = e.clientLeft || n.clientLeft || 0,
                        a = e === r ? r.scrollY : e.scrollTop,
                        l = e === r ? r.scrollX : e.scrollLeft;
                    return {
                        top: t.top + a - o,
                        left: t.left + l - s
                    }
                }
                return null
            },
            css: function(e, t) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (var i in e) this[n].style[i] = e[i];
                        return this
                    }
                    if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(t) {
                var n, s, a = this[0];
                if (!a || void 0 === t) return !1;
                if ("string" == typeof t) {
                    if (a.matches) return a.matches(t);
                    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(t);
                    if (a.msMatchesSelector) return a.msMatchesSelector(t);
                    for (n = e(t), s = 0; s < n.length; s += 1)
                        if (n[s] === a) return !0;
                    return !1
                }
                if (t === i) return a === i;
                if (t === r) return a === r;
                if (t.nodeType || t instanceof o) {
                    for (n = t.nodeType ? [t] : t, s = 0; s < n.length; s += 1)
                        if (n[s] === a) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t, n = this.length;
                return new o(e > n - 1 ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function() {
                for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                for (var r = 0; r < t.length; r += 1) {
                    e = t[r];
                    for (var s = 0; s < this.length; s += 1)
                        if ("string" == typeof e) {
                            var a = i.createElement("div");
                            for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                        } else if (e instanceof o)
                        for (var l = 0; l < e.length; l += 1) this[s].appendChild(e[l]);
                    else this[s].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var t, n;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var r = i.createElement("div");
                        for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
                    } else if (e instanceof o)
                    for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(t) {
                return this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? new o([this[0].nextElementSibling]) : new o([]) : this[0].nextElementSibling ? new o([this[0].nextElementSibling]) : new o([]) : new o([])
            },
            nextAll: function(t) {
                var n = [],
                    i = this[0];
                if (!i) return new o([]);
                for (; i.nextElementSibling;) {
                    var r = i.nextElementSibling;
                    t ? e(r).is(t) && n.push(r) : n.push(r), i = r
                }
                return new o(n)
            },
            prev: function(t) {
                if (this.length > 0) {
                    var n = this[0];
                    return t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? new o([n.previousElementSibling]) : new o([]) : n.previousElementSibling ? new o([n.previousElementSibling]) : new o([])
                }
                return new o([])
            },
            prevAll: function(t) {
                var n = [],
                    i = this[0];
                if (!i) return new o([]);
                for (; i.previousElementSibling;) {
                    var r = i.previousElementSibling;
                    t ? e(r).is(t) && n.push(r) : n.push(r), i = r
                }
                return new o(n)
            },
            parent: function(n) {
                for (var i = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (n ? e(this[r].parentNode).is(n) && i.push(this[r].parentNode) : i.push(this[r].parentNode));
                return e(t(i))
            },
            parents: function(n) {
                for (var i = [], r = 0; r < this.length; r += 1)
                    for (var o = this[r].parentNode; o;) n ? e(o).is(n) && i.push(o) : i.push(o), o = o.parentNode;
                return e(t(i))
            },
            closest: function(e) {
                var t = this;
                return void 0 === e ? new o([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
                return new o(t)
            },
            children: function(n) {
                for (var i = [], r = 0; r < this.length; r += 1)
                    for (var s = this[r].childNodes, a = 0; a < s.length; a += 1) n ? 1 === s[a].nodeType && e(s[a]).is(n) && i.push(s[a]) : 1 === s[a].nodeType && i.push(s[a]);
                return new o(t(i))
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                var i, r;
                for (i = 0; i < t.length; i += 1) {
                    var o = e(t[i]);
                    for (r = 0; r < o.length; r += 1) this[this.length] = o[r], this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? r.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(s).forEach(function(t) {
            e.fn[t] = s[t]
        });
        var a, l, u, c = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, t) {
                    var n, i, o;
                    void 0 === t && (t = "x");
                    var s = r.getComputedStyle(e, null);
                    return r.WebKitCSSMatrix ? ((i = s.transform || s.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), o = new r.WebKitCSSMatrix("none" === i ? "" : i)) : n = (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
                },
                parseUrlQuery: function(e) {
                    var t, n, i, o, s = {},
                        a = e || r.location.href;
                    if ("string" == typeof a && a.length)
                        for (o = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                                return "" !== e
                            })).length, t = 0; t < o; t += 1) i = n[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                    return s
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var r = e[i];
                        if (null != r)
                            for (var o = Object.keys(Object(r)), s = 0, a = o.length; s < a; s += 1) {
                                var l = o[s],
                                    u = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== u && u.enumerable && (c.isObject(n[l]) && c.isObject(r[l]) ? c.extend(n[l], r[l]) : !c.isObject(n[l]) && c.isObject(r[l]) ? (n[l] = {}, c.extend(n[l], r[l])) : n[l] = r[l])
                            }
                    }
                    return n
                }
            },
            d = (u = i.createElement("div"), {
                touch: r.Modernizr && !0 === r.Modernizr.touch || !!("ontouchstart" in r || r.DocumentTouch && i instanceof r.DocumentTouch),
                pointerEvents: !(!r.navigator.pointerEnabled && !r.PointerEvent),
                prefixedPointerEvents: !!r.navigator.msPointerEnabled,
                transition: (l = u.style, "transition" in l || "webkitTransition" in l || "MozTransition" in l),
                transforms3d: r.Modernizr && !0 === r.Modernizr.csstransforms3d || (a = u.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
                flexbox: function() {
                    for (var e = u.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                        if (t[n] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in r || "WebkitMutationObserver" in r,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        r.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in r
            }),
            p = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            h = {
                components: {
                    configurable: !0
                }
            };
        p.prototype.on = function(e, t, n) {
            var i = this;
            if ("function" != typeof t) return i;
            var r = n ? "unshift" : "push";
            return e.split(" ").forEach(function(e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
            }), i
        }, p.prototype.once = function(e, t, n) {
            var i = this;
            return "function" != typeof t ? i : i.on(e, function r() {
                for (var n = [], o = arguments.length; o--;) n[o] = arguments[o];
                t.apply(i, n), i.off(e, r)
            }, n)
        }, p.prototype.off = function(e, t) {
            var n = this;
            return n.eventsListeners ? (e.split(" ").forEach(function(e) {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(i, r) {
                    i === t && n.eventsListeners[e].splice(r, 1)
                })
            }), n) : n
        }, p.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n, i, r, o = this;
            return o.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), r = o) : (n = e[0].events, i = e[0].data, r = e[0].context || o), (Array.isArray(n) ? n : n.split(" ")).forEach(function(e) {
                if (o.eventsListeners && o.eventsListeners[e]) {
                    var t = [];
                    o.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }), t.forEach(function(e) {
                        e.apply(r, i)
                    })
                }
            }), o) : o
        }, p.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n];
                i.params && c.extend(e, i.params)
            })
        }, p.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n],
                    r = e[n] || {};
                i.instance && Object.keys(i.instance).forEach(function(e) {
                    var n = i.instance[e];
                    t[e] = "function" == typeof n ? n.bind(t) : n
                }), i.on && t.on && Object.keys(i.on).forEach(function(e) {
                    t.on(e, i.on[e])
                }), i.create && i.create.bind(t)(r)
            })
        }, h.components.set = function(e) {
            this.use && this.use(e)
        }, p.installModule = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var r = e.name || Object.keys(i.prototype.modules).length + "_" + c.now();
            return i.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
                i.prototype[t] = e.proto[t]
            }), e["static"] && Object.keys(e["static"]).forEach(function(t) {
                i[t] = e["static"][t]
            }), e.install && e.install.apply(i, t), i
        }, p.use = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }), i) : i.installModule.apply(i, [e].concat(t))
        }, Object.defineProperties(p, h);
        var f = {
                updateSize: function() {
                    var e, t, n = this.$el;
                    e = void 0 !== this.params.width ? this.params.width : n[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : n[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), c.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this.params,
                        t = this.$wrapperEl,
                        n = this.size,
                        i = this.rtlTranslate,
                        o = this.wrongRTL,
                        s = this.virtual && e.virtual.enabled,
                        a = s ? this.virtual.slides.length : this.slides.length,
                        l = t.children("." + this.params.slideClass),
                        u = s ? this.virtual.slides.length : l.length,
                        p = [],
                        h = [],
                        f = [],
                        m = e.slidesOffsetBefore;
                    "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
                    var v = e.slidesOffsetAfter;
                    "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
                    var g = this.snapGrid.length,
                        y = this.snapGrid.length,
                        b = e.spaceBetween,
                        w = -m,
                        x = 0,
                        T = 0;
                    if (void 0 !== n) {
                        var E, S;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), this.virtualSize = -b, i ? l.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : l.css({
                            marginRight: "",
                            marginBottom: ""
                        }), e.slidesPerColumn > 1 && (E = Math.floor(u / e.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                        for (var C, k = e.slidesPerColumn, P = E / k, M = P - (e.slidesPerColumn * P - u), L = 0; L < u; L += 1) {
                            S = 0;
                            var O = l.eq(L);
                            if (e.slidesPerColumn > 1) {
                                var D = void 0,
                                    A = void 0,
                                    I = void 0;
                                "column" === e.slidesPerColumnFill ? (I = L - (A = Math.floor(L / k)) * k, (A > M || A === M && I === k - 1) && (I += 1) >= k && (I = 0, A += 1), D = A + I * E / k, O.css({
                                    "-webkit-box-ordinal-group": D,
                                    "-moz-box-ordinal-group": D,
                                    "-ms-flex-order": D,
                                    "-webkit-order": D,
                                    order: D
                                })) : A = L - (I = Math.floor(L / P)) * P, O.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", I)
                            }
                            if ("none" !== O.css("display")) {
                                if ("auto" === e.slidesPerView) {
                                    var j = r.getComputedStyle(O[0], null),
                                        N = O[0].style.transform,
                                        $ = O[0].style.webkitTransform;
                                    N && (O[0].style.transform = "none"), $ && (O[0].style.webkitTransform = "none"), S = this.isHorizontal() ? O[0].getBoundingClientRect().width + parseFloat(j.getPropertyValue("margin-left")) + parseFloat(j.getPropertyValue("margin-right")) : O[0].getBoundingClientRect().height + parseFloat(j.getPropertyValue("margin-top")) + parseFloat(j.getPropertyValue("margin-bottom")), N && (O[0].style.transform = N), $ && (O[0].style.webkitTransform = $), e.roundLengths && (S = Math.floor(S))
                                } else S = (n - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[L] && (this.isHorizontal() ? l[L].style.width = S + "px" : l[L].style.height = S + "px");
                                l[L] && (l[L].swiperSlideSize = S), f.push(S), e.centeredSlides ? (w = w + S / 2 + x / 2 + b, 0 === x && 0 !== L && (w = w - n / 2 - b), 0 === L && (w = w - n / 2 - b), Math.abs(w) < .001 && (w = 0), e.roundLengths && (w = Math.floor(w)), T % e.slidesPerGroup == 0 && p.push(w), h.push(w)) : (e.roundLengths && (w = Math.floor(w)), T % e.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + S + b), this.virtualSize += S + b, x = S, T += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, n) + v, i && o && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }), d.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            }), e.centeredSlides)) {
                            C = [];
                            for (var R = 0; R < p.length; R += 1) {
                                var q = p[R];
                                e.roundLengths && (q = Math.floor(q)), p[R] < this.virtualSize + p[0] && C.push(q)
                            }
                            p = C
                        }
                        if (!e.centeredSlides) {
                            C = [];
                            for (var _ = 0; _ < p.length; _ += 1) {
                                var z = p[_];
                                e.roundLengths && (z = Math.floor(z)), p[_] <= this.virtualSize - n && C.push(z)
                            }
                            p = C, Math.floor(this.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - n)
                        }
                        0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? i ? l.css({
                            marginLeft: b + "px"
                        }) : l.css({
                            marginRight: b + "px"
                        }) : l.css({
                            marginBottom: b + "px"
                        })), c.extend(this, {
                            slides: l,
                            snapGrid: p,
                            slidesGrid: h,
                            slidesSizesGrid: f
                        }), u !== a && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), h.length !== y && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, n = [],
                        i = 0;
                    if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                            var r = this.activeIndex + t;
                            if (r > this.slides.length) break;
                            n.push(this.slides.eq(r)[0])
                        } else n.push(this.slides.eq(this.activeIndex)[0]);
                    for (t = 0; t < n.length; t += 1)
                        if (void 0 !== n[t]) {
                            var o = n[t].offsetHeight;
                            i = o > i ? o : i
                        } i && this.$wrapperEl.css("height", i + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        n = this.slides,
                        i = this.rtlTranslate;
                    if (0 !== n.length) {
                        void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
                        var r = -e;
                        i && (r = e), n.removeClass(t.slideVisibleClass);
                        for (var o = 0; o < n.length; o += 1) {
                            var s = n[o],
                                a = (r + (t.centeredSlides ? this.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility) {
                                var l = -(r - s.swiperSlideOffset),
                                    u = l + this.slidesSizesGrid[o];
                                (l >= 0 && l < this.size || u > 0 && u <= this.size || l <= 0 && u >= this.size) && n.eq(o).addClass(t.slideVisibleClass)
                            }
                            s.progress = i ? -a : a
                        }
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        n = this.maxTranslate() - this.minTranslate(),
                        i = this.progress,
                        r = this.isBeginning,
                        o = this.isEnd,
                        s = r,
                        a = o;
                    0 === n ? (i = 0, r = !0, o = !0) : (r = (i = (e - this.minTranslate()) / n) <= 0, o = i >= 1), c.extend(this, {
                        progress: i,
                        isBeginning: r,
                        isEnd: o
                    }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !s && this.emit("reachBeginning toEdge"), o && !a && this.emit("reachEnd toEdge"), (s && !r || a && !o) && this.emit("fromEdge"), this.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    var e, t = this.slides,
                        n = this.params,
                        i = this.$wrapperEl,
                        r = this.activeIndex,
                        o = this.realIndex,
                        s = this.virtual && n.virtual.enabled;
                    t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = s ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass));
                    var a = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === a.length && (a = t.eq(0)).addClass(n.slideNextClass);
                    var l = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === l.length && (l = t.eq(-1)).addClass(n.slidePrevClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, n = this.rtlTranslate ? this.translate : -this.translate,
                        i = this.slidesGrid,
                        r = this.snapGrid,
                        o = this.params,
                        s = this.activeIndex,
                        a = this.realIndex,
                        l = this.snapIndex,
                        u = e;
                    if (void 0 === u) {
                        for (var d = 0; d < i.length; d += 1) void 0 !== i[d + 1] ? n >= i[d] && n < i[d + 1] - (i[d + 1] - i[d]) / 2 ? u = d : n >= i[d] && n < i[d + 1] && (u = d + 1) : n >= i[d] && (u = d);
                        o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                    }
                    if ((t = r.indexOf(n) >= 0 ? r.indexOf(n) : Math.floor(u / o.slidesPerGroup)) >= r.length && (t = r.length - 1), u !== s) {
                        var p = parseInt(this.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                        c.extend(this, {
                            snapIndex: t,
                            realIndex: p,
                            previousIndex: s,
                            activeIndex: u
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), a !== p && this.emit("realIndexChange"), this.emit("slideChange")
                    } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function(t) {
                    var n = this.params,
                        i = e(t.target).closest("." + n.slideClass)[0],
                        r = !1;
                    if (i)
                        for (var o = 0; o < this.slides.length; o += 1) this.slides[o] === i && (r = !0);
                    if (!i || !r) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(e(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = e(i).index(), n.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            m = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        n = this.rtlTranslate,
                        i = this.translate,
                        r = this.$wrapperEl;
                    if (t.virtualTranslate) return n ? -i : i;
                    var o = c.getTranslate(r[0], e);
                    return n && (o = -o), o || 0
                },
                setTranslate: function(e, t) {
                    var n = this.rtlTranslate,
                        i = this.params,
                        r = this.$wrapperEl,
                        o = this.progress,
                        s = 0,
                        a = 0;
                    this.isHorizontal() ? s = n ? -e : e : a = e, i.roundLengths && (s = Math.floor(s), a = Math.floor(a)), i.virtualTranslate || (d.transforms3d ? r.transform("translate3d(" + s + "px, " + a + "px, 0px)") : r.transform("translate(" + s + "px, " + a + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? s : a;
                    var l = this.maxTranslate() - this.minTranslate();
                    (0 === l ? 0 : (e - this.minTranslate()) / l) !== o && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            },
            v = {
                setTransition: function(e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                        i = this.params,
                        r = this.previousIndex;
                    i.autoHeight && this.updateAutoHeight();
                    var o = t;
                    if (o || (o = n > r ? "next" : n < r ? "prev" : "reset"), this.emit("transitionStart"), e && n !== r) {
                        if ("reset" === o) return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"), "next" === o ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                        i = this.previousIndex;
                    this.animating = !1, this.setTransition(0);
                    var r = t;
                    if (r || (r = n > i ? "next" : n < i ? "prev" : "reset"), this.emit("transitionEnd"), e && n !== i) {
                        if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            },
            g = {
                slideTo: function(e, t, n, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                    var r = this,
                        o = e;
                    o < 0 && (o = 0);
                    var s = r.params,
                        a = r.snapGrid,
                        l = r.slidesGrid,
                        u = r.previousIndex,
                        c = r.activeIndex,
                        p = r.rtlTranslate;
                    if (r.animating && s.preventIntercationOnTransition) return !1;
                    var h = Math.floor(o / s.slidesPerGroup);
                    h >= a.length && (h = a.length - 1), (c || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
                    var f, m = -a[h];
                    if (r.updateProgress(m), s.normalizeSlideIndex)
                        for (var v = 0; v < l.length; v += 1) - Math.floor(100 * m) >= Math.floor(100 * l[v]) && (o = v);
                    if (r.initialized && o !== c) {
                        if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (c || 0) !== o) return !1
                    }
                    return f = o > c ? "next" : o < c ? "prev" : "reset", p && -m === r.translate || !p && m === r.translate ? (r.updateActiveIndex(o), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(n, f), r.transitionEnd(n, f)), !1) : (0 !== t && d.transition ? (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.transitionEnd(n, f))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, f), r.transitionEnd(n, f)), !0)
                },
                slideToLoop: function(e, t, n, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                    var r = e;
                    return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, n, i)
                },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this.params,
                        r = this.animating;
                    return i.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    function i(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var r = this.params,
                        o = this.animating,
                        s = this.snapGrid,
                        a = this.slidesGrid,
                        l = this.rtlTranslate;
                    if (r.loop) {
                        if (o) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }
                    var u, c = i(l ? this.translate : -this.translate),
                        d = s.map(function(e) {
                            return i(e)
                        }),
                        p = (a.map(function(e) {
                            return i(e)
                        }), s[d.indexOf(c)], s[d.indexOf(c) - 1]);
                    return void 0 !== p && (u = a.indexOf(p)) < 0 && (u = this.activeIndex - 1), this.slideTo(u, e, t, n)
                },
                slideReset: function(e, t, n) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this.activeIndex,
                        r = Math.floor(i / this.params.slidesPerGroup);
                    if (r < this.snapGrid.length - 1) {
                        var o = this.rtlTranslate ? this.translate : -this.translate,
                            s = this.snapGrid[r];
                        o - s > (this.snapGrid[r + 1] - s) / 2 && (i = this.params.slidesPerGroup)
                    }
                    return this.slideTo(i, e, t, n)
                },
                slideToClickedSlide: function() {
                    var t, n = this,
                        i = n.params,
                        r = n.$wrapperEl,
                        o = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView,
                        s = n.clickedIndex;
                    if (i.loop) {
                        if (n.animating) return;
                        t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < n.loopedSlides - o / 2 || s > n.slides.length - n.loopedSlides + o / 2 ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            n.slideTo(s)
                        })) : n.slideTo(s) : s > n.slides.length - o ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            n.slideTo(s)
                        })) : n.slideTo(s)
                    } else n.slideTo(s)
                }
            },
            y = {
                loopCreate: function() {
                    var t = this,
                        n = t.params,
                        r = t.$wrapperEl;
                    r.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                    var o = r.children("." + n.slideClass);
                    if (n.loopFillGroupWithBlank) {
                        var s = n.slidesPerGroup - o.length % n.slidesPerGroup;
                        if (s !== n.slidesPerGroup) {
                            for (var a = 0; a < s; a += 1) {
                                var l = e(i.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                r.append(l)
                            }
                            o = r.children("." + n.slideClass)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = o.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > o.length && (t.loopedSlides = o.length);
                    var u = [],
                        c = [];
                    o.each(function(n, i) {
                        var r = e(i);
                        n < t.loopedSlides && c.push(i),
                            n < o.length && n >= o.length - t.loopedSlides && u.push(i), r.attr("data-swiper-slide-index", n)
                    });
                    for (var d = 0; d < c.length; d += 1) r.append(e(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (var p = u.length - 1; p >= 0; p -= 1) r.prepend(e(u[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this.params,
                        n = this.activeIndex,
                        i = this.slides,
                        r = this.loopedSlides,
                        o = this.allowSlidePrev,
                        s = this.allowSlideNext,
                        a = this.snapGrid,
                        l = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var u = -a[n] - this.getTranslate();
                    n < r ? (e = i.length - 3 * r + n, e += r, this.slideTo(e, 0, !1, !0) && 0 !== u && this.setTranslate((l ? -this.translate : this.translate) - u)) : ("auto" === t.slidesPerView && n >= 2 * r || n >= i.length - r) && (e = -i.length + n + r, e += r, this.slideTo(e, 0, !1, !0) && 0 !== u && this.setTranslate((l ? -this.translate : this.translate) - u)), this.allowSlidePrev = o, this.allowSlideNext = s
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        n = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            b = {
                setGrabCursor: function(e) {
                    if (!(d.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    d.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                }
            },
            w = {
                appendSlide: function(e) {
                    var t = this.$wrapperEl,
                        n = this.params;
                    if (n.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                    else t.append(e);
                    n.loop && this.loopCreate(), n.observer && d.observer || this.update()
                },
                prependSlide: function(e) {
                    var t = this.params,
                        n = this.$wrapperEl,
                        i = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var r = i + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) e[o] && n.prepend(e[o]);
                        r = i + e.length
                    } else n.prepend(e);
                    t.loop && this.loopCreate(), t.observer && d.observer || this.update(), this.slideTo(r, 0, !1)
                },
                addSlide: function(e, t) {
                    var n = this.$wrapperEl,
                        i = this.params,
                        r = this.activeIndex;
                    i.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + i.slideClass));
                    var o = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= o) this.appendSlide(t);
                    else {
                        for (var s = r > e ? r + 1 : r, a = [], l = o - 1; l >= e; l -= 1) {
                            var u = this.slides.eq(l);
                            u.remove(), a.unshift(u)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && n.append(t[c]);
                            s = r > e ? r + t.length : r
                        } else n.append(t);
                        for (var p = 0; p < a.length; p += 1) n.append(a[p]);
                        i.loop && this.loopCreate(), i.observer && d.observer || this.update(), i.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this.params,
                        n = this.$wrapperEl,
                        i = this.activeIndex;
                    t.loop && (i -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + t.slideClass));
                    var r, o = i;
                    if ("object" == typeof e && "length" in e) {
                        for (var s = 0; s < e.length; s += 1) r = e[s], this.slides[r] && this.slides.eq(r).remove(), r < o && (o -= 1);
                        o = Math.max(o, 0)
                    } else r = e, this.slides[r] && this.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
                    t.loop && this.loopCreate(), t.observer && d.observer || this.update(), t.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            x = function() {
                var e = r.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: r.cordova || r.phonegap,
                        phonegap: r.cordova || r.phonegap
                    },
                    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    o = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    s = e.match(/(iPad).*OS\s([\d_]+)/),
                    a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), o && !n && (t.os = "android", t.osVersion = o[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (s || l || a) && (t.os = "ios", t.ios = !0), l && !a && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || s || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var u = t.osVersion.split("."),
                        c = i.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (a || l) && (1 * u[0] == 7 ? 1 * u[1] >= 1 : 1 * u[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = r.devicePixelRatio || 1, t
            }(),
            T = {
                attachEvents: function() {
                    var t = this.params,
                        o = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    this.onTouchStart = function(t) {
                        var n = this.touchEventsData,
                            o = this.params,
                            s = this.touches;
                        if (!this.animating || !o.preventIntercationOnTransition) {
                            var a = t;
                            if (a.originalEvent && (a = a.originalEvent), n.isTouchEvent = "touchstart" === a.type, (n.isTouchEvent || !("which" in a) || 3 !== a.which) && (!n.isTouched || !n.isMoved))
                                if (o.noSwiping && e(a.target).closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0]) this.allowClick = !0;
                                else if (!o.swipeHandler || e(a).closest(o.swipeHandler)[0]) {
                                s.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, s.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                var l = s.currentX,
                                    u = s.currentY;
                                if (!x.ios || x.cordova || !o.iOSEdgeSwipeDetection || !(l <= o.iOSEdgeSwipeThreshold || l >= r.screen.width - o.iOSEdgeSwipeThreshold)) {
                                    if (c.extend(n, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), s.startX = l, s.startY = u, n.touchStartTime = c.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== a.type) {
                                        var d = !0;
                                        e(a.target).is(n.formElements) && (d = !1), i.activeElement && e(i.activeElement).is(n.formElements) && i.activeElement !== a.target && i.activeElement.blur(), d && this.allowTouchMove && a.preventDefault()
                                    }
                                    this.emit("touchStart", a)
                                }
                            }
                        }
                    }.bind(this), this.onTouchMove = function(t) {
                        var n = this.touchEventsData,
                            r = this.params,
                            o = this.touches,
                            s = this.rtlTranslate,
                            a = t;
                        if (a.originalEvent && (a = a.originalEvent), n.isTouched) {
                            if (!n.isTouchEvent || "mousemove" !== a.type) {
                                var l = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    u = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                if (a.preventedByNestedSwiper) return o.startX = l, void(o.startY = u);
                                if (!this.allowTouchMove) return this.allowClick = !1, void(n.isTouched && (c.extend(o, {
                                    startX: l,
                                    startY: u,
                                    currentX: l,
                                    currentY: u
                                }), n.touchStartTime = c.now()));
                                if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                    if (this.isVertical()) {
                                        if (u < o.startY && this.translate <= this.maxTranslate() || u > o.startY && this.translate >= this.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                                    } else if (l < o.startX && this.translate <= this.maxTranslate() || l > o.startX && this.translate >= this.minTranslate()) return;
                                if (n.isTouchEvent && i.activeElement && a.target === i.activeElement && e(a.target).is(n.formElements)) return n.isMoved = !0, void(this.allowClick = !1);
                                if (n.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && a.targetTouches.length > 1)) {
                                    o.currentX = l, o.currentY = u;
                                    var d, p = o.currentX - o.startX,
                                        h = o.currentY - o.startY;
                                    if (void 0 === n.isScrolling && (this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : p * p + h * h >= 25 && (d = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, n.isScrolling = this.isHorizontal() ? d > r.touchAngle : 90 - d > r.touchAngle)), n.isScrolling && this.emit("touchMoveOpposite", a), "undefined" == typeof startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                    else if (n.startMoving) {
                                        this.allowClick = !1, a.preventDefault(), r.touchMoveStopPropagation && !r.nested && a.stopPropagation(), n.isMoved || (r.loop && this.loopFix(), n.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), n.isMoved = !0;
                                        var f = this.isHorizontal() ? p : h;
                                        o.diff = f, f *= r.touchRatio, s && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", n.currentTranslate = f + n.startTranslate;
                                        var m = !0,
                                            v = r.resistanceRatio;
                                        if (r.touchReleaseOnEdges && (v = 0), f > 0 && n.currentTranslate > this.minTranslate() ? (m = !1, r.resistance && (n.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + n.startTranslate + f, v))) : f < 0 && n.currentTranslate < this.maxTranslate() && (m = !1, r.resistance && (n.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - n.startTranslate - f, v))), m && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.threshold > 0) {
                                            if (!(Math.abs(f) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                            if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                                        }
                                        r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), r.freeMode && (0 === n.velocities.length && n.velocities.push({
                                            position: o[this.isHorizontal() ? "startX" : "startY"],
                                            time: n.touchStartTime
                                        }), n.velocities.push({
                                            position: o[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: c.now()
                                        })), this.updateProgress(n.currentTranslate), this.setTranslate(n.currentTranslate))
                                    }
                                }
                            }
                        } else n.startMoving && n.isScrolling && this.emit("touchMoveOpposite", a)
                    }.bind(this), this.onTouchEnd = function(e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            r = t.touches,
                            o = t.rtlTranslate,
                            s = t.$wrapperEl,
                            a = t.slidesGrid,
                            l = t.snapGrid,
                            u = e;
                        if (u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var d, p = c.now(),
                            h = p - n.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), h < 300 && p - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = c.nextTick(function() {
                                t && !t.destroyed && t.emit("click", u)
                            }, 300)), h < 300 && p - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", u))), n.lastClickTime = c.now(), c.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
                            if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (d > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (n.velocities.length > 1) {
                                    var f = n.velocities.pop(),
                                        m = n.velocities.pop(),
                                        v = f.position - m.position,
                                        g = f.time - m.time;
                                    t.velocity = v / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || c.now() - f.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                                var y = 1e3 * i.freeModeMomentumRatio,
                                    b = t.velocity * y,
                                    w = t.translate + b;
                                o && (w = -w);
                                var x, T, E = !1,
                                    S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, n.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);
                                else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), x = t.minTranslate(), E = !0, n.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);
                                else if (i.freeModeSticky) {
                                    for (var C, k = 0; k < l.length; k += 1)
                                        if (l[k] > -w) {
                                            C = k;
                                            break
                                        } w = -(w = Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                                }
                                if (T && t.once("transitionEnd", function() {
                                        t.loopFix()
                                    }), 0 !== t.velocity) y = o ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                                else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function() {
                                    t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), s.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var P = 0, M = t.slidesSizesGrid[0], L = 0; L < a.length; L += i.slidesPerGroup) void 0 !== a[L + i.slidesPerGroup] ? d >= a[L] && d < a[L + i.slidesPerGroup] && (P = L, M = a[L + i.slidesPerGroup] - a[L]) : d >= a[L] && (P = L, M = a[a.length - 1] - a[a.length - 2]);
                            var O = (d - a[P]) / M;
                            if (h > i.longSwipesMs) {
                                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (O >= i.longSwipesRatio ? t.slideTo(P + i.slidesPerGroup) : t.slideTo(P)), "prev" === t.swipeDirection && (O > 1 - i.longSwipesRatio ? t.slideTo(P + i.slidesPerGroup) : t.slideTo(P))
                            } else {
                                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(P + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(P)
                            }
                        }
                    }.bind(this), this.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(this);
                    var l = "container" === t.touchEventsTarget ? s : a,
                        u = !!t.nested;
                    if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                        if (d.touch) {
                            var p = !("touchstart" !== o.start || !d.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(o.start, this.onTouchStart, p), l.addEventListener(o.move, this.onTouchMove, d.passiveListener ? {
                                passive: !1,
                                capture: u
                            } : u), l.addEventListener(o.end, this.onTouchEnd, p)
                        }(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !d.touch && x.ios) && (l.addEventListener("mousedown", this.onTouchStart, !1), i.addEventListener("mousemove", this.onTouchMove, u), i.addEventListener("mouseup", this.onTouchEnd, !1))
                    } else l.addEventListener(o.start, this.onTouchStart, !1), i.addEventListener(o.move, this.onTouchMove, u), i.addEventListener(o.end, this.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", this.onClick, !0), this.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", n, !0)
                },
                detachEvents: function() {
                    var e = this.params,
                        t = this.touchEvents,
                        r = this.el,
                        o = this.wrapperEl,
                        s = "container" === e.touchEventsTarget ? r : o,
                        a = !!e.nested;
                    if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                        if (d.touch) {
                            var l = !("onTouchStart" !== t.start || !d.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(t.start, this.onTouchStart, l), s.removeEventListener(t.move, this.onTouchMove, a), s.removeEventListener(t.end, this.onTouchEnd, l)
                        }(e.simulateTouch && !x.ios && !x.android || e.simulateTouch && !d.touch && x.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), i.removeEventListener("mousemove", this.onTouchMove, a), i.removeEventListener("mouseup", this.onTouchEnd, !1))
                    } else s.removeEventListener(t.start, this.onTouchStart, !1), i.removeEventListener(t.move, this.onTouchMove, a), i.removeEventListener(t.end, this.onTouchEnd, !1);
                    (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), this.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", n)
                }
            },
            E = {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        n = this.loopedSlides;
                    void 0 === n && (n = 0);
                    var i = this.params,
                        r = i.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var s = o in r ? r[o] : this.originalParams,
                                a = i.loop && s.slidesPerView !== i.slidesPerView;
                            c.extend(this.params, s), c.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, a && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)), this.emit("breakpoint", s)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            n = [];
                        Object.keys(e).forEach(function(e) {
                            n.push(e)
                        }), n.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var i = 0; i < n.length; i += 1) {
                            var o = n[i];
                            o >= r.innerWidth && !t && (t = o)
                        }
                        return t || "max"
                    }
                }
            },
            S = function() {
                return {
                    isIE: !!r.navigator.userAgent.match(/Trident/g) || !!r.navigator.userAgent.match(/MSIE/g),
                    isSafari: (e = r.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
                };
                var e
            }(),
            C = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventIntercationOnTransition: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            k = {
                update: f,
                translate: m,
                transition: v,
                slide: g,
                loop: y,
                grabCursor: b,
                manipulation: w,
                events: T,
                breakpoints: E,
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var e = this.classNames,
                            t = this.params,
                            n = this.rtl,
                            i = this.$el,
                            r = [];
                        r.push(t.direction), t.freeMode && r.push("free-mode"), d.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), n && r.push("rtl"), t.slidesPerColumn > 1 && r.push("multirow"), x.android && r.push("android"), x.ios && r.push("ios"), S.isIE && (d.pointerEvents || d.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach(function(n) {
                            e.push(t.containerModifierClass + n)
                        }), i.addClass(e.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, t, n, i, o, s) {
                        function a() {
                            s && s()
                        }
                        var l;
                        e.complete && o ? a() : t ? ((l = new r.Image).onload = a, l.onerror = a, i && (l.sizes = i), n && (l.srcset = n), t && (l.src = t)) : a()
                    },
                    preloadImages: function() {
                        function e() {
                            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                        }
                        var t = this;
                        t.imagesToLoad = t.$el.find("img");
                        for (var n = 0; n < t.imagesToLoad.length; n += 1) {
                            var i = t.imagesToLoad[n];
                            t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            },
            P = {},
            M = function(t) {
                function n() {
                    for (var i, r, o, s = [], a = arguments.length; a--;) s[a] = arguments[a];
                    1 === s.length && s[0].constructor && s[0].constructor === Object ? o = s[0] : (r = (i = s)[0], o = i[1]), o || (o = {}), o = c.extend({}, o), r && !o.el && (o.el = r), t.call(this, o), Object.keys(k).forEach(function(e) {
                        Object.keys(k[e]).forEach(function(t) {
                            n.prototype[t] || (n.prototype[t] = k[e][t])
                        })
                    });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0],
                                i = t.params[n];
                            if ("object" != typeof i) return;
                            if (!(n in o && "enabled" in i)) return;
                            !0 === o[n] && (o[n] = {
                                enabled: !0
                            }), "object" != typeof o[n] || "enabled" in o[n] || (o[n].enabled = !0), o[n] || (o[n] = {
                                enabled: !1
                            })
                        }
                    });
                    var u = c.extend({}, C);
                    l.useModulesParams(u), l.params = c.extend({}, u, P, o), l.originalParams = c.extend({}, l.params), l.passedParams = c.extend({}, o), l.$ = e;
                    var p = e(l.params.el);
                    if (r = p[0]) {
                        if (p.length > 1) {
                            var h = [];
                            return p.each(function(e, t) {
                                var i = c.extend({}, o, {
                                    el: t
                                });
                                h.push(new n(i))
                            }), h
                        }
                        r.swiper = l, p.data("swiper", l);
                        var f, m, v = p.children("." + l.params.wrapperClass);
                        return c.extend(l, {
                            $el: p,
                            el: r,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === l.params.direction
                            },
                            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction")),
                            wrongRTL: "-webkit-box" === v.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], d.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : d.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, l.touchEventsDesktop = {
                                start: m[0],
                                move: m[1],
                                end: m[2]
                            }, d.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: c.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return n.prototype.slidesPerViewDynamic = function() {
                    var e = this.params,
                        t = this.slides,
                        n = this.slidesGrid,
                        i = this.size,
                        r = this.activeIndex,
                        o = 1;
                    if (e.centeredSlides) {
                        for (var s, a = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && (o += 1, (a += t[l].swiperSlideSize) > i && (s = !0));
                        for (var u = r - 1; u >= 0; u -= 1) t[u] && !s && (o += 1, (a += t[u].swiperSlideSize) > i && (s = !0))
                    } else
                        for (var c = r + 1; c < t.length; c += 1) n[c] - n[r] < i && (o += 1);
                    return o
                }, n.prototype.update = function() {
                    function e() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        var n = t.snapGrid,
                            i = t.params;
                        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
                    }
                }, n.prototype.init = function() {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, n.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                        i = n.params,
                        r = n.$el,
                        o = n.$wrapperEl,
                        s = n.slides;
                    return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), o.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), c.deleteProps(n)), n.destroyed = !0, null)
                }, n.extendDefaults = function(e) {
                    c.extend(P, e)
                }, i.extendedDefaults.get = function() {
                    return P
                }, i.defaults.get = function() {
                    return C
                }, i.Class.get = function() {
                    return t
                }, i.$.get = function() {
                    return e
                }, Object.defineProperties(n, i), n
            }(p),
            L = {
                name: "device",
                proto: {
                    device: x
                },
                "static": {
                    device: x
                }
            },
            O = {
                name: "support",
                proto: {
                    support: d
                },
                "static": {
                    support: d
                }
            },
            D = {
                name: "browser",
                proto: {
                    browser: S
                },
                "static": {
                    browser: S
                }
            },
            A = {
                name: "resize",
                create: function() {
                    var e = this;
                    c.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        r.addEventListener("resize", this.resize.resizeHandler), r.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        r.removeEventListener("resize", this.resize.resizeHandler), r.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            I = {
                func: r.MutationObserver || r.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var n = this,
                        i = new(0, I.func)(function(e) {
                            e.forEach(function(e) {
                                n.emit("observerUpdate", e)
                            })
                        });
                    i.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(i)
                },
                init: function() {
                    if (d.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], {
                            childList: !1
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }), this.observer.observers = []
                }
            },
            j = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1
                },
                create: function() {
                    c.extend(this, {
                        observer: {
                            init: I.init.bind(this),
                            attach: I.attach.bind(this),
                            destroy: I.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            N = {
                update: function(e) {
                    function t() {
                        n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load()
                    }
                    var n = this,
                        i = n.params,
                        r = i.slidesPerView,
                        o = i.slidesPerGroup,
                        s = i.centeredSlides,
                        a = n.virtual,
                        l = a.from,
                        u = a.to,
                        d = a.slides,
                        p = a.slidesGrid,
                        h = a.renderSlide,
                        f = a.offset;
                    n.updateActiveIndex();
                    var m, v, g, y = n.activeIndex || 0;
                    m = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top", s ? (v = Math.floor(r / 2) + o, g = Math.floor(r / 2) + o) : (v = r + (o - 1), g = o);
                    var b = Math.max((y || 0) - g, 0),
                        w = Math.min((y || 0) + v, d.length - 1),
                        x = (n.slidesGrid[b] || 0) - (n.slidesGrid[0] || 0);
                    if (c.extend(n.virtual, {
                            from: b,
                            to: w,
                            offset: x,
                            slidesGrid: n.slidesGrid
                        }), l === b && u === w && !e) return n.slidesGrid !== p && x !== f && n.slides.css(m, x + "px"), void n.updateProgress();
                    if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                        offset: x,
                        from: b,
                        to: w,
                        slides: function() {
                            for (var e = [], t = b; t <= w; t += 1) e.push(d[t]);
                            return e
                        }()
                    }), void t();
                    var T = [],
                        E = [];
                    if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
                    else
                        for (var S = l; S <= u; S += 1)(S < b || S > w) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                    for (var C = 0; C < d.length; C += 1) C >= b && C <= w && (void 0 === u || e ? E.push(C) : (C > u && E.push(C), C < l && T.push(C)));
                    E.forEach(function(e) {
                        n.$wrapperEl.append(h(d[e], e))
                    }), T.sort(function(e, t) {
                        return e < t
                    }).forEach(function(e) {
                        n.$wrapperEl.prepend(h(d[e], e))
                    }), n.$wrapperEl.children(".swiper-slide").css(m, x + "px"), t()
                },
                renderSlide: function(t, n) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[n]) return this.virtual.cache[n];
                    var r = i.renderSlide ? e(i.renderSlide.call(this, t, n)) : e('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", n), i.cache && (this.virtual.cache[n] = r), r
                },
                appendSlide: function(e) {
                    this.virtual.slides.push(e), this.virtual.update(!0)
                },
                prependSlide: function(e) {
                    if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                        var t = this.virtual.cache,
                            n = {};
                        Object.keys(t).forEach(function(e) {
                            n[e + 1] = t[e]
                        }), this.virtual.cache = n
                    }
                    this.virtual.update(!0), this.slideNext(0)
                }
            },
            $ = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null
                    }
                },
                create: function() {
                    c.extend(this, {
                        virtual: {
                            update: N.update.bind(this),
                            appendSlide: N.appendSlide.bind(this),
                            prependSlide: N.prependSlide.bind(this),
                            renderSlide: N.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var e = {
                                watchSlidesProgress: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e), this.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            R = {
                handle: function(e) {
                    var t = this.rtlTranslate,
                        n = e;
                    n.originalEvent && (n = n.originalEvent);
                    var o = n.keyCode || n.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === o || this.isVertical() && 40 === o)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === o || this.isVertical() && 38 === o)) return !1;
                    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (37 === o || 39 === o || 38 === o || 40 === o)) {
                            var s = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var a = r.innerWidth,
                                l = r.innerHeight,
                                u = this.$el.offset();
                            t && (u.left -= this.$el[0].scrollLeft);
                            for (var c = [
                                    [u.left, u.top],
                                    [u.left + this.width, u.top],
                                    [u.left, u.top + this.height],
                                    [u.left + this.width, u.top + this.height]
                                ], d = 0; d < c.length; d += 1) {
                                var p = c[d];
                                p[0] >= 0 && p[0] <= a && p[1] >= 0 && p[1] <= l && (s = !0)
                            }
                            if (!s) return
                        }
                        this.isHorizontal() ? (37 !== o && 39 !== o || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === o && !t || 37 === o && t) && this.slideNext(), (37 === o && !t || 39 === o && t) && this.slidePrev()) : (38 !== o && 40 !== o || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === o && this.slideNext(), 38 === o && this.slidePrev()), this.emit("keyPress", o)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (e(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (e(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            q = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: R.enable.bind(this),
                            disable: R.disable.bind(this),
                            handle: R.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            _ = {
                lastScrollTime: c.now(),
                event: r.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var e = "onwheel" in i;
                    if (!e) {
                        var t = i.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: r
                    }
                },
                handleMouseEnter: function() {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function() {
                    this.mouseEntered = !1
                },
                handle: function(e) {
                    var t = e,
                        n = this,
                        i = n.params.mousewheel;
                    if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var o = 0,
                        s = n.rtlTranslate ? -1 : 1,
                        a = _.normalize(t);
                    if (i.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                            o = a.pixelX * s
                        } else {
                            if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                            o = a.pixelY
                        }
                    else o = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * s : -a.pixelY;
                    if (0 === o) return !0;
                    if (i.invert && (o = -o), n.params.freeMode) {
                        n.params.loop && n.loopFix();
                        var l = n.getTranslate() + o * i.sensitivity,
                            u = n.isBeginning,
                            d = n.isEnd;
                        if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!u && n.isBeginning || !d && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = c.nextTick(function() {
                                n.slideToClosest()
                            }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                    } else {
                        if (c.now() - n.mousewheel.lastScrollTime > 60)
                            if (o < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (i.releaseOnEdges) return !0
                                } else n.slideNext(), n.emit("scroll", t);
                        else if (n.isBeginning && !n.params.loop || n.animating) {
                            if (i.releaseOnEdges) return !0
                        } else n.slidePrev(), n.emit("scroll", t);
                        n.mousewheel.lastScrollTime = (new r.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function() {
                    if (!_.event) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(_.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                },
                disable: function() {
                    if (!_.event) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.off(_.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                }
            },
            z = {
                update: function() {
                    var e = this.params.navigation;
                    if (!this.params.loop) {
                        var t = this.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && n.length > 0 && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    }
                },
                init: function() {
                    var t, n, i = this,
                        r = i.params.navigation;
                    (r.nextEl || r.prevEl) && (r.nextEl && (t = e(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && t.length > 1 && 1 === i.$el.find(r.nextEl).length && (t = i.$el.find(r.nextEl))), r.prevEl && (n = e(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && n.length > 1 && 1 === i.$el.find(r.prevEl).length && (n = i.$el.find(r.prevEl))), t && t.length > 0 && t.on("click", function(e) {
                        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
                    }), n && n.length > 0 && n.on("click", function(e) {
                        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
                    }), c.extend(i.navigation, {
                        $nextEl: t,
                        nextEl: t && t[0],
                        $prevEl: n,
                        prevEl: n && n[0]
                    }))
                },
                destroy: function() {
                    var e = this.navigation,
                        t = e.$nextEl,
                        n = e.$prevEl;
                    t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), n && n.length && (n.off("click"), n.removeClass(this.params.navigation.disabledClass))
                }
            },
            H = {
                update: function() {
                    var t = this.rtl,
                        n = this.params.pagination;
                    if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i, r = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            o = this.pagination.$el,
                            s = this.params.loop ? Math.ceil((r - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > r - 1 - 2 * this.loopedSlides && (i -= r - 2 * this.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== this.params.paginationType && (i = s + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === n.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var a, l, u, c = this.pagination.bullets;
                            if (n.dynamicBullets && (this.pagination.bulletSize = c.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), a = i - this.pagination.dynamicBulletIndex, u = ((l = a + (Math.min(c.length, n.dynamicMainBullets) - 1)) + a) / 2), c.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), o.length > 1) c.each(function(t, r) {
                                var o = e(r),
                                    s = o.index();
                                s === i && o.addClass(n.bulletActiveClass), n.dynamicBullets && (s >= a && s <= l && o.addClass(n.bulletActiveClass + "-main"), s === a && o.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), s === l && o.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                            });
                            else if (c.eq(i).addClass(n.bulletActiveClass), n.dynamicBullets) {
                                for (var d = c.eq(a), p = c.eq(l), h = a; h <= l; h += 1) c.eq(h).addClass(n.bulletActiveClass + "-main");
                                d.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), p.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                            if (n.dynamicBullets) {
                                var f = Math.min(c.length, n.dynamicMainBullets + 4),
                                    m = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - u * this.pagination.bulletSize,
                                    v = t ? "right" : "left";
                                c.css(this.isHorizontal() ? v : "top", m + "px")
                            }
                        }
                        if ("fraction" === n.type && (o.find("." + n.currentClass).text(n.formatFractionCurrent(i + 1)), o.find("." + n.totalClass).text(n.formatFractionTotal(s))), "progressbar" === n.type) {
                            var g;
                            g = n.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                            var y = (i + 1) / s,
                                b = 1,
                                w = 1;
                            "horizontal" === g ? b = y : w = y, o.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(this.params.speed)
                        }
                        "custom" === n.type && n.renderCustom ? (o.html(n.renderCustom(this, i + 1, s)), this.emit("paginationRender", this, o[0])) : this.emit("paginationUpdate", this, o[0]), o[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)
                    }
                },
                render: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            n = this.pagination.$el,
                            i = "";
                        if ("bullets" === e.type) {
                            for (var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < r; o += 1) e.renderBullet ? i += e.renderBullet.call(this, o, e.bulletClass) : i += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            n.html(i), this.pagination.bullets = n.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(i)), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(i)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this,
                        n = t.params.pagination;
                    if (n.el) {
                        var i = e(n.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)), "bullets" === n.type && n.clickable && i.addClass(n.clickableClass), i.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (i.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && i.addClass(n.progressbarOppositeClass), n.clickable && i.on("click", "." + n.bulletClass, function(n) {
                            n.preventDefault();
                            var i = e(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), c.extend(t.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            B = {
                setTranslate: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.rtlTranslate,
                            n = this.progress,
                            i = e.dragSize,
                            r = e.trackSize,
                            o = e.$dragEl,
                            s = e.$el,
                            a = this.params.scrollbar,
                            l = i,
                            u = (r - i) * n;
                        t ? (u = -u) > 0 ? (l = i - u, u = 0) : -u + i > r && (l = r + u) : u < 0 ? (l = i + u, u = 0) : u + i > r && (l = r - u), this.isHorizontal() ? (d.transforms3d ? o.transform("translate3d(" + u + "px, 0, 0)") : o.transform("translateX(" + u + "px)"), o[0].style.width = l + "px") : (d.transforms3d ? o.transform("translate3d(0px, " + u + "px, 0)") : o.transform("translateY(" + u + "px)"), o[0].style.height = l + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), s[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                            s[0].style.opacity = 0, s.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = e.$dragEl,
                            n = e.$el;
                        t[0].style.width = "", t[0].style.height = "";
                        var i, r = this.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                            o = this.size / this.virtualSize,
                            s = o * (r / this.size);
                        i = "auto" === this.params.scrollbar.dragSize ? r * o : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = i + "px" : t[0].style.height = i + "px", n[0].style.display = o >= 1 ? "none" : "", this.params.scrollbarHide && (n[0].style.opacity = 0), c.extend(e, {
                            trackSize: r,
                            divider: o,
                            moveDivider: s,
                            dragSize: i
                        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, n = this.scrollbar,
                        i = this.rtlTranslate,
                        r = n.$el,
                        o = n.dragSize,
                        s = n.trackSize;
                    t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[this.isHorizontal() ? "left" : "top"] - o / 2) / (s - o), t = Math.max(Math.min(t, 1), 0), i && (t = 1 - t);
                    var a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                    this.updateProgress(a), this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this.params.scrollbar,
                        n = this.scrollbar,
                        i = this.$wrapperEl,
                        r = n.$el,
                        o = n.$dragEl;
                    this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), n.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), t.hide && r.css("opacity", 1), this.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                        n = this.$wrapperEl,
                        i = t.$el,
                        r = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this.params.scrollbar,
                        n = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = c.nextTick(function() {
                        n.css("opacity", 0), n.transition(400)
                    }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.touchEvents,
                            n = this.touchEventsDesktop,
                            r = this.params,
                            o = e.$el[0],
                            s = !(!d.passiveListener || !r.passiveListener) && {
                                passive: !1,
                                capture: !1
                            },
                            a = !(!d.passiveListener || !r.passiveListener) && {
                                passive: !0,
                                capture: !1
                            };
                        d.touch || !d.pointerEvents && !d.prefixedPointerEvents ? (d.touch && (o.addEventListener(t.start, this.scrollbar.onDragStart, s), o.addEventListener(t.move, this.scrollbar.onDragMove, s), o.addEventListener(t.end, this.scrollbar.onDragEnd, a)), (r.simulateTouch && !x.ios && !x.android || r.simulateTouch && !d.touch && x.ios) && (o.addEventListener("mousedown", this.scrollbar.onDragStart, s), i.addEventListener("mousemove", this.scrollbar.onDragMove, s), i.addEventListener("mouseup", this.scrollbar.onDragEnd, a))) : (o.addEventListener(n.start, this.scrollbar.onDragStart, s), i.addEventListener(n.move, this.scrollbar.onDragMove, s), i.addEventListener(n.end, this.scrollbar.onDragEnd, a))
                    }
                },
                disableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.touchEvents,
                            n = this.touchEventsDesktop,
                            r = this.params,
                            o = e.$el[0],
                            s = !(!d.passiveListener || !r.passiveListener) && {
                                passive: !1,
                                capture: !1
                            },
                            a = !(!d.passiveListener || !r.passiveListener) && {
                                passive: !0,
                                capture: !1
                            };
                        d.touch || !d.pointerEvents && !d.prefixedPointerEvents ? (d.touch && (o.removeEventListener(t.start, this.scrollbar.onDragStart, s), o.removeEventListener(t.move, this.scrollbar.onDragMove, s), o.removeEventListener(t.end, this.scrollbar.onDragEnd, a)), (r.simulateTouch && !x.ios && !x.android || r.simulateTouch && !d.touch && x.ios) && (o.removeEventListener("mousedown", this.scrollbar.onDragStart, s), i.removeEventListener("mousemove", this.scrollbar.onDragMove, s), i.removeEventListener("mouseup", this.scrollbar.onDragEnd, a))) : (o.removeEventListener(n.start, this.scrollbar.onDragStart, s), i.removeEventListener(n.move, this.scrollbar.onDragMove, s), i.removeEventListener(n.end, this.scrollbar.onDragEnd, a))
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            n = this.$el,
                            i = this.params.scrollbar,
                            r = e(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === n.find(i.el).length && (r = n.find(i.el));
                        var o = r.find("." + this.params.scrollbar.dragClass);
                        0 === o.length && (o = e('<div class="' + this.params.scrollbar.dragClass + '"></div>'), r.append(o)), c.extend(t, {
                            $el: r,
                            el: r[0],
                            $dragEl: o,
                            dragEl: o[0]
                        }), i.draggable && t.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            F = {
                setTransform: function(t, n) {
                    var i = this.rtl,
                        r = e(t),
                        o = i ? -1 : 1,
                        s = r.attr("data-swiper-parallax") || "0",
                        a = r.attr("data-swiper-parallax-x"),
                        l = r.attr("data-swiper-parallax-y"),
                        u = r.attr("data-swiper-parallax-scale"),
                        c = r.attr("data-swiper-parallax-opacity");
                    if (a || l ? (a = a || "0", l = l || "0") : this.isHorizontal() ? (a = s, l = "0") : (l = s, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n * o + "%" : a * n * o + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px", null != c) {
                        var d = c - (c - 1) * (1 - Math.abs(n));
                        r[0].style.opacity = d
                    }
                    if (null == u) r.transform("translate3d(" + a + ", " + l + ", 0px)");
                    else {
                        var p = u - (u - 1) * (1 - Math.abs(n));
                        r.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + p + ")")
                    }
                },
                setTranslate: function() {
                    var t = this,
                        n = t.$el,
                        i = t.slides,
                        r = t.progress,
                        o = t.snapGrid;
                    n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                        t.parallax.setTransform(n, r)
                    }), i.each(function(n, i) {
                        var s = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - r * (o.length - 1)), s = Math.min(Math.max(s, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                            t.parallax.setTransform(n, s)
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(n, i) {
                        var r = e(i),
                            o = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (o = 0), r.transition(o)
                    })
                }
            },
            V = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
                },
                onGestureStart: function(t) {
                    var n = this.params.zoom,
                        i = this.zoom,
                        r = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !d.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, r.scaleStart = V.getDistanceBetweenTouches(t)
                    }
                    r.$slideEl && r.$slideEl.length || (r.$slideEl = e(t.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), this.zoom.isScaling = !0) : r.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                        n = this.zoom,
                        i = n.gesture;
                    if (!d.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
                    }
                    i.$imageEl && 0 !== i.$imageEl.length && (d.gestures ? this.zoom.scale = e.scale * n.currentScale : n.scale = i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                        n = this.zoom,
                        i = n.gesture;
                    if (!d.gestures) {
                        if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
                        n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                    }
                    i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                        n = t.gesture,
                        i = t.image;
                    n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this.zoom,
                        n = t.gesture,
                        i = t.image,
                        r = t.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, i.isTouched && n.$slideEl)) {
                        i.isMoved || (i.width = n.$imageEl[0].offsetWidth, i.height = n.$imageEl[0].offsetHeight, i.startX = c.getTranslate(n.$imageWrapEl[0], "x") || 0, i.startY = c.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (i.startX = -i.startX, i.startY = -i.startY));
                        var o = i.width * t.scale,
                            s = i.height * t.scale;
                        if (!(o < n.slideWidth && s < n.slideHeight)) {
                            if (i.minX = Math.min(n.slideWidth / 2 - o / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !i.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x)) return void(i.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y)) return void(i.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = i.touchesCurrent.x, r.prevPositionY = i.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                        t = e.gesture,
                        n = e.image,
                        i = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                        n.isTouched = !1, n.isMoved = !1;
                        var r = 300,
                            o = 300,
                            s = i.x * r,
                            a = n.currentX + s,
                            l = i.y * o,
                            u = n.currentY + l;
                        0 !== i.x && (r = Math.abs((a - n.currentX) / i.x)), 0 !== i.y && (o = Math.abs((u - n.currentY) / i.y));
                        var c = Math.max(r, o);
                        n.currentX = a, n.currentY = u;
                        var d = n.width * e.scale,
                            p = n.height * e.scale;
                        n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t["in"](e)
                },
                "in": function(t) {
                    var n, i, r, o, s, a, l, u, c, d, p, h, f, m, v, g, y = this.zoom,
                        b = this.params.zoom,
                        w = y.gesture,
                        x = y.image;
                    w.$slideEl || (w.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (n = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (n = x.touchesStart.x, i = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, t ? (v = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, r = w.$slideEl.offset().left + v / 2 - n, o = w.$slideEl.offset().top + g / 2 - i, l = w.$imageEl[0].offsetWidth, u = w.$imageEl[0].offsetHeight, c = l * y.scale, d = u * y.scale, f = -(p = Math.min(v / 2 - c / 2, 0)), m = -(h = Math.min(g / 2 - d / 2, 0)), (s = r * y.scale) < p && (s = p), s > f && (s = f), (a = o * y.scale) < h && (a = h), a > m && (a = m)) : (s = 0, a = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + a + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function() {
                    var t = this.zoom,
                        n = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var e = this.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var t = !("touchstart" !== this.touchEvents.start || !d.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        d.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this.zoom;
                    if (e.enabled) {
                        this.zoom.enabled = !1;
                        var t = !("touchstart" !== this.touchEvents.start || !d.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        d.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                }
            },
            W = {
                loadInSlide: function(t, n) {
                    void 0 === n && (n = !0);
                    var i = this,
                        r = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var o = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            s = o.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                        !o.hasClass(r.elementClass) || o.hasClass(r.loadedClass) || o.hasClass(r.loadingClass) || (s = s.add(o[0])), 0 !== s.length && s.each(function(t, s) {
                            var a = e(s);
                            a.addClass(r.loadingClass);
                            var l = a.attr("data-background"),
                                u = a.attr("data-src"),
                                c = a.attr("data-srcset"),
                                d = a.attr("data-sizes");
                            i.loadImage(a[0], u || l, c, d, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background")) : (c && (a.attr("srcset", c), a.removeAttr("data-srcset")), d && (a.attr("sizes", d), a.removeAttr("data-sizes")), u && (a.attr("src", u), a.removeAttr("data-src"))), a.addClass(r.loadedClass).removeClass(r.loadingClass), o.find("." + r.preloaderClass).remove(), i.params.loop && n) {
                                        var e = o.attr("data-swiper-slide-index");
                                        if (o.hasClass(i.params.slideDuplicateClass)) {
                                            var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(s.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", o[0], a[0])
                                }
                            }), i.emit("lazyImageLoad", o[0], a[0])
                        })
                    }
                },
                load: function() {
                    function t(e) {
                        if (l) {
                            if (r.children("." + o.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (s[e]) return !0;
                        return !1
                    }

                    function n(t) {
                        return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                    }
                    var i = this,
                        r = i.$wrapperEl,
                        o = i.params,
                        s = i.slides,
                        a = i.activeIndex,
                        l = i.virtual && o.virtual.enabled,
                        u = o.lazy,
                        c = o.slidesPerView;
                    if ("auto" === c && (c = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) r.children("." + o.slideVisibleClass).each(function(t, n) {
                        var r = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
                        i.lazy.loadInSlide(r)
                    });
                    else if (c > 1)
                        for (var d = a; d < a + c; d += 1) t(d) && i.lazy.loadInSlide(d);
                    else i.lazy.loadInSlide(a);
                    if (u.loadPrevNext)
                        if (c > 1 || u.loadPrevNextAmount && u.loadPrevNextAmount > 1) {
                            for (var p = u.loadPrevNextAmount, h = c, f = Math.min(a + h + Math.max(p, h), s.length), m = Math.max(a - Math.max(h, p), 0), v = a + c; v < f; v += 1) t(v) && i.lazy.loadInSlide(v);
                            for (var g = m; g < a; g += 1) t(g) && i.lazy.loadInSlide(g)
                        } else {
                            var y = r.children("." + o.slideNextClass);
                            y.length > 0 && i.lazy.loadInSlide(n(y));
                            var b = r.children("." + o.slidePrevClass);
                            b.length > 0 && i.lazy.loadInSlide(n(b))
                        }
                }
            },
            X = {
                LinearSpline: function(e, t) {
                    var n, i, r, o, s, a = function(e, t) {
                        for (i = -1, n = e.length; n - i > 1;) e[r = n + i >> 1] <= t ? i = r : n = r;
                        return n
                    };
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (s = a(this.x, e), o = s - 1, (e - this.x[o]) * (this.y[s] - this.y[o]) / (this.x[s] - this.x[o]) + this.y[o]) : 0
                    }, this
                },
                getInterpolateFunction: function(e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new X.LinearSpline(this.slidesGrid, e.slidesGrid) : new X.LinearSpline(this.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function n(e) {
                        var t = o.rtlTranslate ? -o.translate : o.translate;
                        "slide" === o.params.controller.by && (o.controller.getInterpolateFunction(e), r = -o.controller.spline.interpolate(-t)), r && "container" !== o.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), r = (t - o.minTranslate()) * i + e.minTranslate()), o.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, o), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    var i, r, o = this,
                        s = o.controller.control;
                    if (Array.isArray(s))
                        for (var a = 0; a < s.length; a += 1) s[a] !== t && s[a] instanceof M && n(s[a]);
                    else s instanceof M && t !== s && n(s)
                },
                setTransition: function(e, t) {
                    function n(t) {
                        t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                            o && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    var i, r = this,
                        o = r.controller.control;
                    if (Array.isArray(o))
                        for (i = 0; i < o.length; i += 1) o[i] !== t && o[i] instanceof M && n(o[i]);
                    else o instanceof M && t !== o && n(o)
                }
            },
            G = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(t) {
                    var n = this.params.a11y;
                    if (13 === t.keyCode) {
                        var i = e(t.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(n.lastSlideMessage) : this.a11y.notify(n.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(n.firstSlideMessage) : this.a11y.notify(n.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    if (!this.params.loop) {
                        var e = this.navigation,
                            t = e.$nextEl,
                            n = e.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                    }
                },
                updatePagination: function() {
                    var t = this,
                        n = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, r) {
                        var o = e(r);
                        t.a11y.makeElFocusable(o), t.a11y.addElRole(o, "button"), t.a11y.addElLabel(o, n.paginationBulletMessage.replace(/{{index}}/, o.index() + 1))
                    })
                },
                init: function() {
                    this.$el.append(this.a11y.liveRegion);
                    var e, t, n = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, n.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, n.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            Y = {
                init: function() {
                    if (this.params.history) {
                        if (!r.history || !r.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        e.initialized = !0, e.paths = Y.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                            this.params.history.replaceState || r.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || r.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = Y.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = r.location.pathname.slice(1).split("/").filter(function(e) {
                            return "" !== e
                        }),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(t),
                            i = Y.slugify(n.attr("data-history"));
                        r.location.pathname.includes(e) || (i = e + "/" + i);
                        var o = r.history.state;
                        o && o.value === i || (this.params.history.replaceState ? r.history.replaceState({
                            value: i
                        }, null, i) : r.history.pushState({
                            value: i
                        }, null, i))
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, n) {
                    if (t)
                        for (var i = 0, r = this.slides.length; i < r; i += 1) {
                            var o = this.slides.eq(i);
                            if (Y.slugify(o.attr("data-history")) === t && !o.hasClass(this.params.slideDuplicateClass)) {
                                var s = o.index();
                                this.slideTo(s, e, n)
                            }
                        } else this.slideTo(0, e, n)
                }
            },
            U = {
                onHashCange: function() {
                    var e = i.location.hash.replace("#", "");
                    e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && r.history && r.history.replaceState) r.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var e = this.slides.eq(this.activeIndex),
                                t = e.attr("data-hash") || e.attr("data-history");
                            i.location.hash = t || ""
                        }
                },
                init: function() {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var t = i.location.hash.replace("#", "");
                        if (t)
                            for (var n = 0, o = this.slides.length; n < o; n += 1) {
                                var s = this.slides.eq(n);
                                if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(this.params.slideDuplicateClass)) {
                                    var a = s.index();
                                    this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                        this.params.hashNavigation.watchState && e(r).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && e(r).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            K = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = c.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, n)
                },
                start: function() {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function() {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function(e) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            Q = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var n = this.slides.eq(t),
                            i = -n[0].swiperSlideOffset;
                        this.params.virtualTranslate || (i -= this.translate);
                        var r = 0;
                        this.isHorizontal() || (r = i, i = 0);
                        var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                        n.css({
                            opacity: o
                        }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        n = t.slides,
                        i = t.$wrapperEl;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        n.transitionEnd(function() {
                            if (!r && t && !t.destroyed) {
                                r = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
                            }
                        })
                    }
                }
            },
            J = {
                setTranslate: function() {
                    var t, n = this.$el,
                        i = this.$wrapperEl,
                        r = this.slides,
                        o = this.width,
                        s = this.height,
                        a = this.rtlTranslate,
                        l = this.size,
                        u = this.params.cubeEffect,
                        c = this.isHorizontal(),
                        d = this.virtual && this.params.virtual.enabled,
                        p = 0;
                    u.shadow && (c ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({
                        height: o + "px"
                    })) : 0 === (t = n.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t)));
                    for (var h = 0; h < r.length; h += 1) {
                        var f = r.eq(h),
                            m = h;
                        d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var v = 90 * m,
                            g = Math.floor(v / 360);
                        a && (v = -v, g = Math.floor(-v / 360));
                        var y = Math.max(Math.min(f[0].progress, 1), -1),
                            b = 0,
                            w = 0,
                            x = 0;
                        m % 4 == 0 ? (b = 4 * -g * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), a && (b = -b), c || (w = b, b = 0);
                        var T = "rotateX(" + (c ? 0 : -v) + "deg) rotateY(" + (c ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                        if (y <= 1 && y > -1 && (p = 90 * m + 90 * y, a && (p = 90 * -m - 90 * y)), f.transform(T), u.slideShadows) {
                            var E = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                                C = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(E)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(C)), E.length && (E[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
                        }
                    }
                    if (i.css({
                            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                            "transform-origin": "50% 50% -" + l / 2 + "px"
                        }), u.shadow)
                        if (c) t.transform("translate3d(0px, " + (o / 2 + u.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var k = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                P = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                                M = u.shadowScale,
                                L = u.shadowScale / P,
                                O = u.shadowOffset;
                            t.transform("scale3d(" + M + ", 1, " + L + ") translate3d(0px, " + (s / 2 + O) + "px, " + -s / 2 / L + "px) rotateX(-90deg)")
                        } var D = S.isSafari || S.isUiWebView ? -l / 2 : 0;
                    i.transform("translate3d(0px,0," + D + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            Z = {
                setTranslate: function() {
                    for (var t = this.slides, n = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var r = t.eq(i),
                            o = r[0].progress;
                        this.params.flipEffect.limitRotation && (o = Math.max(Math.min(r[0].progress, 1), -1));
                        var s = -180 * o,
                            a = 0,
                            l = -r[0].swiperSlideOffset,
                            u = 0;
                        if (this.isHorizontal() ? n && (s = -s) : (u = l, l = 0, a = -s, s = 0), r[0].style.zIndex = -Math.abs(Math.round(o)) + t.length, this.params.flipEffect.slideShadows) {
                            var c = this.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                d = this.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), r.append(c)), 0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(d)), c.length && (c[0].style.opacity = Math.max(-o, 0)), d.length && (d[0].style.opacity = Math.max(o, 0))
                        }
                        r.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + a + "deg) rotateY(" + s + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        n = t.slides,
                        i = t.activeIndex,
                        r = t.$wrapperEl;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var o = !1;
                        n.eq(i).transitionEnd(function() {
                            if (!o && t && !t.destroyed) {
                                o = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
                            }
                        })
                    }
                }
            },
            ee = {
                setTranslate: function() {
                    for (var t = this.width, n = this.height, i = this.slides, r = this.$wrapperEl, o = this.slidesSizesGrid, s = this.params.coverflowEffect, a = this.isHorizontal(), l = this.translate, u = a ? t / 2 - l : n / 2 - l, c = a ? s.rotate : -s.rotate, p = s.depth, h = 0, f = i.length; h < f; h += 1) {
                        var m = i.eq(h),
                            v = o[h],
                            g = (u - m[0].swiperSlideOffset - v / 2) / v * s.modifier,
                            y = a ? c * g : 0,
                            b = a ? 0 : c * g,
                            w = -p * Math.abs(g),
                            x = a ? 0 : s.stretch * g,
                            T = a ? s.stretch * g : 0;
                        Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                        var E = "translate3d(" + T + "px," + x + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                        if (m.transform(E), m[0].style.zIndex = 1 - Math.abs(Math.round(g)), s.slideShadows) {
                            var S = a ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                C = a ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), m.append(S)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), m.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                        }
                    }(d.pointerEvents || d.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = u + "px 50%")
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            te = [L, O, D, A, j, $, q, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    c.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: _.enable.bind(this),
                            disable: _.disable.bind(this),
                            handle: _.handle.bind(this),
                            handleMouseEnter: _.handleMouseEnter.bind(this),
                            handleMouseLeave: _.handleMouseLeave.bind(this),
                            lastScrollTime: c.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        navigation: {
                            init: z.init.bind(this),
                            update: z.update.bind(this),
                            destroy: z.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(t) {
                        var n = this.navigation,
                            i = n.$nextEl,
                            r = n.$prevEl;
                        !this.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        pagination: {
                            init: H.init.bind(this),
                            render: H.render.bind(this),
                            update: H.update.bind(this),
                            destroy: H.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(t) {
                        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !e(t.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    c.extend(this, {
                        scrollbar: {
                            init: B.init.bind(this),
                            destroy: B.destroy.bind(this),
                            updateSize: B.updateSize.bind(this),
                            setTranslate: B.setTranslate.bind(this),
                            setTransition: B.setTransition.bind(this),
                            enableDraggable: B.enableDraggable.bind(this),
                            disableDraggable: B.disableDraggable.bind(this),
                            setDragPosition: B.setDragPosition.bind(this),
                            onDragStart: B.onDragStart.bind(this),
                            onDragMove: B.onDragMove.bind(this),
                            onDragEnd: B.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        parallax: {
                            setTransform: F.setTransform.bind(this),
                            setTranslate: F.setTranslate.bind(this),
                            setTransition: F.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
                    },
                    init: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        this.params.parallax && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
                        t[n] = V[n].bind(e)
                    }), c.extend(e, {
                        zoom: t
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    c.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: W.load.bind(this),
                            loadInSlide: W.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    c.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: X.getInterpolateFunction.bind(this),
                            setTranslate: X.setTranslate.bind(this),
                            setTransition: X.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var t = this;
                    c.extend(t, {
                        a11y: {
                            liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(G).forEach(function(e) {
                        t.a11y[e] = G[e].bind(t)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    c.extend(this, {
                        history: {
                            init: Y.init.bind(this),
                            setHistory: Y.setHistory.bind(this),
                            setHistoryPopState: Y.setHistoryPopState.bind(this),
                            scrollToSlide: Y.scrollToSlide.bind(this),
                            destroy: Y.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: U.init.bind(this),
                            destroy: U.destroy.bind(this),
                            setHash: U.setHash.bind(this),
                            onHashCange: U.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var e = this;
                    c.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: K.run.bind(e),
                            start: K.start.bind(e),
                            stop: K.stop.bind(e),
                            pause: K.pause.bind(e),
                            onTransitionEnd: function(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        fadeEffect: {
                            setTranslate: Q.setTranslate.bind(this),
                            setTransition: Q.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    c.extend(this, {
                        cubeEffect: {
                            setTranslate: J.setTranslate.bind(this),
                            setTransition: J.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        flipEffect: {
                            setTranslate: Z.setTranslate.bind(this),
                            setTransition: Z.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        coverflowEffect: {
                            setTranslate: ee.setTranslate.bind(this),
                            setTransition: ee.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }];
        return void 0 === M.use && (M.use = M.Class.use, M.installModule = M.Class.installModule), M.use(te), M
    }),
    function() {
        this.alumier = {}, document.addEventListener("turbolinks:load", function() {
            var e, t;
            t = function() {
                var e, t;
                t = $(window).width(), e = $(window).height(), t > 900 && $("div.homepage-featured").height(e - 70), t < 980 && ($(".in-the-press .boxed").removeClass("boxed"), $(".in-the-press .striped").removeClass("striped")), t > 1280 && t > 900 ? $("div.homepage-featured div.introduction").css({
                    right: (t - 1280) / 2 + "px",
                    top: (e - 70 - $("div.homepage-featured div.introduction").height() - 180) / 2
                }) : t <= 1280 && t > 900 ? $("div.homepage-featured div.introduction").css({
                    right: "50px",
                    top: (e - 70 - $("div.homepage-featured div.introduction").height() - 180) / 2
                }) : $("div.homepage-featured div.introduction").css({
                    right: "0",
                    top: "0"
                })
            }, window.addEventListener("resize", t), t(), $("nav").on("click", ".dropdown-link", function() {
                $(this).next(".dropdown-content").addClass("open")
            }), $("nav").on("click", ".back", function() {
                $(this).parent(".dropdown-content").removeClass("open")
            }), $("span.menu-icon").click(function() {
                $("div.menu-mobile").toggleClass("open"), $("a.cart").toggleClass("open"), $(this).toggleClass("open")
            }), $("div.content").on("click", "span.scroll-down", function(e) {
                e.preventDefault(), $("html, body").animate({
                    scrollTop: $("div.featured-products").offset().top - 50
                }, 1e3)
            }), e = ["/assets/frontend/expert_a_thumb-765590fdce3023d1118b833ba6ac17e4e84002e3e2ace55bf907c164bf7e77de.jpg", "/assets/frontend/expert_a_thumb-765590fdce3023d1118b833ba6ac17e4e84002e3e2ace55bf907c164bf7e77de.jpg"], new Swiper(".expert-swiper-container", {
                fadeEffect: {
                    crossFade: !0
                },
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0,
                    renderBullet: function(t, n) {
                        return '<span class="' + n + '"><span class="image" style="background-image:url(' + e[t] + ')"></span></span>'
                    }
                }
            }), new Swiper(".product-news-swiper", {
                navigation: {
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev"
                }
            }), $("div.tabs span").click(function() {
                var e;
                e = $(this).attr("data-tab"), $("div.tabs span").removeClass("current"), $(".product-description").removeClass("current"), $(this).addClass("current"), $("#" + e).addClass("current")
            }), $("div.thumbs span").click(function() {
                var e;
                e = $(this).attr("data-thumb"), $("div.thumbs span").removeClass("current"), $("div.large span").removeClass("current"), $(this).addClass("current"), $("#" + e).addClass("current")
            }), $("#cart-detail td").on("click", "span.delete", function() {
                $(this).closest("tr").find("td").addClass("move")
            }), $("#cart-detail td").on("click", "span.cancel-delete", function() {
                $(this).closest("tr").find("td").removeClass("move")
            })
        })
    }.call(this),
    function(e) {
        window.console || (window.console = {}), window.console.log || (window.console.log = function() {}), e.fn.euCookieLawPopup = function() {
            var t = this;
            t.params = {
                cookiePolicyUrl: "/privacy-policy?#cookie-policy",
                popupPosition: "bottom",
                colorStyle: "default",
                compactStyle: !1,
                popupTitle: "This website uses cookies",
                popupText: "This site uses cookies to make your browsing experience more convenient and personal. Cookies store useful information on your computer to help us improve the efficiency and relevance of our site for you. In some cases, they are essential to making the site work properly. By accessing this site, you consent to the use of cookies.",
                buttonContinueTitle: "Continue",
                buttonLearnmoreTitle: "Learn about our cookie policy",
                buttonLearnmoreOpenInNewWindow: !0,
                agreementExpiresInDays: 365,
                autoAcceptCookiePolicy: !1,
                htmlMarkup: null
            }, t.vars = {
                INITIALISED: !1,
                HTML_MARKUP: null,
                COOKIE_NAME: "EU_COOKIE_LAW_CONSENT"
            };
            var n = function(n, i, r) {
                    if (n) {
                        var o = e(n).attr("class") ? e(n).attr("class") : "";
                        o.indexOf("eupopup-top") > -1 ? t.params.popupPosition = "top" : o.indexOf("eupopup-fixedtop") > -1 ? t.params.popupPosition = "fixedtop" : o.indexOf("eupopup-bottomright") > -1 ? t.params.popupPosition = "bottomright" : o.indexOf("eupopup-bottomleft") > -1 ? t.params.popupPosition = "bottomleft" : o.indexOf("eupopup-bottom") > -1 ? t.params.popupPosition = "bottom" : o.indexOf("eupopup-block") > -1 && (t.params.popupPosition = "block"), o.indexOf("eupopup-color-default") > -1 ? t.params.colorStyle = "default" : o.indexOf("eupopup-color-inverse") > -1 && (t.params.colorStyle = "inverse"), o.indexOf("eupopup-style-compact") > -1 && (t.params.compactStyle = !0)
                    }
                    i && (t.params.htmlMarkup = i), r && ("undefined" != typeof r.cookiePolicyUrl && (t.params.cookiePolicyUrl = r.cookiePolicyUrl), "undefined" != typeof r.popupPosition && (t.params.popupPosition = r.popupPosition), "undefined" != typeof r.colorStyle && (t.params.colorStyle = r.colorStyle), "undefined" != typeof r.popupTitle && (t.params.popupTitle = r.popupTitle), "undefined" != typeof r.popupText && (t.params.popupText = r.popupText), "undefined" != typeof r.buttonContinueTitle && (t.params.buttonContinueTitle = r.buttonContinueTitle), "undefined" != typeof r.buttonLearnmoreTitle && (t.params.buttonLearnmoreTitle = r.buttonLearnmoreTitle), "undefined" != typeof r.buttonLearnmoreOpenInNewWindow && (t.params.buttonLearnmoreOpenInNewWindow = r.buttonLearnmoreOpenInNewWindow), "undefined" != typeof r.agreementExpiresInDays && (t.params.agreementExpiresInDays = r.agreementExpiresInDays), "undefined" != typeof r.autoAcceptCookiePolicy && (t.params.autoAcceptCookiePolicy = r.autoAcceptCookiePolicy), "undefined" != typeof r.htmlMarkup && (t.params.htmlMarkup = r.htmlMarkup))
                },
                i = function() {
                    return t.params.htmlMarkup ? t.params.htmlMarkup : '<div class="eupopup-container eupopup-container-' + t.params.popupPosition + (t.params.compactStyle ? " eupopup-style-compact" : "") + " eupopup-color-" + t.params.colorStyle + '"><div class="eupopup-head">' + t.params.popupTitle + '</div><div class="eupopup-body">' + t.params.popupText + '</div><div class="eupopup-buttons"><a href="#" class="eupopup-button eupopup-button_1">' + t.params.buttonContinueTitle + '</a><a href="' + t.params.cookiePolicyUrl + '"' + (t.params.buttonLearnmoreOpenInNewWindow ? " target=_blank " : "") + ' class="eupopup-button eupopup-button_2">' + t.params.buttonLearnmoreTitle + '</a><div class="clearfix"></div></div><a href="#" class="eupopup-closebutton">x</a></div>'
                },
                r = function(n) {
                    var i = new Date,
                        r = 24 * t.params.agreementExpiresInDays * 60 * 60 * 1e3;
                    i.setTime(i.getTime() + r);
                    var o = "expires=" + i.toGMTString();
                    document.cookie = t.vars.COOKIE_NAME + "=" + n + "; " + o + ";path=/", e(document).trigger("user_cookie_consent_changed", {
                        consent: n
                    })
                },
                o = function() {
                    for (var e = !1, n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        var r = n[i].trim();
                        0 == r.indexOf(t.vars.COOKIE_NAME) && (e = r.substring(t.vars.COOKIE_NAME.length + 1, r.length))
                    }
                    return e
                },
                s = function() {
                    e(".eupopup-container").animate({
                        opacity: 0,
                        height: 0
                    }, 200, function() {
                        e(".eupopup-container").hide(0)
                    })
                };
            return {
                init: function(a) {
                    n(e(".eupopup").first(), e(".eupopup-markup").html(), a), o() ? e(document).trigger("user_cookie_already_accepted", {
                        consent: !0
                    }) : t.vars.INITIALISED || (t.vars.INITIALISED = !0, t.vars.HTML_MARKUP = i(), e(".eupopup-block").length > 0 ? e(".eupopup-block").append(t.vars.HTML_MARKUP) : e("BODY").append(t.vars.HTML_MARKUP), e(".eupopup-button_1").click(function() {
                        return r(!0), s(), !1
                    }), e(".eupopup-closebutton").click(function() {
                        return r(!0), s(), !1
                    }), e(".eupopup-container").show(), t.params.autoAcceptCookiePolicy && r(!0))
                }
            }
        }, e(document).ready(function() {
            e(".eupopup").length > 0 && e(document).euCookieLawPopup().init({
                info: "YOU_CAN_ADD_MORE_SETTINGS_HERE",
                popupTitle: "This website uses cookies.",
                popupText: "This website uses cookies to make your browsing experience more convenient and personal. Cookies store useful information on your computer to help us improve the efficiency and relevance of our website for you. Without cookies, you would not be able to access secure pages, your shopping cart or your account information. By accessing this site, you consent to the use of cookies."
            })
        })
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.BeerSlider = t() : e.BeerSlider = t()
    }(window, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: i
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if (t.r(i), Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e)
                    for (var r in e) t.d(i, r, function(t) {
                        return e[t]
                    }.bind(null, r));
                return i
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 47)
        }([function(e) {
            e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()
        }, function(e, t, n) {
            var i = n(11)("wks"),
                r = n(33),
                o = n(0).Symbol,
                s = n(54);
            e.exports = function(e) {
                return i[e] || (i[e] = s && o[e] || (s ? o : r)("Symbol." + e))
            }
        }, function(e, t, n) {
            var i = n(5);
            e.exports = function(e) {
                if (!i(e)) throw TypeError(String(e) + " is not an object!");
                return e
            }
        }, function(e, t, n) {
            var i = n(8),
                r = n(21);
            e.exports = n(6) ? function(e, t, n) {
                return i.f(e, t, r(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        }, function(e) {
            var t = {}.hasOwnProperty;
            e.exports = function(e, n) {
                return t.call(e, n)
            }
        }, function(e) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, function(e, t, n) {
            e.exports = !n(12)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e) {
            var t = {}.toString;
            e.exports = function(e) {
                return t.call(e).slice(8, -1)
            }
        }, function(e, t, n) {
            var i = n(6),
                r = n(31),
                o = n(2),
                s = n(32),
                a = Object.defineProperty;
            t.f = i ? a : function(e, t, n) {
                if (o(e), t = s(t, !0), o(n), r) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, function(e, t, n) {
            var i = n(0),
                r = n(3),
                o = n(14),
                s = n(19),
                a = n(57);
            e.exports = function(e, t) {
                var n, l, u, c, d = e.target;
                if (n = e.global ? i : e.stat ? i[d] || s(d, {}) : (i[d] || {}).prototype)
                    for (l in t) {
                        if (u = n[l], c = t[l], !e.forced && void 0 !== u) {
                            if (typeof c == typeof u) continue;
                            a(c, u)
                        }(e.sham || u && u.sham) && r(c, "sham", !0), o(n, l, c, e.unsafe)
                    }
            }
        }, function(e) {
            e.exports = {}
        }, function(e, t, n) {
            var i = n(0),
                r = n(19),
                o = i["__core-js_shared__"] || r("__core-js_shared__", {});
            (e.exports = function(e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.0.0-beta.3",
                mode: n(13) ? "pure" : "global",
                copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)"
            })
        }, function(e) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, function(e) {
            e.exports = !1
        }, function(e, t, n) {
            var i = n(0),
                r = n(3),
                o = n(4),
                s = n(19),
                a = n(34),
                l = n(15),
                u = l.get,
                c = l.enforce,
                d = String(a).split("toString");
            n(11)("inspectSource", function(e) {
                return a.call(e)
            }), (e.exports = function(e, t, n, a) {
                "function" == typeof n && ("string" != typeof t || o(n, "name") || r(n, "name", t), c(n).source = d.join("string" == typeof t ? t : "")), e === i ? s(t, n) : a ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && u(this).source || a.call(this)
            })
        }, function(e, t, n) {
            var i, r, o, s = n(0),
                a = n(34),
                l = n(5),
                u = n(3),
                c = n(4),
                d = n(22),
                p = n(23),
                h = s.WeakMap;
            if ("function" == typeof h && /native code/.test(a.call(h))) {
                var f = new h,
                    m = f.get,
                    v = f.has,
                    g = f.set;
                i = function(e, t) {
                    return g.call(f, e, t), t
                }, r = function(e) {
                    return m.call(f, e) || {}
                }, o = function(e) {
                    return v.call(f, e)
                }
            } else {
                var y = d("state");
                p[y] = !0, i = function(e, t) {
                    return u(e, y, t), t
                }, r = function(e) {
                    return c(e, y) ? e[y] : {}
                }, o = function(e) {
                    return c(e, y)
                }
            }
            e.exports = {
                set: i,
                get: r,
                has: o,
                enforce: function(e) {
                    return o(e) ? r(e) : i(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!l(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                        return n
                    }
                }
            }
        }, function(e, t, n) {
            var i = n(60),
                r = n(25);
            e.exports = function(e) {
                return i(r(e))
            }
        }, function(e) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function!");
                return e
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(17);
            e.exports.f = function(e) {
                return new function(e) {
                    var t, n;
                    this.promise = new e(function(e, i) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = i
                    }), this.resolve = i(t), this.reject = i(n)
                }(e)
            }
        }, function(e, t, n) {
            var i = n(0),
                r = n(3);
            e.exports = function(e, t) {
                try {
                    r(i, e, t)
                } catch (n) {
                    i[e] = t
                }
                return t
            }
        }, function(e, t, n) {
            var i = n(5),
                r = n(0).document,
                o = i(r) && i(r.createElement);
            e.exports = function(e) {
                return o ? r.createElement(e) : {}
            }
        }, function(e) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }, function(e, t, n) {
            var i = n(11)("keys"),
                r = n(33);
            e.exports = function(e) {
                return i[e] || (i[e] = r(e))
            }
        }, function(e) {
            e.exports = {}
        }, function(e) {
            var t = Math.ceil,
                n = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
            }
        }, function(e) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        }, function(e) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function(e, t, n) {
            var i = n(8).f,
                r = n(4),
                o = n(1)("toStringTag");
            e.exports = function(e, t, n) {
                e && !r(e = n ? e : e.prototype, o) && i(e, o, {
                    configurable: !0,
                    value: t
                })
            }
        }, function(e) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    }
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    }
                }
            }
        }, function(e, t, n) {
            e.exports = n(0)
        }, function(e, t, n) {
            var i = n(7),
                r = n(1)("toStringTag"),
                o = "Arguments" == i(function() {
                    return arguments
                }());
            e.exports = function(e) {
                var t, n, s;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
            }
        }, function(e, t, n) {
            e.exports = !n(6) && !n(12)(function() {
                return 7 != Object.defineProperty(n(20)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e, t, n) {
            var i = n(5);
            e.exports = function(e, t) {
                if (!i(e)) return e;
                var n, r;
                if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
                if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
                if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function(e) {
            var t = 0,
                n = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
            }
        }, function(e, t, n) {
            e.exports = n(11)("native-function-to-string", Function.toString)
        }, function(e, t, n) {
            "use strict";
            var i = n(9),
                r = n(66),
                o = n(39),
                s = n(71),
                a = n(27),
                l = n(3),
                u = n(14),
                c = n(13),
                d = n(1)("iterator"),
                p = n(10),
                h = n(38),
                f = h.IteratorPrototype,
                m = h.BUGGY_SAFARI_ITERATORS,
                v = function() {
                    return this
                };
            e.exports = function(e, t, n, h, g, y, b) {
                r(n, t, h);
                var w, x, T, E = function(e) {
                        if (e === g && M) return M;
                        if (!m && e in k) return k[e];
                        switch (e) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    S = t + " Iterator",
                    C = !1,
                    k = e.prototype,
                    P = k[d] || k["@@iterator"] || g && k[g],
                    M = !m && P || E(g),
                    L = "Array" == t && k.entries || P;
                if (L && (w = o(L.call(new e)), f !== Object.prototype && w.next && (c || o(w) === f || (s ? s(w, f) : "function" != typeof w[d] && l(w, d, v)), a(w, S, !0, !0), c && (p[S] = v))), "values" == g && P && "values" !== P.name && (C = !0, M = function() {
                        return P.call(this)
                    }), c && !b || k[d] === M || l(k, d, M), p[t] = M, g)
                    if (x = {
                            values: E("values"),
                            keys: y ? M : E("keys"),
                            entries: E("entries")
                        }, b)
                        for (T in x) !m && !C && T in k || u(k, T, x[T]);
                    else i({
                        target: t,
                        proto: !0,
                        forced: m || C
                    }, x);
                return x
            }
        }, function(e, t, n) {
            var i = n(4),
                r = n(16),
                o = n(61)(!1),
                s = n(23);
            e.exports = function(e, t) {
                var n, a = r(e),
                    l = 0,
                    u = [];
                for (n in a) !i(s, n) && i(a, n) && u.push(n);
                for (; t.length > l;) i(a, n = t[l++]) && (~o(u, n) || u.push(n));
                return u
            }
        }, function(e, t, n) {
            var i = n(24),
                r = Math.min;
            e.exports = function(e) {
                return e > 0 ? r(i(e), 9007199254740991) : 0
            }
        }, function(e, t, n) {
            "use strict";
            var i, r, o, s = n(39),
                a = n(3),
                l = n(4),
                u = n(13),
                c = n(1)("iterator"),
                d = !1;
            [].keys && ("next" in (o = [].keys()) ? (r = s(s(o))) !== Object.prototype && (i = r) : d = !0), null == i && (i = {}), u || l(i, c) || a(i, c, function() {
                return this
            }), e.exports = {
                IteratorPrototype: i,
                BUGGY_SAFARI_ITERATORS: d
            }
        }, function(e, t, n) {
            var i = n(4),
                r = n(67),
                o = n(22)("IE_PROTO"),
                s = n(68),
                a = Object.prototype;
            e.exports = s ? Object.getPrototypeOf : function(e) {
                return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        }, function(e, t, n) {
            var i = n(2),
                r = n(69),
                o = n(26),
                s = n(41),
                a = n(20),
                l = n(22)("IE_PROTO"),
                u = function() {},
                c = function() {
                    var e, t = a("iframe"),
                        n = o.length;
                    for (t.style.display = "none", s.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), c = e.F; n--;) delete c.prototype[o[n]];
                    return c()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[l] = e) : n = c(), void 0 === t ? n : r(n, t)
            }, n(23)[l] = !0
        }, function(e, t, n) {
            var i = n(0).document;
            e.exports = i && i.documentElement
        }, function(e, t, n) {
            var i = n(2),
                r = n(79),
                o = n(37),
                s = n(43),
                a = n(80),
                l = n(81),
                u = {};
            (e.exports = function(e, t, n, c, d) {
                var p, h, f, m, v, g = s(t, n, c ? 2 : 1);
                if (d) p = e;
                else {
                    if ("function" != typeof(h = a(e))) throw TypeError("Target is not iterable!");
                    if (r(h)) {
                        for (f = 0, m = o(e.length); m > f; f++)
                            if ((c ? g(i(v = e[f])[0], v[1]) : g(e[f])) === u) return;
                        return
                    }
                    p = h.call(e)
                }
                for (; !(v = p.next()).done;)
                    if (l(p, g, v.value, c) === u) return
            }).BREAK = u
        }, function(e, t, n) {
            var i = n(17);
            e.exports = function(e, t, n) {
                if (i(e), void 0 === t) return e;
                switch (n) {
                    case 0:
                        return function() {
                            return e.call(t)
                        };
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function(n, i, r) {
                            return e.call(t, n, i, r)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }, function(e, t, n) {
            var i = n(2),
                r = n(17),
                o = n(1)("species");
            e.exports = function(e, t) {
                var n, s = i(e).constructor;
                return void 0 === s || null == (n = i(s)[o]) ? t : r(n)
            }
        }, function(e, t, n) {
            var i, r, o, s = n(0),
                a = n(7),
                l = n(43),
                u = n(41),
                c = n(20),
                d = s.setImmediate,
                p = s.clearImmediate,
                h = s.process,
                f = s.MessageChannel,
                m = s.Dispatch,
                v = 0,
                g = {},
                y = function() {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t()
                    }
                },
                b = function(e) {
                    y.call(e.data)
                };
            d && p || (d = function(e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return g[++v] = function() {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, t)
                }, i(v), v
            }, p = function(e) {
                delete g[e]
            }, "process" == a(h) ? i = function(e) {
                h.nextTick(l(y, e, 1))
            } : m && m.now ? i = function(e) {
                m.now(l(y, e, 1))
            } : f ? (o = (r = new f).port2, r.port1.onmessage = b, i = l(o.postMessage, o, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (i = function(e) {
                s.postMessage(e + "", "*")
            }, s.addEventListener("message", b, !1)) : i = "onreadystatechange" in c("script") ? function(e) {
                u.appendChild(c("script")).onreadystatechange = function() {
                    u.removeChild(this), y.call(e)
                }
            } : function(e) {
                setTimeout(l(y, e, 1), 0)
            }), e.exports = {
                set: d,
                clear: p
            }
        }, function(e, t, n) {
            var i = n(2),
                r = n(5),
                o = n(18);
            e.exports = function(e, t) {
                if (i(e), r(t) && t.constructor === e) return t;
                var n = o.f(e);
                return (0, n.resolve)(t), n.promise
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), n(48),
                function(e) {
                    e && e.__esModule
                }(n(50));
            var i = n(91);
            t["default"] = i.BeerSlider
        }, function() {}, , function(e, t, n) {
            e.exports = n(51), n(89), n(90)
        }, function(e, t, n) {
            n(52), n(55), n(73), n(77), n(88), e.exports = n(29).Promise
        }, function(e, t, n) {
            var i = n(53);
            i !== {}.toString && n(14)(Object.prototype, "toString", i, !0)
        }, function(e, t, n) {
            "use strict";
            var i = n(30),
                r = {};
            r[n(1)("toStringTag")] = "z", e.exports = "[object z]" !== String(r) ? function() {
                return "[object " + i(this) + "]"
            } : r.toString
        }, function(e, t, n) {
            e.exports = !n(12)(function() {
                String(Symbol())
            })
        }, function(e, t, n) {
            "use strict";
            var i = n(56)(!0),
                r = n(15),
                o = n(35),
                s = r.set,
                a = r.getterFor("String Iterator");
            o(String, "String", function(e) {
                s(this, {
                    type: "String Iterator",
                    string: String(e),
                    index: 0
                })
            }, function() {
                var e, t = a(this),
                    n = t.string,
                    r = t.index;
                return r >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = i(n, r), t.index += e.length, {
                    value: e,
                    done: !1
                })
            })
        }, function(e, t, n) {
            var i = n(24),
                r = n(25);
            e.exports = function(e) {
                return function(t, n) {
                    var o, s, a = String(r(t)),
                        l = i(n),
                        u = a.length;
                    return l < 0 || l >= u ? e ? "" : void 0 : (o = a.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : o : e ? a.slice(l, l + 2) : s - 56320 + (o - 55296 << 10) + 65536
                }
            }
        }, function(e, t, n) {
            var i = n(4),
                r = n(58),
                o = n(64),
                s = n(8);
            e.exports = function(e, t) {
                for (var n = r(t), a = s.f, l = o.f, u = 0; u < n.length; u++) {
                    var c = n[u];
                    i(e, c) || a(e, c, l(t, c))
                }
            }
        }, function(e, t, n) {
            var i = n(59),
                r = n(63),
                o = n(2),
                s = n(0).Reflect;
            e.exports = s && s.ownKeys || function(e) {
                var t = i.f(o(e)),
                    n = r.f;
                return n ? t.concat(n(e)) : t
            }
        }, function(e, t, n) {
            var i = n(36),
                r = n(26).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return i(e, r)
            }
        }, function(e, t, n) {
            var i = n(7),
                r = "".split;
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == i(e) ? r.call(e, "") : Object(e)
            }
        }, function(e, t, n) {
            var i = n(16),
                r = n(37),
                o = n(62);
            e.exports = function(e) {
                return function(t, n, s) {
                    var a, l = i(t),
                        u = r(l.length),
                        c = o(s, u);
                    if (e && n != n) {
                        for (; u > c;)
                            if ((a = l[c++]) != a) return !0
                    } else
                        for (; u > c; c++)
                            if ((e || c in l) && l[c] === n) return e || c || 0;
                    return !e && -1
                }
            }
        }, function(e, t, n) {
            var i = n(24),
                r = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                var n = i(e);
                return n < 0 ? r(n + t, 0) : o(n, t)
            }
        }, function(e, t) {
            t.f = Object.getOwnPropertySymbols
        }, function(e, t, n) {
            var i = n(6),
                r = n(65),
                o = n(21),
                s = n(16),
                a = n(32),
                l = n(4),
                u = n(31),
                c = Object.getOwnPropertyDescriptor;
            t.f = i ? c : function(e, t) {
                if (e = s(e), t = a(t, !0), u) try {
                    return c(e, t)
                } catch (e) {}
                if (l(e, t)) return o(!r.f.call(e, t), e[t])
            }
        }, function(e, t) {
            "use strict";
            var n = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                r = i && !n.call({
                    1: 2
                }, 1);
            t.f = r ? function(e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : n
        }, function(e, t, n) {
            "use strict";
            var i = n(38).IteratorPrototype,
                r = n(40),
                o = n(21),
                s = n(27),
                a = n(10),
                l = function() {
                    return this
                };
            e.exports = function(e, t, n) {
                var u = t + " Iterator";
                return e.prototype = r(i, {
                    next: o(1, n)
                }), s(e, u, !1, !0), a[u] = l, e
            }
        }, function(e, t, n) {
            var i = n(25);
            e.exports = function(e) {
                return Object(i(e))
            }
        }, function(e, t, n) {
            e.exports = !n(12)(function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            })
        }, function(e, t, n) {
            var i = n(6),
                r = n(8),
                o = n(2),
                s = n(70);
            e.exports = i ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, i = s(t), a = i.length, l = 0; a > l;) r.f(e, n = i[l++], t[n]);
                return e
            }
        }, function(e, t, n) {
            var i = n(36),
                r = n(26);
            e.exports = Object.keys || function(e) {
                return i(e, r)
            }
        }, function(e, t, n) {
            var i = n(72);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = {},
                    n = !0;
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), n = t instanceof Array
                } catch (e) {
                    n = !1
                }
                return function(t, r) {
                    return i(t, r), n ? e.call(t, r) : t.__proto__ = r, t
                }
            }() : void 0)
        }, function(e, t, n) {
            var i = n(5),
                r = n(2);
            e.exports = function(e, t) {
                if (r(e), !i(t) && null !== t) throw TypeError(String(t) + ": can't set as a prototype!")
            }
        }, function(e, t, n) {
            var i = n(74),
                r = n(75),
                o = n(0),
                s = n(3),
                a = n(1),
                l = a("iterator"),
                u = a("toStringTag"),
                c = r.values;
            for (var d in i) {
                var p = o[d],
                    h = p && p.prototype;
                if (h) {
                    if (h[l] !== c) try {
                        s(h, l, c)
                    } catch (e) {
                        h[l] = c
                    }
                    if (h[u] || s(h, u, d), i[d])
                        for (var f in r)
                            if (h[f] !== r[f]) try {
                                s(h, f, r[f])
                            } catch (e) {
                                h[f] = r[f]
                            }
                }
            }
        }, function(e) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(16),
                r = n(76),
                o = n(10),
                s = n(15),
                a = n(35),
                l = s.set,
                u = s.getterFor("Array Iterator");
            e.exports = a(Array, "Array", function(e, t) {
                l(this, {
                    type: "Array Iterator",
                    target: i(e),
                    index: 0,
                    kind: t
                })
            }, function() {
                var e = u(this),
                    t = e.target,
                    n = e.kind,
                    i = e.index++;
                return !t || i >= t.length ? (e.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: i,
                    done: !1
                } : "values" == n ? {
                    value: t[i],
                    done: !1
                } : {
                    value: [i, t[i]],
                    done: !1
                }
            }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
        }, function(e, t, n) {
            var i = n(1)("unscopables"),
                r = n(40),
                o = n(3),
                s = Array.prototype;
            null == s[i] && o(s, i, r(null)), e.exports = function(e) {
                s[i][e] = !0
            }
        }, function(e, t, n) {
            "use strict";
            var i, r, o, s = "Promise",
                a = n(13),
                l = n(0),
                u = n(9),
                c = n(5),
                d = n(17),
                p = n(78),
                h = n(7),
                f = n(42),
                m = n(82),
                v = n(44),
                g = n(45).set,
                y = n(83)(),
                b = n(46),
                w = n(84),
                x = n(18),
                T = n(28),
                E = n(85),
                S = n(1)("species"),
                C = n(15),
                k = C.get,
                P = C.set,
                M = C.getterFor(s),
                L = l.Promise,
                O = l.TypeError,
                D = l.document,
                A = l.process,
                I = A && A.versions,
                j = I && I.v8 || "",
                N = x.f,
                $ = N,
                R = "process" == h(A),
                q = !!(D && D.createEvent && l.dispatchEvent),
                _ = !! function() {
                    try {
                        var e = L.resolve(1),
                            t = function() {},
                            n = (e.constructor = {})[S] = function(e) {
                                e(t, t)
                            };
                        return (R || "function" == typeof PromiseRejectionEvent) && (!a || e["finally"]) && e.then(t) instanceof n && 0 !== j.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
                    } catch (e) {}
                }(),
                z = function(e) {
                    var t;
                    return !(!c(e) || "function" != typeof(t = e.then)) && t
                },
                H = function(e, t, n) {
                    if (!t.notified) {
                        t.notified = !0;
                        var i = t.reactions;
                        y(function() {
                            for (var r = t.value, o = 1 == t.state, s = 0, a = function(n) {
                                    var i, s, a, l = o ? n.ok : n.fail,
                                        u = n.resolve,
                                        c = n.reject,
                                        d = n.domain;
                                    try {
                                        l ? (o || (2 === t.rejection && W(e, t), t.rejection = 1), !0 === l ? i = r : (d && d.enter(), i = l(r), d && (d.exit(), a = !0)), i === n.promise ? c(O("Promise-chain cycle")) : (s = z(i)) ? s.call(i, u, c) : u(i)) : c(r)
                                    } catch (e) {
                                        d && !a && d.exit(), c(e)
                                    }
                                }; i.length > s;) a(i[s++]);
                            t.reactions = [], t.notified = !1, n && !t.rejection && F(e, t)
                        })
                    }
                },
                B = function(e, t, n) {
                    var i, r;
                    q ? ((i = D.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), l.dispatchEvent(i)) : i = {
                        promise: t,
                        reason: n
                    }, (r = l["on" + e]) ? r(i) : "unhandledrejection" === e && w("Unhandled promise rejection", n)
                },
                F = function(e, t) {
                    g.call(l, function() {
                        var n, i = t.value,
                            r = V(t);
                        if (r && (n = T(function() {
                                R ? A.emit("unhandledRejection", i, e) : B("unhandledrejection", e, i)
                            }), t.rejection = R || V(t) ? 2 : 1), r && n.e) throw n.v
                    })
                },
                V = function(e) {
                    return 1 !== e.rejection && !e.parent
                },
                W = function(e, t) {
                    g.call(l, function() {
                        R ? A.emit("rejectionHandled", e) : B("rejectionhandled", e, t.value)
                    })
                },
                X = function(e, t, n, i) {
                    return function(r) {
                        e(t, n, r, i)
                    }
                },
                G = function(e, t, n, i) {
                    t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, H(e, t, !0))
                },
                Y = function(e, t, n, i) {
                    if (!t.done) {
                        t.done = !0, i && (t = i);
                        try {
                            if (e === n) throw O("Promise can't be resolved itself!");
                            var r = z(n);
                            r ? y(function() {
                                var i = {
                                    done: !1
                                };
                                try {
                                    r.call(n, X(Y, e, i, t), X(G, e, i, t))
                                } catch (n) {
                                    G(e, i, n, t)
                                }
                            }) : (t.value = n, t.state = 1, H(e, t, !1))
                        } catch (n) {
                            G(e, {
                                done: !1
                            }, n, t)
                        }
                    }
                };
            _ || (L = function(e) {
                p(this, L, s), d(e), i.call(this);
                var t = k(this);
                try {
                    e(X(Y, this, t), X(G, this, t))
                } catch (e) {
                    G(this, t, e)
                }
            }, (i = function() {
                P(this, {
                    type: s,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = n(86)(L.prototype, {
                then: function(e, t) {
                    var n = M(this),
                        i = N(v(this, L));
                    return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = R ? A.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && H(this, n, !1), i.promise
                },
                "catch": function(e) {
                    return this.then(void 0, e)
                }
            }), r = function() {
                var e = new i,
                    t = k(e);
                this.promise = e, this.resolve = X(Y, e, t), this.reject = X(G, e, t)
            }, x.f = N = function(e) {
                return e === L || e === o ? new r(e) : $(e)
            }), u({
                global: !0,
                wrap: !0,
                forced: !_
            }, {
                Promise: L
            }), n(27)(L, s, !1, !0), n(87)(s), o = n(29).Promise, u({
                target: s,
                stat: !0,
                forced: !_
            }, {
                reject: function(e) {
                    var t = N(this);
                    return t.reject.call(void 0, e), t.promise
                }
            }), u({
                target: s,
                stat: !0,
                forced: a || !_
            }, {
                resolve: function(e) {
                    return b(a && this === o ? L : this, e)
                }
            }), u({
                target: s,
                stat: !0,
                forced: !(_ && m(function(e) {
                    L.all(e)["catch"](function() {})
                }))
            }, {
                all: function(e) {
                    var t = this,
                        n = N(t),
                        i = n.resolve,
                        r = n.reject,
                        o = T(function() {
                            var n = [],
                                o = 0,
                                s = 1;
                            f(e, function(e) {
                                var a = o++,
                                    l = !1;
                                n.push(void 0), s++, t.resolve(e).then(function(e) {
                                    l || (l = !0, n[a] = e, --s || i(n))
                                }, r)
                            }), --s || i(n)
                        });
                    return o.e && r(o.v), n.promise
                },
                race: function(e) {
                    var t = this,
                        n = N(t),
                        i = n.reject,
                        r = T(function() {
                            f(e, function(e) {
                                t.resolve(e).then(n.resolve, i)
                            })
                        });
                    return r.e && i(r.v), n.promise
                }
            })
        }, function(e) {
            e.exports = function(e, t, n) {
                if (!(e instanceof t)) throw TypeError((n ? n + ": i" : "I") + "ncorrect invocation!");
                return e
            }
        }, function(e, t, n) {
            var i = n(10),
                r = n(1)("iterator"),
                o = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || o[r] === e)
            }
        }, function(e, t, n) {
            var i = n(30),
                r = n(1)("iterator"),
                o = n(10);
            e.exports = function(e) {
                if (null != e) return e[r] || e["@@iterator"] || o[i(e)]
            }
        }, function(e, t, n) {
            var i = n(2);
            e.exports = function(e, t, n, r) {
                try {
                    return r ? t(i(n)[0], n[1]) : t(n)
                } catch (t) {
                    var o = e["return"];
                    throw void 0 !== o && i(o.call(e)), t
                }
            }
        }, function(e, t, n) {
            var i = n(1)("iterator"),
                r = !1;
            try {
                var o = 0,
                    s = {
                        next: function() {
                            return {
                                done: !!o++
                            }
                        },
                        "return": function() {
                            r = !0
                        }
                    };
                s[i] = function() {
                    return this
                }, Array.from(s, function() {
                    throw 2
                })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !r) return !1;
                var n = !1;
                try {
                    var o = {};
                    o[i] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(o)
                } catch (e) {}
                return n
            }
        }, function(e, t, n) {
            var i = n(0),
                r = n(7),
                o = n(45).set,
                s = i.MutationObserver || i.WebKitMutationObserver,
                a = i.process,
                l = i.Promise,
                u = "process" == r(a);
            e.exports = function() {
                var e, t, n, r = function() {
                    var i, r;
                    for (u && (i = a.domain) && i.exit(); e;) {
                        r = e.fn, e = e.next;
                        try {
                            r()
                        } catch (i) {
                            throw e ? n() : t = void 0, i
                        }
                    }
                    t = void 0, i && i.enter()
                };
                if (u) n = function() {
                    a.nextTick(r)
                };
                else if (!s || i.navigator && i.navigator.standalone)
                    if (l && l.resolve) {
                        var c = l.resolve(void 0);
                        n = function() {
                            c.then(r)
                        }
                    } else n = function() {
                        o.call(i, r)
                    };
                else {
                    var d = !0,
                        p = document.createTextNode("");
                    new s(r).observe(p, {
                        characterData: !0
                    }), n = function() {
                        p.data = d = !d
                    }
                }
                return function(i) {
                    var r = {
                        fn: i,
                        next: void 0
                    };
                    t && (t.next = r), e || (e = r, n()), t = r
                }
            }
        }, function(e, t, n) {
            var i = n(0);
            e.exports = function(e, t) {
                var n = i.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }
        }, function(e, t, n) {
            var i = n(0).navigator;
            e.exports = i && i.userAgent || ""
        }, function(e, t, n) {
            var i = n(14);
            e.exports = function(e, t, n) {
                for (var r in t) i(e, r, t[r], n);
                return e
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(0),
                r = n(8),
                o = n(6),
                s = n(1)("species");
            e.exports = function(e) {
                var t = i[e];
                o && t && !t[s] && r.f(t, s, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(29),
                r = n(0),
                o = n(44),
                s = n(46);
            n(9)({
                target: "Promise",
                proto: !0,
                real: !0
            }, {
                "finally": function(e) {
                    var t = o(this, "function" == typeof i.Promise ? i.Promise : r.Promise),
                        n = "function" == typeof e;
                    return this.then(n ? function(n) {
                        return s(t, e()).then(function() {
                            return n
                        })
                    } : e, n ? function(n) {
                        return s(t, e()).then(function() {
                            throw n
                        })
                    } : e)
                }
            })
        }, function(e, t, n) {
            "use strict";
            var i = n(18),
                r = n(28),
                o = n(42);
            n(9)({
                target: "Promise",
                stat: !0
            }, {
                allSettled: function(e) {
                    var t = this,
                        n = i.f(t),
                        s = n.resolve,
                        a = n.reject,
                        l = r(function() {
                            var n = [],
                                i = 0,
                                r = 1;
                            o(e, function(e) {
                                var o = i++,
                                    a = !1;
                                n.push(void 0), r++, t.resolve(e).then(function(e) {
                                    a || (a = !0, n[o] = {
                                        value: e,
                                        status: "fulfilled"
                                    }, --r || s(n))
                                }, function(e) {
                                    a || (a = !0, n[o] = {
                                        reason: e,
                                        status: "rejected"
                                    }, --r || s(n))
                                })
                            }), --r || s(n)
                        });
                    return l.e && a(l.v), n.promise
                }
            })
        }, function(e, t, n) {
            "use strict";
            var i = n(18),
                r = n(28);
            n(9)({
                target: "Promise",
                stat: !0
            }, {
                "try": function(e) {
                    var t = i.f(this),
                        n = r(e);
                    return (n.e ? t.reject : t.resolve)(n.v), t.promise
                }
            })
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
            t.BeerSlider = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.start,
                        r = void 0 === i ? "50" : i,
                        o = n.prefix,
                        s = void 0 === o ? "beer" : o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.start = parseInt(r) ? Math.min(100, Math.max(0, parseInt(r))) : 50, this.prefix = s, t && 2 === t.children.length && (this.element = t, this.revealContainer = this.element.children[1], this.revealContainer.children.length < 1 || (this.revealElement = this.revealContainer.children[0], this.range = this.addElement("input", {
                        type: "range",
                        "class": this.prefix + "-range",
                        "aria-label": "Percent of revealed content",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-valuenow": this.start,
                        value: this.start,
                        min: "0",
                        max: "100"
                    }), this.handle = this.addElement("span", {
                        "class": this.prefix + "-handle"
                    }), this.onImagesLoad()))
                }
                return n(e, [{
                    key: "init",
                    value: function() {
                        this.element.classList.add(this.prefix + "-ready"), this.setImgWidth(), this.move(), this.addListeners()
                    }
                }, {
                    key: "loadingImg",
                    value: function(e) {
                        return new Promise(function(t, n) {
                            e || t();
                            var i = new Image;
                            i.onload = function() {
                                return t()
                            }, i.onerror = function() {
                                return n()
                            }, i.src = e
                        })
                    }
                }, {
                    key: "loadedBoth",
                    value: function() {
                        var e = this.element.children[0].src || this.element.children[0].getAttribute("data-" + this.prefix + "-src"),
                            t = this.revealElement.src || this.revealElement.getAttribute("data-" + this.prefix + "-src");
                        return Promise.all([this.loadingImg(e), this.loadingImg(t)])
                    }
                }, {
                    key: "onImagesLoad",
                    value: function() {
                        var e = this;
                        this.revealElement && this.loadedBoth().then(function() {
                            e.init()
                        }, function() {
                            console.error("Some errors occurred and images are not loaded.")
                        })
                    }
                }, {
                    key: "addElement",
                    value: function(e, t) {
                        var n = document.createElement(e);
                        return Object.keys(t).forEach(function(e) {
                            n.setAttribute(e, t[e])
                        }), this.element.appendChild(n), n
                    }
                }, {
                    key: "setImgWidth",
                    value: function() {
                        this.revealElement.style.width = getComputedStyle(this.element).width
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        var e = this;
                        ["input", "change"].forEach(function(t) {
                            e.range.addEventListener(t, function() {
                                e.move()
                            })
                        }), window.addEventListener("resize", function() {
                            e.setImgWidth()
                        })
                    }
                }, {
                    key: "move",
                    value: function() {
                        this.revealContainer.style.width = this.range.value + "%", this.handle.style.left = this.range.value + "%", this.range.setAttribute("aria-valuenow", this.range.value)
                    }
                }]), e
            }()
        }])["default"]
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Popper = {})
    }(this, function(e) {
        function t(e) {
            return {
                width: (e = e.getBoundingClientRect()).width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top
            }
        }

        function n(e) {
            return "[object Window]" !== e.toString() ? (e = e.ownerDocument) ? e.defaultView : window : e
        }

        function i(e) {
            return {
                scrollLeft: (e = n(e)).pageXOffset,
                scrollTop: e.pageYOffset
            }
        }

        function r(e) {
            return e instanceof n(e).Element || e instanceof Element
        }

        function o(e) {
            return e instanceof n(e).HTMLElement || e instanceof HTMLElement
        }

        function s(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }

        function a(e) {
            return (r(e) ? e.ownerDocument : e.document).documentElement
        }

        function l(e) {
            return t(a(e)).left + i(e).scrollLeft
        }

        function u(e) {
            return n(e).getComputedStyle(e)
        }

        function c(e) {
            return e = u(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
        }

        function d(e, r, u) {
            void 0 === u && (u = !1);
            var d = a(r);
            e = t(e);
            var p = o(r),
                h = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                f = {
                    x: 0,
                    y: 0
                };
            return (p || !p && !u) && (("body" !== s(r) || c(d)) && (h = r !== n(r) && o(r) ? {
                scrollLeft: r.scrollLeft,
                scrollTop: r.scrollTop
            } : i(r)), o(r) ? ((f = t(r)).x += r.clientLeft, f.y += r.clientTop) : d && (f.x = l(d))), {
                x: e.left + h.scrollLeft - f.x,
                y: e.top + h.scrollTop - f.y,
                width: e.width,
                height: e.height
            }
        }

        function p(e) {
            return {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }

        function h(e) {
            return "html" === s(e) ? e : e.assignedSlot || e.parentNode || e.host || a(e)
        }

        function f(e, t) {
            void 0 === t && (t = []);
            var i = function a(e) {
                return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : o(e) && c(e) ? e : a(h(e))
            }(e);
            e = "body" === s(i);
            var r = n(i);
            return i = e ? [r].concat(r.visualViewport || [], c(i) ? i : []) : i, t = t.concat(i), e ? t : t.concat(f(h(i)))
        }

        function m(e) {
            if (!o(e) || "fixed" === u(e).position) return null;
            if (e = e.offsetParent) {
                var t = a(e);
                if ("body" === s(e) && "static" === u(e).position && "static" !== u(t).position) return t
            }
            return e
        }

        function v(e) {
            for (var t = n(e), i = m(e); i && 0 <= ["table", "td", "th"].indexOf(s(i)) && "static" === u(i).position;) i = m(i);
            if (i && "body" === s(i) && "static" === u(i).position) return t;
            if (!i) e: {
                for (e = h(e); o(e) && 0 > ["html", "body"].indexOf(s(e));) {
                    if ("none" !== (i = u(e)).transform || "none" !== i.perspective || i.willChange && "auto" !== i.willChange) {
                        i = e;
                        break e
                    }
                    e = e.parentNode
                }
                i = null
            }
            return i || t
        }

        function g(e) {
            var t = new Map,
                n = new Set,
                i = [];
            return e.forEach(function(e) {
                t.set(e.name, e)
            }), e.forEach(function(e) {
                n.has(e.name) || function r(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                        n.has(e) || (e = t.get(e)) && r(e)
                    }), i.push(e)
                }(e)
            }), i
        }

        function y(e) {
            var t;
            return function() {
                return t || (t = new Promise(function(n) {
                    Promise.resolve().then(function() {
                        t = void 0, n(e())
                    })
                })), t
            }
        }

        function b(e) {
            return e.split("-")[0]
        }

        function w(e, t) {
            var n = !(!t.getRootNode || !t.getRootNode().host);
            if (e.contains(t)) return !0;
            if (n)
                do {
                    if (t && e.isSameNode(t)) return !0;
                    t = t.parentNode || t.host
                } while (t);
            return !1
        }

        function x(e) {
            return Object.assign(Object.assign({}, e), {}, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }

        function T(e, r) {
            if ("viewport" === r) {
                r = n(e);
                var s = a(e);
                r = r.visualViewport;
                var c = s.clientWidth;
                s = s.clientHeight;
                var d = 0,
                    p = 0;
                r && (c = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = r.offsetLeft, p = r.offsetTop)), e = x(e = {
                    width: c,
                    height: s,
                    x: d + l(e),
                    y: p
                })
            } else o(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (e = a(p = a(e)), d = i(p), r = p.ownerDocument.body, c = Math.max(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Math.max(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), p = -d.scrollLeft + l(p), d = -d.scrollTop, "rtl" === u(r || e).direction && (p += Math.max(e.clientWidth, r ? r.clientWidth : 0) - c), e = x({
                width: c,
                height: s,
                x: p,
                y: d
            }));
            return e
        }

        function E(e, t, n) {
            return t = "clippingParents" === t ? function(e) {
                var t = f(h(e)),
                    n = 0 <= ["absolute", "fixed"].indexOf(u(e).position) && o(e) ? v(e) : e;
                return r(n) ? t.filter(function(e) {
                    return r(e) && w(e, n) && "body" !== s(e)
                }) : []
            }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce(function(t, n) {
                return n = T(e, n), t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
            }, T(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n
        }

        function S(e) {
            return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
        }

        function C(e) {
            var t = e.reference,
                n = e.element,
                i = (e = e.placement) ? b(e) : null;
            e = e ? e.split("-")[1] : null;
            var r = t.x + t.width / 2 - n.width / 2,
                o = t.y + t.height / 2 - n.height / 2;
            switch (i) {
                case "top":
                    r = {
                        x: r,
                        y: t.y - n.height
                    };
                    break;
                case "bottom":
                    r = {
                        x: r,
                        y: t.y + t.height
                    };
                    break;
                case "right":
                    r = {
                        x: t.x + t.width,
                        y: o
                    };
                    break;
                case "left":
                    r = {
                        x: t.x - n.width,
                        y: o
                    };
                    break;
                default:
                    r = {
                        x: t.x,
                        y: t.y
                    }
            }
            if (null != (i = i ? S(i) : null)) switch (o = "y" === i ? "height" : "width", e) {
                case "start":
                    r[i] = Math.floor(r[i]) - Math.floor(t[o] / 2 - n[o] / 2);
                    break;
                case "end":
                    r[i] = Math.floor(r[i]) + Math.ceil(t[o] / 2 - n[o] / 2)
            }
            return r
        }

        function k(e) {
            return Object.assign(Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }), e)
        }

        function P(e, t) {
            return t.reduce(function(t, n) {
                return t[n] = e, t
            }, {})
        }

        function M(e, n) {
            void 0 === n && (n = {});
            var i = n;
            n = void 0 === (n = i.placement) ? e.placement : n;
            var o = i.boundary,
                s = void 0 === o ? "clippingParents" : o,
                l = void 0 === (o = i.rootBoundary) ? "viewport" : o;
            o = void 0 === (o = i.elementContext) ? "popper" : o;
            var u = i.altBoundary,
                c = void 0 !== u && u;
            i = k("number" != typeof(i = void 0 === (i = i.padding) ? 0 : i) ? i : P(i, $));
            var d = e.elements.reference;
            u = e.rects.popper, s = E(r(c = e.elements[c ? "popper" === o ? "reference" : "popper" : o]) ? c : c.contextElement || a(e.elements.popper), s, l), c = C({
                reference: l = t(d),
                element: u,
                strategy: "absolute",
                placement: n
            }), u = x(Object.assign(Object.assign({}, u), c)), l = "popper" === o ? u : l;
            var p = {
                top: s.top - l.top + i.top,
                bottom: l.bottom - s.bottom + i.bottom,
                left: s.left - l.left + i.left,
                right: l.right - s.right + i.right
            };
            if (e = e.modifiersData.offset, "popper" === o && e) {
                var h = e[n];
                Object.keys(p).forEach(function(e) {
                    var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                        n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                    p[e] += h[n] * t
                })
            }
            return p
        }

        function L() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some(function(e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            })
        }

        function O(e) {
            void 0 === e && (e = {});
            var t = e.defaultModifiers,
                n = void 0 === t ? [] : t,
                i = void 0 === (e = e.defaultOptions) ? z : e;
            return function(e, t, o) {
                function s() {
                    l.forEach(function(e) {
                        return e()
                    }), l = []
                }
                void 0 === o && (o = i);
                var a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign(Object.assign({}, z), i),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    l = [],
                    u = !1,
                    c = {
                        state: a,
                        setOptions: function(o) {
                            return s(), a.options = Object.assign(Object.assign(Object.assign({}, i), a.options), o), a.scrollParents = {
                                reference: r(e) ? f(e) : e.contextElement ? f(e.contextElement) : [],
                                popper: f(t)
                            }, o = function(e) {
                                var t = g(e);
                                return _.reduce(function(e, n) {
                                    return e.concat(t.filter(function(e) {
                                        return e.phase === n
                                    }))
                                }, [])
                            }(function() {
                                var e = [].concat(n, a.options.modifiers).reduce(function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                                        options: Object.assign(Object.assign({}, n.options), t.options),
                                        data: Object.assign(Object.assign({}, n.data), t.data)
                                    }) : t, e
                                }, {});
                                return Object.keys(e).map(function(t) {
                                    return e[t]
                                })
                            }()), a.orderedModifiers = o.filter(function(e) {
                                return e.enabled
                            }), a.orderedModifiers.forEach(function(e) {
                                var t = e.name,
                                    n = e.options;
                                n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({
                                    state: a,
                                    name: t,
                                    instance: c,
                                    options: n
                                }), l.push(t || function() {}))
                            }), c.update()
                        },
                        forceUpdate: function() {
                            if (!u) {
                                var e = a.elements,
                                    t = e.reference;
                                if (L(t, e = e.popper))
                                    for (a.rects = {
                                            reference: d(t, v(e), "fixed" === a.options.strategy),
                                            popper: p(e)
                                        }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        }), t = 0; t < a.orderedModifiers.length; t++)
                                        if (!0 === a.reset) a.reset = !1, t = -1;
                                        else {
                                            var n = a.orderedModifiers[t];
                                            e = n.fn;
                                            var i = n.options;
                                            i = void 0 === i ? {} : i, n = n.name, "function" == typeof e && (a = e({
                                                state: a,
                                                options: i,
                                                name: n,
                                                instance: c
                                            }) || a)
                                        }
                            }
                        },
                        update: y(function() {
                            return new Promise(function(e) {
                                c.forceUpdate(), e(a)
                            })
                        }),
                        destroy: function() {
                            s(), u = !0
                        }
                    };
                return L(e, t) ? (c.setOptions(o).then(function(e) {
                    !u && o.onFirstUpdate && o.onFirstUpdate(e)
                }), c) : c
            }
        }

        function D(e) {
            var t, i = e.popper,
                r = e.popperRect,
                o = e.placement,
                s = e.offsets,
                l = e.position,
                u = e.gpuAcceleration,
                c = e.adaptive,
                d = window.devicePixelRatio || 1;
            e = Math.round(s.x * d) / d || 0, d = Math.round(s.y * d) / d || 0;
            var p = s.hasOwnProperty("x");
            s = s.hasOwnProperty("y");
            var h, f = "left",
                m = "top",
                g = window;
            if (c) {
                var y = v(i);
                y === n(i) && (y = a(i)), "top" === o && (m = "bottom", d -= y.clientHeight - r.height, d *= u ? 1 : -1), "left" === o && (f = "right", e -= y.clientWidth - r.width, e *= u ? 1 : -1)
            }
            return i = Object.assign({
                position: l
            }, c && B), u ? Object.assign(Object.assign({}, i), {}, ((h = {})[m] = s ? "0" : "", h[f] = p ? "0" : "", h.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + d + "px)" : "translate3d(" + e + "px, " + d + "px, 0)", h)) : Object.assign(Object.assign({}, i), {}, ((t = {})[m] = s ? d + "px" : "", t[f] = p ? e + "px" : "", t.transform = "", t))
        }

        function A(e) {
            return e.replace(/left|right|bottom|top/g, function(e) {
                return F[e]
            })
        }

        function I(e) {
            return e.replace(/start|end/g, function(e) {
                return V[e]
            })
        }

        function j(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }), {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }

        function N(e) {
            return ["top", "right", "bottom", "left"].some(function(t) {
                return 0 <= e[t]
            })
        }
        var $ = ["top", "bottom", "right", "left"],
            R = $.reduce(function(e, t) {
                return e.concat([t + "-start", t + "-end"])
            }, []),
            q = [].concat($, ["auto"]).reduce(function(e, t) {
                return e.concat([t, t + "-start", t + "-end"])
            }, []),
            _ = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
            z = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            },
            H = {
                passive: !0
            },
            B = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            },
            F = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            },
            V = {
                start: "end",
                end: "start"
            },
            W = [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        i = e.instance,
                        r = (e = e.options).scroll,
                        o = void 0 === r || r,
                        s = void 0 === (e = e.resize) || e,
                        a = n(t.elements.popper),
                        l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return o && l.forEach(function(e) {
                            e.addEventListener("scroll", i.update, H)
                        }), s && a.addEventListener("resize", i.update, H),
                        function() {
                            o && l.forEach(function(e) {
                                e.removeEventListener("scroll", i.update, H)
                            }), s && a.removeEventListener("resize", i.update, H)
                        }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state;
                    t.modifiersData[e.name] = C({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state,
                        n = e.options;
                    e = void 0 === (e = n.gpuAcceleration) || e, n = void 0 === (n = n.adaptive) || n, e = {
                        placement: b(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: e
                    }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), D(Object.assign(Object.assign({}, e), {}, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: n
                    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), D(Object.assign(Object.assign({}, e), {}, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1
                    })))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function(e) {
                        var n = t.styles[e] || {},
                            i = t.attributes[e] || {},
                            r = t.elements[e];
                        o(r) && s(r) && (Object.assign(r.style, n), Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                        }))
                    })
                },
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach(function(e) {
                                var i = t.elements[e],
                                    r = t.attributes[e] || {};
                                e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                    return e[t] = "", e
                                }, {}), o(i) && s(i) && (Object.assign(i.style, e), Object.keys(r).forEach(function(e) {
                                    i.removeAttribute(e)
                                }))
                            })
                        }
                },
                requires: ["computeStyles"]
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.name,
                        i = void 0 === (e = e.options.offset) ? [0, 0] : e,
                        r = (e = q.reduce(function(e, n) {
                            var r = t.rects,
                                o = b(n),
                                s = 0 <= ["left", "top"].indexOf(o) ? -1 : 1,
                                a = "function" == typeof i ? i(Object.assign(Object.assign({}, r), {}, {
                                    placement: n
                                })) : i;
                            return r = (r = a[0]) || 0, a = ((a = a[1]) || 0) * s, o = 0 <= ["left", "right"].indexOf(o) ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }, e[n] = o, e
                        }, {}))[t.placement],
                        o = r.x;
                    r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += o, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options;
                    if (e = e.name, !t.modifiersData[e]._skip) {
                        var i = n.mainAxis;
                        i = void 0 === i || i;
                        var r = n.altAxis;
                        r = void 0 === r || r;
                        var o = n.fallbackPlacements,
                            s = n.padding,
                            a = n.boundary,
                            l = n.rootBoundary,
                            u = n.altBoundary,
                            c = n.flipVariations,
                            d = void 0 === c || c,
                            p = n.allowedAutoPlacements;
                        c = b(n = t.options.placement), o = o || (c !== n && d ? function(e) {
                            if ("auto" === b(e)) return [];
                            var t = A(e);
                            return [I(e), t, I(t)]
                        }(n) : [A(n)]);
                        var h = [n].concat(o).reduce(function(e, n) {
                            return e.concat("auto" === b(n) ? function(e, t) {
                                void 0 === t && (t = {});
                                var n = t.boundary,
                                    i = t.rootBoundary,
                                    r = t.padding,
                                    o = t.flipVariations,
                                    s = t.allowedAutoPlacements,
                                    a = void 0 === s ? q : s,
                                    l = t.placement.split("-")[1];
                                0 === (o = (t = l ? o ? R : R.filter(function(e) {
                                    return e.split("-")[1] === l
                                }) : $).filter(function(e) {
                                    return 0 <= a.indexOf(e)
                                })).length && (o = t);
                                var u = o.reduce(function(t, o) {
                                    return t[o] = M(e, {
                                        placement: o,
                                        boundary: n,
                                        rootBoundary: i,
                                        padding: r
                                    })[b(o)], t
                                }, {});
                                return Object.keys(u).sort(function(e, t) {
                                    return u[e] - u[t]
                                })
                            }(t, {
                                placement: n,
                                boundary: a,
                                rootBoundary: l,
                                padding: s,
                                flipVariations: d,
                                allowedAutoPlacements: p
                            }) : n)
                        }, []);
                        n = t.rects.reference, o = t.rects.popper;
                        var f = new Map;
                        c = !0;
                        for (var m = h[0], v = 0; v < h.length; v++) {
                            var g = h[v],
                                y = b(g),
                                w = "start" === g.split("-")[1],
                                x = 0 <= ["top", "bottom"].indexOf(y),
                                T = x ? "width" : "height",
                                E = M(t, {
                                    placement: g,
                                    boundary: a,
                                    rootBoundary: l,
                                    altBoundary: u,
                                    padding: s
                                });
                            if (w = x ? w ? "right" : "left" : w ? "bottom" : "top", n[T] > o[T] && (w = A(w)), T = A(w), x = [], i && x.push(0 >= E[y]), r && x.push(0 >= E[w], 0 >= E[T]), x.every(function(e) {
                                    return e
                                })) {
                                m = g, c = !1;
                                break
                            }
                            f.set(g, x)
                        }
                        if (c)
                            for (i = function(e) {
                                    var t = h.find(function(t) {
                                        if (t = f.get(t)) return t.slice(0, e).every(function(e) {
                                            return e
                                        })
                                    });
                                    if (t) return m = t, "break"
                                }, r = d ? 3 : 1; 0 < r && "break" !== i(r); r--);
                        t.placement !== m && (t.modifiersData[e]._skip = !0, t.placement = m, t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options;
                    e = e.name;
                    var i = n.mainAxis,
                        r = void 0 === i || i;
                    i = void 0 !== (i = n.altAxis) && i;
                    var o = n.tether;
                    o = void 0 === o || o;
                    var s = n.tetherOffset,
                        a = void 0 === s ? 0 : s;
                    n = M(t, {
                        boundary: n.boundary,
                        rootBoundary: n.rootBoundary,
                        padding: n.padding,
                        altBoundary: n.altBoundary
                    }), s = b(t.placement);
                    var l = t.placement.split("-")[1],
                        u = !l,
                        c = S(s);
                    s = "x" === c ? "y" : "x";
                    var d = t.modifiersData.popperOffsets,
                        h = t.rects.reference,
                        f = t.rects.popper,
                        m = "function" == typeof a ? a(Object.assign(Object.assign({}, t.rects), {}, {
                            placement: t.placement
                        })) : a;
                    if (a = {
                            x: 0,
                            y: 0
                        }, d) {
                        if (r) {
                            var g = "y" === c ? "top" : "left",
                                y = "y" === c ? "bottom" : "right",
                                w = "y" === c ? "height" : "width";
                            r = d[c];
                            var x = d[c] + n[g],
                                T = d[c] - n[y],
                                E = o ? -f[w] / 2 : 0,
                                C = "start" === l ? h[w] : f[w];
                            l = "start" === l ? -f[w] : -h[w], f = t.elements.arrow, f = o && f ? p(f) : {
                                width: 0,
                                height: 0
                            };
                            var k = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            };
                            g = k[g], y = k[y], f = Math.max(0, Math.min(h[w], f[w])), C = u ? h[w] / 2 - E - f - g - m : C - f - g - m, u = u ? -h[w] / 2 + E + f + y + m : l + f + y + m, m = t.elements.arrow && v(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][c] : 0, m = d[c] + C - h - (m ? "y" === c ? m.clientTop || 0 : m.clientLeft || 0 : 0), u = d[c] + u - h, o = Math.max(o ? Math.min(x, m) : x, Math.min(r, o ? Math.max(T, u) : T)), d[c] = o, a[c] = o - r
                        }
                        i && (i = d[s], o = Math.max(i + n["x" === c ? "top" : "left"], Math.min(i, i - n["x" === c ? "bottom" : "right"])), d[s] = o, a[s] = o - i), t.modifiersData[e] = a
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state;
                    e = e.name;
                    var i = n.elements.arrow,
                        r = n.modifiersData.popperOffsets,
                        o = b(n.placement),
                        s = S(o);
                    if (o = 0 <= ["left", "right"].indexOf(o) ? "height" : "width", i && r) {
                        var a = n.modifiersData[e + "#persistent"].padding,
                            l = p(i),
                            u = "y" === s ? "top" : "left",
                            c = "y" === s ? "bottom" : "right",
                            d = n.rects.reference[o] + n.rects.reference[s] - r[s] - n.rects.popper[o];
                        r = r[s] - n.rects.reference[s], d = (i = (i = v(i)) ? "y" === s ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - l[o] / 2 + (d / 2 - r / 2), o = Math.max(a[u], Math.min(d, i - l[o] - a[c])), n.modifiersData[e] = ((t = {})[s] = o, t.centerOffset = o - d, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options;
                    e = e.name;
                    var i = n.element;
                    if (i = void 0 === i ? "[data-popper-arrow]" : i, n = void 0 === (n = n.padding) ? 0 : n, null != i) {
                        if ("string" == typeof i && !(i = t.elements.popper.querySelector(i))) return;
                        w(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[e + "#persistent"] = {
                            padding: k("number" != typeof n ? n : P(n, $))
                        })
                    }
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(e) {
                    var t = e.state;
                    e = e.name;
                    var n = t.rects.reference,
                        i = t.rects.popper,
                        r = t.modifiersData.preventOverflow,
                        o = M(t, {
                            elementContext: "reference"
                        }),
                        s = M(t, {
                            altBoundary: !0
                        });
                    n = j(o, n), i = j(s, i, r), r = N(n), s = N(i), t.modifiersData[e] = {
                        referenceClippingOffsets: n,
                        popperEscapeOffsets: i,
                        isReferenceHidden: r,
                        hasPopperEscaped: s
                    }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                        "data-popper-reference-hidden": r,
                        "data-popper-escaped": s
                    })
                }
            }],
            X = O({
                defaultModifiers: W
            });
        e.createPopper = X, e.defaultModifiers = W, e.detectOverflow = M, e.popperGenerator = O, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = e || self).tippy = t(e.Popper)
    }(this, function(e) {
        "use strict";

        function t(e, t, n) {
            if (Array.isArray(e)) {
                var i = e[t];
                return null == i ? Array.isArray(n) ? n[t] : n : i
            }
            return e
        }

        function n(e, t) {
            var n = {}.toString.call(e);
            return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
        }

        function i(e, t) {
            return "function" == typeof e ? e.apply(void 0, t) : e
        }

        function r(e, t) {
            return 0 === t ? e : function(i) {
                clearTimeout(n), n = setTimeout(function() {
                    e(i)
                }, t)
            };
            var n
        }

        function o(e, t) {
            var n = Object.assign({}, e);
            return t.forEach(function(e) {
                delete n[e]
            }), n
        }

        function s(e) {
            return [].concat(e)
        }

        function a(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }

        function l(e) {
            return e.split("-")[0]
        }

        function u(e) {
            return [].slice.call(e)
        }

        function c() {
            return document.createElement("div")
        }

        function d(e) {
            return ["Element", "Fragment"].some(function(t) {
                return n(e, t)
            })
        }

        function p(e) {
            return n(e, "MouseEvent")
        }

        function h(e) {
            return !(!e || !e._tippy || e._tippy.reference !== e)
        }

        function f(e) {
            return d(e) ? [e] : function(e) {
                return n(e, "NodeList")
            }(e) ? u(e) : Array.isArray(e) ? e : u(document.querySelectorAll(e))
        }

        function m(e, t) {
            e.forEach(function(e) {
                e && (e.style.transitionDuration = t + "ms")
            })
        }

        function v(e, t) {
            e.forEach(function(e) {
                e && e.setAttribute("data-state", t)
            })
        }

        function g(e) {
            var t = s(e)[0];
            return t && t.ownerDocument || document
        }

        function y(e, t, n) {
            var i = t + "EventListener";
            ["transitionend", "webkitTransitionEnd"].forEach(function(t) {
                e[i](t, n)
            })
        }

        function b() {
            j.isTouch || (j.isTouch = !0, window.performance && document.addEventListener("mousemove", w))
        }

        function w() {
            var e = performance.now();
            e - N < 20 && (j.isTouch = !1, document.removeEventListener("mousemove", w)), N = e
        }

        function x() {
            var e = document.activeElement;
            if (h(e)) {
                var t = e._tippy;
                e.blur && !t.state.isVisible && e.blur()
            }
        }

        function T(e) {
            var t = (e.plugins || []).reduce(function(t, n) {
                var i = n.name,
                    r = n.defaultValue;
                return i && (t[i] = void 0 !== e[i] ? e[i] : r), t
            }, {});
            return Object.assign({}, e, {}, t)
        }

        function E(e, t) {
            var n = Object.assign({}, t, {
                content: i(t.content, [e])
            }, t.ignoreAttributes ? {} : function(e, t) {
                return (t ? Object.keys(T(Object.assign({}, q, {
                    plugins: t
                }))) : _).reduce(function(t, n) {
                    var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                    if (!i) return t;
                    if ("content" === n) t[n] = i;
                    else try {
                        t[n] = JSON.parse(i)
                    } catch (e) {
                        t[n] = i
                    }
                    return t
                }, {})
            }(e, t.plugins));
            return n.aria = Object.assign({}, q.aria, {}, n.aria), n.aria = {
                expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
                content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
            }, n
        }

        function S(e, t) {
            e.innerHTML = t
        }

        function C(e) {
            var t = c();
            return !0 === e ? t.className = "tippy-arrow" : (t.className = "tippy-svg-arrow", d(e) ? t.appendChild(e) : S(t, e)), t
        }

        function k(e, t) {
            d(t.content) ? (S(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? S(e, t.content) : e.textContent = t.content)
        }

        function P(e) {
            var t = e.firstElementChild,
                n = u(t.children);
            return {
                box: t,
                content: n.find(function(e) {
                    return e.classList.contains("tippy-content")
                }),
                arrow: n.find(function(e) {
                    return e.classList.contains("tippy-arrow") || e.classList.contains("tippy-svg-arrow")
                }),
                backdrop: n.find(function(e) {
                    return e.classList.contains("tippy-backdrop")
                })
            }
        }

        function M(e) {
            function t(t, i) {
                var r = P(n),
                    o = r.box,
                    s = r.content,
                    a = r.arrow;
                i.theme ? o.setAttribute("data-theme", i.theme) : o.removeAttribute("data-theme"), "string" == typeof i.animation ? o.setAttribute("data-animation", i.animation) : o.removeAttribute("data-animation"), i.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth, i.role ? o.setAttribute("role", i.role) : o.removeAttribute("role"), t.content === i.content && t.allowHTML === i.allowHTML || k(s, e.props), i.arrow ? a ? t.arrow !== i.arrow && (o.removeChild(a), o.appendChild(C(i.arrow))) : o.appendChild(C(i.arrow)) : a && o.removeChild(a)
            }
            var n = c(),
                i = c();
            i.className = "tippy-box", i.setAttribute("data-state", "hidden"), i.setAttribute("tabindex", "-1");
            var r = c();
            return r.className = "tippy-content", r.setAttribute("data-state", "hidden"), k(r, e.props), n.appendChild(i), i.appendChild(r), t(e.props, e.props), {
                popper: n,
                onUpdate: t
            }
        }

        function L(n, o) {
            function d() {
                var e = xe.props.touch;
                return Array.isArray(e) ? e : [e, 0]
            }

            function h() {
                return "hold" === d()[0]
            }

            function f() {
                var e;
                return !!(null == (e = xe.props.render) ? void 0 : e.$$tippy)
            }

            function b() {
                return ue || n
            }

            function w() {
                return P(Ee)
            }

            function x(e) {
                return xe.state.isMounted && !xe.state.isVisible || j.isTouch || se && "focus" === se.type ? 0 : t(xe.props.delay, e ? 0 : 1, q.delay)
            }

            function S() {
                Ee.style.pointerEvents = xe.props.interactive && xe.state.isVisible ? "" : "none", Ee.style.zIndex = "" + xe.props.zIndex
            }

            function C(e, t, n) {
                var i;
                void 0 === n && (n = !0), Ce.forEach(function(n) {
                    n[e] && n[e].apply(void 0, t)
                }), n && (i = xe.props)[e].apply(i, t)
            }

            function k() {
                var e = xe.props.aria;
                if (e.content) {
                    var t = "aria-" + e.content,
                        i = Ee.id;
                    s(xe.props.triggerTarget || n).forEach(function(e) {
                        var n = e.getAttribute(t);
                        if (xe.state.isVisible) e.setAttribute(t, n ? n + " " + i : i);
                        else {
                            var r = n && n.replace(i, "").trim();
                            r ? e.setAttribute(t, r) : e.removeAttribute(t)
                        }
                    })
                }
            }

            function M() {
                !ke && xe.props.aria.expanded && s(xe.props.triggerTarget || n).forEach(function(e) {
                    xe.props.interactive ? e.setAttribute("aria-expanded", xe.state.isVisible && e === b() ? "true" : "false") : e.removeAttribute("aria-expanded")
                })
            }

            function L() {
                ye.removeEventListener("mousemove", ge), H = H.filter(function(e) {
                    return e !== ge
                })
            }

            function O(e) {
                if (!(j.isTouch && (fe || "mousedown" === e.type) || xe.props.interactive && Ee.contains(e.target))) {
                    if (b().contains(e.target)) {
                        if (j.isTouch) return;
                        if (xe.state.isVisible && xe.props.trigger.indexOf("click") >= 0) return
                    } else C("onClickOutside", [xe, e]);
                    !0 === xe.props.hideOnClick && (xe.clearDelayTimeouts(), xe.hide(), he = !0, setTimeout(function() {
                        he = !1
                    }), xe.state.isMounted || $())
                }
            }

            function D() {
                fe = !0
            }

            function A() {
                fe = !1
            }

            function N() {
                ye.addEventListener("mousedown", O, !0), ye.addEventListener("touchend", O, I), ye.addEventListener("touchstart", A, I), ye.addEventListener("touchmove", D, I)
            }

            function $() {
                ye.removeEventListener("mousedown", O, !0), ye.removeEventListener("touchend", O, I), ye.removeEventListener("touchstart", A, I), ye.removeEventListener("touchmove", D, I)
            }

            function _(e, t) {
                function n(e) {
                    e.target === i && (y(i, "remove", n), t())
                }
                var i = w().box;
                if (0 === e) return t();
                y(i, "remove", ae), y(i, "add", n), ae = n
            }

            function F(e, t, i) {
                void 0 === i && (i = !1), s(xe.props.triggerTarget || n).forEach(function(n) {
                    n.addEventListener(e, t, i), ve.push({
                        node: n,
                        eventType: e,
                        handler: t,
                        options: i
                    })
                })
            }

            function V() {
                var e;
                h() && (F("touchstart", X, {
                    passive: !0
                }), F("touchend", Y, {
                    passive: !0
                })), (e = xe.props.trigger, e.split(/\s+/).filter(Boolean)).forEach(function(e) {
                    if ("manual" !== e) switch (F(e, X), e) {
                        case "mouseenter":
                            F("mouseleave", Y);
                            break;
                        case "focus":
                            F(R ? "focusout" : "blur", U);
                            break;
                        case "focusin":
                            F("focusout", U)
                    }
                })
            }

            function W() {
                ve.forEach(function(e) {
                    var t = e.node,
                        n = e.eventType,
                        i = e.handler,
                        r = e.options;
                    t.removeEventListener(n, i, r)
                }), ve = []
            }

            function X(e) {
                var t, n = !1;
                if (xe.state.isEnabled && !K(e) && !he) {
                    var i = "focus" === (null == (t = se) ? void 0 : t.type);
                    se = e, ue = e.currentTarget, M(), !xe.state.isVisible && p(e) && H.forEach(function(t) {
                        return t(e)
                    }), "click" === e.type && (xe.props.trigger.indexOf("mouseenter") < 0 || pe) && !1 !== xe.props.hideOnClick && xe.state.isVisible ? n = !0 : ee(e), "click" === e.type && (pe = !n), n && !i && te(e)
                }
            }

            function G(e) {
                var t = e.target,
                    n = b().contains(t) || Ee.contains(t);
                "mousemove" === e.type && n || function(e, t) {
                    var n = t.clientX,
                        i = t.clientY;
                    return e.every(function(e) {
                        var t = e.popperRect,
                            r = e.popperState,
                            o = e.props.interactiveBorder,
                            s = l(r.placement),
                            a = r.modifiersData.offset;
                        if (!a) return !0;
                        var u = "bottom" === s ? a.top.y : 0,
                            c = "top" === s ? a.bottom.y : 0,
                            d = "right" === s ? a.left.x : 0,
                            p = "left" === s ? a.right.x : 0,
                            h = t.top - i + u > o,
                            f = i - t.bottom - c > o,
                            m = t.left - n + d > o,
                            v = n - t.right - p > o;
                        return h || f || m || v
                    })
                }(Z().concat(Ee).map(function(e) {
                    var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                    return n ? {
                        popperRect: e.getBoundingClientRect(),
                        popperState: n,
                        props: de
                    } : null
                }).filter(Boolean), e) && (L(), te(e))
            }

            function Y(e) {
                K(e) || xe.props.trigger.indexOf("click") >= 0 && pe || (xe.props.interactive ? xe.hideWithInteractivity(e) : te(e))
            }

            function U(e) {
                xe.props.trigger.indexOf("focusin") < 0 && e.target !== b() || xe.props.interactive && e.relatedTarget && Ee.contains(e.relatedTarget) || te(e)
            }

            function K(e) {
                return !!j.isTouch && h() !== e.type.indexOf("touch") >= 0
            }

            function Q() {
                J();
                var t = xe.props,
                    i = t.popperOptions,
                    r = t.placement,
                    o = t.offset,
                    s = t.getReferenceClientRect,
                    a = t.moveTransition,
                    l = f() ? P(Ee).arrow : null,
                    u = s ? {
                        getBoundingClientRect: s,
                        contextElement: s.contextElement || b()
                    } : n,
                    c = [{
                        name: "offset",
                        options: {
                            offset: o
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            padding: {
                                top: 2,
                                bottom: 2,
                                left: 5,
                                right: 5
                            }
                        }
                    }, {
                        name: "flip",
                        options: {
                            padding: 5
                        }
                    }, {
                        name: "computeStyles",
                        options: {
                            adaptive: !a
                        }
                    }, {
                        name: "$$tippy",
                        enabled: !0,
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        fn: function(e) {
                            var t = e.state;
                            if (f()) {
                                var n = w().box;
                                ["placement", "reference-hidden", "escaped"].forEach(function(e) {
                                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                }), t.attributes.popper = {}
                            }
                        }
                    }];
                f() && l && c.push({
                    name: "arrow",
                    options: {
                        element: l,
                        padding: 3
                    }
                }), c.push.apply(c, (null == i ? void 0 : i.modifiers) || []), xe.popperInstance = e.createPopper(u, Ee, Object.assign({}, i, {
                    placement: r,
                    onFirstUpdate: le,
                    modifiers: c
                }))
            }

            function J() {
                xe.popperInstance && (xe.popperInstance.destroy(), xe.popperInstance = null)
            }

            function Z() {
                return u(Ee.querySelectorAll("[data-tippy-root]"))
            }

            function ee(e) {
                xe.clearDelayTimeouts(), e && C("onTrigger", [xe, e]), N();
                var t = x(!0),
                    n = d(),
                    i = n[0],
                    r = n[1];
                j.isTouch && "hold" === i && r && (t = r), t ? ie = setTimeout(function() {
                    xe.show()
                }, t) : xe.show()
            }

            function te(e) {
                if (xe.clearDelayTimeouts(), C("onUntrigger", [xe, e]), xe.state.isVisible) {
                    if (!(xe.props.trigger.indexOf("mouseenter") >= 0 && xe.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && pe)) {
                        var t = x(!1);
                        t ? re = setTimeout(function() {
                            xe.state.isVisible && xe.hide()
                        }, t) : oe = requestAnimationFrame(function() {
                            xe.hide()
                        })
                    }
                } else $()
            }
            var ne, ie, re, oe, se, ae, le, ue, ce, de = E(n, Object.assign({}, q, {}, T((ne = o, Object.keys(ne).reduce(function(e, t) {
                    return void 0 !== ne[t] && (e[t] = ne[t]), e
                }, {}))))),
                pe = !1,
                he = !1,
                fe = !1,
                me = !1,
                ve = [],
                ge = r(G, de.interactiveDebounce),
                ye = g(de.triggerTarget || n),
                be = z++,
                we = (ce = de.plugins).filter(function(e, t) {
                    return ce.indexOf(e) === t
                }),
                xe = {
                    id: be,
                    reference: n,
                    popper: c(),
                    popperInstance: null,
                    props: de,
                    state: {
                        isEnabled: !0,
                        isVisible: !1,
                        isDestroyed: !1,
                        isMounted: !1,
                        isShown: !1
                    },
                    plugins: we,
                    clearDelayTimeouts: function() {
                        clearTimeout(ie), clearTimeout(re), cancelAnimationFrame(oe)
                    },
                    setProps: function(e) {
                        if (!xe.state.isDestroyed) {
                            C("onBeforeUpdate", [xe, e]), W();
                            var t = xe.props,
                                i = E(n, Object.assign({}, xe.props, {}, e, {
                                    ignoreAttributes: !0
                                }));
                            xe.props = i, V(), t.interactiveDebounce !== i.interactiveDebounce && (L(), ge = r(G, i.interactiveDebounce)), t.triggerTarget && !i.triggerTarget ? s(t.triggerTarget).forEach(function(e) {
                                e.removeAttribute("aria-expanded")
                            }) : i.triggerTarget && n.removeAttribute("aria-expanded"), M(), S(), Se && Se(t, i), xe.popperInstance && (Q(), Z().forEach(function(e) {
                                requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                            })), C("onAfterUpdate", [xe, e])
                        }
                    },
                    setContent: function(e) {
                        xe.setProps({
                            content: e
                        })
                    },
                    show: function() {
                        var e = xe.state.isVisible,
                            n = xe.state.isDestroyed,
                            r = !xe.state.isEnabled,
                            o = j.isTouch && !xe.props.touch,
                            s = t(xe.props.duration, 0, q.duration);
                        if (!(e || n || r || o || b().hasAttribute("disabled") || (C("onShow", [xe], !1), !1 === xe.props.onShow(xe)))) {
                            if (xe.state.isVisible = !0, f() && (Ee.style.visibility = "visible"), S(), N(), xe.state.isMounted || (Ee.style.transition = "none"), f()) {
                                var l = w();
                                m([l.box, l.content], 0)
                            }
                            le = function() {
                                    if (xe.state.isVisible && !me) {
                                        if (me = !0, Ee.offsetHeight, Ee.style.transition = xe.props.moveTransition, f() && xe.props.animation) {
                                            var e = w(),
                                                t = e.box,
                                                n = e.content;
                                            m([t, n], s), v([t, n], "visible")
                                        }
                                        k(), M(), a(B, xe), xe.state.isMounted = !0, C("onMount", [xe]), xe.props.animation && f() && _(s, function() {
                                            xe.state.isShown = !0, C("onShown", [xe])
                                        })
                                    }
                                },
                                function() {
                                    var e, t = xe.props.appendTo,
                                        n = b();
                                    (e = xe.props.interactive && t === q.appendTo || "parent" === t ? n.parentNode : i(t, [n])).contains(Ee) || e.appendChild(Ee), Q()
                                }()
                        }
                    },
                    hide: function() {
                        var e = !xe.state.isVisible,
                            n = xe.state.isDestroyed,
                            i = !xe.state.isEnabled,
                            r = t(xe.props.duration, 1, q.duration);
                        if (!(e || n || i) && (C("onHide", [xe], !1), !1 !== xe.props.onHide(xe))) {
                            if (xe.state.isVisible = !1, xe.state.isShown = !1, me = !1, pe = !1, f() && (Ee.style.visibility = "hidden"), L(), $(), S(), f()) {
                                var o = w(),
                                    s = o.box,
                                    a = o.content;
                                xe.props.animation && (m([s, a], r), v([s, a], "hidden"))
                            }
                            k(), M(), xe.props.animation ? f() && function(e, t) {
                                _(e, function() {
                                    !xe.state.isVisible && Ee.parentNode && Ee.parentNode.contains(Ee) && t()
                                })
                            }(r, xe.unmount) : xe.unmount()
                        }
                    },
                    hideWithInteractivity: function(e) {
                        ye.addEventListener("mousemove", ge), a(H, ge), ge(e)
                    },
                    enable: function() {
                        xe.state.isEnabled = !0
                    },
                    disable: function() {
                        xe.hide(), xe.state.isEnabled = !1
                    },
                    unmount: function() {
                        xe.state.isVisible && xe.hide(), xe.state.isMounted && (J(), Z().forEach(function(e) {
                            e._tippy.unmount()
                        }), Ee.parentNode && Ee.parentNode.removeChild(Ee), B = B.filter(function(e) {
                            return e !== xe
                        }), xe.state.isMounted = !1, C("onHidden", [xe]))
                    },
                    destroy: function() {
                        xe.state.isDestroyed || (xe.clearDelayTimeouts(), xe.unmount(), W(), delete n._tippy, xe.state.isDestroyed = !0, C("onDestroy", [xe]))
                    }
                };
            if (!de.render) return xe;
            var Te = de.render(xe),
                Ee = Te.popper,
                Se = Te.onUpdate;
            Ee.setAttribute("data-tippy-root", ""), Ee.id = "tippy-" + xe.id, xe.popper = Ee, n._tippy = xe, Ee._tippy = xe;
            var Ce = we.map(function(e) {
                    return e.fn(xe)
                }),
                ke = n.hasAttribute("aria-expanded");
            return V(), M(), S(), C("onCreate", [xe]), de.showOnCreate && ee(), Ee.addEventListener("mouseenter", function() {
                xe.props.interactive && xe.state.isVisible && xe.clearDelayTimeouts()
            }), Ee.addEventListener("mouseleave", function(e) {
                xe.props.interactive && xe.props.trigger.indexOf("mouseenter") >= 0 && (ye.addEventListener("mousemove", ge), ge(e))
            }), xe
        }

        function O(e, t) {
            void 0 === t && (t = {});
            var n = q.plugins.concat(t.plugins || []);
            document.addEventListener("touchstart", b, I), window.addEventListener("blur", x);
            var i = Object.assign({}, t, {
                    plugins: n
                }),
                r = f(e).reduce(function(e, t) {
                    var n = t && L(t, i);
                    return n && e.push(n), e
                }, []);
            return d(e) ? r[0] : r
        }

        function D(e) {
            var t = e.clientX,
                n = e.clientY;
            W = {
                clientX: t,
                clientY: n
            }
        }

        function A(e, t) {
            return !e || !t || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left
        }
        var I = {
                passive: !0,
                capture: !0
            },
            j = {
                isTouch: !1
            },
            N = 0,
            $ = "undefined" != typeof window && "undefined" != typeof document ? navigator.userAgent : "",
            R = /MSIE |Trident\//.test($),
            q = Object.assign({
                appendTo: function() {
                    return document.body
                },
                aria: {
                    content: "auto",
                    expanded: "auto"
                },
                delay: 0,
                duration: [300, 250],
                getReferenceClientRect: null,
                hideOnClick: !0,
                ignoreAttributes: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                moveTransition: "",
                offset: [0, 10],
                onAfterUpdate: function() {},
                onBeforeUpdate: function() {},
                onCreate: function() {},
                onDestroy: function() {},
                onHidden: function() {},
                onHide: function() {},
                onMount: function() {},
                onShow: function() {},
                onShown: function() {},
                onTrigger: function() {},
                onUntrigger: function() {},
                onClickOutside: function() {},
                placement: "top",
                plugins: [],
                popperOptions: {},
                render: null,
                showOnCreate: !1,
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null
            }, {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1
            }, {}, {
                allowHTML: !1,
                animation: "fade",
                arrow: !0,
                content: "",
                inertia: !1,
                maxWidth: 350,
                role: "tooltip",
                theme: "",
                zIndex: 9999
            }),
            _ = Object.keys(q);
        M.$$tippy = !0;
        var z = 1,
            H = [],
            B = [];
        O.defaultProps = q, O.setDefaultProps = function(e) {
            Object.keys(e).forEach(function(t) {
                q[t] = e[t]
            })
        }, O.currentInput = j;
        var F = {
                mouseover: "mouseenter",
                focusin: "focus",
                click: "click"
            },
            V = {
                name: "animateFill",
                defaultValue: !1,
                fn: function(e) {
                    var t;
                    if (!(null == (t = e.props.render) ? void 0 : t.$$tippy)) return {};
                    var n = P(e.popper),
                        i = n.box,
                        r = n.content,
                        o = e.props.animateFill ? function() {
                            var e = c();
                            return e.className = "tippy-backdrop", v([e], "hidden"), e
                        }() : null;
                    return {
                        onCreate: function() {
                            o && (i.insertBefore(o, i.firstElementChild), i.setAttribute("data-animatefill", ""), i.style.overflow = "hidden", e.setProps({
                                arrow: !1,
                                animation: "shift-away"
                            }))
                        },
                        onMount: function() {
                            if (o) {
                                var e = i.style.transitionDuration,
                                    t = Number(e.replace("ms", ""));
                                r.style.transitionDelay = Math.round(t / 10) + "ms", o.style.transitionDuration = e, v([o], "visible")
                            }
                        },
                        onShow: function() {
                            o && (o.style.transitionDuration = "0ms")
                        },
                        onHide: function() {
                            o && v([o], "hidden")
                        }
                    }
                }
            },
            W = {
                clientX: 0,
                clientY: 0
            },
            X = [],
            G = {
                name: "followCursor",
                defaultValue: !1,
                fn: function(e) {
                    function t() {
                        return "initial" === e.props.followCursor && e.state.isVisible
                    }

                    function n() {
                        u.addEventListener("mousemove", o)
                    }

                    function i() {
                        u.removeEventListener("mousemove", o)
                    }

                    function r() {
                        c = !0, e.setProps({
                            getReferenceClientRect: null
                        }), c = !1
                    }

                    function o(t) {
                        var n = !t.target || l.contains(t.target),
                            i = e.props.followCursor,
                            r = t.clientX,
                            o = t.clientY,
                            s = l.getBoundingClientRect(),
                            a = r - s.left,
                            u = o - s.top;
                        !n && e.props.interactive || e.setProps({
                            getReferenceClientRect: function() {
                                var e = l.getBoundingClientRect(),
                                    t = r,
                                    n = o;
                                "initial" === i && (t = e.left + a, n = e.top + u);
                                var s = "horizontal" === i ? e.top : n,
                                    c = "vertical" === i ? e.right : t,
                                    d = "horizontal" === i ? e.bottom : n,
                                    p = "vertical" === i ? e.left : t;
                                return {
                                    width: c - p,
                                    height: d - s,
                                    top: s,
                                    right: c,
                                    bottom: d,
                                    left: p
                                }
                            }
                        })
                    }

                    function s() {
                        e.props.followCursor && (X.push({
                            instance: e,
                            doc: u
                        }), u.addEventListener("mousemove", D))
                    }

                    function a() {
                        0 === (X = X.filter(function(t) {
                            return t.instance !== e
                        })).filter(function(e) {
                            return e.doc === u
                        }).length && u.removeEventListener("mousemove", D)
                    }
                    var l = e.reference,
                        u = g(e.props.triggerTarget || l),
                        c = !1,
                        d = !1,
                        h = !0,
                        f = e.props;
                    return {
                        onCreate: s,
                        onDestroy: a,
                        onBeforeUpdate: function() {
                            f = e.props
                        },
                        onAfterUpdate: function(o, l) {
                            var u = l.followCursor;
                            c || void 0 !== u && f.followCursor !== u && (a(), u ? (s(), !e.state.isMounted || d || t() || n()) : (i(), r()))
                        },
                        onMount: function() {
                            e.props.followCursor && !d && (h && (o(W), h = !1), t() || n())
                        },
                        onTrigger: function(e, t) {
                            p(t) && (W = {
                                clientX: t.clientX,
                                clientY: t.clientY
                            }), d = "focus" === t.type
                        },
                        onHidden: function() {
                            e.props.followCursor && (r(), i(), h = !0)
                        }
                    }
                }
            },
            Y = {
                name: "inlinePositioning",
                defaultValue: !1,
                fn: function(e) {
                    function t() {
                        var t;
                        o || (t = function(e, t) {
                            var n;
                            return {
                                popperOptions: Object.assign({}, e.popperOptions, {
                                    modifiers: [].concat(((null == (n = e.popperOptions) ? void 0 : n.modifiers) || []).filter(function(e) {
                                        return e.name !== t.name
                                    }), [t])
                                })
                            }
                        }(e.props, s), o = !0, e.setProps(t), o = !1)
                    }
                    var n, i = e.reference,
                        r = -1,
                        o = !1,
                        s = {
                            name: "tippyInlinePositioning",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: function(t) {
                                var o = t.state;
                                e.props.inlinePositioning && (n !== o.placement && e.setProps({
                                    getReferenceClientRect: function() {
                                        return function(e, t, n, i) {
                                            if (n.length < 2 || null === e) return t;
                                            if (2 === n.length && i >= 0 && n[0].left > n[1].right) return n[i] || t;
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    var r = n[0],
                                                        o = n[n.length - 1],
                                                        s = "top" === e,
                                                        a = r.top,
                                                        l = o.bottom,
                                                        u = s ? r.left : o.left,
                                                        c = s ? r.right : o.right;
                                                    return {
                                                        top: a, bottom: l, left: u, right: c, width: c - u, height: l - a
                                                    };
                                                case "left":
                                                case "right":
                                                    var d = Math.min.apply(Math, n.map(function(e) {
                                                            return e.left
                                                        })),
                                                        p = Math.max.apply(Math, n.map(function(e) {
                                                            return e.right
                                                        })),
                                                        h = n.filter(function(t) {
                                                            return "left" === e ? t.left === d : t.right === p
                                                        }),
                                                        f = h[0].top,
                                                        m = h[h.length - 1].bottom;
                                                    return {
                                                        top: f, bottom: m, left: d, right: p, width: p - d, height: m - f
                                                    };
                                                default:
                                                    return t
                                            }
                                        }(l(o.placement), i.getBoundingClientRect(), u(i.getClientRects()), r)
                                    }
                                }), n = o.placement)
                            }
                        };
                    return {
                        onCreate: t,
                        onAfterUpdate: t,
                        onTrigger: function(t, n) {
                            if (p(n)) {
                                var i = u(e.reference.getClientRects()),
                                    o = i.find(function(e) {
                                        return e.left - 2 <= n.clientX && e.right + 2 >= n.clientX && e.top - 2 <= n.clientY && e.bottom + 2 >= n.clientY
                                    });
                                r = i.indexOf(o)
                            }
                        },
                        onUntrigger: function() {
                            r = -1
                        }
                    }
                }
            },
            U = {
                name: "sticky",
                defaultValue: !1,
                fn: function(e) {
                    function t(t) {
                        return !0 === e.props.sticky || e.props.sticky === t
                    }

                    function n() {
                        var a = t("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : i).getBoundingClientRect() : null,
                            l = t("popper") ? r.getBoundingClientRect() : null;
                        (a && A(o, a) || l && A(s, l)) && e.popperInstance && e.popperInstance.update(), o = a, s = l, e.state.isMounted && requestAnimationFrame(n)
                    }
                    var i = e.reference,
                        r = e.popper,
                        o = null,
                        s = null;
                    return {
                        onMount: function() {
                            e.props.sticky && n()
                        }
                    }
                }
            };
        return O.setDefaultProps({
            plugins: [V, G, Y, U],
            render: M
        }), O.createSingleton = function(e, t) {
            function n() {
                a = s.map(function(e) {
                    return e.reference
                })
            }

            function i(e) {
                s.forEach(function(t) {
                    e ? t.enable() : t.disable()
                })
            }
            void 0 === t && (t = {});
            var r, s = e,
                a = [],
                l = t.overrides;
            i(!1), n();
            var u = {
                    fn: function() {
                        return {
                            onDestroy: function() {
                                i(!0)
                            },
                            onTrigger: function(e, t) {
                                var n = t.currentTarget,
                                    i = a.indexOf(n);
                                if (n !== r) {
                                    r = n;
                                    var o = (l || []).concat("content").reduce(function(e, t) {
                                        return e[t] = s[i].props[t], e
                                    }, {});
                                    e.setProps(Object.assign({}, o, {
                                        getReferenceClientRect: function() {
                                            return n.getBoundingClientRect()
                                        }
                                    }))
                                }
                            }
                        }
                    }
                },
                d = O(c(), Object.assign({}, o(t, ["overrides"]), {
                    plugins: [u].concat(t.plugins || []),
                    triggerTarget: a
                })),
                p = d.setProps;
            return d.setProps = function(e) {
                l = e.overrides || l, p(e)
            }, d.setInstances = function(e) {
                i(!0), s = e, i(!1), n(), d.setProps({
                    triggerTarget: a
                })
            }, d
        }, O.delegate = function(e, t) {
            function n(e) {
                if (e.target) {
                    var n = e.target.closest(l);
                    if (n) {
                        var i = n.getAttribute("data-tippy-trigger") || t.trigger || q.trigger;
                        if (!n._tippy && !("touchstart" === e.type && "boolean" == typeof d.touch || "touchstart" !== e.type && i.indexOf(F[e.type]) < 0)) {
                            var r = O(n, d);
                            r && (a = a.concat(r))
                        }
                    }
                }
            }

            function i(e, t, n, i) {
                void 0 === i && (i = !1), e.addEventListener(t, n, i), r.push({
                    node: e,
                    eventType: t,
                    handler: n,
                    options: i
                })
            }
            var r = [],
                a = [],
                l = t.target,
                u = o(t, ["target"]),
                c = Object.assign({}, u, {
                    trigger: "manual",
                    touch: !1
                }),
                d = Object.assign({}, u, {
                    showOnCreate: !0
                }),
                p = O(e, c);
            return s(p).forEach(function(e) {
                var t = e.destroy;
                e.destroy = function(e) {
                        void 0 === e && (e = !0), e && a.forEach(function(e) {
                            e.destroy()
                        }), a = [], r.forEach(function(e) {
                            var t = e.node,
                                n = e.eventType,
                                i = e.handler,
                                r = e.options;
                            t.removeEventListener(n, i, r)
                        }), r = [], t()
                    },
                    function(e) {
                        var t = e.reference;
                        i(t, "touchstart", n), i(t, "mouseover", n), i(t, "focusin", n), i(t, "click", n)
                    }(e)
            }), p
        }, O.hideAll = function(e) {
            var t = void 0 === e ? {} : e,
                n = t.exclude,
                i = t.duration;
            B.forEach(function(e) {
                var t = !1;
                if (n && (t = h(n) ? e.reference === n : e.popper === n.popper), !t) {
                    var r = e.props.duration;
                    e.setProps({
                        duration: i
                    }), e.hide(), e.state.isDestroyed || e.setProps({
                        duration: r
                    })
                }
            })
        }, O.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', O
    }), document.addEventListener("turbolinks:load", function() {
        for (var e = document.getElementsByClassName("beer-slider"), t = 0; t < e.length; t++) new BeerSlider(e.item(t));
        $(".clean-science .tooltip").each(function(e, t) {
            tippy(t, {
                allowHTML: !0,
                content: '<div class="text-center p-s">' + $(t).siblings("div.tooltip-body").first().html() + "</div>",
                arrow: !0,
                placement: "bottom",
                theme: "light-border"
            })
        })
    }), document.addEventListener("turbolinks:load", function() {});