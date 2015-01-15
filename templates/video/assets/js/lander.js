function ouibounce(e, t) {
    function n(e, t) {
        return "undefined" == typeof e ? t : e
    }

    function i(e) {
        var t = 24 * e * 60 * 60 * 1e3,
            n = new Date;
        return n.setTime(n.getTime() + t), "; expires=" + n.toGMTString()
    }

    function a() {
        g.addEventListener("mouseleave", r), g.addEventListener("keydown", s)
    }

    function r(e) {
        e.clientY > d || o("viewedOuibounceModal", "true") && !c || (l(), h())
    }

    function s(e) {
        T || o("viewedOuibounceModal", "true") && !c || e.metaKey && 76 == e.keyCode && (T = !0, l(), h())
    }

    function o(e, t) {
        var n = document.cookie.split("; ").reduce(function(e, t) {
            var n = t.split("=");
            return e[n[0]] = n[1], e
        }, {});
        return n[e] === t
    }

    function l() {
        e && (e.style.display = "block"), u()
    }

    function u(e) {
        var e = e || {};
        "undefined" != typeof e.cookieExpire && (f = i(e.cookieExpire)), e.sitewide === !0 && (_ = ";path=/"), "undefined" != typeof e.cookieDomain && (m = ";domain=" + e.cookieDomain), document.cookie = "viewedOuibounceModal=true" + f + m + _, g.removeEventListener("mouseleave", r), g.removeEventListener("keydown", s)
    }
    var t = t || {}, c = t.aggressive || !1,
        d = n(t.sensitivity, 20),
        p = n(t.timer, 1e3),
        h = t.callback || function() {}, f = i(t.cookieExpire) || "",
        m = t.cookieDomain ? ";domain=" + t.cookieDomain : "",
        _ = t.sitewide === !0 ? ";path=/" : "",
        g = document.getElementsByTagName("html")[0];
    setTimeout(a, p);
    var T = !1;
    return {
        fire: l,
        disable: u
    }
}

function evsfix() {
    var e = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed");
    e.each(function() {
        try {
            el = this, h = el.height, w = el.width, ("" == h || "100%" == h) && (h = 9), ("" == w || "100%" == w) && (w = 16), ratio = h / w, $(el).attr("data-aspectRatio", h / w).removeAttr("height").removeAttr("width");
            var e = $(el).parent().width();
            if (0 == e) {
                var e = $(el).parent().parent().parent().width();
                0 == e && (e = 600)
            }
            100 == e ? ($(el).width("100%").height("56.25%"), $(el).parent().parent().width("100%").height("56.25%")) : ($(el).width(e).height(e * ratio), $(el).parent().parent().width(e).height(e * ratio)), $(el).parent().parent().parent().css("display", "inline"), $(".evs-flash-prompt").hide(), $('[data-role="evp-video"] div').css("background-color", "transparent"), $(el).attr("data", $(el).attr("data").replace("http:", "https:"))
        } catch (t) {}
    })
}

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(e) {
    mejs.YouTubeApi.flashReady(e)
}

function webinarDelay() {
    date = $('.selectAW-date[data-cf-name="webinar-date"]').val(), time = $('.selectAW-date[data-cf-name="webinar-time"]').val(), webinar_datetime = moment(date + " " + time, "YYYY-MM-DD HH:mm"), console.log("Selected Date: " + webinar_datetime), webinar_datetime_offset = moment.unix(webinar_datetime), console.log("Selected Date: " + webinar_datetime_offset), now = moment(), console.log("Today: " + now), now_offset = moment.unix(now), console.log("Today: " + now_offset), webinar_delay = webinar_datetime.diff(now), console.log("Delay: " + webinar_delay), webinar_delay_offset = moment.unix(webinar_delay), console.log("Delay: " + webinar_delay_offset), console.log("Delay +: " + webinar_delay), webinar_delay_offset = moment.unix(webinar_delay), console.log("Delay +: " + webinar_delay_offset), $("#webinar_delay").attr("value", webinar_delay)
}

function cookieWebinarTime(e) {
    $pID = $("#page-id").val(), $.cookie("webinar_last_time-" + $pID, e)
}

function getWebinarLastTime() {
    return $pID = $("#page-id").val(), hardtime = $(".webinar-last-time").text(), cookietime = $.cookie("webinar_last_time-" + $pID), isNaN(parseInt(cookietime)) && (cookietime = 0), parseInt(hardtime) < parseInt(cookietime) || isNaN(parseInt(hardtime)) ? (reportWebinarTime(cookietime), parseInt(cookietime)) : (cookieWebinarTime(hardtime), parseInt(hardtime))
}

function reportWebinarTime(e) {
    webinar_ext = $(".webinar-ext").text(), $.ajax({
        type: "POST",
        url: "/contacts/update_last_time",
        data: {
            webinar_ext: webinar_ext,
            t: e
        }
    }), cookieWebinarTime(e)
}

function periodicAutoWebinarCheck() {
    var e, t = new Date;
    setInterval(function() {
        "undefined" == typeof e && (e = parseInt(getWebinarLastTime())), currentSeconds = (new Date - t) / 1e3 + e, parseInt($("webinar-ot").text()) < currentSeconds ? reportWebinarTime(currentSeconds) : cookieWebinarTime(currentSeconds)
    }, 1e3)
}! function(e, t) {
    function n(e) {
        var t = ft[e] = {};
        return J.each(e.split(tt), function(e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var a = "data-" + n.replace(_t, "-$1").toLowerCase();
            if (i = e.getAttribute(a), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : mt.test(i) ? J.parseJSON(i) : i
                } catch (r) {}
                J.data(e, n, i)
            } else i = t
        }
        return i
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function r() {
        return !1
    }

    function s() {
        return !0
    }

    function o(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function l(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function u(e, t, n) {
        if (t = t || 0, J.isFunction(t)) return J.grep(e, function(e, i) {
            var a = !! t.call(e, i, e);
            return a === n
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = J.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (It.test(t)) return J.filter(t, i, !n);
            t = J.filter(t, i)
        }
        return J.grep(e, function(e) {
            return J.inArray(e, t) >= 0 === n
        })
    }

    function c(e) {
        var t = Ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function p(e, t) {
        if (1 === t.nodeType && J.hasData(e)) {
            var n, i, a, r = J._data(e),
                s = J._data(t, r),
                o = r.events;
            if (o) {
                delete s.handle, s.events = {};
                for (n in o)
                    for (i = 0, a = o[n].length; a > i; i++) J.event.add(t, n, o[n][i])
            }
            s.data && (s.data = J.extend({}, s.data))
        }
    }

    function h(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
    }

    function f(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function m(e) {
        Kt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function _(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = Tn.length; a--;)
            if (t = Tn[a] + n, t in e) return t;
        return i
    }

    function g(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, i, a = [], r = 0, s = e.length; s > r; r++) n = e[r], n.style && (a[r] = J._data(n, "olddisplay"), t ? (!a[r] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && g(n) && (a[r] = J._data(n, "olddisplay", b(n.nodeName)))) : (i = nn(n, "display"), !a[r] && "none" !== i && J._data(n, "olddisplay", i)));
        for (r = 0; s > r; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[r] || "" : "none"));
        return e
    }

    function y(e, t, n) {
        var i = dn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function v(e, t, n, i) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === n && (r += J.css(e, n + gn[a], !0)), i ? ("content" === n && (r -= parseFloat(nn(e, "padding" + gn[a])) || 0), "margin" !== n && (r -= parseFloat(nn(e, "border" + gn[a] + "Width")) || 0)) : (r += parseFloat(nn(e, "padding" + gn[a])) || 0, "padding" !== n && (r += parseFloat(nn(e, "border" + gn[a] + "Width")) || 0));
        return r
    }

    function S(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = !0,
            r = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
        if (0 >= i || null == i) {
            if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), pn.test(i)) return i;
            a = r && (J.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + v(e, t, n || (r ? "border" : "content"), a) + "px"
    }

    function b(e) {
        if (fn[e]) return fn[e];
        var t = J("<" + e + ">").appendTo(z.body),
            n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (an = z.body.appendChild(an || J.extend(z.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), rn && an.createElement || (rn = (an.contentWindow || an.contentDocument).document, rn.write("<!doctype html><html><body>"), rn.close()), t = rn.body.appendChild(rn.createElement(e)), n = nn(t, "display"), z.body.removeChild(an)), fn[e] = n, n
    }

    function w(e, t, n, i) {
        var a;
        if (J.isArray(t)) J.each(t, function(t, a) {
            n || Sn.test(e) ? i(e, a) : w(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (a in t) w(e + "[" + a + "]", t[a], n, i)
    }

    function M(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, a, r, s = t.toLowerCase().split(tt),
                o = 0,
                l = s.length;
            if (J.isFunction(n))
                for (; l > o; o++) i = s[o], r = /^\+/.test(i), r && (i = i.substr(1) || "*"), a = e[i] = e[i] || [], a[r ? "unshift" : "push"](n)
        }
    }

    function A(e, n, i, a, r, s) {
        r = r || n.dataTypes[0], s = s || {}, s[r] = !0;
        for (var o, l = e[r], u = 0, c = l ? l.length : 0, d = e === Nn; c > u && (d || !o); u++) o = l[u](n, i, a), "string" == typeof o && (!d || s[o] ? o = t : (n.dataTypes.unshift(o), o = A(e, n, i, a, o, s)));
        return (d || !o) && !s["*"] && (o = A(e, n, i, a, "*", s)), o
    }

    function E(e, n) {
        var i, a, r = J.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((r[i] ? e : a || (a = {}))[i] = n[i]);
        a && J.extend(!0, e, a)
    }

    function C(e, n, i) {
        var a, r, s, o, l = e.contents,
            u = e.dataTypes,
            c = e.responseFields;
        for (r in c) r in i && (n[c[r]] = i[r]);
        for (;
            "*" === u[0];) u.shift(), a === t && (a = e.mimeType || n.getResponseHeader("content-type"));
        if (a)
            for (r in l)
                if (l[r] && l[r].test(a)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in i) s = u[0];
        else {
            for (r in i) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
    }

    function x(e, t) {
        var n, i, a, r, s = e.dataTypes.slice(),
            o = s[0],
            l = {}, u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1])
            for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
        for (; a = s[++u];)
            if ("*" !== a) {
                if ("*" !== o && o !== a) {
                    if (n = l[o + " " + a] || l["* " + a], !n)
                        for (i in l)
                            if (r = i.split(" "), r[1] === a && (n = l[o + " " + r[0]] || l["* " + r[0]])) {
                                n === !0 ? n = l[i] : l[i] !== !0 && (a = r[0], s.splice(u--, 0, a));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + o + " to " + a
                            }
                        }
                }
                o = a
            }
        return {
            state: "success",
            data: t
        }
    }

    function $() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function D() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function k() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = J.now()
    }

    function L(e, t) {
        J.each(t, function(t, n) {
            for (var i = (ei[t] || []).concat(ei["*"]), a = 0, r = i.length; r > a; a++)
                if (i[a].call(e, t, n)) return
        })
    }

    function F(e, t, n) {
        var i, a = 0,
            r = Xn.length,
            s = J.Deferred().always(function() {
                delete o.elem
            }),
            o = function() {
                for (var t = qn || k(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), a = 0, r = l.tweens.length; r > a; a++) l.tweens[a].run(i);
                return s.notifyWith(e, [l, i, n]), 1 > i && r ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || k(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = J.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (P(u, l.opts.specialEasing); r > a; a++)
            if (i = Xn[a].call(l, e, u, l.opts)) return i;
        return L(l, u), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(o, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(e, t) {
        var n, i, a, r, s;
        for (n in e)
            if (i = J.camelCase(n), a = t[i], r = e[n], J.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = J.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = a)
            } else t[i] = a
    }

    function R(e, t, n) {
        var i, a, r, s, o, l, u, c, d = this,
            p = e.style,
            h = {}, f = [],
            m = e.nodeType && g(e);
        n.queue || (u = J._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c()
        }), u.unqueued++, d.always(function() {
            d.always(function() {
                u.unqueued--, J.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== b(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", J.support.shrinkWrapBlocks || d.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Zn.exec(r)) {
                if (delete t[i], r === (m ? "hide" : "show")) continue;
                f.push(i)
            }
        if (s = f.length)
            for (o = J._data(e, "fxshow") || J._data(e, "fxshow", {}), m ? J(e).show() : d.done(function() {
                J(e).hide()
            }), d.done(function() {
                var t;
                J.removeData(e, "fxshow", !0);
                for (t in h) J.style(e, t, h[t])
            }), i = 0; s > i; i++) a = f[i], l = d.createTween(a, m ? o[a] : 0), h[a] = o[a] || J.style(e, a), a in o || (o[a] = l.start, m && (l.end = l.start, l.start = "width" === a || "height" === a ? 1 : 0))
    }

    function I(e, t, n, i, a) {
        return new I.prototype.init(e, t, n, i, a)
    }

    function N(e, t) {
        var n, i = {
                height: e
            }, a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t) n = gn[a], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function B(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var H, O, z = e.document,
        j = e.location,
        W = e.navigator,
        U = e.jQuery,
        Y = e.$,
        V = Array.prototype.push,
        G = Array.prototype.slice,
        q = Array.prototype.indexOf,
        K = Object.prototype.toString,
        Z = Object.prototype.hasOwnProperty,
        Q = String.prototype.trim,
        J = function(e, t) {
            return new J.fn.init(e, t, H)
        }, X = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        rt = /^[\],:{}\s]*$/,
        st = /(?:^|:|,)(?:\s*\[)+/g,
        ot = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ut = /^-ms-/,
        ct = /-([\da-z])/gi,
        dt = function(e, t) {
            return (t + "").toUpperCase()
        }, pt = function() {
            z.addEventListener ? (z.removeEventListener("DOMContentLoaded", pt, !1), J.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", pt), J.ready())
        }, ht = {};
    J.fn = J.prototype = {
        constructor: J,
        init: function(e, n, i) {
            var a, r, s;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), a && (a[1] || !n)) {
                    if (a[1]) return n = n instanceof J ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : z, e = J.parseHTML(a[1], s, !0), at.test(a[1]) && J.isPlainObject(n) && this.attr.call(e, n, !0), J.merge(this, e);
                    if (r = z.getElementById(a[2]), r && r.parentNode) {
                        if (r.id !== a[2]) return i.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = z, this.selector = e, this
                }
                return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
            }
            return J.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.1",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var i = J.merge(this.constructor(), e);
            return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        ready: function(e) {
            return J.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: [].sort,
        splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
        var e, n, i, a, r, s, o = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[1] || {}, l = 2), "object" != typeof o && !J.isFunction(o) && (o = {}), u === l && (o = this, --l); u > l; l++)
            if (null != (e = arguments[l]))
                for (n in e) i = o[n], a = e[n], o !== a && (c && a && (J.isPlainObject(a) || (r = J.isArray(a))) ? (r ? (r = !1, s = i && J.isArray(i) ? i : []) : s = i && J.isPlainObject(i) ? i : {}, o[n] = J.extend(c, s, a)) : a !== t && (o[n] = a));
        return o
    }, J.extend({
        noConflict: function(t) {
            return e.$ === J && (e.$ = Y), t && e.jQuery === J && (e.jQuery = U), J
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--J.readyWait : !J.isReady) {
                if (!z.body) return setTimeout(J.ready, 1);
                J.isReady = !0, e !== !0 && --J.readyWait > 0 || (O.resolveWith(z, [J]), J.fn.trigger && J(z).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === J.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : ht[K.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
            try {
                if (e.constructor && !Z.call(e, "constructor") && !Z.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in e);
            return i === t || Z.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var i;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || z, (i = at.exec(e)) ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, n ? null : []), J.merge([], (i.cacheable ? J.clone(i.fragment) : i.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : rt.test(t.replace(ot, "@").replace(lt, "]").replace(st, "")) ? new Function("return " + t)() : void J.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(n) {
            var i, a;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (a = new DOMParser, i = a.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (r) {
                i = t
            }
            return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + n), i
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ut, "ms-").replace(ct, dt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(e, n, i) {
            var a, r = 0,
                s = e.length,
                o = s === t || J.isFunction(e);
            if (i)
                if (o) {
                    for (a in e)
                        if (n.apply(e[a], i) === !1) break
                } else
                    for (; s > r && n.apply(e[r++], i) !== !1;);
                else if (o) {
                for (a in e)
                    if (n.call(e[a], a, e[a]) === !1) break
            } else
                for (; s > r && n.call(e[r], r, e[r++]) !== !1;);
            return e
        },
        trim: Q && !Q.call("\xef\xbb\xbf\xc2 ") ? function(e) {
            return null == e ? "" : Q.call(e)
        } : function(e) {
            return null == e ? "" : e.toString().replace(nt, "")
        },
        makeArray: function(e, t) {
            var n, i = t || [];
            return null != e && (n = J.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(e) ? V.call(i, e) : J.merge(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (q) return q.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length,
                a = e.length,
                r = 0;
            if ("number" == typeof i)
                for (; i > r; r++) e[a++] = n[r];
            else
                for (; n[r] !== t;) e[a++] = n[r++];
            return e.length = a, e
        },
        grep: function(e, t, n) {
            var i, a = [],
                r = 0,
                s = e.length;
            for (n = !! n; s > r; r++) i = !! t(e[r], r), n !== i && a.push(e[r]);
            return a
        },
        map: function(e, n, i) {
            var a, r, s = [],
                o = 0,
                l = e.length,
                u = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
            if (u)
                for (; l > o; o++) a = n(e[o], o, i), null != a && (s[s.length] = a);
            else
                for (r in e) a = n(e[r], r, i), null != a && (s[s.length] = a);
            return s.concat.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, a, r;
            return "string" == typeof n && (i = e[n], n = e, e = i), J.isFunction(e) ? (a = G.call(arguments, 2), r = function() {
                return e.apply(n, a.concat(G.call(arguments)))
            }, r.guid = e.guid = e.guid || r.guid || J.guid++, r) : t
        },
        access: function(e, n, i, a, r, s, o) {
            var l, u = null == i,
                c = 0,
                d = e.length;
            if (i && "object" == typeof i) {
                for (c in i) J.access(e, n, c, i[c], 1, s, a);
                r = 1
            } else if (a !== t) {
                if (l = o === t && J.isFunction(a), u && (l ? (l = n, n = function(e, t, n) {
                    return l.call(J(e), n)
                }) : (n.call(e, a), n = null)), n)
                    for (; d > c; c++) n(e[c], i, l ? a.call(e[c], c, n(e[c], i)) : a, o);
                r = 1
            }
            return r ? e : u ? n.call(e) : d ? n(e[0], i) : s
        },
        now: function() {
            return (new Date).getTime()
        }
    }), J.ready.promise = function(t) {
        if (!O)
            if (O = J.Deferred(), "complete" === z.readyState) setTimeout(J.ready, 1);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", J.ready, !1);
        else {
            z.attachEvent("onreadystatechange", pt), e.attachEvent("onload", J.ready);
            var n = !1;
            try {
                n = null == e.frameElement && z.documentElement
            } catch (i) {}
            n && n.doScroll && function a() {
                if (!J.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    J.ready()
                }
            }()
        }
        return O.promise(t)
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        ht["[object " + t + "]"] = t.toLowerCase()
    }), H = J(z);
    var ft = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? ft[e] || n(e) : J.extend({}, e);
        var i, a, r, s, o, l, u = [],
            c = !e.once && [],
            d = function(t) {
                for (i = e.memory && t, a = !0, l = s || 0, s = 0, o = u.length, r = !0; u && o > l; l++)
                    if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                r = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : p.disable())
            }, p = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function n(t) {
                            J.each(t, function(t, i) {
                                var a = J.type(i);
                                "function" !== a || e.unique && p.has(i) ? i && i.length && "string" !== a && n(i) : u.push(i)
                            })
                        }(arguments), r ? o = u.length : i && (s = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return u && J.each(arguments, function(e, t) {
                        for (var n;
                            (n = J.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (o >= n && o--, l >= n && l--)
                    }), this
                },
                has: function(e) {
                    return J.inArray(e, u) > -1
                },
                empty: function() {
                    return u = [], this
                },
                disable: function() {
                    return u = c = i = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = t, i || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], u && (!a || c) && (r ? c.push(t) : d(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return p
    }, J.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                ["notify", "progress", J.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return J.Deferred(function(n) {
                            J.each(t, function(t, i) {
                                var r = i[0],
                                    s = e[t];
                                a[i[1]](J.isFunction(s) ? function() {
                                    var e = s.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === a ? n : this, [e])
                                } : n[r])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return "object" == typeof e ? J.extend(e, i) : i
                    }
                }, a = {};
            return i.pipe = i.then, J.each(t, function(e, r) {
                var s = r[2],
                    o = r[3];
                i[r[1]] = s.add, o && s.add(function() {
                    n = o
                }, t[1 ^ e][2].disable, t[2][2].lock), a[r[0]] = s.fire, a[r[0] + "With"] = s.fireWith
            }), i.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var t, n, i, a = 0,
                r = G.call(arguments),
                s = r.length,
                o = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
                l = 1 === o ? e : J.Deferred(),
                u = function(e, n, i) {
                    return function(a) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : a, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > a; a++) r[a] && J.isFunction(r[a].promise) ? r[a].promise().done(u(a, i, r)).fail(l.reject).progress(u(a, n, t)) : --o;
            return o || l.resolveWith(i, r), l.promise()
        }
    }), J.support = function() {
        var t, n, i, a, r, s, o, l, u, c, d, p = z.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length || !i) return {};
        a = z.createElement("select"), r = a.appendChild(z.createElement("option")), s = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !! i.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: r.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !! z.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === z.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !r.disabled;
        try {
            delete p.test
        } catch (h) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", d = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", d)), s = z.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), p.appendChild(s), o = z.createDocumentFragment(), o.appendChild(p.lastChild), t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, o.removeChild(s), o.appendChild(p), p.attachEvent)
            for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) l = "on" + u, c = l in p, c || (p.setAttribute(l, "return;"), c = "function" == typeof p[l]), t[u + "Bubbles"] = c;
        return J(function() {
            var n, i, a, r, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = z.getElementsByTagName("body")[0];
            o && (n = z.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(n, o.firstChild), i = z.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = i.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === a[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = z.createElement("div"), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", i.appendChild(r), t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), o.removeChild(n), n = i = a = r = null)
        }), o.removeChild(p), n = i = a = r = s = o = p = null, t
    }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        _t = /([A-Z])/g;
    J.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !! e && !a(e)
        },
        data: function(e, n, i, a) {
            if (J.acceptData(e)) {
                var r, s, o = J.expando,
                    l = "string" == typeof n,
                    u = e.nodeType,
                    c = u ? J.cache : e,
                    d = u ? e[o] : e[o] && o;
                if (d && c[d] && (a || c[d].data) || !l || i !== t) return d || (u ? e[o] = d = J.deletedIds.pop() || ++J.uuid : d = o), c[d] || (c[d] = {}, u || (c[d].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (a ? c[d] = J.extend(c[d], n) : c[d].data = J.extend(c[d].data, n)), r = c[d], a || (r.data || (r.data = {}), r = r.data), i !== t && (r[J.camelCase(n)] = i), l ? (s = r[n], null == s && (s = r[J.camelCase(n)])) : s = r, s
            }
        },
        removeData: function(e, t, n) {
            if (J.acceptData(e)) {
                var i, r, s, o = e.nodeType,
                    l = o ? J.cache : e,
                    u = o ? e[J.expando] : J.expando;
                if (l[u]) {
                    if (t && (i = n ? l[u] : l[u].data)) {
                        J.isArray(t) || (t in i ? t = [t] : (t = J.camelCase(t), t = t in i ? [t] : t.split(" ")));
                        for (r = 0, s = t.length; s > r; r++) delete i[t[r]];
                        if (!(n ? a : J.isEmptyObject)(i)) return
                    }(n || (delete l[u].data, a(l[u]))) && (o ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return J.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), J.fn.extend({
        data: function(e, n) {
            var a, r, s, o, l, u = this[0],
                c = 0,
                d = null;
            if (e === t) {
                if (this.length && (d = J.data(u), 1 === u.nodeType && !J._data(u, "parsedAttrs"))) {
                    for (s = u.attributes, l = s.length; l > c; c++) o = s[c].name, 0 === o.indexOf("data-") && (o = J.camelCase(o.substring(5)), i(u, o, d[o]));
                    J._data(u, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof e ? this.each(function() {
                J.data(this, e)
            }) : (a = e.split(".", 2), a[1] = a[1] ? "." + a[1] : "", r = a[1] + "!", J.access(this, function(n) {
                return n === t ? (d = this.triggerHandler("getData" + r, [a[0]]), d === t && u && (d = J.data(u, e), d = i(u, e, d)), d === t && a[1] ? this.data(a[0]) : d) : (a[1] = n, void this.each(function() {
                    var t = J(this);
                    t.triggerHandler("setData" + r, a), J.data(this, e, n), t.triggerHandler("changeData" + r, a)
                }))
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                J.removeData(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                a = n.shift(),
                r = J._queueHooks(e, t),
                s = function() {
                    J.dequeue(e, t)
                };
            "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J._data(e, n) || J._data(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    J.removeData(e, t + "queue", !0), J.removeData(e, n, !0)
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? J.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = J.queue(this, e, n);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, a = 1,
                r = J.Deferred(),
                s = this,
                o = this.length,
                l = function() {
                    --a || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; o--;) i = J._data(s[o], e + "queueHooks"), i && i.empty && (a++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var gt, Tt, yt, vt = /[\t\r\n]/g,
        St = /\r/g,
        bt = /^(?:button|input)$/i,
        wt = /^(?:button|input|object|select|textarea)$/i,
        Mt = /^a(?:rea|)$/i,
        At = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Et = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(e, t) {
            return J.access(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return J.access(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = J.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, a, r, s, o;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(tt), n = 0, i = this.length; i > n; n++)
                    if (a = this[n], 1 === a.nodeType)
                        if (a.className || 1 !== t.length) {
                            for (r = " " + a.className + " ", s = 0, o = t.length; o > s; s++)~ r.indexOf(" " + t[s] + " ") || (r += t[s] + " ");
                            a.className = J.trim(r)
                        } else a.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, a, r, s, o, l;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt), o = 0, l = this.length; l > o; o++)
                    if (a = this[o], 1 === a.nodeType && a.className) {
                        for (i = (" " + a.className + " ").replace(vt, " "), r = 0, s = n.length; s > r; r++)
                            for (; i.indexOf(" " + n[r] + " ") > -1;) i = i.replace(" " + n[r] + " ", " ");
                        a.className = e ? J.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var a, r = 0, s = J(this), o = t, l = e.split(tt); a = l[r++];) o = i ? o : !s.hasClass(a), s[o ? "addClass" : "removeClass"](a);
                else("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(vt, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, i, a, r = this[0]; {
                if (arguments.length) return a = J.isFunction(e), this.each(function(i) {
                    var r, s = J(this);
                    1 === this.nodeType && (r = a ? e.call(this, i, s.val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== t || (this.value = r))
                });
                if (r) return n = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== t ? i : (i = r.value, "string" == typeof i ? i.replace(St, "") : null == i ? "" : i)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, a, r = e.selectedIndex,
                        s = [],
                        o = e.options,
                        l = "select-one" === e.type;
                    if (0 > r) return null;
                    for (n = l ? r : 0, i = l ? r + 1 : o.length; i > n; n++)
                        if (a = o[n], !(!a.selected || (J.support.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && J.nodeName(a.parentNode, "optgroup"))) {
                            if (t = J(a).val(), l) return t;
                            s.push(t)
                        }
                    return l && !s.length && o.length ? J(o[r]).val() : s
                },
                set: function(e, t) {
                    var n = J.makeArray(t);
                    return J(e).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, i, a) {
            var r, s, o, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return a && J.isFunction(J.fn[n]) ? J(e)[n](i) : "undefined" == typeof e.getAttribute ? J.prop(e, n, i) : (o = 1 !== l || !J.isXMLDoc(e), o && (n = n.toLowerCase(), s = J.attrHooks[n] || (At.test(n) ? Tt : gt)), i !== t ? null === i ? void J.removeAttr(e, n) : s && "set" in s && o && (r = s.set(e, i, n)) !== t ? r : (e.setAttribute(n, "" + i), i) : s && "get" in s && o && null !== (r = s.get(e, n)) ? r : (r = e.getAttribute(n), null === r ? t : r))
        },
        removeAttr: function(e, t) {
            var n, i, a, r, s = 0;
            if (t && 1 === e.nodeType)
                for (i = t.split(tt); s < i.length; s++) a = i[s], a && (n = J.propFix[a] || a, r = At.test(a), r || J.attr(e, a, ""), e.removeAttribute(Et ? a : n), r && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (bt.test(e.nodeName) && e.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return gt && J.nodeName(e, "button") ? gt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return gt && J.nodeName(e, "button") ? gt.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var a, r, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !J.isXMLDoc(e), s && (n = J.propFix[n] || n, r = J.propHooks[n]), i !== t ? r && "set" in r && (a = r.set(e, i, n)) !== t ? a : e[n] = i : r && "get" in r && null !== (a = r.get(e, n)) ? a : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : wt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), Tt = {
        get: function(e, n) {
            var i, a = J.prop(e, n);
            return a === !0 || "boolean" != typeof a && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? J.removeAttr(e, n) : (i = J.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, Et || (yt = {
        name: !0,
        id: !0,
        coords: !0
    }, gt = J.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (yt[n] ? "" !== i.value : i.specified) ? i.value : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = z.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
        }
    }, J.each(["width", "height"], function(e, t) {
        J.attrHooks[t] = J.extend(J.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: gt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), gt.set(e, t, n)
        }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(e, n) {
        J.attrHooks[n] = J.extend(J.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Ct = /^(?:textarea|input|select)$/i,
        xt = /^([^\.]*|)(?:\.(.+)|)$/,
        $t = /(?:^|\s)hover(\.\S+|)\b/,
        Dt = /^key/,
        kt = /^(?:mouse|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        Ft = function(e) {
            return J.event.special.hover ? e : e.replace($t, "mouseenter$1 mouseleave$1")
        };
    J.event = {
        add: function(e, n, i, a, r) {
            var s, o, l, u, c, d, p, h, f, m, _;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = J._data(e))) {
                for (i.handler && (f = i, i = f.handler, r = f.selector), i.guid || (i.guid = J.guid++), l = s.events, l || (s.events = l = {}), o = s.handle, o || (s.handle = o = function(e) {
                    return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(o.elem, arguments)
                }, o.elem = e), n = J.trim(Ft(n)).split(" "), u = 0; u < n.length; u++) c = xt.exec(n[u]) || [], d = c[1], p = (c[2] || "").split(".").sort(), _ = J.event.special[d] || {}, d = (r ? _.delegateType : _.bindType) || d, _ = J.event.special[d] || {}, h = J.extend({
                    type: d,
                    origType: c[1],
                    data: a,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    namespace: p.join(".")
                }, f), m = l[d], m || (m = l[d] = [], m.delegateCount = 0, _.setup && _.setup.call(e, a, p, o) !== !1 || (e.addEventListener ? e.addEventListener(d, o, !1) : e.attachEvent && e.attachEvent("on" + d, o))), _.add && (_.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? m.splice(m.delegateCount++, 0, h) : m.push(h), J.event.global[d] = !0;
                e = null
            }
        },
        global: {},
        remove: function(e, t, n, i, a) {
            var r, s, o, l, u, c, d, p, h, f, m, _ = J.hasData(e) && J._data(e);
            if (_ && (p = _.events)) {
                for (t = J.trim(Ft(t || "")).split(" "), r = 0; r < t.length; r++)
                    if (s = xt.exec(t[r]) || [], o = l = s[1], u = s[2], o) {
                        for (h = J.event.special[o] || {}, o = (i ? h.delegateType : h.bindType) || o, f = p[o] || [], c = f.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < f.length; d++) m = f[d], !(!a && l !== m.origType || n && n.guid !== m.guid || u && !u.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (f.splice(d--, 1), m.selector && f.delegateCount--, !h.remove || !h.remove.call(e, m)));
                        0 === f.length && c !== f.length && ((!h.teardown || h.teardown.call(e, u, _.handle) === !1) && J.removeEvent(e, o, _.handle), delete p[o])
                    } else
                        for (o in p) J.event.remove(e, o + t[r], n, i, !0);
                J.isEmptyObject(p) && (delete _.handle, J.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, a, r) {
            if (!a || 3 !== a.nodeType && 8 !== a.nodeType) {
                var s, o, l, u, c, d, p, h, f, m, _ = n.type || n,
                    g = [];
                if (Lt.test(_ + J.event.triggered)) return;
                if (_.indexOf("!") >= 0 && (_ = _.slice(0, -1), o = !0), _.indexOf(".") >= 0 && (g = _.split("."), _ = g.shift(), g.sort()), (!a || J.event.customEvent[_]) && !J.event.global[_]) return;
                if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(_, n) : new J.Event(_), n.type = _, n.isTrigger = !0, n.exclusive = o, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = _.indexOf(":") < 0 ? "on" + _ : "", !a) {
                    s = J.cache;
                    for (l in s) s[l].events && s[l].events[_] && J.event.trigger(n, i, s[l].handle.elem, !0);
                    return
                }
                if (n.result = t, n.target || (n.target = a), i = null != i ? J.makeArray(i) : [], i.unshift(n), p = J.event.special[_] || {}, p.trigger && p.trigger.apply(a, i) === !1) return;
                if (f = [
                    [a, p.bindType || _]
                ], !r && !p.noBubble && !J.isWindow(a)) {
                    for (m = p.delegateType || _, u = Lt.test(m + _) ? a : a.parentNode, c = a; u; u = u.parentNode) f.push([u, m]), c = u;
                    c === (a.ownerDocument || z) && f.push([c.defaultView || c.parentWindow || e, m])
                }
                for (l = 0; l < f.length && !n.isPropagationStopped(); l++) u = f[l][0], n.type = f[l][1], h = (J._data(u, "events") || {})[n.type] && J._data(u, "handle"), h && h.apply(u, i), h = d && u[d], h && J.acceptData(u) && h.apply(u, i) === !1 && n.preventDefault();
                return n.type = _, !(r || n.isDefaultPrevented() || p._default && p._default.apply(a.ownerDocument, i) !== !1 || "click" === _ && J.nodeName(a, "a") || !J.acceptData(a) || !d || !a[_] || ("focus" === _ || "blur" === _) && 0 === n.target.offsetWidth || J.isWindow(a) || (c = a[d], c && (a[d] = null), J.event.triggered = _, a[_](), J.event.triggered = t, !c || !(a[d] = c))), n.result
            }
        },
        dispatch: function(n) {
            n = J.event.fix(n || e.event);
            var i, a, r, s, o, l, u, c, d, p = (J._data(this, "events") || {})[n.type] || [],
                h = p.delegateCount,
                f = [].slice.call(arguments),
                m = !n.exclusive && !n.namespace,
                _ = J.event.special[n.type] || {}, g = [];
            if (f[0] = n, n.delegateTarget = this, !_.preDispatch || _.preDispatch.call(this, n) !== !1) {
                if (h && (!n.button || "click" !== n.type))
                    for (r = n.target; r != this; r = r.parentNode || this)
                        if (r.disabled !== !0 || "click" !== n.type) {
                            for (o = {}, u = [], i = 0; h > i; i++) c = p[i], d = c.selector, o[d] === t && (o[d] = J(d, this).index(r) >= 0), o[d] && u.push(c);
                            u.length && g.push({
                                elem: r,
                                matches: u
                            })
                        }
                for (p.length > h && g.push({
                    elem: this,
                    matches: p.slice(h)
                }), i = 0; i < g.length && !n.isPropagationStopped(); i++)
                    for (l = g[i], n.currentTarget = l.elem, a = 0; a < l.matches.length && !n.isImmediatePropagationStopped(); a++) c = l.matches[a], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, s = ((J.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, f), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                return _.postDispatch && _.postDispatch.call(this, n), n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, a, r, s = n.button,
                    o = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || z, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? n.toElement : o), !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i = e,
                a = J.event.fixHooks[e.type] || {}, r = a.props ? this.props.concat(a.props) : this.props;
            for (e = J.Event(i), t = r.length; t;) n = r[--t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || z), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    J.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var a = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(a, null, t) : J.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault()
        }
    }, J.event.handle = J.event.dispatch, J.removeEvent = z.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : r) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(e, t)
    }, J.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = s;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = s;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                {
                    var n, i = this,
                        a = e.relatedTarget,
                        r = e.handleObj;
                    r.selector
                }
                return (!a || a !== i && !J.contains(i, a)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), J.support.submitBubbles || (J.event.special.submit = {
        setup: function() {
            return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    i = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : t;
                i && !J._data(i, "_submit_attached") && (J.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), J._data(i, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
        }
    }), J.support.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Ct.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), J.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
            })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ct.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && J.event.simulate("change", this.parentNode, e, !0)
                }), J._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return J.event.remove(this, "._change"), !Ct.test(this.nodeName)
        }
    }), J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            i = function(e) {
                J.event.simulate(t, e.target, J.event.fix(e), !0)
            };
        J.event.special[t] = {
            setup: function() {
                0 === n++ && z.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && z.removeEventListener(e, i, !0)
            }
        }
    }), J.fn.extend({
        on: function(e, n, i, a, s) {
            var o, l;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (l in e) this.on(l, n, i, e[l], s);
                return this
            }
            if (null == i && null == a ? (a = n, i = n = t) : null == a && ("string" == typeof n ? (a = i, i = t) : (a = i, i = n, n = t)), a === !1) a = r;
            else if (!a) return this;
            return 1 === s && (o = a, a = function(e) {
                return J().off(e), o.apply(this, arguments)
            }, a.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, a, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var a, s;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, J(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = r), this.each(function() {
                J.event.remove(this, e, i, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return J(this.context).on(e, this.selector, t, n), this
        },
        die: function(e, t) {
            return J(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
        },
        toggle: function(e) {
            var t = arguments,
                n = e.guid || J.guid++,
                i = 0,
                a = function(n) {
                    var a = (J._data(this, "lastToggle" + e.guid) || 0) % i;
                    return J._data(this, "lastToggle" + e.guid, a + 1), n.preventDefault(), t[a].apply(this, arguments) || !1
                };
            for (a.guid = n; i < t.length;) t[i++].guid = n;
            return this.click(a)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Dt.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), kt.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
    }),
    function(e, t) {
        function n(e, t, n, i) {
            n = n || [], t = t || x;
            var a, r, s, o, l = t.nodeType;
            if (1 !== l && 9 !== l) return [];
            if (!e || "string" != typeof e) return n;
            if (s = v(t), !s && !i && (a = K.exec(e)))
                if (o = a[1]) {
                    if (9 === l) {
                        if (r = t.getElementById(o), !r || !r.parentNode) return n;
                        if (r.id === o) return n.push(r), n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && S(t, r) && r.id === o) return n.push(r), n
                } else {
                    if (a[2]) return L.apply(n, k.call(t.getElementsByTagName(e), 0)), n;
                    if ((o = a[3]) && ot && t.getElementsByClassName) return L.apply(n, k.call(t.getElementsByClassName(o), 0)), n
                }
            return f(e, t, n, i, s)
        }

        function i(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function r(e, t, n) {
            if (e === t) return n;
            for (var i = e.nextSibling; i;) {
                if (i === t) return -1;
                i = i.nextSibling
            }
            return 1
        }

        function s(e, t, i, a) {
            var r, s, o, l, u, c, d, p, h, f, m = !i && t !== x,
                _ = (m ? "<s>" : "") + e.replace(Y, "$1<s>"),
                g = I[C][_];
            if (g) return a ? 0 : k.call(g, 0);
            for (u = e, c = [], p = 0, h = T.preFilter, f = T.filter; u;) {
                (!r || (s = V.exec(u))) && (s && (u = u.slice(s[0].length), o.selector = d), c.push(o = []), d = "", m && (u = " " + u)), r = !1, (s = G.exec(u)) && (d += s[0], u = u.slice(s[0].length), r = o.push({
                    part: s.pop().replace(Y, " "),
                    string: s[0],
                    captures: s
                }));
                for (l in f)(s = nt[l].exec(u)) && (!h[l] || (s = h[l](s, t, i))) && (d += s[0], u = u.slice(s[0].length), r = o.push({
                    part: l,
                    string: s.shift(),
                    captures: s
                }));
                if (!r) break
            }
            return d && (o.selector = d), a ? u.length : u ? n.error(e) : k.call(I(_, c), 0)
        }

        function o(e, t, n, i) {
            var a = t.dir,
                r = D++;
            return e || (e = function(e) {
                return e === n
            }), t.first ? function(t) {
                for (; t = t[a];)
                    if (1 === t.nodeType) return e(t) && t
            } : i ? function(t) {
                for (; t = t[a];)
                    if (1 === t.nodeType && e(t)) return t
            } : function(t) {
                for (var n, i = r + "." + m, s = i + "." + _; t = t[a];)
                    if (1 === t.nodeType) {
                        if ((n = t[C]) === s) return t.sizset;
                        if ("string" == typeof n && 0 === n.indexOf(i)) {
                            if (t.sizset) return t
                        } else {
                            if (t[C] = s, e(t)) return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
            }
        }

        function l(e, t) {
            return e ? function(n) {
                var i = t(n);
                return i && e(i === !0 ? n : i)
            } : t
        }

        function u(e, t, n) {
            for (var i, a, r = 0; i = e[r]; r++) a = T.relative[i.part] ? o(a, T.relative[i.part], t, n) : l(a, T.filter[i.part].apply(null, i.captures.concat(t, n)));
            return a
        }

        function c(e) {
            return function(t) {
                for (var n, i = 0; n = e[i]; i++)
                    if (n(t)) return !0;
                return !1
            }
        }

        function d(e, t, i, a) {
            for (var r = 0, s = t.length; s > r; r++) n(e, t[r], i, a)
        }

        function p(e, t, i, a, r, s) {
            var o, l = T.setFilters[t.toLowerCase()];
            return l || n.error(t), (e || !(o = r)) && d(e || "*", a, o = [], r), o.length > 0 ? l(o, i, s) : []
        }

        function h(e, i, a, r) {
            for (var s, o, l, u, c, h, f, m, _, g, T, y, v, S = 0, b = e.length, w = nt.POS, M = new RegExp("^" + w.source + "(?!" + B + ")", "i"), A = function() {
                    for (var e = 1, n = arguments.length - 2; n > e; e++) arguments[e] === t && (_[e] = t)
                }; b > S; S++) {
                for (s = e[S], o = "", m = r, l = 0, u = s.length; u > l; l++) {
                    if (c = s[l], h = c.string, "PSEUDO" === c.part)
                        for (w.exec(""), f = 0; _ = w.exec(h);) g = !0, T = w.lastIndex = _.index + _[0].length, T > f && (o += h.slice(f, _.index), f = T, y = [i], G.test(o) && (m && (y = m), m = r), (v = Q.test(o)) && (o = o.slice(0, -5).replace(G, "$&*"), f++), _.length > 1 && _[0].replace(M, A), m = p(o, _[1], _[2], y, m, v)), o = "";
                    g || (o += h), g = !1
                }
                o ? G.test(o) ? d(o, m || [i], a, r) : n(o, i, a, r ? r.concat(m) : m) : L.apply(a, m)
            }
            return 1 === b ? a : n.uniqueSort(a)
        }

        function f(e, t, n, i, a) {
            e = e.replace(Y, "$1");
            var r, o, l, u, c, d, p, f, g, y = s(e, t, a),
                v = t.nodeType;
            if (nt.POS.test(e)) return h(y, t, n, i);
            if (i) r = k.call(i, 0);
            else if (1 === y.length) {
                if ((c = k.call(y[0], 0)).length > 2 && "ID" === (d = c[0]).part && 9 === v && !a && T.relative[c[1].part]) {
                    if (t = T.find.ID(d.captures[0].replace(tt, ""), t, a)[0], !t) return n;
                    e = e.slice(c.shift().string.length)
                }
                for (f = (y = Z.exec(c[0].string)) && !y.index && t.parentNode || t, p = "", u = c.length - 1; u >= 0 && (d = c[u], g = d.part, p = d.string + p, !T.relative[g]); u--)
                    if (T.order.test(g)) {
                        if (r = T.find[g](d.captures[0].replace(tt, ""), f, a), null == r) continue;
                        e = e.slice(0, e.length - p.length) + p.replace(nt[g], ""), e || L.apply(n, k.call(r, 0));
                        break
                    }
            }
            if (e)
                for (o = b(e, t, a), m = o.dirruns++, null == r && (r = T.find.TAG("*", Z.test(e) && t.parentNode || t)), u = 0; l = r[u]; u++) _ = o.runs++, o(l) && n.push(l);
            return n
        }
        var m, _, g, T, y, v, S, b, w, M, A = !0,
            E = "undefined",
            C = ("sizcache" + Math.random()).replace(".", ""),
            x = e.document,
            $ = x.documentElement,
            D = 0,
            k = [].slice,
            L = [].push,
            F = function(e, t) {
                return e[C] = t || !0, e
            }, P = function() {
                var e = {}, t = [];
                return F(function(n, i) {
                    return t.push(n) > T.cacheLength && delete e[t.shift()], e[n] = i
                }, e)
            }, R = P(),
            I = P(),
            N = P(),
            B = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            O = H.replace("w", "w#"),
            z = "([*^$|!~]?=)",
            j = "\\[" + B + "*(" + H + ")" + B + "*(?:" + z + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + B + "*\\]",
            W = ":(" + H + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + j + ")|[^:]|\\\\.)*|.*))\\)|)",
            U = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
            Y = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            V = new RegExp("^" + B + "*," + B + "*"),
            G = new RegExp("^" + B + "*([\\x20\\t\\r\\n\\f>+~])" + B + "*"),
            q = new RegExp(W),
            K = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            Z = /[\x20\t\r\n\f]*[+~]/,
            Q = /:not\($/,
            X = /h\d/i,
            et = /input|select|textarea|button/i,
            tt = /\\(?!\\)/g,
            nt = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + H + ")['\"]?\\]"),
                TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                POS: new RegExp(U, "ig"),
                needsContext: new RegExp("^" + B + "*[>+~]|" + U, "i")
            }, it = function(e) {
                var t = x.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, at = it(function(e) {
                return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length
            }),
            rt = it(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== E && "#" === e.firstChild.getAttribute("href")
            }),
            st = it(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }),
            ot = it(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }),
            lt = it(function(e) {
                e.id = C + 0, e.innerHTML = "<a name='" + C + "'></a><div name='" + C + "'></div>", $.insertBefore(e, $.firstChild);
                var t = x.getElementsByName && x.getElementsByName(C).length === 2 + x.getElementsByName(C + 0).length;
                return g = !x.getElementById(C), $.removeChild(e), t
            });
        try {
            k.call($.childNodes, 0)[0].nodeType
        } catch (ut) {
            k = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        n.matches = function(e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function(e, t) {
            return n(t, null, null, [e]).length > 0
        }, y = n.getText = function(e) {
            var t, n = "",
                i = 0,
                a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += y(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else
                for (; t = e[i]; i++) n += y(t);
            return n
        }, v = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, S = n.contains = $.contains ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                i = t && t.parentNode;
            return e === i || !! (i && 1 === i.nodeType && n.contains && n.contains(i))
        } : $.compareDocumentPosition ? function(e, t) {
            return t && !! (16 & e.compareDocumentPosition(t))
        } : function(e, t) {
            for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
        }, n.attr = function(e, t) {
            var n, i = v(e);
            return i || (t = t.toLowerCase()), T.attrHandle[t] ? T.attrHandle[t](e) : st || i ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, T = n.selectors = {
            cacheLength: 50,
            createPseudo: F,
            match: nt,
            order: new RegExp("ID|TAG" + (lt ? "|NAME" : "") + (ot ? "|CLASS" : "")),
            attrHandle: rt ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: g ? function(e, t, n) {
                    if (typeof t.getElementById !== E && !n) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                } : function(e, n, i) {
                    if (typeof n.getElementById !== E && !i) {
                        var a = n.getElementById(e);
                        return a ? a.id === e || typeof a.getAttributeNode !== E && a.getAttributeNode("id").value === e ? [a] : t : []
                    }
                },
                TAG: at ? function(e, t) {
                    return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var i, a = [], r = 0; i = n[r]; r++) 1 === i.nodeType && a.push(i);
                        return a
                    }
                    return n
                },
                NAME: function(e, t) {
                    return typeof t.getElementsByName !== E ? t.getElementsByName(name) : void 0
                },
                CLASS: function(e, t, n) {
                    return typeof t.getElementsByClassName === E || n ? void 0 : t.getElementsByClassName(e)
                }
            },
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
                    return e[1] = e[1].replace(tt, ""), e[3] = (e[4] || e[5] || "").replace(tt, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                },
                PSEUDO: function(e, t, n) {
                    var i, a;
                    return nt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (i = e[4]) && (q.test(i) && (a = s(i, t, n, !0)) && (a = i.indexOf(")", i.length - a) - i.length) && (i = i.slice(0, a), e[0] = e[0].slice(0, a)), e[2] = i), e.slice(0, 3))
                }
            },
            filter: {
                ID: g ? function(e) {
                    return e = e.replace(tt, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                } : function(e) {
                    return e = e.replace(tt, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== E && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0
                    } : (e = e.replace(tt, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = R[C][e];
                    return t || (t = R(e, new RegExp("(^|" + B + ")" + e + "(" + B + "|$)"))),
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
                    }
                },
                ATTR: function(e, t, i) {
                    return t ? function(a) {
                        var r = n.attr(a, e),
                            s = r + "";
                        if (null == r) return "!=" === t;
                        switch (t) {
                            case "=":
                                return s === i;
                            case "!=":
                                return s !== i;
                            case "^=":
                                return i && 0 === s.indexOf(i);
                            case "*=":
                                return i && s.indexOf(i) > -1;
                            case "$=":
                                return i && s.substr(s.length - i.length) === i;
                            case "~=":
                                return (" " + s + " ").indexOf(i) > -1;
                            case "|=":
                                return s === i || s.substr(0, i.length + 1) === i + "-"
                        }
                    } : function(t) {
                        return null != n.attr(t, e)
                    }
                },
                CHILD: function(e, t, n, i) {
                    if ("nth" === e) {
                        var a = D++;
                        return function(e) {
                            var t, r, s = 0,
                                o = e;
                            if (1 === n && 0 === i) return !0;
                            if (t = e.parentNode, t && (t[C] !== a || !e.sizset)) {
                                for (o = t.firstChild; o && (1 !== o.nodeType || (o.sizset = ++s, o !== e)); o = o.nextSibling);
                                t[C] = a
                            }
                            return r = e.sizset - i, 0 === n ? 0 === r : r % n === 0 && r / n >= 0
                        }
                    }
                    return function(t) {
                        var n = t;
                        switch (e) {
                            case "only":
                            case "first":
                                for (; n = n.previousSibling;)
                                    if (1 === n.nodeType) return !1;
                                if ("first" === e) return !0;
                                n = t;
                            case "last":
                                for (; n = n.nextSibling;)
                                    if (1 === n.nodeType) return !1;
                                return !0
                        }
                    }
                },
                PSEUDO: function(e, t, i, a) {
                    var r, s = T.pseudos[e] || T.pseudos[e.toLowerCase()];
                    return s || n.error("unsupported pseudo: " + e), s[C] ? s(t, i, a) : s.length > 1 ? (r = [e, e, "", t], function(e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: F(function(e, t, n) {
                    var i = b(e.replace(Y, "$1"), t, n);
                    return function(e) {
                        return !i(e)
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    for (e = e.firstChild; e;) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                contains: F(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || y(t)).indexOf(e) > -1
                    }
                }),
                has: F(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                header: function(e) {
                    return X.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: a("submit"),
                reset: a("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t, n) {
                    return n ? e.slice(1) : [e[0]]
                },
                last: function(e, t, n) {
                    var i = e.pop();
                    return n ? e : [i]
                },
                even: function(e, t, n) {
                    for (var i = [], a = n ? 1 : 0, r = e.length; r > a; a += 2) i.push(e[a]);
                    return i
                },
                odd: function(e, t, n) {
                    for (var i = [], a = n ? 0 : 1, r = e.length; r > a; a += 2) i.push(e[a]);
                    return i
                },
                lt: function(e, t, n) {
                    return n ? e.slice(+t) : e.slice(0, +t)
                },
                gt: function(e, t, n) {
                    return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                },
                eq: function(e, t, n) {
                    var i = e.splice(+t, 1);
                    return n ? e : i
                }
            }
        }, w = $.compareDocumentPosition ? function(e, t) {
            return e === t ? (M = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        } : function(e, t) {
            if (e === t) return M = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, i, a = [],
                s = [],
                o = e.parentNode,
                l = t.parentNode,
                u = o;
            if (o === l) return r(e, t);
            if (!o) return -1;
            if (!l) return 1;
            for (; u;) a.unshift(u), u = u.parentNode;
            for (u = l; u;) s.unshift(u), u = u.parentNode;
            n = a.length, i = s.length;
            for (var c = 0; n > c && i > c; c++)
                if (a[c] !== s[c]) return r(a[c], s[c]);
            return c === n ? r(e, s[c], -1) : r(a[c], t, 1)
        }, [0, 0].sort(w), A = !M, n.uniqueSort = function(e) {
            var t, n = 1;
            if (M = A, e.sort(w), M)
                for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
            return e
        }, n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, b = n.compile = function(e, t, n) {
            var i, a, r, o = N[C][e];
            if (o && o.context === t) return o;
            for (i = s(e, t, n), a = 0, r = i.length; r > a; a++) i[a] = u(i[a], t, n);
            return o = N(e, c(i)), o.context = t, o.runs = o.dirruns = 0, o
        }, x.querySelectorAll && function() {
            var e, t = f,
                i = /'|\\/g,
                a = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                r = [],
                o = [":active"],
                l = $.matchesSelector || $.mozMatchesSelector || $.webkitMatchesSelector || $.oMatchesSelector || $.msMatchesSelector;
            it(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || r.push("\\[" + B + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || r.push(":checked")
            }), it(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && r.push("[*^$]=" + B + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || r.push(":enabled", ":disabled")
            }), r = r.length && new RegExp(r.join("|")), f = function(e, n, a, o, l) {
                if (!(o || l || r && r.test(e)))
                    if (9 === n.nodeType) try {
                        return L.apply(a, k.call(n.querySelectorAll(e), 0)), a
                    } catch (u) {} else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        var c, d, p, h = n.getAttribute("id"),
                            f = h || C,
                            m = Z.test(e) && n.parentNode || n;
                        for (h ? f = f.replace(i, "\\$&") : n.setAttribute("id", f), c = s(e, n, l), f = "[id='" + f + "']", d = 0, p = c.length; p > d; d++) c[d] = f + c[d].selector;
                        try {
                            return L.apply(a, k.call(m.querySelectorAll(c.join(",")), 0)), a
                        } catch (u) {} finally {
                            h || n.removeAttribute("id")
                        }
                    }
                return t(e, n, a, o, l)
            }, l && (it(function(t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), o.push(nt.PSEUDO.source, nt.POS.source, "!=")
                } catch (n) {}
            }), o = new RegExp(o.join("|")), n.matchesSelector = function(t, i) {
                if (i = i.replace(a, "='$1']"), !(v(t) || o.test(i) || r && r.test(i))) try {
                    var s = l.call(t, i);
                    if (s || e || t.document && 11 !== t.document.nodeType) return s
                } catch (u) {}
                return n(i, null, null, [t]).length > 0
            })
        }(), T.setFilters.nth = T.setFilters.eq, T.filters = T.pseudos, n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains
    }(e);
    var Pt = /Until$/,
        Rt = /^(?:parents|prev(?:Until|All))/,
        It = /^.[^:#\[\.,]*$/,
        Nt = J.expr.match.needsContext,
        Bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function(e) {
            var t, n, i, a, r, s, o = this;
            if ("string" != typeof e) return J(e).filter(function() {
                for (t = 0, n = o.length; n > t; t++)
                    if (J.contains(o[t], this)) return !0
            });
            for (s = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                if (i = s.length, J.find(e, this[t], s), t > 0)
                    for (a = i; a < s.length; a++)
                        for (r = 0; i > r; r++)
                            if (s[r] === s[a]) {
                                s.splice(a--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t, n = J(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (J.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Nt.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, i = 0, a = this.length, r = [], s = Nt.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; a > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (s ? s.index(n) > -1 : J.find.matchesSelector(n, e)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return r = r.length > 1 ? J.unique(r) : r, this.pushStack(r, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e),
                i = J.merge(this.get(), n);
            return this.pushStack(o(n[0]) || o(i[0]) ? i : J.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.fn.andSelf = J.fn.addBack, J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return l(e, "nextSibling")
        },
        prev: function(e) {
            return l(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var a = J.map(this, t, n);
            return Pt.test(e) || (i = n), i && "string" == typeof i && (a = J.filter(i, a)), a = this.length > 1 && !Bt[e] ? J.unique(a) : a, this.length > 1 && Rt.test(e) && (a = a.reverse()), this.pushStack(a, e, G.call(arguments).join(","))
        }
    }), J.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var a = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !J(r).is(i));) 1 === r.nodeType && a.push(r), r = r[n];
            return a
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ot = / jQuery\d+="(?:null|\d+)"/g,
        zt = /^\s+/,
        jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        Ut = /<tbody/i,
        Yt = /<|&#?\w+;/,
        Vt = /<(?:script|style|link)/i,
        Gt = /<(?:script|object|embed|option|style)/i,
        qt = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"),
        Kt = /^(?:checkbox|radio)$/,
        Zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qt = /\/(java|ecma)script/i,
        Jt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, en = c(z),
        tn = en.appendChild(z.createElement("div"));
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, J.support.htmlSerialize || (Xt._default = [1, "X<div>", "</div>"]), J.fn.extend({
        text: function(e) {
            return J.access(this, function(e) {
                return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(J.isFunction(e) ? function(t) {
                J(this).wrapInner(e.call(this, t))
            } : function() {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!o(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = J.clean(arguments);
                return this.pushStack(J.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!o(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = J.clean(arguments);
                return this.pushStack(J.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || J.filter(e, [n]).length) && (!t && 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), J.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return J.access(this, function(e) {
                var n = this[0] || {}, i = 0,
                    a = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ot, "") : t;
                if (!("string" != typeof e || Vt.test(e) || !J.support.htmlSerialize && qt.test(e) || !J.support.leadingWhitespace && zt.test(e) || Xt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(jt, "<$1></$2>");
                    try {
                        for (; a > i; i++) n = this[i] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (r) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return o(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function(t) {
                var n = J(this),
                    i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = J(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                J(this).remove(), t ? J(t).before(e) : J(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            e = [].concat.apply([], e);
            var a, r, s, o, l = 0,
                u = e[0],
                c = [],
                p = this.length;
            if (!J.support.checkClone && p > 1 && "string" == typeof u && Zt.test(u)) return this.each(function() {
                J(this).domManip(e, n, i)
            });
            if (J.isFunction(u)) return this.each(function(a) {
                var r = J(this);
                e[0] = u.call(this, a, n ? r.html() : t), r.domManip(e, n, i)
            });
            if (this[0]) {
                if (a = J.buildFragment(e, this, c), s = a.fragment, r = s.firstChild, 1 === s.childNodes.length && (s = r), r)
                    for (n = n && J.nodeName(r, "tr"), o = a.cacheable || p - 1; p > l; l++) i.call(n && J.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === o ? s : J.clone(s, !0, !0));
                s = r = null, c.length && J.each(c, function(e, t) {
                    t.src ? J.ajax ? J.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Jt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), J.buildFragment = function(e, n, i) {
        var a, r, s, o = e[0];
        return n = n || z, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof o && o.length < 512 && n === z && "<" === o.charAt(0) && !Gt.test(o) && (J.support.checkClone || !Zt.test(o)) && (J.support.html5Clone || !qt.test(o)) && (r = !0, a = J.fragments[o], s = a !== t), a || (a = n.createDocumentFragment(), J.clean(e, n, a, i), r && (J.fragments[o] = s && a)), {
            fragment: a,
            cacheable: r
        }
    }, J.fragments = {}, J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(n) {
            var i, a = 0,
                r = [],
                s = J(n),
                o = s.length,
                l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === o) return s[t](this[0]), this;
            for (; o > a; a++) i = (a > 0 ? this.clone(!0) : this).get(), J(s[a])[t](i), r = r.concat(i);
            return this.pushStack(r, e, s.selector)
        }
    }), J.extend({
        clone: function(e, t, n) {
            var i, a, r, s;
            if (J.support.html5Clone || J.isXMLDoc(e) || !qt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(s = tn.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (h(e, s), i = f(e), a = f(s), r = 0; i[r]; ++r) a[r] && h(i[r], a[r]);
            if (t && (p(e, s), n))
                for (i = f(e), a = f(s), r = 0; i[r]; ++r) p(i[r], a[r]);
            return i = a = null, s
        },
        clean: function(e, t, n, i) {
            var a, r, s, o, l, u, d, p, h, f, _, g = t === z && en,
                T = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = z), a = 0; null != (s = e[a]); a++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" == typeof s)
                        if (Yt.test(s)) {
                            for (g = g || c(t), d = t.createElement("div"), g.appendChild(d), s = s.replace(jt, "<$1></$2>"), o = (Wt.exec(s) || ["", ""])[1].toLowerCase(), l = Xt[o] || Xt._default, u = l[0], d.innerHTML = l[1] + s + l[2]; u--;) d = d.lastChild;
                            if (!J.support.tbody)
                                for (p = Ut.test(s), h = "table" !== o || p ? "<table>" !== l[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, r = h.length - 1; r >= 0; --r) J.nodeName(h[r], "tbody") && !h[r].childNodes.length && h[r].parentNode.removeChild(h[r]);
                            !J.support.leadingWhitespace && zt.test(s) && d.insertBefore(t.createTextNode(zt.exec(s)[0]), d.firstChild), s = d.childNodes, d.parentNode.removeChild(d)
                        } else s = t.createTextNode(s);
                    s.nodeType ? T.push(s) : J.merge(T, s)
                }
            if (d && (s = d = g = null), !J.support.appendChecked)
                for (a = 0; null != (s = T[a]); a++) J.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && J.grep(s.getElementsByTagName("input"), m);
            if (n)
                for (f = function(e) {
                    return !e.type || Qt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                }, a = 0; null != (s = T[a]); a++) J.nodeName(s, "script") && f(s) || (n.appendChild(s), "undefined" != typeof s.getElementsByTagName && (_ = J.grep(J.merge([], s.getElementsByTagName("script")), f), T.splice.apply(T, [a + 1, 0].concat(_)), a += _.length));
            return T
        },
        cleanData: function(e, t) {
            for (var n, i, a, r, s = 0, o = J.expando, l = J.cache, u = J.support.deleteExpando, c = J.event.special; null != (a = e[s]); s++)
                if ((t || J.acceptData(a)) && (i = a[o], n = i && l[i])) {
                    if (n.events)
                        for (r in n.events) c[r] ? J.event.remove(a, r) : J.removeEvent(a, r, n.handle);
                    l[i] && (delete l[i], u ? delete a[o] : a.removeAttribute ? a.removeAttribute(o) : a[o] = null, J.deletedIds.push(i))
                }
        }
    }),
    function() {
        var e, t;
        J.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = J.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, i) {
                return i && i instanceof J && !(i instanceof e) && (i = e(i)), J.fn.init.call(this, n, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(z);
            return e
        }
    }();
    var nn, an, rn, sn = /alpha\([^)]*\)/i,
        on = /opacity=([^)]*)/,
        ln = /^(top|right|bottom|left)$/,
        un = /^(none|table(?!-c[ea]).+)/,
        cn = /^margin/,
        dn = new RegExp("^(" + X + ")(.*)$", "i"),
        pn = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        hn = new RegExp("^([-+])=(" + X + ")", "i"),
        fn = {}, mn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, _n = {
            letterSpacing: 0,
            fontWeight: 400
        }, gn = ["Top", "Right", "Bottom", "Left"],
        Tn = ["Webkit", "O", "Moz", "ms"],
        yn = J.fn.toggle;
    J.fn.extend({
        css: function(e, n) {
            return J.access(this, function(e, n, i) {
                return i !== t ? J.style(e, n, i) : J.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return J.isFunction(e) && J.isFunction(t) ? yn.apply(this, arguments) : this.each(function() {
                (n ? e : g(this)) ? J(this).show() : J(this).hide()
            })
        }
    }), J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, l = J.camelCase(n),
                    u = e.style;
                if (n = J.cssProps[l] || (J.cssProps[l] = _(u, l)), o = J.cssHooks[n] || J.cssHooks[l], i === t) return o && "get" in o && (r = o.get(e, !1, a)) !== t ? r : u[n];
                if (s = typeof i, "string" === s && (r = hn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(J.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" === s && !J.cssNumber[l] && (i += "px"), o && "set" in o && (i = o.set(e, i, a)) === t))) try {
                    u[n] = i
                } catch (c) {}
            }
        },
        css: function(e, n, i, a) {
            var r, s, o, l = J.camelCase(n);
            return n = J.cssProps[l] || (J.cssProps[l] = _(e.style, l)), o = J.cssHooks[n] || J.cssHooks[l], o && "get" in o && (r = o.get(e, !0, a)), r === t && (r = nn(e, n)), "normal" === r && n in _n && (r = _n[n]), i || a !== t ? (s = parseFloat(r), i || J.isNumeric(s) ? s || 0 : r) : r
        },
        swap: function(e, t, n) {
            var i, a, r = {};
            for (a in t) r[a] = e.style[a], e.style[a] = t[a];
            i = n.call(e);
            for (a in t) e.style[a] = r[a];
            return i
        }
    }), e.getComputedStyle ? nn = function(t, n) {
        var i, a, r, s, o = e.getComputedStyle(t, null),
            l = t.style;
        return o && (i = o[n], "" === i && !J.contains(t.ownerDocument, t) && (i = J.style(t, n)), pn.test(i) && cn.test(n) && (a = l.width, r = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = o.width, l.width = a, l.minWidth = r, l.maxWidth = s)), i
    } : z.documentElement.currentStyle && (nn = function(e, t) {
        var n, i, a = e.currentStyle && e.currentStyle[t],
            r = e.style;
        return null == a && r && r[t] && (a = r[t]), pn.test(a) && !ln.test(t) && (n = r.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : a, a = r.pixelLeft + "px", r.left = n, i && (e.runtimeStyle.left = i)), "" === a ? "auto" : a
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? J.swap(e, mn, function() {
                    return S(e, t, i)
                }) : S(e, t, i) : void 0
            },
            set: function(e, n, i) {
                return y(e, n, i ? v(e, t, i, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(e, t) {
            return on.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                a = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === J.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, a) : r + " " + a)
        }
    }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(e, t) {
                return J.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0
                })
            }
        }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(e, t) {
            J.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var i = nn(e, t);
                        return pn.test(i) ? J(e).position()[t] + "px" : i
                    }
                }
            }
        })
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                var i, a = "string" == typeof n ? n.split(" ") : [n],
                    r = {};
                for (i = 0; 4 > i; i++) r[e + gn[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, cn.test(e) || (J.cssHooks[e + t].set = y)
    });
    var vn = /%20/g,
        Sn = /\[\]$/,
        bn = /\r?\n/g,
        wn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Mn = /^(?:select|textarea)/i;
    J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Mn.test(this.nodeName) || wn.test(this.type))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(bn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(bn, "\r\n")
                }
            }).get()
        }
    }), J.param = function(e, n) {
        var i, a = [],
            r = function(e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) w(i, e[i], n, r);
        return a.join("&").replace(vn, "+")
    };
    var An, En, Cn = /#.*$/,
        xn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $n = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Dn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        Ln = /\?/,
        Fn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Pn = /([?&])_=[^&]*/,
        Rn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        In = J.fn.load,
        Nn = {}, Bn = {}, Hn = ["*/"] + ["*"];
    try {
        An = j.href
    } catch (On) {
        An = z.createElement("a"), An.href = "", An = An.href
    }
    En = Rn.exec(An.toLowerCase()) || [], J.fn.load = function(e, n, i) {
        if ("string" != typeof e && In) return In.apply(this, arguments);
        if (!this.length) return this;
        var a, r, s, o = this,
            l = e.indexOf(" ");
        return l >= 0 && (a = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (r = "POST"), J.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                i && o.each(i, s || [e.responseText, t, e])
            }
        }).done(function(e) {
            s = arguments, o.html(a ? J("<div>").append(e.replace(Fn, "")).find(a) : e)
        }), this
    }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.each(["get", "post"], function(e, n) {
        J[n] = function(e, i, a, r) {
            return J.isFunction(i) && (r = r || a, a = i, i = t), J.ajax({
                type: n,
                url: e,
                data: i,
                success: a,
                dataType: r
            })
        }
    }), J.extend({
        getScript: function(e, n) {
            return J.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? E(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), E(e, t), e
        },
        ajaxSettings: {
            url: An,
            isLocal: $n.test(En[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Hn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: M(Nn),
        ajaxTransport: M(Bn),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                var u, d, T, y, S, w = n;
                2 !== v && (v = 2, l && clearTimeout(l), o = t, r = s || "", b.readyState = e > 0 ? 4 : 0, i && (y = C(p, b, i)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (S = b.getResponseHeader("Last-Modified"), S && (J.lastModified[a] = S), S = b.getResponseHeader("Etag"), S && (J.etag[a] = S)), 304 === e ? (w = "notmodified", u = !0) : (u = x(p, y), w = u.state, d = u.data, T = u.error, u = !T)) : (T = w, (!w || e) && (w = "error", 0 > e && (e = 0))), b.status = e, b.statusText = "" + (n || w), u ? m.resolveWith(h, [d, w, b]) : m.rejectWith(h, [b, w, T]), b.statusCode(g), g = t, c && f.trigger("ajax" + (u ? "Success" : "Error"), [b, p, u ? d : T]), _.fireWith(h, [b, w]), c && (f.trigger("ajaxComplete", [b, p]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var a, r, s, o, l, u, c, d, p = J.ajaxSetup({}, n),
                h = p.context || p,
                f = h !== p && (h.nodeType || h instanceof J) ? J(h) : J.event,
                m = J.Deferred(),
                _ = J.Callbacks("once memory"),
                g = p.statusCode || {}, T = {}, y = {}, v = 0,
                S = "canceled",
                b = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!v) {
                            var n = e.toLowerCase();
                            e = y[n] = y[n] || e, T[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? r : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === v) {
                            if (!s)
                                for (s = {}; n = xn.exec(r);) s[n[1].toLowerCase()] = n[2];
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return v || (p.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), i(0, e), this
                    }
                };
            if (m.promise(b), b.success = b.done, b.error = b.fail, b.complete = _.add, b.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > v)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[b.status], b.always(t)
                }
                return this
            }, p.url = ((e || p.url) + "").replace(Cn, "").replace(kn, En[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (u = Rn.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] == En[1] && u[2] == En[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (En[3] || ("http:" === En[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), A(Nn, p, n, b), 2 === v) return b;
            if (c = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Dn.test(p.type), c && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Ln.test(p.url) ? "&" : "?") + p.data, delete p.data), a = p.url, p.cache === !1)) {
                var w = J.now(),
                    M = p.url.replace(Pn, "$1_=" + w);
                p.url = M + (M === p.url ? (Ln.test(p.url) ? "&" : "?") + "_=" + w : "")
            }(p.data && p.hasContent && p.contentType !== !1 || n.contentType) && b.setRequestHeader("Content-Type", p.contentType), p.ifModified && (a = a || p.url, J.lastModified[a] && b.setRequestHeader("If-Modified-Since", J.lastModified[a]), J.etag[a] && b.setRequestHeader("If-None-Match", J.etag[a])), b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Hn + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) b.setRequestHeader(d, p.headers[d]);
            if (!p.beforeSend || p.beforeSend.call(h, b, p) !== !1 && 2 !== v) {
                S = "abort";
                for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[d](p[d]);
                if (o = A(Bn, p, n, b)) {
                    b.readyState = 1, c && f.trigger("ajaxSend", [b, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        b.abort("timeout")
                    }, p.timeout));
                    try {
                        v = 1, o.send(T, i)
                    } catch (E) {
                        if (!(2 > v)) throw E;
                        i(-1, E)
                    }
                } else i(-1, "No Transport");
                return b
            }
            return b.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var zn = [],
        jn = /\?/,
        Wn = /(=)\?(?=&|$)|\?\?/,
        Un = J.now();
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zn.pop() || J.expando + "_" + Un++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(n, i, a) {
        var r, s, o, l = n.data,
            u = n.url,
            c = n.jsonp !== !1,
            d = c && Wn.test(u),
            p = c && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
        return "jsonp" === n.dataTypes[0] || d || p ? (r = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = e[r], d ? n.url = u.replace(Wn, "$1" + r) : p ? n.data = l.replace(Wn, "$1" + r) : c && (n.url += (jn.test(u) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
            return o || J.error(r + " was not called"), o[0]
        }, n.dataTypes[0] = "json", e[r] = function() {
            o = arguments
        }, a.always(function() {
            e[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, zn.push(r)), o && J.isFunction(s) && s(o[0]), o = s = t
        }), "script") : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function(a, r) {
                    n = z.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, a) {
                        (a || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, a || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Yn, Vn = e.ActiveXObject ? function() {
            for (var e in Yn) Yn[e](0, 1)
        } : !1,
        Gn = 0;
    J.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && $() || D()
    } : $,
    function(e) {
        J.extend(J.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(n) {
        if (!n.crossDomain || J.support.cors) {
            var i;
            return {
                send: function(a, r) {
                    var s, o, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (o in n.xhrFields) l[o] = n.xhrFields[o];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !a["X-Requested-With"] && (a["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (o in a) l.setRequestHeader(o, a[o])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), i = function(e, a) {
                        var o, u, c, d, p;
                        try {
                            if (i && (a || 4 === l.readyState))
                                if (i = t, s && (l.onreadystatechange = J.noop, Vn && delete Yn[s]), a) 4 !== l.readyState && l.abort();
                                else {
                                    o = l.status, c = l.getAllResponseHeaders(), d = {}, p = l.responseXML, p && p.documentElement && (d.xml = p);
                                    try {
                                        d.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        u = l.statusText
                                    } catch (h) {
                                        u = ""
                                    }
                                    o || !n.isLocal || n.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                                }
                        } catch (f) {
                            a || r(-1, f)
                        }
                        d && r(o, u, d, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Gn, Vn && (Yn || (Yn = {}, J(e).unload(Vn)), Yn[s] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    });
    var qn, Kn, Zn = /^(?:toggle|show|hide)$/,
        Qn = new RegExp("^(?:([-+])=|)(" + X + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Xn = [R],
        ei = {
            "*": [
                function(e, t) {
                    var n, i, a, r = this.createTween(e, t),
                        s = Qn.exec(t),
                        o = r.cur(),
                        l = +o || 0,
                        u = 1;
                    if (s) {
                        if (n = +s[2], i = s[3] || (J.cssNumber[e] ? "" : "px"), "px" !== i && l) {
                            l = J.css(r.elem, e, !0) || n || 1;
                            do a = u = u || ".5", l /= u, J.style(r.elem, e, l + i), u = r.cur() / o; while (1 !== u && u !== a)
                        }
                        r.unit = i, r.start = l, r.end = s[1] ? l + (s[1] + 1) * n : n
                    }
                    return r
                }
            ]
        };
    J.Animation = J.extend(F, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, a = e.length; a > i; i++) n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), J.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, i, a, r) {
            this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.each(["toggle", "show", "hide"], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(i, a, r) {
            return null == i || "boolean" == typeof i || !e && J.isFunction(i) && J.isFunction(a) ? n.apply(this, arguments) : this.animate(N(t, !0), i, a, r)
        }
    }), J.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(g).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var a = J.isEmptyObject(e),
                r = J.speed(t, n, i),
                s = function() {
                    var t = F(this, J.extend({}, e), r);
                    a && t.stop(!0)
                };
            return a || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, n, i) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    r = J.timers,
                    s = J._data(this);
                if (n) s[n] && s[n].stop && a(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && Jn.test(n) && a(s[n]);
                for (n = r.length; n--;) r[n].elem === this && (null == e || r[n].queue === e) && (r[n].anim.stop(i), t = !1, r.splice(n, 1));
                (t || !i) && J.dequeue(this, e)
            })
        }
    }), J.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
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
        J.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.timers = [], J.fx = I.prototype.init, J.fx.tick = function() {
        for (var e, t = J.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
        t.length || J.fx.stop()
    }, J.fx.timer = function(e) {
        e() && J.timers.push(e) && !Kn && (Kn = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.interval = 13, J.fx.stop = function() {
        clearInterval(Kn), Kn = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    });
    var ti = /^(?:body|html)$/i;
    J.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            J.offset.setOffset(this, e, t)
        });
        var n, i, a, r, s, o, l, u, c, d, p = this[0],
            h = p && p.ownerDocument;
        if (h) return (a = h.body) === p ? J.offset.bodyOffset(p) : (i = h.documentElement, J.contains(i, p) ? (n = p.getBoundingClientRect(), r = B(h), s = i.clientTop || a.clientTop || 0, o = i.clientLeft || a.clientLeft || 0, l = r.pageYOffset || i.scrollTop, u = r.pageXOffset || i.scrollLeft, c = n.top + l - s, d = n.left + u - o, {
            top: c,
            left: d
        }) : {
            top: 0,
            left: 0
        })
    }, J.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, n += parseFloat(J.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = J.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var a, r, s = J(e),
                o = s.offset(),
                l = J.css(e, "top"),
                u = J.css(e, "left"),
                c = ("absolute" === i || "fixed" === i) && J.inArray("auto", [l, u]) > -1,
                d = {}, p = {};
            c ? (p = s.position(), a = p.top, r = p.left) : (a = parseFloat(l) || 0, r = parseFloat(u) || 0), J.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : s.css(d)
        }
    }, J.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    i = ti.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(J.css(e, "marginTop")) || 0, n.left -= parseFloat(J.css(e, "marginLeft")) || 0, i.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || z.body; e && !ti.test(e.nodeName) && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || z.body
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        J.fn[e] = function(a) {
            return J.access(this, function(e, a, r) {
                var s = B(e);
                return r === t ? s ? n in s ? s[n] : s.document.documentElement[a] : e[a] : void(s ? s.scrollTo(i ? J(s).scrollLeft() : r, i ? r : J(s).scrollTop()) : e[a] = r)
            }, e, a, arguments.length, null)
        }
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        J.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, a) {
            J.fn[a] = function(a, r) {
                var s = arguments.length && (i || "boolean" != typeof a),
                    o = i || (a === !0 || r === !0 ? "margin" : "border");
                return J.access(this, function(n, i, a) {
                    var r;
                    return J.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : a === t ? J.css(n, i, a, o) : J.style(n, i, a, o)
                }, n, s ? a : t, s, null)
            }
        })
    }), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return J
    })
}(window),
function(e) {
    function t() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function n(e, t) {
        function n() {
            lt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }
        var i = !0;
        return l(function() {
            return i && (n(), i = !1), t.apply(this, arguments)
        }, t)
    }

    function i(e, t) {
        return function(n) {
            return d(e.call(this, n), t)
        }
    }

    function a(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }

    function r() {}

    function s(e) {
        M(e), l(this, e)
    }

    function o(e) {
        var t = g(e),
            n = t.year || 0,
            i = t.quarter || 0,
            a = t.month || 0,
            r = t.week || 0,
            s = t.day || 0,
            o = t.hour || 0,
            l = t.minute || 0,
            u = t.second || 0,
            c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * o, this._days = +s + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._bubble()
    }

    function l(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }

    function u(e) {
        var t, n = {};
        for (t in e) e.hasOwnProperty(t) && bt.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }

    function c(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function d(e, t, n) {
        for (var i = "" + Math.abs(e), a = e >= 0; i.length < t;) i = "0" + i;
        return (a ? n ? "+" : "" : "-") + i
    }

    function p(e, t, n, i) {
        var a = t._milliseconds,
            r = t._days,
            s = t._months;
        i = null == i ? !0 : i, a && e._d.setTime(+e._d + a * n), r && it(e, "Date", nt(e, "Date") + r * n), s && tt(e, nt(e, "Month") + s * n), i && lt.updateOffset(e, r || s)
    }

    function h(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function f(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function m(e, t, n) {
        var i, a = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            s = 0;
        for (i = 0; a > i; i++)(n && e[i] !== t[i] || !n && y(e[i]) !== y(t[i])) && s++;
        return s + r
    }

    function _(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = Qt[e] || Jt[t] || t
        }
        return e
    }

    function g(e) {
        var t, n, i = {};
        for (n in e) e.hasOwnProperty(n) && (t = _(n), t && (i[t] = e[n]));
        return i
    }

    function T(t) {
        var n, i;
        if (0 === t.indexOf("week")) n = 7, i = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, i = "month"
        }
        lt[t] = function(a, r) {
            var s, o, l = lt.fn._lang[t],
                u = [];
            if ("number" == typeof a && (r = a, a = e), o = function(e) {
                var t = lt().utc().set(i, e);
                return l.call(lt.fn._lang, t, a || "")
            }, null != r) return o(r);
            for (s = 0; n > s; s++) u.push(o(s));
            return u
        }
    }

    function y(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function v(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function S(e, t, n) {
        return J(lt([e, 11, 31 + t - n]), t, n).week
    }

    function b(e) {
        return w(e) ? 366 : 365
    }

    function w(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function M(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[mt] < 0 || e._a[mt] > 11 ? mt : e._a[_t] < 1 || e._a[_t] > v(e._a[ft], e._a[mt]) ? _t : e._a[gt] < 0 || e._a[gt] > 23 ? gt : e._a[Tt] < 0 || e._a[Tt] > 59 ? Tt : e._a[yt] < 0 || e._a[yt] > 59 ? yt : e._a[vt] < 0 || e._a[vt] > 999 ? vt : -1, e._pf._overflowDayOfYear && (ft > t || t > _t) && (t = _t), e._pf.overflow = t)
    }

    function A(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
    }

    function E(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function C(e, t) {
        return t._isUTC ? lt(e).zone(t._offset || 0) : lt(e).local()
    }

    function x(e, t) {
        return t.abbr = e, St[e] || (St[e] = new r), St[e].set(t), St[e]
    }

    function $(e) {
        delete St[e]
    }

    function D(e) {
        var t, n, i, a, r = 0,
            s = function(e) {
                if (!St[e] && wt) try {
                    require("./lang/" + e)
                } catch (t) {}
                return St[e]
            };
        if (!e) return lt.fn._lang;
        if (!h(e)) {
            if (n = s(e)) return n;
            e = [e]
        }
        for (; r < e.length;) {
            for (a = E(e[r]).split("-"), t = a.length, i = E(e[r + 1]), i = i ? i.split("-") : null; t > 0;) {
                if (n = s(a.slice(0, t).join("-"))) return n;
                if (i && i.length >= t && m(a, i, !0) >= t - 1) break;
                t--
            }
            r++
        }
        return lt.fn._lang
    }

    function k(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function L(e) {
        var t, n, i = e.match(Ct);
        for (t = 0, n = i.length; n > t; t++) i[t] = nn[i[t]] ? nn[i[t]] : k(i[t]);
        return function(a) {
            var r = "";
            for (t = 0; n > t; t++) r += i[t] instanceof Function ? i[t].call(a, e) : i[t];
            return r
        }
    }

    function F(e, t) {
        return e.isValid() ? (t = P(t, e.lang()), Xt[t] || (Xt[t] = L(t)), Xt[t](e)) : e.lang().invalidDate()
    }

    function P(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (xt.lastIndex = 0; i >= 0 && xt.test(e);) e = e.replace(xt, n), xt.lastIndex = 0, i -= 1;
        return e
    }

    function R(e, t) {
        var n, i = t._strict;
        switch (e) {
            case "Q":
                return Ht;
            case "DDDD":
                return zt;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? jt : kt;
            case "Y":
            case "G":
            case "g":
                return Ut;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? Wt : Lt;
            case "S":
                if (i) return Ht;
            case "SS":
                if (i) return Ot;
            case "SSS":
                if (i) return zt;
            case "DDD":
                return Dt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Pt;
            case "a":
            case "A":
                return D(t._l)._meridiemParse;
            case "X":
                return Nt;
            case "Z":
            case "ZZ":
                return Rt;
            case "T":
                return It;
            case "SSSS":
                return Ft;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? Ot : $t;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return $t;
            case "Do":
                return Bt;
            default:
                return n = new RegExp(W(j(e.replace("\\", "")), "i"))
        }
    }

    function I(e) {
        e = e || "";
        var t = e.match(Rt) || [],
            n = t[t.length - 1] || [],
            i = (n + "").match(Kt) || ["-", 0, 0],
            a = +(60 * i[1]) + y(i[2]);
        return "+" === i[0] ? -a : a
    }

    function N(e, t, n) {
        var i, a = n._a;
        switch (e) {
            case "Q":
                null != t && (a[mt] = 3 * (y(t) - 1));
                break;
            case "M":
            case "MM":
                null != t && (a[mt] = y(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = D(n._l).monthsParse(t), null != i ? a[mt] = i : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                null != t && (a[_t] = y(t));
                break;
            case "Do":
                null != t && (a[_t] = y(parseInt(t, 10)));
                break;
            case "DDD":
            case "DDDD":
                null != t && (n._dayOfYear = y(t));
                break;
            case "YY":
                a[ft] = lt.parseTwoDigitYear(t);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                a[ft] = y(t);
                break;
            case "a":
            case "A":
                n._isPm = D(n._l).isPM(t);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                a[gt] = y(t);
                break;
            case "m":
            case "mm":
                a[Tt] = y(t);
                break;
            case "s":
            case "ss":
                a[yt] = y(t);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                a[vt] = y(1e3 * ("0." + t));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = I(t);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
        }
    }

    function B(e) {
        var t, n, i, a, r, s, o, l, u, c, d = [];
        if (!e._d) {
            for (i = O(e), e._w && null == e._a[_t] && null == e._a[mt] && (r = function(t) {
                var n = parseInt(t, 10);
                return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[ft] ? lt().weekYear() : e._a[ft]
            }, s = e._w, null != s.GG || null != s.W || null != s.E ? o = X(r(s.GG), s.W || 1, s.E, 4, 1) : (l = D(e._l), u = null != s.d ? K(s.d, l) : null != s.e ? parseInt(s.e, 10) + l._week.dow : 0, c = parseInt(s.w, 10) || 1, null != s.d && u < l._week.dow && c++, o = X(r(s.gg), c, u, l._week.doy, l._week.dow)), e._a[ft] = o.year, e._dayOfYear = o.dayOfYear), e._dayOfYear && (a = null == e._a[ft] ? i[ft] : e._a[ft], e._dayOfYear > b(a) && (e._pf._overflowDayOfYear = !0), n = q(a, 0, e._dayOfYear), e._a[mt] = n.getUTCMonth(), e._a[_t] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = d[t] = i[t];
            for (; 7 > t; t++) e._a[t] = d[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            d[gt] += y((e._tzm || 0) / 60), d[Tt] += y((e._tzm || 0) % 60), e._d = (e._useUTC ? q : G).apply(null, d)
        }
    }

    function H(e) {
        var t;
        e._d || (t = g(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], B(e))
    }

    function O(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function z(e) {
        e._a = [], e._pf.empty = !0;
        var t, n, i, a, r, s = D(e._l),
            o = "" + e._i,
            l = o.length,
            u = 0;
        for (i = P(e._f, s).match(Ct) || [], t = 0; t < i.length; t++) a = i[t], n = (o.match(R(a, e)) || [])[0], n && (r = o.substr(0, o.indexOf(n)), r.length > 0 && e._pf.unusedInput.push(r), o = o.slice(o.indexOf(n) + n.length), u += n.length), nn[a] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(a), N(a, n, e)) : e._strict && !n && e._pf.unusedTokens.push(a);
        e._pf.charsLeftOver = l - u, o.length > 0 && e._pf.unusedInput.push(o), e._isPm && e._a[gt] < 12 && (e._a[gt] += 12), e._isPm === !1 && 12 === e._a[gt] && (e._a[gt] = 0), B(e), M(e)
    }

    function j(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
            return t || n || i || a
        })
    }

    function W(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function U(e) {
        var n, i, a, r, s;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (r = 0; r < e._f.length; r++) s = 0, n = l({}, e), n._pf = t(), n._f = e._f[r], z(n), A(n) && (s += n._pf.charsLeftOver, s += 10 * n._pf.unusedTokens.length, n._pf.score = s, (null == a || a > s) && (a = s, i = n));
        l(e, i || n)
    }

    function Y(e) {
        var t, n, i = e._i,
            a = Yt.exec(i);
        if (a) {
            for (e._pf.iso = !0, t = 0, n = Gt.length; n > t; t++)
                if (Gt[t][1].exec(i)) {
                    e._f = Gt[t][0] + (a[6] || " ");
                    break
                }
            for (t = 0, n = qt.length; n > t; t++)
                if (qt[t][1].exec(i)) {
                    e._f += qt[t][0];
                    break
                }
            i.match(Rt) && (e._f += "Z"), z(e)
        } else lt.createFromInputFallback(e)
    }

    function V(t) {
        var n = t._i,
            i = Mt.exec(n);
        n === e ? t._d = new Date : i ? t._d = new Date(+i[1]) : "string" == typeof n ? Y(t) : h(n) ? (t._a = n.slice(0), B(t)) : f(n) ? t._d = new Date(+n) : "object" == typeof n ? H(t) : "number" == typeof n ? t._d = new Date(n) : lt.createFromInputFallback(t)
    }

    function G(e, t, n, i, a, r, s) {
        var o = new Date(e, t, n, i, a, r, s);
        return 1970 > e && o.setFullYear(e), o
    }

    function q(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function K(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e) return null
            } else e = parseInt(e, 10);
        return e
    }

    function Z(e, t, n, i, a) {
        return a.relativeTime(t || 1, !! n, e, i)
    }

    function Q(e, t, n) {
        var i = ht(Math.abs(e) / 1e3),
            a = ht(i / 60),
            r = ht(a / 60),
            s = ht(r / 24),
            o = ht(s / 365),
            l = 45 > i && ["s", i] || 1 === a && ["m"] || 45 > a && ["mm", a] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === s && ["d"] || 25 >= s && ["dd", s] || 45 >= s && ["M"] || 345 > s && ["MM", ht(s / 30)] || 1 === o && ["y"] || ["yy", o];
        return l[2] = t, l[3] = e > 0, l[4] = n, Z.apply({}, l)
    }

    function J(e, t, n) {
        var i, a = n - t,
            r = n - e.day();
        return r > a && (r -= 7), a - 7 > r && (r += 7), i = lt(e).add("d", r), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function X(e, t, n, i, a) {
        var r, s, o = q(e, 0, 1).getUTCDay();
        return n = null != n ? n : a, r = a - o + (o > i ? 7 : 0) - (a > o ? 7 : 0), s = 7 * (t - 1) + (n - a) + r + 1, {
            year: s > 0 ? e : e - 1,
            dayOfYear: s > 0 ? s : b(e - 1) + s
        }
    }

    function et(t) {
        var n = t._i,
            i = t._f;
        return null === n || i === e && "" === n ? lt.invalid({
            nullInput: !0
        }) : ("string" == typeof n && (t._i = n = D().preparse(n)), lt.isMoment(n) ? (t = u(n), t._d = new Date(+n._d)) : i ? h(i) ? U(t) : z(t) : V(t), new s(t))
    }

    function tt(e, t) {
        var n;
        return "string" == typeof t && (t = e.lang().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), v(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function nt(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function it(e, t, n) {
        return "Month" === t ? tt(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function at(e, t) {
        return function(n) {
            return null != n ? (it(this, e, n), lt.updateOffset(this, t), this) : nt(this, e)
        }
    }

    function rt(e) {
        lt.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function st(e, t) {
        lt.duration.fn["as" + e] = function() {
            return +this / t
        }
    }

    function ot(e) {
        "undefined" == typeof ender && (ut = pt.moment, pt.moment = e ? n("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", lt) : lt)
    }
    for (var lt, ut, ct, dt = "2.6.0", pt = "undefined" != typeof global ? global : this, ht = Math.round, ft = 0, mt = 1, _t = 2, gt = 3, Tt = 4, yt = 5, vt = 6, St = {}, bt = {
            _isAMomentObject: null,
            _i: null,
            _f: null,
            _l: null,
            _strict: null,
            _isUTC: null,
            _offset: null,
            _pf: null,
            _lang: null
        }, wt = "undefined" != typeof module && module.exports, Mt = /^\/?Date\((\-?\d+)/i, At = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Et = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ct = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, xt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, $t = /\d\d?/, Dt = /\d{1,3}/, kt = /\d{1,4}/, Lt = /[+\-]?\d{1,6}/, Ft = /\d+/, Pt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Rt = /Z|[\+\-]\d\d:?\d\d/gi, It = /T/i, Nt = /[\+\-]?\d+(\.\d{1,3})?/, Bt = /\d{1,2}/, Ht = /\d/, Ot = /\d\d/, zt = /\d{3}/, jt = /\d{4}/, Wt = /[+-]?\d{6}/, Ut = /[+-]?\d+/, Yt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Vt = "YYYY-MM-DDTHH:mm:ssZ", Gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], qt = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], Kt = /([\+\-]|\d\d)/gi, Zt = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), Qt = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, Jt = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, Xt = {}, en = "DDD w W M D d".split(" "), tn = "M D H h m s w W".split(" "), nn = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(e) {
                return this.lang().monthsShort(this, e)
            },
            MMMM: function(e) {
                return this.lang().months(this, e)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(e) {
                return this.lang().weekdaysMin(this, e)
            },
            ddd: function(e) {
                return this.lang().weekdaysShort(this, e)
            },
            dddd: function(e) {
                return this.lang().weekdays(this, e)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return d(this.year() % 100, 2)
            },
            YYYY: function() {
                return d(this.year(), 4)
            },
            YYYYY: function() {
                return d(this.year(), 5)
            },
            YYYYYY: function() {
                var e = this.year(),
                    t = e >= 0 ? "+" : "-";
                return t + d(Math.abs(e), 6)
            },
            gg: function() {
                return d(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return d(this.weekYear(), 4)
            },
            ggggg: function() {
                return d(this.weekYear(), 5)
            },
            GG: function() {
                return d(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return d(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return d(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return y(this.milliseconds() / 100)
            },
            SS: function() {
                return d(y(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return d(this.milliseconds(), 3)
            },
            SSSS: function() {
                return d(this.milliseconds(), 3)
            },
            Z: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + d(y(e / 60), 2) + ":" + d(y(e) % 60, 2)
            },
            ZZ: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + d(y(e / 60), 2) + d(y(e) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, an = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; en.length;) ct = en.pop(), nn[ct + "o"] = a(nn[ct], ct);
    for (; tn.length;) ct = tn.pop(), nn[ct + ct] = i(nn[ct], 2);
    for (nn.DDDD = i(nn.DDD, 3), l(r.prototype, {
        set: function(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
            var t, n, i;
            for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                if (this._monthsParse[t] || (n = lt.utc([2e3, t]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = lt([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendar[e];
            return "function" == typeof n ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, i) {
            var a = this._relativeTime[n];
            return "function" == typeof a ? a(e, t, n, i) : a.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return J(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), lt = function(n, i, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._i = n, s._f = i, s._l = a, s._strict = r, s._isUTC = !1, s._pf = t(), et(s)
    }, lt.suppressDeprecationWarnings = !1, lt.createFromInputFallback = n("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i)
    }), lt.utc = function(n, i, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = n, s._f = i, s._strict = r, s._pf = t(), et(s).utc()
    }, lt.unix = function(e) {
        return lt(1e3 * e)
    }, lt.duration = function(e, t) {
        var n, i, a, r = e,
            s = null;
        return lt.isDuration(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (s = At.exec(e)) ? (n = "-" === s[1] ? -1 : 1, r = {
            y: 0,
            d: y(s[_t]) * n,
            h: y(s[gt]) * n,
            m: y(s[Tt]) * n,
            s: y(s[yt]) * n,
            ms: y(s[vt]) * n
        }) : (s = Et.exec(e)) && (n = "-" === s[1] ? -1 : 1, a = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * n
        }, r = {
            y: a(s[2]),
            M: a(s[3]),
            d: a(s[4]),
            h: a(s[5]),
            m: a(s[6]),
            s: a(s[7]),
            w: a(s[8])
        }), i = new o(r), lt.isDuration(e) && e.hasOwnProperty("_lang") && (i._lang = e._lang), i
    }, lt.version = dt, lt.defaultFormat = Vt, lt.momentProperties = bt, lt.updateOffset = function() {}, lt.lang = function(e, t) {
        var n;
        return e ? (t ? x(E(e), t) : null === t ? ($(e), e = "en") : St[e] || D(e), n = lt.duration.fn._lang = lt.fn._lang = D(e), n._abbr) : lt.fn._lang._abbr
    }, lt.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), D(e)
    }, lt.isMoment = function(e) {
        return e instanceof s || null != e && e.hasOwnProperty("_isAMomentObject")
    }, lt.isDuration = function(e) {
        return e instanceof o
    }, ct = an.length - 1; ct >= 0; --ct) T(an[ct]);
    lt.normalizeUnits = function(e) {
        return _(e)
    }, lt.invalid = function(e) {
        var t = lt.utc(0 / 0);
        return null != e ? l(t._pf, e) : t._pf.userInvalidated = !0, t
    }, lt.parseZone = function() {
        return lt.apply(null, arguments).parseZone()
    }, lt.parseTwoDigitYear = function(e) {
        return y(e) + (y(e) > 68 ? 1900 : 2e3)
    }, l(lt.fn = s.prototype, {
        clone: function() {
            return lt(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = lt(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? F(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return A(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && m(this._a, (this._isUTC ? lt.utc(this._a) : lt(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return l({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function(e) {
            var t = F(this, e || lt.defaultFormat);
            return this.lang().postformat(t)
        },
        add: function(e, t) {
            var n;
            return n = "string" == typeof e ? lt.duration(+t, e) : lt.duration(e, t), p(this, n, 1), this
        },
        subtract: function(e, t) {
            var n;
            return n = "string" == typeof e ? lt.duration(+t, e) : lt.duration(e, t), p(this, n, -1), this
        },
        diff: function(e, t, n) {
            var i, a, r = C(e, this),
                s = 6e4 * (this.zone() - r.zone());
            return t = _(t), "year" === t || "month" === t ? (i = 432e5 * (this.daysInMonth() + r.daysInMonth()), a = 12 * (this.year() - r.year()) + (this.month() - r.month()), a += (this - lt(this).startOf("month") - (r - lt(r).startOf("month"))) / i, a -= 6e4 * (this.zone() - lt(this).startOf("month").zone() - (r.zone() - lt(r).startOf("month").zone())) / i, "year" === t && (a /= 12)) : (i = this - r, a = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? a : c(a)
        },
        from: function(e, t) {
            return lt.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(lt(), e)
        },
        calendar: function() {
            var e = C(lt(), this).startOf("day"),
                t = this.diff(e, "days", !0),
                n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },
        isLeapYear: function() {
            return w(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = K(e, this.lang()), this.add({
                d: e - t
            })) : t
        },
        month: at("Month", !0),
        startOf: function(e) {
            switch (e = _(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(e) {
            return e = _(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
        },
        isAfter: function(e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +lt(e).startOf(t)
        },
        isBefore: function(e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +lt(e).startOf(t)
        },
        isSame: function(e, t) {
            return t = t || "ms", +this.clone().startOf(t) === +C(e, this).startOf(t)
        },
        min: function(e) {
            return e = lt.apply(null, arguments), this > e ? this : e
        },
        max: function(e) {
            return e = lt.apply(null, arguments), e > this ? this : e
        },
        zone: function(e, t) {
            var n = this._offset || 0;
            return null == e ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof e && (e = I(e)), Math.abs(e) < 16 && (e = 60 * e), this._offset = e, this._isUTC = !0, n !== e && (!t || this._changeInProgress ? p(this, lt.duration(n - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, lt.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? lt(e).zone() : 0, (this.zone() - e) % 60 === 0
        },
        daysInMonth: function() {
            return v(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = ht((lt(this).startOf("day") - lt(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add("d", e - t)
        },
        quarter: function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        },
        weekYear: function(e) {
            var t = J(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == e ? t : this.add("y", e - t)
        },
        isoWeekYear: function(e) {
            var t = J(this, 1, 4).year;
            return null == e ? t : this.add("y", e - t)
        },
        week: function(e) {
            var t = this.lang().week(this);
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        isoWeek: function(e) {
            var t = J(this, 1, 4).week;
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == e ? t : this.add("d", e - t)
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return S(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this._lang._week;
            return S(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = _(e), this[e]()
        },
        set: function(e, t) {
            return e = _(e), "function" == typeof this[e] && this[e](t), this
        },
        lang: function(t) {
            return t === e ? this._lang : (this._lang = D(t), this)
        }
    }), lt.fn.millisecond = lt.fn.milliseconds = at("Milliseconds", !1), lt.fn.second = lt.fn.seconds = at("Seconds", !1), lt.fn.minute = lt.fn.minutes = at("Minutes", !1), lt.fn.hour = lt.fn.hours = at("Hours", !0), lt.fn.date = at("Date", !0), lt.fn.dates = n("dates accessor is deprecated. Use date instead.", at("Date", !0)), lt.fn.year = at("FullYear", !0), lt.fn.years = n("years accessor is deprecated. Use year instead.", at("FullYear", !0)), lt.fn.days = lt.fn.day, lt.fn.months = lt.fn.month, lt.fn.weeks = lt.fn.week, lt.fn.isoWeeks = lt.fn.isoWeek, lt.fn.quarters = lt.fn.quarter, lt.fn.toJSON = lt.fn.toISOString, l(lt.duration.fn = o.prototype, {
        _bubble: function() {
            var e, t, n, i, a = this._milliseconds,
                r = this._days,
                s = this._months,
                o = this._data;
            o.milliseconds = a % 1e3, e = c(a / 1e3), o.seconds = e % 60, t = c(e / 60), o.minutes = t % 60, n = c(t / 60), o.hours = n % 24, r += c(n / 24), o.days = r % 30, s += c(r / 30), o.months = s % 12, i = c(s / 12), o.years = i
        },
        weeks: function() {
            return c(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
        },
        humanize: function(e) {
            var t = +this,
                n = Q(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        },
        add: function(e, t) {
            var n = lt.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = lt.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = _(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            return e = _(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: lt.fn.lang,
        toIsoString: function() {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                i = Math.abs(this.hours()),
                a = Math.abs(this.minutes()),
                r = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || a || r ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (r ? r + "S" : "") : "P0D"
        }
    });
    for (ct in Zt) Zt.hasOwnProperty(ct) && (st(ct, Zt[ct]), rt(ct.toLowerCase()));
    st("Weeks", 6048e5), lt.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, lt.lang("en", {
        ordinal: function(e) {
            var t = e % 10,
                n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), wt ? module.exports = lt : "function" == typeof define && define.amd ? (define("moment", function(e, t, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (pt.moment = ut), lt
    }), ot(!0)) : ot()
}.call(this),
function() {
    function e(e) {
        function n(e) {
            e += "";
            var t = e.split(":"),
                n = ~e.indexOf("-") ? -1 : 1,
                i = Math.abs(+t[0]),
                a = parseInt(t[1], 10) || 0,
                r = parseInt(t[2], 10) || 0;
            return n * (60 * i + a + r / 60)
        }

        function i(e, t, i, a, r, s, o, l, u, c) {
            this.name = e, this.startYear = +t, this.endYear = +i, this.month = +a, this.day = +r, this.dayRule = +s, this.time = n(o), this.timeRule = +l, this.offset = n(u), this.letters = c || ""
        }

        function a(e, t) {
            this.rule = t, this.start = t.start(e)
        }

        function r(e, t) {
            return e.isLast ? -1 : t.isLast ? 1 : t.start - e.start
        }

        function s(e) {
            this.name = e, this.rules = []
        }

        function o(t, i, a, r, s, o) {
            var l, u = "string" == typeof s ? s.split("_") : [9999];
            for (this.name = t, this.offset = n(i), this.ruleSet = a, this.letters = r, l = 0; l < u.length; l++) u[l] = +u[l];
            this.until = e.utc(u).subtract("m", n(o))
        }

        function l(e, t) {
            return e.until - t.until
        }

        function u(e) {
            this.name = p(e), this.displayName = e, this.zones = []
        }

        function c(e) {
            var t, n, i;
            for (t in e)
                for (i = e[t], n = 0; n < i.length; n++) d(t + "	" + i[n])
        }

        function d(e) {
            if (w[e]) return w[e];
            var t = e.split(/\s/),
                n = p(t[0]),
                a = new i(n, t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10]);
            return w[e] = a, _(n).add(a), a
        }

        function p(e) {
            return (e || "").toLowerCase().replace(/\//g, "_")
        }

        function h(e) {
            var t, n, i;
            for (t in e)
                for (i = e[t], n = 0; n < i.length; n++) m(t + "	" + i[n])
        }

        function f(e) {
            var t;
            for (t in e) C[p(t)] = p(e[t])
        }

        function m(e) {
            if (A[e]) return A[e];
            var t = e.split(/\s/),
                n = p(t[0]),
                i = new o(n, t[1], _(t[2]), t[3], t[4], t[5]);
            return A[e] = i, g(t[0]).add(i), i
        }

        function _(e) {
            return e = p(e), M[e] || (M[e] = new s(e)), M[e]
        }

        function g(e) {
            var t = p(e);
            return C[t] && (t = C[t]), E[t] || (E[t] = new u(e)), E[t]
        }

        function T(e) {
            e && (e.zones && h(e.zones), e.rules && c(e.rules), e.links && f(e.links))
        }

        function y() {
            var e, t = [];
            for (e in E) t.push(E[e]);
            return t
        }
        var v, S = e.fn.zoneName,
            b = e.fn.zoneAbbr,
            w = {}, M = {}, A = {}, E = {}, C = {}, x = 1,
            $ = 2,
            D = 7,
            k = 8;
        return i.prototype = {
            contains: function(e) {
                return e >= this.startYear && e <= this.endYear
            },
            start: function(t) {
                return t = Math.min(Math.max(t, this.startYear), this.endYear), e.utc([t, this.month, this.date(t), 0, this.time])
            },
            date: function(e) {
                return this.dayRule === D ? this.day : this.dayRule === k ? this.lastWeekday(e) : this.weekdayAfter(e)
            },
            weekdayAfter: function(t) {
                for (var n = this.day, i = e([t, this.month, 1]).day(), a = this.dayRule + 1 - i; n > a;) a += 7;
                return a
            },
            lastWeekday: function(t) {
                var n = this.day,
                    i = n % 7,
                    a = e([t, this.month + 1, 1]).day(),
                    r = e([t, this.month, 1]).daysInMonth(),
                    s = r + (i - (a - 1)) - 7 * ~~(n / 7);
                return i >= a && (s -= 7), s
            }
        }, a.prototype = {
            equals: function(e) {
                return e && e.rule === this.rule ? Math.abs(e.start - this.start) < 864e5 : !1
            }
        }, s.prototype = {
            add: function(e) {
                this.rules.push(e)
            },
            ruleYears: function(e, t) {
                var n, i, s, o = e.year(),
                    l = [];
                for (n = 0; n < this.rules.length; n++) i = this.rules[n], i.contains(o) ? l.push(new a(o, i)) : i.contains(o + 1) && l.push(new a(o + 1, i));
                return l.push(new a(o - 1, this.lastYearRule(o - 1))), t && (s = new a(o - 1, t.lastRule()), s.start = t.until.clone().utc(), s.isLast = t.ruleSet !== this, l.push(s)), l.sort(r), l
            },
            rule: function(e, t, n) {
                var i, a, r, s, o, l = this.ruleYears(e, n),
                    u = 0;
                for (n && (a = n.offset + n.lastRule().offset, r = 9e4 * Math.abs(a)), o = l.length - 1; o > -1; o--) s = i, i = l[o], i.equals(s) || (n && !i.isLast && Math.abs(i.start - n.until) <= r && (u += a - t), i.rule.timeRule === $ && (u = t), i.rule.timeRule !== x && i.start.add("m", -u), u = i.rule.offset + t);
                for (o = 0; o < l.length; o++)
                    if (i = l[o], e >= i.start && !i.isLast) return i.rule;
                return v
            },
            lastYearRule: function(e) {
                var t, n, i, a = v,
                    r = -1e30;
                for (t = 0; t < this.rules.length; t++) n = this.rules[t], e >= n.startYear && (i = n.start(e), i > r && (r = i, a = n));
                return a
            }
        }, o.prototype = {
            rule: function(e, t) {
                return this.ruleSet.rule(e, this.offset, t)
            },
            lastRule: function() {
                return this._lastRule || (this._lastRule = this.rule(this.until)), this._lastRule
            },
            format: function(e) {
                return this.letters.replace("%s", e.letters)
            }
        }, u.prototype = {
            zoneAndRule: function(e) {
                var t, n, i;
                for (e = e.clone().utc(), t = 0; t < this.zones.length && (n = this.zones[t], !(e < n.until)); t++) i = n;
                return [n, n.rule(e, i)]
            },
            add: function(e) {
                this.zones.push(e), this.zones.sort(l)
            },
            format: function(e) {
                var t = this.zoneAndRule(e);
                return t[0].format(t[1])
            },
            offset: function(e) {
                var t = this.zoneAndRule(e);
                return -(t[0].offset + t[1].offset)
            }
        }, e.updateOffset = function(e) {
            var t;
            e._z && (t = e._z.offset(e), Math.abs(t) < 16 && (t /= 60), e.zone(t))
        }, e.fn.tz = function(t) {
            return t ? (this._z = g(t), this._z && e.updateOffset(this), this) : this._z ? this._z.displayName : void 0
        }, e.fn.zoneName = function() {
            return this._z ? this._z.format(this) : S.call(this)
        }, e.fn.zoneAbbr = function() {
            return this._z ? this._z.format(this) : b.call(this)
        }, e.tz = function() {
            var t, n = [],
                i = arguments.length - 1;
            for (t = 0; i > t; t++) n[t] = arguments[t];
            var a = e.apply(null, n),
                r = a.zone();
            return a.tz(arguments[i]), a.add("minutes", a.zone() - r)
        }, e.tz.add = T, e.tz.addRule = d, e.tz.addZone = m, e.tz.zones = y, e.tz.version = t, v = d("- 0 9999 0 0 0 0 0 0"), e
    }
    var t = "0.0.3";
    "function" == typeof define && define.amd ? define("moment-timezone", ["moment"], e) : "undefined" != typeof window && window.moment ? e(window.moment) : "undefined" != typeof module && (module.exports = e(require("moment")))
}.apply(this), ! function(e, t, n, i) {
    function a(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
            var a = e[t];
            a && i.push(a)
        }
        return i
    }

    function r(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }

    function s(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function o(e) {
        var t = Object.prototype.toString.call(e);
        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
    }

    function l(e, t, n, i) {
        function a(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function r(e, t) {
            return 3 * t - 6 * e
        }

        function s(e) {
            return 3 * e
        }

        function o(e, t, n) {
            return ((a(t, n) * e + r(t, n)) * e + s(t)) * e
        }

        function l(e, t, n) {
            return 3 * a(t, n) * e * e + 2 * r(t, n) * e + s(t)
        }

        function u(t) {
            for (var i = t, a = 0; 8 > a; ++a) {
                var r = l(i, e, n);
                if (0 === r) return i;
                var s = o(i, e, n) - t;
                i -= s / r
            }
            return i
        }
        if (4 !== arguments.length) return !1;
        for (var c = 0; 4 > c; ++c)
            if ("number" != typeof arguments[c] || isNaN(arguments[c]) || !isFinite(arguments[c])) return !1;
        e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
        var d = function(a) {
            return e === t && n === i ? a : o(u(a), t, i)
        };
        return d
    }

    function u(e) {
        if (e)
            for (var t = (new Date).getTime(), n = 0, a = m.State.calls.length; a > n; n++)
                if (m.State.calls[n]) {
                    var r = m.State.calls[n],
                        s = r[0],
                        o = r[2],
                        l = r[3];
                    l || (l = m.State.calls[n][3] = t - 16);
                    for (var p = Math.min((t - l) / o.duration, 1), g = 0, T = s.length; T > g; g++) {
                        var y = s[g],
                            v = y.element;
                        if (f.data(v, d)) {
                            var S = !1;
                            o.display && "none" !== o.display && _.setPropertyValue(v, "display", o.display);
                            for (var b in y)
                                if ("element" !== b) {
                                    var w, M = y[b],
                                        A = "string" == typeof M.easing ? m.Easings[M.easing] : M.easing;
                                    if (w = 1 === p ? M.endValue : M.startValue + (M.endValue - M.startValue) * A(p), M.currentValue = w, _.Hooks.registered[b]) {
                                        var E = _.Hooks.getRoot(b),
                                            C = f.data(v, d).rootPropertyValueCache[E];
                                        C && (M.rootPropertyValue = C)
                                    }
                                    var x = _.setPropertyValue(v, b, M.currentValue + (0 === parseFloat(w) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                    _.Hooks.registered[b] && (f.data(v, d).rootPropertyValueCache[E] = _.Normalizations.registered[E] ? _.Normalizations.registered[E]("extract", null, x[1]) : x[1]), "transform" === x[0] && (S = !0)
                                }
                            o.mobileHA && f.data(v, d).transformCache.translate3d === i && (f.data(v, d).transformCache.translate3d = "(0, 0, 0)", S = !0), S && _.flushTransformCache(v)
                        }
                    }
                    o.display && "none" !== o.display && (m.State.calls[n][2].display = !1), 1 === p && c(n)
                }
        m.State.isTicking && h(u)
    }

    function c(e) {
        for (var t = m.State.calls[e][0], n = m.State.calls[e][1], a = m.State.calls[e][2], r = !1, s = 0, o = t.length; o > s; s++) {
            var l = t[s].element;
            if ("none" !== a.display || a.loop || _.setPropertyValue(l, "display", a.display), f.queue(l)[1] !== i && /\.velocityQueueEntryFlag/i.test(f.queue(l)[1]) || f.data(l, d) && (f.data(l, d).isAnimating = !1, f.data(l, d).rootPropertyValueCache = {}, a.mobileHA && !m.State.isGingerbread && (delete f.data(l, d).transformCache.translate3d, _.flushTransformCache(l))), s === o - 1 && !a.loop && a.complete) {
                var u = n.jquery ? n.get() : n;
                a.complete.call(u, u)
            }
            a.queue !== !1 && f.dequeue(l, a.queue)
        }
        m.State.calls[e] = !1;
        for (var c = 0, p = m.State.calls.length; p > c; c++)
            if (m.State.calls[c] !== !1) {
                r = !0;
                break
            }
        r === !1 && (m.State.isTicking = !1, delete m.State.calls, m.State.calls = [])
    }
    var d = "velocity",
        p = function() {
            if (n.documentMode) return n.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
            }
            return i
        }(),
        h = t.requestAnimationFrame || function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var n, i = (new Date).getTime();
                return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                    t(i + n)
                }, n)
            }
        }();
    if (7 >= p) {
        if (t.jQuery) return void(t.jQuery.fn.velocity = t.jQuery.fn.animate);
        throw new Error("For IE<=7, Velocity falls back to jQuery, which must first be loaded.")
    }
    if (8 === p && !t.jQuery) throw new Error("For IE8, Velocity requires jQuery to be loaded.");
    if (e.Velocity !== i && !e.Velocity.Utilities) throw new Error("Velocity's namespace is occupied. Aborting.");
    var f = t.jQuery || e.Velocity.Utilities,
        m = e.Velocity = e.velocity = f.extend(e.Velocity || {}, {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                prefixElement: n.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Sequences: {},
            Easings: {},
            defaults: {
                queue: "",
                duration: 400,
                easing: "swing",
                complete: null,
                display: null,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            animate: function() {},
            debug: !1
        });
    t.pageYOffset !== i ? (m.State.scrollAnchor = t, m.State.scrollPropertyLeft = "pageXOffset", m.State.scrollPropertyTop = "pageYOffset") : (m.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, m.State.scrollPropertyLeft = "scrollLeft", m.State.scrollPropertyTop = "scrollTop"),
    function() {
        var e = {};
        f.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, n) {
            e[n] = function(e) {
                return Math.pow(e, t + 2)
            }
        }), f.extend(e, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), f.each(e, function(e, t) {
            m.Easings["easeIn" + e] = t, m.Easings["easeOut" + e] = function(e) {
                return 1 - t(1 - e)
            }, m.Easings["easeInOut" + e] = function(e) {
                return .5 > e ? t(2 * e) / 2 : 1 - t(-2 * e + 2) / 2
            }
        }), m.Easings.linear = function(e) {
            return e
        }, m.Easings.swing = function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, m.Easings.ease = l(.25, .1, .25, 1), m.Easings["ease-in"] = l(.42, 0, 1, 1), m.Easings["ease-out"] = l(0, 0, .58, 1), m.Easings["ease-in-out"] = l(.42, 0, .58, 1), m.Easings.spring = function(e) {
            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
        }
    }();
    var _ = m.CSS = {
        RegEx: {
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Hooks: {
            templates: {
                color: ["Red Green Blue Alpha", "255 255 255 1"],
                backgroundColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderTopColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderRightColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderBottomColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderLeftColor: ["Red Green Blue Alpha", "255 255 255 1"],
                outlineColor: ["Red Green Blue Alpha", "255 255 255 1"],
                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                backgroundPosition: ["X Y", "0% 0%"],
                transformOrigin: ["X Y Z", "50% 50% 0%"],
                perspectiveOrigin: ["X Y", "50% 50%"]
            },
            registered: {},
            register: function() {
                var e, t, n;
                if (p)
                    for (e in _.Hooks.templates) {
                        t = _.Hooks.templates[e], n = t[0].split(" ");
                        var i = t[1].match(_.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), i.push(i.shift()), _.Hooks.templates[e] = [n.join(" "), i.join(" ")])
                    }
                for (e in _.Hooks.templates) {
                    t = _.Hooks.templates[e], n = t[0].split(" ");
                    for (var a in n) {
                        var r = e + n[a],
                            s = a;
                        _.Hooks.registered[r] = [e, s]
                    }
                }
            },
            getRoot: function(e) {
                var t = _.Hooks.registered[e];
                return t ? t[0] : e
            },
            cleanRootPropertyValue: function(e, t) {
                return _.RegEx.valueUnwrap.test(t) && (t = t.match(_.Hooks.RegEx.valueUnwrap)[1]), _.Values.isCSSNullValue(t) && (t = _.Hooks.templates[e][1]), t
            },
            extractValue: function(e, t) {
                var n = _.Hooks.registered[e];
                if (n) {
                    var i = n[0],
                        a = n[1];
                    return t = _.Hooks.cleanRootPropertyValue(i, t), t.toString().match(_.RegEx.valueSplit)[a]
                }
                return t
            },
            injectValue: function(e, t, n) {
                var i = _.Hooks.registered[e];
                if (i) {
                    var a, r, s = i[0],
                        o = i[1];
                    return n = _.Hooks.cleanRootPropertyValue(s, n), a = n.toString().match(_.RegEx.valueSplit), a[o] = t, r = a.join(" ")
                }
                return n
            }
        },
        Normalizations: {
            registered: {
                clip: function(e, t, n) {
                    switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var i;
                            return _.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(_.RegEx.valueUnwrap), i && (i = i[1].replace(/,(\s+)?/g, " "))), i;
                        case "inject":
                            return "rect(" + n + ")"
                    }
                },
                opacity: function(e, t, n) {
                    if (8 >= p) switch (e) {
                        case "name":
                            return "filter";
                        case "extract":
                            var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                            return n = i ? i[1] / 100 : 1;
                        case "inject":
                            return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                    } else switch (e) {
                        case "name":
                            return "opacity";
                        case "extract":
                            return n;
                        case "inject":
                            return n
                    }
                }
            },
            register: function() {
                function e(e) {
                    var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(n, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    }), t = i.exec(e), t ? "rgb(" + (parseInt(t[1], 16) + " " + parseInt(t[2], 16) + " " + parseInt(t[3], 16)) + ")" : "rgb(0 0 0)"
                }
                var t = ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"];
                9 >= p || (t = t.concat(["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]));
                for (var n = 0, a = t.length; a > n; n++)! function() {
                    var e = t[n];
                    _.Normalizations.registered[e] = function(t, n, a) {
                        switch (t) {
                            case "name":
                                return "transform";
                            case "extract":
                                return f.data(n, d).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : f.data(n, d).transformCache[e].replace(/[()]/g, "");
                            case "inject":
                                var r = !1;
                                switch (e.substr(0, e.length - 1)) {
                                    case "translate":
                                        r = !/(%|px|em|rem|\d)$/i.test(a);
                                        break;
                                    case "scal":
                                    case "scale":
                                        m.State.isAndroid && f.data(n, d).transformCache[e] === i && (a = 1), r = !/(\d)$/i.test(a);
                                        break;
                                    case "skew":
                                        r = !/(deg|\d)$/i.test(a);
                                        break;
                                    case "rotate":
                                        r = !/(deg|\d)$/i.test(a)
                                }
                                return r || (f.data(n, d).transformCache[e] = "(" + a + ")"), f.data(n, d).transformCache[e]
                        }
                    }
                }();
                for (var r = ["color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], n = 0, s = r.length; s > n; n++)! function() {
                    var t = r[n];
                    _.Normalizations.registered[t] = function(n, a, r) {
                        switch (n) {
                            case "name":
                                return t;
                            case "extract":
                                var s;
                                if (_.RegEx.wrappedValueAlreadyExtracted.test(r)) s = r;
                                else {
                                    var o, l = {
                                            aqua: "rgb(0, 255, 255);",
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            fuchsia: "rgb(255, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            lime: "rgb(0, 255, 0)",
                                            maroon: "rgb(128, 0, 0)",
                                            navy: "rgb(0, 0, 128)",
                                            olive: "rgb(128, 128, 0)",
                                            purple: "rgb(128, 0, 128)",
                                            red: "rgb(255, 0, 0)",
                                            silver: "rgb(192, 192, 192)",
                                            teal: "rgb(0, 128, 128)",
                                            white: "rgb(255, 255, 255)",
                                            yellow: "rgb(255, 255, 0)"
                                        };
                                    /^[A-z]+$/i.test(r) ? o = l[r] !== i ? l[r] : l.black : /^#([A-f\d]{3}){1,2}$/i.test(r) ? o = e(r) : /^rgba?\(/i.test(r) || (o = l.black), s = (o || r).toString().match(_.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                }
                                return 8 >= p || 3 !== s.split(" ").length || (s += " 1"), s;
                            case "inject":
                                return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                        }
                    }
                }()
            }
        },
        Names: {
            camelCase: function(e) {
                return e.replace(/-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                })
            },
            prefixCheck: function(e) {
                if (m.State.prefixMatches[e]) return [m.State.prefixMatches[e], !0];
                for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                    var a;
                    if (a = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                        return e.toUpperCase()
                    }), "string" == typeof m.State.prefixElement.style[a]) return m.State.prefixMatches[e] = a, [a, !0]
                }
                return [e, !1]
            }
        },
        Values: {
            isCSSNullValue: function(e) {
                return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
            },
            getUnitType: function(e) {
                return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e) ? "" : "px"
            },
            getDisplayType: function(e) {
                var t = e.tagName.toString().toLowerCase();
                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : "block"
            }
        },
        getPropertyValue: function(e, n, a, r) {
            function s(e, n) {
                var a = 0;
                if (8 >= p) a = f.css(e, n);
                else {
                    if (!r) {
                        if ("height" === n && "border-box" !== _.getPropertyValue(e, "boxSizing").toString().toLowerCase()) return e.offsetHeight - (parseFloat(_.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(_.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(_.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(_.getPropertyValue(e, "paddingBottom")) || 0);
                        if ("width" === n && "border-box" !== _.getPropertyValue(e, "boxSizing").toString().toLowerCase()) return e.offsetWidth - (parseFloat(_.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(_.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(_.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(_.getPropertyValue(e, "paddingRight")) || 0)
                    }
                    var o;
                    o = f.data(e, d) === i ? t.getComputedStyle(e, null) : f.data(e, d).computedStyle ? f.data(e, d).computedStyle : f.data(e, d).computedStyle = t.getComputedStyle(e, null), p && "borderColor" === n && (n = "borderTopColor"), a = 9 === p && "filter" === n ? o.getPropertyValue(n) : o[n], ("" === a || null === a) && (a = e.style[n])
                } if ("auto" === a && /^(top|right|bottom|left)$/i.test(n)) {
                    var l = s(e, "position");
                    ("fixed" === l || "absolute" === l && /top|left/i.test(n)) && (a = f(e).position()[n] + "px")
                }
                return a
            }
            var o;
            if (_.Hooks.registered[n]) {
                var l = n,
                    u = _.Hooks.getRoot(l);
                a === i && (a = _.getPropertyValue(e, _.Names.prefixCheck(u)[0])), _.Normalizations.registered[u] && (a = _.Normalizations.registered[u]("extract", e, a)), o = _.Hooks.extractValue(l, a)
            } else if (_.Normalizations.registered[n]) {
                var c, h;
                c = _.Normalizations.registered[n]("name", e), "transform" !== c && (h = s(e, _.Names.prefixCheck(c)[0]), _.Values.isCSSNullValue(h) && _.Hooks.templates[n] && (h = _.Hooks.templates[n][1])), o = _.Normalizations.registered[n]("extract", e, h)
            }
            return /^[\d-]/.test(o) || (o = s(e, _.Names.prefixCheck(n)[0])), _.Values.isCSSNullValue(o) && (o = 0), m.debug >= 2 && console.log("Get " + n + ": " + o), o
        },
        setPropertyValue: function(e, n, i, a, r) {
            var s = n;
            if ("scroll" === n) r.container ? r.container["scroll" + r.direction] = i : "Left" === r.direction ? t.scrollTo(i, r.alternateValue) : t.scrollTo(r.alternateValue, i);
            else if (_.Normalizations.registered[n] && "transform" === _.Normalizations.registered[n]("name", e)) _.Normalizations.registered[n]("inject", e, i), s = "transform", i = f.data(e, d).transformCache[n];
            else {
                if (_.Hooks.registered[n]) {
                    var o = n,
                        l = _.Hooks.getRoot(n);
                    a = a || _.getPropertyValue(e, l), i = _.Hooks.injectValue(o, i, a), n = l
                }
                if (_.Normalizations.registered[n] && (i = _.Normalizations.registered[n]("inject", e, i), n = _.Normalizations.registered[n]("name", e)), s = _.Names.prefixCheck(n)[0], 8 >= p) try {
                    e.style[s] = i
                } catch (u) {
                    console.log("Error setting [" + s + "] to [" + i + "]")
                } else e.style[s] = i;
                m.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
            }
            return [s, i]
        },
        flushTransformCache: function(e) {
            var t, n, i, a = "";
            for (t in f.data(e, d).transformCache) n = f.data(e, d).transformCache[t], "transformPerspective" !== t ? (9 === p && "rotateZ" === t && (t = "rotate"), a += t + n + " ") : i = n;
            i && (a = "perspective" + i + " " + a), _.setPropertyValue(e, "transform", a)
        }
    };
    _.Hooks.register(), _.Normalizations.register(), m.animate = function() {
        function e(e) {
            var t = e;
            return "string" == typeof e ? m.Easings[e] || (t = !1) : t = s(e) ? l.apply(null, e) : !1, t === !1 && (t = m.Easings[m.defaults.easing] ? m.defaults.easing : "swing"), t
        }

        function c() {
            function t() {
                function t(t) {
                    var n = i,
                        a = i,
                        u = i;
                    return s(t) ? (n = t[0], !s(t[1]) && /^[\d-]/.test(t[1]) || r(t[1]) ? u = t[1] : ("string" == typeof t[1] || s(t[1])) && (a = e(t[1]), t[2] && (u = t[2]))) : n = t, a = a || l.easing, r(n) && (n = n.call(o, S, v)), r(u) && (u = u.call(o, S, v)), [n || 0, a, u]
                }

                function h(e, t) {
                    var n, i;
                    return i = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                        return n = e, ""
                    }), n || (n = _.Values.getUnitType(e)), [i, n]
                }

                function b() {
                    var e = {
                        parent: o.parentNode,
                        position: _.getPropertyValue(o, "position"),
                        fontSize: _.getPropertyValue(o, "fontSize")
                    }, t = e.position === A.lastPosition && e.parent === A.lastParent,
                        i = e.fontSize === A.lastFontSize && e.parent === A.lastParent;
                    A.lastParent = e.parent, A.lastPosition = e.position, A.lastFontSize = e.fontSize, null === A.remToPxRatio && (A.remToPxRatio = parseFloat(_.getPropertyValue(n.body, "fontSize")) || 16);
                    var a = {
                        overflowX: null,
                        overflowY: null,
                        boxSizing: null,
                        width: null,
                        minWidth: null,
                        maxWidth: null,
                        height: null,
                        minHeight: null,
                        maxHeight: null,
                        paddingLeft: null
                    }, r = {}, s = 10;
                    if (r.remToPxRatio = A.remToPxRatio, p) var l = /^auto$/i.test(o.currentStyle.width),
                    u = /^auto$/i.test(o.currentStyle.height);
                    t && i || (a.overflowX = _.getPropertyValue(o, "overflowX"), a.overflowY = _.getPropertyValue(o, "overflowY"), a.boxSizing = _.getPropertyValue(o, "boxSizing"), a.width = _.getPropertyValue(o, "width", null, !0), a.minWidth = _.getPropertyValue(o, "minWidth"), a.maxWidth = _.getPropertyValue(o, "maxWidth") || "none", a.height = _.getPropertyValue(o, "height", null, !0), a.minHeight = _.getPropertyValue(o, "minHeight"), a.maxHeight = _.getPropertyValue(o, "maxHeight") || "none", a.paddingLeft = _.getPropertyValue(o, "paddingLeft")), t ? (r.percentToPxRatioWidth = A.lastPercentToPxWidth, r.percentToPxRatioHeight = A.lastPercentToPxHeight) : (_.setPropertyValue(o, "overflowX", "hidden"), _.setPropertyValue(o, "overflowY", "hidden"), _.setPropertyValue(o, "boxSizing", "content-box"), _.setPropertyValue(o, "width", s + "%"), _.setPropertyValue(o, "minWidth", s + "%"), _.setPropertyValue(o, "maxWidth", s + "%"), _.setPropertyValue(o, "height", s + "%"), _.setPropertyValue(o, "minHeight", s + "%"), _.setPropertyValue(o, "maxHeight", s + "%")), i ? r.emToPxRatio = A.lastEmToPx : _.setPropertyValue(o, "paddingLeft", s + "em"), t || (r.percentToPxRatioWidth = A.lastPercentToPxWidth = (parseFloat(_.getPropertyValue(o, "width", null, !0)) || 1) / s, r.percentToPxRatioHeight = A.lastPercentToPxHeight = (parseFloat(_.getPropertyValue(o, "height", null, !0)) || 1) / s), i || (r.emToPxRatio = A.lastEmToPx = (parseFloat(_.getPropertyValue(o, "paddingLeft")) || 1) / s);
                    for (var c in a) null !== a[c] && _.setPropertyValue(o, c, a[c]);
                    return p ? (l && _.setPropertyValue(o, "width", "auto"), u && _.setPropertyValue(o, "height", "auto")) : (_.setPropertyValue(o, "height", "auto"), a.height !== _.getPropertyValue(o, "height", null, !0) && _.setPropertyValue(o, "height", a.height), _.setPropertyValue(o, "width", "auto"), a.width !== _.getPropertyValue(o, "width", null, !0) && _.setPropertyValue(o, "width", a.width)), m.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), o), r
                }
                if (0 === S && y && r(y.begin)) {
                    var w = g.jquery ? g.get() : g;
                    y.begin.call(w, w)
                }
                if ("scroll" === M) {
                    var C, x, $, D = /^x$/i.test(l.axis) ? "Left" : "Top",
                        k = parseFloat(l.offset) || 0;
                    l.container ? l.container.jquery || l.container.nodeType ? (l.container = l.container[0] || l.container, C = l.container["scroll" + D], $ = C + f(o).position()[D.toLowerCase()] + k) : l.container = null : (C = m.State.scrollAnchor[m.State["scrollProperty" + D]], x = m.State.scrollAnchor[m.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], $ = f(o).offset()[D.toLowerCase()] + k), c = {
                        scroll: {
                            rootPropertyValue: !1,
                            startValue: C,
                            currentValue: C,
                            endValue: $,
                            unitType: "",
                            easing: l.easing,
                            scrollData: {
                                container: l.container,
                                direction: D,
                                alternateValue: x
                            }
                        },
                        element: o
                    }
                } else if ("reverse" === M) {
                    if (!f.data(o, d).tweensContainer) return void f.dequeue(o, l.queue);
                    "none" === f.data(o, d).opts.display && (f.data(o, d).opts.display = "block"), f.data(o, d).opts.loop = !1, f.data(o, d).opts.begin = null, f.data(o, d).opts.complete = null, l = f.extend({}, f.data(o, d).opts, y);
                    var L = f.extend(!0, {}, f.data(o, d).tweensContainer);
                    for (var F in L)
                        if ("element" !== F) {
                            var P = L[F].startValue;
                            L[F].startValue = L[F].currentValue = L[F].endValue, L[F].endValue = P, y && (L[F].easing = l.easing)
                        }
                    c = L
                } else if ("start" === M) {
                    var L;
                    f.data(o, d).tweensContainer && f.data(o, d).isAnimating === !0 && (L = f.data(o, d).tweensContainer);
                    for (var R in T) {
                        var I = t(T[R]),
                            N = I[0],
                            B = I[1],
                            H = I[2];
                        R = _.Names.camelCase(R);
                        var O = _.Hooks.getRoot(R),
                            z = !1;
                        if (_.Names.prefixCheck(O)[1] !== !1 || _.Normalizations.registered[O] !== i) {
                            l.display && "none" !== l.display && /opacity|filter/.test(R) && !H && 0 !== N && (H = 0), l._cacheValues && L && L[R] ? (H === i && (H = L[R].endValue + L[R].unitType), z = f.data(o, d).rootPropertyValueCache[O]) : _.Hooks.registered[R] ? H === i ? (z = _.getPropertyValue(o, O), H = _.getPropertyValue(o, R, z)) : z = _.Hooks.templates[O][1] : H === i && (H = _.getPropertyValue(o, R));
                            var j, W, U, Y;
                            j = h(R, H), H = j[0], U = j[1], j = h(R, N), N = j[0].replace(/^([+-\/*])=/, function(e, t) {
                                return Y = t, ""
                            }), W = j[1], H = parseFloat(H) || 0, N = parseFloat(N) || 0;
                            var V;
                            if ("%" === W && (/^(fontSize|lineHeight)$/.test(R) ? (N /= 100, W = "em") : /^scale/.test(R) ? (N /= 100, W = "") : /(Red|Green|Blue)$/i.test(R) && (N = N / 100 * 255, W = "")), /[\/*]/.test(Y)) W = U;
                            else if (U !== W && 0 !== H)
                                if (0 === N) W = U;
                                else {
                                    V = V || b();
                                    var G = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) ? "x" : "y";
                                    switch (U) {
                                        case "%":
                                            H *= "x" === G ? V.percentToPxRatioWidth : V.percentToPxRatioHeight;
                                            break;
                                        case "em":
                                            H *= V.emToPxRatio;
                                            break;
                                        case "rem":
                                            H *= V.remToPxRatio;
                                            break;
                                        case "px":
                                    }
                                    switch (W) {
                                        case "%":
                                            H *= 1 / ("x" === G ? V.percentToPxRatioWidth : V.percentToPxRatioHeight);
                                            break;
                                        case "em":
                                            H *= 1 / V.emToPxRatio;
                                            break;
                                        case "rem":
                                            H *= 1 / V.remToPxRatio;
                                            break;
                                        case "px":
                                    }
                                }
                            switch (Y) {
                                case "+":
                                    N = H + N;
                                    break;
                                case "-":
                                    N = H - N;
                                    break;
                                case "*":
                                    N = H * N;
                                    break;
                                case "/":
                                    N = H / N
                            }
                            c[R] = {
                                rootPropertyValue: z,
                                startValue: H,
                                currentValue: H,
                                endValue: N,
                                unitType: W,
                                easing: B
                            }, m.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(c[R]), o)
                        } else m.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                    }
                    c.element = o
                }
                c.element && (E.push(c), f.data(o, d).tweensContainer = c, f.data(o, d).opts = l, f.data(o, d).isAnimating = !0, S === v - 1 ? (m.State.calls.length > 1e4 && (m.State.calls = a(m.State.calls)), m.State.calls.push([E, g, l]), m.State.isTicking === !1 && (m.State.isTicking = !0, u())) : S++)
            }
            var o = this,
                l = f.extend({}, m.defaults, y),
                c = {};
            if ("stop" === M) return f.queue(o, "string" == typeof y ? y : "", []), !0;
            switch (f.data(o, d) === i && f.data(o, d, {
                isAnimating: !1,
                computedStyle: null,
                tweensContainer: null,
                rootPropertyValueCache: {},
                transformCache: {}
            }), l.duration.toString().toLowerCase()) {
                case "fast":
                    l.duration = 200;
                    break;
                case "normal":
                    l.duration = 400;
                    break;
                case "slow":
                    l.duration = 600;
                    break;
                default:
                    l.duration = parseFloat(l.duration) || 1
            }
            l.easing = e(l.easing), /^\d/.test(l.delay) && f.queue(o, l.queue, function(e) {
                m.velocityQueueEntryFlag = !0, setTimeout(e, parseFloat(l.delay))
            }), l.display && (l.display = l.display.toString().toLowerCase()), l.mobileHA = l.mobileHA && m.State.isMobile, l.queue === !1 ? t() : f.queue(o, l.queue, function(e) {
                m.velocityQueueEntryFlag = !0, t(e)
            }), "" !== l.queue && "fx" !== l.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
        }
        var h, g, T, y;
        this.jquery || t.Zepto && t.Zepto.zepto.isZ(this) ? (h = !0, g = this, T = arguments[0], y = arguments[1]) : (h = !1, g = arguments[0].jquery ? [].slice.call(arguments[0]) : arguments[0], T = arguments[1], y = arguments[2]);
        var v = o(g) || s(g) ? g.length : 1,
            S = 0;
        if ("stop" !== T && !f.isPlainObject(y)) {
            var b = h ? 1 : 2;
            y = {};
            for (var w = b; w < arguments.length; w++)!s(arguments[w]) && /^\d/.test(arguments[w]) ? y.duration = parseFloat(arguments[w]) : "string" == typeof arguments[w] ? y.easing = arguments[w] : s(arguments[w]) && 4 === arguments[w].length ? y.easing = arguments[w] : r(arguments[w]) && (y.complete = arguments[w])
        }
        var M;
        switch (T) {
            case "scroll":
                M = "scroll";
                break;
            case "reverse":
                M = "reverse";
                break;
            case "stop":
                M = "stop";
                break;
            default:
                if (!f.isPlainObject(T) || f.isEmptyObject(T)) return "string" == typeof T && m.Sequences[T] ? (f.each(g, function(e, t) {
                    m.Sequences[T].call(t, t, y || {}, e, v)
                }), g) : (m.debug && console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."), g);
                M = "start"
        }
        var A = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPxRatio: null
        }, E = [];
        if (y && y.complete && !r(y.complete) && (y.complete = null), h) g.each(c);
        else if (1 === v && g.nodeType) c.call(g);
        else
            for (var C in g) g[C].nodeType && c.call(g[C]);
        var x, $ = f.extend({}, m.defaults, y);
        if ($.loop = parseInt($.loop), x = 2 * $.loop - 1, $.loop)
            for (var D = 0; x > D; D++) {
                var k = {
                    delay: $.delay
                };
                $.complete && D === x - 1 && (k.complete = $.complete), h ? g.velocity("reverse", k) : m.animate(g, "reverse", k)
            }
        return g
    };
    var g = t.jQuery || t.Zepto;
    g && (g.fn.velocity = m.animate, g.fn.velocity.defaults = m.defaults), f.each(["Down", "Up"], function(e, t) {
        m.Sequences["slide" + t] = function(e, n) {
            var i = f.extend({}, n),
                a = {
                    height: null,
                    marginTop: null,
                    marginBottom: null,
                    paddingTop: null,
                    paddingBottom: null,
                    overflow: null,
                    overflowX: null,
                    overflowY: null
                }, r = i.begin,
                s = i.complete,
                o = !1;
            i.display = "Down" === t ? i.display || "block" : i.display || "none", i.begin = function() {
                function n() {
                    e.style.display = "block", a.height = m.CSS.getPropertyValue(e, "height"), e.style.height = "auto", m.CSS.getPropertyValue(e, "height") === a.height && (o = !0), m.CSS.setPropertyValue(e, "height", a.height + "px")
                }
                if ("Down" === t) {
                    a.overflow = [m.CSS.getPropertyValue(e, "overflow"), 0], a.overflowX = [m.CSS.getPropertyValue(e, "overflowX"), 0], a.overflowY = [m.CSS.getPropertyValue(e, "overflowY"), 0], e.style.overflow = "hidden", e.style.overflowX = "visible", e.style.overflowY = "hidden", n();
                    for (var i in a) /^overflow/.test(i) || (a[i] = [m.CSS.getPropertyValue(e, i), 0]);
                    e.style.display = "none"
                } else {
                    n();
                    for (var i in a) a[i] = [0, m.CSS.getPropertyValue(e, i)];
                    e.style.overflow = "hidden", e.style.overflowX = "visible", e.style.overflowY = "hidden"
                }
                r && r.call(e, e)
            }, i.complete = function(e) {
                var n = "Down" === t ? 0 : 1;
                o === !0 ? a.height[n] = "auto" : a.height[n] += "px";
                for (var i in a) e.style[i] = a[i][n];
                s && s.call(e, e)
            }, m.animate(e, a, i)
        }
    }), f.each(["In", "Out"], function(e, t) {
        m.Sequences["fade" + t] = function(e, n, i, a) {
            var r = f.extend({}, n),
                s = {
                    opacity: "In" === t ? 1 : 0
                };
            i !== a - 1 && (r.complete = r.begin = null), r.display || (r.display = "In" === t ? m.CSS.Values.getDisplayType(e) : "none"), m.animate(this, s, r)
        }
    })
}(window.jQuery || window.Zepto || window, window, document),
function() {
    var e = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        }, t = [].slice;
    ! function(e, t) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
            return t(n, e)
        }) : t(e.jQuery, e)
    }(window, function(n, i) {
        var a, r, s, o, l, u, c, d, p, h, f, m, _, g, T, y;
        return a = n(i), d = e.call(i, "ontouchstart") >= 0, o = {
            horizontal: {},
            vertical: {}
        }, l = 1, c = {}, u = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", _ = 1, g = "waypoints-waypoint-ids", T = "waypoint", y = "waypoints", r = function() {
            function e(e) {
                var t = this;
                this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: e.scrollLeft(),
                    y: e.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[u] = this.id, c[this.id] = this, e.bind(m, function() {
                    var e;
                    return t.didScroll || d ? void 0 : (t.didScroll = !0, e = function() {
                        return t.doScroll(), t.didScroll = !1
                    }, i.setTimeout(e, n[y].settings.scrollThrottle))
                }), e.bind(f, function() {
                    var e;
                    return t.didResize ? void 0 : (t.didResize = !0, e = function() {
                        return n[y]("refresh"), t.didResize = !1
                    }, i.setTimeout(e, n[y].settings.resizeThrottle))
                })
            }
            return e.prototype.doScroll = function() {
                var e, t = this;
                return e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || e.vertical.oldScroll && e.vertical.newScroll || n[y]("refresh"), n.each(e, function(e, i) {
                    var a, r, s;
                    return s = [], r = i.newScroll > i.oldScroll, a = r ? i.forward : i.backward, n.each(t.waypoints[e], function(e, t) {
                        var n, a;
                        return i.oldScroll < (n = t.offset) && n <= i.newScroll ? s.push(t) : i.newScroll < (a = t.offset) && a <= i.oldScroll ? s.push(t) : void 0
                    }), s.sort(function(e, t) {
                        return e.offset - t.offset
                    }), r || s.reverse(), n.each(s, function(e, t) {
                        return t.options.continuous || e === s.length - 1 ? t.trigger([a]) : void 0
                    })
                }), this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll
                }
            }, e.prototype.refresh = function() {
                var e, t, i, a = this;
                return i = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                    horizontal: {
                        contextOffset: i ? 0 : t.left,
                        contextScroll: i ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: i ? 0 : t.top,
                        contextScroll: i ? 0 : this.oldScroll.y,
                        contextDimension: i ? n[y]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(e, function(e, t) {
                    return n.each(a.waypoints[e], function(e, i) {
                        var a, r, s, o, l;
                        return a = i.options.offset, s = i.offset, r = n.isWindow(i.element) ? 0 : i.$element.offset()[t.offsetProp], n.isFunction(a) ? a = a.apply(i.element) : "string" == typeof a && (a = parseFloat(a), i.options.offset.indexOf("%") > -1 && (a = Math.ceil(t.contextDimension * a / 100))), i.offset = r - t.contextOffset + t.contextScroll - a, i.options.onlyOnScroll && null != s || !i.enabled ? void 0 : null !== s && s < (o = t.oldScroll) && o <= i.offset ? i.trigger([t.backward]) : null !== s && s > (l = t.oldScroll) && l >= i.offset ? i.trigger([t.forward]) : null === s && t.oldScroll >= i.offset ? i.trigger([t.forward]) : void 0
                    })
                })
            }, e.prototype.checkEmpty = function() {
                return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete c[this.id]) : void 0
            }, e
        }(), s = function() {
            function e(e, t, i) {
                var a, r;
                "bottom-in-view" === i.offset && (i.offset = function() {
                    var e;
                    return e = n[y]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                }), this.$element = e, this.element = e[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = t, this.enabled = i.enabled, this.id = "waypoints" + _++, this.offset = null, this.options = i, t.waypoints[this.axis][this.id] = this, o[this.axis][this.id] = this, a = null != (r = this.element[g]) ? r : [], a.push(this.id), this.element[g] = a
            }
            return e.prototype.trigger = function(e) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, e.prototype.disable = function() {
                return this.enabled = !1
            }, e.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, e.prototype.destroy = function() {
                return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, e.getWaypointsByElement = function(e) {
                var t, i;
                return (i = e[g]) ? (t = n.extend({}, o.horizontal, o.vertical), n.map(i, function(e) {
                    return t[e]
                })) : []
            }, e
        }(), h = {
            init: function(e, t) {
                var i;
                return t = n.extend({}, n.fn[T].defaults, t), null == (i = t.handler) && (t.handler = e), this.each(function() {
                    var e, i, a, o;
                    return e = n(this), a = null != (o = t.context) ? o : n.fn[T].defaults.context, n.isWindow(a) || (a = e.closest(a)), a = n(a), i = c[a[0][u]], i || (i = new r(a)), new s(e, i, t)
                }), n[y]("refresh"), this
            },
            disable: function() {
                return h._invoke.call(this, "disable")
            },
            enable: function() {
                return h._invoke.call(this, "enable")
            },
            destroy: function() {
                return h._invoke.call(this, "destroy")
            },
            prev: function(e, t) {
                return h._traverse.call(this, e, t, function(e, t, n) {
                    return t > 0 ? e.push(n[t - 1]) : void 0
                })
            },
            next: function(e, t) {
                return h._traverse.call(this, e, t, function(e, t, n) {
                    return t < n.length - 1 ? e.push(n[t + 1]) : void 0
                })
            },
            _traverse: function(e, t, a) {
                var r, s;
                return null == e && (e = "vertical"), null == t && (t = i), s = p.aggregate(t), r = [], this.each(function() {
                    var t;
                    return t = n.inArray(this, s[e]), a(r, t, s[e])
                }), this.pushStack(r)
            },
            _invoke: function(e) {
                return this.each(function() {
                    var t;
                    return t = s.getWaypointsByElement(this), n.each(t, function(t, n) {
                        return n[e](), !0
                    })
                }), this
            }
        }, n.fn[T] = function() {
            var e, i;
            return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[i] ? h[i].apply(this, e) : n.isFunction(i) ? h.init.apply(this, arguments) : n.isPlainObject(i) ? h.init.apply(this, [null, i]) : n.error(i ? "The " + i + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[T].defaults = {
            context: i,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, p = {
            refresh: function() {
                return n.each(c, function(e, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function() {
                var e;
                return null != (e = i.innerHeight) ? e : a.height()
            },
            aggregate: function(e) {
                var t, i, a;
                return t = o, e && (t = null != (a = c[n(e)[0][u]]) ? a.waypoints : void 0), t ? (i = {
                    horizontal: [],
                    vertical: []
                }, n.each(i, function(e, a) {
                    return n.each(t[e], function(e, t) {
                        return a.push(t)
                    }), a.sort(function(e, t) {
                        return e.offset - t.offset
                    }), i[e] = n.map(a, function(e) {
                        return e.element
                    }), i[e] = n.unique(i[e])
                }), i) : []
            },
            above: function(e) {
                return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                    return t.offset <= e.oldScroll.y
                })
            },
            below: function(e) {
                return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                    return t.offset > e.oldScroll.y
                })
            },
            left: function(e) {
                return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                    return t.offset <= e.oldScroll.x
                })
            },
            right: function(e) {
                return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                    return t.offset > e.oldScroll.x
                })
            },
            enable: function() {
                return p._invoke("enable")
            },
            disable: function() {
                return p._invoke("disable")
            },
            destroy: function() {
                return p._invoke("destroy")
            },
            extendFn: function(e, t) {
                return h[e] = t
            },
            _invoke: function(e) {
                var t;
                return t = n.extend({}, o.vertical, o.horizontal), n.each(t, function(t, n) {
                    return n[e](), !0
                })
            },
            _filter: function(e, t, i) {
                var a, r;
                return (a = c[n(e)[0][u]]) ? (r = [], n.each(a.waypoints[t], function(e, t) {
                    return i(a, t) ? r.push(t) : void 0
                }), r.sort(function(e, t) {
                    return e.offset - t.offset
                }), n.map(r, function(e) {
                    return e.element
                })) : []
            }
        }, n[y] = function() {
            var e, n;
            return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(null, e) : p.aggregate.call(null, n)
        }, n[y].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, a.on("load.waypoints", function() {
            return n[y]("refresh")
        })
    })
}.call(this),
function(e) {
    var t = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: ""
    }, n = e(window),
        i = e(document),
        a = [],
        r = n.height(),
        s = function() {
            for (var t = n.scrollTop(), s = i.height(), o = s - r, l = t > o ? o - t : 0, u = 0; u < a.length; u++) {
                var c = a[u],
                    d = c.stickyWrapper.offset().top,
                    p = d - c.topSpacing - l;
                if (p >= t) null !== c.currentTop && (c.stickyElement.css("position", "").css("top", ""), c.stickyElement.parent().removeClass(c.className), c.currentTop = null);
                else {
                    var h = s - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - t - l;
                    0 > h ? h += c.topSpacing : h = c.topSpacing, c.currentTop != h && (c.stickyElement.css("position", "fixed").css("top", h), "undefined" != typeof c.getWidthFrom && c.stickyElement.css("width", e(c.getWidthFrom).width()), c.stickyElement.parent().addClass(c.className), c.currentTop = h)
                }
            }
        }, o = function() {
            r = n.height()
        }, l = {
            init: function(n) {
                var i = e.extend(t, n);
                return this.each(function() {
                    var t = e(this),
                        n = t.attr("id"),
                        r = e("<div></div>").attr("id", n + "-sticky-wrapper").addClass(i.wrapperClassName);
                    t.wrapAll(r), i.center && t.parent().css({
                        width: t.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" == t.css("float") && t.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    });
                    var s = t.parent();
                    s.css("height", t.outerHeight()), a.push({
                        topSpacing: i.topSpacing,
                        bottomSpacing: i.bottomSpacing,
                        stickyElement: t,
                        currentTop: null,
                        stickyWrapper: s,
                        className: i.className,
                        getWidthFrom: i.getWidthFrom
                    })
                })
            },
            update: s,
            unstick: function() {
                return this.each(function() {
                    var t = e(this);
                    removeIdx = -1;
                    for (var n = 0; n < a.length; n++) a[n].stickyElement.get(0) == t.get(0) && (removeIdx = n); - 1 != removeIdx && (a.splice(removeIdx, 1), t.unwrap(), t.removeAttr("style"))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", s, !1), window.addEventListener("resize", o, !1)) : window.attachEvent && (window.attachEvent("onscroll", s), window.attachEvent("onresize", o)), e.fn.sticky = function(t) {
        return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
    }, e.fn.unstick = function(t) {
        return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sticky") : l.unstick.apply(this, arguments)
    }, e(function() {
        setTimeout(s, 0)
    })
}(jQuery),
function() {
    var e = !1;
    window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function t(n) {
        function i() {
            !e && this._init && this._init.apply(this, arguments)
        }
        var a = this.prototype;
        e = !0;
        var r = new this;
        e = !1;
        for (var s in n) r[s] = "function" == typeof n[s] && "function" == typeof a[s] ? function(e, t) {
            return function() {
                var n = this._super;
                this._super = function(t) {
                    return a[e].apply(this, t)
                };
                var i = t.apply(this, arguments);
                return this._super = n, i
            }
        }(s, n[s]) : n[s];
        return i.prototype = r, i.prototype.constructor = i, i.extend = t, i
    }
}(),
function($) {
    function camelCase(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return "is-" + this.name
        },
        _init: function() {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var e = camelCase(this.name);
            $[e] = this, $.fn[e] = function(t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return $[e]._isNotChained(t, n) ? $[e][t].apply($[e], [this[0]].concat(n)) : this.each(function() {
                    if ("string" == typeof t) {
                        if ("_" === t[0] || !$[e][t]) throw "Unknown method: " + t;
                        $[e][t].apply($[e], [this].concat(n))
                    } else $[e]._attach(this, t)
                })
            }
        },
        setDefaults: function(e) {
            $.extend(this.defaultOptions, e || {})
        },
        _isNotChained: function(e, t) {
            return "option" === e && (0 === t.length || 1 === t.length && "string" == typeof t[0]) ? !0 : $.inArray(e, this._getters) > -1
        },
        _attach: function(e, t) {
            if (e = $(e), !e.hasClass(this._getMarker())) {
                e.addClass(this._getMarker()), t = $.extend({}, this.defaultOptions, this._getMetadata(e), t || {});
                var n = $.extend({
                    name: this.name,
                    elem: e,
                    options: t
                }, this._instSettings(e, t));
                e.data(this.name, n), this._postAttach(e, n), this.option(e, t)
            }
        },
        _instSettings: function() {
            return {}
        },
        _postAttach: function() {},
        _getMetadata: function(d) {
            try {
                var f = d.data(this.name.toLowerCase()) || "";
                f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(e, t, n) {
                    var i = f.substring(0, n).match(/"/g);
                    return i && i.length % 2 !== 0 ? t + ":" : '"' + t + '":'
                }), f = $.parseJSON("{" + f + "}");
                for (var g in f) {
                    var h = f[g];
                    "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                }
                return f
            } catch (e) {
                return {}
            }
        },
        _getInst: function(e) {
            return $(e).data(this.name) || {}
        },
        option: function(e, t, n) {
            e = $(e);
            var i = e.data(this.name);
            if (!t || "string" == typeof t && null == n) {
                var a = (i || {}).options;
                return a && t ? a[t] : a
            }
            if (e.hasClass(this._getMarker())) {
                var a = t || {};
                "string" == typeof t && (a = {}, a[t] = n), this._optionsChanged(e, i, a), $.extend(i.options, a)
            }
        },
        _optionsChanged: function() {},
        destroy: function(e) {
            e = $(e), e.hasClass(this._getMarker()) && (this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function() {}
    }), $.JQPlugin = {
        createPlugin: function(e, t) {
            "object" == typeof e && (t = e, e = "JQPlugin"), e = camelCase(e);
            var n = camelCase(t.name);
            JQClass.classes[n] = JQClass.classes[e].extend(t), new JQClass.classes[n]
        }
    }
}(jQuery),
function(e) {
    var t = "countdown",
        n = 0,
        i = 1,
        a = 2,
        r = 3,
        s = 4,
        o = 5,
        l = 6;
    e.JQPlugin.createPlugin({
        name: t,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: t + "-rtl",
        _sectionClass: t + "-section",
        _amountClass: t + "-amount",
        _periodClass: t + "-period",
        _rowClass: t + "-row",
        _holdingClass: t + "-holding",
        _showClass: t + "-show",
        _descrClass: t + "-descr",
        _timerElems: [],
        _init: function() {
            function t(e) {
                var o = 1e12 > e ? a ? performance.now() + performance.timing.navigationStart : i() : e || i();
                o - s >= 1e3 && (n._updateElems(), s = o), r(t)
            }
            var n = this;
            this._super(), this._serverSyncs = [];
            var i = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, a = window.performance && "function" == typeof window.performance.now,
                r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                s = 0;
            !r || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function() {
                n._updateElems()
            }, 980)) : (s = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(), r(t))
        },
        UTCDate: function(e, t, n, i, a, r, s, o) {
            "object" == typeof t && t.constructor == Date && (o = t.getMilliseconds(), s = t.getSeconds(), r = t.getMinutes(), a = t.getHours(), i = t.getDate(), n = t.getMonth(), t = t.getFullYear());
            var l = new Date;
            return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(n || 0), l.setUTCDate(i || 1), l.setUTCHours(a || 0), l.setUTCMinutes((r || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(s || 0), l.setUTCMilliseconds(o || 0), l
        },
        periodsToSeconds: function(e) {
            return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
        },
        _instSettings: function() {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(e) {
            this._hasElem(e) || this._timerElems.push(e)
        },
        _hasElem: function(t) {
            return e.inArray(t, this._timerElems) > -1
        },
        _removeElem: function(t) {
            this._timerElems = e.map(this._timerElems, function(e) {
                return e == t ? null : e
            })
        },
        _updateElems: function() {
            for (var e = this._timerElems.length - 1; e >= 0; e--) this._updateCountdown(this._timerElems[e])
        },
        _optionsChanged: function(t, n, i) {
            i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(n.options, i);
            var a = n.options.timezone != i.timezone;
            e.extend(n.options, i), this._adjustSettings(t, n, null != i.until || null != i.since || a);
            var r = new Date;
            (n._since && n._since < r || n._until && n._until > r) && this._addElem(t[0]), this._updateCountdown(t, n)
        },
        _updateCountdown: function(t, n) {
            if (t = t.jquery ? t : e(t), n = n || t.data(this.name)) {
                if (t.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL), e.isFunction(n.options.onTick)) {
                    var i = "lap" != n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
                    (1 == n.options.tickInterval || this.periodsToSeconds(i) % n.options.tickInterval == 0) && n.options.onTick.apply(t[0], [i])
                }
                var a = "pause" != n._hold && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime());
                if (a && !n._expiring) {
                    if (n._expiring = !0, this._hasElem(t[0]) || n.options.alwaysExpire) {
                        if (this._removeElem(t[0]), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t[0], []), n.options.expiryText) {
                            var r = n.options.layout;
                            n.options.layout = n.options.expiryText, this._updateCountdown(t[0], n), n.options.layout = r
                        }
                        n.options.expiryUrl && (window.location = n.options.expiryUrl)
                    }
                    n._expiring = !1
                } else "pause" == n._hold && this._removeElem(t[0])
            }
        },
        _resetExtraLabels: function(e, t) {
            var n = !1;
            for (var i in t)
                if ("whichLabels" != i && i.match(/[Ll]abels/)) {
                    n = !0;
                    break
                }
            if (n)
                for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = null)
        },
        _adjustSettings: function(t, n, i) {
            for (var a, r = 0, s = null, o = 0; o < this._serverSyncs.length; o++)
                if (this._serverSyncs[o][0] == n.options.serverSync) {
                    s = this._serverSyncs[o][1];
                    break
                }
            if (null != s) r = n.options.serverSync ? s : 0, a = new Date;
            else {
                var l = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t[0], []) : null;
                a = new Date, r = l ? a.getTime() - l.getTime() : 0, this._serverSyncs.push([n.options.serverSync, r])
            }
            var u = n.options.timezone;
            u = null == u ? -a.getTimezoneOffset() : u, (i || !i && null == n._until && null == n._since) && (n._since = n.options.since, null != n._since && (n._since = this.UTCDate(u, this._determineTime(n._since, null)), n._since && r && n._since.setMilliseconds(n._since.getMilliseconds() + r)), n._until = this.UTCDate(u, this._determineTime(n.options.until, a)), r && n._until.setMilliseconds(n._until.getMilliseconds() + r)), n._show = this._determineShow(n)
        },
        _preDestroy: function(e) {
            this._removeElem(e[0]), e.empty()
        },
        pause: function(e) {
            this._hold(e, "pause")
        },
        lap: function(e) {
            this._hold(e, "lap")
        },
        resume: function(e) {
            this._hold(e, null)
        },
        toggle: function(t) {
            var n = e.data(t, this.name) || {};
            this[n._hold ? "resume" : "pause"](t)
        },
        toggleLap: function(t) {
            var n = e.data(t, this.name) || {};
            this[n._hold ? "resume" : "lap"](t)
        },
        _hold: function(t, n) {
            var i = e.data(t, this.name);
            if (i) {
                if ("pause" == i._hold && !n) {
                    i._periods = i._savePeriods;
                    var a = i._since ? "-" : "+";
                    i[i._since ? "_since" : "_until"] = this._determineTime(a + i._periods[0] + "y" + a + i._periods[1] + "o" + a + i._periods[2] + "w" + a + i._periods[3] + "d" + a + i._periods[4] + "h" + a + i._periods[5] + "m" + a + i._periods[6] + "s"), this._addElem(t)
                }
                i._hold = n, i._savePeriods = "pause" == n ? i._periods : null, e.data(t, this.name, i), this._updateCountdown(t, i)
            }
        },
        getTimes: function(t) {
            var n = e.data(t, this.name);
            return n ? "pause" == n._hold ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
        },
        _determineTime: function(e, t) {
            var n = this,
                i = function(e) {
                    var t = new Date;
                    return t.setTime(t.getTime() + 1e3 * e), t
                }, a = function(e) {
                    e = e.toLowerCase();
                    for (var t = new Date, i = t.getFullYear(), a = t.getMonth(), r = t.getDate(), s = t.getHours(), o = t.getMinutes(), l = t.getSeconds(), u = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, c = u.exec(e); c;) {
                        switch (c[2] || "s") {
                            case "s":
                                l += parseInt(c[1], 10);
                                break;
                            case "m":
                                o += parseInt(c[1], 10);
                                break;
                            case "h":
                                s += parseInt(c[1], 10);
                                break;
                            case "d":
                                r += parseInt(c[1], 10);
                                break;
                            case "w":
                                r += 7 * parseInt(c[1], 10);
                                break;
                            case "o":
                                a += parseInt(c[1], 10), r = Math.min(r, n._getDaysInMonth(i, a));
                                break;
                            case "y":
                                i += parseInt(c[1], 10), r = Math.min(r, n._getDaysInMonth(i, a))
                        }
                        c = u.exec(e)
                    }
                    return new Date(i, a, r, s, o, l, 0)
                }, r = null == e ? t : "string" == typeof e ? a(e) : "number" == typeof e ? i(e) : e;
            return r && r.setMilliseconds(0), r
        },
        _getDaysInMonth: function(e, t) {
            return 32 - new Date(e, t, 32).getDate()
        },
        _normalLabels: function(e) {
            return e
        },
        _generateHTML: function(t) {
            var u = this;
            t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
            for (var c = !1, d = 0, p = t.options.significant, h = e.extend({}, t._show), f = n; l >= f; f++) c |= "?" == t._show[f] && t._periods[f] > 0, h[f] = "?" != t._show[f] || c ? t._show[f] : null, d += h[f] ? 1 : 0, p -= t._periods[f] > 0 ? 1 : 0;
            for (var m = [!1, !1, !1, !1, !1, !1, !1], f = l; f >= n; f--) t._show[f] && (t._periods[f] ? m[f] = !0 : (m[f] = p > 0, p--));
            var _ = t.options.compact ? t.options.compactLabels : t.options.labels,
                g = t.options.whichLabels || this._normalLabels,
                T = function(e) {
                    var n = t.options["compactLabels" + g(t._periods[e])];
                    return h[e] ? u._translateDigits(t, t._periods[e]) + (n ? n[e] : _[e]) + " " : ""
                }, y = t.options.padZeroes ? 2 : 1,
                v = function(e) {
                    var n = t.options["labels" + g(t._periods[e])];
                    return !t.options.significant && h[e] || t.options.significant && m[e] ? '<span class="' + u._sectionClass + '"><span class="' + u._amountClass + '">' + u._minDigits(t, t._periods[e], y) + '</span><span class="' + u._periodClass + '">' + (n ? n[e] : _[e]) + "</span></span>" : ""
                };
            return t.options.layout ? this._buildLayout(t, h, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + T(n) + T(i) + T(a) + T(r) + (h[s] ? this._minDigits(t, t._periods[s], 2) : "") + (h[o] ? (h[s] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[o], 2) : "") + (h[l] ? (h[s] || h[o] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || d) + (t._hold ? " " + this._holdingClass : "") + '">' + v(n) + v(i) + v(a) + v(r) + v(s) + v(o) + v(l)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
        },
        _buildLayout: function(t, u, c, d, p, h) {
            for (var f = t.options[d ? "compactLabels" : "labels"], m = t.options.whichLabels || this._normalLabels, _ = function(e) {
                    return (t.options[(d ? "compactLabels" : "labels") + m(t._periods[e])] || f)[e]
                }, g = function(e, n) {
                    return t.options.digits[Math.floor(e / n) % 10]
                }, T = {
                    desc: t.options.description,
                    sep: t.options.timeSeparator,
                    yl: _(n),
                    yn: this._minDigits(t, t._periods[n], 1),
                    ynn: this._minDigits(t, t._periods[n], 2),
                    ynnn: this._minDigits(t, t._periods[n], 3),
                    y1: g(t._periods[n], 1),
                    y10: g(t._periods[n], 10),
                    y100: g(t._periods[n], 100),
                    y1000: g(t._periods[n], 1e3),
                    ol: _(i),
                    on: this._minDigits(t, t._periods[i], 1),
                    onn: this._minDigits(t, t._periods[i], 2),
                    onnn: this._minDigits(t, t._periods[i], 3),
                    o1: g(t._periods[i], 1),
                    o10: g(t._periods[i], 10),
                    o100: g(t._periods[i], 100),
                    o1000: g(t._periods[i], 1e3),
                    wl: _(a),
                    wn: this._minDigits(t, t._periods[a], 1),
                    wnn: this._minDigits(t, t._periods[a], 2),
                    wnnn: this._minDigits(t, t._periods[a], 3),
                    w1: g(t._periods[a], 1),
                    w10: g(t._periods[a], 10),
                    w100: g(t._periods[a], 100),
                    w1000: g(t._periods[a], 1e3),
                    dl: _(r),
                    dn: this._minDigits(t, t._periods[r], 1),
                    dnn: this._minDigits(t, t._periods[r], 2),
                    dnnn: this._minDigits(t, t._periods[r], 3),
                    d1: g(t._periods[r], 1),
                    d10: g(t._periods[r], 10),
                    d100: g(t._periods[r], 100),
                    d1000: g(t._periods[r], 1e3),
                    hl: _(s),
                    hn: this._minDigits(t, t._periods[s], 1),
                    hnn: this._minDigits(t, t._periods[s], 2),
                    hnnn: this._minDigits(t, t._periods[s], 3),
                    h1: g(t._periods[s], 1),
                    h10: g(t._periods[s], 10),
                    h100: g(t._periods[s], 100),
                    h1000: g(t._periods[s], 1e3),
                    ml: _(o),
                    mn: this._minDigits(t, t._periods[o], 1),
                    mnn: this._minDigits(t, t._periods[o], 2),
                    mnnn: this._minDigits(t, t._periods[o], 3),
                    m1: g(t._periods[o], 1),
                    m10: g(t._periods[o], 10),
                    m100: g(t._periods[o], 100),
                    m1000: g(t._periods[o], 1e3),
                    sl: _(l),
                    sn: this._minDigits(t, t._periods[l], 1),
                    snn: this._minDigits(t, t._periods[l], 2),
                    snnn: this._minDigits(t, t._periods[l], 3),
                    s1: g(t._periods[l], 1),
                    s10: g(t._periods[l], 10),
                    s100: g(t._periods[l], 100),
                    s1000: g(t._periods[l], 1e3)
                }, y = c, v = n; l >= v; v++) {
                var S = "yowdhms".charAt(v),
                    b = new RegExp("\\{" + S + "<\\}([\\s\\S]*)\\{" + S + ">\\}", "g");
                y = y.replace(b, !p && u[v] || p && h[v] ? "$1" : "")
            }
            return e.each(T, function(e, t) {
                var n = new RegExp("\\{" + e + "\\}", "g");
                y = y.replace(n, t)
            }), y
        },
        _minDigits: function(e, t, n) {
            return t = "" + t, t.length >= n ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - n)))
        },
        _translateDigits: function(e, t) {
            return ("" + t).replace(/[0-9]/g, function(t) {
                return e.options.digits[t]
            })
        },
        _determineShow: function(e) {
            var t = e.options.format,
                u = [];
            return u[n] = t.match("y") ? "?" : t.match("Y") ? "!" : null, u[i] = t.match("o") ? "?" : t.match("O") ? "!" : null, u[a] = t.match("w") ? "?" : t.match("W") ? "!" : null, u[r] = t.match("d") ? "?" : t.match("D") ? "!" : null, u[s] = t.match("h") ? "?" : t.match("H") ? "!" : null, u[o] = t.match("m") ? "?" : t.match("M") ? "!" : null, u[l] = t.match("s") ? "?" : t.match("S") ? "!" : null, u
        },
        _calculatePeriods: function(e, t, u, c) {
            e._now = c, e._now.setMilliseconds(0);
            var d = new Date(e._now.getTime());
            e._since ? c.getTime() < e._since.getTime() ? e._now = c = d : c = e._since : (d.setTime(e._until.getTime()), c.getTime() > e._until.getTime() && (e._now = c = d));
            var p = [0, 0, 0, 0, 0, 0, 0];
            if (t[n] || t[i]) {
                var h = this._getDaysInMonth(c.getFullYear(), c.getMonth()),
                    f = this._getDaysInMonth(d.getFullYear(), d.getMonth()),
                    m = d.getDate() == c.getDate() || d.getDate() >= Math.min(h, f) && c.getDate() >= Math.min(h, f),
                    _ = function(e) {
                        return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
                    }, g = Math.max(0, 12 * (d.getFullYear() - c.getFullYear()) + d.getMonth() - c.getMonth() + (d.getDate() < c.getDate() && !m || m && _(d) < _(c) ? -1 : 0));
                p[n] = t[n] ? Math.floor(g / 12) : 0, p[i] = t[i] ? g - 12 * p[n] : 0, c = new Date(c.getTime());
                var T = c.getDate() == h,
                    y = this._getDaysInMonth(c.getFullYear() + p[n], c.getMonth() + p[i]);
                c.getDate() > y && c.setDate(y), c.setFullYear(c.getFullYear() + p[n]), c.setMonth(c.getMonth() + p[i]), T && c.setDate(y)
            }
            var v = Math.floor((d.getTime() - c.getTime()) / 1e3),
                S = function(e, n) {
                    p[e] = t[e] ? Math.floor(v / n) : 0, v -= p[e] * n
                };
            if (S(a, 604800), S(r, 86400), S(s, 3600), S(o, 60), S(l, 1), v > 0 && !e._since)
                for (var b = [1, 12, 4.3482, 7, 24, 60, 60], w = l, M = 1, A = l; A >= n; A--) t[A] && (p[w] >= M && (p[w] = 0, v = 1), v > 0 && (p[A]++, v = 0, w = A, M = 1)), M *= b[A];
            if (u)
                for (var A = n; l >= A; A++) u && p[A] ? u-- : u || (p[A] = 0);
            return p
        }
    })
}(jQuery),
function(e) {
    e.countdown.regionalOptions.eng = {
        labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["a", "m", "s", "j"],
        whichLabels: function(e) {
            return e > 1 ? 0 : 1
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.fr)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.fr = {
        labels: ["Ann\xe9es", "Mois", "Semaines", "Jours", "Heures", "Minutes", "Secondes"],
        labels1: ["Ann\xe9e", "Mois", "Semaine", "Jour", "Heure", "Minute", "Seconde"],
        compactLabels: ["a", "m", "s", "j"],
        whichLabels: function(e) {
            return e > 1 ? 0 : 1
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.fr)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.es = {
        labels: ["A\xf1os", "Meses", "Semanas", "D\xedas", "Horas", "Minutos", "Segundos"],
        labels1: ["A\xf1o", "Mes", "Semana", "D\xeda", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.es)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.de = {
        labels: ["Jahre", "Monate", "Wochen", "Tage", "Stunden", "Minuten", "Sekunden"],
        labels1: ["Jahr", "Monat", "Woche", "Tag", "Stunde", "Minute", "Sekunde"],
        compactLabels: ["J", "M", "W", "T"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.de)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.ru = {
        labels: ["\u041b\u0435\u0442", "\u041c\u0435\u0441\u044f\u0446\u0435\u0432", "\u041d\u0435\u0434\u0435\u043b\u044c", "\u0414\u043d\u0435\u0439", "\u0427\u0430\u0441\u043e\u0432", "\u041c\u0438\u043d\u0443\u0442", "\u0421\u0435\u043a\u0443\u043d\u0434"],
        labels1: ["\u0413\u043e\u0434", "\u041c\u0435\u0441\u044f\u0446", "\u041d\u0435\u0434\u0435\u043b\u044f", "\u0414\u0435\u043d\u044c", "\u0427\u0430\u0441", "\u041c\u0438\u043d\u0443\u0442\u0430", "\u0421\u0435\u043a\u0443\u043d\u0434\u0430"],
        labels2: ["\u0413\u043e\u0434\u0430", "\u041c\u0435\u0441\u044f\u0446\u0430", "\u041d\u0435\u0434\u0435\u043b\u0438", "\u0414\u043d\u044f", "\u0427\u0430\u0441\u0430", "\u041c\u0438\u043d\u0443\u0442\u044b", "\u0421\u0435\u043a\u0443\u043d\u0434\u044b"],
        compactLabels: ["\u043b", "\u043c", "\u043d", "\u0434"],
        compactLabels1: ["\u0433", "\u043c", "\u043d", "\u0434"],
        whichLabels: function(e) {
            var t = e % 10,
                n = Math.floor(e % 100 / 10);
            return 1 == e ? 1 : t >= 2 && 4 >= t && 1 != n ? 2 : 1 == t && 1 != n ? 1 : 0
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.ru)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.ja = {
        labels: ["\u5e74", "\u6708", "\u9031", "\u65e5", "\u6642", "\u5206", "\u79d2"],
        labels1: ["\u5e74", "\u6708", "\u9031", "\u65e5", "\u6642", "\u5206", "\u79d2"],
        compactLabels: ["\u5e74", "\u6708", "\u9031", "\u65e5"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.ja)
}(jQuery),
function(e) {
    e.countdown.regionalOptions["zh-CN"] = {
        labels: ["\u5e74", "\u6708", "\u5468", "\u5929", "\u65f6", "\u5206", "\u79d2"],
        labels1: ["\u5e74", "\u6708", "\u5468", "\u5929", "\u65f6", "\u5206", "\u79d2"],
        compactLabels: ["\u5e74", "\u6708", "\u5468", "\u5929"],
        compactLabels1: ["\u5e74", "\u6708", "\u5468", "\u5929"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions["zh-CN"])
}(jQuery),
function(e) {
    e.countdown.regionalOptions.ko = {
        labels: ["\ub144", "\uc6d4", "\uc8fc", "\uc77c", "\uc2dc", "\ubd84", "\ucd08"],
        labels1: ["\ub144", "\uc6d4", "\uc8fc", "\uc77c", "\uc2dc", "\ubd84", "\ucd08"],
        compactLabels: ["\ub144", "\uc6d4", "\uc8fc", "\uc77c"],
        compactLabels1: ["\ub144", "\uc6d4", "\uc8fc", "\uc77c"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.ko)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.ar = {
        labels: ["\u0633\u0646\u0648\u0627\u062a", "\u0623\u0634\u0647\u0631", "\u0623\u0633\u0627\u0628\u064a\u0639", "\u0623\u064a\u0627\u0645", "\u0633\u0627\u0639\u0627\u062a", "\u062f\u0642\u0627\u0626\u0642", "\u062b\u0648\u0627\u0646\u064a"],
        labels1: ["\u0633\u0646\u0629", "\u0634\u0647\u0631", "\u0623\u0633\u0628\u0648\u0639", "\u064a\u0648\u0645", "\u0633\u0627\u0639\u0629", "\u062f\u0642\u064a\u0642\u0629", "\u062b\u0627\u0646\u064a\u0629"],
        compactLabels: ["\u0633", "\u0634", "\u0623", "\u064a"],
        whichLabels: null,
        digits: ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"],
        timeSeparator: ":",
        isRTL: !0
    }, e.countdown.setDefaults(e.countdown.regionalOptions.ar)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.nl = {
        labels: ["Jaren", "Maanden", "Weken", "Dagen", "Uren", "Minuten", "Seconden"],
        labels1: ["Jaar", "Maand", "Week", "Dag", "Uur", "Minuut", "Seconde"],
        compactLabels: ["j", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.nl)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.it = {
        labels: ["Anni", "Mesi", "Settimane", "Giorni", "Ore", "Minuti", "Secondi"],
        labels1: ["Anno", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.it)
}(jQuery),
function(e) {
    e.countdown.regionalOptions.sv = {
        labels: ["\xc5r", "M\xe5nader", "Veckor", "Dagar", "Timmar", "Minuter", "Sekunder"],
        labels1: ["\xc5r", "M\xe5nad", "Vecka", "Dag", "Timme", "Minut", "Sekund"],
        compactLabels: ["\xc5", "M", "V", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }, e.countdown.setDefaults(e.countdown.regionalOptions.sv)
}(jQuery), moment.tz.add({
    zones: {
        "Africa/Abidjan": ["-0:16:8 - LMT 1912 -0:16:8", "0 - GMT"],
        "Africa/Accra": ["-0:0:52 - LMT 1918 -0:0:52", "0 Ghana %s"],
        "Africa/Addis_Ababa": ["2:34:48 - LMT 1870 2:34:48", "2:35:20 - ADMT 1936_4_5 2:35:20", "3 - EAT"],
        "Africa/Algiers": ["0:12:12 - LMT 1891_2_15_0_1 0:12:12", "0:9:21 - PMT 1911_2_11 0:9:21", "0 Algeria WE%sT 1940_1_25_2", "1 Algeria CE%sT 1946_9_7 1", "0 - WET 1956_0_29", "1 - CET 1963_3_14 1", "0 Algeria WE%sT 1977_9_21 1", "1 Algeria CE%sT 1979_9_26 1", "0 Algeria WE%sT 1981_4", "1 - CET"],
        "Africa/Asmara": ["2:35:32 - LMT 1870 2:35:32", "2:35:32 - AMT 1890 2:35:32", "2:35:20 - ADMT 1936_4_5 2:35:20", "3 - EAT"],
        "Africa/Bamako": ["-0:32 - LMT 1912 -0:32", "0 - GMT 1934_1_26", "-1 - WAT 1960_5_20 -1", "0 - GMT"],
        "Africa/Bangui": ["1:14:20 - LMT 1912 1:14:20", "1 - WAT"],
        "Africa/Banjul": ["-1:6:36 - LMT 1912 -1:6:36", "-1:6:36 - BMT 1935 -1:6:36", "-1 - WAT 1964 -1", "0 - GMT"],
        "Africa/Bissau": ["-1:2:20 - LMT 1911_4_26 -1:2:20", "-1 - WAT 1975 -1", "0 - GMT"],
        "Africa/Blantyre": ["2:20 - LMT 1903_2 2:20", "2 - CAT"],
        "Africa/Brazzaville": ["1:1:8 - LMT 1912 1:1:8", "1 - WAT"],
        "Africa/Bujumbura": ["1:57:28 - LMT 1890 1:57:28", "2 - CAT"],
        "Africa/Cairo": ["2:5:9 - LMT 1900_9 2:5:9", "2 Egypt EE%sT"],
        "Africa/Casablanca": ["-0:30:20 - LMT 1913_9_26 -0:30:20", "0 Morocco WE%sT 1984_2_16", "1 - CET 1986 1", "0 Morocco WE%sT"],
        "Africa/Ceuta": ["-0:21:16 - LMT 1901 -0:21:16", "0 - WET 1918_4_6_23", "1 - WEST 1918_9_7_23 1", "0 - WET 1924", "0 Spain WE%sT 1929", "0 SpainAfrica WE%sT 1984_2_16", "1 - CET 1986 1", "1 EU CE%sT"],
        "Africa/Conakry": ["-0:54:52 - LMT 1912 -0:54:52", "0 - GMT 1934_1_26", "-1 - WAT 1960 -1", "0 - GMT"],
        "Africa/Dakar": ["-1:9:44 - LMT 1912 -1:9:44", "-1 - WAT 1941_5 -1", "0 - GMT"],
        "Africa/Dar_es_Salaam": ["2:37:8 - LMT 1931 2:37:8", "3 - EAT 1948 3", "2:45 - BEAUT 1961 2:45", "3 - EAT"],
        "Africa/Djibouti": ["2:52:36 - LMT 1911_6 2:52:36", "3 - EAT"],
        "Africa/Douala": ["0:38:48 - LMT 1912 0:38:48", "1 - WAT"],
        "Africa/El_Aaiun": ["-0:52:48 - LMT 1934_0 -0:52:48", "-1 - WAT 1976_3_14 -1", "0 - WET"],
        "Africa/Freetown": ["-0:53 - LMT 1882 -0:53", "-0:53 - FMT 1913_5 -0:53", "-1 SL %s 1957 -1", "0 SL %s"],
        "Africa/Gaborone": ["1:43:40 - LMT 1885 1:43:40", "1:30 - SAST 1903_2 1:30", "2 - CAT 1943_8_19_2 2", "3 - CAST 1944_2_19_2 3", "2 - CAT"],
        "Africa/Harare": ["2:4:12 - LMT 1903_2 2:4:12", "2 - CAT"],
        "Africa/Johannesburg": ["1:52 - LMT 1892_1_8 1:52", "1:30 - SAST 1903_2 1:30", "2 SA SAST"],
        "Africa/Juba": ["2:6:24 - LMT 1931 2:6:24", "2 Sudan CA%sT 2000_0_15_12 2", "3 - EAT"],
        "Africa/Kampala": ["2:9:40 - LMT 1928_6 2:9:40", "3 - EAT 1930 3", "2:30 - BEAT 1948 2:30", "2:45 - BEAUT 1957 2:45", "3 - EAT"],
        "Africa/Khartoum": ["2:10:8 - LMT 1931 2:10:8", "2 Sudan CA%sT 2000_0_15_12 2", "3 - EAT"],
        "Africa/Kigali": ["2:0:16 - LMT 1935_5 2:0:16", "2 - CAT"],
        "Africa/Kinshasa": ["1:1:12 - LMT 1897_10_9 1:1:12", "1 - WAT"],
        "Africa/Lagos": ["0:13:36 - LMT 1919_8 0:13:36", "1 - WAT"],
        "Africa/Libreville": ["0:37:48 - LMT 1912 0:37:48", "1 - WAT"],
        "Africa/Lome": ["0:4:52 - LMT 1893 0:4:52", "0 - GMT"],
        "Africa/Luanda": ["0:52:56 - LMT 1892 0:52:56", "0:52:4 - AOT 1911_4_26 0:52:4", "1 - WAT"],
        "Africa/Lubumbashi": ["1:49:52 - LMT 1897_10_9 1:49:52", "2 - CAT"],
        "Africa/Lusaka": ["1:53:8 - LMT 1903_2 1:53:8", "2 - CAT"],
        "Africa/Malabo": ["0:35:8 - LMT 1912 0:35:8", "0 - GMT 1963_11_15", "1 - WAT"],
        "Africa/Maputo": ["2:10:20 - LMT 1903_2 2:10:20", "2 - CAT"],
        "Africa/Maseru": ["1:50 - LMT 1903_2 1:50", "2 - SAST 1943_8_19_2 2", "3 - SAST 1944_2_19_2 3", "2 - SAST"],
        "Africa/Mbabane": ["2:4:24 - LMT 1903_2 2:4:24", "2 - SAST"],
        "Africa/Mogadishu": ["3:1:28 - LMT 1893_10 3:1:28", "3 - EAT 1931 3", "2:30 - BEAT 1957 2:30", "3 - EAT"],
        "Africa/Monrovia": ["-0:43:8 - LMT 1882 -0:43:8", "-0:43:8 - MMT 1919_2 -0:43:8", "-0:44:30 - LRT 1972_4 -0:44:30", "0 - GMT"],
        "Africa/Nairobi": ["2:27:16 - LMT 1928_6 2:27:16", "3 - EAT 1930 3", "2:30 - BEAT 1940 2:30", "2:45 - BEAUT 1960 2:45", "3 - EAT"],
        "Africa/Ndjamena": ["1:0:12 - LMT 1912 1:0:12", "1 - WAT 1979_9_14 1", "2 - WAST 1980_2_8 2", "1 - WAT"],
        "Africa/Niamey": ["0:8:28 - LMT 1912 0:8:28", "-1 - WAT 1934_1_26 -1", "0 - GMT 1960", "1 - WAT"],
        "Africa/Nouakchott": ["-1:3:48 - LMT 1912 -1:3:48", "0 - GMT 1934_1_26", "-1 - WAT 1960_10_28 -1", "0 - GMT"],
        "Africa/Ouagadougou": ["-0:6:4 - LMT 1912 -0:6:4", "0 - GMT"],
        "Africa/Porto-Novo": ["0:10:28 - LMT 1912 0:10:28", "0 - GMT 1934_1_26", "1 - WAT"],
        "Africa/Sao_Tome": ["0:26:56 - LMT 1884 0:26:56", "-0:36:32 - LMT 1912 -0:36:32", "0 - GMT"],
        "Africa/Tripoli": ["0:52:44 - LMT 1920 0:52:44", "1 Libya CE%sT 1959 1", "2 - EET 1982 2", "1 Libya CE%sT 1990_4_4 1", "2 - EET 1996_8_30 2", "1 Libya CE%sT 1997_9_4 2", "2 - EET 2012_10_10_2 2", "1 Libya CE%sT"],
        "Africa/Tunis": ["0:40:44 - LMT 1881_4_12 0:40:44", "0:9:21 - PMT 1911_2_11 0:9:21", "1 Tunisia CE%sT"],
        "Africa/Windhoek": ["1:8:24 - LMT 1892_1_8 1:8:24", "1:30 - SWAT 1903_2 1:30", "2 - SAST 1942_8_20_2 2", "3 - SAST 1943_2_21_2 3", "2 - SAST 1990_2_21 2", "2 - CAT 1994_3_3 2", "1 Namibia WA%sT"],
        "America/Adak": ["12:13:21 - LMT 1867_9_18 12:13:21", "-11:46:38 - LMT 1900_7_20_12 -11:46:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-10 US AH%sT 1983_10_30 -10", "-10 US HA%sT"],
        "America/Anchorage": ["14:0:24 - LMT 1867_9_18 14:0:24", "-9:59:36 - LMT 1900_7_20_12 -9:59:36", "-10 - CAT 1942 -10", "-10 US CAT/CAWT 1945_7_14_23", "-10 US CAT/CAPT 1946 -10", "-10 - CAT 1967_3 -10", "-10 - AHST 1969 -10", "-10 US AH%sT 1983_9_30_2 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
        "America/Anguilla": ["-4:12:16 - LMT 1912_2_2 -4:12:16", "-4 - AST"],
        "America/Antigua": ["-4:7:12 - LMT 1912_2_2 -4:7:12", "-5 - EST 1951 -5", "-4 - AST"],
        "America/Araguaina": ["-3:12:48 - LMT 1914 -3:12:48", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_8_14 -3", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2012_9_21 -3", "-3 Brazil BR%sT"],
        "America/Argentina/Buenos_Aires": ["-3:53:48 - LMT 1894_9_31 -3:53:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],
        "America/Argentina/Catamarca": ["-4:23:8 - LMT 1894_9_31 -4:23:8", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/Cordoba": ["-4:16:48 - LMT 1894_9_31 -4:16:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],
        "America/Argentina/Jujuy": ["-4:21:12 - LMT 1894_9_31 -4:21:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_28 -4", "-3 - WARST 1991_2_17 -3", "-4 - WART 1991_9_6 -4", "-2 - ARST 1992 -2", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/La_Rioja": ["-4:27:24 - LMT 1894_9_31 -4:27:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/Mendoza": ["-4:35:16 - LMT 1894_9_31 -4:35:16", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_9_15 -4", "-3 - WARST 1992_2_1 -3", "-4 - WART 1992_9_18 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_23 -3", "-4 - WART 2004_8_26 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/Rio_Gallegos": ["-4:36:52 - LMT 1894_9_31 -4:36:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/Salta": ["-4:21:40 - LMT 1894_9_31 -4:21:40", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/San_Juan": ["-4:34:4 - LMT 1894_9_31 -4:34:4", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Argentina/San_Luis": ["-4:25:24 - LMT 1894_9_31 -4:25:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990 -2", "-2 - ARST 1990_2_14 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_5_1 -4", "-3 - ART 1999_9_3 -3", "-3 - WARST 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_0_21 -2", "-4 SanLuis WAR%sT"],
        "America/Argentina/Tucuman": ["-4:20:52 - LMT 1894_9_31 -4:20:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_13 -4", "-3 Arg AR%sT"],
        "America/Argentina/Ushuaia": ["-4:33:12 - LMT 1894_9_31 -4:33:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_30 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
        "America/Aruba": ["-4:40:24 - LMT 1912_1_12 -4:40:24", "-4:30 - ANT 1965 -4:30", "-4 - AST"],
        "America/Asuncion": ["-3:50:40 - LMT 1890 -3:50:40", "-3:50:40 - AMT 1931_9_10 -3:50:40", "-4 - PYT 1972_9 -4", "-3 - PYT 1974_3 -3", "-4 Para PY%sT"],
        "America/Atikokan": ["-6:6:28 - LMT 1895 -6:6:28", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT 1945_8_30_2 -5", "-5 - EST"],
        "America/Bahia": ["-2:34:4 - LMT 1914 -2:34:4", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2011_9_16 -3", "-3 Brazil BR%sT 2012_9_21 -3", "-3 - BRT"],
        "America/Bahia_Banderas": ["-7:1 - LMT 1921_11_31_23_59 -7:1", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 2010_3_4_2 -7", "-6 Mexico C%sT"],
        "America/Barbados": ["-3:58:29 - LMT 1924 -3:58:29", "-3:58:29 - BMT 1932 -3:58:29", "-4 Barb A%sT"],
        "America/Belem": ["-3:13:56 - LMT 1914 -3:13:56", "-3 Brazil BR%sT 1988_8_12 -3", "-3 - BRT"],
        "America/Belize": ["-5:52:48 - LMT 1912_3 -5:52:48", "-6 Belize C%sT"],
        "America/Blanc-Sablon": ["-3:48:28 - LMT 1884 -3:48:28", "-4 Canada A%sT 1970 -4", "-4 - AST"],
        "America/Boa_Vista": ["-4:2:40 - LMT 1914 -4:2:40", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1999_8_30 -4", "-4 Brazil AM%sT 2000_9_15 -3", "-4 - AMT"],
        "America/Bogota": ["-4:56:16 - LMT 1884_2_13 -4:56:16", "-4:56:16 - BMT 1914_10_23 -4:56:16", "-5 CO CO%sT"],
        "America/Boise": ["-7:44:49 - LMT 1883_10_18_12_15_11 -7:44:49", "-8 US P%sT 1923_4_13_2 -8", "-7 US M%sT 1974 -7", "-7 - MST 1974_1_3_2 -7", "-7 US M%sT"],
        "America/Cambridge_Bay": ["0 - zzz 1920", "-7 NT_YK M%sT 1999_9_31_2 -6", "-6 Canada C%sT 2000_9_29_2 -5", "-5 - EST 2000_10_5_0 -5", "-6 - CST 2001_3_1_3 -6", "-7 Canada M%sT"],
        "America/Campo_Grande": ["-3:38:28 - LMT 1914 -3:38:28", "-4 Brazil AM%sT"],
        "America/Cancun": ["-5:47:4 - LMT 1922_0_1_0_12_56 -5:47:4", "-6 - CST 1981_11_23 -6", "-5 Mexico E%sT 1998_7_2_2 -4", "-6 Mexico C%sT"],
        "America/Caracas": ["-4:27:44 - LMT 1890 -4:27:44", "-4:27:40 - CMT 1912_1_12 -4:27:40", "-4:30 - VET 1965 -4:30", "-4 - VET 2007_11_9_03 -4", "-4:30 - VET"],
        "America/Cayenne": ["-3:29:20 - LMT 1911_6 -3:29:20", "-4 - GFT 1967_9 -4", "-3 - GFT"],
        "America/Cayman": ["-5:25:32 - LMT 1890 -5:25:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST"],
        "America/Chicago": ["-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36", "-6 US C%sT 1920 -6", "-6 Chicago C%sT 1936_2_1_2 -6", "-5 - EST 1936_10_15_2 -5", "-6 Chicago C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Chicago C%sT 1967 -6", "-6 US C%sT"],
        "America/Chihuahua": ["-7:4:20 - LMT 1921_11_31_23_55_40 -7:4:20", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT"],
        "America/Costa_Rica": ["-5:36:13 - LMT 1890 -5:36:13", "-5:36:13 - SJMT 1921_0_15 -5:36:13", "-6 CR C%sT"],
        "America/Creston": ["-7:46:4 - LMT 1884 -7:46:4", "-7 - MST 1916_9_1 -7", "-8 - PST 1918_5_2 -8", "-7 - MST"],
        "America/Cuiaba": ["-3:44:20 - LMT 1914 -3:44:20", "-4 Brazil AM%sT 2003_8_24 -4", "-4 - AMT 2004_9_1 -4", "-4 Brazil AM%sT"],
        "America/Curacao": ["-4:35:47 - LMT 1912_1_12 -4:35:47", "-4:30 - ANT 1965 -4:30", "-4 - AST"],
        "America/Danmarkshavn": ["-1:14:40 - LMT 1916_6_28 -1:14:40", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT 1996 -3", "0 - GMT"],
        "America/Dawson": ["-9:17:40 - LMT 1900_7_20 -9:17:40", "-9 NT_YK Y%sT 1973_9_28_0 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],
        "America/Dawson_Creek": ["-8:0:56 - LMT 1884 -8:0:56", "-8 Canada P%sT 1947 -8", "-8 Vanc P%sT 1972_7_30_2 -7", "-7 - MST"],
        "America/Denver": ["-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56", "-7 US M%sT 1920 -7", "-7 Denver M%sT 1942 -7", "-7 US M%sT 1946 -7", "-7 Denver M%sT 1967 -7", "-7 US M%sT"],
        "America/Detroit": ["-5:32:11 - LMT 1905 -5:32:11", "-6 - CST 1915_4_15_2 -6", "-5 - EST 1942 -5", "-5 US E%sT 1946 -5", "-5 Detroit E%sT 1973 -5", "-5 US E%sT 1975 -5", "-5 - EST 1975_3_27_2 -5", "-5 US E%sT"],
        "America/Dominica": ["-4:5:36 - LMT 1911_6_1_0_1 -4:5:36", "-4 - AST"],
        "America/Edmonton": ["-7:33:52 - LMT 1906_8 -7:33:52", "-7 Edm M%sT 1987 -7", "-7 Canada M%sT"],
        "America/Eirunepe": ["-4:39:28 - LMT 1914 -4:39:28", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 1993_8_28 -5", "-5 Brazil AC%sT 1994_8_22 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],
        "America/El_Salvador": ["-5:56:48 - LMT 1921 -5:56:48", "-6 Salv C%sT"],
        "America/Fortaleza": ["-2:34 - LMT 1914 -2:34", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
        "America/Glace_Bay": ["-3:59:48 - LMT 1902_5_15 -3:59:48", "-4 Canada A%sT 1953 -4", "-4 Halifax A%sT 1954 -4", "-4 - AST 1972 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],
        "America/Godthab": ["-3:26:56 - LMT 1916_6_28 -3:26:56", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT"],
        "America/Goose_Bay": ["-4:1:40 - LMT 1884 -4:1:40", "-3:30:52 - NST 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 - NST 1935_2_30 -3:30:52", "-3:30 - NST 1936 -3:30", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 1966_2_15_2 -3:30", "-4 StJohns A%sT 2011_10 -3", "-4 Canada A%sT"],
        "America/Grand_Turk": ["-4:44:32 - LMT 1890 -4:44:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 TC E%sT"],
        "America/Grenada": ["-4:7 - LMT 1911_6 -4:7", "-4 - AST"],
        "America/Guadeloupe": ["-4:6:8 - LMT 1911_5_8 -4:6:8", "-4 - AST"],
        "America/Guatemala": ["-6:2:4 - LMT 1918_9_5 -6:2:4", "-6 Guat C%sT"],
        "America/Guayaquil": ["-5:19:20 - LMT 1890 -5:19:20", "-5:14 - QMT 1931 -5:14", "-5 - ECT"],
        "America/Guyana": ["-3:52:40 - LMT 1915_2 -3:52:40", "-3:45 - GBGT 1966_4_26 -3:45", "-3:45 - GYT 1975_6_31 -3:45", "-3 - GYT 1991 -3", "-4 - GYT"],
        "America/Halifax": ["-4:14:24 - LMT 1902_5_15 -4:14:24", "-4 Halifax A%sT 1918 -4", "-4 Canada A%sT 1919 -4", "-4 Halifax A%sT 1942_1_9_2 -4", "-4 Canada A%sT 1946 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],
        "America/Havana": ["-5:29:28 - LMT 1890 -5:29:28", "-5:29:36 - HMT 1925_6_19_12 -5:29:36", "-5 Cuba C%sT"],
        "America/Hermosillo": ["-7:23:52 - LMT 1921_11_31_23_36_8 -7:23:52", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 1999 -7", "-7 - MST"],
        "America/Indiana/Indianapolis": ["-5:44:38 - LMT 1883_10_18_12_15_22 -5:44:38", "-6 US C%sT 1920 -6", "-6 Indianapolis C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Indianapolis C%sT 1955_3_24_2 -6", "-5 - EST 1957_8_29_2 -5", "-6 - CST 1958_3_27_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
        "America/Indiana/Knox": ["-5:46:30 - LMT 1883_10_18_12_13_30 -5:46:30", "-6 US C%sT 1947 -6", "-6 Starke C%sT 1962_3_29_2 -6", "-5 - EST 1963_9_27_2 -5", "-6 US C%sT 1991_9_27_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],
        "America/Indiana/Marengo": ["-5:45:23 - LMT 1883_10_18_12_14_37 -5:45:23", "-6 US C%sT 1951 -6", "-6 Marengo C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT 1976 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
        "America/Indiana/Petersburg": ["-5:49:7 - LMT 1883_10_18_12_10_53 -5:49:7", "-6 US C%sT 1955 -6", "-6 Pike C%sT 1965_3_25_2 -6", "-5 - EST 1966_9_30_2 -5", "-6 US C%sT 1977_9_30_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],
        "America/Indiana/Tell_City": ["-5:47:3 - LMT 1883_10_18_12_12_57 -5:47:3", "-6 US C%sT 1946 -6", "-6 Perry C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],
        "America/Indiana/Vevay": ["-5:40:16 - LMT 1883_10_18_12_19_44 -5:40:16", "-6 US C%sT 1954_3_25_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1973 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
        "America/Indiana/Vincennes": ["-5:50:7 - LMT 1883_10_18_12_9_53 -5:50:7", "-6 US C%sT 1946 -6", "-6 Vincennes C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],
        "America/Indiana/Winamac": ["-5:46:25 - LMT 1883_10_18_12_13_35 -5:46:25", "-6 US C%sT 1946 -6", "-6 Pulaski C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_2_11_2 -6", "-5 US E%sT"],
        "America/Inuvik": ["0 - zzz 1953", "-8 NT_YK P%sT 1979_3_29_2 -8", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],
        "America/Iqaluit": ["0 - zzz 1942_7", "-5 NT_YK E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],
        "America/Jamaica": ["-5:7:12 - LMT 1890 -5:7:12", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST 1974_3_28_2 -5", "-5 US E%sT 1984 -5", "-5 - EST"],
        "America/Juneau": ["15:2:19 - LMT 1867_9_18 15:2:19", "-8:57:41 - LMT 1900_7_20_12 -8:57:41", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1980_3_27_2 -8", "-9 US Y%sT 1980_9_26_2 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
        "America/Kentucky/Louisville": ["-5:43:2 - LMT 1883_10_18_12_16_58 -5:43:2", "-6 US C%sT 1921 -6", "-6 Louisville C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Louisville C%sT 1961_6_23_2 -5", "-5 - EST 1968 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT"],
        "America/Kentucky/Monticello": ["-5:39:24 - LMT 1883_10_18_12_20_36 -5:39:24", "-6 US C%sT 1946 -6", "-6 - CST 1968 -6", "-6 US C%sT 2000_9_29_2 -5", "-5 US E%sT"],
        "America/La_Paz": ["-4:32:36 - LMT 1890 -4:32:36", "-4:32:36 - CMT 1931_9_15 -4:32:36", "-3:32:36 - BOST 1932_2_21 -3:32:36", "-4 - BOT"],
        "America/Lima": ["-5:8:12 - LMT 1890 -5:8:12", "-5:8:36 - LMT 1908_6_28 -5:8:36", "-5 Peru PE%sT"],
        "America/Los_Angeles": ["-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58", "-8 US P%sT 1946 -8", "-8 CA P%sT 1967 -8", "-8 US P%sT"],
        "America/Maceio": ["-2:22:52 - LMT 1914 -2:22:52", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_9_13 -3", "-3 Brazil BR%sT 1996_8_4 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
        "America/Managua": ["-5:45:8 - LMT 1890 -5:45:8", "-5:45:12 - MMT 1934_5_23 -5:45:12", "-6 - CST 1973_4 -6", "-5 - EST 1975_1_16 -5", "-6 Nic C%sT 1992_0_1_4 -6", "-5 - EST 1992_8_24 -5", "-6 - CST 1993 -6", "-5 - EST 1997 -5", "-6 Nic C%sT"],
        "America/Manaus": ["-4:0:4 - LMT 1914 -4:0:4", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1993_8_28 -4", "-4 Brazil AM%sT 1994_8_22 -4", "-4 - AMT"],
        "America/Martinique": ["-4:4:20 - LMT 1890 -4:4:20", "-4:4:20 - FFMT 1911_4 -4:4:20", "-4 - AST 1980_3_6 -4", "-3 - ADT 1980_8_28 -3", "-4 - AST"],
        "America/Matamoros": ["-6:40 - LMT 1921_11_31_23_20 -6:40", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT 2010 -6", "-6 US C%sT"],
        "America/Mazatlan": ["-7:5:40 - LMT 1921_11_31_23_54_20 -7:5:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT"],
        "America/Menominee": ["-5:50:27 - LMT 1885_8_18_12 -5:50:27", "-6 US C%sT 1946 -6", "-6 Menominee C%sT 1969_3_27_2 -6", "-5 - EST 1973_3_29_2 -5", "-6 US C%sT"],
        "America/Merida": ["-5:58:28 - LMT 1922_0_1_0_1_32 -5:58:28", "-6 - CST 1981_11_23 -6", "-5 - EST 1982_11_2 -5", "-6 Mexico C%sT"],
        "America/Metlakatla": ["15:13:42 - LMT 1867_9_18 15:13:42", "-8:46:18 - LMT 1900_7_20_12 -8:46:18", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-8 - MeST"],
        "America/Mexico_City": ["-6:36:36 - LMT 1922_0_1_0_23_24 -6:36:36", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 Mexico C%sT 2001_8_30_02 -5", "-6 - CST 2002_1_20 -6", "-6 Mexico C%sT"],
        "America/Miquelon": ["-3:44:40 - LMT 1911_4_15 -3:44:40", "-4 - AST 1980_4 -4", "-3 - PMST 1987 -3", "-3 Canada PM%sT"],
        "America/Moncton": ["-4:19:8 - LMT 1883_11_9 -4:19:8", "-5 - EST 1902_5_15 -5", "-4 Canada A%sT 1933 -4", "-4 Moncton A%sT 1942 -4", "-4 Canada A%sT 1946 -4", "-4 Moncton A%sT 1973 -4", "-4 Canada A%sT 1993 -4", "-4 Moncton A%sT 2007 -4", "-4 Canada A%sT"],
        "America/Monterrey": ["-6:41:16 - LMT 1921_11_31_23_18_44 -6:41:16", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT"],
        "America/Montevideo": ["-3:44:44 - LMT 1898_5_28 -3:44:44", "-3:44:44 - MMT 1920_4_1 -3:44:44", "-3:30 Uruguay UY%sT 1942_11_14 -3:30", "-3 Uruguay UY%sT"],
        "America/Montreal": ["-4:54:16 - LMT 1884 -4:54:16", "-5 Mont E%sT 1918 -5", "-5 Canada E%sT 1919 -5", "-5 Mont E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Mont E%sT 1974 -5", "-5 Canada E%sT"],
        "America/Montserrat": ["-4:8:52 - LMT 1911_6_1_0_1 -4:8:52", "-4 - AST"],
        "America/Nassau": ["-5:9:30 - LMT 1912_2_2 -5:9:30", "-5 Bahamas E%sT 1976 -5", "-5 US E%sT"],
        "America/New_York": ["-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2", "-5 US E%sT 1920 -5", "-5 NYC E%sT 1942 -5", "-5 US E%sT 1946 -5", "-5 NYC E%sT 1967 -5", "-5 US E%sT"],
        "America/Nipigon": ["-5:53:4 - LMT 1895 -5:53:4", "-5 Canada E%sT 1940_8_29 -5", "-4 - EDT 1942_1_9_2 -5", "-5 Canada E%sT"],
        "America/Nome": ["12:58:21 - LMT 1867_9_18 12:58:21", "-11:1:38 - LMT 1900_7_20_12 -11:1:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
        "America/Noronha": ["-2:9:40 - LMT 1914 -2:9:40", "-2 Brazil FN%sT 1990_8_17 -2", "-2 - FNT 1999_8_30 -2", "-2 Brazil FN%sT 2000_9_15 -1", "-2 - FNT 2001_8_13 -2", "-2 Brazil FN%sT 2002_9_1 -2", "-2 - FNT"],
        "America/North_Dakota/Beulah": ["-6:47:7 - LMT 1883_10_18_12_12_53 -6:47:7", "-7 US M%sT 2010_10_7_2 -6", "-6 US C%sT"],
        "America/North_Dakota/Center": ["-6:45:12 - LMT 1883_10_18_12_14_48 -6:45:12", "-7 US M%sT 1992_9_25_02 -6", "-6 US C%sT"],
        "America/North_Dakota/New_Salem": ["-6:45:39 - LMT 1883_10_18_12_14_21 -6:45:39", "-7 US M%sT 2003_9_26_02 -6", "-6 US C%sT"],
        "America/Ojinaga": ["-6:57:40 - LMT 1922_0_1_0_2_20 -6:57:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT 2010 -7", "-7 US M%sT"],
        "America/Panama": ["-5:18:8 - LMT 1890 -5:18:8", "-5:19:36 - CMT 1908_3_22 -5:19:36", "-5 - EST"],
        "America/Pangnirtung": ["0 - zzz 1921", "-4 NT_YK A%sT 1995_3_2_2 -4", "-5 Canada E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],
        "America/Paramaribo": ["-3:40:40 - LMT 1911 -3:40:40", "-3:40:52 - PMT 1935 -3:40:52", "-3:40:36 - PMT 1945_9 -3:40:36", "-3:30 - NEGT 1975_10_20 -3:30", "-3:30 - SRT 1984_9 -3:30", "-3 - SRT"],
        "America/Phoenix": ["-7:28:18 - LMT 1883_10_18_11_31_42 -7:28:18", "-7 US M%sT 1944_0_1_00_1 -6", "-7 - MST 1944_3_1_00_1 -7", "-7 US M%sT 1944_9_1_00_1 -6", "-7 - MST 1967 -7", "-7 US M%sT 1968_2_21 -7", "-7 - MST"],
        "America/Port-au-Prince": ["-4:49:20 - LMT 1890 -4:49:20", "-4:49 - PPMT 1917_0_24_12 -4:49", "-5 Haiti E%sT"],
        "America/Port_of_Spain": ["-4:6:4 - LMT 1912_2_2 -4:6:4", "-4 - AST"],
        "America/Porto_Velho": ["-4:15:36 - LMT 1914 -4:15:36", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT"],
        "America/Puerto_Rico": ["-4:24:25 - LMT 1899_2_28_12 -4:24:25", "-4 - AST 1942_4_3 -4", "-4 US A%sT 1946 -4", "-4 - AST"],
        "America/Rainy_River": ["-6:18:16 - LMT 1895 -6:18:16", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT"],
        "America/Rankin_Inlet": ["0 - zzz 1957", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT"],
        "America/Recife": ["-2:19:36 - LMT 1914 -2:19:36", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_15 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
        "America/Regina": ["-6:58:36 - LMT 1905_8 -6:58:36", "-7 Regina M%sT 1960_3_24_2 -7", "-6 - CST"],
        "America/Resolute": ["0 - zzz 1947_7_31", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT 2006_9_29_2 -5", "-5 - EST 2007_2_11_3 -5", "-6 Canada C%sT"],
        "America/Rio_Branco": ["-4:31:12 - LMT 1914 -4:31:12", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],
        "America/Santa_Isabel": ["-7:39:28 - LMT 1922_0_1_0_20_32 -7:39:28", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT"],
        "America/Santarem": ["-3:38:48 - LMT 1914 -3:38:48", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 2008_5_24_00 -4", "-3 - BRT"],
        "America/Santiago": ["-4:42:46 - LMT 1890 -4:42:46", "-4:42:46 - SMT 1910 -4:42:46", "-5 - CLT 1916_6_1 -5", "-4:42:46 - SMT 1918_8_1 -4:42:46", "-4 - CLT 1919_6_1 -4", "-4:42:46 - SMT 1927_8_1 -4:42:46", "-5 Chile CL%sT 1947_4_22 -5", "-4 Chile CL%sT"],
        "America/Santo_Domingo": ["-4:39:36 - LMT 1890 -4:39:36", "-4:40 - SDMT 1933_3_1_12 -4:40", "-5 DR E%sT 1974_9_27 -5", "-4 - AST 2000_9_29_02 -4", "-5 US E%sT 2000_11_3_01 -5", "-4 - AST"],
        "America/Sao_Paulo": ["-3:6:28 - LMT 1914 -3:6:28", "-3 Brazil BR%sT 1963_9_23_00 -3", "-2 - BRST 1964 -2", "-3 Brazil BR%sT"],
        "America/Scoresbysund": ["-1:27:52 - LMT 1916_6_28 -1:27:52", "-2 - CGT 1980_3_6_2 -2", "-2 C-Eur CG%sT 1981_2_29 -2", "-1 EU EG%sT"],
        "America/Sitka": ["14:58:47 - LMT 1867_9_18 14:58:47", "-9:1:13 - LMT 1900_7_20_12 -9:1:13", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
        "America/St_Johns": ["-3:30:52 - LMT 1884 -3:30:52", "-3:30:52 StJohns N%sT 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 StJohns N%sT 1935_2_30 -3:30:52", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 2011_10 -2:30", "-3:30 Canada N%sT"],
        "America/St_Kitts": ["-4:10:52 - LMT 1912_2_2 -4:10:52", "-4 - AST"],
        "America/St_Lucia": ["-4:4 - LMT 1890 -4:4", "-4:4 - CMT 1912 -4:4", "-4 - AST"],
        "America/St_Thomas": ["-4:19:44 - LMT 1911_6 -4:19:44", "-4 - AST"],
        "America/St_Vincent": ["-4:4:56 - LMT 1890 -4:4:56", "-4:4:56 - KMT 1912 -4:4:56", "-4 - AST"],
        "America/Swift_Current": ["-7:11:20 - LMT 1905_8 -7:11:20", "-7 Canada M%sT 1946_3_28_2 -7", "-7 Regina M%sT 1950 -7", "-7 Swift M%sT 1972_3_30_2 -7", "-6 - CST"],
        "America/Tegucigalpa": ["-5:48:52 - LMT 1921_3 -5:48:52", "-6 Hond C%sT"],
        "America/Thule": ["-4:35:8 - LMT 1916_6_28 -4:35:8", "-4 Thule A%sT"],
        "America/Thunder_Bay": ["-5:57 - LMT 1895 -5:57", "-6 - CST 1910 -6", "-5 - EST 1942 -5", "-5 Canada E%sT 1970 -5", "-5 Mont E%sT 1973 -5", "-5 - EST 1974 -5", "-5 Canada E%sT"],
        "America/Tijuana": ["-7:48:4 - LMT 1922_0_1_0_11_56 -7:48:4", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT 2010 -8", "-8 US P%sT"],
        "America/Toronto": ["-5:17:32 - LMT 1895 -5:17:32", "-5 Canada E%sT 1919 -5", "-5 Toronto E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Toronto E%sT 1974 -5", "-5 Canada E%sT"],
        "America/Tortola": ["-4:18:28 - LMT 1911_6 -4:18:28", "-4 - AST"],
        "America/Vancouver": ["-8:12:28 - LMT 1884 -8:12:28", "-8 Vanc P%sT 1987 -8", "-8 Canada P%sT"],
        "America/Whitehorse": ["-9:0:12 - LMT 1900_7_20 -9:0:12", "-9 NT_YK Y%sT 1966_6_1_2 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],
        "America/Winnipeg": ["-6:28:36 - LMT 1887_6_16 -6:28:36", "-6 Winn C%sT 2006 -6", "-6 Canada C%sT"],
        "America/Yakutat": ["14:41:5 - LMT 1867_9_18 14:41:5", "-9:18:55 - LMT 1900_7_20_12 -9:18:55", "-9 - YST 1942 -9", "-9 US Y%sT 1946 -9", "-9 - YST 1969 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
        "America/Yellowknife": ["0 - zzz 1935", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],
        "Antarctica/Casey": ["0 - zzz 1969", "8 - WST 2009_9_18_2 8", "11 - CAST 2010_2_5_2 11", "8 - WST 2011_9_28_2 8", "11 - CAST 2012_1_21_17", "8 - WST"],
        "Antarctica/Davis": ["0 - zzz 1957_0_13", "7 - DAVT 1964_10 7", "0 - zzz 1969_1", "7 - DAVT 2009_9_18_2 7", "5 - DAVT 2010_2_10_20", "7 - DAVT 2011_9_28_2 7", "5 - DAVT 2012_1_21_20", "7 - DAVT"],
        "Antarctica/DumontDUrville": ["0 - zzz 1947", "10 - PMT 1952_0_14 10", "0 - zzz 1956_10", "10 - DDUT"],
        "Antarctica/Macquarie": ["0 - zzz 1899_10", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1919_3 10", "0 - zzz 1948_2_25", "10 Aus EST 1967 10", "10 AT EST 2010_3_4_3 11", "11 - MIST"],
        "Antarctica/Mawson": ["0 - zzz 1954_1_13", "6 - MAWT 2009_9_18_2 6", "5 - MAWT"],
        "Antarctica/McMurdo": ["0 - zzz 1956", "12 NZAQ NZ%sT"],
        "Antarctica/Palmer": ["0 - zzz 1965", "-4 ArgAQ AR%sT 1969_9_5 -4", "-3 ArgAQ AR%sT 1982_4 -3", "-4 ChileAQ CL%sT"],
        "Antarctica/Rothera": ["0 - zzz 1976_11_1", "-3 - ROTT"],
        "Antarctica/Syowa": ["0 - zzz 1957_0_29", "3 - SYOT"],
        "Antarctica/Vostok": ["0 - zzz 1957_11_16", "6 - VOST"],
        "Europe/Oslo": ["0:43 - LMT 1895_0_1 0:43", "1 Norway CE%sT 1940_7_10_23 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Norway CE%sT 1980 1", "1 EU CE%sT"],
        "Asia/Aden": ["2:59:54 - LMT 1950 2:59:54", "3 - AST"],
        "Asia/Almaty": ["5:7:48 - LMT 1924_4_2 5:7:48", "5 - ALMT 1930_5_21 5", "6 RussiaAsia ALM%sT 1991 6", "6 - ALMT 1992 6", "6 RussiaAsia ALM%sT 2005_2_15 6", "6 - ALMT"],
        "Asia/Amman": ["2:23:44 - LMT 1931 2:23:44", "2 Jordan EE%sT"],
        "Asia/Anadyr": ["11:49:56 - LMT 1924_4_2 11:49:56", "12 - ANAT 1930_5_21 12", "13 Russia ANA%sT 1982_3_1_0 13", "12 Russia ANA%sT 1991_2_31_2 12", "11 Russia ANA%sT 1992_0_19_2 11", "12 Russia ANA%sT 2010_2_28_2 12", "11 Russia ANA%sT 2011_2_27_2 11", "12 - ANAT"],
        "Asia/Aqtau": ["3:21:4 - LMT 1924_4_2 3:21:4", "4 - FORT 1930_5_21 4", "5 - FORT 1963 5", "5 - SHET 1981_9_1 5", "6 - SHET 1982_3_1 6", "5 RussiaAsia SHE%sT 1991 5", "5 - SHET 1991_11_16 5", "5 RussiaAsia AQT%sT 1995_2_26_2 5", "4 RussiaAsia AQT%sT 2005_2_15 4", "5 - AQTT"],
        "Asia/Aqtobe": ["3:48:40 - LMT 1924_4_2 3:48:40", "4 - AKTT 1930_5_21 4", "5 - AKTT 1981_3_1 5", "6 - AKTST 1981_9_1 6", "6 - AKTT 1982_3_1 6", "5 RussiaAsia AKT%sT 1991 5", "5 - AKTT 1991_11_16 5", "5 RussiaAsia AQT%sT 2005_2_15 5", "5 - AQTT"],
        "Asia/Ashgabat": ["3:53:32 - LMT 1924_4_2 3:53:32", "4 - ASHT 1930_5_21 4", "5 RussiaAsia ASH%sT 1991_2_31_2 5", "4 RussiaAsia ASH%sT 1991_9_27 4", "4 RussiaAsia TM%sT 1992_0_19_2 4", "5 - TMT"],
        "Asia/Baghdad": ["2:57:40 - LMT 1890 2:57:40", "2:57:36 - BMT 1918 2:57:36", "3 - AST 1982_4 3", "3 Iraq A%sT"],
        "Asia/Bahrain": ["3:22:20 - LMT 1920 3:22:20", "4 - GST 1972_5 4", "3 - AST"],
        "Asia/Baku": ["3:19:24 - LMT 1924_4_2 3:19:24", "3 - BAKT 1957_2 3", "4 RussiaAsia BAK%sT 1991_2_31_2 4", "4 - BAKST 1991_7_30 4", "3 RussiaAsia AZ%sT 1992_8_26_23 4", "4 - AZT 1996 4", "4 EUAsia AZ%sT 1997 4", "4 Azer AZ%sT"],
        "Asia/Bangkok": ["6:42:4 - LMT 1880 6:42:4", "6:42:4 - BMT 1920_3 6:42:4", "7 - ICT"],
        "Asia/Beirut": ["2:22 - LMT 1880 2:22", "2 Lebanon EE%sT"],
        "Asia/Bishkek": ["4:58:24 - LMT 1924_4_2 4:58:24", "5 - FRUT 1930_5_21 5", "6 RussiaAsia FRU%sT 1991_2_31_2 6", "6 - FRUST 1991_7_31_2 6", "5 Kyrgyz KG%sT 2005_7_12 6", "6 - KGT"],
        "Asia/Brunei": ["7:39:40 - LMT 1926_2 7:39:40", "7:30 - BNT 1933 7:30", "8 - BNT"],
        "Asia/Choibalsan": ["7:38 - LMT 1905_7 7:38", "7 - ULAT 1978 7", "8 - ULAT 1983_3 8", "9 Mongol CHO%sT 2008_2_31 9", "8 Mongol CHO%sT"],
        "Asia/Chongqing": ["7:6:20 - LMT 1928 7:6:20", "7 - LONT 1980_4 7", "8 PRC C%sT"],
        "Asia/Colombo": ["5:19:24 - LMT 1880 5:19:24", "5:19:32 - MMT 1906 5:19:32", "5:30 - IST 1942_0_5 5:30", "6 - IHST 1942_8 6", "6:30 - IST 1945_9_16_2 6:30", "5:30 - IST 1996_4_25_0 5:30", "6:30 - LKT 1996_9_26_0_30 6:30", "6 - LKT 2006_3_15_0_30 6", "5:30 - IST"],
        "Asia/Damascus": ["2:25:12 - LMT 1920 2:25:12", "2 Syria EE%sT"],
        "Asia/Dhaka": ["6:1:40 - LMT 1890 6:1:40", "5:53:20 - HMT 1941_9 5:53:20", "6:30 - BURT 1942_4_15 6:30", "5:30 - IST 1942_8 5:30", "6:30 - BURT 1951_8_30 6:30", "6 - DACT 1971_2_26 6", "6 - BDT 2009 6", "6 Dhaka BD%sT"],
        "Asia/Dili": ["8:22:20 - LMT 1912 8:22:20", "8 - TLT 1942_1_21_23 8", "9 - JST 1945_8_23 9", "9 - TLT 1976_4_3 9", "8 - CIT 2000_8_17_00 8", "9 - TLT"],
        "Asia/Dubai": ["3:41:12 - LMT 1920 3:41:12", "4 - GST"],
        "Asia/Dushanbe": ["4:35:12 - LMT 1924_4_2 4:35:12", "5 - DUST 1930_5_21 5", "6 RussiaAsia DUS%sT 1991_2_31_2 6", "6 - DUSST 1991_8_9_2 5", "5 - TJT"],
        "Asia/Gaza": ["2:17:52 - LMT 1900_9 2:17:52", "2 Zion EET 1948_4_15 2", "2 EgyptAsia EE%sT 1967_5_5 3", "2 Zion I%sT 1996 2", "2 Jordan EE%sT 1999 2", "2 Palestine EE%sT 2008_7_29_0 3", "2 - EET 2008_8 2", "2 Palestine EE%sT 2010 2", "2 - EET 2010_2_27_0_1 2", "2 Palestine EE%sT 2011_7_1 3", "2 - EET 2012 2", "2 Palestine EE%sT"],
        "Asia/Harbin": ["8:26:44 - LMT 1928 8:26:44", "8:30 - CHAT 1932_2 8:30", "8 - CST 1940 8", "9 - CHAT 1966_4 9", "8:30 - CHAT 1980_4 8:30", "8 PRC C%sT"],
        "Asia/Hebron": ["2:20:23 - LMT 1900_9 2:20:23", "2 Zion EET 1948_4_15 2", "2 EgyptAsia EE%sT 1967_5_5 3", "2 Zion I%sT 1996 2", "2 Jordan EE%sT 1999 2", "2 Palestine EE%sT"],
        "Asia/Ho_Chi_Minh": ["7:6:40 - LMT 1906_5_9 7:6:40", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],
        "Asia/Hong_Kong": ["7:36:42 - LMT 1904_9_30 7:36:42", "8 HK HK%sT 1941_11_25 8", "9 - JST 1945_8_15 9", "8 HK HK%sT"],
        "Asia/Hovd": ["6:6:36 - LMT 1905_7 6:6:36", "6 - HOVT 1978 6", "7 Mongol HOV%sT"],
        "Asia/Irkutsk": ["6:57:20 - LMT 1880 6:57:20", "6:57:20 - IMT 1920_0_25 6:57:20", "7 - IRKT 1930_5_21 7", "8 Russia IRK%sT 1991_2_31_2 8", "7 Russia IRK%sT 1992_0_19_2 7", "8 Russia IRK%sT 2011_2_27_2 8", "9 - IRKT"],
        "Asia/Jakarta": ["7:7:12 - LMT 1867_7_10 7:7:12", "7:7:12 - JMT 1923_11_31_23_47_12 7:7:12", "7:20 - JAVT 1932_10 7:20", "7:30 - WIT 1942_2_23 7:30", "9 - JST 1945_8_23 9", "7:30 - WIT 1948_4 7:30", "8 - WIT 1950_4 8", "7:30 - WIT 1964 7:30", "7 - WIT"],
        "Asia/Jayapura": ["9:22:48 - LMT 1932_10 9:22:48", "9 - EIT 1944_8_1 9", "9:30 - CST 1964 9:30", "9 - EIT"],
        "Asia/Jerusalem": ["2:20:56 - LMT 1880 2:20:56", "2:20:40 - JMT 1918 2:20:40", "2 Zion I%sT"],
        "Asia/Kabul": ["4:36:48 - LMT 1890 4:36:48", "4 - AFT 1945 4", "4:30 - AFT"],
        "Asia/Kamchatka": ["10:34:36 - LMT 1922_10_10 10:34:36", "11 - PETT 1930_5_21 11", "12 Russia PET%sT 1991_2_31_2 12", "11 Russia PET%sT 1992_0_19_2 11", "12 Russia PET%sT 2010_2_28_2 12", "11 Russia PET%sT 2011_2_27_2 11", "12 - PETT"],
        "Asia/Karachi": ["4:28:12 - LMT 1907 4:28:12", "5:30 - IST 1942_8 5:30", "6:30 - IST 1945_9_15 6:30", "5:30 - IST 1951_8_30 5:30", "5 - KART 1971_2_26 5", "5 Pakistan PK%sT"],
        "Asia/Kashgar": ["5:3:56 - LMT 1928 5:3:56", "5:30 - KAST 1940 5:30", "5 - KAST 1980_4 5", "8 PRC C%sT"],
        "Asia/Kathmandu": ["5:41:16 - LMT 1920 5:41:16", "5:30 - IST 1986 5:30", "5:45 - NPT"],
        "Asia/Khandyga": ["9:2:13 - LMT 1919_11_15 9:2:13", "8 - YAKT 1930_5_21 8", "9 Russia YAK%sT 1991_2_31_2 9", "8 Russia YAK%sT 1992_0_19_2 8", "9 Russia YAK%sT 2004 9", "10 Russia VLA%sT 2011_2_27_2 10", "11 - VLAT 2011_8_13_0 11", "10 - YAKT"],
        "Asia/Kolkata": ["5:53:28 - LMT 1880 5:53:28", "5:53:20 - HMT 1941_9 5:53:20", "6:30 - BURT 1942_4_15 6:30", "5:30 - IST 1942_8 5:30", "6:30 - IST 1945_9_15 6:30", "5:30 - IST"],
        "Asia/Krasnoyarsk": ["6:11:20 - LMT 1920_0_6 6:11:20", "6 - KRAT 1930_5_21 6", "7 Russia KRA%sT 1991_2_31_2 7", "6 Russia KRA%sT 1992_0_19_2 6", "7 Russia KRA%sT 2011_2_27_2 7", "8 - KRAT"],
        "Asia/Kuala_Lumpur": ["6:46:46 - LMT 1901_0_1 6:46:46", "6:55:25 - SMT 1905_5_1 6:55:25", "7 - MALT 1933_0_1 7", "7:20 - MALST 1936_0_1 7:20", "7:20 - MALT 1941_8_1 7:20", "7:30 - MALT 1942_1_16 7:30", "9 - JST 1945_8_12 9", "7:30 - MALT 1982_0_1 7:30", "8 - MYT"],
        "Asia/Kuching": ["7:21:20 - LMT 1926_2 7:21:20", "7:30 - BORT 1933 7:30", "8 NBorneo BOR%sT 1942_1_16 8", "9 - JST 1945_8_12 9", "8 - BORT 1982_0_1 8", "8 - MYT"],
        "Asia/Kuwait": ["3:11:56 - LMT 1950 3:11:56", "3 - AST"],
        "Asia/Macau": ["7:34:20 - LMT 1912 7:34:20", "8 Macau MO%sT 1999_11_20 8", "8 PRC C%sT"],
        "Asia/Magadan": ["10:3:12 - LMT 1924_4_2 10:3:12", "10 - MAGT 1930_5_21 10", "11 Russia MAG%sT 1991_2_31_2 11", "10 Russia MAG%sT 1992_0_19_2 10", "11 Russia MAG%sT 2011_2_27_2 11", "12 - MAGT"],
        "Asia/Makassar": ["7:57:36 - LMT 1920 7:57:36", "7:57:36 - MMT 1932_10 7:57:36", "8 - CIT 1942_1_9 8", "9 - JST 1945_8_23 9", "8 - CIT"],
        "Asia/Manila": ["-15:56 - LMT 1844_11_31 -15:56", "8:4 - LMT 1899_4_11 8:4", "8 Phil PH%sT 1942_4 8", "9 - JST 1944_10 9", "8 Phil PH%sT"],
        "Asia/Muscat": ["3:54:24 - LMT 1920 3:54:24", "4 - GST"],
        "Asia/Nicosia": ["2:13:28 - LMT 1921_10_14 2:13:28", "2 Cyprus EE%sT 1998_8 3", "2 EUAsia EE%sT"],
        "Asia/Novokuznetsk": ["5:48:48 - NMT 1920_0_6 5:48:48", "6 - KRAT 1930_5_21 6", "7 Russia KRA%sT 1991_2_31_2 7", "6 Russia KRA%sT 1992_0_19_2 6", "7 Russia KRA%sT 2010_2_28_2 7", "6 Russia NOV%sT 2011_2_27_2 6", "7 - NOVT"],
        "Asia/Novosibirsk": ["5:31:40 - LMT 1919_11_14_6 5:31:40", "6 - NOVT 1930_5_21 6", "7 Russia NOV%sT 1991_2_31_2 7", "6 Russia NOV%sT 1992_0_19_2 6", "7 Russia NOV%sT 1993_4_23 8", "6 Russia NOV%sT 2011_2_27_2 6", "7 - NOVT"],
        "Asia/Omsk": ["4:53:36 - LMT 1919_10_14 4:53:36", "5 - OMST 1930_5_21 5", "6 Russia OMS%sT 1991_2_31_2 6", "5 Russia OMS%sT 1992_0_19_2 5", "6 Russia OMS%sT 2011_2_27_2 6", "7 - OMST"],
        "Asia/Oral": ["3:25:24 - LMT 1924_4_2 3:25:24", "4 - URAT 1930_5_21 4", "5 - URAT 1981_3_1 5", "6 - URAST 1981_9_1 6", "6 - URAT 1982_3_1 6", "5 RussiaAsia URA%sT 1989_2_26_2 5", "4 RussiaAsia URA%sT 1991 4", "4 - URAT 1991_11_16 4", "4 RussiaAsia ORA%sT 2005_2_15 4", "5 - ORAT"],
        "Asia/Phnom_Penh": ["6:59:40 - LMT 1906_5_9 6:59:40", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],
        "Asia/Pontianak": ["7:17:20 - LMT 1908_4 7:17:20", "7:17:20 - PMT 1932_10 7:17:20", "7:30 - WIT 1942_0_29 7:30", "9 - JST 1945_8_23 9", "7:30 - WIT 1948_4 7:30", "8 - WIT 1950_4 8", "7:30 - WIT 1964 7:30", "8 - CIT 1988_0_1 8", "7 - WIT"],
        "Asia/Pyongyang": ["8:23 - LMT 1890 8:23", "8:30 - KST 1904_11 8:30", "9 - KST 1928 9", "8:30 - KST 1932 8:30", "9 - KST 1954_2_21 9", "8 - KST 1961_7_10 8", "9 - KST"],
        "Asia/Qatar": ["3:26:8 - LMT 1920 3:26:8", "4 - GST 1972_5 4", "3 - AST"],
        "Asia/Qyzylorda": ["4:21:52 - LMT 1924_4_2 4:21:52", "4 - KIZT 1930_5_21 4", "5 - KIZT 1981_3_1 5", "6 - KIZST 1981_9_1 6", "6 - KIZT 1982_3_1 6", "5 RussiaAsia KIZ%sT 1991 5", "5 - KIZT 1991_11_16 5", "5 - QYZT 1992_0_19_2 5", "6 RussiaAsia QYZ%sT 2005_2_15 6", "6 - QYZT"],
        "Asia/Rangoon": ["6:24:40 - LMT 1880 6:24:40", "6:24:40 - RMT 1920 6:24:40", "6:30 - BURT 1942_4 6:30", "9 - JST 1945_4_3 9", "6:30 - MMT"],
        "Asia/Riyadh": ["3:6:52 - LMT 1950 3:6:52", "3 - AST"],
        "Asia/Sakhalin": ["9:30:48 - LMT 1905_7_23 9:30:48", "9 - CJT 1938 9", "9 - JST 1945_7_25 9", "11 Russia SAK%sT 1991_2_31_2 11", "10 Russia SAK%sT 1992_0_19_2 10", "11 Russia SAK%sT 1997_2_30_2 11", "10 Russia SAK%sT 2011_2_27_2 10", "11 - SAKT"],
        "Asia/Samarkand": ["4:27:12 - LMT 1924_4_2 4:27:12", "4 - SAMT 1930_5_21 4", "5 - SAMT 1981_3_1 5", "6 - SAMST 1981_9_1 6", "6 - TAST 1982_3_1 6", "5 RussiaAsia SAM%sT 1991_8_1 6", "5 RussiaAsia UZ%sT 1992 5", "5 - UZT"],
        "Asia/Seoul": ["8:27:52 - LMT 1890 8:27:52", "8:30 - KST 1904_11 8:30", "9 - KST 1928 9", "8:30 - KST 1932 8:30", "9 - KST 1954_2_21 9", "8 ROK K%sT 1961_7_10 8", "8:30 - KST 1968_9 8:30", "9 ROK K%sT"],
        "Asia/Shanghai": ["8:5:57 - LMT 1928 8:5:57", "8 Shang C%sT 1949 8", "8 PRC C%sT"],
        "Asia/Singapore": ["6:55:25 - LMT 1901_0_1 6:55:25", "6:55:25 - SMT 1905_5_1 6:55:25", "7 - MALT 1933_0_1 7", "7:20 - MALST 1936_0_1 7:20", "7:20 - MALT 1941_8_1 7:20", "7:30 - MALT 1942_1_16 7:30", "9 - JST 1945_8_12 9", "7:30 - MALT 1965_7_9 7:30", "7:30 - SGT 1982_0_1 7:30", "8 - SGT"],
        "Asia/Taipei": ["8:6 - LMT 1896 8:6", "8 Taiwan C%sT"],
        "Asia/Tashkent": ["4:37:12 - LMT 1924_4_2 4:37:12", "5 - TAST 1930_5_21 5", "6 RussiaAsia TAS%sT 1991_2_31_2 6", "5 RussiaAsia TAS%sT 1991_8_1 6", "5 RussiaAsia UZ%sT 1992 5", "5 - UZT"],
        "Asia/Tbilisi": ["2:59:16 - LMT 1880 2:59:16", "2:59:16 - TBMT 1924_4_2 2:59:16", "3 - TBIT 1957_2 3", "4 RussiaAsia TBI%sT 1991_2_31_2 4", "4 - TBIST 1991_3_9 4", "3 RussiaAsia GE%sT 1992 3", "3 E-EurAsia GE%sT 1994_8_25 4", "4 E-EurAsia GE%sT 1996_9_27 5", "5 - GEST 1997_2_30 5", "4 E-EurAsia GE%sT 2004_5_27 5", "3 RussiaAsia GE%sT 2005_2_27_2 3", "4 - GET"],
        "Asia/Tehran": ["3:25:44 - LMT 1916 3:25:44", "3:25:44 - TMT 1946 3:25:44", "3:30 - IRST 1977_10 3:30", "4 Iran IR%sT 1979 4", "3:30 Iran IR%sT"],
        "Asia/Thimphu": ["5:58:36 - LMT 1947_7_15 5:58:36", "5:30 - IST 1987_9 5:30", "6 - BTT"],
        "Asia/Tokyo": ["9:18:59 - LMT 1887_11_31_15", "9 - JST 1896 9", "9 - CJT 1938 9", "9 Japan J%sT"],
        "Asia/Ulaanbaatar": ["7:7:32 - LMT 1905_7 7:7:32", "7 - ULAT 1978 7", "8 Mongol ULA%sT"],
        "Asia/Urumqi": ["5:50:20 - LMT 1928 5:50:20", "6 - URUT 1980_4 6", "8 PRC C%sT"],
        "Asia/Ust-Nera": ["9:32:54 - LMT 1919_11_15 9:32:54", "8 - YAKT 1930_5_21 8", "9 Russia YAKT 1981_3_1 9", "11 Russia MAG%sT 1991_2_31_2 11", "10 Russia MAG%sT 1992_0_19_2 10", "11 Russia MAG%sT 2011_2_27_2 11", "12 - MAGT 2011_8_13_0 12", "11 - VLAT"],
        "Asia/Vientiane": ["6:50:24 - LMT 1906_5_9 6:50:24", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],
        "Asia/Vladivostok": ["8:47:44 - LMT 1922_10_15 8:47:44", "9 - VLAT 1930_5_21 9", "10 Russia VLA%sT 1991_2_31_2 10", "9 Russia VLA%sST 1992_0_19_2 9", "10 Russia VLA%sT 2011_2_27_2 10", "11 - VLAT"],
        "Asia/Yakutsk": ["8:38:40 - LMT 1919_11_15 8:38:40", "8 - YAKT 1930_5_21 8", "9 Russia YAK%sT 1991_2_31_2 9", "8 Russia YAK%sT 1992_0_19_2 8", "9 Russia YAK%sT 2011_2_27_2 9", "10 - YAKT"],
        "Asia/Yekaterinburg": ["4:2:24 - LMT 1919_6_15_4 4:2:24", "4 - SVET 1930_5_21 4", "5 Russia SVE%sT 1991_2_31_2 5", "4 Russia SVE%sT 1992_0_19_2 4", "5 Russia YEK%sT 2011_2_27_2 5", "6 - YEKT"],
        "Asia/Yerevan": ["2:58 - LMT 1924_4_2 2:58", "3 - YERT 1957_2 3", "4 RussiaAsia YER%sT 1991_2_31_2 4", "4 - YERST 1991_8_23 4", "3 RussiaAsia AM%sT 1995_8_24_2 3", "4 - AMT 1997 4", "4 RussiaAsia AM%sT 2012_2_25_2 4", "4 - AMT"],
        "Atlantic/Azores": ["-1:42:40 - LMT 1884 -1:42:40", "-1:54:32 - HMT 1911_4_24 -1:54:32", "-2 Port AZO%sT 1966_3_3_2 -2", "-1 Port AZO%sT 1983_8_25_1 -1", "-1 W-Eur AZO%sT 1992_8_27_1 -1", "0 EU WE%sT 1993_2_28_1", "-1 EU AZO%sT"],
        "Atlantic/Bermuda": ["-4:19:18 - LMT 1930_0_1_2 -4:19:18", "-4 - AST 1974_3_28_2 -4", "-4 Bahamas A%sT 1976 -4", "-4 US A%sT"],
        "Atlantic/Canary": ["-1:1:36 - LMT 1922_2 -1:1:36", "-1 - CANT 1946_8_30_1 -1", "0 - WET 1980_3_6_0", "1 - WEST 1980_8_28_0", "0 EU WE%sT"],
        "Atlantic/Cape_Verde": ["-1:34:4 - LMT 1907 -1:34:4", "-2 - CVT 1942_8 -2", "-1 - CVST 1945_9_15 -1", "-2 - CVT 1975_10_25_2 -2", "-1 - CVT"],
        "Atlantic/Faroe": ["-0:27:4 - LMT 1908_0_11 -0:27:4", "0 - WET 1981", "0 EU WE%sT"],
        "Atlantic/Madeira": ["-1:7:36 - LMT 1884 -1:7:36", "-1:7:36 - FMT 1911_4_24 -1:7:36", "-1 Port MAD%sT 1966_3_3_2 -1", "0 Port WE%sT 1983_8_25_1", "0 EU WE%sT"],
        "Atlantic/Reykjavik": ["-1:27:24 - LMT 1837 -1:27:24", "-1:27:48 - RMT 1908 -1:27:48", "-1 Iceland IS%sT 1968_3_7_1 -1", "0 - GMT"],
        "Atlantic/South_Georgia": ["-2:26:8 - LMT 1890 -2:26:8", "-2 - GST"],
        "Atlantic/St_Helena": ["-0:22:48 - LMT 1890 -0:22:48", "-0:22:48 - JMT 1951 -0:22:48", "0 - GMT"],
        "Atlantic/Stanley": ["-3:51:24 - LMT 1890 -3:51:24", "-3:51:24 - SMT 1912_2_12 -3:51:24", "-4 Falk FK%sT 1983_4 -4", "-3 Falk FK%sT 1985_8_15 -3", "-4 Falk FK%sT 2010_8_5_02 -4", "-3 - FKST"],
        "Australia/Adelaide": ["9:14:20 - LMT 1895_1 9:14:20", "9 - CST 1899_4 9", "9:30 Aus CST 1971 9:30", "9:30 AS CST"],
        "Australia/Brisbane": ["10:12:8 - LMT 1895 10:12:8", "10 Aus EST 1971 10", "10 AQ EST"],
        "Australia/Broken_Hill": ["9:25:48 - LMT 1895_1 9:25:48", "10 - EST 1896_7_23 10", "9 - CST 1899_4 9", "9:30 Aus CST 1971 9:30", "9:30 AN CST 2000 10:30", "9:30 AS CST"],
        "Australia/Currie": ["9:35:28 - LMT 1895_8 9:35:28", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1971_6 10", "10 AT EST"],
        "Australia/Darwin": ["8:43:20 - LMT 1895_1 8:43:20", "9 - CST 1899_4 9", "9:30 Aus CST"],
        "Australia/Eucla": ["8:35:28 - LMT 1895_11 8:35:28", "8:45 Aus CWST 1943_6 8:45", "8:45 AW CWST"],
        "Australia/Hobart": ["9:49:16 - LMT 1895_8 9:49:16", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1967 10", "10 AT EST"],
        "Australia/Lindeman": ["9:55:56 - LMT 1895 9:55:56", "10 Aus EST 1971 10", "10 AQ EST 1992_6 10", "10 Holiday EST"],
        "Australia/Lord_Howe": ["10:36:20 - LMT 1895_1 10:36:20", "10 - EST 1981_2 10", "10:30 LH LHST"],
        "Australia/Melbourne": ["9:39:52 - LMT 1895_1 9:39:52", "10 Aus EST 1971 10", "10 AV EST"],
        "Australia/Perth": ["7:43:24 - LMT 1895_11 7:43:24", "8 Aus WST 1943_6 8", "8 AW WST"],
        "Australia/Sydney": ["10:4:52 - LMT 1895_1 10:4:52", "10 Aus EST 1971 10", "10 AN EST"],
        CET: ["1 C-Eur CE%sT"],
        CST6CDT: ["-6 US C%sT"],
        EET: ["2 EU EE%sT"],
        EST: ["-5 - EST"],
        EST5EDT: ["-5 US E%sT"],
        HST: ["-10 - HST"],
        MET: ["1 C-Eur ME%sT"],
        MST: ["-7 - MST"],
        MST7MDT: ["-7 US M%sT"],
        PST8PDT: ["-8 US P%sT"],
        WET: ["0 EU WE%sT"],
        "Etc/GMT": ["0 - GMT"],
        "Etc/GMT+1": ["-1 - GMT+1"],
        "Etc/GMT+10": ["-10 - GMT+10"],
        "Etc/GMT+11": ["-11 - GMT+11"],
        "Etc/GMT+12": ["-12 - GMT+12"],
        "Etc/GMT+2": ["-2 - GMT+2"],
        "Etc/GMT+3": ["-3 - GMT+3"],
        "Etc/GMT+4": ["-4 - GMT+4"],
        "Etc/GMT+5": ["-5 - GMT+5"],
        "Etc/GMT+6": ["-6 - GMT+6"],
        "Etc/GMT+7": ["-7 - GMT+7"],
        "Etc/GMT+8": ["-8 - GMT+8"],
        "Etc/GMT+9": ["-9 - GMT+9"],
        "Etc/GMT-1": ["1 - GMT-1"],
        "Etc/GMT-10": ["10 - GMT-10"],
        "Etc/GMT-11": ["11 - GMT-11"],
        "Etc/GMT-12": ["12 - GMT-12"],
        "Etc/GMT-13": ["13 - GMT-13"],
        "Etc/GMT-14": ["14 - GMT-14"],
        "Etc/GMT-2": ["2 - GMT-2"],
        "Etc/GMT-3": ["3 - GMT-3"],
        "Etc/GMT-4": ["4 - GMT-4"],
        "Etc/GMT-5": ["5 - GMT-5"],
        "Etc/GMT-6": ["6 - GMT-6"],
        "Etc/GMT-7": ["7 - GMT-7"],
        "Etc/GMT-8": ["8 - GMT-8"],
        "Etc/GMT-9": ["9 - GMT-9"],
        "Etc/UCT": ["0 - UCT"],
        "Etc/UTC": ["0 - UTC"],
        "Europe/Amsterdam": ["0:19:32 - LMT 1835 0:19:32", "0:19:32 Neth %s 1937_6_1 1:19:32", "0:20 Neth NE%sT 1940_4_16_0 0:20", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Neth CE%sT 1977 1", "1 EU CE%sT"],
        "Europe/Andorra": ["0:6:4 - LMT 1901 0:6:4", "0 - WET 1946_8_30", "1 - CET 1985_2_31_2 1", "1 EU CE%sT"],
        "Europe/Athens": ["1:34:52 - LMT 1895_8_14 1:34:52", "1:34:52 - AMT 1916_6_28_0_1 1:34:52", "2 Greece EE%sT 1941_3_30 3", "1 Greece CE%sT 1944_3_4 1", "2 Greece EE%sT 1981 2", "2 EU EE%sT"],
        "Europe/Belgrade": ["1:22 - LMT 1884 1:22", "1 - CET 1941_3_18_23 1", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_4_8_2 1", "2 - CEST 1945_8_16_2 1", "1 - CET 1982_10_27 1", "1 EU CE%sT"],
        "Europe/Berlin": ["0:53:28 - LMT 1893_3 0:53:28", "1 C-Eur CE%sT 1945_4_24_2 2", "1 SovietZone CE%sT 1946 1", "1 Germany CE%sT 1980 1", "1 EU CE%sT"],
        "Europe/Prague": ["0:57:44 - LMT 1850 0:57:44", "0:57:44 - PMT 1891_9 0:57:44", "1 C-Eur CE%sT 1944_8_17_2 1", "1 Czech CE%sT 1979 1", "1 EU CE%sT"],
        "Europe/Brussels": ["0:17:30 - LMT 1880 0:17:30", "0:17:30 - BMT 1892_4_1_12 0:17:30", "0 - WET 1914_10_8", "1 - CET 1916_4_1_0 1", "1 C-Eur CE%sT 1918_10_11_11", "0 Belgium WE%sT 1940_4_20_2", "1 C-Eur CE%sT 1944_8_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],
        "Europe/Bucharest": ["1:44:24 - LMT 1891_9 1:44:24", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1981_2_29_2 2", "2 C-Eur EE%sT 1991 2", "2 Romania EE%sT 1994 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
        "Europe/Budapest": ["1:16:20 - LMT 1890_9 1:16:20", "1 C-Eur CE%sT 1918 1", "1 Hungary CE%sT 1941_3_6_2 1", "1 C-Eur CE%sT 1945 1", "1 Hungary CE%sT 1980_8_28_2 1", "1 EU CE%sT"],
        "Europe/Zurich": ["0:34:8 - LMT 1848_8_12 0:34:8", "0:29:44 - BMT 1894_5 0:29:44", "1 Swiss CE%sT 1981 1", "1 EU CE%sT"],
        "Europe/Chisinau": ["1:55:20 - LMT 1880 1:55:20", "1:55 - CMT 1918_1_15 1:55", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1940_7_15 2", "3 - EEST 1941_6_17 3", "1 C-Eur CE%sT 1944_7_24 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_4_6 3", "2 - EET 1991 2", "2 Russia EE%sT 1992 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
        "Europe/Copenhagen": ["0:50:20 - LMT 1890 0:50:20", "0:50:20 - CMT 1894_0_1 0:50:20", "1 Denmark CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Denmark CE%sT 1980 1", "1 EU CE%sT"],
        "Europe/Dublin": ["-0:25 - LMT 1880_7_2 -0:25", "-0:25:21 - DMT 1916_4_21_2 -0:25:21", "0:34:39 - IST 1916_9_1_2 -0:25:21", "0 GB-Eire %s 1921_11_6", "0 GB-Eire GMT/IST 1940_1_25_2", "1 - IST 1946_9_6_2 1", "0 - GMT 1947_2_16_2", "1 - IST 1947_10_2_2 1", "0 - GMT 1948_3_18_2", "0 GB-Eire GMT/IST 1968_9_27 1", "1 - IST 1971_9_31_2", "0 GB-Eire GMT/IST 1996", "0 EU GMT/IST"],
        "Europe/Gibraltar": ["-0:21:24 - LMT 1880_7_2_0 -0:21:24", "0 GB-Eire %s 1957_3_14_2", "1 - CET 1982 1", "1 EU CE%sT"],
        "Europe/London": ["-0:1:15 - LMT 1847_11_1_0 -0:1:15", "0 GB-Eire %s 1968_9_27 1", "1 - BST 1971_9_31_2", "0 GB-Eire %s 1996", "0 EU GMT/BST"],
        "Europe/Helsinki": ["1:39:52 - LMT 1878_4_31 1:39:52", "1:39:52 - HMT 1921_4 1:39:52", "2 Finland EE%sT 1983 2", "2 EU EE%sT"],
        "Europe/Istanbul": ["1:55:52 - LMT 1880 1:55:52", "1:56:56 - IMT 1910_9 1:56:56", "2 Turkey EE%sT 1978_9_15 3", "3 Turkey TR%sT 1985_3_20 3", "2 Turkey EE%sT 2007 2", "2 EU EE%sT 2011_2_27_1", "2 - EET 2011_2_28_1", "2 EU EE%sT"],
        "Europe/Kaliningrad": ["1:22 - LMT 1893_3 1:22", "1 C-Eur CE%sT 1945 1", "2 Poland CE%sT 1946 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],
        "Europe/Kiev": ["2:2:4 - LMT 1880 2:2:4", "2:2:4 - KMT 1924_4_2 2:2:4", "2 - EET 1930_5_21 2", "3 - MSK 1941_8_20 3", "1 C-Eur CE%sT 1943_10_6 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],
        "Europe/Lisbon": ["-0:36:32 - LMT 1884 -0:36:32", "-0:36:32 - LMT 1912_0_1 -0:36:32", "0 Port WE%sT 1966_3_3_2", "1 - CET 1976_8_26_1 1", "0 Port WE%sT 1983_8_25_1", "0 W-Eur WE%sT 1992_8_27_1", "1 EU CE%sT 1996_2_31_1", "0 EU WE%sT"],
        "Europe/Luxembourg": ["0:24:36 - LMT 1904_5 0:24:36", "1 Lux CE%sT 1918_10_25 1", "0 Lux WE%sT 1929_9_6_2", "0 Belgium WE%sT 1940_4_14_3 1", "1 C-Eur WE%sT 1944_8_18_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],
        "Europe/Madrid": ["-0:14:44 - LMT 1901_0_1_0 -0:14:44", "0 Spain WE%sT 1946_8_30 2", "1 Spain CE%sT 1979 1", "1 EU CE%sT"],
        "Europe/Malta": ["0:58:4 - LMT 1893_10_2_0 0:58:4", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Italy CE%sT 1973_2_31 1", "1 Malta CE%sT 1981 1", "1 EU CE%sT"],
        "Europe/Minsk": ["1:50:16 - LMT 1880 1:50:16", "1:50 - MMT 1924_4_2 1:50", "2 - EET 1930_5_21 2", "3 - MSK 1941_5_28 3", "1 C-Eur CE%sT 1944_6_3 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 - EET 1992_2_29_0 2", "3 - EEST 1992_8_27_0 2", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],
        "Europe/Monaco": ["0:29:32 - LMT 1891_2_15 0:29:32", "0:9:21 - PMT 1911_2_11 0:9:21", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],
        "Europe/Moscow": ["2:30:20 - LMT 1880 2:30:20", "2:30 - MMT 1916_6_3 2:30", "2:30:48 Russia %s 1919_6_1_2 4:30:48", "3 Russia MSK/MSD 1922_9 3", "2 - EET 1930_5_21 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 1992_0_19_2 2", "3 Russia MSK/MSD 2011_2_27_2 3", "4 - MSK"],
        "Europe/Paris": ["0:9:21 - LMT 1891_2_15_0_1 0:9:21", "0:9:21 - PMT 1911_2_11_0_1 0:9:21", "0 France WE%sT 1940_5_14_23 1", "1 C-Eur CE%sT 1944_7_25 2", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],
        "Europe/Riga": ["1:36:24 - LMT 1880 1:36:24", "1:36:24 - RMT 1918_3_15_2 1:36:24", "2:36:24 - LST 1918_8_16_3 2:36:24", "1:36:24 - RMT 1919_3_1_2 1:36:24", "2:36:24 - LST 1919_4_22_3 2:36:24", "1:36:24 - RMT 1926_4_11 1:36:24", "2 - EET 1940_7_5 2", "3 - MSK 1941_6 3", "1 C-Eur CE%sT 1944_9_13 1", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 Latvia EE%sT 1997_0_21 2", "2 EU EE%sT 2000_1_29 2", "2 - EET 2001_0_2 2", "2 EU EE%sT"],
        "Europe/Rome": ["0:49:56 - LMT 1866_8_22 0:49:56", "0:49:56 - RMT 1893_10_1_0 0:49:56", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1944_6 2", "1 Italy CE%sT 1980 1", "1 EU CE%sT"],
        "Europe/Samara": ["3:20:36 - LMT 1919_6_1_2 3:20:36", "3 - SAMT 1930_5_21 3", "4 - SAMT 1935_0_27 4", "4 Russia KUY%sT 1989_2_26_2 4", "3 Russia KUY%sT 1991_2_31_2 3", "2 Russia KUY%sT 1991_8_29_2 2", "3 - KUYT 1991_9_20_3 3", "4 Russia SAM%sT 2010_2_28_2 4", "3 Russia SAM%sT 2011_2_27_2 3", "4 - SAMT"],
        "Europe/Simferopol": ["2:16:24 - LMT 1880 2:16:24", "2:16 - SMT 1924_4_2 2:16", "2 - EET 1930_5_21 2", "3 - MSK 1941_10 3", "1 C-Eur CE%sT 1944_3_13 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1994_4 3", "3 E-Eur MSK/MSD 1996_2_31_3 3", "4 - MSD 1996_9_27_3 3", "3 Russia MSK/MSD 1997 3", "3 - MSK 1997_2_30_1", "2 EU EE%sT"],
        "Europe/Sofia": ["1:33:16 - LMT 1880 1:33:16", "1:56:56 - IMT 1894_10_30 1:56:56", "2 - EET 1942_10_2_3 2", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_3_2_3 1", "2 - EET 1979_2_31_23 2", "2 Bulg EE%sT 1982_8_26_2 3", "2 C-Eur EE%sT 1991 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
        "Europe/Stockholm": ["1:12:12 - LMT 1879_0_1 1:12:12", "1:0:14 - SET 1900_0_1 1:0:14", "1 - CET 1916_4_14_23 1", "2 - CEST 1916_9_1_01 2", "1 - CET 1980 1", "1 EU CE%sT"],
        "Europe/Tallinn": ["1:39 - LMT 1880 1:39", "1:39 - TMT 1918_1 1:39", "1 C-Eur CE%sT 1919_6 1", "1:39 - TMT 1921_4 1:39", "2 - EET 1940_7_6 2", "3 - MSK 1941_8_15 3", "1 C-Eur CE%sT 1944_8_22 2", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 C-Eur EE%sT 1998_8_22 3", "2 EU EE%sT 1999_10_1 3", "2 - EET 2002_1_21 2", "2 EU EE%sT"],
        "Europe/Tirane": ["1:19:20 - LMT 1914 1:19:20", "1 - CET 1940_5_16 1", "1 Albania CE%sT 1984_6 2", "1 EU CE%sT"],
        "Europe/Uzhgorod": ["1:29:12 - LMT 1890_9 1:29:12", "1 - CET 1940 1", "1 C-Eur CE%sT 1944_9 2", "2 - CEST 1944_9_26 2", "1 - CET 1945_5_29 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "1 - CET 1991_2_31_3 1", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],
        "Europe/Vaduz": ["0:38:4 - LMT 1894_5 0:38:4", "1 - CET 1981 1", "1 EU CE%sT"],
        "Europe/Vienna": ["1:5:21 - LMT 1893_3 1:5:21", "1 C-Eur CE%sT 1920 1", "1 Austria CE%sT 1940_3_1_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "2 - CEST 1945_3_12_2 1", "1 - CET 1946 1", "1 Austria CE%sT 1981 1", "1 EU CE%sT"],
        "Europe/Vilnius": ["1:41:16 - LMT 1880 1:41:16", "1:24 - WMT 1917 1:24", "1:35:36 - KMT 1919_9_10 1:35:36", "1 - CET 1920_6_12 1", "2 - EET 1920_9_9 2", "1 - CET 1940_7_3 1", "3 - MSK 1941_5_24 3", "1 C-Eur CE%sT 1944_7 2", "3 Russia MSK/MSD 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 C-Eur EE%sT 1998 2", "2 - EET 1998_2_29_1", "1 EU CE%sT 1999_9_31_1", "2 - EET 2003_0_1 2", "2 EU EE%sT"],
        "Europe/Volgograd": ["2:57:40 - LMT 1920_0_3 2:57:40", "3 - TSAT 1925_3_6 3", "3 - STAT 1930_5_21 3", "4 - STAT 1961_10_11 4", "4 Russia VOL%sT 1989_2_26_2 4", "3 Russia VOL%sT 1991_2_31_2 3", "4 - VOLT 1992_2_29_2 4", "3 Russia VOL%sT 2011_2_27_2 3", "4 - VOLT"],
        "Europe/Warsaw": ["1:24 - LMT 1880 1:24", "1:24 - WMT 1915_7_5 1:24", "1 C-Eur CE%sT 1918_8_16_3 2", "2 Poland EE%sT 1922_5 2", "1 Poland CE%sT 1940_5_23_2 1", "1 C-Eur CE%sT 1944_9 2", "1 Poland CE%sT 1977 1", "1 W-Eur CE%sT 1988 1", "1 EU CE%sT"],
        "Europe/Zaporozhye": ["2:20:40 - LMT 1880 2:20:40", "2:20 - CUT 1924_4_2 2:20", "2 - EET 1930_5_21 2", "3 - MSK 1941_7_25 3", "1 C-Eur CE%sT 1943_9_25 1", "3 Russia MSK/MSD 1991_2_31_2 3", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],
        "Indian/Antananarivo": ["3:10:4 - LMT 1911_6 3:10:4", "3 - EAT 1954_1_27_23 3", "4 - EAST 1954_4_29_23 3", "3 - EAT"],
        "Indian/Chagos": ["4:49:40 - LMT 1907 4:49:40", "5 - IOT 1996 5", "6 - IOT"],
        "Indian/Christmas": ["7:2:52 - LMT 1895_1 7:2:52", "7 - CXT"],
        "Indian/Cocos": ["6:27:40 - LMT 1900 6:27:40", "6:30 - CCT"],
        "Indian/Comoro": ["2:53:4 - LMT 1911_6 2:53:4", "3 - EAT"],
        "Indian/Kerguelen": ["0 - zzz 1950", "5 - TFT"],
        "Indian/Mahe": ["3:41:48 - LMT 1906_5 3:41:48", "4 - SCT"],
        "Indian/Maldives": ["4:54 - LMT 1880 4:54", "4:54 - MMT 1960 4:54", "5 - MVT"],
        "Indian/Mauritius": ["3:50 - LMT 1907 3:50", "4 Mauritius MU%sT"],
        "Indian/Mayotte": ["3:0:56 - LMT 1911_6 3:0:56", "3 - EAT"],
        "Indian/Reunion": ["3:41:52 - LMT 1911_5 3:41:52", "4 - RET"],
        "Pacific/Apia": ["12:33:4 - LMT 1879_6_5 12:33:4", "-11:26:56 - LMT 1911 -11:26:56", "-11:30 - SAMT 1950 -11:30", "-11 - WST 2010_8_26 -11", "-10 - WSDT 2011_3_2_4 -10", "-11 - WST 2011_8_24_3 -11", "-10 - WSDT 2011_11_30 -10", "14 - WSDT 2012_3_1_4 14", "13 WS WS%sT"],
        "Pacific/Auckland": ["11:39:4 - LMT 1868_10_2 11:39:4", "11:30 NZ NZ%sT 1946_0_1 12", "12 NZ NZ%sT"],
        "Pacific/Chatham": ["12:13:48 - LMT 1957_0_1 12:13:48", "12:45 Chatham CHA%sT"],
        "Pacific/Chuuk": ["10:7:8 - LMT 1901 10:7:8", "10 - CHUT"],
        "Pacific/Easter": ["-7:17:44 - LMT 1890 -7:17:44", "-7:17:28 - EMT 1932_8 -7:17:28", "-7 Chile EAS%sT 1982_2_13_21 -6", "-6 Chile EAS%sT"],
        "Pacific/Efate": ["11:13:16 - LMT 1912_0_13 11:13:16", "11 Vanuatu VU%sT"],
        "Pacific/Enderbury": ["-11:24:20 - LMT 1901 -11:24:20", "-12 - PHOT 1979_9 -12", "-11 - PHOT 1995 -11", "13 - PHOT"],
        "Pacific/Fakaofo": ["-11:24:56 - LMT 1901 -11:24:56", "-11 - TKT 2011_11_30 -11", "13 - TKT"],
        "Pacific/Fiji": ["11:55:44 - LMT 1915_9_26 11:55:44", "12 Fiji FJ%sT"],
        "Pacific/Funafuti": ["11:56:52 - LMT 1901 11:56:52", "12 - TVT"],
        "Pacific/Galapagos": ["-5:58:24 - LMT 1931 -5:58:24", "-5 - ECT 1986 -5", "-6 - GALT"],
        "Pacific/Gambier": ["-8:59:48 - LMT 1912_9 -8:59:48", "-9 - GAMT"],
        "Pacific/Guadalcanal": ["10:39:48 - LMT 1912_9 10:39:48", "11 - SBT"],
        "Pacific/Guam": ["-14:21 - LMT 1844_11_31 -14:21", "9:39 - LMT 1901 9:39", "10 - GST 2000_11_23 10", "10 - ChST"],
        "Pacific/Honolulu": ["-10:31:26 - LMT 1896_0_13_12 -10:31:26", "-10:30 - HST 1933_3_30_2 -10:30", "-9:30 - HDT 1933_4_21_12 -9:30", "-10:30 - HST 1942_1_09_2 -10:30", "-9:30 - HDT 1945_8_30_2 -9:30", "-10:30 - HST 1947_5_8_2 -10:30", "-10 - HST"],
        "Pacific/Johnston": ["-10 - HST"],
        "Pacific/Kiritimati": ["-10:29:20 - LMT 1901 -10:29:20", "-10:40 - LINT 1979_9 -10:40", "-10 - LINT 1995 -10", "14 - LINT"],
        "Pacific/Kosrae": ["10:51:56 - LMT 1901 10:51:56", "11 - KOST 1969_9 11", "12 - KOST 1999 12", "11 - KOST"],
        "Pacific/Kwajalein": ["11:9:20 - LMT 1901 11:9:20", "11 - MHT 1969_9 11", "-12 - KWAT 1993_7_20 -12", "12 - MHT"],
        "Pacific/Majuro": ["11:24:48 - LMT 1901 11:24:48", "11 - MHT 1969_9 11", "12 - MHT"],
        "Pacific/Marquesas": ["-9:18 - LMT 1912_9 -9:18", "-9:30 - MART"],
        "Pacific/Midway": ["-11:49:28 - LMT 1901 -11:49:28", "-11 - NST 1956_5_3 -11", "-10 - NDT 1956_8_2 -10", "-11 - NST 1967_3 -11", "-11 - BST 1983_10_30 -11", "-11 - SST"],
        "Pacific/Nauru": ["11:7:40 - LMT 1921_0_15 11:7:40", "11:30 - NRT 1942_2_15 11:30", "9 - JST 1944_7_15 9", "11:30 - NRT 1979_4 11:30", "12 - NRT"],
        "Pacific/Niue": ["-11:19:40 - LMT 1901 -11:19:40", "-11:20 - NUT 1951 -11:20", "-11:30 - NUT 1978_9_1 -11:30", "-11 - NUT"],
        "Pacific/Norfolk": ["11:11:52 - LMT 1901 11:11:52", "11:12 - NMT 1951 11:12", "11:30 - NFT"],
        "Pacific/Noumea": ["11:5:48 - LMT 1912_0_13 11:5:48", "11 NC NC%sT"],
        "Pacific/Pago_Pago": ["12:37:12 - LMT 1879_6_5 12:37:12", "-11:22:48 - LMT 1911 -11:22:48", "-11:30 - SAMT 1950 -11:30", "-11 - NST 1967_3 -11", "-11 - BST 1983_10_30 -11", "-11 - SST"],
        "Pacific/Palau": ["8:57:56 - LMT 1901 8:57:56", "9 - PWT"],
        "Pacific/Pitcairn": ["-8:40:20 - LMT 1901 -8:40:20", "-8:30 - PNT 1998_3_27_00 -8:30", "-8 - PST"],
        "Pacific/Pohnpei": ["10:32:52 - LMT 1901 10:32:52", "11 - PONT"],
        "Pacific/Port_Moresby": ["9:48:40 - LMT 1880 9:48:40", "9:48:32 - PMMT 1895 9:48:32", "10 - PGT"],
        "Pacific/Rarotonga": ["-10:39:4 - LMT 1901 -10:39:4", "-10:30 - CKT 1978_10_12 -10:30", "-10 Cook CK%sT"],
        "Pacific/Saipan": ["-14:17 - LMT 1844_11_31 -14:17", "9:43 - LMT 1901 9:43", "9 - MPT 1969_9 9", "10 - MPT 2000_11_23 10", "10 - ChST"],
        "Pacific/Tahiti": ["-9:58:16 - LMT 1912_9 -9:58:16", "-10 - TAHT"],
        "Pacific/Tarawa": ["11:32:4 - LMT 1901 11:32:4", "12 - GILT"],
        "Pacific/Tongatapu": ["12:19:20 - LMT 1901 12:19:20", "12:20 - TOT 1941 12:20", "13 - TOT 1999 13", "13 Tonga TO%sT"],
        "Pacific/Wake": ["11:6:28 - LMT 1901 11:6:28", "12 - WAKT"],
        "Pacific/Wallis": ["12:15:20 - LMT 1901 12:15:20", "12 - WFT"]
    },
    rules: {
        Ghana: ["1936 1942 8 1 7 0 0 0:20 GHST", "1936 1942 11 31 7 0 0 0 GMT"],
        Algeria: ["1916 1916 5 14 7 23 2 1 S", "1916 1919 9 1 0 23 2 0", "1917 1917 2 24 7 23 2 1 S", "1918 1918 2 9 7 23 2 1 S", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 5 21 7 23 2 0", "1939 1939 8 11 7 23 2 1 S", "1939 1939 10 19 7 1 0 0", "1944 1945 3 1 1 2 0 1 S", "1944 1944 9 8 7 2 0 0", "1945 1945 8 16 7 1 0 0", "1971 1971 3 25 7 23 2 1 S", "1971 1971 8 26 7 23 2 0", "1977 1977 4 6 7 0 0 1 S", "1977 1977 9 21 7 0 0 0", "1978 1978 2 24 7 1 0 1 S", "1978 1978 8 22 7 3 0 0", "1980 1980 3 25 7 0 0 1 S", "1980 1980 9 31 7 2 0 0"],
        Egypt: ["1940 1940 6 15 7 0 0 1 S", "1940 1940 9 1 7 0 0 0", "1941 1941 3 15 7 0 0 1 S", "1941 1941 8 16 7 0 0 0", "1942 1944 3 1 7 0 0 1 S", "1942 1942 9 27 7 0 0 0", "1943 1945 10 1 7 0 0 0", "1945 1945 3 16 7 0 0 1 S", "1957 1957 4 10 7 0 0 1 S", "1957 1958 9 1 7 0 0 0", "1958 1958 4 1 7 0 0 1 S", "1959 1981 4 1 7 1 0 1 S", "1959 1965 8 30 7 3 0 0", "1966 1994 9 1 7 3 0 0", "1982 1982 6 25 7 1 0 1 S", "1983 1983 6 12 7 1 0 1 S", "1984 1988 4 1 7 1 0 1 S", "1989 1989 4 6 7 1 0 1 S", "1990 1994 4 1 7 1 0 1 S", "1995 2010 3 5 8 0 2 1 S", "1995 2005 8 4 8 23 2 0", "2006 2006 8 21 7 23 2 0", "2007 2007 8 1 4 23 2 0", "2008 2008 7 4 8 23 2 0", "2009 2009 7 20 7 23 2 0", "2010 2010 7 11 7 0 0 0", "2010 2010 8 10 7 0 0 1 S", "2010 2010 8 4 8 23 2 0"],
        Morocco: ["1939 1939 8 12 7 0 0 1 S", "1939 1939 10 19 7 0 0 0", "1940 1940 1 25 7 0 0 1 S", "1945 1945 10 18 7 0 0 0", "1950 1950 5 11 7 0 0 1 S", "1950 1950 9 29 7 0 0 0", "1967 1967 5 3 7 12 0 1 S", "1967 1967 9 1 7 0 0 0", "1974 1974 5 24 7 0 0 1 S", "1974 1974 8 1 7 0 0 0", "1976 1977 4 1 7 0 0 1 S", "1976 1976 7 1 7 0 0 0", "1977 1977 8 28 7 0 0 0", "1978 1978 5 1 7 0 0 1 S", "1978 1978 7 4 7 0 0 0", "2008 2008 5 1 7 0 0 1 S", "2008 2008 8 1 7 0 0 0", "2009 2009 5 1 7 0 0 1 S", "2009 2009 7 21 7 0 0 0", "2010 2010 4 2 7 0 0 1 S", "2010 2010 7 8 7 0 0 0", "2011 2011 3 3 7 0 0 1 S", "2011 2011 6 31 7 0 0 0", "2012 2019 3 0 8 2 0 1 S", "2012 9999 8 0 8 3 0 0", "2012 2012 6 20 7 3 0 0", "2012 2012 7 20 7 2 0 1 S", "2013 2013 6 9 7 3 0 0", "2013 2013 7 8 7 2 0 1 S", "2014 2014 5 29 7 3 0 0", "2014 2014 6 29 7 2 0 1 S", "2015 2015 5 18 7 3 0 0", "2015 2015 6 18 7 2 0 1 S", "2016 2016 5 7 7 3 0 0", "2016 2016 6 7 7 2 0 1 S", "2017 2017 4 27 7 3 0 0", "2017 2017 5 26 7 2 0 1 S", "2018 2018 4 16 7 3 0 0", "2018 2018 5 15 7 2 0 1 S", "2019 2019 4 6 7 3 0 0", "2019 2019 5 5 7 2 0 1 S", "2020 2020 4 24 7 2 0 1 S", "2021 2021 4 13 7 2 0 1 S", "2022 2022 4 3 7 2 0 1 S", "2023 9999 3 0 8 2 0 1 S"],
        Spain: ["1917 1917 4 5 7 23 2 1 S", "1917 1919 9 6 7 23 2 0", "1918 1918 3 15 7 23 2 1 S", "1919 1919 3 5 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 4 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1937 1937 4 22 7 23 2 1 S", "1937 1939 9 1 6 23 2 0", "1938 1938 2 22 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1940 1940 2 16 7 23 2 1 S", "1942 1942 4 2 7 22 2 2 M", "1942 1942 8 1 7 22 2 1 S", "1943 1946 3 13 6 22 2 2 M", "1943 1943 9 3 7 22 2 1 S", "1944 1944 9 10 7 22 2 1 S", "1945 1945 8 30 7 1 0 1 S", "1946 1946 8 30 7 0 0 0", "1949 1949 3 30 7 23 0 1 S", "1949 1949 8 30 7 1 0 0", "1974 1975 3 13 6 23 0 1 S", "1974 1975 9 1 0 1 0 0", "1976 1976 2 27 7 23 0 1 S", "1976 1977 8 0 8 1 0 0", "1977 1978 3 2 7 23 0 1 S", "1978 1978 9 1 7 1 0 0"],
        SpainAfrica: ["1967 1967 5 3 7 12 0 1 S", "1967 1967 9 1 7 0 0 0", "1974 1974 5 24 7 0 0 1 S", "1974 1974 8 1 7 0 0 0", "1976 1977 4 1 7 0 0 1 S", "1976 1976 7 1 7 0 0 0", "1977 1977 8 28 7 0 0 0", "1978 1978 5 1 7 0 0 1 S", "1978 1978 7 4 7 0 0 0"],
        EU: ["1977 1980 3 1 0 1 1 1 S", "1977 1977 8 0 8 1 1 0", "1978 1978 9 1 7 1 1 0", "1979 1995 8 0 8 1 1 0", "1981 9999 2 0 8 1 1 1 S", "1996 9999 9 0 8 1 1 0"],
        SL: ["1935 1942 5 1 7 0 0 0:40 SLST", "1935 1942 9 1 7 0 0 0 WAT", "1957 1962 5 1 7 0 0 1 SLST", "1957 1962 8 1 7 0 0 0 GMT"],
        SA: ["1942 1943 8 15 0 2 0 1", "1943 1944 2 15 0 2 0 0"],
        Sudan: ["1970 1970 4 1 7 0 0 1 S", "1970 1985 9 15 7 0 0 0", "1971 1971 3 30 7 0 0 1 S", "1972 1985 3 0 8 0 0 1 S"],
        Libya: ["1951 1951 9 14 7 2 0 1 S", "1952 1952 0 1 7 0 0 0", "1953 1953 9 9 7 2 0 1 S", "1954 1954 0 1 7 0 0 0", "1955 1955 8 30 7 0 0 1 S", "1956 1956 0 1 7 0 0 0", "1982 1984 3 1 7 0 0 1 S", "1982 1985 9 1 7 0 0 0", "1985 1985 3 6 7 0 0 1 S", "1986 1986 3 4 7 0 0 1 S", "1986 1986 9 3 7 0 0 0", "1987 1989 3 1 7 0 0 1 S", "1987 1989 9 1 7 0 0 0", "1997 1997 3 4 7 0 0 1 S", "1997 1997 9 4 7 0 0 0", "2013 9999 2 5 8 1 0 1 S", "2013 9999 9 5 8 2 0 0"],
        Tunisia: ["1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 25 7 23 2 1 S", "1941 1941 9 6 7 0 0 0", "1942 1942 2 9 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 29 7 2 0 1 S", "1943 1943 3 17 7 2 0 0", "1943 1943 3 25 7 2 0 1 S", "1943 1943 9 4 7 2 0 0", "1944 1945 3 1 1 2 0 1 S", "1944 1944 9 8 7 0 0 0", "1945 1945 8 16 7 0 0 0", "1977 1977 3 30 7 0 2 1 S", "1977 1977 8 24 7 0 2 0", "1978 1978 4 1 7 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1988 1988 5 1 7 0 2 1 S", "1988 1990 8 0 8 0 2 0", "1989 1989 2 26 7 0 2 1 S", "1990 1990 4 1 7 0 2 1 S", "2005 2005 4 1 7 0 2 1 S", "2005 2005 8 30 7 1 2 0", "2006 2008 2 0 8 2 2 1 S", "2006 2008 9 0 8 2 2 0"],
        Namibia: ["1994 9999 8 1 0 2 0 1 S", "1995 9999 3 1 0 2 0 0"],
        US: ["1918 1919 2 0 8 2 0 1 D", "1918 1919 9 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1967 2006 9 0 8 2 0 0 S", "1967 1973 3 0 8 2 0 1 D", "1974 1974 0 6 7 2 0 1 D", "1975 1975 1 23 7 2 0 1 D", "1976 1986 3 0 8 2 0 1 D", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
        Brazil: ["1931 1931 9 3 7 11 0 1 S", "1932 1933 3 1 7 0 0 0", "1932 1932 9 3 7 0 0 1 S", "1949 1952 11 1 7 0 0 1 S", "1950 1950 3 16 7 1 0 0", "1951 1952 3 1 7 0 0 0", "1953 1953 2 1 7 0 0 0", "1963 1963 11 9 7 0 0 1 S", "1964 1964 2 1 7 0 0 0", "1965 1965 0 31 7 0 0 1 S", "1965 1965 2 31 7 0 0 0", "1965 1965 11 1 7 0 0 1 S", "1966 1968 2 1 7 0 0 0", "1966 1967 10 1 7 0 0 1 S", "1985 1985 10 2 7 0 0 1 S", "1986 1986 2 15 7 0 0 0", "1986 1986 9 25 7 0 0 1 S", "1987 1987 1 14 7 0 0 0", "1987 1987 9 25 7 0 0 1 S", "1988 1988 1 7 7 0 0 0", "1988 1988 9 16 7 0 0 1 S", "1989 1989 0 29 7 0 0 0", "1989 1989 9 15 7 0 0 1 S", "1990 1990 1 11 7 0 0 0", "1990 1990 9 21 7 0 0 1 S", "1991 1991 1 17 7 0 0 0", "1991 1991 9 20 7 0 0 1 S", "1992 1992 1 9 7 0 0 0", "1992 1992 9 25 7 0 0 1 S", "1993 1993 0 31 7 0 0 0", "1993 1995 9 11 0 0 0 1 S", "1994 1995 1 15 0 0 0 0", "1996 1996 1 11 7 0 0 0", "1996 1996 9 6 7 0 0 1 S", "1997 1997 1 16 7 0 0 0", "1997 1997 9 6 7 0 0 1 S", "1998 1998 2 1 7 0 0 0", "1998 1998 9 11 7 0 0 1 S", "1999 1999 1 21 7 0 0 0", "1999 1999 9 3 7 0 0 1 S", "2000 2000 1 27 7 0 0 0", "2000 2001 9 8 0 0 0 1 S", "2001 2006 1 15 0 0 0 0", "2002 2002 10 3 7 0 0 1 S", "2003 2003 9 19 7 0 0 1 S", "2004 2004 10 2 7 0 0 1 S", "2005 2005 9 16 7 0 0 1 S", "2006 2006 10 5 7 0 0 1 S", "2007 2007 1 25 7 0 0 0", "2007 2007 9 8 0 0 0 1 S", "2008 9999 9 15 0 0 0 1 S", "2008 2011 1 15 0 0 0 0", "2012 2012 1 22 0 0 0 0", "2013 2014 1 15 0 0 0 0", "2015 2015 1 22 0 0 0 0", "2016 2022 1 15 0 0 0 0", "2023 2023 1 22 0 0 0 0", "2024 2025 1 15 0 0 0 0", "2026 2026 1 22 0 0 0 0", "2027 2033 1 15 0 0 0 0", "2034 2034 1 22 0 0 0 0", "2035 2036 1 15 0 0 0 0", "2037 2037 1 22 0 0 0 0", "2038 9999 1 15 0 0 0 0"],
        Arg: ["1930 1930 11 1 7 0 0 1 S", "1931 1931 3 1 7 0 0 0", "1931 1931 9 15 7 0 0 1 S", "1932 1940 2 1 7 0 0 0", "1932 1939 10 1 7 0 0 1 S", "1940 1940 6 1 7 0 0 1 S", "1941 1941 5 15 7 0 0 0", "1941 1941 9 15 7 0 0 1 S", "1943 1943 7 1 7 0 0 0", "1943 1943 9 15 7 0 0 1 S", "1946 1946 2 1 7 0 0 0", "1946 1946 9 1 7 0 0 1 S", "1963 1963 9 1 7 0 0 0", "1963 1963 11 15 7 0 0 1 S", "1964 1966 2 1 7 0 0 0", "1964 1966 9 15 7 0 0 1 S", "1967 1967 3 2 7 0 0 0", "1967 1968 9 1 0 0 0 1 S", "1968 1969 3 1 0 0 0 0", "1974 1974 0 23 7 0 0 1 S", "1974 1974 4 1 7 0 0 0", "1988 1988 11 1 7 0 0 1 S", "1989 1993 2 1 0 0 0 0", "1989 1992 9 15 0 0 0 1 S", "1999 1999 9 1 0 0 0 1 S", "2000 2000 2 3 7 0 0 0", "2007 2007 11 30 7 0 0 1 S", "2008 2009 2 15 0 0 0 0", "2008 2008 9 15 0 0 0 1 S"],
        SanLuis: ["2008 2009 2 8 0 0 0 0", "2007 2009 9 8 0 0 0 1 S"],
        Para: ["1975 1988 9 1 7 0 0 1 S", "1975 1978 2 1 7 0 0 0", "1979 1991 3 1 7 0 0 0", "1989 1989 9 22 7 0 0 1 S", "1990 1990 9 1 7 0 0 1 S", "1991 1991 9 6 7 0 0 1 S", "1992 1992 2 1 7 0 0 0", "1992 1992 9 5 7 0 0 1 S", "1993 1993 2 31 7 0 0 0", "1993 1995 9 1 7 0 0 1 S", "1994 1995 1 0 8 0 0 0", "1996 1996 2 1 7 0 0 0", "1996 2001 9 1 0 0 0 1 S", "1997 1997 1 0 8 0 0 0", "1998 2001 2 1 0 0 0 0", "2002 2004 3 1 0 0 0 0", "2002 2003 8 1 0 0 0 1 S", "2004 2009 9 15 0 0 0 1 S", "2005 2009 2 8 0 0 0 0", "2010 9999 9 1 0 0 0 1 S", "2010 2012 3 8 0 0 0 0", "2013 9999 2 22 0 0 0 0"],
        Canada: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1974 1986 3 0 8 2 0 1 D", "1974 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
        Mexico: ["1939 1939 1 5 7 0 0 1 D", "1939 1939 5 25 7 0 0 0 S", "1940 1940 11 9 7 0 0 1 D", "1941 1941 3 1 7 0 0 0 S", "1943 1943 11 16 7 0 0 1 W", "1944 1944 4 1 7 0 0 0 S", "1950 1950 1 12 7 0 0 1 D", "1950 1950 6 30 7 0 0 0 S", "1996 2000 3 1 0 2 0 1 D", "1996 2000 9 0 8 2 0 0 S", "2001 2001 4 1 0 2 0 1 D", "2001 2001 8 0 8 2 0 0 S", "2002 9999 3 1 0 2 0 1 D", "2002 9999 9 0 8 2 0 0 S"],
        Barb: ["1977 1977 5 12 7 2 0 1 D", "1977 1978 9 1 0 2 0 0 S", "1978 1980 3 15 0 2 0 1 D", "1979 1979 8 30 7 2 0 0 S", "1980 1980 8 25 7 2 0 0 S"],
        Belize: ["1918 1942 9 2 0 0 0 0:30 HD", "1919 1943 1 9 0 0 0 0 S", "1973 1973 11 5 7 0 0 1 D", "1974 1974 1 9 7 0 0 0 S", "1982 1982 11 18 7 0 0 1 D", "1983 1983 1 12 7 0 0 0 S"],
        CO: ["1992 1992 4 3 7 0 0 1 S", "1993 1993 3 4 7 0 0 0"],
        NT_YK: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 25 7 2 0 1 D", "1919 1919 10 1 7 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1965 1965 3 0 8 0 0 2 DD", "1965 1965 9 0 8 2 0 0 S", "1980 1986 3 0 8 2 0 1 D", "1980 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D"],
        Chicago: ["1920 1920 5 13 7 2 0 1 D", "1920 1921 9 0 8 2 0 0 S", "1921 1921 2 0 8 2 0 1 D", "1922 1966 3 0 8 2 0 1 D", "1922 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],
        CR: ["1979 1980 1 0 8 0 0 1 D", "1979 1980 5 1 0 0 0 0 S", "1991 1992 0 15 6 0 0 1 D", "1991 1991 6 1 7 0 0 0 S", "1992 1992 2 15 7 0 0 0 S"],
        Vanc: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1946 1986 3 0 8 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1961 8 0 8 2 0 0 S", "1962 2006 9 0 8 2 0 0 S"],
        Denver: ["1920 1921 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1921 4 22 7 2 0 0 S", "1965 1966 3 0 8 2 0 1 D", "1965 1966 9 0 8 2 0 0 S"],
        Detroit: ["1948 1948 3 0 8 2 0 1 D", "1948 1948 8 0 8 2 0 0 S", "1967 1967 5 14 7 2 0 1 D", "1967 1967 9 0 8 2 0 0 S"],
        Edm: ["1918 1919 3 8 0 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 27 7 2 0 0 S", "1920 1923 3 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1923 8 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1947 1947 3 0 8 2 0 1 D", "1947 1947 8 0 8 2 0 0 S", "1967 1967 3 0 8 2 0 1 D", "1967 1967 9 0 8 2 0 0 S", "1969 1969 3 0 8 2 0 1 D", "1969 1969 9 0 8 2 0 0 S", "1972 1986 3 0 8 2 0 1 D", "1972 2006 9 0 8 2 0 0 S"],
        Salv: ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S"],
        Halifax: ["1916 1916 3 1 7 0 0 1 D", "1916 1916 9 1 7 0 0 0 S", "1920 1920 4 9 7 0 0 1 D", "1920 1920 7 29 7 0 0 0 S", "1921 1921 4 6 7 0 0 1 D", "1921 1922 8 5 7 0 0 0 S", "1922 1922 3 30 7 0 0 1 D", "1923 1925 4 1 0 0 0 1 D", "1923 1923 8 4 7 0 0 0 S", "1924 1924 8 15 7 0 0 0 S", "1925 1925 8 28 7 0 0 0 S", "1926 1926 4 16 7 0 0 1 D", "1926 1926 8 13 7 0 0 0 S", "1927 1927 4 1 7 0 0 1 D", "1927 1927 8 26 7 0 0 0 S", "1928 1931 4 8 0 0 0 1 D", "1928 1928 8 9 7 0 0 0 S", "1929 1929 8 3 7 0 0 0 S", "1930 1930 8 15 7 0 0 0 S", "1931 1932 8 24 1 0 0 0 S", "1932 1932 4 1 7 0 0 1 D", "1933 1933 3 30 7 0 0 1 D", "1933 1933 9 2 7 0 0 0 S", "1934 1934 4 20 7 0 0 1 D", "1934 1934 8 16 7 0 0 0 S", "1935 1935 5 2 7 0 0 1 D", "1935 1935 8 30 7 0 0 0 S", "1936 1936 5 1 7 0 0 1 D", "1936 1936 8 14 7 0 0 0 S", "1937 1938 4 1 0 0 0 1 D", "1937 1941 8 24 1 0 0 0 S", "1939 1939 4 28 7 0 0 1 D", "1940 1941 4 1 0 0 0 1 D", "1946 1949 3 0 8 2 0 1 D", "1946 1949 8 0 8 2 0 0 S", "1951 1954 3 0 8 2 0 1 D", "1951 1954 8 0 8 2 0 0 S", "1956 1959 3 0 8 2 0 1 D", "1956 1959 8 0 8 2 0 0 S", "1962 1973 3 0 8 2 0 1 D", "1962 1973 9 0 8 2 0 0 S"],
        StJohns: ["1917 1917 3 8 7 2 0 1 D", "1917 1917 8 17 7 2 0 0 S", "1919 1919 4 5 7 23 0 1 D", "1919 1919 7 12 7 23 0 0 S", "1920 1935 4 1 0 23 0 1 D", "1920 1935 9 0 8 23 0 0 S", "1936 1941 4 9 1 0 0 1 D", "1936 1941 9 2 1 0 0 0 S", "1946 1950 4 8 0 2 0 1 D", "1946 1950 9 2 0 2 0 0 S", "1951 1986 3 0 8 2 0 1 D", "1951 1959 8 0 8 2 0 0 S", "1960 1986 9 0 8 2 0 0 S", "1987 1987 3 1 0 0:1 0 1 D", "1987 2006 9 0 8 0:1 0 0 S", "1988 1988 3 1 0 0:1 0 2 DD", "1989 2006 3 1 0 0:1 0 1 D", "2007 2011 2 8 0 0:1 0 1 D", "2007 2010 10 1 0 0:1 0 0 S"],
        TC: ["1979 1986 3 0 8 2 0 1 D", "1979 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
        Guat: ["1973 1973 10 25 7 0 0 1 D", "1974 1974 1 24 7 0 0 0 S", "1983 1983 4 21 7 0 0 1 D", "1983 1983 8 22 7 0 0 0 S", "1991 1991 2 23 7 0 0 1 D", "1991 1991 8 7 7 0 0 0 S", "2006 2006 3 30 7 0 0 1 D", "2006 2006 9 1 7 0 0 0 S"],
        Cuba: ["1928 1928 5 10 7 0 0 1 D", "1928 1928 9 10 7 0 0 0 S", "1940 1942 5 1 0 0 0 1 D", "1940 1942 8 1 0 0 0 0 S", "1945 1946 5 1 0 0 0 1 D", "1945 1946 8 1 0 0 0 0 S", "1965 1965 5 1 7 0 0 1 D", "1965 1965 8 30 7 0 0 0 S", "1966 1966 4 29 7 0 0 1 D", "1966 1966 9 2 7 0 0 0 S", "1967 1967 3 8 7 0 0 1 D", "1967 1968 8 8 0 0 0 0 S", "1968 1968 3 14 7 0 0 1 D", "1969 1977 3 0 8 0 0 1 D", "1969 1971 9 0 8 0 0 0 S", "1972 1974 9 8 7 0 0 0 S", "1975 1977 9 0 8 0 0 0 S", "1978 1978 4 7 7 0 0 1 D", "1978 1990 9 8 0 0 0 0 S", "1979 1980 2 15 0 0 0 1 D", "1981 1985 4 5 0 0 0 1 D", "1986 1989 2 14 0 0 0 1 D", "1990 1997 3 1 0 0 0 1 D", "1991 1995 9 8 0 0 2 0 S", "1996 1996 9 6 7 0 2 0 S", "1997 1997 9 12 7 0 2 0 S", "1998 1999 2 0 8 0 2 1 D", "1998 2003 9 0 8 0 2 0 S", "2000 2004 3 1 0 0 2 1 D", "2006 2010 9 0 8 0 2 0 S", "2007 2007 2 8 0 0 2 1 D", "2008 2008 2 15 0 0 2 1 D", "2009 2010 2 8 0 0 2 1 D", "2011 2011 2 15 0 0 2 1 D", "2011 2011 10 13 7 0 2 0 S", "2012 2012 3 1 7 0 2 1 D", "2012 9999 10 1 0 0 2 0 S", "2013 9999 2 8 0 0 2 1 D"],
        Indianapolis: ["1941 1941 5 22 7 2 0 1 D", "1941 1954 8 0 8 2 0 0 S", "1946 1954 3 0 8 2 0 1 D"],
        Starke: ["1947 1961 3 0 8 2 0 1 D", "1947 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1958 8 0 8 2 0 0 S", "1959 1961 9 0 8 2 0 0 S"],
        Marengo: ["1951 1951 3 0 8 2 0 1 D", "1951 1951 8 0 8 2 0 0 S", "1954 1960 3 0 8 2 0 1 D", "1954 1960 8 0 8 2 0 0 S"],
        Pike: ["1955 1955 4 1 7 0 0 1 D", "1955 1960 8 0 8 2 0 0 S", "1956 1964 3 0 8 2 0 1 D", "1961 1964 9 0 8 2 0 0 S"],
        Perry: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],
        Vincennes: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],
        Pulaski: ["1946 1960 3 0 8 2 0 1 D", "1946 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1960 8 0 8 2 0 0 S"],
        Louisville: ["1921 1921 4 1 7 2 0 1 D", "1921 1921 8 1 7 2 0 0 S", "1941 1961 3 0 8 2 0 1 D", "1941 1941 8 0 8 2 0 0 S", "1946 1946 5 2 7 2 0 0 S", "1950 1955 8 0 8 2 0 0 S", "1956 1960 9 0 8 2 0 0 S"],
        Peru: ["1938 1938 0 1 7 0 0 1 S", "1938 1938 3 1 7 0 0 0", "1938 1939 8 0 8 0 0 1 S", "1939 1940 2 24 0 0 0 0", "1986 1987 0 1 7 0 0 1 S", "1986 1987 3 1 7 0 0 0", "1990 1990 0 1 7 0 0 1 S", "1990 1990 3 1 7 0 0 0", "1994 1994 0 1 7 0 0 1 S", "1994 1994 3 1 7 0 0 0"],
        CA: ["1948 1948 2 14 7 2 0 1 D", "1949 1949 0 1 7 2 0 0 S", "1950 1966 3 0 8 2 0 1 D", "1950 1961 8 0 8 2 0 0 S", "1962 1966 9 0 8 2 0 0 S"],
        Nic: ["1979 1980 2 16 0 0 0 1 D", "1979 1980 5 23 1 0 0 0 S", "2005 2005 3 10 7 0 0 1 D", "2005 2005 9 1 0 0 0 0 S", "2006 2006 3 30 7 2 0 1 D", "2006 2006 9 1 0 1 0 0 S"],
        Menominee: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1966 1966 3 0 8 2 0 1 D", "1966 1966 9 0 8 2 0 0 S"],
        Moncton: ["1933 1935 5 8 0 1 0 1 D", "1933 1935 8 8 0 1 0 0 S", "1936 1938 5 1 0 1 0 1 D", "1936 1938 8 1 0 1 0 0 S", "1939 1939 4 27 7 1 0 1 D", "1939 1941 8 21 6 1 0 0 S", "1940 1940 4 19 7 1 0 1 D", "1941 1941 4 4 7 1 0 1 D", "1946 1972 3 0 8 2 0 1 D", "1946 1956 8 0 8 2 0 0 S", "1957 1972 9 0 8 2 0 0 S", "1993 2006 3 1 0 0:1 0 1 D", "1993 2006 9 0 8 0:1 0 0 S"],
        Uruguay: ["1923 1923 9 2 7 0 0 0:30 HS", "1924 1926 3 1 7 0 0 0", "1924 1925 9 1 7 0 0 0:30 HS", "1933 1935 9 0 8 0 0 0:30 HS", "1934 1936 2 25 6 23:30 2 0", "1936 1936 10 1 7 0 0 0:30 HS", "1937 1941 2 0 8 0 0 0", "1937 1940 9 0 8 0 0 0:30 HS", "1941 1941 7 1 7 0 0 0:30 HS", "1942 1942 0 1 7 0 0 0", "1942 1942 11 14 7 0 0 1 S", "1943 1943 2 14 7 0 0 0", "1959 1959 4 24 7 0 0 1 S", "1959 1959 10 15 7 0 0 0", "1960 1960 0 17 7 0 0 1 S", "1960 1960 2 6 7 0 0 0", "1965 1967 3 1 0 0 0 1 S", "1965 1965 8 26 7 0 0 0", "1966 1967 9 31 7 0 0 0", "1968 1970 4 27 7 0 0 0:30 HS", "1968 1970 11 2 7 0 0 0", "1972 1972 3 24 7 0 0 1 S", "1972 1972 7 15 7 0 0 0", "1974 1974 2 10 7 0 0 0:30 HS", "1974 1974 11 22 7 0 0 1 S", "1976 1976 9 1 7 0 0 0", "1977 1977 11 4 7 0 0 1 S", "1978 1978 3 1 7 0 0 0", "1979 1979 9 1 7 0 0 1 S", "1980 1980 4 1 7 0 0 0", "1987 1987 11 14 7 0 0 1 S", "1988 1988 2 14 7 0 0 0", "1988 1988 11 11 7 0 0 1 S", "1989 1989 2 12 7 0 0 0", "1989 1989 9 29 7 0 0 1 S", "1990 1992 2 1 0 0 0 0", "1990 1991 9 21 0 0 0 1 S", "1992 1992 9 18 7 0 0 1 S", "1993 1993 1 28 7 0 0 0", "2004 2004 8 19 7 0 0 1 S", "2005 2005 2 27 7 2 0 0", "2005 2005 9 9 7 2 0 1 S", "2006 2006 2 12 7 2 0 0", "2006 9999 9 1 0 2 0 1 S", "2007 9999 2 8 0 2 0 0"],
        Mont: ["1917 1917 2 25 7 2 0 1 D", "1917 1917 3 24 7 0 0 0 S", "1919 1919 2 31 7 2:30 0 1 D", "1919 1919 9 25 7 2:30 0 0 S", "1920 1920 4 2 7 2:30 0 1 D", "1920 1922 9 1 0 2:30 0 0 S", "1921 1921 4 1 7 2 0 1 D", "1922 1922 3 30 7 2 0 1 D", "1924 1924 4 17 7 2 0 1 D", "1924 1926 8 0 8 2:30 0 0 S", "1925 1926 4 1 0 2 0 1 D", "1927 1927 4 1 7 0 0 1 D", "1927 1932 8 0 8 0 0 0 S", "1928 1931 3 0 8 0 0 1 D", "1932 1932 4 1 7 0 0 1 D", "1933 1940 3 0 8 0 0 1 D", "1933 1933 9 1 7 0 0 0 S", "1934 1939 8 0 8 0 0 0 S", "1946 1973 3 0 8 2 0 1 D", "1945 1948 8 0 8 2 0 0 S", "1949 1950 9 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],
        Bahamas: ["1964 1975 9 0 8 2 0 0 S", "1964 1975 3 0 8 2 0 1 D"],
        NYC: ["1920 1920 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1966 3 0 8 2 0 1 D", "1921 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],
        Haiti: ["1983 1983 4 8 7 0 0 1 D", "1984 1987 3 0 8 0 0 1 D", "1983 1987 9 0 8 0 0 0 S", "1988 1997 3 1 0 1 2 1 D", "1988 1997 9 0 8 1 2 0 S", "2005 2006 3 1 0 0 0 1 D", "2005 2006 9 0 8 0 0 0 S", "2012 9999 2 8 0 2 0 1 D", "2012 9999 10 1 0 2 0 0 S"],
        Regina: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1930 1934 4 1 0 0 0 1 D", "1930 1934 9 1 0 0 0 0 S", "1937 1941 3 8 0 0 0 1 D", "1937 1937 9 8 0 0 0 0 S", "1938 1938 9 1 0 0 0 0 S", "1939 1941 9 8 0 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 3 8 0 2 0 1 D", "1946 1946 9 8 0 2 0 0 S", "1947 1957 3 0 8 2 0 1 D", "1947 1957 8 0 8 2 0 0 S", "1959 1959 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S"],
        Chile: ["1927 1932 8 1 7 0 0 1 S", "1928 1932 3 1 7 0 0 0", "1942 1942 5 1 7 4 1 0", "1942 1942 7 1 7 5 1 1 S", "1946 1946 6 15 7 4 1 1 S", "1946 1946 8 1 7 3 1 0", "1947 1947 3 1 7 4 1 0", "1968 1968 10 3 7 4 1 1 S", "1969 1969 2 30 7 3 1 0", "1969 1969 10 23 7 4 1 1 S", "1970 1970 2 29 7 3 1 0", "1971 1971 2 14 7 3 1 0", "1970 1972 9 9 0 4 1 1 S", "1972 1986 2 9 0 3 1 0", "1973 1973 8 30 7 4 1 1 S", "1974 1987 9 9 0 4 1 1 S", "1987 1987 3 12 7 3 1 0", "1988 1989 2 9 0 3 1 0", "1988 1988 9 1 0 4 1 1 S", "1989 1989 9 9 0 4 1 1 S", "1990 1990 2 18 7 3 1 0", "1990 1990 8 16 7 4 1 1 S", "1991 1996 2 9 0 3 1 0", "1991 1997 9 9 0 4 1 1 S", "1997 1997 2 30 7 3 1 0", "1998 1998 2 9 0 3 1 0", "1998 1998 8 27 7 4 1 1 S", "1999 1999 3 4 7 3 1 0", "1999 2010 9 9 0 4 1 1 S", "2000 2007 2 9 0 3 1 0", "2008 2008 2 30 7 3 1 0", "2009 2009 2 9 0 3 1 0", "2010 2010 3 1 0 3 1 0", "2011 2011 4 2 0 3 1 0", "2011 2011 7 16 0 4 1 1 S", "2012 9999 3 23 0 3 1 0", "2012 9999 8 2 0 4 1 1 S"],
        DR: ["1966 1966 9 30 7 0 0 1 D", "1967 1967 1 28 7 0 0 0 S", "1969 1973 9 0 8 0 0 0:30 HD", "1970 1970 1 21 7 0 0 0 S", "1971 1971 0 20 7 0 0 0 S", "1972 1974 0 21 7 0 0 0 S"],
        "C-Eur": ["1916 1916 3 30 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1918 3 15 1 2 2 1 S", "1917 1918 8 15 1 2 2 0", "1940 1940 3 1 7 2 2 1 S", "1942 1942 10 2 7 2 2 0", "1943 1943 2 29 7 2 2 1 S", "1943 1943 9 4 7 2 2 0", "1944 1945 3 1 1 2 2 1 S", "1944 1944 9 2 7 2 2 0", "1945 1945 8 16 7 2 2 0", "1977 1980 3 1 0 2 2 1 S", "1977 1977 8 0 8 2 2 0", "1978 1978 9 1 7 2 2 0", "1979 1995 8 0 8 2 2 0", "1981 9999 2 0 8 2 2 1 S", "1996 9999 9 0 8 2 2 0"],
        Swift: ["1957 1957 3 0 8 2 0 1 D", "1957 1957 9 0 8 2 0 0 S", "1959 1961 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S", "1960 1961 8 0 8 2 0 0 S"],
        Hond: ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S", "2006 2006 4 1 0 0 0 1 D", "2006 2006 7 1 1 0 0 0 S"],
        Thule: ["1991 1992 2 0 8 2 0 1 D", "1991 1992 8 0 8 2 0 0 S", "1993 2006 3 1 0 2 0 1 D", "1993 2006 9 0 8 2 0 0 S", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
        Toronto: ["1919 1919 2 30 7 23:30 0 1 D", "1919 1919 9 26 7 0 0 0 S", "1920 1920 4 2 7 2 0 1 D", "1920 1920 8 26 7 0 0 0 S", "1921 1921 4 15 7 2 0 1 D", "1921 1921 8 15 7 2 0 0 S", "1922 1923 4 8 0 2 0 1 D", "1922 1926 8 15 0 2 0 0 S", "1924 1927 4 1 0 2 0 1 D", "1927 1932 8 0 8 2 0 0 S", "1928 1931 3 0 8 2 0 1 D", "1932 1932 4 1 7 2 0 1 D", "1933 1940 3 0 8 2 0 1 D", "1933 1933 9 1 7 2 0 0 S", "1934 1939 8 0 8 2 0 0 S", "1945 1946 8 0 8 2 0 0 S", "1946 1946 3 0 8 2 0 1 D", "1947 1949 3 0 8 0 0 1 D", "1947 1948 8 0 8 0 0 0 S", "1949 1949 10 0 8 0 0 0 S", "1950 1973 3 0 8 2 0 1 D", "1950 1950 10 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],
        Winn: ["1916 1916 3 23 7 0 0 1 D", "1916 1916 8 17 7 0 0 0 S", "1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1937 1937 4 16 7 2 0 1 D", "1937 1937 8 26 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 4 12 7 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1949 3 0 8 2 0 1 D", "1947 1949 8 0 8 2 0 0 S", "1950 1950 4 1 7 2 0 1 D", "1950 1950 8 30 7 2 0 0 S", "1951 1960 3 0 8 2 0 1 D", "1951 1958 8 0 8 2 0 0 S", "1959 1959 9 0 8 2 0 0 S", "1960 1960 8 0 8 2 0 0 S", "1963 1963 3 0 8 2 0 1 D", "1963 1963 8 22 7 2 0 0 S", "1966 1986 3 0 8 2 2 1 D", "1966 2005 9 0 8 2 2 0 S", "1987 2005 3 1 0 2 2 1 D"],
        Aus: ["1917 1917 0 1 7 0:1 0 1", "1917 1917 2 25 7 2 0 0", "1942 1942 0 1 7 2 0 1", "1942 1942 2 29 7 2 0 0", "1942 1942 8 27 7 2 0 1", "1943 1944 2 0 8 2 0 0", "1943 1943 9 3 7 2 0 1"],
        AT: ["1967 1967 9 1 0 2 2 1", "1968 1968 2 0 8 2 2 0", "1968 1985 9 0 8 2 2 1", "1969 1971 2 8 0 2 2 0", "1972 1972 1 0 8 2 2 0", "1973 1981 2 1 0 2 2 0", "1982 1983 2 0 8 2 2 0", "1984 1986 2 1 0 2 2 0", "1986 1986 9 15 0 2 2 1", "1987 1990 2 15 0 2 2 0", "1987 1987 9 22 0 2 2 1", "1988 1990 9 0 8 2 2 1", "1991 1999 9 1 0 2 2 1", "1991 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 9999 9 1 0 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0"],
        NZAQ: ["1974 1974 10 3 7 2 2 1 D", "1975 1988 9 0 8 2 2 1 D", "1989 1989 9 8 7 2 2 1 D", "1990 2006 9 1 0 2 2 1 D", "1975 1975 1 23 7 2 2 0 S", "1976 1989 2 1 0 2 2 0 S", "1990 2007 2 15 0 2 2 0 S", "2007 9999 8 0 8 2 2 1 D", "2008 9999 3 1 0 2 2 0 S"],
        ArgAQ: ["1964 1966 2 1 7 0 0 0", "1964 1966 9 15 7 0 0 1 S", "1967 1967 3 2 7 0 0 0", "1967 1968 9 1 0 0 0 1 S", "1968 1969 3 1 0 0 0 0", "1974 1974 0 23 7 0 0 1 S", "1974 1974 4 1 7 0 0 0"],
        ChileAQ: ["1972 1986 2 9 0 3 1 0", "1974 1987 9 9 0 4 1 1 S", "1987 1987 3 12 7 3 1 0", "1988 1989 2 9 0 3 1 0", "1988 1988 9 1 0 4 1 1 S", "1989 1989 9 9 0 4 1 1 S", "1990 1990 2 18 7 3 1 0", "1990 1990 8 16 7 4 1 1 S", "1991 1996 2 9 0 3 1 0", "1991 1997 9 9 0 4 1 1 S", "1997 1997 2 30 7 3 1 0", "1998 1998 2 9 0 3 1 0", "1998 1998 8 27 7 4 1 1 S", "1999 1999 3 4 7 3 1 0", "1999 2010 9 9 0 4 1 1 S", "2000 2007 2 9 0 3 1 0", "2008 2008 2 30 7 3 1 0", "2009 2009 2 9 0 3 1 0", "2010 2010 3 1 0 3 1 0", "2011 2011 4 2 0 3 1 0", "2011 2011 7 16 0 4 1 1 S", "2012 9999 3 23 0 3 1 0", "2012 9999 8 2 0 4 1 1 S"],
        Norway: ["1916 1916 4 22 7 1 0 1 S", "1916 1916 8 30 7 0 0 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 9 1 7 2 2 0", "1959 1964 2 15 0 2 2 1 S", "1959 1965 8 15 0 2 2 0", "1965 1965 3 25 7 2 2 1 S"],
        RussiaAsia: ["1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 9999 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 9999 9 0 8 2 2 0"],
        Jordan: ["1973 1973 5 6 7 0 0 1 S", "1973 1975 9 1 7 0 0 0", "1974 1977 4 1 7 0 0 1 S", "1976 1976 10 1 7 0 0 0", "1977 1977 9 1 7 0 0 0", "1978 1978 3 30 7 0 0 1 S", "1978 1978 8 30 7 0 0 0", "1985 1985 3 1 7 0 0 1 S", "1985 1985 9 1 7 0 0 0", "1986 1988 3 1 5 0 0 1 S", "1986 1990 9 1 5 0 0 0", "1989 1989 4 8 7 0 0 1 S", "1990 1990 3 27 7 0 0 1 S", "1991 1991 3 17 7 0 0 1 S", "1991 1991 8 27 7 0 0 0", "1992 1992 3 10 7 0 0 1 S", "1992 1993 9 1 5 0 0 0", "1993 1998 3 1 5 0 0 1 S", "1994 1994 8 15 5 0 0 0", "1995 1998 8 15 5 0 2 0", "1999 1999 6 1 7 0 2 1 S", "1999 2002 8 5 8 0 2 0", "2000 2001 2 4 8 0 2 1 S", "2002 9999 2 4 8 24 0 1 S", "2003 2003 9 24 7 0 2 0", "2004 2004 9 15 7 0 2 0", "2005 2005 8 5 8 0 2 0", "2006 2011 9 5 8 0 2 0", "2013 9999 9 5 8 0 2 0"],
        Russia: ["1917 1917 6 1 7 23 0 1 MST", "1917 1917 11 28 7 0 0 0 MMT", "1918 1918 4 31 7 22 0 2 MDST", "1918 1918 8 16 7 1 0 1 MST", "1919 1919 4 31 7 23 0 2 MDST", "1919 1919 6 1 7 2 0 1 S", "1919 1919 7 16 7 0 0 0", "1921 1921 1 14 7 23 0 1 S", "1921 1921 2 20 7 23 0 2 M", "1921 1921 8 1 7 0 0 1 S", "1921 1921 9 1 7 0 0 0", "1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 2010 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 2010 9 0 8 2 2 0"],
        Iraq: ["1982 1982 4 1 7 0 0 1 D", "1982 1984 9 1 7 0 0 0 S", "1983 1983 2 31 7 0 0 1 D", "1984 1985 3 1 7 0 0 1 D", "1985 1990 8 0 8 1 2 0 S", "1986 1990 2 0 8 1 2 1 D", "1991 2007 3 1 7 3 2 1 D", "1991 2007 9 1 7 3 2 0 S"],
        EUAsia: ["1981 9999 2 0 8 1 1 1 S", "1979 1995 8 0 8 1 1 0", "1996 9999 9 0 8 1 1 0"],
        Azer: ["1997 9999 2 0 8 4 0 1 S", "1997 9999 9 0 8 5 0 0"],
        Lebanon: ["1920 1920 2 28 7 0 0 1 S", "1920 1920 9 25 7 0 0 0", "1921 1921 3 3 7 0 0 1 S", "1921 1921 9 3 7 0 0 0", "1922 1922 2 26 7 0 0 1 S", "1922 1922 9 8 7 0 0 0", "1923 1923 3 22 7 0 0 1 S", "1923 1923 8 16 7 0 0 0", "1957 1961 4 1 7 0 0 1 S", "1957 1961 9 1 7 0 0 0", "1972 1972 5 22 7 0 0 1 S", "1972 1977 9 1 7 0 0 0", "1973 1977 4 1 7 0 0 1 S", "1978 1978 3 30 7 0 0 1 S", "1978 1978 8 30 7 0 0 0", "1984 1987 4 1 7 0 0 1 S", "1984 1991 9 16 7 0 0 0", "1988 1988 5 1 7 0 0 1 S", "1989 1989 4 10 7 0 0 1 S", "1990 1992 4 1 7 0 0 1 S", "1992 1992 9 4 7 0 0 0", "1993 9999 2 0 8 0 0 1 S", "1993 1998 8 0 8 0 0 0", "1999 9999 9 0 8 0 0 0"],
        Kyrgyz: ["1992 1996 3 7 0 0 2 1 S", "1992 1996 8 0 8 0 0 0", "1997 2005 2 0 8 2:30 0 1 S", "1997 2004 9 0 8 2:30 0 0"],
        Mongol: ["1983 1984 3 1 7 0 0 1 S", "1983 1983 9 1 7 0 0 0", "1985 1998 2 0 8 0 0 1 S", "1984 1998 8 0 8 0 0 0", "2001 2001 3 6 8 2 0 1 S", "2001 2006 8 6 8 2 0 0", "2002 2006 2 6 8 2 0 1 S"],
        PRC: ["1986 1986 4 4 7 0 0 1 D", "1986 1991 8 11 0 0 0 0 S", "1987 1991 3 10 0 0 0 1 D"],
        Syria: ["1920 1923 3 15 0 2 0 1 S", "1920 1923 9 1 0 2 0 0", "1962 1962 3 29 7 2 0 1 S", "1962 1962 9 1 7 2 0 0", "1963 1965 4 1 7 2 0 1 S", "1963 1963 8 30 7 2 0 0", "1964 1964 9 1 7 2 0 0", "1965 1965 8 30 7 2 0 0", "1966 1966 3 24 7 2 0 1 S", "1966 1976 9 1 7 2 0 0", "1967 1978 4 1 7 2 0 1 S", "1977 1978 8 1 7 2 0 0", "1983 1984 3 9 7 2 0 1 S", "1983 1984 9 1 7 2 0 0", "1986 1986 1 16 7 2 0 1 S", "1986 1986 9 9 7 2 0 0", "1987 1987 2 1 7 2 0 1 S", "1987 1988 9 31 7 2 0 0", "1988 1988 2 15 7 2 0 1 S", "1989 1989 2 31 7 2 0 1 S", "1989 1989 9 1 7 2 0 0", "1990 1990 3 1 7 2 0 1 S", "1990 1990 8 30 7 2 0 0", "1991 1991 3 1 7 0 0 1 S", "1991 1992 9 1 7 0 0 0", "1992 1992 3 8 7 0 0 1 S", "1993 1993 2 26 7 0 0 1 S", "1993 1993 8 25 7 0 0 0", "1994 1996 3 1 7 0 0 1 S", "1994 2005 9 1 7 0 0 0", "1997 1998 2 1 8 0 0 1 S", "1999 2006 3 1 7 0 0 1 S", "2006 2006 8 22 7 0 0 0", "2007 2007 2 5 8 0 0 1 S", "2007 2007 10 1 5 0 0 0", "2008 2008 3 1 5 0 0 1 S", "2008 2008 10 1 7 0 0 0", "2009 2009 2 5 8 0 0 1 S", "2010 2011 3 1 5 0 0 1 S", "2012 9999 2 5 8 0 0 1 S", "2009 9999 9 5 8 0 0 0"],
        Dhaka: ["2009 2009 5 19 7 23 0 1 S", "2009 2009 11 31 7 23:59 0 0"],
        Zion: ["1940 1940 5 1 7 0 0 1 D", "1942 1944 10 1 7 0 0 0 S", "1943 1943 3 1 7 2 0 1 D", "1944 1944 3 1 7 0 0 1 D", "1945 1945 3 16 7 0 0 1 D", "1945 1945 10 1 7 2 0 0 S", "1946 1946 3 16 7 2 0 1 D", "1946 1946 10 1 7 0 0 0 S", "1948 1948 4 23 7 0 0 2 DD", "1948 1948 8 1 7 0 0 1 D", "1948 1949 10 1 7 2 0 0 S", "1949 1949 4 1 7 0 0 1 D", "1950 1950 3 16 7 0 0 1 D", "1950 1950 8 15 7 3 0 0 S", "1951 1951 3 1 7 0 0 1 D", "1951 1951 10 11 7 3 0 0 S", "1952 1952 3 20 7 2 0 1 D", "1952 1952 9 19 7 3 0 0 S", "1953 1953 3 12 7 2 0 1 D", "1953 1953 8 13 7 3 0 0 S", "1954 1954 5 13 7 0 0 1 D", "1954 1954 8 12 7 0 0 0 S", "1955 1955 5 11 7 2 0 1 D", "1955 1955 8 11 7 0 0 0 S", "1956 1956 5 3 7 0 0 1 D", "1956 1956 8 30 7 3 0 0 S", "1957 1957 3 29 7 2 0 1 D", "1957 1957 8 22 7 0 0 0 S", "1974 1974 6 7 7 0 0 1 D", "1974 1974 9 13 7 0 0 0 S", "1975 1975 3 20 7 0 0 1 D", "1975 1975 7 31 7 0 0 0 S", "1985 1985 3 14 7 0 0 1 D", "1985 1985 8 15 7 0 0 0 S", "1986 1986 4 18 7 0 0 1 D", "1986 1986 8 7 7 0 0 0 S", "1987 1987 3 15 7 0 0 1 D", "1987 1987 8 13 7 0 0 0 S", "1988 1988 3 9 7 0 0 1 D", "1988 1988 8 3 7 0 0 0 S", "1989 1989 3 30 7 0 0 1 D", "1989 1989 8 3 7 0 0 0 S", "1990 1990 2 25 7 0 0 1 D", "1990 1990 7 26 7 0 0 0 S", "1991 1991 2 24 7 0 0 1 D", "1991 1991 8 1 7 0 0 0 S", "1992 1992 2 29 7 0 0 1 D", "1992 1992 8 6 7 0 0 0 S", "1993 1993 3 2 7 0 0 1 D", "1993 1993 8 5 7 0 0 0 S", "1994 1994 3 1 7 0 0 1 D", "1994 1994 7 28 7 0 0 0 S", "1995 1995 2 31 7 0 0 1 D", "1995 1995 8 3 7 0 0 0 S", "1996 1996 2 15 7 0 0 1 D", "1996 1996 8 16 7 0 0 0 S", "1997 1997 2 21 7 0 0 1 D", "1997 1997 8 14 7 0 0 0 S", "1998 1998 2 20 7 0 0 1 D", "1998 1998 8 6 7 0 0 0 S", "1999 1999 3 2 7 2 0 1 D", "1999 1999 8 3 7 2 0 0 S", "2000 2000 3 14 7 2 0 1 D", "2000 2000 9 6 7 1 0 0 S", "2001 2001 3 9 7 1 0 1 D", "2001 2001 8 24 7 1 0 0 S", "2002 2002 2 29 7 1 0 1 D", "2002 2002 9 7 7 1 0 0 S", "2003 2003 2 28 7 1 0 1 D", "2003 2003 9 3 7 1 0 0 S", "2004 2004 3 7 7 1 0 1 D", "2004 2004 8 22 7 1 0 0 S", "2005 2005 3 1 7 2 0 1 D", "2005 2005 9 9 7 2 0 0 S", "2006 2010 2 26 5 2 0 1 D", "2006 2006 9 1 7 2 0 0 S", "2007 2007 8 16 7 2 0 0 S", "2008 2008 9 5 7 2 0 0 S", "2009 2009 8 27 7 2 0 0 S", "2010 2010 8 12 7 2 0 0 S", "2011 2011 3 1 7 2 0 1 D", "2011 2011 9 2 7 2 0 0 S", "2012 2012 2 26 5 2 0 1 D", "2012 2012 8 23 7 2 0 0 S", "2013 9999 2 23 5 2 0 1 D", "2013 2026 9 2 0 2 0 0 S", "2027 2027 9 3 1 2 0 0 S", "2028 9999 9 2 0 2 0 0 S"],
        EgyptAsia: ["1957 1957 4 10 7 0 0 1 S", "1957 1958 9 1 7 0 0 0", "1958 1958 4 1 7 0 0 1 S", "1959 1967 4 1 7 1 0 1 S", "1959 1965 8 30 7 3 0 0", "1966 1966 9 1 7 3 0 0"],
        Palestine: ["1999 2005 3 15 5 0 0 1 S", "1999 2003 9 15 5 0 0 0", "2004 2004 9 1 7 1 0 0", "2005 2005 9 4 7 2 0 0", "2006 2007 3 1 7 0 0 1 S", "2006 2006 8 22 7 0 0 0", "2007 2007 8 8 4 2 0 0", "2008 2009 2 5 8 0 0 1 S", "2008 2008 8 1 7 0 0 0", "2009 2009 8 1 5 1 0 0", "2010 2010 2 26 7 0 0 1 S", "2010 2010 7 11 7 0 0 0", "2011 2011 3 1 7 0:1 0 1 S", "2011 2011 7 1 7 0 0 0", "2011 2011 7 30 7 0 0 1 S", "2011 2011 8 30 7 0 0 0", "2012 9999 2 4 8 24 0 1 S", "2012 9999 8 21 5 1 0 0"],
        HK: ["1941 1941 3 1 7 3:30 0 1 S", "1941 1941 8 30 7 3:30 0 0", "1946 1946 3 20 7 3:30 0 1 S", "1946 1946 11 1 7 3:30 0 0", "1947 1947 3 13 7 3:30 0 1 S", "1947 1947 11 30 7 3:30 0 0", "1948 1948 4 2 7 3:30 0 1 S", "1948 1951 9 0 8 3:30 0 0", "1952 1952 9 25 7 3:30 0 0", "1949 1953 3 1 0 3:30 0 1 S", "1953 1953 10 1 7 3:30 0 0", "1954 1964 2 18 0 3:30 0 1 S", "1954 1954 9 31 7 3:30 0 0", "1955 1964 10 1 0 3:30 0 0", "1965 1976 3 16 0 3:30 0 1 S", "1965 1976 9 16 0 3:30 0 0", "1973 1973 11 30 7 3:30 0 1 S", "1979 1979 4 8 0 3:30 0 1 S", "1979 1979 9 16 0 3:30 0 0"],
        Pakistan: ["2002 2002 3 2 0 0:1 0 1 S", "2002 2002 9 2 0 0:1 0 0", "2008 2008 5 1 7 0 0 1 S", "2008 2008 10 1 7 0 0 0", "2009 2009 3 15 7 0 0 1 S", "2009 2009 10 1 7 0 0 0"],
        NBorneo: ["1935 1941 8 14 7 0 0 0:20 TS", "1935 1941 11 14 7 0 0 0"],
        Macau: ["1961 1962 2 16 0 3:30 0 1 S", "1961 1964 10 1 0 3:30 0 0", "1963 1963 2 16 0 0 0 1 S", "1964 1964 2 16 0 3:30 0 1 S", "1965 1965 2 16 0 0 0 1 S", "1965 1965 9 31 7 0 0 0", "1966 1971 3 16 0 3:30 0 1 S", "1966 1971 9 16 0 3:30 0 0", "1972 1974 3 15 0 0 0 1 S", "1972 1973 9 15 0 0 0 0", "1974 1977 9 15 0 3:30 0 0", "1975 1977 3 15 0 3:30 0 1 S", "1978 1980 3 15 0 0 0 1 S", "1978 1980 9 15 0 0 0 0"],
        Phil: ["1936 1936 10 1 7 0 0 1 S", "1937 1937 1 1 7 0 0 0", "1954 1954 3 12 7 0 0 1 S", "1954 1954 6 1 7 0 0 0", "1978 1978 2 22 7 0 0 1 S", "1978 1978 8 21 7 0 0 0"],
        Cyprus: ["1975 1975 3 13 7 0 0 1 S", "1975 1975 9 12 7 0 0 0", "1976 1976 4 15 7 0 0 1 S", "1976 1976 9 11 7 0 0 0", "1977 1980 3 1 0 0 0 1 S", "1977 1977 8 25 7 0 0 0", "1978 1978 9 2 7 0 0 0", "1979 1997 8 0 8 0 0 0", "1981 1998 2 0 8 0 0 1 S"],
        ROK: ["1960 1960 4 15 7 0 0 1 D", "1960 1960 8 13 7 0 0 0 S", "1987 1988 4 8 0 0 0 1 D", "1987 1988 9 8 0 0 0 0 S"],
        Shang: ["1940 1940 5 3 7 0 0 1 D", "1940 1941 9 1 7 0 0 0 S", "1941 1941 2 16 7 0 0 1 D"],
        Taiwan: ["1945 1951 4 1 7 0 0 1 D", "1945 1951 9 1 7 0 0 0 S", "1952 1952 2 1 7 0 0 1 D", "1952 1954 10 1 7 0 0 0 S", "1953 1959 3 1 7 0 0 1 D", "1955 1961 9 1 7 0 0 0 S", "1960 1961 5 1 7 0 0 1 D", "1974 1975 3 1 7 0 0 1 D", "1974 1975 9 1 7 0 0 0 S", "1979 1979 5 30 7 0 0 1 D", "1979 1979 8 30 7 0 0 0 S"],
        "E-EurAsia": ["1981 9999 2 0 8 0 0 1 S", "1979 1995 8 0 8 0 0 0", "1996 9999 9 0 8 0 0 0"],
        Iran: ["1978 1980 2 21 7 0 0 1 D", "1978 1978 9 21 7 0 0 0 S", "1979 1979 8 19 7 0 0 0 S", "1980 1980 8 23 7 0 0 0 S", "1991 1991 4 3 7 0 0 1 D", "1992 1995 2 22 7 0 0 1 D", "1991 1995 8 22 7 0 0 0 S", "1996 1996 2 21 7 0 0 1 D", "1996 1996 8 21 7 0 0 0 S", "1997 1999 2 22 7 0 0 1 D", "1997 1999 8 22 7 0 0 0 S", "2000 2000 2 21 7 0 0 1 D", "2000 2000 8 21 7 0 0 0 S", "2001 2003 2 22 7 0 0 1 D", "2001 2003 8 22 7 0 0 0 S", "2004 2004 2 21 7 0 0 1 D", "2004 2004 8 21 7 0 0 0 S", "2005 2005 2 22 7 0 0 1 D", "2005 2005 8 22 7 0 0 0 S", "2008 2008 2 21 7 0 0 1 D", "2008 2008 8 21 7 0 0 0 S", "2009 2011 2 22 7 0 0 1 D", "2009 2011 8 22 7 0 0 0 S", "2012 2012 2 21 7 0 0 1 D", "2012 2012 8 21 7 0 0 0 S", "2013 2015 2 22 7 0 0 1 D", "2013 2015 8 22 7 0 0 0 S", "2016 2016 2 21 7 0 0 1 D", "2016 2016 8 21 7 0 0 0 S", "2017 2019 2 22 7 0 0 1 D", "2017 2019 8 22 7 0 0 0 S", "2020 2020 2 21 7 0 0 1 D", "2020 2020 8 21 7 0 0 0 S", "2021 2023 2 22 7 0 0 1 D", "2021 2023 8 22 7 0 0 0 S", "2024 2024 2 21 7 0 0 1 D", "2024 2024 8 21 7 0 0 0 S", "2025 2027 2 22 7 0 0 1 D", "2025 2027 8 22 7 0 0 0 S", "2028 2029 2 21 7 0 0 1 D", "2028 2029 8 21 7 0 0 0 S", "2030 2031 2 22 7 0 0 1 D", "2030 2031 8 22 7 0 0 0 S", "2032 2033 2 21 7 0 0 1 D", "2032 2033 8 21 7 0 0 0 S", "2034 2035 2 22 7 0 0 1 D", "2034 2035 8 22 7 0 0 0 S", "2036 2037 2 21 7 0 0 1 D", "2036 2037 8 21 7 0 0 0 S"],
        Japan: ["1948 1948 4 1 0 2 0 1 D", "1948 1951 8 8 6 2 0 0 S", "1949 1949 3 1 0 2 0 1 D", "1950 1951 4 1 0 2 0 1 D"],
        Port: ["1916 1916 5 17 7 23 0 1 S", "1916 1916 10 1 7 1 0 0", "1917 1917 1 28 7 23 2 1 S", "1917 1921 9 14 7 23 2 0", "1918 1918 2 1 7 23 2 1 S", "1919 1919 1 28 7 23 2 1 S", "1920 1920 1 29 7 23 2 1 S", "1921 1921 1 28 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 14 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1931 1932 9 1 6 23 2 0", "1932 1932 3 2 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1934 1938 9 1 6 23 2 0", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 24 7 23 2 1 S", "1940 1941 9 5 7 23 2 0", "1941 1941 3 5 7 23 2 1 S", "1942 1945 2 8 6 23 2 1 S", "1942 1942 3 25 7 22 2 2 M", "1942 1942 7 15 7 22 2 1 S", "1942 1945 9 24 6 23 2 0", "1943 1943 3 17 7 22 2 2 M", "1943 1945 7 25 6 22 2 1 S", "1944 1945 3 21 6 22 2 2 M", "1946 1946 3 1 6 23 2 1 S", "1946 1946 9 1 6 23 2 0", "1947 1949 3 1 0 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1951 1965 3 1 0 2 2 1 S", "1951 1965 9 1 0 2 2 0", "1977 1977 2 27 7 0 2 1 S", "1977 1977 8 25 7 0 2 0", "1978 1979 3 1 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1982 8 0 8 1 2 0", "1980 1980 2 0 8 0 2 1 S", "1981 1982 2 0 8 1 2 1 S", "1983 1983 2 0 8 2 2 1 S"],
        "W-Eur": ["1977 1980 3 1 0 1 2 1 S", "1977 1977 8 0 8 1 2 0", "1978 1978 9 1 7 1 2 0", "1979 1995 8 0 8 1 2 0", "1981 9999 2 0 8 1 2 1 S", "1996 9999 9 0 8 1 2 0"],
        Iceland: ["1917 1918 1 19 7 23 0 1 S", "1917 1917 9 21 7 1 0 0", "1918 1918 10 16 7 1 0 0", "1939 1939 3 29 7 23 0 1 S", "1939 1939 10 29 7 2 0 0", "1940 1940 1 25 7 2 0 1 S", "1940 1940 10 3 7 2 0 0", "1941 1941 2 2 7 1 2 1 S", "1941 1941 10 2 7 1 2 0", "1942 1942 2 8 7 1 2 1 S", "1942 1942 9 25 7 1 2 0", "1943 1946 2 1 0 1 2 1 S", "1943 1948 9 22 0 1 2 0", "1947 1967 3 1 0 1 2 1 S", "1949 1949 9 30 7 1 2 0", "1950 1966 9 22 0 1 2 0", "1967 1967 9 29 7 1 2 0"],
        Falk: ["1937 1938 8 0 8 0 0 1 S", "1938 1942 2 19 0 0 0 0", "1939 1939 9 1 7 0 0 1 S", "1940 1942 8 0 8 0 0 1 S", "1943 1943 0 1 7 0 0 0", "1983 1983 8 0 8 0 0 1 S", "1984 1985 3 0 8 0 0 0", "1984 1984 8 16 7 0 0 1 S", "1985 2000 8 9 0 0 0 1 S", "1986 2000 3 16 0 0 0 0", "2001 2010 3 15 0 2 0 0", "2001 2010 8 1 0 2 0 1 S"],
        AS: ["1971 1985 9 0 8 2 2 1", "1986 1986 9 19 7 2 2 1", "1987 2007 9 0 8 2 2 1", "1972 1972 1 27 7 2 2 0", "1973 1985 2 1 0 2 2 0", "1986 1990 2 15 0 2 2 0", "1991 1991 2 3 7 2 2 0", "1992 1992 2 22 7 2 2 0", "1993 1993 2 7 7 2 2 0", "1994 1994 2 20 7 2 2 0", "1995 2005 2 0 8 2 2 0", "2006 2006 3 2 7 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],
        AQ: ["1971 1971 9 0 8 2 2 1", "1972 1972 1 0 8 2 2 0", "1989 1991 9 0 8 2 2 1", "1990 1992 2 1 0 2 2 0"],
        AN: ["1971 1985 9 0 8 2 2 1", "1972 1972 1 27 7 2 2 0", "1973 1981 2 1 0 2 2 0", "1982 1982 3 1 0 2 2 0", "1983 1985 2 1 0 2 2 0", "1986 1989 2 15 0 2 2 0", "1986 1986 9 19 7 2 2 1", "1987 1999 9 0 8 2 2 1", "1990 1995 2 1 0 2 2 0", "1996 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 2007 9 0 8 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],
        AW: ["1974 1974 9 0 8 2 2 1", "1975 1975 2 1 0 2 2 0", "1983 1983 9 0 8 2 2 1", "1984 1984 2 1 0 2 2 0", "1991 1991 10 17 7 2 2 1", "1992 1992 2 1 0 2 2 0", "2006 2006 11 3 7 2 2 1", "2007 2009 2 0 8 2 2 0", "2007 2008 9 0 8 2 2 1"],
        Holiday: ["1992 1993 9 0 8 2 2 1", "1993 1994 2 1 0 2 2 0"],
        LH: ["1981 1984 9 0 8 2 0 1", "1982 1985 2 1 0 2 0 0", "1985 1985 9 0 8 2 0 0:30", "1986 1989 2 15 0 2 0 0", "1986 1986 9 19 7 2 0 0:30", "1987 1999 9 0 8 2 0 0:30", "1990 1995 2 1 0 2 0 0", "1996 2005 2 0 8 2 0 0", "2000 2000 7 0 8 2 0 0:30", "2001 2007 9 0 8 2 0 0:30", "2006 2006 3 1 0 2 0 0", "2007 2007 2 0 8 2 0 0", "2008 9999 3 1 0 2 0 0", "2008 9999 9 1 0 2 0 0:30"],
        AV: ["1971 1985 9 0 8 2 2 1", "1972 1972 1 0 8 2 2 0", "1973 1985 2 1 0 2 2 0", "1986 1990 2 15 0 2 2 0", "1986 1987 9 15 0 2 2 1", "1988 1999 9 0 8 2 2 1", "1991 1994 2 1 0 2 2 0", "1995 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 2007 9 0 8 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],
        Neth: ["1916 1916 4 1 7 0 0 1 NST", "1916 1916 9 1 7 0 0 0 AMT", "1917 1917 3 16 7 2 2 1 NST", "1917 1917 8 17 7 2 2 0 AMT", "1918 1921 3 1 1 2 2 1 NST", "1918 1921 8 1 8 2 2 0 AMT", "1922 1922 2 0 8 2 2 1 NST", "1922 1936 9 2 0 2 2 0 AMT", "1923 1923 5 1 5 2 2 1 NST", "1924 1924 2 0 8 2 2 1 NST", "1925 1925 5 1 5 2 2 1 NST", "1926 1931 4 15 7 2 2 1 NST", "1932 1932 4 22 7 2 2 1 NST", "1933 1936 4 15 7 2 2 1 NST", "1937 1937 4 22 7 2 2 1 NST", "1937 1937 6 1 7 0 0 1 S", "1937 1939 9 2 0 2 2 0", "1938 1939 4 15 7 2 2 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0"],
        Greece: ["1932 1932 6 7 7 0 0 1 S", "1932 1932 8 1 7 0 0 0", "1941 1941 3 7 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 30 7 0 0 1 S", "1943 1943 9 4 7 0 0 0", "1952 1952 6 1 7 0 0 1 S", "1952 1952 10 2 7 0 0 0", "1975 1975 3 12 7 0 2 1 S", "1975 1975 10 26 7 0 2 0", "1976 1976 3 11 7 2 2 1 S", "1976 1976 9 10 7 2 2 0", "1977 1978 3 1 0 2 2 1 S", "1977 1977 8 26 7 2 2 0", "1978 1978 8 24 7 4 0 0", "1979 1979 3 1 7 9 0 1 S", "1979 1979 8 29 7 2 0 0", "1980 1980 3 1 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"],
        SovietZone: ["1945 1945 4 24 7 2 0 2 M", "1945 1945 8 24 7 3 0 1 S", "1945 1945 10 18 7 2 2 0"],
        Germany: ["1946 1946 3 14 7 2 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1949 9 1 0 2 2 0", "1947 1947 3 6 7 3 2 1 S", "1947 1947 4 11 7 2 2 2 M", "1947 1947 5 29 7 3 0 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S"],
        Czech: ["1945 1945 3 8 7 2 2 1 S", "1945 1945 10 18 7 2 2 0", "1946 1946 4 6 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1947 3 20 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 9 7 2 2 1 S"],
        Belgium: ["1918 1918 2 9 7 0 2 1 S", "1918 1919 9 1 6 23 2 0", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1927 9 1 6 23 2 0", "1923 1923 3 21 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1928 1938 9 2 0 2 2 0", "1929 1929 3 21 7 2 2 1 S", "1930 1930 3 13 7 2 2 1 S", "1931 1931 3 19 7 2 2 1 S", "1932 1932 3 3 7 2 2 1 S", "1933 1933 2 26 7 2 2 1 S", "1934 1934 3 8 7 2 2 1 S", "1935 1935 2 31 7 2 2 1 S", "1936 1936 3 19 7 2 2 1 S", "1937 1937 3 4 7 2 2 1 S", "1938 1938 2 27 7 2 2 1 S", "1939 1939 3 16 7 2 2 1 S", "1939 1939 10 19 7 2 2 0", "1940 1940 1 25 7 2 2 1 S", "1944 1944 8 17 7 2 2 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0", "1946 1946 4 19 7 2 2 1 S", "1946 1946 9 7 7 2 2 0"],
        Romania: ["1932 1932 4 21 7 0 2 1 S", "1932 1939 9 1 0 0 2 0", "1933 1939 3 2 0 0 2 1 S", "1979 1979 4 27 7 0 0 1 S", "1979 1979 8 0 8 0 0 0", "1980 1980 3 5 7 23 0 1 S", "1980 1980 8 0 8 1 0 0", "1991 1993 2 0 8 0 2 1 S", "1991 1993 8 0 8 0 2 0"],
        "E-Eur": ["1977 1980 3 1 0 0 0 1 S", "1977 1977 8 0 8 0 0 0", "1978 1978 9 1 7 0 0 0", "1979 1995 8 0 8 0 0 0", "1981 9999 2 0 8 0 0 1 S", "1996 9999 9 0 8 0 0 0"],
        Hungary: ["1918 1918 3 1 7 3 0 1 S", "1918 1918 8 29 7 3 0 0", "1919 1919 3 15 7 3 0 1 S", "1919 1919 8 15 7 3 0 0", "1920 1920 3 5 7 3 0 1 S", "1920 1920 8 30 7 3 0 0", "1945 1945 4 1 7 23 0 1 S", "1945 1945 10 3 7 0 0 0", "1946 1946 2 31 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1949 3 4 0 2 2 1 S", "1950 1950 3 17 7 2 2 1 S", "1950 1950 9 23 7 2 2 0", "1954 1955 4 23 7 0 0 1 S", "1954 1955 9 3 7 0 0 0", "1956 1956 5 1 0 0 0 1 S", "1956 1956 8 0 8 0 0 0", "1957 1957 5 1 0 1 0 1 S", "1957 1957 8 0 8 3 0 0", "1980 1980 3 6 7 1 0 1 S"],
        Swiss: ["1941 1942 4 1 1 1 0 1 S", "1941 1942 9 1 1 2 0 0"],
        Denmark: ["1916 1916 4 14 7 23 0 1 S", "1916 1916 8 30 7 23 0 0", "1940 1940 4 15 7 0 0 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 7 15 7 2 2 0", "1946 1946 4 1 7 2 2 1 S", "1946 1946 8 1 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1947 7 10 7 2 2 0", "1948 1948 4 9 7 2 2 1 S", "1948 1948 7 8 7 2 2 0"],
        "GB-Eire": ["1916 1916 4 21 7 2 2 1 BST", "1916 1916 9 1 7 2 2 0 GMT", "1917 1917 3 8 7 2 2 1 BST", "1917 1917 8 17 7 2 2 0 GMT", "1918 1918 2 24 7 2 2 1 BST", "1918 1918 8 30 7 2 2 0 GMT", "1919 1919 2 30 7 2 2 1 BST", "1919 1919 8 29 7 2 2 0 GMT", "1920 1920 2 28 7 2 2 1 BST", "1920 1920 9 25 7 2 2 0 GMT", "1921 1921 3 3 7 2 2 1 BST", "1921 1921 9 3 7 2 2 0 GMT", "1922 1922 2 26 7 2 2 1 BST", "1922 1922 9 8 7 2 2 0 GMT", "1923 1923 3 16 0 2 2 1 BST", "1923 1924 8 16 0 2 2 0 GMT", "1924 1924 3 9 0 2 2 1 BST", "1925 1926 3 16 0 2 2 1 BST", "1925 1938 9 2 0 2 2 0 GMT", "1927 1927 3 9 0 2 2 1 BST", "1928 1929 3 16 0 2 2 1 BST", "1930 1930 3 9 0 2 2 1 BST", "1931 1932 3 16 0 2 2 1 BST", "1933 1933 3 9 0 2 2 1 BST", "1934 1934 3 16 0 2 2 1 BST", "1935 1935 3 9 0 2 2 1 BST", "1936 1937 3 16 0 2 2 1 BST", "1938 1938 3 9 0 2 2 1 BST", "1939 1939 3 16 0 2 2 1 BST", "1939 1939 10 16 0 2 2 0 GMT", "1940 1940 1 23 0 2 2 1 BST", "1941 1941 4 2 0 1 2 2 BDST", "1941 1943 7 9 0 1 2 1 BST", "1942 1944 3 2 0 1 2 2 BDST", "1944 1944 8 16 0 1 2 1 BST", "1945 1945 3 2 1 1 2 2 BDST", "1945 1945 6 9 0 1 2 1 BST", "1945 1946 9 2 0 2 2 0 GMT", "1946 1946 3 9 0 2 2 1 BST", "1947 1947 2 16 7 2 2 1 BST", "1947 1947 3 13 7 1 2 2 BDST", "1947 1947 7 10 7 1 2 1 BST", "1947 1947 10 2 7 2 2 0 GMT", "1948 1948 2 14 7 2 2 1 BST", "1948 1948 9 31 7 2 2 0 GMT", "1949 1949 3 3 7 2 2 1 BST", "1949 1949 9 30 7 2 2 0 GMT", "1950 1952 3 14 0 2 2 1 BST", "1950 1952 9 21 0 2 2 0 GMT", "1953 1953 3 16 0 2 2 1 BST", "1953 1960 9 2 0 2 2 0 GMT", "1954 1954 3 9 0 2 2 1 BST", "1955 1956 3 16 0 2 2 1 BST", "1957 1957 3 9 0 2 2 1 BST", "1958 1959 3 16 0 2 2 1 BST", "1960 1960 3 9 0 2 2 1 BST", "1961 1963 2 0 8 2 2 1 BST", "1961 1968 9 23 0 2 2 0 GMT", "1964 1967 2 19 0 2 2 1 BST", "1968 1968 1 18 7 2 2 1 BST", "1972 1980 2 16 0 2 2 1 BST", "1972 1980 9 23 0 2 2 0 GMT", "1981 1995 2 0 8 1 1 1 BST", "1981 1989 9 23 0 1 1 0 GMT", "1990 1995 9 22 0 1 1 0 GMT"],
        Finland: ["1942 1942 3 3 7 0 0 1 S", "1942 1942 9 3 7 0 0 0", "1981 1982 2 0 8 2 0 1 S", "1981 1982 8 0 8 3 0 0"],
        Turkey: ["1916 1916 4 1 7 0 0 1 S", "1916 1916 9 1 7 0 0 0", "1920 1920 2 28 7 0 0 1 S", "1920 1920 9 25 7 0 0 0", "1921 1921 3 3 7 0 0 1 S", "1921 1921 9 3 7 0 0 0", "1922 1922 2 26 7 0 0 1 S", "1922 1922 9 8 7 0 0 0", "1924 1924 4 13 7 0 0 1 S", "1924 1925 9 1 7 0 0 0", "1925 1925 4 1 7 0 0 1 S", "1940 1940 5 30 7 0 0 1 S", "1940 1940 9 5 7 0 0 0", "1940 1940 11 1 7 0 0 1 S", "1941 1941 8 21 7 0 0 0", "1942 1942 3 1 7 0 0 1 S", "1942 1942 10 1 7 0 0 0", "1945 1945 3 2 7 0 0 1 S", "1945 1945 9 8 7 0 0 0", "1946 1946 5 1 7 0 0 1 S", "1946 1946 9 1 7 0 0 0", "1947 1948 3 16 0 0 0 1 S", "1947 1950 9 2 0 0 0 0", "1949 1949 3 10 7 0 0 1 S", "1950 1950 3 19 7 0 0 1 S", "1951 1951 3 22 7 0 0 1 S", "1951 1951 9 8 7 0 0 0", "1962 1962 6 15 7 0 0 1 S", "1962 1962 9 8 7 0 0 0", "1964 1964 4 15 7 0 0 1 S", "1964 1964 9 1 7 0 0 0", "1970 1972 4 2 0 0 0 1 S", "1970 1972 9 2 0 0 0 0", "1973 1973 5 3 7 1 0 1 S", "1973 1973 10 4 7 3 0 0", "1974 1974 2 31 7 2 0 1 S", "1974 1974 10 3 7 5 0 0", "1975 1975 2 30 7 0 0 1 S", "1975 1976 9 0 8 0 0 0", "1976 1976 5 1 7 0 0 1 S", "1977 1978 3 1 0 0 0 1 S", "1977 1977 9 16 7 0 0 0", "1979 1980 3 1 0 3 0 1 S", "1979 1982 9 11 1 0 0 0", "1981 1982 2 0 8 3 0 1 S", "1983 1983 6 31 7 0 0 1 S", "1983 1983 9 2 7 0 0 0", "1985 1985 3 20 7 0 0 1 S", "1985 1985 8 28 7 0 0 0", "1986 1990 2 0 8 2 2 1 S", "1986 1990 8 0 8 2 2 0", "1991 2006 2 0 8 1 2 1 S", "1991 1995 8 0 8 1 2 0", "1996 2006 9 0 8 1 2 0"],
        Poland: ["1918 1919 8 16 7 2 2 0", "1919 1919 3 15 7 2 2 1 S", "1944 1944 3 3 7 2 2 1 S", "1944 1944 9 4 7 2 0 0", "1945 1945 3 29 7 0 0 1 S", "1945 1945 10 1 7 0 0 0", "1946 1946 3 14 7 0 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S", "1957 1957 5 2 7 1 2 1 S", "1957 1958 8 0 8 1 2 0", "1958 1958 2 30 7 1 2 1 S", "1959 1959 4 31 7 1 2 1 S", "1959 1961 9 1 0 1 2 0", "1960 1960 3 3 7 1 2 1 S", "1961 1964 4 0 8 1 2 1 S", "1962 1964 8 0 8 1 2 0"],
        Lux: ["1916 1916 4 14 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1917 3 28 7 23 0 1 S", "1917 1917 8 17 7 1 0 0", "1918 1918 3 15 1 2 2 1 S", "1918 1918 8 15 1 2 2 0", "1919 1919 2 1 7 23 0 1 S", "1919 1919 9 5 7 3 0 0", "1920 1920 1 14 7 23 0 1 S", "1920 1920 9 24 7 2 0 0", "1921 1921 2 14 7 23 0 1 S", "1921 1921 9 26 7 2 0 0", "1922 1922 2 25 7 23 0 1 S", "1922 1922 9 2 0 1 0 0", "1923 1923 3 21 7 23 0 1 S", "1923 1923 9 2 0 2 0 0", "1924 1924 2 29 7 23 0 1 S", "1924 1928 9 2 0 1 0 0", "1925 1925 3 5 7 23 0 1 S", "1926 1926 3 17 7 23 0 1 S", "1927 1927 3 9 7 23 0 1 S", "1928 1928 3 14 7 23 0 1 S", "1929 1929 3 20 7 23 0 1 S"],
        Italy: ["1916 1916 5 3 7 0 2 1 S", "1916 1916 9 1 7 0 2 0", "1917 1917 3 1 7 0 2 1 S", "1917 1917 8 30 7 0 2 0", "1918 1918 2 10 7 0 2 1 S", "1918 1919 9 1 0 0 2 0", "1919 1919 2 2 7 0 2 1 S", "1920 1920 2 21 7 0 2 1 S", "1920 1920 8 19 7 0 2 0", "1940 1940 5 15 7 0 2 1 S", "1944 1944 8 17 7 0 2 0", "1945 1945 3 2 7 2 0 1 S", "1945 1945 8 15 7 0 2 0", "1946 1946 2 17 7 2 2 1 S", "1946 1946 9 6 7 2 2 0", "1947 1947 2 16 7 0 2 1 S", "1947 1947 9 5 7 0 2 0", "1948 1948 1 29 7 2 2 1 S", "1948 1948 9 3 7 2 2 0", "1966 1968 4 22 0 0 0 1 S", "1966 1969 8 22 0 0 0 0", "1969 1969 5 1 7 0 0 1 S", "1970 1970 4 31 7 0 0 1 S", "1970 1970 8 0 8 0 0 0", "1971 1972 4 22 0 0 0 1 S", "1971 1971 8 0 8 1 0 0", "1972 1972 9 1 7 0 0 0", "1973 1973 5 3 7 0 0 1 S", "1973 1974 8 0 8 0 0 0", "1974 1974 4 26 7 0 0 1 S", "1975 1975 5 1 7 0 2 1 S", "1975 1977 8 0 8 0 2 0", "1976 1976 4 30 7 0 2 1 S", "1977 1979 4 22 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1979 8 30 7 0 2 0"],
        Malta: ["1973 1973 2 31 7 0 2 1 S", "1973 1973 8 29 7 0 2 0", "1974 1974 3 21 7 0 2 1 S", "1974 1974 8 16 7 0 2 0", "1975 1979 3 15 0 2 0 1 S", "1975 1980 8 15 0 2 0 0", "1980 1980 2 31 7 2 0 1 S"],
        France: ["1916 1916 5 14 7 23 2 1 S", "1916 1919 9 1 0 23 2 0", "1917 1917 2 24 7 23 2 1 S", "1918 1918 2 9 7 23 2 1 S", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1938 9 1 6 23 2 0", "1923 1923 4 26 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1930 1930 3 12 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1932 1932 3 2 7 23 2 1 S", "1933 1933 2 25 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 25 7 2 0 1 S", "1941 1941 4 5 7 0 0 2 M", "1941 1941 9 6 7 0 0 1 S", "1942 1942 2 9 7 0 0 2 M", "1942 1942 10 2 7 3 0 1 S", "1943 1943 2 29 7 2 0 2 M", "1943 1943 9 4 7 3 0 1 S", "1944 1944 3 3 7 2 0 2 M", "1944 1944 9 8 7 1 0 1 S", "1945 1945 3 2 7 2 0 2 M", "1945 1945 8 16 7 3 0 0", "1976 1976 2 28 7 1 0 1 S", "1976 1976 8 26 7 1 0 0"],
        Latvia: ["1989 1996 2 0 8 2 2 1 S", "1989 1996 8 0 8 2 2 0"],
        Bulg: ["1979 1979 2 31 7 23 0 1 S", "1979 1979 9 1 7 1 0 0", "1980 1982 3 1 6 23 0 1 S", "1980 1980 8 29 7 1 0 0", "1981 1981 8 27 7 2 0 0"],
        Albania: ["1940 1940 5 16 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 29 7 2 0 1 S", "1943 1943 3 10 7 3 0 0", "1974 1974 4 4 7 0 0 1 S", "1974 1974 9 2 7 0 0 0", "1975 1975 4 1 7 0 0 1 S", "1975 1975 9 2 7 0 0 0", "1976 1976 4 2 7 0 0 1 S", "1976 1976 9 3 7 0 0 0", "1977 1977 4 8 7 0 0 1 S", "1977 1977 9 2 7 0 0 0", "1978 1978 4 6 7 0 0 1 S", "1978 1978 9 1 7 0 0 0", "1979 1979 4 5 7 0 0 1 S", "1979 1979 8 30 7 0 0 0", "1980 1980 4 3 7 0 0 1 S", "1980 1980 9 4 7 0 0 0", "1981 1981 3 26 7 0 0 1 S", "1981 1981 8 27 7 0 0 0", "1982 1982 4 2 7 0 0 1 S", "1982 1982 9 3 7 0 0 0", "1983 1983 3 18 7 0 0 1 S", "1983 1983 9 1 7 0 0 0", "1984 1984 3 1 7 0 0 1 S"],
        Austria: ["1920 1920 3 5 7 2 2 1 S", "1920 1920 8 13 7 2 2 0", "1946 1946 3 14 7 2 2 1 S", "1946 1948 9 1 0 2 2 0", "1947 1947 3 6 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1980 1980 3 6 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"],
        Mauritius: ["1982 1982 9 10 7 0 0 1 S", "1983 1983 2 21 7 0 0 0", "2008 2008 9 0 8 2 0 1 S", "2009 2009 2 0 8 2 0 0"],
        WS: ["2012 9999 8 0 8 3 0 1 D", "2012 9999 3 1 0 4 0 0"],
        NZ: ["1927 1927 10 6 7 2 0 1 S", "1928 1928 2 4 7 2 0 0 M", "1928 1933 9 8 0 2 0 0:30 S", "1929 1933 2 15 0 2 0 0 M", "1934 1940 3 0 8 2 0 0 M", "1934 1940 8 0 8 2 0 0:30 S", "1946 1946 0 1 7 0 0 0 S", "1974 1974 10 1 0 2 2 1 D", "1975 1975 1 0 8 2 2 0 S", "1975 1988 9 0 8 2 2 1 D", "1976 1989 2 1 0 2 2 0 S", "1989 1989 9 8 0 2 2 1 D", "1990 2006 9 1 0 2 2 1 D", "1990 2007 2 15 0 2 2 0 S", "2007 9999 8 0 8 2 2 1 D", "2008 9999 3 1 0 2 2 0 S"],
        Chatham: ["1974 1974 10 1 0 2:45 2 1 D", "1975 1975 1 0 8 2:45 2 0 S", "1975 1988 9 0 8 2:45 2 1 D", "1976 1989 2 1 0 2:45 2 0 S", "1989 1989 9 8 0 2:45 2 1 D", "1990 2006 9 1 0 2:45 2 1 D", "1990 2007 2 15 0 2:45 2 0 S", "2007 9999 8 0 8 2:45 2 1 D", "2008 9999 3 1 0 2:45 2 0 S"],
        Vanuatu: ["1983 1983 8 25 7 0 0 1 S", "1984 1991 2 23 0 0 0 0", "1984 1984 9 23 7 0 0 1 S", "1985 1991 8 23 0 0 0 1 S", "1992 1993 0 23 0 0 0 0", "1992 1992 9 23 0 0 0 1 S"],
        Fiji: ["1998 1999 10 1 0 2 0 1 S", "1999 2000 1 0 8 3 0 0", "2009 2009 10 29 7 2 0 1 S", "2010 2010 2 0 8 3 0 0", "2010 9999 9 18 0 2 0 1 S", "2011 2011 2 1 0 3 0 0", "2012 9999 0 18 0 3 0 0"],
        NC: ["1977 1978 11 1 0 0 0 1 S", "1978 1979 1 27 7 0 0 0", "1996 1996 11 1 7 2 2 1 S", "1997 1997 2 2 7 2 2 0"],
        Cook: ["1978 1978 10 12 7 0 0 0:30 HS", "1979 1991 2 1 0 0 0 0", "1979 1990 9 0 8 0 0 0:30 HS"],
        Tonga: ["1999 1999 9 7 7 2 2 1 S", "2000 2000 2 19 7 2 2 0", "2000 2001 10 1 0 2 0 1 S", "2001 2002 0 0 8 2 0 0"]
    },
    links: {
        "America/Kralendijk": "America/Curacao",
        "America/Lower_Princes": "America/Curacao",
        "America/Marigot": "America/Guadeloupe",
        "America/Shiprock": "America/Denver",
        "America/St_Barthelemy": "America/Guadeloupe",
        "Antarctica/South_Pole": "Antarctica/McMurdo",
        "Arctic/Longyearbyen": "Europe/Oslo",
        "Europe/Bratislava": "Europe/Prague",
        "Europe/Busingen": "Europe/Zurich",
        "Europe/Guernsey": "Europe/London",
        "Europe/Isle_of_Man": "Europe/London",
        "Europe/Jersey": "Europe/London",
        "Europe/Ljubljana": "Europe/Belgrade",
        "Europe/Mariehamn": "Europe/Helsinki",
        "Europe/Podgorica": "Europe/Belgrade",
        "Europe/San_Marino": "Europe/Rome",
        "Europe/Sarajevo": "Europe/Belgrade",
        "Europe/Skopje": "Europe/Belgrade",
        "Europe/Vatican": "Europe/Rome",
        "Europe/Zagreb": "Europe/Belgrade"
    }
}),
function(e, t, n, i) {
    n.swipebox = function(a, r) {
        var s, o, l = {
                useCSS: !0,
                useSVG: !0,
                initialIndexOnArray: 0,
                closeBySwipe: !0,
                hideBarsOnMobile: !0,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "CCCCCC",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null
            }, u = this,
            c = [],
            d = a.selector,
            p = n(d),
            h = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            f = null !== h || t.createTouch !== i || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            m = !! t.createElementNS && !! t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            _ = e.innerWidth ? e.innerWidth : n(e).width(),
            g = e.innerHeight ? e.innerHeight : n(e).height(),
            T = '<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>             		<div id="swipebox-action">             			<a id="swipebox-close" style="line-height: 0px;"><i class="fa fa-times swipebox-close1"></i> <span class="swipebox-close1">CLOSE</span><span class="swipebox-close2">(or press esc)</span></a>             			<a id="swipebox-prev"><i class="fa fa-chevron-left"></i></a>             			<a id="swipebox-next"><i class="fa fa-chevron-right"></i></a>            		</div>			</div>';
        u.settings = {}, u.init = function() {
            u.settings = n.extend({}, l, r), n.isArray(a) ? (c = a, s.target = n(e), s.init(u.settings.initialIndexOnArray)) : n(t).on("click", d, function(e) {
                if ("slide current" === e.target.parentNode.className) return !1;
                n.isArray(a) || (s.destroy(), o = n(d), s.actions()), c = [];
                var t, i, r;
                r || (i = "data-rel", r = n(this).attr(i)), r || (i = "rel", r = n(this).attr(i)), o = r && "" !== r && "nofollow" !== r ? p.filter("[" + i + '="' + r + '"]') : n(d), o.each(function() {
                    var e = null,
                        t = null;
                    n(this).attr("title") && (e = n(this).attr("title")), n(this).attr("href") && (t = n(this).attr("href")), c.push({
                        href: t,
                        title: e
                    })
                }), t = o.index(n(this)), e.preventDefault(), e.stopPropagation(), s.target = n(e.target), s.init(t)
            })
        }, s = {
            init: function(e) {
                u.settings.beforeOpen && u.settings.beforeOpen(), this.target.trigger("swipebox-start"), n.swipebox.isOpen = !0, this.build(), this.openSlide(e), this.openMedia(e), this.preloadMedia(e + 1), this.preloadMedia(e - 1), u.settings.afterOpen && u.settings.afterOpen()
            },
            build: function() {
                var e, t = this;
                n("body").append(T), t.doCssTrans() && (n("#swipebox-slider").css({
                    "-webkit-transition": "left 0.4s ease",
                    "-moz-transition": "left 0.4s ease",
                    "-o-transition": "left 0.4s ease",
                    "-khtml-transition": "left 0.4s ease",
                    transition: "left 0.4s ease"
                }), n("#swipebox-overlay").css({
                    "-webkit-transition": "opacity 1s ease",
                    "-moz-transition": "opacity 1s ease",
                    "-o-transition": "opacity 1s ease",
                    "-khtml-transition": "opacity 1s ease",
                    transition: "opacity 1s ease"
                })), m && u.settings.useSVG === !0 && (e = n("#swipebox-action #swipebox-close").css("background-image"), e = e.replace("png", "svg"), n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                    "background-image": e
                })), h && u.settings.hideBarsOnMobile === !0 && n("#swipebox-action, #swipebox-caption").hide(), n.each(c, function() {
                    n("#swipebox-slider").append('<div class="slide"></div>')
                }), t.setDim(), t.actions(), f && t.gesture(), t.keyboard(), t.animBars(), t.resize()
            },
            setDim: function() {
                var t, i, a = {};
                "onorientationchange" in e ? e.addEventListener("orientationchange", function() {
                    0 === e.orientation ? (t = _, i = g) : (90 === e.orientation || -90 === e.orientation) && (t = g, i = _)
                }, !1) : (t = e.innerWidth ? e.innerWidth : n(e).width(), i = e.innerHeight ? e.innerHeight : n(e).height()), a = {
                    width: t,
                    height: i
                }, n("#swipebox-overlay").css(a)
            },
            resize: function() {
                var t = this;
                n(e).resize(function() {
                    t.setDim()
                }).resize()
            },
            supportTransition: function() {
                var e, n = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (e = 0; e < n.length; e++)
                    if (t.createElement("div").style[n[e]] !== i) return n[e];
                return !1
            },
            doCssTrans: function() {
                return u.settings.useCSS && this.supportTransition() ? !0 : void 0
            },
            gesture: function() {
                var e = this,
                    t = null,
                    i = null,
                    a = !1,
                    r = 10,
                    s = 50,
                    o = {}, l = {}, c = n("#swipebox-caption, #swipebox-action"),
                    d = n("#swipebox-slider");
                c.addClass("visible-bars"), e.setTimeout(), n("body").bind("touchstart", function(e) {
                    return n(this).addClass("touching"), l = e.originalEvent.targetTouches[0], o.pageX = e.originalEvent.targetTouches[0].pageX, o.pageY = e.originalEvent.targetTouches[0].pageY, n(".touching").bind("touchmove", function(e) {
                        if (e.preventDefault(), e.stopPropagation(), l = e.originalEvent.targetTouches[0], u.settings.closeBySwipe && (i = l.pageY - o.pageY, Math.abs(i) >= s || a)) {
                            var t = .75 - Math.abs(i) / d.height();
                            d.css({
                                top: i + "px"
                            }), d.css({
                                opacity: t
                            }), a = !0
                        }
                    }), !1
                }).bind("touchend", function(s) {
                    if (s.preventDefault(), s.stopPropagation(), u.settings.closeBySwipe) {
                        if (d.css("opacity") <= .5) {
                            var p = i > 0 ? d.height() : -d.height();
                            d.animate({
                                top: p + "px",
                                opacity: 0
                            }, 300, function() {
                                e.closeSlide()
                            })
                        } else d.animate({
                            top: 0,
                            opacity: 1
                        }, 300); if (a) return void(a = !1)
                    }
                    t = l.pageX - o.pageX, t >= r ? e.getPrev() : -r >= t ? e.getNext() : c.hasClass("visible-bars") ? (e.clearTimeout(), e.hideBars()) : (e.showBars(), e.setTimeout()), n(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function() {
                if (u.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout(), t.timeout = e.setTimeout(function() {
                        t.hideBars()
                    }, u.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                e.clearTimeout(this.timeout), this.timeout = null
            },
            showBars: function() {
                var e = n("#swipebox-caption, #swipebox-action");
                this.doCssTrans() ? e.addClass("visible-bars") : (n("#swipebox-caption").animate({
                    top: 0
                }, 500), n("#swipebox-action").animate({
                    bottom: 0
                }, 500), setTimeout(function() {
                    e.addClass("visible-bars")
                }, 1e3))
            },
            hideBars: function() {},
            animBars: function() {
                var e = this,
                    t = n("#swipebox-captionX, #swipebox-actionX");
                t.addClass("visible-bars"), e.setTimeout(), n("#swipebox-slider").click(function() {
                    t.hasClass("visible-bars") || (e.showBars(), e.setTimeout())
                }), n("#swipebox-action").hover(function() {
                    e.showBars(), t.addClass("visible-bars"), e.clearTimeout()
                }, function() {
                    t.removeClass("visible-bars"), e.setTimeout()
                })
            },
            keyboard: function() {
                var t = this;
                n(e).bind("keyup", function(e) {
                    e.preventDefault(), e.stopPropagation(), 37 === e.keyCode ? t.getPrev() : 39 === e.keyCode ? t.getNext() : 27 === e.keyCode && t.closeSlide()
                })
            },
            actions: function() {
                var e = this,
                    t = "touchend click";
                c.length < 2 ? n("#swipebox-prev, #swipebox-next").hide() : (n("#swipebox-prev").bind(t, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.getPrev(), e.setTimeout()
                }), n("#swipebox-next").bind(t, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.getNext(), e.setTimeout()
                })), n("#swipebox-close").bind(t, function() {
                    e.closeSlide()
                })
            },
            setSlide: function(e, t) {
                t = t || !1;
                var i = n("#swipebox-slider");
                this.doCssTrans() ? i.css({
                    left: 100 * -e + "%"
                }) : i.animate({
                    left: 100 * -e + "%"
                }), n("#swipebox-slider .slide").removeClass("current"), n("#swipebox-slider .slide").eq(e).addClass("current"), this.setTitle(e), t && i.fadeIn(), n("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 === e ? n("#swipebox-prev").addClass("disabled") : e === c.length - 1 && n("#swipebox-next").addClass("disabled")
            },
            openSlide: function(t) {
                n("html").addClass("swipebox-html"), f && n("html").addClass("swipebox-touch"), n(e).trigger("resize"), this.setSlide(t, !0)
            },
            preloadMedia: function(e) {
                var t = this,
                    n = null;
                c[e] !== i && (n = c[e].href), t.isVideo(n) ? t.openMedia(e) : setTimeout(function() {
                    t.openMedia(e)
                }, 1e3)
            },
            openMedia: function(e) {
                var t = this,
                    a = null;
                return c[e] !== i && (a = c[e].href), 0 > e || e >= c.length ? !1 : void(t.isVideo(a) ? n("#swipebox-slider .slide").eq(e).html(t.getVideo(a)) : t.loadMedia(a, function() {
                    n("#swipebox-slider .slide").eq(e).html(this)
                }))
            },
            setTitle: function(e) {
                var t = null;
                n("#swipebox-caption").empty(), c[e] !== i && (t = c[e].title), t && n("#swipebox-caption").append(t)
            },
            isVideo: function(e) {
                return e && (e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) ? !0 : void 0
            },
            getVideo: function(e) {
                var t = "",
                    n = e.match(/watch\?v=([a-zA-Z0-9\-_]+)/),
                    i = e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    a = e.match(/vimeo\.com\/([0-9]*)/);
                return n || i ? (i && (n = i), t = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + n[1] + '" frameborder="0" allowfullscreen></iframe>') : a && (t = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + a[1] + "?byline=0&amp;portrait=0&amp;color=" + u.settings.vimeoColor + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'), '<div class="swipebox-video-container" style="max-width:' + u.settings.videomaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function(e, t) {
                if (!this.isVideo(e)) {
                    var i = n("<img>").on("load", function() {
                        t.call(i)
                    });
                    i.attr("src", e)
                }
            },
            getNext: function() {
                var e = this,
                    t = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                t + 1 < c.length ? (t++, e.setSlide(t), e.preloadMedia(t + 1)) : (n("#swipebox-slider").addClass("rightSpring"), setTimeout(function() {
                    n("#swipebox-slider").removeClass("rightSpring")
                }, 500))
            },
            getPrev: function() {
                var e = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                e > 0 ? (e--, this.setSlide(e), this.preloadMedia(e - 1)) : (n("#swipebox-slider").addClass("leftSpring"), setTimeout(function() {
                    n("#swipebox-slider").removeClass("leftSpring")
                }, 500))
            },
            closeSlide: function() {
                n("html").removeClass("swipebox-html"), n("html").removeClass("swipebox-touch"), n(e).trigger("resize"), this.destroy()
            },
            destroy: function() {
                n(e).unbind("keyup"), n("body").unbind("touchstart"), n("body").unbind("touchmove"), n("body").unbind("touchend"), n("#swipebox-slider").unbind(), n("#swipebox-overlay").remove(), n.isArray(a) || a.removeData("_swipebox"), this.target && this.target.trigger("swipebox-destroy"), n.swipebox.isOpen = !1, u.settings.afterClose && u.settings.afterClose()
            }
        }, u.init()
    }, n.fn.swipebox = function(e) {
        if (!n.data(this, "_swipebox")) {
            var t = new n.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery),
function() {
    function e(e) {
        var n = {
            r: 0,
            g: 0,
            b: 0
        }, a = 1,
            s = !1,
            o = !1;
        return "string" == typeof e && (e = y(e)), "object" == typeof e && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? (n = t(e.r, e.g, e.b), s = !0, o = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("v") ? (e.s = _(e.s), e.v = _(e.v), n = r(e.h, e.s, e.v), s = !0, o = "hsv") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("l") && (e.s = _(e.s), e.l = _(e.l), n = i(e.h, e.s, e.l), s = !0, o = "hsl"), e.hasOwnProperty("a") && (a = e.a)), a = u(a), {
            ok: s,
            format: e.format || o,
            r: A(255, E(n.r, 0)),
            g: A(255, E(n.g, 0)),
            b: A(255, E(n.b, 0)),
            a: a
        }
    }

    function t(e, t, n) {
        return {
            r: 255 * c(e, 255),
            g: 255 * c(t, 255),
            b: 255 * c(n, 255)
        }
    }

    function n(e, t, n) {
        e = c(e, 255), t = c(t, 255), n = c(n, 255);
        var i, a, r = E(e, t, n),
            s = A(e, t, n),
            o = (r + s) / 2;
        if (r == s) i = a = 0;
        else {
            var l = r - s;
            switch (a = o > .5 ? l / (2 - r - s) : l / (r + s), r) {
                case e:
                    i = (t - n) / l + (n > t ? 6 : 0);
                    break;
                case t:
                    i = (n - e) / l + 2;
                    break;
                case n:
                    i = (e - t) / l + 4
            }
            i /= 6
        }
        return {
            h: i,
            s: a,
            l: o
        }
    }

    function i(e, t, n) {
        function i(e, t, n) {
            return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var a, r, s;
        if (e = c(e, 360), t = c(t, 100), n = c(n, 100), 0 === t) a = r = s = n;
        else {
            var o = .5 > n ? n * (1 + t) : n + t - n * t,
                l = 2 * n - o;
            a = i(l, o, e + 1 / 3), r = i(l, o, e), s = i(l, o, e - 1 / 3)
        }
        return {
            r: 255 * a,
            g: 255 * r,
            b: 255 * s
        }
    }

    function a(e, t, n) {
        e = c(e, 255), t = c(t, 255), n = c(n, 255);
        var i, a, r = E(e, t, n),
            s = A(e, t, n),
            o = r,
            l = r - s;
        if (a = 0 === r ? 0 : l / r, r == s) i = 0;
        else {
            switch (r) {
                case e:
                    i = (t - n) / l + (n > t ? 6 : 0);
                    break;
                case t:
                    i = (n - e) / l + 2;
                    break;
                case n:
                    i = (e - t) / l + 4
            }
            i /= 6
        }
        return {
            h: i,
            s: a,
            v: o
        }
    }

    function r(e, t, n) {
        e = 6 * c(e, 360), t = c(t, 100), n = c(n, 100);
        var i = w.floor(e),
            a = e - i,
            r = n * (1 - t),
            s = n * (1 - a * t),
            o = n * (1 - (1 - a) * t),
            l = i % 6,
            u = [n, s, r, r, o, n][l],
            d = [o, n, n, s, r, r][l],
            p = [r, r, o, n, n, s][l];
        return {
            r: 255 * u,
            g: 255 * d,
            b: 255 * p
        }
    }

    function s(e, t, n, i) {
        var a = [m(M(e).toString(16)), m(M(t).toString(16)), m(M(n).toString(16))];
        return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("")
    }

    function o(e, t, n, i) {
        var a = [m(g(i)), m(M(e).toString(16)), m(M(t).toString(16)), m(M(n).toString(16))];
        return a.join("")
    }

    function l(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
        return t
    }

    function u(e) {
        return e = parseFloat(e), (isNaN(e) || 0 > e || e > 1) && (e = 1), e
    }

    function c(e, t) {
        h(e) && (e = "100%");
        var n = f(e);
        return e = A(t, E(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), w.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
    }

    function d(e) {
        return A(1, E(0, e))
    }

    function p(e) {
        return parseInt(e, 16)
    }

    function h(e) {
        return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
    }

    function f(e) {
        return "string" == typeof e && -1 != e.indexOf("%")
    }

    function m(e) {
        return 1 == e.length ? "0" + e : "" + e
    }

    function _(e) {
        return 1 >= e && (e = 100 * e + "%"), e
    }

    function g(e) {
        return Math.round(255 * parseFloat(e)).toString(16)
    }

    function T(e) {
        return p(e) / 255
    }

    function y(e) {
        e = e.replace(v, "").replace(S, "").toLowerCase();
        var t = !1;
        if ($[e]) e = $[e], t = !0;
        else if ("transparent" == e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var n;
        return (n = k.rgb.exec(e)) ? {
            r: n[1],
            g: n[2],
            b: n[3]
        } : (n = k.rgba.exec(e)) ? {
            r: n[1],
            g: n[2],
            b: n[3],
            a: n[4]
        } : (n = k.hsl.exec(e)) ? {
            h: n[1],
            s: n[2],
            l: n[3]
        } : (n = k.hsla.exec(e)) ? {
            h: n[1],
            s: n[2],
            l: n[3],
            a: n[4]
        } : (n = k.hsv.exec(e)) ? {
            h: n[1],
            s: n[2],
            v: n[3]
        } : (n = k.hex8.exec(e)) ? {
            a: T(n[1]),
            r: p(n[2]),
            g: p(n[3]),
            b: p(n[4]),
            format: t ? "name" : "hex8"
        } : (n = k.hex6.exec(e)) ? {
            r: p(n[1]),
            g: p(n[2]),
            b: p(n[3]),
            format: t ? "name" : "hex"
        } : (n = k.hex3.exec(e)) ? {
            r: p(n[1] + "" + n[1]),
            g: p(n[2] + "" + n[2]),
            b: p(n[3] + "" + n[3]),
            format: t ? "name" : "hex"
        } : !1
    }
    var v = /^[\s,#]+/,
        S = /\s+$/,
        b = 0,
        w = Math,
        M = w.round,
        A = w.min,
        E = w.max,
        C = w.random,
        x = function L(t, n) {
            if (t = t ? t : "", n = n || {}, t instanceof L) return t;
            if (!(this instanceof L)) return new L(t, n);
            var i = e(t);
            this._r = i.r, this._g = i.g, this._b = i.b, this._a = i.a, this._roundA = M(100 * this._a) / 100, this._format = n.format || i.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = M(this._r)), this._g < 1 && (this._g = M(this._g)), this._b < 1 && (this._b = M(this._b)), this._ok = i.ok, this._tc_id = b++
        };
    x.prototype = {
        isValid: function() {
            return this._ok
        },
        getFormat: function() {
            return this._format
        },
        getAlpha: function() {
            return this._a
        },
        setAlpha: function(e) {
            this._a = u(e), this._roundA = M(100 * this._a) / 100
        },
        toHsv: function() {
            var e = a(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var e = a(this._r, this._g, this._b),
                t = M(360 * e.h),
                n = M(100 * e.s),
                i = M(100 * e.v);
            return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + i + "%)" : "hsva(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var e = n(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            }
        },
        toHslString: function() {
            var e = n(this._r, this._g, this._b),
                t = M(360 * e.h),
                i = M(100 * e.s),
                a = M(100 * e.l);
            return 1 == this._a ? "hsl(" + t + ", " + i + "%, " + a + "%)" : "hsla(" + t + ", " + i + "%, " + a + "%, " + this._roundA + ")"
        },
        toHex: function(e) {
            return s(this._r, this._g, this._b, e)
        },
        toHexString: function(e) {
            return "#" + this.toHex(e)
        },
        toHex8: function() {
            return o(this._r, this._g, this._b, this._a)
        },
        toHex8String: function() {
            return "#" + this.toHex8()
        },
        toRgb: function() {
            return {
                r: M(this._r),
                g: M(this._g),
                b: M(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + M(this._r) + ", " + M(this._g) + ", " + M(this._b) + ")" : "rgba(" + M(this._r) + ", " + M(this._g) + ", " + M(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: M(100 * c(this._r, 255)) + "%",
                g: M(100 * c(this._g, 255)) + "%",
                b: M(100 * c(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + M(100 * c(this._r, 255)) + "%, " + M(100 * c(this._g, 255)) + "%, " + M(100 * c(this._b, 255)) + "%)" : "rgba(" + M(100 * c(this._r, 255)) + "%, " + M(100 * c(this._g, 255)) + "%, " + M(100 * c(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function() {
            return 0 === this._a ? "transparent" : this._a < 1 ? !1 : D[s(this._r, this._g, this._b, !0)] || !1
        },
        toFilter: function(e) {
            var t = "#" + o(this._r, this._g, this._b, this._a),
                n = t,
                i = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                var a = x(e);
                n = a.toHex8String()
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + t + ",endColorstr=" + n + ")"
        },
        toString: function(e) {
            var t = !! e;
            e = e || this._format;
            var n = !1,
                i = this._a < 1 && this._a >= 0,
                a = !t && i && ("hex" === e || "hex6" === e || "hex3" === e || "name" === e);
            return a ? "name" === e && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), ("hex" === e || "hex6" === e) && (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString())
        }
    }, x.fromRatio = function(e, t) {
        if ("object" == typeof e) {
            var n = {};
            for (var i in e) e.hasOwnProperty(i) && (n[i] = "a" === i ? e[i] : _(e[i]));
            e = n
        }
        return x(e, t)
    }, x.equals = function(e, t) {
        return e && t ? x(e).toRgbString() == x(t).toRgbString() : !1
    }, x.random = function() {
        return x.fromRatio({
            r: C(),
            g: C(),
            b: C()
        })
    }, x.desaturate = function(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = x(e).toHsl();
        return n.s -= t / 100, n.s = d(n.s), x(n)
    }, x.saturate = function(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = x(e).toHsl();
        return n.s += t / 100, n.s = d(n.s), x(n)
    }, x.greyscale = function(e) {
        return x.desaturate(e, 100)
    }, x.lighten = function(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = x(e).toHsl();
        return n.l += t / 100, n.l = d(n.l), x(n)
    }, x.brighten = function(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = x(e).toRgb();
        return n.r = E(0, A(255, n.r - M(255 * -(t / 100)))), n.g = E(0, A(255, n.g - M(255 * -(t / 100)))), n.b = E(0, A(255, n.b - M(255 * -(t / 100)))), x(n)
    }, x.darken = function(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = x(e).toHsl();
        return n.l -= t / 100, n.l = d(n.l), x(n)
    }, x.complement = function(e) {
        var t = x(e).toHsl();
        return t.h = (t.h + 180) % 360, x(t)
    }, x.triad = function(e) {
        var t = x(e).toHsl(),
            n = t.h;
        return [x(e), x({
            h: (n + 120) % 360,
            s: t.s,
            l: t.l
        }), x({
            h: (n + 240) % 360,
            s: t.s,
            l: t.l
        })]
    }, x.tetrad = function(e) {
        var t = x(e).toHsl(),
            n = t.h;
        return [x(e), x({
            h: (n + 90) % 360,
            s: t.s,
            l: t.l
        }), x({
            h: (n + 180) % 360,
            s: t.s,
            l: t.l
        }), x({
            h: (n + 270) % 360,
            s: t.s,
            l: t.l
        })]
    }, x.splitcomplement = function(e) {
        var t = x(e).toHsl(),
            n = t.h;
        return [x(e), x({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), x({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }, x.analogous = function(e, t, n) {
        t = t || 6, n = n || 30;
        var i = x(e).toHsl(),
            a = 360 / n,
            r = [x(e)];
        for (i.h = (i.h - (a * t >> 1) + 720) % 360; --t;) i.h = (i.h + a) % 360, r.push(x(i));
        return r
    }, x.monochromatic = function(e, t) {
        t = t || 6;
        for (var n = x(e).toHsv(), i = n.h, a = n.s, r = n.v, s = [], o = 1 / t; t--;) s.push(x({
            h: i,
            s: a,
            v: r
        })), r = (r + o) % 1;
        return s
    }, x.readability = function(e, t) {
        var n = x(e).toRgb(),
            i = x(t).toRgb(),
            a = (299 * n.r + 587 * n.g + 114 * n.b) / 1e3,
            r = (299 * i.r + 587 * i.g + 114 * i.b) / 1e3,
            s = Math.max(n.r, i.r) - Math.min(n.r, i.r) + Math.max(n.g, i.g) - Math.min(n.g, i.g) + Math.max(n.b, i.b) - Math.min(n.b, i.b);
        return {
            brightness: Math.abs(a - r),
            color: s
        }
    }, x.readable = function(e, t) {
        var n = x.readability(e, t);
        return n.brightness > 125 && n.color > 500
    }, x.mostReadable = function(e, t) {
        for (var n = null, i = 0, a = !1, r = 0; r < t.length; r++) {
            var s = x.readability(e, t[r]),
                o = s.brightness > 125 && s.color > 500,
                l = 3 * (s.brightness / 125) + s.color / 500;
            (o && !a || o && a && l > i || !o && !a && l > i) && (a = o, i = l, n = x(t[r]))
        }
        return n
    };
    var $ = x.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }, D = x.hexNames = l($),
        k = function() {
            var e = "[-\\+]?\\d+%?",
                t = "[-\\+]?\\d*\\.\\d+%?",
                n = "(?:" + t + ")|(?:" + e + ")",
                i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
                a = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
            return {
                rgb: new RegExp("rgb" + i),
                rgba: new RegExp("rgba" + a),
                hsl: new RegExp("hsl" + i),
                hsla: new RegExp("hsla" + a),
                hsv: new RegExp("hsv" + i),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
    "undefined" != typeof module && module.exports ? module.exports = x : "function" == typeof define && define.amd ? define(function() {
        return x
    }) : window.tinycolor = x
}(),
function(e) {
    var t = /([^&=]+)=?([^&]*)/g,
        n = function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        };
    e.parseParams = function(i) {
        function a(t, n, i) {
            if (n += "", -1 !== n.indexOf(".")) {
                var r = n.split("."),
                    s = n.split(/\.(.+)?/)[1];
                t[r[0]] || (t[r[0]] = {}), "" !== s ? a(t[r[0]], s, i) : console.warn('parseParams :: empty property in key "' + n + '"')
            } else if (-1 !== n.indexOf("[")) {
                var r = n.split("[");
                n = r[0];
                var r = r[1].split("]"),
                    o = r[0];
                "" == o ? (t || (t = {}), t[n] && e.isArray(t[n]) || (t[n] = []), t[n].push(i)) : (t || (t = {}), t[n] && e.isArray(t[n]) || (t[n] = []), t[n][parseInt(o)] = i)
            } else t || (t = {}), t[n] = i
        }
        i += "", "" === i && (i = window.location + "");
        var r, s = {};
        if (i) {
            if (-1 !== i.indexOf("#") && (i = i.substr(0, i.indexOf("#"))), -1 === i.indexOf("?")) return {};
            if (i = i.substr(i.indexOf("?") + 1, i.length), "" == i) return {};
            for (; r = t.exec(i);) {
                var o = n(r[1]),
                    l = n(r[2]);
                a(s, o, l)
            }
        }
        return s
    }
}(jQuery),
function(e, t, n) {
    function i(e) {
        var t = {}, i = /^jQuery\d+$/;
        return n.each(e.attributes, function(e, n) {
            n.specified && !i.test(n.name) && (t[n.name] = n.value)
        }), t
    }

    function a(e, t) {
        var i = this,
            a = n(i);
        if (i.value == a.attr("placeholder") && a.hasClass("placeholder"))
            if (a.data("placeholder-password")) {
                if (a = a.hide().next().show().attr("id", a.removeAttr("id").data("placeholder-id")), e === !0) return a[0].value = t;
                a.focus()
            } else i.value = "", a.removeClass("placeholder"), i == s() && i.select()
    }

    function r() {
        var e, t = this,
            r = n(t),
            s = this.id;
        if ("" == t.value) {
            if ("password" == t.type) {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        e = n("<input>").attr(n.extend(i(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": r,
                        "placeholder-id": s
                    }).bind("focus.placeholder", a), r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": s
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", s).show()
            }
            r.addClass("placeholder"), r[0].value = r.attr("placeholder")
        } else r.removeClass("placeholder")
    }

    function s() {
        try {
            return t.activeElement
        } catch (e) {}
    }
    var o, l, u = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
        c = "placeholder" in t.createElement("input") && !u,
        d = "placeholder" in t.createElement("textarea") && !u,
        p = n.fn,
        h = n.valHooks,
        f = n.propHooks;
    c && d ? (l = p.placeholder = function() {
        return this
    }, l.input = l.textarea = !0) : (l = p.placeholder = function() {
        var e = this;
        return e.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": a,
            "blur.placeholder": r
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, l.input = c, l.textarea = d, o = {
        get: function(e) {
            var t = n(e),
                i = t.data("placeholder-password");
            return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, t) {
            var i = n(e),
                o = i.data("placeholder-password");
            return o ? o[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != s() && r.call(e)) : i.hasClass("placeholder") ? a.call(e, !0, t) || (e.value = t) : e.value = t, i) : e.value = t
        }
    }, c || (h.input = o, f.value = o), d || (h.textarea = o, f.value = o), n(function() {
        n(t).delegate("form", "submit.placeholder", function() {
            var e = n(".placeholder", this).each(a);
            setTimeout(function() {
                e.each(r)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e, t) {
    "use strict";

    function n(e, t) {
        this.container = e, this.options = t, this.init()
    }

    function i(t, n) {
        this.widget = t, this.options = e.extend({}, n), this.detectService(), this.service && this.init()
    }

    function a(e) {
        function t(e, t) {
            return t.toUpper()
        }
        var n = {}, i = e.data();
        for (var a in i) {
            var r = i[a];
            "yes" === r ? r = !0 : "no" === r && (r = !1), n[a.replace(/-(\w)/g, t)] = r
        }
        return n
    }

    function r(e, t) {
        return s(e, t, encodeURIComponent)
    }

    function s(e, t, n) {
        return e.replace(/\{([^\}]+)\}/g, function(e, i) {
            return i in t ? n ? n(t[i]) : t[i] : e
        })
    }

    function o(e, t) {
        var n = d + e;
        return n + " " + n + "_" + t
    }

    function l(t, n) {
        function i(s) {
            "keydown" === s.type && 27 !== s.which || e(s.target).closest(t).length || (t.removeClass(p), a.off(r, i), e.isFunction(n) && n())
        }
        var a = e(document),
            r = "click touchstart keydown";
        a.on(r, i)
    }

    function u(e) {
        var t = 10;
        if (document.documentElement.getBoundingClientRect) {
            var n = parseInt(e.css("left"), 10),
                i = parseInt(e.css("top"), 10),
                a = e[0].getBoundingClientRect();
            a.left < t ? e.css("left", t - a.left + n) : a.right > window.innerWidth - t && e.css("left", window.innerWidth - a.right - t + n), a.top < t ? e.css("top", t - a.top + i) : a.bottom > window.innerHeight - t && e.css("top", window.innerHeight - a.bottom - t + i)
        }
        e.addClass(p)
    }
    var c = "social-likes",
        d = c + "__",
        p = c + "_opened",
        h = "https:" === location.protocol ? "https:" : "http:",
        f = {
            facebook: {
                counterUrl: "https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",
                convertNumber: function(e) {
                    return e.data[0].total_count
                },
                popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
                popupWidth: 600,
                popupHeight: 500
            },
            twitter: {
                counterUrl: "https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
                convertNumber: function(e) {
                    return e.count
                },
                popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
                popupWidth: 600,
                popupHeight: 450,
                click: function() {
                    return /[\.:\-\u2013\u2014]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
                }
            },
            mailru: {
                counterUrl: h + "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",
                convertNumber: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return e[t].shares
                },
                popupUrl: h + "//connect.mail.ru/share?share_url={url}&title={title}",
                popupWidth: 550,
                popupHeight: 360
            },
            vkontakte: {
                counterUrl: h + "//vk.com/share.php?act=count&url={url}&index={index}",
                counter: function(t, n) {
                    var i = f.vkontakte;
                    i._ || (i._ = [], window.VK || (window.VK = {}), window.VK.Share = {
                        count: function(e, t) {
                            i._[e].resolve(t)
                        }
                    });
                    var a = i._.length;
                    i._.push(n), e.getScript(r(t, {
                        index: a
                    })).fail(n.reject)
                },
                popupUrl: h + "//vk.com/share.php?url={url}&title={title}",
                popupWidth: 550,
                popupHeight: 330
            },
            odnoklassniki: {
                counterUrl: h + "//www.odnoklassniki.ru/dk?st.cmd=shareData&ref={url}&cb=?",
                convertNumber: function(e) {
                    return e.count
                },
                popupUrl: h + "//www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl={url}",
                popupWidth: 550,
                popupHeight: 360
            },
            plusone: {
                counterUrl: "http:" === h ? "http://share.yandex.ru/gpp.xml?url={url}" : t,
                counter: function(t, n) {
                    var i = f.plusone;
                    return i._ ? void n.reject() : (window.services || (window.services = {}), window.services.gplus = {
                        cb: function(e) {
                            i._.resolve(e)
                        }
                    }, i._ = n, void e.getScript(r(t)).fail(n.reject))
                },
                popupUrl: "https://plus.google.com/share?url={url}",
                popupWidth: 700,
                popupHeight: 500
            },
            pinterest: {
                counterUrl: h + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                convertNumber: function(e) {
                    return e.count
                },
                popupUrl: h + "//pinterest.com/pin/create/button/?url={url}&description={title}",
                popupWidth: 630,
                popupHeight: 270
            }
        }, m = {
            promises: {},
            fetch: function(t, n, i) {
                m.promises[t] || (m.promises[t] = {});
                var a = m.promises[t];
                if (!i.forceUpdate && a[n]) return a[n];
                var s = e.extend({}, f[t], i),
                    o = e.Deferred(),
                    l = s.counterUrl && r(s.counterUrl, {
                        url: n
                    });
                return l && e.isFunction(s.counter) ? s.counter(l, o) : s.counterUrl ? e.getJSON(l).done(function(t) {
                    try {
                        var n = t;
                        e.isFunction(s.convertNumber) && (n = s.convertNumber(t)), o.resolve(n)
                    } catch (i) {
                        o.reject()
                    }
                }).fail(o.reject) : o.reject(), a[n] = o.promise(), a[n]
            }
        };
    e.fn.socialLikes = function(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data(c);
            r ? e.isPlainObject(t) && r.update(t) : (r = new n(i, e.extend({}, e.fn.socialLikes.defaults, t, a(i))), i.data(c, r))
        })
    }, e.fn.socialLikes.defaults = {
        url: window.location.href.replace(window.location.hash, ""),
        title: document.title,
        counters: !0,
        zeroes: !1,
        wait: 500,
        popupCheckInterval: 500,
        singleTitle: "Share"
    }, n.prototype = {
        init: function() {
            this.container.addClass(c), this.single = this.container.hasClass(c + "_single"), this.initUserButtons(), this.number = 0, this.container.on("counter." + c, e.proxy(this.updateCounter, this));
            var t = this.container.children();
            this.countersLeft = t.length, this.makeSingleButton(), this.buttons = [], t.each(e.proxy(function(t, n) {
                this.buttons.push(new i(e(n), this.options))
            }, this)), this.options.counters ? this.timer = setTimeout(e.proxy(this.appear, this), this.options.wait) : this.appear()
        },
        initUserButtons: function() {
            !this.userButtonInited && window.socialLikesButtons && e.extend(!0, f, socialLikesButtons), this.userButtonInited = !0
        },
        makeSingleButton: function() {
            if (this.single) {
                var t = this.container;
                t.addClass(c + "_vertical"), t.wrap(e("<div>", {
                    "class": c + "_single-w"
                })), t.wrapInner(e("<div>", {
                    "class": c + "__single-container"
                }));
                var n = t.parent(),
                    i = e("<div>", {
                        "class": o("widget", "single")
                    }),
                    a = e(s('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>', {
                        buttonCls: o("button", "single"),
                        iconCls: o("icon", "single"),
                        title: this.options.singleTitle
                    }));
                i.append(a), n.append(i), i.click(function() {
                    var e = c + "__widget_active";
                    return i.toggleClass(e), i.hasClass(e) ? (t.css({
                        left: -(t.width() - i.width()) / 2,
                        top: -t.height()
                    }), u(t), l(t, function() {
                        i.removeClass(e)
                    })) : t.removeClass(p), !1
                }), this.widget = i
            }
        },
        update: function(t) {
            if (t.forceUpdate || t.url !== this.options.url) {
                this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + c + "__counter").remove(), e.extend(this.options, t);
                for (var n = 0; n < this.buttons.length; n++) this.buttons[n].update(t)
            }
        },
        updateCounter: function(e, t, n) {
            n && (this.number += n, this.single && this.getCounterElem().text(this.number)), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.container.addClass(c + "_ready"), this.container.trigger("ready." + c, this.number))
        },
        appear: function() {
            this.container.addClass(c + "_visible")
        },
        getCounterElem: function() {
            var t = this.widget.find("." + d + "counter_single");
            return t.length || (t = e("<span>", {
                "class": o("counter", "single")
            }), this.widget.append(t)), t
        }
    }, i.prototype = {
        init: function() {
            this.detectParams(), this.initHtml(), this.initCounter()
        },
        update: function(t) {
            e.extend(this.options, {
                forceUpdate: !1
            }, t), this.widget.find("." + c + "__counter").remove(), this.initCounter()
        },
        detectService: function() {
            var t = this.widget.data("service");
            if (!t) {
                for (var n = this.widget[0], i = n.classList || n.className.split(" "), a = 0; a < i.length; a++) {
                    var r = i[a];
                    if (f[r]) {
                        t = r;
                        break
                    }
                }
                if (!t) return
            }
            this.service = t, e.extend(this.options, f[t])
        },
        detectParams: function() {
            var e = this.widget.data();
            if (e.counter) {
                var t = parseInt(e.counter, 10);
                isNaN(t) ? this.options.counterUrl = e.counter : this.options.counterNumber = t
            }
            e.title && (this.options.title = e.title), e.url && (this.options.url = e.url)
        },
        initHtml: function() {
            var t = this.options,
                n = this.widget,
                i = n.find("a");
            i.length && this.cloneDataAttrs(i, n);
            var a = e("<span>", {
                "class": this.getElementClassNames("button"),
                text: n.text()
            });
            if (t.clickUrl) {
                var s = r(t.clickUrl, {
                    url: t.url,
                    title: t.title
                }),
                    o = e("<a>", {
                        href: s
                    });
                this.cloneDataAttrs(n, o), n.replaceWith(o), this.widget = n = o
            } else n.click(e.proxy(this.click, this));
            n.removeClass(this.service), n.addClass(this.getElementClassNames("widget")), a.prepend(e("<span>", {
                "class": this.getElementClassNames("icon")
            })), n.empty().append(a), this.button = a
        },
        initCounter: function() {
            if (this.options.counters)
                if (this.options.counterNumber) this.updateCounter(this.options.counterNumber);
                else {
                    var t = {
                        counterUrl: this.options.counterUrl,
                        forceUpdate: this.options.forceUpdate
                    };
                    m.fetch(this.service, this.options.url, t).always(e.proxy(this.updateCounter, this))
                }
        },
        cloneDataAttrs: function(e, t) {
            var n = e.data();
            for (var i in n) n.hasOwnProperty(i) && t.data(i, n[i])
        },
        getElementClassNames: function(e) {
            return o(e, this.service)
        },
        updateCounter: function(t) {
            t = parseInt(t, 10) || 0;
            var n = {
                "class": this.getElementClassNames("counter"),
                text: t
            };
            t || this.options.zeroes || (n["class"] += " " + c + "__counter_empty", n.text = "");
            var i = e("<span>", n);
            this.widget.append(i), this.widget.trigger("counter." + c, [this.service, t])
        },
        click: function(t) {
            var n = this.options,
                i = !0;
            if (e.isFunction(n.click) && (i = n.click.call(this, t)), i) {
                var a = r(n.popupUrl, {
                    url: n.url,
                    title: n.title
                });
                a = this.addAdditionalParamsToUrl(a), this.openPopup(a, {
                    width: n.popupWidth,
                    height: n.popupHeight
                })
            }
            return !1
        },
        addAdditionalParamsToUrl: function(t) {
            var n = e.param(e.extend(this.widget.data(), this.options.data));
            if (e.isEmptyObject(n)) return t;
            var i = -1 === t.indexOf("?") ? "?" : "&";
            return t + i + n
        },
        openPopup: function(t, n) {
            var i = Math.round(screen.width / 2 - n.width / 2),
                a = 0;
            screen.height > n.height && (a = Math.round(screen.height / 3 - n.height / 2));
            var r = window.open(t, "sl_" + this.service, "left=" + i + ",top=" + a + ",width=" + n.width + ",height=" + n.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
            if (r) {
                r.focus(), this.widget.trigger("popup_opened." + c, [this.service, r]);
                var s = setInterval(e.proxy(function() {
                    r.closed && (clearInterval(s), this.widget.trigger("popup_closed." + c, this.service))
                }, this), this.options.popupCheckInterval)
            } else location.href = t
        }
    }, e(function() {
        e("." + c).socialLikes()
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return o.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return o.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return t(o.json ? JSON.stringify(e) : String(e))
    }

    function a(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(s, " ")), o.json ? JSON.parse(e) : e
        } catch (t) {}
    }

    function r(t, n) {
        var i = o.raw ? t : a(t);
        return e.isFunction(n) ? n(i) : i
    }
    var s = /\+/g,
        o = e.cookie = function(a, s, l) {
            if (void 0 !== s && !e.isFunction(s)) {
                if (l = e.extend({}, o.defaults, l), "number" == typeof l.expires) {
                    var u = l.expires,
                        c = l.expires = new Date;
                    c.setTime(+c + 864e5 * u)
                }
                return document.cookie = [t(a), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var d = a ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], h = 0, f = p.length; f > h; h++) {
                var m = p[h].split("="),
                    _ = n(m.shift()),
                    g = m.join("=");
                if (a && a === _) {
                    d = r(g, s);
                    break
                }
                a || void 0 === (g = r(g)) || (d[_] = g)
            }
            return d
        };
    o.defaults = {}, e.removeCookie = function(t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })), !e.cookie(t))
    }
}),
function(e) {
    var t, n, i, a, r, s, o, l = "Close",
        u = "BeforeClose",
        c = "AfterClose",
        d = "BeforeAppend",
        p = "MarkupParse",
        h = "Open",
        f = "Change",
        m = "mfp",
        _ = "." + m,
        g = "mfp-ready",
        T = "mfp-removing",
        y = "mfp-prevent-close",
        v = function() {}, S = !! window.jQuery,
        b = e(window),
        w = function(e, n) {
            t.ev.on(m + e + _, n)
        }, M = function(t, n, i, a) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), a ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        }, A = function(n, i) {
            t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        }, E = function(n) {
            return n === o && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), o = n), t.currTemplate.closeBtn
        }, C = function() {
            e.magnificPopup.instance || (t = new v, t.init(), e.magnificPopup.instance = t)
        }, x = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    v.prototype = {
        constructor: v,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = x(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), a = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var o, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (o = l[r], o.parsed && (o = o.el[0]), o === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (t.isOpen) return void t.updateItemHTML();
            t.types = [], s = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : a, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = M("bg").on("click" + _, function() {
                t.close()
            }), t.wrap = M("wrap").attr("tabindex", -1).on("click" + _, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = M("container", t.wrap)), t.contentContainer = M("content"), t.st.preloader && (t.preloader = M("preloader", t.container, t.st.tLoading));
            var u = e.magnificPopup.modules;
            for (r = 0; u.length > r; r++) {
                var c = u[r];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            A("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), s += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (s += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            } : {
                top: b.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: a.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && a.on("keyup" + _, function(e) {
                27 === e.keyCode && t.close()
            }), b.on("resize" + _, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
            var d = t.wH = b.height(),
                f = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (f.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var T = t.st.mainClass;
            return t.isIE7 && (T += " mfp-ie7"), T && t._addClassToMFP(T), t.updateItemHTML(), A("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), a.on("focusin" + _, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(d), A(h), n
        },
        close: function() {
            t.isOpen && (A(u), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(T), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            A(l);
            var n = T + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            a.off("keyup" + _ + " focusin" + _), t.ev.off(_), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, A(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), A("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (A("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var a = t.st[i] ? t.st[i].markup : !1;
                A("FirstMarkupParse", a), t.currTemplate[i] = a ? e(a) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, A(f, n), r = n.type, t.container.prepend(t.contentContainer), A("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", A(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, a = t.items[n];
            if (a.tagName ? a = {
                el: e(a)
            } : (i = a.type, a = {
                data: a,
                src: a.src
            }), a.el) {
                for (var r = t.types, s = 0; r.length > s; s++)
                    if (a.el.hasClass("mfp-" + r[s])) {
                        i = r[s];
                        break
                    }
                a.src = a.el.attr("data-mfp-src"), a.src || (a.src = a.el.attr("href"))
            }
            return a.type = i || t.st.type || "inline", a.index = n, a.parsed = !0, t.items[n] = a, A("ElementParse", a), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var a = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(a).on(a, i)) : (n.isObj = !1, n.delegate ? e.off(a).on(a, n.delegate, i) : (n.items = e, e.off(a).on(a, i)))
        },
        _openClick: function(n, i, a) {
            var r = void 0 !== a.midClick ? a.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var s = void 0 !== a.disableOn ? a.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(t)) return !0
                    } else if (s > b.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), a.el = e(n.mfpEl), a.delegate && (a.items = i.find(a.delegate)), t.open(a)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var a = {
                    status: e,
                    text: i
                };
                A("UpdateStatus", a), e = a.status, i = a.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    a = t.st.closeOnBgClick;
                if (i && a) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (a && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? a.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var a;
            i.data && (n = e.extend(i.data, n)), A(p, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (a = e.split("_"), a.length > 1) {
                    var i = t.find(_ + "-" + a[0]);
                    if (i.length > 0) {
                        var r = a[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(a[1], n)
                    }
                } else t.find(_ + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function(t, n) {
            return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        C();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var a, r = S ? i.data("magnificPopup") : i[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                r.items ? a = r.items[s] : (a = i, r.delegate && (a = a.find(r.delegate)), a = a.eq(s)), t._openClick({
                    mfpEl: a
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), S ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var $, D, k, L = "inline",
        F = function() {
            k && (D.after(k.addClass($)).detach(), k = null)
        };
    e.magnificPopup.registerModule(L, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(L), w(l + "." + L, function() {
                    F()
                })
            },
            getInline: function(n, i) {
                if (F(), n.src) {
                    var a = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (D || ($ = a.hiddenClass, D = M($), $ = "mfp-" + $), k = r.after(D).detach().removeClass($)), t.updateStatus("ready")
                    } else t.updateStatus("error", a.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var P, R = "ajax",
        I = function() {
            P && i.removeClass(P)
        }, N = function() {
            I(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(R, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(R), P = t.st.ajax.cursor, w(l + "." + R, N), w("BeforeChange." + R, N)
            },
            getAjax: function(n) {
                P && i.addClass(P), t.updateStatus("loading");
                var a = e.extend({
                    url: n.src,
                    success: function(i, a, r) {
                        var s = {
                            data: i,
                            xhr: r
                        };
                        A("ParseAjax", s), t.appendContent(e(s.data), R), n.finished = !0, I(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), A("AjaxContentAdded")
                    },
                    error: function() {
                        I(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(a), ""
            }
        }
    });
    var B, H = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i)) return i.call(t, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), w(h + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), w(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), b.off("resize" + _)
                }), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, B && clearInterval(B), e.isCheckingImgSize = !1, A("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    a = function(r) {
                        B && clearInterval(B), B = setInterval(function() {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(B), n++, void(3 === n ? a(10) : 40 === n ? a(50) : 100 === n && a(500)))
                        }, r)
                    };
                a(1)
            },
            getImage: function(n, i) {
                var a = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, A("ImageLoadComplete")) : (a++, 200 > a ? setTimeout(r, 100) : s()))
                    }, s = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", o.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    }, o = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.img = e(u).on("load.mfploader", r).on("error.mfploader", s), u.src = n.src, l.is("img") && (n.img = n.img.clone()), u = n.img[0], u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: H(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (B && clearInterval(B), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", o.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var O, z = function() {
            return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O
        };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var a, r, s = n.duration,
                        o = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                a = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                }, r = "transition";
                            return a["-webkit-" + r] = a["-moz-" + r] = a["-o-" + r] = a[r] = i, t.css(a), t
                        }, c = function() {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(a), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                            r = o(e), r.css(t._getOffset()), t.wrap.append(r), a = setTimeout(function() {
                                r.css(t._getOffset(!0)), a = setTimeout(function() {
                                    c(), setTimeout(function() {
                                        r.remove(), e = r = null, A("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), w(u + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(a), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = o(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), w(l + i, function() {
                        t._allowZoom() && (c(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var a = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                a.top -= e(window).scrollTop() - r;
                var o = {
                    width: i.width(),
                    height: (S ? i.innerHeight() : i[0].offsetHeight) - s - r
                };
                return z() ? o["-moz-transform"] = o.transform = "translate(" + a.left + "px," + a.top + "px)" : (o.left = a.left, o.top = a.top), o
            }
        }
    });
    var j = "iframe",
        W = "//about:blank",
        U = function(e) {
            if (t.currTemplate[j]) {
                var n = t.currTemplate[j].find("iframe");
                n.length && (e || (n[0].src = W), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(j, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0&hd=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(j), w("BeforeChange", function(e, t, n) {
                    t !== n && (t === j ? U() : n === j && U(!0))
                }), w(l + "." + j, function() {
                    U()
                })
            },
            getIframe: function(n, i) {
                var a = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return a.indexOf(this.index) > -1 ? (this.id && (a = "string" == typeof this.id ? a.substr(a.lastIndexOf(this.id) + this.id.length, a.length) : this.id.call(this, a)), a = this.src.replace("%id%", a), !1) : void 0
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = a), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
            }
        }
    });
    var Y = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }, V = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (s += " mfp-gallery", w(h + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), a.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), w("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = V(n.text, t.currItem.index, t.items.length))
                }), w(p + i, function(e, i, a, r) {
                    var s = t.items.length;
                    a.counter = s > 1 ? V(n.tCounter, r.index, s) : ""
                }), w("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            a = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            s = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            o = r ? "mfpFastClick" : "click";
                        a[o](function() {
                            t.prev()
                        }), s[o](function() {
                            t.next()
                        }), t.isIE7 && (M("b", a[0], !1, !0), M("a", a[0], !1, !0), M("b", s[0], !1, !0), M("a", s[0], !1, !0)), t.container.append(a.add(s))
                    }
                }), w(f + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void w(l + i, function() {
                    a.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = Y(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = Y(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    a = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? a : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : a) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = Y(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), A("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, A("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var G = "retina";
    e.magnificPopup.registerModule(G, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (w("ImageHasSize." + G, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), w("ElementParse." + G, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    function() {
        var t = 1e3,
            n = "ontouchstart" in window,
            i = function() {
                b.off("touchmove" + r + " touchend" + r)
            }, a = "mfpFastClick",
            r = "." + a;
        e.fn.mfpFastClick = function(a) {
            return e(this).each(function() {
                var s, o = e(this);
                if (n) {
                    var l, u, c, d, p, h;
                    o.on("touchstart" + r, function(e) {
                        d = !1, h = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], u = p.clientX, c = p.clientY, b.on("touchmove" + r, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches, h = p.length, p = p[0], (Math.abs(p.clientX - u) > 10 || Math.abs(p.clientY - c) > 10) && (d = !0, i())
                        }).on("touchend" + r, function(e) {
                            i(), d || h > 1 || (s = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                s = !1
                            }, t), a())
                        })
                    })
                }
                o.on("click" + r, function() {
                    s || a()
                })
            })
        }, e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + r + " click" + r), n && b.off("touchmove" + r + " touchend" + r)
        }
    }(), C()
}(window.jQuery || window.Zepto), jQuery.extend({
    highlight: function(e, t, n, i) {
        if (3 === e.nodeType) {
            var a = e.data.match(t);
            if (a) {
                var r = document.createElement(n || "span");
                r.className = i || "highlight";
                var s = e.splitText(a.index);
                s.splitText(a[0].length);
                var o = s.cloneNode(!0);
                return r.appendChild(o), s.parentNode.replaceChild(r, s), 1
            }
        } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== i))
            for (var l = 0; l < e.childNodes.length; l++) l += jQuery.highlight(e.childNodes[l], t, n, i);
        return 0
    }
}), jQuery.fn.unhighlight = function(e) {
    var t = {
        className: "highlight",
        element: "span"
    };
    return jQuery.extend(t, e), this.find(t.element + "." + t.className).each(function() {
        var e = this.parentNode;
        e.replaceChild(this.firstChild, this), e.normalize()
    }).end()
}, jQuery.fn.highlight = function(e, t) {
    var n = {
        className: "highlight",
        element: "span",
        caseSensitive: !1,
        wordsOnly: !1
    };
    if (jQuery.extend(n, t), e.constructor === String && (e = [e]), e = jQuery.grep(e, function(e) {
        return "" != e
    }), e = jQuery.map(e, function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }), 0 == e.length) return this;
    var i = n.caseSensitive ? "" : "i",
        a = "(" + e.join("|") + ")";
    n.wordsOnly && (a = "\\b" + a + "\\b");
    var r = new RegExp(a, i);
    return this.each(function() {
        jQuery.highlight(this, r, n.element, n.className)
    })
}, $(document).ready(function() {
    function e() {
        $(".lesson-link").first().click()
    }
    $(".video-container").data("original", $(".video-container").html()), $(".video-description").data("original", $(".video-description").html()), $("#current-lesson, .current-lesson").data("original", $("#current-lesson, .current-lesson").first().html()), $("#current-section, .current_section").data("original", $("#current-section, .current-section").first().html()), $(".lesson-resource").hide(), $(".resources").hide(), $("#home-link").click(function() {
        $(".video-container").html($(".video-container").data("original")), $(".video-description").html($(".video-description").data("original")), $(".lesson-resource").hide(), $("#current-lesson, .current-lesson").text($.trim($("#current-lesson").data("original"))), $("#current-section, .current-section").text($.trim($("#current-section").data("original"))), $("#current-lesson, .current-lesson").fadeIn(), $("#current-section, .current-section").fadeIn(), $(".lesson-resource").hide(), $(".resources").hide()
    }), $('a[href="#next"]').click(function() {
        var e = parseInt($("body").data("currentSection")),
            t = parseInt($("body").data("currentSection")) + 1,
            n = parseInt($("body").data("currentLesson")) + 1,
            i = $("#" + e + "-" + n);
        if (i.size() > 0);
        else var i = $("#" + t + "-1");
        i.first().click(), $(".swipebox").magnificPopup({
            type: "image"
        }), $(".elVideoModalWrapper .swipebox").magnificPopup({
            type: "iframe"
        })
    }), $('a[href="#previous"]').click(function() {
        var e = parseInt($("body").data("currentSection")),
            t = parseInt($("body").data("currentSection")) - 1,
            n = parseInt($("body").data("currentLesson")) - 1,
            i = $("#" + e + "-" + n);
        if (i.size() > 0);
        else var i = $("#" + t + "-1");
        i.first().click(), $(".swipebox").magnificPopup({
            type: "image"
        }), $(".elVideoModalWrapper .swipebox").magnificPopup({
            type: "iframe"
        })
    }), $(".lesson-link").click(function() {
        $("#content").hide();
        var e = $(this).nextAll(".lesson-video").first(),
            t = $(this).nextAll("[data-cf-lesson-description='true']").first(),
            n = $(this).attr("id");
        try {
            $("body").data("currentSection", n.split("-")[0]), $("body").data("currentLesson", n.split("-")[1])
        } catch (i) {}
        var a = $(this).parents('[data-cf-lesson-list="true"]').prev('[data-cf-section-template="true"]').find("[data-cf-section-number='true']").text();
        console.log(e.html()), $(".video-container").html(e.html()), $(".video-container").contents().hide(), "" == e.html() ? $(".video-container").hide() : ($(window).trigger("custom"), $(".video-container").fadeIn(), $(".video-container").contents().delay(1e3).fadeIn()), $(".video-description").html(t.html()), "" == t.html() ? $(".video-description").hide() : $(".video-description").fadeIn(), $(".resources").fadeIn(), $(".lesson-resource").hide(), $(".lesson-" + a + "-" + n).fadeIn(), console.log("this id: " + n), $(".lesson-" + n).show(), $("#current-lesson, .current-lesson").text($.trim($(this).text())), $("#current-section, .current-section").text($.trim($(this).parents('[data-cf-lesson-list="true"]').prev('[data-cf-section-template="true"]').find('[data-cf-section-name="true"]').text())), $("#current-lesson, .current-lesson").fadeIn(), $("#current-section, .current-section").fadeIn(), $("#content").fadeIn(), 0 == $("[data-cf-resource-template=true]:visible").size() ? $(".resources").hide() : $(".resources").fadeIn(), $(".swipebox").magnificPopup({
            type: "image"
        }), $(".elVideoModalWrapper .swipebox").magnificPopup({
            type: "iframe"
        }), evsfix()
    }), "undefined" != typeof page_key && $(".page_key").val(page_key), $(".lesson-link").first().click(), setTimeout(e, 1e3), $("#temp-link").parent().hide(), $("body").delay(500).fadeIn()
}), $(document).ready(function() {
    $.fn.exists = function() {
        return this.length > 0
    }, $(".steps li .title").exists() && $(".steps li .title").click(function() {
        $(this).toggleClass("opened")
    }), window.PIE && $(".ie-fix, .steps li:first-child .title, aside").each(function() {
        PIE.attach(this)
    }), $(".steps li .title").each(function(e) {
        0 != e && $(this).click()
    }), $("#search_field").on("change input blur", function() {
        var e = $(this).val();
        $("body").unhighlight(), $('[data-cf-lesson-template="true"]').each(function() {
            $(this).text().search(new RegExp(e, "i")) < 0 || "" == e ? $(this).find("ul").first().css({
                backgroundColor: ""
            }) : ($(this).find("ul").first().highlight(e), $(this).find("ul").first().css({
                backgroundColor: "#f4ffb0"
            }), $(".video-description").highlight(e))
        })
    })
}), $(function() {
    $(".goto-login").on("click", function() {
        return $("#register-form").hide(), $("#login-form").fadeIn(), !1
    }), $(".goto-login2").on("click", function() {
        return $("#reset-form").hide(), $("#register-form").fadeIn(), !1
    }), $(".goto-reset").on("click", function() {
        return $("#login-form").hide(), $("#reset-form").fadeIn(), !1
    })
}), ! function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", i.appendChild(r.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function() {
            var t = ["iframe[src*='fast.wistia.net']", "iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var i = e(this).find(t.join(","));
            i = i.not("object object"), i.each(function() {
                var t = e(this);
                if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
                    var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                        a = n / i;
                    if (!t.attr("id")) {
                        var r = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", r)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), $(function() {
    function e(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var a = n[i];
                " " == a.charAt(0);) a = a.substring(1, a.length);
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return null
    }
    var t;
    (window.onpopstate = function() {
        var e, n = /\+/g,
            i = /([^&=]+)=?([^&]*)/g,
            a = function(e) {
                return decodeURIComponent(e.replace(n, " "))
            }, r = window.location.search.substring(1);
        for (t = {}; e = i.exec(r);) t[a(e[1])] = a(e[2])
    })(), $.each(t, function(e, t) {
        try {
            localStorage.setItem(e, t)
        } catch (n) {
            "NS_ERROR_FILE_CORRUPTED" == n.name && console.log("NS_ERROR_FILE_CORRUPTED")
        }
        document.cookie = e + "=" + t + ";domain=clickfunnels.com"
    }), $("input[data-param]").each(function() {
        try {
            var t = localStorage.getItem($(this).data("param"))
        } catch (n) {
            if ("NS_ERROR_FILE_CORRUPTED" == n.name) {
                console.log("NS_ERROR_FILE_CORRUPTED");
                var t = null
            }
        }
        null == t && (t = e($(this).data("param"))), $(this).val(t), $(this).attr("value", t)
    })
});
var mejs = mejs || {};
mejs.version = "2.13.2", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
}, mejs.Utility = {
    encodeUrl: function(e) {
        return encodeURIComponent(e)
    },
    escapeHTML: function(e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
    },
    getScriptPath: function(e) {
        for (var t, n, i, a = 0, r = "", s = "", o = document.getElementsByTagName("script"), l = o.length, u = e.length; l > a; a++) {
            for (n = o[a].src, t = n.lastIndexOf("/"), t > -1 ? (i = n.substring(t + 1), n = n.substring(0, t + 1)) : (i = n, n = ""), t = 0; u > t; t++)
                if (s = e[t], s = i.indexOf(s), s > -1) {
                    r = n;
                    break
                }
            if ("" !== r) break
        }
        return r
    },
    secondsToTimeCode: function(e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
        var a = Math.floor(e / 3600) % 24,
            r = Math.floor(e / 60) % 60,
            s = Math.floor(e % 60);
        return e = Math.floor((e % 1 * i).toFixed(3)), (t || a > 0 ? (10 > a ? "0" + a : a) + ":" : "") + (10 > r ? "0" + r : r) + ":" + (10 > s ? "0" + s : s) + (n ? ":" + (10 > e ? "0" + e : e) : "")
    },
    timeCodeToSeconds: function(e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25), e = e.split(":"), t = parseInt(e[0], 10);
        var a = parseInt(e[1], 10),
            r = parseInt(e[2], 10),
            s = 0,
            o = 0;
        return n && (s = parseInt(e[3]) / i), o = 3600 * t + 60 * a + r + s
    },
    convertSMPTEtoSeconds: function(e) {
        if ("string" != typeof e) return !1;
        e = e.replace(",", ".");
        var t = 0,
            n = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
            i = 1;
        e = e.split(":").reverse();
        for (var a = 0; a < e.length; a++) i = 1, a > 0 && (i = Math.pow(60, a)), t += Number(e[a]) * i;
        return Number(t.toFixed(n))
    },
    removeSwf: function(e) {
        var t = document.getElementById(e);
        t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function() {
            4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    },
    removeObjectInIE: function(e) {
        if (e = document.getElementById(e)) {
            for (var t in e) "function" == typeof e[t] && (e[t] = null);
            e.parentNode.removeChild(e)
        }
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function(e, t) {
        var n = this.plugins[e];
        return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(e, t, n, i, a) {
        this.plugins[e] = this.detectPlugin(t, n, i, a)
    },
    detectPlugin: function(e, t, n, i) {
        var a, r = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
            if ((n = this.nav.plugins[e].description) && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                for (r = n.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), e = 0; e < r.length; e++) r[e] = parseInt(r[e].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject) try {
            (a = new ActiveXObject(n)) && (r = i(a))
        } catch (s) {}
        return r
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
    var t = [];
    return (e = e.GetVariable("$version")) && (e = e.split(" ")[1].split(","), t = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]), t
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
    var t = [0, 0, 0, 0],
        n = function(e, t, n, i) {
            for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
            t[n] -= i
        };
    return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
}), mejs.MediaFeatures = {
    init: function() {
        var e, t = this,
            n = document,
            i = mejs.PluginDetector.nav,
            a = mejs.PluginDetector.ua.toLowerCase(),
            r = ["source", "track", "audio", "video"];
        t.isiPad = null !== a.match(/ipad/i), t.isiPhone = null !== a.match(/iphone/i), t.isiOS = t.isiPhone || t.isiPad, t.isAndroid = null !== a.match(/android/i), t.isBustedAndroid = null !== a.match(/android 2\.[12]/), t.isBustedNativeHTTPS = "https:" === location.protocol && (null !== a.match(/android [12]\./) || null !== a.match(/macintosh.* version.* safari/)), t.isIE = -1 != i.appName.toLowerCase().indexOf("microsoft") || null !== i.appName.toLowerCase().match(/trident/gi), t.isChrome = null !== a.match(/chrome/gi), t.isFirefox = null !== a.match(/firefox/gi), t.isWebkit = null !== a.match(/webkit/gi), t.isGecko = null !== a.match(/gecko/gi) && !t.isWebkit && !t.isIE, t.isOpera = null !== a.match(/opera/gi), t.hasTouch = "ontouchstart" in window, t.svg = !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (i = 0; i < r.length; i++) e = document.createElement(r[i]);
        t.supportsMediaTag = "undefined" != typeof e.canPlayType || t.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (s) {
            t.supportsMediaTag = !1
        }
        t.hasSemiNativeFullScreen = "undefined" != typeof e.webkitEnterFullscreen, t.hasNativeFullscreen = "undefined" != typeof e.requestFullscreen, t.hasWebkitNativeFullScreen = "undefined" != typeof e.webkitRequestFullScreen, t.hasMozNativeFullScreen = "undefined" != typeof e.mozRequestFullScreen, t.hasMsNativeFullScreen = "undefined" != typeof e.msRequestFullscreen, t.hasTrueNativeFullScreen = t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen || t.hasMsNativeFullScreen, t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen, t.hasMozNativeFullScreen ? t.nativeFullScreenEnabled = document.mozFullScreenEnabled : t.hasMsNativeFullScreen && (t.nativeFullScreenEnabled = document.msFullscreenEnabled), t.isChrome && (t.hasSemiNativeFullScreen = !1), t.hasTrueNativeFullScreen && (t.fullScreenEventName = "", t.hasWebkitNativeFullScreen ? t.fullScreenEventName = "webkitfullscreenchange" : t.hasMozNativeFullScreen ? t.fullScreenEventName = "mozfullscreenchange" : t.hasMsNativeFullScreen && (t.fullScreenEventName = "MSFullscreenChange"), t.isFullScreen = function() {
            return e.mozRequestFullScreen ? n.mozFullScreen : e.webkitRequestFullScreen ? n.webkitIsFullScreen : e.hasMsNativeFullScreen ? null !== n.msFullscreenElement : void 0
        }, t.requestFullScreen = function(e) {
            t.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : t.hasMozNativeFullScreen ? e.mozRequestFullScreen() : t.hasMsNativeFullScreen && e.msRequestFullscreen()
        }, t.cancelFullScreen = function() {
            t.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : t.hasMozNativeFullScreen ? document.mozCancelFullScreen() : t.hasMsNativeFullScreen && document.msExitFullscreen()
        }), t.hasSemiNativeFullScreen && a.match(/mac os x 10_5/i) && (t.hasNativeFullScreen = !1, t.hasSemiNativeFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(e) {
        this.currentTime = e
    },
    setMuted: function(e) {
        this.muted = e
    },
    setVolume: function(e) {
        this.volume = e
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(e) {
        for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
        if ("string" == typeof e) this.src = e;
        else {
            var n;
            for (t = 0; t < e.length; t++)
                if (n = e[t], this.canPlayType(n.type)) {
                    this.src = n.src;
                    break
                }
        }
    },
    setVideoSize: function(e, t) {
        this.width = e, this.height = t
    }
}, mejs.PluginMediaElement = function(e, t, n) {
    this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function() {
        null != this.pluginApi && ("youtube" != this.pluginType && this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function(e) {
        var t, n, i, a = mejs.plugins[this.pluginType];
        for (t = 0; t < a.length; t++)
            if (i = a[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version))
                for (n = 0; n < i.types.length; n++)
                    if (e == i.types[n]) return "probably";
        return ""
    },
    positionFullscreenButton: function(e, t, n) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(e) {
        if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
        else {
            var t, n;
            for (t = 0; t < e.length; t++)
                if (n = e[t], this.canPlayType(n.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(e);
                    break
                }
        }
    },
    setCurrentTime: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
    },
    setVolume: function(e) {
        null != this.pluginApi && (this.pluginApi.setVolume("youtube" == this.pluginType ? 100 * e : e), this.volume = e)
    },
    setMuted: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
    },
    setVideoSize: function(e, t) {
        this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function(e) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(e, t) {
        this.events[e] = this.events[e] || [], this.events[e].push(t)
    },
    removeEventListener: function(e, t) {
        if (!e) return this.events = {}, !0;
        var n = this.events[e];
        if (!n) return !0;
        if (!t) return this.events[e] = [], !0;
        for (i = 0; i < n.length; i++)
            if (n[i] === t) return this.events[e].splice(i, 1), !0;
        return !1
    },
    dispatchEvent: function(e) {
        var t, n, i = this.events[e];
        if (i)
            for (n = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(null, n)
    },
    hasAttribute: function(e) {
        return e in this.attributes
    },
    removeAttribute: function(e) {
        delete this.attributes[e]
    },
    getAttribute: function(e) {
        return this.hasAttribute(e) ? this.attributes[e] : ""
    },
    setAttribute: function(e, t) {
        this.attributes[e] = t
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
}, mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(e, t, n) {
        this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = n
    },
    unregisterPluginElement: function(e) {
        delete this.pluginMediaElements[e], delete this.htmlMediaElements[e]
    },
    initPlugin: function(e) {
        var t = this.pluginMediaElements[e],
            n = this.htmlMediaElements[e];
        if (t) {
            switch (t.pluginType) {
                case "flash":
                    t.pluginElement = t.pluginApi = document.getElementById(e);
                    break;
                case "silverlight":
                    t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            null != t.pluginApi && t.success && t.success(t, n)
        }
    },
    fireEvent: function(e, t, n) {
        var i, a;
        if (e = this.pluginMediaElements[e]) {
            t = {
                type: t,
                target: e
            };
            for (i in n) e[i] = n[i], t[i] = n[i];
            a = n.bufferedTime || 0, t.target.buffered = t.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return a
                },
                length: 1
            }, e.dispatchEvent(t.type, t)
        }
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
}, mejs.MediaElement = function(e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
}, mejs.HtmlMediaElementShim = {
    create: function(e, t) {
        var n = mejs.MediaElementDefaults,
            i = "string" == typeof e ? document.getElementById(e) : e,
            a = i.tagName.toLowerCase(),
            r = "audio" === a || "video" === a,
            s = i.getAttribute(r ? "src" : "href");
        a = i.getAttribute("poster");
        var o, l = i.getAttribute("autoplay"),
            u = i.getAttribute("preload"),
            c = i.getAttribute("controls");
        for (o in t) n[o] = t[o];
        return s = "undefined" == typeof s || null === s || "" == s ? null : s, a = "undefined" == typeof a || null === a ? "" : a, u = "undefined" == typeof u || null === u || "false" === u ? "none" : u, l = !("undefined" == typeof l || null === l || "false" === l), c = !("undefined" == typeof c || null === c || "false" === c), o = this.determinePlayback(i, n, mejs.MediaFeatures.supportsMediaTag, r, s), o.url = null !== o.url ? mejs.Utility.absolutizeUrl(o.url) : "", "native" == o.method ? (mejs.MediaFeatures.isBustedAndroid && (i.src = o.url, i.addEventListener("click", function() {
            i.play()
        }, !1)), this.updateNative(o, n, l, u)) : "" !== o.method ? this.createPlugin(o, n, a, l, u, c) : (this.createErrorMessage(o, n, a), this)
    },
    determinePlayback: function(e, t, n, i, a) {
        var r, s, o, l, u = [],
            c = {
                method: "",
                url: "",
                htmlMediaElement: e,
                isVideo: "audio" != e.tagName.toLowerCase()
            };
        if ("undefined" != typeof t.type && "" !== t.type)
            if ("string" == typeof t.type) u.push({
                type: t.type,
                url: a
            });
            else
                for (r = 0; r < t.type.length; r++) u.push({
                    type: t.type[r],
                    url: a
                });
            else if (null !== a) o = this.formatType(a, e.getAttribute("type")), u.push({
            type: o,
            url: a
        });
        else
            for (r = 0; r < e.childNodes.length; r++) s = e.childNodes[r], 1 == s.nodeType && "source" == s.tagName.toLowerCase() && (a = s.getAttribute("src"), o = this.formatType(a, s.getAttribute("type")), s = s.getAttribute("media"), (!s || !window.matchMedia || window.matchMedia && window.matchMedia(s).matches) && u.push({
                type: o,
                url: a
            })); if (!i && u.length > 0 && null !== u[0].url && this.getTypeFromFile(u[0].url).indexOf("audio") > -1 && (c.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
            return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }), !(!n || "auto" !== t.mode && "auto_plugin" !== t.mode && "native" !== t.mode || mejs.MediaFeatures.isBustedNativeHTTPS && t.httpsBasicAuthSite === !0)) {
            for (i || (r = document.createElement(c.isVideo ? "video" : "audio"), e.parentNode.insertBefore(r, e), e.style.display = "none", c.htmlMediaElement = e = r), r = 0; r < u.length; r++)
                if ("" !== e.canPlayType(u[r].type).replace(/no/, "") || "" !== e.canPlayType(u[r].type.replace(/mp3/, "mpeg")).replace(/no/, "")) {
                    c.method = "native", c.url = u[r].url;
                    break
                }
            if ("native" === c.method && (null !== c.url && (e.src = c.url), "auto_plugin" !== t.mode)) return c
        }
        if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
            for (r = 0; r < u.length; r++)
                for (o = u[r].type, e = 0; e < t.plugins.length; e++)
                    for (a = t.plugins[e], s = mejs.plugins[a], n = 0; n < s.length; n++)
                        if (l = s[n], null == l.version || mejs.PluginDetector.hasPluginVersion(a, l.version))
                            for (i = 0; i < l.types.length; i++)
                                if (o == l.types[i]) return c.method = a, c.url = u[r].url, c;
        return "auto_plugin" === t.mode && "native" === c.method ? c : ("" === c.method && u.length > 0 && (c.url = u[0].url), c)
    },
    formatType: function(e, t) {
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    },
    getTypeFromFile: function(e) {
        return e = e.split("?")[0], e = e.substring(e.lastIndexOf(".") + 1).toLowerCase(), (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(e) ? "video" : "audio") + "/" + this.getTypeFromExtension(e)
    },
    getTypeFromExtension: function(e) {
        switch (e) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return e
        }
    },
    createErrorMessage: function(e, t, n) {
        var i = e.htmlMediaElement,
            a = document.createElement("div");
        a.className = "me-cannotplay";
        try {
            a.style.width = i.width + "px", a.style.height = i.height + "px"
        } catch (r) {}
        a.innerHTML = t.customError ? t.customError : "" !== n ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", i.parentNode.insertBefore(a, i), i.style.display = "none", t.error(i)
    },
    createPlugin: function(e, t, n, i, a, r) {
        n = e.htmlMediaElement;
        var s, o = 1,
            l = 1,
            u = "me_" + e.method + "_" + mejs.meIndex++,
            c = new mejs.PluginMediaElement(u, e.method, e.url),
            d = document.createElement("div");
        for (c.tagName = n.tagName, s = 0; s < n.attributes.length; s++) {
            var p = n.attributes[s];
            1 == p.specified && c.setAttribute(p.name, p.value)
        }
        for (s = n.parentNode; null !== s && "body" != s.tagName.toLowerCase();) {
            if ("p" == s.parentNode.tagName.toLowerCase()) {
                s.parentNode.parentNode.insertBefore(s, s.parentNode);
                break
            }
            s = s.parentNode
        }
        switch (e.isVideo ? (o = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== n.getAttribute("width") ? n.getAttribute("width") : t.defaultVideoWidth, l = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== n.getAttribute("height") ? n.getAttribute("height") : t.defaultVideoHeight, o = mejs.Utility.encodeUrl(o), l = mejs.Utility.encodeUrl(l)) : t.enablePluginDebug && (o = 320, l = 240), c.success = t.success, mejs.MediaPluginBridge.registerPluginElement(u, c, n), d.className = "me-plugin", d.id = u + "_container", e.isVideo ? n.parentNode.insertBefore(d, n) : document.body.insertBefore(d, document.body.childNodes[0]), i = ["id=" + u, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + a, "width=" + o, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + l, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && i.push("flash" == e.method ? "file=" + mejs.Utility.encodeUrl(e.url) : "file=" + e.url), t.enablePluginDebug && i.push("debug=true"), t.enablePluginSmoothing && i.push("smoothing=true"), t.enablePseudoStreaming && i.push("pseudostreaming=true"), r && i.push("controls=true"), t.pluginVars && (i = i.concat(t.pluginVars)), e.method) {
            case "silverlight":
                d.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + u + '" name="' + u + '" width="' + o + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
                break;
            case "flash":
                mejs.MediaFeatures.isIE ? (e = document.createElement("div"), d.appendChild(e), e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + u + '" width="' + o + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : d.innerHTML = '<embed id="' + u + '" name="' + u + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + i.join("&") + '" width="' + o + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
                break;
            case "youtube":
                t = e.url.substr(e.url.lastIndexOf("=") + 1), youtubeSettings = {
                    container: d,
                    containerId: d.id,
                    pluginMediaElement: c,
                    pluginId: u,
                    videoId: t,
                    height: l,
                    width: o
                }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                c.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), d.innerHTML = '<iframe src="http://player.vimeo.com/video/' + c.vimeoid + '?portrait=0&byline=0&title=0" width="' + o + '" height="' + l + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        return n.style.display = "none", n.removeAttribute("autoplay"), c
    },
    updateNative: function(e, t) {
        var n, i = e.htmlMediaElement;
        for (n in mejs.HtmlMediaElement) i[n] = mejs.HtmlMediaElement[n];
        return t.success(i, i), i
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "//www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(e) {
        this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
    },
    createIframe: function(e) {
        var t = e.pluginMediaElement,
            n = new YT.Player(e.containerId, {
                height: e.height,
                width: e.width,
                videoId: e.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        e.pluginMediaElement.pluginApi = n, mejs.MediaPluginBridge.initPlugin(e.pluginId), setInterval(function() {
                            mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(e) {
                        mejs.YouTubeApi.handleStateChange(e.data, n, t)
                    }
                }
            })
    },
    createEvent: function(e, t, n) {
        if (n = {
            type: n,
            target: t
        }, e && e.getDuration) {
            t.currentTime = n.currentTime = e.getCurrentTime(), t.duration = n.duration = e.getDuration(), n.paused = t.paused, n.ended = t.ended, n.muted = e.isMuted(), n.volume = e.getVolume() / 100, n.bytesTotal = e.getVideoBytesTotal(), n.bufferedBytes = e.getVideoBytesLoaded();
            var i = n.bufferedBytes / n.bytesTotal * n.duration;
            n.target.buffered = n.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return i
                },
                length: 1
            }
        }
        t.dispatchEvent(n.type, n)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = !0; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(e) {
        this.flashPlayers[e.pluginId] = e;
        var t, n = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(e) {
        var t = this.flashPlayers[e],
            n = document.getElementById(e),
            i = t.pluginMediaElement;
        i.pluginApi = i.pluginElement = n, mejs.MediaPluginBridge.initPlugin(e), n.cueVideoById(t.videoId), e = t.containerId + "_callback", window[e] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, n, i)
        }, n.addEventListener("onStateChange", e), setInterval(function() {
            mejs.YouTubeApi.createEvent(n, i, "timeupdate")
        }, 250)
    },
    handleStateChange: function(e, t, n) {
        switch (e) {
            case -1:
                n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
                break;
            case 0:
                n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
                break;
            case 1:
                n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
                break;
            case 2:
                n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(t, n, "progress")
        }
    }
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
function(e, t) {
    var n = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    n.getLanguage = function() {
        return (n.locale.language || window.navigator.userLanguage || window.navigator.language).substr(0, 2).toLowerCase()
    }, "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), n.methods.checkPlain = function(e) {
        var t, n, i = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
        e = String(e);
        for (t in i) i.hasOwnProperty(t) && (n = RegExp(t, "g"), e = e.replace(n, i[t]));
        return e
    }, n.methods.t = function(e, t) {
        return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]), n.methods.checkPlain(e)
    }, n.t = function(e, t) {
        if ("string" == typeof e && e.length > 0) {
            var i = n.getLanguage();
            return t = t || {
                context: i
            }, n.methods.t(e, t)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    }, t.i18n = n
}(document, mejs),
function(e) {
    "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
}(mejs.i18n.locale.strings),
function(e) {
    "undefined" == typeof e.de && (e.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\xdfen"
    })
}(mejs.i18n.locale.strings),
function(e) {
    "undefined" == typeof e.zh && (e.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    })
}(mejs.i18n.locale.strings), ! function(e) {
    var t = function(e) {
        this.messages = {
            defaultMessage: "This value seems to be invalid.",
            type: {
                email: "This value should be a valid email.",
                url: "This value should be a valid url.",
                urlstrict: "This value should be a valid url.",
                number: "This value should be a valid number.",
                digits: "This value should be digits.",
                dateIso: "This value should be a valid date (YYYY-MM-DD).",
                alphanum: "This value should be alphanumeric.",
                phone: "This value should be a valid phone number."
            },
            notnull: "This value should not be null.",
            notblank: "This value should not be blank.",
            required: "This value is required.",
            regexp: "This value seems to be invalid.",
            min: "This value should be greater than or equal to %s.",
            max: "This value should be lower than or equal to %s.",
            range: "This value should be between %s and %s.",
            minlength: "This value is too short. It should have %s characters or more.",
            maxlength: "This value is too long. It should have %s characters or less.",
            rangelength: "This value length is invalid. It should be between %s and %s characters long.",
            mincheck: "You must select at least %s choices.",
            maxcheck: "You must select %s choices or less.",
            rangecheck: "You must select between %s and %s choices.",
            equalto: "This value should be the same."
        }, this.init(e)
    };
    t.prototype = {
        constructor: t,
        validators: {
            notnull: function() {
                return {
                    validate: function(e) {
                        return 0 < e.length
                    },
                    priority: 2
                }
            },
            notblank: function() {
                return {
                    validate: function(e) {
                        return "string" == typeof e && "" !== e.replace(/^\s+/g, "").replace(/\s+$/g, "")
                    },
                    priority: 2
                }
            },
            required: function() {
                var e = this;
                return {
                    validate: function(t) {
                        if ("object" == typeof t) {
                            for (var n in t)
                                if (e.required().validate(t[n])) return !0;
                            return !1
                        }
                        return e.notnull().validate(t) && e.notblank().validate(t)
                    },
                    priority: 512
                }
            },
            type: function() {
                return {
                    validate: function(e, t) {
                        var n;
                        switch (t) {
                            case "number":
                                n = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                                break;
                            case "digits":
                                n = /^\d+$/;
                                break;
                            case "alphanum":
                                n = /^\w+$/;
                                break;
                            case "email":
                                n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
                                break;
                            case "url":
                                e = /(https?|s?ftp|git)/i.test(e) ? e : "http://" + e;
                            case "urlstrict":
                                n = /^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                                break;
                            case "dateIso":
                                n = /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                                break;
                            case "phone":
                                n = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                                break;
                            default:
                                return !1
                        }
                        return "" !== e ? n.test(e) : !1
                    },
                    priority: 256
                }
            },
            regexp: function() {
                return {
                    validate: function(e, t, n) {
                        return RegExp(t, n.options.regexpFlag || "").test(e)
                    },
                    priority: 64
                }
            },
            minlength: function() {
                return {
                    validate: function(e, t) {
                        return e.length >= t
                    },
                    priority: 32
                }
            },
            maxlength: function() {
                return {
                    validate: function(e, t) {
                        return e.length <= t
                    },
                    priority: 32
                }
            },
            rangelength: function() {
                var e = this;
                return {
                    validate: function(t, n) {
                        return e.minlength().validate(t, n[0]) && e.maxlength().validate(t, n[1])
                    },
                    priority: 32
                }
            },
            min: function() {
                return {
                    validate: function(e, t) {
                        return Number(e) >= t
                    },
                    priority: 32
                }
            },
            max: function() {
                return {
                    validate: function(e, t) {
                        return Number(e) <= t
                    },
                    priority: 32
                }
            },
            range: function() {
                var e = this;
                return {
                    validate: function(t, n) {
                        return e.min().validate(t, n[0]) && e.max().validate(t, n[1])
                    },
                    priority: 32
                }
            },
            equalto: function() {
                return {
                    validate: function(t, n, i) {
                        return i.options.validateIfUnchanged = !0, t === e(n).val()
                    },
                    priority: 64
                }
            },
            remote: function() {
                return {
                    validate: function(t, n, i) {
                        var a = {}, r = {};
                        a[i.$element.attr("name")] = t, "undefined" != typeof i.options.remoteDatatype && (r = {
                            dataType: i.options.remoteDatatype
                        });
                        var s = function(t, n) {
                            "undefined" != typeof n && "undefined" != typeof i.Validator.messages.remote && n !== i.Validator.messages.remote && e(i.UI.ulError + " .remote").remove(), !1 === t ? i.options.listeners.onFieldError(i.element, i.constraints, i) : !0 === t && !1 === i.options.listeners.onFieldSuccess(i.element, i.constraints, i) && (t = !1), i.updtConstraint({
                                name: "remote",
                                valid: t
                            }, n), i.manageValidationResult()
                        }, o = function(t) {
                                if ("object" == typeof t) return t;
                                try {
                                    t = e.parseJSON(t)
                                } catch (n) {}
                                return t
                            }, l = function(e) {
                                return "object" == typeof e && null !== e ? "undefined" != typeof e.error ? e.error : "undefined" != typeof e.message ? e.message : null : null
                            };
                        return e.ajax(e.extend({}, {
                            url: n,
                            data: a,
                            type: i.options.remoteMethod || "GET",
                            success: function(e) {
                                e = o(e), s(1 === e || !0 === e || "object" == typeof e && null !== e && "undefined" != typeof e.success, l(e))
                            },
                            error: function(e) {
                                e = o(e), s(!1, l(e))
                            }
                        }, r)), null
                    },
                    priority: 64
                }
            },
            mincheck: function() {
                var e = this;
                return {
                    validate: function(t, n) {
                        return e.minlength().validate(t, n)
                    },
                    priority: 32
                }
            },
            maxcheck: function() {
                var e = this;
                return {
                    validate: function(t, n) {
                        return e.maxlength().validate(t, n)
                    },
                    priority: 32
                }
            },
            rangecheck: function() {
                var e = this;
                return {
                    validate: function(t, n) {
                        return e.rangelength().validate(t, n)
                    },
                    priority: 32
                }
            }
        },
        init: function(e) {
            var t = e.validators;
            e = e.messages;
            for (var n in t) this.addValidator(n, t[n]);
            for (n in e) this.addMessage(n, e[n])
        },
        formatMesssage: function(e, t) {
            if ("object" == typeof t) {
                for (var n in t) e = this.formatMesssage(e, t[n]);
                return e
            }
            return "string" == typeof e ? e.replace(/%s/i, t) : ""
        },
        addValidator: function(e, t) {
            if ("undefined" == typeof t().validate) throw Error("Validator `" + e + "` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general");
            "undefined" == typeof t().priority && (t = {
                validate: t().validate,
                priority: 32
            }, window.console && window.console.warn && window.console.warn("Validator `" + e + "` should have a priority. Default priority 32 given")), this.validators[e] = t
        },
        addMessage: function(e, t, n) {
            if ("undefined" != typeof n && !0 === n) this.messages.type[e] = t;
            else if ("type" === e)
                for (var i in t) this.messages.type[i] = t[i];
            else this.messages[e] = t
        }
    };
    var n = function(e) {
        this.init(e)
    };
    n.prototype = {
        constructor: n,
        init: function(e) {
            this.ParsleyInstance = e, this.hash = e.hash, this.options = this.ParsleyInstance.options, this.errorClassHandler = this.options.errors.classHandler(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox) || this.ParsleyInstance.$element, this.ulErrorManagement()
        },
        ulErrorManagement: function() {
            this.ulError = "#" + this.hash, this.ulTemplate = e(this.options.errors.errorsWrapper).attr("id", this.hash).addClass("parsley-error-list")
        },
        removeError: function(t) {
            t = this.ulError + " ." + t;
            var n = this;
            return this.options.animate ? e(t).fadeOut(this.options.animateDuration, function() {
                e(this).remove(), n.ulError && 0 === e(n.ulError).children().length && n.removeErrors()
            }) : e(t).remove(), this
        },
        addError: function(t) {
            for (var n in t) {
                var i = e(this.options.errors.errorElem).addClass(n);
                e(this.ulError).append(this.options.animate ? e(i).html(t[n]).hide().fadeIn(this.options.animateDuration) : e(i).html(t[n]))
            }
            return this
        },
        updateError: function(t) {
            for (var n in t) t[n] !== e(this.ulError + " > li." + n).html() && this.removeError(n).addError(t);
            return this
        },
        removeErrors: function() {
            return this.options.animate ? e(this.ulError).fadeOut(this.options.animateDuration, function() {
                e(this).remove()
            }) : e(this.ulError).remove(), this
        },
        reset: function() {
            this.ParsleyInstance.valid = null, this.removeErrors(), this.ParsleyInstance.validatedOnce = !1, this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
            for (var e in this.constraints) this.constraints[e].valid = null;
            return this
        },
        manageError: function(t) {
            if (e(this.ulError).length || this.manageErrorContainer(), "required" === t.name && null !== this.ParsleyInstance.getVal() && 0 < this.ParsleyInstance.getVal().length) return this;
            if (this.ParsleyInstance.isRequired && "required" !== t.name && (null === this.ParsleyInstance.getVal() || 0 === this.ParsleyInstance.getVal().length)) return this.removeError(t.name), this;
            var n = t.name,
                i = !1 !== this.options.errorMessage ? "custom-error-message" : n,
                a = {};
            return t = !1 !== this.options.errorMessage ? this.options.errorMessage : "type" === t.name ? this.ParsleyInstance.Validator.messages[n][t.requirements] : "undefined" == typeof this.ParsleyInstance.Validator.messages[n] ? this.ParsleyInstance.Validator.messages.defaultMessage : this.ParsleyInstance.Validator.formatMesssage(this.ParsleyInstance.Validator.messages[n], t.requirements), a[i] = t, e(this.ulError + " ." + i).length ? this.updateError(a) : this.addError(a), this
        },
        manageErrorContainer: function() {
            var t = this.options.errorContainer || this.options.errors.container(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox),
                n = this.options.animate ? this.ulTemplate.css("display", "") : this.ulTemplate;
            return "undefined" == typeof t ? (this.ParsleyInstance.isRadioOrCheckbox ? this.ParsleyInstance.$element.parent().after(n) : this.ParsleyInstance.$element.after(n), this) : void e(t).append(n)
        }
    };
    var i = function(e, t, n) {
        return this.options = t, "ParsleyFieldMultiple" === n ? this : void this.init(e, n || "ParsleyField")
    };
    i.prototype = {
        constructor: i,
        init: function(i, a) {
            this.type = a, this.valid = !0, this.element = i, this.validatedOnce = !1, this.$element = e(i), this.val = this.$element.val(), this.Validator = new t(this.options), this.isRequired = !1, this.constraints = {}, "undefined" == typeof this.isRadioOrCheckbox && (this.isRadioOrCheckbox = !1, this.hash = this.generateHash()), this.UI = new n(this), this.options.useHtml5Constraints && this.bindHtml5Constraints(), this.addConstraints(), this.hasConstraints() && this.bindValidationEvents()
        },
        setParent: function(t) {
            this.$parent = e(t)
        },
        getParent: function() {
            return this.$parent
        },
        bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && (this.options.required = !0);
            var e = this.$element.attr("type");
            "undefined" != typeof e && RegExp(e, "i").test("email url number range tel") && (this.options.type = "tel" === e ? "phone" : e, RegExp(this.options.type, "i").test("number range") && (this.options.type = "number", "undefined" != typeof this.$element.attr("min") && this.$element.attr("min").length && (this.options.min = this.$element.attr("min")), "undefined" != typeof this.$element.attr("max") && this.$element.attr("max").length && (this.options.max = this.$element.attr("max")))), "string" == typeof this.$element.attr("pattern") && this.$element.attr("pattern").length && (this.options.regexp = this.$element.attr("pattern"))
        },
        addConstraints: function() {
            for (var e in this.options) {
                var t = {};
                t[e] = this.options[e], this.addConstraint(t, !0, !1)
            }
        },
        addConstraint: function(e, t) {
            for (var n in e) n = n.toLowerCase(), "function" == typeof this.Validator.validators[n] && (this.constraints[n] = {
                name: n,
                requirements: e[n],
                valid: null
            }, "required" === n && (this.isRequired = !0), this.addCustomConstraintMessage(n));
            "undefined" == typeof t && this.bindValidationEvents()
        },
        updateConstraint: function(e, t) {
            for (var n in e) this.updtConstraint({
                name: n,
                requirements: e[n],
                valid: null
            }, t)
        },
        updtConstraint: function(t, n) {
            this.constraints[t.name] = e.extend(!0, this.constraints[t.name], t), "string" == typeof n && ("type" === t.name ? this.Validator.messages[t.name][t.requirements] = n : this.Validator.messages[t.name] = n), this.bindValidationEvents()
        },
        removeConstraint: function(e) {
            e = e.toLowerCase(), delete this.constraints[e], "required" === e && (this.isRequired = !1), this.hasConstraints() ? this.bindValidationEvents() : this.UI.reset()
        },
        addCustomConstraintMessage: function(e) {
            var t = e + ("type" === e && "undefined" != typeof this.options[e] ? this.options[e].charAt(0).toUpperCase() + this.options[e].substr(1) : "") + "Message";
            "undefined" != typeof this.options[t] && this.Validator.addMessage("type" === e ? this.options[e] : e, this.options[t], "type" === e)
        },
        bindValidationEvents: function() {
            this.valid = null, this.$element.addClass("parsley-validated"), this.$element.off("." + this.type), this.options.remote && !/change/i.test(this.options.trigger) && (this.options.trigger = this.options.trigger ? " change" : "change");
            var t = (this.options.trigger ? this.options.trigger : "") + (/key/i.test(this.options.trigger) ? "" : " keyup");
            this.$element.is("select") && (t += /change/i.test(t) ? "" : " change"), t = t.replace(/^\s+/g, "").replace(/\s+$/g, ""), this.$element.on((t + " ").split(" ").join("." + this.type + " "), !1, e.proxy(this.eventValidation, this))
        },
        generateHash: function() {
            return "parsley-" + (Math.random() + "").substring(2)
        },
        getHash: function() {
            return this.hash
        },
        getVal: function() {
            return "undefined" != typeof this.$element.domApi(this.options.namespace).value ? this.$element.domApi(this.options.namespace).value : this.$element.val()
        },
        eventValidation: function(e) {
            var t = this.getVal();
            return "keyup" === e.type && !/keyup/i.test(this.options.trigger) && !this.validatedOnce || "change" === e.type && !/change/i.test(this.options.trigger) && !this.validatedOnce || !this.isRadioOrCheckbox && this.getLength(t) < this.options.validationMinlength && !this.validatedOnce ? !0 : void this.validate()
        },
        getLength: function(e) {
            return e && e.hasOwnProperty("length") ? e.length : 0
        },
        isValid: function() {
            return this.validate(!1)
        },
        hasConstraints: function() {
            for (var e in this.constraints) return !0;
            return !1
        },
        validate: function(e) {
            var t = this.getVal(),
                n = null;
            return !this.hasConstraints() || this.$element.is(this.options.excluded) ? null : this.options.listeners.onFieldValidate(this.element, this) || "" === t && !this.isRequired ? (this.UI.reset(), null) : this.needsValidation(t) ? (n = this.applyValidators(), ("undefined" != typeof e ? e : this.options.showErrors) && this.manageValidationResult(), n) : this.valid
        },
        needsValidation: function(e) {
            return !this.options.validateIfUnchanged && null !== this.valid && this.val === e && this.validatedOnce ? !1 : (this.val = e, this.validatedOnce = !0)
        },
        applyValidators: function() {
            var e, t = null;
            for (e in this.constraints) {
                var n = this.Validator.validators[this.constraints[e].name]().validate(this.val, this.constraints[e].requirements, this);
                !1 === n ? (t = !1, this.constraints[e].valid = t) : !0 === n && (this.constraints[e].valid = !0, t = !1 !== t)
            }
            return !1 === t ? this.options.listeners.onFieldError(this.element, this.constraints, this) : !0 === t && !1 === this.options.listeners.onFieldSuccess(this.element, this.constraints, this) && (t = !1), t
        },
        manageValidationResult: function() {
            var t, n = null,
                i = [];
            for (t in this.constraints)!1 === this.constraints[t].valid ? (i.push(this.constraints[t]), n = !1) : !0 === this.constraints[t].valid && (this.UI.removeError(this.constraints[t].name), n = !1 !== n);
            if (this.valid = n, !0 === this.valid) return this.UI.removeErrors(), this.UI.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass), !0;
            if (!1 === this.valid) {
                if (!0 === this.options.priorityEnabled) {
                    for (var a, n = 0, r = 0; r < i.length; r++) a = this.Validator.validators[i[r].name]().priority, a > n && (t = i[r], n = a);
                    this.UI.manageError(t)
                } else
                    for (r = 0; r < i.length; r++) this.UI.manageError(i[r]);
                return this.UI.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass), !1
            }
            return this.UI.ulError && 0 === e(this.ulError).children().length && this.UI.removeErrors(), n
        },
        addListener: function(e) {
            for (var t in e) this.options.listeners[t] = e[t]
        },
        destroy: function() {
            this.$element.removeClass("parsley-validated"), this.UI.reset(), this.$element.off("." + this.type).removeData(this.type)
        }
    };
    var a = function(e, n, i) {
        this.initMultiple(e, n), this.inherit(e, n), this.Validator = new t(n), this.init(e, i || "ParsleyFieldMultiple")
    };
    a.prototype = {
        constructor: a,
        initMultiple: function(t, n) {
            this.element = t, this.$element = e(t), this.group = n.group || !1, this.hash = this.getName(), this.siblings = this.group ? "[" + n.namespace + 'group="' + this.group + '"]' : 'input[name="' + this.$element.attr("name") + '"]', this.isRadioOrCheckbox = !0, this.isRadio = this.$element.is("input[type=radio]"), this.isCheckbox = this.$element.is("input[type=checkbox]"), this.errorClassHandler = n.errors.classHandler(t, this.isRadioOrCheckbox) || this.$element.parent()
        },
        inherit: function(e, t) {
            var n, a = new i(e, t, "ParsleyFieldMultiple");
            for (n in a) "undefined" == typeof this[n] && (this[n] = a[n])
        },
        getName: function() {
            if (this.group) return "parsley-" + this.group;
            if ("undefined" == typeof this.$element.attr("name")) throw "A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";
            return "parsley-" + this.$element.attr("name").replace(/(:|\.|\[|\]|\$)/g, "")
        },
        getVal: function() {
            if (this.isRadio) return e(this.siblings + ":checked").val() || "";
            if (this.isCheckbox) {
                var t = [];
                return e(this.siblings + ":checked").each(function() {
                    t.push(e(this).val())
                }), t
            }
        },
        bindValidationEvents: function() {
            this.valid = null, this.$element.addClass("parsley-validated"), this.$element.off("." + this.type);
            var t = this,
                n = (this.options.trigger ? this.options.trigger : "") + (/change/i.test(this.options.trigger) ? "" : " change"),
                n = n.replace(/^\s+/g, "").replace(/\s+$/g, "");
            e(this.siblings).each(function() {
                e(this).on(n.split(" ").join("." + t.type + " "), !1, e.proxy(t.eventValidation, t))
            })
        }
    };
    var r = function(e, t, n) {
        this.init(e, t, n || "parsleyForm")
    };
    r.prototype = {
        constructor: r,
        init: function(t, n, i) {
            this.type = i, this.items = [], this.$element = e(t), this.options = n;
            var a = this;
            this.$element.find(n.inputs).each(function() {
                a.addItem(this)
            }), this.$element.on("submit." + this.type, !1, e.proxy(this.validate, this))
        },
        addListener: function(e) {
            for (var t in e)
                if (/Field/.test(t))
                    for (var n = 0; n < this.items.length; n++) this.items[n].addListener(e);
                else this.options.listeners[t] = e[t]
        },
        addItem: function(t) {
            t = e(t).parsley(this.options), t.setParent(this), this.items.push(t)
        },
        removeItem: function(t) {
            t = e(t).parsley();
            for (var n = 0; n < this.items.length; n++)
                if (this.items[n].hash === t.hash) return this.items[n].destroy(), this.items.splice(n, 1), !0;
            return !1
        },
        validate: function(t) {
            var n = !0;
            this.focusedField = !1;
            for (var i = 0; i < this.items.length; i++) "undefined" != typeof this.items[i] && !1 === this.items[i].validate() && (n = !1, !this.focusedField && "first" === this.options.focus || "last" === this.options.focus) && (this.focusedField = this.items[i].$element);
            if (this.focusedField && !n)
                if (0 < this.options.scrollDuration) {
                    var a = this,
                        i = this.focusedField.offset().top - e(window).height() / 2;
                    e("html, body").animate({
                        scrollTop: i
                    }, this.options.scrollDuration, function() {
                        a.focusedField.focus()
                    })
                } else this.focusedField.focus();
            return t = this.options.listeners.onFormValidate(n, t, this), "undefined" != typeof t ? t : n
        },
        isValid: function() {
            for (var e = 0; e < this.items.length; e++)
                if (!1 === this.items[e].isValid()) return !1;
            return !0
        },
        removeErrors: function() {
            for (var e = 0; e < this.items.length; e++) this.items[e].parsley("reset")
        },
        destroy: function() {
            for (var e = 0; e < this.items.length; e++) this.items[e].destroy();
            this.$element.off("." + this.type).removeData(this.type)
        },
        reset: function() {
            for (var e = 0; e < this.items.length; e++) this.items[e].UI.reset()
        }
    }, e.fn.parsley = function(t, n) {
        function s(n, s) {
            var o = e(n).data(s);
            if (!o) {
                switch (s) {
                    case "parsleyForm":
                        o = new r(n, l, "parsleyForm");
                        break;
                    case "parsleyField":
                        o = new i(n, l, "parsleyField");
                        break;
                    case "parsleyFieldMultiple":
                        o = new a(n, l, "parsleyFieldMultiple");
                        break;
                    default:
                        return
                }
                e(n).data(s, o)
            }
            return "string" == typeof t && "function" == typeof o[t] ? (o = o[t].apply(o, c), "undefined" != typeof o ? o : e(n)) : o
        }
        var o = e(this).data("parsleyNamespace") ? e(this).data("parsleyNamespace") : "undefined" != typeof t && "undefined" != typeof t.namespace ? t.namespace : e.fn.parsley.defaults.namespace,
            l = e.extend(!0, {}, e.fn.parsley.defaults, "undefined" != typeof window.ParsleyConfig ? window.ParsleyConfig : {}, t, this.domApi(o)),
            u = null,
            c = Array.prototype.slice.call(arguments, 1);
        return e(this).is("form") || "undefined" != typeof e(this).domApi(o).bind ? u = s(e(this), "parsleyForm") : e(this).is(l.inputs) && (u = s(e(this), e(this).is("input[type=radio], input[type=checkbox]") ? "parsleyFieldMultiple" : "parsleyField")), "function" == typeof n ? n() : u
    }, e(window).on("load", function() {
        e("[parsley-validate], [data-parsley-validate]").each(function() {
            e(this).parsley()
        })
    }), e.fn.domApi = function(t) {
        var n, i = {}, a = RegExp("^" + t, "i");
        if ("undefined" == typeof this[0]) return {};
        for (var r in this[0].attributes)
            if (n = this[0].attributes[r], "undefined" != typeof n && null !== n && n.specified && a.test(n.name)) {
                var o, l = i,
                    u = s(n.name.replace(t, ""));
                n = n.value;
                var c = void 0;
                try {
                    o = n ? "true" == n || ("false" == n ? !1 : "null" == n ? null : isNaN(c = Number(n)) ? /^[\[\{]/.test(n) ? e.parseJSON(n) : n : c) : n
                } catch (d) {
                    o = n
                }
                l[u] = o
            }
        return i
    };
    var s = function(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    };
    e.fn.parsley.defaults = {
        namespace: "parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=hidden], input[type=file], :disabled",
        priorityEnabled: !0,
        trigger: !1,
        animate: !0,
        animateDuration: 300,
        scrollDuration: 500,
        focus: "first",
        validationMinlength: 3,
        successClass: "parsley-success",
        errorClass: "parsley-error",
        errorMessage: !1,
        validators: {},
        showErrors: !0,
        useHtml5Constraints: !0,
        messages: {},
        validateIfUnchanged: !1,
        errors: {
            classHandler: function() {},
            container: function() {},
            errorsWrapper: "<ul></ul>",
            errorElem: "<li></li>"
        },
        listeners: {
            onFieldValidate: function() {
                return !1
            },
            onFormValidate: function() {},
            onFieldError: function() {},
            onFieldSuccess: function() {}
        }
    }
}(window.jQuery || window.Zepto), $(document).ready(function() {
    function e(e, t) {
        setTimeout(function() {
            $("#" + e).show(), n(e, 0)
        }, t)
    }

    function t(e, t) {
        setTimeout(function() {
            $("#" + e).show(), i(e, 0)
        }, t)
    }

    function n(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).delay(t).velocity({
            opacity: 1
        }, 200)
    }

    function i(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).delay(t).velocity({
            opacity: 1,
            scaleX: 1.1,
            scaleY: 1.1
        }, 200, function() {
            $("#" + e).velocity({
                scaleX: 1,
                scaleY: 1
            }, 200)
        })
    }

    function a(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).css("left", "-800px").delay(t).velocity({
            opacity: 1,
            left: 30
        }, 200, function() {
            $(this).velocity({
                left: 0
            }, 200)
        })
    }

    function r(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).css("right", "-800px").delay(t).velocity({
            opacity: 1,
            right: 30
        }, 200, function() {
            $(this).velocity({
                right: 0
            }, 200)
        })
    }

    function s(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).css("top", "-800px").delay(t).velocity({
            opacity: 1
        }, 200, function() {
            $(this).velocity({
                top: 0
            }, 200)
        })
    }

    function o(e, t) {
        $("#" + e).css("opacity", 0), $("#" + e).css("bottom", "-800px").delay(t).velocity({
            opacity: 1
        }, 200, function() {
            $(this).velocity({
                bottom: 0
            }, 200)
        })
    }

    function l(e) {
        var t = e.toString()[0];
        if ("-" == t) {
            e = e.toString(), e = e.replace("-", "");
            var n = (10 > e ? "0" : "") + e;
            return "-" + n
        }
        var n = (10 > e ? "0" : "") + e;
        return "+" + n
    }

    function u(e) {
        var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e)
    }

    function c(e) {
        if (document.createEvent) {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e[0].dispatchEvent(t)
        } else element.fireEvent && e[0].fireEvent("onmousedown")
    }

    function d() {
        date = $('.selectAW-date[data-cf-name="webinar-date"]').val(), time = $('.selectAW-date[data-cf-name="webinar-time"]').val(), webinar_datetime = moment(date + " " + time, "YYYY-MM-DD HH:mm"), console.log("Selected Date: " + webinar_datetime), webinar_datetime_offset = moment.unix(webinar_datetime), console.log("Selected Date: " + webinar_datetime_offset), now = moment(), console.log("Today: " + now), now_offset = moment.unix(now), console.log("Today: " + now_offset), webinar_delay = webinar_datetime.diff(now), console.log("Delay: " + webinar_delay), webinar_delay_offset = moment.unix(webinar_delay), console.log("Delay: " + webinar_delay_offset), console.log("Delay +: " + webinar_delay), webinar_delay_offset = moment.unix(webinar_delay), console.log("Delay +: " + webinar_delay_offset), $("#webinar_delay").attr("value", webinar_delay), console.log(webinar_delay)
    }
    var p = navigator.userAgent.toLowerCase(); - 1 != p.indexOf("safari") && (p.indexOf("chrome") > -1 || ($(".social-likes__icon").hide(), $(".social-likes__button").attr("style", "padding-left: 10px !important"))), $url = window.location.href, $queries = $.parseParams($url), $.each($queries, function(e, t) {
        $(".elInput[name='" + e + "']").val(t)
    }), $utm_source = $queries.nodo_source, $pID = $("#page-id").val(), $rootID = $("#root-id").val(), $variantcheck = $("#variant-check").val(), $userID = $("#user-id").val(), $cookieCheck = $.cookie("uniq-nodo-" + $rootID), void 0 == $cookieCheck && $.cookie("uniq-nodo-" + $rootID, "x", {
        expires: .5
    }), $(".addthisevent-drop").append("Add to Calendar"), $(".containerWrapper .de-video-block").each(function() {
        $videoType = $(this).attr("data-video-type"), "evp" == $videoType && ($video = $(this).attr("data-evp-url"), $(".elVideo", this).html("" == $video || void 0 == $video ? "No Video Set..." : $video))
    }), $(".editor-video-holder").hide(), $.velocity.defaults.easing = "easeInOutsine", $iframeCheck = $("#iframeCheck").val(), "true" == $iframeCheck || $("[data-trigger='load']").each(function() {
        $ID = $(this).attr("id"), $type = $(this).attr("data-animate"), $delay = $(this).attr("data-delay"), "fadex" == $type || "fade" == $type ? n($ID, $delay) : "scale" == $type ? i($ID, $delay) : "left" == $type ? a($ID, $delay) : "right" == $type ? r($ID, $delay) : "top" == $type ? s($ID, $delay) : "bottom" == $type && o($ID, $delay)
    }), $("[data-trigger='scroll']").waypoint(function() {
        $ID = $(this).attr("id"), $type = $(this).attr("data-animate"), $delay = $(this).attr("data-delay"), $(this).css("opacity", 0), $(this).css("position", "relative"), "fade" == $type ? n($ID, $delay) : "scale" == $type ? i($ID, $delay) : "left" == $type ? a($ID, $delay) : "right" == $type ? r($ID, $delay) : "top" == $type ? s($ID, $delay) : "bottom" == $type && o($ID, $delay), $(this).attr("data-trigger", "done")
    }, {
        offset: "75%",
        triggerOnce: !0
    }), $("[data-timed-style='fade']").each(function() {
        $ID = $(this).attr("id"), $(this).css("display", ""), $(this).attr("data-timed-minutes") ? ($minutes = $(this).attr("data-timed-minutes"), $minutes = "" == $minutes ? 0 : $(this).attr("data-timed-minutes")) : $minutes = 0, $minutes = 6e4 * $minutes, $(this).attr("data-timed-seconds") ? ($seconds = $(this).attr("data-timed-seconds"), $seconds = "" == $seconds ? 0 : $(this).attr("data-timed-seconds")) : $seconds = 0, $seconds = 1e3 * $seconds, $total_ms = $minutes + $seconds, 0 == $total_ms ? $("#" + $ID).show() : e($ID, $total_ms)
    }), $("[data-timed-style='scale']").each(function() {
        $ID = $(this).attr("id"), $(this).css("display", ""), $(this).attr("data-timed-minutes") ? ($minutes = $(this).attr("data-timed-minutes"), $minutes = "" == $minutes ? 0 : $(this).attr("data-timed-minutes")) : $minutes = 0, $minutes = 6e4 * $minutes, $(this).attr("data-timed-seconds") ? ($seconds = $(this).attr("data-timed-seconds"), $seconds = "" == $seconds ? 0 : $(this).attr("data-timed-seconds")) : $seconds = 0, $seconds = 1e3 * $seconds, $total_ms = $minutes + $seconds, 0 == $total_ms ? $("#" + $ID).show() : t($ID, $total_ms)
    }), $(".swipebox").magnificPopup({
        type: "image"
    }), $(".elVideoModalWrapper .swipebox").magnificPopup({
        type: "iframe"
    }), $(document).on("click", ".elIMG", function() {
        $(this).attr("data-imagelink") && ($url = $(this).attr("data-imagelink"), "#open-popup" == $url || "#submit-form" == $url || ($(this).attr("target") ? ($target = $(this).attr("target"), "_self" == $target ? window.location.href = $url : window.open($url, "_blank")) : window.location.href = $url))
    }), $(".wideCountdown-demo").remove(), $(".wideCountdown").removeClass("hide"), $(".wideCountdown").each(function() {
        if ($(".countdown-time").text()) {
            $date = $(".countdown-time").text();
            var e = $date.split(" ");
            "" != e[0] && ($date = e[0], $date = $date.split("/"), $time = e[1], $time = $time.split(":"), $countdownDate = new Date($date[0], $date[1] - 1, $date[2], $time[0], 0, 0), console.log($countdownDate), $lang = $(this).attr("data-lang"), $.countdown.setDefaults($.countdown.regionalOptions[$lang]), $(this).countdown({
                until: $countdownDate,
                padZeroes: !0,
                alwaysExpire: !0,
                onExpiry: function() {
                    location.reload()
                }
            }))
        } else "undefined" != typeof $(this).attr("data-date") && ($date = $(this).attr("data-date"), $date = $date.split("/"), $time = $(this).attr("data-time"), $tz = $(this).attr("data-tz"), $lang = $(this).attr("data-lang"), $countdownDate = new Date($date[2], $date[0] - 1, $date[1], $time, 0, 0), console.log($countdownDate), $countdownDateZone = moment.tz(new Date($date[2], $date[0] - 1, $date[1], $time, 0, 0), $tz).zone(), $countdownDateZone /= 60, $countdownDateZone = $countdownDateZone *= -1, $countdownDateZone = l($countdownDateZone), $.countdown.setDefaults($.countdown.regionalOptions[$lang]), $(this).countdown({
            until: $countdownDate,
            timezone: $countdownDateZone,
            padZeroes: !0,
            alwaysExpire: !0,
            onExpiry: function() {
                $action = $(this).closest(".elCountdown").attr("data-expire-type"), "showhide" == $action ? ($hide = $(this).attr("data-hide-ids"), $show = $(this).attr("data-show-ids"), $hide = $hide.split(","), $.each($hide, function() {
                    $("#" + this).hide()
                }), $show = $show.split(","), $.each($show, function() {
                    $("#" + this).show()
                })) : ($url = $(this).attr("data-url"), "" == $url || "#" == $url || (window.location.href = $url))
            }
        }))
    }), $(".wideCountdownEvergreenDaily-demo").remove(), $(".wideCountdownEvergreenDaily").removeClass("hide"), $(".wideCountdownEvergreenDaily").each(function() {
        $date = moment().format("MM/DD/YYYY"), $date = $date.split("/"), $time = $(this).attr("data-time"), $tz = $(this).attr("data-tz"), $lang = $(this).attr("data-lang"), $countdownDate = new Date($date[2], $date[0] - 1, $date[1], $time, 56, 0), $countdownDateZone = moment.tz(new Date($date[2], $date[0] - 1, $date[1], $time, 56, 0), $tz).zone(), $countdownDateZone /= 60, $countdownDateZone = $countdownDateZone *= -1, $countdownDateZone = l($countdownDateZone), $.countdown.setDefaults($.countdown.regionalOptions[$lang]), $thisID = $(this).closest(".elCountdownEvergreenDaily").attr("id"), $.cookie("cf-eg-" + $thisID) ? $countdownDate = 0 : $.cookie("cf-eg-nd-" + $thisID) && ($countdownDate = 1e44, $(this).hide(), $hide = $(this).attr("data-hide-ids"), $show = $(this).attr("data-show-ids"), $hide = $hide.split(","), $.each($hide, function() {
            $("#" + this).hide()
        }), $show = $show.split(","), $.each($show, function() {
            $("#" + this).hide()
        }), $show = $(this).attr("data-show-ids-extra"), $show = $show.split(","), $.each($show, function() {
            $("#" + this).show()
        })), $revisitAction = $(this).closest(".elCountdownEvergreenDaily").attr("data-revisit-action"), "expirecookie" == $revisitAction ? ($cookieDays = $(this).attr("data-expire-cookie"), $.cookie("cf-eg-" + $thisID, "x", {
            expires: parseInt($cookieDays)
        })) : "newdiv" == $revisitAction ? ($cookieDays = $(this).attr("data-expire-cookie-nd"), $.cookie("cf-eg-nd-" + $thisID, "x", {
            expires: parseInt($cookieDays)
        })) : ($.removeCookie("cf-eg-" + $thisID), $.removeCookie("cf-eg-ng-" + $thisID)), $(this).countdown({
            until: $countdownDate,
            timezone: $countdownDateZone,
            padZeroes: !0,
            alwaysExpire: !0,
            onExpiry: function() {
                $action = $(this).closest(".elCountdownEvergreenDaily").attr("data-expire-type"), "showhide" == $action ? ($hide = $(this).attr("data-hide-ids"), $show = $(this).attr("data-show-ids"), $hide = $hide.split(","), $.each($hide, function() {
                    $("#" + this).hide()
                }), $show = $show.split(","), $.each($show, function() {
                    $("#" + this).show()
                })) : ($url = $(this).attr("data-url"), "" == $url || "#" == $url || (window.location.href = $url))
            }
        })
    }), $(".wideCountdownEvergreen-demo").remove(), $(".wideCountdownEvergreen").removeClass("hide"), $(".wideCountdownEvergreen").each(function() {
        $hours = $(this).attr("data-hours"), $minutes = $(this).attr("data-minutes"), $seconds = $(this).attr("data-seconds"), $hours = "" == $hours || void 0 == $hours ? 0 : 3600 * parseInt($hours), $minutes = "" == $minutes || void 0 == $minutes ? 0 : 60 * parseInt($minutes), $seconds = "" == $seconds || void 0 == $seconds ? 0 : parseInt($seconds), $countdownDate = $hours + $minutes + $seconds, $lang = $(this).attr("data-lang"), $.countdown.setDefaults($.countdown.regionalOptions[$lang]), $thisID = $(this).closest(".elCountdownEvergreen").attr("id"), $.cookie("cf-eg-" + $thisID) ? $countdownDate = 0 : $.cookie("cf-eg-nd-" + $thisID) && ($countdownDate = 1e44, $(this).hide(), $hide = $(this).attr("data-hide-ids"), $show = $(this).attr("data-show-ids"), $hide = $hide.split(","), $.each($hide, function() {
            $("#" + this).hide()
        }), $show = $show.split(","), $.each($show, function() {
            $("#" + this).hide()
        }), $show = $(this).attr("data-show-ids-extra"), $show = $show.split(","), $.each($show, function() {
            $("#" + this).show()
        })), $revisitAction = $(this).closest(".elCountdownEvergreen").attr("data-revisit-action"), "expirecookie" == $revisitAction ? ($cookieDays = $(this).attr("data-expire-cookie"), $.cookie("cf-eg-" + $thisID, "x", {
            expires: parseInt($cookieDays)
        })) : "newdiv" == $revisitAction ? ($cookieDays = $(this).attr("data-expire-cookie-nd"), $.cookie("cf-eg-nd-" + $thisID, "x", {
            expires: parseInt($cookieDays)
        })) : ($.removeCookie("cf-eg-" + $thisID), $.removeCookie("cf-eg-ng-" + $thisID)), $(this).countdown({
            until: +$countdownDate,
            padZeroes: !0,
            alwaysExpire: !0,
            onExpiry: function() {
                $action = $(this).closest(".elCountdownEvergreen").attr("data-expire-type"), "showhide" == $action ? ($hide = $(this).attr("data-hide-ids"), $show = $(this).attr("data-show-ids"), $hide = $hide.split(","), $.each($hide, function() {
                    $("#" + this).hide()
                }), $show = $show.split(","), $.each($show, function() {
                    $("#" + this).show()
                })) : ($url = $(this).attr("data-url"), "" == $url || "#" == $url || (window.location.href = $url))
            }
        })
    }), $(document).on("click", ".modalBackdropWrapper", function() {
        return $(".containerModal").delay(0).velocity({
            opacity: 0,
            top: -300
        }, 200, function() {
            $(".modalBackdropWrapper").hide(), $(".containerModal").hide(), $(".containerModal").css("top", 0)
        }), $windowHeight = $(window).height(), $posTop = $(".containerModal").offset().top, $popupHeight = $(".containerModal").height() + $posTop, $popupHeight > $windowHeight ? $(".containerModal").css("position", "absolute") : $(".containerModal").css("position", "fixed"), !1
    }), $(document).on("click", ".closeLPModal", function() {
        return $(".containerModal").delay(0).velocity({
            opacity: 0,
            top: -300
        }, 200, function() {
            $(".modalBackdropWrapper").hide(), $(".containerModal").hide(), $(".containerModal").css("top", 0)
        }), !1
    }), $(document).on("click", "a[href='#open-popup'], .elIMG[data-imagelink='#open-popup']", function() {
        return $(".containerModal").show(), $(".modalBackdropWrapper").show(), $windowHeight = $(window).height(), $posTop = $(".containerModal").offset().top, $popupHeight = $(".containerModal").height() + $posTop, $popupHeight > $windowHeight ? ($(".containerModal").css("position", "absolute"), $(window).scrollTop(0)) : $(".containerModal").css("position", "fixed"), $ID = "modalPopup", $type = $("#" + $ID).attr("data-animate"), $delay = $("#" + $ID).attr("data-delay"), "fade" == $type ? n($ID, $delay) : "scale" == $type ? i($ID, $delay) : "left" == $type ? a($ID, $delay) : "right" == $type ? r($ID, $delay) : "top" == $type ? s($ID, $delay) : "bottom" == $type && o($ID, $delay), !1
    }), $(document).on("click", "a[href='#print'], .elIMG[data-imagelink='#print']", function() {
        return window.print(), !1
    }), $(document).on("click", ".btnToggle", function() {
        return $(this).is(".elB1") ? ($showThis = $(this).attr("data-show"), $root = $(this).closest(".de-editable").attr("id"), $hideThis = $("#" + $root + " .elB2").attr("data-show"), $($showThis).show(), $($hideThis).hide(), $(this).hasClass("btnToggleActive") || ($getB1Color = $("#" + $root + " .elB1").css("color"), $getB2Color = $("#" + $root + " .elB2").css("color"), $(this).css("color", $getB2Color), $("#" + $root + " .elB2").css("color", $getB1Color)), $("#" + $root + " .btnToggle").removeClass("btnToggleActive"), $("#" + $root + " .btnToggle").removeClass("btnToggleDeactive"), $("#" + $root + " .elB1").addClass("btnToggleActive"), $("#" + $root + " .elB2").addClass("btnToggleDeactive")) : ($showThis = $(this).attr("data-show"), $root = $(this).closest(".de-editable").attr("id"), $hideThis = $("#" + $root + " .elB1").attr("data-show"), $($.trim($showThis)).show(), $($.trim($hideThis)).hide(), $(this).hasClass("btnToggleActive") || ($getB1Color = $("#" + $root + " .elB1").css("color"), $getB2Color = $("#" + $root + " .elB2").css("color"), $(this).css("color", $getB1Color), $("#" + $root + " .elB1").css("color", $getB2Color)), $("#" + $root + " .btnToggle").removeClass("btnToggleActive"), $("#" + $root + " .btnToggle").removeClass("btnToggleDeactive"), $("#" + $root + " .elB2").addClass("btnToggleActive"), $("#" + $root + " .elB1").addClass("btnToggleDeactive")), !1
    }), $(".stickyTop").sticky(), $(document).on("click", "a[href*='#scroll-'], .elIMG[data-imagelink*='#scroll-']", function() {
        return $getHref = $(this).attr("href"), $getTitle = $getHref.split("#scroll-"), $getTitle = $getTitle[1], $getTitle = $getTitle.replace(/%20/g, " "), console.log($getTitle), $('.container[data-title="' + $getTitle + '"]').velocity("scroll", {
            duration: 500
        }), !1
    }), $pID = $("#page-id").val(), $requiredCheck = "", $(document).on("click", "a[href='#submit-form'], .elIMG[data-imagelink='#submit-form']", function() {
        return $(".elInput").each(function(e, t) {
            name = $(this).attr("name"), t = $(this).val(), "" == name || "not-set" == name || "" == t || $("#cf_contact_" + name).val(t)
        }).promise().done(function() {
            $requiredCheck = "", $(".elInput.required1").each(function() {
                $thisInput = $(this), $visible = $(this).is(":visible"), 0 == $visible || ("" == $thisInput.val() ? ($requiredCheck = "fail", $thisInput.css("border-color", "#B91517"), $thisInput.css("border-width", "3px")) : "email" == $thisInput.attr("name") ? (email = $thisInput.val(), u(email) ? ($thisInput.css("border-color", "#4a8920"), $thisInput.css("border-width", "3px")) : ($requiredCheck = "fail", $thisInput.css("border-color", "#B91517"), $thisInput.css("border-width", "3px"))) : ($thisInput.css("border-color", "#4a8920"), $thisInput.css("border-width", "3px")))
            }).promise().done(function() {
                if ($(".elInput.required0").css("border-color", "#4a8920"), $(".elInput.required0").css("border-width", "3px"), "fail" == $requiredCheck) console.log("failed requiredCheck");
                else if ($arService = $("#submit-form-action").attr("data-ar-service"), "HTML" == $arService) $(".containerWrapper .de-input-block").each(function() {
                    $ID = $(this).attr("id"), $value = $(".elInput", this).val(), $(".nodoCustomHTML input[data-sync='" + $ID + "']").val($value)
                }).promise().done(function() {
                    $("input[name=payment_method_nonce]").each(function() {
                        $value = $(this).val(), $(".nodoCustomHTML input[data-sync='payment_method_nonce']").val($value), $("input[name='purchase[payment_method_nonce]']").val($value)
                    }), $(".nodoHiddenFormFields .elInput").each(function() {
                        $ID = $(this).attr("id"), $value = $(this).val(), $(".nodoCustomHTML input[data-sync='" + $ID + "']").val($value)
                    }).promise().done(function() {
                        $.ajax({
                            type: "POST",
                            url: window.location,
                            data: $("#cfAR").serialize()
                        }).always(function() {
                            $(".nodoCustomHTML input[type='submit']").remove(), $(".nodoCustomHTML form").submit()
                        })
                    })
                });
                else {
                    $("#cfAR input[type='submit']").remove();
                    try {
                        "https://www.backpackcrm.com/orders" == $("#cfAR").attr("action") && SendData(SendData("cfAR", $("#cfAR")[0].onsubmit))
                    } catch (e) {}
                    $("#cfAR").submit()
                }
            })
        }), !1
    }), $("input, textarea").placeholder(), $("#modalPopup").hasClass("bounce") && ouibounce(!1, {
        aggressive: !0,
        timer: 500,
        sensitivity: 40,
        callback: function() {
            $(".containerModal").show(), $(".modalBackdropWrapper").show(), $ID = "modalPopup", $type = $("#" + $ID).attr("data-animate"), $delay = $("#" + $ID).attr("data-delay"), "fade" == $type ? n($ID, $delay) : "scale" == $type ? i($ID, $delay) : "left" == $type ? a($ID, $delay) : "right" == $type ? r($ID, $delay) : "top" == $type ? s($ID, $delay) : "bottom" == $type && o($ID, $delay)
        }
    }), $(".elSelect").click(function() {
        c($("select", this))
    }).children().click(function() {
        return !1
    }), $localTime = moment().format("h:mm A"), $(".awLocalTime").text($localTime), setInterval(function() {
        $localTime = moment().format("h:mm A"), $(".awLocalTime").text($localTime)
    }, 6e4), $('.selectAW-date[data-cf-name="webinar-date"]').find("option").remove(), $autoWebinarDay1 = moment().add("days", 1).format("dddd, MMM Do, YYYY"), $autoWebinarDay1_raw = moment().add("days", 1).format("YYYY-MM-DD"), $selectText = $('.selectAW-date[data-cf-name="webinar-date"]').attr("data-selecttext"), $selectText || ($selectText = "Select Desired Date..."), $('.selectAW-date[data-cf-name="webinar-date"]').append('<option value="' + $autoWebinarDay1_raw + '">' + $selectText + "</option>"), $autoWebinarDay0 = moment().subtract("days", 1).format("dddd, MMM Do, YYYY"), $autoWebinarDay0_raw = moment().subtract("days", 1).format("YYYY-MM-DD"), $replayText = $('.selectAW-date[data-cf-name="webinar-date"]').attr("data-replaytext"), $replayText || ($replayText = "Watch Yesterday's Replay Now"), $('.selectAW-date[data-cf-name="webinar-date"]').append('<option value="' + $autoWebinarDay0_raw + '">' + $replayText + "</option>"), $('.selectAW-date[data-cf-name="webinar-date"]').append('<option value="' + $autoWebinarDay1_raw + '">' + $autoWebinarDay1 + "</option>"), $autoWebinarDay2 = moment().add("days", 2).format("dddd, MMM Do, YYYY"), $autoWebinarDay2_raw = moment().add("days", 2).format("YYYY-MM-DD"), $('.selectAW-date[data-cf-name="webinar-date"]').append('<option value="' + $autoWebinarDay2_raw + '">' + $autoWebinarDay2 + "</option>"), $autoWebinarDay3 = moment().add("days", 3).format("dddd, MMM Do, YYYY"), $autoWebinarDay3_raw = moment().add("days", 3).format("YYYY-MM-DD"), $('.selectAW-date[data-cf-name="webinar-date"]').append('<option value="' + $autoWebinarDay3_raw + '">' + $autoWebinarDay3 + "</option>"), $('.selectAW-date[data-cf-name="webinar-time"]').find("option").remove(), $('.selectAW-date[data-cf-name="webinar-time"]').each(function() {
        $11am = $(this).attr("data-time-11"), $2pm = $(this).attr("data-time-2"), $4pm = $(this).attr("data-time-4"), $6pm = $(this).attr("data-time-6"), $8pm = $(this).attr("data-time-8"), "off" != $11am && $(this).append('<option value="11:00">@ 11 am</option>'), "off" != $2pm && $(this).append('<option value="13:00">@ 2 pm</option>'), "off" != $4pm && $(this).append('<option value="16:00">@ 4 pm</option>'), "off" != $6pm && $(this).append('<option value="18:00">@ 6 pm</option>'), "off" != $8pm && $(this).append('<option value="20:00">@ 8 pm</option>')
    }).promise().done(function() {
        $('.selectAW-date[data-cf-name="webinar-time"]').val() || $('.selectAW-date[data-cf-name="webinar-time"]').append('<option value="18:00">@ 6 pm</option>'), d()
    }), $(document).on("change", '.selectAW-date[data-cf-name="webinar-date"]', function() {
        d()
    }), $(document).on("change", '.selectAW-date[data-cf-name="webinar-time"]', function() {
        d()
    }), $(document).on("load", function() {
        $('.selectAW-date[data-cf-name="webinar-date"]').size() > 0 ? (console.log("webinar_delay set"), d()) : console.log("skip webinar delay")
    }), $(document).keypress(function(e) {
        13 == e.which && $("a[href='#submit-form']").trigger("click")
    }), $("body").load(function() {
        $('.selectAW-date[data-cf-name="webinar-date"]').size() > 0 && d()
    }), $(".de-video-block").fitVids({
        customSelector: "iframe[src*='fast.wistia.net']"
    });
    try {
        $("video,audio").mediaelementplayer()
    } catch (h) {}
    $(document).on("click", "#closeCFPOPUP", function() {
        parent.postMessage("closeCF", "*")
    }), $(document).on("click", "html", function(e) {
        var t = $(e.target);
        (t.is(".container") || t.is(".containerWrapper") || t.is("html")) && parent.postMessage("closeCF", "*")
    });
    var f = window.addEventListener ? "addEventListener" : "attachEvent",
        m = window[f],
        _ = "attachEvent" == f ? "onmessage" : "message";
    m(_, function(e) {
        "reanimate" == e.data && $("[data-trigger='load']").each(function() {
            $ID = $(this).attr("id"), $type = $(this).attr("data-animate"), $delay = $(this).attr("data-delay"), "fadex" == $type || "fade" == $type ? n($ID, $delay) : "scale" == $type ? i($ID, $delay) : "left" == $type ? a($ID, $delay) : "right" == $type ? r($ID, $delay) : "top" == $type ? s($ID, $delay) : "bottom" == $type && o($ID, $delay)
        })
    }, !1), $(".iframeblocked").append("<div class='iframeBlocker' ></div>"), $(".addthisevent-drop").append("Add to Calendar")
}), $(function() {
    $('.selectAW-date[data-cf-name="webinar-date"]').size() > 0 && webinarDelay()
});
