(() => {
    "use strict";
    var e, a = {
        d: (e, s) => {
            for (var t in s) a.o(s, t) && !a.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: s[t]
            })
        },
        o: (e, a) => Object.prototype.hasOwnProperty.call(e, a)
    };
    a.d({}, {
            x: () => ea
        }),
        function(e) {
            e.StayAlive = "internal/stay-alive", e.DropDatabaseConnections = "internal/drop-db-connections", e.Notification = "notification", e.TrackExpedition = "expedition/track-expedition", e.Expedition = "expedition/single", e.NewExpedition = "expedition/new", e.DebrisFieldReport = "debris-fields/single", e.NewDebrisFieldReport = "debris-fields/new", e.TrackDebrisFieldReport = "debris-fields/track", e.TrackManualDebrisFieldReport = "debris-fields/track-manually", e.CombatReport = "combat-reports/single", e.NewCombatReport = "combat-reports/new", e.TrackCombatReport = "combat-reports/track", e.RequestSingleCombatReport = "combat-reports/request-single-report", e.CombatReportUnknown = "combat-reports/is-unknown", e.WillNotBeTracked = "message-tracking/no-tracking", e.TrackingError = "message-tracking/error", e.UpdatePlanetData = "empire/update-planet-data", e.UpdatePlanetActiveItems = "empire/update-active-items", e.UpdatePlanetBuildingLevels = "empire/update-buildings-levels", e.UpdateResearchLevels = "empire/update-research-levels", e.UpdatePlanetShipCounts = "empire/update-planet-ships", e.UpdatePlanetDefenseCounts = "empire/update-planet-defenses", e.UpdatePlanetMissileCounts = "empire/update-planet-missiles", e.UpdateActiveOfficers = "empire/update-active-officers", e.UpdatePlayerClass = "empire/update-player-class", e.UpdateAllianceClass = "empire/update-alliance-class", e.UpdatePlanetProductionSettings = "empire/update-planet-production-settings", e.UpdateFleets = "empire/fleets", e.NotifyEmpireDataUpdate = "empire/notify-update", e.RequestSettings = "settings/request-data", e.Settings = "settings/data", e.NotifySettingsUpdate = "settings/notify-update", e.NotifyUniverseHistoryUpdate = "universe-history/notify-update", e.NotifyServerSettingsUpdate = "server-settings/notify-update", e.ForceUpdateServerSettings = "server-settings/force-update", e.UpdatePlayerName = "accounts/update-player-name", e.UpdateUniverseName = "universes/update-universe-name", e.NotifyUniverseSpecificSettingsUpdate = "universe-specific-settings/notify-update", e.UpdateLifeformExperience = "lifeforms/update-lifeform-experience", e.UpdateSelectedLifeform = "lifeforms/update-selected-lifeform", e.UpdatePlanetActiveLifeformBuildingLevels = "lifeforms/update-active-building-levels", e.UpdatePlanetLifeformBuildingLevels = "lifeforms/update-all-building-levels", e.UpdatePlanetActiveLifeformTechnologyLevels = "lifeforms/update-active-technology-levels", e.UpdatePlanetLifeformTechnologyLevels = "lifeforms/update-all-technology-levels", e.TrackLifeformDiscovery = "lifeforms/track-discovery", e.LifeformDiscovery = "lifeforms/discovery", e.NewLifeformDiscovery = "lifeforms/new-discovery"
        }(e || (e = {}));
    const s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        t = function(e) {
            return "string" == typeof e && s.test(e)
        };
    for (var r = [], d = 0; d < 256; ++d) r.push((d + 256).toString(16).substr(1));
    const o = function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            s = (r[e[a + 0]] + r[e[a + 1]] + r[e[a + 2]] + r[e[a + 3]] + "-" + r[e[a + 4]] + r[e[a + 5]] + "-" + r[e[a + 6]] + r[e[a + 7]] + "-" + r[e[a + 8]] + r[e[a + 9]] + "-" + r[e[a + 10]] + r[e[a + 11]] + r[e[a + 12]] + r[e[a + 13]] + r[e[a + 14]] + r[e[a + 15]]).toLowerCase();
        if (!t(s)) throw TypeError("Stringified UUID is invalid");
        return s
    };

    function l(e, a, s, t) {
        switch (e) {
            case 0:
                return a & s ^ ~a & t;
            case 1:
            case 3:
                return a ^ s ^ t;
            case 2:
                return a & s ^ a & t ^ s & t
        }
    }

    function i(e, a) {
        return e << a | e >>> 32 - a
    }
    var n = function(e, a, s) {
        function r(e, a, r, d) {
            if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    for (var a = [], s = 0; s < e.length; ++s) a.push(e.charCodeAt(s));
                    return a
                }(e)), "string" == typeof a && (a = function(e) {
                    if (!t(e)) throw TypeError("Invalid UUID");
                    var a, s = new Uint8Array(16);
                    return s[0] = (a = parseInt(e.slice(0, 8), 16)) >>> 24, s[1] = a >>> 16 & 255, s[2] = a >>> 8 & 255, s[3] = 255 & a, s[4] = (a = parseInt(e.slice(9, 13), 16)) >>> 8, s[5] = 255 & a, s[6] = (a = parseInt(e.slice(14, 18), 16)) >>> 8, s[7] = 255 & a, s[8] = (a = parseInt(e.slice(19, 23), 16)) >>> 8, s[9] = 255 & a, s[10] = (a = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, s[11] = a / 4294967296 & 255, s[12] = a >>> 24 & 255, s[13] = a >>> 16 & 255, s[14] = a >>> 8 & 255, s[15] = 255 & a, s
                }(a)), 16 !== a.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            var l = new Uint8Array(16 + e.length);
            if (l.set(a), l.set(e, a.length), (l = s(l))[6] = 15 & l[6] | 80, l[8] = 63 & l[8] | 128, r) {
                d = d || 0;
                for (var i = 0; i < 16; ++i) r[d + i] = l[i];
                return r
            }
            return o(l)
        }
        try {
            r.name = "v5"
        } catch (e) {}
        return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
    }(0, 0, (function(e) {
        var a = [1518500249, 1859775393, 2400959708, 3395469782],
            s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof e) {
            var t = unescape(encodeURIComponent(e));
            e = [];
            for (var r = 0; r < t.length; ++r) e.push(t.charCodeAt(r))
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for (var d = e.length / 4 + 2, o = Math.ceil(d / 16), n = new Array(o), c = 0; c < o; ++c) {
            for (var f = new Uint32Array(16), m = 0; m < 16; ++m) f[m] = e[64 * c + 4 * m] << 24 | e[64 * c + 4 * m + 1] << 16 | e[64 * c + 4 * m + 2] << 8 | e[64 * c + 4 * m + 3];
            n[c] = f
        }
        n[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), n[o - 1][14] = Math.floor(n[o - 1][14]), n[o - 1][15] = 8 * (e.length - 1) & 4294967295;
        for (var b = 0; b < o; ++b) {
            for (var g = new Uint32Array(80), _ = 0; _ < 16; ++_) g[_] = n[b][_];
            for (var u = 16; u < 80; ++u) g[u] = i(g[u - 3] ^ g[u - 8] ^ g[u - 14] ^ g[u - 16], 1);
            for (var p = s[0], y = s[1], h = s[2], v = s[3], B = s[4], k = 0; k < 80; ++k) {
                var z = Math.floor(k / 20),
                    S = i(p, 5) + l(z, y, h, v) + B + a[z] + g[k] >>> 0;
                B = v, v = h, h = i(y, 30) >>> 0, y = p, p = S
            }
            s[0] = s[0] + p >>> 0, s[1] = s[1] + y >>> 0, s[2] = s[2] + h >>> 0, s[3] = s[3] + v >>> 0, s[4] = s[4] + B >>> 0
        }
        return [s[0] >> 24 & 255, s[0] >> 16 & 255, s[0] >> 8 & 255, 255 & s[0], s[1] >> 24 & 255, s[1] >> 16 & 255, s[1] >> 8 & 255, 255 & s[1], s[2] >> 24 & 255, s[2] >> 16 & 255, s[2] >> 8 & 255, 255 & s[2], s[3] >> 24 & 255, s[3] >> 16 & 255, s[3] >> 8 & 255, 255 & s[3], s[4] >> 24 & 255, s[4] >> 16 & 255, s[4] >> 8 & 255, 255 & s[4]]
    }));
    const c = n,
        f = "774522d3-7912-4e5c-b55b-e17198620b32",
        m = (c("service-worker", f), c("message-tracking", f));

    function b() {
        const e = chrome.runtime.lastError?.message;
        if (!["Receiving end does not exist.", "The message port closed before a response was received."].some((a => e?.includes(a) ?? !1))) throw chrome.runtime.lastError
    }

    function g(e) {
        chrome.runtime.sendMessage(e, b)
    }

    function _(e, a = 10) {
        const s = parseInt(e, a);
        if (isNaN(s)) throw new Error(`'${e}' is not a valid integer value`);
        return s
    }

    function u(e, a) {
        if (null != a) throw {
            message: e,
            data: a
        };
        throw new Error("[OGame Tracker] " + e)
    }

    function p() {
        const e = function() {
                const e = function() {
                    const e = {};
                    return document.cookie.split(";").forEach((a => {
                        const [s, t] = a.split("=").map((e => decodeURIComponent(e.trim())));
                        e[s] = t
                    })), e
                }().oglocale;
                return null == e || "undefined" == e ? document.querySelector('meta[name="ogame-language"]')?.content ?? u("Cannot find language meta tag") : e
            }(),
            a = (document.querySelector('meta[name="ogame-universe"]')?.content ?? u("Cannot find universe meta tag")).split(".")[0].split("-"),
            s = a[0].replace(/^s/, ""),
            t = a[1];
        return /^\d+$/.test(s) || u("Found ogame universe tag but failed to extract server id from it"), {
            language: t,
            userLanguage: e,
            serverId: _(s, 10),
            playerId: _(document.querySelector('meta[name="ogame-player-id"]')?.content ?? u("Cannot find player id meta tag"), 10)
        }
    }

    function y(e, a) {
        const s = function(e) {
                const a = e.attributes,
                    s = {};
                for (const e of a) e.name.startsWith("data-raw") && (s[e.name.replace("data-raw-", "")] = e.value);
                return s
            }(e),
            t = {};
        for (const [e, {
                conversion: r,
                optional: d
            }] of Object.entries(a)) {
            const a = s[e];
            null == a ? (d || u(`missing raw attribute value for attribute 'data-raw-${e}'`), t[e] = void 0) : t[e] = r(a)
        }
        return t
    }
    c("empire-tracking", f), c("universe-account-tracking", f), c("internal", f);
    const h = "ogame-tracker",
        v = {
            messages: {
                base: `${h}-msg`,
                processed: `${h}-msg--processed`,
                waitingToBeProcessed: `${h}-msg--waiting-to-be-processed`,
                error: `${h}-msg--error`,
                ignored: `${h}-msg--ignored`,
                hideContent: `${h}-msg--hide-content`,
                expedition: `${h}-msg--expedition`,
                lifeformDiscovery: `${h}-msg--lifeform-discovery`,
                debrisFieldReport: `${h}-msg--debris-field-report`,
                combatReport: `${h}-msg--combat-report`,
                customMessageContent: `${h}-msg__content`
            },
            loader: `${h}-loader`
        };

    function B(e, a) {
        let s = e.querySelector(`.${v.messages.customMessageContent}`);
        if (null == s) {
            s = document.createElement("div"), s.classList.add(v.messages.customMessageContent);
            const a = e.querySelector(".msgContent") ?? u("no message content found");
            e.insertBefore(s, a.nextElementSibling)
        }
        0 == a ? s.remove() : s.innerHTML = a
    }

    function k(e) {
        return (new Intl.NumberFormat).format(e)
    }

    function z(e, a, s = !0) {
        return e.language == a.language && e.serverId == a.serverId && (!s || e.playerId == a.playerId)
    }
    var S, I = new Uint8Array(16);

    function w() {
        if (!S && !(S = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return S(I)
    }
    const T = function(e, a, s) {
        var t = (e = e || {}).random || (e.rng || w)();
        if (t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, a) {
            s = s || 0;
            for (var r = 0; r < 16; ++r) a[s + r] = t[r];
            return a
        }
        return o(t)
    };
    var x, N;
    ! function(e) {
        e.ExpeditionTracking = "message-tracking/expeditions", e.ExpeditionTrackingLostFleet = "message-tracking/expeditions/lost-fleet", e.MessageTrackingError = "message-tracking/error", e.CombatTracking = "message-tracking/combats", e.DebrisFieldReportTracking = "message-tracking/debris-field-reports", e.LifeformDiscoveryTracking = "message-tracking/lifeform-discoveries"
    }(x || (x = {})),
    function(e) {
        e.metal = "metal", e.crystal = "crystal", e.deuterium = "deuterium"
    }(N || (N = {}));
    const F = [N.metal, N.crystal, N.deuterium];
    var C, E;
    ! function(e) {
        e[e.combatReport = 25] = "combatReport", e[e.debrisFieldHarvestReport = 32] = "debrisFieldHarvestReport", e[e.resourceTransport = 33] = "resourceTransport", e[e.fleetArrival = 34] = "fleetArrival", e[e.expedition = 41] = "expedition", e[e.lifeformDiscovery = 61] = "lifeformDiscovery"
    }(C || (C = {})),
    function(e) {
        e[e.planet = 1] = "planet", e[e.moon = 3] = "moon", e[e.debrisField = 2] = "debrisField"
    }(E || (E = {}));
    const $ = /^\[?(?<galaxy>\d+):(?<system>\d+):(?<position>\d+)\]?$/;

    function P(e, a = E.planet) {
        const s = e.match($);
        if (null == s?.groups) throw new Error(`invalid coordinates '${e}'`);
        return {
            galaxy: _(s.groups.galaxy),
            system: _(s.groups.system),
            position: _(s.groups.position),
            type: a
        }
    }
    const L = {
            result: T(),
            error: T()
        },
        M = {},
        D = {},
        R = {
            count: 0,
            resources: {
                metal: 0,
                crystal: 0,
                deuterium: 0
            }
        };

    function K() {
        const a = Object.keys(D).length;
        a > 0 && function(a) {
            g({
                type: e.Notification,
                ogameMeta: p(),
                senderUuid: m,
                data: {
                    type: x.MessageTrackingError,
                    messageId: L.error,
                    count: a
                }
            })
        }(a), 0 != R.count && g({
            type: e.Notification,
            ogameMeta: p(),
            senderUuid: m,
            data: {
                type: x.DebrisFieldReportTracking,
                messageId: L.result,
                ...R
            }
        })
    }
    const U = {
        onMessage: function(a) {
            if (z(p(), a.ogameMeta)) switch (a.type) {
                case e.DebrisFieldReport:
                case e.NewDebrisFieldReport: {
                    const s = a,
                        t = document.querySelector(`div.msg[data-msg-id="${s.data.id}"]`) ?? u(`failed to find debris field report with id '${s.data.id}'`);
                    t.classList.add(v.messages.debrisFieldReport), t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.processed), ea.settings.messageTracking.showSimplifiedResults && t.classList.add(v.messages.hideContent), B(t, `\n                <div \n                    class="ogame-tracker-debris-field-report" \n                    style="--columns: ${null!=s.data.deuterium?3:2}"\n                >\n                    <div class="ogame-tracker-resource metal"></div>\n                    <div class="ogame-tracker-resource crystal"></div>\n                    ${null!=s.data.deuterium?'<div class="ogame-tracker-resource deuterium"></div>':""}\n                    <div class="${0==s.data.metal?"no-resources":""}">\n                        ${k(s.data.metal)}\n                    </div>\n                    <div class="${0==s.data.crystal?"no-resources":""}">\n                        ${k(s.data.crystal)}\n                    </div>\n                    ${null!=s.data.deuterium?` <div class="${0==s.data.deuterium?"no-resources":""}">\n                            ${k(s.data.deuterium)}\n                        </div>`:""}\n                </div>\n            `), delete M[s.data.id], a.type == e.NewDebrisFieldReport && function(e) {
                        delete M[e.data.id], R.count++, F.forEach((a => R.resources[a] += e.data[a] ?? 0)), K()
                    }(s);
                    break
                }
                case e.TrackingError: {
                    const {
                        type: e,
                        id: s
                    } = a.data;
                    if ("debris-field-report" != e) break;
                    const t = document.querySelector(`div.msg[data-msg-id="${s}"]`) ?? u(`failed to find combat report message with id '${s}'`);
                    t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.error), B(t, !1), delete M[s], D[s] = !0, K();
                    break
                }
            }
        },
        messageType: C.debrisFieldHarvestReport,
        track: function(a) {
            a.forEach((a => {
                const s = _(a.getAttribute("data-msg-id") ?? u("Cannot find message id"), 10);
                try {
                    const t = a.querySelector(".rawMessageData") ?? u("Cannot find rawMessageData element"),
                        {
                            timestamp: r,
                            targetcoordinates: d,
                            recycledresources: o
                        } = y(t, {
                            timestamp: {
                                optional: !1,
                                conversion: e => 1e3 * _(e, 10)
                            },
                            targetcoordinates: {
                                optional: !1,
                                conversion: e => P(e, E.debrisField)
                            },
                            recycledresources: {
                                optional: !1,
                                conversion: e => JSON.parse(e)
                            }
                        });
                    isNaN(r) && u("Message timestamp is NaN"), g({
                        type: e.TrackDebrisFieldReport,
                        ogameMeta: p(),
                        data: {
                            id: s,
                            date: r,
                            coords: d,
                            resources: {
                                metal: o.metal ?? 0,
                                crystal: o.crystal ?? 0,
                                deuterium: o.deuterium ?? null
                            }
                        },
                        senderUuid: m
                    }), a.classList.add(v.messages.base, v.messages.waitingToBeProcessed), B(a, '<div class="ogame-tracker-loader"></div>'), M[s] = !0
                } catch (e) {
                    ! function(...e) {
                        console.error("[OGame Tracker]", ...e)
                    }(e), a.classList.add(v.messages.base, v.messages.error), B(a, !1), delete M[s], D[s] = !0, K()
                }
            }))
        }
    };
    var O;
    ! function(e) {
        e[e.smallCargo = 202] = "smallCargo", e[e.largeCargo = 203] = "largeCargo", e[e.lightFighter = 204] = "lightFighter", e[e.heavyFighter = 205] = "heavyFighter", e[e.cruiser = 206] = "cruiser", e[e.battleship = 207] = "battleship", e[e.colonyShip = 208] = "colonyShip", e[e.recycler = 209] = "recycler", e[e.espionageProbe = 210] = "espionageProbe", e[e.bomber = 211] = "bomber", e[e.solarSatellite = 212] = "solarSatellite", e[e.destroyer = 213] = "destroyer", e[e.deathStar = 214] = "deathStar", e[e.battlecruiser = 215] = "battlecruiser", e[e.crawler = 217] = "crawler", e[e.reaper = 218] = "reaper", e[e.pathfinder = 219] = "pathfinder"
    }(O || (O = {}));
    const G = [O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.bomber, O.battlecruiser, O.destroyer, O.reaper, O.pathfinder, O.smallCargo, O.largeCargo, O.espionageProbe];
    var A, q, H;
    ! function(e) {
        e.nothing = "nothing", e.resources = "resources", e.fleet = "fleet", e.delay = "delay", e.early = "early", e.darkMatter = "darkMatter", e.pirates = "pirates", e.aliens = "aliens", e.combat = "combat", e.item = "item", e.trader = "trader", e.lostFleet = "lostFleet"
    }(A || (A = {})), A.nothing, A.resources, A.fleet, A.delay, A.early, A.darkMatter, A.pirates, A.aliens, A.combat, A.item, A.trader, A.lostFleet,
        function(e) {
            e.small = "small", e.medium = "medium", e.large = "large"
        }(q || (q = {})), q.small, q.medium, q.large,
        function(e) {
            e.discoverer = "2dd05cc4c0e185fce2e712112dc44932027aee98", e.discoverer_pts = "67d6041bc0206d1ec7ce667e51f9d7ba73314604", e.collector = "9374c79a24b84c4331f0d26526ef6c2d33319a6e", e.collector_pts = "a521c40c620a2dd22c1bb1e9db722c4c15e42eb1", e.general = "77eff880829027daf23b755e14820a60c4c6fd93", e.general_pts = "cf37caa096aac5127ec3fe67c2606075fcc652a8", e.researcher = "1aa36213cb676fd5baad5edc2bee4fbe117a778b", e.researcher_pts = "ae76f3f6ac159a7eca3bdf16e5f4a781cae8bf0d", e.trader = "6c9fe5e35bdad0d4e3382eb6a5aeac6bc8263752", e.trader_pts = "0acb69b437229c44f746ffd1567aa5f1c06a6812", e.warrior = "9b48e257cbef6c5df0f03a47cead7f9abda3d437", e.warrior_pts = "ec90e4b45e935bb0d9f423119699202330a9b7c9", e.metalBooster_bronze_1day = "b956c46faa8e4e5d8775701c69dbfbf53309b279", e.metalBooster_bronze_7days = "de922af379061263a56d7204d1c395cefcfb7d75", e.metalBooster_bronze_30days_pts = "28c1928aedaee0199199a152668625f335c866b7", e.metalBooster_bronze_90days_pts = "7b1d06e638ca2b48bf6ace43952d4dbcc96e7721", e.metalBooster_silver_7days = "ba85cc2b8a5d986bbfba6954e2164ef71af95d4a", e.metalBooster_silver_30days = "742743b3b0ae1f0b8a1e01921042810b58f12f39", e.metalBooster_silver_30days_pts = "9afd5275ae381d4daef83583f0f612a7c2988648", e.metalBooster_silver_90days = "6f44dcd2bd84875527abba69158b4e976c308bbc", e.metalBooster_silver_90days_pts = "b95aa0276bd2fa216e6ab30e853492354bfe6832", e.metalBooster_gold_7days = "05294270032e5dc968672425ab5611998c409166", e.metalBooster_gold_30days = "6fecb993169fe918d9c63cd37a2e541cc067664e", e.metalBooster_gold_30days_pts = "755d63372cfa033307a1e81f7712b81853548303", e.metalBooster_gold_90days = "21c1a65ca6aecf54ffafb94c01d0c60d821b325d", e.metalBooster_gold_90days_pts = "01027ac7604eebf2b6a85c549d0adbbe05c8c975", e.metalBooster_platinum_7days = "a83cfdc15b8dba27c82962d57e50d8101d263cfb", e.metalBooster_platinum_7days_pts = "535636f89de54042eea3ee4c0621d964c2681d38", e.metalBooster_platinum_30days = "c690f492cffe5f9f2952337e8eed307a8a62d6cf", e.metalBooster_platinum_30days_pts = "fd3779dac62d768d4fd43bf046be533f3e859e5f", e.metalBooster_platinum_90days = "ca7f903a65467b70411e513b0920d66c417aa3a2", e.metalBooster_platinum_90days_pts = "1e52950225663f217a03ae8784d288c69b97dc78", e.crystalBooster_bronze_1day = "090a969b05d1b5dc458a6b1080da7ba08b84ec7f", e.crystalBooster_bronze_7days = "3c9f85221807b8d593fa5276cdf7af9913c4a35d", e.crystalBooster_bronze_30days_pts = "8596c58aa6b50a089c02ca63e68041f09a3d7edf", e.crystalBooster_bronze_90days_pts = "bfc5bb33e1cc2cade4c3f175273d5fdde41b0497", e.crystalBooster_silver_7days = "422db99aac4ec594d483d8ef7faadc5d40d6f7d3", e.crystalBooster_silver_30days = "5b69663e3ba09a1fe77cf72c5094e246cfe954d6", e.crystalBooster_silver_30days_pts = "f54a0350f8aa12a31f9318d5288def77e56887f3", e.crystalBooster_silver_90days = "04d8afd5936976e32ce894b765ea8bd168aa07ef", e.crystalBooster_silver_90days_pts = "140591975f2f157a85a6deec52189b0579318da8", e.crystalBooster_gold_7days = "118d34e685b5d1472267696d1010a393a59aed03", e.crystalBooster_gold_30days = "36fb611e71d42014f5ebd0aa5a52bc0c81a0c1cb", e.crystalBooster_gold_30days_pts = "ec3ce378794621c2c2084bd4b90eaf49d0cb96dc", e.crystalBooster_gold_90days = "d45f00e8b909f5293a83df4f369737ea7d69c684", e.crystalBooster_gold_90days_pts = "102179c5fc0ef3e63e3b0dbf740c52b9950f0987", e.crystalBooster_platinum_7days = "35d96e441c21ef112a84c618934d9d0f026998fd", e.crystalBooster_platinum_7days_pts = "b61b41b78c9e0aac8c6465e25b7a2ffd5afe1d71", e.crystalBooster_platinum_30days = "6bf45fcba8a6a68158273d04a924452eca75cf39", e.crystalBooster_platinum_30days_pts = "2e516f35c95dcb1f33d83d3c27d298592a37c2a9", e.crystalBooster_platinum_90days = "7c2edf40c5cd54ad11c6439398b83020c0a7a6be", e.crystalBooster_platinum_90days_pts = "dd21a2e0d2c1d3cf00992c7b87f442b99efb8b4d", e.deuteriumBooster_bronze_1day = "e254352ac599de4dd1f20f0719df0a070c623ca8", e.deuteriumBooster_bronze_7days = "d9fa5f359e80ff4f4c97545d07c66dbadab1d1be", e.deuteriumBooster_bronze_30days_pts = "f7732e16faa17a966eac832ba19fda9caafbb0e4", e.deuteriumBooster_bronze_90days_pts = "6a78ed70d97259b706bcd72ec67e2223d37709c5", e.deuteriumBooster_silver_7days = "e4b78acddfa6fd0234bcb814b676271898b0dbb3", e.deuteriumBooster_silver_30days = "26416a3cdb94613844b1d3ca78b9057fd6ae9b15", e.deuteriumBooster_silver_30days_pts = "1661b0b8ad6d797d095c67232aaa083dbe6353d8", e.deuteriumBooster_silver_90days = "6f0952a919fd2ab9c009e9ccd83c1745f98f758f", e.deuteriumBooster_silver_90days_pts = "6a98ca35f5656b658ceb32eca0a8ad0d5a393c4b", e.deuteriumBooster_gold_7days = "5560a1580a0330e8aadf05cb5bfe6bc3200406e2", e.deuteriumBooster_gold_30days = "300493ddc756869578cb2888a3a1bc0c3c66765f", e.deuteriumBooster_gold_30days_pts = "7517786581be3b4c9678749953a9c884a37427a3", e.deuteriumBooster_gold_90days = "dc5896bed3311434224d511fa7ced6fdbe41b4e8", e.deuteriumBooster_gold_90days_pts = "5802414d360f8644df91c714f6a51db3f1e0d514", e.deuteriumBooster_platinum_7days = "4b51d903560edd102467b110586000bd64fdb954", e.deuteriumBooster_platinum_7days_pts = "d26172f991bf246f130c6307dc5e1bde605d1c69", e.deuteriumBooster_platinum_30days = "620f779dbffa1011aded69b091239727910a3d03", e.deuteriumBooster_platinum_30days_pts = "b5e93db6977303fb1a0ef4031485ba8712aafeef", e.deuteriumBooster_platinum_90days = "831c3ea8d868eb3601536f4d5e768842988a1ba9", e.deuteriumBooster_platinum_90days_pts = "fadda89b7ebfc9a99a5c90d3101a0271a07cbaa3", e.energyBooster_bronze_7days = "3f6f381dc9b92822406731a942c028adf8dc978f", e.energyBooster_bronze_30days_pts = "273042352aebf335c124587352c0a319762cef66", e.energyBooster_bronze_90days_pts = "cdc9c463656e0dab8a31c7581ba53e62f40d2380", e.energyBooster_silver_7days = "c2bad58fcec374d709099d11d0549e59ea7e233e", e.energyBooster_silver_7days_pts = "2cd0536a26c328142a0741a7e0d7e1a19a4f5e07", e.energyBooster_silver_30days = "bedd248aaf288c27e9351cfacfa6be03f1dbb898", e.energyBooster_silver_30days_pts = "64ed3011f97a865988b3a38808b4c574f0605a62", e.energyBooster_silver_90days = "e05aa5b9e3df5be3857b43da8403eafbf5ad3b96", e.energyBooster_silver_90days_pts = "64ed3011f97a865988b3a38808b4c574f0605a62_", e.energyBooster_gold_7days = "55b52cbfb148ec80cd4e5b0580f7bed01149d643", e.energyBooster_gold_7days_pts = "0daf077d568dbb349143e9d3ab65c17164601848", e.energyBooster_gold_30days = "4fa9a2273ee446284d5177fd9d60a22de01e932b", e.energyBooster_gold_30days_pts = "aaff895aeaa6b4bbae3ecbee37f724203e483e39", e.energyBooster_gold_90days = "5ad783dcfce3655ef97b36197425718a0dad6b66", e.energyBooster_gold_90days_pts = "1ff60c9942b669d0c0bb65ec6b0c9c2fa3d96514", e.energyBooster_platinum_7days = "77c36199102e074dca46f5f26ef57ce824d044dd", e.energyBooster_platinum_7days_pts = "e840aeda091cb3a551c1fe7600341e963e59b263", e.energyBooster_platinum_30days = "dfe86378f8c3d7f3ee0790ea64603bc44e83ca47", e.energyBooster_platinum_30days_pts = "b11c45f808b37afbca4ba8ebb3312488d4c50038", e.energyBooster_platinum_90days = "c39aa972a971e94b1d9b4d7a8f734b3d8be12534", e.energyBooster_platinum_90days_pts = "82b87c785911aa7044fce0f5909149b12c719e94", e.moonFields_bronze = "be67e009a5894f19bbf3b0c9d9b072d49040a2cc", e.moonFields_silver = "c21ff33ba8f0a7eadb6b7d1135763366f0c4b8bf", e.moonFields_gold = "05ee9654bd11a261f1ff0e5d0e49121b5e7e4401", e.moonFields_platinum = "8a426241572b2fea57844acd99bc326fe40e35cf", e.moonShot_bronze = "485a6d5624d9de836d3eb52b181b13423f795770", e.moonShot_silver = "fd895a5c9fd978b9c5c7b65158099773ba0eccef", e.moonShot_gold = "45d6660308689c65d97f3c27327b0b31f880ae75", e.planetFields_bronze = "16768164989dffd819a373613b5e1a52e226a5b0", e.planetFields_silver = "0e41524dc46225dca21c9119f2fb735fd7ea5cb3", e.planetFields_gold = "04e58444d6d0beb57b3e998edc34c60f8318825a", e.planetFields_platinum = "f3d9b82e10f2e969209c1a5ad7d22181c703bb36", e.resourcePackage_all = "c1d0232604872f899ea15a9772baf76880f55c5f", e.resourcePackage_all_pts = "fd0ee802989ba7c3753d1efda5851a31041fc003", e.resourcePackage_metal = "859d82d316b83848f7365d21949b3e1e63c7841f", e.resourcePackage_metal_pts = "e6b486224641ac3eb44c67001a2651acd2410e64", e.resourcePackage_crystal = "bb2f6843226ef598f0b567b92c51b283de90aa48", e.resourcePackage_crystal_pts = "945e09627b23165fc3f611c634b0041883c24783", e.resourcePackage_deuterium = "cb72ed207dd871832a850ee29f1c1f83aa3f4f36", e.resourcePackage_deuterium_pts = "4b62dc535efeef755bcc038714f470d3ed7beb01", e.kraken_bronze = "40f6c78e11be01ad3389b7dccd6ab8efa9347f3c", e.kraken_silver = "4a58d4978bbe24e3efb3b0248e21b3b4b1bfbd8a", e.kraken_gold = "929d5e15709cc51a4500de4499e19763c879f7f7", e.kraken_platinum = "f36042d76e6b8b33d931e1d4ae99f35265cd82d1", e.detroid_bronze = "d3d541ecc23e4daa0c698e44c32f04afd2037d84", e.detroid_silver = "27cbcd52f16693023cb966e5026d8a1efbbfc0f9", e.detroid_gold = "0968999df2fe956aa4a07aea74921f860af7d97f", e.detroid_platinum = "3347bcd4ee59f1d3fa03c4d18a25bca2da81de82", e.detroid_mechaShipyard_bronze_pts = "50f666f32934372fab5fe0fdba70e028abdcd9f8", e.newtron_bronze = "da4a2a1bb9afd410be07bc9736d87f1c8059e66d", e.newtron_silver = "d26f4dab76fdc5296e3ebec11a1e1d2558c713ea", e.newtron_gold = "8a4f9e8309e1078f7f5ced47d558d30ae15b4a1b", e.newtron_platinum = "a1ba242ede5286b530cdf991796b3d1cae9e4f23", e.lifeformKraken_bronze = "00b42f7113d81f98df865bbfa2280fe3a4465e89", e.lifeformKraken_bronze_pts = "56c258e7c1f12a37773d9c95ad2e98dc3076aca6", e.lifeformKraken_silver = "5f194777c5b69d5c2a3c68e9e04a4cae9c28bcf2", e.lifeformKraken_silver_pts = "309bc42ce9e5d4587c0061ef425e9940dce9f713", e.lifeformKraken_gold = "0ad06bba14dfd0b576f1daef729a60753e2263c7", e.lifeformKraken_gold_pts = "3b470998cf557da90f473c00c0f1a06c641079e4", e.lifeformKraken_platinum = "c19f0e09d862d93d7956beb3185d9ee929b5ef74", e.lifeformKraken_platinum_pts = "8223a42e752958f15d6392630d776af061c53e1f", e.lifeformNewtron_bronze = "ba3e6693f112986b7964c835bcac6ae201900e2f", e.lifeformNewtron_bronze_pts = "dfb5ffa09e06d48304d46aaff8686dd1beec1d24", e.lifeformNewtron_silver = "9879a36c42797a868416b13f07e033f664cabd70 ", e.lifeformNewtron_silver_pts = "ff3e56f3f0c386c1698c56d912e47ab18b80bfa8", e.lifeformNewtron_gold = "7fe4cdb098685f8af827ca460a56e00ef46f5f05 ", e.lifeformNewtron_gold_pts = "2a0d57915e6904a910012362abe8b1ca315a24b9", e.lifeformNewtron_platinum = "9cde936fabc5037617f8261955e7d3f2262eec69", e.lifeformNewtron_platinum_pts = "f1545f4fc66dafbc04ad02cafc87cfb5f34706fa", e.expeditionslots_bronze_7days = "e54ecc0416d6e96b4165f24238b03a1b32c1df47", e.expeditionslots_bronze_7days_pts = "9fd56ce4767fa2029f10287852e49849369d416f", e.expeditionslots_bronze_30days = "8c1f6c6849d1a5e4d9de6ae9bb1b861f6f7b5d4d", e.expeditionslots_bronze_30days_pts = "c6cd9477ef5da95676b458fee86b2664ad139cb6", e.expeditionslots_bronze_90days = "a5784c685c0e1e6111d9c18aeaf80af2e0777ab4", e.expeditionslots_bronze_90days_pts = "4bf5b3d12b0451a6b82869e294db6976e22fd8e3", e.expeditionslots_silver_7days = "b2bc9789df7c1ef5e058f72d61380b696dde54e8", e.expeditionslots_silver_7days_pts = "28b3816c45e0ae15387edb1a98e0e9d8ea59cc2e", e.expeditionslots_silver_30days = "31a504be1195149a3bef05b9cc6e3af185d24ef2", e.expeditionslots_silver_30days_pts = "4aa6841a3d708194a2edc11b28c6a233a7132e4a", e.expeditionslots_silver_90days = "4f6f941bbf2a8527b0424b3ad11014502d8f4fb8", e.expeditionslots_silver_90days_pts = "c2e479e27521e6cda9435869be0261605b4b0328", e.expeditionslots_gold_7days = "9336b9f29d36e3f69b0619c9523d8bec5e09ab8e", e.expeditionslots_gold_7days_pts = "b3d814e10bfc51dfac2fc934128b0ca99186c5c4", e.expeditionslots_gold_30days = "fd7d35e73d0e09e83e30812b738ef966ea9ef790", e.expeditionslots_gold_30days_pts = "369b8b39d4660cf3621fd1c1d58f41a909b0a3bb", e.expeditionslots_gold_90days = "540410439514ac09363c5c47cf47117a8b8ae79a", e.expeditionslots_gold_90days_pts = "d9b56c689607d7f3fa118d698c74b78a2d3642ff", e.fleetSlots_bronze_7days = "0684c6a5a42acbb3cd134913d421fc28dae6b90d", e.fleetSlots_bronze_7days_pts = "1aa1eeeb99c989eb51e92bd05856cae440d187b4", e.fleetSlots_bronze_30days = "94a28491b6fd85003f1cb151e88dde106f1d7596", e.fleetSlots_bronze_30days_pts = "0bc1d1e39dbfd81577e0947b4a0993e2eec7e91e", e.fleetSlots_bronze_90days = "bb47add58876240199a18ddacc2db07789be1934", e.fleetSlots_bronze_90days_pts = "af71eaca75fcc8c2648537875fb645032cfd8295", e.fleetSlots_silver_7days = "f8fd610825fb4a442e27e4e9add74f050e040e27", e.fleetSlots_silver_7days_pts = "372371df5694ca9f90d53eb10f452b0799bf8c27", e.fleetSlots_silver_30days = "c4e598a85805a7eb3ca70f9265cbd366fc4d2b0e", e.fleetSlots_silver_30days_pts = "77e0ad52d1835837f88f7c650935d2f59b7221a4", e.fleetSlots_silver_90days = "a693c5ce3f5676efaaf0781d94234bea4f599d2e", e.fleetSlots_silver_90days_pts = "73fb544f61dfc0b7752c155b131dc3d9b7ca0ce7", e.fleetSlots_gold_7days = "5a8000c372cd079292a92d35d4ddba3c0f348d3b", e.fleetSlots_gold_7days_pts = "f5cb8d966286c86807814d6a3ba1c038eb22977d", e.fleetSlots_gold_30days = "1808bf7639b81ac3ac87bcb7eb3bbba0a1874d0a", e.fleetSlots_gold_30days_pts = "ad057230daf790982f729ca35d86bf1f46587be7", e.fleetSlots_gold_90days = "1f7024c4f6493f0c589e1b00c76e6ced258c00e5", e.fleetSlots_gold_90days_pts = "4f721c15a20a63c6fcca442afb5eed279175eba2", e.migrationItem = "7eacfcee74660f30bb92a5874e8cccf2bb286ebd", e.migrationItem_pts = "4e58cbb8ad63a3df85f6d1ea16161f1e672d3ee3", e.shortenTime_buildings = "cb4fd53e61feced0d52cfc4c1ce383bad9c05f67", e.shortenTime_research = "14c17d49462963f5e5b67efa1257622ce1b866ac", e.shortenTime_shipyard = "75accaa0d1bc22b78d83b89cd437bdccd6a58887", e.shortenTime_lifeformResearch = "bb8e4fa790c899b3a050b07729f3e536ce8a4de4", e.shortenTime_lifeformBuildings = "ebcb7dd6a0a3ec38928109cb6e6866b11d60a0df", e.officer_geologist = "78badde414b2cba7c0c37e3e11a5a42e8414c8ac", e.officer_commander = "10662141326cc46ee30bc4dd05f581424050a768", e.officer_admiral = "bbc7ee322189528ad5bc3a19e048c4ff582538b5", e.officer_technocrat = "ddb65e18ec97b32d7dc50249a0d9c256f57664df", e.officer_engineer = "e8e01fb84ed1a33ed3ab34af6fc84e86e3505142"
        }(H || (H = {}));
    const j = {
        [H.discoverer]: 0,
        [H.discoverer_pts]: 0,
        [H.collector]: 0,
        [H.collector_pts]: 0,
        [H.general]: 0,
        [H.general_pts]: 0,
        [H.researcher]: 0,
        [H.researcher_pts]: 0,
        [H.trader]: 0,
        [H.trader_pts]: 0,
        [H.warrior]: 0,
        [H.warrior_pts]: 0,
        [H.metalBooster_bronze_1day]: 0,
        [H.metalBooster_bronze_7days]: 0,
        [H.metalBooster_bronze_30days_pts]: 0,
        [H.metalBooster_bronze_90days_pts]: 0,
        [H.metalBooster_silver_7days]: 0,
        [H.metalBooster_silver_30days]: 0,
        [H.metalBooster_silver_30days_pts]: 0,
        [H.metalBooster_silver_90days]: 0,
        [H.metalBooster_silver_90days_pts]: 0,
        [H.metalBooster_gold_7days]: 0,
        [H.metalBooster_gold_30days]: 0,
        [H.metalBooster_gold_30days_pts]: 0,
        [H.metalBooster_gold_90days]: 0,
        [H.metalBooster_gold_90days_pts]: 0,
        [H.metalBooster_platinum_7days]: 0,
        [H.metalBooster_platinum_7days_pts]: 0,
        [H.metalBooster_platinum_30days]: 0,
        [H.metalBooster_platinum_30days_pts]: 0,
        [H.metalBooster_platinum_90days]: 0,
        [H.metalBooster_platinum_90days_pts]: 0,
        [H.crystalBooster_bronze_1day]: 0,
        [H.crystalBooster_bronze_7days]: 0,
        [H.crystalBooster_bronze_30days_pts]: 0,
        [H.crystalBooster_bronze_90days_pts]: 0,
        [H.crystalBooster_silver_7days]: 0,
        [H.crystalBooster_silver_30days]: 0,
        [H.crystalBooster_silver_30days_pts]: 0,
        [H.crystalBooster_silver_90days]: 0,
        [H.crystalBooster_silver_90days_pts]: 0,
        [H.crystalBooster_gold_7days]: 0,
        [H.crystalBooster_gold_30days]: 0,
        [H.crystalBooster_gold_30days_pts]: 0,
        [H.crystalBooster_gold_90days]: 0,
        [H.crystalBooster_gold_90days_pts]: 0,
        [H.crystalBooster_platinum_7days]: 0,
        [H.crystalBooster_platinum_7days_pts]: 0,
        [H.crystalBooster_platinum_30days]: 0,
        [H.crystalBooster_platinum_30days_pts]: 0,
        [H.crystalBooster_platinum_90days]: 0,
        [H.crystalBooster_platinum_90days_pts]: 0,
        [H.deuteriumBooster_bronze_1day]: 0,
        [H.deuteriumBooster_bronze_7days]: 0,
        [H.deuteriumBooster_bronze_30days_pts]: 0,
        [H.deuteriumBooster_bronze_90days_pts]: 0,
        [H.deuteriumBooster_silver_7days]: 0,
        [H.deuteriumBooster_silver_30days]: 0,
        [H.deuteriumBooster_silver_30days_pts]: 0,
        [H.deuteriumBooster_silver_90days]: 0,
        [H.deuteriumBooster_silver_90days_pts]: 0,
        [H.deuteriumBooster_gold_7days]: 0,
        [H.deuteriumBooster_gold_30days]: 0,
        [H.deuteriumBooster_gold_30days_pts]: 0,
        [H.deuteriumBooster_gold_90days]: 0,
        [H.deuteriumBooster_gold_90days_pts]: 0,
        [H.deuteriumBooster_platinum_7days]: 0,
        [H.deuteriumBooster_platinum_7days_pts]: 0,
        [H.deuteriumBooster_platinum_30days]: 0,
        [H.deuteriumBooster_platinum_30days_pts]: 0,
        [H.deuteriumBooster_platinum_90days]: 0,
        [H.deuteriumBooster_platinum_90days_pts]: 0,
        [H.energyBooster_bronze_7days]: 0,
        [H.energyBooster_bronze_30days_pts]: 0,
        [H.energyBooster_bronze_90days_pts]: 0,
        [H.energyBooster_silver_7days]: 0,
        [H.energyBooster_silver_7days_pts]: 0,
        [H.energyBooster_silver_30days]: 0,
        [H.energyBooster_silver_30days_pts]: 0,
        [H.energyBooster_silver_90days]: 0,
        [H.energyBooster_silver_90days_pts]: 0,
        [H.energyBooster_gold_7days]: 0,
        [H.energyBooster_gold_7days_pts]: 0,
        [H.energyBooster_gold_30days]: 0,
        [H.energyBooster_gold_30days_pts]: 0,
        [H.energyBooster_gold_90days]: 0,
        [H.energyBooster_gold_90days_pts]: 0,
        [H.energyBooster_platinum_7days]: 0,
        [H.energyBooster_platinum_7days_pts]: 0,
        [H.energyBooster_platinum_30days]: 0,
        [H.energyBooster_platinum_30days_pts]: 0,
        [H.energyBooster_platinum_90days]: 0,
        [H.energyBooster_platinum_90days_pts]: 0,
        [H.moonFields_bronze]: 0,
        [H.moonFields_silver]: 0,
        [H.moonFields_gold]: 0,
        [H.moonFields_platinum]: 0,
        [H.moonShot_bronze]: 0,
        [H.moonShot_silver]: 0,
        [H.moonShot_gold]: 0,
        [H.planetFields_bronze]: 0,
        [H.planetFields_silver]: 0,
        [H.planetFields_gold]: 0,
        [H.planetFields_platinum]: 0,
        [H.resourcePackage_all]: 0,
        [H.resourcePackage_all_pts]: 0,
        [H.resourcePackage_metal]: 0,
        [H.resourcePackage_metal_pts]: 0,
        [H.resourcePackage_crystal]: 0,
        [H.resourcePackage_crystal_pts]: 0,
        [H.resourcePackage_deuterium]: 0,
        [H.resourcePackage_deuterium_pts]: 0,
        [H.kraken_bronze]: 0,
        [H.kraken_silver]: 0,
        [H.kraken_gold]: 0,
        [H.kraken_platinum]: 0,
        [H.detroid_bronze]: 0,
        [H.detroid_silver]: 0,
        [H.detroid_gold]: 0,
        [H.detroid_platinum]: 0,
        [H.detroid_mechaShipyard_bronze_pts]: 0,
        [H.newtron_bronze]: 0,
        [H.newtron_silver]: 0,
        [H.newtron_gold]: 0,
        [H.newtron_platinum]: 0,
        [H.lifeformKraken_bronze]: 0,
        [H.lifeformKraken_bronze_pts]: 0,
        [H.lifeformKraken_silver]: 0,
        [H.lifeformKraken_silver_pts]: 0,
        [H.lifeformKraken_gold]: 0,
        [H.lifeformKraken_gold_pts]: 0,
        [H.lifeformKraken_platinum]: 0,
        [H.lifeformKraken_platinum_pts]: 0,
        [H.lifeformNewtron_bronze]: 0,
        [H.lifeformNewtron_bronze_pts]: 0,
        [H.lifeformNewtron_silver]: 0,
        [H.lifeformNewtron_silver_pts]: 0,
        [H.lifeformNewtron_gold]: 0,
        [H.lifeformNewtron_gold_pts]: 0,
        [H.lifeformNewtron_platinum]: 0,
        [H.lifeformNewtron_platinum_pts]: 0,
        [H.expeditionslots_bronze_7days]: 0,
        [H.expeditionslots_bronze_7days_pts]: 0,
        [H.expeditionslots_bronze_30days]: 0,
        [H.expeditionslots_bronze_30days_pts]: 0,
        [H.expeditionslots_bronze_90days]: 0,
        [H.expeditionslots_bronze_90days_pts]: 0,
        [H.expeditionslots_silver_7days]: 0,
        [H.expeditionslots_silver_7days_pts]: 0,
        [H.expeditionslots_silver_30days]: 0,
        [H.expeditionslots_silver_30days_pts]: 0,
        [H.expeditionslots_silver_90days]: 0,
        [H.expeditionslots_silver_90days_pts]: 0,
        [H.expeditionslots_gold_7days]: 0,
        [H.expeditionslots_gold_7days_pts]: 0,
        [H.expeditionslots_gold_30days]: 0,
        [H.expeditionslots_gold_30days_pts]: 0,
        [H.expeditionslots_gold_90days]: 0,
        [H.expeditionslots_gold_90days_pts]: 0,
        [H.fleetSlots_bronze_7days]: 0,
        [H.fleetSlots_bronze_7days_pts]: 0,
        [H.fleetSlots_bronze_30days]: 0,
        [H.fleetSlots_bronze_30days_pts]: 0,
        [H.fleetSlots_bronze_90days]: 0,
        [H.fleetSlots_bronze_90days_pts]: 0,
        [H.fleetSlots_silver_7days]: 0,
        [H.fleetSlots_silver_7days_pts]: 0,
        [H.fleetSlots_silver_30days]: 0,
        [H.fleetSlots_silver_30days_pts]: 0,
        [H.fleetSlots_silver_90days]: 0,
        [H.fleetSlots_silver_90days_pts]: 0,
        [H.fleetSlots_gold_7days]: 0,
        [H.fleetSlots_gold_7days_pts]: 0,
        [H.fleetSlots_gold_30days]: 0,
        [H.fleetSlots_gold_30days_pts]: 0,
        [H.fleetSlots_gold_90days]: 0,
        [H.fleetSlots_gold_90days_pts]: 0,
        [H.migrationItem]: 0,
        [H.migrationItem_pts]: 0,
        [H.shortenTime_buildings]: 0,
        [H.shortenTime_research]: 0,
        [H.shortenTime_shipyard]: 0,
        [H.shortenTime_lifeformBuildings]: 0,
        [H.shortenTime_lifeformResearch]: 0,
        [H.officer_commander]: 0,
        [H.officer_admiral]: 0,
        [H.officer_engineer]: 0,
        [H.officer_geologist]: 0,
        [H.officer_technocrat]: 0
    };
    var W;
    Object.keys(j),
        function(e) {
            e.none = "none", e.bronze = "bronze", e.silver = "silver", e.gold = "gold", e.platinum = "platinum"
        }(W || (W = {}));
    const J = {
        [H.discoverer]: {
            name: "Entdecker",
            image: "3ecbd5114c3b663aa1a1252fc03091eecc790f10",
            smallImage: "e9278159a8c40e2e9337ba3495f0b5af1e2c9d05",
            hash: H.discoverer,
            grade: W.none
        },
        [H.collector]: {
            name: "Kollektor",
            image: "09726bf92556fc12b55ec5ee00516af0223b7713",
            smallImage: "90b2366b4c96638a1a8b419a1c9ad762147ef38a",
            hash: H.collector,
            grade: W.none
        },
        [H.general]: {
            name: "General",
            image: "4b999ea0089c6358b5531635b37e280cfae62da2",
            smallImage: "3885fd784f5ccbda9f9a30040b1dffc98e204305",
            hash: H.general,
            grade: W.none
        },
        [H.researcher]: {
            name: "Forscher",
            image: "55f7003a5cf07e52b38f11b81129ac5042dff4da",
            smallImage: "0fad76886bc161e860f8ffb04a1838ba21e377e6",
            hash: H.researcher,
            grade: W.none
        },
        [H.trader]: {
            name: "Händler",
            image: "5df93e894bb92e987219fc9d669c9a276ceb5499",
            smallImage: "b52a99657970f97a8881f2493be63e3a58c8d49f",
            hash: H.trader,
            grade: W.none
        },
        [H.warrior]: {
            name: "Krieger",
            image: "48ca2adbb95b37db83777b659cfc4042c179fece",
            smallImage: "a2d0a5aa06f932c7ecbd76906d44d4b46e338600",
            hash: H.warrior,
            grade: W.none
        },
        [H.metalBooster_bronze_1day]: {
            hash: H.metalBooster_bronze_1day,
            smallImage: "",
            image: "61b6be10761f20795844e467916f8cc2802dd680",
            name: "Metall-Booster Bronze (1 Tag)",
            grade: W.bronze
        },
        [H.metalBooster_bronze_7days]: {
            hash: H.metalBooster_bronze_7days,
            smallImage: "cea22d098a0b48c8960101e05c0bd2a7fadc72c5",
            image: "7f833a0709db862070ca9cdca8e91c28e52432af",
            name: "Metall-Booster Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.metalBooster_silver_7days]: {
            name: "Metall-Booster Silber (7 Tage)",
            image: "db8f26a29991086cadd9db7deff044d89cd47de",
            smallImage: "1ab70d0954b4ebbb91e020c60afbaacb28707e5d",
            hash: H.metalBooster_silver_7days,
            grade: W.silver
        },
        [H.metalBooster_silver_30days]: {
            name: "Metall-Booster Silber (30 Tage)",
            image: "2bd0b5df51b77a3cb65d01568171cb991e047ac5",
            smallImage: "5e62926be58e94ebb28a231ecad87f8e852d0f6d",
            hash: H.metalBooster_silver_30days,
            grade: W.silver
        },
        [H.metalBooster_silver_90days]: {
            name: "Metall-Booster Silber (90 Tage)",
            image: "6b4ea2ced99211b1b9f0b84fb8a312f0f053a366",
            smallImage: "2e4d16cdaec1ea8ba2af28c914bb80f4d0939ce3",
            hash: H.metalBooster_silver_90days,
            grade: W.silver
        },
        [H.metalBooster_gold_7days]: {
            name: "Metall-Booster Gold (7 Tage)",
            image: "3d0e872a750a6dae2f2a5a7011ec79794bb0e676",
            smallImage: "780aa9d6619ae572a318dacc29e7bb77ad980380",
            hash: H.metalBooster_gold_7days,
            grade: W.gold
        },
        [H.metalBooster_gold_30days]: {
            name: "Metall-Booster Gold (30 Tage)",
            image: "eacc8d23eef74f5dd4b91b99a654e0d63450fa07",
            smallImage: "9132f52e224e6ba87677e5ccc5cd1391320cf7d2",
            hash: H.metalBooster_gold_30days,
            grade: W.gold
        },
        [H.metalBooster_gold_90days]: {
            name: "Metall-Booster Gold (90 Tage)",
            image: "b5ed0c10e3396c3cbab4dff2a778e2676f7b936a",
            smallImage: "a0cba1aa5de23e877b10b196f40855bafc91256c",
            hash: H.metalBooster_gold_90days,
            grade: W.gold
        },
        [H.metalBooster_platinum_7days]: {
            name: "Metall-Booster Platin (7 Tage)",
            image: "34752e40512a574a74464006d326bd6aebecb1f1",
            smallImage: "b29918a7d1f313fd91d788c9c444dfbe996640ee",
            hash: H.metalBooster_platinum_7days,
            grade: W.platinum
        },
        [H.metalBooster_platinum_30days]: {
            name: "Metall-Booster Platin (30 Tage)",
            image: "ff1ad1a6d5879cb0ea720199c9eb6518584f0922",
            smallImage: "ce3bb161706f1788c893b3196834d67102318866",
            hash: H.metalBooster_platinum_30days,
            grade: W.platinum
        },
        [H.metalBooster_platinum_90days]: {
            name: "Metall-Booster Platin (90 Tage)",
            image: "ff96652e498d26f8d2621b0599808860f11ee31c",
            smallImage: "e17ff7930eb79c7207502348180a2b4a437474d4",
            hash: H.metalBooster_platinum_90days,
            grade: W.platinum
        },
        [H.crystalBooster_bronze_1day]: {
            hash: H.crystalBooster_bronze_1day,
            image: "c6772214b0a510ee02d69fbd6c4bd6eae609a3f8",
            smallImage: "",
            name: "Kristall-Booster Bronze (1 Tag)",
            grade: W.bronze
        },
        [H.crystalBooster_bronze_7days]: {
            hash: H.crystalBooster_bronze_7days,
            image: "ddedd2f4128678c7c857af7e5550e397f50f38c2",
            smallImage: "286f3eaf6072f55d8858514b159d1df5f16a5654",
            name: "Kristall-Booster Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.crystalBooster_silver_7days]: {
            name: "Kristall-Booster Silber (7 Tage)",
            image: "6e1d20e739c143784d10e58ddb4c50c52122a40a",
            smallImage: "a703be5a40a8fe8128466721f5f925ae1e86d13a",
            hash: H.crystalBooster_silver_7days,
            grade: W.silver
        },
        [H.crystalBooster_silver_30days]: {
            name: "Kristall-Booster Silber (30 Tage)",
            image: "4cb9628975e286b2cf4949ef4d216bccc1813a77",
            smallImage: "2746f4d2372da032f4daa294606ee88e5ca7a46a",
            hash: H.crystalBooster_silver_30days,
            grade: W.silver
        },
        [H.crystalBooster_silver_90days]: {
            name: "Kristall-Booster Silber (90 Tage)",
            image: "23f7d50e917ed39c5b755b95786e8cf4c4141279",
            smallImage: "60a0fee6f82b2b4cec6928c1b052ac586f0b2a0d",
            hash: H.crystalBooster_silver_90days,
            grade: W.silver
        },
        [H.crystalBooster_gold_7days]: {
            name: "Kristall-Booster Gold (7 Tage)",
            image: "bdb4508609de1df58bf4a6108fff73078c89f777",
            smallImage: "206bc65589c10c31b645c34991c12fc8556165b2",
            hash: H.crystalBooster_gold_7days,
            grade: W.gold
        },
        [H.crystalBooster_gold_30days]: {
            name: "Kristall-Booster Gold (30 Tage)",
            image: "5b84505319073e6b71900cfd059657750317ae23",
            smallImage: "627957046e2d5315bf13104e258ca0ea37ca7489",
            hash: H.crystalBooster_gold_30days,
            grade: W.gold
        },
        [H.crystalBooster_gold_90days]: {
            name: "Kristall-Booster Gold (90 Tage)",
            image: "efdf5966695a147aaa26442f811346e8b749ec6d",
            smallImage: "11d508fc74f136dde21fe9506cad6db3d43149d5",
            hash: H.crystalBooster_gold_90days,
            grade: W.gold
        },
        [H.crystalBooster_platinum_7days]: {
            name: "Kristall-Booster Platin (7 Tage)",
            image: "9952055cf47d116eedeec429a469b61abdf6ce72",
            smallImage: "5650071c78c9fcf9681fc2c780694de96de29c1b",
            hash: H.crystalBooster_platinum_7days,
            grade: W.platinum
        },
        [H.crystalBooster_platinum_30days]: {
            name: "Kristall-Booster Platin (30 Tage)",
            image: "d4e203516d95ae28081a3d985818e2df5a2475d4",
            smallImage: "d3f3321fcd999f657e9dc4ccf9cb34731524123f",
            hash: H.crystalBooster_platinum_30days,
            grade: W.platinum
        },
        [H.crystalBooster_platinum_90days]: {
            name: "Kristall-Booster Platin (90 Tage)",
            image: "5a16b583800c72b8eef5585fd5aa0bbd8e5c2c0f",
            smallImage: "5e33a2cfb73e9054540c5172f66b770b28765475",
            hash: H.crystalBooster_platinum_90days,
            grade: W.platinum
        },
        [H.deuteriumBooster_bronze_1day]: {
            hash: H.deuteriumBooster_bronze_1day,
            image: "5f7a90f4d43866b781c61f7511bb8363252639a4",
            smallImage: "",
            name: "Deuterium-Booster Bronze (1 Tag)",
            grade: W.bronze
        },
        [H.deuteriumBooster_bronze_7days]: {
            hash: H.deuteriumBooster_bronze_7days,
            smallImage: "f0e514af79d0808e334e9b6b695bf864b861bdfa",
            image: "c7c2837a0b341d37383d6a9d8f8986f500db7bf9",
            name: "Deuterium-Booster Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.deuteriumBooster_silver_7days]: {
            name: "Deuterium-Booster Silber (7 Tage)",
            image: "7d3064415ec1a60100db024471fb0c1fa8ab3726",
            smallImage: "d5c2ed6852d80e61359aef62171ec7c932fc3bd7",
            hash: H.deuteriumBooster_silver_7days,
            grade: W.silver
        },
        [H.deuteriumBooster_silver_30days]: {
            name: "Deuterium-Booster Silber (30 Tage)",
            image: "7c48195115d4b4c97ac5b651b0cd766463631b7a",
            smallImage: "14a51990fe394912463be7a591b8c3fd41a47aad",
            hash: H.deuteriumBooster_silver_30days,
            grade: W.silver
        },
        [H.deuteriumBooster_silver_90days]: {
            name: "Deuterium-Booster Silber (90 Tage)",
            image: "c7850b988587f08689f6d2d8e579bfde146525dd",
            smallImage: "b4c6a0e05891b6bfd9509bd92b6653d61fdae8e5",
            hash: H.deuteriumBooster_silver_90days,
            grade: W.silver
        },
        [H.deuteriumBooster_gold_7days]: {
            name: "Deuterium-Booster Gold (7 Tage)",
            image: "d52a66ed7b32cf220746cc3618a885876fce520e",
            smallImage: "db408084e3b2b7b0e1fe13d9f234d2ebd76f11c5",
            hash: H.deuteriumBooster_gold_7days,
            grade: W.gold
        },
        [H.deuteriumBooster_gold_30days]: {
            name: "Deuterium-Booster Gold (30 Tage)",
            image: "b5d2db0f5428b76ce91a51daea5959426053e973",
            smallImage: "9f8eab23fd888c7d3c5a07e0d250a66f017ecec7",
            hash: H.deuteriumBooster_gold_30days,
            grade: W.gold
        },
        [H.deuteriumBooster_gold_90days]: {
            name: "Deuterium-Booster Gold (90 Tage)",
            image: "b4abecddc518baa61d2f2004687cfbd89d34e7c7",
            smallImage: "4c7de7803df3ccb01d546ebce9e71379b1c49719",
            hash: H.deuteriumBooster_gold_90days,
            grade: W.gold
        },
        [H.deuteriumBooster_platinum_7days]: {
            name: "Deuterium-Booster Platin (7 Tage)",
            image: "2d1d4247ba12a3185bfd423023b7b551cf841ac3",
            smallImage: "7a10926f00a92b563713ade10f89777a98efd96c",
            hash: H.deuteriumBooster_platinum_7days,
            grade: W.platinum
        },
        [H.deuteriumBooster_platinum_30days]: {
            name: "Deuterium-Booster Platin (30 Tage)",
            image: "8245a9d21fb27088b25d48ae024e9382fcea1448",
            smallImage: "d9b86d155a459c658cb7bfca594ce4b48e24546b",
            hash: H.deuteriumBooster_platinum_30days,
            grade: W.platinum
        },
        [H.deuteriumBooster_platinum_90days]: {
            name: "Deuterium-Booster Platin (90 Tage)",
            image: "55a877e91716da736ccec66817e611a61c9a1e4a",
            smallImage: "55966a0911221acfc9b7a88791a2846f659a1e29",
            hash: H.deuteriumBooster_platinum_90days,
            grade: W.platinum
        },
        [H.energyBooster_bronze_7days]: {
            name: "Energie-Booster Bronze (7 Tage)",
            image: "daba686ad7f01a5d1e8b28bd13a1a9d1b8efe19c",
            smallImage: "a020705ab782f54a75244eefaee69019d4f25abb",
            hash: H.energyBooster_bronze_7days,
            grade: W.bronze
        },
        [H.energyBooster_silver_7days]: {
            name: "Energie-Booster Silber (7 Tage)",
            image: "78277dabf424cfe6d902fcb67c10d7a81686a51f",
            smallImage: "162edd06c200f8eb655f31e5c6b98c89fabd7f82",
            hash: H.energyBooster_silver_7days,
            grade: W.silver
        },
        [H.energyBooster_silver_30days]: {
            name: "Energie-Booster Silber (30 Tage)",
            image: "009ba047272acf73dfacca91dbef8e9c3b8d5a29",
            smallImage: "24e7e9df03218996c2bc8fd7629bce7bb735e083",
            hash: H.energyBooster_silver_30days,
            grade: W.silver
        },
        [H.energyBooster_silver_90days]: {
            name: "Energie-Booster Silber (90 Tage)",
            image: "0b9e7bcf137a106982345e37a33127400e201ffa",
            smallImage: "3f1c1c7bec997542f706afab4e3e31e89473875a",
            hash: H.energyBooster_silver_90days,
            grade: W.silver
        },
        [H.energyBooster_gold_7days]: {
            name: "Energie-Booster Gold (7 Tage)",
            image: "8c59dc4096d4cbddfc83a3a29ed6a64fa4696388",
            smallImage: "a1fd30dc5e5a3d0c68bb0116a45e1303ae8d3d70",
            hash: H.energyBooster_gold_7days,
            grade: W.gold
        },
        [H.energyBooster_gold_30days]: {
            name: "Energie-Booster Gold (30 Tage)",
            image: "76bc563f528108c6d65b8f3a75789d929e2eae2b",
            smallImage: "067d550b6153abc635b3c1dc5455ce2b75957758",
            hash: H.energyBooster_gold_30days,
            grade: W.gold
        },
        [H.energyBooster_gold_90days]: {
            name: "Energie-Booster Gold (90 Tage)",
            image: "e7153f5de2c83321c908c2c3fcb76fb874547b5d",
            smallImage: "ad67e4e7cc75c80a9d4e4424e2e44808312d1bbf",
            hash: H.energyBooster_gold_90days,
            grade: W.gold
        },
        [H.energyBooster_platinum_7days]: {
            name: "Energie-Booster Platin (7 Tage)",
            image: "a09b4c480b8b6971d73cc6d5102e4c2d217f51aa",
            smallImage: "253e0610c53379ce1c99410b23be2d49ee869d45",
            hash: H.energyBooster_platinum_7days,
            grade: W.platinum
        },
        [H.energyBooster_platinum_30days]: {
            name: "Energie-Booster Platin (30 Tage)",
            image: "9d13f9cd483fe22e01f33ada7511677fa8556e4e",
            smallImage: "9acaa2896f0e6750d121d4b2263dc772dd36ad60",
            hash: H.energyBooster_platinum_30days,
            grade: W.platinum
        },
        [H.energyBooster_platinum_90days]: {
            name: "Energie-Booster Platin (90 Tage)",
            image: "b1013d0e9eea34419d4b2acd05c4adcd15868417",
            smallImage: "bcf756fab39cd83c5975c9aa7dfbc087ec0dbb3b",
            hash: H.energyBooster_platinum_90days,
            grade: W.platinum
        },
        [H.moonFields_bronze]: {
            name: "Mondfelder Bronze",
            image: "fc59d4cb4bb28d6b9f43a8dd8bdd8ff9bb36674c",
            smallImage: "5676f99ae9818560720d97d0061fd480ca632837",
            hash: H.moonFields_bronze,
            grade: W.bronze
        },
        [H.moonFields_silver]: {
            name: "Mondfelder Silber",
            image: "f3c070b68fcc9a9fb5189056cfcbc657daafe34e",
            smallImage: "61534566b7942eb2669163cc26232bd449b3f8f0",
            hash: H.moonFields_silver,
            grade: W.silver
        },
        [H.moonFields_gold]: {
            name: "Mondfelder Gold",
            image: "5dbf1cc479110bc65469477c127b81870e4af9a2",
            smallImage: "993278c3354e17af9e24a4b681770552518b27a6",
            hash: H.moonFields_gold,
            grade: W.gold
        },
        [H.moonFields_platinum]: {
            name: "Mondfelder Platin",
            image: "d25f5ba50e9b154aba44bd5616019450b9165b4a",
            smallImage: "69e30e56b80972e492b9becda4ef429724e9913f",
            hash: H.moonFields_platinum,
            grade: W.platinum
        },
        [H.moonShot_bronze]: {
            name: "M.O.O.N.S. Bronze",
            image: "261509b47bbb630462def327128eefbb8344ea86",
            smallImage: "a0dd8b12aa51f3f59b4897bd5f56ad3c999a69db",
            hash: H.moonShot_bronze,
            grade: W.bronze
        },
        [H.moonShot_silver]: {
            name: "M.O.O.N.S. Silber",
            image: "13ac941d1254701e2ea11a7f401ac8dd0a6a3760",
            smallImage: "5fcb68729c6ec78b05d7c20e6d09a9fe41dba537",
            hash: H.moonShot_silver,
            grade: W.silver
        },
        [H.moonShot_gold]: {
            name: "M.O.O.N.S. Gold",
            image: "ea9cc6187220bd33632353fca79bbabf3f9cb0be",
            smallImage: "35cba6d3db1f6e55e1d74f7ef7510e84c00d01b3",
            hash: H.moonShot_gold,
            grade: W.gold
        },
        [H.planetFields_bronze]: {
            name: "Planetenfelder Bronze",
            image: "34b21de1e58cdcfe271ac19798c6a877dfd7bc16",
            smallImage: "ed1fc6b04d67c9e6058018c76f5ed3f325a0e1f1",
            hash: H.planetFields_bronze,
            grade: W.bronze
        },
        [H.planetFields_silver]: {
            name: "Planetenfelder Silber",
            image: "67c8a380625953698ae109c3af85075419c8fe36",
            smallImage: "6f2193f9f8714cdf9f15b6cdfed791fd8fc1de0a",
            hash: H.planetFields_silver,
            grade: W.silver
        },
        [H.planetFields_gold]: {
            name: "Planetenfelder Gold",
            image: "ddc59021e1e5cec24be946c7f2dcc55721a540fa",
            smallImage: "ea8aa572c703894eba463a0961065fabafcac334",
            hash: H.planetFields_gold,
            grade: W.gold
        },
        [H.planetFields_platinum]: {
            name: "Planetenfelder Platin",
            image: "9771e15c04acfadc55cbd513efc8235ccfe5205d",
            smallImage: "180da4a7942369943d5a7ef8ce155276ff66b64f",
            hash: H.planetFields_platinum,
            grade: W.platinum
        },
        [H.resourcePackage_all]: {
            name: "Komplettes Ressourcenpaket",
            image: "18145145a76b71f151ba97b7c17891a5389ceeb5",
            smallImage: "baf833b54bdb312d955cbf323d810bc6b24578d0",
            hash: H.resourcePackage_all,
            grade: W.none
        },
        [H.resourcePackage_metal]: {
            name: "Metallpaket",
            image: "0bd67f2ea31a389bfd33629b4e611e9261597c81",
            smallImage: "4077be1c061371b031604a0212611965c363a0b2",
            hash: "859d82d16b83848f7365d21949b3e1e63c7841f",
            grade: W.none
        },
        [H.resourcePackage_crystal]: {
            name: "Kristallpaket",
            image: "c48c8ca23fb22d8860962109799a1f2e0285a64e",
            smallImage: "0b42850ea2014b8ace8db5b69bcee1475a881291",
            hash: H.resourcePackage_crystal,
            grade: W.none
        },
        [H.resourcePackage_deuterium]: {
            name: "Deuteriumpaket",
            image: "c7e79db86d95d22b033627c706cb47d9342f5ec1",
            smallImage: "d4971620d3a2605afaac00736793fd942cd3ad35",
            hash: H.resourcePackage_deuterium,
            grade: W.none
        },
        [H.kraken_bronze]: {
            hash: H.kraken_bronze,
            image: "98629d11293c9f2703592ed0314d99f320f45845",
            smallImage: "bc4e2315f7db4286ba72a424a32c920e78af8e27",
            name: "KRAKEN Bronze",
            grade: W.bronze
        },
        [H.kraken_silver]: {
            hash: H.kraken_silver,
            image: "1ee55efe00bb03743ca031a9eaa1374bb936d863",
            smallImage: "7dcc0cb51f4514a339847e7f9129c99457066b50",
            name: "KRAKEN Silber",
            grade: W.silver
        },
        [H.kraken_gold]: {
            hash: H.kraken_gold,
            image: "40a1644e104985a3e72da28b76069197128f9fb5",
            smallImage: "3e11d31fcf81e4c6eb48e74e2d434d5fa50e9c31",
            name: "KRAKEN Gold",
            grade: W.gold
        },
        [H.kraken_platinum]: {
            hash: H.kraken_platinum,
            image: "59d0d098bdffad7faa5e5b3d17dd7799188500de",
            smallImage: "7886511210aaf1c2ea23b66b5d0dbf003ac25db8",
            name: "KRAKEN Platin",
            grade: W.platinum
        },
        [H.detroid_bronze]: {
            hash: H.detroid_bronze,
            image: "56724c3a1dcae8036bb172f0be833a6f9a28bc27",
            smallImage: "610b867a8841d4a4c949d8a59719243580456452",
            name: "DETROID Bronze",
            grade: W.bronze
        },
        [H.detroid_silver]: {
            hash: H.detroid_silver,
            image: "d0b8fb3d307b815b3182f3872e8eab654fe677df",
            smallImage: "8b60b23f428ed54bad7f81295b4c303fd1defbe4",
            name: "DETROID Silber",
            grade: W.silver
        },
        [H.detroid_gold]: {
            hash: H.detroid_gold,
            image: "55d4b1750985e4843023d7d0acd2b9bafb15f0b7",
            smallImage: "f46e7c8bdd1ea9bed4f0cb998199c478762a18a7",
            name: "DETROID Gold",
            grade: W.gold
        },
        [H.detroid_platinum]: {
            hash: H.detroid_platinum,
            image: "5fe7fc5e764286b3f588ef488df593235671a661",
            smallImage: "9f6cdd9c0bfc9df332318e9e7602db5169726c54",
            name: "DETROID Platin",
            grade: W.platinum
        },
        [H.newtron_bronze]: {
            hash: H.newtron_bronze,
            image: "4bc4327a3fd508b5da84267e2cfd58d47f9e4dcb",
            smallImage: "2a974711651e1b38cb8d840ccc15259c49726b75",
            name: "NEWTRON Bronze",
            grade: W.bronze
        },
        [H.newtron_silver]: {
            hash: H.newtron_silver,
            image: "a92734028d1bf2e75c5c25ae134b4d298a5ca36e",
            smallImage: "2ca40705737c0bc51107bfca49643487c510ac4a",
            name: "NEWTRON Silber",
            grade: W.silver
        },
        [H.newtron_gold]: {
            hash: H.newtron_gold,
            image: "d949732b01a7f7f6d92e814f2de99479a324e1e3",
            smallImage: "014827f6d1d5b78b1edd0d4476db05639e7d9367",
            name: "NEWTRON Gold",
            grade: W.gold
        },
        [H.newtron_platinum]: {
            hash: H.newtron_platinum,
            image: "c533ada7cad2164f322748638236b38c02aeaea0",
            smallImage: "141b0c6fcb652b2c2a4c598e37a620f9172c7d32",
            name: "NEWTRON Platin",
            grade: W.platinum
        },
        [H.lifeformKraken_bronze]: {
            hash: H.lifeformKraken_bronze,
            image: "4834adbcab85f74ad1a2030e3eccc89f35c9cfbb",
            smallImage: "fe38c0ce79edcf0fa53a8a6aebd58d5d27d0e1fd",
            name: "KRAKEN Bronze (Lifeform)",
            grade: W.bronze
        },
        [H.lifeformKraken_silver]: {
            hash: H.lifeformKraken_silver,
            image: "27f5d8ceafc520bcc0f7071981aff62aaefa796b",
            smallImage: "fb0017c2f817bc4c9b94336c2b0d845e08fbe06b",
            name: "KRAKEN Silber (Lifeform)",
            grade: W.silver
        },
        [H.lifeformKraken_gold]: {
            hash: H.lifeformKraken_gold,
            image: "d3ed9dfe986ecba129b4a4580d1709acbc732139",
            smallImage: "b754fae952ba44a4ee0aea13d2d4bc99cd73b069",
            name: "KRAKEN Gold (Lifeform)",
            grade: W.gold
        },
        [H.lifeformKraken_platinum]: {
            hash: H.lifeformKraken_platinum,
            image: "27fc57078a3df32bc3db4db076e7040d20d1dcc3",
            smallImage: "94849b2f1461d41042096eb8ad536820731a4a5f",
            name: "KRAKEN Platin (Lifeform)",
            grade: W.platinum
        },
        [H.lifeformNewtron_bronze]: {
            hash: H.lifeformNewtron_bronze,
            image: "be56c3b36189b16830e07a625f182fe4ab75b878",
            smallImage: "014b7b201f1fc889f6c5da1757a60e0b759c5ec1",
            name: "NEWTRON Bronze (Lifeform)",
            grade: W.bronze
        },
        [H.lifeformNewtron_silver]: {
            hash: H.lifeformNewtron_silver,
            image: "d7ffe87869bafd8ec84c8d50774861d7c716985b",
            smallImage: "30c32146a7926d10b1be12cff6f19771836d0e46",
            name: "NEWTRON Silber (Lifeform)",
            grade: W.silver
        },
        [H.lifeformNewtron_gold]: {
            hash: H.lifeformNewtron_gold,
            image: "3fbe027e0579e94fe88d873857a28d22d6b2411b",
            smallImage: "5cd1c6979271dee76c1eb096a5ed940e2c1da705",
            name: "NEWTRON Gold (Lifeform)",
            grade: W.gold
        },
        [H.lifeformNewtron_platinum]: {
            hash: H.lifeformNewtron_platinum,
            image: "c8b583a18c98a93041ccc82269af5886e972403e",
            smallImage: "8b6043a1c79f378b5cef68439e40c1be387ade42",
            name: "NEWTRON Platin (Lifeform)",
            grade: W.platinum
        },
        [H.expeditionslots_bronze_7days]: {
            hash: H.expeditionslots_bronze_7days,
            image: "40224d1fb7b7d7a244b2f40d3cf281dcf484cfd3",
            smallImage: "0b8fc29be235051208ea31248a0861b2f89e3f4f",
            name: "Expeditionslots Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_bronze_30days]: {
            hash: H.expeditionslots_bronze_7days,
            image: "a59682857b7a632c4bef319f0ef79f0c3bdba5c9",
            smallImage: "a229f220ebffccbb9325817261b32fcbe5d38e80",
            name: "Expeditionslots Bronze (30 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_bronze_90days]: {
            hash: H.expeditionslots_bronze_90days,
            image: "dcd22251b799c72a98bf4c425166335165f95a9f",
            smallImage: "8d70a785cd10a9ecc7ba2523e434ad7e2f421dd4",
            name: "Expeditionslots Bronze (90 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_silver_7days]: {
            hash: H.expeditionslots_silver_7days,
            image: "dbaa137369a212345f0ab33e18f8bb2335f9bedf",
            smallImage: "7ce87a5a3875a7dd5e2a98cf5047cdbb9b1d6a41",
            name: "Expeditionslots Silber (7 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_silver_30days]: {
            hash: H.expeditionslots_silver_30days,
            image: "2f3ee731849024bfef85eb8c7389bb65e8f6be61",
            smallImage: "6d8d8b7a1b99bb14868646abfe8fab38d13451f5",
            name: "Expeditionslots Silber (30 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_silver_90days]: {
            hash: H.expeditionslots_silver_90days,
            image: "4d5123202c051020a7341d2ea3599b4869945319",
            smallImage: "5adfefb8220ab03007a0ada97b493a89ba97faae",
            name: "Expeditionslots Silber (90 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_gold_7days]: {
            hash: H.expeditionslots_gold_7days,
            image: "ea4ec7669692e5b91dde58fc5fa606b7e1f22578",
            smallImage: "641f4b83c91f51f7bb3b884d883e70776953fcef",
            name: "Expeditionslots Gold (7 Tage)",
            grade: W.gold
        },
        [H.expeditionslots_gold_30days]: {
            hash: H.expeditionslots_gold_30days,
            image: "1ba0e8436af518f0014af352af7d20c8d174fb53",
            smallImage: "ce43c48b7ef200236ce251a8c89f9214262deebe",
            name: "Expeditionslots Gold (30 Tage)",
            grade: W.gold
        },
        [H.expeditionslots_gold_90days]: {
            hash: H.expeditionslots_gold_7days,
            image: "aede22854d3e8e46cb93dad726ad2b7edf9d235f",
            smallImage: "db28835101052547db777287667853d0a465b207",
            name: "Expeditionslots Gold (90 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_bronze_7days]: {
            hash: H.fleetSlots_bronze_7days,
            image: "446d0d01503f8b845c3d3330c4dab673166570e1",
            smallImage: "0eb11ec1e956a5991eb4eba2bcdf3f4062362df2",
            name: "Flottenslots Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_bronze_30days]: {
            hash: H.fleetSlots_bronze_30days,
            image: "8ab6d921069f01d8cb843f4bc37f51e5cf0c4318",
            smallImage: "bec85c7b4868bdd5d634d50de17d8c17d56d40b5",
            name: "Flottenslots Bronze (30 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_bronze_90days]: {
            hash: H.fleetSlots_bronze_90days,
            image: "a61bbfc57d4b70abff2365005bbcaf918796d784",
            smallImage: "6e6c6061005786c1c2ccc16bf72488127adddda8",
            name: "Flottenslots Bronze (90 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_silver_7days]: {
            hash: H.fleetSlots_silver_7days,
            image: "d38f4e83f906ad747ec2601da836c0b11703e3b3",
            smallImage: "3e502c0a1f0462bd7e9589294934029f7f0af099",
            name: "Flottenslots Silber (7 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_silver_30days]: {
            hash: H.fleetSlots_silver_30days,
            image: "8a133b938e57285a3de891dd4b82b594d4e808a3",
            smallImage: "bd55a2e08d6cc320646bbaf420d05cdf243db312",
            name: "Flottenslots Silber (30 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_silver_90days]: {
            hash: H.fleetSlots_silver_90days,
            image: "f7fc4e566869a8661ac5ef4a75ef9bd5fa5024e1",
            smallImage: "48e9a782b39199d3bb9f614ebd5d4a3804656079",
            name: "Flottenslots Silber (90 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_gold_7days]: {
            hash: H.fleetSlots_gold_7days,
            image: "4db5665750dfb83bb958280ffd500c7105574068",
            smallImage: "94619b2c741bdc50c440147eefffd79ac5089b0e",
            name: "Flottenslots Gold (7 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_gold_30days]: {
            hash: H.fleetSlots_gold_30days,
            image: "2fa215f7fe22370b9fd83796dc6baa17aed3f75a",
            smallImage: "b11fd1374eb6ceac0a9c7788bb3d3d03afb35a12",
            name: "Flottenslots Gold (30 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_gold_90days]: {
            hash: H.fleetSlots_gold_90days,
            image: "fa17391a273844ee8e71d4625ce7381b458cf1ad",
            smallImage: "9e654ae49607c0ddcc87633bf7372b976fd7e183",
            name: "Flottenslots Gold (90 Tage)",
            grade: W.gold
        },
        [H.discoverer_pts]: {
            name: "Entdecker",
            image: "3ecbd5114c3b663aa1a1252fc03091eecc790f10",
            smallImage: "e9278159a8c40e2e9337ba3495f0b5af1e2c9d05",
            hash: H.discoverer,
            grade: W.none
        },
        [H.collector_pts]: {
            name: "Kollektor",
            image: "09726bf92556fc12b55ec5ee00516af0223b7713",
            smallImage: "90b2366b4c96638a1a8b419a1c9ad762147ef38a",
            hash: H.collector,
            grade: W.none
        },
        [H.general_pts]: {
            name: "General",
            image: "4b999ea0089c6358b5531635b37e280cfae62da2",
            smallImage: "3885fd784f5ccbda9f9a30040b1dffc98e204305",
            hash: H.general,
            grade: W.none
        },
        [H.researcher_pts]: {
            name: "Forscher",
            image: "55f7003a5cf07e52b38f11b81129ac5042dff4da",
            smallImage: "0fad76886bc161e860f8ffb04a1838ba21e377e6",
            hash: H.researcher,
            grade: W.none
        },
        [H.trader_pts]: {
            name: "Händler",
            image: "5df93e894bb92e987219fc9d669c9a276ceb5499",
            smallImage: "b52a99657970f97a8881f2493be63e3a58c8d49f",
            hash: H.trader,
            grade: W.none
        },
        [H.warrior_pts]: {
            name: "Krieger",
            image: "48ca2adbb95b37db83777b659cfc4042c179fece",
            smallImage: "a2d0a5aa06f932c7ecbd76906d44d4b46e338600",
            hash: H.warrior,
            grade: W.none
        },
        [H.metalBooster_bronze_30days_pts]: {
            name: "Metall-Booster Bronze (30 Tage)",
            image: "5d5f545b5c5969593c1bf4198da2664db75857b9",
            smallImage: "",
            hash: H.metalBooster_bronze_30days_pts,
            grade: W.bronze
        },
        [H.metalBooster_bronze_90days_pts]: {
            name: "Metall-Booster Bronze (90 Tage)",
            image: "8bd9c40b9aae821cd7a19b24e414bf437f81191e",
            smallImage: "",
            hash: H.metalBooster_bronze_90days_pts,
            grade: W.bronze
        },
        [H.metalBooster_silver_30days_pts]: {
            name: "Metall-Booster Silber (30 Tage)",
            image: "2bd0b5df51b77a3cb65d01568171cb991e047ac5",
            smallImage: "5e62926be58e94ebb28a231ecad87f8e852d0f6d",
            hash: H.metalBooster_silver_30days,
            grade: W.silver
        },
        [H.metalBooster_silver_90days_pts]: {
            name: "Metall-Booster Silber (90 Tage)",
            image: "6b4ea2ced99211b1b9f0b84fb8a312f0f053a366",
            smallImage: "2e4d16cdaec1ea8ba2af28c914bb80f4d0939ce3",
            hash: H.metalBooster_silver_90days,
            grade: W.silver
        },
        [H.metalBooster_gold_30days_pts]: {
            name: "Metall-Booster Gold (30 Tage)",
            image: "eacc8d23eef74f5dd4b91b99a654e0d63450fa07",
            smallImage: "9132f52e224e6ba87677e5ccc5cd1391320cf7d2",
            hash: H.metalBooster_gold_30days,
            grade: W.gold
        },
        [H.metalBooster_gold_90days_pts]: {
            name: "Metall-Booster Gold (90 Tage)",
            image: "b5ed0c10e3396c3cbab4dff2a778e2676f7b936a",
            smallImage: "a0cba1aa5de23e877b10b196f40855bafc91256c",
            hash: H.metalBooster_gold_90days,
            grade: W.gold
        },
        [H.metalBooster_platinum_7days_pts]: {
            name: "Metall-Booster Platin (7 Tage)",
            image: "34752e40512a574a74464006d326bd6aebecb1f1",
            smallImage: "b29918a7d1f313fd91d788c9c444dfbe996640ee",
            hash: H.metalBooster_platinum_7days,
            grade: W.platinum
        },
        [H.metalBooster_platinum_30days_pts]: {
            name: "Metall-Booster Platin (30 Tage)",
            image: "ff1ad1a6d5879cb0ea720199c9eb6518584f0922",
            smallImage: "ce3bb161706f1788c893b3196834d67102318866",
            hash: H.metalBooster_platinum_30days,
            grade: W.platinum
        },
        [H.metalBooster_platinum_90days_pts]: {
            name: "Metall-Booster Platin (90 Tage)",
            image: "ff96652e498d26f8d2621b0599808860f11ee31c",
            smallImage: "e17ff7930eb79c7207502348180a2b4a437474d4",
            hash: H.metalBooster_platinum_90days,
            grade: W.platinum
        },
        [H.crystalBooster_bronze_30days_pts]: {
            name: "Kristall-Booster Bronze (30 Tage)",
            image: "7d4c8923bc936f09fef244db74d25413372e2217",
            smallImage: "",
            hash: H.crystalBooster_bronze_30days_pts,
            grade: W.bronze
        },
        [H.crystalBooster_bronze_90days_pts]: {
            name: "Kristall-Booster Bronze (90 Tage)",
            image: "479a2800c485772418e620d3a356a96a3bd7fca4",
            smallImage: "",
            hash: H.crystalBooster_bronze_90days_pts,
            grade: W.bronze
        },
        [H.crystalBooster_silver_30days_pts]: {
            name: "Kristall-Booster Silber (30 Tage)",
            image: "4cb9628975e286b2cf4949ef4d216bccc1813a77",
            smallImage: "2746f4d2372da032f4daa294606ee88e5ca7a46a",
            hash: H.crystalBooster_silver_30days,
            grade: W.silver
        },
        [H.crystalBooster_silver_90days_pts]: {
            name: "Kristall-Booster Silber (90 Tage)",
            image: "23f7d50e917ed39c5b755b95786e8cf4c4141279",
            smallImage: "60a0fee6f82b2b4cec6928c1b052ac586f0b2a0d",
            hash: H.crystalBooster_silver_90days,
            grade: W.silver
        },
        [H.crystalBooster_gold_30days_pts]: {
            name: "Kristall-Booster Gold (30 Tage)",
            image: "5b84505319073e6b71900cfd059657750317ae23",
            smallImage: "627957046e2d5315bf13104e258ca0ea37ca7489",
            hash: H.crystalBooster_gold_30days,
            grade: W.gold
        },
        [H.crystalBooster_gold_90days_pts]: {
            name: "Kristall-Booster Gold (90 Tage)",
            image: "efdf5966695a147aaa26442f811346e8b749ec6d",
            smallImage: "11d508fc74f136dde21fe9506cad6db3d43149d5",
            hash: H.crystalBooster_gold_90days,
            grade: W.gold
        },
        [H.crystalBooster_platinum_7days_pts]: {
            name: "Kristall-Booster Platin (7 Tage)",
            image: "9952055cf47d116eedeec429a469b61abdf6ce72",
            smallImage: "5650071c78c9fcf9681fc2c780694de96de29c1b",
            hash: H.crystalBooster_platinum_7days,
            grade: W.platinum
        },
        [H.crystalBooster_platinum_30days_pts]: {
            name: "Kristall-Booster Platin (30 Tage)",
            image: "d4e203516d95ae28081a3d985818e2df5a2475d4",
            smallImage: "d3f3321fcd999f657e9dc4ccf9cb34731524123f",
            hash: H.crystalBooster_platinum_30days,
            grade: W.platinum
        },
        [H.crystalBooster_platinum_90days_pts]: {
            name: "Kristall-Booster Platin (90 Tage)",
            image: "5a16b583800c72b8eef5585fd5aa0bbd8e5c2c0f",
            smallImage: "5e33a2cfb73e9054540c5172f66b770b28765475",
            hash: H.crystalBooster_platinum_90days,
            grade: W.platinum
        },
        [H.deuteriumBooster_bronze_30days_pts]: {
            name: "Deuterium-Booster Bronze (30 Tage)",
            image: "5416e185557bbd18f832feafde73fd46f3573239",
            smallImage: "",
            hash: H.deuteriumBooster_bronze_30days_pts,
            grade: W.bronze
        },
        [H.deuteriumBooster_bronze_90days_pts]: {
            name: "Deuterium-Booster Bronze (90 Tage)",
            image: "2bd548012a7bea6bc1227f9c904754de1cfaf0bc",
            smallImage: "",
            hash: H.deuteriumBooster_bronze_90days_pts,
            grade: W.bronze
        },
        [H.deuteriumBooster_silver_30days_pts]: {
            name: "Deuterium-Booster Silber (30 Tage)",
            image: "7c48195115d4b4c97ac5b651b0cd766463631b7a",
            smallImage: "14a51990fe394912463be7a591b8c3fd41a47aad",
            hash: H.deuteriumBooster_silver_30days,
            grade: W.silver
        },
        [H.deuteriumBooster_silver_90days_pts]: {
            name: "Deuterium-Booster Silber (90 Tage)",
            image: "c7850b988587f08689f6d2d8e579bfde146525dd",
            smallImage: "b4c6a0e05891b6bfd9509bd92b6653d61fdae8e5",
            hash: H.deuteriumBooster_silver_90days,
            grade: W.silver
        },
        [H.deuteriumBooster_gold_30days_pts]: {
            name: "Deuterium-Booster Gold (30 Tage)",
            image: "b5d2db0f5428b76ce91a51daea5959426053e973",
            smallImage: "9f8eab23fd888c7d3c5a07e0d250a66f017ecec7",
            hash: H.deuteriumBooster_gold_30days,
            grade: W.gold
        },
        [H.deuteriumBooster_gold_90days_pts]: {
            name: "Deuterium-Booster Gold (90 Tage)",
            image: "b4abecddc518baa61d2f2004687cfbd89d34e7c7",
            smallImage: "4c7de7803df3ccb01d546ebce9e71379b1c49719",
            hash: H.deuteriumBooster_gold_90days,
            grade: W.gold
        },
        [H.deuteriumBooster_platinum_7days_pts]: {
            name: "Deuterium-Booster Platin (7 Tage)",
            image: "2d1d4247ba12a3185bfd423023b7b551cf841ac3",
            smallImage: "7a10926f00a92b563713ade10f89777a98efd96c",
            hash: H.deuteriumBooster_platinum_7days,
            grade: W.platinum
        },
        [H.deuteriumBooster_platinum_30days_pts]: {
            name: "Deuterium-Booster Platin (30 Tage)",
            image: "8245a9d21fb27088b25d48ae024e9382fcea1448",
            smallImage: "d9b86d155a459c658cb7bfca594ce4b48e24546b",
            hash: H.deuteriumBooster_platinum_30days,
            grade: W.platinum
        },
        [H.deuteriumBooster_platinum_90days_pts]: {
            name: "Deuterium-Booster Platin (90 Tage)",
            image: "55a877e91716da736ccec66817e611a61c9a1e4a",
            smallImage: "55966a0911221acfc9b7a88791a2846f659a1e29",
            hash: H.deuteriumBooster_platinum_90days,
            grade: W.platinum
        },
        [H.energyBooster_bronze_30days_pts]: {
            hash: H.energyBooster_bronze_30days_pts,
            image: "2be67177003ef1d6b19195e100fb22d3c2ff5891",
            smallImage: "",
            name: "Energie-Booster Bronze (30 Tage)",
            grade: W.bronze
        },
        [H.energyBooster_bronze_90days_pts]: {
            hash: H.energyBooster_bronze_90days_pts,
            image: "abf12608d09c541979620e02a82bcd740451dd8f",
            smallImage: "",
            name: "Energie-Booster Bronze (90 Tage)",
            grade: W.bronze
        },
        [H.energyBooster_silver_7days_pts]: {
            name: "Energie-Booster Silber (7 Tage)",
            image: "78277dabf424cfe6d902fcb67c10d7a81686a51f",
            smallImage: "162edd06c200f8eb655f31e5c6b98c89fabd7f82",
            hash: H.energyBooster_silver_7days,
            grade: W.silver
        },
        [H.energyBooster_silver_30days_pts]: {
            name: "Energie-Booster Silber (30 Tage)",
            image: "009ba047272acf73dfacca91dbef8e9c3b8d5a29",
            smallImage: "24e7e9df03218996c2bc8fd7629bce7bb735e083",
            hash: H.energyBooster_silver_30days,
            grade: W.silver
        },
        [H.energyBooster_silver_90days_pts]: {
            name: "Energie-Booster Silber (90 Tage)",
            image: "0b9e7bcf137a106982345e37a33127400e201ffa",
            smallImage: "3f1c1c7bec997542f706afab4e3e31e89473875a",
            hash: H.energyBooster_silver_90days,
            grade: W.silver
        },
        [H.energyBooster_gold_7days_pts]: {
            name: "Energie-Booster Gold (7 Tage)",
            image: "8c59dc4096d4cbddfc83a3a29ed6a64fa4696388",
            smallImage: "a1fd30dc5e5a3d0c68bb0116a45e1303ae8d3d70",
            hash: H.energyBooster_gold_7days,
            grade: W.gold
        },
        [H.energyBooster_gold_30days_pts]: {
            name: "Energie-Booster Gold (30 Tage)",
            image: "76bc563f528108c6d65b8f3a75789d929e2eae2b",
            smallImage: "067d550b6153abc635b3c1dc5455ce2b75957758",
            hash: H.energyBooster_gold_30days,
            grade: W.gold
        },
        [H.energyBooster_gold_90days_pts]: {
            name: "Energie-Booster Gold (90 Tage)",
            image: "e7153f5de2c83321c908c2c3fcb76fb874547b5d",
            smallImage: "ad67e4e7cc75c80a9d4e4424e2e44808312d1bbf",
            hash: H.energyBooster_gold_90days,
            grade: W.gold
        },
        [H.energyBooster_platinum_7days_pts]: {
            name: "Energie-Booster Platin (7 Tage)",
            image: "a09b4c480b8b6971d73cc6d5102e4c2d217f51aa",
            smallImage: "253e0610c53379ce1c99410b23be2d49ee869d45",
            hash: H.energyBooster_platinum_7days,
            grade: W.platinum
        },
        [H.energyBooster_platinum_30days_pts]: {
            name: "Energie-Booster Platin (30 Tage)",
            image: "9d13f9cd483fe22e01f33ada7511677fa8556e4e",
            smallImage: "9acaa2896f0e6750d121d4b2263dc772dd36ad60",
            hash: H.energyBooster_platinum_30days,
            grade: W.platinum
        },
        [H.energyBooster_platinum_90days_pts]: {
            name: "Energie-Booster Platin (90 Tage)",
            image: "b1013d0e9eea34419d4b2acd05c4adcd15868417",
            smallImage: "bcf756fab39cd83c5975c9aa7dfbc087ec0dbb3b",
            hash: H.energyBooster_platinum_90days,
            grade: W.platinum
        },
        [H.resourcePackage_all_pts]: {
            name: "Komplettes Ressourcenpaket",
            image: "18145145a76b71f151ba97b7c17891a5389ceeb5",
            smallImage: "baf833b54bdb312d955cbf323d810bc6b24578d0",
            hash: H.resourcePackage_all,
            grade: W.none
        },
        [H.resourcePackage_metal_pts]: {
            name: "Metallpaket",
            image: "0bd67f2ea31a389bfd33629b4e611e9261597c81",
            smallImage: "4077be1c061371b031604a0212611965c363a0b2",
            hash: "859d82d16b83848f7365d21949b3e1e63c7841f",
            grade: W.none
        },
        [H.resourcePackage_crystal_pts]: {
            name: "Kristallpaket",
            image: "c48c8ca23fb22d8860962109799a1f2e0285a64e",
            smallImage: "0b42850ea2014b8ace8db5b69bcee1475a881291",
            hash: H.resourcePackage_crystal,
            grade: W.none
        },
        [H.resourcePackage_deuterium_pts]: {
            name: "Deuteriumpaket",
            image: "c7e79db86d95d22b033627c706cb47d9342f5ec1",
            smallImage: "d4971620d3a2605afaac00736793fd942cd3ad35",
            hash: H.resourcePackage_deuterium,
            grade: W.none
        },
        [H.detroid_mechaShipyard_bronze_pts]: {
            hash: H.detroid_mechaShipyard_bronze_pts,
            image: "56724c3a1dcae8036bb172f0be833a6f9a28bc27",
            smallImage: "610b867a8841d4a4c949d8a59719243580456452",
            name: "DETROID Bronze (Mecha-Shipyard)",
            grade: W.bronze
        },
        [H.lifeformKraken_bronze_pts]: {
            hash: H.lifeformKraken_bronze_pts,
            image: "4834adbcab85f74ad1a2030e3eccc89f35c9cfbb",
            smallImage: "fe38c0ce79edcf0fa53a8a6aebd58d5d27d0e1fd",
            name: "KRAKEN Bronze (Lifeform)",
            grade: W.bronze
        },
        [H.lifeformKraken_silver_pts]: {
            hash: H.lifeformKraken_silver_pts,
            image: "27f5d8ceafc520bcc0f7071981aff62aaefa796b",
            smallImage: "fb0017c2f817bc4c9b94336c2b0d845e08fbe06b",
            name: "KRAKEN Silber (Lifeform)",
            grade: W.silver
        },
        [H.lifeformKraken_gold_pts]: {
            hash: H.lifeformKraken_gold_pts,
            image: "d3ed9dfe986ecba129b4a4580d1709acbc732139",
            smallImage: "b754fae952ba44a4ee0aea13d2d4bc99cd73b069",
            name: "KRAKEN Gold (Lifeform)",
            grade: W.gold
        },
        [H.lifeformKraken_platinum_pts]: {
            hash: H.lifeformKraken_platinum_pts,
            image: "27fc57078a3df32bc3db4db076e7040d20d1dcc3",
            smallImage: "94849b2f1461d41042096eb8ad536820731a4a5f",
            name: "KRAKEN Platin (Lifeform)",
            grade: W.platinum
        },
        [H.lifeformNewtron_bronze_pts]: {
            hash: H.lifeformNewtron_bronze_pts,
            image: "be56c3b36189b16830e07a625f182fe4ab75b878",
            smallImage: "014b7b201f1fc889f6c5da1757a60e0b759c5ec1",
            name: "NEWTRON Bronze (Lifeform)",
            grade: W.bronze
        },
        [H.lifeformNewtron_silver_pts]: {
            hash: H.lifeformNewtron_silver_pts,
            image: "d7ffe87869bafd8ec84c8d50774861d7c716985b",
            smallImage: "30c32146a7926d10b1be12cff6f19771836d0e46",
            name: "NEWTRON Silber (Lifeform)",
            grade: W.silver
        },
        [H.lifeformNewtron_gold_pts]: {
            hash: H.lifeformNewtron_gold_pts,
            image: "3fbe027e0579e94fe88d873857a28d22d6b2411b",
            smallImage: "5cd1c6979271dee76c1eb096a5ed940e2c1da705",
            name: "NEWTRON Gold (Lifeform)",
            grade: W.gold
        },
        [H.lifeformNewtron_platinum_pts]: {
            hash: H.lifeformNewtron_platinum_pts,
            image: "c8b583a18c98a93041ccc82269af5886e972403e",
            smallImage: "8b6043a1c79f378b5cef68439e40c1be387ade42",
            name: "NEWTRON Platin (Lifeform)",
            grade: W.platinum
        },
        [H.expeditionslots_bronze_7days_pts]: {
            hash: H.expeditionslots_bronze_7days,
            image: "40224d1fb7b7d7a244b2f40d3cf281dcf484cfd3",
            smallImage: "0b8fc29be235051208ea31248a0861b2f89e3f4f",
            name: "Expeditionslots Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_bronze_30days_pts]: {
            hash: H.expeditionslots_bronze_7days,
            image: "a59682857b7a632c4bef319f0ef79f0c3bdba5c9",
            smallImage: "a229f220ebffccbb9325817261b32fcbe5d38e80",
            name: "Expeditionslots Bronze (30 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_bronze_90days_pts]: {
            hash: H.expeditionslots_bronze_90days,
            image: "dcd22251b799c72a98bf4c425166335165f95a9f",
            smallImage: "8d70a785cd10a9ecc7ba2523e434ad7e2f421dd4",
            name: "Expeditionslots Bronze (90 Tage)",
            grade: W.bronze
        },
        [H.expeditionslots_silver_7days_pts]: {
            hash: H.expeditionslots_silver_7days,
            image: "dbaa137369a212345f0ab33e18f8bb2335f9bedf",
            smallImage: "7ce87a5a3875a7dd5e2a98cf5047cdbb9b1d6a41",
            name: "Expeditionslots Silber (7 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_silver_30days_pts]: {
            hash: H.expeditionslots_silver_30days,
            image: "2f3ee731849024bfef85eb8c7389bb65e8f6be61",
            smallImage: "6d8d8b7a1b99bb14868646abfe8fab38d13451f5",
            name: "Expeditionslots Silber (30 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_silver_90days_pts]: {
            hash: H.expeditionslots_silver_90days,
            image: "4d5123202c051020a7341d2ea3599b4869945319",
            smallImage: "5adfefb8220ab03007a0ada97b493a89ba97faae",
            name: "Expeditionslots Silber (90 Tage)",
            grade: W.silver
        },
        [H.expeditionslots_gold_7days_pts]: {
            hash: H.expeditionslots_gold_7days,
            image: "ea4ec7669692e5b91dde58fc5fa606b7e1f22578",
            smallImage: "641f4b83c91f51f7bb3b884d883e70776953fcef",
            name: "Expeditionslots Gold (7 Tage)",
            grade: W.gold
        },
        [H.expeditionslots_gold_30days_pts]: {
            hash: H.expeditionslots_gold_30days,
            image: "1ba0e8436af518f0014af352af7d20c8d174fb53",
            smallImage: "ce43c48b7ef200236ce251a8c89f9214262deebe",
            name: "Expeditionslots Gold (30 Tage)",
            grade: W.gold
        },
        [H.expeditionslots_gold_90days_pts]: {
            hash: H.expeditionslots_gold_7days,
            image: "aede22854d3e8e46cb93dad726ad2b7edf9d235f",
            smallImage: "db28835101052547db777287667853d0a465b207",
            name: "Expeditionslots Gold (90 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_bronze_7days_pts]: {
            hash: H.fleetSlots_bronze_7days,
            image: "446d0d01503f8b845c3d3330c4dab673166570e1",
            smallImage: "0eb11ec1e956a5991eb4eba2bcdf3f4062362df2",
            name: "Flottenslots Bronze (7 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_bronze_30days_pts]: {
            hash: H.fleetSlots_bronze_30days,
            image: "8ab6d921069f01d8cb843f4bc37f51e5cf0c4318",
            smallImage: "bec85c7b4868bdd5d634d50de17d8c17d56d40b5",
            name: "Flottenslots Bronze (30 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_bronze_90days_pts]: {
            hash: H.fleetSlots_bronze_90days,
            image: "a61bbfc57d4b70abff2365005bbcaf918796d784",
            smallImage: "6e6c6061005786c1c2ccc16bf72488127adddda8",
            name: "Flottenslots Bronze (90 Tage)",
            grade: W.bronze
        },
        [H.fleetSlots_silver_7days_pts]: {
            hash: H.fleetSlots_silver_7days,
            image: "d38f4e83f906ad747ec2601da836c0b11703e3b3",
            smallImage: "3e502c0a1f0462bd7e9589294934029f7f0af099",
            name: "Flottenslots Silber (7 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_silver_30days_pts]: {
            hash: H.fleetSlots_silver_30days,
            image: "8a133b938e57285a3de891dd4b82b594d4e808a3",
            smallImage: "bd55a2e08d6cc320646bbaf420d05cdf243db312",
            name: "Flottenslots Silber (30 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_silver_90days_pts]: {
            hash: H.fleetSlots_silver_90days,
            image: "f7fc4e566869a8661ac5ef4a75ef9bd5fa5024e1",
            smallImage: "48e9a782b39199d3bb9f614ebd5d4a3804656079",
            name: "Flottenslots Silber (90 Tage)",
            grade: W.silver
        },
        [H.fleetSlots_gold_7days_pts]: {
            hash: H.fleetSlots_gold_7days,
            image: "4db5665750dfb83bb958280ffd500c7105574068",
            smallImage: "94619b2c741bdc50c440147eefffd79ac5089b0e",
            name: "Flottenslots Gold (7 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_gold_30days_pts]: {
            hash: H.fleetSlots_gold_30days,
            image: "2fa215f7fe22370b9fd83796dc6baa17aed3f75a",
            smallImage: "b11fd1374eb6ceac0a9c7788bb3d3d03afb35a12",
            name: "Flottenslots Gold (30 Tage)",
            grade: W.gold
        },
        [H.fleetSlots_gold_90days_pts]: {
            hash: H.fleetSlots_gold_90days,
            image: "fa17391a273844ee8e71d4625ce7381b458cf1ad",
            smallImage: "9e654ae49607c0ddcc87633bf7372b976fd7e183",
            name: "Flottenslots Gold (90 Tage)",
            grade: W.gold
        },
        [H.migrationItem]: {
            hash: H.migrationItem,
            image: "16bf2c62de38daaf128fd1329efe976b9788c011",
            smallImage: "",
            name: "Migrations-Item",
            grade: W.none
        },
        [H.migrationItem_pts]: {
            hash: H.migrationItem_pts,
            image: "16bf2c62de38daaf128fd1329efe976b9788c011",
            smallImage: "",
            name: "Migrations-Item",
            grade: W.none
        },
        [H.shortenTime_buildings]: {
            name: "Bauverkürzer Gebäude",
            image: "22bba1f3ceab83dc24eb944d4f2aa8207390ab7c",
            smallImage: "22bba1f3ceab83dc24eb944d4f2aa8207390ab7c",
            hash: H.shortenTime_buildings,
            grade: W.none
        },
        [H.shortenTime_research]: {
            name: "Bauverkürzer Forschung",
            image: "959ce485c41b8713fb9c281fcd5d737331e0341c",
            smallImage: "959ce485c41b8713fb9c281fcd5d737331e0341c",
            hash: H.shortenTime_research,
            grade: W.none
        },
        [H.shortenTime_shipyard]: {
            name: "Bauverkürzer Schiffe",
            image: "56d76263b87b56716214c91348602908b1f46fbd",
            smallImage: "56d76263b87b56716214c91348602908b1f46fbd",
            hash: H.shortenTime_shipyard,
            grade: W.none
        },
        [H.shortenTime_lifeformBuildings]: {
            name: "Bauverkürzer Lebensformgebäude",
            image: "",
            smallImage: "",
            hash: H.shortenTime_lifeformBuildings,
            grade: W.none
        },
        [H.shortenTime_lifeformResearch]: {
            name: "Bauverkürzer Lebensformforschung",
            image: "",
            smallImage: "",
            hash: H.shortenTime_lifeformResearch,
            grade: W.none
        },
        [H.officer_commander]: {
            name: H.officer_commander,
            hash: H.officer_commander,
            grade: W.none,
            image: "",
            smallImage: ""
        },
        [H.officer_admiral]: {
            name: H.officer_admiral,
            hash: H.officer_admiral,
            grade: W.none,
            image: "",
            smallImage: ""
        },
        [H.officer_engineer]: {
            name: H.officer_engineer,
            hash: H.officer_engineer,
            grade: W.none,
            image: "",
            smallImage: ""
        },
        [H.officer_geologist]: {
            name: H.officer_geologist,
            hash: H.officer_geologist,
            grade: W.none,
            image: "",
            smallImage: ""
        },
        [H.officer_technocrat]: {
            name: H.officer_technocrat,
            hash: H.officer_technocrat,
            grade: W.none,
            image: "",
            smallImage: ""
        }
    };

    function V(e, a) {
        return {
            metal: e.metal * a,
            crystal: e.crystal * a,
            deuterium: e.deuterium * a,
            energy: e.energy * a
        }
    }
    class X {}
    const Q = new class extends X {
            get type() {
                return O.battlecruiser
            }
            get cost() {
                return {
                    metal: 3e4,
                    crystal: 4e4,
                    deuterium: 15e3,
                    energy: 0
                }
            }
            baseHull() {
                return 7e4
            }
            baseShield() {
                return 400
            }
            baseDamage() {
                return 700
            }
            baseSpeed() {
                return 1e4
            }
            baseCargoCapacity() {
                return 750
            }
            fuelConsumption() {
                return 250
            }
        },
        Y = new class extends X {
            get type() {
                return O.battleship
            }
            get cost() {
                return {
                    metal: 45e3,
                    crystal: 15e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 6e4
            }
            baseShield() {
                return 200
            }
            baseDamage() {
                return 1e3
            }
            baseSpeed() {
                return 1e4
            }
            baseCargoCapacity() {
                return 1500
            }
            fuelConsumption() {
                return 500
            }
        },
        Z = new class extends X {
            get type() {
                return O.bomber
            }
            get cost() {
                return {
                    metal: 5e4,
                    crystal: 25e3,
                    deuterium: 15e3,
                    energy: 0
                }
            }
            baseHull() {
                return 75e3
            }
            baseShield() {
                return 500
            }
            baseDamage() {
                return 1e3
            }
            baseSpeed() {
                return 5e3
            }
            baseCargoCapacity() {
                return 500
            }
            fuelConsumption() {
                return 700
            }
        },
        ee = new class extends X {
            get type() {
                return O.colonyShip
            }
            get cost() {
                return {
                    metal: 1e4,
                    crystal: 2e4,
                    deuterium: 1e4,
                    energy: 0
                }
            }
            baseHull() {
                return 3e4
            }
            baseShield() {
                return 100
            }
            baseDamage() {
                return 50
            }
            baseSpeed() {
                return 2500
            }
            baseCargoCapacity() {
                return 7500
            }
            fuelConsumption() {
                return 1e3
            }
        },
        ae = new class extends X {
            get type() {
                return O.crawler
            }
            get cost() {
                return {
                    metal: 2e3,
                    crystal: 2e3,
                    deuterium: 1e3,
                    energy: 0
                }
            }
            baseHull() {
                return 4e3
            }
            baseShield() {
                return 1
            }
            baseDamage() {
                return 1
            }
            baseSpeed() {
                return 0
            }
            baseCargoCapacity() {
                return 0
            }
            fuelConsumption() {
                return 0
            }
        },
        se = new class extends X {
            get type() {
                return O.cruiser
            }
            get cost() {
                return {
                    metal: 2e4,
                    crystal: 7e3,
                    deuterium: 2e3,
                    energy: 0
                }
            }
            baseHull() {
                return 27e3
            }
            baseShield() {
                return 50
            }
            baseDamage() {
                return 400
            }
            baseSpeed() {
                return 15e3
            }
            baseCargoCapacity() {
                return 800
            }
            fuelConsumption() {
                return 300
            }
        },
        te = new class extends X {
            get type() {
                return O.deathStar
            }
            get cost() {
                return {
                    metal: 5e6,
                    crystal: 4e6,
                    deuterium: 1e6,
                    energy: 0
                }
            }
            baseHull() {
                return 9e6
            }
            baseShield() {
                return 5e4
            }
            baseDamage() {
                return 2e5
            }
            baseSpeed() {
                return 100
            }
            baseCargoCapacity() {
                return 1e6
            }
            fuelConsumption() {
                return 1
            }
        },
        re = new class extends X {
            get type() {
                return O.destroyer
            }
            get cost() {
                return {
                    metal: 6e4,
                    crystal: 5e4,
                    deuterium: 15e3,
                    energy: 0
                }
            }
            baseHull() {
                return 11e4
            }
            baseShield() {
                return 500
            }
            baseDamage() {
                return 2e3
            }
            baseSpeed() {
                return 5e3
            }
            baseCargoCapacity() {
                return 2e3
            }
            fuelConsumption() {
                return 1e3
            }
        },
        de = new class extends X {
            get type() {
                return O.espionageProbe
            }
            get cost() {
                return {
                    metal: 0,
                    crystal: 1e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 1e3
            }
            baseShield() {
                return 0
            }
            baseDamage() {
                return 0
            }
            baseSpeed() {
                return 1e8
            }
            baseCargoCapacity() {
                return 0
            }
            fuelConsumption() {
                return 1
            }
        },
        oe = new class extends X {
            get type() {
                return O.heavyFighter
            }
            get cost() {
                return {
                    metal: 6e3,
                    crystal: 4e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 1e4
            }
            baseShield() {
                return 25
            }
            baseDamage() {
                return 150
            }
            baseSpeed() {
                return 1e4
            }
            baseCargoCapacity() {
                return 100
            }
            fuelConsumption() {
                return 75
            }
        },
        le = new class extends X {
            get type() {
                return O.largeCargo
            }
            get cost() {
                return {
                    metal: 6e3,
                    crystal: 6e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 12e3
            }
            baseShield() {
                return 25
            }
            baseDamage() {
                return 5
            }
            baseSpeed() {
                return 7500
            }
            baseCargoCapacity() {
                return 25e3
            }
            fuelConsumption() {
                return 50
            }
        },
        ie = new class extends X {
            get type() {
                return O.lightFighter
            }
            get cost() {
                return {
                    metal: 3e3,
                    crystal: 1e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 4e3
            }
            baseShield() {
                return 10
            }
            baseDamage() {
                return 50
            }
            baseSpeed() {
                return 12500
            }
            baseCargoCapacity() {
                return 50
            }
            fuelConsumption() {
                return 20
            }
        },
        ne = new class extends X {
            get type() {
                return O.pathfinder
            }
            get cost() {
                return {
                    metal: 8e3,
                    crystal: 15e3,
                    deuterium: 8e3,
                    energy: 0
                }
            }
            baseHull() {
                return 23e3
            }
            baseShield() {
                return 100
            }
            baseDamage() {
                return 200
            }
            baseSpeed() {
                return 12e3
            }
            baseCargoCapacity() {
                return 1e4
            }
            fuelConsumption() {
                return 300
            }
        },
        ce = new class extends X {
            get type() {
                return O.reaper
            }
            get cost() {
                return {
                    metal: 85e3,
                    crystal: 55e3,
                    deuterium: 2e4,
                    energy: 0
                }
            }
            baseHull() {
                return 14e4
            }
            baseShield() {
                return 700
            }
            baseDamage() {
                return 2800
            }
            baseSpeed() {
                return 7e3
            }
            baseCargoCapacity() {
                return 1e4
            }
            fuelConsumption() {
                return 1100
            }
        },
        fe = new class extends X {
            get type() {
                return O.recycler
            }
            get cost() {
                return {
                    metal: 1e4,
                    crystal: 6e3,
                    deuterium: 2e3,
                    energy: 0
                }
            }
            baseHull() {
                return 16e3
            }
            baseShield() {
                return 10
            }
            baseDamage() {
                return 1
            }
            baseSpeed() {
                return 6e3
            }
            baseCargoCapacity() {
                return 2e4
            }
            fuelConsumption() {
                return 900
            }
        },
        me = new class extends X {
            get type() {
                return O.smallCargo
            }
            get cost() {
                return {
                    metal: 2e3,
                    crystal: 2e3,
                    deuterium: 0,
                    energy: 0
                }
            }
            baseHull() {
                return 4e3
            }
            baseShield() {
                return 10
            }
            baseDamage() {
                return 5
            }
            baseSpeed() {
                return 1e4
            }
            baseCargoCapacity() {
                return 5e3
            }
            fuelConsumption() {
                return 20
            }
        },
        be = new class extends X {
            get type() {
                return O.solarSatellite
            }
            get cost() {
                return {
                    metal: 0,
                    crystal: 2e3,
                    deuterium: 500,
                    energy: 0
                }
            }
            baseHull() {
                return 2e3
            }
            baseShield() {
                return 1
            }
            baseDamage() {
                return 1
            }
            baseSpeed() {
                return 0
            }
            baseCargoCapacity() {
                return 0
            }
            fuelConsumption() {
                return 0
            }
        },
        ge = [O.smallCargo, O.largeCargo, O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.colonyShip, O.recycler, O.espionageProbe, O.bomber, O.solarSatellite, O.destroyer, O.deathStar, O.battlecruiser, O.crawler, O.reaper, O.pathfinder],
        _e = (O.solarSatellite, O.crawler, O.smallCargo, O.largeCargo, O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.colonyShip, O.recycler, O.espionageProbe, O.bomber, O.destroyer, O.deathStar, O.battlecruiser, O.reaper, O.pathfinder, O.smallCargo, O.largeCargo, O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.colonyShip, O.recycler, O.espionageProbe, O.bomber, O.solarSatellite, O.destroyer, O.deathStar, O.battlecruiser, O.crawler, O.reaper, O.pathfinder, O.smallCargo, O.largeCargo, O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.colonyShip, O.recycler, O.espionageProbe, O.bomber, O.solarSatellite, O.destroyer, O.deathStar, O.battlecruiser, O.reaper, O.pathfinder, O.lightFighter, O.heavyFighter, O.cruiser, O.battleship, O.battlecruiser, O.bomber, O.destroyer, O.deathStar, O.reaper, O.pathfinder, O.crawler, O.smallCargo, O.largeCargo, O.colonyShip, O.recycler, O.espionageProbe, O.solarSatellite, {
            [O.smallCargo]: me,
            [O.largeCargo]: le,
            [O.lightFighter]: ie,
            [O.heavyFighter]: oe,
            [O.cruiser]: se,
            [O.battleship]: Y,
            [O.colonyShip]: ee,
            [O.recycler]: fe,
            [O.espionageProbe]: de,
            [O.bomber]: Z,
            [O.solarSatellite]: be,
            [O.destroyer]: re,
            [O.deathStar]: te,
            [O.battlecruiser]: Q,
            [O.crawler]: ae,
            [O.reaper]: ce,
            [O.pathfinder]: ne
        });
    var ue;

    function pe(e, a) {
        const s = {};
        return e.forEach((e => s[e] = a instanceof Function ? a(e) : a)), s
    }! function(e) {
        e.none = "none", e.low = "low", e.medium = "medium", e.high = "high"
    }(ue || (ue = {})), ue.none, ue.low, ue.medium, ue.high;
    const ye = T(),
        he = {
            result: T(),
            lostFleet: T()
        },
        ve = {},
        Be = {},
        ke = {
            resources: {
                [N.metal]: 0,
                [N.crystal]: 0,
                [N.deuterium]: 0
            },
            ships: {
                [O.lightFighter]: 0,
                [O.heavyFighter]: 0,
                [O.cruiser]: 0,
                [O.battleship]: 0,
                [O.bomber]: 0,
                [O.battlecruiser]: 0,
                [O.destroyer]: 0,
                [O.reaper]: 0,
                [O.pathfinder]: 0,
                [O.smallCargo]: 0,
                [O.largeCargo]: 0,
                [O.espionageProbe]: 0
            },
            darkMatter: 0,
            items: [],
            events: {
                [A.nothing]: 0,
                [A.resources]: 0,
                [A.fleet]: 0,
                [A.delay]: 0,
                [A.early]: 0,
                [A.darkMatter]: 0,
                [A.pirates]: 0,
                [A.aliens]: 0,
                [A.combat]: 0,
                [A.item]: 0,
                [A.trader]: 0,
                [A.lostFleet]: 0
            },
            depletion: {
                unknown: 0,
                [ue.none]: 0,
                [ue.low]: 0,
                [ue.medium]: 0,
                [ue.high]: 0
            }
        },
        ze = {
            onMessage: function(a) {
                if (z(p(), a.ogameMeta)) switch (a.type) {
                    case e.Expedition:
                    case e.NewExpedition: {
                        const s = a,
                            t = document.querySelector(`div.msg[data-msg-id="${s.data.id}"]`) ?? u(`failed to find expedition message with id '${s.data.id}'`);
                        t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.processed), ea.settings.messageTracking.showSimplifiedResults && t.classList.add(v.messages.hideContent),
                            function(e, a) {
                                e.classList.add(v.messages.expedition);
                                const s = function(e) {
                                        switch (e.type) {
                                            case A.resources: {
                                                const a = e.resources;
                                                let s, t;
                                                return a.metal > 0 ? [s, t] = [N.metal, a.metal] : a.crystal > 0 ? [s, t] = [N.crystal, a.crystal] : [s, t] = [N.deuterium, a.deuterium], `\n                <div class="${we(e)}">\n                    <div class="${Ie(e.size)}"></div>\n                    <div class="ogame-tracker-resource ${s}"></div>\n                    <div class="${s}">${k(t)}</div>\n                </div>\n            `
                                            }
                                            case A.fleet: {
                                                const a = Object.keys(e.fleet).map((e => _(e, 10))).filter((a => (e.fleet[a] ?? 0) > 0)),
                                                    s = a.reduce(((a, s) => {
                                                        const t = V(_e[s].cost, e.fleet[s] ?? 0);
                                                        return function(...e) {
                                                            const a = {
                                                                metal: 0,
                                                                crystal: 0,
                                                                deuterium: 0,
                                                                energy: 0
                                                            };
                                                            return e.forEach((e => {
                                                                a.metal += e.metal, a.crystal += e.crystal, a.deuterium += e.deuterium, a.energy += e.energy
                                                            })), a
                                                        }(a, V(t, ea.settings.expeditionFoundShipsResourceUnits.factor))
                                                    }), {
                                                        metal: 0,
                                                        crystal: 0,
                                                        deuterium: 0,
                                                        energy: 0
                                                    });
                                                return `\n                <div class="ogame-tracker-expedition-result--fleet_wrapper">\n                    <div class="${we(e)}">\n                        <div class="${Ie(e.size)}"></div>\n                        ${a.map((a=>`\n                            <div class="ship-count-item">\n                                <div class="ogame-tracker-ship ship-${a}"></div>\n                                <div>${k(e.fleet[a]??0)}</div>\n                            </div>\n                        `)).join("")}\n                    </div>\n                    <div class="resource-units">\n                        ${s.metal>0?`\n                        <div class="ogame-tracker-resource metal"></div>\n                        <div class="metal">${k(s.metal)}</div>\n                        `:""}\n                        ${s.crystal>0?`\n                        <div class="ogame-tracker-resource crystal"></div>\n                        <div class="crystal">${k(s.crystal)}</div>\n                        `:""}\n                        ${s.deuterium>0?`\n                        <div class="ogame-tracker-resource deuterium"></div>\n                        <div class="deuterium">${k(s.deuterium)}</div>\n                        `:""}\n                    </div>\n                </div>\n            `
                                            }
                                            case A.darkMatter:
                                                return `\n                <div class="${we(e)}">\n                    <div class="${Ie(e.size)}"></div>\n                    <div class="ogame-tracker-resource dark-matter"></div>\n                    <div class="dark-matter">${k(e.darkMatter)}</div>\n                </div>\n            `;
                                            case A.delay:
                                                return `\n                <div class="${we(e)}">\n                    ${null!=e.size?`<div class="${Ie(e.size)}"></div>`:""}\n                    <div class="mdi mdi-clock-outline"></div>\n                </div>\n            `;
                                            case A.early:
                                                return `\n                <div class="${we(e)}">\n                    ${null!=e.size?`<div class="${Ie(e.size)}"></div>`:""}\n                    <div class="mdi mdi-clock-fast"></div>\n                </div>\n            `;
                                            case A.pirates:
                                                return `\n                <div class="${we(e)}">\n                    <div class="${Ie(e.size)}"></div>\n                    <div class="mdi mdi-pirate"></div>\n                </div>\n            `;
                                            case A.aliens:
                                                return `\n                <div class="${we(e)}">\n                    <div class="${Ie(e.size)}"></div>\n                    <div class="mdi mdi-alien"></div>\n                </div>\n            `;
                                            case A.combat:
                                                return `\n                <div class="${we(e)}">\n                    <div class="${Ie(e.size)}"></div>\n                    <div class="mdi mdi-sword-cross"></div>\n                </div>\n            `;
                                            case A.lostFleet:
                                                return `\n                <div class="${we(e)}">\n                    <div class="mdi mdi-cross"></div>\n                </div>\n            `;
                                            case A.nothing:
                                                return `\n                <div class="${we(e)}">\n                    <div class="mdi mdi-close"></div>\n                </div>\n            `;
                                            case A.item: {
                                                const a = J[e.itemHash],
                                                    s = chrome.runtime.getURL(`/img/ogame/items/${a.image}.png`);
                                                return `\n                <a href="?page=shop#item=${e.itemHash}&page=inventory">\n                    <div class="${we(e)}">\n                        <img src="${s}" class="item-grade--${a.grade}" />\n                    </div>\n                </a>\n            `
                                            }
                                            case A.trader:
                                                return `\n                <div class="${we(e)}">\n                    <div class="mdi mdi-swap-horizontal-bold"></div>\n                </div>\n            `;
                                            default:
                                                u("unknown expedition type")
                                        }
                                    }(a),
                                    t = function(e) {
                                        return null == e.depletion ? "" : `<span class="${a=e.depletion,`ogame-tracker-expedition-result--depletion-level ogame-tracker-expedition-result--depletion-level-${a} mdi `+{[ue.none]:"mdi-signal-cellular-outline",[ue.low]:"mdi-signal-cellular-1",[ue.medium]:"mdi-signal-cellular-2",[ue.high]:"mdi-signal-cellular-3"}[a]}"></span>`;
                                        var a
                                    }(a);
                                B(e, s + t)
                            }(t, s.data), a.type == e.NewExpedition && function(e) {
                                switch (delete ve[e.data.id], ke.events[e.data.type]++, ke.depletion[e.data.depletion ?? "unknown"]++, e.data.type) {
                                    case A.resources: {
                                        const a = e.data.resources;
                                        [N.metal, N.crystal, N.deuterium].forEach((e => ke.resources[e] += a[e]));
                                        break
                                    }
                                    case A.fleet: {
                                        const a = e.data.fleet;
                                        Object.keys(a).map((e => _(e, 10))).forEach((e => {
                                            ke.ships[e] ??= 0, ke.ships[e] += a[e] ?? 0
                                        }));
                                        break
                                    }
                                    case A.darkMatter:
                                        ke.darkMatter += e.data.darkMatter;
                                        break;
                                    case A.item:
                                        ke.items.push(e.data.itemHash)
                                }
                                Se()
                            }(s);
                        break
                    }
                    case e.TrackingError: {
                        const {
                            type: e,
                            id: s
                        } = a.data;
                        if (!["expedition", "lifeform-discovery"].includes(e)) break;
                        const t = document.querySelector(`div.msg[data-msg-id="${s}"]`) ?? u(`failed to find message with id '${s}'`);
                        t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.error), B(t, !1), delete ve[s], Be[s] = !0, Se();
                        break
                    }
                }
            },
            track: function(a) {
                const s = function(a) {
                    const s = [];
                    return a.forEach((a => {
                        const t = _(a.getAttribute("data-msg-id") ?? u("Cannot find message id"), 10);
                        try {
                            const s = a.querySelector(".rawMessageData") ?? u("Cannot find rawMessageData element"),
                                {
                                    timestamp: r,
                                    coords: d,
                                    expeditionresult: o,
                                    depletion: l,
                                    size: i,
                                    resourcesgained: n,
                                    technologiesgained: c,
                                    itemsgained: f,
                                    navigation: b
                                } = y(s, {
                                    timestamp: {
                                        optional: !1,
                                        conversion: e => 1e3 * _(e, 10)
                                    },
                                    coords: {
                                        optional: !1,
                                        conversion: e => P(e)
                                    },
                                    expeditionresult: {
                                        optional: !1,
                                        conversion: e => e
                                    },
                                    depletion: {
                                        optional: !0,
                                        conversion: e => _(e)
                                    },
                                    size: {
                                        optional: !0,
                                        conversion: e => _(e)
                                    },
                                    resourcesgained: {
                                        optional: !0,
                                        conversion: e => JSON.parse(e)
                                    },
                                    technologiesgained: {
                                        optional: !0,
                                        conversion: e => JSON.parse(e)
                                    },
                                    navigation: {
                                        optional: !0,
                                        conversion: e => JSON.parse(e)
                                    },
                                    itemsgained: {
                                        optional: !0,
                                        conversion: e => JSON.parse(e)
                                    }
                                });
                            isNaN(r) && u("Message timestamp is NaN"), g({
                                type: e.TrackExpedition,
                                ogameMeta: p(),
                                data: {
                                    id: t,
                                    date: r,
                                    coordinates: d,
                                    type: o,
                                    size: i,
                                    depletion: l,
                                    darkMatter: n?.darkMatter,
                                    resources: n,
                                    ships: pe(G, (e => c?.[e]?.amount ?? 0)),
                                    item: f?.[0].id,
                                    navigationType: null == b ? void 0 : 1 == b?.returnTimeMultiplier ? "delay" : "early"
                                },
                                senderUuid: m
                            }), a.classList.add(v.messages.base, v.messages.waitingToBeProcessed), B(a, '<div class="ogame-tracker-loader"></div>'), ve[t] = !0
                        } catch (e) {
                            console.error(e), s.push(a)
                        }
                    })), s
                }(a);
                s.forEach((e => {
                    const a = _(e.getAttribute("data-msg-id") ?? u("Cannot find message id"), 10);
                    e.classList.add(v.messages.base, v.messages.error), B(e, !1), delete ve[a], Be[a] = !0, Se()
                }))
            },
            messageType: C.expedition
        };

    function Se() {
        const a = Object.keys(Be).length;
        a > 0 && function(a) {
            g({
                type: e.Notification,
                ogameMeta: p(),
                senderUuid: m,
                data: {
                    type: x.MessageTrackingError,
                    messageId: ye,
                    count: a
                }
            })
        }(a), Object.values(ke.events).reduce(((e, a) => e + a), 0) > 0 && (g({
            type: e.Notification,
            ogameMeta: p(),
            senderUuid: m,
            data: {
                type: x.ExpeditionTracking,
                messageId: he.result,
                ...ke
            }
        }), ke.events.lostFleet > 0 && g({
            type: e.Notification,
            ogameMeta: p(),
            senderUuid: m,
            data: {
                type: x.ExpeditionTrackingLostFleet,
                messageId: he.lostFleet,
                count: ke.events.lostFleet
            }
        }))
    }

    function Ie(e) {
        return "ogame-tracker-expedition--size-icon mdi " + {
            [q.small]: "mdi-hexagon-slice-1",
            [q.medium]: "mdi-hexagon-slice-3",
            [q.large]: "mdi-hexagon-slice-5",
            "fled-death-star": "mdi-run-fast"
        } [e]
    }

    function we(e) {
        let a = `ogame-tracker-expedition-result ogame-tracker-expedition-result--${e.type}`;
        return e.type == A.fleet && G.every((a => (e.fleet[a] ?? 0) > 0)) && (a += " ogame-tracker-expedition-result--fleet--rainbow"), "size" in e && (a += ` ogame-tracker-expedition-result--size-${e.size}`), a
    }
    var Te, xe, Ne, Fe;
    ! function(e) {
        e.nothing = "nothing", e.lostShip = "lostShip", e.newLifeformFound = "newLifeformFound", e.knownLifeformFound = "knownLifeformFound", e.artifacts = "artifacts"
    }(Te || (Te = {})), Te.nothing, Te.lostShip, Te.newLifeformFound, Te.knownLifeformFound, Te.artifacts,
        function(e) {
            e.humans = "humans", e.rocktal = "rocktal", e.mechas = "mechas", e.kaelesh = "kaelesh", e.none = "none"
        }(xe || (xe = {})), xe.humans, xe.rocktal, xe.mechas, xe.kaelesh, xe.none, xe.humans, xe.rocktal, xe.mechas, xe.kaelesh,
        function(e) {
            e.storageFull = "full", e.small = "normal", e.medium = "big", e.large = "huge"
        }(Ne || (Ne = {})), Ne.small, Ne.medium, Ne.large, Ne.storageFull,
        function(e) {
            e.none = "none", e.artifacts = "artifacts", e.lifeformExperience = "lifeform-xp", e.shipLost = "ship-lost", e.lifeformFound = "lifeform-found"
        }(Fe || (Fe = {}));
    const Ce = T(),
        Ee = T(),
        $e = {},
        Pe = {},
        Le = {
            events: {
                [Te.nothing]: 0,
                [Te.lostShip]: 0,
                [Te.newLifeformFound]: 0,
                [Te.knownLifeformFound]: 0,
                [Te.artifacts]: 0
            },
            artifacts: 0,
            newLifeforms: [],
            lifeformExperience: {
                [xe.humans]: 0,
                [xe.rocktal]: 0,
                [xe.mechas]: 0,
                [xe.kaelesh]: 0
            }
        },
        Me = {
            onMessage: function(a) {
                if (z(p(), a.ogameMeta)) switch (a.type) {
                    case e.LifeformDiscovery:
                    case e.NewLifeformDiscovery: {
                        const s = a,
                            t = document.querySelector(`div.msg[data-msg-id="${s.data.id}"]`) ?? u(`failed to find lifeform discovery message with id '${s.data.id}'`);
                        t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.processed), ea.settings.messageTracking.showSimplifiedResults && t.classList.add(v.messages.hideContent),
                            function(e, a) {
                                e.classList.add(v.messages.lifeformDiscovery);
                                const s = function(e) {
                                    switch (e.type) {
                                        case Te.lostShip:
                                            return `\n                <div class="${Re(Te.lostShip)}">\n                    <div class="mdi mdi-skull-crossbones-outline"></div>\n                </div>\n            `;
                                        case Te.nothing:
                                            return `\n                <div class="${Re(Te.nothing)}">\n                    <div class="mdi mdi-close"></div>\n                </div>\n            `;
                                        case Te.knownLifeformFound:
                                            return `\n                <div class="${Re(e.type)}">\n                    <div class="${Ke(e.lifeform)}"></div>\n                    <span style="font-weight: bold;">+${e.experience} XP</span>\n                </div>\n            `;
                                        case Te.newLifeformFound:
                                            return `\n                <div class="${Re(e.type)}">\n                    <span class="mdi mdi-new-box"></span>\n                    <div class="${Ke(e.lifeform)}"></div>\n                </div>\n            `;
                                        case Te.artifacts:
                                            return `\n                <div class="${Re(e.type,e.size)}">\n                    <div class="${a=e.size,"ogame-tracker-lifeform-discovery-result--size-icon mdi "+{[Ne.small]:"mdi-hexagon-slice-1",[Ne.medium]:"mdi-hexagon-slice-3",[Ne.large]:"mdi-hexagon-slice-5",[Ne.storageFull]:"mdi-hexagon-outline"}[a]}"></div>\n                    <span class="mdi mdi-pyramid${e.size==Ne.storageFull?"-off":""}"></span>\n                    <span>${e.artifacts}</span>\n                </div>\n            `;
                                        default:
                                            u("unknown lifeform discovery type")
                                    }
                                    var a
                                }(a);
                                B(e, s)
                            }(t, s.data), a.type == e.NewLifeformDiscovery && function(e) {
                                switch (delete $e[e.data.id], Le.events[e.data.type]++, e.data.type) {
                                    case Te.newLifeformFound:
                                        Le.newLifeforms.push(e.data.lifeform);
                                        break;
                                    case Te.knownLifeformFound:
                                        Le.lifeformExperience[e.data.lifeform] += e.data.experience;
                                        break;
                                    case Te.artifacts:
                                        Le.artifacts += e.data.artifacts
                                }
                                De()
                            }(s);
                        break
                    }
                    case e.TrackingError: {
                        const {
                            type: e,
                            id: s
                        } = a.data;
                        if (!["expedition", "lifeform-discovery"].includes(e)) break;
                        const t = document.querySelector(`div.msg[data-msg-id="${s}"]`) ?? u(`failed to find message with id '${s}'`);
                        t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.error), B(t, !1), delete $e[s], Pe[s] = !0, De();
                        break
                    }
                }
            },
            track: function(a) {
                const s = function(a) {
                    const s = [];
                    return a.forEach((a => {
                        const t = _(a.getAttribute("data-msg-id") ?? u("Cannot find message id"), 10);
                        try {
                            const s = a.querySelector(".rawMessageData") ?? u("Cannot find rawMessageData element"),
                                {
                                    timestamp: r,
                                    coords: d,
                                    discoverytype: o,
                                    artifactssize: l,
                                    artifactsfound: i,
                                    lifeform: n,
                                    lifeformalreadyowned: c,
                                    lifeformgainedexperience: f
                                } = y(s, {
                                    timestamp: {
                                        optional: !1,
                                        conversion: e => 1e3 * _(e, 10)
                                    },
                                    coords: {
                                        optional: !1,
                                        conversion: e => P(e)
                                    },
                                    discoverytype: {
                                        optional: !0,
                                        conversion: e => e
                                    },
                                    artifactssize: {
                                        optional: !0,
                                        conversion: e => e
                                    },
                                    artifactsfound: {
                                        optional: !0,
                                        conversion: e => _(e)
                                    },
                                    lifeform: {
                                        optional: !0,
                                        conversion: e => _(e)
                                    },
                                    lifeformgainedexperience: {
                                        optional: !0,
                                        conversion: e => _(e)
                                    },
                                    lifeformalreadyowned: {
                                        optional: !0,
                                        conversion: e => "1" == e
                                    }
                                });
                            isNaN(r) && u("Message timestamp is NaN"), g({
                                type: e.TrackLifeformDiscovery,
                                ogameMeta: p(),
                                data: {
                                    id: t,
                                    date: r,
                                    type: o ?? Fe.none,
                                    artifactsFound: i,
                                    artifactsSize: l,
                                    lifeform: n,
                                    lifeformExperience: f
                                },
                                senderUuid: m
                            }), a.classList.add(v.messages.base, v.messages.waitingToBeProcessed), B(a, '<div class="ogame-tracker-loader"></div>'), $e[t] = !0
                        } catch (e) {
                            console.error(e), s.push(a)
                        }
                    })), s
                }(a);
                s.forEach((e => {
                    const a = _(e.getAttribute("data-msg-id") ?? u("Cannot find message id"), 10);
                    e.classList.add(v.messages.base, v.messages.error), B(e, !1), delete $e[a], Pe[a] = !0, De()
                }))
            },
            messageType: C.lifeformDiscovery
        };

    function De() {
        const a = Object.keys(Pe).length;
        a > 0 && function(a) {
            g({
                type: e.Notification,
                ogameMeta: p(),
                senderUuid: m,
                data: {
                    type: x.MessageTrackingError,
                    messageId: Ce,
                    count: a
                }
            })
        }(a), Object.values(Le.events).reduce(((e, a) => e + a), 0) > 0 && g({
            type: e.Notification,
            ogameMeta: p(),
            senderUuid: m,
            data: {
                type: x.LifeformDiscoveryTracking,
                messageId: Ee,
                ...Le
            }
        })
    }

    function Re(e, a) {
        const s = `ogame-tracker-lifeform-discovery-result ogame-tracker-lifeform-discovery-result--${e}`;
        return null == a ? s : `${s} ogame-tracker-lifeform-discovery-result--artifacts--size-${a}`
    }

    function Ke(e) {
        return `${{[xe.humans]:"lifeform-item-icon small lifeform1",[xe.rocktal]:"lifeform-item-icon small lifeform2",[xe.mechas]:"lifeform-item-icon small lifeform3",[xe.kaelesh]:"lifeform-item-icon small lifeform4"}[e]} ogame-tracker_lifeform-icon ogame-tracker_lifeform-icon--${e}`
    }
    var Ue;
    ! function(e) {
        e.cs = "cs", e.de = "de", e.da = "da", e.el = "el", e.en = "en", e["es-es"] = "es-es", e["es-ar"] = "es-ar", e["es-mx"] = "es-mx", e.fr = "fr", e.hr = "hr", e.hu = "hu", e.it = "it", e.nl = "nl", e.pl = "pl", e["pt-br"] = "pt-br", e["pt-pt"] = "pt-pt", e.ro = "ro", e.ru = "ru", e.sl = "sl", e.tr = "tr", e["zh-tw"] = "zh-tw"
    }(Ue || (Ue = {}));
    const Oe = {
        ar: Ue["es-ar"],
        br: Ue["pt-br"],
        cz: Ue.cs,
        de: Ue.de,
        dk: Ue.da,
        en: Ue.en,
        es: Ue["es-es"],
        fr: Ue.fr,
        gr: Ue.el,
        hr: Ue.hr,
        hu: Ue.hu,
        it: Ue.it,
        mx: Ue["es-mx"],
        nl: Ue.nl,
        pl: Ue.pl,
        pt: Ue["pt-pt"],
        ro: Ue.ro,
        ru: Ue.ru,
        si: Ue.sl,
        tr: Ue.tr,
        us: Ue.en,
        tw: Ue["zh-tw"]
    };
    const Ge = {
            result: T(),
            error: T()
        },
        Ae = {},
        qe = {},
        He = {
            count: 0,
            resources: {
                metal: 0,
                crystal: 0,
                deuterium: 0
            }
        },
        je = {},
        We = [];

    function Je() {
        const a = Object.keys(qe).length;
        a > 0 && function(a) {
            g({
                type: e.Notification,
                ogameMeta: p(),
                senderUuid: m,
                data: {
                    type: x.MessageTrackingError,
                    messageId: Ge.error,
                    count: a
                }
            })
        }(a), 0 != He.count && g({
            type: e.Notification,
            ogameMeta: p(),
            senderUuid: m,
            data: {
                type: x.CombatTracking,
                messageId: Ge.result,
                ...He
            }
        })
    }
    async function Ve(a, s, t) {
        const r = parseInt(a.getAttribute("data-msg-id") ?? u("Cannot find message id"));
        try {
            isNaN(r) && u("Message id is NaN");
            const t = await
            function(a, s) {
                return new Promise((t => {
                    je[a] = t, g({
                        type: e.RequestSingleCombatReport,
                        ogameMeta: s,
                        data: a,
                        senderUuid: m
                    })
                }))
            }(r, s);
            if (!t) return;
            a.classList.add(v.messages.waitingToBeProcessed), B(a, '<div class="ogame-tracker-loader"></div>');
            const d = a.querySelector(".rawMessageData") ?? u("Cannot find rawMessageData element"),
                {
                    timestamp: o
                } = y(d, {
                    timestamp: {
                        optional: !1,
                        conversion: e => 1e3 * _(e, 10)
                    }
                });
            isNaN(o) && u("Message timestamp is NaN");
            const l = function(e) {
                const {
                    playerId: a
                } = p(), {
                    defenderspaceobject: s,
                    combatrounds: t,
                    result: r,
                    fleets: d
                } = y(e, {
                    defenderspaceobject: {
                        optional: !1,
                        conversion: e => JSON.parse(e)
                    },
                    result: {
                        optional: !1,
                        conversion: e => JSON.parse(e)
                    },
                    combatrounds: {
                        optional: !1,
                        conversion: e => JSON.parse(e)
                    },
                    fleets: {
                        optional: !1,
                        conversion: e => JSON.parse(e)
                    }
                }), o = d.filter((e => e.player?.id == a)), l = t[t.length - 1] ?? {
                    fleets: []
                }, i = o.map((e => e.fleetId)), n = l.fleets.filter((e => i.includes(e.fleetId))).map((e => pe(ge, (a => e.technologies.find((e => e.technologyId == a))?.destroyedTotal ?? 0)))), c = pe(ge, (e => n.map((a => a[e])).reduce(((e, a) => e + a), 0))), f = d.filter((e => "attacker" == e.side)).every((e => e.combatTechnologies.every((e => e.technologyId == O.espionageProbe))));
                return {
                    winner: r.winner,
                    isOwner: s.owner?.id == a,
                    coordinates: {
                        ...s.coordinates,
                        type: "planet" == s.type ? E.planet : E.moon
                    },
                    isExpedition: 16 == s.coordinates.position,
                    isEspionageCombat: f,
                    isAttacker: o.some((e => "attacker" == e.side)),
                    isDefender: o.some((e => "defender" == e.side)),
                    loot: {
                        metal: r.loot.resources.find((e => "metal" == e.resource))?.amount ?? 0,
                        crystal: r.loot.resources.find((e => "crystal" == e.resource))?.amount ?? 0,
                        deuterium: r.loot.resources.find((e => "deuterium" == e.resource))?.amount ?? 0
                    },
                    debris: {
                        metal: r.debris.resources.find((e => "metal" == e.resource))?.total ?? 0,
                        crystal: r.debris.resources.find((e => "crystal" == e.resource))?.total ?? 0,
                        deuterium: r.debris.resources.find((e => "deuterium" == e.resource))?.total ?? 0
                    },
                    playerLosses: c
                }
            }(d);
            if (l.isExpedition && null == function(e, a = !1) {
                    const s = Oe[e];
                    return null == s && a && u(`unsupported language '${e}'`), s
                }(s.userLanguage)) return void B(a, '<span class="mdi mdi-alert" style="font-size: 24px;"></span>');
            g({
                type: e.TrackCombatReport,
                ogameMeta: s,
                data: {
                    id: r,
                    date: o,
                    ogameCombatReport: l
                },
                senderUuid: m
            }), Ae[r] = !0
        } catch (e) {
            console.error(e), a.classList.add(v.messages.base, v.messages.error), B(a, !1), delete Ae[r], qe[r] = !0, Je()
        }
    }
    async function Xe() {
        const e = Date.now(),
            a = We.filter((a => a.date <= e));
        a.forEach((e => We.splice(We.indexOf(e), 1)));
        const s = p(),
            t = a.map((async e => {
                await Ve(e.msg, s, e.attempt)
            }));
        await Promise.all(t), setTimeout((async () => await Xe()), 500)
    }
    const Qe = [{
        onMessage: function(a) {
            if (z(p(), a.ogameMeta)) switch (a.type) {
                case e.CombatReportUnknown: {
                    const {
                        data: e
                    } = a;
                    je[e]?.(!0), delete je[e];
                    break
                }
                case e.WillNotBeTracked: {
                    const e = a;
                    if ("combat-report" != e.data.type) break;
                    je[e.data.id]?.(!1), delete je[e.data.id];
                    const s = document.querySelector(`.msg[data-msg-id="${e.data.id}"]`) ?? u(`failed to find combat report with id '${e.data.id}'`);
                    s.classList.add(v.messages.combatReport), s.classList.add(v.messages.processed), s.classList.add(v.messages.ignored), s.classList.remove(v.messages.waitingToBeProcessed), B(s, !1), delete Ae[e.data.id];
                    break
                }
                case e.CombatReport:
                case e.NewCombatReport: {
                    const s = a,
                        t = s.data;
                    je[t.id]?.(!1), delete je[t.id];
                    const r = document.querySelector(`.msg[data-msg-id="${s.data.id}"]`) ?? u(`failed to find combat report with id '${s.data.id}'`);
                    r.classList.add(v.messages.combatReport), r.classList.remove(v.messages.waitingToBeProcessed), r.classList.add(v.messages.processed);
                    let d = "";
                    Object.values(t.loot).some((e => 0 != e)) && (d = `\n                    <div class="ogame-tracker-combat-report--loot-table">\n                        ${[N.metal,N.crystal,N.deuterium].map((e=>`\n                            <div class="ogame-tracker-resource ${e}"></div>\n                            <div class="${t.loot[e]<0?"ogame-tracker-combat-report--negative-loot":0==t.loot[e]?"ogame-tracker-combat-report--no-loot":""}">\n                                ${k(t.loot[e])}\n                            </div>\n                        `)).join("")}\n                    </div>`), (t.debrisField.metal > 0 || t.debrisField.crystal > 0) && (d += `\n                    <div class="ogame-tracker-combat-report--debris-field-table">\n                        <span class="ogti ogti-debris-field"></span>\n                        ${[N.metal,N.crystal,N.deuterium].map((e=>`\n                            <div class="ogame-tracker-resource ${e}"></div>\n                            <div class="${0==(t.debrisField[e]??0)?"ogame-tracker-combat-report--no-loot":""}">\n                                ${k(t.debrisField[e]??0)}\n                            </div>\n                        `)).join("")}\n                    </div>\n                `), B(r, `<div class="ogame-tracker-combat-report">${""==d?"-":d}</div>`), a.type == e.NewCombatReport && function(e) {
                        delete Ae[e.data.id], He.count++;
                        const a = e.data.loot;
                        [N.metal, N.crystal, N.deuterium].forEach((e => He.resources[e] += a[e])), Je()
                    }(s);
                    break
                }
                case e.TrackingError: {
                    const {
                        type: e,
                        id: s
                    } = a.data;
                    if ("combat-report" != e) break;
                    const t = document.querySelector(`.msg[data-msg-id="${s}"]`) ?? u(`failed to find combat report message with id '${s}'`);
                    t.classList.remove(v.messages.waitingToBeProcessed), t.classList.add(v.messages.error), B(t, !1), delete Ae[s], qe[s] = !0, Je();
                    break
                }
            }
        },
        messageType: C.combatReport,
        track: async function(e) {
            const a = e.filter((e => null != e.querySelector(".msg_actions a.txt_link")));
            a.forEach((e => e.classList.add(v.messages.base)));
            const s = p(),
                t = a.map((async e => await Ve(e, s)));
            await Promise.all(t)
        },
        onInit: () => Xe()
    }, U, ze, Me];
    let Ye = null;
    const Ze = function(e) {
            const a = {};
            return e.startsWith("?") && (e = e.substring(1)), e.split("&").forEach((e => {
                const [s, t] = e.split("=");
                a[s] = t
            })), a
        }(location.search),
        ea = {
            settings: {}
        };
    "ingame" == Ze.page?.toLowerCase() && "messages" == Ze.component?.toLowerCase() && async function() {
        const a = new Promise((a => {
            chrome.runtime.onMessage.addListener((s => {
                const t = s;
                t.type == e.Settings && a(t.data)
            })), g({
                type: e.RequestSettings,
                ogameMeta: p(),
                senderUuid: m
            })
        }));
        (function() {
            Qe.forEach((e => {
                chrome.runtime.onMessage.addListener((a => e.onMessage(a))), e.onInit?.()
            }));
            const e = document.querySelector("#pageContent .content") ?? u("Cannot find content element");
            new MutationObserver((() => {
                1 != Ye?.isConnected && function() {
                    Ye = document.querySelector(".messagesHolder");
                    const e = Ye ?? u("Cannot find messages holder element");
                    new MutationObserver((() => {
                        Qe.forEach((e => function(e) {
                            if (null == document.querySelector('.singleTab.marker[data-category-id="2"]')) return;
                            const a = Array.from(document.querySelectorAll("div.msg[data-msg-id]")).filter((a => _(a.querySelector(".rawMessageData")?.getAttribute("data-raw-messagetype") ?? "-1") == e.messageType && !a.classList.contains(v.messages.base)));
                            e.track(a)
                        }(e)))
                    })).observe(e, {
                        childList: !0,
                        subtree: !0
                    })
                }()
            })).observe(e, {
                subtree: !0,
                childList: !0
            })
        })(), ea.settings = await a
    }()
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FFQTlnQixHQUFnQkMsZUFBaUI2ZixFQVJqQ2lCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXVpZC9pbmRleC50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9jb21tdW5pY2F0aW9uL2lnbm9yZVN0dXBpZE1lc3NhZ2VQb3J0RXJyb3JzLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL2NvbW11bmljYXRpb24vc2VuZE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXRpbHMvcGFyc2VOdW1iZXJzLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL3V0aWxzL190aHJvdy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9vZ2FtZS13ZWIvZ2V0T2dhbWVNZXRhLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL3V0aWxzL2dldE1lc3NhZ2VBdHRyaWJ1dGVzLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvY29udGVudC1zY3JpcHRzL21lc3NhZ2UtdHJhY2tpbmcvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvb2dhbWUtd2ViL29nYW1lTWV0YXNFcXVhbC50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbWVzc2FnZXMvbm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvcmVzb3VyY2VzL1Jlc291cmNlVHlwZS50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdNZXNzYWdlVHlwZS50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvY29tbW9uL1BsYW5ldFR5cGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXRpbHMvcGFyc2VDb29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9tZXNzYWdlLXRyYWNraW5nL2RlYnJpcy1maWVsZC1yZXBvcnQtdHJhY2tpbmcudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXRpbHMvX2xvZy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvU2hpcFR5cGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL2V4cGVkaXRpb25zL0V4cGVkaXRpb25FdmVudHMudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL2V4cGVkaXRpb25zL0V4cGVkaXRpb25FdmVudFR5cGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL2V4cGVkaXRpb25zL0V4cGVkaXRpb25FdmVudFNpemUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL2l0ZW1zL0l0ZW1IYXNoLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9pdGVtcy9JdGVtR3JhZGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL2l0ZW1zL0l0ZW1zLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9jb21tb24vQ29zdC50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvU2hpcC50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvQmF0dGxlY3J1aXNlci50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvQmF0dGxlc2hpcC50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvQm9tYmVyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9Db2xvbnlTaGlwLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9DcmF3bGVyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9DcnVpc2VyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9EZWF0aFN0YXIudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL0Rlc3Ryb3llci50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvRXNwaW9uYWdlUHJvYmUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL0hlYXZ5RmlnaHRlci50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvTGFyZ2VDYXJnby50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvTGlnaHRGaWdodGVyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9QYXRoZmluZGVyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9SZWFwZXIudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL1JlY3ljbGVyLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9TbWFsbENhcmdvLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9Tb2xhclNhdGVsbGl0ZS50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvU2hpcFR5cGVzLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9leHBlZGl0aW9ucy9FeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvY29udGVudC1zY3JpcHRzL21lc3NhZ2UtdHJhY2tpbmcvZXhwZWRpdGlvbi10cmFja2luZy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9tb2RlbHMvbGlmZWZvcm0tZGlzY292ZXJpZXMvTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvbW9kZWxzL2xpZmVmb3JtLWRpc2NvdmVyaWVzL0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9tZXNzYWdlcy9PZ2FtZVJhd0xpZmVmb3JtRGlzY292ZXJ5VHlwZS50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9tZXNzYWdlLXRyYWNraW5nL2xpZmVmb3JtLWRpc2NvdmVyeS10cmFja2luZy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL3NoYXJlZC9pMThuL0xhbmd1YWdlS2V5LnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL2kxOG4vZ2V0TGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9jb250ZW50LXNjcmlwdHMvbWVzc2FnZS10cmFja2luZy9jb21iYXQtcmVwb3J0LXRyYWNraW5nLnRzIiwid2VicGFjazovL29nYW1lLXRyYWNrZXIvLi9zcmMvc2hhcmVkL2kxOG4vaXNTdXBwb3J0ZWRMYW5ndWFnZS50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9tZXNzYWdlLXRyYWNraW5nL2Jhc2UtbWVzc2FnZS10cmFja2luZy50cyIsIndlYnBhY2s6Ly9vZ2FtZS10cmFja2VyLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9tZXNzYWdlLXRyYWNraW5nL21haW4udHMiLCJ3ZWJwYWNrOi8vb2dhbWUtdHJhY2tlci8uL3NyYy9zaGFyZWQvdXRpbHMvZ2V0UXVlcnlQYXJhbWV0ZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJleHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XHJcbiAgICBTdGF5QWxpdmUgPSAnaW50ZXJuYWwvc3RheS1hbGl2ZScsXHJcbiAgICBEcm9wRGF0YWJhc2VDb25uZWN0aW9ucyA9ICdpbnRlcm5hbC9kcm9wLWRiLWNvbm5lY3Rpb25zJyxcclxuXHJcbiAgICAvLyBub3RpZmljYXRpb25zXHJcbiAgICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uJyxcclxuICAgIFxyXG4gICAgLy8gZXhwZWRpdGlvbnNcclxuICAgIFRyYWNrRXhwZWRpdGlvbiA9ICdleHBlZGl0aW9uL3RyYWNrLWV4cGVkaXRpb24nLFxyXG4gICAgRXhwZWRpdGlvbiA9ICdleHBlZGl0aW9uL3NpbmdsZScsXHJcbiAgICBOZXdFeHBlZGl0aW9uID0gJ2V4cGVkaXRpb24vbmV3JyxcclxuXHJcbiAgICAvLyBkZWJyaXMgZmllbGQgcmVwb3J0c1xyXG4gICAgRGVicmlzRmllbGRSZXBvcnQgPSAnZGVicmlzLWZpZWxkcy9zaW5nbGUnLFxyXG4gICAgTmV3RGVicmlzRmllbGRSZXBvcnQgPSAnZGVicmlzLWZpZWxkcy9uZXcnLFxyXG4gICAgVHJhY2tEZWJyaXNGaWVsZFJlcG9ydCA9ICdkZWJyaXMtZmllbGRzL3RyYWNrJyxcclxuICAgIFRyYWNrTWFudWFsRGVicmlzRmllbGRSZXBvcnQgPSAnZGVicmlzLWZpZWxkcy90cmFjay1tYW51YWxseScsXHJcblxyXG4gICAgLy8gY29tYmF0IHJlcG9ydHNcclxuICAgIENvbWJhdFJlcG9ydCA9ICdjb21iYXQtcmVwb3J0cy9zaW5nbGUnLFxyXG4gICAgTmV3Q29tYmF0UmVwb3J0ID0gJ2NvbWJhdC1yZXBvcnRzL25ldycsXHJcbiAgICBUcmFja0NvbWJhdFJlcG9ydCA9ICdjb21iYXQtcmVwb3J0cy90cmFjaycsXHJcbiAgICBSZXF1ZXN0U2luZ2xlQ29tYmF0UmVwb3J0ID0gJ2NvbWJhdC1yZXBvcnRzL3JlcXVlc3Qtc2luZ2xlLXJlcG9ydCcsXHJcbiAgICBDb21iYXRSZXBvcnRVbmtub3duID0gJ2NvbWJhdC1yZXBvcnRzL2lzLXVua25vd24nLFxyXG5cclxuICAgIC8vIG1lc3NhZ2UgdHJhY2tpbmdcclxuICAgIFdpbGxOb3RCZVRyYWNrZWQgPSAnbWVzc2FnZS10cmFja2luZy9uby10cmFja2luZycsIC8vIG1lc3NhZ2Ugd2lsbCBub3QgYmUgdHJhY2tlZCBiZWNhdXNlIGl0IGlzIGlnbm9yZWQgZm9yIHNvbWUgcmVhc29uIChlLmcuIGVzcGlvbmFnZSBjb21iYXRzKVxyXG4gICAgVHJhY2tpbmdFcnJvciA9ICdtZXNzYWdlLXRyYWNraW5nL2Vycm9yJyxcclxuXHJcbiAgICAvLyBlbXBpcmUgdHJhY2tpbmdcclxuICAgIFVwZGF0ZVBsYW5ldERhdGEgPSAnZW1waXJlL3VwZGF0ZS1wbGFuZXQtZGF0YScsXHJcbiAgICBVcGRhdGVQbGFuZXRBY3RpdmVJdGVtcyA9ICdlbXBpcmUvdXBkYXRlLWFjdGl2ZS1pdGVtcycsXHJcbiAgICBVcGRhdGVQbGFuZXRCdWlsZGluZ0xldmVscyA9ICdlbXBpcmUvdXBkYXRlLWJ1aWxkaW5ncy1sZXZlbHMnLFxyXG4gICAgVXBkYXRlUmVzZWFyY2hMZXZlbHMgPSAnZW1waXJlL3VwZGF0ZS1yZXNlYXJjaC1sZXZlbHMnLFxyXG4gICAgVXBkYXRlUGxhbmV0U2hpcENvdW50cyA9ICdlbXBpcmUvdXBkYXRlLXBsYW5ldC1zaGlwcycsXHJcbiAgICBVcGRhdGVQbGFuZXREZWZlbnNlQ291bnRzID0gJ2VtcGlyZS91cGRhdGUtcGxhbmV0LWRlZmVuc2VzJyxcclxuICAgIFVwZGF0ZVBsYW5ldE1pc3NpbGVDb3VudHMgPSAnZW1waXJlL3VwZGF0ZS1wbGFuZXQtbWlzc2lsZXMnLFxyXG4gICAgVXBkYXRlQWN0aXZlT2ZmaWNlcnMgPSAnZW1waXJlL3VwZGF0ZS1hY3RpdmUtb2ZmaWNlcnMnLFxyXG4gICAgVXBkYXRlUGxheWVyQ2xhc3MgPSAnZW1waXJlL3VwZGF0ZS1wbGF5ZXItY2xhc3MnLFxyXG4gICAgVXBkYXRlQWxsaWFuY2VDbGFzcyA9ICdlbXBpcmUvdXBkYXRlLWFsbGlhbmNlLWNsYXNzJyxcclxuICAgIFVwZGF0ZVBsYW5ldFByb2R1Y3Rpb25TZXR0aW5ncyA9ICdlbXBpcmUvdXBkYXRlLXBsYW5ldC1wcm9kdWN0aW9uLXNldHRpbmdzJyxcclxuICAgIFVwZGF0ZUZsZWV0cyA9ICdlbXBpcmUvZmxlZXRzJyxcclxuICAgIE5vdGlmeUVtcGlyZURhdGFVcGRhdGUgPSAnZW1waXJlL25vdGlmeS11cGRhdGUnLFxyXG5cclxuICAgIC8vIHNldHRpbmdzXHJcbiAgICBSZXF1ZXN0U2V0dGluZ3MgPSAnc2V0dGluZ3MvcmVxdWVzdC1kYXRhJyxcclxuICAgIFNldHRpbmdzID0gJ3NldHRpbmdzL2RhdGEnLFxyXG4gICAgTm90aWZ5U2V0dGluZ3NVcGRhdGUgPSAnc2V0dGluZ3Mvbm90aWZ5LXVwZGF0ZScsXHJcblxyXG4gICAgLy8gdW5pdmVyc2UgaGlzdG9yeVxyXG4gICAgTm90aWZ5VW5pdmVyc2VIaXN0b3J5VXBkYXRlID0gJ3VuaXZlcnNlLWhpc3Rvcnkvbm90aWZ5LXVwZGF0ZScsXHJcblxyXG4gICAgLy8gc2VydmVyIHNldHRpbmdzXHJcbiAgICBOb3RpZnlTZXJ2ZXJTZXR0aW5nc1VwZGF0ZSA9ICdzZXJ2ZXItc2V0dGluZ3Mvbm90aWZ5LXVwZGF0ZScsXHJcbiAgICBGb3JjZVVwZGF0ZVNlcnZlclNldHRpbmdzID0gJ3NlcnZlci1zZXR0aW5ncy9mb3JjZS11cGRhdGUnLFxyXG5cclxuICAgIC8vIGFjY291bnRzICYgdW5pdmVyc2VzXHJcbiAgICBVcGRhdGVQbGF5ZXJOYW1lID0gJ2FjY291bnRzL3VwZGF0ZS1wbGF5ZXItbmFtZScsXHJcbiAgICBVcGRhdGVVbml2ZXJzZU5hbWUgPSAndW5pdmVyc2VzL3VwZGF0ZS11bml2ZXJzZS1uYW1lJywgXHJcblxyXG4gICAgLy8gVW5pdmVyc2Utc3BlY2lmaWMgc2V0dGluZ3NcclxuICAgIE5vdGlmeVVuaXZlcnNlU3BlY2lmaWNTZXR0aW5nc1VwZGF0ZSA9ICd1bml2ZXJzZS1zcGVjaWZpYy1zZXR0aW5ncy9ub3RpZnktdXBkYXRlJyxcclxuXHJcbiAgICAvLyBsaWZlZm9ybXNcclxuICAgIFVwZGF0ZUxpZmVmb3JtRXhwZXJpZW5jZSA9ICdsaWZlZm9ybXMvdXBkYXRlLWxpZmVmb3JtLWV4cGVyaWVuY2UnLFxyXG4gICAgVXBkYXRlU2VsZWN0ZWRMaWZlZm9ybSA9ICdsaWZlZm9ybXMvdXBkYXRlLXNlbGVjdGVkLWxpZmVmb3JtJyxcclxuICAgIFVwZGF0ZVBsYW5ldEFjdGl2ZUxpZmVmb3JtQnVpbGRpbmdMZXZlbHMgPSAnbGlmZWZvcm1zL3VwZGF0ZS1hY3RpdmUtYnVpbGRpbmctbGV2ZWxzJyxcclxuICAgIFVwZGF0ZVBsYW5ldExpZmVmb3JtQnVpbGRpbmdMZXZlbHMgPSAnbGlmZWZvcm1zL3VwZGF0ZS1hbGwtYnVpbGRpbmctbGV2ZWxzJyxcclxuICAgIFVwZGF0ZVBsYW5ldEFjdGl2ZUxpZmVmb3JtVGVjaG5vbG9neUxldmVscyA9ICdsaWZlZm9ybXMvdXBkYXRlLWFjdGl2ZS10ZWNobm9sb2d5LWxldmVscycsXHJcbiAgICBVcGRhdGVQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lMZXZlbHMgPSAnbGlmZWZvcm1zL3VwZGF0ZS1hbGwtdGVjaG5vbG9neS1sZXZlbHMnLFxyXG4gICAgVHJhY2tMaWZlZm9ybURpc2NvdmVyeSA9ICdsaWZlZm9ybXMvdHJhY2stZGlzY292ZXJ5JyxcclxuICAgIExpZmVmb3JtRGlzY292ZXJ5ID0gJ2xpZmVmb3Jtcy9kaXNjb3ZlcnknLFxyXG4gICAgTmV3TGlmZWZvcm1EaXNjb3ZlcnkgPSAnbGlmZWZvcm1zL25ldy1kaXNjb3ZlcnknLFxyXG59XHJcbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZS5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdpZnkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHY1IH0gZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSAnNzc0NTIyZDMtNzkxMi00ZTVjLWI1NWItZTE3MTk4NjIwYjMyJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlV29ya2VyVXVpZCA9IHY1KCdzZXJ2aWNlLXdvcmtlcicsIG5hbWVzcGFjZSk7XHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlVHJhY2tpbmdVdWlkID0gdjUoJ21lc3NhZ2UtdHJhY2tpbmcnLCBuYW1lc3BhY2UpO1xyXG5leHBvcnQgY29uc3QgZW1waXJlVHJhY2tpbmdVdWlkID0gdjUoJ2VtcGlyZS10cmFja2luZycsIG5hbWVzcGFjZSk7XHJcbmV4cG9ydCBjb25zdCB1bml2ZXJzZUFjY291bnRUcmFja2luZ1V1aWQgPSB2NSgndW5pdmVyc2UtYWNjb3VudC10cmFja2luZycsIG5hbWVzcGFjZSk7XHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbFV1aWQgPSB2NSgnaW50ZXJuYWwnLCBuYW1lc3BhY2UpOyIsImV4cG9ydCBmdW5jdGlvbiBpZ25vcmVTdHVwaWRNZXNzYWdlUG9ydEVycm9ycygpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I/Lm1lc3NhZ2U7XHJcbiAgICBpZiAoIVtcclxuICAgICAgICAnUmVjZWl2aW5nIGVuZCBkb2VzIG5vdCBleGlzdC4nLFxyXG4gICAgICAgICdUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuJ1xyXG4gICAgXS5zb21lKGVycm9yID0+IG1lc3NhZ2U/LmluY2x1ZGVzKGVycm9yKSA/PyBmYWxzZSkpIHtcclxuICAgICAgICB0aHJvdyBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOb0RhdGFNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi4vbWVzc2FnZXMvTWVzc2FnZVR5cGVcIjtcclxuaW1wb3J0IHsgaWdub3JlU3R1cGlkTWVzc2FnZVBvcnRFcnJvcnMgfSBmcm9tIFwiLi9pZ25vcmVTdHVwaWRNZXNzYWdlUG9ydEVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlPFQgZXh0ZW5kcyBOb0RhdGFNZXNzYWdlPE1lc3NhZ2VUeXBlPj4obWVzc2FnZTogVCkge1xyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSwgaWdub3JlU3R1cGlkTWVzc2FnZVBvcnRFcnJvcnMpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50U2FmZSh0ZXh0OiBzdHJpbmcsIHJhZGl4ID0gMTApOiBudW1iZXIge1xyXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludCh0ZXh0LCByYWRpeCk7XHJcbiAgICBpZihpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3RleHR9JyBpcyBub3QgYSB2YWxpZCBpbnRlZ2VyIHZhbHVlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGbG9hdFNhZmUodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdCh0ZXh0KTtcclxuICAgIGlmKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dGV4dH0nIGlzIG5vdCBhIHZhbGlkIGludGVnZXIgdmFsdWVgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gX3Rocm93KG1lc3NhZ2U/OiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBuZXZlciB7XHJcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgeyBtZXNzYWdlLCBkYXRhIH07XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tPR2FtZSBUcmFja2VyXSAnICsgbWVzc2FnZSk7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlT2dhbWVNZXRhIH0gZnJvbSBcIi4uL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgcGFyc2VJbnRTYWZlIH0gZnJvbSBcIi4uL3V0aWxzL3BhcnNlTnVtYmVyc1wiO1xyXG5pbXBvcnQgeyBfdGhyb3cgfSBmcm9tIFwiLi4vdXRpbHMvX3Rocm93XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDb29raWVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gICAgY29uc3QgY29va2llczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cclxuICAgIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpXHJcbiAgICAgICAgLmZvckVhY2goY29va2llID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gY29va2llLnNwbGl0KCc9JykubWFwKHggPT4gZGVjb2RlVVJJQ29tcG9uZW50KHgudHJpbSgpKSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb29raWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZU1ldGEoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwib2dhbWUtbGFuZ3VhZ2VcIl0nKSBhcyBIVE1MTWV0YUVsZW1lbnQgfCBudWxsKT8uY29udGVudCA/PyBfdGhyb3coJ0Nhbm5vdCBmaW5kIGxhbmd1YWdlIG1ldGEgdGFnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdXNlckxhbmd1YWdlID0gZ2V0Q29va2llcygpWydvZ2xvY2FsZSddO1xyXG4gICAgXHJcbiAgICBpZih1c2VyTGFuZ3VhZ2UgPT0gbnVsbCB8fCB1c2VyTGFuZ3VhZ2UgPT0gJ3VuZGVmaW5lZCcpIHsgLy8geWVzLCBpdCdzIGFjdHVhbGx5IGEgc3RyaW5nIHdpdGggJ3VuZGVmaW5lZCcgaWYgeW91IHNhdmUgeW91ciBzZXR0aW5ncyB3aGlsZSBpbiB2bW9kZVxyXG4gICAgICAgIHJldHVybiBnZXRMYW5ndWFnZU1ldGEoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlckxhbmd1YWdlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2dhbWVNZXRhKCk6IE1lc3NhZ2VPZ2FtZU1ldGEge1xyXG4gICAgY29uc3QgdXNlckxhbmd1YWdlID0gZ2V0VXNlckxhbmd1YWdlKCk7XHJcblxyXG4gICAgY29uc3Qgc2VydmVyVGV4dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJvZ2FtZS11bml2ZXJzZVwiXScpIGFzIEhUTUxNZXRhRWxlbWVudCB8IG51bGwpPy5jb250ZW50ID8/IF90aHJvdygnQ2Fubm90IGZpbmQgdW5pdmVyc2UgbWV0YSB0YWcnKTtcclxuICAgIGNvbnN0IHNlcnZlclRleHRTcGxpdCA9IHNlcnZlclRleHQuc3BsaXQoJy4nKVswXS5zcGxpdCgnLScpO1xyXG4gICAgY29uc3Qgc2VydmVySWRUZXh0ID0gc2VydmVyVGV4dFNwbGl0WzBdLnJlcGxhY2UoL15zLywgJycpO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBzZXJ2ZXJUZXh0U3BsaXRbMV07XHJcbiAgICBcclxuICAgIGlmICghL15cXGQrJC8udGVzdChzZXJ2ZXJJZFRleHQpKSB7XHJcbiAgICAgICAgX3Rocm93KCdGb3VuZCBvZ2FtZSB1bml2ZXJzZSB0YWcgYnV0IGZhaWxlZCB0byBleHRyYWN0IHNlcnZlciBpZCBmcm9tIGl0Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2ZXJJZCA9IHBhcnNlSW50U2FmZShzZXJ2ZXJJZFRleHQsIDEwKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJJZFRleHQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwib2dhbWUtcGxheWVyLWlkXCJdJykgYXMgSFRNTE1ldGFFbGVtZW50IHwgbnVsbCk/LmNvbnRlbnQgPz8gX3Rocm93KCdDYW5ub3QgZmluZCBwbGF5ZXIgaWQgbWV0YSB0YWcnKTtcclxuICAgIGNvbnN0IHBsYXllcklkID0gcGFyc2VJbnRTYWZlKHBsYXllcklkVGV4dCwgMTApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgICAgdXNlckxhbmd1YWdlLFxyXG4gICAgICAgIHNlcnZlcklkLFxyXG4gICAgICAgIHBsYXllcklkLFxyXG4gICAgfTtcclxufSIsImltcG9ydCB7IF90aHJvdyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX3Rocm93XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmF3TWVzc2FnZUF0dHJpYnV0ZXMoZWxlbWVudDogRWxlbWVudCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IGV4dHJhY3RlZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAoYXR0cmlidXRlLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS1yYXcnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWUucmVwbGFjZSgnZGF0YS1yYXctJywgJycpO1xyXG4gICAgICAgICAgICBleHRyYWN0ZWRBdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBleHRyYWN0ZWRBdHRyaWJ1dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUF0dHJpYnV0ZXM8XHJcbiAgICBUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywge1xyXG4gICAgICAgIG9wdGlvbmFsOiBib29sZWFuO1xyXG4gICAgICAgIGNvbnZlcnNpb246IChyYXdWYWx1ZTogc3RyaW5nKSA9PiBhbnksXHJcbiAgICB9PlxyXG4+KGVsZW1lbnQ6IEVsZW1lbnQsIGNvbnZlcnNpb25zOiBUKVxyXG4gICAgOiB7IFtLZXkgaW4ga2V5b2YgVF06IFRbS2V5XVsnb3B0aW9uYWwnXSBleHRlbmRzIHRydWUgXHJcbiAgICAgICAgPyAoUmV0dXJuVHlwZTxUW0tleV1bJ2NvbnZlcnNpb24nXT4gfCB1bmRlZmluZWQpXHJcbiAgICAgICAgOiBSZXR1cm5UeXBlPFRbS2V5XVsnY29udmVyc2lvbiddPiBcclxuICAgIH1cclxue1xyXG4gICAgY29uc3QgcmF3QXR0cmlidXRlcyA9IGdldFJhd01lc3NhZ2VBdHRyaWJ1dGVzKGVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9IGFzIGFueTsgLy8gOihcclxuICAgIGZvcihjb25zdCBba2V5LCB7Y29udmVyc2lvbiwgb3B0aW9uYWx9XSBvZiBPYmplY3QuZW50cmllcyhjb252ZXJzaW9ucykpIHtcclxuICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHJhd0F0dHJpYnV0ZXNba2V5XTtcclxuXHJcbiAgICAgICAgaWYocmF3VmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZighb3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgIF90aHJvdyhgbWlzc2luZyByYXcgYXR0cmlidXRlIHZhbHVlIGZvciBhdHRyaWJ1dGUgJ2RhdGEtcmF3LSR7a2V5fSdgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb252ZXJzaW9uKHJhd1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSIsImltcG9ydCB7IF90aHJvdyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX3Rocm93XCI7XHJcblxyXG5jb25zdCBjc3NCYXNlID0gJ29nYW1lLXRyYWNrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIGJhc2U6IGAke2Nzc0Jhc2V9LW1zZ2AsXHJcbiAgICAgICAgcHJvY2Vzc2VkOiBgJHtjc3NCYXNlfS1tc2ctLXByb2Nlc3NlZGAsXHJcbiAgICAgICAgd2FpdGluZ1RvQmVQcm9jZXNzZWQ6IGAke2Nzc0Jhc2V9LW1zZy0td2FpdGluZy10by1iZS1wcm9jZXNzZWRgLFxyXG4gICAgICAgIGVycm9yOiBgJHtjc3NCYXNlfS1tc2ctLWVycm9yYCxcclxuICAgICAgICBpZ25vcmVkOiBgJHtjc3NCYXNlfS1tc2ctLWlnbm9yZWRgLFxyXG4gICAgICAgIGhpZGVDb250ZW50OiBgJHtjc3NCYXNlfS1tc2ctLWhpZGUtY29udGVudGAsXHJcbiAgICBcclxuICAgICAgICBleHBlZGl0aW9uOiBgJHtjc3NCYXNlfS1tc2ctLWV4cGVkaXRpb25gLFxyXG4gICAgICAgIGxpZmVmb3JtRGlzY292ZXJ5OiBgJHtjc3NCYXNlfS1tc2ctLWxpZmVmb3JtLWRpc2NvdmVyeWAsXHJcbiAgICAgICAgZGVicmlzRmllbGRSZXBvcnQ6IGAke2Nzc0Jhc2V9LW1zZy0tZGVicmlzLWZpZWxkLXJlcG9ydGAsXHJcbiAgICAgICAgY29tYmF0UmVwb3J0OiAgYCR7Y3NzQmFzZX0tbXNnLS1jb21iYXQtcmVwb3J0YCxcclxuXHJcbiAgICAgICAgY3VzdG9tTWVzc2FnZUNvbnRlbnQ6IGAke2Nzc0Jhc2V9LW1zZ19fY29udGVudGAsXHJcbiAgICB9LFxyXG4gICAgbG9hZGVyOiBgJHtjc3NCYXNlfS1sb2FkZXJgLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobXNnRWxlbTogRWxlbWVudCwgaHRtbENvbnRlbnQ6IHN0cmluZyB8IGZhbHNlKSB7XHJcbiAgICBsZXQgbmV3Q29udGVudCA9IG1zZ0VsZW0ucXVlcnlTZWxlY3RvcihgLiR7Y3NzQ2xhc3Nlcy5tZXNzYWdlcy5jdXN0b21NZXNzYWdlQ29udGVudH1gKTtcclxuICAgIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcclxuICAgICAgICBuZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3Q29udGVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMuY3VzdG9tTWVzc2FnZUNvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBtc2dDb250ZW50ID0gbXNnRWxlbS5xdWVyeVNlbGVjdG9yKCcubXNnQ29udGVudCcpID8/IF90aHJvdygnbm8gbWVzc2FnZSBjb250ZW50IGZvdW5kJyk7XHJcbiAgICAgICAgbXNnRWxlbS5pbnNlcnRCZWZvcmUobmV3Q29udGVudCwgbXNnQ29udGVudC5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGh0bWxDb250ZW50ID09IGZhbHNlKSB7XHJcbiAgICAgICAgbmV3Q29udGVudC5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3Q29udGVudC5pbm5lckhUTUwgPSBodG1sQ29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXI6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChudW1iZXIpO1xyXG59IiwiaW1wb3J0IHsgTWVzc2FnZU9nYW1lTWV0YSB9IGZyb20gJy4uL21lc3NhZ2VzL01lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9nYW1lTWV0YXNFcXVhbChhOiBNZXNzYWdlT2dhbWVNZXRhLCBiOiBNZXNzYWdlT2dhbWVNZXRhLCBpbmNsdWRlUGxheWVySWQgPSB0cnVlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYS5sYW5ndWFnZSA9PSBiLmxhbmd1YWdlXHJcbiAgICAgICAgJiYgYS5zZXJ2ZXJJZCA9PSBiLnNlcnZlcklkXHJcbiAgICAgICAgJiYgKCFpbmNsdWRlUGxheWVySWQgfHwgYS5wbGF5ZXJJZCA9PSBiLnBsYXllcklkKTtcclxufSIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyBFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2V4cGVkaXRpb25zL0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbFwiO1xyXG5pbXBvcnQgeyBFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvZXhwZWRpdGlvbnMvRXhwZWRpdGlvbkV2ZW50c1wiO1xyXG5pbXBvcnQgeyBFeHBlZGl0aW9uRXZlbnRUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9leHBlZGl0aW9ucy9FeHBlZGl0aW9uRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9saWZlZm9ybS1kaXNjb3Zlcmllcy9MaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBJdGVtSGFzaCB9IGZyb20gXCIuLi9tb2RlbHMvb2dhbWUvaXRlbXMvSXRlbUhhc2hcIjtcclxuaW1wb3J0IHsgVmFsaWRMaWZlZm9ybVR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGVcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9vZ2FtZS9yZXNvdXJjZXMvUmVzb3VyY2VUeXBlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9NZXNzYWdlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vTWVzc2FnZVR5cGVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGUge1xyXG4gICAgRXhwZWRpdGlvblRyYWNraW5nID0gJ21lc3NhZ2UtdHJhY2tpbmcvZXhwZWRpdGlvbnMnLFxyXG4gICAgRXhwZWRpdGlvblRyYWNraW5nTG9zdEZsZWV0ID0gJ21lc3NhZ2UtdHJhY2tpbmcvZXhwZWRpdGlvbnMvbG9zdC1mbGVldCcsXHJcbiAgICBNZXNzYWdlVHJhY2tpbmdFcnJvciA9ICdtZXNzYWdlLXRyYWNraW5nL2Vycm9yJyxcclxuICAgIENvbWJhdFRyYWNraW5nID0gJ21lc3NhZ2UtdHJhY2tpbmcvY29tYmF0cycsXHJcbiAgICBEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nID0gJ21lc3NhZ2UtdHJhY2tpbmcvZGVicmlzLWZpZWxkLXJlcG9ydHMnLFxyXG4gICAgTGlmZWZvcm1EaXNjb3ZlcnlUcmFja2luZyA9ICdtZXNzYWdlLXRyYWNraW5nL2xpZmVmb3JtLWRpc2NvdmVyaWVzJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY05vdGlmaWNhdGlvbkRhdGE8VCBleHRlbmRzIE5vdGlmaWNhdGlvblR5cGU+IHtcclxuICAgIG1lc3NhZ2VJZD86IHN0cmluZztcclxuICAgIHR5cGU6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbk1lc3NhZ2U8VFR5cGUgZXh0ZW5kcyBOb3RpZmljYXRpb25UeXBlID0gTm90aWZpY2F0aW9uVHlwZSwgVERhdGEgZXh0ZW5kcyB7fSA9IHt9PiA9IE1lc3NhZ2U8TWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLCBURGF0YSAmIEJhc2ljTm90aWZpY2F0aW9uRGF0YTxUVHlwZT4+O1xyXG5cclxuLy8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGZvciBtZXNzYWdlIHRyYWNraW5nXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwZWRpdGlvblRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEge1xyXG4gICAgcmVzb3VyY2VzOiBSZWNvcmQ8UmVzb3VyY2VUeXBlLCBudW1iZXI+O1xyXG4gICAgc2hpcHM6IFJlY29yZDxFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZSwgbnVtYmVyPjtcclxuICAgIGRhcmtNYXR0ZXI6IG51bWJlcjtcclxuICAgIGl0ZW1zOiBJdGVtSGFzaFtdO1xyXG4gICAgZXZlbnRzOiBSZWNvcmQ8RXhwZWRpdGlvbkV2ZW50VHlwZSwgbnVtYmVyPjtcclxuICAgIGRlcGxldGlvbjogUmVjb3JkPEV4cGVkaXRpb25EZXBsZXRpb25MZXZlbCB8ICd1bmtub3duJywgbnVtYmVyPjtcclxufVxyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uVHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlID0gTm90aWZpY2F0aW9uTWVzc2FnZTxOb3RpZmljYXRpb25UeXBlLkV4cGVkaXRpb25UcmFja2luZywgRXhwZWRpdGlvblRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGE+O1xyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uVHJhY2tpbmdMb3N0RmxlZXROb3RpZmljYXRpb25NZXNzYWdlID0gTm90aWZpY2F0aW9uTWVzc2FnZTxOb3RpZmljYXRpb25UeXBlLkV4cGVkaXRpb25UcmFja2luZ0xvc3RGbGVldCwgeyBjb3VudDogbnVtYmVyIH0+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEge1xyXG4gICAgZXZlbnRzOiBSZWNvcmQ8TGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUsIG51bWJlcj47XHJcbiAgICBuZXdMaWZlZm9ybXM6IFZhbGlkTGlmZWZvcm1UeXBlW107XHJcbiAgICBsaWZlZm9ybUV4cGVyaWVuY2U6IFJlY29yZDxWYWxpZExpZmVmb3JtVHlwZSwgbnVtYmVyPjtcclxuICAgIGFydGlmYWN0czogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIExpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlID0gTm90aWZpY2F0aW9uTWVzc2FnZTxOb3RpZmljYXRpb25UeXBlLkxpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmcsIExpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlRGF0YT47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEge1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHJlc291cmNlczogUmVjb3JkPFJlc291cmNlVHlwZSwgbnVtYmVyPjtcclxufVxyXG5leHBvcnQgdHlwZSBDb21iYXRUcmFja2luZ05vdGlmaWNhdGlvbk1lc3NhZ2UgPSBOb3RpZmljYXRpb25NZXNzYWdlPE5vdGlmaWNhdGlvblR5cGUuQ29tYmF0VHJhY2tpbmcsIENvbWJhdFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGE+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEge1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHJlc291cmNlczogUmVjb3JkPFJlc291cmNlVHlwZSwgbnVtYmVyPjtcclxufVxyXG5leHBvcnQgdHlwZSBEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSA9IE5vdGlmaWNhdGlvbk1lc3NhZ2U8Tm90aWZpY2F0aW9uVHlwZS5EZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nLCBEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGE+O1xyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZVRyYWNraW5nRXJyb3JOb3RpZmljYXRpb25NZXNzYWdlID0gTm90aWZpY2F0aW9uTWVzc2FnZTxOb3RpZmljYXRpb25UeXBlLk1lc3NhZ2VUcmFja2luZ0Vycm9yLCB7IGNvdW50OiBudW1iZXIgfT47IiwiZXhwb3J0IGVudW0gUmVzb3VyY2VUeXBlIHtcclxuICAgIG1ldGFsID0gJ21ldGFsJyxcclxuICAgIGNyeXN0YWwgPSAnY3J5c3RhbCcsXHJcbiAgICBkZXV0ZXJpdW0gPSAnZGV1dGVyaXVtJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc291cmNlVHlwZXMgPSBbXHJcbiAgICBSZXNvdXJjZVR5cGUubWV0YWwsXHJcbiAgICBSZXNvdXJjZVR5cGUuY3J5c3RhbCxcclxuICAgIFJlc291cmNlVHlwZS5kZXV0ZXJpdW0sXHJcbl07IiwiZXhwb3J0IGVudW0gT2dhbWVSYXdNZXNzYWdlVHlwZSB7XHJcbiAgICBjb21iYXRSZXBvcnQgPSAyNSxcclxuICAgIGRlYnJpc0ZpZWxkSGFydmVzdFJlcG9ydCA9IDMyLFxyXG4gICAgcmVzb3VyY2VUcmFuc3BvcnQgPSAzMyxcclxuICAgIGZsZWV0QXJyaXZhbCA9IDM0LFxyXG4gICAgZXhwZWRpdGlvbiA9IDQxLFxyXG4gICAgbGlmZWZvcm1EaXNjb3ZlcnkgPSA2MSxcclxufVxyXG4iLCJleHBvcnQgZW51bSBQbGFuZXRUeXBlIHtcclxuICAgIHBsYW5ldCA9IDEsXHJcbiAgICBtb29uID0gMyxcclxuICAgIGRlYnJpc0ZpZWxkID0gMixcclxufSIsImltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSBcIi4uL21vZGVscy9vZ2FtZS9jb21tb24vQ29vcmRpbmF0ZXNcIjtcclxuaW1wb3J0IHsgUGxhbmV0VHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvb2dhbWUvY29tbW9uL1BsYW5ldFR5cGVcIjtcclxuaW1wb3J0IHsgcGFyc2VJbnRTYWZlIH0gZnJvbSBcIi4vcGFyc2VOdW1iZXJzXCI7XHJcblxyXG5jb25zdCBjb29yZHNSZWdleCA9IC9eXFxbPyg/PGdhbGF4eT5cXGQrKTooPzxzeXN0ZW0+XFxkKyk6KD88cG9zaXRpb24+XFxkKylcXF0/JC87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29yZGluYXRlcyhjb29yZHM6IHN0cmluZywgdHlwZSA9IFBsYW5ldFR5cGUucGxhbmV0KTogQ29vcmRpbmF0ZXMge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBjb29yZHMubWF0Y2goY29vcmRzUmVnZXgpO1xyXG5cclxuICAgIGlmIChtYXRjaD8uZ3JvdXBzID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgY29vcmRpbmF0ZXMgJyR7Y29vcmRzfSdgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhbGF4eTogcGFyc2VJbnRTYWZlKG1hdGNoLmdyb3Vwcy5nYWxheHkpLFxyXG4gICAgICAgIHN5c3RlbTogcGFyc2VJbnRTYWZlKG1hdGNoLmdyb3Vwcy5zeXN0ZW0pLFxyXG4gICAgICAgIHBvc2l0aW9uOiBwYXJzZUludFNhZmUobWF0Y2guZ3JvdXBzLnBvc2l0aW9uKSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgfTtcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VUeXBlXCI7XHJcbmltcG9ydCB7IGdldE9nYW1lTWV0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2dhbWUtd2ViL2dldE9nYW1lTWV0YVwiO1xyXG5pbXBvcnQgeyBfbG9nRGVidWcsIF9sb2dFcnJvciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX2xvZ1wiO1xyXG5pbXBvcnQgeyBfdGhyb3cgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL190aHJvd1wiO1xyXG5pbXBvcnQgeyBnZXRNZXNzYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvZ2V0TWVzc2FnZUF0dHJpYnV0ZXNcIjtcclxuaW1wb3J0IHsgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudCwgY3NzQ2xhc3NlcywgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVRyYWNraW5nRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzL3RyYWNraW5nL21pc2MnO1xyXG5pbXBvcnQgeyBEZWJyaXNGaWVsZFJlcG9ydE1lc3NhZ2UsIFRyYWNrRGVicmlzRmllbGRSZXBvcnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzL3RyYWNraW5nL2RlYnJpcy1maWVsZHMnO1xyXG5pbXBvcnQgeyBvZ2FtZU1ldGFzRXF1YWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9vZ2FtZU1ldGFzRXF1YWxcIjtcclxuaW1wb3J0IHsgcGFyc2VJbnRTYWZlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9wYXJzZU51bWJlcnNcIjtcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvY29tbXVuaWNhdGlvbi9zZW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlVHJhY2tpbmdVdWlkIH0gZnJvbSBcIkAvc2hhcmVkL3V1aWRcIjtcclxuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSwgRGVicmlzRmllbGRSZXBvcnRUcmFja2luZ05vdGlmaWNhdGlvbk1lc3NhZ2VEYXRhLCBNZXNzYWdlVHJhY2tpbmdFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UsIE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVR5cGVzIH0gZnJvbSBcIkAvc2hhcmVkL21vZGVscy9vZ2FtZS9yZXNvdXJjZXMvUmVzb3VyY2VUeXBlXCI7XHJcbmltcG9ydCB7IHNldHRpbmdzV3JhcHBlciB9IGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdNZXNzYWdlVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdNZXNzYWdlVHlwZVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb3JkaW5hdGVzIH0gZnJvbSBcIkAvc2hhcmVkL3V0aWxzL3BhcnNlQ29vcmRpbmF0ZXNcIjtcclxuaW1wb3J0IHsgUGxhbmV0VHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvY29tbW9uL1BsYW5ldFR5cGVcIjtcclxuIFxyXG5jb25zdCBub3RpZmljYXRpb25JZHMgPSB7XHJcbiAgICByZXN1bHQ6IHY0KCksXHJcbiAgICBlcnJvcjogdjQoKSxcclxufTtcclxuY29uc3Qgd2FpdGluZ0ZvclJlcG9ydHM6IFJlY29yZDxudW1iZXIsIHRydWU+ID0ge307XHJcbmNvbnN0IGZhaWxlZFRvVHJhY2tSZXBvcnQ6IFJlY29yZDxudW1iZXIsIHRydWU+ID0ge307XHJcbmNvbnN0IHRvdGFsRGVicmlzRmllbGRSZXN1bHQ6IERlYnJpc0ZpZWxkUmVwb3J0VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlRGF0YSA9IHtcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzb3VyY2VzOiB7XHJcbiAgICAgICAgbWV0YWw6IDAsXHJcbiAgICAgICAgY3J5c3RhbDogMCxcclxuICAgICAgICBkZXV0ZXJpdW06IDAsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2U8TWVzc2FnZVR5cGUsIGFueT4pIHtcclxuICAgIGNvbnN0IG9nYW1lTWV0YSA9IGdldE9nYW1lTWV0YSgpO1xyXG4gICAgaWYgKCFvZ2FtZU1ldGFzRXF1YWwob2dhbWVNZXRhLCBtZXNzYWdlLm9nYW1lTWV0YSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRlYnJpc0ZpZWxkUmVwb3J0OlxyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTmV3RGVicmlzRmllbGRSZXBvcnQ6IHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gbWVzc2FnZSBhcyBEZWJyaXNGaWVsZFJlcG9ydE1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYubXNnW2RhdGEtbXNnLWlkPVwiJHttc2cuZGF0YS5pZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIGRlYnJpcyBmaWVsZCByZXBvcnQgd2l0aCBpZCAnJHttc2cuZGF0YS5pZH0nYCk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMuZGVicmlzRmllbGRSZXBvcnQpO1xyXG5cclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMucHJvY2Vzc2VkKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzV3JhcHBlci5zZXR0aW5ncy5tZXNzYWdlVHJhY2tpbmcuc2hvd1NpbXBsaWZpZWRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmhpZGVDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50KGRpdiwgYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm9nYW1lLXRyYWNrZXItZGVicmlzLWZpZWxkLXJlcG9ydFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiLS1jb2x1bW5zOiAke21zZy5kYXRhLmRldXRlcml1bSAhPSBudWxsID8gMyA6IDJ9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1yZXNvdXJjZSBtZXRhbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZ2FtZS10cmFja2VyLXJlc291cmNlIGNyeXN0YWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke21zZy5kYXRhLmRldXRlcml1bSAhPSBudWxsID8gJzxkaXYgY2xhc3M9XCJvZ2FtZS10cmFja2VyLXJlc291cmNlIGRldXRlcml1bVwiPjwvZGl2PicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHttc2cuZGF0YS5tZXRhbCA9PSAwID8gJ25vLXJlc291cmNlcycgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXROdW1iZXIobXNnLmRhdGEubWV0YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke21zZy5kYXRhLmNyeXN0YWwgPT0gMCA/ICduby1yZXNvdXJjZXMnIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9ybWF0TnVtYmVyKG1zZy5kYXRhLmNyeXN0YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7bXNnLmRhdGEuZGV1dGVyaXVtICE9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA/IGAgPGRpdiBjbGFzcz1cIiR7bXNnLmRhdGEuZGV1dGVyaXVtID09IDAgPyAnbm8tcmVzb3VyY2VzJyA6ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXROdW1iZXIobXNnLmRhdGEuZGV1dGVyaXVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ0ZvclJlcG9ydHNbbXNnLmRhdGEuaWRdO1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09IE1lc3NhZ2VUeXBlLk5ld0RlYnJpc0ZpZWxkUmVwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVSZXBvcnRSZXN1bHRzKG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlRyYWNraW5nRXJyb3I6IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBpZCB9ID0gKG1lc3NhZ2UgYXMgTWVzc2FnZVRyYWNraW5nRXJyb3JNZXNzYWdlKS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAodHlwZSAhPSAnZGVicmlzLWZpZWxkLXJlcG9ydCcpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYubXNnW2RhdGEtbXNnLWlkPVwiJHtpZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIGNvbWJhdCByZXBvcnQgbWVzc2FnZSB3aXRoIGlkICcke2lkfSdgKTtcclxuXHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzZXMubWVzc2FnZXMud2FpdGluZ1RvQmVQcm9jZXNzZWQpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmVycm9yKTtcclxuICAgICAgICAgICAgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudChkaXYsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nRm9yUmVwb3J0c1tpZF07XHJcbiAgICAgICAgICAgIGZhaWxlZFRvVHJhY2tSZXBvcnRbaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2tEZWJyaXNGaWVsZFJlcG9ydHMobWVzc2FnZXM6IEVsZW1lbnRbXSkge1xyXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnRTYWZlKG1zZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnLWlkJykgPz8gX3Rocm93KCdDYW5ub3QgZmluZCBtZXNzYWdlIGlkJyksIDEwKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gcHJlcGFyZSBtZXNzYWdlIHRvIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtc2cucXVlcnlTZWxlY3RvcignLnJhd01lc3NhZ2VEYXRhJykgPz8gX3Rocm93KGBDYW5ub3QgZmluZCByYXdNZXNzYWdlRGF0YSBlbGVtZW50YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGF0ZSwgXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRjb29yZGluYXRlczogY29vcmRzLCBcclxuICAgICAgICAgICAgICAgIHJlY3ljbGVkcmVzb3VyY2VzOiByZWN5Y2xlZFJlc291cmNlcywgXHJcbiAgICAgICAgICAgIH0gPSBnZXRNZXNzYWdlQXR0cmlidXRlcyhlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gcGFyc2VJbnRTYWZlKHZhbHVlLCAxMCkgKiAxMDAwLCBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRjb29yZGluYXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiB2YWx1ZSA9PiBwYXJzZUNvb3JkaW5hdGVzKHZhbHVlLCBQbGFuZXRUeXBlLmRlYnJpc0ZpZWxkKSwgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVjeWNsZWRyZXNvdXJjZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjoganNvbiA9PiBKU09OLnBhcnNlKGpzb24pIGFzIHsgbWV0YWw6IG51bWJlcjsgY3J5c3RhbDogbnVtYmVyOyBkZXV0ZXJpdW06IG51bWJlciB9LCBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgX3Rocm93KCdNZXNzYWdlIHRpbWVzdGFtcCBpcyBOYU4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gc2VuZCBtZXNzYWdlIHRvIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlck1lc3NhZ2U6IFRyYWNrRGVicmlzRmllbGRSZXBvcnRNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuVHJhY2tEZWJyaXNGaWVsZFJlcG9ydCxcclxuICAgICAgICAgICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb29yZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsOiByZWN5Y2xlZFJlc291cmNlcy5tZXRhbCA/PyAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnlzdGFsOiByZWN5Y2xlZFJlc291cmNlcy5jcnlzdGFsID8/IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldXRlcml1bTogcmVjeWNsZWRSZXNvdXJjZXMuZGV1dGVyaXVtID8/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2Uod29ya2VyTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJrIG1lc3NhZ2UgYXMgXCJ3YWl0aW5nIGZvciByZXN1bHRcIlxyXG4gICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMubWVzc2FnZXMuYmFzZSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMubWVzc2FnZXMud2FpdGluZ1RvQmVQcm9jZXNzZWQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobXNnLCBgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItbG9hZGVyXCI+PC9kaXY+YCk7XHJcblxyXG4gICAgICAgICAgICB3YWl0aW5nRm9yUmVwb3J0c1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF9sb2dFcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmJhc2UsIGNzc0NsYXNzZXMubWVzc2FnZXMuZXJyb3IpO1xyXG4gICAgICAgICAgICBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50KG1zZywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHdhaXRpbmdGb3JSZXBvcnRzW2lkXTtcclxuICAgICAgICAgICAgZmFpbGVkVG9UcmFja1JlcG9ydFtpZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZW5kTm90aWZpY2F0aW9uTWVzc2FnZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCkge1xyXG4gICAgY29uc3QgZmFpbGVkID0gT2JqZWN0LmtleXMoZmFpbGVkVG9UcmFja1JlcG9ydCkubGVuZ3RoO1xyXG4gICAgaWYgKGZhaWxlZCA+IDApIHtcclxuICAgICAgICBzZW5kRXJyb3JOb3RpZmljYXRpb25NZXNzYWdlKGZhaWxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvdGFsRGVicmlzRmllbGRSZXN1bHQuY291bnQgPT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtc2c6IERlYnJpc0ZpZWxkUmVwb3J0VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbixcclxuICAgICAgICBvZ2FtZU1ldGE6IGdldE9nYW1lTWV0YSgpLFxyXG4gICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkRlYnJpc0ZpZWxkUmVwb3J0VHJhY2tpbmcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogbm90aWZpY2F0aW9uSWRzLnJlc3VsdCxcclxuICAgICAgICAgICAgLi4udG90YWxEZWJyaXNGaWVsZFJlc3VsdCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UoZmFpbGVkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1zZzogTWVzc2FnZVRyYWNraW5nRXJyb3JOb3RpZmljYXRpb25NZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbixcclxuICAgICAgICBvZ2FtZU1ldGE6IGdldE9nYW1lTWV0YSgpLFxyXG4gICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk1lc3NhZ2VUcmFja2luZ0Vycm9yLFxyXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IG5vdGlmaWNhdGlvbklkcy5lcnJvcixcclxuICAgICAgICAgICAgY291bnQ6IGZhaWxlZCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVJlcG9ydFJlc3VsdHMobXNnOiBEZWJyaXNGaWVsZFJlcG9ydE1lc3NhZ2UpIHtcclxuICAgIGRlbGV0ZSB3YWl0aW5nRm9yUmVwb3J0c1ttc2cuZGF0YS5pZF07XHJcbiAgICB0b3RhbERlYnJpc0ZpZWxkUmVzdWx0LmNvdW50Kys7XHJcblxyXG4gICAgUmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJlc291cmNlID0+IHRvdGFsRGVicmlzRmllbGRSZXN1bHQucmVzb3VyY2VzW3Jlc291cmNlXSArPSBtc2cuZGF0YVtyZXNvdXJjZV0gPz8gMCk7XHJcblxyXG4gICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWJyaXNGaWVsZFRyYWNraW5nID0ge1xyXG4gICAgb25NZXNzYWdlLFxyXG4gICAgbWVzc2FnZVR5cGU6IE9nYW1lUmF3TWVzc2FnZVR5cGUuZGVicmlzRmllbGRIYXJ2ZXN0UmVwb3J0LFxyXG4gICAgdHJhY2s6IHRyYWNrRGVicmlzRmllbGRSZXBvcnRzLFxyXG59OyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9sb2coLi4uZGF0YTogYW55W10pIHtcclxuICAgIGNvbnNvbGUubG9nKCdbT0dhbWUgVHJhY2tlcl0nLCAuLi5kYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9sb2dFcnJvciguLi5kYXRhOiBhbnlbXSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW09HYW1lIFRyYWNrZXJdJywgLi4uZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbG9nV2FybmluZyguLi5kYXRhOiBhbnlbXSkge1xyXG4gICAgY29uc29sZS53YXJuKCdbT0dhbWUgVHJhY2tlcl0nLCAuLi5kYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9sb2dEZWJ1ZyguLi5kYXRhOiBhbnlbXSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnW09HYW1lIFRyYWNrZXJdJywgZm9ybWF0KERhdGUubm93KCksICd5eXl5LU1NLWRkIEhILW1tLXNzLlNTUycpLCAuLi5kYXRhKTtcclxufSIsImV4cG9ydCBlbnVtIFNoaXBUeXBlIHtcclxuICAgIHNtYWxsQ2FyZ28gPSAyMDIsXHJcbiAgICBsYXJnZUNhcmdvID0gMjAzLFxyXG4gICAgbGlnaHRGaWdodGVyID0gMjA0LFxyXG4gICAgaGVhdnlGaWdodGVyID0gMjA1LFxyXG4gICAgY3J1aXNlciA9IDIwNixcclxuICAgIGJhdHRsZXNoaXAgPSAyMDcsXHJcbiAgICBjb2xvbnlTaGlwID0gMjA4LFxyXG4gICAgcmVjeWNsZXIgPSAyMDksXHJcbiAgICBlc3Bpb25hZ2VQcm9iZSA9IDIxMCxcclxuICAgIGJvbWJlciA9IDIxMSxcclxuICAgIHNvbGFyU2F0ZWxsaXRlID0gMjEyLFxyXG4gICAgZGVzdHJveWVyID0gMjEzLFxyXG4gICAgZGVhdGhTdGFyID0gMjE0LFxyXG4gICAgYmF0dGxlY3J1aXNlciA9IDIxNSxcclxuICAgIGNyYXdsZXIgPSAyMTcsXHJcbiAgICByZWFwZXIgPSAyMTgsXHJcbiAgICBwYXRoZmluZGVyID0gMjE5LFxyXG59XHJcbmV4cG9ydCB0eXBlIFN0YXRpb25hcnlTaGlwVHlwZSA9IFNoaXBUeXBlLmNyYXdsZXIgfCBTaGlwVHlwZS5zb2xhclNhdGVsbGl0ZTtcclxuZXhwb3J0IHR5cGUgTm9uU3RhdGlvbmFyeVNoaXBUeXBlID0gRXhjbHVkZTxTaGlwVHlwZSwgU3RhdGlvbmFyeVNoaXBUeXBlPjtcclxuXHJcbmV4cG9ydCB0eXBlIFBsYW5ldFNoaXBUeXBlID0gU2hpcFR5cGU7XHJcbmV4cG9ydCB0eXBlIE1vb25TaGlwVHlwZSA9IEV4Y2x1ZGU8U2hpcFR5cGUsIFNoaXBUeXBlLmNyYXdsZXI+O1xyXG5cclxuZXhwb3J0IHR5cGUgTWlsaXRhcnlTaGlwVHlwZSA9IChcclxuICAgIHwgU2hpcFR5cGUubGlnaHRGaWdodGVyXHJcbiAgICB8IFNoaXBUeXBlLmhlYXZ5RmlnaHRlclxyXG4gICAgfCBTaGlwVHlwZS5jcnVpc2VyXHJcbiAgICB8IFNoaXBUeXBlLmJhdHRsZXNoaXBcclxuICAgIHwgU2hpcFR5cGUuYmF0dGxlY3J1aXNlclxyXG4gICAgfCBTaGlwVHlwZS5ib21iZXJcclxuICAgIHwgU2hpcFR5cGUuZGVzdHJveWVyXHJcbiAgICB8IFNoaXBUeXBlLmRlYXRoU3RhclxyXG4gICAgfCBTaGlwVHlwZS5yZWFwZXJcclxuICAgIHwgU2hpcFR5cGUucGF0aGZpbmRlclxyXG4gICAgfCBTaGlwVHlwZS5jcmF3bGVyIC8vIHllcywgaXQncyBjb3VudGVkIHRvIHRoZSBtaWxpdGFyeSBzaGlwc1xyXG4pO1xyXG5leHBvcnQgdHlwZSBDaXZpbFNoaXBUeXBlID0gKFxyXG4gICAgfCBTaGlwVHlwZS5zbWFsbENhcmdvXHJcbiAgICB8IFNoaXBUeXBlLmxhcmdlQ2FyZ29cclxuICAgIHwgU2hpcFR5cGUuY29sb255U2hpcFxyXG4gICAgfCBTaGlwVHlwZS5yZWN5Y2xlclxyXG4gICAgfCBTaGlwVHlwZS5lc3Bpb25hZ2VQcm9iZVxyXG4gICAgfCBTaGlwVHlwZS5zb2xhclNhdGVsbGl0ZVxyXG4pOyIsImltcG9ydCB7IEl0ZW1IYXNoIH0gZnJvbSAnLi4vb2dhbWUvaXRlbXMvSXRlbUhhc2gnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVR5cGUgfSBmcm9tICcuLi9vZ2FtZS9yZXNvdXJjZXMvUmVzb3VyY2VUeXBlJztcclxuaW1wb3J0IHsgU2hpcFR5cGUgfSBmcm9tICcuLi9vZ2FtZS9zaGlwcy9TaGlwVHlwZSc7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25EZXBsZXRpb25MZXZlbCB9IGZyb20gJy4vRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsJztcclxuaW1wb3J0IHsgRXhwZWRpdGlvbkV2ZW50U2l6ZSB9IGZyb20gJy4vRXhwZWRpdGlvbkV2ZW50U2l6ZSc7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25FdmVudFR5cGUgfSBmcm9tICcuL0V4cGVkaXRpb25FdmVudFR5cGUnO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVkaXRpb25FdmVudEJhc2Uge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGRhdGU6IG51bWJlcjtcclxuICAgIHR5cGU6IEV4cGVkaXRpb25FdmVudFR5cGU7XHJcblxyXG4gICAgZGVwbGV0aW9uPzogRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRXhwZWRpdGlvbkV2ZW50V2l0aFNpemUge1xyXG4gICAgc2l6ZTogRXhwZWRpdGlvbkV2ZW50U2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50RGFya01hdHRlciA9IEV4cGVkaXRpb25FdmVudEJhc2UgJiBFeHBlZGl0aW9uRXZlbnRXaXRoU2l6ZSAmIHtcclxuICAgIHR5cGU6IEV4cGVkaXRpb25FdmVudFR5cGUuZGFya01hdHRlcjtcclxuICAgIGRhcmtNYXR0ZXI6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEV4cGVkaXRpb25FdmVudFJlc291cmNlc0Ftb3VudCA9IFJlY29yZDxSZXNvdXJjZVR5cGUsIG51bWJlcj47XHJcblxyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uRXZlbnRSZXNvdXJjZXMgPSBFeHBlZGl0aW9uRXZlbnRCYXNlICYgRXhwZWRpdGlvbkV2ZW50V2l0aFNpemUgJiB7XHJcbiAgICB0eXBlOiBFeHBlZGl0aW9uRXZlbnRUeXBlLnJlc291cmNlcztcclxuICAgIHJlc291cmNlczogRXhwZWRpdGlvbkV2ZW50UmVzb3VyY2VzQW1vdW50O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkZpbmRhYmxlU2hpcFR5cGUgPVxyXG4gICAgfCBTaGlwVHlwZS5saWdodEZpZ2h0ZXJcclxuICAgIHwgU2hpcFR5cGUuaGVhdnlGaWdodGVyXHJcbiAgICB8IFNoaXBUeXBlLmNydWlzZXJcclxuICAgIHwgU2hpcFR5cGUuYmF0dGxlc2hpcFxyXG4gICAgfCBTaGlwVHlwZS5ib21iZXJcclxuICAgIHwgU2hpcFR5cGUuYmF0dGxlY3J1aXNlclxyXG4gICAgfCBTaGlwVHlwZS5kZXN0cm95ZXJcclxuICAgIHwgU2hpcFR5cGUucmVhcGVyXHJcbiAgICB8IFNoaXBUeXBlLnBhdGhmaW5kZXJcclxuICAgIHwgU2hpcFR5cGUuc21hbGxDYXJnb1xyXG4gICAgfCBTaGlwVHlwZS5sYXJnZUNhcmdvXHJcbiAgICB8IFNoaXBUeXBlLmVzcGlvbmFnZVByb2JlXHJcbiAgICA7XHJcbmV4cG9ydCBjb25zdCBFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZXM6IEV4cGVkaXRpb25GaW5kYWJsZVNoaXBUeXBlW10gPSBbXHJcbiAgICBTaGlwVHlwZS5saWdodEZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5oZWF2eUZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5jcnVpc2VyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlc2hpcCxcclxuICAgIFNoaXBUeXBlLmJvbWJlcixcclxuICAgIFNoaXBUeXBlLmJhdHRsZWNydWlzZXIsXHJcbiAgICBTaGlwVHlwZS5kZXN0cm95ZXIsXHJcbiAgICBTaGlwVHlwZS5yZWFwZXIsXHJcbiAgICBTaGlwVHlwZS5wYXRoZmluZGVyLFxyXG4gICAgU2hpcFR5cGUuc21hbGxDYXJnbyxcclxuICAgIFNoaXBUeXBlLmxhcmdlQ2FyZ28sXHJcbiAgICBTaGlwVHlwZS5lc3Bpb25hZ2VQcm9iZSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uRmluZGFibGVGbGVldCA9IFBhcnRpYWw8UmVjb3JkPEV4cGVkaXRpb25GaW5kYWJsZVNoaXBUeXBlLCBudW1iZXI+PjtcclxuXHJcbmV4cG9ydCB0eXBlIEV4cGVkaXRpb25FdmVudEZsZWV0ID0gRXhwZWRpdGlvbkV2ZW50QmFzZSAmIEV4cGVkaXRpb25FdmVudFdpdGhTaXplICYge1xyXG4gICAgdHlwZTogRXhwZWRpdGlvbkV2ZW50VHlwZS5mbGVldDtcclxuICAgIGZsZWV0OiBFeHBlZGl0aW9uRmluZGFibGVGbGVldDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEV4cGVkaXRpb25FdmVudEl0ZW0gPSBFeHBlZGl0aW9uRXZlbnRCYXNlICYge1xyXG4gICAgdHlwZTogRXhwZWRpdGlvbkV2ZW50VHlwZS5pdGVtO1xyXG4gICAgaXRlbUhhc2g6IEl0ZW1IYXNoO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50RWFybHkgPSBFeHBlZGl0aW9uRXZlbnRCYXNlICYge1xyXG4gICAgdHlwZTogRXhwZWRpdGlvbkV2ZW50VHlwZS5lYXJseTtcclxuICAgIHNpemU/OiBFeHBlZGl0aW9uRXZlbnRTaXplO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50RGVsYXkgPSBFeHBlZGl0aW9uRXZlbnRCYXNlICYge1xyXG4gICAgdHlwZTogRXhwZWRpdGlvbkV2ZW50VHlwZS5kZWxheTtcclxuICAgIHNpemU/OiBFeHBlZGl0aW9uRXZlbnRTaXplO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50VHJhZGVyID0gRXhwZWRpdGlvbkV2ZW50QmFzZSAmIHtcclxuICAgIHR5cGU6IEV4cGVkaXRpb25FdmVudFR5cGUudHJhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50TG9zdEZsZWV0ID0gRXhwZWRpdGlvbkV2ZW50QmFzZSAmIHtcclxuICAgIHR5cGU6IEV4cGVkaXRpb25FdmVudFR5cGUubG9zdEZsZWV0O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50Tm90aGluZyA9IEV4cGVkaXRpb25FdmVudEJhc2UgJiB7XHJcbiAgICB0eXBlOiBFeHBlZGl0aW9uRXZlbnRUeXBlLm5vdGhpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uRXZlbnRDb21iYXRTaXplID0gRXhwZWRpdGlvbkV2ZW50U2l6ZSB8ICdmbGVkLWRlYXRoLXN0YXInO1xyXG5cclxuZXhwb3J0IHR5cGUgRXhwZWRpdGlvbkV2ZW50QWxpZW5zID0gRXhwZWRpdGlvbkV2ZW50QmFzZSAmIHtcclxuICAgIHNpemU6IEV4cGVkaXRpb25FdmVudENvbWJhdFNpemU7XHJcbiAgICB0eXBlOiBFeHBlZGl0aW9uRXZlbnRUeXBlLmFsaWVucztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEV4cGVkaXRpb25FdmVudFBpcmF0ZXMgPSBFeHBlZGl0aW9uRXZlbnRCYXNlICYge1xyXG4gICAgc2l6ZTogRXhwZWRpdGlvbkV2ZW50Q29tYmF0U2l6ZTtcclxuICAgIHR5cGU6IEV4cGVkaXRpb25FdmVudFR5cGUucGlyYXRlcztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEV4cGVkaXRpb25FdmVudENvbWJhdCA9IEV4cGVkaXRpb25FdmVudEJhc2UgJiB7XHJcbiAgICBzaXplOiBFeHBlZGl0aW9uRXZlbnRDb21iYXRTaXplO1xyXG4gICAgdHlwZTogRXhwZWRpdGlvbkV2ZW50VHlwZS5jb21iYXQ7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBFeHBlZGl0aW9uRXZlbnQgPSBFeHBlZGl0aW9uRXZlbnREYXJrTWF0dGVyXHJcbiAgICB8IEV4cGVkaXRpb25FdmVudFJlc291cmNlc1xyXG4gICAgfCBFeHBlZGl0aW9uRXZlbnRGbGVldFxyXG4gICAgfCBFeHBlZGl0aW9uRXZlbnRJdGVtXHJcbiAgICB8IEV4cGVkaXRpb25FdmVudEVhcmx5XHJcbiAgICB8IEV4cGVkaXRpb25FdmVudERlbGF5XHJcbiAgICB8IEV4cGVkaXRpb25FdmVudFRyYWRlclxyXG4gICAgfCBFeHBlZGl0aW9uRXZlbnRMb3N0RmxlZXRcclxuICAgIHwgRXhwZWRpdGlvbkV2ZW50Tm90aGluZ1xyXG4gICAgfCBFeHBlZGl0aW9uRXZlbnRQaXJhdGVzXHJcbiAgICB8IEV4cGVkaXRpb25FdmVudEFsaWVuc1xyXG4gICAgfCBFeHBlZGl0aW9uRXZlbnRDb21iYXQ7IiwiZXhwb3J0IGVudW0gRXhwZWRpdGlvbkV2ZW50VHlwZSB7XHJcbiAgICBub3RoaW5nID0gJ25vdGhpbmcnLFxyXG4gICAgcmVzb3VyY2VzID0gJ3Jlc291cmNlcycsXHJcbiAgICBmbGVldCA9ICdmbGVldCcsXHJcbiAgICBkZWxheSA9ICdkZWxheScsXHJcbiAgICBlYXJseSA9ICdlYXJseScsXHJcbiAgICBkYXJrTWF0dGVyID0gJ2RhcmtNYXR0ZXInLFxyXG4gICAgLyoqIGxlZ2FjeSAqL1xyXG4gICAgcGlyYXRlcyA9ICdwaXJhdGVzJyxcclxuICAgIC8qKiBsZWdhY3kgKi9cclxuICAgIGFsaWVucyA9ICdhbGllbnMnLFxyXG4gICAgY29tYmF0ID0gJ2NvbWJhdCcsXHJcbiAgICBpdGVtID0gJ2l0ZW0nLFxyXG4gICAgdHJhZGVyID0gJ3RyYWRlcicsXHJcbiAgICBsb3N0RmxlZXQgPSAnbG9zdEZsZWV0JyxcclxufVxyXG5leHBvcnQgY29uc3QgRXhwZWRpdGlvbkV2ZW50VHlwZXMgPSBbXHJcbiAgICBFeHBlZGl0aW9uRXZlbnRUeXBlLm5vdGhpbmcsXHJcbiAgICBFeHBlZGl0aW9uRXZlbnRUeXBlLnJlc291cmNlcyxcclxuICAgIEV4cGVkaXRpb25FdmVudFR5cGUuZmxlZXQsXHJcbiAgICBFeHBlZGl0aW9uRXZlbnRUeXBlLmRlbGF5LFxyXG4gICAgRXhwZWRpdGlvbkV2ZW50VHlwZS5lYXJseSxcclxuICAgIEV4cGVkaXRpb25FdmVudFR5cGUuZGFya01hdHRlcixcclxuICAgIEV4cGVkaXRpb25FdmVudFR5cGUucGlyYXRlcyxcclxuICAgIEV4cGVkaXRpb25FdmVudFR5cGUuYWxpZW5zLFxyXG4gICAgRXhwZWRpdGlvbkV2ZW50VHlwZS5jb21iYXQsXHJcbiAgICBFeHBlZGl0aW9uRXZlbnRUeXBlLml0ZW0sXHJcbiAgICBFeHBlZGl0aW9uRXZlbnRUeXBlLnRyYWRlcixcclxuICAgIEV4cGVkaXRpb25FdmVudFR5cGUubG9zdEZsZWV0LFxyXG5dOyIsImltcG9ydCB7IEV4cGVkaXRpb25FdmVudENvbWJhdFNpemUgfSBmcm9tIFwiLi9FeHBlZGl0aW9uRXZlbnRzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFeHBlZGl0aW9uRXZlbnRTaXplIHtcclxuICAgIHNtYWxsID0gJ3NtYWxsJyxcclxuICAgIG1lZGl1bSA9ICdtZWRpdW0nLFxyXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxyXG59XHJcbmV4cG9ydCBjb25zdCBFeHBlZGl0aW9uRXZlbnRTaXplczogRXhwZWRpdGlvbkV2ZW50U2l6ZVtdID0gW1xyXG4gICAgRXhwZWRpdGlvbkV2ZW50U2l6ZS5zbWFsbCxcclxuICAgIEV4cGVkaXRpb25FdmVudFNpemUubWVkaXVtLFxyXG4gICAgRXhwZWRpdGlvbkV2ZW50U2l6ZS5sYXJnZSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlZGl0aW9uRXZlbnRDb21iYXRTaXplczogRXhwZWRpdGlvbkV2ZW50Q29tYmF0U2l6ZVtdID0gW1xyXG4gICAgLi4uRXhwZWRpdGlvbkV2ZW50U2l6ZXMsXHJcbiAgICAnZmxlZC1kZWF0aC1zdGFyJyxcclxuXTsiLCJleHBvcnQgZW51bSBJdGVtSGFzaCB7XHJcbiAgICBkaXNjb3ZlcmVyID0gJzJkZDA1Y2M0YzBlMTg1ZmNlMmU3MTIxMTJkYzQ0OTMyMDI3YWVlOTgnLFxyXG4gICAgZGlzY292ZXJlcl9wdHMgPSAnNjdkNjA0MWJjMDIwNmQxZWM3Y2U2NjdlNTFmOWQ3YmE3MzMxNDYwNCcsXHJcbiAgICBjb2xsZWN0b3IgPSAnOTM3NGM3OWEyNGI4NGM0MzMxZjBkMjY1MjZlZjZjMmQzMzMxOWE2ZScsXHJcbiAgICBjb2xsZWN0b3JfcHRzID0gJ2E1MjFjNDBjNjIwYTJkZDIyYzFiYjFlOWRiNzIyYzRjMTVlNDJlYjEnLFxyXG4gICAgZ2VuZXJhbCA9ICc3N2VmZjg4MDgyOTAyN2RhZjIzYjc1NWUxNDgyMGE2MGM0YzZmZDkzJyxcclxuICAgIGdlbmVyYWxfcHRzID0gJ2NmMzdjYWEwOTZhYWM1MTI3ZWMzZmU2N2MyNjA2MDc1ZmNjNjUyYTgnLFxyXG5cclxuICAgIHJlc2VhcmNoZXIgPSAnMWFhMzYyMTNjYjY3NmZkNWJhYWQ1ZWRjMmJlZTRmYmUxMTdhNzc4YicsXHJcbiAgICByZXNlYXJjaGVyX3B0cyA9ICdhZTc2ZjNmNmFjMTU5YTdlY2EzYmRmMTZlNWY0YTc4MWNhZThiZjBkJyxcclxuICAgIHRyYWRlciA9ICc2YzlmZTVlMzViZGFkMGQ0ZTMzODJlYjZhNWFlYWM2YmM4MjYzNzUyJyxcclxuICAgIHRyYWRlcl9wdHMgPSAnMGFjYjY5YjQzNzIyOWM0NGY3NDZmZmQxNTY3YWE1ZjFjMDZhNjgxMicsXHJcbiAgICB3YXJyaW9yID0gJzliNDhlMjU3Y2JlZjZjNWRmMGYwM2E0N2NlYWQ3ZjlhYmRhM2Q0MzcnLFxyXG4gICAgd2Fycmlvcl9wdHMgPSAnZWM5MGU0YjQ1ZTkzNWJiMGQ5ZjQyMzExOTY5OTIwMjMzMGE5YjdjOScsXHJcblxyXG4gICAgbWV0YWxCb29zdGVyX2Jyb256ZV8xZGF5ID0gJ2I5NTZjNDZmYWE4ZTRlNWQ4Nzc1NzAxYzY5ZGJmYmY1MzMwOWIyNzknLFxyXG4gICAgbWV0YWxCb29zdGVyX2Jyb256ZV83ZGF5cyA9ICdkZTkyMmFmMzc5MDYxMjYzYTU2ZDcyMDRkMWMzOTVjZWZjZmI3ZDc1JyxcclxuICAgIG1ldGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyA9ICcyOGMxOTI4YWVkYWVlMDE5OTE5OWExNTI2Njg2MjVmMzM1Yzg2NmI3JyxcclxuICAgIG1ldGFsQm9vc3Rlcl9icm9uemVfOTBkYXlzX3B0cyA9ICc3YjFkMDZlNjM4Y2EyYjQ4YmY2YWNlNDM5NTJkNGRiY2M5NmU3NzIxJyxcclxuICAgIG1ldGFsQm9vc3Rlcl9zaWx2ZXJfN2RheXMgPSAnYmE4NWNjMmI4YTVkOTg2YmJmYmE2OTU0ZTIxNjRlZjcxYWY5NWQ0YScsXHJcbiAgICBtZXRhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyA9ICc3NDI3NDNiM2IwYWUxZjBiOGExZTAxOTIxMDQyODEwYjU4ZjEyZjM5JyxcclxuICAgIG1ldGFsQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzX3B0cyA9ICc5YWZkNTI3NWFlMzgxZDRkYWVmODM1ODNmMGY2MTJhN2MyOTg4NjQ4JyxcclxuICAgIG1ldGFsQm9vc3Rlcl9zaWx2ZXJfOTBkYXlzID0gJzZmNDRkY2QyYmQ4NDg3NTUyN2FiYmE2OTE1OGI0ZTk3NmMzMDhiYmMnLFxyXG4gICAgbWV0YWxCb29zdGVyX3NpbHZlcl85MGRheXNfcHRzID0gJ2I5NWFhMDI3NmJkMmZhMjE2ZTZhYjMwZTg1MzQ5MjM1NGJmZTY4MzInLFxyXG4gICAgbWV0YWxCb29zdGVyX2dvbGRfN2RheXMgPSAnMDUyOTQyNzAwMzJlNWRjOTY4NjcyNDI1YWI1NjExOTk4YzQwOTE2NicsXHJcbiAgICBtZXRhbEJvb3N0ZXJfZ29sZF8zMGRheXMgPSAnNmZlY2I5OTMxNjlmZTkxOGQ5YzYzY2QzN2EyZTU0MWNjMDY3NjY0ZScsXHJcbiAgICBtZXRhbEJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzID0gJzc1NWQ2MzM3MmNmYTAzMzMwN2ExZTgxZjc3MTJiODE4NTM1NDgzMDMnLFxyXG4gICAgbWV0YWxCb29zdGVyX2dvbGRfOTBkYXlzID0gJzIxYzFhNjVjYTZhZWNmNTRmZmFmYjk0YzAxZDBjNjBkODIxYjMyNWQnLFxyXG4gICAgbWV0YWxCb29zdGVyX2dvbGRfOTBkYXlzX3B0cyA9ICcwMTAyN2FjNzYwNGVlYmYyYjZhODVjNTQ5ZDBhZGJiZTA1YzhjOTc1JyxcclxuICAgIG1ldGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5cyA9ICdhODNjZmRjMTViOGRiYTI3YzgyOTYyZDU3ZTUwZDgxMDFkMjYzY2ZiJyxcclxuICAgIG1ldGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5c19wdHMgPSAnNTM1NjM2Zjg5ZGU1NDA0MmVlYTNlZTRjMDYyMWQ5NjRjMjY4MWQzOCcsXHJcbiAgICBtZXRhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzID0gJ2M2OTBmNDkyY2ZmZTVmOWYyOTUyMzM3ZThlZWQzMDdhOGE2MmQ2Y2YnLFxyXG4gICAgbWV0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHMgPSAnZmQzNzc5ZGFjNjJkNzY4ZDRmZDQzYmYwNDZiZTUzM2YzZTg1OWU1ZicsXHJcbiAgICBtZXRhbEJvb3N0ZXJfcGxhdGludW1fOTBkYXlzID0gJ2NhN2Y5MDNhNjU0NjdiNzA0MTFlNTEzYjA5MjBkNjZjNDE3YWEzYTInLFxyXG4gICAgbWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHMgPSAnMWU1Mjk1MDIyNTY2M2YyMTdhMDNhZTg3ODRkMjg4YzY5Yjk3ZGM3OCcsXHJcblxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfYnJvbnplXzFkYXkgPSAnMDkwYTk2OWIwNWQxYjVkYzQ1OGE2YjEwODBkYTdiYTA4Yjg0ZWM3ZicsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9icm9uemVfN2RheXMgPSAnM2M5Zjg1MjIxODA3YjhkNTkzZmE1Mjc2Y2RmN2FmOTkxM2M0YTM1ZCcsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyA9ICc4NTk2YzU4YWE2YjUwYTA4OWMwMmNhNjNlNjgwNDFmMDlhM2Q3ZWRmJyxcclxuICAgIGNyeXN0YWxCb29zdGVyX2Jyb256ZV85MGRheXNfcHRzID0gJ2JmYzViYjMzZTFjYzJjYWRlNGMzZjE3NTI3M2Q1ZmRkZTQxYjA0OTcnLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzdkYXlzID0gJzQyMmRiOTlhYWM0ZWM1OTRkNDgzZDhlZjdmYWFkYzVkNDBkNmY3ZDMnLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyA9ICc1YjY5NjYzZTNiYTA5YTFmZTc3Y2Y3MmM1MDk0ZTI0NmNmZTk1NGQ2JyxcclxuICAgIGNyeXN0YWxCb29zdGVyX3NpbHZlcl8zMGRheXNfcHRzID0gJ2Y1NGEwMzUwZjhhYTEyYTMxZjkzMThkNTI4OGRlZjc3ZTU2ODg3ZjMnLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyA9ICcwNGQ4YWZkNTkzNjk3NmUzMmNlODk0Yjc2NWVhOGJkMTY4YWEwN2VmJyxcclxuICAgIGNyeXN0YWxCb29zdGVyX3NpbHZlcl85MGRheXNfcHRzID0gJzE0MDU5MTk3NWYyZjE1N2E4NWE2ZGVlYzUyMTg5YjA1NzkzMThkYTgnLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfZ29sZF83ZGF5cyA9ICcxMThkMzRlNjg1YjVkMTQ3MjI2NzY5NmQxMDEwYTM5M2E1OWFlZDAzJyxcclxuICAgIGNyeXN0YWxCb29zdGVyX2dvbGRfMzBkYXlzID0gJzM2ZmI2MTFlNzFkNDIwMTRmNWViZDBhYTVhNTJiYzBjODFhMGMxY2InLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzID0gJ2VjM2NlMzc4Nzk0NjIxYzJjMjA4NGJkNGI5MGVhZjQ5ZDBjYjk2ZGMnLFxyXG4gICAgY3J5c3RhbEJvb3N0ZXJfZ29sZF85MGRheXMgPSAnZDQ1ZjAwZThiOTA5ZjUyOTNhODNkZjRmMzY5NzM3ZWE3ZDY5YzY4NCcsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9nb2xkXzkwZGF5c19wdHMgPSAnMTAyMTc5YzVmYzBlZjNlNjNlM2IwZGJmNzQwYzUyYjk5NTBmMDk4NycsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5cyA9ICczNWQ5NmU0NDFjMjFlZjExMmE4NGM2MTg5MzRkOWQwZjAyNjk5OGZkJyxcclxuICAgIGNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0cyA9ICdiNjFiNDFiNzhjOWUwYWFjOGM2NDY1ZTI1YjdhMmZmZDVhZmUxZDcxJyxcclxuICAgIGNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5cyA9ICc2YmY0NWZjYmE4YTZhNjgxNTgyNzNkMDRhOTI0NDUyZWNhNzVjZjM5JyxcclxuICAgIGNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHMgPSAnMmU1MTZmMzVjOTVkY2IxZjMzZDgzZDNjMjdkMjk4NTkyYTM3YzJhOScsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXMgPSAnN2MyZWRmNDBjNWNkNTRhZDExYzY0MzkzOThiODMwMjBjMGE3YTZiZScsXHJcbiAgICBjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzID0gJ2RkMjFhMmUwZDJjMWQzY2YwMDk5MmM3Yjg3ZjQ0MmI5OWVmYjhiNGQnLFxyXG5cclxuICAgIGRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzFkYXkgPSAnZTI1NDM1MmFjNTk5ZGU0ZGQxZjIwZjA3MTlkZjBhMDcwYzYyM2NhOCcsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV83ZGF5cyA9ICdkOWZhNWYzNTllODBmZjRmNGM5NzU0NWQwN2M2NmRiYWRhYjFkMWJlJyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzMwZGF5c19wdHMgPSAnZjc3MzJlMTZmYWExN2E5NjZlYWM4MzJiYTE5ZmRhOWNhYWZiYjBlNCcsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV85MGRheXNfcHRzID0gJzZhNzhlZDcwZDk3MjU5YjcwNmJjZDcyZWM2N2UyMjIzZDM3NzA5YzUnLFxyXG4gICAgZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfN2RheXMgPSAnZTRiNzhhY2RkZmE2ZmQwMjM0YmNiODE0YjY3NjI3MTg5OGIwZGJiMycsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl8zMGRheXMgPSAnMjY0MTZhM2NkYjk0NjEzODQ0YjFkM2NhNzhiOTA1N2ZkNmFlOWIxNScsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl8zMGRheXNfcHRzID0gJzE2NjFiMGI4YWQ2ZDc5N2QwOTVjNjcyMzJhYWEwODNkYmU2MzUzZDgnLFxyXG4gICAgZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfOTBkYXlzID0gJzZmMDk1MmE5MTlmZDJhYjljMDA5ZTljY2Q4M2MxNzQ1Zjk4Zjc1OGYnLFxyXG4gICAgZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfOTBkYXlzX3B0cyA9ICc2YTk4Y2EzNWY1NjU2YjY1OGNlYjMyZWNhMGE4YWQwZDVhMzkzYzRiJyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfZ29sZF83ZGF5cyA9ICc1NTYwYTE1ODBhMDMzMGU4YWFkZjA1Y2I1YmZlNmJjMzIwMDQwNmUyJyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfZ29sZF8zMGRheXMgPSAnMzAwNDkzZGRjNzU2ODY5NTc4Y2IyODg4YTNhMWJjMGMzYzY2NzY1ZicsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX2dvbGRfMzBkYXlzX3B0cyA9ICc3NTE3Nzg2NTgxYmUzYjRjOTY3ODc0OTk1M2E5Yzg4NGEzNzQyN2EzJyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfZ29sZF85MGRheXMgPSAnZGM1ODk2YmVkMzMxMTQzNDIyNGQ1MTFmYTdjZWQ2ZmRiZTQxYjRlOCcsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX2dvbGRfOTBkYXlzX3B0cyA9ICc1ODAyNDE0ZDM2MGY4NjQ0ZGY5MWM3MTRmNmE1MWRiM2YxZTBkNTE0JyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fN2RheXMgPSAnNGI1MWQ5MDM1NjBlZGQxMDI0NjdiMTEwNTg2MDAwYmQ2NGZkYjk1NCcsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0cyA9ICdkMjYxNzJmOTkxYmYyNDZmMTMwYzYzMDdkYzVlMWJkZTYwNWQxYzY5JyxcclxuICAgIGRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fMzBkYXlzID0gJzYyMGY3NzlkYmZmYTEwMTFhZGVkNjliMDkxMjM5NzI3OTEwYTNkMDMnLFxyXG4gICAgZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzID0gJ2I1ZTkzZGI2OTc3MzAzZmIxYTBlZjQwMzE0ODViYTg3MTJhYWZlZWYnLFxyXG4gICAgZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV85MGRheXMgPSAnODMxYzNlYThkODY4ZWIzNjAxNTM2ZjRkNWU3Njg4NDI5ODhhMWJhOScsXHJcbiAgICBkZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHMgPSAnZmFkZGE4OWI3ZWJmYzlhOTlhNWM5MGQzMTAxYTAyNzFhMDdjYmFhMycsXHJcblxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9icm9uemVfN2RheXMgPSAnM2Y2ZjM4MWRjOWI5MjgyMjQwNjczMWE5NDJjMDI4YWRmOGRjOTc4ZicsXHJcbiAgICBlbmVyZ3lCb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzID0gJzI3MzA0MjM1MmFlYmYzMzVjMTI0NTg3MzUyYzBhMzE5NzYyY2VmNjYnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9icm9uemVfOTBkYXlzX3B0cyA9ICdjZGM5YzQ2MzY1NmUwZGFiOGEzMWM3NTgxYmE1M2U2MmY0MGQyMzgwJyxcclxuICAgIGVuZXJneUJvb3N0ZXJfc2lsdmVyXzdkYXlzID0gJ2MyYmFkNThmY2VjMzc0ZDcwOTA5OWQxMWQwNTQ5ZTU5ZWE3ZTIzM2UnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfN2RheXNfcHRzID0gJzJjZDA1MzZhMjZjMzI4MTQyYTA3NDFhN2UwZDdlMWExOWE0ZjVlMDcnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfMzBkYXlzID0gJ2JlZGQyNDhhYWYyODhjMjdlOTM1MWNmYWNmYTZiZTAzZjFkYmI4OTgnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfMzBkYXlzX3B0cyA9ICc2NGVkMzAxMWY5N2E4NjU5ODhiM2EzODgwOGI0YzU3NGYwNjA1YTYyJyxcclxuICAgIGVuZXJneUJvb3N0ZXJfc2lsdmVyXzkwZGF5cyA9ICdlMDVhYTViOWUzZGY1YmUzODU3YjQzZGE4NDAzZWFmYmY1YWQzYjk2JyxcclxuICAgIGVuZXJneUJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHMgPSAnNjRlZDMwMTFmOTdhODY1OTg4YjNhMzg4MDhiNGM1NzRmMDYwNWE2Ml8nLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzID0gJzU1YjUyY2JmYjE0OGVjODBjZDRlNWIwNTgwZjdiZWQwMTE0OWQ2NDMnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzX3B0cyA9ICcwZGFmMDc3ZDU2OGRiYjM0OTE0M2U5ZDNhYjY1YzE3MTY0NjAxODQ4JyxcclxuICAgIGVuZXJneUJvb3N0ZXJfZ29sZF8zMGRheXMgPSAnNGZhOWEyMjczZWU0NDYyODRkNTE3N2ZkOWQ2MGEyMmRlMDFlOTMyYicsXHJcbiAgICBlbmVyZ3lCb29zdGVyX2dvbGRfMzBkYXlzX3B0cyA9ICdhYWZmODk1YWVhYTZiNGJiYWUzZWNiZWUzN2Y3MjQyMDNlNDgzZTM5JyxcclxuICAgIGVuZXJneUJvb3N0ZXJfZ29sZF85MGRheXMgPSAnNWFkNzgzZGNmY2UzNjU1ZWY5N2IzNjE5NzQyNTcxOGEwZGFkNmI2NicsXHJcbiAgICBlbmVyZ3lCb29zdGVyX2dvbGRfOTBkYXlzX3B0cyA9ICcxZmY2MGM5OTQyYjY2OWQwYzBiYjY1ZWM2YjBjOWMyZmEzZDk2NTE0JyxcclxuICAgIGVuZXJneUJvb3N0ZXJfcGxhdGludW1fN2RheXMgPSAnNzdjMzYxOTkxMDJlMDc0ZGNhNDZmNWYyNmVmNTdjZTgyNGQwNDRkZCcsXHJcbiAgICBlbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0cyA9ICdlODQwYWVkYTA5MWNiM2E1NTFjMWZlNzYwMDM0MWU5NjNlNTliMjYzJyxcclxuICAgIGVuZXJneUJvb3N0ZXJfcGxhdGludW1fMzBkYXlzID0gJ2RmZTg2Mzc4ZjhjM2Q3ZjNlZTA3OTBlYTY0NjAzYmM0NGU4M2NhNDcnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzID0gJ2IxMWM0NWY4MDhiMzdhZmJjYTRiYThlYmIzMzEyNDg4ZDRjNTAwMzgnLFxyXG4gICAgZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV85MGRheXMgPSAnYzM5YWE5NzJhOTcxZTk0YjFkOWI0ZDdhOGY3MzRiM2Q4YmUxMjUzNCcsXHJcbiAgICBlbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHMgPSAnODJiODdjNzg1OTExYWE3MDQ0ZmNlMGY1OTA5MTQ5YjEyYzcxOWU5NCcsXHJcblxyXG4gICAgbW9vbkZpZWxkc19icm9uemUgPSAnYmU2N2UwMDlhNTg5NGYxOWJiZjNiMGM5ZDliMDcyZDQ5MDQwYTJjYycsXHJcbiAgICBtb29uRmllbGRzX3NpbHZlciA9ICdjMjFmZjMzYmE4ZjBhN2VhZGI2YjdkMTEzNTc2MzM2NmYwYzRiOGJmJyxcclxuICAgIG1vb25GaWVsZHNfZ29sZCA9ICcwNWVlOTY1NGJkMTFhMjYxZjFmZjBlNWQwZTQ5MTIxYjVlN2U0NDAxJyxcclxuICAgIG1vb25GaWVsZHNfcGxhdGludW0gPSAnOGE0MjYyNDE1NzJiMmZlYTU3ODQ0YWNkOTliYzMyNmZlNDBlMzVjZicsXHJcblxyXG4gICAgbW9vblNob3RfYnJvbnplID0gJzQ4NWE2ZDU2MjRkOWRlODM2ZDNlYjUyYjE4MWIxMzQyM2Y3OTU3NzAnLFxyXG4gICAgbW9vblNob3Rfc2lsdmVyID0gJ2ZkODk1YTVjOWZkOTc4YjljNWM3YjY1MTU4MDk5NzczYmEwZWNjZWYnLFxyXG4gICAgbW9vblNob3RfZ29sZCA9ICc0NWQ2NjYwMzA4Njg5YzY1ZDk3ZjNjMjczMjdiMGIzMWY4ODBhZTc1JyxcclxuXHJcbiAgICBwbGFuZXRGaWVsZHNfYnJvbnplID0gJzE2NzY4MTY0OTg5ZGZmZDgxOWEzNzM2MTNiNWUxYTUyZTIyNmE1YjAnLFxyXG4gICAgcGxhbmV0RmllbGRzX3NpbHZlciA9ICcwZTQxNTI0ZGM0NjIyNWRjYTIxYzkxMTlmMmZiNzM1ZmQ3ZWE1Y2IzJyxcclxuICAgIHBsYW5ldEZpZWxkc19nb2xkID0gJzA0ZTU4NDQ0ZDZkMGJlYjU3YjNlOTk4ZWRjMzRjNjBmODMxODgyNWEnLFxyXG4gICAgcGxhbmV0RmllbGRzX3BsYXRpbnVtID0gJ2YzZDliODJlMTBmMmU5NjkyMDljMWE1YWQ3ZDIyMTgxYzcwM2JiMzYnLFxyXG5cclxuICAgIHJlc291cmNlUGFja2FnZV9hbGwgPSAnYzFkMDIzMjYwNDg3MmY4OTllYTE1YTk3NzJiYWY3Njg4MGY1NWM1ZicsXHJcbiAgICByZXNvdXJjZVBhY2thZ2VfYWxsX3B0cyA9ICdmZDBlZTgwMjk4OWJhN2MzNzUzZDFlZmRhNTg1MWEzMTA0MWZjMDAzJyxcclxuICAgIHJlc291cmNlUGFja2FnZV9tZXRhbCA9ICc4NTlkODJkMzE2YjgzODQ4ZjczNjVkMjE5NDliM2UxZTYzYzc4NDFmJyxcclxuICAgIHJlc291cmNlUGFja2FnZV9tZXRhbF9wdHMgPSAnZTZiNDg2MjI0NjQxYWMzZWI0NGM2NzAwMWEyNjUxYWNkMjQxMGU2NCcsXHJcbiAgICByZXNvdXJjZVBhY2thZ2VfY3J5c3RhbCA9ICdiYjJmNjg0MzIyNmVmNTk4ZjBiNTY3YjkyYzUxYjI4M2RlOTBhYTQ4JyxcclxuICAgIHJlc291cmNlUGFja2FnZV9jcnlzdGFsX3B0cyA9ICc5NDVlMDk2MjdiMjMxNjVmYzNmNjExYzYzNGIwMDQxODgzYzI0NzgzJyxcclxuICAgIHJlc291cmNlUGFja2FnZV9kZXV0ZXJpdW0gPSAnY2I3MmVkMjA3ZGQ4NzE4MzJhODUwZWUyOWYxYzFmODNhYTNmNGYzNicsXHJcbiAgICByZXNvdXJjZVBhY2thZ2VfZGV1dGVyaXVtX3B0cyA9ICc0YjYyZGM1MzVlZmVlZjc1NWJjYzAzODcxNGY0NzBkM2VkN2JlYjAxJyxcclxuXHJcbiAgICBrcmFrZW5fYnJvbnplID0gJzQwZjZjNzhlMTFiZTAxYWQzMzg5YjdkY2NkNmFiOGVmYTkzNDdmM2MnLFxyXG4gICAga3Jha2VuX3NpbHZlciA9ICc0YTU4ZDQ5NzhiYmUyNGUzZWZiM2IwMjQ4ZTIxYjNiNGIxYmZiZDhhJyxcclxuICAgIGtyYWtlbl9nb2xkID0gJzkyOWQ1ZTE1NzA5Y2M1MWE0NTAwZGU0NDk5ZTE5NzYzYzg3OWY3ZjcnLFxyXG4gICAga3Jha2VuX3BsYXRpbnVtID0gJ2YzNjA0MmQ3NmU2YjhiMzNkOTMxZTFkNGFlOTlmMzUyNjVjZDgyZDEnLFxyXG5cclxuICAgIGRldHJvaWRfYnJvbnplID0gJ2QzZDU0MWVjYzIzZTRkYWEwYzY5OGU0NGMzMmYwNGFmZDIwMzdkODQnLFxyXG4gICAgZGV0cm9pZF9zaWx2ZXIgPSAnMjdjYmNkNTJmMTY2OTMwMjNjYjk2NmU1MDI2ZDhhMWVmYmJmYzBmOScsXHJcbiAgICBkZXRyb2lkX2dvbGQgPSAnMDk2ODk5OWRmMmZlOTU2YWE0YTA3YWVhNzQ5MjFmODYwYWY3ZDk3ZicsXHJcbiAgICBkZXRyb2lkX3BsYXRpbnVtID0gJzMzNDdiY2Q0ZWU1OWYxZDNmYTAzYzRkMThhMjViY2EyZGE4MWRlODInLFxyXG5cclxuICAgIGRldHJvaWRfbWVjaGFTaGlweWFyZF9icm9uemVfcHRzID0gJzUwZjY2NmYzMjkzNDM3MmZhYjVmZTBmZGJhNzBlMDI4YWJkY2Q5ZjgnLFxyXG5cclxuICAgIG5ld3Ryb25fYnJvbnplID0gJ2RhNGEyYTFiYjlhZmQ0MTBiZTA3YmM5NzM2ZDg3ZjFjODA1OWU2NmQnLFxyXG4gICAgbmV3dHJvbl9zaWx2ZXIgPSAnZDI2ZjRkYWI3NmZkYzUyOTZlM2ViZWMxMWExZTFkMjU1OGM3MTNlYScsXHJcbiAgICBuZXd0cm9uX2dvbGQgPSAnOGE0ZjllODMwOWUxMDc4ZjdmNWNlZDQ3ZDU1OGQzMGFlMTViNGExYicsXHJcbiAgICBuZXd0cm9uX3BsYXRpbnVtID0gJ2ExYmEyNDJlZGU1Mjg2YjUzMGNkZjk5MTc5NmIzZDFjYWU5ZTRmMjMnLFxyXG5cclxuICAgIGxpZmVmb3JtS3Jha2VuX2Jyb256ZSA9ICcwMGI0MmY3MTEzZDgxZjk4ZGY4NjViYmZhMjI4MGZlM2E0NDY1ZTg5JyxcclxuICAgIGxpZmVmb3JtS3Jha2VuX2Jyb256ZV9wdHMgPSAnNTZjMjU4ZTdjMWYxMmEzNzc3M2Q5Yzk1YWQyZTk4ZGMzMDc2YWNhNicsXHJcbiAgICBsaWZlZm9ybUtyYWtlbl9zaWx2ZXIgPSAnNWYxOTQ3NzdjNWI2OWQ1YzJhM2M2OGU5ZTA0YTRjYWU5YzI4YmNmMicsXHJcbiAgICBsaWZlZm9ybUtyYWtlbl9zaWx2ZXJfcHRzID0gJzMwOWJjNDJjZTllNWQ0NTg3YzAwNjFlZjQyNWU5OTQwZGNlOWY3MTMnLFxyXG4gICAgbGlmZWZvcm1LcmFrZW5fZ29sZCA9ICcwYWQwNmJiYTE0ZGZkMGI1NzZmMWRhZWY3MjlhNjA3NTNlMjI2M2M3JyxcclxuICAgIGxpZmVmb3JtS3Jha2VuX2dvbGRfcHRzID0gJzNiNDcwOTk4Y2Y1NTdkYTkwZjQ3M2MwMGMwZjFhMDZjNjQxMDc5ZTQnLFxyXG4gICAgbGlmZWZvcm1LcmFrZW5fcGxhdGludW0gPSAnYzE5ZjBlMDlkODYyZDkzZDc5NTZiZWIzMTg1ZDllZTkyOWI1ZWY3NCcsXHJcbiAgICBsaWZlZm9ybUtyYWtlbl9wbGF0aW51bV9wdHMgPSAnODIyM2E0MmU3NTI5NThmMTVkNjM5MjYzMGQ3NzZhZjA2MWM1M2UxZicsXHJcblxyXG4gICAgbGlmZWZvcm1OZXd0cm9uX2Jyb256ZSA9ICdiYTNlNjY5M2YxMTI5ODZiNzk2NGM4MzViY2FjNmFlMjAxOTAwZTJmJyxcclxuICAgIGxpZmVmb3JtTmV3dHJvbl9icm9uemVfcHRzID0gJ2RmYjVmZmEwOWUwNmQ0ODMwNGQ0NmFhZmY4Njg2ZGQxYmVlYzFkMjQnLFxyXG4gICAgbGlmZWZvcm1OZXd0cm9uX3NpbHZlciA9ICc5ODc5YTM2YzQyNzk3YTg2ODQxNmIxM2YwN2UwMzNmNjY0Y2FiZDcwICcsXHJcbiAgICBsaWZlZm9ybU5ld3Ryb25fc2lsdmVyX3B0cyA9ICdmZjNlNTZmM2YwYzM4NmMxNjk4YzU2ZDkxMmU0N2FiMThiODBiZmE4JyxcclxuICAgIGxpZmVmb3JtTmV3dHJvbl9nb2xkID0gJzdmZTRjZGIwOTg2ODVmOGFmODI3Y2E0NjBhNTZlMDBlZjQ2ZjVmMDUgJyxcclxuICAgIGxpZmVmb3JtTmV3dHJvbl9nb2xkX3B0cyA9ICcyYTBkNTc5MTVlNjkwNGE5MTAwMTIzNjJhYmU4YjFjYTMxNWEyNGI5JyxcclxuICAgIGxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bSA9ICc5Y2RlOTM2ZmFiYzUwMzc2MTdmODI2MTk1NWU3ZDNmMjI2MmVlYzY5JyxcclxuICAgIGxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bV9wdHMgPSAnZjE1NDVmNGZjNjZkYWZiYzA0YWQwMmNhZmM4N2NmYjVmMzQ3MDZmYScsXHJcblxyXG4gICAgZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV83ZGF5cyA9ICdlNTRlY2MwNDE2ZDZlOTZiNDE2NWYyNDIzOGIwM2ExYjMyYzFkZjQ3JyxcclxuICAgIGV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXNfcHRzID0gJzlmZDU2Y2U0NzY3ZmEyMDI5ZjEwMjg3ODUyZTQ5ODQ5MzY5ZDQxNmYnLFxyXG4gICAgZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV8zMGRheXMgPSAnOGMxZjZjNjg0OWQxYTVlNGQ5ZGU2YWU5YmIxYjg2MWY2ZjdiNWQ0ZCcsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfYnJvbnplXzMwZGF5c19wdHMgPSAnYzZjZDk0NzdlZjVkYTk1Njc2YjQ1OGZlZTg2YjI2NjRhZDEzOWNiNicsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfYnJvbnplXzkwZGF5cyA9ICdhNTc4NGM2ODVjMGUxZTYxMTFkOWMxOGFlYWY4MGFmMmUwNzc3YWI0JyxcclxuICAgIGV4cGVkaXRpb25zbG90c19icm9uemVfOTBkYXlzX3B0cyA9ICc0YmY1YjNkMTJiMDQ1MWE2YjgyODY5ZTI5NGRiNjk3NmUyMmZkOGUzJyxcclxuICAgIGV4cGVkaXRpb25zbG90c19zaWx2ZXJfN2RheXMgPSAnYjJiYzk3ODlkZjdjMWVmNWUwNThmNzJkNjEzODBiNjk2ZGRlNTRlOCcsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfc2lsdmVyXzdkYXlzX3B0cyA9ICcyOGIzODE2YzQ1ZTBhZTE1Mzg3ZWRiMWE5OGUwZTlkOGVhNTljYzJlJyxcclxuICAgIGV4cGVkaXRpb25zbG90c19zaWx2ZXJfMzBkYXlzID0gJzMxYTUwNGJlMTE5NTE0OWEzYmVmMDViOWNjNmUzYWYxODVkMjRlZjInLFxyXG4gICAgZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl8zMGRheXNfcHRzID0gJzRhYTY4NDFhM2Q3MDgxOTRhMmVkYzExYjI4YzZhMjMzYTcxMzJlNGEnLFxyXG4gICAgZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl85MGRheXMgPSAnNGY2Zjk0MWJiZjJhODUyN2IwNDI0YjNhZDExMDE0NTAyZDhmNGZiOCcsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfc2lsdmVyXzkwZGF5c19wdHMgPSAnYzJlNDc5ZTI3NTIxZTZjZGE5NDM1ODY5YmUwMjYxNjA1YjRiMDMyOCcsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfZ29sZF83ZGF5cyA9ICc5MzM2YjlmMjlkMzZlM2Y2OWIwNjE5Yzk1MjNkOGJlYzVlMDlhYjhlJyxcclxuICAgIGV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzX3B0cyA9ICdiM2Q4MTRlMTBiZmM1MWRmYWMyZmM5MzQxMjhiMGNhOTkxODZjNWM0JyxcclxuICAgIGV4cGVkaXRpb25zbG90c19nb2xkXzMwZGF5cyA9ICdmZDdkMzVlNzNkMGUwOWU4M2UzMDgxMmI3MzhlZjk2NmVhOWVmNzkwJyxcclxuICAgIGV4cGVkaXRpb25zbG90c19nb2xkXzMwZGF5c19wdHMgPSAnMzY5YjhiMzlkNDY2MGNmMzYyMWZkMWMxZDU4ZjQxYTkwOWIwYTNiYicsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfZ29sZF85MGRheXMgPSAnNTQwNDEwNDM5NTE0YWMwOTM2M2M1YzQ3Y2Y0NzExN2E4YjhhZTc5YScsXHJcbiAgICBleHBlZGl0aW9uc2xvdHNfZ29sZF85MGRheXNfcHRzID0gJ2Q5YjU2YzY4OTYwN2Q3ZjNmYTExOGQ2OThjNzRiNzhhMmQzNjQyZmYnLFxyXG5cclxuICAgIGZsZWV0U2xvdHNfYnJvbnplXzdkYXlzID0gJzA2ODRjNmE1YTQyYWNiYjNjZDEzNDkxM2Q0MjFmYzI4ZGFlNmI5MGQnLFxyXG4gICAgZmxlZXRTbG90c19icm9uemVfN2RheXNfcHRzID0gJzFhYTFlZWViOTljOTg5ZWI1MWU5MmJkMDU4NTZjYWU0NDBkMTg3YjQnLFxyXG4gICAgZmxlZXRTbG90c19icm9uemVfMzBkYXlzID0gJzk0YTI4NDkxYjZmZDg1MDAzZjFjYjE1MWU4OGRkZTEwNmYxZDc1OTYnLFxyXG4gICAgZmxlZXRTbG90c19icm9uemVfMzBkYXlzX3B0cyA9ICcwYmMxZDFlMzlkYmZkODE1NzdlMDk0N2I0YTA5OTNlMmVlYzdlOTFlJyxcclxuICAgIGZsZWV0U2xvdHNfYnJvbnplXzkwZGF5cyA9ICdiYjQ3YWRkNTg4NzYyNDAxOTlhMThkZGFjYzJkYjA3Nzg5YmUxOTM0JyxcclxuICAgIGZsZWV0U2xvdHNfYnJvbnplXzkwZGF5c19wdHMgPSAnYWY3MWVhY2E3NWZjYzhjMjY0ODUzNzg3NWZiNjQ1MDMyY2ZkODI5NScsXHJcbiAgICBmbGVldFNsb3RzX3NpbHZlcl83ZGF5cyA9ICdmOGZkNjEwODI1ZmI0YTQ0MmUyN2U0ZTlhZGQ3NGYwNTBlMDQwZTI3JyxcclxuICAgIGZsZWV0U2xvdHNfc2lsdmVyXzdkYXlzX3B0cyA9ICczNzIzNzFkZjU2OTRjYTlmOTBkNTNlYjEwZjQ1MmIwNzk5YmY4YzI3JyxcclxuICAgIGZsZWV0U2xvdHNfc2lsdmVyXzMwZGF5cyA9ICdjNGU1OThhODU4MDVhN2ViM2NhNzBmOTI2NWNiZDM2NmZjNGQyYjBlJyxcclxuICAgIGZsZWV0U2xvdHNfc2lsdmVyXzMwZGF5c19wdHMgPSAnNzdlMGFkNTJkMTgzNTgzN2Y4OGY3YzY1MDkzNWQyZjU5YjcyMjFhNCcsXHJcbiAgICBmbGVldFNsb3RzX3NpbHZlcl85MGRheXMgPSAnYTY5M2M1Y2UzZjU2NzZlZmFhZjA3ODFkOTQyMzRiZWE0ZjU5OWQyZScsXHJcbiAgICBmbGVldFNsb3RzX3NpbHZlcl85MGRheXNfcHRzID0gJzczZmI1NDRmNjFkZmMwYjc3NTJjMTU1YjEzMWRjM2Q5YjdjYTBjZTcnLFxyXG4gICAgZmxlZXRTbG90c19nb2xkXzdkYXlzID0gJzVhODAwMGMzNzJjZDA3OTI5MmE5MmQzNWQ0ZGRiYTNjMGYzNDhkM2InLFxyXG4gICAgZmxlZXRTbG90c19nb2xkXzdkYXlzX3B0cyA9ICdmNWNiOGQ5NjYyODZjODY4MDc4MTRkNmEzYmExYzAzOGViMjI5NzdkJyxcclxuICAgIGZsZWV0U2xvdHNfZ29sZF8zMGRheXMgPSAnMTgwOGJmNzYzOWI4MWFjM2FjODdiY2I3ZWIzYmJiYTBhMTg3NGQwYScsXHJcbiAgICBmbGVldFNsb3RzX2dvbGRfMzBkYXlzX3B0cyA9ICdhZDA1NzIzMGRhZjc5MDk4MmY3MjljYTM1ZDg2YmYxZjQ2NTg3YmU3JyxcclxuICAgIGZsZWV0U2xvdHNfZ29sZF85MGRheXMgPSAnMWY3MDI0YzRmNjQ5M2YwYzU4OWUxYjAwYzc2ZTZjZWQyNThjMDBlNScsXHJcbiAgICBmbGVldFNsb3RzX2dvbGRfOTBkYXlzX3B0cyA9ICc0ZjcyMWMxNWEyMGE2M2M2ZmNjYTQ0MmFmYjVlZWQyNzkxNzVlYmEyJyxcclxuXHJcbiAgICBtaWdyYXRpb25JdGVtID0gJzdlYWNmY2VlNzQ2NjBmMzBiYjkyYTU4NzRlOGNjY2YyYmIyODZlYmQnLFxyXG4gICAgbWlncmF0aW9uSXRlbV9wdHMgPSAnNGU1OGNiYjhhZDYzYTNkZjg1ZjZkMWVhMTYxNjFmMWU2NzJkM2VlMycsXHJcblxyXG4gICAgc2hvcnRlblRpbWVfYnVpbGRpbmdzID0gJ2NiNGZkNTNlNjFmZWNlZDBkNTJjZmM0YzFjZTM4M2JhZDljMDVmNjcnLFxyXG4gICAgc2hvcnRlblRpbWVfcmVzZWFyY2ggPSAnMTRjMTdkNDk0NjI5NjNmNWU1YjY3ZWZhMTI1NzYyMmNlMWI4NjZhYycsXHJcbiAgICBzaG9ydGVuVGltZV9zaGlweWFyZCA9ICc3NWFjY2FhMGQxYmMyMmI3OGQ4M2I4OWNkNDM3YmRjY2Q2YTU4ODg3JyxcclxuICAgIHNob3J0ZW5UaW1lX2xpZmVmb3JtUmVzZWFyY2ggPSAnYmI4ZTRmYTc5MGM4OTliM2EwNTBiMDc3MjlmM2U1MzZjZThhNGRlNCcsXHJcbiAgICBzaG9ydGVuVGltZV9saWZlZm9ybUJ1aWxkaW5ncyA9ICdlYmNiN2RkNmEwYTNlYzM4OTI4MTA5Y2I2ZTY4NjZiMTFkNjBhMGRmJyxcclxuXHJcbiAgICBvZmZpY2VyX2dlb2xvZ2lzdCA9ICc3OGJhZGRlNDE0YjJjYmE3YzBjMzdlM2UxMWE1YTQyZTg0MTRjOGFjJyxcclxuICAgIG9mZmljZXJfY29tbWFuZGVyID0gJzEwNjYyMTQxMzI2Y2M0NmVlMzBiYzRkZDA1ZjU4MTQyNDA1MGE3NjgnLFxyXG4gICAgb2ZmaWNlcl9hZG1pcmFsID0gJ2JiYzdlZTMyMjE4OTUyOGFkNWJjM2ExOWUwNDhjNGZmNTgyNTM4YjUnLFxyXG4gICAgb2ZmaWNlcl90ZWNobm9jcmF0ID0gJ2RkYjY1ZTE4ZWM5N2IzMmQ3ZGM1MDI0OWEwZDljMjU2ZjU3NjY0ZGYnLFxyXG4gICAgb2ZmaWNlcl9lbmdpbmVlciA9ICdlOGUwMWZiODRlZDFhMzNlZDNhYjM0YWY2ZmM4NGU4NmUzNTA1MTQyJyxcclxufVxyXG5cclxuY29uc3QgX0l0ZW1IYXNoZXM6IFJlY29yZDxJdGVtSGFzaCwgMD4gPSB7XHJcbiAgICBbSXRlbUhhc2guZGlzY292ZXJlcl06IDAsXHJcbiAgICBbSXRlbUhhc2guZGlzY292ZXJlcl9wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNvbGxlY3Rvcl06IDAsXHJcbiAgICBbSXRlbUhhc2guY29sbGVjdG9yX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZ2VuZXJhbF06IDAsXHJcbiAgICBbSXRlbUhhc2guZ2VuZXJhbF9wdHNdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5yZXNlYXJjaGVyXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNlYXJjaGVyX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gudHJhZGVyXTogMCxcclxuICAgIFtJdGVtSGFzaC50cmFkZXJfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC53YXJyaW9yXTogMCxcclxuICAgIFtJdGVtSGFzaC53YXJyaW9yX3B0c106IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9icm9uemVfMWRheV06IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX2Jyb256ZV83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfN2RheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfOTBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9nb2xkXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9nb2xkXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9nb2xkXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX2dvbGRfOTBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHNdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9icm9uemVfMWRheV06IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfYnJvbnplXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3NpbHZlcl83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3NpbHZlcl85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3NpbHZlcl85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9nb2xkXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9nb2xkXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9nb2xkXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fOTBkYXlzX3B0c106IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzFkYXldOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fMzBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fOTBkYXlzX3B0c106IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfYnJvbnplXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2Jyb256ZV85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfOTBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2dvbGRfN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2dvbGRfMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2dvbGRfMzBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfcGxhdGludW1fN2RheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzXTogMCxcclxuXHJcbiAgICBbSXRlbUhhc2gubW9vbkZpZWxkc19icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1vb25GaWVsZHNfc2lsdmVyXTogMCxcclxuICAgIFtJdGVtSGFzaC5tb29uRmllbGRzX2dvbGRdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1vb25GaWVsZHNfcGxhdGludW1dOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5tb29uU2hvdF9icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm1vb25TaG90X3NpbHZlcl06IDAsXHJcbiAgICBbSXRlbUhhc2gubW9vblNob3RfZ29sZF06IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLnBsYW5ldEZpZWxkc19icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLnBsYW5ldEZpZWxkc19zaWx2ZXJdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLnBsYW5ldEZpZWxkc19nb2xkXTogMCxcclxuICAgIFtJdGVtSGFzaC5wbGFuZXRGaWVsZHNfcGxhdGludW1dOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfYWxsXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfYWxsX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX21ldGFsXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfbWV0YWxfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfY3J5c3RhbF06IDAsXHJcbiAgICBbSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2NyeXN0YWxfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfZGV1dGVyaXVtXTogMCxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfZGV1dGVyaXVtX3B0c106IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLmtyYWtlbl9icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmtyYWtlbl9zaWx2ZXJdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmtyYWtlbl9nb2xkXTogMCxcclxuICAgIFtJdGVtSGFzaC5rcmFrZW5fcGxhdGludW1dOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5kZXRyb2lkX2Jyb256ZV06IDAsXHJcbiAgICBbSXRlbUhhc2guZGV0cm9pZF9zaWx2ZXJdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmRldHJvaWRfZ29sZF06IDAsXHJcbiAgICBbSXRlbUhhc2guZGV0cm9pZF9wbGF0aW51bV06IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLmRldHJvaWRfbWVjaGFTaGlweWFyZF9icm9uemVfcHRzXTogMCxcclxuXHJcbiAgICBbSXRlbUhhc2gubmV3dHJvbl9icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm5ld3Ryb25fc2lsdmVyXTogMCxcclxuICAgIFtJdGVtSGFzaC5uZXd0cm9uX2dvbGRdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLm5ld3Ryb25fcGxhdGludW1dOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9icm9uemVdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX2Jyb256ZV9wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX3NpbHZlcl06IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fc2lsdmVyX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fZ29sZF06IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fZ29sZF9wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX3BsYXRpbnVtXTogMCxcclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9wbGF0aW51bV9wdHNdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fYnJvbnplXTogMCxcclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fYnJvbnplX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3NpbHZlcl06IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3NpbHZlcl9wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9nb2xkXTogMCxcclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fZ29sZF9wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bV06IDAsXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3BsYXRpbnVtX3B0c106IDAsXHJcblxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfYnJvbnplXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfYnJvbnplXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV85MGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzdkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzdkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19zaWx2ZXJfMzBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19zaWx2ZXJfOTBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfN2RheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfZ29sZF8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfZ29sZF85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzkwZGF5c19wdHNdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX2Jyb256ZV83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19icm9uemVfN2RheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX2Jyb256ZV8zMGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzkwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19icm9uemVfOTBkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19zaWx2ZXJfN2RheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzdkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19zaWx2ZXJfMzBkYXlzXTogMCxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX3NpbHZlcl8zMGRheXNfcHRzXTogMCxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX3NpbHZlcl85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzkwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF83ZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19nb2xkXzdkYXlzX3B0c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19nb2xkXzMwZGF5c106IDAsXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19nb2xkXzMwZGF5c19wdHNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF85MGRheXNdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF85MGRheXNfcHRzXTogMCxcclxuXHJcbiAgICBbSXRlbUhhc2gubWlncmF0aW9uSXRlbV06IDAsXHJcbiAgICBbSXRlbUhhc2gubWlncmF0aW9uSXRlbV9wdHNdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5zaG9ydGVuVGltZV9idWlsZGluZ3NdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLnNob3J0ZW5UaW1lX3Jlc2VhcmNoXTogMCxcclxuICAgIFtJdGVtSGFzaC5zaG9ydGVuVGltZV9zaGlweWFyZF06IDAsXHJcbiAgICBbSXRlbUhhc2guc2hvcnRlblRpbWVfbGlmZWZvcm1CdWlsZGluZ3NdOiAwLFxyXG4gICAgW0l0ZW1IYXNoLnNob3J0ZW5UaW1lX2xpZmVmb3JtUmVzZWFyY2hdOiAwLFxyXG5cclxuICAgIFtJdGVtSGFzaC5vZmZpY2VyX2NvbW1hbmRlcl06IDAsXHJcbiAgICBbSXRlbUhhc2gub2ZmaWNlcl9hZG1pcmFsXTogMCxcclxuICAgIFtJdGVtSGFzaC5vZmZpY2VyX2VuZ2luZWVyXTogMCxcclxuICAgIFtJdGVtSGFzaC5vZmZpY2VyX2dlb2xvZ2lzdF06IDAsXHJcbiAgICBbSXRlbUhhc2gub2ZmaWNlcl90ZWNobm9jcmF0XTogMCxcclxufVxyXG5leHBvcnQgY29uc3QgSXRlbUhhc2hlcyA9IE9iamVjdC5rZXlzKF9JdGVtSGFzaGVzKSBhcyBJdGVtSGFzaFtdOyIsImV4cG9ydCBlbnVtIEl0ZW1HcmFkZSB7XHJcbiAgICBub25lID0gJ25vbmUnLFxyXG4gICAgYnJvbnplID0gJ2Jyb256ZScsXHJcbiAgICBzaWx2ZXIgPSAnc2lsdmVyJyxcclxuICAgIGdvbGQgPSAnZ29sZCcsXHJcbiAgICBwbGF0aW51bSA9ICdwbGF0aW51bScsXHJcbn0iLCJpbXBvcnQgeyBJdGVtSGFzaCB9IGZyb20gXCIuL0l0ZW1IYXNoXCI7XHJcbmltcG9ydCB7IEl0ZW1HcmFkZSB9IGZyb20gXCIuL0l0ZW1HcmFkZVwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vSXRlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1zOiBSZWNvcmQ8SXRlbUhhc2gsIEl0ZW0+ID0ge1xyXG4gICAgW0l0ZW1IYXNoLmRpc2NvdmVyZXJdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbnRkZWNrZXJcIixcclxuICAgICAgICBpbWFnZTogXCIzZWNiZDUxMTRjM2I2NjNhYTFhMTI1MmZjMDMwOTFlZWNjNzkwZjEwXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2U5Mjc4MTU5YThjNDBlMmU5MzM3YmEzNDk1ZjBiNWFmMWUyYzlkMDUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRpc2NvdmVyZXIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jb2xsZWN0b3JdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLb2xsZWt0b3JcIixcclxuICAgICAgICBpbWFnZTogXCIwOTcyNmJmOTI1NTZmYzEyYjU1ZWM1ZWUwMDUxNmFmMDIyM2I3NzEzXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzkwYjIzNjZiNGM5NjYzOGExYThiNDE5YTFjOWFkNzYyMTQ3ZWYzOGEnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNvbGxlY3RvcixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmdlbmVyYWxdOiB7XHJcbiAgICAgICAgbmFtZTogXCJHZW5lcmFsXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNGI5OTllYTAwODljNjM1OGI1NTMxNjM1YjM3ZTI4MGNmYWU2MmRhMlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICczODg1ZmQ3ODRmNWNjYmRhOWY5YTMwMDQwYjFkZmZjOThlMjA0MzA1JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5nZW5lcmFsLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLnJlc2VhcmNoZXJdOiB7XHJcbiAgICAgICAgbmFtZTogXCJGb3JzY2hlclwiLFxyXG4gICAgICAgIGltYWdlOiBcIjU1ZjcwMDNhNWNmMDdlNTJiMzhmMTFiODExMjlhYzUwNDJkZmY0ZGFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMGZhZDc2ODg2YmMxNjFlODYwZjhmZmIwNGExODM4YmEyMWUzNzdlNicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gucmVzZWFyY2hlcixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLnRyYWRlcl06IHtcclxuICAgICAgICBuYW1lOiBcIkjDpG5kbGVyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNWRmOTNlODk0YmI5MmU5ODcyMTlmYzlkNjY5YzlhMjc2Y2ViNTQ5OVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiNTJhOTk2NTc5NzBmOTdhODg4MWYyNDkzYmU2M2UzYTU4YzhkNDlmJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC50cmFkZXIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC53YXJyaW9yXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3JpZWdlclwiLFxyXG4gICAgICAgIGltYWdlOiBcIjQ4Y2EyYWRiYjk1YjM3ZGI4Mzc3N2I2NTljZmM0MDQyYzE3OWZlY2VcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYTJkMGE1YWEwNmY5MzJjN2VjYmQ3NjkwNmQ0NGQ0YjQ2ZTMzODYwMCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gud2FycmlvcixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfYnJvbnplXzFkYXldOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubWV0YWxCb29zdGVyX2Jyb256ZV8xZGF5LFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGltYWdlOiBcIjYxYjZiZTEwNzYxZjIwNzk1ODQ0ZTQ2NzkxNmY4Y2MyODAyZGQ2ODBcIixcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIEJyb256ZSAoMSBUYWcpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9icm9uemVfN2RheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubWV0YWxCb29zdGVyX2Jyb256ZV83ZGF5cyxcclxuICAgICAgICBzbWFsbEltYWdlOiAnY2VhMjJkMDk4YTBiNDhjODk2MDEwMWUwNWMwYmQyYTdmYWRjNzJjNScsXHJcbiAgICAgICAgaW1hZ2U6IFwiN2Y4MzNhMDcwOWRiODYyMDcwY2E5Y2RjYThlOTFjMjhlNTI0MzJhZlwiLFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWxsLUJvb3N0ZXIgQnJvbnplICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfN2RheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBTaWxiZXIgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJkYjhmMjZhMjk5OTEwODZjYWRkOWRiN2RlZmYwNDRkODljZDQ3ZGVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMWFiNzBkMDk1NGI0ZWJiYjkxZTAyMGM2MGFmYmFhY2IyODcwN2U1ZCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubWV0YWxCb29zdGVyX3NpbHZlcl83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3NpbHZlcl8zMGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBTaWxiZXIgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMmJkMGI1ZGY1MWI3N2EzY2I2NWQwMTU2ODE3MWNiOTkxZTA0N2FjNVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc1ZTYyOTI2YmU1OGU5NGViYjI4YTIzMWVjYWQ4N2Y4ZTg1MmQwZjZkJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3NpbHZlcl85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNmI0ZWEyY2VkOTkyMTFiMWI5ZjBiODRmYjhhMzEyZjBmMDUzYTM2NlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcyZTRkMTZjZGFlYzFlYThiYTJhZjI4YzkxNGJiODBmNGQwOTM5Y2UzJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX2dvbGRfN2RheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBHb2xkICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiM2QwZTg3MmE3NTBhNmRhZTJmMmE1YTcwMTFlYzc5Nzk0YmIwZTY3NlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc3ODBhYTlkNjYxOWFlNTcyYTMxOGRhY2MyOWU3YmI3N2FkOTgwMzgwJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9nb2xkXzMwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIEdvbGQgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZWFjYzhkMjNlZWY3NGY1ZGQ0YjkxYjk5YTY1NGUwZDYzNDUwZmEwN1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5MTMyZjUyZTIyNGU2YmE4NzY3N2U1Y2NjNWNkMTM5MTMyMGNmN2QyJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImI1ZWQwYzEwZTMzOTZjM2NiYWI0ZGZmMmE3NzhlMjY3NmY3YjkzNmFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYTBjYmExYWE1ZGUyM2U4NzdiMTBiMTk2ZjQwODU1YmFmYzkxMjU2YycsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubWV0YWxCb29zdGVyX2dvbGRfOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzdkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiTWV0YWxsLUJvb3N0ZXIgUGxhdGluICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMzQ3NTJlNDA1MTJhNTc0YTc0NDY0MDA2ZDMyNmJkNmFlYmVjYjFmMVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiMjk5MThhN2QxZjMxM2ZkOTFkNzg4YzljNDQ0ZGZiZTk5NjY0MGVlJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fN2RheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIFBsYXRpbiAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJmZjFhZDFhNmQ1ODc5Y2IwZWE3MjAxOTljOWViNjUxODU4NGYwOTIyXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2NlM2JiMTYxNzA2ZjE3ODhjODkzYjMxOTY4MzRkNjcxMDIzMTg4NjYnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9wbGF0aW51bV8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIFBsYXRpbiAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJmZjk2NjUyZTQ5OGQyNmY4ZDI2MjFiMDU5OTgwODg2MGYxMWVlMzFjXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2UxN2ZmNzkzMGViNzljNzIwNzUwMjM0ODE4MGEyYjRhNDM3NDc0ZDQnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2Jyb256ZV8xZGF5XToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2Jyb256ZV8xZGF5LFxyXG4gICAgICAgIGltYWdlOiBcImM2NzcyMjE0YjBhNTEwZWUwMmQ2OWZiZDZjNGJkNmVhZTYwOWEzZjhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnJyxcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgQnJvbnplICgxIFRhZylcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfYnJvbnplXzdkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2Jyb256ZV83ZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJkZGVkZDJmNDEyODY3OGM3Yzg1N2FmN2U1NTUwZTM5N2Y1MGYzOGMyXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzI4NmYzZWFmNjA3MmY1NWQ4ODU4NTE0YjE1OWQxZGY1ZjE2YTU2NTQnLFxyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBCcm9uemUgKDcgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzdkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBTaWxiZXIgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI2ZTFkMjBlNzM5YzE0Mzc4NGQxMGU1OGRkYjRjNTBjNTIxMjJhNDBhXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2E3MDNiZTVhNDBhOGZlODEyODQ2NjcyMWY1ZjkyNWFlMWU4NmQxM2EnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3NpbHZlcl83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgU2lsYmVyICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjRjYjk2Mjg5NzVlMjg2YjJjZjQ5NDllZjRkMjE2YmNjYzE4MTNhNzdcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjc0NmY0ZDIzNzJkYTAzMmY0ZGFhMjk0NjA2ZWU4OGU1Y2E3YTQ2YScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgU2lsYmVyICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjIzZjdkNTBlOTE3ZWQzOWM1Yjc1NWI5NTc4NmU4Y2Y0YzQxNDEyNzlcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjBhMGZlZTZmODJiMmI0Y2VjNjkyOGMxYjA1MmFjNTg2ZjBiMmEwZCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF83ZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgR29sZCAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImJkYjQ1MDg2MDlkZTFkZjU4YmY0YTYxMDhmZmY3MzA3OGM4OWY3NzdcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjA2YmM2NTU4OWMxMGMzMWI2NDVjMzQ5OTFjMTJmYzg1NTYxNjViMicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2dvbGRfMzBkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBHb2xkICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjViODQ1MDUzMTkwNzNlNmI3MTkwMGNmZDA1OTY1Nzc1MDMxN2FlMjNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjI3OTU3MDQ2ZTJkNTMxNWJmMTMxMDRlMjU4Y2EwZWEzN2NhNzQ4OScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9nb2xkXzkwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgR29sZCAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJlZmRmNTk2NjY5NWExNDdhYWEyNjQ0MmY4MTEzNDZlOGI3NDllYzZkXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzExZDUwOGZjNzRmMTM2ZGRlMjFmZTk1MDZjYWQ2ZGIzZDQzMTQ5ZDUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2dvbGRfOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fN2RheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmlzdGFsbC1Cb29zdGVyIFBsYXRpbiAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjk5NTIwNTVjZjQ3ZDExNmVlZGVlYzQyOWE0NjliNjFhYmRmNmNlNzJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNTY1MDA3MWM3OGM5ZmNmOTY4MWZjMmM3ODA2OTRkZTk2ZGUyOWMxYicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fN2RheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBQbGF0aW4gKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZDRlMjAzNTE2ZDk1YWUyODA4MWEzZDk4NTgxOGUyZGY1YTI0NzVkNFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdkM2YzMzIxZmNkOTk5ZjY1N2U5ZGM0Y2NmOWNiMzQ3MzE1MjQxMjNmJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fOTBkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBQbGF0aW4gKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNWExNmI1ODM4MDBjNzJiOGVlZjU1ODVmZDVhYTBiYmQ4ZTVjMmMwZlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc1ZTMzYTJjZmI3M2U5MDU0NTQwYzUxNzJmNjZiNzcwYjI4NzY1NDc1JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzFkYXldOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9icm9uemVfMWRheSxcclxuICAgICAgICBpbWFnZTogXCI1ZjdhOTBmNGQ0Mzg2NmI3ODFjNjFmNzUxMWJiODM2MzI1MjYzOWE0XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBCcm9uemUgKDEgVGFnKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV83ZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV83ZGF5cyxcclxuICAgICAgICBzbWFsbEltYWdlOiAnZjBlNTE0YWY3OWQwODA4ZTMzNGU5YjZiNjk1YmY4NjRiODYxYmRmYScsXHJcbiAgICAgICAgaW1hZ2U6IFwiYzdjMjgzN2EwYjM0MWQzNzM4M2Q2YTlkOGY4OTg2ZjUwMGRiN2JmOVwiLFxyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgQnJvbnplICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzdkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgU2lsYmVyICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiN2QzMDY0NDE1ZWMxYTYwMTAwZGIwMjQ0NzFmYjBjMWZhOGFiMzcyNlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdkNWMyZWQ2ODUyZDgwZTYxMzU5YWVmNjIxNzFlYzdjOTMyZmMzYmQ3JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgU2lsYmVyICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjdjNDgxOTUxMTVkNGI0Yzk3YWM1YjY1MWIwY2Q3NjY0NjM2MzFiN2FcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMTRhNTE5OTBmZTM5NDkxMjQ2M2JlN2E1OTFiOGMzZmQ0MWE0N2FhZCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYzc4NTBiOTg4NTg3ZjA4Njg5ZjZkMmQ4ZTU3OWJmZGUxNDY1MjVkZFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiNGM2YTBlMDU4OTFiNmJmZDk1MDliZDkyYjY2NTNkNjFmZGFlOGU1JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF83ZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkRldXRlcml1bS1Cb29zdGVyIEdvbGQgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJkNTJhNjZlZDdiMzJjZjIyMDc0NmNjMzYxOGE4ODU4NzZmY2U1MjBlXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2RiNDA4MDg0ZTNiMmI3YjBlMWZlMTNkOWYyMzRkMmViZDc2ZjExYzUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF8zMGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBHb2xkICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImI1ZDJkYjBmNTQyOGI3NmNlOTFhNTFkYWVhNTk1OTQyNjA1M2U5NzNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnOWY4ZWFiMjNmZDg4OGM3ZDNjNWEwN2UwZDI1MGE2NmYwMTdlY2VjNycsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImI0YWJlY2RkYzUxOGJhYTYxZDJmMjAwNDY4N2NmYmQ4OWQzNGU3YzdcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNGM3ZGU3ODAzZGYzY2NiMDFkNTQ2ZWJjZTllNzEzNzliMWM0OTcxOScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fN2RheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBQbGF0aW4gKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIyZDFkNDI0N2JhMTJhMzE4NWJmZDQyMzAyM2I3YjU1MWNmODQxYWMzXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzdhMTA5MjZmMDBhOTJiNTYzNzEzYWRlMTBmODk3NzdhOThlZmQ5NmMnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fN2RheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBQbGF0aW4gKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiODI0NWE5ZDIxZmIyNzA4OGIyNWQ0OGFlMDI0ZTkzODJmY2VhMTQ0OFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdkOWI4NmQxNTVhNDU5YzY1OGNiN2JmY2E1OTRjZTRiNDhlMjQ1NDZiJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkRldXRlcml1bS1Cb29zdGVyIFBsYXRpbiAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI1NWE4NzdlOTE3MTZkYTczNmNjZWM2NjgxN2U2MTFhNjFjOWExZTRhXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzU1OTY2YTA5MTEyMjFhY2ZjOWI3YTg4NzkxYTI4NDZmNjU5YTFlMjknLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2Jyb256ZV83ZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBCcm9uemUgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJkYWJhNjg2YWQ3ZjAxYTVkMWU4YjI4YmQxM2ExYTlkMWI4ZWZlMTljXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2EwMjA3MDVhYjc4MmY1NGE3NTI0NGVlZmFlZTY5MDE5ZDRmMjVhYmInLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfYnJvbnplXzdkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl83ZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBTaWxiZXIgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI3ODI3N2RhYmY0MjRjZmU2ZDkwMmZjYjY3YzEwZDdhODE2ODZhNTFmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzE2MmVkZDA2YzIwMGY4ZWI2NTVmMzFlNWM2Yjk4Yzg5ZmFiZDdmODInLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzdkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl8zMGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgU2lsYmVyICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjAwOWJhMDQ3MjcyYWNmNzNkZmFjY2E5MWRiZWY4ZTljM2I4ZDVhMjlcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjRlN2U5ZGYwMzIxODk5NmMyYmM4ZmQ3NjI5YmNlN2JiNzM1ZTA4MycsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfMzBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgU2lsYmVyICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjBiOWU3YmNmMTM3YTEwNjk4MjM0NWUzN2EzMzEyNzQwMGUyMDFmZmFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnM2YxYzFjN2JlYzk5NzU0MmY3MDZhZmFiNGUzZTMxZTg5NDczODc1YScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2dvbGRfN2RheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgR29sZCAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjhjNTlkYzQwOTZkNGNiZGRmYzgzYTNhMjllZDZhNjRmYTQ2OTYzODhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYTFmZDMwZGM1ZTVhM2QwYzY4YmIwMTE2YTQ1ZTEzMDNhZThkM2Q3MCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzMwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBHb2xkICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjc2YmM1NjNmNTI4MTA4YzZkNjViOGYzYTc1Nzg5ZDkyOWUyZWFlMmJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMDY3ZDU1MGI2MTUzYWJjNjM1YjNjMWRjNTQ1NWNlMmI3NTk1Nzc1OCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfZ29sZF85MGRheXNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgR29sZCAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJlNzE1M2Y1ZGUyYzgzMzIxYzkwOGMyYzNmY2I3NmZiODc0NTQ3YjVkXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2FkNjdlNGU3Y2M3NWM4MGE5ZDRlNDQyNGUyZTQ0ODA4MzEyZDFiYmYnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfZ29sZF85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzdkYXlzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRW5lcmdpZS1Cb29zdGVyIFBsYXRpbiAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImEwOWI0YzQ4MGI4YjY5NzFkNzNjYzZkNTEwMmU0YzJkMjE3ZjUxYWFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjUzZTA2MTBjNTMzNzljZTFjOTk0MTBiMjNiZTJkNDllZTg2OWQ0NScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzMwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBQbGF0aW4gKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiOWQxM2Y5Y2Q0ODNmZTIyZTAxZjMzYWRhNzUxMTY3N2ZhODU1NmU0ZVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5YWNhYTI4OTZmMGU2NzUwZDEyMWQ0YjIyNjNkYzc3MmRkMzZhZDYwJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzkwZGF5c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBQbGF0aW4gKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYjEwMTNkMGU5ZWVhMzQ0MTlkNGIyYWNkMDVjNGFkY2QxNTg2ODQxN1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiY2Y3NTZmYWIzOWNkODNjNTk3NWM5YWE3ZGZiYzA4N2VjMGRiYjNiJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2gubW9vbkZpZWxkc19icm9uemVdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNb25kZmVsZGVyIEJyb256ZVwiLFxyXG4gICAgICAgIGltYWdlOiBcImZjNTlkNGNiNGJiMjhkNmI5ZjQzYThkZDhiZGQ4ZmY5YmIzNjY3NGNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNTY3NmY5OWFlOTgxODU2MDcyMGQ5N2QwMDYxZmQ0ODBjYTYzMjgzNycsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubW9vbkZpZWxkc19icm9uemUsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1vb25GaWVsZHNfc2lsdmVyXToge1xyXG4gICAgICAgIG5hbWU6IFwiTW9uZGZlbGRlciBTaWxiZXJcIixcclxuICAgICAgICBpbWFnZTogXCJmM2MwNzBiNjhmY2M5YTlmYjUxODkwNTZjZmNiYzY1N2RhYWZlMzRlXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzYxNTM0NTY2Yjc5NDJlYjI2NjkxNjNjYzI2MjMyYmQ0NDliM2Y4ZjAnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1vb25GaWVsZHNfc2lsdmVyLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5tb29uRmllbGRzX2dvbGRdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNb25kZmVsZGVyIEdvbGRcIixcclxuICAgICAgICBpbWFnZTogXCI1ZGJmMWNjNDc5MTEwYmM2NTQ2OTQ3N2MxMjdiODE4NzBlNGFmOWEyXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzk5MzI3OGMzMzU0ZTE3YWY5ZTI0YTRiNjgxNzcwNTUyNTE4YjI3YTYnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1vb25GaWVsZHNfZ29sZCxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1vb25GaWVsZHNfcGxhdGludW1dOiB7XHJcbiAgICAgICAgbmFtZTogXCJNb25kZmVsZGVyIFBsYXRpblwiLFxyXG4gICAgICAgIGltYWdlOiBcImQyNWY1YmE1MGU5YjE1NGFiYTQ0YmQ1NjE2MDE5NDUwYjkxNjViNGFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjllMzBlNTZiODA5NzJlNDkyYjliZWNkYTRlZjQyOTcyNGU5OTEzZicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubW9vbkZpZWxkc19wbGF0aW51bSxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2gubW9vblNob3RfYnJvbnplXToge1xyXG4gICAgICAgIG5hbWU6IFwiTS5PLk8uTi5TLiBCcm9uemVcIixcclxuICAgICAgICBpbWFnZTogXCIyNjE1MDliNDdiYmI2MzA0NjJkZWYzMjcxMjhlZWZiYjgzNDRlYTg2XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2EwZGQ4YjEyYWE1MWYzZjU5YjQ4OTdiZDVmNTZhZDNjOTk5YTY5ZGInLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1vb25TaG90X2Jyb256ZSxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubW9vblNob3Rfc2lsdmVyXToge1xyXG4gICAgICAgIG5hbWU6IFwiTS5PLk8uTi5TLiBTaWxiZXJcIixcclxuICAgICAgICBpbWFnZTogXCIxM2FjOTQxZDEyNTQ3MDFlMmVhMTFhN2Y0MDFhYzhkZDBhNmEzNzYwXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzVmY2I2ODcyOWM2ZWM3OGIwNWQ3YzIwZTZkMDlhOWZlNDFkYmE1MzcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1vb25TaG90X3NpbHZlcixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubW9vblNob3RfZ29sZF06IHtcclxuICAgICAgICBuYW1lOiBcIk0uTy5PLk4uUy4gR29sZFwiLFxyXG4gICAgICAgIGltYWdlOiBcImVhOWNjNjE4NzIyMGJkMzM2MzIzNTNmY2E3OWJiYWJmM2Y5Y2IwYmVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMzVjYmE2ZDNkYjFmNmU1NWUxZDc0ZjdlZjc1MTBlODRjMDBkMDFiMycsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubW9vblNob3RfZ29sZCxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5wbGFuZXRGaWVsZHNfYnJvbnplXToge1xyXG4gICAgICAgIG5hbWU6IFwiUGxhbmV0ZW5mZWxkZXIgQnJvbnplXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMzRiMjFkZTFlNThjZGNmZTI3MWFjMTk3OThjNmE4NzdkZmQ3YmMxNlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdlZDFmYzZiMDRkNjdjOWU2MDU4MDE4Yzc2ZjVlZDNmMzI1YTBlMWYxJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5wbGFuZXRGaWVsZHNfYnJvbnplLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5wbGFuZXRGaWVsZHNfc2lsdmVyXToge1xyXG4gICAgICAgIG5hbWU6IFwiUGxhbmV0ZW5mZWxkZXIgU2lsYmVyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNjdjOGEzODA2MjU5NTM2OThhZTEwOWMzYWY4NTA3NTQxOWM4ZmUzNlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc2ZjIxOTNmOWY4NzE0Y2RmOWYxNWI2Y2RmZWQ3OTFmZDhmYzFkZTBhJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5wbGFuZXRGaWVsZHNfc2lsdmVyLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5wbGFuZXRGaWVsZHNfZ29sZF06IHtcclxuICAgICAgICBuYW1lOiBcIlBsYW5ldGVuZmVsZGVyIEdvbGRcIixcclxuICAgICAgICBpbWFnZTogXCJkZGM1OTAyMWUxZTVjZWMyNGJlOTQ2YzdmMmRjYzU1NzIxYTU0MGZhXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2VhOGFhNTcyYzcwMzg5NGViYTQ2M2EwOTYxMDY1ZmFiYWZjYWMzMzQnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnBsYW5ldEZpZWxkc19nb2xkLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gucGxhbmV0RmllbGRzX3BsYXRpbnVtXToge1xyXG4gICAgICAgIG5hbWU6IFwiUGxhbmV0ZW5mZWxkZXIgUGxhdGluXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiOTc3MWUxNWMwNGFjZmFkYzU1Y2JkNTEzZWZjODIzNWNjZmU1MjA1ZFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcxODBkYTRhNzk0MjM2OTk0M2Q1YTdlZjhjZTE1NTI3NmZmNjZiNjRmJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5wbGFuZXRGaWVsZHNfcGxhdGludW0sXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLnJlc291cmNlUGFja2FnZV9hbGxdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLb21wbGV0dGVzIFJlc3NvdXJjZW5wYWtldFwiLFxyXG4gICAgICAgIGltYWdlOiBcIjE4MTQ1MTQ1YTc2YjcxZjE1MWJhOTdiN2MxNzg5MWE1Mzg5Y2VlYjVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYmFmODMzYjU0YmRiMzEyZDk1NWNiZjMyM2Q4MTBiYzZiMjQ1NzhkMCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2FsbCxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLnJlc291cmNlUGFja2FnZV9tZXRhbF06IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbHBha2V0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMGJkNjdmMmVhMzFhMzg5YmZkMzM2MjliNGU2MTFlOTI2MTU5N2M4MVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc0MDc3YmUxYzA2MTM3MWIwMzE2MDRhMDIxMjYxMTk2NWMzNjNhMGIyJyxcclxuICAgICAgICBoYXNoOiBcIjg1OWQ4MmQxNmI4Mzg0OGY3MzY1ZDIxOTQ5YjNlMWU2M2M3ODQxZlwiIGFzIEl0ZW1IYXNoLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2NyeXN0YWxdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmlzdGFsbHBha2V0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYzQ4YzhjYTIzZmIyMmQ4ODYwOTYyMTA5Nzk5YTFmMmUwMjg1YTY0ZVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcwYjQyODUwZWEyMDE0YjhhY2U4ZGI1YjY5YmNlZTE0NzVhODgxMjkxJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfY3J5c3RhbCxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLnJlc291cmNlUGFja2FnZV9kZXV0ZXJpdW1dOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW1wYWtldFwiLFxyXG4gICAgICAgIGltYWdlOiBcImM3ZTc5ZGI4NmQ5NWQyMmIwMzM2MjdjNzA2Y2I0N2Q5MzQyZjVlYzFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnZDQ5NzE2MjBkM2EyNjA1YWZhYWMwMDczNjc5M2ZkOTQyY2QzYWQzNScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2RldXRlcml1bSxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5rcmFrZW5fYnJvbnplXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmtyYWtlbl9icm9uemUsXHJcbiAgICAgICAgaW1hZ2U6IFwiOTg2MjlkMTEyOTNjOWYyNzAzNTkyZWQwMzE0ZDk5ZjMyMGY0NTg0NVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiYzRlMjMxNWY3ZGI0Mjg2YmE3MmE0MjRhMzJjOTIwZTc4YWY4ZTI3JyxcclxuICAgICAgICBuYW1lOiBcIktSQUtFTiBCcm9uemVcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gua3Jha2VuX3NpbHZlcl06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5rcmFrZW5fc2lsdmVyLFxyXG4gICAgICAgIGltYWdlOiBcIjFlZTU1ZWZlMDBiYjAzNzQzY2EwMzFhOWVhYTEzNzRiYjkzNmQ4NjNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnN2RjYzBjYjUxZjQ1MTRhMzM5ODQ3ZTdmOTEyOWM5OTQ1NzA2NmI1MCcsXHJcbiAgICAgICAgbmFtZTogXCJLUkFLRU4gU2lsYmVyXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmtyYWtlbl9nb2xkXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmtyYWtlbl9nb2xkLFxyXG4gICAgICAgIGltYWdlOiBcIjQwYTE2NDRlMTA0OTg1YTNlNzJkYTI4Yjc2MDY5MTk3MTI4ZjlmYjVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnM2UxMWQzMWZjZjgxZTRjNmViNDhlNzRlMmQ0MzRkNWZhNTBlOWMzMScsXHJcbiAgICAgICAgbmFtZTogXCJLUkFLRU4gR29sZFwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gua3Jha2VuX3BsYXRpbnVtXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmtyYWtlbl9wbGF0aW51bSxcclxuICAgICAgICBpbWFnZTogXCI1OWQwZDA5OGJkZmZhZDdmYWE1ZTViM2QxN2RkNzc5OTE4ODUwMGRlXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzc4ODY1MTEyMTBhYWYxYzJlYTIzYjY2YjVkMGRiZjAwM2FjMjVkYjgnLFxyXG4gICAgICAgIG5hbWU6IFwiS1JBS0VOIFBsYXRpblwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5kZXRyb2lkX2Jyb256ZV06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXRyb2lkX2Jyb256ZSxcclxuICAgICAgICBpbWFnZTogXCI1NjcyNGMzYTFkY2FlODAzNmJiMTcyZjBiZTgzM2E2ZjlhMjhiYzI3XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzYxMGI4NjdhODg0MWQ0YTRjOTQ5ZDhhNTk3MTkyNDM1ODA0NTY0NTInLFxyXG4gICAgICAgIG5hbWU6IFwiREVUUk9JRCBCcm9uemVcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV0cm9pZF9zaWx2ZXJdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV0cm9pZF9zaWx2ZXIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZDBiOGZiM2QzMDdiODE1YjMxODJmMzg3MmU4ZWFiNjU0ZmU2NzdkZlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc4YjYwYjIzZjQyOGVkNTRiYWQ3ZjgxMjk1YjRjMzAzZmQxZGVmYmU0JyxcclxuICAgICAgICBuYW1lOiBcIkRFVFJPSUQgU2lsYmVyXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldHJvaWRfZ29sZF06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXRyb2lkX2dvbGQsXHJcbiAgICAgICAgaW1hZ2U6IFwiNTVkNGIxNzUwOTg1ZTQ4NDMwMjNkN2QwYWNkMmI5YmFmYjE1ZjBiN1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdmNDZlN2M4YmRkMWVhOWJlZDRmMGNiOTk4MTk5YzQ3ODc2MmExOGE3JyxcclxuICAgICAgICBuYW1lOiBcIkRFVFJPSUQgR29sZFwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV0cm9pZF9wbGF0aW51bV06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXRyb2lkX3BsYXRpbnVtLFxyXG4gICAgICAgIGltYWdlOiBcIjVmZTdmYzVlNzY0Mjg2YjNmNTg4ZWY0ODhkZjU5MzIzNTY3MWE2NjFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnOWY2Y2RkOWMwYmZjOWRmMzMyMzE4ZTllNzYwMmRiNTE2OTcyNmM1NCcsXHJcbiAgICAgICAgbmFtZTogXCJERVRST0lEIFBsYXRpblwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5uZXd0cm9uX2Jyb256ZV06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5uZXd0cm9uX2Jyb256ZSxcclxuICAgICAgICBpbWFnZTogXCI0YmM0MzI3YTNmZDUwOGI1ZGE4NDI2N2UyY2ZkNThkNDdmOWU0ZGNiXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzJhOTc0NzExNjUxZTFiMzhjYjhkODQwY2NjMTUyNTljNDk3MjZiNzUnLFxyXG4gICAgICAgIG5hbWU6IFwiTkVXVFJPTiBCcm9uemVcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubmV3dHJvbl9zaWx2ZXJdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubmV3dHJvbl9zaWx2ZXIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYTkyNzM0MDI4ZDFiZjJlNzVjNWMyNWFlMTM0YjRkMjk4YTVjYTM2ZVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcyY2E0MDcwNTczN2MwYmM1MTEwN2JmY2E0OTY0MzQ4N2M1MTBhYzRhJyxcclxuICAgICAgICBuYW1lOiBcIk5FV1RST04gU2lsYmVyXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm5ld3Ryb25fZ29sZF06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5uZXd0cm9uX2dvbGQsXHJcbiAgICAgICAgaW1hZ2U6IFwiZDk0OTczMmIwMWE3ZjdmNmQ5MmU4MTRmMmRlOTk0NzlhMzI0ZTFlM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcwMTQ4MjdmNmQxZDViNzhiMWVkZDBkNDQ3NmRiMDU2MzllN2Q5MzY3JyxcclxuICAgICAgICBuYW1lOiBcIk5FV1RST04gR29sZFwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubmV3dHJvbl9wbGF0aW51bV06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5uZXd0cm9uX3BsYXRpbnVtLFxyXG4gICAgICAgIGltYWdlOiBcImM1MzNhZGE3Y2FkMjE2NGYzMjI3NDg2MzgyMzZiMzhjMDJhZWFlYTBcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMTQxYjBjNmZjYjY1MmIyYzJhNGM1OThlMzdhNjIwZjkxNzJjN2QzMicsXHJcbiAgICAgICAgbmFtZTogXCJORVdUUk9OIFBsYXRpblwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9icm9uemVdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fYnJvbnplLFxyXG4gICAgICAgIGltYWdlOiBcIjQ4MzRhZGJjYWI4NWY3NGFkMWEyMDMwZTNlY2NjODlmMzVjOWNmYmJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcImZlMzhjMGNlNzllZGNmMGZhNTNhOGE2YWViZDU4ZDVkMjdkMGUxZmRcIixcclxuICAgICAgICBuYW1lOiAnS1JBS0VOIEJyb256ZSAoTGlmZWZvcm0pJyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fc2lsdmVyXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX3NpbHZlcixcclxuICAgICAgICBpbWFnZTogXCIyN2Y1ZDhjZWFmYzUyMGJjYzBmNzA3MTk4MWFmZjYyYWFlZmE3OTZiXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogXCJmYjAwMTdjMmY4MTdiYzRjOWI5NDMzNmMyYjBkODQ1ZTA4ZmJlMDZiXCIsXHJcbiAgICAgICAgbmFtZTogJ0tSQUtFTiBTaWxiZXIgKExpZmVmb3JtKScsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX2dvbGRdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fZ29sZCxcclxuICAgICAgICBpbWFnZTogXCJkM2VkOWRmZTk4NmVjYmExMjliNGE0NTgwZDE3MDlhY2JjNzMyMTM5XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogXCJiNzU0ZmFlOTUyYmE0NGE0ZWUwYWVhMTNkMmQ0YmM5OWNkNzNiMDY5XCIsXHJcbiAgICAgICAgbmFtZTogJ0tSQUtFTiBHb2xkIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fcGxhdGludW1dOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fcGxhdGludW0sXHJcbiAgICAgICAgaW1hZ2U6IFwiMjdmYzU3MDc4YTNkZjMyYmMzZGI0ZGIwNzZlNzA0MGQyMGQxZGNjM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6IFwiOTQ4NDliMmYxNDYxZDQxMDQyMDk2ZWI4YWQ1MzY4MjA3MzFhNGE1ZlwiLFxyXG4gICAgICAgIG5hbWU6ICdLUkFLRU4gUGxhdGluIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fYnJvbnplXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9icm9uemUsXHJcbiAgICAgICAgaW1hZ2U6IFwiYmU1NmMzYjM2MTg5YjE2ODMwZTA3YTYyNWYxODJmZTRhYjc1Yjg3OFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6IFwiMDE0YjdiMjAxZjFmYzg4OWY2YzVkYTE3NTdhNjBlMGI3NTljNWVjMVwiLFxyXG4gICAgICAgIG5hbWU6ICdORVdUUk9OIEJyb256ZSAoTGlmZWZvcm0pJyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3NpbHZlcl06IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fc2lsdmVyLFxyXG4gICAgICAgIGltYWdlOiBcImQ3ZmZlODc4NjliYWZkOGVjODRjOGQ1MDc3NDg2MWQ3YzcxNjk4NWJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcIjMwYzMyMTQ2YTc5MjZkMTBiMWJlMTJjZmY2ZjE5NzcxODM2ZDBlNDZcIixcclxuICAgICAgICBuYW1lOiAnTkVXVFJPTiBTaWxiZXIgKExpZmVmb3JtKScsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9nb2xkXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9nb2xkLFxyXG4gICAgICAgIGltYWdlOiBcIjNmYmUwMjdlMDU3OWU5NGZlODhkODczODU3YTI4ZDIyZDZiMjQxMWJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcIjVjZDFjNjk3OTI3MWRlZTc2YzFlYjA5NmE1ZWQ5NDBlMmMxZGE3MDVcIixcclxuICAgICAgICBuYW1lOiAnTkVXVFJPTiBHb2xkIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3BsYXRpbnVtXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bSxcclxuICAgICAgICBpbWFnZTogXCJjOGI1ODNhMThjOThhOTMwNDFjY2M4MjI2OWFmNTg4NmU5NzI0MDNlXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogXCI4YjYwNDNhMWM3OWYzNzhiNWNlZjY4NDM5ZTQwYzFiZTM4N2FkZTQyXCIsXHJcbiAgICAgICAgbmFtZTogJ05FV1RST04gUGxhdGluIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfYnJvbnplXzdkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiNDAyMjRkMWZiN2I3ZDdhMjQ0YjJmNDBkM2NmMjgxZGNmNDg0Y2ZkM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcwYjhmYzI5YmUyMzUwNTEyMDhlYTMxMjQ4YTA4NjFiMmY4OWUzZjRmJyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBCcm9uemUgKDcgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV8zMGRheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV83ZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJhNTk2ODI4NTdiN2E2MzJjNGJlZjMxOWYwZWY3OWYwYzNiZGJhNWM5XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2EyMjlmMjIwZWJmZmNjYmI5MzI1ODE3MjYxYjMyZmNiZTVkMzhlODAnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIEJyb256ZSAoMzAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV85MGRheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV85MGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiZGNkMjIyNTFiNzk5YzcyYTk4YmY0YzQyNTE2NjMzNTE2NWY5NWE5ZlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc4ZDcwYTc4NWNkMTBhOWVjYzdiYTI1MjNlNDM0YWQ3ZTJmNDIxZGQ0JyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBCcm9uemUgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19zaWx2ZXJfN2RheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl83ZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJkYmFhMTM3MzY5YTIxMjM0NWYwYWIzM2UxOGY4YmIyMzM1ZjliZWRmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzdjZTg3YTVhMzg3NWE3ZGQ1ZTJhOThjZjUwNDdjZGJiOWIxZDZhNDEnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIFNpbGJlciAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzMwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzMwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCIyZjNlZTczMTg0OTAyNGJmZWY4NWViOGM3Mzg5YmI2NWU4ZjZiZTYxXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzZkOGQ4YjdhMWI5OWJiMTQ4Njg2NDZhYmZlOGZhYjM4ZDEzNDUxZjUnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIFNpbGJlciAoMzAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl85MGRheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiNGQ1MTIzMjAyYzA1MTAyMGE3MzQxZDJlYTM1OTliNDg2OTk0NTMxOVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc1YWRmZWZiODIyMGFiMDMwMDdhMGFkYTk3YjQ5M2E4OWJhOTdmYWFlJyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcImVhNGVjNzY2OTY5MmU1YjkxZGRlNThmYzVmYTYwNmI3ZTFmMjI1NzhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjQxZjRiODNjOTFmNTFmN2JiM2I4ODRkODgzZTcwNzc2OTUzZmNlZicsXHJcbiAgICAgICAgbmFtZTogXCJFeHBlZGl0aW9uc2xvdHMgR29sZCAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfMzBkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzMwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCIxYmEwZTg0MzZhZjUxOGYwMDE0YWYzNTJhZjdkMjBjOGQxNzRmYjUzXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2NlNDNjNDhiN2VmMjAwMjM2Y2UyNTFhOGM4OWY5MjE0MjYyZGVlYmUnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIEdvbGQgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfZ29sZF85MGRheXNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiYWVkZTIyODU0ZDNlOGU0NmNiOTNkYWQ3MjZhZDJiN2VkZjlkMjM1ZlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdkYjI4ODM1MTAxMDUyNTQ3ZGI3NzcyODc2Njc4NTNkMGE0NjViMjA3JyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzdkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcIjQ0NmQwZDAxNTAzZjhiODQ1YzNkMzMzMGM0ZGFiNjczMTY2NTcwZTFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMGViMTFlYzFlOTU2YTU5OTFlYjRlYmEyYmNkZjNmNDA2MjM2MmRmMicsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgQnJvbnplICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzMwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2Jyb256ZV8zMGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiOGFiNmQ5MjEwNjlmMDFkOGNiODQzZjRiYzM3ZjUxZTVjZjBjNDMxOFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiZWM4NWM3YjQ4NjhiZGQ1ZDYzNGQ1MGRlMTdkOGMxN2Q1NmQ0MGI1JyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBCcm9uemUgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzkwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2Jyb256ZV85MGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiYTYxYmJmYzU3ZDRiNzBhYmZmMjM2NTAwNWJiY2FmOTE4Nzk2ZDc4NFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc2ZTZjNjA2MTAwNTc4NmMxYzJjY2MxNmJmNzI0ODgxMjdhZGRkZGE4JyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBCcm9uemUgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzdkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcImQzOGY0ZTgzZjkwNmFkNzQ3ZWMyNjAxZGE4MzZjMGIxMTcwM2UzYjNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnM2U1MDJjMGExZjA0NjJiZDdlOTU4OTI5NDkzNDAyOWY3ZjBhZjA5OScsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgU2lsYmVyICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzMwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX3NpbHZlcl8zMGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiOGExMzNiOTM4ZTU3Mjg1YTNkZTg5MWRkNGI4MmI1OTRkNGU4MDhhM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiZDU1YTJlMDhkNmNjMzIwNjQ2YmJhZjQyMGQwNWNkZjI0M2RiMzEyJyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBTaWxiZXIgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzkwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiZjdmYzRlNTY2ODY5YTg2NjFhYzVlZjRhNzVlZjliZDVmYTUwMjRlMVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc0OGU5YTc4MmIzOTE5OWQzYmI5ZjYxNGViZDVkNGEzODA0NjU2MDc5JyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF83ZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiNGRiNTY2NTc1MGRmYjgzYmI5NTgyODBmZmQ1MDBjNzEwNTU3NDA2OFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5NDYxOWIyYzc0MWJkYzUwYzQ0MDE0N2VlZmZmZDc5YWM1MDg5YjBlJyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBHb2xkICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfMzBkYXlzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiMmZhMjE1ZjdmZTIyMzcwYjlmZDgzNzk2ZGM2YmFhMTdhZWQzZjc1YVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiMTFmZDEzNzRlYjZjZWFjMGE5Yzc3ODhiYjNkM2QwM2FmYjM1YTEyJyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBHb2xkICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19nb2xkXzkwZGF5c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfOTBkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcImZhMTczOTFhMjczODQ0ZWU4ZTcxZDQ2MjVjZTczODFiNDU4Y2YxYWRcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnOWU2NTRhZTQ5NjA3YzBkZGNjODc2MzNiZjczNzJiOTc2ZmQ3ZTE4MycsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgR29sZCAoOTAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBbSXRlbUhhc2guZGlzY292ZXJlcl9wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbnRkZWNrZXJcIixcclxuICAgICAgICBpbWFnZTogXCIzZWNiZDUxMTRjM2I2NjNhYTFhMTI1MmZjMDMwOTFlZWNjNzkwZjEwXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2U5Mjc4MTU5YThjNDBlMmU5MzM3YmEzNDk1ZjBiNWFmMWUyYzlkMDUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRpc2NvdmVyZXIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jb2xsZWN0b3JfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS29sbGVrdG9yXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMDk3MjZiZjkyNTU2ZmMxMmI1NWVjNWVlMDA1MTZhZjAyMjNiNzcxM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5MGIyMzY2YjRjOTY2MzhhMWE4YjQxOWExYzlhZDc2MjE0N2VmMzhhJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5jb2xsZWN0b3IsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5nZW5lcmFsX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkdlbmVyYWxcIixcclxuICAgICAgICBpbWFnZTogXCI0Yjk5OWVhMDA4OWM2MzU4YjU1MzE2MzViMzdlMjgwY2ZhZTYyZGEyXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzM4ODVmZDc4NGY1Y2NiZGE5ZjlhMzAwNDBiMWRmZmM5OGUyMDQzMDUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmdlbmVyYWwsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2gucmVzZWFyY2hlcl9wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJGb3JzY2hlclwiLFxyXG4gICAgICAgIGltYWdlOiBcIjU1ZjcwMDNhNWNmMDdlNTJiMzhmMTFiODExMjlhYzUwNDJkZmY0ZGFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMGZhZDc2ODg2YmMxNjFlODYwZjhmZmIwNGExODM4YmEyMWUzNzdlNicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gucmVzZWFyY2hlcixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLnRyYWRlcl9wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJIw6RuZGxlclwiLFxyXG4gICAgICAgIGltYWdlOiBcIjVkZjkzZTg5NGJiOTJlOTg3MjE5ZmM5ZDY2OWM5YTI3NmNlYjU0OTlcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYjUyYTk5NjU3OTcwZjk3YTg4ODFmMjQ5M2JlNjNlM2E1OGM4ZDQ5ZicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gudHJhZGVyLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gud2Fycmlvcl9wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmllZ2VyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNDhjYTJhZGJiOTViMzdkYjgzNzc3YjY1OWNmYzQwNDJjMTc5ZmVjZVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdhMmQwYTVhYTA2ZjkzMmM3ZWNiZDc2OTA2ZDQ0ZDRiNDZlMzM4NjAwJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC53YXJyaW9yLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiAnTWV0YWxsLUJvb3N0ZXIgQnJvbnplICgzMCBUYWdlKScsXHJcbiAgICAgICAgaW1hZ2U6ICc1ZDVmNTQ1YjVjNTk2OTU5M2MxYmY0MTk4ZGEyNjY0ZGI3NTg1N2I5JyxcclxuICAgICAgICBzbWFsbEltYWdlOiAnJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfYnJvbnplXzMwZGF5c19wdHMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9icm9uemVfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiAnTWV0YWxsLUJvb3N0ZXIgQnJvbnplICg5MCBUYWdlKScsXHJcbiAgICAgICAgaW1hZ2U6ICc4YmQ5YzQwYjlhYWU4MjFjZDdhMTliMjRlNDE0YmY0MzdmODExOTFlJyxcclxuICAgICAgICBzbWFsbEltYWdlOiAnJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIFNpbGJlciAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIyYmQwYjVkZjUxYjc3YTNjYjY1ZDAxNTY4MTcxY2I5OTFlMDQ3YWM1XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzVlNjI5MjZiZTU4ZTk0ZWJiMjhhMjMxZWNhZDg3ZjhlODUyZDBmNmQnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiNmI0ZWEyY2VkOTkyMTFiMWI5ZjBiODRmYjhhMzEyZjBmMDUzYTM2NlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcyZTRkMTZjZGFlYzFlYThiYTJhZjI4YzkxNGJiODBmNGQwOTM5Y2UzJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX2dvbGRfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIEdvbGQgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZWFjYzhkMjNlZWY3NGY1ZGQ0YjkxYjk5YTY1NGUwZDYzNDUwZmEwN1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5MTMyZjUyZTIyNGU2YmE4NzY3N2U1Y2NjNWNkMTM5MTMyMGNmN2QyJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfZ29sZF85MGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiTWV0YWxsLUJvb3N0ZXIgR29sZCAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJiNWVkMGMxMGUzMzk2YzNjYmFiNGRmZjJhNzc4ZTI2NzZmN2I5MzZhXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2EwY2JhMWFhNWRlMjNlODc3YjEwYjE5NmY0MDg1NWJhZmM5MTI1NmMnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9nb2xkXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBQbGF0aW4gKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIzNDc1MmU0MDUxMmE1NzRhNzQ0NjQwMDZkMzI2YmQ2YWViZWNiMWYxXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2IyOTkxOGE3ZDFmMzEzZmQ5MWQ3ODhjOWM0NDRkZmJlOTk2NjQwZWUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbC1Cb29zdGVyIFBsYXRpbiAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJmZjFhZDFhNmQ1ODc5Y2IwZWE3MjAxOTljOWViNjUxODU4NGYwOTIyXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2NlM2JiMTYxNzA2ZjE3ODhjODkzYjMxOTY4MzRkNjcxMDIzMTg4NjYnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1ldGFsQm9vc3Rlcl9wbGF0aW51bV8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRhbGwtQm9vc3RlciBQbGF0aW4gKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZmY5NjY1MmU0OThkMjZmOGQyNjIxYjA1OTk4MDg4NjBmMTFlZTMxY1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdlMTdmZjc5MzBlYjc5YzcyMDc1MDIzNDgxODBhMmI0YTQzNzQ3NGQ0JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5tZXRhbEJvb3N0ZXJfcGxhdGludW1fOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiAnS3Jpc3RhbGwtQm9vc3RlciBCcm9uemUgKDMwIFRhZ2UpJyxcclxuICAgICAgICBpbWFnZTogJzdkNGM4OTIzYmM5MzZmMDlmZWYyNDRkYjc0ZDI1NDEzMzcyZTIyMTcnLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9icm9uemVfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiAnS3Jpc3RhbGwtQm9vc3RlciBCcm9uemUgKDkwIFRhZ2UpJyxcclxuICAgICAgICBpbWFnZTogJzQ3OWEyODAwYzQ4NTc3MjQxOGU2MjBkM2EzNTZhOTZhM2JkN2ZjYTQnLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2Jyb256ZV85MGRheXNfcHRzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9zaWx2ZXJfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgU2lsYmVyICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjRjYjk2Mjg5NzVlMjg2YjJjZjQ5NDllZjRkMjE2YmNjYzE4MTNhNzdcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjc0NmY0ZDIzNzJkYTAzMmY0ZGFhMjk0NjA2ZWU4OGU1Y2E3YTQ2YScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmlzdGFsbC1Cb29zdGVyIFNpbGJlciAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIyM2Y3ZDUwZTkxN2VkMzljNWI3NTViOTU3ODZlOGNmNGM0MTQxMjc5XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzYwYTBmZWU2ZjgyYjJiNGNlYzY5MjhjMWIwNTJhYzU4NmYwYjJhMGQnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2dvbGRfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgR29sZCAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI1Yjg0NTA1MzE5MDczZTZiNzE5MDBjZmQwNTk2NTc3NTAzMTdhZTIzXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzYyNzk1NzA0NmUyZDUzMTViZjEzMTA0ZTI1OGNhMGVhMzdjYTc0ODknLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX2dvbGRfMzBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF85MGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGwtQm9vc3RlciBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImVmZGY1OTY2Njk1YTE0N2FhYTI2NDQyZjgxMTM0NmU4Yjc0OWVjNmRcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMTFkNTA4ZmM3NGYxMzZkZGUyMWZlOTUwNmNhZDZkYjNkNDMxNDlkNScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfZ29sZF85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5jcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmlzdGFsbC1Cb29zdGVyIFBsYXRpbiAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjk5NTIwNTVjZjQ3ZDExNmVlZGVlYzQyOWE0NjliNjFhYmRmNmNlNzJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNTY1MDA3MWM3OGM5ZmNmOTY4MWZjMmM3ODA2OTRkZTk2ZGUyOWMxYicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fN2RheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIktyaXN0YWxsLUJvb3N0ZXIgUGxhdGluICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImQ0ZTIwMzUxNmQ5NWFlMjgwODFhM2Q5ODU4MThlMmRmNWEyNDc1ZDRcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnZDNmMzMyMWZjZDk5OWY2NTdlOWRjNGNjZjljYjM0NzMxNTI0MTIzZicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guY3J5c3RhbEJvb3N0ZXJfcGxhdGludW1fMzBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJLcmlzdGFsbC1Cb29zdGVyIFBsYXRpbiAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI1YTE2YjU4MzgwMGM3MmI4ZWVmNTU4NWZkNWFhMGJiZDhlNWMyYzBmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzVlMzNhMmNmYjczZTkwNTQ1NDBjNTE3MmY2NmI3NzBiMjg3NjU0NzUnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiAnRGV1dGVyaXVtLUJvb3N0ZXIgQnJvbnplICgzMCBUYWdlKScsXHJcbiAgICAgICAgaW1hZ2U6ICc1NDE2ZTE4NTU1N2JiZDE4ZjgzMmZlYWZkZTczZmQ0NmYzNTczMjM5JyxcclxuICAgICAgICBzbWFsbEltYWdlOiAnJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV8zMGRheXNfcHRzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2Jyb256ZV85MGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6ICdEZXV0ZXJpdW0tQm9vc3RlciBCcm9uemUgKDkwIFRhZ2UpJyxcclxuICAgICAgICBpbWFnZTogJzJiZDU0ODAxMmE3YmVhNmJjMTIyN2Y5YzkwNDc1NGRlMWNmYWYwYmMnLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBTaWxiZXIgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiN2M0ODE5NTExNWQ0YjRjOTdhYzViNjUxYjBjZDc2NjQ2MzYzMWI3YVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcxNGE1MTk5MGZlMzk0OTEyNDYzYmU3YTU5MWI4YzNmZDQxYTQ3YWFkJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYzc4NTBiOTg4NTg3ZjA4Njg5ZjZkMmQ4ZTU3OWJmZGUxNDY1MjVkZFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiNGM2YTBlMDU4OTFiNmJmZDk1MDliZDkyYjY2NTNkNjFmZGFlOGU1JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgR29sZCAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJiNWQyZGIwZjU0MjhiNzZjZTkxYTUxZGFlYTU5NTk0MjYwNTNlOTczXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzlmOGVhYjIzZmQ4ODhjN2QzYzVhMDdlMGQyNTBhNjZmMDE3ZWNlYzcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2dvbGRfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkRldXRlcml1bS1Cb29zdGVyIEdvbGQgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYjRhYmVjZGRjNTE4YmFhNjFkMmYyMDA0Njg3Y2ZiZDg5ZDM0ZTdjN1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc0YzdkZTc4MDNkZjNjY2IwMWQ1NDZlYmNlOWU3MTM3OWIxYzQ5NzE5JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5kZXV0ZXJpdW1Cb29zdGVyX2dvbGRfOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV83ZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJEZXV0ZXJpdW0tQm9vc3RlciBQbGF0aW4gKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIyZDFkNDI0N2JhMTJhMzE4NWJmZDQyMzAyM2I3YjU1MWNmODQxYWMzXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzdhMTA5MjZmMDBhOTJiNTYzNzEzYWRlMTBmODk3NzdhOThlZmQ5NmMnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fN2RheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgUGxhdGluICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjgyNDVhOWQyMWZiMjcwODhiMjVkNDhhZTAyNGU5MzgyZmNlYTE0NDhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnZDliODZkMTU1YTQ1OWM2NThjYjdiZmNhNTk0Y2U0YjQ4ZTI0NTQ2YicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRGV1dGVyaXVtLUJvb3N0ZXIgUGxhdGluICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjU1YTg3N2U5MTcxNmRhNzM2Y2NlYzY2ODE3ZTYxMWE2MWM5YTFlNGFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNTU5NjZhMDkxMTIyMWFjZmM5YjdhODg3OTFhMjg0NmY2NTlhMWUyOScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfYnJvbnplXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyxcclxuICAgICAgICBpbWFnZTogJzJiZTY3MTc3MDAzZWYxZDZiMTkxOTVlMTAwZmIyMmQzYzJmZjU4OTEnLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIG5hbWU6ICdFbmVyZ2llLUJvb3N0ZXIgQnJvbnplICgzMCBUYWdlKScsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9icm9uemVfOTBkYXlzX3B0cyxcclxuICAgICAgICBpbWFnZTogJ2FiZjEyNjA4ZDA5YzU0MTk3OTYyMGUwMmE4MmJjZDc0MDQ1MWRkOGYnLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIG5hbWU6ICdFbmVyZ2llLUJvb3N0ZXIgQnJvbnplICg5MCBUYWdlKScsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzdkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBTaWxiZXIgKDcgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI3ODI3N2RhYmY0MjRjZmU2ZDkwMmZjYjY3YzEwZDdhODE2ODZhNTFmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzE2MmVkZDA2YzIwMGY4ZWI2NTVmMzFlNWM2Yjk4Yzg5ZmFiZDdmODInLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzdkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl8zMGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRW5lcmdpZS1Cb29zdGVyIFNpbGJlciAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCIwMDliYTA0NzI3MmFjZjczZGZhY2NhOTFkYmVmOGU5YzNiOGQ1YTI5XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzI0ZTdlOWRmMDMyMTg5OTZjMmJjOGZkNzYyOWJjZTdiYjczNWUwODMnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfc2lsdmVyXzMwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9zaWx2ZXJfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBTaWxiZXIgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMGI5ZTdiY2YxMzdhMTA2OTgyMzQ1ZTM3YTMzMTI3NDAwZTIwMWZmYVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICczZjFjMWM3YmVjOTk3NTQyZjcwNmFmYWI0ZTNlMzFlODk0NzM4NzVhJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3NpbHZlcl85MGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfZ29sZF83ZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgR29sZCAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjhjNTlkYzQwOTZkNGNiZGRmYzgzYTNhMjllZDZhNjRmYTQ2OTYzODhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYTFmZDMwZGM1ZTVhM2QwYzY4YmIwMTE2YTQ1ZTEzMDNhZThkM2Q3MCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgR29sZCAoMzAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCI3NmJjNTYzZjUyODEwOGM2ZDY1YjhmM2E3NTc4OWQ5MjllMmVhZTJiXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzA2N2Q1NTBiNjE1M2FiYzYzNWIzYzFkYzU0NTVjZTJiNzU5NTc3NTgnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX2dvbGRfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkVuZXJnaWUtQm9vc3RlciBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImU3MTUzZjVkZTJjODMzMjFjOTA4YzJjM2ZjYjc2ZmI4NzQ1NDdiNWRcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYWQ2N2U0ZTdjYzc1YzgwYTlkNGU0NDI0ZTJlNDQ4MDgzMTJkMWJiZicsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9nb2xkXzkwZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRW5lcmdpZS1Cb29zdGVyIFBsYXRpbiAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcImEwOWI0YzQ4MGI4YjY5NzFkNzNjYzZkNTEwMmU0YzJkMjE3ZjUxYWFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMjUzZTA2MTBjNTMzNzljZTFjOTk0MTBiMjNiZTJkNDllZTg2OWQ0NScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV83ZGF5cyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnBsYXRpbnVtLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5lbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgbmFtZTogXCJFbmVyZ2llLUJvb3N0ZXIgUGxhdGluICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGltYWdlOiBcIjlkMTNmOWNkNDgzZmUyMmUwMWYzM2FkYTc1MTE2NzdmYTg1NTZlNGVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnOWFjYWEyODk2ZjBlNjc1MGQxMjFkNGIyMjYzZGM3NzJkZDM2YWQ2MCcsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV8zMGRheXMsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiRW5lcmdpZS1Cb29zdGVyIFBsYXRpbiAoOTAgVGFnZSlcIixcclxuICAgICAgICBpbWFnZTogXCJiMTAxM2QwZTllZWEzNDQxOWQ0YjJhY2QwNWM0YWRjZDE1ODY4NDE3XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2JjZjc1NmZhYjM5Y2Q4M2M1OTc1YzlhYTdkZmJjMDg3ZWMwZGJiM2InLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmVuZXJneUJvb3N0ZXJfcGxhdGludW1fOTBkYXlzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfYWxsX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIktvbXBsZXR0ZXMgUmVzc291cmNlbnBha2V0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMTgxNDUxNDVhNzZiNzFmMTUxYmE5N2I3YzE3ODkxYTUzODljZWViNVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdiYWY4MzNiNTRiZGIzMTJkOTU1Y2JmMzIzZDgxMGJjNmIyNDU3OGQwJyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfYWxsLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX21ldGFsX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIk1ldGFsbHBha2V0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiMGJkNjdmMmVhMzFhMzg5YmZkMzM2MjliNGU2MTFlOTI2MTU5N2M4MVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc0MDc3YmUxYzA2MTM3MWIwMzE2MDRhMDIxMjYxMTk2NWMzNjNhMGIyJyxcclxuICAgICAgICBoYXNoOiBcIjg1OWQ4MmQxNmI4Mzg0OGY3MzY1ZDIxOTQ5YjNlMWU2M2M3ODQxZlwiIGFzIEl0ZW1IYXNoLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2NyeXN0YWxfcHRzXToge1xyXG4gICAgICAgIG5hbWU6IFwiS3Jpc3RhbGxwYWtldFwiLFxyXG4gICAgICAgIGltYWdlOiBcImM0OGM4Y2EyM2ZiMjJkODg2MDk2MjEwOTc5OWExZjJlMDI4NWE2NGVcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMGI0Mjg1MGVhMjAxNGI4YWNlOGRiNWI2OWJjZWUxNDc1YTg4MTI5MScsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gucmVzb3VyY2VQYWNrYWdlX2NyeXN0YWwsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfZGV1dGVyaXVtX3B0c106IHtcclxuICAgICAgICBuYW1lOiBcIkRldXRlcml1bXBha2V0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYzdlNzlkYjg2ZDk1ZDIyYjAzMzYyN2M3MDZjYjQ3ZDkzNDJmNWVjMVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdkNDk3MTYyMGQzYTI2MDVhZmFhYzAwNzM2NzkzZmQ5NDJjZDNhZDM1JyxcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5yZXNvdXJjZVBhY2thZ2VfZGV1dGVyaXVtLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgW0l0ZW1IYXNoLmRldHJvaWRfbWVjaGFTaGlweWFyZF9icm9uemVfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmRldHJvaWRfbWVjaGFTaGlweWFyZF9icm9uemVfcHRzLFxyXG4gICAgICAgIGltYWdlOiBcIjU2NzI0YzNhMWRjYWU4MDM2YmIxNzJmMGJlODMzYTZmOWEyOGJjMjdcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjEwYjg2N2E4ODQxZDRhNGM5NDlkOGE1OTcxOTI0MzU4MDQ1NjQ1MicsXHJcbiAgICAgICAgbmFtZTogJ0RFVFJPSUQgQnJvbnplIChNZWNoYS1TaGlweWFyZCknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fYnJvbnplX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9icm9uemVfcHRzLFxyXG4gICAgICAgIGltYWdlOiBcIjQ4MzRhZGJjYWI4NWY3NGFkMWEyMDMwZTNlY2NjODlmMzVjOWNmYmJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcImZlMzhjMGNlNzllZGNmMGZhNTNhOGE2YWViZDU4ZDVkMjdkMGUxZmRcIixcclxuICAgICAgICBuYW1lOiAnS1JBS0VOIEJyb256ZSAoTGlmZWZvcm0pJyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fc2lsdmVyX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9zaWx2ZXJfcHRzLFxyXG4gICAgICAgIGltYWdlOiBcIjI3ZjVkOGNlYWZjNTIwYmNjMGY3MDcxOTgxYWZmNjJhYWVmYTc5NmJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcImZiMDAxN2MyZjgxN2JjNGM5Yjk0MzM2YzJiMGQ4NDVlMDhmYmUwNmJcIixcclxuICAgICAgICBuYW1lOiAnS1JBS0VOIFNpbGJlciAoTGlmZWZvcm0pJyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fZ29sZF9wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubGlmZWZvcm1LcmFrZW5fZ29sZF9wdHMsXHJcbiAgICAgICAgaW1hZ2U6IFwiZDNlZDlkZmU5ODZlY2JhMTI5YjRhNDU4MGQxNzA5YWNiYzczMjEzOVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6IFwiYjc1NGZhZTk1MmJhNDRhNGVlMGFlYTEzZDJkNGJjOTljZDczYjA2OVwiLFxyXG4gICAgICAgIG5hbWU6ICdLUkFLRU4gR29sZCAoTGlmZWZvcm0pJyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmxpZmVmb3JtS3Jha2VuX3BsYXRpbnVtX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybUtyYWtlbl9wbGF0aW51bV9wdHMsXHJcbiAgICAgICAgaW1hZ2U6IFwiMjdmYzU3MDc4YTNkZjMyYmMzZGI0ZGIwNzZlNzA0MGQyMGQxZGNjM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6IFwiOTQ4NDliMmYxNDYxZDQxMDQyMDk2ZWI4YWQ1MzY4MjA3MzFhNGE1ZlwiLFxyXG4gICAgICAgIG5hbWU6ICdLUkFLRU4gUGxhdGluIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUucGxhdGludW0sXHJcbiAgICB9LFxyXG5cclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fYnJvbnplX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fYnJvbnplX3B0cyxcclxuICAgICAgICBpbWFnZTogXCJiZTU2YzNiMzYxODliMTY4MzBlMDdhNjI1ZjE4MmZlNGFiNzViODc4XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogXCIwMTRiN2IyMDFmMWZjODg5ZjZjNWRhMTc1N2E2MGUwYjc1OWM1ZWMxXCIsXHJcbiAgICAgICAgbmFtZTogJ05FV1RST04gQnJvbnplIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fc2lsdmVyX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fc2lsdmVyX3B0cyxcclxuICAgICAgICBpbWFnZTogXCJkN2ZmZTg3ODY5YmFmZDhlYzg0YzhkNTA3NzQ4NjFkN2M3MTY5ODViXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogXCIzMGMzMjE0NmE3OTI2ZDEwYjFiZTEyY2ZmNmYxOTc3MTgzNmQwZTQ2XCIsXHJcbiAgICAgICAgbmFtZTogJ05FV1RST04gU2lsYmVyIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fZ29sZF9wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX2dvbGRfcHRzLFxyXG4gICAgICAgIGltYWdlOiBcIjNmYmUwMjdlMDU3OWU5NGZlODhkODczODU3YTI4ZDIyZDZiMjQxMWJcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcIjVjZDFjNjk3OTI3MWRlZTc2YzFlYjA5NmE1ZWQ5NDBlMmMxZGE3MDVcIixcclxuICAgICAgICBuYW1lOiAnTkVXVFJPTiBHb2xkIChMaWZlZm9ybSknLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2gubGlmZWZvcm1OZXd0cm9uX3BsYXRpbnVtX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5saWZlZm9ybU5ld3Ryb25fcGxhdGludW1fcHRzLFxyXG4gICAgICAgIGltYWdlOiBcImM4YjU4M2ExOGM5OGE5MzA0MWNjYzgyMjY5YWY1ODg2ZTk3MjQwM2VcIixcclxuICAgICAgICBzbWFsbEltYWdlOiBcIjhiNjA0M2ExYzc5ZjM3OGI1Y2VmNjg0MzllNDBjMWJlMzg3YWRlNDJcIixcclxuICAgICAgICBuYW1lOiAnTkVXVFJPTiBQbGF0aW4gKExpZmVmb3JtKScsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5wbGF0aW51bSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiNDAyMjRkMWZiN2I3ZDdhMjQ0YjJmNDBkM2NmMjgxZGNmNDg0Y2ZkM1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcwYjhmYzI5YmUyMzUwNTEyMDhlYTMxMjQ4YTA4NjFiMmY4OWUzZjRmJyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBCcm9uemUgKDcgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV8zMGRheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiYTU5NjgyODU3YjdhNjMyYzRiZWYzMTlmMGVmNzlmMGMzYmRiYTVjOVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdhMjI5ZjIyMGViZmZjY2JiOTMyNTgxNzI2MWIzMmZjYmU1ZDM4ZTgwJyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBCcm9uemUgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19icm9uemVfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfYnJvbnplXzkwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJkY2QyMjI1MWI3OTljNzJhOThiZjRjNDI1MTY2MzM1MTY1Zjk1YTlmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzhkNzBhNzg1Y2QxMGE5ZWNjN2JhMjUyM2U0MzRhZDdlMmY0MjFkZDQnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIEJyb256ZSAoOTAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl83ZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl83ZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJkYmFhMTM3MzY5YTIxMjM0NWYwYWIzM2UxOGY4YmIyMzM1ZjliZWRmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzdjZTg3YTVhMzg3NWE3ZGQ1ZTJhOThjZjUwNDdjZGJiOWIxZDZhNDEnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIFNpbGJlciAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl8zMGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiMmYzZWU3MzE4NDkwMjRiZmVmODVlYjhjNzM4OWJiNjVlOGY2YmU2MVwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc2ZDhkOGI3YTFiOTliYjE0ODY4NjQ2YWJmZThmYWIzOGQxMzQ1MWY1JyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBTaWxiZXIgKDMwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19zaWx2ZXJfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfc2lsdmVyXzkwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCI0ZDUxMjMyMDJjMDUxMDIwYTczNDFkMmVhMzU5OWI0ODY5OTQ1MzE5XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzVhZGZlZmI4MjIwYWIwMzAwN2EwYWRhOTdiNDkzYTg5YmE5N2ZhYWUnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIFNpbGJlciAoOTAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfN2RheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcImVhNGVjNzY2OTY5MmU1YjkxZGRlNThmYzVmYTYwNmI3ZTFmMjI1NzhcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnNjQxZjRiODNjOTFmNTFmN2JiM2I4ODRkODgzZTcwNzc2OTUzZmNlZicsXHJcbiAgICAgICAgbmFtZTogXCJFeHBlZGl0aW9uc2xvdHMgR29sZCAoNyBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfZ29sZF8zMGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiMWJhMGU4NDM2YWY1MThmMDAxNGFmMzUyYWY3ZDIwYzhkMTc0ZmI1M1wiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICdjZTQzYzQ4YjdlZjIwMDIzNmNlMjUxYThjODlmOTIxNDI2MmRlZWJlJyxcclxuICAgICAgICBuYW1lOiBcIkV4cGVkaXRpb25zbG90cyBHb2xkICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZXhwZWRpdGlvbnNsb3RzX2dvbGRfOTBkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5leHBlZGl0aW9uc2xvdHNfZ29sZF83ZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJhZWRlMjI4NTRkM2U4ZTQ2Y2I5M2RhZDcyNmFkMmI3ZWRmOWQyMzVmXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJ2RiMjg4MzUxMDEwNTI1NDdkYjc3NzI4NzY2Nzg1M2QwYTQ2NWIyMDcnLFxyXG4gICAgICAgIG5hbWU6IFwiRXhwZWRpdGlvbnNsb3RzIEdvbGQgKDkwIFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19icm9uemVfN2RheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcIjQ0NmQwZDAxNTAzZjhiODQ1YzNkMzMzMGM0ZGFiNjczMTY2NTcwZTFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnMGViMTFlYzFlOTU2YTU5OTFlYjRlYmEyYmNkZjNmNDA2MjM2MmRmMicsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgQnJvbnplICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5icm9uemUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZmxlZXRTbG90c19icm9uemVfMzBkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcIjhhYjZkOTIxMDY5ZjAxZDhjYjg0M2Y0YmMzN2Y1MWU1Y2YwYzQzMThcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYmVjODVjN2I0ODY4YmRkNWQ2MzRkNTBkZTE3ZDhjMTdkNTZkNDBiNScsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgQnJvbnplICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuYnJvbnplLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX2Jyb256ZV85MGRheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfYnJvbnplXzkwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJhNjFiYmZjNTdkNGI3MGFiZmYyMzY1MDA1YmJjYWY5MTg3OTZkNzg0XCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzZlNmM2MDYxMDA1Nzg2YzFjMmNjYzE2YmY3MjQ4ODEyN2FkZGRkYTgnLFxyXG4gICAgICAgIG5hbWU6IFwiRmxvdHRlbnNsb3RzIEJyb256ZSAoOTAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmJyb256ZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19zaWx2ZXJfN2RheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzdkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcImQzOGY0ZTgzZjkwNmFkNzQ3ZWMyNjAxZGE4MzZjMGIxMTcwM2UzYjNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnM2U1MDJjMGExZjA0NjJiZDdlOTU4OTI5NDkzNDAyOWY3ZjBhZjA5OScsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgU2lsYmVyICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5zaWx2ZXIsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzMwZGF5c19wdHNdOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2guZmxlZXRTbG90c19zaWx2ZXJfMzBkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcIjhhMTMzYjkzOGU1NzI4NWEzZGU4OTFkZDRiODJiNTk0ZDRlODA4YTNcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYmQ1NWEyZTA4ZDZjYzMyMDY0NmJiYWY0MjBkMDVjZGYyNDNkYjMxMicsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgU2lsYmVyICgzMCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuc2lsdmVyLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX3NpbHZlcl85MGRheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfc2lsdmVyXzkwZGF5cyxcclxuICAgICAgICBpbWFnZTogXCJmN2ZjNGU1NjY4NjlhODY2MWFjNWVmNGE3NWVmOWJkNWZhNTAyNGUxXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzQ4ZTlhNzgyYjM5MTk5ZDNiYjlmNjE0ZWJkNWQ0YTM4MDQ2NTYwNzknLFxyXG4gICAgICAgIG5hbWU6IFwiRmxvdHRlbnNsb3RzIFNpbGJlciAoOTAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLnNpbHZlcixcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guZmxlZXRTbG90c19nb2xkXzdkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfN2RheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiNGRiNTY2NTc1MGRmYjgzYmI5NTgyODBmZmQ1MDBjNzEwNTU3NDA2OFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5NDYxOWIyYzc0MWJkYzUwYzQ0MDE0N2VlZmZmZDc5YWM1MDg5YjBlJyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBHb2xkICg3IFRhZ2UpXCIsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5nb2xkLFxyXG4gICAgfSxcclxuICAgIFtJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfMzBkYXlzX3B0c106IHtcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5mbGVldFNsb3RzX2dvbGRfMzBkYXlzLFxyXG4gICAgICAgIGltYWdlOiBcIjJmYTIxNWY3ZmUyMjM3MGI5ZmQ4Mzc5NmRjNmJhYTE3YWVkM2Y3NWFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnYjExZmQxMzc0ZWI2Y2VhYzBhOWM3Nzg4YmIzZDNkMDNhZmIzNWExMicsXHJcbiAgICAgICAgbmFtZTogXCJGbG90dGVuc2xvdHMgR29sZCAoMzAgVGFnZSlcIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLmdvbGQsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF85MGRheXNfcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLmZsZWV0U2xvdHNfZ29sZF85MGRheXMsXHJcbiAgICAgICAgaW1hZ2U6IFwiZmExNzM5MWEyNzM4NDRlZThlNzFkNDYyNWNlNzM4MWI0NThjZjFhZFwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICc5ZTY1NGFlNDk2MDdjMGRkY2M4NzYzM2JmNzM3MmI5NzZmZDdlMTgzJyxcclxuICAgICAgICBuYW1lOiBcIkZsb3R0ZW5zbG90cyBHb2xkICg5MCBUYWdlKVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUuZ29sZCxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgW0l0ZW1IYXNoLm1pZ3JhdGlvbkl0ZW1dOiB7XHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gubWlncmF0aW9uSXRlbSxcclxuICAgICAgICBpbWFnZTogXCIxNmJmMmM2MmRlMzhkYWFmMTI4ZmQxMzI5ZWZlOTc2Yjk3ODhjMDExXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICAgICAgbmFtZTogXCJNaWdyYXRpb25zLUl0ZW1cIixcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm1pZ3JhdGlvbkl0ZW1fcHRzXToge1xyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm1pZ3JhdGlvbkl0ZW1fcHRzLFxyXG4gICAgICAgIGltYWdlOiBcIjE2YmYyYzYyZGUzOGRhYWYxMjhmZDEzMjllZmU5NzZiOTc4OGMwMTFcIixcclxuICAgICAgICBzbWFsbEltYWdlOiAnJyxcclxuICAgICAgICBuYW1lOiBcIk1pZ3JhdGlvbnMtSXRlbVwiLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcblxyXG4gICAgW0l0ZW1IYXNoLnNob3J0ZW5UaW1lX2J1aWxkaW5nc106IHtcclxuICAgICAgICBuYW1lOiBcIkJhdXZlcmvDvHJ6ZXIgR2Viw6R1ZGVcIixcclxuICAgICAgICBpbWFnZTogXCIyMmJiYTFmM2NlYWI4M2RjMjRlYjk0NGQ0ZjJhYTgyMDczOTBhYjdjXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzIyYmJhMWYzY2VhYjgzZGMyNGViOTQ0ZDRmMmFhODIwNzM5MGFiN2MnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnNob3J0ZW5UaW1lX2J1aWxkaW5ncyxcclxuICAgICAgICBncmFkZTogSXRlbUdyYWRlLm5vbmUsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLnNob3J0ZW5UaW1lX3Jlc2VhcmNoXToge1xyXG4gICAgICAgIG5hbWU6IFwiQmF1dmVya8O8cnplciBGb3JzY2h1bmdcIixcclxuICAgICAgICBpbWFnZTogXCI5NTljZTQ4NWM0MWI4NzEzZmI5YzI4MWZjZDVkNzM3MzMxZTAzNDFjXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzk1OWNlNDg1YzQxYjg3MTNmYjljMjgxZmNkNWQ3MzczMzFlMDM0MWMnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnNob3J0ZW5UaW1lX3Jlc2VhcmNoLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guc2hvcnRlblRpbWVfc2hpcHlhcmRdOiB7XHJcbiAgICAgICAgbmFtZTogXCJCYXV2ZXJrw7xyemVyIFNjaGlmZmVcIixcclxuICAgICAgICBpbWFnZTogXCI1NmQ3NjI2M2I4N2I1NjcxNjIxNGM5MTM0ODYwMjkwOGIxZjQ2ZmJkXCIsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJzU2ZDc2MjYzYjg3YjU2NzE2MjE0YzkxMzQ4NjAyOTA4YjFmNDZmYmQnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnNob3J0ZW5UaW1lX3NoaXB5YXJkLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guc2hvcnRlblRpbWVfbGlmZWZvcm1CdWlsZGluZ3NdOiB7XHJcbiAgICAgICAgbmFtZTogXCJCYXV2ZXJrw7xyemVyIExlYmVuc2Zvcm1nZWLDpHVkZVwiLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnNob3J0ZW5UaW1lX2xpZmVmb3JtQnVpbGRpbmdzLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgIH0sXHJcbiAgICBbSXRlbUhhc2guc2hvcnRlblRpbWVfbGlmZWZvcm1SZXNlYXJjaF06IHtcclxuICAgICAgICBuYW1lOiBcIkJhdXZlcmvDvHJ6ZXIgTGViZW5zZm9ybWZvcnNjaHVuZ1wiLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIHNtYWxsSW1hZ2U6ICcnLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLnNob3J0ZW5UaW1lX2xpZmVmb3JtUmVzZWFyY2gsXHJcbiAgICAgICAgZ3JhZGU6IEl0ZW1HcmFkZS5ub25lLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgW0l0ZW1IYXNoLm9mZmljZXJfY29tbWFuZGVyXToge1xyXG4gICAgICAgIG5hbWU6IEl0ZW1IYXNoLm9mZmljZXJfY29tbWFuZGVyLFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm9mZmljZXJfY29tbWFuZGVyLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm9mZmljZXJfYWRtaXJhbF06IHtcclxuICAgICAgICBuYW1lOiBJdGVtSGFzaC5vZmZpY2VyX2FkbWlyYWwsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gub2ZmaWNlcl9hZG1pcmFsLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm9mZmljZXJfZW5naW5lZXJdOiB7XHJcbiAgICAgICAgbmFtZTogSXRlbUhhc2gub2ZmaWNlcl9lbmdpbmVlcixcclxuICAgICAgICBoYXNoOiBJdGVtSGFzaC5vZmZpY2VyX2VuZ2luZWVyLFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm9mZmljZXJfZ2VvbG9naXN0XToge1xyXG4gICAgICAgIG5hbWU6IEl0ZW1IYXNoLm9mZmljZXJfZ2VvbG9naXN0LFxyXG4gICAgICAgIGhhc2g6IEl0ZW1IYXNoLm9mZmljZXJfZ2VvbG9naXN0LFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICB9LFxyXG4gICAgW0l0ZW1IYXNoLm9mZmljZXJfdGVjaG5vY3JhdF06IHtcclxuICAgICAgICBuYW1lOiBJdGVtSGFzaC5vZmZpY2VyX3RlY2hub2NyYXQsXHJcbiAgICAgICAgaGFzaDogSXRlbUhhc2gub2ZmaWNlcl90ZWNobm9jcmF0LFxyXG4gICAgICAgIGdyYWRlOiBJdGVtR3JhZGUubm9uZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgc21hbGxJbWFnZTogJycsXHJcbiAgICB9LFxyXG59OyIsImV4cG9ydCBpbnRlcmZhY2UgQ29zdCB7XHJcbiAgICBtZXRhbDogbnVtYmVyO1xyXG4gICAgY3J5c3RhbDogbnVtYmVyO1xyXG4gICAgZGV1dGVyaXVtOiBudW1iZXI7XHJcbiAgICBlbmVyZ3k6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvc3QoLi4uY29zdHM6IENvc3RbXSk6IENvc3Qge1xyXG4gICAgY29uc3QgcmVzdWx0OiBDb3N0ID0ge1xyXG4gICAgICAgIG1ldGFsOiAwLFxyXG4gICAgICAgIGNyeXN0YWw6IDAsXHJcbiAgICAgICAgZGV1dGVyaXVtOiAwLFxyXG4gICAgICAgIGVuZXJneTogMCxcclxuICAgIH07XHJcbiAgICBjb3N0cy5mb3JFYWNoKGNvc3QgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5tZXRhbCArPSBjb3N0Lm1ldGFsO1xyXG4gICAgICAgIHJlc3VsdC5jcnlzdGFsICs9IGNvc3QuY3J5c3RhbDtcclxuICAgICAgICByZXN1bHQuZGV1dGVyaXVtICs9IGNvc3QuZGV1dGVyaXVtO1xyXG4gICAgICAgIHJlc3VsdC5lbmVyZ3kgKz0gY29zdC5lbmVyZ3k7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ViQ29zdChhOiBDb3N0LCBiOiBDb3N0KTogQ29zdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1ldGFsOiBhLm1ldGFsIC0gYi5tZXRhbCxcclxuICAgICAgICBjcnlzdGFsOiBhLmNyeXN0YWwgLSBiLmNyeXN0YWwsXHJcbiAgICAgICAgZGV1dGVyaXVtOiBhLmRldXRlcml1bSAtIGIuZGV1dGVyaXVtLFxyXG4gICAgICAgIGVuZXJneTogYS5lbmVyZ3kgLSBiLmVuZXJneSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseUNvc3QoY29zdDogQ29zdCwgZmFjdG9yOiBudW1iZXIpOiBDb3N0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWV0YWw6IGNvc3QubWV0YWwgKiBmYWN0b3IsXHJcbiAgICAgICAgY3J5c3RhbDogY29zdC5jcnlzdGFsICogZmFjdG9yLFxyXG4gICAgICAgIGRldXRlcml1bTogY29zdC5kZXV0ZXJpdW0gKiBmYWN0b3IsXHJcbiAgICAgICAgZW5lcmd5OiBjb3N0LmVuZXJneSAqIGZhY3RvcixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Q29zdEludChjb3N0OiBDb3N0LCBmYWN0b3I6IG51bWJlcik6IENvc3Qge1xyXG4gICAgY29uc3QgbmV3Q29zdCA9IG11bHRpcGx5Q29zdChjb3N0LCBmYWN0b3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZXRhbDogTWF0aC5yb3VuZChuZXdDb3N0Lm1ldGFsKSxcclxuICAgICAgICBjcnlzdGFsOiBNYXRoLnJvdW5kKG5ld0Nvc3QuY3J5c3RhbCksXHJcbiAgICAgICAgZGV1dGVyaXVtOiBNYXRoLnJvdW5kKG5ld0Nvc3QuZGV1dGVyaXVtKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGgucm91bmQobmV3Q29zdC5lbmVyZ3kpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Q29zdENvbXBvbmVudFdpc2UoY29zdDogQ29zdCwgZmFjdG9yczogQ29zdCk6IENvc3Qge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZXRhbDogY29zdC5tZXRhbCAqIGZhY3RvcnMubWV0YWwsXHJcbiAgICAgICAgY3J5c3RhbDogY29zdC5jcnlzdGFsICogZmFjdG9ycy5jcnlzdGFsLFxyXG4gICAgICAgIGRldXRlcml1bTogY29zdC5kZXV0ZXJpdW0gKiBmYWN0b3JzLmRldXRlcml1bSxcclxuICAgICAgICBlbmVyZ3k6IGNvc3QuZW5lcmd5ICogZmFjdG9ycy5lbmVyZ3ksXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gJy4uL2NvbW1vbi9Db3N0JztcclxuaW1wb3J0IHsgU2hpcFR5cGUgfSBmcm9tICcuL1NoaXBUeXBlJztcclxuXHJcbi8vUkVGQUNUT1I6IG1ldGhvZHMgdG8gZ2V0dGVyc1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hpcCB7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IHR5cGUoKTogU2hpcFR5cGU7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGNvc3QoKTogQ29zdDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBiYXNlSHVsbCgpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYmFzZVNoaWVsZCgpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYmFzZURhbWFnZSgpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYmFzZVNwZWVkKCk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlcjtcclxuICAgIC8vVE9ETzogUmFwaWRmaXJlXHJcbiAgICAvL1RPRE86IHR5cGUgb2YgZHJpdmUgZGVwZW5kaW5nIG9uIGRyaXZlIHJlc2VhcmNoIGxldmVsc1xyXG59IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBCYXR0bGVjcnVpc2VyQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5iYXR0bGVjcnVpc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogMzBfMDAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiA0MF8wMDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogMTVfMDAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDcwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNoaWVsZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDEwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNzUwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdWVsQ29uc3VtcHRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMjUwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmF0dGxlY3J1aXNlciA9IG5ldyBCYXR0bGVjcnVpc2VyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIEJhdHRsZXNoaXBDbGFzcyBleHRlbmRzIFNoaXAge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIFNoaXBUeXBlLmJhdHRsZXNoaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb3N0KCk6IENvc3Qge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFsOiA0NV8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDE1XzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDYwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNoaWVsZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMV8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMTBfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxXzUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJhdHRsZXNoaXAgPSBuZXcgQmF0dGxlc2hpcENsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBCb21iZXJDbGFzcyBleHRlbmRzIFNoaXAge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIFNoaXBUeXBlLmJvbWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvc3QoKTogQ29zdCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWV0YWw6IDUwXzAwMCxcclxuICAgICAgICAgICAgY3J5c3RhbDogMjVfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDE1XzAwMCxcclxuICAgICAgICAgICAgZW5lcmd5OiAwLCAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VIdWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiA3NV8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDFfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDVfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1ZWxDb25zdW1wdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCb21iZXIgPSBuZXcgQm9tYmVyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIENvbG9ueVNoaXBDbGFzcyBleHRlbmRzIFNoaXAge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIFNoaXBUeXBlLmNvbG9ueVNoaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb3N0KCk6IENvc3Qge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFsOiAxMF8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDIwXzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiAxMF8wMDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMzBfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZURhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1MDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAyXzUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gN181MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1ZWxDb25zdW1wdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxXzAwMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9ueVNoaXAgPSBuZXcgQ29sb255U2hpcENsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBDcmF3bGVyQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5jcmF3bGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogMl8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDJfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDFfMDAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDRfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdWVsQ29uc3VtcHRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyYXdsZXIgPSBuZXcgQ3Jhd2xlckNsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBDcnVpc2VyQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5jcnVpc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogMjBfMDAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiA3XzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiAyXzAwMCxcclxuICAgICAgICAgICAgZW5lcmd5OiAwLCAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VIdWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAyN18wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDE1XzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gODAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdWVsQ29uc3VtcHRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3J1aXNlciA9IG5ldyBDcnVpc2VyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIERlYXRoU3RhckNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUuZGVhdGhTdGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogNV8wMDBfMDAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiA0XzAwMF8wMDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogMV8wMDBfMDAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDlfMDAwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNoaWVsZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1MF8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMjAwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDFfMDAwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWF0aFN0YXIgPSBuZXcgRGVhdGhTdGFyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIERlc3Ryb3llckNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUuZGVzdHJveWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogNjBfMDAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiA1MF8wMDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogMTVfMDAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDExMF8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDJfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDVfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDFfMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVzdHJveWVyID0gbmV3IERlc3Ryb3llckNsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBFc3Bpb25hZ2VQcm9iZUNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUuZXNwaW9uYWdlUHJvYmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb3N0KCk6IENvc3Qge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFsOiAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiAxXzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiAwLFxyXG4gICAgICAgICAgICBlbmVyZ3k6IDAsICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUh1bGwoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDFfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAxMDBfMDAwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDsgLy9UT0RPOiBkZXBlbmRzIG9uIHNlcnZlciBzZXR0aW5nc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdWVsQ29uc3VtcHRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVzcGlvbmFnZVByb2JlID0gbmV3IEVzcGlvbmFnZVByb2JlQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIEhlYXZ5RmlnaHRlckNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUuaGVhdnlGaWdodGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogNl8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDRfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMTBfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDI1O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE1MDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAxMF8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDc1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGVhdnlGaWdodGVyID0gbmV3IEhlYXZ5RmlnaHRlckNsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBMYXJnZUNhcmdvQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5sYXJnZUNhcmdvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogNl8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDZfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMTJfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDI1O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gN181MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDI1XzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDUwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGFyZ2VDYXJnbyA9IG5ldyBMYXJnZUNhcmdvQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIExpZ2h0RmlnaHRlckNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUubGlnaHRGaWdodGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogM18wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDFfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gNF8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VEYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMTJfNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlQ2FyZ29DYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1MDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDIwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlnaHRGaWdodGVyID0gbmV3IExpZ2h0RmlnaHRlckNsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBQYXRoZmluZGVyQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5wYXRoZmluZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29zdCgpOiBDb3N0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRhbDogOF8wMDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IDE1XzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiA4XzAwMCxcclxuICAgICAgICAgICAgZW5lcmd5OiAwLCAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VIdWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAyM18wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAxMl8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhmaW5kZXIgPSBuZXcgUGF0aGZpbmRlckNsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBSZWFwZXJDbGFzcyBleHRlbmRzIFNoaXAge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIFNoaXBUeXBlLnJlYXBlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvc3QoKTogQ29zdCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWV0YWw6IDg1XzAwMCxcclxuICAgICAgICAgICAgY3J5c3RhbDogNTVfMDAwLFxyXG4gICAgICAgICAgICBkZXV0ZXJpdW06IDIwXzAwMCxcclxuICAgICAgICAgICAgZW5lcmd5OiAwLCAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VIdWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiAxNDBfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZURhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyXzgwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiA3XzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTBfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdWVsQ29uc3VtcHRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMV8xMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWFwZXIgPSBuZXcgUmVhcGVyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIFJlY3ljbGVyQ2xhc3MgZXh0ZW5kcyBTaGlwIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7IFxyXG4gICAgICAgIHJldHVybiBTaGlwVHlwZS5yZWN5Y2xlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvc3QoKTogQ29zdCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWV0YWw6IDEwXzAwMCxcclxuICAgICAgICAgICAgY3J5c3RhbDogNl8wMDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogMl8wMDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMTZfMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU2hpZWxkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlRGFtYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gNl8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDIwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnVlbENvbnN1bXB0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY3ljbGVyID0gbmV3IFJlY3ljbGVyQ2xhc3MoKTsiLCJpbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4uL2NvbW1vbi9Db3N0XCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCB7IFNoaXBUeXBlIH0gZnJvbSBcIi4vU2hpcFR5cGVcIjtcclxuXHJcbmNsYXNzIFNtYWxsQ2FyZ29DbGFzcyBleHRlbmRzIFNoaXAge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIFNoaXBUeXBlLnNtYWxsQ2FyZ287XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb3N0KCk6IENvc3Qge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFsOiAyXzAwMCxcclxuICAgICAgICAgICAgY3J5c3RhbDogMl8wMDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogMCxcclxuICAgICAgICAgICAgZW5lcmd5OiAwLCAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VIdWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgIHJldHVybiA0XzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZVNoaWVsZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZURhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDEwXzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZUNhcmdvQ2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNV8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1ZWxDb25zdW1wdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNtYWxsQ2FyZ28gPSBuZXcgU21hbGxDYXJnb0NsYXNzKCk7IiwiaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuLi9jb21tb24vQ29zdFwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCIuL1NoaXBUeXBlXCI7XHJcblxyXG5jbGFzcyBTb2xhclNhdGVsbGl0ZUNsYXNzIGV4dGVuZHMgU2hpcCB7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkgeyBcclxuICAgICAgICByZXR1cm4gU2hpcFR5cGUuc29sYXJTYXRlbGxpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb3N0KCk6IENvc3Qge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFsOiAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiAyXzAwMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiA1MDAsXHJcbiAgICAgICAgICAgIGVuZXJneTogMCwgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlSHVsbCgpOiBudW1iZXIge1xyXG4gICAgICAgICByZXR1cm4gMl8wMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VTaGllbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFzZURhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYXNlU3BlZWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhc2VDYXJnb0NhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1ZWxDb25zdW1wdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU29sYXJTYXRlbGxpdGUgPSBuZXcgU29sYXJTYXRlbGxpdGVDbGFzcygpOyIsImltcG9ydCB7IEJhdHRsZWNydWlzZXIgfSBmcm9tIFwiLi9CYXR0bGVjcnVpc2VyXCI7XHJcbmltcG9ydCB7IEJhdHRsZXNoaXAgfSBmcm9tIFwiLi9CYXR0bGVzaGlwXCI7XHJcbmltcG9ydCB7IEJvbWJlciB9IGZyb20gXCIuL0JvbWJlclwiO1xyXG5pbXBvcnQgeyBDb2xvbnlTaGlwIH0gZnJvbSBcIi4vQ29sb255U2hpcFwiO1xyXG5pbXBvcnQgeyBDcmF3bGVyIH0gZnJvbSBcIi4vQ3Jhd2xlclwiO1xyXG5pbXBvcnQgeyBDcnVpc2VyIH0gZnJvbSBcIi4vQ3J1aXNlclwiO1xyXG5pbXBvcnQgeyBEZWF0aFN0YXIgfSBmcm9tIFwiLi9EZWF0aFN0YXJcIjtcclxuaW1wb3J0IHsgRGVzdHJveWVyIH0gZnJvbSBcIi4vRGVzdHJveWVyXCI7XHJcbmltcG9ydCB7IEVzcGlvbmFnZVByb2JlIH0gZnJvbSBcIi4vRXNwaW9uYWdlUHJvYmVcIjtcclxuaW1wb3J0IHsgSGVhdnlGaWdodGVyIH0gZnJvbSBcIi4vSGVhdnlGaWdodGVyXCI7XHJcbmltcG9ydCB7IExhcmdlQ2FyZ28gfSBmcm9tIFwiLi9MYXJnZUNhcmdvXCI7XHJcbmltcG9ydCB7IExpZ2h0RmlnaHRlciB9IGZyb20gXCIuL0xpZ2h0RmlnaHRlclwiO1xyXG5pbXBvcnQgeyBQYXRoZmluZGVyIH0gZnJvbSBcIi4vUGF0aGZpbmRlclwiO1xyXG5pbXBvcnQgeyBSZWFwZXIgfSBmcm9tIFwiLi9SZWFwZXJcIjtcclxuaW1wb3J0IHsgUmVjeWNsZXIgfSBmcm9tIFwiLi9SZWN5Y2xlclwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgeyBDaXZpbFNoaXBUeXBlLCBNaWxpdGFyeVNoaXBUeXBlLCBNb29uU2hpcFR5cGUsIE5vblN0YXRpb25hcnlTaGlwVHlwZSwgUGxhbmV0U2hpcFR5cGUsIFNoaXBUeXBlLCBTdGF0aW9uYXJ5U2hpcFR5cGUgfSBmcm9tIFwiLi9TaGlwVHlwZVwiO1xyXG5pbXBvcnQgeyBTbWFsbENhcmdvIH0gZnJvbSBcIi4vU21hbGxDYXJnb1wiO1xyXG5pbXBvcnQgeyBTb2xhclNhdGVsbGl0ZSB9IGZyb20gXCIuL1NvbGFyU2F0ZWxsaXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2hpcFR5cGVzOiBTaGlwVHlwZVtdID0gW1xyXG4gICAgU2hpcFR5cGUuc21hbGxDYXJnbyxcclxuICAgIFNoaXBUeXBlLmxhcmdlQ2FyZ28sXHJcbiAgICBTaGlwVHlwZS5saWdodEZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5oZWF2eUZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5jcnVpc2VyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlc2hpcCxcclxuICAgIFNoaXBUeXBlLmNvbG9ueVNoaXAsXHJcbiAgICBTaGlwVHlwZS5yZWN5Y2xlcixcclxuICAgIFNoaXBUeXBlLmVzcGlvbmFnZVByb2JlLFxyXG4gICAgU2hpcFR5cGUuYm9tYmVyLFxyXG4gICAgU2hpcFR5cGUuc29sYXJTYXRlbGxpdGUsXHJcbiAgICBTaGlwVHlwZS5kZXN0cm95ZXIsXHJcbiAgICBTaGlwVHlwZS5kZWF0aFN0YXIsXHJcbiAgICBTaGlwVHlwZS5iYXR0bGVjcnVpc2VyLFxyXG4gICAgU2hpcFR5cGUuY3Jhd2xlcixcclxuICAgIFNoaXBUeXBlLnJlYXBlcixcclxuICAgIFNoaXBUeXBlLnBhdGhmaW5kZXIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCBTdGF0aW9uYXJ5U2hpcFR5cGVzOiBTdGF0aW9uYXJ5U2hpcFR5cGVbXSA9IFtcclxuICAgIFNoaXBUeXBlLnNvbGFyU2F0ZWxsaXRlLFxyXG4gICAgU2hpcFR5cGUuY3Jhd2xlcixcclxuXTtcclxuZXhwb3J0IGNvbnN0IE5vblN0YXRpb25hcnlTaGlwVHlwZXM6IE5vblN0YXRpb25hcnlTaGlwVHlwZVtdID0gW1xyXG4gICAgU2hpcFR5cGUuc21hbGxDYXJnbyxcclxuICAgIFNoaXBUeXBlLmxhcmdlQ2FyZ28sXHJcbiAgICBTaGlwVHlwZS5saWdodEZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5oZWF2eUZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5jcnVpc2VyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlc2hpcCxcclxuICAgIFNoaXBUeXBlLmNvbG9ueVNoaXAsXHJcbiAgICBTaGlwVHlwZS5yZWN5Y2xlcixcclxuICAgIFNoaXBUeXBlLmVzcGlvbmFnZVByb2JlLFxyXG4gICAgU2hpcFR5cGUuYm9tYmVyLFxyXG4gICAgU2hpcFR5cGUuZGVzdHJveWVyLFxyXG4gICAgU2hpcFR5cGUuZGVhdGhTdGFyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlY3J1aXNlcixcclxuICAgIFNoaXBUeXBlLnJlYXBlcixcclxuICAgIFNoaXBUeXBlLnBhdGhmaW5kZXIsXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYW5ldFNoaXBUeXBlczogUGxhbmV0U2hpcFR5cGVbXSA9IFtcclxuICAgIFNoaXBUeXBlLnNtYWxsQ2FyZ28sXHJcbiAgICBTaGlwVHlwZS5sYXJnZUNhcmdvLFxyXG4gICAgU2hpcFR5cGUubGlnaHRGaWdodGVyLFxyXG4gICAgU2hpcFR5cGUuaGVhdnlGaWdodGVyLFxyXG4gICAgU2hpcFR5cGUuY3J1aXNlcixcclxuICAgIFNoaXBUeXBlLmJhdHRsZXNoaXAsXHJcbiAgICBTaGlwVHlwZS5jb2xvbnlTaGlwLFxyXG4gICAgU2hpcFR5cGUucmVjeWNsZXIsXHJcbiAgICBTaGlwVHlwZS5lc3Bpb25hZ2VQcm9iZSxcclxuICAgIFNoaXBUeXBlLmJvbWJlcixcclxuICAgIFNoaXBUeXBlLnNvbGFyU2F0ZWxsaXRlLFxyXG4gICAgU2hpcFR5cGUuZGVzdHJveWVyLFxyXG4gICAgU2hpcFR5cGUuZGVhdGhTdGFyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlY3J1aXNlcixcclxuICAgIFNoaXBUeXBlLmNyYXdsZXIsXHJcbiAgICBTaGlwVHlwZS5yZWFwZXIsXHJcbiAgICBTaGlwVHlwZS5wYXRoZmluZGVyLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgTW9vblNoaXBUeXBlczogTW9vblNoaXBUeXBlW10gPSBbXHJcbiAgICBTaGlwVHlwZS5zbWFsbENhcmdvLFxyXG4gICAgU2hpcFR5cGUubGFyZ2VDYXJnbyxcclxuICAgIFNoaXBUeXBlLmxpZ2h0RmlnaHRlcixcclxuICAgIFNoaXBUeXBlLmhlYXZ5RmlnaHRlcixcclxuICAgIFNoaXBUeXBlLmNydWlzZXIsXHJcbiAgICBTaGlwVHlwZS5iYXR0bGVzaGlwLFxyXG4gICAgU2hpcFR5cGUuY29sb255U2hpcCxcclxuICAgIFNoaXBUeXBlLnJlY3ljbGVyLFxyXG4gICAgU2hpcFR5cGUuZXNwaW9uYWdlUHJvYmUsXHJcbiAgICBTaGlwVHlwZS5ib21iZXIsXHJcbiAgICBTaGlwVHlwZS5zb2xhclNhdGVsbGl0ZSxcclxuICAgIFNoaXBUeXBlLmRlc3Ryb3llcixcclxuICAgIFNoaXBUeXBlLmRlYXRoU3RhcixcclxuICAgIFNoaXBUeXBlLmJhdHRsZWNydWlzZXIsXHJcbiAgICBTaGlwVHlwZS5yZWFwZXIsXHJcbiAgICBTaGlwVHlwZS5wYXRoZmluZGVyLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1pbGl0YXJ5U2hpcFR5cGVzOiBNaWxpdGFyeVNoaXBUeXBlW10gPSBbXHJcbiAgICBTaGlwVHlwZS5saWdodEZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5oZWF2eUZpZ2h0ZXIsXHJcbiAgICBTaGlwVHlwZS5jcnVpc2VyLFxyXG4gICAgU2hpcFR5cGUuYmF0dGxlc2hpcCxcclxuICAgIFNoaXBUeXBlLmJhdHRsZWNydWlzZXIsXHJcbiAgICBTaGlwVHlwZS5ib21iZXIsXHJcbiAgICBTaGlwVHlwZS5kZXN0cm95ZXIsXHJcbiAgICBTaGlwVHlwZS5kZWF0aFN0YXIsXHJcbiAgICBTaGlwVHlwZS5yZWFwZXIsXHJcbiAgICBTaGlwVHlwZS5wYXRoZmluZGVyLFxyXG4gICAgU2hpcFR5cGUuY3Jhd2xlcixcclxuXTtcclxuZXhwb3J0IGNvbnN0IENpdmlsU2hpcFR5cGVzOiBDaXZpbFNoaXBUeXBlW10gPSBbXHJcbiAgICBTaGlwVHlwZS5zbWFsbENhcmdvLFxyXG4gICAgU2hpcFR5cGUubGFyZ2VDYXJnbyxcclxuICAgIFNoaXBUeXBlLmNvbG9ueVNoaXAsXHJcbiAgICBTaGlwVHlwZS5yZWN5Y2xlcixcclxuICAgIFNoaXBUeXBlLmVzcGlvbmFnZVByb2JlLFxyXG4gICAgU2hpcFR5cGUuc29sYXJTYXRlbGxpdGUsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU2hpcEJ5VHlwZXM6IFJlY29yZDxTaGlwVHlwZSwgU2hpcD4gPSB7XHJcbiAgICBbU2hpcFR5cGUuc21hbGxDYXJnb106IFNtYWxsQ2FyZ28sXHJcbiAgICBbU2hpcFR5cGUubGFyZ2VDYXJnb106IExhcmdlQ2FyZ28sXHJcbiAgICBbU2hpcFR5cGUubGlnaHRGaWdodGVyXTogTGlnaHRGaWdodGVyLFxyXG4gICAgW1NoaXBUeXBlLmhlYXZ5RmlnaHRlcl06IEhlYXZ5RmlnaHRlcixcclxuICAgIFtTaGlwVHlwZS5jcnVpc2VyXTogQ3J1aXNlcixcclxuICAgIFtTaGlwVHlwZS5iYXR0bGVzaGlwXTogQmF0dGxlc2hpcCxcclxuICAgIFtTaGlwVHlwZS5jb2xvbnlTaGlwXTogQ29sb255U2hpcCxcclxuICAgIFtTaGlwVHlwZS5yZWN5Y2xlcl06IFJlY3ljbGVyLFxyXG4gICAgW1NoaXBUeXBlLmVzcGlvbmFnZVByb2JlXTogRXNwaW9uYWdlUHJvYmUsXHJcbiAgICBbU2hpcFR5cGUuYm9tYmVyXTogQm9tYmVyLFxyXG4gICAgW1NoaXBUeXBlLnNvbGFyU2F0ZWxsaXRlXTogU29sYXJTYXRlbGxpdGUsXHJcbiAgICBbU2hpcFR5cGUuZGVzdHJveWVyXTogRGVzdHJveWVyLFxyXG4gICAgW1NoaXBUeXBlLmRlYXRoU3Rhcl06IERlYXRoU3RhcixcclxuICAgIFtTaGlwVHlwZS5iYXR0bGVjcnVpc2VyXTogQmF0dGxlY3J1aXNlcixcclxuICAgIFtTaGlwVHlwZS5jcmF3bGVyXTogQ3Jhd2xlcixcclxuICAgIFtTaGlwVHlwZS5yZWFwZXJdOiBSZWFwZXIsXHJcbiAgICBbU2hpcFR5cGUucGF0aGZpbmRlcl06IFBhdGhmaW5kZXIsXHJcbn07IiwiZXhwb3J0IGVudW0gRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsIHtcclxuICAgIG5vbmUgPSAnbm9uZScsXHJcbiAgICBsb3cgPSAnbG93JyxcclxuICAgIG1lZGl1bSA9ICdtZWRpdW0nLFxyXG4gICAgaGlnaCA9ICdoaWdoJyxcclxufVxyXG5leHBvcnQgY29uc3QgRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsczogRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsW10gPSBbXHJcbiAgICBFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwubm9uZSxcclxuICAgIEV4cGVkaXRpb25EZXBsZXRpb25MZXZlbC5sb3csXHJcbiAgICBFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwubWVkaXVtLFxyXG4gICAgRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsLmhpZ2gsXHJcbl07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlY29yZDxUS2V5IGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sLCBUVmFsdWU+KFxyXG4gICAga2V5czogVEtleVtdLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBUVmFsdWUgfCAoKGtleTogVEtleSkgPT4gVFZhbHVlKVxyXG4pOiBSZWNvcmQ8VEtleSwgVFZhbHVlPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fSBhcyBSZWNvcmQ8VEtleSwgVFZhbHVlPjtcclxuICAgIGtleXMuZm9yRWFjaChrZXkgPT5cclxuICAgICAgICByZXN1bHRba2V5XSA9IGRlZmF1bHRWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlKGtleSlcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcHBlZFJlY29yZDxULCBUS2V5IGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sLCBUVmFsdWU+KFxyXG4gICAgaW5wdXQ6IFRbXSxcclxuICAgIG1hcEtleXM6ICh2YWx1ZTogVCkgPT4gVEtleSxcclxuICAgIGRlZmF1bHRWYWx1ZTogVFZhbHVlIHwgKCh2YWx1ZTogVCkgPT4gVFZhbHVlKVxyXG4pOiBSZWNvcmQ8VEtleSwgVFZhbHVlPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fSBhcyBSZWNvcmQ8VEtleSwgVFZhbHVlPjtcclxuICAgIGlucHV0LmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbWFwS2V5cyhpKTtcclxuXHJcbiAgICAgICAgcmVzdWx0W2tleV0gPSBkZWZhdWx0VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvblxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZShpKVxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VUeXBlXCI7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25NZXNzYWdlLCBUcmFja0V4cGVkaXRpb25NZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlcy90cmFja2luZy9leHBlZGl0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRPZ2FtZU1ldGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9nZXRPZ2FtZU1ldGFcIjtcclxuaW1wb3J0IHsgX2xvZywgX2xvZ0RlYnVnLCBfbG9nV2FybmluZywgX2xvZ0Vycm9yIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9fbG9nXCI7XHJcbmltcG9ydCB7IF90aHJvdyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX3Rocm93XCI7XHJcbmltcG9ydCB7IGdldE1lc3NhZ2VBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9nZXRNZXNzYWdlQXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50LCBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBFeHBlZGl0aW9uRXZlbnQsIEV4cGVkaXRpb25FdmVudENvbWJhdFNpemUsIEV4cGVkaXRpb25GaW5kYWJsZVNoaXBUeXBlLCBFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9leHBlZGl0aW9ucy9FeHBlZGl0aW9uRXZlbnRzXCI7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25FdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9leHBlZGl0aW9ucy9FeHBlZGl0aW9uRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25FdmVudFNpemUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9leHBlZGl0aW9ucy9FeHBlZGl0aW9uRXZlbnRTaXplXCI7XHJcbmltcG9ydCB7IFJlc291cmNlVHlwZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL29nYW1lL3Jlc291cmNlcy9SZXNvdXJjZVR5cGVcIjtcclxuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9vZ2FtZS9pdGVtcy9JdGVtc1wiO1xyXG5pbXBvcnQgeyBvZ2FtZU1ldGFzRXF1YWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9vZ2FtZU1ldGFzRXF1YWxcIjtcclxuaW1wb3J0IHsgcGFyc2VJbnRTYWZlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9wYXJzZU51bWJlcnNcIjtcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvY29tbXVuaWNhdGlvbi9zZW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHJhY2tpbmdFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvdHJhY2tpbmcvbWlzY1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlVHJhY2tpbmdVdWlkIH0gZnJvbSBcIkAvc2hhcmVkL3V1aWRcIjtcclxuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvU2hpcFR5cGVcIjtcclxuaW1wb3J0IHsgRXhwZWRpdGlvblRyYWNraW5nTG9zdEZsZWV0Tm90aWZpY2F0aW9uTWVzc2FnZSwgRXhwZWRpdGlvblRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSwgRXhwZWRpdGlvblRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEsIExpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlLCBMaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEsIE1lc3NhZ2VUcmFja2luZ0Vycm9yTm90aWZpY2F0aW9uTWVzc2FnZSwgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tZXNzYWdlcy9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGFkZENvc3QsIENvc3QsIG11bHRpcGx5Q29zdCB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvY29tbW9uL0Nvc3RcIjtcclxuaW1wb3J0IHsgU2hpcEJ5VHlwZXMgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL1NoaXBUeXBlc1wiO1xyXG5pbXBvcnQgeyBzZXR0aW5nc1dyYXBwZXIgfSBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IEV4cGVkaXRpb25EZXBsZXRpb25MZXZlbCB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvZXhwZWRpdGlvbnMvRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsXCI7XHJcbmltcG9ydCB7IE9nYW1lUmF3TWVzc2FnZVR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL21lc3NhZ2VzL09nYW1lUmF3TWVzc2FnZVR5cGVcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29yZGluYXRlcyB9IGZyb20gXCJAL3NoYXJlZC91dGlscy9wYXJzZUNvb3JkaW5hdGVzXCI7XHJcbmltcG9ydCB7IE9nYW1lUmF3RXhwZWRpdGlvblJlc3VsdFR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL21lc3NhZ2VzL09nYW1lUmF3RXhwZWRpdGlvblJlc3VsdFR5cGVcIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdFeHBlZGl0aW9uU2l6ZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdFeHBlZGl0aW9uU2l6ZVwiO1xyXG5pbXBvcnQgeyBPZ2FtZVJhd0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbCB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWxcIjtcclxuaW1wb3J0IHsgSXRlbUhhc2ggfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL2l0ZW1zL0l0ZW1IYXNoXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlY29yZCB9IGZyb20gXCJAL3NoYXJlZC91dGlscy9jcmVhdGVSZWNvcmRcIjtcclxuXHJcbmNvbnN0IGVycm9ySWQgPSB2NCgpO1xyXG5jb25zdCBleHBlZGl0aW9uTm90aWZpY2F0aW9uSWRzID0ge1xyXG4gICAgcmVzdWx0OiB2NCgpLFxyXG4gICAgbG9zdEZsZWV0OiB2NCgpLFxyXG59O1xyXG5cclxuY29uc3Qgd2FpdGluZ0Zvck1lc3NhZ2VSZXN1bHQ6IFJlY29yZDxudW1iZXIsIHRydWU+ID0ge307XHJcbmNvbnN0IGZhaWxlZFRvVHJhY2tNZXNzYWdlczogUmVjb3JkPG51bWJlciwgdHJ1ZT4gPSB7fTtcclxuY29uc3QgdG90YWxFeHBlZGl0aW9uUmVzdWx0OiBFeHBlZGl0aW9uVHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlRGF0YSA9IHtcclxuICAgIHJlc291cmNlczoge1xyXG4gICAgICAgIFtSZXNvdXJjZVR5cGUubWV0YWxdOiAwLFxyXG4gICAgICAgIFtSZXNvdXJjZVR5cGUuY3J5c3RhbF06IDAsXHJcbiAgICAgICAgW1Jlc291cmNlVHlwZS5kZXV0ZXJpdW1dOiAwLFxyXG4gICAgfSxcclxuICAgIHNoaXBzOiB7XHJcbiAgICAgICAgW1NoaXBUeXBlLmxpZ2h0RmlnaHRlcl06IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLmhlYXZ5RmlnaHRlcl06IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLmNydWlzZXJdOiAwLFxyXG4gICAgICAgIFtTaGlwVHlwZS5iYXR0bGVzaGlwXTogMCxcclxuICAgICAgICBbU2hpcFR5cGUuYm9tYmVyXTogMCxcclxuICAgICAgICBbU2hpcFR5cGUuYmF0dGxlY3J1aXNlcl06IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLmRlc3Ryb3llcl06IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLnJlYXBlcl06IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLnBhdGhmaW5kZXJdOiAwLFxyXG4gICAgICAgIFtTaGlwVHlwZS5zbWFsbENhcmdvXTogMCxcclxuICAgICAgICBbU2hpcFR5cGUubGFyZ2VDYXJnb106IDAsXHJcbiAgICAgICAgW1NoaXBUeXBlLmVzcGlvbmFnZVByb2JlXTogMCxcclxuICAgIH0sXHJcbiAgICBkYXJrTWF0dGVyOiAwLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFR5cGUubm90aGluZ106IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFR5cGUucmVzb3VyY2VzXTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50VHlwZS5mbGVldF06IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFR5cGUuZGVsYXldOiAwLFxyXG4gICAgICAgIFtFeHBlZGl0aW9uRXZlbnRUeXBlLmVhcmx5XTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50VHlwZS5kYXJrTWF0dGVyXTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50VHlwZS5waXJhdGVzXTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50VHlwZS5hbGllbnNdOiAwLFxyXG4gICAgICAgIFtFeHBlZGl0aW9uRXZlbnRUeXBlLmNvbWJhdF06IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFR5cGUuaXRlbV06IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFR5cGUudHJhZGVyXTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50VHlwZS5sb3N0RmxlZXRdOiAwLFxyXG4gICAgfSxcclxuICAgIGRlcGxldGlvbjoge1xyXG4gICAgICAgIHVua25vd246IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbC5ub25lXTogMCxcclxuICAgICAgICBbRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsLmxvd106IDAsXHJcbiAgICAgICAgW0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbC5tZWRpdW1dOiAwLFxyXG4gICAgICAgIFtFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwuaGlnaF06IDAsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2U8TWVzc2FnZVR5cGUsIGFueT4pIHtcclxuICAgIGNvbnN0IG9nYW1lTWV0YSA9IGdldE9nYW1lTWV0YSgpO1xyXG4gICAgaWYgKCFvZ2FtZU1ldGFzRXF1YWwob2dhbWVNZXRhLCBtZXNzYWdlLm9nYW1lTWV0YSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkV4cGVkaXRpb246XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5OZXdFeHBlZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2UgYXMgRXhwZWRpdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi5tc2dbZGF0YS1tc2ctaWQ9XCIke21zZy5kYXRhLmlkfVwiXWApID8/IF90aHJvdyhgZmFpbGVkIHRvIGZpbmQgZXhwZWRpdGlvbiBtZXNzYWdlIHdpdGggaWQgJyR7bXNnLmRhdGEuaWR9J2ApO1xyXG5cclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMucHJvY2Vzc2VkKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzV3JhcHBlci5zZXR0aW5ncy5tZXNzYWdlVHJhY2tpbmcuc2hvd1NpbXBsaWZpZWRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmhpZGVDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkRXhwZWRpdGlvblJlc3VsdENvbnRlbnQoZGl2LCBtc2cuZGF0YSk7IFxyXG5cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PSBNZXNzYWdlVHlwZS5OZXdFeHBlZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVFeHBlZGl0aW9uUmVzdWx0cyhtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5UcmFja2luZ0Vycm9yOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgaWQgfSA9IChtZXNzYWdlIGFzIE1lc3NhZ2VUcmFja2luZ0Vycm9yTWVzc2FnZSkuZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFbJ2V4cGVkaXRpb24nLCAnbGlmZWZvcm0tZGlzY292ZXJ5J10uaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYubXNnW2RhdGEtbXNnLWlkPVwiJHtpZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIG1lc3NhZ2Ugd2l0aCBpZCAnJHtpZH0nYCk7XHJcblxyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc2VzLm1lc3NhZ2VzLndhaXRpbmdUb0JlUHJvY2Vzc2VkKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5lcnJvcik7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQoZGl2LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ0Zvck1lc3NhZ2VSZXN1bHRbaWRdO1xyXG4gICAgICAgICAgICBmYWlsZWRUb1RyYWNrTWVzc2FnZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2tNZXNzYWdlcyhtZXNzYWdlczogRWxlbWVudFtdKSB7XHJcbiAgICBjb25zdCB1bnByb2Nlc3NlZE1lc3NhZ2VzID0gdHJhY2tFeHBlZGl0aW9ucyhtZXNzYWdlcyk7XHJcblxyXG4gICAgdW5wcm9jZXNzZWRNZXNzYWdlcy5mb3JFYWNoKG1zZyA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludFNhZmUobXNnLmdldEF0dHJpYnV0ZSgnZGF0YS1tc2ctaWQnKSA/PyBfdGhyb3coJ0Nhbm5vdCBmaW5kIG1lc3NhZ2UgaWQnKSwgMTApO1xyXG5cclxuICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmJhc2UsIGNzc0NsYXNzZXMubWVzc2FnZXMuZXJyb3IpO1xyXG4gICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobXNnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB3YWl0aW5nRm9yTWVzc2FnZVJlc3VsdFtpZF07XHJcbiAgICAgICAgZmFpbGVkVG9UcmFja01lc3NhZ2VzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVkaXRpb25UcmFja2luZyA9IHtcclxuICAgIG9uTWVzc2FnZSxcclxuICAgIHRyYWNrOiB0cmFja01lc3NhZ2VzLFxyXG4gICAgbWVzc2FnZVR5cGU6IE9nYW1lUmF3TWVzc2FnZVR5cGUuZXhwZWRpdGlvbixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHRyYWNrRXhwZWRpdGlvbnMobWVzc2FnZXM6IEVsZW1lbnRbXSkge1xyXG4gICAgY29uc3QgdW5wcm9jZXNzZWRNZXNzYWdlczogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnRTYWZlKG1zZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnLWlkJykgPz8gX3Rocm93KCdDYW5ub3QgZmluZCBtZXNzYWdlIGlkJyksIDEwKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gc2VuZCBtZXNzYWdlIHRvIHNlcnZpY2Ugd29ya2VyIFxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXNnLnF1ZXJ5U2VsZWN0b3IoJy5yYXdNZXNzYWdlRGF0YScpID8/IF90aHJvdyhgQ2Fubm90IGZpbmQgcmF3TWVzc2FnZURhdGEgZWxlbWVudGApOyBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvb3JkcyxcclxuICAgICAgICAgICAgICAgIGV4cGVkaXRpb25yZXN1bHQ6IHJhd1R5cGUsXHJcbiAgICAgICAgICAgICAgICBkZXBsZXRpb246IHJhd0RlcGxldGlvbixcclxuICAgICAgICAgICAgICAgIHNpemU6IHJhd1NpemUsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXNnYWluZWQ6IHJhd1Jlc291cmNlcyxcclxuICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llc2dhaW5lZDogcmF3U2hpcHMsXHJcbiAgICAgICAgICAgICAgICBpdGVtc2dhaW5lZDogcmF3SXRlbXMsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiByYXdOYXZpZ2F0aW9uLFxyXG4gICAgICAgICAgICB9ID0gZ2V0TWVzc2FnZUF0dHJpYnV0ZXMoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IHZhbHVlID0+IHBhcnNlSW50U2FmZSh2YWx1ZSwgMTApICogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb29yZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gcGFyc2VDb29yZGluYXRlcyh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXhwZWRpdGlvbnJlc3VsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiB2YWx1ZSA9PiB2YWx1ZSBhcyBPZ2FtZVJhd0V4cGVkaXRpb25SZXN1bHRUeXBlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlcGxldGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IHZhbHVlID0+IHBhcnNlSW50U2FmZSh2YWx1ZSkgYXMgT2dhbWVSYXdFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IHZhbHVlID0+IHBhcnNlSW50U2FmZSh2YWx1ZSkgYXMgT2dhbWVSYXdFeHBlZGl0aW9uU2l6ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXNnYWluZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiBqc29uID0+IEpTT04ucGFyc2UoanNvbikgYXMgUGFydGlhbDxSZWNvcmQ8J21ldGFsJyB8ICdjcnlzdGFsJyB8ICdkZXV0ZXJpdW0nIHwgJ2RhcmtNYXR0ZXInLCBudW1iZXI+PixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZWNobm9sb2dpZXNnYWluZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiBqc29uID0+IEpTT04ucGFyc2UoanNvbikgYXMgUGFydGlhbDxSZWNvcmQ8RXhwZWRpdGlvbkZpbmRhYmxlU2hpcFR5cGUsIHsgbmFtZTogc3RyaW5nOyBhbW91bnQ6IG51bWJlciB9Pj4sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IGpzb24gPT4gSlNPTi5wYXJzZShqc29uKSBhcyBSZWNvcmQ8J3JldHVyblRpbWVBYnNvbHV0ZUluY3JlYXNlSG91cnMnIHwgJ3JldHVyblRpbWVNdWx0aXBsaWVyJywgbnVtYmVyPixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpdGVtc2dhaW5lZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IGpzb24gPT4gSlNPTi5wYXJzZShqc29uKSBhcyB7IGlkOiBJdGVtSGFzaDsgYW1vdW50OiBudW1iZXI7IG5hbWU6IHN0cmluZyB9W10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgX3Rocm93KCdNZXNzYWdlIHRpbWVzdGFtcCBpcyBOYU4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ya2VyTWVzc2FnZTogVHJhY2tFeHBlZGl0aW9uTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlRyYWNrRXhwZWRpdGlvbixcclxuICAgICAgICAgICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJhd1R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogcmF3U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsZXRpb246IHJhd0RlcGxldGlvbixcclxuICAgICAgICAgICAgICAgICAgICBkYXJrTWF0dGVyOiByYXdSZXNvdXJjZXM/LmRhcmtNYXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzOiByYXdSZXNvdXJjZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHM6IGNyZWF0ZVJlY29yZChFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZXMsIHNoaXAgPT4gcmF3U2hpcHM/LltzaGlwXT8uYW1vdW50ID8/IDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHJhd0l0ZW1zPy5bMF0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IHJhd05hdmlnYXRpb24gPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJhd05hdmlnYXRpb24/LnJldHVyblRpbWVNdWx0aXBsaWVyID09IDEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdkZWxheSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Vhcmx5JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZW5kZXJVdWlkOiBtZXNzYWdlVHJhY2tpbmdVdWlkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSh3b3JrZXJNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgbWVzc2FnZSBhcyBcIndhaXRpbmcgZm9yIHJlc3VsdFwiXHJcbiAgICAgICAgICAgIG1zZy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Nlcy5tZXNzYWdlcy5iYXNlLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudChtc2csIGA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1sb2FkZXJcIj48L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgICAgIHdhaXRpbmdGb3JNZXNzYWdlUmVzdWx0W2lkXSA9IHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bnByb2Nlc3NlZE1lc3NhZ2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTm90aWZpY2F0aW9uTWVzc2FnZXMoKSB7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBPYmplY3Qua2V5cyhmYWlsZWRUb1RyYWNrTWVzc2FnZXMpLmxlbmd0aDtcclxuICAgIGlmIChmYWlsZWQgPiAwKSB7XHJcbiAgICAgICAgc2VuZEVycm9yTm90aWZpY2F0aW9uTWVzc2FnZShmYWlsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cGVkaXRpb25Db3VudCA9IE9iamVjdC52YWx1ZXModG90YWxFeHBlZGl0aW9uUmVzdWx0LmV2ZW50cykucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLCAwKTtcclxuICAgIGlmIChleHBlZGl0aW9uQ291bnQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgbXNnOiBFeHBlZGl0aW9uVHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24sXHJcbiAgICAgICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRXhwZWRpdGlvblRyYWNraW5nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBleHBlZGl0aW9uTm90aWZpY2F0aW9uSWRzLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgIC4uLnRvdGFsRXhwZWRpdGlvblJlc3VsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcblxyXG4gICAgICAgIGlmICh0b3RhbEV4cGVkaXRpb25SZXN1bHQuZXZlbnRzLmxvc3RGbGVldCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnOiBFeHBlZGl0aW9uVHJhY2tpbmdMb3N0RmxlZXROb3RpZmljYXRpb25NZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgb2dhbWVNZXRhOiBnZXRPZ2FtZU1ldGEoKSxcclxuICAgICAgICAgICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5FeHBlZGl0aW9uVHJhY2tpbmdMb3N0RmxlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBleHBlZGl0aW9uTm90aWZpY2F0aW9uSWRzLmxvc3RGbGVldCxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxFeHBlZGl0aW9uUmVzdWx0LmV2ZW50cy5sb3N0RmxlZXQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZShtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEVycm9yTm90aWZpY2F0aW9uTWVzc2FnZShmYWlsZWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgbXNnOiBNZXNzYWdlVHJhY2tpbmdFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XHJcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxyXG4gICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuTWVzc2FnZVRyYWNraW5nRXJyb3IsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogZXJyb3JJZCxcclxuICAgICAgICAgICAgY291bnQ6IGZhaWxlZCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV4cGVkaXRpb25SZXN1bHRDb250ZW50KGxpOiBFbGVtZW50LCBleHBlZGl0aW9uOiBFeHBlZGl0aW9uRXZlbnQpIHtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5leHBlZGl0aW9uKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRIdG1sID0gZ2V0RXhwZWRpdGlvblJlc3VsdENvbnRlbnRIdG1sKGV4cGVkaXRpb24pO1xyXG4gICAgY29uc3QgZGVwbGV0aW9uSHRtbCA9IGdldEV4cGVkaXRpb25EZXBsZXRpb25IdG1sKGV4cGVkaXRpb24pO1xyXG4gICAgY29uc3QgaHRtbCA9IHJlc3VsdEh0bWwgKyBkZXBsZXRpb25IdG1sO1xyXG5cclxuICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobGksIGh0bWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFeHBlZGl0aW9uRGVwbGV0aW9uSHRtbChleHBlZGl0aW9uOiBFeHBlZGl0aW9uRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGV4cGVkaXRpb24uZGVwbGV0aW9uID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVwbGV0aW9uTGV2ZWxDbGFzcyA9IGdldERlcGxldGlvbkxldmVsQ2xhc3MoZXhwZWRpdGlvbi5kZXBsZXRpb24pO1xyXG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7ZGVwbGV0aW9uTGV2ZWxDbGFzc31cIj48L3NwYW4+YFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFeHBlZGl0aW9uUmVzdWx0Q29udGVudEh0bWwoZXhwZWRpdGlvbjogRXhwZWRpdGlvbkV2ZW50KTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoZXhwZWRpdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLnJlc291cmNlczoge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBleHBlZGl0aW9uLnJlc291cmNlcztcclxuICAgICAgICAgICAgbGV0IHJlc291cmNlOiBSZXNvdXJjZVR5cGU7XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKHJlc291cmNlcy5tZXRhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFtyZXNvdXJjZSwgYW1vdW50XSA9IFtSZXNvdXJjZVR5cGUubWV0YWwsIHJlc291cmNlcy5tZXRhbF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2VzLmNyeXN0YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBbcmVzb3VyY2UsIGFtb3VudF0gPSBbUmVzb3VyY2VUeXBlLmNyeXN0YWwsIHJlc291cmNlcy5jcnlzdGFsXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFtyZXNvdXJjZSwgYW1vdW50XSA9IFtSZXNvdXJjZVR5cGUuZGV1dGVyaXVtLCByZXNvdXJjZXMuZGV1dGVyaXVtXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uU2l6ZUljb25DbGFzcyhleHBlZGl0aW9uLnNpemUpfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZ2FtZS10cmFja2VyLXJlc291cmNlICR7cmVzb3VyY2V9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7cmVzb3VyY2V9XCI+JHtmb3JtYXROdW1iZXIoYW1vdW50KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLmZsZWV0OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZXhwZWRpdGlvbi5mbGVldClcclxuICAgICAgICAgICAgICAgIC5tYXAoc2hpcCA9PiBwYXJzZUludFNhZmUoc2hpcCwgMTApIGFzIEV4cGVkaXRpb25GaW5kYWJsZVNoaXBUeXBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihrZXkgPT4gKGV4cGVkaXRpb24uZmxlZXRba2V5XSA/PyAwKSA+IDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdW5pdHMgPSBzaGlwcy5yZWR1Y2U8Q29zdD4oKHRvdGFsLCBzaGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQ29zdCA9IG11bHRpcGx5Q29zdChTaGlwQnlUeXBlc1tzaGlwXS5jb3N0LCBleHBlZGl0aW9uLmZsZWV0W3NoaXBdID8/IDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRDb3N0ID0gbXVsdGlwbHlDb3N0KHNoaXBDb3N0LCBzZXR0aW5nc1dyYXBwZXIuc2V0dGluZ3MuZXhwZWRpdGlvbkZvdW5kU2hpcHNSZXNvdXJjZVVuaXRzLmZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkQ29zdCh0b3RhbCwgYWRqdXN0ZWRDb3N0KTtcclxuICAgICAgICAgICAgfSwgeyBtZXRhbDogMCwgY3J5c3RhbDogMCwgZGV1dGVyaXVtOiAwLCBlbmVyZ3k6IDAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1leHBlZGl0aW9uLXJlc3VsdC0tZmxlZXRfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblNpemVJY29uQ2xhc3MoZXhwZWRpdGlvbi5zaXplKX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzaGlwcy5tYXAoc2hpcCA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcC1jb3VudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItc2hpcCBzaGlwLSR7c2hpcH1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Zm9ybWF0TnVtYmVyKGV4cGVkaXRpb24uZmxlZXRbc2hpcF0gPz8gMCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCkuam9pbignJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc291cmNlLXVuaXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dW5pdHMubWV0YWwgPiAwID8gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1yZXNvdXJjZSBtZXRhbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YWxcIj4ke2Zvcm1hdE51bWJlcih1bml0cy5tZXRhbCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHt1bml0cy5jcnlzdGFsID4gMCA/IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItcmVzb3VyY2UgY3J5c3RhbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3J5c3RhbFwiPiR7Zm9ybWF0TnVtYmVyKHVuaXRzLmNyeXN0YWwpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dW5pdHMuZGV1dGVyaXVtID4gMCA/IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItcmVzb3VyY2UgZGV1dGVyaXVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXV0ZXJpdW1cIj4ke2Zvcm1hdE51bWJlcih1bml0cy5kZXV0ZXJpdW0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgRXhwZWRpdGlvbkV2ZW50VHlwZS5kYXJrTWF0dGVyOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uUmVzdWx0Q2xhc3MoZXhwZWRpdGlvbil9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblNpemVJY29uQ2xhc3MoZXhwZWRpdGlvbi5zaXplKX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1yZXNvdXJjZSBkYXJrLW1hdHRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXJrLW1hdHRlclwiPiR7Zm9ybWF0TnVtYmVyKGV4cGVkaXRpb24uZGFya01hdHRlcil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgRXhwZWRpdGlvbkV2ZW50VHlwZS5kZWxheToge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblJlc3VsdENsYXNzKGV4cGVkaXRpb24pfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVkaXRpb24uc2l6ZSAhPSBudWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uU2l6ZUljb25DbGFzcyhleHBlZGl0aW9uLnNpemUpfVwiPjwvZGl2PmAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kaSBtZGktY2xvY2stb3V0bGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuZWFybHk6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlZGl0aW9uLnNpemUgIT0gbnVsbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblNpemVJY29uQ2xhc3MoZXhwZWRpdGlvbi5zaXplKX1cIj48L2Rpdj5gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGkgbWRpLWNsb2NrLWZhc3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLnBpcmF0ZXM6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uU2l6ZUljb25DbGFzcyhleHBlZGl0aW9uLnNpemUpfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGkgbWRpLXBpcmF0ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuYWxpZW5zOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uUmVzdWx0Q2xhc3MoZXhwZWRpdGlvbil9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblNpemVJY29uQ2xhc3MoZXhwZWRpdGlvbi5zaXplKX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRpIG1kaS1hbGllblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuY29tYmF0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uUmVzdWx0Q2xhc3MoZXhwZWRpdGlvbil9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblNpemVJY29uQ2xhc3MoZXhwZWRpdGlvbi5zaXplKX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRpIG1kaS1zd29yZC1jcm9zc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUubG9zdEZsZWV0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uUmVzdWx0Q2xhc3MoZXhwZWRpdGlvbil9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kaSBtZGktY3Jvc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLm5vdGhpbmc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRpIG1kaS1jbG9zZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuaXRlbToge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gSXRlbXNbZXhwZWRpdGlvbi5pdGVtSGFzaF07XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKGAvaW1nL29nYW1lL2l0ZW1zLyR7aXRlbS5pbWFnZX0ucG5nYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbWUvaW5kZXgucGhwP3BhZ2U9c2hvcCNpdGVtPSR7ZXhwZWRpdGlvbi5pdGVtSGFzaH0mcGFnZT1pbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRFeHBlZGl0aW9uUmVzdWx0Q2xhc3MoZXhwZWRpdGlvbil9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiBjbGFzcz1cIml0ZW0tZ3JhZGUtLSR7aXRlbS5ncmFkZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLnRyYWRlcjoge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0RXhwZWRpdGlvblJlc3VsdENsYXNzKGV4cGVkaXRpb24pfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGkgbWRpLXN3YXAtaG9yaXpvbnRhbC1ib2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogX3Rocm93KCd1bmtub3duIGV4cGVkaXRpb24gdHlwZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBsZXRpb25MZXZlbENsYXNzKGxldmVsOiBFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwpIHtcclxuICAgIHJldHVybiBgb2dhbWUtdHJhY2tlci1leHBlZGl0aW9uLXJlc3VsdC0tZGVwbGV0aW9uLWxldmVsIG9nYW1lLXRyYWNrZXItZXhwZWRpdGlvbi1yZXN1bHQtLWRlcGxldGlvbi1sZXZlbC0ke2xldmVsfSBtZGkgYCArICh7XHJcbiAgICAgICAgW0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbC5ub25lXTogJ21kaS1zaWduYWwtY2VsbHVsYXItb3V0bGluZScsXHJcbiAgICAgICAgW0V4cGVkaXRpb25EZXBsZXRpb25MZXZlbC5sb3ddOiAnbWRpLXNpZ25hbC1jZWxsdWxhci0xJyxcclxuICAgICAgICBbRXhwZWRpdGlvbkRlcGxldGlvbkxldmVsLm1lZGl1bV06ICdtZGktc2lnbmFsLWNlbGx1bGFyLTInLFxyXG4gICAgICAgIFtFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwuaGlnaF06ICdtZGktc2lnbmFsLWNlbGx1bGFyLTMnLFxyXG4gICAgfVtsZXZlbF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFeHBlZGl0aW9uU2l6ZUljb25DbGFzcyhzaXplOiBFeHBlZGl0aW9uRXZlbnRTaXplIHwgRXhwZWRpdGlvbkV2ZW50Q29tYmF0U2l6ZSkge1xyXG4gICAgcmV0dXJuICdvZ2FtZS10cmFja2VyLWV4cGVkaXRpb24tLXNpemUtaWNvbiBtZGkgJyArICg8UmVjb3JkPEV4cGVkaXRpb25FdmVudFNpemUgfCBFeHBlZGl0aW9uRXZlbnRDb21iYXRTaXplLCBzdHJpbmc+PntcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50U2l6ZS5zbWFsbF06ICdtZGktaGV4YWdvbi1zbGljZS0xJyxcclxuICAgICAgICBbRXhwZWRpdGlvbkV2ZW50U2l6ZS5tZWRpdW1dOiAnbWRpLWhleGFnb24tc2xpY2UtMycsXHJcbiAgICAgICAgW0V4cGVkaXRpb25FdmVudFNpemUubGFyZ2VdOiAnbWRpLWhleGFnb24tc2xpY2UtNScsXHJcbiAgICAgICAgJ2ZsZWQtZGVhdGgtc3Rhcic6ICdtZGktcnVuLWZhc3QnLFxyXG4gICAgfSlbc2l6ZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4cGVkaXRpb25SZXN1bHRDbGFzcyhleHBlZGl0aW9uOiBFeHBlZGl0aW9uRXZlbnQpIHtcclxuICAgIGxldCBjc3NDbGFzcyA9IGBvZ2FtZS10cmFja2VyLWV4cGVkaXRpb24tcmVzdWx0IG9nYW1lLXRyYWNrZXItZXhwZWRpdGlvbi1yZXN1bHQtLSR7ZXhwZWRpdGlvbi50eXBlfWA7XHJcblxyXG4gICAgaWYgKGV4cGVkaXRpb24udHlwZSA9PSBFeHBlZGl0aW9uRXZlbnRUeXBlLmZsZWV0XHJcbiAgICAgICAgJiYgRXhwZWRpdGlvbkZpbmRhYmxlU2hpcFR5cGVzLmV2ZXJ5KHNoaXAgPT4gKGV4cGVkaXRpb24uZmxlZXRbc2hpcF0gPz8gMCkgPiAwKVxyXG4gICAgKSB7XHJcbiAgICAgICAgY3NzQ2xhc3MgKz0gJyBvZ2FtZS10cmFja2VyLWV4cGVkaXRpb24tcmVzdWx0LS1mbGVldC0tcmFpbmJvdyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaXplJyBpbiBleHBlZGl0aW9uKSB7XHJcbiAgICAgICAgY3NzQ2xhc3MgKz0gYCBvZ2FtZS10cmFja2VyLWV4cGVkaXRpb24tcmVzdWx0LS1zaXplLSR7ZXhwZWRpdGlvbi5zaXplfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNzc0NsYXNzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVFeHBlZGl0aW9uUmVzdWx0cyhtc2c6IEV4cGVkaXRpb25NZXNzYWdlKSB7XHJcbiAgICBkZWxldGUgd2FpdGluZ0Zvck1lc3NhZ2VSZXN1bHRbbXNnLmRhdGEuaWRdO1xyXG4gICAgdG90YWxFeHBlZGl0aW9uUmVzdWx0LmV2ZW50c1ttc2cuZGF0YS50eXBlXSsrO1xyXG5cclxuICAgIHRvdGFsRXhwZWRpdGlvblJlc3VsdC5kZXBsZXRpb25bbXNnLmRhdGEuZGVwbGV0aW9uID8/ICd1bmtub3duJ10rKztcclxuXHJcbiAgICBzd2l0Y2ggKG1zZy5kYXRhLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUucmVzb3VyY2VzOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlcyA9IG1zZy5kYXRhLnJlc291cmNlcztcclxuICAgICAgICAgICAgW1Jlc291cmNlVHlwZS5tZXRhbCwgUmVzb3VyY2VUeXBlLmNyeXN0YWwsIFJlc291cmNlVHlwZS5kZXV0ZXJpdW1dXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChyZXNvdXJjZSA9PiB0b3RhbEV4cGVkaXRpb25SZXN1bHQucmVzb3VyY2VzW3Jlc291cmNlXSArPSByZXNvdXJjZXNbcmVzb3VyY2VdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuZmxlZXQ6IHtcclxuICAgICAgICAgICAgY29uc3QgZmxlZXQgPSBtc2cuZGF0YS5mbGVldDtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmxlZXQpXHJcbiAgICAgICAgICAgICAgICAubWFwKHNoaXAgPT4gcGFyc2VJbnRTYWZlKHNoaXAsIDEwKSBhcyBFeHBlZGl0aW9uRmluZGFibGVTaGlwVHlwZSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRXhwZWRpdGlvblJlc3VsdC5zaGlwc1tzaGlwXSA/Pz0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEV4cGVkaXRpb25SZXN1bHQuc2hpcHNbc2hpcF0gKz0gKGZsZWV0W3NoaXBdID8/IDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFeHBlZGl0aW9uRXZlbnRUeXBlLmRhcmtNYXR0ZXI6IHtcclxuICAgICAgICAgICAgdG90YWxFeHBlZGl0aW9uUmVzdWx0LmRhcmtNYXR0ZXIgKz0gbXNnLmRhdGEuZGFya01hdHRlcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEV4cGVkaXRpb25FdmVudFR5cGUuaXRlbToge1xyXG4gICAgICAgICAgICB0b3RhbEV4cGVkaXRpb25SZXN1bHQuaXRlbXMucHVzaChtc2cuZGF0YS5pdGVtSGFzaCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbiAgICBzZW5kTm90aWZpY2F0aW9uTWVzc2FnZXMoKTtcclxufVxyXG4iLCJleHBvcnQgZW51bSBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZSB7XHJcbiAgICAvKiogbm90aGluZyBoYXBwZW5lZCAqL1xyXG4gICAgbm90aGluZyA9ICdub3RoaW5nJyxcclxuICAgIC8qKiBsZWdhY3k6IGRpc2NvdmVyeSBwcm9iZSB3YXMgbG9zdCAqL1xyXG4gICAgbG9zdFNoaXAgPSAnbG9zdFNoaXAnLFxyXG4gICAgLyoqIGRpY292ZXJlZCBhIG5ldyAobm90IHByZXZpb3VzbHkga25vd24pIGxpZmVmb3JtICovXHJcbiAgICBuZXdMaWZlZm9ybUZvdW5kID0gJ25ld0xpZmVmb3JtRm91bmQnLFxyXG4gICAgLyoqIGRpc2NvdmVyZWQgYSBrbm93biBsaWZlZm9ybSBhbmQgZ2F0aGVyZWQgc29tZSBYUCAqL1xyXG4gICAga25vd25MaWZlZm9ybUZvdW5kID0gJ2tub3duTGlmZWZvcm1Gb3VuZCcsXHJcbiAgICAvKiogYXJ0aWZhY3RzIGZvdW5kICovXHJcbiAgICBhcnRpZmFjdHMgPSAnYXJ0aWZhY3RzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlczogTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGVbXSA9IFtcclxuICAgIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLm5vdGhpbmcsXHJcbiAgICBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZS5sb3N0U2hpcCxcclxuICAgIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLm5ld0xpZmVmb3JtRm91bmQsXHJcbiAgICBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZS5rbm93bkxpZmVmb3JtRm91bmQsXHJcbiAgICBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZS5hcnRpZmFjdHMsXHJcbl07IiwiZXhwb3J0IGVudW0gTGlmZWZvcm1UeXBlIHtcclxuICAgIGh1bWFucyA9ICdodW1hbnMnLFxyXG4gICAgcm9ja3RhbCA9ICdyb2NrdGFsJyxcclxuICAgIG1lY2hhcyA9ICdtZWNoYXMnLFxyXG4gICAga2FlbGVzaCA9ICdrYWVsZXNoJyxcclxuICAgIG5vbmUgPSAnbm9uZScsXHJcbn1cclxuZXhwb3J0IHR5cGUgVmFsaWRMaWZlZm9ybVR5cGUgPSBFeGNsdWRlPExpZmVmb3JtVHlwZSwgTGlmZWZvcm1UeXBlLm5vbmU+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZhbGlkTGlmZWZvcm1UeXBlczogVmFsaWRMaWZlZm9ybVR5cGVbXSA9IFtcclxuICAgIExpZmVmb3JtVHlwZS5odW1hbnMsXHJcbiAgICBMaWZlZm9ybVR5cGUucm9ja3RhbCxcclxuICAgIExpZmVmb3JtVHlwZS5tZWNoYXMsXHJcbiAgICBMaWZlZm9ybVR5cGUua2FlbGVzaCxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaWZlZm9ybVR5cGVzOiBMaWZlZm9ybVR5cGVbXSA9IFtcclxuICAgIExpZmVmb3JtVHlwZS5ub25lLFxyXG4gICAgTGlmZWZvcm1UeXBlLmh1bWFucyxcclxuICAgIExpZmVmb3JtVHlwZS5yb2NrdGFsLFxyXG4gICAgTGlmZWZvcm1UeXBlLm1lY2hhcyxcclxuICAgIExpZmVmb3JtVHlwZS5rYWVsZXNoLFxyXG5dOyIsImV4cG9ydCBlbnVtIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplIHtcclxuICAgIHN0b3JhZ2VGdWxsID0gJ2Z1bGwnLFxyXG4gICAgc21hbGwgPSAnbm9ybWFsJyxcclxuICAgIG1lZGl1bSA9ICdiaWcnLFxyXG4gICAgbGFyZ2UgPSAnaHVnZScsIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemVzOiBMaWZlZm9ybURpc2NvdmVyeUV2ZW50QXJ0aWZhY3RGaW5kaW5nU2l6ZVtdID0gW1xyXG4gICAgTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemUuc21hbGwsXHJcbiAgICBMaWZlZm9ybURpc2NvdmVyeUV2ZW50QXJ0aWZhY3RGaW5kaW5nU2l6ZS5tZWRpdW0sXHJcbiAgICBMaWZlZm9ybURpc2NvdmVyeUV2ZW50QXJ0aWZhY3RGaW5kaW5nU2l6ZS5sYXJnZSxcclxuICAgIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplLnN0b3JhZ2VGdWxsLFxyXG5dOyIsImV4cG9ydCBlbnVtIE9nYW1lUmF3TGlmZWZvcm1EaXNjb3ZlcnlUeXBlIHtcclxuICAgIG5vbmUgPSAnbm9uZScsXHJcbiAgICBhcnRpZmFjdHMgPSAnYXJ0aWZhY3RzJyxcclxuICAgIGxpZmVmb3JtRXhwZXJpZW5jZSA9ICdsaWZlZm9ybS14cCcsXHJcbiAgICBzaGlwTG9zdCA9ICdzaGlwLWxvc3QnLFxyXG4gICAgbGlmZWZvcm1Gb3VuZCA9ICdsaWZlZm9ybS1mb3VuZCcsXHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlcy9NZXNzYWdlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlcy9NZXNzYWdlVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRPZ2FtZU1ldGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9nZXRPZ2FtZU1ldGFcIjtcclxuaW1wb3J0IHsgX2xvZywgX2xvZ0RlYnVnLCBfbG9nV2FybmluZywgX2xvZ0Vycm9yIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9fbG9nXCI7XHJcbmltcG9ydCB7IF90aHJvdyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX3Rocm93XCI7XHJcbmltcG9ydCB7IGdldE1lc3NhZ2VBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9nZXRNZXNzYWdlQXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50LCBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBvZ2FtZU1ldGFzRXF1YWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9vZ2FtZU1ldGFzRXF1YWxcIjtcclxuaW1wb3J0IHsgcGFyc2VJbnRTYWZlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9wYXJzZU51bWJlcnNcIjtcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvY29tbXVuaWNhdGlvbi9zZW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHJhY2tpbmdFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvdHJhY2tpbmcvbWlzY1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlVHJhY2tpbmdVdWlkIH0gZnJvbSBcIkAvc2hhcmVkL3V1aWRcIjtcclxuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBzZXR0aW5nc1dyYXBwZXIgfSBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IExpZmVmb3JtRGlzY292ZXJ5TWVzc2FnZSwgVHJhY2tMaWZlZm9ybURpc2NvdmVyeU1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvdHJhY2tpbmcvbGlmZWZvcm0tZGlzY292ZXJpZXNcIjtcclxuaW1wb3J0IHsgTGlmZWZvcm1EaXNjb3ZlcnlFdmVudCB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvbGlmZWZvcm0tZGlzY292ZXJpZXMvTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFwiO1xyXG5pbXBvcnQgeyBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvbGlmZWZvcm0tZGlzY292ZXJpZXMvTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgTGlmZWZvcm1UeXBlLCBWYWxpZExpZmVmb3JtVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtVHlwZVwiO1xyXG5pbXBvcnQgeyBMaWZlZm9ybURpc2NvdmVyeUV2ZW50QXJ0aWZhY3RGaW5kaW5nU2l6ZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvbGlmZWZvcm0tZGlzY292ZXJpZXMvTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemVcIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdNZXNzYWdlVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdNZXNzYWdlVHlwZVwiO1xyXG5pbXBvcnQgeyBMaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSwgTGlmZWZvcm1EaXNjb3ZlcnlUcmFja2luZ05vdGlmaWNhdGlvbk1lc3NhZ2VEYXRhLCBNZXNzYWdlVHJhY2tpbmdFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UsIE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb3JkaW5hdGVzIH0gZnJvbSBcIkAvc2hhcmVkL3V0aWxzL3BhcnNlQ29vcmRpbmF0ZXNcIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdMaWZlZm9ybURpc2NvdmVyeVR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL21lc3NhZ2VzL09nYW1lUmF3TGlmZWZvcm1EaXNjb3ZlcnlUeXBlXCI7XHJcbmltcG9ydCB7IE9nYW1lUmF3QXJ0aWZhY3RGaW5kU2l6ZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdBcnRpZmFjdEZpbmRTaXplXCI7XHJcbmltcG9ydCB7IE9nYW1lUmF3TGlmZWZvcm1UeXBlIH0gZnJvbSBcIkAvc2hhcmVkL21vZGVscy9vZ2FtZS9tZXNzYWdlcy9PZ2FtZVJhd0xpZmVmb3JtVHlwZVwiO1xyXG5cclxuY29uc3QgZXJyb3JJZCA9IHY0KCk7XHJcbmNvbnN0IGxpZmVmb3JtRGlzY292ZXJpZXNJZCA9IHY0KCk7XHJcblxyXG5jb25zdCB3YWl0aW5nRm9yTWVzc2FnZVJlc3VsdDogUmVjb3JkPG51bWJlciwgdHJ1ZT4gPSB7fTtcclxuY29uc3QgZmFpbGVkVG9UcmFja01lc3NhZ2VzOiBSZWNvcmQ8bnVtYmVyLCB0cnVlPiA9IHt9O1xyXG5jb25zdCB0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0OiBMaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEgPSB7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBbTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubm90aGluZ106IDAsXHJcbiAgICAgICAgW0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmxvc3RTaGlwXTogMCxcclxuICAgICAgICBbTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubmV3TGlmZWZvcm1Gb3VuZF06IDAsXHJcbiAgICAgICAgW0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmtub3duTGlmZWZvcm1Gb3VuZF06IDAsXHJcbiAgICAgICAgW0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmFydGlmYWN0c106IDAsXHJcbiAgICB9LFxyXG4gICAgYXJ0aWZhY3RzOiAwLFxyXG4gICAgbmV3TGlmZWZvcm1zOiBbXSxcclxuICAgIGxpZmVmb3JtRXhwZXJpZW5jZToge1xyXG4gICAgICAgIFtMaWZlZm9ybVR5cGUuaHVtYW5zXTogMCxcclxuICAgICAgICBbTGlmZWZvcm1UeXBlLnJvY2t0YWxdOiAwLFxyXG4gICAgICAgIFtMaWZlZm9ybVR5cGUubWVjaGFzXTogMCxcclxuICAgICAgICBbTGlmZWZvcm1UeXBlLmthZWxlc2hdOiAwLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VUeXBlLCBhbnk+KSB7XHJcbiAgICBjb25zdCBvZ2FtZU1ldGEgPSBnZXRPZ2FtZU1ldGEoKTtcclxuICAgIGlmICghb2dhbWVNZXRhc0VxdWFsKG9nYW1lTWV0YSwgbWVzc2FnZS5vZ2FtZU1ldGEpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTGlmZWZvcm1EaXNjb3Zlcnk6XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5OZXdMaWZlZm9ybURpc2NvdmVyeToge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBtZXNzYWdlIGFzIExpZmVmb3JtRGlzY292ZXJ5TWVzc2FnZTtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2Lm1zZ1tkYXRhLW1zZy1pZD1cIiR7bXNnLmRhdGEuaWR9XCJdYCkgPz8gX3Rocm93KGBmYWlsZWQgdG8gZmluZCBsaWZlZm9ybSBkaXNjb3ZlcnkgbWVzc2FnZSB3aXRoIGlkICcke21zZy5kYXRhLmlkfSdgKTtcclxuXHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzZXMubWVzc2FnZXMud2FpdGluZ1RvQmVQcm9jZXNzZWQpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLnByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nc1dyYXBwZXIuc2V0dGluZ3MubWVzc2FnZVRyYWNraW5nLnNob3dTaW1wbGlmaWVkUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5oaWRlQ29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q29udGVudChkaXYsIG1zZy5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT0gTWVzc2FnZVR5cGUuTmV3TGlmZWZvcm1EaXNjb3ZlcnkpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxpZmVmb3JtRGlzY292ZXJ5UmVzdWx0cyhtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5UcmFja2luZ0Vycm9yOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgaWQgfSA9IChtZXNzYWdlIGFzIE1lc3NhZ2VUcmFja2luZ0Vycm9yTWVzc2FnZSkuZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFbJ2V4cGVkaXRpb24nLCAnbGlmZWZvcm0tZGlzY292ZXJ5J10uaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYubXNnW2RhdGEtbXNnLWlkPVwiJHtpZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIG1lc3NhZ2Ugd2l0aCBpZCAnJHtpZH0nYCk7XHJcblxyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc2VzLm1lc3NhZ2VzLndhaXRpbmdUb0JlUHJvY2Vzc2VkKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5lcnJvcik7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQoZGl2LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ0Zvck1lc3NhZ2VSZXN1bHRbaWRdO1xyXG4gICAgICAgICAgICBmYWlsZWRUb1RyYWNrTWVzc2FnZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2tNZXNzYWdlcyhtZXNzYWdlczogRWxlbWVudFtdKSB7XHJcbiAgICBjb25zdCB1bnByb2Nlc3NlZE1lc3NhZ2VzID0gdHJhY2tMaWZlZm9ybURpc2NvdmVyaWVzKG1lc3NhZ2VzKTtcclxuXHJcbiAgICB1bnByb2Nlc3NlZE1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50U2FmZShtc2cuZ2V0QXR0cmlidXRlKCdkYXRhLW1zZy1pZCcpID8/IF90aHJvdygnQ2Fubm90IGZpbmQgbWVzc2FnZSBpZCcpLCAxMCk7XHJcblxyXG4gICAgICAgIG1zZy5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMuYmFzZSwgY3NzQ2xhc3Nlcy5tZXNzYWdlcy5lcnJvcik7XHJcbiAgICAgICAgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudChtc2csIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHdhaXRpbmdGb3JNZXNzYWdlUmVzdWx0W2lkXTtcclxuICAgICAgICBmYWlsZWRUb1RyYWNrTWVzc2FnZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICBzZW5kTm90aWZpY2F0aW9uTWVzc2FnZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlmZWZvcm1EaXNjb3ZlcnlUcmFja2luZyA9IHtcclxuICAgIG9uTWVzc2FnZSxcclxuICAgIHRyYWNrOiB0cmFja01lc3NhZ2VzLFxyXG4gICAgbWVzc2FnZVR5cGU6IE9nYW1lUmF3TWVzc2FnZVR5cGUubGlmZWZvcm1EaXNjb3ZlcnksXHJcbn07XHJcblxyXG5mdW5jdGlvbiB0cmFja0xpZmVmb3JtRGlzY292ZXJpZXMobWVzc2FnZXM6IEVsZW1lbnRbXSkge1xyXG4gICAgY29uc3QgdW5wcm9jZXNzZWRNZXNzYWdlczogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnRTYWZlKG1zZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnLWlkJykgPz8gX3Rocm93KCdDYW5ub3QgZmluZCBtZXNzYWdlIGlkJyksIDEwKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG1zZy5xdWVyeVNlbGVjdG9yKCcucmF3TWVzc2FnZURhdGEnKSA/PyBfdGhyb3coYENhbm5vdCBmaW5kIHJhd01lc3NhZ2VEYXRhIGVsZW1lbnRgKTsgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgY29vcmRzLFxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJ5dHlwZTogcmF3VHlwZSxcclxuICAgICAgICAgICAgICAgIGFydGlmYWN0c3NpemU6IHJhd0FydGlmYWN0c0ZpbmRTaXplLFxyXG4gICAgICAgICAgICAgICAgYXJ0aWZhY3RzZm91bmQ6IHJhd0FydGlmYWN0c0Ftb3VudCxcclxuICAgICAgICAgICAgICAgIGxpZmVmb3JtOiByYXdMaWZlZm9ybSxcclxuICAgICAgICAgICAgICAgIGxpZmVmb3JtYWxyZWFkeW93bmVkOiByYXdMaWZlZm9ybUFscmVhZHlPd25lZCxcclxuICAgICAgICAgICAgICAgIGxpZmVmb3JtZ2FpbmVkZXhwZXJpZW5jZTogcmF3TGlmZWZvcm1FeHBlcmllbmNlLFxyXG4gICAgICAgICAgICB9ID0gZ2V0TWVzc2FnZUF0dHJpYnV0ZXMoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IHZhbHVlID0+IHBhcnNlSW50U2FmZSh2YWx1ZSwgMTApICogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb29yZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gcGFyc2VDb29yZGluYXRlcyh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJ5dHlwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb246IHZhbHVlID0+IHZhbHVlIGFzIE9nYW1lUmF3TGlmZWZvcm1EaXNjb3ZlcnlUeXBlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFydGlmYWN0c3NpemU6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiB2YWx1ZSA9PiB2YWx1ZSBhcyBPZ2FtZVJhd0FydGlmYWN0RmluZFNpemUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXJ0aWZhY3RzZm91bmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiB2YWx1ZSA9PiBwYXJzZUludFNhZmUodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpZmVmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gcGFyc2VJbnRTYWZlKHZhbHVlKSBhcyBPZ2FtZVJhd0xpZmVmb3JtVHlwZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaWZlZm9ybWdhaW5lZGV4cGVyaWVuY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uOiB2YWx1ZSA9PiBwYXJzZUludFNhZmUodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpZmVmb3JtYWxyZWFkeW93bmVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gdmFsdWUgPT0gJzEnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aHJvdygnTWVzc2FnZSB0aW1lc3RhbXAgaXMgTmFOJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlck1lc3NhZ2U6IFRyYWNrTGlmZWZvcm1EaXNjb3ZlcnlNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuVHJhY2tMaWZlZm9ybURpc2NvdmVyeSxcclxuICAgICAgICAgICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByYXdUeXBlID8/IE9nYW1lUmF3TGlmZWZvcm1EaXNjb3ZlcnlUeXBlLm5vbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWZhY3RzRm91bmQ6IHJhd0FydGlmYWN0c0Ftb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpZmFjdHNTaXplOiByYXdBcnRpZmFjdHNGaW5kU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBsaWZlZm9ybTogcmF3TGlmZWZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlmZWZvcm1FeHBlcmllbmNlOiByYXdMaWZlZm9ybUV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2Uod29ya2VyTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJrIG1lc3NhZ2UgYXMgXCJ3YWl0aW5nIGZvciByZXN1bHRcIlxyXG4gICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMubWVzc2FnZXMuYmFzZSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMubWVzc2FnZXMud2FpdGluZ1RvQmVQcm9jZXNzZWQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobXNnLCBgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItbG9hZGVyXCI+PC9kaXY+YCk7XHJcblxyXG4gICAgICAgICAgICB3YWl0aW5nRm9yTWVzc2FnZVJlc3VsdFtpZF0gPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZE1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdW5wcm9jZXNzZWRNZXNzYWdlcztcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCkge1xyXG4gICAgY29uc3QgZmFpbGVkID0gT2JqZWN0LmtleXMoZmFpbGVkVG9UcmFja01lc3NhZ2VzKS5sZW5ndGg7XHJcbiAgICBpZiAoZmFpbGVkID4gMCkge1xyXG4gICAgICAgIHNlbmRFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UoZmFpbGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaWZlZm9ybURpc2NvdmVyeUNvdW50ID0gT2JqZWN0LnZhbHVlcyh0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0LmV2ZW50cykucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLCAwKTtcclxuICAgIGlmIChsaWZlZm9ybURpc2NvdmVyeUNvdW50ID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG1zZzogTGlmZWZvcm1EaXNjb3ZlcnlUcmFja2luZ05vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbixcclxuICAgICAgICAgICAgb2dhbWVNZXRhOiBnZXRPZ2FtZU1ldGEoKSxcclxuICAgICAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5MaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBsaWZlZm9ybURpc2NvdmVyaWVzSWQsXHJcbiAgICAgICAgICAgICAgICAuLi50b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VuZE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEVycm9yTm90aWZpY2F0aW9uTWVzc2FnZShmYWlsZWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgbXNnOiBNZXNzYWdlVHJhY2tpbmdFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XHJcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxyXG4gICAgICAgIG9nYW1lTWV0YTogZ2V0T2dhbWVNZXRhKCksXHJcbiAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuTWVzc2FnZVRyYWNraW5nRXJyb3IsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogZXJyb3JJZCxcclxuICAgICAgICAgICAgY291bnQ6IGZhaWxlZCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q29udGVudChsaTogRWxlbWVudCwgbGlmZWZvcm1EaXNjb3Zlcnk6IExpZmVmb3JtRGlzY292ZXJ5RXZlbnQpIHtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5saWZlZm9ybURpc2NvdmVyeSk7XHJcblxyXG4gICAgY29uc3QgaHRtbCA9IGdldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q29udGVudEh0bWwobGlmZWZvcm1EaXNjb3ZlcnkpO1xyXG4gICAgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudChsaSwgaHRtbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q29udGVudEh0bWwobGlmZWZvcm1EaXNjb3Zlcnk6IExpZmVmb3JtRGlzY292ZXJ5RXZlbnQpIHtcclxuICAgIHN3aXRjaCAobGlmZWZvcm1EaXNjb3ZlcnkudHlwZSkge1xyXG4gICAgICAgIGNhc2UgTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubG9zdFNoaXA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q2xhc3MoTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubG9zdFNoaXApfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGkgbWRpLXNrdWxsLWNyb3NzYm9uZXMtb3V0bGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLm5vdGhpbmc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q2xhc3MoTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubm90aGluZyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kaSBtZGktY2xvc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZS5rbm93bkxpZmVmb3JtRm91bmQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q2xhc3MobGlmZWZvcm1EaXNjb3ZlcnkudHlwZSl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0TGlmZWZvcm1DbGFzcyhsaWZlZm9ybURpc2NvdmVyeS5saWZlZm9ybSl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj4rJHtsaWZlZm9ybURpc2NvdmVyeS5leHBlcmllbmNlfSBYUDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMaWZlZm9ybURpc2NvdmVyeUV2ZW50VHlwZS5uZXdMaWZlZm9ybUZvdW5kOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRMaWZlZm9ybURpc2NvdmVyeVJlc3VsdENsYXNzKGxpZmVmb3JtRGlzY292ZXJ5LnR5cGUpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uZXctYm94XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldExpZmVmb3JtQ2xhc3MobGlmZWZvcm1EaXNjb3ZlcnkubGlmZWZvcm0pfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmFydGlmYWN0czoge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Z2V0TGlmZWZvcm1EaXNjb3ZlcnlSZXN1bHRDbGFzcyhsaWZlZm9ybURpc2NvdmVyeS50eXBlLCBsaWZlZm9ybURpc2NvdmVyeS5zaXplKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRMaWZlZm9ybURpc2NvdmVyeU1pc3Npb25BcnRpZmFjdFNpemVJY29uQ2xhc3MobGlmZWZvcm1EaXNjb3Zlcnkuc2l6ZSl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGkgbWRpLXB5cmFtaWQke2xpZmVmb3JtRGlzY292ZXJ5LnNpemUgPT0gTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemUuc3RvcmFnZUZ1bGwgPyAnLW9mZicgOiAnJ31cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtsaWZlZm9ybURpc2NvdmVyeS5hcnRpZmFjdHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OiBfdGhyb3coJ3Vua25vd24gbGlmZWZvcm0gZGlzY292ZXJ5IHR5cGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlmZWZvcm1EaXNjb3ZlcnlSZXN1bHRDbGFzcyhyZXN1bHQ6IExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLCBzaXplPzogTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemUpIHtcclxuICAgIGNvbnN0IGNzc0NsYXNzID0gYG9nYW1lLXRyYWNrZXItbGlmZWZvcm0tZGlzY292ZXJ5LXJlc3VsdCBvZ2FtZS10cmFja2VyLWxpZmVmb3JtLWRpc2NvdmVyeS1yZXN1bHQtLSR7cmVzdWx0fWA7XHJcbiAgICBpZiAoc2l6ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtjc3NDbGFzc30gb2dhbWUtdHJhY2tlci1saWZlZm9ybS1kaXNjb3ZlcnktcmVzdWx0LS1hcnRpZmFjdHMtLXNpemUtJHtzaXplfWBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlmZWZvcm1EaXNjb3ZlcnlNaXNzaW9uQXJ0aWZhY3RTaXplSWNvbkNsYXNzKHNpemU6IExpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplKSB7XHJcbiAgICByZXR1cm4gJ29nYW1lLXRyYWNrZXItbGlmZWZvcm0tZGlzY292ZXJ5LXJlc3VsdC0tc2l6ZS1pY29uIG1kaSAnICsgKHtcclxuICAgICAgICBbTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemUuc21hbGxdOiAnbWRpLWhleGFnb24tc2xpY2UtMScsXHJcbiAgICAgICAgW0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplLm1lZGl1bV06ICdtZGktaGV4YWdvbi1zbGljZS0zJyxcclxuICAgICAgICBbTGlmZWZvcm1EaXNjb3ZlcnlFdmVudEFydGlmYWN0RmluZGluZ1NpemUubGFyZ2VdOiAnbWRpLWhleGFnb24tc2xpY2UtNScsXHJcbiAgICAgICAgW0xpZmVmb3JtRGlzY292ZXJ5RXZlbnRBcnRpZmFjdEZpbmRpbmdTaXplLnN0b3JhZ2VGdWxsXTogJ21kaS1oZXhhZ29uLW91dGxpbmUnLFxyXG4gICAgfVtzaXplXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpZmVmb3JtQ2xhc3MobGlmZWZvcm06IFZhbGlkTGlmZWZvcm1UeXBlKSB7XHJcbiAgICBjb25zdCBvZ2FtZUNsYXNzID0ge1xyXG4gICAgICAgIFtMaWZlZm9ybVR5cGUuaHVtYW5zXTogJ2xpZmVmb3JtLWl0ZW0taWNvbiBzbWFsbCBsaWZlZm9ybTEnLFxyXG4gICAgICAgIFtMaWZlZm9ybVR5cGUucm9ja3RhbF06ICdsaWZlZm9ybS1pdGVtLWljb24gc21hbGwgbGlmZWZvcm0yJyxcclxuICAgICAgICBbTGlmZWZvcm1UeXBlLm1lY2hhc106ICdsaWZlZm9ybS1pdGVtLWljb24gc21hbGwgbGlmZWZvcm0zJyxcclxuICAgICAgICBbTGlmZWZvcm1UeXBlLmthZWxlc2hdOiAnbGlmZWZvcm0taXRlbS1pY29uIHNtYWxsIGxpZmVmb3JtNCcsXHJcbiAgICB9W2xpZmVmb3JtXTtcclxuXHJcbiAgICByZXR1cm4gYCR7b2dhbWVDbGFzc30gb2dhbWUtdHJhY2tlcl9saWZlZm9ybS1pY29uIG9nYW1lLXRyYWNrZXJfbGlmZWZvcm0taWNvbi0tJHtsaWZlZm9ybX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaWZlZm9ybURpc2NvdmVyeVJlc3VsdHMobXNnOiBMaWZlZm9ybURpc2NvdmVyeU1lc3NhZ2UpIHtcclxuICAgIGRlbGV0ZSB3YWl0aW5nRm9yTWVzc2FnZVJlc3VsdFttc2cuZGF0YS5pZF07XHJcbiAgICB0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0LmV2ZW50c1ttc2cuZGF0YS50eXBlXSsrO1xyXG5cclxuICAgIHN3aXRjaCAobXNnLmRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUubmV3TGlmZWZvcm1Gb3VuZDoge1xyXG4gICAgICAgICAgICB0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Lm5ld0xpZmVmb3Jtcy5wdXNoKG1zZy5kYXRhLmxpZmVmb3JtKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmtub3duTGlmZWZvcm1Gb3VuZDoge1xyXG4gICAgICAgICAgICB0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0LmxpZmVmb3JtRXhwZXJpZW5jZVttc2cuZGF0YS5saWZlZm9ybV0gKz0gbXNnLmRhdGEuZXhwZXJpZW5jZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExpZmVmb3JtRGlzY292ZXJ5RXZlbnRUeXBlLmFydGlmYWN0czoge1xyXG4gICAgICAgICAgICB0b3RhbExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0LmFydGlmYWN0cyArPSBtc2cuZGF0YS5hcnRpZmFjdHM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbiAgICBzZW5kTm90aWZpY2F0aW9uTWVzc2FnZXMoKTtcclxufSIsImV4cG9ydCBlbnVtIExhbmd1YWdlS2V5IHtcclxuICAgIC8vVE9ETzogYnMgPSAnYnMnLCAvLyBib3NuaWFuXHJcbiAgICAvKiogQ3plY2ggKi9cclxuICAgIGNzID0gJ2NzJyxcclxuICAgIC8qKiBHZXJtYW4gKi9cclxuICAgIGRlID0gJ2RlJyxcclxuICAgIC8qKiBEYW5pc2ggKi9cclxuICAgIGRhID0gJ2RhJyxcclxuICAgIC8qKiBHcmVlayAqL1xyXG4gICAgZWwgPSAnZWwnLFxyXG4gICAgLyoqIEVuZ2xpc2ggKi9cclxuICAgIGVuID0gJ2VuJywgXHJcbiAgICAvKiogU3BhbmlzaCAoU3BhaW4pICovXHJcbiAgICAnZXMtZXMnID0gJ2VzLWVzJywgXHJcbiAgICAvKiogU3BhbmlzaCAoQXJnZW50aW5hKSAqL1xyXG4gICAgJ2VzLWFyJyA9ICdlcy1hcicsIFxyXG4gICAgLyoqIFNwYW5pc2ggKE1leGljbykgKi9cclxuICAgICdlcy1teCcgPSAnZXMtbXgnLCBcclxuICAgIC8vVE9ETzogZmkgPSAnZmknIC8vIGZpbm5pc2hcclxuICAgIC8qKiBGcmVuY2ggKi9cclxuICAgIGZyID0gJ2ZyJyxcclxuICAgIC8qKiBDcm9hdGlhbiAqL1xyXG4gICAgaHIgPSAnaHInLCBcclxuICAgIC8qKiBIdW5nYXJpYW4gKi9cclxuICAgIGh1ID0gJ2h1JywgXHJcbiAgICAvKiogSXRhbGlhbiAqL1xyXG4gICAgaXQgPSAnaXQnLCBcclxuICAgIC8vVE9ETzogamEgPSAnamEnLCAvLyBqYXBhbmVzZVxyXG4gICAgbmwgPSAnbmwnLCAvLyBkdXRjaFxyXG4gICAgLyoqIFBvbGlzaCAqL1xyXG4gICAgcGwgPSAncGwnLFxyXG4gICAgLyoqIFBvcnR1Z3Vlc2UgKEJyYXNpbCkgKi8gXHJcbiAgICAncHQtYnInID0gJ3B0LWJyJywgXHJcbiAgICAvKiogUG9ydHVndWVzZSAoUG9ydHVnYWwpICovXHJcbiAgICAncHQtcHQnID0gJ3B0LXB0JyxcclxuICAgIHJvID0gJ3JvJywgLy8gcm9tYW5pYW5cclxuICAgIHJ1ID0gJ3J1JywgLy8gcnVzc2lhblxyXG4gICAgLyoqIFNsb3ZlbmlhbiAqL1xyXG4gICAgc2wgPSAnc2wnLCBcclxuICAgIC8vVE9ETzogc2sgPSAnc2snLCAvLyBzbG92YWtpYW5cclxuICAgIC8vVE9ETzogc3YgPSAnc3YnLCAvLyBzd2VkaXNoXHJcbiAgICB0ciA9ICd0cicsIC8vIHR1cmtpc2hcclxuICAgIC8qKiBDaGluZXNlIChUYWl3YW4pICovXHJcbiAgICAnemgtdHcnID0gJ3poLXR3JywgXHJcbn0iLCJpbXBvcnQgeyBfdGhyb3cgfSBmcm9tIFwiLi4vdXRpbHMvX3Rocm93XCI7XHJcbmltcG9ydCB7IExhbmd1YWdlS2V5IH0gZnJvbSBcIi4vTGFuZ3VhZ2VLZXlcIjtcclxuXHJcbi8qKiBtYXAgT0dhbWUgc2VydmVyIGxhbmd1YWdlIHRvIGludGVybmFsIGxhbmd1YWdlIGtleSAqL1xyXG5jb25zdCBsYW5ndWFnZU1hcDogUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBMYW5ndWFnZUtleT4+ID0ge1xyXG4gICAgYXI6IExhbmd1YWdlS2V5Wydlcy1hciddLFxyXG4gICAgYnI6IExhbmd1YWdlS2V5WydwdC1iciddLFxyXG4gICAgY3o6IExhbmd1YWdlS2V5LmNzLFxyXG4gICAgZGU6IExhbmd1YWdlS2V5LmRlLFxyXG4gICAgZGs6IExhbmd1YWdlS2V5LmRhLFxyXG4gICAgZW46IExhbmd1YWdlS2V5LmVuLFxyXG4gICAgZXM6IExhbmd1YWdlS2V5Wydlcy1lcyddLFxyXG4gICAgZnI6IExhbmd1YWdlS2V5LmZyLFxyXG4gICAgLy9UT0RPOiBmaSBmaW5uaXNoXHJcbiAgICBncjogTGFuZ3VhZ2VLZXkuZWwsXHJcbiAgICBocjogTGFuZ3VhZ2VLZXkuaHIsXHJcbiAgICBodTogTGFuZ3VhZ2VLZXkuaHUsXHJcbiAgICBpdDogTGFuZ3VhZ2VLZXkuaXQsXHJcbiAgICAvL1RPRE86IGpwIGphcGFuZXNlXHJcbiAgICBteDogTGFuZ3VhZ2VLZXlbJ2VzLW14J10sXHJcbiAgICBubDogTGFuZ3VhZ2VLZXkubmwsXHJcbiAgICBwbDogTGFuZ3VhZ2VLZXkucGwsXHJcbiAgICBwdDogTGFuZ3VhZ2VLZXlbJ3B0LXB0J10sXHJcbiAgICBybzogTGFuZ3VhZ2VLZXkucm8sXHJcbiAgICBydTogTGFuZ3VhZ2VLZXkucnUsXHJcbiAgICAvL1RPRE86IHNlIHN3ZWRpc2hcclxuICAgIHNpOiBMYW5ndWFnZUtleS5zbCxcclxuICAgIC8vVE9ETzogc2sgc2xvdmFraWFuXHJcbiAgICB0cjogTGFuZ3VhZ2VLZXkudHIsXHJcbiAgICB1czogTGFuZ3VhZ2VLZXkuZW4sXHJcbiAgICB0dzogTGFuZ3VhZ2VLZXlbJ3poLXR3J10sXHJcbiAgICAvL1RPRE8geXUgYm9zbmlhbiAod3RmIHdoeSBpcyBpdCBgeXVgIGZvciB5dWdvc2xhdmlhbj8pXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2Uoc2VydmVyTGFuZ3VhZ2U6IHN0cmluZywgdGhyb3dJZlVuc3VwcG9ydGVkOiBib29sZWFuKTogTGFuZ3VhZ2VLZXk7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZShzZXJ2ZXJMYW5ndWFnZTogc3RyaW5nKTogTGFuZ3VhZ2VLZXkgfCB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2Uoc2VydmVyTGFuZ3VhZ2U6IHN0cmluZywgdGhyb3dJZlVuc3VwcG9ydGVkID0gZmFsc2UpOiBMYW5ndWFnZUtleSB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCBsYW5nID0gbGFuZ3VhZ2VNYXBbc2VydmVyTGFuZ3VhZ2VdO1xyXG4gICAgaWYgKGxhbmcgPT0gbnVsbCAmJiB0aHJvd0lmVW5zdXBwb3J0ZWQpIHtcclxuICAgICAgICBfdGhyb3coYHVuc3VwcG9ydGVkIGxhbmd1YWdlICcke3NlcnZlckxhbmd1YWdlfSdgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYW5nO1xyXG59IiwiaW1wb3J0IHsgaXNTdXBwb3J0ZWRMYW5ndWFnZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaTE4bi9pc1N1cHBvcnRlZExhbmd1YWdlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VPZ2FtZU1ldGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VUeXBlXCI7XHJcbmltcG9ydCB7IENvbWJhdFJlcG9ydE1lc3NhZ2UsIENvbWJhdFJlcG9ydFVua25vd25NZXNzYWdlLCBSZXF1ZXN0U2luZ2xlQ29tYmF0UmVwb3J0TWVzc2FnZSwgVHJhY2tDb21iYXRSZXBvcnRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlcy90cmFja2luZy9jb21iYXQtcmVwb3J0c1wiO1xyXG5pbXBvcnQgeyBPZ2FtZUNvbWJhdFJlcG9ydCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL29nYW1lL2NvbWJhdHMvT2dhbWVDb21iYXRSZXBvcnRcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvb2dhbWUvcmVzb3VyY2VzL1Jlc291cmNlVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRPZ2FtZU1ldGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29nYW1lLXdlYi9nZXRPZ2FtZU1ldGFcIjtcclxuaW1wb3J0IHsgX2xvZ0RlYnVnLCBfbG9nV2FybmluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvX2xvZ1wiO1xyXG5pbXBvcnQgeyBfdGhyb3cgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL190aHJvd1wiO1xyXG5pbXBvcnQgeyBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50LCBjc3NDbGFzc2VzLCBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBvZ2FtZU1ldGFzRXF1YWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvb2dhbWUtd2ViL29nYW1lTWV0YXNFcXVhbCc7XHJcbmltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSBcIkAvc2hhcmVkL2NvbW11bmljYXRpb24vc2VuZE1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgQ29tYmF0UmVwb3J0IH0gZnJvbSBcIkAvc2hhcmVkL21vZGVscy9jb21iYXQtcmVwb3J0cy9Db21iYXRSZXBvcnRcIjtcclxuaW1wb3J0IHsgbWVzc2FnZVRyYWNraW5nVXVpZCB9IGZyb20gXCJAL3NoYXJlZC91dWlkXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUcmFja2luZ0Vycm9yTWVzc2FnZSwgV2lsbE5vdEJlVHJhY2tlZE1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvdHJhY2tpbmcvbWlzY1wiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IENvbWJhdFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSwgQ29tYmF0VHJhY2tpbmdOb3RpZmljYXRpb25NZXNzYWdlRGF0YSwgTWVzc2FnZVRyYWNraW5nRXJyb3JOb3RpZmljYXRpb25NZXNzYWdlLCBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIkAvc2hhcmVkL21lc3NhZ2VzL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdNZXNzYWdlVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdNZXNzYWdlVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRNZXNzYWdlQXR0cmlidXRlcyB9IGZyb20gXCJAL3NoYXJlZC91dGlscy9nZXRNZXNzYWdlQXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUludFNhZmUgfSBmcm9tIFwiQC9zaGFyZWQvdXRpbHMvcGFyc2VOdW1iZXJzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlY29yZCB9IGZyb20gXCJAL3NoYXJlZC91dGlscy9jcmVhdGVSZWNvcmRcIjtcclxuaW1wb3J0IHsgU2hpcFR5cGVzIH0gZnJvbSBcIkAvc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9TaGlwVHlwZXNcIjtcclxuaW1wb3J0IHsgU2hpcFR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL1NoaXBUeXBlXCI7XHJcbmltcG9ydCB7IFBsYW5ldFR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL29nYW1lL2NvbW1vbi9QbGFuZXRUeXBlXCI7XHJcblxyXG5jb25zdCBub3RpZmljYXRpb25JZHMgPSB7XHJcbiAgICByZXN1bHQ6IHY0KCksXHJcbiAgICBlcnJvcjogdjQoKSxcclxufTtcclxuY29uc3Qgd2FpdGluZ0ZvckNvbWJhdHM6IFJlY29yZDxudW1iZXIsIHRydWU+ID0ge307XHJcblxyXG5jb25zdCBmYWlsZWRUb1RyYWNrQ29tYmF0czogUmVjb3JkPG51bWJlciwgdHJ1ZT4gPSB7fTtcclxuY29uc3QgY29tYmF0VHJhY2tpbmdSZXN1bHQ6IENvbWJhdFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZURhdGEgPSB7XHJcbiAgICBjb3VudDogMCxcclxuICAgIHJlc291cmNlczoge1xyXG4gICAgICAgIG1ldGFsOiAwLFxyXG4gICAgICAgIGNyeXN0YWw6IDAsXHJcbiAgICAgICAgZGV1dGVyaXVtOiAwLFxyXG4gICAgfSxcclxufTtcclxuY29uc3Qgc2hvdWxkVHJhY2tSZXNvbHZlcnM6IFJlY29yZDxudW1iZXIsICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZD4gPSB7fTtcclxuXHJcbmNvbnN0IG1heFJldHJpZXMgPSA1O1xyXG5jb25zdCByZXRyeUNvbWJhdHM6IHsgaWQ6IG51bWJlcjsgZGF0ZTogbnVtYmVyOyBhdHRlbXB0OiBudW1iZXI7IG1zZzogRWxlbWVudCB9W10gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNlbmROb3RpZmljYXRpb25NZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGZhaWxlZCA9IE9iamVjdC5rZXlzKGZhaWxlZFRvVHJhY2tDb21iYXRzKS5sZW5ndGg7XHJcbiAgICBpZiAoZmFpbGVkID4gMCkge1xyXG4gICAgICAgIHNlbmRFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UoZmFpbGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29tYmF0VHJhY2tpbmdSZXN1bHQuY291bnQgPT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtc2c6IENvbWJhdFRyYWNraW5nTm90aWZpY2F0aW9uTWVzc2FnZSA9IHtcclxuICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24sXHJcbiAgICAgICAgb2dhbWVNZXRhOiBnZXRPZ2FtZU1ldGEoKSxcclxuICAgICAgICBzZW5kZXJVdWlkOiBtZXNzYWdlVHJhY2tpbmdVdWlkLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Db21iYXRUcmFja2luZyxcclxuICAgICAgICAgICAgbWVzc2FnZUlkOiBub3RpZmljYXRpb25JZHMucmVzdWx0LFxyXG4gICAgICAgICAgICAuLi5jb21iYXRUcmFja2luZ1Jlc3VsdCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UoZmFpbGVkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1zZzogTWVzc2FnZVRyYWNraW5nRXJyb3JOb3RpZmljYXRpb25NZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbixcclxuICAgICAgICBvZ2FtZU1ldGE6IGdldE9nYW1lTWV0YSgpLFxyXG4gICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk1lc3NhZ2VUcmFja2luZ0Vycm9yLFxyXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IG5vdGlmaWNhdGlvbklkcy5lcnJvcixcclxuICAgICAgICAgICAgY291bnQ6IGZhaWxlZCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VUeXBlLCBhbnk+KSB7XHJcbiAgICBjb25zdCBvZ2FtZU1ldGEgPSBnZXRPZ2FtZU1ldGEoKTtcclxuICAgIGlmICghb2dhbWVNZXRhc0VxdWFsKG9nYW1lTWV0YSwgbWVzc2FnZS5vZ2FtZU1ldGEpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21iYXRSZXBvcnRVbmtub3duOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogaWQgfSA9IG1lc3NhZ2UgYXMgQ29tYmF0UmVwb3J0VW5rbm93bk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHNob3VsZFRyYWNrUmVzb2x2ZXJzW2lkXT8uKHRydWUpO1xyXG4gICAgICAgICAgICBkZWxldGUgc2hvdWxkVHJhY2tSZXNvbHZlcnNbaWRdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuV2lsbE5vdEJlVHJhY2tlZDoge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBtZXNzYWdlIGFzIFdpbGxOb3RCZVRyYWNrZWRNZXNzYWdlO1xyXG4gICAgICAgICAgICBpZiAobXNnLmRhdGEudHlwZSAhPSAnY29tYmF0LXJlcG9ydCcpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3VsZFRyYWNrUmVzb2x2ZXJzW21zZy5kYXRhLmlkXT8uKGZhbHNlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHNob3VsZFRyYWNrUmVzb2x2ZXJzW21zZy5kYXRhLmlkXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1zZ1tkYXRhLW1zZy1pZD1cIiR7bXNnLmRhdGEuaWR9XCJdYCkgPz8gX3Rocm93KGBmYWlsZWQgdG8gZmluZCBjb21iYXQgcmVwb3J0IHdpdGggaWQgJyR7bXNnLmRhdGEuaWR9J2ApO1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMubWVzc2FnZXMuY29tYmF0UmVwb3J0KTtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLnByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobGksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nRm9yQ29tYmF0c1ttc2cuZGF0YS5pZF07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21iYXRSZXBvcnQ6XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5OZXdDb21iYXRSZXBvcnQ6IHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gbWVzc2FnZSBhcyBDb21iYXRSZXBvcnRNZXNzYWdlO1xyXG4gICAgICAgICAgICBjb25zdCBjb21iYXRSZXBvcnQgPSBtc2cuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNob3VsZFRyYWNrUmVzb2x2ZXJzW2NvbWJhdFJlcG9ydC5pZF0/LihmYWxzZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaG91bGRUcmFja1Jlc29sdmVyc1tjb21iYXRSZXBvcnQuaWRdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubXNnW2RhdGEtbXNnLWlkPVwiJHttc2cuZGF0YS5pZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIGNvbWJhdCByZXBvcnQgd2l0aCBpZCAnJHttc2cuZGF0YS5pZH0nYCk7XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5jb21iYXRSZXBvcnQpO1xyXG5cclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc2VzLm1lc3NhZ2VzLndhaXRpbmdUb0JlUHJvY2Vzc2VkKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLnByb2Nlc3NlZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaHRtbCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoY29tYmF0UmVwb3J0Lmxvb3QpLnNvbWUoYW1vdW50ID0+IGFtb3VudCAhPSAwKSkge1xyXG4gICAgICAgICAgICAgICAgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1jb21iYXQtcmVwb3J0LS1sb290LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7W1Jlc291cmNlVHlwZS5tZXRhbCwgUmVzb3VyY2VUeXBlLmNyeXN0YWwsIFJlc291cmNlVHlwZS5kZXV0ZXJpdW1dLm1hcChyZXNvdXJjZSA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1yZXNvdXJjZSAke3Jlc291cmNlfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y29tYmF0UmVwb3J0Lmxvb3RbcmVzb3VyY2VdIDwgMFxyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovID8gJ29nYW1lLXRyYWNrZXItY29tYmF0LXJlcG9ydC0tbmVnYXRpdmUtbG9vdCdcclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqLyA6IGNvbWJhdFJlcG9ydC5sb290W3Jlc291cmNlXSA9PSAwXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovID8gJ29nYW1lLXRyYWNrZXItY29tYmF0LXJlcG9ydC0tbm8tbG9vdCdcclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi8gOiAnJ1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXROdW1iZXIoY29tYmF0UmVwb3J0Lmxvb3RbcmVzb3VyY2VdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb21iYXRSZXBvcnQuZGVicmlzRmllbGQubWV0YWwgPiAwIHx8IGNvbWJhdFJlcG9ydC5kZWJyaXNGaWVsZC5jcnlzdGFsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9nYW1lLXRyYWNrZXItY29tYmF0LXJlcG9ydC0tZGVicmlzLWZpZWxkLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2d0aSBvZ3RpLWRlYnJpcy1maWVsZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoW1Jlc291cmNlVHlwZS5tZXRhbCwgUmVzb3VyY2VUeXBlLmNyeXN0YWwsIFJlc291cmNlVHlwZS5kZXV0ZXJpdW1dIGFzIChrZXlvZiBDb21iYXRSZXBvcnRbJ2RlYnJpc0ZpZWxkJ10pW10pLm1hcChyZXNvdXJjZSA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1yZXNvdXJjZSAke3Jlc291cmNlfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7KGNvbWJhdFJlcG9ydC5kZWJyaXNGaWVsZFtyZXNvdXJjZV0gPz8gMCkgPT0gMFxyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovID8gJ29nYW1lLXRyYWNrZXItY29tYmF0LXJlcG9ydC0tbm8tbG9vdCdcclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqLyA6ICcnXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdE51bWJlcihjb21iYXRSZXBvcnQuZGVicmlzRmllbGRbcmVzb3VyY2VdID8/IDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGApLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3V0ZXJIdG1sID0gYDxkaXYgY2xhc3M9XCJvZ2FtZS10cmFja2VyLWNvbWJhdC1yZXBvcnRcIj4ke2h0bWwgPT0gJycgPyAnLScgOiBodG1sfTwvZGl2PmA7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobGksIG91dGVySHRtbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09IE1lc3NhZ2VUeXBlLk5ld0NvbWJhdFJlcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29tYmF0UmVzdWx0cyhtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5UcmFja2luZ0Vycm9yOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgaWQgfSA9IChtZXNzYWdlIGFzIE1lc3NhZ2VUcmFja2luZ0Vycm9yTWVzc2FnZSkuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT0gJ2NvbWJhdC1yZXBvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubXNnW2RhdGEtbXNnLWlkPVwiJHtpZH1cIl1gKSA/PyBfdGhyb3coYGZhaWxlZCB0byBmaW5kIGNvbWJhdCByZXBvcnQgbWVzc2FnZSB3aXRoIGlkICcke2lkfSdgKTtcclxuXHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCk7XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5lcnJvcik7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobGksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nRm9yQ29tYmF0c1tpZF07XHJcbiAgICAgICAgICAgIGZhaWxlZFRvVHJhY2tDb21iYXRzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbmROb3RpZmljYXRpb25NZXNzYWdlcygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb21iYXRUcmFja2luZyA9IHtcclxuICAgIG9uTWVzc2FnZSxcclxuICAgIG1lc3NhZ2VUeXBlOiBPZ2FtZVJhd01lc3NhZ2VUeXBlLmNvbWJhdFJlcG9ydCxcclxuICAgIHRyYWNrOiB0cmFja0NvbWJhdFJlcG9ydHMsXHJcbiAgICBvbkluaXQ6ICgpID0+IHJldHJ5TG9hZENvbWJhdHMoKSxcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdHJhY2tDb21iYXRSZXBvcnRzKG1zZ3M6IEVsZW1lbnRbXSkge1xyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBtc2dzLmZpbHRlcihlbGVtID0+IGVsZW0ucXVlcnlTZWxlY3RvcignLm1zZ19hY3Rpb25zIGEudHh0X2xpbmsnKSAhPSBudWxsKTsgLy8gaWdub3JlIGNvbWJhdCByZXBvcnRzIG9mIGludGVyZ2FsYWN0aWMgbWlzc2lsZXMgb3IgMS1yb3VuZCBjb21iYXRzIHdpdGhvdXQgcHJvcGVyIHJlcG9ydFxyXG5cclxuICAgIC8vIGFkZCBiYXNlIGNzcyBjbGFzcyB0byBwcmV2ZW50IG11bHRpcGxlIGxvYWRzIG9mIHRoZSBzYW1lIGNvbWJhdCByZXBvcnQgXHJcbiAgICBtZXNzYWdlcy5mb3JFYWNoKG1zZyA9PiBtc2cuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLm1lc3NhZ2VzLmJhc2UpKTtcclxuXHJcbiAgICBjb25zdCBvZ2FtZU1ldGEgPSBnZXRPZ2FtZU1ldGEoKTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gbWVzc2FnZXMubWFwKGFzeW5jIG1zZyA9PiBhd2FpdCBsb2FkQ29tYmF0UmVwb3J0KG1zZywgb2dhbWVNZXRhKSk7XHJcblxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29tYmF0UmVwb3J0KG1zZzogRWxlbWVudCwgb2dhbWVNZXRhOiBNZXNzYWdlT2dhbWVNZXRhLCBhdHRlbXB0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KG1zZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnLWlkJykgPz8gX3Rocm93KCdDYW5ub3QgZmluZCBtZXNzYWdlIGlkJykpOyAvLyBubyBwYXJzZVNhZmUgYmVjYXVzZSB3ZSB3YW50IHRvIGVycm9yIGluIHRoZSB0cnktY2F0Y2ggYmxvY2tcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHByZXBhcmUgbWVzc2FnZSB0byBzZXJ2aWNlIHdvcmtlclxyXG4gICAgICAgIGlmIChpc05hTihpZCkpIHtcclxuICAgICAgICAgICAgX3Rocm93KCdNZXNzYWdlIGlkIGlzIE5hTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvdWxkVHJhY2sgPSBhd2FpdCBzaG91bGRUcmFja0NvbWJhdFJlcG9ydChpZCwgb2dhbWVNZXRhKTtcclxuICAgICAgICBpZiAoIXNob3VsZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1hcmsgbWVzc2FnZSBhcyBcIndhaXRpbmcgZm9yIHJlc3VsdFwiXHJcbiAgICAgICAgbXNnLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy53YWl0aW5nVG9CZVByb2Nlc3NlZCk7XHJcbiAgICAgICAgYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudChtc2csIGA8ZGl2IGNsYXNzPVwib2dhbWUtdHJhY2tlci1sb2FkZXJcIj48L2Rpdj5gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXNnLnF1ZXJ5U2VsZWN0b3IoJy5yYXdNZXNzYWdlRGF0YScpID8/IF90aHJvdyhgQ2Fubm90IGZpbmQgcmF3TWVzc2FnZURhdGEgZWxlbWVudGApO1xyXG4gICAgICAgIGNvbnN0IHsgdGltZXN0YW1wOiBkYXRlIH0gPSBnZXRNZXNzYWdlQXR0cmlidXRlcyhlbGVtZW50LCB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udmVyc2lvbjogdmFsdWUgPT4gcGFyc2VJbnRTYWZlKHZhbHVlLCAxMCkgKiAxMDAwLCBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIGlmIChpc05hTihkYXRlKSkge1xyXG4gICAgICAgICAgICBfdGhyb3coJ01lc3NhZ2UgdGltZXN0YW1wIGlzIE5hTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb2dhbWVDb21iYXRSZXBvcnQgPSBwYXJzZUNvbWJhdFJlcG9ydERhdGEoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIHNraXAgaWYgaXMgZXhwZWRpdGlvbiBmaWdodCBhbmQgdGhlIGxhbmd1YWdlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICBpZiAob2dhbWVDb21iYXRSZXBvcnQuaXNFeHBlZGl0aW9uICYmICFpc1N1cHBvcnRlZExhbmd1YWdlKG9nYW1lTWV0YS51c2VyTGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgIGFkZE9yU2V0Q3VzdG9tTWVzc2FnZUNvbnRlbnQobXNnLCBgPHNwYW4gY2xhc3M9XCJtZGkgbWRpLWFsZXJ0XCIgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7XCI+PC9zcGFuPmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZW5kIG1lc3NhZ2UgdG8gc2VydmljZSB3b3JrZXJcclxuICAgICAgICBjb25zdCB3b3JrZXJNZXNzYWdlOiBUcmFja0NvbWJhdFJlcG9ydE1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlRyYWNrQ29tYmF0UmVwb3J0LFxyXG4gICAgICAgICAgICBvZ2FtZU1ldGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgIG9nYW1lQ29tYmF0UmVwb3J0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kZXJVdWlkOiBtZXNzYWdlVHJhY2tpbmdVdWlkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VuZE1lc3NhZ2Uod29ya2VyTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHdhaXRpbmdGb3JDb21iYXRzW2lkXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHJcbiAgICAgICAgbXNnLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5iYXNlLCBjc3NDbGFzc2VzLm1lc3NhZ2VzLmVycm9yKTtcclxuICAgICAgICBhZGRPclNldEN1c3RvbU1lc3NhZ2VDb250ZW50KG1zZywgZmFsc2UpO1xyXG5cclxuICAgICAgICBkZWxldGUgd2FpdGluZ0ZvckNvbWJhdHNbaWRdO1xyXG4gICAgICAgIGZhaWxlZFRvVHJhY2tDb21iYXRzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgc2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29tYmF0UmVwb3J0RGF0YShlbGVtZW50OiBFbGVtZW50KTogT2dhbWVDb21iYXRSZXBvcnQgeyBcclxuICAgIGNvbnN0IHsgcGxheWVySWQgfSA9IGdldE9nYW1lTWV0YSgpO1xyXG5cclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgZGVmZW5kZXJzcGFjZW9iamVjdDogcmF3RGVmZW5kZXJJbmZvLFxyXG4gICAgICAgIGNvbWJhdHJvdW5kczogcmF3Q29tYmF0Um91bmRzLFxyXG4gICAgICAgIHJlc3VsdDogcmF3UmVzdWx0LFxyXG4gICAgICAgIGZsZWV0czogcmF3RmxlZXRzLFxyXG4gICAgIH0gPSBnZXRNZXNzYWdlQXR0cmlidXRlcyhlbGVtZW50LCB7XHJcbiAgICAgICAgZGVmZW5kZXJzcGFjZW9iamVjdDoge1xyXG4gICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnZlcnNpb246IGpzb24gPT4gSlNPTi5wYXJzZShqc29uKSwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXN1bHQ6IHtcclxuICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb252ZXJzaW9uOiBqc29uID0+IEpTT04ucGFyc2UoanNvbiksIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tYmF0cm91bmRzOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udmVyc2lvbjoganNvbiA9PiBKU09OLnBhcnNlKGpzb24pLCBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZsZWV0czoge1xyXG4gICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnZlcnNpb246IGpzb24gPT4gSlNPTi5wYXJzZShqc29uKSwgXHJcbiAgICAgICAgfSxcclxuICAgIH0pOyBcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGbGVldHMgPSByYXdGbGVldHMuZmlsdGVyKChmOiBhbnkpID0+IGYucGxheWVyPy5pZCA9PSBwbGF5ZXJJZCk7XHJcbiAgICBjb25zdCBsYXN0Q29tYmF0Um91bmQgPSByYXdDb21iYXRSb3VuZHNbcmF3Q29tYmF0Um91bmRzLmxlbmd0aCAtIDFdID8/IHsgZmxlZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZsZWV0SWRzID0gcGxheWVyRmxlZXRzLm1hcCgoZjogYW55KSA9PiBmLmZsZWV0SWQpO1xyXG4gICAgY29uc3QgcGxheWVyTG9zc2VzUGVyRmxlZXQ6IFJlY29yZDxTaGlwVHlwZSwgbnVtYmVyPltdID0gbGFzdENvbWJhdFJvdW5kLmZsZWV0c1xyXG4gICAgICAgIC5maWx0ZXIoKGY6IGFueSkgPT4gcGxheWVyRmxlZXRJZHMuaW5jbHVkZXMoZi5mbGVldElkKSlcclxuICAgICAgICAubWFwKChmOiBhbnkpID0+IGNyZWF0ZVJlY29yZChTaGlwVHlwZXMsIChzaGlwOiBTaGlwVHlwZSkgPT4gZi50ZWNobm9sb2dpZXMuZmluZCgodDogYW55KSA9PiB0LnRlY2hub2xvZ3lJZCA9PSBzaGlwKT8uZGVzdHJveWVkVG90YWwgPz8gMCkpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckxvc3NlcyA9IGNyZWF0ZVJlY29yZChTaGlwVHlwZXMsIHNoaXAgPT4ge1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXJMb3NzZXNQZXJGbGVldFxyXG4gICAgICAgICAgICAubWFwKGZsZWV0ID0+IGZsZWV0W3NoaXBdKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGlzRXNwaW9uYWdlQ29tYmF0ID0gcmF3RmxlZXRzXHJcbiAgICAgICAgLmZpbHRlcigoZjogYW55KSA9PiBmLnNpZGUgPT0gJ2F0dGFja2VyJylcclxuICAgICAgICAuZXZlcnkoKGY6IGFueSkgPT4gZi5jb21iYXRUZWNobm9sb2dpZXMuZXZlcnkoKHQ6IGFueSkgPT4gdC50ZWNobm9sb2d5SWQgPT0gU2hpcFR5cGUuZXNwaW9uYWdlUHJvYmUpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpbm5lcjogcmF3UmVzdWx0Lndpbm5lcixcclxuICAgICAgICBpc093bmVyOiByYXdEZWZlbmRlckluZm8ub3duZXI/LmlkID09IHBsYXllcklkLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XHJcbiAgICAgICAgICAgIC4uLnJhd0RlZmVuZGVySW5mby5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgdHlwZTogcmF3RGVmZW5kZXJJbmZvLnR5cGUgPT0gJ3BsYW5ldCcgPyBQbGFuZXRUeXBlLnBsYW5ldCA6IFBsYW5ldFR5cGUubW9vbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzRXhwZWRpdGlvbjogcmF3RGVmZW5kZXJJbmZvLmNvb3JkaW5hdGVzLnBvc2l0aW9uID09IDE2LFxyXG5cclxuICAgICAgICBpc0VzcGlvbmFnZUNvbWJhdCxcclxuXHJcbiAgICAgICAgaXNBdHRhY2tlcjogcGxheWVyRmxlZXRzLnNvbWUoKGY6IGFueSkgPT4gZi5zaWRlID09ICdhdHRhY2tlcicpLFxyXG4gICAgICAgIGlzRGVmZW5kZXI6IHBsYXllckZsZWV0cy5zb21lKChmOiBhbnkpID0+IGYuc2lkZSA9PSAnZGVmZW5kZXInKSxcclxuXHJcbiAgICAgICAgbG9vdDoge1xyXG4gICAgICAgICAgICBtZXRhbDogcmF3UmVzdWx0Lmxvb3QucmVzb3VyY2VzLmZpbmQoKHI6IGFueSkgPT4gci5yZXNvdXJjZSA9PSAnbWV0YWwnKT8uYW1vdW50ID8/IDAsXHJcbiAgICAgICAgICAgIGNyeXN0YWw6IHJhd1Jlc3VsdC5sb290LnJlc291cmNlcy5maW5kKChyOiBhbnkpID0+IHIucmVzb3VyY2UgPT0gJ2NyeXN0YWwnKT8uYW1vdW50ID8/IDAsXHJcbiAgICAgICAgICAgIGRldXRlcml1bTogcmF3UmVzdWx0Lmxvb3QucmVzb3VyY2VzLmZpbmQoKHI6IGFueSkgPT4gci5yZXNvdXJjZSA9PSAnZGV1dGVyaXVtJyk/LmFtb3VudCA/PyAwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlYnJpczoge1xyXG4gICAgICAgICAgICBtZXRhbDogcmF3UmVzdWx0LmRlYnJpcy5yZXNvdXJjZXMuZmluZCgocjogYW55KSA9PiByLnJlc291cmNlID09ICdtZXRhbCcpPy50b3RhbCA/PyAwLFxyXG4gICAgICAgICAgICBjcnlzdGFsOiByYXdSZXN1bHQuZGVicmlzLnJlc291cmNlcy5maW5kKChyOiBhbnkpID0+IHIucmVzb3VyY2UgPT0gJ2NyeXN0YWwnKT8udG90YWwgPz8gMCxcclxuICAgICAgICAgICAgZGV1dGVyaXVtOiByYXdSZXN1bHQuZGVicmlzLnJlc291cmNlcy5maW5kKChyOiBhbnkpID0+IHIucmVzb3VyY2UgPT0gJ2RldXRlcml1bScpPy50b3RhbCA/PyAwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXllckxvc3NlcyxcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJldHJ5TG9hZENvbWJhdHMoKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHJldHJpZXMgPSByZXRyeUNvbWJhdHMuZmlsdGVyKHIgPT4gci5kYXRlIDw9IG5vdyk7XHJcbiAgICByZXRyaWVzLmZvckVhY2gociA9PiByZXRyeUNvbWJhdHMuc3BsaWNlKHJldHJ5Q29tYmF0cy5pbmRleE9mKHIpLCAxKSk7XHJcblxyXG4gICAgY29uc3Qgb2dhbWVNZXRhID0gZ2V0T2dhbWVNZXRhKCk7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IHJldHJpZXMubWFwKGFzeW5jIHJldHJ5ID0+IHtcclxuICAgICAgICBhd2FpdCBsb2FkQ29tYmF0UmVwb3J0KHJldHJ5Lm1zZywgb2dhbWVNZXRhLCByZXRyeS5hdHRlbXB0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IGF3YWl0IHJldHJ5TG9hZENvbWJhdHMoKSwgNTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVHJhY2tDb21iYXRSZXBvcnQoaWQ6IG51bWJlciwgb2dhbWVNZXRhOiBNZXNzYWdlT2dhbWVNZXRhKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgc2hvdWxkVHJhY2tSZXNvbHZlcnNbaWRdID0gcmVzb2x2ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ya2VyTWVzc2FnZTogUmVxdWVzdFNpbmdsZUNvbWJhdFJlcG9ydE1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlcXVlc3RTaW5nbGVDb21iYXRSZXBvcnQsXHJcbiAgICAgICAgICAgIG9nYW1lTWV0YSxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICAgIHNlbmRlclV1aWQ6IG1lc3NhZ2VUcmFja2luZ1V1aWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZW5kTWVzc2FnZSh3b3JrZXJNZXNzYWdlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29tYmF0UmVzdWx0cyhtc2c6IENvbWJhdFJlcG9ydE1lc3NhZ2UpIHtcclxuICAgIGRlbGV0ZSB3YWl0aW5nRm9yQ29tYmF0c1ttc2cuZGF0YS5pZF07XHJcbiAgICBjb21iYXRUcmFja2luZ1Jlc3VsdC5jb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHJlc291cmNlcyA9IG1zZy5kYXRhLmxvb3Q7XHJcbiAgICBbUmVzb3VyY2VUeXBlLm1ldGFsLCBSZXNvdXJjZVR5cGUuY3J5c3RhbCwgUmVzb3VyY2VUeXBlLmRldXRlcml1bV1cclxuICAgICAgICAuZm9yRWFjaChyZXNvdXJjZSA9PiBjb21iYXRUcmFja2luZ1Jlc3VsdC5yZXNvdXJjZXNbcmVzb3VyY2VdICs9IHJlc291cmNlc1tyZXNvdXJjZV0pO1xyXG5cclxuICAgIHNlbmROb3RpZmljYXRpb25NZXNzYWdlcygpO1xyXG59XHJcbiIsImltcG9ydCB7IGdldExhbmd1YWdlIH0gZnJvbSBcIi4vZ2V0TGFuZ3VhZ2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N1cHBvcnRlZExhbmd1YWdlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZ2V0TGFuZ3VhZ2Uoa2V5KSAhPSBudWxsO1xyXG59IiwiaW1wb3J0IHsgX3Rocm93IH0gZnJvbSBcIkAvc2hhcmVkL3V0aWxzL190aHJvd1wiO1xyXG5pbXBvcnQgeyBkZWJyaXNGaWVsZFRyYWNraW5nIH0gZnJvbSBcIi4vZGVicmlzLWZpZWxkLXJlcG9ydC10cmFja2luZ1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIkAvc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvTWVzc2FnZVR5cGVcIjtcclxuaW1wb3J0IHsgT2dhbWVSYXdNZXNzYWdlVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbWVzc2FnZXMvT2dhbWVSYXdNZXNzYWdlVHlwZVwiO1xyXG5pbXBvcnQgeyBwYXJzZUludFNhZmUgfSBmcm9tIFwiQC9zaGFyZWQvdXRpbHMvcGFyc2VOdW1iZXJzXCI7XHJcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBleHBlZGl0aW9uVHJhY2tpbmcgfSBmcm9tIFwiLi9leHBlZGl0aW9uLXRyYWNraW5nXCI7XHJcbmltcG9ydCB7IGxpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmcgfSBmcm9tIFwiLi9saWZlZm9ybS1kaXNjb3ZlcnktdHJhY2tpbmdcIjtcclxuaW1wb3J0IHsgY29tYmF0VHJhY2tpbmcgfSBmcm9tIFwiLi9jb21iYXQtcmVwb3J0LXRyYWNraW5nXCI7XHJcblxyXG50eXBlIFRyYWNraW5nID0ge1xyXG4gICAgb25NZXNzYWdlOiAobWVzc2FnZTogTWVzc2FnZTxNZXNzYWdlVHlwZSwgYW55PikgPT4gdm9pZDtcclxuICAgIG1lc3NhZ2VUeXBlOiBPZ2FtZVJhd01lc3NhZ2VUeXBlO1xyXG4gICAgdHJhY2s6IChtZXNzYWdlczogRWxlbWVudFtdKSA9PiB2b2lkO1xyXG4gICAgb25Jbml0PzogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IHRyYWNraW5nczogVHJhY2tpbmdbXSA9IFtcclxuICAgIGNvbWJhdFRyYWNraW5nLFxyXG4gICAgZGVicmlzRmllbGRUcmFja2luZyxcclxuICAgIGV4cGVkaXRpb25UcmFja2luZyxcclxuICAgIGxpZmVmb3JtRGlzY292ZXJ5VHJhY2tpbmcsXHJcbl07XHJcblxyXG5sZXQgcGFnZUNvbnRlbnRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lc3NhZ2VUcmFja2luZygpIHtcclxuICAgIHRyYWNraW5ncy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtZXNzYWdlID0+IHQub25NZXNzYWdlKG1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgdC5vbkluaXQ/LigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZUNvbnRlbnQgLmNvbnRlbnQnKSA/PyBfdGhyb3coJ0Nhbm5vdCBmaW5kIGNvbnRlbnQgZWxlbWVudCcpO1xyXG4gICAgY29uc3QgaW5pdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYWdlQ29udGVudEVsZW1lbnQ/LmlzQ29ubmVjdGVkICE9IHRydWUpIHtcclxuICAgICAgICAgICAgc2V0dXBPYnNlcnZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaW5pdE9ic2VydmVyLm9ic2VydmUoY29udGVudEVsZW0sIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cE9ic2VydmVyKCkge1xyXG4gICAgcGFnZUNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1lc3NhZ2VzSG9sZGVyYCk7XHJcbiAgICBjb25zdCB0YWJDb250ZW50RWxlbWVudCA9IHBhZ2VDb250ZW50RWxlbWVudCA/PyBfdGhyb3coJ0Nhbm5vdCBmaW5kIG1lc3NhZ2VzIGhvbGRlciBlbGVtZW50Jyk7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgdHJhY2tpbmdzLmZvckVhY2godCA9PiB0cmFja01lc3NhZ2VzKHQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFiQ29udGVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFja01lc3NhZ2VzKHRyYWNraW5nOiBUcmFja2luZykge1xyXG4gICAgLy8gb25seSB0cmFjayBtZXNzYWdlcyBmcm9tIHRoZSBcIkZsZWV0c1wiIHRhYiB0byBwcmV2ZW50IHRyYWNraW5nIHNoYXJlZCBtZXNzYWdlc1xyXG4gICAgY29uc3QgYWN0aXZlRmxlZXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlVGFiLm1hcmtlcltkYXRhLWNhdGVnb3J5LWlkPVwiMlwiXScpO1xyXG4gICAgaWYoYWN0aXZlRmxlZXRUYWIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm1zZ1tkYXRhLW1zZy1pZF0nKSlcclxuICAgICAgICAuZmlsdGVyKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IHBhcnNlSW50U2FmZShcclxuICAgICAgICAgICAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcignLnJhd01lc3NhZ2VEYXRhJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS1yYXctbWVzc2FnZXR5cGUnKSBcclxuICAgICAgICAgICAgICAgID8/ICctMScgLy8gZm9yIHNvbWUgcmVhc29uIG5vdCBhbGwgbWVzc2FnZXMgaGF2ZSBhIHR5cGUgYXR0cmlidXRlLCBlLmcuIGVzcGlvbmFnZSByZXBvcnRzLCBzbyB3ZSBmYWxsIGJhY2sgdG8gc29tZXRoaW5nIHVudXNlZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VUeXBlID09IHRyYWNraW5nLm1lc3NhZ2VUeXBlXHJcbiAgICAgICAgICAgICAgICAmJiAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5tZXNzYWdlcy5iYXNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB0cmFja2luZy50cmFjayhtZXNzYWdlcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRRdWVyeVBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL2dldFF1ZXJ5UGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJAL3NoYXJlZC9tb2RlbHMvc2V0dGluZ3MvU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFNldHRpbmdzTWVzc2FnZSwgU2V0dGluZ3NNZXNzYWdlIH0gZnJvbSBcIkAvc2hhcmVkL21lc3NhZ2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIkAvc2hhcmVkL21lc3NhZ2VzL01lc3NhZ2VUeXBlXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2VUcmFja2luZ1V1aWQgfSBmcm9tIFwiQC9zaGFyZWQvdXVpZFwiO1xyXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCJAL3NoYXJlZC9jb21tdW5pY2F0aW9uL3NlbmRNZXNzYWdlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiQC9zaGFyZWQvbWVzc2FnZXMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBnZXRPZ2FtZU1ldGEgfSBmcm9tIFwiQC9zaGFyZWQvb2dhbWUtd2ViL2dldE9nYW1lTWV0YVwiO1xyXG5pbXBvcnQgeyBpbml0TWVzc2FnZVRyYWNraW5nIH0gZnJvbSBcIi4vYmFzZS1tZXNzYWdlLXRyYWNraW5nXCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuY29uc3QgcXVlcnlQYXJhbXMgPSBnZXRRdWVyeVBhcmFtZXRlcnMobG9jYXRpb24uc2VhcmNoKTtcclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzV3JhcHBlciA9IHtcclxuICAgIHNldHRpbmdzOiB7fSBhcyBTZXR0aW5ncyxcclxufTtcclxuaWYgKHF1ZXJ5UGFyYW1zLnBhZ2U/LnRvTG93ZXJDYXNlKCkgPT0gJ2luZ2FtZScgJiYgcXVlcnlQYXJhbXMuY29tcG9uZW50Py50b0xvd2VyQ2FzZSgpID09ICdtZXNzYWdlcycpIHtcclxuICAgIGluaXQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IHNldHRpbmdzUHJvbWlzZSA9IGdldFNldHRpbmdzKCk7XHJcblxyXG4gICAgaW5pdE1lc3NhZ2VUcmFja2luZygpO1xyXG5cclxuICAgIHNldHRpbmdzV3JhcHBlci5zZXR0aW5ncyA9IGF3YWl0IHNldHRpbmdzUHJvbWlzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxTZXR0aW5ncz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFNldHRpbmdzPihyZXNvbHZlID0+IHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobXNnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1zZyBhcyBNZXNzYWdlO1xyXG4gICAgICAgICAgICBpZihtZXNzYWdlLnR5cGUgIT0gTWVzc2FnZVR5cGUuU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NNc2cgPSBtZXNzYWdlIGFzIFNldHRpbmdzTWVzc2FnZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShzZXR0aW5nc01zZy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE1lc3NhZ2U6IFJlcXVlc3RTZXR0aW5nc01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlcXVlc3RTZXR0aW5ncyxcclxuICAgICAgICAgICAgb2dhbWVNZXRhOiBnZXRPZ2FtZU1ldGEoKSxcclxuICAgICAgICAgICAgc2VuZGVyVXVpZDogbWVzc2FnZVRyYWNraW5nVXVpZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKHJlcXVlc3RNZXNzYWdlKTtcclxuICAgIH0pO1xyXG59IiwiLyoqIFJldHVybnMgYW4gb2JqZWN0IHdpdGgga2V5LXZhbHVlLXBhaXJzIHJlcHJlc2VudGluZyB0aGUgcGFpcnMgb2YgdGhlIHF1ZXJ5IHN0cmluZy5cclxuICogIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBvY2N1cmVuY2VzIG9mIHRoZSBzYW1lIGtleSwgdGhlIGxhc3QgdmFsdWUgd2lsbCBiZSBzZWxlY3RlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW1ldGVycyhxdWVyeTogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuXHJcbiAgICBpZiAocXVlcnkuc3RhcnRzV2l0aCgnPycpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkuc3BsaXQoJyYnKS5mb3JFYWNoKHBhaXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gcGFpci5zcGxpdCgnPScpO1xyXG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59Il0sIm5hbWVzIjpbIk1lc3NhZ2VUeXBlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1dWlkIiwiYnl0ZVRvSGV4IiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInN1YnN0ciIsImFyciIsIm9mZnNldCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiVHlwZUVycm9yIiwiZiIsInMiLCJ4IiwieSIsInoiLCJST1RMIiwibiIsInY1IiwibmFtZSIsInZlcnNpb24iLCJoYXNoZnVuYyIsImdlbmVyYXRlVVVJRCIsInZhbHVlIiwibmFtZXNwYWNlIiwiYnVmIiwic3RyIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJieXRlcyIsImNoYXJDb2RlQXQiLCJzdHJpbmdUb0J5dGVzIiwidiIsIlVpbnQ4QXJyYXkiLCJwYXJzZUludCIsInNsaWNlIiwic2V0IiwiZXJyIiwiRE5TIiwiVVJMIiwidjM1IiwiSyIsIkgiLCJtc2ciLCJBcnJheSIsImlzQXJyYXkiLCJsIiwiTiIsIk1hdGgiLCJjZWlsIiwiTSIsIl9pIiwiVWludDMyQXJyYXkiLCJqIiwicG93IiwiZmxvb3IiLCJfaTIiLCJXIiwidCIsIl90IiwiYSIsImIiLCJjIiwiZCIsImUiLCJfdDIiLCJUIiwibWVzc2FnZVRyYWNraW5nVXVpZCIsImlnbm9yZVN0dXBpZE1lc3NhZ2VQb3J0RXJyb3JzIiwibWVzc2FnZSIsImNocm9tZSIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJzb21lIiwiZXJyb3IiLCJpbmNsdWRlcyIsInNlbmRNZXNzYWdlIiwicGFyc2VJbnRTYWZlIiwidGV4dCIsInJhZGl4IiwiaXNOYU4iLCJFcnJvciIsIl90aHJvdyIsImRhdGEiLCJnZXRPZ2FtZU1ldGEiLCJ1c2VyTGFuZ3VhZ2UiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImZvckVhY2giLCJtYXAiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ0cmltIiwiZ2V0Q29va2llcyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiZ2V0VXNlckxhbmd1YWdlIiwic2VydmVyVGV4dFNwbGl0Iiwic2VydmVySWRUZXh0IiwicmVwbGFjZSIsImxhbmd1YWdlIiwidGVzdCIsInNlcnZlcklkIiwicGxheWVySWQiLCJnZXRNZXNzYWdlQXR0cmlidXRlcyIsImVsZW1lbnQiLCJjb252ZXJzaW9ucyIsInJhd0F0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiZXh0cmFjdGVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsInN0YXJ0c1dpdGgiLCJnZXRSYXdNZXNzYWdlQXR0cmlidXRlcyIsInJlc3VsdCIsImNvbnZlcnNpb24iLCJvcHRpb25hbCIsImVudHJpZXMiLCJyYXdWYWx1ZSIsImNzc0Jhc2UiLCJjc3NDbGFzc2VzIiwibWVzc2FnZXMiLCJiYXNlIiwicHJvY2Vzc2VkIiwid2FpdGluZ1RvQmVQcm9jZXNzZWQiLCJpZ25vcmVkIiwiaGlkZUNvbnRlbnQiLCJleHBlZGl0aW9uIiwibGlmZWZvcm1EaXNjb3ZlcnkiLCJkZWJyaXNGaWVsZFJlcG9ydCIsImNvbWJhdFJlcG9ydCIsImN1c3RvbU1lc3NhZ2VDb250ZW50IiwibG9hZGVyIiwiYWRkT3JTZXRDdXN0b21NZXNzYWdlQ29udGVudCIsIm1zZ0VsZW0iLCJodG1sQ29udGVudCIsIm5ld0NvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibXNnQ29udGVudCIsImluc2VydEJlZm9yZSIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZSIsImlubmVySFRNTCIsImZvcm1hdE51bWJlciIsIm51bWJlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJvZ2FtZU1ldGFzRXF1YWwiLCJpbmNsdWRlUGxheWVySWQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsInJuZyIsImNyeXB0byIsImJpbmQiLCJtc0NyeXB0byIsIm9wdGlvbnMiLCJybmRzIiwicmFuZG9tIiwiTm90aWZpY2F0aW9uVHlwZSIsIlJlc291cmNlVHlwZSIsIlJlc291cmNlVHlwZXMiLCJtZXRhbCIsImNyeXN0YWwiLCJkZXV0ZXJpdW0iLCJPZ2FtZVJhd01lc3NhZ2VUeXBlIiwiUGxhbmV0VHlwZSIsImNvb3Jkc1JlZ2V4IiwicGFyc2VDb29yZGluYXRlcyIsImNvb3JkcyIsInR5cGUiLCJwbGFuZXQiLCJtYXRjaCIsImdyb3VwcyIsImdhbGF4eSIsInN5c3RlbSIsInBvc2l0aW9uIiwibm90aWZpY2F0aW9uSWRzIiwid2FpdGluZ0ZvclJlcG9ydHMiLCJmYWlsZWRUb1RyYWNrUmVwb3J0IiwidG90YWxEZWJyaXNGaWVsZFJlc3VsdCIsImNvdW50IiwicmVzb3VyY2VzIiwic2VuZE5vdGlmaWNhdGlvbk1lc3NhZ2VzIiwiZmFpbGVkIiwia2V5cyIsIk5vdGlmaWNhdGlvbiIsIm9nYW1lTWV0YSIsInNlbmRlclV1aWQiLCJNZXNzYWdlVHJhY2tpbmdFcnJvciIsIm1lc3NhZ2VJZCIsInNlbmRFcnJvck5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJEZWJyaXNGaWVsZFJlcG9ydFRyYWNraW5nIiwiZGVicmlzRmllbGRUcmFja2luZyIsIm9uTWVzc2FnZSIsIkRlYnJpc0ZpZWxkUmVwb3J0IiwiTmV3RGVicmlzRmllbGRSZXBvcnQiLCJkaXYiLCJpZCIsInNldHRpbmdzV3JhcHBlciIsInNldHRpbmdzIiwibWVzc2FnZVRyYWNraW5nIiwic2hvd1NpbXBsaWZpZWRSZXN1bHRzIiwicmVzb3VyY2UiLCJ1cGRhdGVSZXBvcnRSZXN1bHRzIiwiVHJhY2tpbmdFcnJvciIsIm1lc3NhZ2VUeXBlIiwiZGVicmlzRmllbGRIYXJ2ZXN0UmVwb3J0IiwidHJhY2siLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwidGFyZ2V0Y29vcmRpbmF0ZXMiLCJyZWN5Y2xlZHJlc291cmNlcyIsInJlY3ljbGVkUmVzb3VyY2VzIiwiZGVicmlzRmllbGQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiVHJhY2tEZWJyaXNGaWVsZFJlcG9ydCIsImNvbnNvbGUiLCJfbG9nRXJyb3IiLCJTaGlwVHlwZSIsIkV4cGVkaXRpb25GaW5kYWJsZVNoaXBUeXBlcyIsImxpZ2h0RmlnaHRlciIsImhlYXZ5RmlnaHRlciIsImNydWlzZXIiLCJiYXR0bGVzaGlwIiwiYm9tYmVyIiwiYmF0dGxlY3J1aXNlciIsImRlc3Ryb3llciIsInJlYXBlciIsInBhdGhmaW5kZXIiLCJzbWFsbENhcmdvIiwibGFyZ2VDYXJnbyIsImVzcGlvbmFnZVByb2JlIiwiRXhwZWRpdGlvbkV2ZW50VHlwZSIsIkV4cGVkaXRpb25FdmVudFNpemUiLCJJdGVtSGFzaCIsIm5vdGhpbmciLCJmbGVldCIsImRlbGF5IiwiZWFybHkiLCJkYXJrTWF0dGVyIiwicGlyYXRlcyIsImFsaWVucyIsImNvbWJhdCIsIml0ZW0iLCJ0cmFkZXIiLCJsb3N0RmxlZXQiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwiX0l0ZW1IYXNoZXMiLCJkaXNjb3ZlcmVyIiwiZGlzY292ZXJlcl9wdHMiLCJjb2xsZWN0b3IiLCJjb2xsZWN0b3JfcHRzIiwiZ2VuZXJhbCIsImdlbmVyYWxfcHRzIiwicmVzZWFyY2hlciIsInJlc2VhcmNoZXJfcHRzIiwidHJhZGVyX3B0cyIsIndhcnJpb3IiLCJ3YXJyaW9yX3B0cyIsIm1ldGFsQm9vc3Rlcl9icm9uemVfMWRheSIsIm1ldGFsQm9vc3Rlcl9icm9uemVfN2RheXMiLCJtZXRhbEJvb3N0ZXJfYnJvbnplXzMwZGF5c19wdHMiLCJtZXRhbEJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHMiLCJtZXRhbEJvb3N0ZXJfc2lsdmVyXzdkYXlzIiwibWV0YWxCb29zdGVyX3NpbHZlcl8zMGRheXMiLCJtZXRhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHMiLCJtZXRhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyIsIm1ldGFsQm9vc3Rlcl9zaWx2ZXJfOTBkYXlzX3B0cyIsIm1ldGFsQm9vc3Rlcl9nb2xkXzdkYXlzIiwibWV0YWxCb29zdGVyX2dvbGRfMzBkYXlzIiwibWV0YWxCb29zdGVyX2dvbGRfMzBkYXlzX3B0cyIsIm1ldGFsQm9vc3Rlcl9nb2xkXzkwZGF5cyIsIm1ldGFsQm9vc3Rlcl9nb2xkXzkwZGF5c19wdHMiLCJtZXRhbEJvb3N0ZXJfcGxhdGludW1fN2RheXMiLCJtZXRhbEJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzIiwibWV0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5cyIsIm1ldGFsQm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzIiwibWV0YWxCb29zdGVyX3BsYXRpbnVtXzkwZGF5cyIsIm1ldGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzIiwiY3J5c3RhbEJvb3N0ZXJfYnJvbnplXzFkYXkiLCJjcnlzdGFsQm9vc3Rlcl9icm9uemVfN2RheXMiLCJjcnlzdGFsQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyIsImNyeXN0YWxCb29zdGVyX2Jyb256ZV85MGRheXNfcHRzIiwiY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzdkYXlzIiwiY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzMwZGF5cyIsImNyeXN0YWxCb29zdGVyX3NpbHZlcl8zMGRheXNfcHRzIiwiY3J5c3RhbEJvb3N0ZXJfc2lsdmVyXzkwZGF5cyIsImNyeXN0YWxCb29zdGVyX3NpbHZlcl85MGRheXNfcHRzIiwiY3J5c3RhbEJvb3N0ZXJfZ29sZF83ZGF5cyIsImNyeXN0YWxCb29zdGVyX2dvbGRfMzBkYXlzIiwiY3J5c3RhbEJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzIiwiY3J5c3RhbEJvb3N0ZXJfZ29sZF85MGRheXMiLCJjcnlzdGFsQm9vc3Rlcl9nb2xkXzkwZGF5c19wdHMiLCJjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV83ZGF5cyIsImNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0cyIsImNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5cyIsImNyeXN0YWxCb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHMiLCJjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXMiLCJjcnlzdGFsQm9vc3Rlcl9wbGF0aW51bV85MGRheXNfcHRzIiwiZGV1dGVyaXVtQm9vc3Rlcl9icm9uemVfMWRheSIsImRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzdkYXlzIiwiZGV1dGVyaXVtQm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyIsImRldXRlcml1bUJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHMiLCJkZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl83ZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzMwZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHMiLCJkZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXMiLCJkZXV0ZXJpdW1Cb29zdGVyX3NpbHZlcl85MGRheXNfcHRzIiwiZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzdkYXlzIiwiZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzMwZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfZ29sZF8zMGRheXNfcHRzIiwiZGV1dGVyaXVtQm9vc3Rlcl9nb2xkXzkwZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfZ29sZF85MGRheXNfcHRzIiwiZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV83ZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fN2RheXNfcHRzIiwiZGV1dGVyaXVtQm9vc3Rlcl9wbGF0aW51bV8zMGRheXMiLCJkZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzMwZGF5c19wdHMiLCJkZXV0ZXJpdW1Cb29zdGVyX3BsYXRpbnVtXzkwZGF5cyIsImRldXRlcml1bUJvb3N0ZXJfcGxhdGludW1fOTBkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfYnJvbnplXzdkYXlzIiwiZW5lcmd5Qm9vc3Rlcl9icm9uemVfMzBkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfYnJvbnplXzkwZGF5c19wdHMiLCJlbmVyZ3lCb29zdGVyX3NpbHZlcl83ZGF5cyIsImVuZXJneUJvb3N0ZXJfc2lsdmVyXzdkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfc2lsdmVyXzMwZGF5cyIsImVuZXJneUJvb3N0ZXJfc2lsdmVyXzMwZGF5c19wdHMiLCJlbmVyZ3lCb29zdGVyX3NpbHZlcl85MGRheXMiLCJlbmVyZ3lCb29zdGVyX3NpbHZlcl85MGRheXNfcHRzIiwiZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzIiwiZW5lcmd5Qm9vc3Rlcl9nb2xkXzdkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfZ29sZF8zMGRheXMiLCJlbmVyZ3lCb29zdGVyX2dvbGRfMzBkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfZ29sZF85MGRheXMiLCJlbmVyZ3lCb29zdGVyX2dvbGRfOTBkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfcGxhdGludW1fN2RheXMiLCJlbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzdkYXlzX3B0cyIsImVuZXJneUJvb3N0ZXJfcGxhdGludW1fMzBkYXlzIiwiZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV8zMGRheXNfcHRzIiwiZW5lcmd5Qm9vc3Rlcl9wbGF0aW51bV85MGRheXMiLCJlbmVyZ3lCb29zdGVyX3BsYXRpbnVtXzkwZGF5c19wdHMiLCJtb29uRmllbGRzX2Jyb256ZSIsIm1vb25GaWVsZHNfc2lsdmVyIiwibW9vbkZpZWxkc19nb2xkIiwibW9vbkZpZWxkc19wbGF0aW51bSIsIm1vb25TaG90X2Jyb256ZSIsIm1vb25TaG90X3NpbHZlciIsIm1vb25TaG90X2dvbGQiLCJwbGFuZXRGaWVsZHNfYnJvbnplIiwicGxhbmV0RmllbGRzX3NpbHZlciIsInBsYW5ldEZpZWxkc19nb2xkIiwicGxhbmV0RmllbGRzX3BsYXRpbnVtIiwicmVzb3VyY2VQYWNrYWdlX2FsbCIsInJlc291cmNlUGFja2FnZV9hbGxfcHRzIiwicmVzb3VyY2VQYWNrYWdlX21ldGFsIiwicmVzb3VyY2VQYWNrYWdlX21ldGFsX3B0cyIsInJlc291cmNlUGFja2FnZV9jcnlzdGFsIiwicmVzb3VyY2VQYWNrYWdlX2NyeXN0YWxfcHRzIiwicmVzb3VyY2VQYWNrYWdlX2RldXRlcml1bSIsInJlc291cmNlUGFja2FnZV9kZXV0ZXJpdW1fcHRzIiwia3Jha2VuX2Jyb256ZSIsImtyYWtlbl9zaWx2ZXIiLCJrcmFrZW5fZ29sZCIsImtyYWtlbl9wbGF0aW51bSIsImRldHJvaWRfYnJvbnplIiwiZGV0cm9pZF9zaWx2ZXIiLCJkZXRyb2lkX2dvbGQiLCJkZXRyb2lkX3BsYXRpbnVtIiwiZGV0cm9pZF9tZWNoYVNoaXB5YXJkX2Jyb256ZV9wdHMiLCJuZXd0cm9uX2Jyb256ZSIsIm5ld3Ryb25fc2lsdmVyIiwibmV3dHJvbl9nb2xkIiwibmV3dHJvbl9wbGF0aW51bSIsImxpZmVmb3JtS3Jha2VuX2Jyb256ZSIsImxpZmVmb3JtS3Jha2VuX2Jyb256ZV9wdHMiLCJsaWZlZm9ybUtyYWtlbl9zaWx2ZXIiLCJsaWZlZm9ybUtyYWtlbl9zaWx2ZXJfcHRzIiwibGlmZWZvcm1LcmFrZW5fZ29sZCIsImxpZmVmb3JtS3Jha2VuX2dvbGRfcHRzIiwibGlmZWZvcm1LcmFrZW5fcGxhdGludW0iLCJsaWZlZm9ybUtyYWtlbl9wbGF0aW51bV9wdHMiLCJsaWZlZm9ybU5ld3Ryb25fYnJvbnplIiwibGlmZWZvcm1OZXd0cm9uX2Jyb256ZV9wdHMiLCJsaWZlZm9ybU5ld3Ryb25fc2lsdmVyIiwibGlmZWZvcm1OZXd0cm9uX3NpbHZlcl9wdHMiLCJsaWZlZm9ybU5ld3Ryb25fZ29sZCIsImxpZmVmb3JtTmV3dHJvbl9nb2xkX3B0cyIsImxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bSIsImxpZmVmb3JtTmV3dHJvbl9wbGF0aW51bV9wdHMiLCJleHBlZGl0aW9uc2xvdHNfYnJvbnplXzdkYXlzIiwiZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV83ZGF5c19wdHMiLCJleHBlZGl0aW9uc2xvdHNfYnJvbnplXzMwZGF5cyIsImV4cGVkaXRpb25zbG90c19icm9uemVfMzBkYXlzX3B0cyIsImV4cGVkaXRpb25zbG90c19icm9uemVfOTBkYXlzIiwiZXhwZWRpdGlvbnNsb3RzX2Jyb256ZV85MGRheXNfcHRzIiwiZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl83ZGF5cyIsImV4cGVkaXRpb25zbG90c19zaWx2ZXJfN2RheXNfcHRzIiwiZXhwZWRpdGlvbnNsb3RzX3NpbHZlcl8zMGRheXMiLCJleHBlZGl0aW9uc2xvdHNfc2lsdmVyXzMwZGF5c19wdHMiLCJleHBlZGl0aW9uc2xvdHNfc2lsdmVyXzkwZGF5cyIsImV4cGVkaXRpb25zbG90c19zaWx2ZXJfOTBkYXlzX3B0cyIsImV4cGVkaXRpb25zbG90c19nb2xkXzdkYXlzIiwiZXhwZWRpdGlvbnNsb3RzX2dvbGRfN2RheXNfcHRzIiwiZXhwZWRpdGlvbnNsb3RzX2dvbGRfMzBkYXlzIiwiZXhwZWRpdGlvbnNsb3RzX2dvbGRfMzBkYXlzX3B0cyIsImV4cGVkaXRpb25zbG90c19nb2xkXzkwZGF5cyIsImV4cGVkaXRpb25zbG90c19nb2xkXzkwZGF5c19wdHMiLCJmbGVldFNsb3RzX2Jyb256ZV83ZGF5cyIsImZsZWV0U2xvdHNfYnJvbnplXzdkYXlzX3B0cyIsImZsZWV0U2xvdHNfYnJvbnplXzMwZGF5cyIsImZsZWV0U2xvdHNfYnJvbnplXzMwZGF5c19wdHMiLCJmbGVldFNsb3RzX2Jyb256ZV85MGRheXMiLCJmbGVldFNsb3RzX2Jyb256ZV85MGRheXNfcHRzIiwiZmxlZXRTbG90c19zaWx2ZXJfN2RheXMiLCJmbGVldFNsb3RzX3NpbHZlcl83ZGF5c19wdHMiLCJmbGVldFNsb3RzX3NpbHZlcl8zMGRheXMiLCJmbGVldFNsb3RzX3NpbHZlcl8zMGRheXNfcHRzIiwiZmxlZXRTbG90c19zaWx2ZXJfOTBkYXlzIiwiZmxlZXRTbG90c19zaWx2ZXJfOTBkYXlzX3B0cyIsImZsZWV0U2xvdHNfZ29sZF83ZGF5cyIsImZsZWV0U2xvdHNfZ29sZF83ZGF5c19wdHMiLCJmbGVldFNsb3RzX2dvbGRfMzBkYXlzIiwiZmxlZXRTbG90c19nb2xkXzMwZGF5c19wdHMiLCJmbGVldFNsb3RzX2dvbGRfOTBkYXlzIiwiZmxlZXRTbG90c19nb2xkXzkwZGF5c19wdHMiLCJtaWdyYXRpb25JdGVtIiwibWlncmF0aW9uSXRlbV9wdHMiLCJzaG9ydGVuVGltZV9idWlsZGluZ3MiLCJzaG9ydGVuVGltZV9yZXNlYXJjaCIsInNob3J0ZW5UaW1lX3NoaXB5YXJkIiwic2hvcnRlblRpbWVfbGlmZWZvcm1CdWlsZGluZ3MiLCJzaG9ydGVuVGltZV9saWZlZm9ybVJlc2VhcmNoIiwib2ZmaWNlcl9jb21tYW5kZXIiLCJvZmZpY2VyX2FkbWlyYWwiLCJvZmZpY2VyX2VuZ2luZWVyIiwib2ZmaWNlcl9nZW9sb2dpc3QiLCJvZmZpY2VyX3RlY2hub2NyYXQiLCJJdGVtR3JhZGUiLCJJdGVtcyIsImltYWdlIiwic21hbGxJbWFnZSIsImhhc2giLCJncmFkZSIsIm5vbmUiLCJicm9uemUiLCJzaWx2ZXIiLCJnb2xkIiwicGxhdGludW0iLCJtdWx0aXBseUNvc3QiLCJjb3N0IiwiZmFjdG9yIiwiZW5lcmd5IiwiU2hpcCIsIkJhdHRsZWNydWlzZXIiLCJiYXNlSHVsbCIsImJhc2VTaGllbGQiLCJiYXNlRGFtYWdlIiwiYmFzZVNwZWVkIiwiYmFzZUNhcmdvQ2FwYWNpdHkiLCJmdWVsQ29uc3VtcHRpb24iLCJCYXR0bGVzaGlwIiwiQm9tYmVyIiwiQ29sb255U2hpcCIsImNvbG9ueVNoaXAiLCJDcmF3bGVyIiwiY3Jhd2xlciIsIkNydWlzZXIiLCJEZWF0aFN0YXIiLCJkZWF0aFN0YXIiLCJEZXN0cm95ZXIiLCJFc3Bpb25hZ2VQcm9iZSIsIkhlYXZ5RmlnaHRlciIsIkxhcmdlQ2FyZ28iLCJMaWdodEZpZ2h0ZXIiLCJQYXRoZmluZGVyIiwiUmVhcGVyIiwiUmVjeWNsZXIiLCJyZWN5Y2xlciIsIlNtYWxsQ2FyZ28iLCJTb2xhclNhdGVsbGl0ZSIsInNvbGFyU2F0ZWxsaXRlIiwiU2hpcFR5cGVzIiwiU2hpcEJ5VHlwZXMiLCJFeHBlZGl0aW9uRGVwbGV0aW9uTGV2ZWwiLCJjcmVhdGVSZWNvcmQiLCJkZWZhdWx0VmFsdWUiLCJGdW5jdGlvbiIsImxvdyIsImhpZ2giLCJlcnJvcklkIiwiZXhwZWRpdGlvbk5vdGlmaWNhdGlvbklkcyIsIndhaXRpbmdGb3JNZXNzYWdlUmVzdWx0IiwiZmFpbGVkVG9UcmFja01lc3NhZ2VzIiwidG90YWxFeHBlZGl0aW9uUmVzdWx0Iiwic2hpcHMiLCJpdGVtcyIsImV2ZW50cyIsImRlcGxldGlvbiIsInVua25vd24iLCJleHBlZGl0aW9uVHJhY2tpbmciLCJFeHBlZGl0aW9uIiwiTmV3RXhwZWRpdGlvbiIsImxpIiwicmVzdWx0SHRtbCIsImFtb3VudCIsImdldEV4cGVkaXRpb25SZXN1bHRDbGFzcyIsImdldEV4cGVkaXRpb25TaXplSWNvbkNsYXNzIiwic2l6ZSIsInNoaXAiLCJmaWx0ZXIiLCJ1bml0cyIsInJlZHVjZSIsInRvdGFsIiwic2hpcENvc3QiLCJjb3N0cyIsImFkZENvc3QiLCJleHBlZGl0aW9uRm91bmRTaGlwc1Jlc291cmNlVW5pdHMiLCJqb2luIiwiaXRlbUhhc2giLCJpbWFnZVVybCIsImdldFVSTCIsImdldEV4cGVkaXRpb25SZXN1bHRDb250ZW50SHRtbCIsImRlcGxldGlvbkh0bWwiLCJsZXZlbCIsImdldEV4cGVkaXRpb25EZXBsZXRpb25IdG1sIiwiYWRkRXhwZWRpdGlvblJlc3VsdENvbnRlbnQiLCJ1cGRhdGVFeHBlZGl0aW9uUmVzdWx0cyIsInVucHJvY2Vzc2VkTWVzc2FnZXMiLCJleHBlZGl0aW9ucmVzdWx0IiwicmF3VHlwZSIsInJhd0RlcGxldGlvbiIsInJhd1NpemUiLCJyZXNvdXJjZXNnYWluZWQiLCJyYXdSZXNvdXJjZXMiLCJ0ZWNobm9sb2dpZXNnYWluZWQiLCJyYXdTaGlwcyIsIml0ZW1zZ2FpbmVkIiwicmF3SXRlbXMiLCJuYXZpZ2F0aW9uIiwicmF3TmF2aWdhdGlvbiIsIlRyYWNrRXhwZWRpdGlvbiIsImNvb3JkaW5hdGVzIiwibmF2aWdhdGlvblR5cGUiLCJyZXR1cm5UaW1lTXVsdGlwbGllciIsInRyYWNrRXhwZWRpdGlvbnMiLCJ2YWx1ZXMiLCJhY2MiLCJjdXIiLCJFeHBlZGl0aW9uVHJhY2tpbmciLCJFeHBlZGl0aW9uVHJhY2tpbmdMb3N0RmxlZXQiLCJjc3NDbGFzcyIsImV2ZXJ5IiwiTGlmZWZvcm1EaXNjb3ZlcnlFdmVudFR5cGUiLCJMaWZlZm9ybVR5cGUiLCJMaWZlZm9ybURpc2NvdmVyeUV2ZW50QXJ0aWZhY3RGaW5kaW5nU2l6ZSIsIk9nYW1lUmF3TGlmZWZvcm1EaXNjb3ZlcnlUeXBlIiwibG9zdFNoaXAiLCJuZXdMaWZlZm9ybUZvdW5kIiwia25vd25MaWZlZm9ybUZvdW5kIiwiYXJ0aWZhY3RzIiwiaHVtYW5zIiwicm9ja3RhbCIsIm1lY2hhcyIsImthZWxlc2giLCJzdG9yYWdlRnVsbCIsImxpZmVmb3JtRGlzY292ZXJpZXNJZCIsInRvdGFsTGlmZWZvcm1EaXNjb3ZlcnlSZXN1bHQiLCJuZXdMaWZlZm9ybXMiLCJsaWZlZm9ybUV4cGVyaWVuY2UiLCJsaWZlZm9ybURpc2NvdmVyeVRyYWNraW5nIiwiTGlmZWZvcm1EaXNjb3ZlcnkiLCJOZXdMaWZlZm9ybURpc2NvdmVyeSIsImh0bWwiLCJnZXRMaWZlZm9ybURpc2NvdmVyeVJlc3VsdENsYXNzIiwiZ2V0TGlmZWZvcm1DbGFzcyIsImxpZmVmb3JtIiwiZXhwZXJpZW5jZSIsImdldExpZmVmb3JtRGlzY292ZXJ5UmVzdWx0Q29udGVudEh0bWwiLCJhZGRMaWZlZm9ybURpc2NvdmVyeVJlc3VsdENvbnRlbnQiLCJ1cGRhdGVMaWZlZm9ybURpc2NvdmVyeVJlc3VsdHMiLCJkaXNjb3Zlcnl0eXBlIiwiYXJ0aWZhY3Rzc2l6ZSIsInJhd0FydGlmYWN0c0ZpbmRTaXplIiwiYXJ0aWZhY3RzZm91bmQiLCJyYXdBcnRpZmFjdHNBbW91bnQiLCJyYXdMaWZlZm9ybSIsImxpZmVmb3JtYWxyZWFkeW93bmVkIiwicmF3TGlmZWZvcm1BbHJlYWR5T3duZWQiLCJsaWZlZm9ybWdhaW5lZGV4cGVyaWVuY2UiLCJyYXdMaWZlZm9ybUV4cGVyaWVuY2UiLCJUcmFja0xpZmVmb3JtRGlzY292ZXJ5IiwiYXJ0aWZhY3RzRm91bmQiLCJhcnRpZmFjdHNTaXplIiwidHJhY2tMaWZlZm9ybURpc2NvdmVyaWVzIiwiTGlmZWZvcm1EaXNjb3ZlcnlUcmFja2luZyIsIkxhbmd1YWdlS2V5IiwibGFuZ3VhZ2VNYXAiLCJhciIsImJyIiwiY3oiLCJjcyIsImRlIiwiZGsiLCJkYSIsImVuIiwiZXMiLCJmciIsImdyIiwiZWwiLCJociIsImh1IiwiaXQiLCJteCIsIm5sIiwicGwiLCJwdCIsInJvIiwicnUiLCJzaSIsInNsIiwidHIiLCJ1cyIsInR3Iiwid2FpdGluZ0ZvckNvbWJhdHMiLCJmYWlsZWRUb1RyYWNrQ29tYmF0cyIsImNvbWJhdFRyYWNraW5nUmVzdWx0Iiwic2hvdWxkVHJhY2tSZXNvbHZlcnMiLCJyZXRyeUNvbWJhdHMiLCJDb21iYXRUcmFja2luZyIsImFzeW5jIiwibG9hZENvbWJhdFJlcG9ydCIsImF0dGVtcHQiLCJzaG91bGRUcmFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVxdWVzdFNpbmdsZUNvbWJhdFJlcG9ydCIsInNob3VsZFRyYWNrQ29tYmF0UmVwb3J0Iiwib2dhbWVDb21iYXRSZXBvcnQiLCJkZWZlbmRlcnNwYWNlb2JqZWN0IiwicmF3RGVmZW5kZXJJbmZvIiwiY29tYmF0cm91bmRzIiwicmF3Q29tYmF0Um91bmRzIiwicmF3UmVzdWx0IiwiZmxlZXRzIiwicmF3RmxlZXRzIiwicGxheWVyRmxlZXRzIiwicGxheWVyIiwibGFzdENvbWJhdFJvdW5kIiwicGxheWVyRmxlZXRJZHMiLCJmbGVldElkIiwicGxheWVyTG9zc2VzUGVyRmxlZXQiLCJ0ZWNobm9sb2dpZXMiLCJmaW5kIiwidGVjaG5vbG9neUlkIiwiZGVzdHJveWVkVG90YWwiLCJwbGF5ZXJMb3NzZXMiLCJpc0VzcGlvbmFnZUNvbWJhdCIsInNpZGUiLCJjb21iYXRUZWNobm9sb2dpZXMiLCJ3aW5uZXIiLCJpc093bmVyIiwib3duZXIiLCJtb29uIiwiaXNFeHBlZGl0aW9uIiwiaXNBdHRhY2tlciIsImlzRGVmZW5kZXIiLCJsb290IiwiciIsImRlYnJpcyIsInBhcnNlQ29tYmF0UmVwb3J0RGF0YSIsInNlcnZlckxhbmd1YWdlIiwidGhyb3dJZlVuc3VwcG9ydGVkIiwibGFuZyIsImdldExhbmd1YWdlIiwiVHJhY2tDb21iYXRSZXBvcnQiLCJyZXRyeUxvYWRDb21iYXRzIiwibm93IiwiRGF0ZSIsInJldHJpZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJvbWlzZXMiLCJyZXRyeSIsImFsbCIsInNldFRpbWVvdXQiLCJ0cmFja2luZ3MiLCJDb21iYXRSZXBvcnRVbmtub3duIiwiV2lsbE5vdEJlVHJhY2tlZCIsIkNvbWJhdFJlcG9ydCIsIk5ld0NvbWJhdFJlcG9ydCIsInVwZGF0ZUNvbWJhdFJlc3VsdHMiLCJtc2dzIiwiZWxlbSIsIm9uSW5pdCIsInBhZ2VDb250ZW50RWxlbWVudCIsInF1ZXJ5UGFyYW1zIiwicXVlcnkiLCJzdWJzdHJpbmciLCJwYWlyIiwiZ2V0UXVlcnlQYXJhbWV0ZXJzIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYWdlIiwiY29tcG9uZW50Iiwic2V0dGluZ3NQcm9taXNlIiwiYWRkTGlzdGVuZXIiLCJTZXR0aW5ncyIsIlJlcXVlc3RTZXR0aW5ncyIsImNvbnRlbnRFbGVtIiwiTXV0YXRpb25PYnNlcnZlciIsImlzQ29ubmVjdGVkIiwidGFiQ29udGVudEVsZW1lbnQiLCJ0cmFja2luZyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInNldHVwT2JzZXJ2ZXIiLCJpbml0TWVzc2FnZVRyYWNraW5nIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=