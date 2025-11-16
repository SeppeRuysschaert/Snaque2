(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/pasta.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// data/pasta.ts
__turbopack_context__.s({
    "COMMON_SAUCES": ()=>COMMON_SAUCES,
    "PASTA_LIST": ()=>PASTA_LIST,
    "PASTA_TIMESLOTS": ()=>PASTA_TIMESLOTS,
    "PRICE_BY_SIZE": ()=>PRICE_BY_SIZE,
    "PRICE_BY_SIZE_SPECIAL": ()=>PRICE_BY_SIZE_SPECIAL,
    "SPECIAL_PASTA_LIST": ()=>SPECIAL_PASTA_LIST
});
const PASTA_TIMESLOTS = [
    "17:30",
    "18:30"
];
const PRICE_BY_SIZE = {
    small: 7.00,
    medium: 9.00,
    large: 11.00
};
const PRICE_BY_SIZE_SPECIAL = {
    small: 8.00,
    medium: 10.00,
    large: 12.00
};
const COMMON_SAUCES = [
    "Bolognese",
    "Carbonara",
    "Pesto",
    "Arrabbiata",
    "Vier kazen",
    "Roomsaus"
];
const PASTA_LIST = [
    {
        id: 501,
        name: "Bolognaise",
        desc: "Tomatensaus met vlees",
        tags: [
            "warm",
            "klassieker",
            "vlees"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 502,
        name: "Diabolique",
        desc: "Pikante tomatensaus met vlees",
        tags: [
            "warm",
            "pikant",
            "vlees"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 503,
        name: "Arrabbiata",
        desc: "Pittige tomatensaus",
        tags: [
            "warm",
            "pikant",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 504,
        name: "Vier kazen",
        desc: "Romige vier-kazensaus",
        tags: [
            "warm",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 505,
        name: "Carbonara",
        desc: "Romige kaassaus met gebakken spek",
        tags: [
            "warm",
            "klassieker",
            "vlees"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 506,
        name: "Spinazie",
        desc: "Spinazieroomsaus",
        tags: [
            "warm",
            "veggie"
        ],
        price: PRICE_BY_SIZE.medium,
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 507,
        name: "Pomodoro",
        desc: "Romige tomatensaus met topping pijnboompitten en rucola",
        tags: [
            "warm",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 508,
        name: "Pesto",
        desc: "Groene pesto met topping pijnboompitten en rucola",
        tags: [
            "warm",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE
    }
];
const SPECIAL_PASTA_LIST = [
    {
        id: 601,
        name: "Meat Lover Mix",
        desc: "Diabolique & carbonara",
        tags: [
            "special",
            "vlees",
            "pikant"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    {
        id: 602,
        name: "Veggie Mix",
        desc: "Arrabbiata & vier kazen",
        tags: [
            "special",
            "veggie",
            "pikant"
        ],
        priceBySize: PRICE_BY_SIZE
    },
    // "Switch & Mix" bewust weggelaten
    {
        id: 603,
        name: "Spicy",
        desc: "Pasta met diabolique, spek en pesto",
        tags: [
            "special",
            "pikant",
            "vlees"
        ],
        priceBySize: PRICE_BY_SIZE_SPECIAL
    },
    {
        id: 604,
        name: "Popeye",
        desc: "Pasta met spinazie, spek, mozzarella en rucola",
        tags: [
            "special",
            "vlees"
        ],
        priceBySize: PRICE_BY_SIZE_SPECIAL
    },
    {
        id: 605,
        name: "Basic-Italian",
        desc: "Pasta met pomodoro, mozzarella, pesto, kerstomaten, pijnboompitten en rucola",
        tags: [
            "special",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE_SPECIAL
    },
    {
        id: 606,
        name: "Pasta-Love",
        desc: "Pasta met vier kazen, pesto, zongedroogde tomaten, pijnboompitten en rucola",
        tags: [
            "special",
            "veggie"
        ],
        priceBySize: PRICE_BY_SIZE_SPECIAL
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pasta/PastaCustomizerClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/PastaCustomizerClient.tsx
__turbopack_context__.s({
    "default": ()=>PastaCustomizerClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pasta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cart.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_PRICE_BY_SIZE = {
    small: 6.5,
    medium: 8.5,
    large: 10.5
};
function PastaCustomizerClient(param) {
    let { baseName = "Pasta", id, category = "pasta", priceBySize, sauces: saucesProp, saucesEnabled = true } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // State
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sauces, setSauces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeslot, setTimeslot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cheese, setCheese] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Data
    const PRICES = priceBySize !== null && priceBySize !== void 0 ? priceBySize : DEFAULT_PRICE_BY_SIZE;
    const SAUCES = (saucesProp === null || saucesProp === void 0 ? void 0 : saucesProp.length) ? saucesProp : [
        "Bolognese",
        "Carbonara",
        "Pesto",
        "Arrabbiata",
        "Vier kazen",
        "Diabolique",
        "Pomodoro",
        "Spinazie"
    ];
    // Helpers
    const fmt = (n)=>new Intl.NumberFormat("nl-BE", {
            style: "currency",
            currency: "EUR"
        }).format(n);
    const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PastaCustomizerClient.useMemo[currentPrice]": ()=>size ? PRICES[size] : PRICES.medium
    }["PastaCustomizerClient.useMemo[currentPrice]"], [
        PRICES,
        size
    ]);
    const timeslotValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PastaCustomizerClient.useMemo[timeslotValid]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].includes(timeslot)
    }["PastaCustomizerClient.useMemo[timeslotValid]"], [
        timeslot
    ]);
    const sizeValid = size === "small" || size === "medium" || size === "large";
    const saucesValid = saucesEnabled ? sauces.length >= 1 && sauces.length <= 2 : true;
    const cheeseValid = cheese === "with" || cheese === "without";
    const formValid = timeslotValid && sizeValid && saucesValid && cheeseValid;
    const focusedIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PastaCustomizerClient.useMemo[focusedIdx]": ()=>Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].indexOf(timeslot || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"][0]))
    }["PastaCustomizerClient.useMemo[focusedIdx]"], [
        timeslot
    ]);
    const onTimeslotKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PastaCustomizerClient.useCallback[onTimeslotKey]": (e)=>{
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            e.preventDefault();
            const dir = e.key === "ArrowRight" ? 1 : -1;
            const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].indexOf(timeslot || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"][0]);
            const next = ((idx < 0 ? 0 : idx) + dir + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].length;
            setTimeslot(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"][next]);
        }
    }["PastaCustomizerClient.useCallback[onTimeslotKey]"], [
        timeslot
    ]);
    const toggleSauce = (s)=>{
        setSauces((prev)=>{
            const has = prev.includes(s);
            if (has) return prev.filter((x)=>x !== s);
            if (prev.length >= 2) return prev;
            return [
                ...prev,
                s
            ];
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-200 mb-2",
                        children: "Kies je maat"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "radiogroup",
                        "aria-label": "Kies je maat",
                        className: "grid grid-cols-3 gap-2",
                        children: [
                            "small",
                            "medium",
                            "large"
                        ].map((sz)=>{
                            const active = size === sz;
                            const label = sz[0].toUpperCase() + sz.slice(1);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "radio",
                                "aria-checked": active,
                                onClick: ()=>setSize(sz),
                                className: [
                                    "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ring-1 transition outline-none",
                                    active ? "bg-amber-400 text-black ring-amber-300 shadow-md scale-[1.02]" : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10 focus:ring-amber-300"
                                ].join(" "),
                                children: [
                                    label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-80",
                                        children: [
                                            "(",
                                            fmt(PRICES[sz]),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, sz, true, {
                                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    !sizeValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-300 mt-2",
                        children: "Kies een maat."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            saucesEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-200 mb-2",
                        children: "Kies je saus (max 2)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: SAUCES.map((s)=>{
                            const active = sauces.includes(s);
                            const atLimit = sauces.length >= 2 && !active;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": active,
                                "aria-disabled": atLimit,
                                onClick: ()=>!atLimit && toggleSauce(s),
                                className: [
                                    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 transition",
                                    active ? "bg-amber-400/20 text-amber-200 ring-amber-400/30" : atLimit ? "bg-white/5 text-slate-400 ring-white/10 cursor-not-allowed opacity-60" : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10"
                                ].join(" "),
                                children: [
                                    active ? "✓" : "+",
                                    " ",
                                    s
                                ]
                            }, s, true, {
                                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    !saucesValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-300 mt-2",
                        children: "Kies 1 of 2 sauzen."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-200 mb-2",
                        children: "Kies je afhaaltijd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "radiogroup",
                        "aria-label": "Kies je afhaaltijd",
                        onKeyDown: onTimeslotKey,
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pasta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTA_TIMESLOTS"].map((slot, i)=>{
                            const active = timeslot === slot;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "radio",
                                "aria-checked": active,
                                tabIndex: i === focusedIdx ? 0 : -1,
                                onClick: ()=>setTimeslot(slot),
                                className: [
                                    "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ring-1 transition outline-none",
                                    active ? "bg-amber-400 text-black ring-amber-300 shadow-md scale-[1.02]" : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10 focus:ring-amber-300"
                                ].join(" "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: slot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, this)
                            }, slot, false, {
                                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    !timeslotValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-300 mt-2",
                        children: "Kies een tijdslot."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-semibold text-slate-200 mb-2",
                            children: "Emmental kaas"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "radiogroup",
                            "aria-label": "Kaas",
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                {
                                    key: "with",
                                    label: "Met Emmental"
                                },
                                {
                                    key: "without",
                                    label: "Zonder Emmental"
                                }
                            ].map((param)=>{
                                let { key, label } = param;
                                const active = cheese === key;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": active,
                                    onClick: ()=>setCheese(key),
                                    className: [
                                        "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ring-1 transition outline-none",
                                        active ? "bg-amber-400 text-black ring-amber-300 shadow-md scale-[1.02]" : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10 focus:ring-amber-300"
                                    ].join(" "),
                                    children: label
                                }, key, false, {
                                    fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                                    lineNumber: 247,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: [
                                "text-xs mt-2 h-5",
                                cheeseValid ? "text-transparent" : "text-rose-300"
                            ].join(" "),
                            "aria-live": "polite",
                            children: cheeseValid ? "placeholder" : "Kies met of zonder Emmental."
                        }, void 0, false, {
                            fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: !formValid,
                            onClick: ()=>{
                                const item = {
                                    id: id !== null && id !== void 0 ? id : 999001,
                                    name: baseName,
                                    price: currentPrice,
                                    qty: 1,
                                    category,
                                    timeslot: timeslot,
                                    size: size,
                                    cheese: cheese === "with" ? "met" : "zonder",
                                    ...saucesEnabled ? {
                                        sauces
                                    } : {}
                                };
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])(item);
                                router.push("/cart");
                            },
                            className: "mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-amber-500 text-black ring-1 ring-amber-400/60 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
                            children: [
                                "+ Toevoegen — ",
                                fmt(currentPrice)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pasta/PastaCustomizerClient.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(PastaCustomizerClient, "XJNBKMIRini7d1U2qAhOob3z4js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PastaCustomizerClient;
var _c;
__turbopack_context__.k.register(_c, "PastaCustomizerClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a1aeef2a._.js.map