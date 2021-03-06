! function() {
    var a, b, c;
    ! function(d) {
        function e(a, b) {
            return u.call(a, b)
        }

        function f(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                o = s.map,
                p = o && o["*"] || {};
            if (a && "." === a.charAt(0))
                if (b) {
                    for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                        if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                        else if (".." === m) {
                        if (1 === k && (".." === a[2] || ".." === a[0])) break;
                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                    }
                    a = a.join("/")
                } else 0 === a.indexOf("./") && (a = a.substring(2));
            if ((n || p) && o) {
                for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                    if (d = c.slice(0, k).join("/"), n)
                        for (l = n.length; l > 0; l -= 1)
                            if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                f = e, h = k;
                                break
                            }
                    if (f) break;
                    !i && p && p[d] && (i = p[d], j = k)
                }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
            }
            return a
        }

        function g(a, b) {
            return function() {
                var c = v.call(arguments, 0);
                return "string" != typeof c[0] && 1 === c.length && c.push(null), n.apply(d, c.concat([a, b]))
            }
        }

        function h(a) {
            return function(b) {
                return f(b, a)
            }
        }

        function i(a) {
            return function(b) {
                q[a] = b
            }
        }

        function j(a) {
            if (e(r, a)) {
                var b = r[a];
                delete r[a], t[a] = !0, m.apply(d, b)
            }
            if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
            return q[a]
        }

        function k(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function l(a) {
            return function() {
                return s && s.config && s.config[a] || {}
            }
        }
        var m, n, o, p, q = {},
            r = {},
            s = {},
            t = {},
            u = Object.prototype.hasOwnProperty,
            v = [].slice,
            w = /\.js$/;
        o = function(a, b) {
            var c, d = k(a),
                e = d[0];
            return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                f: e ? e + "!" + a : a,
                n: a,
                pr: e,
                p: c
            }
        }, p = {
            require: function(a) {
                return g(a)
            },
            exports: function(a) {
                var b = q[a];
                return "undefined" != typeof b ? b : q[a] = {}
            },
            module: function(a) {
                return {
                    id: a,
                    uri: "",
                    exports: q[a],
                    config: l(a)
                }
            }
        }, m = function(a, b, c, f) {
            var h, k, l, m, n, s, u = [],
                v = typeof c;
            if (f = f || a, "undefined" === v || "function" === v) {
                for (b = !b.length && c.length ? ["require", "exports", "module"] : b, n = 0; n < b.length; n += 1)
                    if (m = o(b[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                    else if ("exports" === k) u[n] = p.exports(a), s = !0;
                else if ("module" === k) h = u[n] = p.module(a);
                else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                else {
                    if (!m.p) throw new Error(a + " missing " + k);
                    m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                }
                l = c ? c.apply(q[a], u) : void 0, a && (h && h.exports !== d && h.exports !== q[a] ? q[a] = h.exports : l === d && s || (q[a] = l))
            } else a && (q[a] = c)
        }, a = b = n = function(a, b, c, e, f) {
            if ("string" == typeof a) return p[a] ? p[a](b) : j(o(a, b).f);
            if (!a.splice) {
                if (s = a, s.deps && n(s.deps, s.callback), !b) return;
                b.splice ? (a = b, b = c, c = null) : a = d
            }
            return b = b || function() {}, "function" == typeof c && (c = e, e = f), e ? m(d, a, b, c) : setTimeout(function() {
                m(d, a, b, c)
            }, 4), n
        }, n.config = function(a) {
            return n(a)
        }, a._defined = q, c = function(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
        }, c.amd = {
            jQuery: !0
        }
    }(), c("../../node_modules/almond/almond", function() {}),
        function(b, d) {
            "use strict";
            var e = {
                cache: null,
                config: function(a) {
                    return a && (this.cache = a), this.cache
                }
            };
            if ("function" == typeof c && c.amd && "undefined" != typeof a) d(a);
            else if ("object" == typeof exports) {
                var f = d(e).config();
                module.exports = f
            }
        }(this, function(a) {
            "use strict";
            return a.config({
                baseUrl: "/../js/",
                paths: {
                    base: "src",
                    jquery: "/web/20160603003234/https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min",
                    videojs: "/web/20160603003234/http://vjs.zencdn.net/4.12/video",
                    underscore: "lib/bower/underscore",
                    vendor: "lib/bower",
                    templates: "templates"
                },
                map: {
                    "*": {
                        handlebars: "vendor/handlebars",
                        velocity: "vendor/velocity",
                        async: "vendor/requirejs-plugins/async",
                        selectize: "lib/selectize",
                        sifter: "lib/sifter",
                        microplugin: "lib/microplugin"
                    }
                },
                shim: {
                    "vendor/handlebars": {
                        exports: "Handlebars"
                    },
                    velocity: {
                        deps: ["jquery"]
                    },
                    "velocity.ui": {
                        deps: ["velocity"]
                    },
                    "lib/owl.carousel": {
                        exports: "jQuery.fn.owlCarousel",
                        deps: ["jquery"]
                    },
                    "lib/selectFx": {
                        exports: "SelectFx",
                        deps: ["lib/classie"]
                    },
                    "lib/classie": {
                        exports: "classie"
                    },
                    "vendor/mobile-detect": {
                        exports: "MobileDetect"
                    },
                    "lib/jquery.prettyPhoto": {
                        deps: ["jquery"]
                    }
                }
            }), a
        }), c("require-config", function() {}), c("jquery", [], function() {
            return jQuery
        }),
        function() {
            function a(a) {
                function b(b, c, d, e, f, g) {
                    for (; f >= 0 && g > f; f += a) {
                        var h = e ? e[f] : f;
                        d = c(d, b[h], h, b)
                    }
                    return d
                }
                return function(c, d, e, f) {
                    d = u(d, f, 4);
                    var g = !B(c) && t.keys(c),
                        h = (g || c).length,
                        i = a > 0 ? 0 : h - 1;
                    return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
                }
            }

            function b(a) {
                return function(b, c, d) {
                    c = v(c, d);
                    for (var e = A(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                        if (c(b[f], f, b)) return f;
                    return -1
                }
            }

            function d(a, b, c) {
                return function(d, e, f) {
                    var g = 0,
                        h = A(d);
                    if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
                    else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
                    if (e !== e) return f = b(l.call(d, g, h), t.isNaN), f >= 0 ? f + g : -1;
                    for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
                        if (d[f] === e) return f;
                    return -1
                }
            }

            function e(a, b) {
                var c = G.length,
                    d = a.constructor,
                    e = t.isFunction(d) && d.prototype || i,
                    f = "constructor";
                for (t.has(a, f) && !t.contains(b, f) && b.push(f); c--;) f = G[c], f in a && a[f] !== e[f] && !t.contains(b, f) && b.push(f)
            }
            var f = this,
                g = f._,
                h = Array.prototype,
                i = Object.prototype,
                j = Function.prototype,
                k = h.push,
                l = h.slice,
                m = i.toString,
                n = i.hasOwnProperty,
                o = Array.isArray,
                p = Object.keys,
                q = j.bind,
                r = Object.create,
                s = function() {},
                t = function(a) {
                    return a instanceof t ? a : this instanceof t ? void(this._wrapped = a) : new t(a)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = t), exports._ = t) : f._ = t, t.VERSION = "1.8.3";
            var u = function(a, b, c) {
                    if (void 0 === b) return a;
                    switch (null == c ? 3 : c) {
                        case 1:
                            return function(c) {
                                return a.call(b, c)
                            };
                        case 2:
                            return function(c, d) {
                                return a.call(b, c, d)
                            };
                        case 3:
                            return function(c, d, e) {
                                return a.call(b, c, d, e)
                            };
                        case 4:
                            return function(c, d, e, f) {
                                return a.call(b, c, d, e, f)
                            }
                    }
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                v = function(a, b, c) {
                    return null == a ? t.identity : t.isFunction(a) ? u(a, b, c) : t.isObject(a) ? t.matcher(a) : t.property(a)
                };
            t.iteratee = function(a, b) {
                return v(a, b, 1 / 0)
            };
            var w = function(a, b) {
                    return function(c) {
                        var d = arguments.length;
                        if (2 > d || null == c) return c;
                        for (var e = 1; d > e; e++)
                            for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                                var j = g[i];
                                b && void 0 !== c[j] || (c[j] = f[j])
                            }
                        return c
                    }
                },
                x = function(a) {
                    if (!t.isObject(a)) return {};
                    if (r) return r(a);
                    s.prototype = a;
                    var b = new s;
                    return s.prototype = null, b
                },
                y = function(a) {
                    return function(b) {
                        return null == b ? void 0 : b[a]
                    }
                },
                z = Math.pow(2, 53) - 1,
                A = y("length"),
                B = function(a) {
                    var b = A(a);
                    return "number" == typeof b && b >= 0 && z >= b
                };
            t.each = t.forEach = function(a, b, c) {
                b = u(b, c);
                var d, e;
                if (B(a))
                    for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
                else {
                    var f = t.keys(a);
                    for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
                }
                return a
            }, t.map = t.collect = function(a, b, c) {
                b = v(b, c);
                for (var d = !B(a) && t.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
                    var h = d ? d[g] : g;
                    f[g] = b(a[h], h, a)
                }
                return f
            }, t.reduce = t.foldl = t.inject = a(1), t.reduceRight = t.foldr = a(-1), t.find = t.detect = function(a, b, c) {
                var d;
                return d = B(a) ? t.findIndex(a, b, c) : t.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
            }, t.filter = t.select = function(a, b, c) {
                var d = [];
                return b = v(b, c), t.each(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                }), d
            }, t.reject = function(a, b, c) {
                return t.filter(a, t.negate(v(b)), c)
            }, t.every = t.all = function(a, b, c) {
                b = v(b, c);
                for (var d = !B(a) && t.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                    var g = d ? d[f] : f;
                    if (!b(a[g], g, a)) return !1
                }
                return !0
            }, t.some = t.any = function(a, b, c) {
                b = v(b, c);
                for (var d = !B(a) && t.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                    var g = d ? d[f] : f;
                    if (b(a[g], g, a)) return !0
                }
                return !1
            }, t.contains = t.includes = t.include = function(a, b, c, d) {
                return B(a) || (a = t.values(a)), ("number" != typeof c || d) && (c = 0), t.indexOf(a, b, c) >= 0
            }, t.invoke = function(a, b) {
                var c = l.call(arguments, 2),
                    d = t.isFunction(b);
                return t.map(a, function(a) {
                    var e = d ? b : a[b];
                    return null == e ? e : e.apply(a, c)
                })
            }, t.pluck = function(a, b) {
                return t.map(a, t.property(b))
            }, t.where = function(a, b) {
                return t.filter(a, t.matcher(b))
            }, t.findWhere = function(a, b) {
                return t.find(a, t.matcher(b))
            }, t.max = function(a, b, c) {
                var d, e, f = -(1 / 0),
                    g = -(1 / 0);
                if (null == b && null != a) {
                    a = B(a) ? a : t.values(a);
                    for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
                } else b = v(b, c), t.each(a, function(a, c, d) {
                    e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
                });
                return f
            }, t.min = function(a, b, c) {
                var d, e, f = 1 / 0,
                    g = 1 / 0;
                if (null == b && null != a) {
                    a = B(a) ? a : t.values(a);
                    for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
                } else b = v(b, c), t.each(a, function(a, c, d) {
                    e = b(a, c, d), (g > e || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
                });
                return f
            }, t.shuffle = function(a) {
                for (var b, c = B(a) ? a : t.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = t.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
                return e
            }, t.sample = function(a, b, c) {
                return null == b || c ? (B(a) || (a = t.values(a)), a[t.random(a.length - 1)]) : t.shuffle(a).slice(0, Math.max(0, b))
            }, t.sortBy = function(a, b, c) {
                return b = v(b, c), t.pluck(t.map(a, function(a, c, d) {
                    return {
                        value: a,
                        index: c,
                        criteria: b(a, c, d)
                    }
                }).sort(function(a, b) {
                    var c = a.criteria,
                        d = b.criteria;
                    if (c !== d) {
                        if (c > d || void 0 === c) return 1;
                        if (d > c || void 0 === d) return -1
                    }
                    return a.index - b.index
                }), "value")
            };
            var C = function(a) {
                return function(b, c, d) {
                    var e = {};
                    return c = v(c, d), t.each(b, function(d, f) {
                        var g = c(d, f, b);
                        a(e, d, g)
                    }), e
                }
            };
            t.groupBy = C(function(a, b, c) {
                t.has(a, c) ? a[c].push(b) : a[c] = [b]
            }), t.indexBy = C(function(a, b, c) {
                a[c] = b
            }), t.countBy = C(function(a, b, c) {
                t.has(a, c) ? a[c]++ : a[c] = 1
            }), t.toArray = function(a) {
                return a ? t.isArray(a) ? l.call(a) : B(a) ? t.map(a, t.identity) : t.values(a) : []
            }, t.size = function(a) {
                return null == a ? 0 : B(a) ? a.length : t.keys(a).length
            }, t.partition = function(a, b, c) {
                b = v(b, c);
                var d = [],
                    e = [];
                return t.each(a, function(a, c, f) {
                    (b(a, c, f) ? d : e).push(a)
                }), [d, e]
            }, t.first = t.head = t.take = function(a, b, c) {
                return null != a ? null == b || c ? a[0] : t.initial(a, a.length - b) : void 0
            }, t.initial = function(a, b, c) {
                return l.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
            }, t.last = function(a, b, c) {
                return null != a ? null == b || c ? a[a.length - 1] : t.rest(a, Math.max(0, a.length - b)) : void 0
            }, t.rest = t.tail = t.drop = function(a, b, c) {
                return l.call(a, null == b || c ? 1 : b)
            }, t.compact = function(a) {
                return t.filter(a, t.identity)
            };
            var D = function(a, b, c, d) {
                for (var e = [], f = 0, g = d || 0, h = A(a); h > g; g++) {
                    var i = a[g];
                    if (B(i) && (t.isArray(i) || t.isArguments(i))) {
                        b || (i = D(i, b, c));
                        var j = 0,
                            k = i.length;
                        for (e.length += k; k > j;) e[f++] = i[j++]
                    } else c || (e[f++] = i)
                }
                return e
            };
            t.flatten = function(a, b) {
                return D(a, b, !1)
            }, t.without = function(a) {
                return t.difference(a, l.call(arguments, 1))
            }, t.uniq = t.unique = function(a, b, c, d) {
                t.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = v(c, d));
                for (var e = [], f = [], g = 0, h = A(a); h > g; g++) {
                    var i = a[g],
                        j = c ? c(i, g, a) : i;
                    b ? (g && f === j || e.push(i), f = j) : c ? t.contains(f, j) || (f.push(j), e.push(i)) : t.contains(e, i) || e.push(i)
                }
                return e
            }, t.union = function() {
                return t.uniq(D(arguments, !0, !0))
            }, t.intersection = function(a) {
                for (var b = [], c = arguments.length, d = 0, e = A(a); e > d; d++) {
                    var f = a[d];
                    if (!t.contains(b, f)) {
                        for (var g = 1; c > g && t.contains(arguments[g], f); g++);
                        g === c && b.push(f)
                    }
                }
                return b
            }, t.difference = function(a) {
                var b = D(arguments, !0, !0, 1);
                return t.filter(a, function(a) {
                    return !t.contains(b, a)
                })
            }, t.zip = function() {
                return t.unzip(arguments)
            }, t.unzip = function(a) {
                for (var b = a && t.max(a, A).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = t.pluck(a, d);
                return c
            }, t.object = function(a, b) {
                for (var c = {}, d = 0, e = A(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
                return c
            }, t.findIndex = b(1), t.findLastIndex = b(-1), t.sortedIndex = function(a, b, c, d) {
                c = v(c, d, 1);
                for (var e = c(b), f = 0, g = A(a); g > f;) {
                    var h = Math.floor((f + g) / 2);
                    c(a[h]) < e ? f = h + 1 : g = h
                }
                return f
            }, t.indexOf = d(1, t.findIndex, t.sortedIndex), t.lastIndexOf = d(-1, t.findLastIndex), t.range = function(a, b, c) {
                null == b && (b = a || 0, a = 0), c = c || 1;
                for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
                return e
            };
            var E = function(a, b, c, d, e) {
                if (!(d instanceof b)) return a.apply(c, e);
                var f = x(a.prototype),
                    g = a.apply(f, e);
                return t.isObject(g) ? g : f
            };
            t.bind = function(a, b) {
                if (q && a.bind === q) return q.apply(a, l.call(arguments, 1));
                if (!t.isFunction(a)) throw new TypeError("Bind must be called on a function");
                var c = l.call(arguments, 2),
                    d = function() {
                        return E(a, d, b, this, c.concat(l.call(arguments)))
                    };
                return d
            }, t.partial = function(a) {
                var b = l.call(arguments, 1),
                    c = function() {
                        for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === t ? arguments[d++] : b[g];
                        for (; d < arguments.length;) f.push(arguments[d++]);
                        return E(a, c, this, this, f)
                    };
                return c
            }, t.bindAll = function(a) {
                var b, c, d = arguments.length;
                if (1 >= d) throw new Error("bindAll must be passed function names");
                for (b = 1; d > b; b++) c = arguments[b], a[c] = t.bind(a[c], a);
                return a
            }, t.memoize = function(a, b) {
                var c = function(d) {
                    var e = c.cache,
                        f = "" + (b ? b.apply(this, arguments) : d);
                    return t.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
                };
                return c.cache = {}, c
            }, t.delay = function(a, b) {
                var c = l.call(arguments, 2);
                return setTimeout(function() {
                    return a.apply(null, c)
                }, b)
            }, t.defer = t.partial(t.delay, t, 1), t.throttle = function(a, b, c) {
                var d, e, f, g = null,
                    h = 0;
                c || (c = {});
                var i = function() {
                    h = c.leading === !1 ? 0 : t.now(), g = null, f = a.apply(d, e), g || (d = e = null)
                };
                return function() {
                    var j = t.now();
                    h || c.leading !== !1 || (h = j);
                    var k = b - (j - h);
                    return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
                }
            }, t.debounce = function(a, b, c) {
                var d, e, f, g, h, i = function() {
                    var j = t.now() - g;
                    b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
                };
                return function() {
                    f = this, e = arguments, g = t.now();
                    var j = c && !d;
                    return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
                }
            }, t.wrap = function(a, b) {
                return t.partial(b, a)
            }, t.negate = function(a) {
                return function() {
                    return !a.apply(this, arguments)
                }
            }, t.compose = function() {
                var a = arguments,
                    b = a.length - 1;
                return function() {
                    for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
                    return d
                }
            }, t.after = function(a, b) {
                return function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }, t.before = function(a, b) {
                var c;
                return function() {
                    return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
                }
            }, t.once = t.partial(t.before, 2);
            var F = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                G = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            t.keys = function(a) {
                if (!t.isObject(a)) return [];
                if (p) return p(a);
                var b = [];
                for (var c in a) t.has(a, c) && b.push(c);
                return F && e(a, b), b
            }, t.allKeys = function(a) {
                if (!t.isObject(a)) return [];
                var b = [];
                for (var c in a) b.push(c);
                return F && e(a, b), b
            }, t.values = function(a) {
                for (var b = t.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
                return d
            }, t.mapObject = function(a, b, c) {
                b = v(b, c);
                for (var d, e = t.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
                return g
            }, t.pairs = function(a) {
                for (var b = t.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
                return d
            }, t.invert = function(a) {
                for (var b = {}, c = t.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
                return b
            }, t.functions = t.methods = function(a) {
                var b = [];
                for (var c in a) t.isFunction(a[c]) && b.push(c);
                return b.sort()
            }, t.extend = w(t.allKeys), t.extendOwn = t.assign = w(t.keys), t.findKey = function(a, b, c) {
                b = v(b, c);
                for (var d, e = t.keys(a), f = 0, g = e.length; g > f; f++)
                    if (d = e[f], b(a[d], d, a)) return d
            }, t.pick = function(a, b, c) {
                var d, e, f = {},
                    g = a;
                if (null == g) return f;
                t.isFunction(b) ? (e = t.allKeys(g), d = u(b, c)) : (e = D(arguments, !1, !1, 1), d = function(a, b, c) {
                    return b in c
                }, g = Object(g));
                for (var h = 0, i = e.length; i > h; h++) {
                    var j = e[h],
                        k = g[j];
                    d(k, j, g) && (f[j] = k)
                }
                return f
            }, t.omit = function(a, b, c) {
                if (t.isFunction(b)) b = t.negate(b);
                else {
                    var d = t.map(D(arguments, !1, !1, 1), String);
                    b = function(a, b) {
                        return !t.contains(d, b)
                    }
                }
                return t.pick(a, b, c)
            }, t.defaults = w(t.allKeys, !0), t.create = function(a, b) {
                var c = x(a);
                return b && t.extendOwn(c, b), c
            }, t.clone = function(a) {
                return t.isObject(a) ? t.isArray(a) ? a.slice() : t.extend({}, a) : a
            }, t.tap = function(a, b) {
                return b(a), a
            }, t.isMatch = function(a, b) {
                var c = t.keys(b),
                    d = c.length;
                if (null == a) return !d;
                for (var e = Object(a), f = 0; d > f; f++) {
                    var g = c[f];
                    if (b[g] !== e[g] || !(g in e)) return !1
                }
                return !0
            };
            var H = function(a, b, c, d) {
                if (a === b) return 0 !== a || 1 / a === 1 / b;
                if (null == a || null == b) return a === b;
                a instanceof t && (a = a._wrapped), b instanceof t && (b = b._wrapped);
                var e = m.call(a);
                if (e !== m.call(b)) return !1;
                switch (e) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + a == "" + b;
                    case "[object Number]":
                        return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +a === +b
                }
                var f = "[object Array]" === e;
                if (!f) {
                    if ("object" != typeof a || "object" != typeof b) return !1;
                    var g = a.constructor,
                        h = b.constructor;
                    if (g !== h && !(t.isFunction(g) && g instanceof g && t.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
                }
                c = c || [], d = d || [];
                for (var i = c.length; i--;)
                    if (c[i] === a) return d[i] === b;
                if (c.push(a), d.push(b), f) {
                    if (i = a.length, i !== b.length) return !1;
                    for (; i--;)
                        if (!H(a[i], b[i], c, d)) return !1
                } else {
                    var j, k = t.keys(a);
                    if (i = k.length, t.keys(b).length !== i) return !1;
                    for (; i--;)
                        if (j = k[i], !t.has(b, j) || !H(a[j], b[j], c, d)) return !1
                }
                return c.pop(), d.pop(), !0
            };
            t.isEqual = function(a, b) {
                return H(a, b)
            }, t.isEmpty = function(a) {
                return null == a ? !0 : B(a) && (t.isArray(a) || t.isString(a) || t.isArguments(a)) ? 0 === a.length : 0 === t.keys(a).length
            }, t.isElement = function(a) {
                return !(!a || 1 !== a.nodeType)
            }, t.isArray = o || function(a) {
                return "[object Array]" === m.call(a)
            }, t.isObject = function(a) {
                var b = typeof a;
                return "function" === b || "object" === b && !!a
            }, t.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
                t["is" + a] = function(b) {
                    return m.call(b) === "[object " + a + "]"
                }
            }), t.isArguments(arguments) || (t.isArguments = function(a) {
                return t.has(a, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (t.isFunction = function(a) {
                return "function" == typeof a || !1
            }), t.isFinite = function(a) {
                return isFinite(a) && !isNaN(parseFloat(a))
            }, t.isNaN = function(a) {
                return t.isNumber(a) && a !== +a
            }, t.isBoolean = function(a) {
                return a === !0 || a === !1 || "[object Boolean]" === m.call(a)
            }, t.isNull = function(a) {
                return null === a
            }, t.isUndefined = function(a) {
                return void 0 === a
            }, t.has = function(a, b) {
                return null != a && n.call(a, b)
            }, t.noConflict = function() {
                return f._ = g, this
            }, t.identity = function(a) {
                return a
            }, t.constant = function(a) {
                return function() {
                    return a
                }
            }, t.noop = function() {}, t.property = y, t.propertyOf = function(a) {
                return null == a ? function() {} : function(b) {
                    return a[b]
                }
            }, t.matcher = t.matches = function(a) {
                return a = t.extendOwn({}, a),
                    function(b) {
                        return t.isMatch(b, a)
                    }
            }, t.times = function(a, b, c) {
                var d = Array(Math.max(0, a));
                b = u(b, c, 1);
                for (var e = 0; a > e; e++) d[e] = b(e);
                return d
            }, t.random = function(a, b) {
                return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
            }, t.now = Date.now || function() {
                return (new Date).getTime()
            };
            var I = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                J = t.invert(I),
                K = function(a) {
                    var b = function(b) {
                            return a[b]
                        },
                        c = "(?:" + t.keys(a).join("|") + ")",
                        d = RegExp(c),
                        e = RegExp(c, "g");
                    return function(a) {
                        return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
                    }
                };
            t.escape = K(I), t.unescape = K(J), t.result = function(a, b, c) {
                var d = null == a ? void 0 : a[b];
                return void 0 === d && (d = c), t.isFunction(d) ? d.call(a) : d
            };
            var L = 0;
            t.uniqueId = function(a) {
                var b = ++L + "";
                return a ? a + b : b
            }, t.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var M = /(.)^/,
                N = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                O = /\\|'|\r|\n|\u2028|\u2029/g,
                P = function(a) {
                    return "\\" + N[a]
                };
            t.template = function(a, b, c) {
                !b && c && (b = c), b = t.defaults({}, b, t.templateSettings);
                var d = RegExp([(b.escape || M).source, (b.interpolate || M).source, (b.evaluate || M).source].join("|") + "|$", "g"),
                    e = 0,
                    f = "__p+='";
                a.replace(d, function(b, c, d, g, h) {
                    return f += a.slice(e, h).replace(O, P), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
                }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
                try {
                    var g = new Function(b.variable || "obj", "_", f)
                } catch (h) {
                    throw h.source = f, h
                }
                var i = function(a) {
                        return g.call(this, a, t)
                    },
                    j = b.variable || "obj";
                return i.source = "function(" + j + "){\n" + f + "}", i
            }, t.chain = function(a) {
                var b = t(a);
                return b._chain = !0, b
            };
            var Q = function(a, b) {
                return a._chain ? t(b).chain() : b
            };
            t.mixin = function(a) {
                t.each(t.functions(a), function(b) {
                    var c = t[b] = a[b];
                    t.prototype[b] = function() {
                        var a = [this._wrapped];
                        return k.apply(a, arguments), Q(this, c.apply(t, a))
                    }
                })
            }, t.mixin(t), t.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
                var b = h[a];
                t.prototype[a] = function() {
                    var c = this._wrapped;
                    return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], Q(this, c)
                }
            }), t.each(["concat", "join", "slice"], function(a) {
                var b = h[a];
                t.prototype[a] = function() {
                    return Q(this, b.apply(this._wrapped, arguments))
                }
            }), t.prototype.value = function() {
                return this._wrapped
            }, t.prototype.valueOf = t.prototype.toJSON = t.prototype.value, t.prototype.toString = function() {
                return "" + this._wrapped
            }, "function" == typeof c && c.amd && c("underscore", [], function() {
                return t
            })
        }.call(this), c("base/modules/jitRequire", ["jquery", "underscore"], function(b, c) {
            "use strict";

            function d(a, c) {
                return g = c, a.find("[data-require]").toArray().map(function(a) {
                    return e(b(a))
                })
            }

            function e(d) {
                var e = b.Deferred(),
                    f = d.data("module"),
                    g = d.data("require");
                g && 0 != g.length || e.resolve(!1);
                var h = c.debounce(function(a) {
                    e.resolve(a)
                }, 100);
                try {
                    f ? e.resolve(f) : a([g], function(a) {
                        a.init(d), d.data("module", a), h(a)
                    })
                } catch (i) {
                    e.reject(i)
                }
                return e.promise()
            }

            function f(a) {
                return b.when.apply(this, a).done(function() {
                    g && g()
                }), a
            }
            var g = null;
            return {
                findDeps: c.compose(f, d)
            }
        }), window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var a = window.styleMedia || window.media;
            if (!a) {
                var b = document.createElement("style"),
                    c = document.getElementsByTagName("script")[0],
                    d = null;
                b.type = "text/css", b.id = "matchmediajs-test", c.parentNode.insertBefore(b, c), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, a = {
                    matchMedium: function(a) {
                        var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                        return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c, "1px" === d.width
                    }
                }
            }
            return function(b) {
                return {
                    matches: a.matchMedium(b || "all"),
                    media: b || "all"
                }
            }
        }()),
        function(a, b, d) {
            "use strict";

            function e(b) {
                "object" == typeof module && "object" == typeof module.exports ? module.exports = b : "function" == typeof c && c.amd && c("picturefill", [], function() {
                    return b
                }), "object" == typeof a && (a.picturefill = b)
            }

            function f(a) {
                var b, c, d, e, f, g = a || {};
                b = g.elements || h.getAllElements();
                for (var j = 0, k = b.length; k > j; j++)
                    if (c = b[j], d = c.parentNode, e = void 0, f = void 0, "IMG" === c.nodeName.toUpperCase() && (c[h.ns] || (c[h.ns] = {}), g.reevaluate || !c[h.ns].evaluated)) {
                        if (d && "PICTURE" === d.nodeName.toUpperCase()) {
                            if (h.removeVideoShim(d), e = h.getMatch(c, d), e === !1) continue
                        } else e = void 0;
                        (d && "PICTURE" === d.nodeName.toUpperCase() || !h.sizesSupported && c.srcset && i.test(c.srcset)) && h.dodgeSrcset(c), e ? (f = h.processSourceSet(e), h.applyBestCandidate(f, c)) : (f = h.processSourceSet(c), (void 0 === c.srcset || c[h.ns].srcset) && h.applyBestCandidate(f, c)), c[h.ns].evaluated = !0
                    }
            }

            function g() {
                function c() {
                    clearTimeout(d), d = setTimeout(g, 60)
                }
                h.initTypeDetects(), f();
                var d, e = setInterval(function() {
                        return f(), /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(e) : void 0
                    }, 250),
                    g = function() {
                        f({
                            reevaluate: !0
                        })
                    };
                a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
            }
            if (a.HTMLPictureElement) return void e(function() {});
            b.createElement("picture");
            var h = a.picturefill || {},
                i = /\s+\+?\d+(e\d+)?w/;
            h.ns = "picturefill",
                function() {
                    h.srcsetSupported = "srcset" in d, h.sizesSupported = "sizes" in d, h.curSrcSupported = "currentSrc" in d
                }(), h.trim = function(a) {
                    return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                }, h.makeUrl = function() {
                    var a = b.createElement("a");
                    return function(b) {
                        return a.href = b, a.href
                    }
                }(), h.restrictsMixedContent = function() {
                    return "https:" === a.location.protocol
                }, h.matchesMedia = function(b) {
                    return a.matchMedia && a.matchMedia(b).matches
                }, h.getDpr = function() {
                    return a.devicePixelRatio || 1
                }, h.getWidthFromLength = function(a) {
                    var c;
                    if (!a || a.indexOf("%") > -1 != !1 || !(parseFloat(a) > 0 || a.indexOf("calc(") > -1)) return !1;
                    a = a.replace("vw", "%"), h.lengthEl || (h.lengthEl = b.createElement("div"), h.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", h.lengthEl.className = "helper-from-picturefill-js"), h.lengthEl.style.width = "0px";
                    try {
                        h.lengthEl.style.width = a
                    } catch (d) {}
                    return b.body.appendChild(h.lengthEl), c = h.lengthEl.offsetWidth, 0 >= c && (c = !1), b.body.removeChild(h.lengthEl), c
                }, h.detectTypeSupport = function(b, c) {
                    var d = new a.Image;
                    return d.onerror = function() {
                        h.types[b] = !1, f()
                    }, d.onload = function() {
                        h.types[b] = 1 === d.width, f()
                    }, d.src = c, "pending"
                }, h.types = h.types || {}, h.initTypeDetects = function() {
                    h.types["image/jpeg"] = !0, h.types["image/gif"] = !0, h.types["image/png"] = !0, h.types["image/svg+xml"] = b.implementation.hasFeature("/web/20160603003234/http://www.w3.org/TR/SVG11/feature#Image", "1.1"), h.types["image/webp"] = h.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
                }, h.verifyTypeSupport = function(a) {
                    var b = a.getAttribute("type");
                    if (null === b || "" === b) return !0;
                    var c = h.types[b];
                    return "string" == typeof c && "pending" !== c ? (h.types[b] = h.detectTypeSupport(b, c), "pending") : "function" == typeof c ? (c(), "pending") : c
                }, h.parseSize = function(a) {
                    var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
                    return {
                        media: b && b[1],
                        length: b && b[2]
                    }
                }, h.findWidthFromSourceSize = function(c) {
                    for (var d, e = h.trim(c).split(/\s*,\s*/), f = 0, g = e.length; g > f; f++) {
                        var i = e[f],
                            j = h.parseSize(i),
                            k = j.length,
                            l = j.media;
                        if (k && (!l || h.matchesMedia(l)) && (d = h.getWidthFromLength(k))) break
                    }
                    return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth)
                }, h.parseSrcset = function(a) {
                    for (var b = [];
                        "" !== a;) {
                        a = a.replace(/^\s+/g, "");
                        var c, d = a.search(/\s/g),
                            e = null;
                        if (-1 !== d) {
                            c = a.slice(0, d);
                            var f = c.slice(-1);
                            if ("," !== f && "" !== c || (c = c.replace(/,+$/, ""), e = ""), a = a.slice(d + 1), null === e) {
                                var g = a.indexOf(","); - 1 !== g ? (e = a.slice(0, g), a = a.slice(g + 1)) : (e = a, a = "")
                            }
                        } else c = a, a = "";
                        (c || e) && b.push({
                            url: c,
                            descriptor: e
                        })
                    }
                    return b
                }, h.parseDescriptor = function(a, b) {
                    var c, d = b || "100vw",
                        e = a && a.replace(/(^\s+|\s+$)/g, ""),
                        f = h.findWidthFromSourceSize(d);
                    if (e)
                        for (var g = e.split(" "), i = g.length - 1; i >= 0; i--) {
                            var j = g[i],
                                k = j && j.slice(j.length - 1);
                            if ("h" !== k && "w" !== k || h.sizesSupported) {
                                if ("x" === k) {
                                    var l = j && parseFloat(j, 10);
                                    c = l && !isNaN(l) ? l : 1
                                }
                            } else c = parseFloat(parseInt(j, 10) / f)
                        }
                    return c || 1
                }, h.getCandidatesFromSourceSet = function(a, b) {
                    for (var c = h.parseSrcset(a), d = [], e = 0, f = c.length; f > e; e++) {
                        var g = c[e];
                        d.push({
                            url: g.url,
                            resolution: h.parseDescriptor(g.descriptor, b)
                        })
                    }
                    return d
                }, h.dodgeSrcset = function(a) {
                    a.srcset && (a[h.ns].srcset = a.srcset, a.srcset = "", a.setAttribute("data-pfsrcset", a[h.ns].srcset))
                }, h.processSourceSet = function(a) {
                    var b = a.getAttribute("srcset"),
                        c = a.getAttribute("sizes"),
                        d = [];
                    return "IMG" === a.nodeName.toUpperCase() && a[h.ns] && a[h.ns].srcset && (b = a[h.ns].srcset), b && (d = h.getCandidatesFromSourceSet(b, c)), d
                }, h.backfaceVisibilityFix = function(a) {
                    var b = a.style || {},
                        c = "webkitBackfaceVisibility" in b,
                        d = b.zoom;
                    c && (b.zoom = ".999", c = a.offsetWidth, b.zoom = d)
                }, h.setIntrinsicSize = function() {
                    var c = {},
                        d = function(a, b, c) {
                            b && a.setAttribute("width", parseInt(b / c, 10))
                        };
                    return function(e, f) {
                        var g;
                        e[h.ns] && !a.pfStopIntrinsicSize && (void 0 === e[h.ns].dims && (e[h.ns].dims = e.getAttribute("width") || e.getAttribute("height")), e[h.ns].dims || (f.url in c ? d(e, c[f.url], f.resolution) : (g = b.createElement("img"), g.onload = function() {
                            if (c[f.url] = g.width, !c[f.url]) try {
                                b.body.appendChild(g), c[f.url] = g.width || g.offsetWidth, b.body.removeChild(g)
                            } catch (a) {}
                            e.src === f.url && d(e, c[f.url], f.resolution), e = null, g.onload = null, g = null
                        }, g.src = f.url)))
                    }
                }(), h.applyBestCandidate = function(a, b) {
                    var c, d, e;
                    a.sort(h.ascendingSort), d = a.length, e = a[d - 1];
                    for (var f = 0; d > f; f++)
                        if (c = a[f], c.resolution >= h.getDpr()) {
                            e = c;
                            break
                        }
                    e && (e.url = h.makeUrl(e.url), b.src !== e.url && (h.restrictsMixedContent() && "http:" === e.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console : (b.src = e.url, h.curSrcSupported || (b.currentSrc = b.src), h.backfaceVisibilityFix(b))), h.setIntrinsicSize(b, e))
                }, h.ascendingSort = function(a, b) {
                    return a.resolution - b.resolution
                }, h.removeVideoShim = function(a) {
                    var b = a.getElementsByTagName("video");
                    if (b.length) {
                        for (var c = b[0], d = c.getElementsByTagName("source"); d.length;) a.insertBefore(d[0], c);
                        c.parentNode.removeChild(c)
                    }
                }, h.getAllElements = function() {
                    for (var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length; e > d; d++) {
                        var f = c[d];
                        ("PICTURE" === f.parentNode.nodeName.toUpperCase() || null !== f.getAttribute("srcset") || f[h.ns] && null !== f[h.ns].srcset) && a.push(f)
                    }
                    return a
                }, h.getMatch = function(a, b) {
                    for (var c, d = b.childNodes, e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        if (1 === g.nodeType) {
                            if (g === a) return c;
                            if ("SOURCE" === g.nodeName.toUpperCase()) {
                                null !== g.getAttribute("src") && void 0 !== typeof console;
                                var i = g.getAttribute("media");
                                if (g.getAttribute("srcset") && (!i || h.matchesMedia(i))) {
                                    var j = h.verifyTypeSupport(g);
                                    if (j === !0) {
                                        c = g;
                                        break
                                    }
                                    if ("pending" === j) return !1
                                }
                            }
                        }
                    }
                    return c
                }, g(), f._ = h, e(f)
        }(window, window.document, new window.Image), c("lib/picturefill", function() {}), c("main", ["jquery", "underscore", "base/modules/jitRequire", "lib/picturefill"], function(a, b, c) {
            "use strict";
            c.findDeps(a(document))
        }), c("base/page-scroll", ["jquery", "underscore"], function(a, b) {
            "use strict";

            function c() {
                a(window).on("scroll", function(a) {
                    g && (g = !1, d())
                })
            }

            function d() {
                for (var b = a(window).scrollTop(), c = 0; c < f.length; c++) f[c](b);
                g = !0
            }
            var e = !1,
                f = new Array,
                g = !0;
            return {
                init: function() {
                    e || (e = !0, c())
                },
                addCallback: function(a) {
                    a && f.push(a)
                },
                removeCallback: function(a) {
                    if (a)
                        for (var b = 0; b < f.length; b++)
                            if (f[b] == a) return void f.splice(b, 1)
                }
            }
        }),
        function(a, b) {
            a("vendor/mobile-detect", [], function() {
                "use strict";

                function a(a) {
                    for (var b in a) o.call(a, b) && (a[b] = new RegExp(a[b], "i"))
                }

                function c(a, b) {
                    for (var c in a)
                        if (o.call(a, c) && a[c].test(b)) return c;
                    return null
                }

                function d(a, b) {
                    var c, d, e, f, g = m.props;
                    if (o.call(g, a))
                        for (c = g[a], e = c.length, d = 0; e > d; ++d)
                            if (f = c[d].exec(b), null !== f) return f[1];
                    return null
                }

                function e(a, b) {
                    var c = d(a, b);
                    return c ? f(c) : NaN
                }

                function f(a) {
                    var b;
                    return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a)
                }

                function g(a, b) {
                    return null != a && null != b && a.toLowerCase() === b.toLowerCase()
                }

                function h(a) {
                    return n.fullPattern.test(a) || n.shortPattern.test(a.substr(0, 4))
                }

                function i(a, d, e) {
                    if (a.mobile === b) {
                        var f, g, i;
                        return (g = c(m.tablets, d)) ? (a.mobile = a.tablet = g, void(a.phone = null)) : (f = c(m.phones, d)) ? (a.mobile = a.phone = f, void(a.tablet = null)) : void(h(d) ? (i = k.isPhoneSized(e), i === b ? a.mobile = a.tablet = a.phone = r : i ? (a.mobile = a.phone = p, a.tablet = null) : (a.mobile = a.tablet = q, a.phone = null)) : a.mobile = a.tablet = a.phone = null)
                    }
                }

                function j(a) {
                    var b = null !== a.mobile();
                    return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C")
                }

                function k(a, b) {
                    this.ua = a || "", this._cache = {}, this.maxPhoneWidth = b || 650
                }
                var l, m = {
                        phones: {
                            iPhone: "\\biPhone\\b|\\biPod\\b",
                            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
                            Samsung: "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750",
                            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            Asus: "Asus.*Galaxy|PadFone.*Mobile",
                            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            Palm: "PalmSource|Palm",
                            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            Alcatel: "Alcatel",
                            Nintendo: "Nintendo 3DS",
                            Amoi: "Amoi",
                            INQ: "INQ",
                            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        tablets: {
                            iPad: "iPad|iPad.*Mobile",
                            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
                            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T707A|SM-T807A|SM-T237P|SM-T807P|SM-P607T|SM-T217T|SM-T337T",
                            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG",
                            BlackBerryTablet: "PlayBook|RIM Tablet",
                            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b",
                            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
                            LenovoTablet: "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            IRUTablet: "M702pro",
                            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551",
                            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            FlyTablet: "IQ310|Fly Vision",
                            bqTablet: "bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",
                            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                            NecTablet: "\\bN-06D|\\bN-08D",
                            PantechTablet: "Pantech.*P4100",
                            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            NabiTablet: "Android.*\\bNabi",
                            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            PlaystationTablet: "Playstation.*(Portable|Vita)",
                            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            GalapadTablet: "Android.*\\bG1\\b",
                            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            DPSTablet: "DPS Dream 9|DPS Dual 7",
                            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            iMobileTablet: "i-mobile i-note",
                            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            AMPETablet: "Android.* A78 ",
                            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            TecnoTablet: "TECNO P9",
                            JXDTablet: "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            FX2Tablet: "FX2 PAD7|FX2 PAD10",
                            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            CaptivaTablet: "CAPTIVA PAD",
                            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            JaytechTablet: "TPC-PA762",
                            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY",
                            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            UbislateTablet: "UbiSlate[\\s]?7C",
                            PocketBookTablet: "Pocketbook",
                            Hudl: "Hudl HT7S3",
                            TelstraTablet: "T-Hub2",
                            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b"
                        },
                        oss: {
                            AndroidOS: "Android",
                            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                            WindowsPhoneOS: "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                            MeeGoOS: "MeeGo",
                            MaemoOS: "Maemo",
                            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            webOS: "webOS|hpwOS",
                            badaOS: "\\bBada\\b",
                            BREWOS: "BREW"
                        },
                        uas: {
                            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            Dolfin: "\\bDolfin\\b",
                            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                            Skyfire: "Skyfire",
                            IE: "IEMobile|MSIEMobile",
                            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                            Bolt: "bolt",
                            TeaShark: "teashark",
                            Blazer: "Blazer",
                            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            Tizen: "Tizen",
                            UCBrowser: "UC.*Browser|UCWEB",
                            baiduboxapp: "baiduboxapp",
                            baidubrowser: "baidubrowser",
                            DiigoBrowser: "DiigoBrowser",
                            Puffin: "Puffin",
                            Mercury: "\\bMercury\\b",
                            ObigoBrowser: "Obigo",
                            NetFront: "NF-Browser",
                            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
                        },
                        props: {
                            Mobile: "Mobile/[VER]",
                            Build: "Build/[VER]",
                            Version: "Version/[VER]",
                            VendorID: "VendorID/[VER]",
                            iPad: "iPad.*CPU[a-z ]+[VER]",
                            iPhone: "iPhone.*CPU[a-z ]+[VER]",
                            iPod: "iPod.*CPU[a-z ]+[VER]",
                            Kindle: "Kindle/[VER]",
                            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            Coast: ["Coast/[VER]"],
                            Dolfin: "Dolfin/[VER]",
                            Firefox: "Firefox/[VER]",
                            Fennec: "Fennec/[VER]",
                            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];"],
                            NetFront: "NetFront/[VER]",
                            NokiaBrowser: "NokiaBrowser/[VER]",
                            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            "UC Browser": "UC Browser[VER]",
                            MQQBrowser: "MQQBrowser/[VER]",
                            MicroMessenger: "MicroMessenger/[VER]",
                            baiduboxapp: "baiduboxapp/[VER]",
                            baidubrowser: "baidubrowser/[VER]",
                            Iron: "Iron/[VER]",
                            Safari: ["Version/[VER]", "Safari/[VER]"],
                            Skyfire: "Skyfire/[VER]",
                            Tizen: "Tizen/[VER]",
                            Webkit: "webkit[ /][VER]",
                            Gecko: "Gecko/[VER]",
                            Trident: "Trident/[VER]",
                            Presto: "Presto/[VER]",
                            iOS: " \\bOS\\b [VER] ",
                            Android: "Android [VER]",
                            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            BREW: "BREW [VER]",
                            Java: "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        utils: {
                            DesktopMode: "WPDesktop",
                            TV: "SonyDTV|HbbTV",
                            WebKit: "(webkit)[ /]([\\w.]+)",
                            Bot: "Googlebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",
                            MobileBot: "Googlebot-Mobile|YahooSeeker/M1A1-R2D2",
                            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                            Watch: "SM-V700"
                        }
                    },
                    n = {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    },
                    o = Object.prototype.hasOwnProperty,
                    p = "UnknownPhone",
                    q = "UnknownTablet",
                    r = "UnknownMobile";
                return l = "isArray" in Array ? Array.isArray : function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    function() {
                        var b, c, d, e, f, g;
                        for (b in m.props)
                            if (o.call(m.props, b)) {
                                for (c = m.props[b], l(c) || (c = [c]), f = c.length, e = 0; f > e; ++e) d = c[e], g = d.indexOf("[VER]"), g >= 0 && (d = d.substring(0, g) + "([\\w._\\+]+)" + d.substring(g + 5)), c[e] = new RegExp(d, "i");
                                m.props[b] = c
                            }
                        a(m.oss), a(m.phones), a(m.tablets), a(m.uas), a(m.utils), m.oss0 = {
                            WindowsPhoneOS: m.oss.WindowsPhoneOS,
                            WindowsMobileOS: m.oss.WindowsMobileOS
                        }
                    }(), k.prototype = {
                        constructor: k,
                        mobile: function() {
                            return i(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                        },
                        phone: function() {
                            return i(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                        },
                        tablet: function() {
                            return i(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                        },
                        userAgent: function() {
                            return this._cache.userAgent === b && (this._cache.userAgent = c(m.uas, this.ua)), this._cache.userAgent
                        },
                        os: function() {
                            return this._cache.os === b && (this._cache.os = c(m.oss0, this.ua) || c(m.oss, this.ua)), this._cache.os
                        },
                        version: function(a) {
                            return e(a, this.ua)
                        },
                        versionStr: function(a) {
                            return d(a, this.ua)
                        },
                        is: function(a) {
                            return g(a, this.userAgent()) || g(a, this.os()) || g(a, this.phone()) || g(a, this.tablet()) || g(a, c(m.utils, this.ua))
                        },
                        match: function(a) {
                            return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua)
                        },
                        isPhoneSized: function(a) {
                            return k.isPhoneSized(a || this.maxPhoneWidth)
                        },
                        mobileGrade: function() {
                            return this._cache.grade === b && (this._cache.grade = j(this)), this._cache.grade
                        }
                    }, "undefined" != typeof window && window.screen && window.screen.width ? k.isPhoneSized = function(a) {
                        if (0 > a) return b;
                        var c = window.screen.width,
                            d = window.devicePixelRatio || 1,
                            e = c / d;
                        return a >= e
                    } : k.isPhoneSized = function() {}, k
            })
        }(function(a) {
            if ("function" == typeof c && c.amd) return c;
            if ("undefined" != typeof module && module.exports) return function(a) {
                module.exports = a()
            };
            if ("undefined" != typeof window) return function(a) {
                window.MobileDetect = a()
            };
            throw new Error("unknown environment")
        }()), c("base/page-scroll-animation", ["jquery", "underscore", "base/page-scroll", "vendor/mobile-detect"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                if (a) {
                    for (var b = a.find(f), d = 0; d < b.length; d++) b.eq(d).hasClass(g) && b.eq(d).offset().top < h && b.eq(d).removeClass(g);
                    c.addCallback(function(a) {
                        for (var c = 0; c < b.length; c++) b.eq(c).hasClass(g) && b.eq(c).offset().top < a + h - i && b.eq(c).removeClass(g)
                    })
                }
            }
            c.init();
            var f = ".checking-animate",
                g = "inactive",
                h = a(window).height(),
                i = 100,
                j = new d(window.navigator.userAgent);
            return {
                init: function(a) {
                    if (!j.mobile()) return new e(a);
                    for (var b = a.find(f), c = 0; c < b.length; c++) b.eq(c).hasClass(g) && b.eq(c).removeClass(g)
                }
            }
        }),
        function(a) {
            a.fn.countTo = function(b) {
                b = a.extend({}, a.fn.countTo.defaults, b || {});
                var c = Math.ceil(b.speed / b.refreshInterval),
                    d = (b.to - b.from) / c;
                return a(this).each(function() {
                    function e() {
                        h += d, g++, a(f).html(h.toFixed(b.decimals)), "function" == typeof b.onUpdate && b.onUpdate.call(f, h), g >= c && (clearInterval(i), h = b.to, "function" == typeof b.onComplete && b.onComplete.call(f, h))
                    }
                    var f = this,
                        g = 0,
                        h = b.from,
                        i = setInterval(e, b.refreshInterval)
                })
            }, a.fn.countTo.defaults = {
                from: 0,
                to: 100,
                speed: 1e3,
                refreshInterval: 100,
                decimals: 0,
                onUpdate: null,
                onComplete: null
            }
        }(jQuery), c("base/count-up", function() {}), c("base/about-us-page", ["jquery", "underscore", "base/page-scroll-animation", "base/page-scroll", "base/count-up"], function(a, b, c, d) {
            "use strict";

            function e(b) {
                c.init(b);
                var e = a(window).height(),
                    h = 200;
                g = b.find(".record-number"), d.addCallback(function(a) {
                    !g.hasClass("counted") && g.find(".container").offset().top < a + e - h && (g.addClass("counted"), f())
                })
            }

            function f() {
                g.find(".statistic-number").each(function() {
                    a(this).countTo({
                        from: 0,
                        to: a(this).attr("data-count"),
                        speed: 2e3,
                        refreshInterval: 100,
                        onComplete: function(a) {}
                    })
                })
            }
            var g = null;
            return {
                init: function(a) {
                    e(a)
                }
            }
        }), c("base/bg-cover", ["jquery", "underscore"], function(a, b) {
            "use strict";

            function c(a) {
                var b = new d(a);
                b.changeImageCover(), $win.on("resize", b.changeImageCover), $win.on("orientationchange", b.changeImageCover)
            }

            function d(a) {
                this.changeImageCover = function() {
                    $win.width()
                }
            }
            return $win = a(window), breakpoints = {
                small: 480,
                medium: 640,
                large: 1024,
                xlarge: 1200,
                xxlarge: 1900
            }, {
                init: c
            }
        }),
        function(a) {
            function b() {
                var a = location.href;
                return hashtag = -1 !== a.indexOf("#prettyPhoto") ? decodeURI(a.substring(a.indexOf("#prettyPhoto") + 1, a.length)) : !1, hashtag
            }

            function c() {
                "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
            }

            function e() {
                -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
            }

            function f(a, b) {
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var c = "[\\?&]" + a + "=([^&#]*)",
                    d = new RegExp(c),
                    e = d.exec(b);
                return null == e ? "" : e[1]
            }
            a.prettyPhoto = {
                version: "3.1.5"
            }, a.fn.prettyPhoto = function(g) {
                function h() {
                    a(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (B / 2 - s.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                        height: s.contentHeight,
                        width: s.contentWidth
                    }, settings.animation_speed), $pp_pic_holder.animate({
                        top: projectedTop,
                        left: C / 2 - s.containerWidth / 2 < 0 ? 0 : C / 2 - s.containerWidth / 2,
                        width: s.containerWidth
                    }, settings.animation_speed, function() {
                        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(s.height).width(s.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == m(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (s.resized ? a("a.pp_expand,a.pp_contract").show() : a("a.pp_expand").hide()), !settings.autoplay_slideshow || y || t || a.prettyPhoto.startSlideshow(), settings.changepicturecallback(), t = !0
                    }), q(), g.ajaxcallback()
                }

                function i(b) {
                    $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                        a(".pp_loaderIcon").show(), b()
                    })
                }

                function j(b) {
                    b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide()
                }

                function k(a, b) {
                    if (resized = !1, l(a, b), imageWidth = a, imageHeight = b, (x > C || w > B) && doresize && settings.allow_resize && !A) {
                        for (resized = !0, fitting = !1; !fitting;) x > C ? (imageWidth = C - 200, imageHeight = b / a * imageWidth) : w > B ? (imageHeight = B - 200, imageWidth = a / b * imageHeight) : fitting = !0, w = imageHeight, x = imageWidth;
                        (x > C || w > B) && k(x, w), l(imageWidth, imageHeight)
                    }
                    return {
                        width: Math.floor(imageWidth),
                        height: Math.floor(imageHeight),
                        containerHeight: Math.floor(w),
                        containerWidth: Math.floor(x) + 2 * settings.horizontal_padding,
                        contentHeight: Math.floor(u),
                        contentWidth: Math.floor(v),
                        resized: resized
                    }
                }

                function l(b, c) {
                    b = parseFloat(b), c = parseFloat(c), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(b), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                        position: "absolute",
                        top: -1e4
                    }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(b), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(a("body")).css({
                        position: "absolute",
                        top: -1e4
                    }), titleHeight += $pp_title.height(), $pp_title.remove(), u = c + detailsHeight, v = b, w = u + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), x = b
                }

                function m(a) {
                    return a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image"
                }

                function n() {
                    if (doresize && "undefined" != typeof $pp_pic_holder) {
                        if (scroll_pos = o(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = B / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > B) return;
                        $pp_pic_holder.css({
                            top: projectedTop,
                            left: C / 2 + scroll_pos.scrollLeft - contentwidth / 2
                        })
                    }
                }

                function o() {
                    return self.pageYOffset ? {
                        scrollTop: self.pageYOffset,
                        scrollLeft: self.pageXOffset
                    } : document.documentElement && document.documentElement.scrollTop ? {
                        scrollTop: document.documentElement.scrollTop,
                        scrollLeft: document.documentElement.scrollLeft
                    } : document.body ? {
                        scrollTop: document.body.scrollTop,
                        scrollLeft: document.body.scrollLeft
                    } : void 0
                }

                function p() {
                    B = a(window).height(), C = a(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(a(document).height()).width(C)
                }

                function q() {
                    isSet && settings.overlay_gallery && "image" == m(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((s.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, a.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
                }

                function r(b) {
                    if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), a("body").append(settings.markup), $pp_pic_holder = a(".pp_pic_holder"), $ppt = a(".ppt"), $pp_overlay = a("div.pp_overlay"), isSet && settings.overlay_gallery) {
                        currentGalleryPage = 0, toInject = "";
                        for (var c = 0; c < pp_images.length; c++) pp_images[c].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[c]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = a(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                            return a.prettyPhoto.changeGalleryPage("next"), a.prettyPhoto.stopSlideshow(), !1
                        }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                            return a.prettyPhoto.changeGalleryPage("previous"), a.prettyPhoto.stopSlideshow(), !1
                        }), $pp_pic_holder.find(".pp_content").hover(function() {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                        }, function() {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                        }), itemWidth = 57, $pp_gallery_li.each(function(b) {
                            a(this).find("a").click(function() {
                                return a.prettyPhoto.changePage(b), a.prettyPhoto.stopSlideshow(), !1
                            })
                        })
                    }
                    settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                        return a.prettyPhoto.startSlideshow(), !1
                    })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                        opacity: 0,
                        height: a(document).height(),
                        width: a(window).width()
                    }).bind("click", function() {
                        settings.modal || a.prettyPhoto.close()
                    }), a("a.pp_close").bind("click", function() {
                        return a.prettyPhoto.close(), !1
                    }), settings.allow_expand && a("a.pp_expand").bind("click", function(b) {
                        return a(this).hasClass("pp_expand") ? (a(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (a(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), i(function() {
                            a.prettyPhoto.open()
                        }), !1
                    }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                        return a.prettyPhoto.changePage("previous"), a.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                        return a.prettyPhoto.changePage("next"), a.prettyPhoto.stopSlideshow(), !1
                    }), n()
                }
                g = jQuery.extend({
                    hook: "rel",
                    animation_speed: "fast",
                    ajaxcallback: function() {},
                    slideshow: 5e3,
                    autoplay_slideshow: !1,
                    opacity: .8,
                    show_title: !0,
                    allow_resize: !0,
                    allow_expand: !0,
                    default_width: 500,
                    default_height: 344,
                    counter_separator_label: "/",
                    theme: "pp_default",
                    horizontal_padding: 20,
                    hideflash: !1,
                    wmode: "opaque",
                    autoplay: !0,
                    modal: !1,
                    deeplinking: !0,
                    overlay_gallery: !0,
                    overlay_gallery_max: 30,
                    keyboard_shortcuts: !0,
                    changepicturecallback: function() {},
                    callback: function() {},
                    ie6_fallback: !0,
                    markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
                    gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
                    image_markup: '<img id="fullResImage" src="{path}" />',
                    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="/web/20160603003234/http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="/web/20160603003234/http://www.apple.com/quicktime/download/"></embed></object>',
                    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                    inline_markup: '<div class="pp_inline">{content}</div>',
                    custom_markup: ""
                }, g);
                var s, t, u, v, w, x, y, z = this,
                    A = !1,
                    B = a(window).height(),
                    C = a(window).width();
                return doresize = !0, scroll_pos = o(), a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                    n(), p()
                }), g.keyboard_shortcuts && a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(b) {
                    if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (b.keyCode) {
                        case 37:
                            a.prettyPhoto.changePage("previous"), b.preventDefault();
                            break;
                        case 39:
                            a.prettyPhoto.changePage("next"), b.preventDefault();
                            break;
                        case 27:
                            settings.modal || a.prettyPhoto.close(), b.preventDefault()
                    }
                }), a.prettyPhoto.initialize = function() {
                    return settings = g, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = a(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(z, function(b, c) {
                        return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("href") : void 0
                    }) : a.makeArray(a(this).attr("href")), pp_titles = isSet ? jQuery.map(z, function(b, c) {
                        return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : "" : void 0
                    }) : a.makeArray(a(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(z, function(b, c) {
                        return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("title") ? a(b).attr("title") : "" : void 0
                    }) : a.makeArray(a(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(a(this).attr("href"), pp_images), rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this)), r(this), settings.allow_resize && a(window).bind("scroll.prettyphoto", function() {
                        n()
                    }), a.prettyPhoto.open(), !1
                }, a.prettyPhoto.open = function(b) {
                    return "undefined" == typeof settings && (settings = g, pp_images = a.makeArray(arguments[0]), pp_titles = arguments[1] ? a.makeArray(arguments[1]) : a.makeArray(""), pp_descriptions = arguments[2] ? a.makeArray(arguments[2]) : a.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, r(b.target)), settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), j(a(pp_images).size()), a(".pp_loaderIcon").show(), settings.deeplinking && c(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(f("width", pp_images[set_position])) ? f("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(f("height", pp_images[set_position])) ? f("height", pp_images[set_position]) : settings.default_height.toString(), A = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150), A = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150), A = !0), $pp_pic_holder.fadeIn(function() {
                        switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, m(pp_images[set_position])) {
                            case "image":
                                imgPreloader = new Image, nextImage = new Image, isSet && set_position < a(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                    s = k(imgPreloader.width, imgPreloader.height), h()
                                }, imgPreloader.onerror = function() {
                                    alert("Image cannot be loaded. Make sure the path is correct and image exist."), a.prettyPhoto.close()
                                }, imgPreloader.src = pp_images[set_position];
                                break;
                            case "youtube":
                                s = k(movie_width, movie_height), movie_id = f("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "/web/20160603003234/http://www.youtube.com/embed/" + movie_id, f("rel", pp_images[set_position]) ? movie += "?rel=" + f("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, s.width).replace(/{height}/g, s.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                                break;
                            case "vimeo":
                                s = k(movie_width, movie_height), movie_id = pp_images[set_position];
                                var b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                                    c = movie_id.match(b);
                                movie = "/web/20160603003234/http://player.vimeo.com/video/" + c[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = s.width + "/embed/?moog_width=" + s.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, s.height).replace(/{path}/g, movie);
                                break;
                            case "quicktime":
                                s = k(movie_width, movie_height), s.height += 15, s.contentHeight += 15, s.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, s.width).replace(/{height}/g, s.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                                break;
                            case "flash":
                                s = k(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, s.width).replace(/{height}/g, s.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                                break;
                            case "iframe":
                                s = k(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, s.width).replace(/{height}/g, s.height).replace(/{path}/g, frame_url);
                                break;
                            case "ajax":
                                doresize = !1, s = k(movie_width, movie_height), doresize = !0, skipInjection = !0, a.get(pp_images[set_position], function(a) {
                                    toInject = settings.inline_markup.replace(/{content}/g, a), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, h()
                                });
                                break;
                            case "custom":
                                s = k(movie_width, movie_height), toInject = settings.custom_markup;
                                break;
                            case "inline":
                                myClone = a(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                    width: settings.default_width
                                }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(), doresize = !1, s = k(a(myClone).width(), a(myClone).height()), doresize = !0, a(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html())
                        }
                        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, h())
                    }), !1
                }, a.prettyPhoto.changePage = function(b) {
                    currentGalleryPage = 0, "previous" == b ? (set_position--, set_position < 0 && (set_position = a(pp_images).size() - 1)) : "next" == b ? (set_position++, set_position > a(pp_images).size() - 1 && (set_position = 0)) : set_position = b, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), i(function() {
                        a.prettyPhoto.open()
                    })
                }, a.prettyPhoto.changeGalleryPage = function(a) {
                    "next" == a ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == a ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = a, slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                        left: -slide_to
                    }, slide_speed)
                }, a.prettyPhoto.startSlideshow = function() {
                    "undefined" == typeof y ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                        return a.prettyPhoto.stopSlideshow(), !1
                    }), y = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)) : a.prettyPhoto.changePage("next")
                }, a.prettyPhoto.stopSlideshow = function() {
                    $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                        return a.prettyPhoto.startSlideshow(), !1
                    }), clearInterval(y), y = void 0
                }, a.prettyPhoto.close = function() {
                    $pp_overlay.is(":animated") || (a.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                        a(this).remove()
                    }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                        settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), a(this).remove(), a(window).unbind("scroll.prettyphoto"), e(), settings.callback(), doresize = !0, t = !1, delete settings
                    }))
                }, !d && b() && (d = !0, hashIndex = b(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                    a("a[" + g.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
                }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize)
            }
        }(jQuery);
    var d = !1;
    c("lib/jquery.prettyPhoto", ["jquery"], function() {}), c("base/button-prettyphoto", ["jquery", "lib/jquery.prettyPhoto", "vendor/mobile-detect"], function(a, b, c) {
            "use strict";

            function d(b) {
                a("#product-features-img").hover(function() {
                    a(this).find("img").attr("src", "/img/product-features-hover.png")
                }, function() {
                    a(this).find("img").attr("src", "/img/product-features.png")
                });
                var c = a(window).width(),
                    d = (a(window).height(), .8 * c),
                    f = .6 * d;
                e.mobile() ? a("a[rel^='prettyPhoto']").prettyPhoto({
                    social_tools: !1,
                    deeplinking: !1,
                    animation_speed: "normal",
                    theme: "pp_default",
                    slideshow: 3e3,
                    autoplay_slideshow: !1,
                    allow_resize: !0,
                    default_width: d,
                    default_height: f
                }) : a("a[rel^='prettyPhoto']").prettyPhoto({
                    social_tools: !1,
                    deeplinking: !1,
                    animation_speed: "normal",
                    theme: "pp_default",
                    slideshow: 3e3,
                    autoplay_slideshow: !1,
                    allow_resize: !0,
                    default_width: 800,
                    default_height: 600
                })
            }
            var e = new c(window.navigator.userAgent);
            return {
                init: d
            }
        }),
        function(a) {
            function b(a) {
                var b = a.length,
                    d = c.type(a);
                return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
            }
            if (!a.jQuery) {
                var c = function(a, b) {
                    return new c.fn.init(a, b)
                };
                c.isWindow = function(a) {
                    return null != a && a == a.window
                }, c.type = function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
                }, c.isArray = Array.isArray || function(a) {
                    return "array" === c.type(a)
                }, c.isPlainObject = function(a) {
                    var b;
                    if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (d) {
                        return !1
                    }
                    for (b in a);
                    return void 0 === b || f.call(a, b)
                }, c.each = function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        h = b(a);
                    if (d) {
                        if (h)
                            for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                        else
                            for (f in a)
                                if (e = c.apply(a[f], d), e === !1) break
                    } else if (h)
                        for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = c.call(a[f], f, a[f]), e === !1) break; return a
                }, c.data = function(a, b, e) {
                    if (void 0 === e) {
                        var f = a[c.expando],
                            g = f && d[f];
                        if (void 0 === b) return g;
                        if (g && b in g) return g[b]
                    } else if (void 0 !== b) {
                        var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                        return d[f] = d[f] || {}, d[f][b] = e, e
                    }
                }, c.removeData = function(a, b) {
                    var e = a[c.expando],
                        f = e && d[e];
                    f && c.each(b, function(a, b) {
                        delete f[b]
                    })
                }, c.extend = function() {
                    var a, b, d, e, f, g, h = arguments[0] || {},
                        i = 1,
                        j = arguments.length,
                        k = !1;
                    for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                        if (null != (f = arguments[i]))
                            for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
                    return h
                }, c.queue = function(a, d, e) {
                    function f(a, c) {
                        var d = c || [];
                        return null != a && (b(Object(a)) ? ! function(a, b) {
                            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                            if (c !== c)
                                for (; void 0 !== b[d];) a[e++] = b[d++];
                            return a.length = e, a
                        }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
                    }
                    if (a) {
                        d = (d || "fx") + "queue";
                        var g = c.data(a, d);
                        return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
                    }
                }, c.dequeue = function(a, b) {
                    c.each(a.nodeType ? [a] : a, function(a, d) {
                        b = b || "fx";
                        var e = c.queue(d, b),
                            f = e.shift();
                        "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                            c.dequeue(d, b)
                        }))
                    })
                }, c.fn = c.prototype = {
                    init: function(a) {
                        if (a.nodeType) return this[0] = a, this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        function a() {
                            for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                            return a || document
                        }
                        var b = this[0],
                            a = a.apply(b),
                            d = this.offset(),
                            e = /^(?:body|html)$/i.test(a.nodeName) ? {
                                top: 0,
                                left: 0
                            } : c(a).offset();
                        return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                            top: d.top - e.top,
                            left: d.left - e.left
                        }
                    }
                };
                var d = {};
                c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
                for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
                c.fn.init.prototype = c.fn, a.Velocity = {
                    Utilities: c
                }
            }
        }(window),
        function(a) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof c && c.amd ? c("vendor/velocity", a) : a()
        }(function() {
            return function(a, b, c, d) {
                function e(a) {
                    for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                        var e = a[b];
                        e && d.push(e)
                    }
                    return d
                }

                function f(a) {
                    return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
                }

                function g(a) {
                    var b = m.data(a, "velocity");
                    return null === b ? d : b
                }

                function h(a) {
                    return function(b) {
                        return Math.round(b * a) * (1 / a)
                    }
                }

                function i(a, c, d, e) {
                    function f(a, b) {
                        return 1 - 3 * b + 3 * a
                    }

                    function g(a, b) {
                        return 3 * b - 6 * a
                    }

                    function h(a) {
                        return 3 * a
                    }

                    function i(a, b, c) {
                        return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
                    }

                    function j(a, b, c) {
                        return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
                    }

                    function k(b, c) {
                        for (var e = 0; p > e; ++e) {
                            var f = j(c, a, d);
                            if (0 === f) return c;
                            var g = i(c, a, d) - b;
                            c -= g / f
                        }
                        return c
                    }

                    function l() {
                        for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
                    }

                    function m(b, c, e) {
                        var f, g, h = 0;
                        do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                        return g
                    }

                    function n(b) {
                        for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                        --e;
                        var g = (b - x[e]) / (x[e + 1] - x[e]),
                            h = c + g * u,
                            i = j(h, a, d);
                        return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
                    }

                    function o() {
                        y = !0, a == c && d == e || l()
                    }
                    var p = 4,
                        q = .001,
                        r = 1e-7,
                        s = 10,
                        t = 11,
                        u = 1 / (t - 1),
                        v = "Float32Array" in b;
                    if (4 !== arguments.length) return !1;
                    for (var w = 0; 4 > w; ++w)
                        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                    a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
                    var x = v ? new Float32Array(t) : new Array(t),
                        y = !1,
                        z = function(b) {
                            return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                        };
                    z.getControlPoints = function() {
                        return [{
                            x: a,
                            y: c
                        }, {
                            x: d,
                            y: e
                        }]
                    };
                    var A = "generateBezier(" + [a, c, d, e] + ")";
                    return z.toString = function() {
                        return A
                    }, z
                }

                function j(a, b) {
                    var c = a;
                    return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
                }

                function k(a) {
                    if (a) {
                        var b = (new Date).getTime(),
                            c = t.State.calls.length;
                        c > 1e4 && (t.State.calls = e(t.State.calls));
                        for (var f = 0; c > f; f++)
                            if (t.State.calls[f]) {
                                var h = t.State.calls[f],
                                    i = h[0],
                                    j = h[2],
                                    n = h[3],
                                    o = !!n,
                                    q = null;
                                n || (n = t.State.calls[f][3] = b - 16);
                                for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                                    var w = i[s],
                                        y = w.element;
                                    if (g(y)) {
                                        var z = !1;
                                        if (j.display !== d && null !== j.display && "none" !== j.display) {
                                            if ("flex" === j.display) {
                                                var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                                m.each(A, function(a, b) {
                                                    v.setPropertyValue(y, "display", b)
                                                })
                                            }
                                            v.setPropertyValue(y, "display", j.display)
                                        }
                                        j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                        for (var B in w)
                                            if ("element" !== B) {
                                                var C, D = w[B],
                                                    E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                                if (1 === r) C = D.endValue;
                                                else {
                                                    var F = D.endValue - D.startValue;
                                                    if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                                }
                                                if (D.currentValue = C, "tween" === B) q = C;
                                                else {
                                                    if (v.Hooks.registered[B]) {
                                                        var G = v.Hooks.getRoot(B),
                                                            H = g(y).rootPropertyValueCache[G];
                                                        H && (D.rootPropertyValue = H)
                                                    }
                                                    var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                                    v.Hooks.registered[B] && (v.Normalizations.registered[G] ? g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G]("extract", null, I[1]) : g(y).rootPropertyValueCache[G] = I[1]), "transform" === I[0] && (z = !0)
                                                }
                                            }
                                        j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                                    }
                                }
                                j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                            }
                    }
                    t.State.isTicking && x(k)
                }

                function l(a, b) {
                    if (!t.State.calls[a]) return !1;
                    for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                        var l = c[j].element;
                        if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                            g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                            var n = !1;
                            m.each(v.Lists.transforms3D, function(a, b) {
                                var c = /^scale/.test(b) ? 1 : 0,
                                    e = g(l).transformCache[b];
                                g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                            }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                        }
                        if (!b && f.complete && !f.loop && j === k - 1) try {
                            f.complete.call(e, e)
                        } catch (o) {
                            setTimeout(function() {
                                throw o
                            }, 1)
                        }
                        h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
                            /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                        }), t(l, "reverse", {
                            loop: !0,
                            delay: f.delay
                        })), f.queue !== !1 && m.dequeue(l, f.queue)
                    }
                    t.State.calls[a] = !1;
                    for (var p = 0, q = t.State.calls.length; q > p; p++)
                        if (t.State.calls[p] !== !1) {
                            i = !0;
                            break
                        }
                    i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
                }
                var m, n = function() {
                        if (c.documentMode) return c.documentMode;
                        for (var a = 7; a > 4; a--) {
                            var b = c.createElement("div");
                            if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                        }
                        return d
                    }(),
                    o = function() {
                        var a = 0;
                        return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                            var c, d = (new Date).getTime();
                            return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                                b(d + c)
                            }, c)
                        }
                    }(),
                    p = {
                        isString: function(a) {
                            return "string" == typeof a
                        },
                        isArray: Array.isArray || function(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        },
                        isFunction: function(a) {
                            return "[object Function]" === Object.prototype.toString.call(a)
                        },
                        isNode: function(a) {
                            return a && a.nodeType
                        },
                        isNodeList: function(a) {
                            return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                        },
                        isWrapped: function(a) {
                            return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                        },
                        isSVG: function(a) {
                            return b.SVGElement && a instanceof b.SVGElement
                        },
                        isEmptyObject: function(a) {
                            for (var b in a) return !1;
                            return !0
                        }
                    },
                    q = !1;
                if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
                var r = 400,
                    s = "swing",
                    t = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: b.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: c.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: m,
                        Redirects: {},
                        Easings: {},
                        Promise: b.Promise,
                        defaults: {
                            queue: "",
                            duration: r,
                            easing: s,
                            begin: d,
                            complete: d,
                            progress: d,
                            display: d,
                            visibility: d,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(a) {
                            m.data(a, "velocity", {
                                isSVG: p.isSVG(a),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body,
                    t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
                var u = function() {
                    function a(a) {
                        return -a.tension * a.x - a.friction * a.v
                    }

                    function b(b, c, d) {
                        var e = {
                            x: b.x + d.dx * c,
                            v: b.v + d.dv * c,
                            tension: b.tension,
                            friction: b.friction
                        };
                        return {
                            dx: e.v,
                            dv: a(e)
                        }
                    }

                    function c(c, d) {
                        var e = {
                                dx: c.v,
                                dv: a(c)
                            },
                            f = b(c, .5 * d, e),
                            g = b(c, .5 * d, f),
                            h = b(c, d, g),
                            i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                            j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                        return c.x = c.x + i * d, c.v = c.v + j * d, c
                    }
                    return function d(a, b, e) {
                        var f, g, h, i = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            j = [0],
                            k = 0,
                            l = 1e-4,
                            m = .016;
                        for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
                            if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
                        return f ? function(a) {
                            return j[a * (j.length - 1) | 0]
                        } : k
                    }
                }();
                t.Easings = {
                    linear: function(a) {
                        return a
                    },
                    swing: function(a) {
                        return .5 - Math.cos(a * Math.PI) / 2
                    },
                    spring: function(a) {
                        return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
                    }
                }, m.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(a, b) {
                    t.Easings[b[0]] = i.apply(null, b[1])
                });
                var v = t.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var a = 0; a < v.Lists.colors.length; a++) {
                                var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                                v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                            }
                            var c, d, e;
                            if (n)
                                for (c in v.Hooks.templates) {
                                    d = v.Hooks.templates[c], e = d[0].split(" ");
                                    var f = d[1].match(v.RegEx.valueSplit);
                                    "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                                }
                            for (c in v.Hooks.templates) {
                                d = v.Hooks.templates[c], e = d[0].split(" ");
                                for (var a in e) {
                                    var g = c + e[a],
                                        h = a;
                                    v.Hooks.registered[g] = [c, h]
                                }
                            }
                        },
                        getRoot: function(a) {
                            var b = v.Hooks.registered[a];
                            return b ? b[0] : a
                        },
                        cleanRootPropertyValue: function(a, b) {
                            return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                        },
                        extractValue: function(a, b) {
                            var c = v.Hooks.registered[a];
                            if (c) {
                                var d = c[0],
                                    e = c[1];
                                return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                            }
                            return b
                        },
                        injectValue: function(a, b, c) {
                            var d = v.Hooks.registered[a];
                            if (d) {
                                var e, f, g = d[0],
                                    h = d[1];
                                return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                            }
                            return c
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(a, b, c) {
                                switch (a) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var d;
                                        return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                                    case "inject":
                                        return "rect(" + c + ")"
                                }
                            },
                            blur: function(a, b, c) {
                                switch (a) {
                                    case "name":
                                        return t.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var d = parseFloat(c);
                                        if (!d && 0 !== d) {
                                            var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            d = e ? e[1] : 0
                                        }
                                        return d;
                                    case "inject":
                                        return parseFloat(c) ? "blur(" + c + ")" : "none"
                                }
                            },
                            opacity: function(a, b, c) {
                                if (8 >= n) switch (a) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return c = d ? d[1] / 100 : 1;
                                    case "inject":
                                        return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                                } else switch (a) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return c;
                                    case "inject":
                                        return c
                                }
                            }
                        },
                        register: function() {
                            9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                            for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                                var b = v.Lists.transformsBase[a];
                                v.Normalizations.registered[b] = function(a, c, e) {
                                    switch (a) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                        case "inject":
                                            var f = !1;
                                            switch (b.substr(0, b.length - 1)) {
                                                case "translate":
                                                    f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                                    break;
                                                case "skew":
                                                    f = !/(deg|\d)$/i.test(e);
                                                    break;
                                                case "rotate":
                                                    f = !/(deg|\d)$/i.test(e)
                                            }
                                            return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                                    }
                                }
                            }();
                            for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                                var b = v.Lists.colors[a];
                                v.Normalizations.registered[b] = function(a, c, e) {
                                    switch (a) {
                                        case "name":
                                            return b;
                                        case "extract":
                                            var f;
                                            if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                            else {
                                                var g, h = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                        case "inject":
                                            return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(a) {
                            return a.replace(/-(\w)/g, function(a, b) {
                                return b.toUpperCase()
                            })
                        },
                        SVGAttribute: function(a) {
                            var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                        },
                        prefixCheck: function(a) {
                            if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                            for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                                var e;
                                if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                        return a.toUpperCase()
                                    }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                            }
                            return [a, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(a) {
                            var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                            return a = a.replace(c, function(a, b, c, d) {
                                return b + b + c + c + d + d
                            }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(a) {
                            return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                        },
                        getUnitType: function(a) {
                            return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                        },
                        getDisplayType: function(a) {
                            var b = a && a.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                        },
                        addClass: function(a, b) {
                            a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                        },
                        removeClass: function(a, b) {
                            a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(a, c, e, f) {
                        function h(a, c) {
                            function e() {
                                j && v.setPropertyValue(a, "display", "none")
                            }
                            var i = 0;
                            if (8 >= n) i = m.css(a, c);
                            else {
                                var j = !1;
                                if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                                    if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                        var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                        return e(), k
                                    }
                                    if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                        var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                        return e(), l
                                    }
                                }
                                var o;
                                o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], "" !== i && null !== i || (i = a.style[c]), e()
                            }
                            if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                                var p = h(a, "position");
                                ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                            }
                            return i
                        }
                        var i;
                        if (v.Hooks.registered[c]) {
                            var j = c,
                                k = v.Hooks.getRoot(j);
                            e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                        } else if (v.Normalizations.registered[c]) {
                            var l, o;
                            l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                        }
                        if (!/^[\d-]/.test(i))
                            if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                                if (/^(height|width)$/i.test(c)) try {
                                    i = a.getBBox()[c]
                                } catch (p) {
                                    i = 0
                                } else i = a.getAttribute(c);
                                else i = h(a, v.Names.prefixCheck(c)[0]);
                        return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2, i
                    },
                    setPropertyValue: function(a, c, d, e, f) {
                        var h = c;
                        if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                        else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                        else {
                            if (v.Hooks.registered[c]) {
                                var i = c,
                                    j = v.Hooks.getRoot(c);
                                e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                            }
                            if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                                a.style[h] = d
                            } catch (k) {
                                t.debug
                            } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                            t.debug >= 2
                        }
                        return [h, d]
                    },
                    flushTransformCache: function(a) {
                        function b(b) {
                            return parseFloat(v.getPropertyValue(a, b))
                        }
                        var c = "";
                        if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                            var d = {
                                translate: [b("translateX"), b("translateY")],
                                skewX: [b("skewX")],
                                skewY: [b("skewY")],
                                scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                                rotate: [b("rotateZ"), 0, 0]
                            };
                            m.each(g(a).transformCache, function(a) {
                                /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                            })
                        } else {
                            var e, f;
                            m.each(g(a).transformCache, function(b) {
                                return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                            }), f && (c = "perspective" + f + " " + c)
                        }
                        v.setPropertyValue(a, "transform", c)
                    }
                };
                v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
                    var e = d;
                    return a = f(a), m.each(a, function(a, f) {
                        if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                        else {
                            var h = t.CSS.setPropertyValue(f, b, c);
                            "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                        }
                    }), e
                };
                var w = function() {
                    function a() {
                        return h ? B.promise || null : i
                    }

                    function e() {
                        function a(a) {
                            function l(a, b) {
                                var c = d,
                                    e = d,
                                    g = d;
                                return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                            }

                            function n(a, b) {
                                var c, d;
                                return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                    return c = a, ""
                                }), c || (c = v.Values.getUnitType(a)), [d, c]
                            }

                            function r() {
                                var a = {
                                        myParent: f.parentNode || c.body,
                                        position: v.getPropertyValue(f, "position"),
                                        fontSize: v.getPropertyValue(f, "fontSize")
                                    },
                                    d = a.position === I.lastPosition && a.myParent === I.lastParent,
                                    e = a.fontSize === I.lastFontSize;
                                I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                                var h = 100,
                                    i = {};
                                if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                                else {
                                    var j = g(f).isSVG ? c.createElementNS("/web/20160603003234/http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                    t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                        t.CSS.setPropertyValue(j, b, "hidden")
                                    }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                        t.CSS.setPropertyValue(j, b, h + "%")
                                    }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                                }
                                return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1, i
                            }
                            if (h.begin && 0 === y) try {
                                h.begin.call(o, o)
                            } catch (u) {
                                setTimeout(function() {
                                    throw u
                                }, 1)
                            }
                            if ("scroll" === C) {
                                var w, z, A, D = /^x$/i.test(h.axis) ? "Left" : "Top",
                                    E = parseFloat(h.offset) || 0;
                                h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, w = h.container["scroll" + D], A = w + m(f).position()[D.toLowerCase()] + E) : h.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + D]], z = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], A = m(f).offset()[D.toLowerCase()] + E), i = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: A,
                                        unitType: "",
                                        easing: h.easing,
                                        scrollData: {
                                            container: h.container,
                                            direction: D,
                                            alternateValue: z
                                        }
                                    },
                                    element: f
                                }, t.debug
                            } else if ("reverse" === C) {
                                if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                                "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                                var F = m.extend(!0, {}, g(f).tweensContainer);
                                for (var G in F)
                                    if ("element" !== G) {
                                        var H = F[G].startValue;
                                        F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(s) || (F[G].easing = h.easing), t.debug
                                    }
                                i = F
                            } else if ("start" === C) {
                                var F;
                                g(f).tweensContainer && g(f).isAnimating === !0 && (F = g(f).tweensContainer), m.each(q, function(a, b) {
                                    if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                                        var c = l(b, !0),
                                            e = c[0],
                                            f = c[1],
                                            g = c[2];
                                        if (v.RegEx.isHex.test(e)) {
                                            for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                                                var m = [i[k]];
                                                f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m
                                            }
                                            delete q[a]
                                        }
                                    }
                                });
                                for (var K in q) {
                                    var L = l(q[K]),
                                        M = L[0],
                                        N = L[1],
                                        O = L[2];
                                    K = v.Names.camelCase(K);
                                    var P = v.Hooks.getRoot(K),
                                        Q = !1;
                                    if (g(f).isSVG || "tween" === P || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                                        (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(K) && !O && 0 !== M && (O = 0), h._cacheValues && F && F[K] ? (O === d && (O = F[K].endValue + F[K].unitType), Q = g(f).rootPropertyValueCache[P]) : v.Hooks.registered[K] ? O === d ? (Q = v.getPropertyValue(f, P), O = v.getPropertyValue(f, K, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(f, K));
                                        var R, S, T, U = !1;
                                        if (R = n(K, O), O = R[0], T = R[1], R = n(K, M), M = R[0].replace(/^([+-\/*])=/, function(a, b) {
                                                return U = b, ""
                                            }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(K) ? (M /= 100, S = "em") : /^scale/.test(K) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(K) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U)) S = T;
                                        else if (T !== S && 0 !== O)
                                            if (0 === M) S = T;
                                            else {
                                                e = e || r();
                                                var V = /margin|padding|left|right|width|text|word|letter/i.test(K) || /X$/.test(K) || "x" === K ? "x" : "y";
                                                switch (T) {
                                                    case "%":
                                                        O *= "x" === V ? e.percentToPxWidth : e.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        O *= e[T + "ToPx"]
                                                }
                                                switch (S) {
                                                    case "%":
                                                        O *= 1 / ("x" === V ? e.percentToPxWidth : e.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        O *= 1 / e[S + "ToPx"]
                                                }
                                            }
                                        switch (U) {
                                            case "+":
                                                M = O + M;
                                                break;
                                            case "-":
                                                M = O - M;
                                                break;
                                            case "*":
                                                M = O * M;
                                                break;
                                            case "/":
                                                M = O / M
                                        }
                                        i[K] = {
                                            rootPropertyValue: Q,
                                            startValue: O,
                                            currentValue: O,
                                            endValue: M,
                                            unitType: S,
                                            easing: N
                                        }, t.debug
                                    } else t.debug
                                }
                                i.element = f
                            }
                            i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
                        }
                        var e, f = this,
                            h = m.extend({}, t.defaults, s),
                            i = {};
                        switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
                            t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                                setTimeout: setTimeout(a, parseFloat(h.delay)),
                                next: a
                            }
                        }), h.duration.toString().toLowerCase()) {
                            case "fast":
                                h.duration = 200;
                                break;
                            case "normal":
                                h.duration = r;
                                break;
                            case "slow":
                                h.duration = 600;
                                break;
                            default:
                                h.duration = parseFloat(h.duration) || 1
                        }
                        t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                            return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                        }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
                    }
                    var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
                    if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                        u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                        var x = o.length,
                            y = 0;
                        if (!/^(stop|finish|finishAll)$/i.test(q) && !m.isPlainObject(s)) {
                            var z = n + 1;
                            s = {};
                            for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
                        }
                        var B = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                            B.resolver = a, B.rejecter = b
                        }));
                        var C;
                        switch (q) {
                            case "scroll":
                                C = "scroll";
                                break;
                            case "reverse":
                                C = "reverse";
                                break;
                            case "finish":
                            case "finishAll":
                            case "stop":
                                m.each(o, function(a, b) {
                                    g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== q || s !== !0 && !p.isString(s) || (m.each(m.queue(b, p.isString(s) ? s : ""), function(a, b) {
                                        p.isFunction(b) && b()
                                    }), m.queue(b, p.isString(s) ? s : "", []))
                                });
                                var D = [];
                                return m.each(t.State.calls, function(a, b) {
                                    b && m.each(b[1], function(c, e) {
                                        var f = s === d ? "" : s;
                                        return f === !0 || b[2].queue === f || s === d && b[2].queue === !1 ? void m.each(o, function(c, d) {
                                            d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                                p.isFunction(b) && b(null, !0)
                                            }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                                                b.endValue = b.currentValue
                                            }), D.push(a)) : "finish" !== q && "finishAll" !== q || (b[2].duration = 1))
                                        }) : !0
                                    })
                                }), "stop" === q && (m.each(D, function(a, b) {
                                    l(b, !0)
                                }), B.promise && B.resolver(o)), a();
                            default:
                                if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                                    if (p.isString(q) && t.Redirects[q]) {
                                        var E = m.extend({}, s),
                                            F = E.duration,
                                            G = E.delay || 0;
                                        return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                            parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                                        }), a()
                                    }
                                    var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return B.promise && B.rejecter(new Error(H)), a()
                                }
                                C = "start"
                        }
                        var I = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            J = [];
                        m.each(o, function(a, b) {
                            p.isNode(b) && e.call(b)
                        });
                        var K, E = m.extend({}, t.defaults, s);
                        if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                            for (var L = 0; K > L; L++) {
                                var M = {
                                    delay: E.delay,
                                    progress: E.progress
                                };
                                L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                            }
                        return a()
                    }
                };
                t = m.extend(w, t), t.animate = w;
                var x = b.requestAnimationFrame || o;
                return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
                    c.hidden ? (x = function(a) {
                        return setTimeout(function() {
                            a(!0)
                        }, 16)
                    }, k()) : x = b.requestAnimationFrame || o
                }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
                    t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                        var i = m.extend({}, c),
                            j = i.begin,
                            k = i.complete,
                            l = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            n = {};
                        i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                            j && j.call(g, g);
                            for (var c in l) {
                                n[c] = a.style[c];
                                var d = t.CSS.getPropertyValue(a, c);
                                l[c] = "Down" === b ? [d, 0] : [0, d]
                            }
                            n.overflow = a.style.overflow, a.style.overflow = "hidden"
                        }, i.complete = function() {
                            for (var b in n) a.style[b] = n[b];
                            k && k.call(g, g), h && h.resolver(g)
                        }, t(a, l, i)
                    }
                }), m.each(["In", "Out"], function(a, b) {
                    t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                        var i = m.extend({}, c),
                            j = {
                                opacity: "In" === b ? 1 : 0
                            },
                            k = i.complete;
                        e !== f - 1 ? i.complete = i.begin = null : i.complete = function() {
                            k && k.call(g, g), h && h.resolver(g)
                        }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
                    }
                }), t
            }(window.jQuery || window.Zepto || window, window, document)
        }),
        function(a) {
            "function" == typeof b && "object" == typeof exports ? module.exports = a() : "function" == typeof c && c.amd ? c("vendor/velocity.ui", ["velocity"], a) : a()
        }(function() {
            return function(a, b, c, d) {
                function e(a, b) {
                    var c = [];
                    return a && b ? (g.each([a, b], function(a, b) {
                        var d = [];
                        g.each(b, function(a, b) {
                            for (; b.toString().length < 5;) b = "0" + b;
                            d.push(b)
                        }), c.push(d.join(""))
                    }), parseFloat(c[0]) > parseFloat(c[1])) : !1
                }
                if (!a.Velocity || !a.Velocity.Utilities) return void(b.console && void 0);
                var f = a.Velocity,
                    g = f.Utilities,
                    h = f.version,
                    i = {
                        major: 1,
                        minor: 1,
                        patch: 0
                    };
                if (e(i, h)) {
                    var j = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit /web/20160603003234/http://github.com/julianshapiro/velocity.";
                    throw alert(j), new Error(j)
                }
                f.RegisterEffect = f.RegisterUI = function(a, b) {
                    function c(a, b, c, d) {
                        var e, h = 0;
                        g.each(a.nodeType ? [a] : a, function(a, b) {
                            d && (c += a * d), e = b.parentNode, g.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(a, c) {
                                h += parseFloat(f.CSS.getPropertyValue(b, c))
                            })
                        }), f.animate(e, {
                            height: ("In" === b ? "+" : "-") + "=" + h
                        }, {
                            queue: !1,
                            easing: "ease-in-out",
                            duration: c * ("In" === b ? .6 : 1)
                        })
                    }
                    return f.Redirects[a] = function(e, h, i, j, k, l) {
                        function m() {
                            h.display !== d && "none" !== h.display || !/Out$/.test(a) || g.each(k.nodeType ? [k] : k, function(a, b) {
                                f.CSS.setPropertyValue(b, "display", "none")
                            }), h.complete && h.complete.call(k, k), l && l.resolver(k || e)
                        }
                        var n = i === j - 1;
                        "function" == typeof b.defaultDuration ? b.defaultDuration = b.defaultDuration.call(k, k) : b.defaultDuration = parseFloat(b.defaultDuration);
                        for (var o = 0; o < b.calls.length; o++) {
                            var p = b.calls[o],
                                q = p[0],
                                r = h.duration || b.defaultDuration || 1e3,
                                s = p[1],
                                t = p[2] || {},
                                u = {};
                            if (u.duration = r * (s || 1), u.queue = h.queue || "", u.easing = t.easing || "ease", u.delay = parseFloat(t.delay) || 0, u._cacheValues = t._cacheValues || !0, 0 === o) {
                                if (u.delay += parseFloat(h.delay) || 0, 0 === i && (u.begin = function() {
                                        h.begin && h.begin.call(k, k);
                                        var b = a.match(/(In|Out)$/);
                                        b && "In" === b[0] && q.opacity !== d && g.each(k.nodeType ? [k] : k, function(a, b) {
                                            f.CSS.setPropertyValue(b, "opacity", 0)
                                        }), h.animateParentHeight && b && c(k, b[0], r + u.delay, h.stagger)
                                    }), null !== h.display)
                                    if (h.display !== d && "none" !== h.display) u.display = h.display;
                                    else if (/In$/.test(a)) {
                                    var v = f.CSS.Values.getDisplayType(e);
                                    u.display = "inline" === v ? "inline-block" : v
                                }
                                h.visibility && "hidden" !== h.visibility && (u.visibility = h.visibility)
                            }
                            o === b.calls.length - 1 && (u.complete = function() {
                                if (b.reset) {
                                    for (var a in b.reset) {
                                        var c = b.reset[a];
                                        f.CSS.Hooks.registered[a] !== d || "string" != typeof c && "number" != typeof c || (b.reset[a] = [b.reset[a], b.reset[a]])
                                    }
                                    var g = {
                                        duration: 0,
                                        queue: !1
                                    };
                                    n && (g.complete = m), f.animate(e, b.reset, g)
                                } else n && m()
                            }, "hidden" === h.visibility && (u.visibility = h.visibility)), f.animate(e, q, u)
                        }
                    }, f
                }, f.RegisterEffect.packagedEffects = {
                    "callout.bounce": {
                        defaultDuration: 550,
                        calls: [
                            [{
                                translateY: -30
                            }, .25],
                            [{
                                translateY: 0
                            }, .125],
                            [{
                                translateY: -15
                            }, .125],
                            [{
                                translateY: 0
                            }, .25]
                        ]
                    },
                    "callout.shake": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 0
                            }, .125]
                        ]
                    },
                    "callout.flash": {
                        defaultDuration: 1100,
                        calls: [
                            [{
                                opacity: [0, "easeInOutQuad", 1]
                            }, .25],
                            [{
                                opacity: [1, "easeInOutQuad"]
                            }, .25],
                            [{
                                opacity: [0, "easeInOutQuad"]
                            }, .25],
                            [{
                                opacity: [1, "easeInOutQuad"]
                            }, .25]
                        ]
                    },
                    "callout.pulse": {
                        defaultDuration: 825,
                        calls: [
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1
                            }, .5, {
                                easing: "easeInExpo"
                            }],
                            [{
                                scaleX: 1,
                                scaleY: 1
                            }, .5]
                        ]
                    },
                    "callout.swing": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                rotateZ: 15
                            }, .2],
                            [{
                                rotateZ: -10
                            }, .2],
                            [{
                                rotateZ: 5
                            }, .2],
                            [{
                                rotateZ: -5
                            }, .2],
                            [{
                                rotateZ: 0
                            }, .2]
                        ]
                    },
                    "callout.tada": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                scaleX: .9,
                                scaleY: .9,
                                rotateZ: -3
                            }, .1],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                rotateZ: 3
                            }, .1],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                rotateZ: -3
                            }, .1],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            [{
                                scaleX: 1,
                                scaleY: 1,
                                rotateZ: 0
                            }, .2]
                        ]
                    },
                    "transition.fadeIn": {
                        defaultDuration: 500,
                        calls: [
                            [{
                                opacity: [1, 0]
                            }]
                        ]
                    },
                    "transition.fadeOut": {
                        defaultDuration: 500,
                        calls: [
                            [{
                                opacity: [0, 1]
                            }]
                        ]
                    },
                    "transition.flipXIn": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                rotateY: [0, -55]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipXOut": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                rotateY: 55
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipYIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                rotateX: [0, -45]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipYOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                rotateX: 25
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.flipBounceXIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [.725, 0],
                                transformPerspective: [400, 400],
                                rotateY: [-10, 90]
                            }, .5],
                            [{
                                opacity: .8,
                                rotateY: 10
                            }, .25],
                            [{
                                opacity: 1,
                                rotateY: 0
                            }, .25]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceXOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [.9, 1],
                                transformPerspective: [400, 400],
                                rotateY: -10
                            }, .5],
                            [{
                                opacity: 0,
                                rotateY: 90
                            }, .5]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipBounceYIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [.725, 0],
                                transformPerspective: [400, 400],
                                rotateX: [-10, 90]
                            }, .5],
                            [{
                                opacity: .8,
                                rotateX: 10
                            }, .25],
                            [{
                                opacity: 1,
                                rotateX: 0
                            }, .25]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceYOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [.9, 1],
                                transformPerspective: [400, 400],
                                rotateX: -15
                            }, .5],
                            [{
                                opacity: 0,
                                rotateX: 90
                            }, .5]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.swoopIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["100%", "50%"],
                                transformOriginY: ["100%", "100%"],
                                scaleX: [1, 0],
                                scaleY: [1, 0],
                                translateX: [0, -700],
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.swoopOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "100%"],
                                transformOriginY: ["100%", "100%"],
                                scaleX: 0,
                                scaleY: 0,
                                translateX: -700,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            scaleX: 1,
                            scaleY: 1,
                            translateX: 0
                        }
                    },
                    "transition.whirlIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, 0],
                                scaleY: [1, 0],
                                rotateY: [0, 160]
                            }, 1, {
                                easing: "easeInOutSine"
                            }]
                        ]
                    },
                    "transition.whirlOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, "easeInOutQuint", 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: 0,
                                scaleY: 0,
                                rotateY: 160
                            }, 1, {
                                easing: "swing"
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1,
                            rotateY: 0
                        }
                    },
                    "transition.shrinkIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, 1.5],
                                scaleY: [1, 1.5],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.shrinkOut": {
                        defaultDuration: 600,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: 1.3,
                                scaleY: 1.3,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.expandIn": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, .625],
                                scaleY: [1, .625],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.expandOut": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: .5,
                                scaleY: .5,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                scaleX: [1.05, .3],
                                scaleY: [1.05, .3]
                            }, .4],
                            [{
                                scaleX: .9,
                                scaleY: .9,
                                translateZ: 0
                            }, .2],
                            [{
                                scaleX: 1,
                                scaleY: 1
                            }, .5]
                        ]
                    },
                    "transition.bounceOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                scaleX: .95,
                                scaleY: .95
                            }, .35],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                translateZ: 0
                            }, .35],
                            [{
                                opacity: [0, 1],
                                scaleX: .3,
                                scaleY: .3
                            }, .3]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [-30, 1e3]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateY: 10
                            }, .2],
                            [{
                                translateY: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceUpOut": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                translateY: 20
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateY: -1e3
                            }, .8]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [30, -1e3]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateY: -10
                            }, .2],
                            [{
                                translateY: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceDownOut": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                translateY: -20
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateY: 1e3
                            }, .8]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceLeftIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [30, -1250]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateX: -10
                            }, .2],
                            [{
                                translateX: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceLeftOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                translateX: 30
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateX: -1250
                            }, .8]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.bounceRightIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [-30, 1250]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateX: 10
                            }, .2],
                            [{
                                translateX: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceRightOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                translateX: -30
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateX: 1250
                            }, .8]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, 20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideUpOut": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: -20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, -20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideDownOut": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: 20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftIn": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, -20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideLeftOut": {
                        defaultDuration: 1050,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: -20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightIn": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, 20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideRightOut": {
                        defaultDuration: 1050,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: 20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, 75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideUpBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: -75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, -75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideDownBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: 75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, -75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideLeftBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: -75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, 75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideRightBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: 75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.perspectiveUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: ["100%", "100%"],
                                rotateX: [0, -180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveUpOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: ["100%", "100%"],
                                rotateX: -180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateX: [0, 180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveDownOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateX: 180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveLeftIn": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateY: [0, -180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveLeftOut": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateY: -180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    },
                    "transition.perspectiveRightIn": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: ["100%", "100%"],
                                transformOriginY: [0, 0],
                                rotateY: [0, 180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveRightOut": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: ["100%", "100%"],
                                transformOriginY: [0, 0],
                                rotateY: 180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    }
                };
                for (var k in f.RegisterEffect.packagedEffects) f.RegisterEffect(k, f.RegisterEffect.packagedEffects[k]);
                f.RunSequence = function(a) {
                    var b = g.extend(!0, [], a);
                    b.length > 1 && (g.each(b.reverse(), function(a, c) {
                        var d = b[a + 1];
                        if (d) {
                            var e = c.o || c.options,
                                h = d.o || d.options,
                                i = e && e.sequenceQueue === !1 ? "begin" : "complete",
                                j = h && h[i],
                                k = {};
                            k[i] = function() {
                                var a = d.e || d.elements,
                                    b = a.nodeType ? [a] : a;
                                j && j.call(b, b), f(c)
                            }, d.o ? d.o = g.extend({}, h, k) : d.options = g.extend({}, h, k)
                        }
                    }), b.reverse()), f(b[0])
                }
            }(window.jQuery || window.Zepto || window, window, document)
        }), c("base/modules/animate", ["jquery", "underscore", "vendor/velocity", "vendor/velocity.ui"], function(a, b, c, d) {
            "use strict";
            return function(d, e, f, g) {
                var h = a.Deferred();
                return c.call(d, e, b.extend(f || {}, {
                    complete: function() {
                        h.resolve(g || this)
                    }
                })), h.promise()
            }
        }), c("base/loading", ["jquery", "underscore", "base/modules/animate"], function(a, b, c) {
            "use strict";
            var d = null;
            return {
                init: function(a) {
                    d = a
                },
                startLoading: function() {
                    c(d, {
                        opacity: 1,
                        duration: 200
                    }).then(function() {
                        d.addClass("loading")
                    })
                },
                completeLoading: function(a) {
                    d.removeClass("loading").addClass("animating"), setTimeout(function() {
                        d.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                            c(d, {
                                opacity: 0,
                                duration: 500
                            }).then(function() {
                                d.removeClass("animating").removeClass("loading"), setTimeout(function() {
                                    a && a()
                                }, 100)
                            })
                        })
                    }, 100)
                }
            }
        }),
        function(a, b) {
            "use strict";
            var c = a.History = a.History || {},
                d = a.jQuery;
            if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
            c.Adapter = {
                bind: function(a, b, c) {
                    d(a).bind(b, c)
                },
                trigger: function(a, b, c) {
                    d(a).trigger(b, c)
                },
                extractEventData: function(a, c, d) {
                    var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                    return e
                },
                onDomLoad: function(a) {
                    d(a)
                }
            }, "undefined" != typeof c.init && c.init()
        }(window),
        function(a, b) {
            "use strict";
            var c = a.console || b,
                d = a.document,
                e = a.navigator,
                f = a.sessionStorage || !1,
                g = a.setTimeout,
                h = a.clearTimeout,
                i = a.setInterval,
                j = a.clearInterval,
                k = a.JSON,
                l = a.alert,
                m = a.History = a.History || {},
                n = a.history;
            try {
                f.setItem("TEST", "1"), f.removeItem("TEST")
            } catch (o) {
                f = !1
            }
            if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
            m.init = function(a) {
                return "undefined" == typeof m.Adapter ? !1 : ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
            }, m.initCore = function(o) {
                if ("undefined" != typeof m.initCore.initialized) return !1;
                if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                        var a, b = m.intervalList;
                        if ("undefined" != typeof b && null !== b) {
                            for (a = 0; a < b.length; a++) j(b[a]);
                            m.intervalList = null
                        }
                    }, m.debug = function() {
                        m.options.debug && m.log.apply(m, arguments)
                    }, m.log = function() {
                        var a, b, e, f, g, h = !("undefined" == typeof c || "undefined" == typeof c.log || "undefined" == typeof c.log.apply),
                            i = d.getElementById("log");
                        for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; e > b; ++b) {
                            if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                                g = k.stringify(g)
                            } catch (j) {}
                            a += "\n" + g + "\n"
                        }
                        return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                    }, m.getInternetExplorerMajorVersion = function() {
                        var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                            for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                                (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                            return a > 4 ? a : !1
                        }();
                        return a
                    }, m.isInternetExplorer = function() {
                        var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                        return a
                    }, m.options.html4Mode ? m.emulated = {
                        pushState: !0,
                        hashChange: !0
                    } : m.emulated = {
                        pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent))),
                        hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                    }, m.enabled = !m.emulated.pushState, m.bugs = {
                        setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                        safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                        ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                        hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                    }, m.isEmptyObject = function(a) {
                        for (var b in a)
                            if (a.hasOwnProperty(b)) return !1;
                        return !0
                    }, m.cloneObject = function(a) {
                        var b, c;
                        return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                    }, m.getRootUrl = function() {
                        var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                        return d.location.port && (a += ":" + d.location.port), a += "/"
                    }, m.getBaseHref = function() {
                        var a = d.getElementsByTagName("base"),
                            b = null,
                            c = "";
                        return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                    }, m.getBaseUrl = function() {
                        var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                        return a
                    }, m.getPageUrl = function() {
                        var a, b = m.getState(!1, !1),
                            c = (b || {}).url || m.getLocationHref();
                        return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                            return /\./.test(a) ? a : a + "/"
                        })
                    }, m.getBasePageUrl = function() {
                        var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                            return /[^\/]$/.test(a) ? "" : a
                        }).replace(/\/+$/, "") + "/";
                        return a
                    }, m.getFullUrl = function(a, b) {
                        var c = a,
                            d = a.substring(0, 1);
                        return b = "undefined" == typeof b ? !0 : b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                    }, m.getShortUrl = function(a) {
                        var b = a,
                            c = m.getBaseUrl(),
                            d = m.getRootUrl();
                        return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                    }, m.getLocationHref = function(a) {
                        return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : -1 == a.URL.indexOf("#") && -1 != a.location.href.indexOf("#") ? a.location.href : a.URL || a.location.href
                    }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                        m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                    }, m.getState = function(a, b) {
                        "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                        var c = m.getLastSavedState();
                        return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                    }, m.getIdByState = function(a) {
                        var b, c = m.extractId(a.url);
                        if (!c)
                            if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                            else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                        else {
                            for (;;)
                                if (c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" == typeof m.idToState[c] && "undefined" == typeof m.store.idToState[c]) break;
                            m.stateToId[b] = c, m.idToState[c] = a
                        }
                        return c
                    }, m.normalizeState = function(a) {
                        var b, c;
                        return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                    }, m.createStateObject = function(a, b, c) {
                        var d = {
                            data: a,
                            title: b,
                            url: c
                        };
                        return d = m.normalizeState(d)
                    }, m.getStateById = function(a) {
                        a = String(a);
                        var c = m.idToState[a] || m.store.idToState[a] || b;
                        return c
                    }, m.getStateString = function(a) {
                        var b, c, d;
                        return b = m.normalizeState(a), c = {
                            data: b.data,
                            title: a.title,
                            url: a.url
                        }, d = k.stringify(c)
                    }, m.getStateId = function(a) {
                        var b, c;
                        return b = m.normalizeState(a), c = b.id
                    }, m.getHashByState = function(a) {
                        var b, c;
                        return b = m.normalizeState(a), c = b.hash
                    }, m.extractId = function(a) {
                        var b, c, d, e;
                        return e = -1 != a.indexOf("#") ? a.split("#")[0] : a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
                    }, m.isTraditionalAnchor = function(a) {
                        var b = !/[\/\?\.]/.test(a);
                        return b
                    }, m.extractState = function(a, b) {
                        var c, d, e = null;
                        return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), e || !b || m.isTraditionalAnchor(a) || (e = m.createStateObject(null, null, d))), e
                    }, m.getIdByUrl = function(a) {
                        var c = m.urlToId[a] || m.store.urlToId[a] || b;
                        return c
                    }, m.getLastSavedState = function() {
                        return m.savedStates[m.savedStates.length - 1] || b
                    }, m.getLastStoredState = function() {
                        return m.storedStates[m.storedStates.length - 1] || b
                    }, m.hasUrlDuplicate = function(a) {
                        var b, c = !1;
                        return b = m.extractState(a.url), c = b && b.id !== a.id
                    }, m.storeState = function(a) {
                        return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                    }, m.isLastSavedState = function(a) {
                        var b, c, d, e = !1;
                        return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                    }, m.saveState = function(a) {
                        return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
                    }, m.getStateByIndex = function(a) {
                        var b = null;
                        return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : 0 > a ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                    }, m.getCurrentIndex = function() {
                        var a = null;
                        return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
                    }, m.getHash = function(a) {
                        var b, c = m.getLocationHref(a);
                        return b = m.getHashByUrl(c)
                    }, m.unescapeHash = function(a) {
                        var b = m.normalizeHash(a);
                        return b = decodeURIComponent(b)
                    }, m.normalizeHash = function(a) {
                        var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                        return b
                    }, m.setHash = function(a, b) {
                        var c, e;
                        return b !== !1 && m.busy() ? (m.pushQueue({
                            scope: m,
                            callback: m.setHash,
                            args: arguments,
                            queue: b
                        }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
                    }, m.escapeHash = function(b) {
                        var c = m.normalizeHash(b);
                        return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                    }, m.getHashByUrl = function(a) {
                        var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                        return b = m.unescapeHash(b)
                    }, m.setTitle = function(a) {
                        var b, c = a.title;
                        c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                        try {
                            d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                        } catch (e) {}
                        return d.title = c, m
                    }, m.queues = [], m.busy = function(a) {
                        if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                            h(m.busy.timeout);
                            var b = function() {
                                var a, c, d;
                                if (!m.busy.flag)
                                    for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                            };
                            m.busy.timeout = g(b, m.options.busyDelay)
                        }
                        return m.busy.flag
                    }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                        return a.callback.apply(a.scope || m, a.args || [])
                    }, m.pushQueue = function(a) {
                        return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                    }, m.queue = function(a, b) {
                        return "function" == typeof a && (a = {
                            callback: a
                        }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                    }, m.clearQueue = function() {
                        return m.busy.flag = !1, m.queues = [], m
                    }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                        return m.stateChanged = !0, m.doubleCheckClear(), m
                    }, m.doubleCheckClear = function() {
                        return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                    }, m.doubleCheck = function(a) {
                        return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                            return m.doubleCheckClear(), m.stateChanged || a(), !0
                        }, m.options.doubleCheckInterval)), m
                    }, m.safariStatePoll = function() {
                        var b, c = m.extractState(m.getLocationHref());
                        if (!m.isLastSavedState(c)) return b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
                    }, m.back = function(a) {
                        return a !== !1 && m.busy() ? (m.pushQueue({
                            scope: m,
                            callback: m.back,
                            args: arguments,
                            queue: a
                        }), !1) : (m.busy(!0), m.doubleCheck(function() {
                            m.back(!1)
                        }), n.go(-1), !0)
                    }, m.forward = function(a) {
                        return a !== !1 && m.busy() ? (m.pushQueue({
                            scope: m,
                            callback: m.forward,
                            args: arguments,
                            queue: a
                        }), !1) : (m.busy(!0), m.doubleCheck(function() {
                            m.forward(!1)
                        }), n.go(1), !0)
                    }, m.go = function(a, b) {
                        var c;
                        if (a > 0)
                            for (c = 1; a >= c; ++c) m.forward(b);
                        else {
                            if (!(0 > a)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                            for (c = -1; c >= a; --c) m.back(b)
                        }
                        return m
                    }, m.emulated.pushState) {
                    var p = function() {};
                    m.pushState = m.pushState || p, m.replaceState = m.replaceState || p
                } else m.onPopState = function(b, c) {
                    var d, e, f = !1,
                        g = !1;
                    return m.doubleCheckComplete(), (d = m.getHash()) ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
                }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                    if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (e !== !1 && m.busy()) return m.pushQueue({
                        scope: m,
                        callback: m.pushState,
                        args: arguments,
                        queue: e
                    }), !1;
                    m.busy(!0);
                    var f = m.createStateObject(b, c, d);
                    return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
                }, m.replaceState = function(b, c, d, e) {
                    if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (e !== !1 && m.busy()) return m.pushQueue({
                        scope: m,
                        callback: m.replaceState,
                        args: arguments,
                        queue: e
                    }), !1;
                    m.busy(!0);
                    var f = m.createStateObject(b, c, d);
                    return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
                };
                if (f) {
                    try {
                        m.store = k.parse(f.getItem("History.store")) || {}
                    } catch (q) {
                        m.store = {}
                    }
                    m.normalizeStore()
                } else m.store = {}, m.normalizeStore();
                m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
                    var a, b, c;
                    try {
                        a = k.parse(f.getItem("History.store")) || {}
                    } catch (d) {
                        a = {}
                    }
                    a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                    for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                    for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                    for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                    m.store = a, m.normalizeStore(), c = k.stringify(a);
                    try {
                        f.setItem("History.store", c)
                    } catch (e) {
                        if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                        f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
                    }
                }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), "Apple Computer, Inc." !== e.vendor && "Mozilla" !== (e.appCodeName || "") || (m.Adapter.bind(a, "hashchange", function() {
                    m.Adapter.trigger(a, "popstate")
                }), m.getHash() && m.Adapter.onDomLoad(function() {
                    m.Adapter.trigger(a, "hashchange")
                })))
            }, m.options && m.options.delayInit || m.init()
        }(window), c("vendor/history", function() {}), c("base/top-navigator", ["jquery", "underscore", "base/modules/animate", "base/request-page", "base/page-scroll"], function(a, b, c, d, e) {
            "use strict";

            function f() {
                g()
            }

            function g() {
                var f = b.debounce(function(a) {
                    h(a.target)
                }, 50);
                l.find(".hamburger-menu__button").on("click", f), l.find("a").on("click", k), d.registRequestByContainer(l, function(a) {
                    j(a)
                }), d.registerCallbackHistoryChange(function(a) {
                    j(a), k()
                });
                var g = 70 * a(window).height() / 100,
                    i = "absolute",
                    m = "fixed",
                    n = i,
                    o = b.debounce(function(a) {
                        a > g && n == m || (a > g && n == i ? (n = m, l.css({
                            position: "fixed",
                            top: -l.height() + "px"
                        }), l.addClass("scroll-menu"), c(l, {
                            top: 0
                        }, {
                            duration: 200,
                            easing: "easeOutQuad"
                        })) : g >= a && n == m && (n = i, c(l, {
                            top: -l.height() + "px"
                        }, {
                            duration: 200,
                            easing: "easeOutQuad"
                        }).then(function() {
                            l.css({
                                position: "absolute",
                                top: "0"
                            }), l.removeClass("scroll-menu")
                        })))
                    }, 0);
                e.addCallback(function(a) {
                    o(a)
                })
            }

            function h(c) {
                if (n) {
                    if (n = !1, m = !m) {
                        var d = a(c).parents("body").find(".content-wrapper .content-wrapper-mask");
                        d && 0 != d.length || a(c).parents("body").find(".content-wrapper").append('<div class="content-wrapper-mask"></div>'), a(c).parents("body").find(".content-wrapper-mask").on("click", k)
                    }
                    a(c).parents("body").find(".content-wrapper").toggleClass("show-menu");
                    var e = b.debounce(function() {
                        n = !0
                    }, 10);
                    a(c).parents(".top-navigator-container").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        e()
                    }), a(c).parents(".top-navigator-container").toggleClass("is-active"), a("body").toggleClass("overflow-hidden")
                }
            }

            function i(a) {
                return a.indexOf(window.location.host) < 0 ? window.location.host + a : a
            }

            function j(a) {
                for (var b = l.find(".top-navigator__menu-container").find("a"), c = i(a), d = 0; d < b.length; d++) {
                    var e = i(b.eq(d).attr("href"));
                    e == c ? b.eq(d).addClass("selected-item") : e.length >= c.length ? e.lastIndexOf(c) == e.length - c.length ? b.eq(d).addClass("selected-item") : b.eq(d).removeClass("selected-item") : c.lastIndexOf(e) == c.length - e.length ? b.eq(d).addClass("selected-item") : b.eq(d).removeClass("selected-item")
                }
            }

            function k(b) {
                return m ? (b && b.preventDefault(), m = !m, l.toggleClass("is-active"), l.parents("body").find(".content-wrapper").toggleClass("show-menu", l.hasClass("is-active")), a("body").removeClass("overflow-hidden"), !1) : !1
            }
            e.init();
            var l = null,
                m = !1,
                n = !0;
            return {
                init: function(a) {
                    l = a, f()
                },
                selectMenu: j,
                hideMenu: k,
                getContainer: function() {
                    return l
                }
            }
        }), c("base/request-page", ["jquery", "underscore", "base/loading", "base/modules/jitRequire", "vendor/history", "base/top-navigator", "base/modules/animate"], function(a, b, c, d, e, f, g) {
            "use strict";

            function h() {
                ! function(a) {
                    History.Adapter.bind(a, "statechange", function() {
                        var a = History.getState(),
                            b = !0;
                        a.url.length >= w.length ? a.url.lastIndexOf(w) != a.url.length - w.length && (b = !1) : w.lastIndexOf(a.url) != w.length - a.url.length && (b = !1), b || (A = !0, q(a.url, null, function(a) {
                            A = !1, z && z(a)
                        }))
                    })
                }(window)
            }

            function i(b, c) {
                j();
                try {
                    mapIsCreated = !1, isAddZoomControl = !1, a.ajax({
                        url: b,
                        type: "GET",
                        async: !0,
                        success: function(a) {
                            k(function() {
                                l(a, function(a) {
                                    A || History.pushState({
                                        state: y++
                                    }, a, b), v = !1, c && c(b)
                                })
                            })
                        },
                        error: function() {
                            k(), m()
                        }
                    })
                } catch (d) {
                    k(), m()
                }
            }

            function j() {
                c.startLoading()
            }

            function k(a) {
                c.completeLoading(function() {
                    a && a()
                })
            }

            function l(b, c) {
                var e = a(b).find(".content-container"),
                    f = b.match(/<title>(.*?)<\/title>/),
                    g = f[1],
                    h = !1;
                e.hasClass("home-container") ? (h = !0, e.addClass("loading-back")) : e.addClass("loading"), x.append(e);
                var i = function() {
                    var a = setTimeout(function() {
                        clearTimeout(a);
                        var b = x.find(".content-container");
                        h ? b.addClass("animating-back") : b.addClass("animating"), b.eq(0).one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                            for (var a = 0; a < b.length; a++) h ? b.eq(a).hasClass("loading-back") || b.eq(a).remove() : b.eq(a).hasClass("loading") || b.eq(a).remove();
                            var e = setTimeout(function() {
                                clearTimeout(e), x.find(".content-container").removeClass("loading loading-back animating animating-back"), d.findDeps(x, function() {
                                    var a = setTimeout(function() {
                                        clearTimeout(a), c && c(g)
                                    }, 500)
                                })
                            }, 250)
                        })
                    }, 500)
                };
                i()
            }

            function m() {}

            function n(a) {
                return a && "#" != a && a != w ? (w = o(a), !0) : !1
            }

            function o(a) {
                return a.indexOf(window.location.host) < 0 ? window.location.host + a : a
            }

            function p(a) {
                return 0 == a.indexOf("mailto")
            }

            function q(a, b, c) {
                return v ? !1 : (n(a) && (v = !0, i(a, c), b && b.data("registed", "true")), !1)
            }

            function r(b, c) {
                var d = b.find("a");
                t(d.toArray().map(function(b) {
                    return a(b)
                }), c)
            }

            function s(a) {
                var b = a.find("a");
                u(b)
            }

            function t(b, c) {
                for (var d in b) b[d].data("registed") || (b[d].data("registed", "true"), b[d].on("click", function(b) {
                    b.preventDefault();
                    var d = a(this).attr("href");
                    p(d) ? window.location.href = d : this.host == location.host ? a(this).hasClass("redirect") ? window.open(d, "_blank") : q(d, a(this), c) : window.open(d, "_blank")
                }))
            }

            function u(a) {
                for (var b in a) a[b].data("registed") && a[b].off("click")
            }
            var v = !1,
                w = "",
                x = a(".page-wrapper"),
                y = 1,
                z = null,
                A = !1;
            return h(), {
                registRequestByContainer: r,
                unregistRequestByContainer: s,
                registRequestByItems: t,
                unregistRequestByItems: u,
                loadPageFromUrl: function(a) {
                    q(a)
                },
                registerCallbackHistoryChange: function(a) {
                    z = a
                }
            }
        }), c("base/career-page", ["jquery", "underscore", "base/page-scroll-animation", "base/request-page", "base/modules/animate"], function(a, b, c, d, e) {
            function f(a) {
                var b = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return "" === a ? !1 : !("" !== a && !b.test(a))
            }

            function g(b) {
                c.init(b), d.registRequestByContainer(b.find(".job-details")), a(".pull-right.view-more").on("click", function() {
                    return a("html, body").animate({
                        scrollTop: a(".section-job-opening.container-zindex-one").offset().top - 65 + "px"
                    }, 600), !1
                })
            }

            function h(b) {
                if (b) {
                    var c = a("#careerSignupDialogEmail");
                    "none" == c.css("display") ? (c.css("display", "block"), e(c, {
                        duration: 500,
                        opacity: 1,
                        delay: 500
                    }), m || (m = !0, a("#careerSignupCloseButtonEmail").on("click", function() {
                        h(b)
                    }))) : e(c, {
                        duration: 500,
                        opacity: 0
                    }, {
                        display: "none"
                    })
                } else {
                    var c = a("#careerSignupDialog");
                    "none" == c.css("display") ? (c.css("display", "block"), e(c, {
                        duration: 500,
                        opacity: 1,
                        delay: 500
                    }), l || (l = !0, a("#careerSignupCloseButton").on("click", function() {
                        h()
                    }))) : e(c, {
                        duration: 500,
                        opacity: 0
                    }, {
                        display: "none"
                    })
                }
            }

            function i() {
                var b = a("#careerSignupForm");
                null != b && b.length > 0 && (b.find("#submission-name").val(""), b.find("#submission-email").val(""))
            }

            function j(b, c, d) {
                a.ajax({
                    type: "POST",
                    async: !0,
                    dataType: "json",
                    data: {
                        name: c,
                        email: d
                    },
                    url: b,
                    success: function(a) {
                        n = !1, 1 == a.code ? (i(), h()) : 0 == a.code && h(!0)
                    },
                    error: function() {
                        n = !1
                    }
                })
            }

            function k(b) {
                var c = a("#careerSignupDialog"),
                    d = a("#careerSignupDialogEmail");
                null != c && c.length > 0 && (c.remove(), a("body").append(c)), null != d && d.length > 0 && (d.remove(), a("body").append(d));
                var e = b.find("#careerSignupForm");
                if (null != e && e.length > 0) {
                    var g = e.attr("action"),
                        h = e.find("#submission-name"),
                        i = e.find("#submission-email");
                    e.on("submit", function() {
                        if (n) return !1;
                        var a = !0,
                            b = h.val(),
                            c = i.val();
                        return !b || b.isEmpty() ? (a = !1, h.addClass("input-error")) : h.removeClass("input-error"), c && f(c) ? i.removeClass("input-error") : (a = !1, i.addClass("input-error")), a && (n = !0, j(g, b, c)), !1
                    })
                }
            }
            String.prototype.isEmpty = function() {
                return 0 === this.length || !this.trim()
            };
            var l = !1,
                m = !1,
                n = !1;
            return {
                init: function(a) {
                    g(a), k(a)
                }
            }
        }),
        function(a, b, c, d) {
            function e(b, c) {
                this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                    time: null,
                    target: null,
                    pointer: null,
                    stage: {
                        start: null,
                        current: null
                    },
                    direction: null
                }, this._states = {
                    current: {},
                    tags: {
                        initializing: ["busy"],
                        animating: ["busy"],
                        dragging: ["interacting"]
                    }
                }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                    this._handlers[c] = a.proxy(this[c], this)
                }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
                }, this)), a.each(e.Workers, a.proxy(function(b, c) {
                    this._pipe.push({
                        filter: c.filter,
                        run: a.proxy(c.run, this)
                    })
                }, this)), this.setup(), this.initialize()
            }
            e.Defaults = {
                items: 3,
                loop: !1,
                center: !1,
                rewind: !1,
                mouseDrag: !0,
                touchDrag: !0,
                pullDrag: !0,
                freeDrag: !1,
                margin: 0,
                stagePadding: 0,
                merge: !1,
                mergeFit: !0,
                autoWidth: !1,
                startPosition: 0,
                rtl: !1,
                smartSpeed: 250,
                fluidSpeed: !1,
                dragEndSpeed: !1,
                responsive: {},
                responsiveRefreshRate: 200,
                responsiveBaseElement: b,
                fallbackEasing: "swing",
                info: !1,
                nestedItemSelector: !1,
                itemElement: "div",
                stageElement: "div",
                refreshClass: "owl-refresh",
                loadedClass: "owl-loaded",
                loadingClass: "owl-loading",
                rtlClass: "owl-rtl",
                responsiveClass: "owl-responsive",
                dragClass: "owl-drag",
                itemClass: "owl-item",
                stageClass: "owl-stage",
                stageOuterClass: "owl-stage-outer",
                grabClass: "owl-grab"
            }, e.Width = {
                Default: "default",
                Inner: "inner",
                Outer: "outer"
            }, e.Type = {
                Event: "event",
                State: "state"
            }, e.Plugins = {}, e.Workers = [{
                filter: ["width", "settings"],
                run: function() {
                    this._width = this.$element.width()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(a) {
                    a.current = this._items && this._items[this.relative(this._current)]
                }
            }, {
                filter: ["items", "settings"],
                run: function() {
                    this.$stage.children(".cloned").remove()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = {
                            width: "auto",
                            "margin-left": d ? b : "",
                            "margin-right": d ? "" : b
                        };
                    !c && this.$stage.children().css(e), a.css = e
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = {
                            merge: !1,
                            width: b
                        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                    this._widths = f
                }
            }, {
                filter: ["items", "settings"],
                run: function() {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                    this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function() {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                    this._coordinates = f
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function() {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = {
                            width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                            "padding-left": a || "",
                            "padding-right": a || ""
                        };
                    this.$stage.css(c)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge)
                        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                    else c && (a.css.width = a.items.width, d.css(a.css))
                }
            }, {
                filter: ["items"],
                run: function() {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style")
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(a) {
                    a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
                }
            }, {
                filter: ["position"],
                run: function() {
                    this.animate(this.coordinates(this._current))
                }
            }, {
                filter: ["width", "position", "items", "settings"],
                run: function() {
                    var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                    this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
                }
            }], e.prototype.initialize = function() {
                if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                    var b, c, e;
                    b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
                }
                this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
            }, e.prototype.setup = function() {
                var b = this.viewport(),
                    c = this.options.responsive,
                    d = -1,
                    e = null;
                c ? (a.each(c, function(a) {
                    b >= a && a > d && (d = Number(a))
                }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), null !== this.settings && this._breakpoint === d || (this.trigger("change", {
                    property: {
                        name: "settings",
                        value: e
                    }
                }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                }))
            }, e.prototype.optionsLogic = function() {
                this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
            }, e.prototype.prepare = function(b) {
                var c = this.trigger("prepare", {
                    content: b
                });
                return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
                    content: c.data
                }), c.data
            }, e.prototype.update = function() {
                for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                        return this[a]
                    }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
                this._invalidated = {}, !this.is("valid") && this.enter("valid")
            }, e.prototype.width = function(a) {
                switch (a = a || e.Width.Default) {
                    case e.Width.Inner:
                    case e.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin
                }
            }, e.prototype.refresh = function() {
                this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
            }, e.prototype.onThrottledResize = function() {
                b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
            }, e.prototype.onResize = function() {
                return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
            }, e.prototype.registerEventHandlers = function() {
                a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                    return !1
                })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
            }, e.prototype.onDragStart = function(b) {
                var d = null;
                3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
                    x: d[16 === d.length ? 12 : 4],
                    y: d[16 === d.length ? 13 : 5]
                }) : (d = this.$stage.position(), d = {
                    x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                    y: d.top
                }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                    var d = this.difference(this._drag.pointer, this.pointer(b));
                    a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                }, this)))
            }, e.prototype.onDragMove = function(a) {
                var b = null,
                    c = null,
                    d = null,
                    e = this.difference(this._drag.pointer, this.pointer(a)),
                    f = this.difference(this._drag.stage.start, e);
                this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
            }, e.prototype.onDragEnd = function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b)),
                    e = this._drag.stage.current,
                    f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
                a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                    return !1
                })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
            }, e.prototype.closest = function(b, c) {
                var d = -1,
                    e = 30,
                    f = this.width(),
                    g = this.coordinates();
                return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                    return b > h - e && h + e > b ? d = a : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
                }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
            }, e.prototype.animate = function(b) {
                var c = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                    transform: "translate3d(" + b + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s"
                }) : c ? this.$stage.animate({
                    left: b + "px"
                }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: b + "px"
                })
            }, e.prototype.is = function(a) {
                return this._states.current[a] && this._states.current[a] > 0
            }, e.prototype.current = function(a) {
                if (a === d) return this._current;
                if (0 === this._items.length) return d;
                if (a = this.normalize(a), this._current !== a) {
                    var b = this.trigger("change", {
                        property: {
                            name: "position",
                            value: a
                        }
                    });
                    b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
                }
                return this._current
            }, e.prototype.invalidate = function(b) {
                return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
                    return b
                })
            }, e.prototype.reset = function(a) {
                a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
            }, e.prototype.normalize = function(b, c) {
                var e = this._items.length,
                    f = c ? 0 : this._clones.length;
                return !a.isNumeric(b) || 1 > e ? b = d : (0 > b || b >= e + f) && (b = ((b - f / 2) % e + e) % e + f / 2), b
            }, e.prototype.relative = function(a) {
                return a -= this._clones.length / 2, this.normalize(a, !0)
            }, e.prototype.maximum = function(a) {
                var b, c = this.settings,
                    d = this._coordinates.length,
                    e = Math.abs(this._coordinates[d - 1]) - this._width,
                    f = -1;
                if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
                else if (c.autoWidth || c.merge)
                    for (; d - f > 1;) Math.abs(this._coordinates[b = d + f >> 1]) < e ? f = b : d = b;
                else d = c.center ? this._items.length - 1 : this._items.length - c.items;
                return a && (d -= this._clones.length / 2), Math.max(d, 0)
            }, e.prototype.minimum = function(a) {
                return a ? 0 : this._clones.length / 2
            }, e.prototype.items = function(a) {
                return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
            }, e.prototype.mergers = function(a) {
                return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
            }, e.prototype.clones = function(b) {
                var c = this._clones.length / 2,
                    e = c + this._items.length,
                    f = function(a) {
                        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                    };
                return b === d ? a.map(this._clones, function(a, b) {
                    return f(b)
                }) : a.map(this._clones, function(a, c) {
                    return a === b ? f(c) : null
                })
            }, e.prototype.speed = function(a) {
                return a !== d && (this._speed = a), this._speed
            }, e.prototype.coordinates = function(b) {
                var c = null;
                return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                    return this.coordinates(b)
                }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
            }, e.prototype.duration = function(a, b, c) {
                return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
            }, e.prototype.to = function(a, b) {
                var c = this.current(),
                    d = null,
                    e = a - this.relative(c),
                    f = (e > 0) - (0 > e),
                    g = this._items.length,
                    h = this.minimum(),
                    i = this.maximum();
                this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
            }, e.prototype.next = function(a) {
                a = a || !1, this.to(this.relative(this.current()) + 1, a)
            }, e.prototype.prev = function(a) {
                a = a || !1, this.to(this.relative(this.current()) - 1, a)
            }, e.prototype.onTransitionEnd = function(a) {
                return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
            }, e.prototype.viewport = function() {
                var d;
                if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
                else if (b.innerWidth) d = b.innerWidth;
                else {
                    if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                    d = c.documentElement.clientWidth
                }
                return d
            }, e.prototype.replace = function(b) {
                this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                    return 1 === this.nodeType
                }).each(a.proxy(function(a, b) {
                    b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
                }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
            }, e.prototype.add = function(b, c) {
                var e = this.relative(this._current);
                c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
                    content: b,
                    position: c
                }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
                    content: b,
                    position: c
                })
            }, e.prototype.remove = function(a) {
                a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                    content: this._items[a],
                    position: a
                }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                    content: null,
                    position: a
                }))
            }, e.prototype.preloadAutoWidthImages = function(b) {
                b.each(a.proxy(function(b, c) {
                    this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
                }, this))
            }, e.prototype.destroy = function() {
                this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
                for (var d in this._plugins) this._plugins[d].destroy();
                this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
            }, e.prototype.op = function(a, b, c) {
                var d = this.settings.rtl;
                switch (b) {
                    case "<":
                        return d ? a > c : c > a;
                    case ">":
                        return d ? c > a : a > c;
                    case ">=":
                        return d ? c >= a : a >= c;
                    case "<=":
                        return d ? a >= c : c >= a
                }
            }, e.prototype.on = function(a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
            }, e.prototype.off = function(a, b, c, d) {
                a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
            }, e.prototype.trigger = function(b, c, d, f, g) {
                var h = {
                        item: {
                            count: this._items.length,
                            index: this.current()
                        }
                    },
                    i = a.camelCase(a.grep(["on", b, d], function(a) {
                        return a
                    }).join("-").toLowerCase()),
                    j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                        relatedTarget: this
                    }, h, c));
                return this._supress[b] || (a.each(this._plugins, function(a, b) {
                    b.onTrigger && b.onTrigger(j)
                }), this.register({
                    type: e.Type.Event,
                    name: b
                }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
            }, e.prototype.enter = function(b) {
                a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
                }, this))
            }, e.prototype.leave = function(b) {
                a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                    this._states.current[b]--
                }, this))
            }, e.prototype.register = function(b) {
                if (b.type === e.Type.Event) {
                    if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                        var c = a.event.special[b.name]._default;
                        a.event.special[b.name]._default = function(a) {
                            return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                        }, a.event.special[b.name].owl = !0
                    }
                } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                    return a.inArray(c, this._states.tags[b.name]) === d
                }, this)))
            }, e.prototype.suppress = function(b) {
                a.each(b, a.proxy(function(a, b) {
                    this._supress[b] = !0
                }, this))
            }, e.prototype.release = function(b) {
                a.each(b, a.proxy(function(a, b) {
                    delete this._supress[b]
                }, this))
            }, e.prototype.pointer = function(a) {
                var c = {
                    x: null,
                    y: null
                };
                return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
            }, e.prototype.difference = function(a, b) {
                return {
                    x: a.x - b.x,
                    y: a.y - b.y
                }
            }, a.fn.owlCarousel = function(b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    var d = a(this),
                        f = d.data("owl.carousel");
                    f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                        f.register({
                            type: e.Type.Event,
                            name: c
                        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                            a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                        }, f))
                    })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
                })
            }, a.fn.owlCarousel.Constructor = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this._core = b, this._interval = null, this._visible = null, this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch()
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            e.Defaults = {
                autoRefresh: !0,
                autoRefreshInterval: 500
            }, e.prototype.watch = function() {
                this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
            }, e.prototype.refresh = function() {
                this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
            }, e.prototype.destroy = function() {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this._core = b, this._loaded = [], this._handlers = {
                    "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                            for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                                    this.load(b)
                                }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            e.Defaults = {
                lazyLoad: !1
            }, e.prototype.load = function(c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                    var e, f = a(d),
                        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                    this._core.trigger("load", {
                        element: f,
                        url: g
                    }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                        f.css("opacity", 1), this._core.trigger("loaded", {
                            element: f,
                            url: g
                        }, "lazy")
                    }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                        f.css({
                            "background-image": "url(" + g + ")",
                            opacity: "1"
                        }), this._core.trigger("loaded", {
                            element: f,
                            url: g
                        }, "lazy")
                    }, this), e.src = g)
                }, this)), this._loaded.push(d.get(0)))
            }, e.prototype.destroy = function() {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this._core = b, this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && this.update()
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                    }, this),
                    "loaded.owl.lazy": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            e.Defaults = {
                autoHeight: !1,
                autoHeightClass: "owl-height"
            }, e.prototype.update = function() {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.$stage.children().toArray().slice(b, c);
                heights = [], maxheight = 0, a.each(d, function(b, c) {
                    heights.push(a(c).height())
                }), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
            }, e.prototype.destroy = function() {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this._core = b, this._videos = {}, this._playing = null, this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"]
                        })
                    }, this),
                    "resize.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop()
                    }, this),
                    "prepared.owl.carousel": a.proxy(function(b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                        }
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                    this.play(a)
                }, this))
            };
            e.Defaults = {
                video: !1,
                videoHeight: !1,
                videoWidth: !1
            }, e.prototype.fetch = function(a, b) {
                var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
                else {
                    if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                    c = "vimeo"
                }
                d = d[6], this._videos[g] = {
                    type: c,
                    id: d,
                    width: e,
                    height: f
                }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
            }, e.prototype.thumbnail = function(b, c) {
                var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function(a) {
                        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                    };
                return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "/web/20160603003234/http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
                    type: "GET",
                    url: "/web/20160603003234/http://vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(a) {
                        f = a[0].thumbnail_large, l(f)
                    }
                }))
            }, e.prototype.stop = function() {
                this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
            }, e.prototype.play = function(b) {
                var c, d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="/web/20160603003234/http://www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type && (c = '<iframe src="/web/20160603003234/http://player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
            }, e.prototype.isInFullScreen = function() {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame")
            }, e.prototype.destroy = function() {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.Video = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                    "change.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                        a.namespace && (this.swapping = "translated" == a.type)
                    }, this),
                    "translate.owl.carousel": a.proxy(function(a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                    }, this)
                }, this.core.$element.on(this.handlers)
            };
            e.Defaults = {
                animateOut: !1,
                animateIn: !1
            }, e.prototype.swap = function() {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b, c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                        left: b + "px"
                    }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
                }
            }, e.prototype.clear = function(b) {
                a(b.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
            }, e.prototype.destroy = function() {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            var e = function(b) {
                this._core = b, this._interval = null, this._paused = !1, this._handlers = {
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "settings" === a.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
                    }, this),
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoplay && this.play()
                    }, this),
                    "play.owl.autoplay": a.proxy(function(a, b, c) {
                        a.namespace && this.play(b, c)
                    }, this),
                    "stop.owl.autoplay": a.proxy(function(a) {
                        a.namespace && this.stop()
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                    }, this)
                }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
            };
            e.Defaults = {
                autoplay: !1,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !1,
                autoplaySpeed: !1
            }, e.prototype.play = function(d, e) {
                this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = b.setInterval(a.proxy(function() {
                    this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
                }, this), d || this._core.settings.autoplayTimeout))
            }, e.prototype.stop = function() {
                this._core.is("rotating") && (b.clearInterval(this._interval), this._core.leave("rotating"))
            }, e.prototype.pause = function() {
                this._core.is("rotating") && (this._paused = !0)
            }, e.prototype.destroy = function() {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            "use strict";
            var e = function(b) {
                this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to
                }, this._handlers = {
                    "prepared.owl.carousel": a.proxy(function(b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
                    }, this),
                    "added.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                    }, this),
                    "remove.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" == a.property.name && this.draw()
                    }, this),
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
            };
            e.Defaults = {
                nav: !1,
                navText: ["prev", "next"],
                navSpeed: !1,
                navElement: "div",
                navContainer: !1,
                navContainerClass: "owl-nav",
                navClass: ["owl-prev", "owl-next"],
                slideBy: 1,
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                dots: !0,
                dotsEach: !1,
                dotsData: !1,
                dotsSpeed: !1,
                dotsContainer: !1
            }, e.prototype.initialize = function() {
                var b, c = this._core.settings;
                this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                    this.prev(c.navSpeed)
                }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                    this.next(c.navSpeed)
                }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                    var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                    b.preventDefault(), this.to(d, c.dotsSpeed)
                }, this));
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
            }, e.prototype.destroy = function() {
                var a, b, c, d;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
            }, e.prototype.update = function() {
                var a, b, c, d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
                    for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                        if (b >= h || 0 === b) {
                            if (this._pages.push({
                                    start: Math.min(f, a - d),
                                    end: a - d + h - 1
                                }), Math.min(f, a - d) === f) break;
                            b = 0, ++c
                        }
                        b += this._core.mergers(this._core.relative(a))
                    }
            }, e.prototype.draw = function() {
                var b, c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
            }, e.prototype.onTrigger = function(b) {
                var c = this._core.settings;
                b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
                }
            }, e.prototype.current = function() {
                var b = this._core.relative(this._core.current());
                return a.grep(this._pages, a.proxy(function(a, c) {
                    return a.start <= b && a.end >= b
                }, this)).pop()
            }, e.prototype.getPosition = function(b) {
                var c, d, e = this._core.settings;
                return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
            }, e.prototype.next = function(b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
            }, e.prototype.prev = function(b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
            }, e.prototype.to = function(b, c, d) {
                var e;
                d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
            }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            "use strict";
            var e = function(c) {
                this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                    }, this),
                    "prepared.owl.carousel": a.proxy(function(b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function(c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a.map(this._hashes, function(a, b) {
                                    return a === d ? b : null
                                }).join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e
                        }
                    }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                    var c = b.location.hash.substring(1),
                        e = this._core.$stage.children(),
                        f = this._hashes[c] && e.index(this._hashes[c]);
                    f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
                }, this))
            };
            e.Defaults = {
                URLhashListener: !1
            }, e.prototype.destroy = function() {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
            }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
        }(window.Zepto || window.jQuery, window, document),
        function(a, b, c, d) {
            function e(b, c) {
                var e = !1,
                    f = b.charAt(0).toUpperCase() + b.slice(1);
                return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                    return g[b] !== d ? (e = c ? b : !0, !1) : void 0
                }), e
            }

            function f(a) {
                return e(a, !0)
            }
            var g = a("<support>").get(0).style,
                h = "Webkit Moz O ms".split(" "),
                i = {
                    transition: {
                        end: {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd",
                            transition: "transitionend"
                        }
                    },
                    animation: {
                        end: {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oAnimationEnd",
                            animation: "animationend"
                        }
                    }
                },
                j = {
                    csstransforms: function() {
                        return !!e("transform")
                    },
                    csstransforms3d: function() {
                        return !!e("perspective")
                    },
                    csstransitions: function() {
                        return !!e("transition")
                    },
                    cssanimations: function() {
                        return !!e("animation")
                    }
                };
            j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
        }(window.Zepto || window.jQuery, window, document), c("lib/owl.carousel", ["jquery"], function(a) {
            return function() {
                var b;
                return b || a.jQuery.fn.owlCarousel
            }
        }(this)), c("base/carousel-slider", ["jquery", "underscore", "base/modules/animate", "lib/owl.carousel"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                a.children().children().length >= 2 && a.children().addClass("owl-carousel").owlCarousel({
                    items: 1,
                    smartSpeed: 500,
                    loop: !0,
                    nav: !0
                })
            }
            return {
                init: function(a) {
                    return new e(a)
                }
            }
        }), c("base/click-item", ["jquery", "underscore", "base/top-navigator", "base/request-page"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                d.registRequestByContainer(a, f)
            }

            function f(a) {
                c.selectMenu(a)
            }
            return {
                init: e
            }
        }), c("base/common-page-animation", ["jquery", "underscore", "base/page-scroll-animation"], function(a, b, c) {
            function d(a) {
                c.init(a)
            }
            return {
                init: function(a) {
                    d(a)
                }
            }
        }),
        function(a) {
            function b(a) {
                return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
            }

            function d(a, b) {
                var c = e(a, b) ? g : f;
                c(a, b)
            }
            var e, f, g;
            "classList" in document.documentElement ? (e = function(a, b) {
                return a.classList.contains(b)
            }, f = function(a, b) {
                a.classList.add(b)
            }, g = function(a, b) {
                a.classList.remove(b)
            }) : (e = function(a, c) {
                return b(c).test(a.className)
            }, f = function(a, b) {
                e(a, b) || (a.className = a.className + " " + b)
            }, g = function(a, c) {
                a.className = a.className.replace(b(c), " ")
            });
            var h = {
                hasClass: e,
                addClass: f,
                removeClass: g,
                toggleClass: d,
                has: e,
                add: f,
                remove: g,
                toggle: d
            };
            "function" == typeof c && c.amd ? c("lib/classie", h) : a.classie = h
        }(window),
        function(a) {
            "use strict";

            function b(a) {
                return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
            }

            function d(a, b) {
                var c = h(a, b) ? j : i;
                c(a, b)
            }

            function e(a, b) {
                if (!a) return !1;
                for (var c = a.target || a.srcElement || a || !1; c && c != b;) c = c.parentNode || !1;
                return c !== !1
            }

            function f(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                return a
            }

            function g(a, b) {
                this.el = a, this.options = f({}, this.options), f(this.options, b), this._init()
            }
            var h, i, j;
            "classList" in document.documentElement ? (h = function(a, b) {
                return a.classList.contains(b)
            }, i = function(a, b) {
                a.classList.add(b)
            }, j = function(a, b) {
                a.classList.remove(b)
            }) : (h = function(a, c) {
                return b(c).test(a.className)
            }, i = function(a, b) {
                h(a, b) || (a.className = a.className + " " + b)
            }, j = function(a, c) {
                a.className = a.className.replace(b(c), " ")
            });
            var k = {
                hasClass: h,
                addClass: i,
                removeClass: j,
                toggleClass: d,
                has: h,
                add: i,
                remove: j,
                toggle: d
            };
            "function" == typeof c && c.amd ? c("lib/selectFx", k) : a.classie = k, g.prototype.options = {
                newTab: !0,
                stickyPlaceholder: !0,
                onChange: function(a) {
                    return !1
                }
            }, g.prototype._init = function() {
                var a = this.el.querySelector("option[selected]");
                this.hasDefaultPlaceholder = a && a.disabled, this.selectedOpt = a || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
            }, g.prototype._createSelectEl = function() {
                var a = "",
                    b = function(a) {
                        var b = "",
                            c = "",
                            d = "";
                        return !a.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (c += "cs-selected ", this.foundSelected = !0), a.getAttribute("data-class") && (c += a.getAttribute("data-class")), a.getAttribute("data-link") && (d = "data-link=" + a.getAttribute("data-link")), "" !== c && (b = 'class="' + c + '" '), "<li " + b + d + ' data-option data-value="' + a.value + '"><span>' + a.textContent + "</span></li>"
                    };
                [].slice.call(this.el.children).forEach(function(c) {
                    if (!c.disabled) {
                        var d = c.tagName.toLowerCase();
                        "option" === d ? a += b(c) : "optgroup" === d && (a += '<li class="cs-optgroup"><span>' + c.label + "</span><ul>", [].slice.call(c.children).forEach(function(c) {
                            a += b(c)
                        }), a += "</ul></li>")
                    }
                });
                var c = '<div class="cs-options"><ul>' + a + "</ul></div>";
                this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + c, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
            }, g.prototype._initEvents = function() {
                var a = this;
                this.selPlaceholder.addEventListener("click", function() {
                    a._toggleSelect()
                }), this.selOpts.forEach(function(b, c) {
                    b.addEventListener("click", function() {
                        a.current = c, a._changeOption(), a._toggleSelect()
                    })
                }), document.addEventListener("click", function(b) {
                    var c = b.target;
                    a._isOpen() && c !== a.selEl && !e(c, a.selEl) && a._toggleSelect()
                }), this.selEl.addEventListener("keydown", function(b) {
                    var c = b.keyCode || b.which;
                    switch (c) {
                        case 38:
                            b.preventDefault(), a._navigateOpts("prev");
                            break;
                        case 40:
                            b.preventDefault(), a._navigateOpts("next");
                            break;
                        case 32:
                            b.preventDefault(), a._isOpen() && "undefined" != typeof a.preSelCurrent && -1 !== a.preSelCurrent && a._changeOption(), a._toggleSelect();
                            break;
                        case 13:
                            b.preventDefault(), a._isOpen() && "undefined" != typeof a.preSelCurrent && -1 !== a.preSelCurrent && (a._changeOption(), a._toggleSelect());
                            break;
                        case 27:
                            b.preventDefault(), a._isOpen() && a._toggleSelect()
                    }
                })
            }, g.prototype._navigateOpts = function(a) {
                this._isOpen() || this._toggleSelect();
                var b = "undefined" != typeof this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
                ("prev" === a && b > 0 || "next" === a && b < this.selOptsCount - 1) && (this.preSelCurrent = "next" === a ? b + 1 : b - 1, this._removeFocus(), k.add(this.selOpts[this.preSelCurrent], "cs-focus"))
            }, g.prototype._toggleSelect = function() {
                this._removeFocus(), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), k.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), k.add(this.selEl, "cs-active"))
            }, g.prototype._changeOption = function() {
                "undefined" != typeof this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
                var b = this.selOpts[this.current];
                this.selPlaceholder.textContent = b.textContent, this.el.value = b.getAttribute("data-value");
                var c = this.selEl.querySelector("li.cs-selected");
                c && k.remove(c, "cs-selected"), k.add(b, "cs-selected"), b.getAttribute("data-link") && (this.options.newTab ? a.open(b.getAttribute("data-link"), "_blank") : a.location = b.getAttribute("data-link")), this.options.onChange(this.el.value)
            }, g.prototype._isOpen = function(a) {
                return k.has(this.selEl, "cs-active")
            }, g.prototype._removeFocus = function(a) {
                var b = this.selEl.querySelector("li.cs-focus");
                b && k.remove(b, "cs-focus")
            }, a.SelectFx = g
        }(window), c("lib/sifter", [], function() {
            var a = function(a, b) {
                this.items = a, this.settings = b || {
                    diacritics: !0
                }
            };
            a.prototype.tokenize = function(a) {
                if (a = d(String(a || "").toLowerCase()), !a || !a.length) return [];
                var b, c, f, h, i = [],
                    j = a.split(/ +/);
                for (b = 0, c = j.length; c > b; b++) {
                    if (f = e(j[b]), this.settings.diacritics)
                        for (h in g) g.hasOwnProperty(h) && (f = f.replace(new RegExp(h, "g"), g[h]));
                    i.push({
                        string: j[b],
                        regex: new RegExp(f, "i")
                    })
                }
                return i
            }, a.prototype.iterator = function(a, b) {
                var c;
                c = f(a) ? Array.prototype.forEach || function(a) {
                    for (var b = 0, c = this.length; c > b; b++) a(this[b], b, this)
                } : function(a) {
                    for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this)
                }, c.apply(a, [b])
            }, a.prototype.getScoreFunction = function(a, b) {
                var c, d, e, f;
                c = this, a = c.prepareSearch(a, b), e = a.tokens, d = a.options.fields, f = e.length;
                var g = function(a, b) {
                        var c, d;
                        return a ? (a = String(a || ""), d = a.search(b.regex), -1 === d ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
                    },
                    h = function() {
                        var a = d.length;
                        return a ? 1 === a ? function(a, b) {
                            return g(b[d[0]], a)
                        } : function(b, c) {
                            for (var e = 0, f = 0; a > e; e++) f += g(c[d[e]], b);
                            return f / a
                        } : function() {
                            return 0
                        }
                    }();
                return f ? 1 === f ? function(a) {
                    return h(e[0], a)
                } : "and" === a.options.conjunction ? function(a) {
                    for (var b, c = 0, d = 0; f > c; c++) {
                        if (b = h(e[c], a), 0 >= b) return 0;
                        d += b
                    }
                    return d / f
                } : function(a) {
                    for (var b = 0, c = 0; f > b; b++) c += h(e[b], a);
                    return c / f
                } : function() {
                    return 0
                }
            }, a.prototype.getSortFunction = function(a, c) {
                var d, e, f, g, h, i, j, k, l, m, n;
                if (f = this, a = f.prepareSearch(a, c), n = !a.query && c.sort_empty || c.sort, l = function(a, b) {
                        return "$score" === a ? b.score : f.items[b.id][a]
                    }, h = [], n)
                    for (d = 0, e = n.length; e > d; d++)(a.query || "$score" !== n[d].field) && h.push(n[d]);
                if (a.query) {
                    for (m = !0, d = 0, e = h.length; e > d; d++)
                        if ("$score" === h[d].field) {
                            m = !1;
                            break
                        }
                    m && h.unshift({
                        field: "$score",
                        direction: "desc"
                    })
                } else
                    for (d = 0, e = h.length; e > d; d++)
                        if ("$score" === h[d].field) {
                            h.splice(d, 1);
                            break
                        } for (k = [], d = 0, e = h.length; e > d; d++) k.push("desc" === h[d].direction ? -1 : 1);
                return i = h.length, i ? 1 === i ? (g = h[0].field, j = k[0], function(a, c) {
                    return j * b(l(g, a), l(g, c))
                }) : function(a, c) {
                    var d, e, f;
                    for (d = 0; i > d; d++)
                        if (f = h[d].field, e = k[d] * b(l(f, a), l(f, c))) return e;
                    return 0
                } : null
            }, a.prototype.prepareSearch = function(a, b) {
                if ("object" == typeof a) return a;
                b = c({}, b);
                var d = b.fields,
                    e = b.sort,
                    g = b.sort_empty;
                return d && !f(d) && (b.fields = [d]), e && !f(e) && (b.sort = [e]), g && !f(g) && (b.sort_empty = [g]), {
                    options: b,
                    query: String(a || "").toLowerCase(),
                    tokens: this.tokenize(a),
                    total: 0,
                    items: []
                }
            }, a.prototype.search = function(a, b) {
                var c, d, e, f, g = this;
                return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function(a, e) {
                    c = f(a), (b.filter === !1 || c > 0) && d.items.push({
                        score: c,
                        id: e
                    })
                }) : g.iterator(g.items, function(a, b) {
                    d.items.push({
                        score: 1,
                        id: b
                    })
                }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
            };
            var b = function(a, b) {
                    return "number" == typeof a && "number" == typeof b ? a > b ? 1 : b > a ? -1 : 0 : (a = h(String(a || "")), b = h(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
                },
                c = function(a, b) {
                    var c, d, e, f;
                    for (c = 1, d = arguments.length; d > c; c++)
                        if (f = arguments[c])
                            for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                    return a
                },
                d = function(a) {
                    return (a + "").replace(/^\s+|\s+$|/g, "")
                },
                e = function(a) {
                    return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
                },
                f = Array.isArray || $ && $.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                g = {
                    a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                    c: "[cÇçćĆčČ]",
                    d: "[dđĐďĎ]",
                    e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                    i: "[iÌÍÎÏìíîïĪī]",
                    l: "[lłŁ]",
                    n: "[nÑñňŇńŃ]",
                    o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                    r: "[rřŘ]",
                    s: "[sŠšśŚ]",
                    t: "[tťŤ]",
                    u: "[uÙÚÛÜùúûüůŮŪū]",
                    y: "[yŸÿýÝ]",
                    z: "[zŽžżŻźŹ]"
                },
                h = function() {
                    var a, b, c, d, e = "",
                        f = {};
                    for (c in g)
                        if (g.hasOwnProperty(c))
                            for (d = g[c].substring(2, g[c].length - 1), e += d, a = 0, b = d.length; b > a; a++) f[d.charAt(a)] = c;
                    var h = new RegExp("[" + e + "]", "g");
                    return function(a) {
                        return a.replace(h, function(a) {
                            return f[a]
                        }).toLowerCase()
                    }
                }();
            return a
        }), c("lib/microplugin", [], function() {
            var a = {};
            a.mixin = function(a) {
                a.plugins = {}, a.prototype.initializePlugins = function(a) {
                    var c, d, e, f = this,
                        g = [];
                    if (f.plugins = {
                            names: [],
                            settings: {},
                            requested: {},
                            loaded: {}
                        }, b.isArray(a))
                        for (c = 0, d = a.length; d > c; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
                    else if (a)
                        for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
                    for (; g.length;) f.require(g.shift())
                }, a.prototype.loadPlugin = function(b) {
                    var c = this,
                        d = c.plugins,
                        e = a.plugins[b];
                    if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
                    d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
                }, a.prototype.require = function(a) {
                    var b = this,
                        c = b.plugins;
                    if (!b.plugins.loaded.hasOwnProperty(a)) {
                        if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
                        b.loadPlugin(a)
                    }
                    return c.loaded[a]
                }, a.define = function(b, c) {
                    a.plugins[b] = {
                        name: b,
                        fn: c
                    }
                }
            };
            var b = {
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }
            };
            return a
        }), c("lib/selectize", ["jquery", "sifter", "microplugin"], function(a, b, c) {
            "use strict";
            var d = function(a, b) {
                    if ("string" != typeof b || b.length) {
                        var c = "string" == typeof b ? new RegExp(b, "i") : b,
                            d = function(a) {
                                var b = 0;
                                if (3 === a.nodeType) {
                                    var e = a.data.search(c);
                                    if (e >= 0 && a.data.length > 0) {
                                        var f = a.data.match(c),
                                            g = document.createElement("span");
                                        g.className = "highlight";
                                        var h = a.splitText(e),
                                            i = (h.splitText(f[0].length), h.cloneNode(!0));
                                        g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
                                    }
                                } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))
                                    for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
                                return b
                            };
                        return a.each(function() {
                            d(this)
                        })
                    }
                },
                e = function() {};
            e.prototype = {
                on: function(a, b) {
                    this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
                },
                off: function(a, b) {
                    var c = arguments.length;
                    return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
                },
                trigger: function(a) {
                    if (this._events = this._events || {}, a in this._events != !1)
                        for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }, e.mixin = function(a) {
                for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]]
            };
            var f = /Mac/.test(navigator.userAgent),
                g = 65,
                h = 13,
                i = 27,
                j = 37,
                k = 38,
                l = 80,
                m = 39,
                n = 40,
                o = 78,
                p = 8,
                q = 46,
                r = 16,
                s = f ? 91 : 17,
                t = f ? 18 : 17,
                u = 9,
                v = 1,
                w = 2,
                x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
                y = function(a) {
                    return "undefined" != typeof a
                },
                z = function(a) {
                    return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
                },
                A = function(a) {
                    return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                },
                B = function(a) {
                    return (a + "").replace(/\$/g, "$$$$")
                },
                C = {};
            C.before = function(a, b, c) {
                var d = a[b];
                a[b] = function() {
                    return c.apply(a, arguments), d.apply(a, arguments)
                }
            }, C.after = function(a, b, c) {
                var d = a[b];
                a[b] = function() {
                    var b = d.apply(a, arguments);
                    return c.apply(a, arguments), b
                }
            };
            var D = function(a) {
                    var b = !1;
                    return function() {
                        b || (b = !0, a.apply(this, arguments))
                    }
                },
                E = function(a, b) {
                    var c;
                    return function() {
                        var d = this,
                            e = arguments;
                        window.clearTimeout(c), c = window.setTimeout(function() {
                            a.apply(d, e)
                        }, b)
                    }
                },
                F = function(a, b, c) {
                    var d, e = a.trigger,
                        f = {};
                    a.trigger = function() {
                        var c = arguments[0];
                        return -1 === b.indexOf(c) ? e.apply(a, arguments) : void(f[c] = arguments)
                    }, c.apply(a, []), a.trigger = e;
                    for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d])
                },
                G = function(a, b, c, d) {
                    a.on(b, c, function(b) {
                        for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
                        return b.currentTarget = c, d.apply(this, [b])
                    })
                },
                H = function(a) {
                    var b = {};
                    if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
                    else if (document.selection) {
                        a.focus();
                        var c = document.selection.createRange(),
                            d = document.selection.createRange().text.length;
                        c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d
                    }
                    return b
                },
                I = function(a, b, c) {
                    var d, e, f = {};
                    if (c)
                        for (d = 0, e = c.length; e > d; d++) f[c[d]] = a.css(c[d]);
                    else f = a.css();
                    b.css(f)
                },
                J = function(b, c) {
                    if (!b) return 0;
                    var d = a("<test>").css({
                        position: "absolute",
                        top: -99999,
                        left: -99999,
                        width: "auto",
                        padding: 0,
                        whiteSpace: "pre"
                    }).text(b).appendTo("body");
                    I(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                    var e = d.width();
                    return d.remove(), e
                },
                K = function(a) {
                    var b = null,
                        c = function(c, d) {
                            var e, f, g, h, i, j, k, l;
                            c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && 122 >= f || f >= 65 && 90 >= f || f >= 48 && 57 >= f || 32 === f, f === q || f === p ? (l = H(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = J(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
                        };
                    a.on("keydown keyup update blur", c), c()
                },
                L = function(c, d) {
                    var e, f, g, h, i = this;
                    h = c[0], h.selectize = i;
                    var j = window.getComputedStyle && window.getComputedStyle(h, null);
                    if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
                            order: 0,
                            settings: d,
                            $input: c,
                            tabIndex: c.attr("tabindex") || "",
                            tagType: "select" === h.tagName.toLowerCase() ? v : w,
                            rtl: /rtl/i.test(g),
                            eventNS: ".selectize" + ++L.count,
                            highlightedValue: null,
                            isOpen: !1,
                            isDisabled: !1,
                            isRequired: c.is("[required]"),
                            isInvalid: !1,
                            isLocked: !1,
                            isFocused: !1,
                            isInputHidden: !1,
                            isSetup: !1,
                            isShiftDown: !1,
                            isCmdDown: !1,
                            isCtrlDown: !1,
                            ignoreFocus: !1,
                            ignoreBlur: !1,
                            ignoreHover: !1,
                            hasOptions: !1,
                            currentResults: null,
                            lastValue: "",
                            caretPos: 0,
                            loading: 0,
                            loadedSearches: {},
                            $activeOption: null,
                            $activeItems: [],
                            optgroups: {},
                            options: {},
                            userOptions: {},
                            items: [],
                            renderCache: {},
                            onSearchChange: null === d.loadThrottle ? i.onSearchChange : E(i.onSearchChange, d.loadThrottle)
                        }), i.sifter = new b(this.options, {
                            diacritics: d.diacritics
                        }), i.settings.options) {
                        for (e = 0, f = i.settings.options.length; f > e; e++) i.registerOption(i.settings.options[e]);
                        delete i.settings.options
                    }
                    if (i.settings.optgroups) {
                        for (e = 0, f = i.settings.optgroups.length; f > e; e++) i.registerOptionGroup(i.settings.optgroups[e]);
                        delete i.settings.optgroups
                    }
                    i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
                };
            return e.mixin(L), c.mixin(L), a.extend(L.prototype, {
                setup: function() {
                    var b, c, d, e, g, h, i, j, k, l = this,
                        m = l.settings,
                        n = l.eventNS,
                        o = a(window),
                        p = a(document),
                        q = l.$input;
                    if (i = l.settings.mode, j = q.attr("class") || "", b = a("<div>").addClass(m.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(m.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", q.is(":disabled") ? "-1" : l.tabIndex), h = a(m.dropdownParent || b), e = a("<div>").addClass(m.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(m.dropdownContentClass).appendTo(e), l.settings.copyClassesToDropdown && e.addClass(j), b.css({
                            width: q[0].style.width
                        }), l.plugins.names.length && (k = "plugin-" + l.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === m.maxItems || m.maxItems > 1) && l.tagType === v && q.attr("multiple", "multiple"), l.settings.placeholder && d.attr("placeholder", m.placeholder), !l.settings.splitOn && l.settings.delimiter) {
                        var u = l.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                        l.settings.splitOn = new RegExp("\\s*" + u + "+\\s*")
                    }
                    q.attr("autocorrect") && d.attr("autocorrect", q.attr("autocorrect")), q.attr("autocapitalize") && d.attr("autocapitalize", q.attr("autocapitalize")), l.$wrapper = b, l.$control = c, l.$control_input = d, l.$dropdown = e, l.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function() {
                        return l.onOptionHover.apply(l, arguments)
                    }), e.on("mousedown click", "[data-selectable]", function() {
                        return l.onOptionSelect.apply(l, arguments)
                    }), G(c, "mousedown", "*:not(input)", function() {
                        return l.onItemSelect.apply(l, arguments)
                    }), K(d), c.on({
                        mousedown: function() {
                            return l.onMouseDown.apply(l, arguments)
                        },
                        click: function() {
                            return l.onClick.apply(l, arguments)
                        }
                    }), d.on({
                        mousedown: function(a) {
                            a.stopPropagation()
                        },
                        keydown: function() {
                            return l.onKeyDown.apply(l, arguments)
                        },
                        keyup: function() {
                            return l.onKeyUp.apply(l, arguments)
                        },
                        keypress: function() {
                            return l.onKeyPress.apply(l, arguments)
                        },
                        resize: function() {
                            l.positionDropdown.apply(l, [])
                        },
                        blur: function() {
                            return l.onBlur.apply(l, arguments)
                        },
                        focus: function() {
                            return l.ignoreBlur = !1, l.onFocus.apply(l, arguments)
                        },
                        paste: function() {
                            return l.onPaste.apply(l, arguments)
                        }
                    }), p.on("keydown" + n, function(a) {
                        l.isCmdDown = a[f ? "metaKey" : "ctrlKey"], l.isCtrlDown = a[f ? "altKey" : "ctrlKey"], l.isShiftDown = a.shiftKey
                    }), p.on("keyup" + n, function(a) {
                        a.keyCode === t && (l.isCtrlDown = !1), a.keyCode === r && (l.isShiftDown = !1), a.keyCode === s && (l.isCmdDown = !1)
                    }), p.on("mousedown" + n, function(a) {
                        if (l.isFocused) {
                            if (a.target === l.$dropdown[0] || a.target.parentNode === l.$dropdown[0]) return !1;
                            l.$control.has(a.target).length || a.target === l.$control[0] || l.blur(a.target)
                        }
                    }), o.on(["scroll" + n, "resize" + n].join(" "), function() {
                        l.isOpen && l.positionDropdown.apply(l, arguments)
                    }), o.on("mousemove" + n, function() {
                        l.ignoreHover = !1
                    }), this.revertSettings = {
                        $children: q.children().detach(),
                        tabindex: q.attr("tabindex")
                    }, q.attr("tabindex", -1).hide().after(l.$wrapper), a.isArray(m.items) && (l.setValue(m.items), delete m.items), x && q.on("invalid" + n, function(a) {
                        a.preventDefault(), l.isInvalid = !0, l.refreshState()
                    }), l.updateOriginalInput(), l.refreshItems(), l.refreshState(), l.updatePlaceholder(), l.isSetup = !0, q.is(":disabled") && l.disable(), l.on("change", this.onChange), q.data("selectize", l), q.addClass("selectized"), l.trigger("initialize"), m.preload === !0 && l.onSearchChange("")
                },
                setupTemplates: function() {
                    var b = this,
                        c = b.settings.labelField,
                        d = b.settings.optgroupLabelField,
                        e = {
                            optgroup: function(a) {
                                return '<div class="optgroup">' + a.html + "</div>"
                            },
                            optgroup_header: function(a, b) {
                                return '<div class="optgroup-header">' + b(a[d]) + "</div>"
                            },
                            option: function(a, b) {
                                return '<div class="option">' + b(a[c]) + "</div>"
                            },
                            item: function(a, b) {
                                return '<div class="item">' + b(a[c]) + "</div>"
                            },
                            option_create: function(a, b) {
                                return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
                            }
                        };
                    b.settings.render = a.extend({}, e, b.settings.render)
                },
                setupCallbacks: function() {
                    var a, b, c = {
                        initialize: "onInitialize",
                        change: "onChange",
                        item_add: "onItemAdd",
                        item_remove: "onItemRemove",
                        clear: "onClear",
                        option_add: "onOptionAdd",
                        option_remove: "onOptionRemove",
                        option_clear: "onOptionClear",
                        optgroup_add: "onOptionGroupAdd",
                        optgroup_remove: "onOptionGroupRemove",
                        optgroup_clear: "onOptionGroupClear",
                        dropdown_open: "onDropdownOpen",
                        dropdown_close: "onDropdownClose",
                        type: "onType",
                        load: "onLoad",
                        focus: "onFocus",
                        blur: "onBlur"
                    };
                    for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
                },
                onClick: function(a) {
                    var b = this;
                    b.isFocused || (b.focus(), a.preventDefault())
                },
                onMouseDown: function(b) {
                    var c = this,
                        d = b.isDefaultPrevented();
                    a(b.target);
                    if (c.isFocused) {
                        if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
                    } else d || window.setTimeout(function() {
                        c.focus()
                    }, 0)
                },
                onChange: function() {
                    this.$input.trigger("change")
                },
                onPaste: function(b) {
                    var c = this;
                    c.isFull() || c.isInputHidden || c.isLocked ? b.preventDefault() : c.settings.splitOn && setTimeout(function() {
                        for (var b = a.trim(c.$control_input.val() || "").split(c.settings.splitOn), d = 0, e = b.length; e > d; d++) c.createItem(b[d])
                    }, 0)
                },
                onKeyPress: function(a) {
                    if (this.isLocked) return a && a.preventDefault();
                    var b = String.fromCharCode(a.keyCode || a.which);
                    return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
                },
                onKeyDown: function(a) {
                    var b = (a.target === this.$control_input[0], this);
                    if (b.isLocked) return void(a.keyCode !== u && a.preventDefault());
                    switch (a.keyCode) {
                        case g:
                            if (b.isCmdDown) return void b.selectAll();
                            break;
                        case i:
                            return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
                        case o:
                            if (!a.ctrlKey || a.altKey) break;
                        case n:
                            if (!b.isOpen && b.hasOptions) b.open();
                            else if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var c = b.getAdjacentOption(b.$activeOption, 1);
                                c.length && b.setActiveOption(c, !0, !0)
                            }
                            return void a.preventDefault();
                        case l:
                            if (!a.ctrlKey || a.altKey) break;
                        case k:
                            if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var d = b.getAdjacentOption(b.$activeOption, -1);
                                d.length && b.setActiveOption(d, !0, !0)
                            }
                            return void a.preventDefault();
                        case h:
                            return void(b.isOpen && b.$activeOption && (b.onOptionSelect({
                                currentTarget: b.$activeOption
                            }), a.preventDefault()));
                        case j:
                            return void b.advanceSelection(-1, a);
                        case m:
                            return void b.advanceSelection(1, a);
                        case u:
                            return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
                                currentTarget: b.$activeOption
                            }), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
                        case p:
                        case q:
                            return void b.deleteSelection(a)
                    }
                    return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
                },
                onKeyUp: function(a) {
                    var b = this;
                    if (b.isLocked) return a && a.preventDefault();
                    var c = b.$control_input.val() || "";
                    b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
                },
                onSearchChange: function(a) {
                    var b = this,
                        c = b.settings.load;
                    c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function(d) {
                        c.apply(b, [a, d])
                    })))
                },
                onFocus: function(a) {
                    var b = this,
                        c = b.isFocused;
                    return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
                },
                onBlur: function(a, b) {
                    var c = this;
                    if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
                        if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);
                        var d = function() {
                            c.close(), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), (b || document.body).focus(), c.ignoreFocus = !1, c.trigger("blur")
                        };
                        c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
                    }
                },
                onOptionHover: function(a) {
                    this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
                },
                onOptionSelect: function(b) {
                    var c, d, e = this;
                    b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function() {
                        e.settings.closeAfterSelect && e.close()
                    }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
                },
                onItemSelect: function(a) {
                    var b = this;
                    b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
                },
                load: function(a) {
                    var b = this,
                        c = b.$wrapper.addClass(b.settings.loadingClass);
                    b.loading++, a.apply(b, [function(a) {
                        b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
                    }])
                },
                setTextboxValue: function(a) {
                    var b = this.$control_input,
                        c = b.val() !== a;
                    c && (b.val(a).triggerHandler("update"), this.lastValue = a)
                },
                getValue: function() {
                    return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
                },
                setValue: function(a, b) {
                    var c = b ? [] : ["change"];
                    F(this, c, function() {
                        this.clear(b), this.addItems(a, b)
                    })
                },
                setActiveItem: function(b, c) {
                    var d, e, f, g, h, i, j, k, l = this;
                    if ("single" !== l.settings.mode) {
                        if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
                        if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                            for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; h >= e; e++) i = l.$control[0].childNodes[e], -1 === l.$activeItems.indexOf(i) && (a(i).addClass("active"), l.$activeItems.push(i));
                            c.preventDefault()
                        } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
                        l.hideInput(), this.isFocused || l.focus()
                    }
                },
                setActiveOption: function(b, c, d) {
                    var e, f, g, h, i, j = this;
                    j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
                        scrollTop: i
                    }, d ? j.settings.scrollDuration : 0) : c > g && j.$dropdown_content.stop().animate({
                        scrollTop: h
                    }, d ? j.settings.scrollDuration : 0)))
                },
                selectAll: function() {
                    var a = this;
                    "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
                },
                hideInput: function() {
                    var a = this;
                    a.setTextboxValue(""), a.$control_input.css({
                        opacity: 0,
                        position: "absolute",
                        left: a.rtl ? 1e4 : -1e4
                    }), a.isInputHidden = !0
                },
                showInput: function() {
                    this.$control_input.css({
                        opacity: 1,
                        position: "relative",
                        left: 0
                    }), this.isInputHidden = !1
                },
                focus: function() {
                    var a = this;
                    a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function() {
                        a.ignoreFocus = !1, a.onFocus()
                    }, 0))
                },
                blur: function(a) {
                    this.$control_input[0].blur(), this.onBlur(null, a)
                },
                getScoreFunction: function(a) {
                    return this.sifter.getScoreFunction(a, this.getSearchOptions())
                },
                getSearchOptions: function() {
                    var a = this.settings,
                        b = a.sortField;
                    return "string" == typeof b && (b = [{
                        field: b
                    }]), {
                        fields: a.searchField,
                        conjunction: a.searchConjunction,
                        sort: b
                    }
                },
                search: function(b) {
                    var c, d, e, f = this,
                        g = f.settings,
                        h = this.getSearchOptions();
                    if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
                    if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
                            score: e
                        })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
                        for (c = d.items.length - 1; c >= 0; c--) - 1 !== f.items.indexOf(z(d.items[c].id)) && d.items.splice(c, 1);
                    return d
                },
                refreshOptions: function(b) {
                    var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                    "undefined" == typeof b && (b = !0);
                    var t = this,
                        u = a.trim(t.$control_input.val()),
                        v = t.search(u),
                        w = t.$dropdown_content,
                        x = t.$activeOption && z(t.$activeOption.attr("data-value"));
                    for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; g > c; c++)
                        for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; f > e; e++) l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = [], i.push(l)), h[l].push(k);
                    for (this.settings.lockOptgroupOrder && i.sort(function(a, b) {
                            var c = t.optgroups[a].$order || 0,
                                d = t.optgroups[b].$order || 0;
                            return c - d
                        }), n = [], c = 0, g = i.length; g > c; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].length ? (o = t.render("optgroup_header", t.optgroups[l]) || "", o += h[l].join(""), n.push(t.render("optgroup", a.extend({}, t.optgroups[l], {
                        html: o
                    })))) : n.push(h[l].join(""));
                    if (w.html(n.join("")), t.settings.highlight && v.query.length && v.tokens.length)
                        for (c = 0, g = v.tokens.length; g > c; c++) d(w, v.tokens[c].regex);
                    if (!t.settings.hideSelected)
                        for (c = 0, g = t.items.length; g > c; c++) t.getOption(t.items[c]).addClass("selected");
                    p = t.canCreate(u), p && (w.prepend(t.render("option_create", {
                        input: u
                    })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
                },
                addOption: function(b) {
                    var c, d, e, f = this;
                    if (a.isArray(b))
                        for (c = 0, d = b.length; d > c; c++) f.addOption(b[c]);
                    else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
                },
                registerOption: function(a) {
                    var b = z(a[this.settings.valueField]);
                    return !b || this.options.hasOwnProperty(b) ? !1 : (a.$order = a.$order || ++this.order, this.options[b] = a, b)
                },
                registerOptionGroup: function(a) {
                    var b = z(a[this.settings.optgroupValueField]);
                    return b ? (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b) : !1
                },
                addOptionGroup: function(a, b) {
                    b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
                },
                removeOptionGroup: function(a) {
                    this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
                },
                clearOptionGroups: function() {
                    this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
                },
                updateOption: function(b, c) {
                    var d, e, f, g, h, i, j, k = this;
                    if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
                        if ("string" != typeof f) throw new Error("Value must be set in option data");
                        j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), -1 !== g && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), -1 !== k.items.indexOf(f) && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
                    }
                },
                removeOption: function(a, b) {
                    var c = this;
                    a = z(a);
                    var d = c.renderCache.item,
                        e = c.renderCache.option;
                    d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
                },
                clearOptions: function() {
                    var a = this;
                    a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
                },
                getOption: function(a) {
                    return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
                },
                getAdjacentOption: function(b, c) {
                    var d = this.$dropdown.find("[data-selectable]"),
                        e = d.index(b) + c;
                    return e >= 0 && e < d.length ? d.eq(e) : a()
                },
                getElementWithValue: function(b, c) {
                    if (b = z(b), "undefined" != typeof b && null !== b)
                        for (var d = 0, e = c.length; e > d; d++)
                            if (c[d].getAttribute("data-value") === b) return a(c[d]);
                    return a()
                },
                getItem: function(a) {
                    return this.getElementWithValue(a, this.$control.children())
                },
                addItems: function(b, c) {
                    for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; f > e; e++) this.isPending = f - 1 > e, this.addItem(d[e], c)
                },
                addItem: function(b, c) {
                    var d = c ? [] : ["change"];
                    F(this, d, function() {
                        var d, e, f, g, h, i = this,
                            j = i.settings.mode;
                        return b = z(b), -1 !== i.items.indexOf(b) ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({
                            silent: c
                        })))))
                    })
                },
                removeItem: function(a, b) {
                    var c, d, e, f = this;
                    c = "object" == typeof a ? a : f.getItem(a), a = z(c.attr("data-value")), d = f.items.indexOf(a), -1 !== d && (c.remove(), c.hasClass("active") && (e = f.$activeItems.indexOf(c[0]), f.$activeItems.splice(e, 1)), f.items.splice(d, 1), f.lastQuery = null, !f.settings.persist && f.userOptions.hasOwnProperty(a) && f.removeOption(a, b), d < f.caretPos && f.setCaret(f.caretPos - 1), f.refreshState(), f.updatePlaceholder(), f.updateOriginalInput({
                        silent: b
                    }), f.positionDropdown(), f.trigger("item_remove", a, c))
                },
                createItem: function(b, c) {
                    var d = this,
                        e = d.caretPos;
                    b = b || a.trim(d.$control_input.val() || "");
                    var f = arguments[arguments.length - 1];
                    if ("function" != typeof f && (f = function() {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;
                    d.lock();
                    var g = "function" == typeof d.settings.create ? this.settings.create : function(a) {
                            var b = {};
                            return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
                        },
                        h = D(function(a) {
                            if (d.unlock(), !a || "object" != typeof a) return f();
                            var b = z(a[d.settings.valueField]);
                            return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
                        }),
                        i = g.apply(this, [b, h]);
                    return "undefined" != typeof i && h(i), !0
                },
                refreshItems: function() {
                    this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
                },
                refreshState: function() {
                    var a, b = this;
                    b.isRequired && (b.items.length && (b.isInvalid = !1), b.$control_input.prop("required", a)), b.refreshClasses()
                },
                refreshClasses: function() {
                    var b = this,
                        c = b.isFull(),
                        d = b.isLocked;
                    b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
                },
                isFull: function() {
                    return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
                },
                updateOriginalInput: function(a) {
                    var b, c, d, e, f = this;
                    if (a = a || {}, f.tagType === v) {
                        for (d = [], b = 0, c = f.items.length; c > b; b++) e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
                        d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""))
                    } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
                    f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
                },
                updatePlaceholder: function() {
                    if (this.settings.placeholder) {
                        var a = this.$control_input;
                        this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {
                            force: !0
                        })
                    }
                },
                open: function() {
                    var b = this;
                    if (!(b.isLocked || b.isOpen || "multi" === b.settings.mode && b.isFull())) {
                        b.focus(), b.isOpen = !0, b.refreshState(), b.$dropdown.css({
                            visibility: "hidden",
                            display: "block"
                        }), b.positionDropdown(), b.$dropdown.css({
                            visibility: "visible"
                        }), b.trigger("dropdown_open", b.$dropdown);
                        var c = a("#Country option:selected").text();
                        b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.refreshState(), b.showInput(), b.trigger("clear"), b.setTextboxValue(c))
                    }
                },
                close: function() {
                    var a = this,
                        b = a.isOpen;
                    "single" === a.settings.mode && a.items.length && a.hideInput(), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
                },
                positionDropdown: function() {
                    var a = this.$control,
                        b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
                    b.top += a.outerHeight(!0), this.$dropdown.css({
                        width: a.outerWidth(),
                        top: b.top,
                        left: b.left
                    })
                },
                clear: function(a) {
                    var b = this;
                    b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({
                        silent: a
                    }), b.refreshState(), b.showInput(), b.trigger("clear"))
                },
                insertAtCaret: function(b) {
                    var c = Math.min(this.caretPos, this.items.length);
                    0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
                },
                deleteSelection: function(b) {
                    var c, d, e, f, g, h, i, j, k, l = this;
                    if (e = b && b.keyCode === p ? -1 : 1, f = H(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
                        for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; d > c; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
                        b && (b.preventDefault(), b.stopPropagation())
                    } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (0 > e && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
                    if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;
                    for ("undefined" != typeof h && l.setCaret(h); g.length;) l.removeItem(g.pop());
                    return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
                },
                advanceSelection: function(a, b) {
                    var c, d, e, f, g, h, i = this;
                    0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = H(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = 0 > a ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
                },
                advanceCaret: function(a, b) {
                    var c, d, e = this;
                    0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
                },
                setCaret: function(b) {
                    var c = this;
                    if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
                        var d, e, f, g;
                        for (f = c.$control.children(":not(input)"), d = 0, e = f.length; e > d; d++) g = a(f[d]).detach(), b > d ? c.$control_input.before(g) : c.$control.append(g)
                    }
                    c.caretPos = b
                },
                lock: function() {
                    this.close(), this.isLocked = !0, this.refreshState()
                },
                unlock: function() {
                    this.isLocked = !1, this.refreshState()
                },
                disable: function() {
                    var a = this;
                    a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
                },
                enable: function() {
                    var a = this;
                    a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
                },
                destroy: function() {
                    var b = this,
                        c = b.eventNS,
                        d = b.revertSettings;
                    b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
                        tabindex: d.tabindex
                    }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
                },
                render: function(a, b) {
                    var c, d, e = "",
                        f = !1,
                        g = this,
                        h = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                    return "option" !== a && "item" !== a || (c = z(b[g.settings.valueField]), f = !!c), f && (y(g.renderCache[a]) || (g.renderCache[a] = {}), g.renderCache[a].hasOwnProperty(c)) ? g.renderCache[a][c] : (e = g.settings.render[a].apply(this, [b, A]), "option" !== a && "option_create" !== a || (e = e.replace(h, "<$1 data-selectable")), "optgroup" === a && (d = b[g.settings.optgroupValueField] || "", e = e.replace(h, '<$1 data-group="' + B(A(d)) + '"')), "option" !== a && "item" !== a || (e = e.replace(h, '<$1 data-value="' + B(A(c || "")) + '"')), f && (g.renderCache[a][c] = e), e)
                },
                clearCache: function(a) {
                    var b = this;
                    "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
                },
                canCreate: function(a) {
                    var b = this;
                    if (!b.settings.create) return !1;
                    var c = b.settings.createFilter;
                    return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
                }
            }), L.count = 0, L.defaults = {
                options: [],
                optgroups: [],
                plugins: [],
                delimiter: ",",
                splitOn: null,
                persist: !0,
                diacritics: !0,
                create: !1,
                createOnBlur: !1,
                createFilter: null,
                highlight: !0,
                openOnFocus: !0,
                maxOptions: 1e3,
                maxItems: null,
                hideSelected: null,
                addPrecedence: !1,
                selectOnTab: !1,
                preload: !1,
                allowEmptyOption: !1,
                closeAfterSelect: !1,
                scrollDuration: 60,
                loadThrottle: 300,
                loadingClass: "loading",
                dataAttr: "data-data",
                optgroupField: "optgroup",
                valueField: "value",
                labelField: "text",
                optgroupLabelField: "label",
                optgroupValueField: "value",
                lockOptgroupOrder: !1,
                sortField: "$order",
                searchField: ["text"],
                searchConjunction: "and",
                mode: null,
                wrapperClass: "selectize-control",
                inputClass: "selectize-input",
                dropdownClass: "selectize-dropdown",
                dropdownContentClass: "selectize-dropdown-content",
                dropdownParent: null,
                copyClassesToDropdown: !0,
                render: {}
            }, a.fn.selectize = function(b) {
                var c = a.fn.selectize.defaults,
                    d = a.extend({}, c, b),
                    e = d.dataAttr,
                    f = d.labelField,
                    g = d.valueField,
                    h = d.optgroupField,
                    i = d.optgroupLabelField,
                    j = d.optgroupValueField,
                    k = function(b, c) {
                        var h, i, j, k, l = b.attr(e);
                        if (l)
                            for (c.options = JSON.parse(l), h = 0, i = c.options.length; i > h; h++) c.items.push(c.options[h][g]);
                        else {
                            var m = a.trim(b.val() || "");
                            if (!d.allowEmptyOption && !m.length) return;
                            for (j = m.split(d.delimiter), h = 0, i = j.length; i > h; h++) k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
                            c.items = j
                        }
                    },
                    l = function(b, c) {
                        var k, l, m, n, o = c.options,
                            p = {},
                            q = function(a) {
                                var b = e && a.attr(e);
                                return "string" == typeof b && b.length ? JSON.parse(b) : null
                            },
                            r = function(b, e) {
                                b = a(b);
                                var i = z(b.attr("value"));
                                if (i || d.allowEmptyOption)
                                    if (p.hasOwnProperty(i)) {
                                        if (e) {
                                            var j = p[i][h];
                                            j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
                                        }
                                    } else {
                                        var k = q(b) || {};
                                        k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
                                    }
                            },
                            s = function(b) {
                                var d, e, f, g, h;
                                for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; e > d; d++) r(h[d], f)
                            };
                        for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; l > k; k++) m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
                    };
                return this.each(function() {
                    if (!this.selectize) {
                        var e, f = a(this),
                            g = this.tagName.toLowerCase(),
                            h = f.attr("placeholder") || f.attr("data-placeholder");
                        h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
                        var i = {
                            placeholder: h,
                            options: [],
                            optgroups: [],
                            items: []
                        };
                        "select" === g ? l(f, i) : k(f, i), e = new L(f, a.extend(!0, {}, c, i, b))
                    }
                })
            }, a.fn.selectize.defaults = L.defaults, a.fn.selectize.support = {
                validity: x
            }, L.define("drag_drop", function(b) {
                if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
                if ("multi" === this.settings.mode) {
                    var c = this;
                    c.lock = function() {
                        var a = c.lock;
                        return function() {
                            var b = c.$control.data("sortable");
                            return b && b.disable(), a.apply(c, arguments)
                        }
                    }(), c.unlock = function() {
                        var a = c.unlock;
                        return function() {
                            var b = c.$control.data("sortable");
                            return b && b.enable(), a.apply(c, arguments)
                        }
                    }(), c.setup = function() {
                        var b = c.setup;
                        return function() {
                            b.apply(this, arguments);
                            var d = c.$control.sortable({
                                items: "[data-value]",
                                forcePlaceholderSize: !0,
                                disabled: c.isLocked,
                                start: function(a, b) {
                                    b.placeholder.css("width", b.helper.css("width")), d.css({
                                        overflow: "visible"
                                    })
                                },
                                stop: function() {
                                    d.css({
                                        overflow: "hidden"
                                    });
                                    var b = c.$activeItems ? c.$activeItems.slice() : null,
                                        e = [];
                                    d.children("[data-value]").each(function() {
                                        e.push(a(this).attr("data-value"))
                                    }), c.setValue(e), c.setActiveItem(b)
                                }
                            })
                        }
                    }()
                }
            }), L.define("dropdown_header", function(b) {
                var c = this;
                b = a.extend({
                    title: "Untitled",
                    headerClass: "selectize-dropdown-header",
                    titleRowClass: "selectize-dropdown-header-title",
                    labelClass: "selectize-dropdown-header-label",
                    closeClass: "selectize-dropdown-header-close",
                    html: function(a) {
                        return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
                    }
                }, b), c.setup = function() {
                    var d = c.setup;
                    return function() {
                        d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
                    }
                }()
            }), L.define("optgroup_columns", function(b) {
                var c = this;
                b = a.extend({
                    equalizeWidth: !0,
                    equalizeHeight: !0
                }, b), this.getAdjacentOption = function(b, c) {
                    var d = b.closest("[data-group]").find("[data-selectable]"),
                        e = d.index(b) + c;
                    return e >= 0 && e < d.length ? d.eq(e) : a()
                }, this.onKeyDown = function() {
                    var a = c.onKeyDown;
                    return function(b) {
                        var d, e, f, g;
                        return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
                    }
                }();
                var d = function() {
                        var a, b = d.width,
                            c = document;
                        return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
                    },
                    e = function() {
                        var e, f, g, h, i, j, k;
                        if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                            if (b.equalizeHeight) {
                                for (g = 0, e = 0; f > e; e++) g = Math.max(g, k.eq(e).height());
                                k.css({
                                    height: g
                                })
                            }
                            b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({
                                width: h
                            }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
                                width: i
                            })))
                        }
                    };
                (b.equalizeHeight || b.equalizeWidth) && (C.after(this, "positionDropdown", e), C.after(this, "refreshOptions", e))
            }), L.define("remove_button", function(b) {
                if ("single" !== this.settings.mode) {
                    b = a.extend({
                        label: "&times;",
                        title: "Remove",
                        className: "remove",
                        append: !0
                    }, b);
                    var c = this,
                        d = '<a href="javascript:void(0)" class="' + b.className + '" tabindex="-1" title="' + A(b.title) + '">' + b.label + "</a>",
                        e = function(a, b) {
                            var c = a.search(/(<\/[^>]+>\s*)$/);
                            return a.substring(0, c) + b + a.substring(c)
                        };
                    this.setup = function() {
                        var f = c.setup;
                        return function() {
                            if (b.append) {
                                var g = c.settings.render.item;
                                c.settings.render.item = function(a) {
                                    return e(g.apply(this, arguments), d)
                                }
                            }
                            f.apply(this, arguments), this.$control.on("click", "." + b.className, function(b) {
                                if (b.preventDefault(), !c.isLocked) {
                                    var d = a(b.currentTarget).parent();
                                    c.setActiveItem(d), c.deleteSelection() && c.setCaret(c.items.length)
                                }
                            })
                        }
                    }()
                }
            }), L.define("restore_on_backspace", function(a) {
                var b = this;
                a.text = a.text || function(a) {
                    return a[this.settings.labelField]
                }, this.onKeyDown = function() {
                    var c = b.onKeyDown;
                    return function(b) {
                        var d, e;
                        return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
                    }
                }()
            }), L
        }), c("base/contact-form", ["jquery", "underscore", "lib/selectFx", "lib/classie", "selectize"], function(a, b, c, d, e) {
            function f(a) {
                var b = 0,
                    c = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return "" === a && (b = 1), "" === a || c.test(a) || (b = 2), b
            }

            function g(a) {
                var b = /^[0-9-+. ]+$/;
                return !("" !== a && !b.test(a))
            }

            function h() {
                var b = !0,
                    c = a("#Email").val(),
                    d = a("#Phone").val(),
                    e = a("#Name").val();
                a(".error-message").empty(), "" === e && (a("#error-for-Name").append("Please fill out Full Name field"), b = !1);
                var h = f(c);
                1 == h && (a("#error-for-Email").append("Please fill out Email Name field"), b = !1), 2 == h && (a("#error-for-Email").append("Email is invalid"), b = !1);
                var i = g(d);
                return i || (a("#error-for-Phone").append("Phone is invalid"), b = !1), b || a("html, body").animate({
                    scrollTop: a("#Name").offset().top - 85 + "px"
                }, 600), b
            }

            function i(b) {
                ! function() {
                    a("#btnSubmit").click(function(b) {
                        var c = h(),
                            d = a("#imgLoading"),
                            e = a("#thank-message"),
                            f = a("#ct-form");
                        e.empty(), c && (d.css("display", ""), f.attr("style", "background:black;opacity:0.5"), a.ajax({
                            type: "POST",
                            url: "/contact-us/Submit",
                            data: {
                                FullName: a("#Name").val(),
                                Phone: a("#Phone").val(),
                                Email: a("#Email").val(),
                                Message: a("#message").val(),
                                Country: a("#Country option:selected").text(),
                                "g-recaptcha-response": a("#g-recaptcha-response").val()
                            },
                            dataType: "json",
                            success: function(b) {
                                "sucess" === b.status ? (e.append("Thank you for contacting us. We will get back to you as soon as possible"), f.attr("style", "display:none")) : "invalidRecapcha" === b.status ? (d.css("display", "none"), a("#inValidCapcha").append("You need to solve the ReCaptcha"), f.removeAttr("style", "background:black;opacity:0.5")) : (d.css("display", "none"), alert("We couldn't submit the form. Please try again or email us at info@niteco.com."), f.removeAttr("style", "background:black;opacity:0.5"))
                            },
                            error: function(a) {
                                d.css("display", "none")
                            }
                        }))
                    }), a("#Name").on("input", function() {
                        var b = a("#Name").val();
                        "" !== b ? a("#error-for-Name").empty() : a("#error-for-Name").show()
                    }), a("#Email").on("input", function() {
                        var b = a("#Email").val();
                        a("#error-for-Email").empty(), "" === b && a("#error-for-Email").append("Please fill out Email Address field")
                    });
                    var b = document.getElementById("countryName").value,
                        c = document.getElementById("phoneCode").value,
                        d = document.getElementById("listCountry").value,
                        e = a("#Country");
                    "" !== d && e.append(d), e.append('<option value="Other">Other</option>'), a("#Phone").val(c), "" !== b && a("#Country").val(b);
                    var f = c;
                    e.change(function() {
                        var b = a("#Country").val();
                        a.ajax({
                            type: "GET",
                            url: "/contact-us/GetPhoneCodeByCountryCode?countryCode=" + b,
                            dataType: "json",
                            success: function(b) {
                                var c = a("#Phone").val(),
                                    d = b.phone,
                                    e = c.replace(f, d);
                                f = d, a("#Phone").val(e)
                            }
                        })
                    });
                    var g = document.createElement("script");
                    g.setAttribute("type", "text/javascript"), g.setAttribute("src", "/web/20160603003234/https://www.google.com/recaptcha/api.js");
                    var i = document.getElementById("contact-form");
                    i && i.appendChild(g)
                }()
            }
            return {
                init: function(a) {
                    i(a)
                }
            }
        }), c("base/contact-us-page", ["base/page-scroll-animation"], function(a) {
            function b(b) {
                a.init(b), window.google && window.google.maps && window.google.maps.Map && initMap()
            }
            return {
                init: function(a) {
                    b(a)
                }
            }
        }),
        function() {
            "use strict";

            function a(b, c) {
                function e(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                }
                var f;
                if (c = c || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = c.touchBoundary || 10, this.layer = b, this.tapDelay = c.tapDelay || 200, this.tapTimeout = c.tapTimeout || 700, !a.notNeeded(b)) {
                    for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
                    d && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
                        var e = Node.prototype.removeEventListener;
                        "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
                    }, b.addEventListener = function(a, c, d) {
                        var e = Node.prototype.addEventListener;
                        "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
                            a.propagationStopped || c(a)
                        }), d) : e.call(b, a, c, d)
                    }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function(a) {
                        f(a)
                    }, !1), b.onclick = null)
                }
            }
            var b = navigator.userAgent.indexOf("Windows Phone") >= 0,
                d = navigator.userAgent.indexOf("Android") > 0 && !b,
                e = /iP(ad|hone|od)/.test(navigator.userAgent) && !b,
                f = e && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                g = e && /OS [6-7]_\d/.test(navigator.userAgent),
                h = navigator.userAgent.indexOf("BB10") > 0;
            a.prototype.needsClick = function(a) {
                switch (a.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (a.disabled) return !0;
                        break;
                    case "input":
                        if (e && "file" === a.type || a.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(a.className)
            }, a.prototype.needsFocus = function(a) {
                switch (a.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !d;
                    case "input":
                        switch (a.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !a.disabled && !a.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(a.className)
                }
            }, a.prototype.sendClick = function(a, b) {
                var c, d;
                document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
            }, a.prototype.determineEventType = function(a) {
                return d && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
            }, a.prototype.focus = function(a) {
                var b;
                e && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
            }, a.prototype.updateScrollParent = function(a) {
                var b, c;
                if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
                    c = a;
                    do {
                        if (c.scrollHeight > c.offsetHeight) {
                            b = c, a.fastClickScrollParent = c;
                            break
                        }
                        c = c.parentElement
                    } while (c)
                }
                b && (b.fastClickLastScrollTop = b.scrollTop)
            }, a.prototype.getTargetElementFromEventTarget = function(a) {
                return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
            }, a.prototype.onTouchStart = function(a) {
                var b, c, d;
                if (a.targetTouches.length > 1) return !0;
                if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], e) {
                    if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
                    if (!f) {
                        if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                        this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
            }, a.prototype.touchHasMoved = function(a) {
                var b = a.changedTouches[0],
                    c = this.touchBoundary;
                return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c
            }, a.prototype.onTouchMove = function(a) {
                return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
            }, a.prototype.findControl = function(a) {
                return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, a.prototype.onTouchEnd = function(a) {
                var b, c, h, i, j, k = this.targetElement;
                if (!this.trackingClick) return !0;
                if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, g && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
                    if (b = this.findControl(k)) {
                        if (this.focus(k), d) return !1;
                        k = b
                    }
                } else if (this.needsFocus(k)) return a.timeStamp - c > 100 || e && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), e && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
                return e && !f && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
            }, a.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null
            }, a.prototype.onMouse = function(a) {
                return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
            }, a.prototype.onClick = function(a) {
                var b;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
            }, a.prototype.destroy = function() {
                var a = this.layer;
                d && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, a.notNeeded = function(a) {
                var b, c, e, f;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!d) return !0;
                    if (b = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                        if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (h && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
                return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction)
            }, a.attach = function(b, c) {
                return new a(b, c)
            }, "function" == typeof c && "object" == typeof c.amd && c.amd ? c("vendor/fastclick", [], function() {
                return a
            }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
        }(), c("base/fastclick", ["jquery", "underscore", "vendor/fastclick"], function(a, b, c) {
            "use strict";
            return c.attach(document.body), {}
        }), c("base/footer", ["jquery", "underscore", "vendor/mobile-detect"], function(a, b, c) {
            "use strict";

            function d(a) {
                e.mobile() && (a.addClass("normal-footer"), a.parent().css("padding-bottom", 0))
            }
            var e = new c(window.navigator.userAgent);
            return {
                init: d
            }
        }), c("videojs", [], function() {
            return videojs
        }), c("base/home", ["jquery", "underscore", "videojs", "base/request-page", "base/top-navigator", "vendor/mobile-detect"], function(a, b, c, d, e, f) {
            "use strict";

            function g() {
                null != p && p.length > 0 && c(p.get(0), {
                    autoplay: !0,
                    loop: !0
                }, function() {
                    this.on("loadedmetadata", function() {
                        p = n.find("video"), m.width = p.get(0).videoWidth, m.height = p.get(0).videoHeight, o = p.parent(), h(), j()
                    })
                }), k()
            }

            function h() {
                if (null != p && p.length > 0) {
                    var a = b.debounce(function() {
                        var a = n.height(),
                            b = n.width();
                        o.css({
                            width: b + "px",
                            height: a + "px"
                        }), b / a > m.width / m.height ? p.css({
                            width: b + "px",
                            height: "auto",
                            opacity: 1
                        }) : p.css({
                            width: "auto",
                            height: a + "px",
                            opacity: 1
                        })
                    }, 50);
                    a()
                }
            }

            function i(a) {
                e.selectMenu(a)
            }

            function j() {
                a(window).on("resize", function() {
                    h()
                })
            }

            function k() {
                q || (q = !0, d.registRequestByContainer(l.find(".home-column-left"), i), d.registRequestByContainer(l.find(".home-column-right"), i))
            }
            var l = null,
                m = {
                    width: 0,
                    height: 0
                },
                n = null,
                o = null,
                p = null,
                q = !1;
            new f(window.navigator.userAgent);
            return {
                init: function(a) {
                    l = a, n = a.find(".home-video-wrapper"), p = n.find("video"), g()
                }
            }
        }), c("base/list-our-team-expand", ["jquery", "underscore", "base/modules/animate"], function(a, b, c) {
            "use strict";

            function d() {
                var a = h.width();
                return 768 > a ? "mobile" : 992 > a ? "__subgroup" : "__group"
            }

            function e() {
                if (g) {
                    var a = g.find(".award-list--top .award-group"),
                        b = g.find(".award-list--bottom");
                    if (a && a.length > 0)
                        for (var c = 0; c < a.length; c++) b.append(a.eq(c).get(0).outerHTML);
                    f()
                }
            }

            function f() {
                a(document).off("click", ".award"), a(document).on("click", ".award", function() {
                    var b = a(".awards"),
                        c = b.find(".award"),
                        e = b.find(".award-info"),
                        f = a(this),
                        g = f.data("award-id"),
                        h = b.find('.__award[data-award-id="' + g + '"]'),
                        i = e.find('.award-details[data-award-id="' + g + '"]'),
                        j = b.find(".award-details:visible"),
                        k = function(d) {
                            "slide" === d ? i.finish().slideDown(500) : i.finish().fadeIn(500), c.removeClass("__award--selected"), b.find(".__subgroup").removeClass("__subgroup--active"), b.find(".__group").removeClass("__group--active"), setTimeout(function() {
                                h.addClass("__award--selected"), h.closest(".__subgroup").addClass("__subgroup--active"), h.closest(".__group").addClass("__group--active")
                            }, 0), a("html, body").animate({
                                scrollTop: h.offset().top - 85 + "px"
                            }, 300)
                        };
                    if (f.hasClass("__award--selected")) h.removeClass("__award--selected"), j.finish().slideUp(500, function() {
                        h.closest(".__subgroup").removeClass("__subgroup--active"), h.closest(".__group").removeClass("__group--active")
                    });
                    else if (j.length) {
                        var l = d();
                        "mobile" === l ? j.finish().slideUp(200, function() {
                            k("slide")
                        }) : h.parents("." + l).hasClass(l + "--active") ? j.finish().fadeOut(500, function() {
                            k("fade")
                        }) : j.finish().slideUp(500, function() {
                            k("slide")
                        })
                    } else k("slide")
                })
            }
            var g = null,
                h = a(window);
            return {
                init: function(a) {
                    g = a, e()
                }
            }
        }),
        function(a, b) {
            "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof c && c.amd ? c("vendor/handlebars", b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b()
        }(this, function() {
            return function(a) {
                function b(d) {
                    if (c[d]) return c[d].exports;
                    var e = c[d] = {
                        exports: {},
                        id: d,
                        loaded: !1
                    };
                    return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
                }
                var c = {};
                return b.m = a, b.c = c, b.p = "", b(0)
            }([function(a, b, c) {
                "use strict";

                function d() {
                    var a = r();
                    return a.compile = function(b, c) {
                        return k.compile(b, c, a)
                    }, a.precompile = function(b, c) {
                        return k.precompile(b, c, a)
                    }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a
                }
                var e = c(8)["default"];
                b.__esModule = !0;
                var f = c(1),
                    g = e(f),
                    h = c(2),
                    i = e(h),
                    j = c(3),
                    k = c(4),
                    l = c(5),
                    m = e(l),
                    n = c(6),
                    o = e(n),
                    p = c(7),
                    q = e(p),
                    r = g["default"].create,
                    s = d();
                s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d() {
                    var a = new g.HandlebarsEnvironment;
                    return m.extend(a, g), a.SafeString = i["default"], a.Exception = k["default"], a.Utils = m, a.escapeExpression = m.escapeExpression, a.VM = o, a.template = function(b) {
                        return o.template(b, a)
                    }, a
                }
                var e = c(8)["default"];
                b.__esModule = !0;
                var f = c(9),
                    g = e(f),
                    h = c(10),
                    i = e(h),
                    j = c(11),
                    k = e(j),
                    l = c(12),
                    m = e(l),
                    n = c(13),
                    o = e(n),
                    p = c(7),
                    q = e(p),
                    r = d();
                r.create = d, q["default"](r), r["default"] = r, b["default"] = r, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";
                b.__esModule = !0;
                var d = {
                    Program: function(a, b, c, d) {
                        this.loc = d, this.type = "Program", this.body = a, this.blockParams = b, this.strip = c
                    },
                    MustacheStatement: function(a, b, c, d, e, f) {
                        this.loc = f, this.type = "MustacheStatement", this.path = a, this.params = b || [], this.hash = c, this.escaped = d, this.strip = e
                    },
                    BlockStatement: function(a, b, c, d, e, f, g, h, i) {
                        this.loc = i, this.type = "BlockStatement", this.path = a, this.params = b || [], this.hash = c, this.program = d, this.inverse = e, this.openStrip = f, this.inverseStrip = g, this.closeStrip = h
                    },
                    PartialStatement: function(a, b, c, d, e) {
                        this.loc = e, this.type = "PartialStatement", this.name = a, this.params = b || [], this.hash = c, this.indent = "", this.strip = d
                    },
                    ContentStatement: function(a, b) {
                        this.loc = b, this.type = "ContentStatement", this.original = this.value = a
                    },
                    CommentStatement: function(a, b, c) {
                        this.loc = c, this.type = "CommentStatement", this.value = a, this.strip = b
                    },
                    SubExpression: function(a, b, c, d) {
                        this.loc = d, this.type = "SubExpression", this.path = a, this.params = b || [], this.hash = c
                    },
                    PathExpression: function(a, b, c, d, e) {
                        this.loc = e, this.type = "PathExpression", this.data = a, this.original = d, this.parts = c, this.depth = b
                    },
                    StringLiteral: function(a, b) {
                        this.loc = b, this.type = "StringLiteral", this.original = this.value = a
                    },
                    NumberLiteral: function(a, b) {
                        this.loc = b, this.type = "NumberLiteral", this.original = this.value = Number(a)
                    },
                    BooleanLiteral: function(a, b) {
                        this.loc = b, this.type = "BooleanLiteral", this.original = this.value = "true" === a
                    },
                    UndefinedLiteral: function(a) {
                        this.loc = a, this.type = "UndefinedLiteral", this.original = this.value = void 0
                    },
                    NullLiteral: function(a) {
                        this.loc = a, this.type = "NullLiteral", this.original = this.value = null
                    },
                    Hash: function(a, b) {
                        this.loc = b, this.type = "Hash", this.pairs = a
                    },
                    HashPair: function(a, b, c) {
                        this.loc = c, this.type = "HashPair", this.key = a, this.value = b
                    },
                    helpers: {
                        helperExpression: function(a) {
                            return !("SubExpression" !== a.type && !a.params.length && !a.hash)
                        },
                        scopedId: function(a) {
                            return /^\.|this\b/.test(a.original)
                        },
                        simpleId: function(a) {
                            return 1 === a.parts.length && !d.helpers.scopedId(a) && !a.depth
                        }
                    }
                };
                b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d(a, b) {
                    if ("Program" === a.type) return a;
                    g["default"].yy = o, o.locInfo = function(a) {
                        return new o.SourceLocation(b && b.srcName, a)
                    };
                    var c = new k["default"];
                    return c.accept(g["default"].parse(a))
                }
                var e = c(8)["default"];
                b.__esModule = !0, b.parse = d;
                var f = c(14),
                    g = e(f),
                    h = c(2),
                    i = e(h),
                    j = c(15),
                    k = e(j),
                    l = c(16),
                    m = e(l),
                    n = c(12);
                b.parser = g["default"];
                var o = {};
                n.extend(o, m, i["default"])
            }, function(a, b, c) {
                "use strict";

                function d() {}

                function e(a, b, c) {
                    if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
                    b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                    var d = c.parse(a, b),
                        e = (new c.Compiler).compile(d, b);
                    return (new c.JavaScriptCompiler).compile(e, b)
                }

                function f(a, b, c) {
                    function d() {
                        var b = c.parse(a, f),
                            d = (new c.Compiler).compile(b, f),
                            e = (new c.JavaScriptCompiler).compile(d, f, void 0, !0);
                        return c.template(e)
                    }

                    function e(a, b) {
                        return g || (g = d()), g.call(this, a, b)
                    }
                    var f = void 0 === arguments[1] ? {} : arguments[1];
                    if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
                    "data" in f || (f.data = !0), f.compat && (f.useDepths = !0);
                    var g = void 0;
                    return e._setup = function(a) {
                        return g || (g = d()), g._setup(a)
                    }, e._child = function(a, b, c, e) {
                        return g || (g = d()), g._child(a, b, c, e)
                    }, e
                }

                function g(a, b) {
                    if (a === b) return !0;
                    if (l.isArray(a) && l.isArray(b) && a.length === b.length) {
                        for (var c = 0; c < a.length; c++)
                            if (!g(a[c], b[c])) return !1;
                        return !0
                    }
                }

                function h(a) {
                    if (!a.path.parts) {
                        var b = a.path;
                        a.path = new n["default"].PathExpression(!1, 0, [b.original + ""], b.original + "", b.loc)
                    }
                }
                var i = c(8)["default"];
                b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
                var j = c(11),
                    k = i(j),
                    l = c(12),
                    m = c(2),
                    n = i(m),
                    o = [].slice;
                d.prototype = {
                    compiler: d,
                    equals: function(a) {
                        var b = this.opcodes.length;
                        if (a.opcodes.length !== b) return !1;
                        for (var c = 0; b > c; c++) {
                            var d = this.opcodes[c],
                                e = a.opcodes[c];
                            if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1
                        }
                        b = this.children.length;
                        for (var c = 0; b > c; c++)
                            if (!this.children[c].equals(a.children[c])) return !1;
                        return !0
                    },
                    guid: 0,
                    compile: function(a, b) {
                        this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [];
                        var c = b.knownHelpers;
                        if (b.knownHelpers = {
                                helperMissing: !0,
                                blockHelperMissing: !0,
                                each: !0,
                                "if": !0,
                                unless: !0,
                                "with": !0,
                                log: !0,
                                lookup: !0
                            }, c)
                            for (var d in c) d in c && (b.knownHelpers[d] = c[d]);
                        return this.accept(a)
                    },
                    compileProgram: function(a) {
                        var b = new this.compiler,
                            c = b.compile(a, this.options),
                            d = this.guid++;
                        return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d
                    },
                    accept: function(a) {
                        this.sourceNode.unshift(a);
                        var b = this[a.type](a);
                        return this.sourceNode.shift(), b
                    },
                    Program: function(a) {
                        this.options.blockParams.unshift(a.blockParams);
                        for (var b = a.body, c = b.length, d = 0; c > d; d++) this.accept(b[d]);
                        return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this
                    },
                    BlockStatement: function(a) {
                        h(a);
                        var b = a.program,
                            c = a.inverse;
                        b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                        var d = this.classifySexpr(a);
                        "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                    },
                    PartialStatement: function(a) {
                        this.usePartial = !0;
                        var b = a.params;
                        if (b.length > 1) throw new k["default"]("Unsupported number of partial arguments: " + b.length, a);
                        b.length || b.push({
                            type: "PathExpression",
                            parts: [],
                            depth: 0
                        });
                        var c = a.name.original,
                            d = "SubExpression" === a.name.type;
                        d && this.accept(a.name), this.setupFullMustacheParams(a, void 0, void 0, !0);
                        var e = a.indent || "";
                        this.options.preventIndent && e && (this.opcode("appendContent", e), e = ""), this.opcode("invokePartial", d, c, e), this.opcode("append")
                    },
                    MustacheStatement: function(a) {
                        this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                    },
                    ContentStatement: function(a) {
                        a.value && this.opcode("appendContent", a.value)
                    },
                    CommentStatement: function() {},
                    SubExpression: function(a) {
                        h(a);
                        var b = this.classifySexpr(a);
                        "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
                    },
                    ambiguousSexpr: function(a, b, c) {
                        var d = a.path,
                            e = d.parts[0],
                            f = null != b || null != c;
                        this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.accept(d), this.opcode("invokeAmbiguous", e, f)
                    },
                    simpleSexpr: function(a) {
                        this.accept(a.path), this.opcode("resolvePossibleLambda")
                    },
                    helperSexpr: function(a, b, c) {
                        var d = this.setupFullMustacheParams(a, b, c),
                            e = a.path,
                            f = e.parts[0];
                        if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                        else {
                            if (this.options.knownHelpersOnly) throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                            e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, n["default"].helpers.simpleId(e))
                        }
                    },
                    PathExpression: function(a) {
                        this.addDepth(a.depth), this.opcode("getContext", a.depth);
                        var b = a.parts[0],
                            c = n["default"].helpers.scopedId(a),
                            d = !a.depth && !c && this.blockParamIndex(b);
                        d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts)) : this.opcode("lookupOnContext", a.parts, a.falsy, c) : this.opcode("pushContext")
                    },
                    StringLiteral: function(a) {
                        this.opcode("pushString", a.value)
                    },
                    NumberLiteral: function(a) {
                        this.opcode("pushLiteral", a.value)
                    },
                    BooleanLiteral: function(a) {
                        this.opcode("pushLiteral", a.value)
                    },
                    UndefinedLiteral: function() {
                        this.opcode("pushLiteral", "undefined")
                    },
                    NullLiteral: function() {
                        this.opcode("pushLiteral", "null")
                    },
                    Hash: function(a) {
                        var b = a.pairs,
                            c = 0,
                            d = b.length;
                        for (this.opcode("pushHash"); d > c; c++) this.pushParam(b[c].value);
                        for (; c--;) this.opcode("assignToHash", b[c].key);
                        this.opcode("popHash")
                    },
                    opcode: function(a) {
                        this.opcodes.push({
                            opcode: a,
                            args: o.call(arguments, 1),
                            loc: this.sourceNode[0].loc
                        })
                    },
                    addDepth: function(a) {
                        a && (this.useDepths = !0)
                    },
                    classifySexpr: function(a) {
                        var b = n["default"].helpers.simpleId(a.path),
                            c = b && !!this.blockParamIndex(a.path.parts[0]),
                            d = !c && n["default"].helpers.helperExpression(a),
                            e = !c && (d || b);
                        if (e && !d) {
                            var f = a.path.parts[0],
                                g = this.options;
                            g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1)
                        }
                        return d ? "helper" : e ? "ambiguous" : "simple"
                    },
                    pushParams: function(a) {
                        for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b])
                    },
                    pushParam: function(a) {
                        var b = null != a.value ? a.value : a.original || "";
                        if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);
                        else {
                            if (this.trackIds) {
                                var c = void 0;
                                if (!a.parts || n["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
                                    var d = a.parts.slice(1).join(".");
                                    this.opcode("pushId", "BlockParam", c, d)
                                } else b = a.original || b, b.replace && (b = b.replace(/^\.\//g, "").replace(/^\.$/g, "")), this.opcode("pushId", a.type, b)
                            }
                            this.accept(a)
                        }
                    },
                    setupFullMustacheParams: function(a, b, c, d) {
                        var e = a.params;
                        return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e
                    },
                    blockParamIndex: function(a) {
                        for (var b = 0, c = this.options.blockParams.length; c > b; b++) {
                            var d = this.options.blockParams[b],
                                e = d && l.indexOf(d, a);
                            if (d && e >= 0) return [b, e]
                        }
                    }
                }
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    this.value = a
                }

                function e() {}

                function f(a, b, c, d) {
                    var e = b.popStack(),
                        f = 0,
                        g = c.length;
                    for (a && g--; g > f; f++) e = b.nameLookup(e, c[f], d);
                    return a ? [b.aliasable("this.strict"), "(", e, ", ", b.quotedString(c[f]), ")"] : e
                }
                var g = c(8)["default"];
                b.__esModule = !0;
                var h = c(9),
                    i = c(11),
                    j = g(i),
                    k = c(12),
                    l = c(17),
                    m = g(l);
                e.prototype = {
                        nameLookup: function(a, b) {
                            return e.isValidJavaScriptVariableName(b) ? [a, ".", b] : [a, "['", b, "']"]
                        },
                        depthedLookup: function(a) {
                            return [this.aliasable("this.lookup"), '(depths, "', a, '")']
                        },
                        compilerInfo: function() {
                            var a = h.COMPILER_REVISION,
                                b = h.REVISION_CHANGES[a];
                            return [a, b]
                        },
                        appendToBuffer: function(a, b, c) {
                            return k.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a)
                        },
                        initializeBuffer: function() {
                            return this.quotedString("")
                        },
                        compile: function(a, b, c, d) {
                            this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
                                programs: [],
                                environments: []
                            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                                list: []
                            }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
                            var e = a.opcodes,
                                f = void 0,
                                g = void 0,
                                h = void 0,
                                i = void 0;
                            for (h = 0, i = e.length; i > h; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
                            if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new j["default"]("Compile completed with content left on stack");
                            var k = this.createFunctionContext(d);
                            if (this.isChild) return k;
                            var l = {
                                    compiler: this.compilerInfo(),
                                    main: k
                                },
                                m = this.context.programs;
                            for (h = 0, i = m.length; i > h; h++) m[h] && (l[h] = m[h]);
                            return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = {
                                start: {
                                    line: 1,
                                    column: 0
                                }
                            }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
                                file: b.destName
                            }), l.map = l.map && l.map.toString()) : l = l.toString()), l
                        },
                        preamble: function() {
                            this.lastContext = 0, this.source = new m["default"](this.options.srcName)
                        },
                        createFunctionContext: function(a) {
                            var b = "",
                                c = this.stackVars.concat(this.registers.list);
                            c.length > 0 && (b += ", " + c.join(", "));
                            var d = 0;
                            for (var e in this.aliases) {
                                var f = this.aliases[e];
                                this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && (b += ", alias" + ++d + "=" + e, f.children[0] = "alias" + d)
                            }
                            var g = ["depth0", "helpers", "partials", "data"];
                            (this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");
                            var h = this.mergeSource(b);
                            return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"])
                        },
                        mergeSource: function(a) {
                            var b = this.environment.isSimple,
                                c = !this.forceBuffer,
                                d = void 0,
                                e = void 0,
                                f = void 0,
                                g = void 0;
                            return this.source.each(function(a) {
                                a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1))
                            }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge()
                        },
                        blockValue: function(a) {
                            var b = this.aliasable("helpers.blockHelperMissing"),
                                c = [this.contextName(0)];
                            this.setupHelperArgs(a, 0, c);
                            var d = this.popStack();
                            c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c))
                        },
                        ambiguousBlockValue: function() {
                            var a = this.aliasable("helpers.blockHelperMissing"),
                                b = [this.contextName(0)];
                            this.setupHelperArgs("", 0, b, !0), this.flushInline();
                            var c = this.topStack();
                            b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"])
                        },
                        appendContent: function(a) {
                            this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a
                        },
                        append: function() {
                            if (this.isInline()) this.replaceStack(function(a) {
                                return [" != null ? ", a, ' : ""']
                            }), this.pushSource(this.appendToBuffer(this.popStack()));
                            else {
                                var a = this.popStack();
                                this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                            }
                        },
                        appendEscaped: function() {
                            this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"), "(", this.popStack(), ")"]))
                        },
                        getContext: function(a) {
                            this.lastContext = a
                        },
                        pushContext: function() {
                            this.pushStackLiteral(this.contextName(this.lastContext))
                        },
                        lookupOnContext: function(a, b, c) {
                            var d = 0;
                            c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])), this.resolvePath("context", a, d, b)
                        },
                        lookupBlockParam: function(a, b) {
                            this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1)
                        },
                        lookupData: function(a, b) {
                            a ? this.pushStackLiteral("this.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0)
                        },
                        resolvePath: function(a, b, c, d) {
                            var e = this;
                            if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict, this, b, a));
                            for (var g = b.length; g > c; c++) this.replaceStack(function(f) {
                                var g = e.nameLookup(f, b[c], a);
                                return d ? [" && ", g] : [" != null ? ", g, " : ", f]
                            })
                        },
                        resolvePossibleLambda: function() {
                            this.push([this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                        },
                        pushStringParam: function(a, b) {
                            this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
                        },
                        emptyHash: function(a) {
                            this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}")
                        },
                        pushHash: function() {
                            this.hash && this.hashes.push(this.hash), this.hash = {
                                values: [],
                                types: [],
                                contexts: [],
                                ids: []
                            }
                        },
                        popHash: function() {
                            var a = this.hash;
                            this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values))
                        },
                        pushString: function(a) {
                            this.pushStackLiteral(this.quotedString(a))
                        },
                        pushLiteral: function(a) {
                            this.pushStackLiteral(a)
                        },
                        pushProgram: function(a) {
                            null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
                        },
                        invokeHelper: function(a, b, c) {
                            var d = this.popStack(),
                                e = this.setupHelper(a, b),
                                f = c ? [e.name, " || "] : "",
                                g = ["("].concat(f, d);
                            this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams))
                        },
                        invokeKnownHelper: function(a, b) {
                            var c = this.setupHelper(a, b);
                            this.push(this.source.functionCall(c.name, "call", c.callParams))
                        },
                        invokeAmbiguous: function(a, b) {
                            this.useRegister("helper");
                            var c = this.popStack();
                            this.emptyHash();
                            var d = this.setupHelper(0, a, b),
                                e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                                f = ["(", "(helper = ", e, " || ", c, ")"];
                            this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"])
                        },
                        invokePartial: function(a, b, c) {
                            var d = [],
                                e = this.setupParams(b, 1, d, !1);
                            a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("this.invokePartial", "", d))
                        },
                        assignToHash: function(a) {
                            var b = this.popStack(),
                                c = void 0,
                                d = void 0,
                                e = void 0;
                            this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
                            var f = this.hash;
                            c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b
                        },
                        pushId: function(a, b, c) {
                            "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                        },
                        compiler: e,
                        compileChildren: function(a, b) {
                            for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; g > f; f++) {
                                d = c[f], e = new this.compiler;
                                var h = this.matchExistingProgram(d);
                                null == h ? (this.context.programs.push(""), h = this.context.programs.length, d.index = h, d.name = "program" + h, this.context.programs[h] = e.compile(d, b, this.context, !this.precompile), this.context.environments[h] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams) : (d.index = h, d.name = "program" + h, this.useDepths = this.useDepths || d.useDepths, this.useBlockParams = this.useBlockParams || d.useBlockParams)
                            }
                        },
                        matchExistingProgram: function(a) {
                            for (var b = 0, c = this.context.environments.length; c > b; b++) {
                                var d = this.context.environments[b];
                                if (d && d.equals(a)) return b
                            }
                        },
                        programExpression: function(a) {
                            var b = this.environment.children[a],
                                c = [b.index, "data", b.blockParams];
                            return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "this.program(" + c.join(", ") + ")"
                        },
                        useRegister: function(a) {
                            this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
                        },
                        push: function(a) {
                            return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a
                        },
                        pushStackLiteral: function(a) {
                            this.push(new d(a))
                        },
                        pushSource: function(a) {
                            this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a)
                        },
                        replaceStack: function(a) {
                            var b = ["("],
                                c = void 0,
                                e = void 0,
                                f = void 0;
                            if (!this.isInline()) throw new j["default"]("replaceStack on non-inline");
                            var g = this.popStack(!0);
                            if (g instanceof d) c = [g.value], b = ["(", c], f = !0;
                            else {
                                e = !0;
                                var h = this.incrStack();
                                b = ["((", this.push(h), " = ", g, ")"], c = this.topStack()
                            }
                            var i = a.call(this, c);
                            f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"))
                        },
                        incrStack: function() {
                            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                        },
                        topStackName: function() {
                            return "stack" + this.stackSlot
                        },
                        flushInline: function() {
                            var a = this.inlineStack;
                            this.inlineStack = [];
                            for (var b = 0, c = a.length; c > b; b++) {
                                var e = a[b];
                                if (e instanceof d) this.compileStack.push(e);
                                else {
                                    var f = this.incrStack();
                                    this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f)
                                }
                            }
                        },
                        isInline: function() {
                            return this.inlineStack.length
                        },
                        popStack: function(a) {
                            var b = this.isInline(),
                                c = (b ? this.inlineStack : this.compileStack).pop();
                            if (!a && c instanceof d) return c.value;
                            if (!b) {
                                if (!this.stackSlot) throw new j["default"]("Invalid stack pop");
                                this.stackSlot--
                            }
                            return c
                        },
                        topStack: function() {
                            var a = this.isInline() ? this.inlineStack : this.compileStack,
                                b = a[a.length - 1];
                            return b instanceof d ? b.value : b
                        },
                        contextName: function(a) {
                            return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
                        },
                        quotedString: function(a) {
                            return this.source.quotedString(a)
                        },
                        objectLiteral: function(a) {
                            return this.source.objectLiteral(a)
                        },
                        aliasable: function(a) {
                            var b = this.aliases[a];
                            return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b)
                        },
                        setupHelper: function(a, b, c) {
                            var d = [],
                                e = this.setupHelperArgs(b, a, d, c),
                                f = this.nameLookup("helpers", b, "helper");
                            return {
                                params: d,
                                paramsInit: e,
                                name: f,
                                callParams: [this.contextName(0)].concat(d)
                            }
                        },
                        setupParams: function(a, b, c) {
                            var d = {},
                                e = [],
                                f = [],
                                g = [],
                                h = void 0;
                            d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
                            var i = this.popStack(),
                                j = this.popStack();
                            (j || i) && (d.fn = j || "this.noop", d.inverse = i || "this.noop");
                            for (var k = b; k--;) h = this.popStack(), c[k] = h, this.trackIds && (g[k] = this.popStack()), this.stringParams && (f[k] = this.popStack(), e[k] = this.popStack());
                            return this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d
                        },
                        setupHelperArgs: function(a, b, c, d) {
                            var e = this.setupParams(a, b, c, !0);
                            return e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : (c.push(e), "")
                        }
                    },
                    function() {
                        for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; d > c; c++) b[a[c]] = !0
                    }(), e.isValidJavaScriptVariableName = function(a) {
                        return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
                    }, b["default"] = e, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d() {
                    this.parents = []
                }
                var e = c(8)["default"];
                b.__esModule = !0;
                var f = c(11),
                    g = e(f),
                    h = c(2),
                    i = e(h);
                d.prototype = {
                    constructor: d,
                    mutating: !1,
                    acceptKey: function(a, b) {
                        var c = this.accept(a[b]);
                        if (this.mutating) {
                            if (c && (!c.type || !i["default"][c.type])) throw new g["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                            a[b] = c
                        }
                    },
                    acceptRequired: function(a, b) {
                        if (this.acceptKey(a, b), !a[b]) throw new g["default"](a.type + " requires " + b)
                    },
                    acceptArray: function(a) {
                        for (var b = 0, c = a.length; c > b; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--)
                    },
                    accept: function(a) {
                        if (a) {
                            this.current && this.parents.unshift(this.current), this.current = a;
                            var b = this[a.type](a);
                            return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0
                        }
                    },
                    Program: function(a) {
                        this.acceptArray(a.body)
                    },
                    MustacheStatement: function(a) {
                        this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash")
                    },
                    BlockStatement: function(a) {
                        this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash"), this.acceptKey(a, "program"), this.acceptKey(a, "inverse")
                    },
                    PartialStatement: function(a) {
                        this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash")
                    },
                    ContentStatement: function() {},
                    CommentStatement: function() {},
                    SubExpression: function(a) {
                        this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash")
                    },
                    PathExpression: function() {},
                    StringLiteral: function() {},
                    NumberLiteral: function() {},
                    BooleanLiteral: function() {},
                    UndefinedLiteral: function() {},
                    NullLiteral: function() {},
                    Hash: function(a) {
                        this.acceptArray(a.pairs)
                    },
                    HashPair: function(a) {
                        this.acceptRequired(a, "value")
                    }
                }, b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                (function(c) {
                    "use strict";
                    b.__esModule = !0, b["default"] = function(a) {
                        var b = "undefined" != typeof c ? c : window,
                            d = b.Handlebars;
                        a.noConflict = function() {
                            b.Handlebars === a && (b.Handlebars = d)
                        }
                    }, a.exports = b["default"]
                }).call(b, function() {
                    return this
                }())
            }, function(a, b, c) {
                "use strict";
                b["default"] = function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }, b.__esModule = !0
            }, function(a, b, c) {
                "use strict";

                function d(a, b) {
                    this.helpers = a || {}, this.partials = b || {}, e(this)
                }

                function e(a) {
                    a.registerHelper("helperMissing", function() {
                        if (1 !== arguments.length) throw new k["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                    }), a.registerHelper("blockHelperMissing", function(b, c) {
                        var d = c.inverse,
                            e = c.fn;
                        if (b === !0) return e(this);
                        if (b === !1 || null == b) return d(this);
                        if (o(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
                        if (c.data && c.ids) {
                            var g = f(c.data);
                            g.contextPath = i.appendContextPath(c.data.contextPath, c.name), c = {
                                data: g
                            }
                        }
                        return e(b, c)
                    }), a.registerHelper("each", function(a, b) {
                        function c(b, c, e) {
                            j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!e, l && (j.contextPath = l + b)), h += d(a[b], {
                                data: j,
                                blockParams: i.blockParams([a[b], b], [l + b, null])
                            })
                        }
                        if (!b) throw new k["default"]("Must pass iterator to #each");
                        var d = b.fn,
                            e = b.inverse,
                            g = 0,
                            h = "",
                            j = void 0,
                            l = void 0;
                        if (b.data && b.ids && (l = i.appendContextPath(b.data.contextPath, b.ids[0]) + "."), p(a) && (a = a.call(this)), b.data && (j = f(b.data)), a && "object" == typeof a)
                            if (o(a))
                                for (var m = a.length; m > g; g++) c(g, g, g === a.length - 1);
                            else {
                                var n = void 0;
                                for (var q in a) a.hasOwnProperty(q) && (n && c(n, g - 1), n = q, g++);
                                n && c(n, g - 1, !0)
                            }
                        return 0 === g && (h = e(this)), h
                    }), a.registerHelper("if", function(a, b) {
                        return p(a) && (a = a.call(this)), !b.hash.includeZero && !a || i.isEmpty(a) ? b.inverse(this) : b.fn(this)
                    }), a.registerHelper("unless", function(b, c) {
                        return a.helpers["if"].call(this, b, {
                            fn: c.inverse,
                            inverse: c.fn,
                            hash: c.hash
                        })
                    }), a.registerHelper("with", function(a, b) {
                        p(a) && (a = a.call(this));
                        var c = b.fn;
                        if (i.isEmpty(a)) return b.inverse(this);
                        if (b.data && b.ids) {
                            var d = f(b.data);
                            d.contextPath = i.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                                data: d
                            }
                        }
                        return c(a, b)
                    }), a.registerHelper("log", function(b, c) {
                        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                        a.log(d, b)
                    }), a.registerHelper("lookup", function(a, b) {
                        return a && a[b]
                    })
                }

                function f(a) {
                    var b = i.extend({}, a);
                    return b._parent = a, b
                }
                var g = c(8)["default"];
                b.__esModule = !0, b.HandlebarsEnvironment = d, b.createFrame = f;
                var h = c(12),
                    i = g(h),
                    j = c(11),
                    k = g(j),
                    l = "3.0.1";
                b.VERSION = l;
                var m = 6;
                b.COMPILER_REVISION = m;
                var n = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                b.REVISION_CHANGES = n;
                var o = i.isArray,
                    p = i.isFunction,
                    q = i.toString,
                    r = "[object Object]";
                d.prototype = {
                    constructor: d,
                    logger: s,
                    log: t,
                    registerHelper: function(a, b) {
                        if (q.call(a) === r) {
                            if (b) throw new k["default"]("Arg not supported with multiple helpers");
                            i.extend(this.helpers, a)
                        } else this.helpers[a] = b
                    },
                    unregisterHelper: function(a) {
                        delete this.helpers[a]
                    },
                    registerPartial: function(a, b) {
                        if (q.call(a) === r) i.extend(this.partials, a);
                        else {
                            if ("undefined" == typeof b) throw new k["default"]("Attempting to register a partial as undefined");
                            this.partials[a] = b
                        }
                    },
                    unregisterPartial: function(a) {
                        delete this.partials[a]
                    }
                };
                var s = {
                    methodMap: {
                        0: "debug",
                        1: "info",
                        2: "warn",
                        3: "error"
                    },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 1,
                    log: function(a, b) {
                        if ("undefined" != typeof console && s.level <= a) {
                            var c = s.methodMap[a];
                            (console[c] || console.log).call(console, b)
                        }
                    }
                };
                b.logger = s;
                var t = s.log;
                b.log = t
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    this.string = a
                }
                b.__esModule = !0, d.prototype.toString = d.prototype.toHTML = function() {
                    return "" + this.string
                }, b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d(a, b) {
                    var c = b && b.loc,
                        f = void 0,
                        g = void 0;
                    c && (f = c.start.line, g = c.start.column, a += " - " + f + ":" + g);
                    for (var h = Error.prototype.constructor.call(this, a), i = 0; i < e.length; i++) this[e[i]] = h[e[i]];
                    Error.captureStackTrace && Error.captureStackTrace(this, d), c && (this.lineNumber = f, this.column = g)
                }
                b.__esModule = !0;
                var e = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                d.prototype = new Error, b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    return k[a]
                }

                function e(a) {
                    for (var b = 1; b < arguments.length; b++)
                        for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                    return a
                }

                function f(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                }

                function g(a) {
                    if ("string" != typeof a) {
                        if (a && a.toHTML) return a.toHTML();
                        if (null == a) return "";
                        if (!a) return a + "";
                        a = "" + a
                    }
                    return m.test(a) ? a.replace(l, d) : a
                }

                function h(a) {
                    return a || 0 === a ? !(!p(a) || 0 !== a.length) : !0
                }

                function i(a, b) {
                    return a.path = b, a
                }

                function j(a, b) {
                    return (a ? a + "." : "") + b
                }
                b.__esModule = !0, b.extend = e, b.indexOf = f, b.escapeExpression = g, b.isEmpty = h, b.blockParams = i, b.appendContextPath = j;
                var k = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    l = /[&<>"'`]/g,
                    m = /[&<>"'`]/,
                    n = Object.prototype.toString;
                b.toString = n;
                var o = function(a) {
                    return "function" == typeof a
                };
                o(/x/) && (b.isFunction = o = function(a) {
                    return "function" == typeof a && "[object Function]" === n.call(a)
                });
                var o;
                b.isFunction = o;
                var p = Array.isArray || function(a) {
                    return a && "object" == typeof a ? "[object Array]" === n.call(a) : !1
                };
                b.isArray = p
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    var b = a && a[0] || 1,
                        c = p.COMPILER_REVISION;
                    if (b !== c) {
                        if (c > b) {
                            var d = p.REVISION_CHANGES[c],
                                e = p.REVISION_CHANGES[b];
                            throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                        }
                        throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                    }
                }

                function e(a, b) {
                    function c(c, d, e) {
                        e.hash && (d = m.extend({}, d, e.hash)), c = b.VM.resolvePartial.call(this, c, d, e);
                        var f = b.VM.invokePartial.call(this, c, d, e);
                        if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                            if (e.indent) {
                                for (var g = f.split("\n"), h = 0, i = g.length; i > h && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                                f = g.join("\n")
                            }
                            return f
                        }
                        throw new o["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
                    }

                    function d(b) {
                        var c = void 0 === arguments[1] ? {} : arguments[1],
                            f = c.data;
                        d._setup(c), !c.partial && a.useData && (f = j(b, f));
                        var g = void 0,
                            h = a.useBlockParams ? [] : void 0;
                        return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(e, b, e.helpers, e.partials, f, h, g)
                    }
                    if (!b) throw new o["default"]("No environment passed to template");
                    if (!a || !a.main) throw new o["default"]("Unknown template object: " + typeof a);
                    b.VM.checkRevision(a.compiler);
                    var e = {
                        strict: function(a, b) {
                            if (!(b in a)) throw new o["default"]('"' + b + '" not defined in ' + a);
                            return a[b]
                        },
                        lookup: function(a, b) {
                            for (var c = a.length, d = 0; c > d; d++)
                                if (a[d] && null != a[d][b]) return a[d][b]
                        },
                        lambda: function(a, b) {
                            return "function" == typeof a ? a.call(b) : a
                        },
                        escapeExpression: m.escapeExpression,
                        invokePartial: c,
                        fn: function(b) {
                            return a[b]
                        },
                        programs: [],
                        program: function(a, b, c, d, e) {
                            var g = this.programs[a],
                                h = this.fn(a);
                            return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
                        },
                        data: function(a, b) {
                            for (; a && b--;) a = a._parent;
                            return a
                        },
                        merge: function(a, b) {
                            var c = a || b;
                            return a && b && a !== b && (c = m.extend({}, b, a)), c
                        },
                        noop: b.VM.noop,
                        compilerInfo: a.compiler
                    };
                    return d.isTop = !0, d._setup = function(c) {
                        c.partial ? (e.helpers = c.helpers, e.partials = c.partials) : (e.helpers = e.merge(c.helpers, b.helpers), a.usePartial && (e.partials = e.merge(c.partials, b.partials)))
                    }, d._child = function(b, c, d, g) {
                        if (a.useBlockParams && !d) throw new o["default"]("must pass block params");
                        if (a.useDepths && !g) throw new o["default"]("must pass parent depths");
                        return f(e, b, a[b], c, 0, d, g)
                    }, d
                }

                function f(a, b, c, d, e, f, g) {
                    function h(b) {
                        var e = void 0 === arguments[1] ? {} : arguments[1];
                        return c.call(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), g && [b].concat(g))
                    }
                    return h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
                }

                function g(a, b, c) {
                    return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = c.partials[c.name], a
                }

                function h(a, b, c) {
                    if (c.partial = !0, void 0 === a) throw new o["default"]("The partial " + c.name + " could not be found");
                    return a instanceof Function ? a(b, c) : void 0
                }

                function i() {
                    return ""
                }

                function j(a, b) {
                    return b && "root" in b || (b = b ? p.createFrame(b) : {}, b.root = a), b
                }
                var k = c(8)["default"];
                b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
                var l = c(12),
                    m = k(l),
                    n = c(11),
                    o = k(n),
                    p = c(9)
            }, function(a, b, c) {
                "use strict";
                b.__esModule = !0;
                var d = function() {
                    function a() {
                        this.yy = {}
                    }
                    var b = {
                            trace: function() {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                content: 12,
                                COMMENT: 13,
                                CONTENT: 14,
                                openRawBlock: 15,
                                END_RAW_BLOCK: 16,
                                OPEN_RAW_BLOCK: 17,
                                helperName: 18,
                                openRawBlock_repetition0: 19,
                                openRawBlock_option0: 20,
                                CLOSE_RAW_BLOCK: 21,
                                openBlock: 22,
                                block_option0: 23,
                                closeBlock: 24,
                                openInverse: 25,
                                block_option1: 26,
                                OPEN_BLOCK: 27,
                                openBlock_repetition0: 28,
                                openBlock_option0: 29,
                                openBlock_option1: 30,
                                CLOSE: 31,
                                OPEN_INVERSE: 32,
                                openInverse_repetition0: 33,
                                openInverse_option0: 34,
                                openInverse_option1: 35,
                                openInverseChain: 36,
                                OPEN_INVERSE_CHAIN: 37,
                                openInverseChain_repetition0: 38,
                                openInverseChain_option0: 39,
                                openInverseChain_option1: 40,
                                inverseAndProgram: 41,
                                INVERSE: 42,
                                inverseChain: 43,
                                inverseChain_option0: 44,
                                OPEN_ENDBLOCK: 45,
                                OPEN: 46,
                                mustache_repetition0: 47,
                                mustache_option0: 48,
                                OPEN_UNESCAPED: 49,
                                mustache_repetition1: 50,
                                mustache_option1: 51,
                                CLOSE_UNESCAPED: 52,
                                OPEN_PARTIAL: 53,
                                partialName: 54,
                                partial_repetition0: 55,
                                partial_option0: 56,
                                param: 57,
                                sexpr: 58,
                                OPEN_SEXPR: 59,
                                sexpr_repetition0: 60,
                                sexpr_option0: 61,
                                CLOSE_SEXPR: 62,
                                hash: 63,
                                hash_repetition_plus0: 64,
                                hashSegment: 65,
                                ID: 66,
                                EQUALS: 67,
                                blockParams: 68,
                                OPEN_BLOCK_PARAMS: 69,
                                blockParams_repetition_plus0: 70,
                                CLOSE_BLOCK_PARAMS: 71,
                                path: 72,
                                dataName: 73,
                                STRING: 74,
                                NUMBER: 75,
                                BOOLEAN: 76,
                                UNDEFINED: 77,
                                NULL: 78,
                                DATA: 79,
                                pathSegments: 80,
                                SEP: 81,
                                $accept: 0,
                                $end: 1
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                13: "COMMENT",
                                14: "CONTENT",
                                16: "END_RAW_BLOCK",
                                17: "OPEN_RAW_BLOCK",
                                21: "CLOSE_RAW_BLOCK",
                                27: "OPEN_BLOCK",
                                31: "CLOSE",
                                32: "OPEN_INVERSE",
                                37: "OPEN_INVERSE_CHAIN",
                                42: "INVERSE",
                                45: "OPEN_ENDBLOCK",
                                46: "OPEN",
                                49: "OPEN_UNESCAPED",
                                52: "CLOSE_UNESCAPED",
                                53: "OPEN_PARTIAL",
                                59: "OPEN_SEXPR",
                                62: "CLOSE_SEXPR",
                                66: "ID",
                                67: "EQUALS",
                                69: "OPEN_BLOCK_PARAMS",
                                71: "CLOSE_BLOCK_PARAMS",
                                74: "STRING",
                                75: "NUMBER",
                                76: "BOOLEAN",
                                77: "UNDEFINED",
                                78: "NULL",
                                79: "DATA",
                                81: "SEP"
                            },
                            productions_: [0, [3, 2],
                                [4, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [12, 1],
                                [10, 3],
                                [15, 5],
                                [9, 4],
                                [9, 4],
                                [22, 6],
                                [25, 6],
                                [36, 6],
                                [41, 2],
                                [43, 3],
                                [43, 1],
                                [24, 3],
                                [8, 5],
                                [8, 5],
                                [11, 5],
                                [57, 1],
                                [57, 1],
                                [58, 5],
                                [63, 1],
                                [65, 3],
                                [68, 3],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [54, 1],
                                [54, 1],
                                [73, 2],
                                [72, 1],
                                [80, 3],
                                [80, 1],
                                [6, 0],
                                [6, 2],
                                [19, 0],
                                [19, 2],
                                [20, 0],
                                [20, 1],
                                [23, 0],
                                [23, 1],
                                [26, 0],
                                [26, 1],
                                [28, 0],
                                [28, 2],
                                [29, 0],
                                [29, 1],
                                [30, 0],
                                [30, 1],
                                [33, 0],
                                [33, 2],
                                [34, 0],
                                [34, 1],
                                [35, 0],
                                [35, 1],
                                [38, 0],
                                [38, 2],
                                [39, 0],
                                [39, 1],
                                [40, 0],
                                [40, 1],
                                [44, 0],
                                [44, 1],
                                [47, 0],
                                [47, 2],
                                [48, 0],
                                [48, 1],
                                [50, 0],
                                [50, 2],
                                [51, 0],
                                [51, 1],
                                [55, 0],
                                [55, 2],
                                [56, 0],
                                [56, 1],
                                [60, 0],
                                [60, 2],
                                [61, 0],
                                [61, 1],
                                [64, 1],
                                [64, 2],
                                [70, 1],
                                [70, 2]
                            ],
                            performAction: function(a, b, c, d, e, f, g) {
                                var h = f.length - 1;
                                switch (e) {
                                    case 1:
                                        return f[h - 1];
                                    case 2:
                                        this.$ = new d.Program(f[h], null, {}, d.locInfo(this._$));
                                        break;
                                    case 3:
                                        this.$ = f[h];
                                        break;
                                    case 4:
                                        this.$ = f[h];
                                        break;
                                    case 5:
                                        this.$ = f[h];
                                        break;
                                    case 6:
                                        this.$ = f[h];
                                        break;
                                    case 7:
                                        this.$ = f[h];
                                        break;
                                    case 8:
                                        this.$ = new d.CommentStatement(d.stripComment(f[h]), d.stripFlags(f[h], f[h]), d.locInfo(this._$));
                                        break;
                                    case 9:
                                        this.$ = new d.ContentStatement(f[h], d.locInfo(this._$));
                                        break;
                                    case 10:
                                        this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                                        break;
                                    case 11:
                                        this.$ = {
                                            path: f[h - 3],
                                            params: f[h - 2],
                                            hash: f[h - 1]
                                        };
                                        break;
                                    case 12:
                                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                                        break;
                                    case 13:
                                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                                        break;
                                    case 14:
                                        this.$ = {
                                            path: f[h - 4],
                                            params: f[h - 3],
                                            hash: f[h - 2],
                                            blockParams: f[h - 1],
                                            strip: d.stripFlags(f[h - 5], f[h])
                                        };
                                        break;
                                    case 15:
                                        this.$ = {
                                            path: f[h - 4],
                                            params: f[h - 3],
                                            hash: f[h - 2],
                                            blockParams: f[h - 1],
                                            strip: d.stripFlags(f[h - 5], f[h])
                                        };
                                        break;
                                    case 16:
                                        this.$ = {
                                            path: f[h - 4],
                                            params: f[h - 3],
                                            hash: f[h - 2],
                                            blockParams: f[h - 1],
                                            strip: d.stripFlags(f[h - 5], f[h])
                                        };
                                        break;
                                    case 17:
                                        this.$ = {
                                            strip: d.stripFlags(f[h - 1], f[h - 1]),
                                            program: f[h]
                                        };
                                        break;
                                    case 18:
                                        var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                            j = new d.Program([i], null, {}, d.locInfo(this._$));
                                        j.chained = !0, this.$ = {
                                            strip: f[h - 2].strip,
                                            program: j,
                                            chain: !0
                                        };
                                        break;
                                    case 19:
                                        this.$ = f[h];
                                        break;
                                    case 20:
                                        this.$ = {
                                            path: f[h - 1],
                                            strip: d.stripFlags(f[h - 2], f[h])
                                        };
                                        break;
                                    case 21:
                                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                        break;
                                    case 22:
                                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                        break;
                                    case 23:
                                        this.$ = new d.PartialStatement(f[h - 3], f[h - 2], f[h - 1], d.stripFlags(f[h - 4], f[h]), d.locInfo(this._$));
                                        break;
                                    case 24:
                                        this.$ = f[h];
                                        break;
                                    case 25:
                                        this.$ = f[h];
                                        break;
                                    case 26:
                                        this.$ = new d.SubExpression(f[h - 3], f[h - 2], f[h - 1], d.locInfo(this._$));
                                        break;
                                    case 27:
                                        this.$ = new d.Hash(f[h], d.locInfo(this._$));
                                        break;
                                    case 28:
                                        this.$ = new d.HashPair(d.id(f[h - 2]), f[h], d.locInfo(this._$));
                                        break;
                                    case 29:
                                        this.$ = d.id(f[h - 1]);
                                        break;
                                    case 30:
                                        this.$ = f[h];
                                        break;
                                    case 31:
                                        this.$ = f[h];
                                        break;
                                    case 32:
                                        this.$ = new d.StringLiteral(f[h], d.locInfo(this._$));
                                        break;
                                    case 33:
                                        this.$ = new d.NumberLiteral(f[h], d.locInfo(this._$));
                                        break;
                                    case 34:
                                        this.$ = new d.BooleanLiteral(f[h], d.locInfo(this._$));
                                        break;
                                    case 35:
                                        this.$ = new d.UndefinedLiteral(d.locInfo(this._$));
                                        break;
                                    case 36:
                                        this.$ = new d.NullLiteral(d.locInfo(this._$));
                                        break;
                                    case 37:
                                        this.$ = f[h];
                                        break;
                                    case 38:
                                        this.$ = f[h];
                                        break;
                                    case 39:
                                        this.$ = d.preparePath(!0, f[h], this._$);
                                        break;
                                    case 40:
                                        this.$ = d.preparePath(!1, f[h], this._$);
                                        break;
                                    case 41:
                                        f[h - 2].push({
                                            part: d.id(f[h]),
                                            original: f[h],
                                            separator: f[h - 1]
                                        }), this.$ = f[h - 2];
                                        break;
                                    case 42:
                                        this.$ = [{
                                            part: d.id(f[h]),
                                            original: f[h]
                                        }];
                                        break;
                                    case 43:
                                        this.$ = [];
                                        break;
                                    case 44:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 45:
                                        this.$ = [];
                                        break;
                                    case 46:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 53:
                                        this.$ = [];
                                        break;
                                    case 54:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 59:
                                        this.$ = [];
                                        break;
                                    case 60:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 65:
                                        this.$ = [];
                                        break;
                                    case 66:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 73:
                                        this.$ = [];
                                        break;
                                    case 74:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 77:
                                        this.$ = [];
                                        break;
                                    case 78:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 81:
                                        this.$ = [];
                                        break;
                                    case 82:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 85:
                                        this.$ = [];
                                        break;
                                    case 86:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 89:
                                        this.$ = [f[h]];
                                        break;
                                    case 90:
                                        f[h - 1].push(f[h]);
                                        break;
                                    case 91:
                                        this.$ = [f[h]];
                                        break;
                                    case 92:
                                        f[h - 1].push(f[h])
                                }
                            },
                            table: [{
                                3: 1,
                                4: 2,
                                5: [2, 43],
                                6: 3,
                                13: [2, 43],
                                14: [2, 43],
                                17: [2, 43],
                                27: [2, 43],
                                32: [2, 43],
                                46: [2, 43],
                                49: [2, 43],
                                53: [2, 43]
                            }, {
                                1: [3]
                            }, {
                                5: [1, 4]
                            }, {
                                5: [2, 2],
                                7: 5,
                                8: 6,
                                9: 7,
                                10: 8,
                                11: 9,
                                12: 10,
                                13: [1, 11],
                                14: [1, 18],
                                15: 16,
                                17: [1, 21],
                                22: 14,
                                25: 15,
                                27: [1, 19],
                                32: [1, 20],
                                37: [2, 2],
                                42: [2, 2],
                                45: [2, 2],
                                46: [1, 12],
                                49: [1, 13],
                                53: [1, 17]
                            }, {
                                1: [2, 1]
                            }, {
                                5: [2, 44],
                                13: [2, 44],
                                14: [2, 44],
                                17: [2, 44],
                                27: [2, 44],
                                32: [2, 44],
                                37: [2, 44],
                                42: [2, 44],
                                45: [2, 44],
                                46: [2, 44],
                                49: [2, 44],
                                53: [2, 44]
                            }, {
                                5: [2, 3],
                                13: [2, 3],
                                14: [2, 3],
                                17: [2, 3],
                                27: [2, 3],
                                32: [2, 3],
                                37: [2, 3],
                                42: [2, 3],
                                45: [2, 3],
                                46: [2, 3],
                                49: [2, 3],
                                53: [2, 3]
                            }, {
                                5: [2, 4],
                                13: [2, 4],
                                14: [2, 4],
                                17: [2, 4],
                                27: [2, 4],
                                32: [2, 4],
                                37: [2, 4],
                                42: [2, 4],
                                45: [2, 4],
                                46: [2, 4],
                                49: [2, 4],
                                53: [2, 4]
                            }, {
                                5: [2, 5],
                                13: [2, 5],
                                14: [2, 5],
                                17: [2, 5],
                                27: [2, 5],
                                32: [2, 5],
                                37: [2, 5],
                                42: [2, 5],
                                45: [2, 5],
                                46: [2, 5],
                                49: [2, 5],
                                53: [2, 5]
                            }, {
                                5: [2, 6],
                                13: [2, 6],
                                14: [2, 6],
                                17: [2, 6],
                                27: [2, 6],
                                32: [2, 6],
                                37: [2, 6],
                                42: [2, 6],
                                45: [2, 6],
                                46: [2, 6],
                                49: [2, 6],
                                53: [2, 6]
                            }, {
                                5: [2, 7],
                                13: [2, 7],
                                14: [2, 7],
                                17: [2, 7],
                                27: [2, 7],
                                32: [2, 7],
                                37: [2, 7],
                                42: [2, 7],
                                45: [2, 7],
                                46: [2, 7],
                                49: [2, 7],
                                53: [2, 7]
                            }, {
                                5: [2, 8],
                                13: [2, 8],
                                14: [2, 8],
                                17: [2, 8],
                                27: [2, 8],
                                32: [2, 8],
                                37: [2, 8],
                                42: [2, 8],
                                45: [2, 8],
                                46: [2, 8],
                                49: [2, 8],
                                53: [2, 8]
                            }, {
                                18: 22,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                18: 33,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                4: 34,
                                6: 3,
                                13: [2, 43],
                                14: [2, 43],
                                17: [2, 43],
                                27: [2, 43],
                                32: [2, 43],
                                37: [2, 43],
                                42: [2, 43],
                                45: [2, 43],
                                46: [2, 43],
                                49: [2, 43],
                                53: [2, 43]
                            }, {
                                4: 35,
                                6: 3,
                                13: [2, 43],
                                14: [2, 43],
                                17: [2, 43],
                                27: [2, 43],
                                32: [2, 43],
                                42: [2, 43],
                                45: [2, 43],
                                46: [2, 43],
                                49: [2, 43],
                                53: [2, 43]
                            }, {
                                12: 36,
                                14: [1, 18]
                            }, {
                                18: 38,
                                54: 37,
                                58: 39,
                                59: [1, 40],
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                5: [2, 9],
                                13: [2, 9],
                                14: [2, 9],
                                16: [2, 9],
                                17: [2, 9],
                                27: [2, 9],
                                32: [2, 9],
                                37: [2, 9],
                                42: [2, 9],
                                45: [2, 9],
                                46: [2, 9],
                                49: [2, 9],
                                53: [2, 9]
                            }, {
                                18: 41,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                18: 42,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                18: 43,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                31: [2, 73],
                                47: 44,
                                59: [2, 73],
                                66: [2, 73],
                                74: [2, 73],
                                75: [2, 73],
                                76: [2, 73],
                                77: [2, 73],
                                78: [2, 73],
                                79: [2, 73]
                            }, {
                                21: [2, 30],
                                31: [2, 30],
                                52: [2, 30],
                                59: [2, 30],
                                62: [2, 30],
                                66: [2, 30],
                                69: [2, 30],
                                74: [2, 30],
                                75: [2, 30],
                                76: [2, 30],
                                77: [2, 30],
                                78: [2, 30],
                                79: [2, 30]
                            }, {
                                21: [2, 31],
                                31: [2, 31],
                                52: [2, 31],
                                59: [2, 31],
                                62: [2, 31],
                                66: [2, 31],
                                69: [2, 31],
                                74: [2, 31],
                                75: [2, 31],
                                76: [2, 31],
                                77: [2, 31],
                                78: [2, 31],
                                79: [2, 31]
                            }, {
                                21: [2, 32],
                                31: [2, 32],
                                52: [2, 32],
                                59: [2, 32],
                                62: [2, 32],
                                66: [2, 32],
                                69: [2, 32],
                                74: [2, 32],
                                75: [2, 32],
                                76: [2, 32],
                                77: [2, 32],
                                78: [2, 32],
                                79: [2, 32]
                            }, {
                                21: [2, 33],
                                31: [2, 33],
                                52: [2, 33],
                                59: [2, 33],
                                62: [2, 33],
                                66: [2, 33],
                                69: [2, 33],
                                74: [2, 33],
                                75: [2, 33],
                                76: [2, 33],
                                77: [2, 33],
                                78: [2, 33],
                                79: [2, 33]
                            }, {
                                21: [2, 34],
                                31: [2, 34],
                                52: [2, 34],
                                59: [2, 34],
                                62: [2, 34],
                                66: [2, 34],
                                69: [2, 34],
                                74: [2, 34],
                                75: [2, 34],
                                76: [2, 34],
                                77: [2, 34],
                                78: [2, 34],
                                79: [2, 34]
                            }, {
                                21: [2, 35],
                                31: [2, 35],
                                52: [2, 35],
                                59: [2, 35],
                                62: [2, 35],
                                66: [2, 35],
                                69: [2, 35],
                                74: [2, 35],
                                75: [2, 35],
                                76: [2, 35],
                                77: [2, 35],
                                78: [2, 35],
                                79: [2, 35]
                            }, {
                                21: [2, 36],
                                31: [2, 36],
                                52: [2, 36],
                                59: [2, 36],
                                62: [2, 36],
                                66: [2, 36],
                                69: [2, 36],
                                74: [2, 36],
                                75: [2, 36],
                                76: [2, 36],
                                77: [2, 36],
                                78: [2, 36],
                                79: [2, 36]
                            }, {
                                21: [2, 40],
                                31: [2, 40],
                                52: [2, 40],
                                59: [2, 40],
                                62: [2, 40],
                                66: [2, 40],
                                69: [2, 40],
                                74: [2, 40],
                                75: [2, 40],
                                76: [2, 40],
                                77: [2, 40],
                                78: [2, 40],
                                79: [2, 40],
                                81: [1, 45]
                            }, {
                                66: [1, 32],
                                80: 46
                            }, {
                                21: [2, 42],
                                31: [2, 42],
                                52: [2, 42],
                                59: [2, 42],
                                62: [2, 42],
                                66: [2, 42],
                                69: [2, 42],
                                74: [2, 42],
                                75: [2, 42],
                                76: [2, 42],
                                77: [2, 42],
                                78: [2, 42],
                                79: [2, 42],
                                81: [2, 42]
                            }, {
                                50: 47,
                                52: [2, 77],
                                59: [2, 77],
                                66: [2, 77],
                                74: [2, 77],
                                75: [2, 77],
                                76: [2, 77],
                                77: [2, 77],
                                78: [2, 77],
                                79: [2, 77]
                            }, {
                                23: 48,
                                36: 50,
                                37: [1, 52],
                                41: 51,
                                42: [1, 53],
                                43: 49,
                                45: [2, 49]
                            }, {
                                26: 54,
                                41: 55,
                                42: [1, 53],
                                45: [2, 51]
                            }, {
                                16: [1, 56]
                            }, {
                                31: [2, 81],
                                55: 57,
                                59: [2, 81],
                                66: [2, 81],
                                74: [2, 81],
                                75: [2, 81],
                                76: [2, 81],
                                77: [2, 81],
                                78: [2, 81],
                                79: [2, 81]
                            }, {
                                31: [2, 37],
                                59: [2, 37],
                                66: [2, 37],
                                74: [2, 37],
                                75: [2, 37],
                                76: [2, 37],
                                77: [2, 37],
                                78: [2, 37],
                                79: [2, 37]
                            }, {
                                31: [2, 38],
                                59: [2, 38],
                                66: [2, 38],
                                74: [2, 38],
                                75: [2, 38],
                                76: [2, 38],
                                77: [2, 38],
                                78: [2, 38],
                                79: [2, 38]
                            }, {
                                18: 58,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                28: 59,
                                31: [2, 53],
                                59: [2, 53],
                                66: [2, 53],
                                69: [2, 53],
                                74: [2, 53],
                                75: [2, 53],
                                76: [2, 53],
                                77: [2, 53],
                                78: [2, 53],
                                79: [2, 53]
                            }, {
                                31: [2, 59],
                                33: 60,
                                59: [2, 59],
                                66: [2, 59],
                                69: [2, 59],
                                74: [2, 59],
                                75: [2, 59],
                                76: [2, 59],
                                77: [2, 59],
                                78: [2, 59],
                                79: [2, 59]
                            }, {
                                19: 61,
                                21: [2, 45],
                                59: [2, 45],
                                66: [2, 45],
                                74: [2, 45],
                                75: [2, 45],
                                76: [2, 45],
                                77: [2, 45],
                                78: [2, 45],
                                79: [2, 45]
                            }, {
                                18: 65,
                                31: [2, 75],
                                48: 62,
                                57: 63,
                                58: 66,
                                59: [1, 40],
                                63: 64,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                66: [1, 70]
                            }, {
                                21: [2, 39],
                                31: [2, 39],
                                52: [2, 39],
                                59: [2, 39],
                                62: [2, 39],
                                66: [2, 39],
                                69: [2, 39],
                                74: [2, 39],
                                75: [2, 39],
                                76: [2, 39],
                                77: [2, 39],
                                78: [2, 39],
                                79: [2, 39],
                                81: [1, 45]
                            }, {
                                18: 65,
                                51: 71,
                                52: [2, 79],
                                57: 72,
                                58: 66,
                                59: [1, 40],
                                63: 73,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                24: 74,
                                45: [1, 75]
                            }, {
                                45: [2, 50]
                            }, {
                                4: 76,
                                6: 3,
                                13: [2, 43],
                                14: [2, 43],
                                17: [2, 43],
                                27: [2, 43],
                                32: [2, 43],
                                37: [2, 43],
                                42: [2, 43],
                                45: [2, 43],
                                46: [2, 43],
                                49: [2, 43],
                                53: [2, 43]
                            }, {
                                45: [2, 19]
                            }, {
                                18: 77,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                4: 78,
                                6: 3,
                                13: [2, 43],
                                14: [2, 43],
                                17: [2, 43],
                                27: [2, 43],
                                32: [2, 43],
                                45: [2, 43],
                                46: [2, 43],
                                49: [2, 43],
                                53: [2, 43]
                            }, {
                                24: 79,
                                45: [1, 75]
                            }, {
                                45: [2, 52]
                            }, {
                                5: [2, 10],
                                13: [2, 10],
                                14: [2, 10],
                                17: [2, 10],
                                27: [2, 10],
                                32: [2, 10],
                                37: [2, 10],
                                42: [2, 10],
                                45: [2, 10],
                                46: [2, 10],
                                49: [2, 10],
                                53: [2, 10]
                            }, {
                                18: 65,
                                31: [2, 83],
                                56: 80,
                                57: 81,
                                58: 66,
                                59: [1, 40],
                                63: 82,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                59: [2, 85],
                                60: 83,
                                62: [2, 85],
                                66: [2, 85],
                                74: [2, 85],
                                75: [2, 85],
                                76: [2, 85],
                                77: [2, 85],
                                78: [2, 85],
                                79: [2, 85]
                            }, {
                                18: 65,
                                29: 84,
                                31: [2, 55],
                                57: 85,
                                58: 66,
                                59: [1, 40],
                                63: 86,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                69: [2, 55],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                18: 65,
                                31: [2, 61],
                                34: 87,
                                57: 88,
                                58: 66,
                                59: [1, 40],
                                63: 89,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                69: [2, 61],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                18: 65,
                                20: 90,
                                21: [2, 47],
                                57: 91,
                                58: 66,
                                59: [1, 40],
                                63: 92,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                31: [1, 93]
                            }, {
                                31: [2, 74],
                                59: [2, 74],
                                66: [2, 74],
                                74: [2, 74],
                                75: [2, 74],
                                76: [2, 74],
                                77: [2, 74],
                                78: [2, 74],
                                79: [2, 74]
                            }, {
                                31: [2, 76]
                            }, {
                                21: [2, 24],
                                31: [2, 24],
                                52: [2, 24],
                                59: [2, 24],
                                62: [2, 24],
                                66: [2, 24],
                                69: [2, 24],
                                74: [2, 24],
                                75: [2, 24],
                                76: [2, 24],
                                77: [2, 24],
                                78: [2, 24],
                                79: [2, 24]
                            }, {
                                21: [2, 25],
                                31: [2, 25],
                                52: [2, 25],
                                59: [2, 25],
                                62: [2, 25],
                                66: [2, 25],
                                69: [2, 25],
                                74: [2, 25],
                                75: [2, 25],
                                76: [2, 25],
                                77: [2, 25],
                                78: [2, 25],
                                79: [2, 25]
                            }, {
                                21: [2, 27],
                                31: [2, 27],
                                52: [2, 27],
                                62: [2, 27],
                                65: 94,
                                66: [1, 95],
                                69: [2, 27]
                            }, {
                                21: [2, 89],
                                31: [2, 89],
                                52: [2, 89],
                                62: [2, 89],
                                66: [2, 89],
                                69: [2, 89]
                            }, {
                                21: [2, 42],
                                31: [2, 42],
                                52: [2, 42],
                                59: [2, 42],
                                62: [2, 42],
                                66: [2, 42],
                                67: [1, 96],
                                69: [2, 42],
                                74: [2, 42],
                                75: [2, 42],
                                76: [2, 42],
                                77: [2, 42],
                                78: [2, 42],
                                79: [2, 42],
                                81: [2, 42]
                            }, {
                                21: [2, 41],
                                31: [2, 41],
                                52: [2, 41],
                                59: [2, 41],
                                62: [2, 41],
                                66: [2, 41],
                                69: [2, 41],
                                74: [2, 41],
                                75: [2, 41],
                                76: [2, 41],
                                77: [2, 41],
                                78: [2, 41],
                                79: [2, 41],
                                81: [2, 41]
                            }, {
                                52: [1, 97]
                            }, {
                                52: [2, 78],
                                59: [2, 78],
                                66: [2, 78],
                                74: [2, 78],
                                75: [2, 78],
                                76: [2, 78],
                                77: [2, 78],
                                78: [2, 78],
                                79: [2, 78]
                            }, {
                                52: [2, 80]
                            }, {
                                5: [2, 12],
                                13: [2, 12],
                                14: [2, 12],
                                17: [2, 12],
                                27: [2, 12],
                                32: [2, 12],
                                37: [2, 12],
                                42: [2, 12],
                                45: [2, 12],
                                46: [2, 12],
                                49: [2, 12],
                                53: [2, 12]
                            }, {
                                18: 98,
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                36: 50,
                                37: [1, 52],
                                41: 51,
                                42: [1, 53],
                                43: 100,
                                44: 99,
                                45: [2, 71]
                            }, {
                                31: [2, 65],
                                38: 101,
                                59: [2, 65],
                                66: [2, 65],
                                69: [2, 65],
                                74: [2, 65],
                                75: [2, 65],
                                76: [2, 65],
                                77: [2, 65],
                                78: [2, 65],
                                79: [2, 65]
                            }, {
                                45: [2, 17]
                            }, {
                                5: [2, 13],
                                13: [2, 13],
                                14: [2, 13],
                                17: [2, 13],
                                27: [2, 13],
                                32: [2, 13],
                                37: [2, 13],
                                42: [2, 13],
                                45: [2, 13],
                                46: [2, 13],
                                49: [2, 13],
                                53: [2, 13]
                            }, {
                                31: [1, 102]
                            }, {
                                31: [2, 82],
                                59: [2, 82],
                                66: [2, 82],
                                74: [2, 82],
                                75: [2, 82],
                                76: [2, 82],
                                77: [2, 82],
                                78: [2, 82],
                                79: [2, 82]
                            }, {
                                31: [2, 84]
                            }, {
                                18: 65,
                                57: 104,
                                58: 66,
                                59: [1, 40],
                                61: 103,
                                62: [2, 87],
                                63: 105,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                30: 106,
                                31: [2, 57],
                                68: 107,
                                69: [1, 108]
                            }, {
                                31: [2, 54],
                                59: [2, 54],
                                66: [2, 54],
                                69: [2, 54],
                                74: [2, 54],
                                75: [2, 54],
                                76: [2, 54],
                                77: [2, 54],
                                78: [2, 54],
                                79: [2, 54]
                            }, {
                                31: [2, 56],
                                69: [2, 56]
                            }, {
                                31: [2, 63],
                                35: 109,
                                68: 110,
                                69: [1, 108]
                            }, {
                                31: [2, 60],
                                59: [2, 60],
                                66: [2, 60],
                                69: [2, 60],
                                74: [2, 60],
                                75: [2, 60],
                                76: [2, 60],
                                77: [2, 60],
                                78: [2, 60],
                                79: [2, 60]
                            }, {
                                31: [2, 62],
                                69: [2, 62]
                            }, {
                                21: [1, 111]
                            }, {
                                21: [2, 46],
                                59: [2, 46],
                                66: [2, 46],
                                74: [2, 46],
                                75: [2, 46],
                                76: [2, 46],
                                77: [2, 46],
                                78: [2, 46],
                                79: [2, 46]
                            }, {
                                21: [2, 48]
                            }, {
                                5: [2, 21],
                                13: [2, 21],
                                14: [2, 21],
                                17: [2, 21],
                                27: [2, 21],
                                32: [2, 21],
                                37: [2, 21],
                                42: [2, 21],
                                45: [2, 21],
                                46: [2, 21],
                                49: [2, 21],
                                53: [2, 21]
                            }, {
                                21: [2, 90],
                                31: [2, 90],
                                52: [2, 90],
                                62: [2, 90],
                                66: [2, 90],
                                69: [2, 90]
                            }, {
                                67: [1, 96]
                            }, {
                                18: 65,
                                57: 112,
                                58: 66,
                                59: [1, 40],
                                66: [1, 32],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                5: [2, 22],
                                13: [2, 22],
                                14: [2, 22],
                                17: [2, 22],
                                27: [2, 22],
                                32: [2, 22],
                                37: [2, 22],
                                42: [2, 22],
                                45: [2, 22],
                                46: [2, 22],
                                49: [2, 22],
                                53: [2, 22]
                            }, {
                                31: [1, 113]
                            }, {
                                45: [2, 18]
                            }, {
                                45: [2, 72]
                            }, {
                                18: 65,
                                31: [2, 67],
                                39: 114,
                                57: 115,
                                58: 66,
                                59: [1, 40],
                                63: 116,
                                64: 67,
                                65: 68,
                                66: [1, 69],
                                69: [2, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 28],
                                78: [1, 29],
                                79: [1, 31],
                                80: 30
                            }, {
                                5: [2, 23],
                                13: [2, 23],
                                14: [2, 23],
                                17: [2, 23],
                                27: [2, 23],
                                32: [2, 23],
                                37: [2, 23],
                                42: [2, 23],
                                45: [2, 23],
                                46: [2, 23],
                                49: [2, 23],
                                53: [2, 23]
                            }, {
                                62: [1, 117]
                            }, {
                                59: [2, 86],
                                62: [2, 86],
                                66: [2, 86],
                                74: [2, 86],
                                75: [2, 86],
                                76: [2, 86],
                                77: [2, 86],
                                78: [2, 86],
                                79: [2, 86]
                            }, {
                                62: [2, 88]
                            }, {
                                31: [1, 118]
                            }, {
                                31: [2, 58]
                            }, {
                                66: [1, 120],
                                70: 119
                            }, {
                                31: [1, 121]
                            }, {
                                31: [2, 64]
                            }, {
                                14: [2, 11]
                            }, {
                                21: [2, 28],
                                31: [2, 28],
                                52: [2, 28],
                                62: [2, 28],
                                66: [2, 28],
                                69: [2, 28]
                            }, {
                                5: [2, 20],
                                13: [2, 20],
                                14: [2, 20],
                                17: [2, 20],
                                27: [2, 20],
                                32: [2, 20],
                                37: [2, 20],
                                42: [2, 20],
                                45: [2, 20],
                                46: [2, 20],
                                49: [2, 20],
                                53: [2, 20]
                            }, {
                                31: [2, 69],
                                40: 122,
                                68: 123,
                                69: [1, 108]
                            }, {
                                31: [2, 66],
                                59: [2, 66],
                                66: [2, 66],
                                69: [2, 66],
                                74: [2, 66],
                                75: [2, 66],
                                76: [2, 66],
                                77: [2, 66],
                                78: [2, 66],
                                79: [2, 66]
                            }, {
                                31: [2, 68],
                                69: [2, 68]
                            }, {
                                21: [2, 26],
                                31: [2, 26],
                                52: [2, 26],
                                59: [2, 26],
                                62: [2, 26],
                                66: [2, 26],
                                69: [2, 26],
                                74: [2, 26],
                                75: [2, 26],
                                76: [2, 26],
                                77: [2, 26],
                                78: [2, 26],
                                79: [2, 26]
                            }, {
                                13: [2, 14],
                                14: [2, 14],
                                17: [2, 14],
                                27: [2, 14],
                                32: [2, 14],
                                37: [2, 14],
                                42: [2, 14],
                                45: [2, 14],
                                46: [2, 14],
                                49: [2, 14],
                                53: [2, 14]
                            }, {
                                66: [1, 125],
                                71: [1, 124]
                            }, {
                                66: [2, 91],
                                71: [2, 91]
                            }, {
                                13: [2, 15],
                                14: [2, 15],
                                17: [2, 15],
                                27: [2, 15],
                                32: [2, 15],
                                42: [2, 15],
                                45: [2, 15],
                                46: [2, 15],
                                49: [2, 15],
                                53: [2, 15]
                            }, {
                                31: [1, 126]
                            }, {
                                31: [2, 70]
                            }, {
                                31: [2, 29]
                            }, {
                                66: [2, 92],
                                71: [2, 92]
                            }, {
                                13: [2, 16],
                                14: [2, 16],
                                17: [2, 16],
                                27: [2, 16],
                                32: [2, 16],
                                37: [2, 16],
                                42: [2, 16],
                                45: [2, 16],
                                46: [2, 16],
                                49: [2, 16],
                                53: [2, 16]
                            }],
                            defaultActions: {
                                4: [2, 1],
                                49: [2, 50],
                                51: [2, 19],
                                55: [2, 52],
                                64: [2, 76],
                                73: [2, 80],
                                78: [2, 17],
                                82: [2, 84],
                                92: [2, 48],
                                99: [2, 18],
                                100: [2, 72],
                                105: [2, 88],
                                107: [2, 58],
                                110: [2, 64],
                                111: [2, 11],
                                123: [2, 70],
                                124: [2, 29]
                            },
                            parseError: function(a, b) {
                                throw new Error(a)
                            },
                            parse: function(a) {
                                function b() {
                                    var a;
                                    return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                                }
                                var c = this,
                                    d = [0],
                                    e = [null],
                                    f = [],
                                    g = this.table,
                                    h = "",
                                    i = 0,
                                    j = 0,
                                    k = 0;
                                this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                                var l = this.lexer.yylloc;
                                f.push(l);
                                var m = this.lexer.options && this.lexer.options.ranges;
                                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                                    if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                        var x = "";
                                        if (!k) {
                                            v = [];
                                            for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                            x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                                text: this.lexer.match,
                                                token: this.terminals_[n] || n,
                                                line: this.lexer.yylineno,
                                                loc: l,
                                                expected: v
                                            })
                                        }
                                    }
                                    if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                                    switch (q[0]) {
                                        case 1:
                                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                            break;
                                        case 2:
                                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                                    first_line: f[f.length - (t || 1)].first_line,
                                                    last_line: f[f.length - 1].last_line,
                                                    first_column: f[f.length - (t || 1)].first_column,
                                                    last_column: f[f.length - 1].last_column
                                                }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                                            t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                            break;
                                        case 3:
                                            return !0
                                    }
                                }
                                return !0
                            }
                        },
                        c = function() {
                            var a = {
                                EOF: 1,
                                parseError: function(a, b) {
                                    if (!this.yy.parser) throw new Error(a);
                                    this.yy.parser.parseError(a, b)
                                },
                                setInput: function(a) {
                                    return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                        first_line: 1,
                                        first_column: 0,
                                        last_line: 1,
                                        last_column: 0
                                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                                },
                                input: function() {
                                    var a = this._input[0];
                                    this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                                    var b = a.match(/(?:\r\n?|\n).*/g);
                                    return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                                },
                                unput: function(a) {
                                    var b = a.length,
                                        c = a.split(/(?:\r\n?|\n)/g);
                                    this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                                    var d = this.match.split(/(?:\r\n?|\n)/g);
                                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                                    var e = this.yylloc.range;
                                    return this.yylloc = {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.first_column,
                                        last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                                    }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                                },
                                more: function() {
                                    return this._more = !0, this
                                },
                                less: function(a) {
                                    this.unput(this.match.slice(a))
                                },
                                pastInput: function() {
                                    var a = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                                },
                                upcomingInput: function() {
                                    var a = this.match;
                                    return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                                },
                                showPosition: function() {
                                    var a = this.pastInput(),
                                        b = new Array(a.length + 1).join("-");
                                    return a + this.upcomingInput() + "\n" + b + "^"
                                },
                                next: function() {
                                    if (this.done) return this.EOF;
                                    this._input || (this.done = !0);
                                    var a, b, c, d, e;
                                    this._more || (this.yytext = "", this.match = "");
                                    for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                                    return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                                    }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                lex: function() {
                                    var a = this.next();
                                    return "undefined" != typeof a ? a : this.lex()
                                },
                                begin: function(a) {
                                    this.conditionStack.push(a)
                                },
                                popState: function() {
                                    return this.conditionStack.pop()
                                },
                                _currentRules: function() {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                                },
                                topState: function() {
                                    return this.conditionStack[this.conditionStack.length - 2]
                                },
                                pushState: function(a) {
                                    this.begin(a)
                                }
                            };
                            return a.options = {}, a.performAction = function(a, b, c, d) {
                                function e(a, c) {
                                    return b.yytext = b.yytext.substr(a, b.yyleng - c)
                                }
                                switch (c) {
                                    case 0:
                                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 14;
                                        break;
                                    case 1:
                                        return 14;
                                    case 2:
                                        return this.popState(), 14;
                                    case 3:
                                        return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 16;
                                    case 4:
                                        return 14;
                                    case 5:
                                        return this.popState(), 13;
                                    case 6:
                                        return 59;
                                    case 7:
                                        return 62;
                                    case 8:
                                        return 17;
                                    case 9:
                                        return this.popState(), this.begin("raw"), 21;
                                    case 10:
                                        return 53;
                                    case 11:
                                        return 27;
                                    case 12:
                                        return 45;
                                    case 13:
                                        return this.popState(), 42;
                                    case 14:
                                        return this.popState(), 42;
                                    case 15:
                                        return 32;
                                    case 16:
                                        return 37;
                                    case 17:
                                        return 49;
                                    case 18:
                                        return 46;
                                    case 19:
                                        this.unput(b.yytext), this.popState(), this.begin("com");
                                        break;
                                    case 20:
                                        return this.popState(), 13;
                                    case 21:
                                        return 46;
                                    case 22:
                                        return 67;
                                    case 23:
                                        return 66;
                                    case 24:
                                        return 66;
                                    case 25:
                                        return 81;
                                    case 26:
                                        break;
                                    case 27:
                                        return this.popState(), 52;
                                    case 28:
                                        return this.popState(), 31;
                                    case 29:
                                        return b.yytext = e(1, 2).replace(/\\"/g, '"'), 74;
                                    case 30:
                                        return b.yytext = e(1, 2).replace(/\\'/g, "'"), 74;
                                    case 31:
                                        return 79;
                                    case 32:
                                        return 76;
                                    case 33:
                                        return 76;
                                    case 34:
                                        return 77;
                                    case 35:
                                        return 78;
                                    case 36:
                                        return 75;
                                    case 37:
                                        return 69;
                                    case 38:
                                        return 71;
                                    case 39:
                                        return 66;
                                    case 40:
                                        return 66;
                                    case 41:
                                        return "INVALID";
                                    case 42:
                                        return 5
                                }
                            }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                                mu: {
                                    rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                                    inclusive: !1
                                },
                                emu: {
                                    rules: [2],
                                    inclusive: !1
                                },
                                com: {
                                    rules: [5],
                                    inclusive: !1
                                },
                                raw: {
                                    rules: [3, 4],
                                    inclusive: !1
                                },
                                INITIAL: {
                                    rules: [0, 1, 42],
                                    inclusive: !0
                                }
                            }, a
                        }();
                    return b.lexer = c, a.prototype = b, b.Parser = a, new a
                }();
                b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d() {}

                function e(a, b, c) {
                    void 0 === b && (b = a.length);
                    var d = a[b - 1],
                        e = a[b - 2];
                    return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
                }

                function f(a, b, c) {
                    void 0 === b && (b = -1);
                    var d = a[b + 1],
                        e = a[b + 2];
                    return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
                }

                function g(a, b, c) {
                    var d = a[null == b ? 0 : b + 1];
                    if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                        var e = d.value;
                        d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e
                    }
                }

                function h(a, b, c) {
                    var d = a[null == b ? a.length - 1 : b - 1];
                    if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                        var e = d.value;
                        return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped
                    }
                }
                var i = c(8)["default"];
                b.__esModule = !0;
                var j = c(6),
                    k = i(j);
                d.prototype = new k["default"], d.prototype.Program = function(a) {
                    var b = !this.isRootSeen;
                    this.isRootSeen = !0;
                    for (var c = a.body, d = 0, i = c.length; i > d; d++) {
                        var j = c[d],
                            k = this.accept(j);
                        if (k) {
                            var l = e(c, d, b),
                                m = f(c, d, b),
                                n = k.openStandalone && l,
                                o = k.closeStandalone && m,
                                p = k.inlineStandalone && l && m;
                            k.close && g(c, d, !0), k.open && h(c, d, !0), p && (g(c, d), h(c, d) && "PartialStatement" === j.type && (j.indent = /([ \t]+$)/.exec(c[d - 1].original)[1])), n && (g((j.program || j.inverse).body), h(c, d)), o && (g(c, d), h((j.inverse || j.program).body))
                        }
                    }
                    return a
                }, d.prototype.BlockStatement = function(a) {
                    this.accept(a.program), this.accept(a.inverse);
                    var b = a.program || a.inverse,
                        c = a.program && a.inverse,
                        d = c,
                        i = c;
                    if (c && c.chained)
                        for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
                    var j = {
                        open: a.openStrip.open,
                        close: a.closeStrip.close,
                        openStandalone: f(b.body),
                        closeStandalone: e((d || b).body)
                    };
                    if (a.openStrip.close && g(b.body, null, !0), c) {
                        var k = a.inverseStrip;
                        k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), e(b.body) && f(d.body) && (h(b.body), g(d.body))
                    } else a.closeStrip.open && h(b.body, null, !0);
                    return j
                }, d.prototype.MustacheStatement = function(a) {
                    return a.strip
                }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) {
                    var b = a.strip || {};
                    return {
                        inlineStandalone: !0,
                        open: b.open,
                        close: b.close
                    }
                }, b["default"] = d, a.exports = b["default"]
            }, function(a, b, c) {
                "use strict";

                function d(a, b) {
                    this.source = a, this.start = {
                        line: b.first_line,
                        column: b.first_column
                    }, this.end = {
                        line: b.last_line,
                        column: b.last_column
                    }
                }

                function e(a) {
                    return /^\[.*\]$/.test(a) ? a.substr(1, a.length - 2) : a
                }

                function f(a, b) {
                    return {
                        open: "~" === a.charAt(2),
                        close: "~" === b.charAt(b.length - 3)
                    }
                }

                function g(a) {
                    return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
                }

                function h(a, b, c) {
                    c = this.locInfo(c);
                    for (var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length; i > h; h++) {
                        var j = b[h].part,
                            k = b[h].original !== j;
                        if (d += (b[h].separator || "") + j, k || ".." !== j && "." !== j && "this" !== j) e.push(j);
                        else {
                            if (e.length > 0) throw new n["default"]("Invalid path: " + d, {
                                loc: c
                            });
                            ".." === j && (f++, g += "../")
                        }
                    }
                    return new this.PathExpression(a, f, e, d, c)
                }

                function i(a, b, c, d, e, f) {
                    var g = d.charAt(3) || d.charAt(2),
                        h = "{" !== g && "&" !== g;
                    return new this.MustacheStatement(a, b, c, h, e, this.locInfo(f))
                }

                function j(a, b, c, d) {
                    if (a.path.original !== c) {
                        var e = {
                            loc: a.path.loc
                        };
                        throw new n["default"](a.path.original + " doesn't match " + c, e)
                    }
                    d = this.locInfo(d);
                    var f = new this.Program([b], null, {}, d);
                    return new this.BlockStatement(a.path, a.params, a.hash, f, void 0, {}, {}, {}, d)
                }

                function k(a, b, c, d, e, f) {
                    if (d && d.path && a.path.original !== d.path.original) {
                        var g = {
                            loc: a.path.loc
                        };
                        throw new n["default"](a.path.original + " doesn't match " + d.path.original, g)
                    }
                    b.blockParams = a.blockParams;
                    var h = void 0,
                        i = void 0;
                    return c && (c.chain && (c.program.body[0].closeStrip = d.strip), i = c.strip, h = c.program), e && (e = h, h = b, b = e), new this.BlockStatement(a.path, a.params, a.hash, b, h, a.strip, i, d && d.strip, this.locInfo(f))
                }
                var l = c(8)["default"];
                b.__esModule = !0, b.SourceLocation = d, b.id = e, b.stripFlags = f, b.stripComment = g, b.preparePath = h, b.prepareMustache = i, b.prepareRawBlock = j, b.prepareBlock = k;
                var m = c(11),
                    n = l(m)
            }, function(a, b, c) {
                "use strict";

                function d(a, b, c) {
                    if (f.isArray(a)) {
                        for (var d = [], e = 0, g = a.length; g > e; e++) d.push(b.wrap(a[e], c));
                        return d
                    }
                    return "boolean" == typeof a || "number" == typeof a ? a + "" : a
                }

                function e(a) {
                    this.srcFile = a, this.source = []
                }
                b.__esModule = !0;
                var f = c(12),
                    g = void 0;
                try {} catch (h) {}
                g || (g = function(a, b, c, d) {
                    this.src = "", d && this.add(d)
                }, g.prototype = {
                    add: function(a) {
                        f.isArray(a) && (a = a.join("")), this.src += a
                    },
                    prepend: function(a) {
                        f.isArray(a) && (a = a.join("")), this.src = a + this.src
                    },
                    toStringWithSourceMap: function() {
                        return {
                            code: this.toString()
                        }
                    },
                    toString: function() {
                        return this.src
                    }
                }), e.prototype = {
                    prepend: function(a, b) {
                        this.source.unshift(this.wrap(a, b))
                    },
                    push: function(a, b) {
                        this.source.push(this.wrap(a, b))
                    },
                    merge: function() {
                        var a = this.empty();
                        return this.each(function(b) {
                            a.add(["  ", b, "\n"])
                        }), a
                    },
                    each: function(a) {
                        for (var b = 0, c = this.source.length; c > b; b++) a(this.source[b])
                    },
                    empty: function() {
                        var a = void 0 === arguments[0] ? this.currentLocation || {
                            start: {}
                        } : arguments[0];
                        return new g(a.start.line, a.start.column, this.srcFile)
                    },
                    wrap: function(a) {
                        var b = void 0 === arguments[1] ? this.currentLocation || {
                            start: {}
                        } : arguments[1];
                        return a instanceof g ? a : (a = d(a, this, b), new g(b.start.line, b.start.column, this.srcFile, a))
                    },
                    functionCall: function(a, b, c) {
                        return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
                    },
                    quotedString: function(a) {
                        return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                    },
                    objectLiteral: function(a) {
                        var b = [];
                        for (var c in a)
                            if (a.hasOwnProperty(c)) {
                                var e = d(a[c], this);
                                "undefined" !== e && b.push([this.quotedString(c), ":", e])
                            }
                        var f = this.generateList(b);
                        return f.prepend("{"), f.add("}"), f
                    },
                    generateList: function(a, b) {
                        for (var c = this.empty(b), e = 0, f = a.length; f > e; e++) e && c.add(","), c.add(d(a[e], this, b));
                        return c
                    },
                    generateArray: function(a, b) {
                        var c = this.generateList(a, b);
                        return c.prepend("["), c.add("]"), c
                    }
                }, b["default"] = e, a.exports = b["default"]
            }])
        }), c("base/modules/handlebars-extension", ["vendor/handlebars"], function(a) {
            "use strict";
            return a.registerHelper("ifNewRow", function(a, b) {
                return a % 3 == 0 ? b.fn(this) : b.inverse(this)
            }), a.registerHelper("ifEndRow", function(a, b) {
                return a % 3 == 2 ? b.fn(this) : b.inverse(this)
            }), {}
        }), c("base/modules/video_youtube_module", ["jquery", "underscore"], function(a, b) {
            "use strict";

            function c() {
                var a = document.createElement("script"),
                    b = document.getElementsByTagName("script")[0];
                a.src = "/web/20160603003234/https://www.youtube.com/iframe_api", b.parentNode.insertBefore(a, b)
            }

            function d(c, d) {
                var f = a.Deferred(),
                    g = b.extend(d, {
                        playerVars: {
                            controls: 1,
                            autoplay: 1,
                            rel: 0,
                            showinfo: 0,
                            modestbranding: 1,
                            wmode: "opaque",
                            fs: "1"
                        },
                        events: {
                            onReady: function() {
                                f.resolve(e(h))
                            },
                            onError: function() {
                                f.reject()
                            },
                            onStateChange: function(a) {}
                        }
                    }),
                    h = new YT.Player(c, g);
                return f.promise()
            }

            function e(a) {
                return {
                    base: a,
                    destroy: b.bind(a.destroy, a),
                    play: b.bind(a.playVideo, a),
                    pause: b.bind(a.pauseVideo, a),
                    seek: b.bind(a.seekTo, a),
                    mute: function() {
                        a.mute()
                    },
                    unmute: function() {
                        a.unMute()
                    },
                    setVolume: function(b) {
                        a.setVolume(b)
                    },
                    getMuted: b.bind(a.isMuted, a),
                    getVolume: b.bind(a.getVolume, a),
                    getTime: b.bind(a.getCurrentTime, a),
                    getProgress: function() {
                        return a.getCurrentTime() / a.getDuration()
                    },
                    getDuration: b.bind(a.getDuration, a),
                    getVideoUrl: b.bind(a.getVideoUrl, a)
                }
            }
            var f = a.Deferred();
            return window.onYouTubeIframeAPIReady = function() {
                f.resolve({
                    create: d
                })
            }, c(), f.promise()
        }), c("base/nis-page", ["jquery", "underscore", "base/page-scroll-animation", "base/page-scroll", "base/count-up"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                c.init(a)
            }
            return {
                init: function(a) {
                    e(a)
                }
            }
        }), c("base/our-team-page", ["jquery", "underscore", "base/list-our-team-expand", "base/page-scroll-animation"], function(a, b, c, d) {
            function e(a) {
                d.init(a)
            }
            return {
                init: function(a) {
                    e(a), c.init(a)
                }
            }
        }), c("base/zoom-block", ["jquery", "underscore", "base/modules/animate", "vendor/mobile-detect", "lib/picturefill"], function(a, b, c, d) {
            "use strict";

            function e() {
                if (n = a(".project-item"), 0 == a(".project-modal").length) {
                    var b = l();
                    a(".content-container").append(b)
                }
                o = a(".project-modal"), q = o.find("span.rb-close"), p = o.find(".project-loading-content"), n.each(function() {
                    var b = a(this);
                    navigator.userAgent.match(/(iPhone|iPod|iPad)/i) || u.mobile() ? b.on("click", function() {
                        b.find("a").trigger("click")
                    }) : (s = 80, b.find("a").on("click", function(a) {
                        return a.preventDefault(), h(b), !1
                    }), b.on("click", function() {
                        h(b)
                    }))
                }), q.on("click", function() {
                    i()
                })
            }

            function f() {
                a("body").addClass("overflow-hidden")
            }

            function g() {
                a("body").removeClass("overflow-hidden")
            }

            function h(b) {
                f(), t = b.index(), o.children(".project-preview").html(b.html());
                var c = k(b);
                o.css({
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    zIndex: 9999,
                    pointerEvents: "auto"
                }), o.show(), o.animate({
                    top: 0 + r.scrollTop(),
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%"
                }, 500, function() {
                    o.css({
                        overflow: "hidden"
                    }), q.css({
                        opacity: 1
                    }), j(), a.ajax({
                        url: b.attr("data-url")
                    }).done(function(b) {
                        p.html(a(b).find(".section-case-study-detail").html()).promise().done(function() {
                            window.picturefill()
                        }), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && setTimeout(function() {
                            o.scrollTop(0)
                        }, 10)
                    }), o.on("click", function() {
                        i()
                    })
                })
            }

            function i() {
                if (g(), -1 !== t) {
                    var a = k(n.eq(t));
                    q.css({
                        opacity: 0
                    }), o.animate({
                        top: a.top,
                        left: a.left,
                        width: a.width,
                        height: a.height
                    }, 500, function() {
                        o.css({
                            zIndex: 0,
                            pointerEvents: "none"
                        }), o.hide(), o.children(".project-preview").empty(), p.html(m())
                    })
                }
                t = -1
            }

            function j() {
                a("body").bind("keyup.myDialog", function(b) {
                    27 == b.which && (i(), a("body").unbind("keyup.myDialog"))
                })
            }

            function k(a) {
                var b = (r.scrollTop(), r.scrollLeft(), a.offset());
                return {
                    left: b.left,
                    top: b.top,
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }
            }

            function l() {
                var a = '<div class="project-modal js-project-modal">';
                return a += '        <div class="project-preview">', a += "       </div>", a += '        <div class="project-loading-content ajax-content-container section-case-study-detail">', a += m(), a += "   </div>"
            }

            function m() {
                var a = '           <div class="loading-container-2">';
                return a += '               <div class="loading"></div>', a += '               <div id="loading-text">loading</div>', a += "           </div>", a += "       </div>"
            }
            var n, o, p, q, r = a(window),
                s = 0,
                t = -1,
                u = new d(window.navigator.userAgent);
            return {
                init: function() {
                    e()
                }
            }
        }), c("base/our-works", ["jquery", "underscore", "base/zoom-block", "base/page-scroll-animation"], function(a, b, c, d) {
            function e(a) {
                d.init(a)
            }
            return {
                init: function(a) {
                    e(a), c.init()
                }
            }
        }), c("base/page-introduction", ["jquery", "underscore", "base/modules/animate", "base/page-scroll", "vendor/mobile-detect", "lib/picturefill"], function(a, b, c, d, e) {
            "use strict";

            function f(b) {
                if (!j) {
                    if (j = !0, !window.parent.$("iframe") || 0 == window.parent.$("iframe").length || !isInEditMode) {
                        var c = a(window).height() * h / 100,
                            d = a(window).width(),
                            e = d;
                        e = d >= 992 ? .5047 * d : d >= 768 ? 1.4 * d : 1.8 * d, c > e && (c = Math.round(e - 1)), b.parent().height(c + "px"), a("head").append('<style type="text/css">.page-introduction-container {height:' + c + "px;}</style>")
                    }
                    var f = b.find(".page-introduction__background");
                    i = f.height()
                }
                window.picturefill()
            }

            function g(c) {
                f(c);
                var e = c.find(".page-introduction__content"),
                    g = c.find(".page-introduction__arrow"),
                    h = parseInt(g.css("bottom")),
                    l = c.find(".page-introduction__background");
                i = l.height();
                var m = b.debounce(function(a) {
                    a > i || (l.css("top", a / 2 + "px"), g.css({
                        bottom: h - a + "px"
                    }), e.css({
                        "margin-top": a / 2 + "px",
                        opacity: 1 - 1.5 * a / i
                    }))
                }, 0);
                k.mobile() || d.addCallback(m), g.on("click", function() {
                    a("html").velocity("scroll", {
                        duration: 500,
                        offset: i,
                        easing: "ease-in-out",
                        complete: function() {}
                    })
                }), a(window).on("resize", function() {
                    var a = setTimeout(function() {
                        j = !1, f(c), clearTimeout(a)
                    }, 500)
                })
            }
            d.init();
            var h = 90,
                i = 0,
                j = !1,
                k = new e(window.navigator.userAgent);
            return {
                init: function(a) {
                    return new g(a)
                }
            }
        }), c("base/partners", ["jquery", "underscore", "base/page-scroll-animation"], function(a, b, c) {
            "use strict";

            function d(a) {
                c.init(a)
            }
            return {
                init: function(a) {
                    d(a)
                }
            }
        }), c("base/scroll-to-top", ["jquery"], function(a) {
            "use strict";

            function b(b) {
                var c = 500,
                    d = 700;
                a(window).scroll(function() {
                    a(this).scrollTop() > c ? a(".scroll-top").fadeIn(500) : a(".scroll-top").fadeOut(500)
                }), b.click(function(b) {
                    b.preventDefault(), a("html, body").animate({
                        scrollTop: 0
                    }, d)
                })
            }
            return {
                init: b
            }
        }),
        function(a, d) {
            "object" == typeof exports ? module.exports = d(b("handlebars")) : "function" == typeof c && c.amd ? c("vendor/handlebars-helpers", ["handlebars"], d) : a.HandlebarsHelpersRegistry = d(a.Handlebars)
        }(this, function(a) {
            var b = function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                c = function() {
                    this.expressions = []
                };
            c.prototype.add = function(a, b) {
                this.expressions[a] = b
            }, c.prototype.call = function(a, b, c) {
                if (!this.expressions.hasOwnProperty(a)) throw new Error('Unknown operator "' + a + '"');
                return this.expressions[a](b, c)
            };
            var d = new c;
            d.add("not", function(a, b) {
                return a != b
            }), d.add(">", function(a, b) {
                return a > b
            }), d.add("<", function(a, b) {
                return b > a
            }), d.add(">=", function(a, b) {
                return a >= b
            }), d.add("<=", function(a, b) {
                return b >= a
            }), d.add("===", function(a, b) {
                return a === b
            }), d.add("!==", function(a, b) {
                return a !== b
            }), d.add("in", function(a, c) {
                return b(c) || (c = c.split(",")), -1 !== c.indexOf(a)
            });
            var e = function() {
                var a = arguments,
                    b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[3];
                return 2 == a.length ? (f = a[1], b ? f.fn(this) : f.inverse(this)) : 3 == a.length ? (e = a[1], f = a[2], b == e ? f.fn(this) : f.inverse(this)) : d.call(c, b, e) ? f.fn(this) : f.inverse(this)
            };
            return a.registerHelper("is", e), a.registerHelper("nl2br", function(b) {
                var c = (b + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br>$2");
                return new a.SafeString(c)
            }), a.registerHelper("log", function() {}), a.registerHelper("debug", function() {}), d
        }), c("templates/search_result", ["vendor/handlebars", "vendor/handlebars-helpers", "base/modules/handlebars-extension"], function(a) {
            return a.template({
                1: function(a, b, c, d) {
                    var e, f = b.helperMissing,
                        g = "function",
                        h = this.escapeExpression;
                    return '    <div class="col-xs-12 col-sm-6 col-lg-4 search-result__item">\n        <a href="' + h((e = null != (e = b.url || (null != a ? a.url : a)) ? e : f, typeof e === g ? e.call(a, {
                        name: "url",
                        hash: {},
                        data: d
                    }) : e)) + '">\n            <span class="search-result__title">' + h((e = null != (e = b.title || (null != a ? a.title : a)) ? e : f, typeof e === g ? e.call(a, {
                        name: "title",
                        hash: {},
                        data: d
                    }) : e)) + '</span>\n            <span class="search-result__description">' + h((e = null != (e = b.description || (null != a ? a.description : a)) ? e : f, typeof e === g ? e.call(a, {
                        name: "description",
                        hash: {},
                        data: d
                    }) : e)) + "</span>\n        </a>\n    </div>\n"
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(a, b, c, d) {
                    var e;
                    return '<div class="row">\n' + (null != (e = b.each.call(a, a, {
                        name: "each",
                        hash: {},
                        fn: this.program(1, d, 0),
                        inverse: this.noop,
                        data: d
                    })) ? e : "") + "</div>"
                },
                useData: !0
            })
        }), c("base/search", ["jquery", "underscore", "base/modules/animate", "base/top-navigator", "base/request-page", "templates/search_result"], function(a, b, c, d, e, f) {
            "use strict";

            function g() {
                k(), p = m.attr("data-action-search");
                var b = null;
                m.find("#searchBox").on("keyup", function(c) {
                    if (b && 13 != c.which && clearTimeout(b), s = a(this).val(), !(s.trim().length <= 0)) {
                        if (13 == c.which) {
                            if (t == s) return;
                            return t = s, void j(p + "?q=" + s, h)
                        }
                        b = setTimeout(function() {
                            t != s && (t = s, j(p + "?q=" + s, h), i())
                        }, q)
                    }
                }), m.find(".search-showmore-container span").on("click", function() {
                    i(null), j(r, h, !0)
                })
            }

            function h(b, d) {
                c(m.find(".search-default"), "transition.slideDownOut", {
                    duration: 300
                });
                var e = a(f(b.data));
                d || m.find(".search-result").html(""), m.find(".search-result").append(e);
                for (var g = e.find(".search-result__item"), h = 0; h < g.length; h++) h < g.length - 1 ? c(g.eq(h), "transition.slideUpIn", {
                    duration: 200,
                    delay: 200 * h
                }) : c(g.eq(h), "transition.slideUpIn", {
                    duration: 200,
                    delay: 200 * h
                }).then(function() {
                    i(b)
                });
                b.data && 0 != b.data.length || m.find(".search-result").html('<div class="search-result__message">' + b.message + "</div>")
            }

            function i(a) {
                a && a.hasShowMore ? (r = p + "?q=" + s + "&page=" + (a.currentPage + 1), m.find(".search-showmore-container").css("display", "block")) : m.find(".search-showmore-container").css("display", "none")
            }

            function j(b, c, d) {
                m.find(".search-form").addClass("searching"), a.ajax({
                    url: b,
                    type: "GET",
                    async: !0,
                    datatype: "json",
                    success: function(a) {
                        m.find(".search-form").removeClass("searching"), a.success && c && c(a, d)
                    },
                    error: function() {}
                })
            }

            function k() {
                var e = b.debounce(function() {
                    n = d.getContainer().find(".top-navigator__search-container").offset(), o = {
                        width: d.getContainer().find(".top-navigator__search-container").outerWidth(),
                        height: d.getContainer().find(".top-navigator__search-container").outerHeight()
                    }, c(m, {
                        top: n.top - a(window).scrollTop() + "px",
                        width: o.width + "px",
                        height: o.height + "px",
                        right: a(window).width() - n.left - o.width + "px",
                        opacity: 1
                    }, {
                        duration: 0,
                        display: "block",
                        easing: "ease-in-out"
                    }).then(function() {
                        m.addClass("expanding"), c(m, {
                            "padding-right": 0,
                            top: 0,
                            right: 0,
                            width: "100%",
                            height: "100%"
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).then(function() {
                            m.addClass("active"), c(m.find(".search-default"), "transition.slideUpIn", {
                                duration: 300
                            }), m.find("#searchBox").focus()
                        }), m.find(".close-button").one("click", function(a) {
                            l()
                        })
                    })
                }, 10);
                d.getContainer().find(".top-navigator__search-container").one("click", function() {
                    t = "", e()
                })
            }

            function l(b) {
                m.removeClass("active"), m.find(".search-default").css("display", "none"), m.find(".search-result").html(""), m.find("#searchBox").val("");
                var d = setTimeout(function() {
                    clearTimeout(d), c(m, {
                        right: a(window).width() - n.left - o.width + "px",
                        top: n.top - a(window).scrollTop() + "px",
                        width: o.width + "px",
                        height: o.height + "px"
                    }, {
                        duration: 500,
                        easing: "ease-in-out",
                        display: "none"
                    }).then(function() {
                        m.removeClass("expanding");
                        var a = setTimeout(function() {
                            clearTimeout(a), m.css({
                                width: 0,
                                height: 0,
                                opacity: 0
                            }), k()
                        }, 0);
                        b && b()
                    })
                }, 200)
            }
            var m = null,
                n = null,
                o = null,
                p = "",
                q = 1e3,
                r = "",
                s = "",
                t = "";
            return {
                init: function(a) {
                    m = a, g()
                }
            }
        }), c("base/services", ["jquery", "underscore", "base/page-scroll-animation"], function(a, b, c) {
            "use strict";

            function d(a) {
                c.init(a)
            }

            function e() {
                a(".services-item-preview ").each(function() {
                    a(this).on("click", function() {
                        var b = a(this).attr("data-id");
                        if (7 == b) {
                            var c = a(".service-technology__container[data-id='fullInfo-" + b + "']");
                            null != c && 0 != c.length || (c = a(".list-service-detail .service-item-detail__container[data-id='fullInfo-" + b + "']")), null != c && c.length > 0 && a("html, body").animate({
                                scrollTop: c.offset().top - 85 + "px"
                            }, 600)
                        } else a("html, body").animate({
                            scrollTop: a(".list-service-detail .service-item-detail__container[data-id='fullInfo-" + b + "']").offset().top - 85 + "px"
                        }, 600)
                    })
                })
            }
            return {
                init: function(a) {
                    d(a), e()
                }
            }
        }), c("base/social-share", ["jquery", "underscore", "base/page-scroll-animation", "vendor/mobile-detect"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                c.init(a)
            }

            function f(b) {
                g.mobile() && a(b).addClass("no-translate"), a(window).width() >= 768 ? (a(b).css("position", "fixed"), -1 != navigator.appVersion.indexOf("Mac") && a(b).css("top", "250px")) : (a(b).css("position", "static"), a(b).css("opacity", "1")), a(window).scroll(function() {
                    var c = 1.2 * a(window).height();
                    a(window).width() >= 768 && (c = 1200, a(b).css("position", "fixed"), -1 != navigator.appVersion.indexOf("Mac") && a(b).css("top", "250px"));
                    var d = a(window).scrollTop() + a(window).height();
                    c >= d ? a(b).css("opacity", "0") : a(b).css("opacity", "1"), a(window).width() < 768 && (-1 != navigator.appVersion.indexOf("Mac") && a(b).css("top", "auto"), d >= a(document).height() - a(".footer-page").height() && a(b).css("position", "static"), d < a(document).height() - a(".footer-page").height() - 5 && a(b).css("position", "fixed"))
                })
            }
            var g = new d(window.navigator.userAgent);
            return {
                init: function(a) {
                    e(a), f(a)
                }
            }
        }), c("base/video_youtube", ["jquery", "underscore", "base/modules/video_youtube_module"], function(a, b, c) {
            "use strict";

            function d(a) {
                var b = e();
                return new b({
                    el: a
                })
            }

            function e() {
                return function(d) {
                    this.enablePlayVideo = !0, this.$el = d.el, this.options = {
                        playerClass: "player-video"
                    }, this.initVideo = function() {
                        this.$el.find("a[data-youtube-button]").on("click", b.bind(this.startVideo, this)), this.videoId = this.getYoutubeId(this.$el.find("a").attr("href"))
                    }, this.startVideo = function(a) {
                        a.preventDefault(), this.enablePlayVideo && (this.enablePlayVideo = !1, c.then(b.bind(this.loadVideo, this)))
                    }, this.loadVideo = function(c) {
                        return this.$playerContainer = a('<div class="' + this.options.playerClass + '"></div>'), this.$el.append(this.$playerContainer), c.create(this.$playerContainer.get(0), {
                            height: "100%",
                            width: "100%",
                            videoId: this.videoId
                        }).then(b.bind(this.ready, this))
                    }, this.ready = function(a) {
                        this.player = a
                    }, this.removeVideo = function() {
                        this.player && this.player.destroy(), this.$playerContainer.remove()
                    }, this.getYoutubeId = function(a) {
                        if (!a && 0 === a.length) return a;
                        var b = "";
                        return a = a.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/), void 0 !== a[2] ? (b = a[2].split(/[^0-9a-z_\-]/i), b = b[0]) : b = a, b
                    }, this.initVideo()
                }
            }
            return {
                init: function(a) {
                    return d(a)
                }
            }
        }), b(["main"])
}();