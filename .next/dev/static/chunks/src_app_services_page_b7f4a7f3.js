(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/services/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Services() {
    _s();
    const [hoverTherapist, setHoverTherapist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    const [hoverPatient, setHoverPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    const cards = [
        {
            title: "Physical Therapy",
            desc: `Our physical therapy program focuses on improving mobility,
            balance, coordination, and overall strength. We use fun,
            engaging activities to help children reach their movement
            milestones—whether it’s learning to walk, improving posture,
            or recovering from an injury.`
        },
        {
            title: "Occupational Therapy",
            desc: `Occupational therapy helps children develop the fine motor,
            sensory, and self-care skills they need for daily life. From
            handwriting and dressing to focus and play, our therapists
            create personalized plans that encourage confidence and
            independence in every child.`
        },
        {
            title: "Speech Therapy",
            desc: `Speech therapy supports communication, feeding skills, and
            language development. We help children express themselves
            clearly and confidently through interactive, engaging
            evidence-based sessions.`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "relative flex flex-col items-center justify-center min-h-screen z-10 bg-black/50 border-b border-white/20 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 3,
                    delay: 0.3
                },
                className: "font-serif text-white text-4xl font-bold m-10",
                children: "Our Services"
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative grid grid-cols-1 md:grid-cols-3 gap-8 px-8",
                children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 3,
                            delay: i * 0.5
                        },
                        className: "rounded-2xl bg-[#ABE4A0]/50 backdrop-blur-lg p-8 border-1 shadow-lg border-white/80 hover:scale-105 transition-all duration-300 h-full flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif font-semibold text-center mb-4",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif text-center md:text-left flex-grow",
                                children: card.desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "buttons",
                                className: "flex flex-col justify-center items-center gap-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D]  text-black border-2 border-[#7AB66D] transition-all  duration-300 hover:bg-transparent hover:text-white  hover:border-white font-serif",
                                        href: "/therapists",
                                        onMouseEnter: ()=>{
                                            const newState = [
                                                ...hoverTherapist
                                            ];
                                            newState[i] = true;
                                            setHoverTherapist(newState);
                                        },
                                        onMouseLeave: ()=>{
                                            const newState = [
                                                ...hoverTherapist
                                            ];
                                            newState[i] = false;
                                            setHoverTherapist(newState);
                                        },
                                        children: hoverTherapist[i] ? "Join Today" : "I am a Therapist"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.js",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D]  text-black border-2 border-[#7AB66D] transition-all  duration-300 hover:bg-transparent hover:text-white  hover:border-white font-serif",
                                        href: "/patients",
                                        onMouseEnter: ()=>{
                                            const newState = [
                                                ...hoverPatient
                                            ];
                                            newState[i] = true;
                                            setHoverPatient(newState);
                                        },
                                        onMouseLeave: ()=>{
                                            const newState = [
                                                ...hoverPatient
                                            ];
                                            newState[i] = false;
                                            setHoverPatient(newState);
                                        },
                                        children: hoverPatient[i] ? "Apply" : "I am a Patient"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.js",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/services/page.js",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.js",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(Services, "XDhwcZEs29qbsmYSvPtuVAgzSKU=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_services_page_b7f4a7f3.js.map