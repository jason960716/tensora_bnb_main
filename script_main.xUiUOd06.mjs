import {
    __esmMin as e
} from "./rolldown-runtime.ao81ExY3.mjs";
import {
    B as t,
    Ga as n,
    X as r,
    Z as i,
    d as a,
    init_client as o,
    init_npm_react_18_2 as s,
    init_npm_react_dom_18_2 as c,
    init_ssg_sandbox_shims as l,
    navigator as u,
    pe as d,
    r as f,
    te as p,
    ue as m,
    window as h,
    x as g,
    ye as _
} from "./react.BIFsWNFj.mjs";
import {
    ErrorPlaceholder as v,
    GracefullyDegradingErrorBoundary as y,
    LibraryFeaturesProvider as b,
    PageEffectsProvider as x,
    PageRoot as S,
    inferInitialRouteFromPath as C,
    init_framer_6OU4CHSM as w,
    installFlexboxGapWorkaroundIfNeeded as T,
    lazy as E,
    markHydrationStart as D,
    patchRoutesForABTesting as O,
    removeHiddenBreakpointLayersV2 as k,
    turnOffReactEventHandling as A,
    useCurrentRoute as j,
    useLocaleInfo as M,
    useRouter as N,
    withPerformanceMarks as P,
    yieldToMain as F
} from "./framer.DcQS0xr4.mjs";
async function I({
    routeId: e,
    pathVariables: i,
    localeId: a
}) {
    let o = z[e].page.preload(),
        s = t(S, {
            isWebsite: !0,
            routeId: e,
            pathVariables: i,
            routes: z,
            collectionUtils: V,
            framerSiteId: H,
            notFoundPage: E(() => import(`./SitesNotFoundPage.js@1.4.DqGerkp0.mjs`)),
            isReducedMotion: void 0,
            localeId: a,
            locales: B,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://tensora.network`,
            EditorBar: h === void 0 ? void 0 : (() => {
                if (/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(u.userAgent)) {
                    console.log(`[Framer Editor Bar] Unavailable because navigator is bot`);
                    return
                }
                return E(async () => {
                    h.__framer_editorBarDependencies = {
                        __version: 2,
                        framer: {
                            useCurrentRoute: j,
                            useLocaleInfo: M,
                            useRouter: N
                        },
                        react: {
                            createElement: t,
                            Fragment: g,
                            memo: r,
                            useCallback: p,
                            useEffect: m,
                            useRef: d,
                            useState: _
                        },
                        "react-dom": {
                            createPortal: n
                        }
                    };
                    let {
                        createEditorBar: e
                    } = await import(`https://framer.com/edit/init.mjs`);
                    return {
                        default: e()
                    }
                })
            })(),
            adaptLayoutToTextDirection: !1
        }),
        c = t(b, {
            children: s,
            value: {
                editorBarDisableFrameAncestorsSecurity: !1,
                motionDivToDiv: !1,
                motionDivToDivBackgroundImage: !0,
                pauseOffscreen: !0,
                synchronousNavigationOnDesktop: !1,
                yieldOnTap: !1
            }
        }),
        l = t(y, {
            children: c
        }),
        f = t(x, {
            children: l,
            value: {
                routes: {}
            }
        });
    return await o, f
}

function L() {
    U && h.__framer_events.push(arguments)
}
async function R(e, t) {
    function n(e, t, n = !0) {
        if (e.caught || h.__framer_hadFatalError) return;
        let r = t ?.componentStack;
        if (n) {
            if (console.warn(`Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`, e, r), Math.random() > .01) return
        } else console.error(`Caught a fatal error. If you are the author of this website, please report the following to the Framer team via https://www.framer.com/contact/:
`, e, r);
        L(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
            message: String(e),
            componentStack: r,
            stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null
        })
    }
    try {
        let r, o, s, c;
        if (e) {
            let e = JSON.parse(t.dataset.framerHydrateV2);
            r = e.routeId, o = e.localeId, s = e.pathVariables, c = e.breakpoints, r = O(z, r)
        } else {
            O(z, void 0);
            let e = C(z, decodeURIComponent(location.pathname), !0, B);
            r = e.routeId, o = e.localeId, s = e.pathVariables
        }
        let l = I({
            routeId: r,
            localeId: o,
            pathVariables: s
        });
        h !== void 0 && (async () => {
            let e = z[r],
                t = B.find(({
                    id: e
                }) => o ? e === o : e === `default`).code,
                n = null;
            if (e ?.collectionId && V) {
                let r = await V[e.collectionId] ?.(),
                    [i] = Object.values(s);
                r && typeof i == `string` && (n = await r.getRecordIdBySlug(i, t || void 0) ?? null)
            }
            let i = Intl.DateTimeFormat().resolvedOptions(),
                a = i.timeZone,
                c = i.locale;
            await new Promise(e => {
                document.prerendering ? document.addEventListener(`prerenderingchange`, e, {
                    once: !0
                }) : e()
            }), h.__framer_events.push([`published_site_pageview`, {
                framerSiteId: H ?? null,
                version: 2,
                routePath: e ?.path || `/`,
                collectionItemId: n,
                framerLocale: t || null,
                webPageId: e ?.abTestingVariantId ?? r,
                abTestId: e ?.abTestId,
                referrer: document.referrer || null,
                url: h.location.href,
                hostname: h.location.hostname || null,
                pathname: h.location.pathname || null,
                hash: h.location.hash || null,
                search: h.location.search || null,
                timezone: a,
                locale: c
            }, `eager`]), await F({
                priority: `background`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }), document.dispatchEvent(new CustomEvent(`framer:pageview`, {
                detail: {
                    framerLocale: t || null
                }
            }))
        })();
        let u = await l;
        e ? (P(`framer-rewrite-breakpoints`, () => {
            k(c), h.__framer_onRewriteBreakpoints ?.(c)
        }), i(() => {
            D(), A(), a(t, u, {
                onRecoverableError: n
            })
        })) : f(t, {
            onRecoverableError: n
        }).render(u)
    } catch (e) {
        throw n(e, void 0, !1), e
    }
}
var z, B, V, H, U;
e((() => {
    if (l(), w(), s(), c(), o(), z = {
            augiA20Il: {
                elements: {
                    CBIsf_FR6: `faqs`,
                    nILo6kHia: `signup`,
                    O84DTIErx: `howitworks`,
                    ol3YTZ9ZJ: `pricing`,
                    rsnU9mcNb: `testimonials`,
                    ZCbSnKGv9: `features`
                },
                page: E(() => import(`./gSgypdqHgAQT6VJWeuboHpRBftGfhsu4gzYJhBZSnNM.CRZ30Tkl.mjs`)),
                path: `/`
            }
        }, B = [{
            code: `en`,
            id: `default`,
            name: `English`,
            slug: ``,
            textDirection: `ltr`
        }], V = {}, H = `9b3cab466033ececa9c2a71d33484a67f9e35a9aa5c30ead0539cc2fbe74f85b`, U = typeof document < `u`, U) {
        h.__framer_importFromPackage = (e, n) => () => t(v, {
            error: `Package component not supported: "` + n + `" in "` + e + `"`
        }), h.process = {
            ...h.process,
            env: {
                ...h.process ? h.process.env : void 0,
                NODE_ENV: `production`
            }
        }, h.__framer_events = h.__framer_events || [], T();
        let e = document.getElementById(`main`);
        `framerHydrateV2` in e.dataset ? R(!0, e) : R(!1, e)
    }
}))();
export {
    I as getPageRoot
};
//# sourceMappingURL=script_main.xUiUOd06.mjs.map