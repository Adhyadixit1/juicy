module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/BlurredBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlurredBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function BlurredBackground({ color = "#E5F985", blurAmount = 610, size = 700 }) {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    const mobileSize = isMobile ? size * 0.6 : size; // Reduce size on mobile
    const mobileBlur = isMobile ? blurAmount * 0.7 : blurAmount; // Slightly reduce blur on mobile for performance
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        style: {
            backgroundColor: color,
            filter: `blur(${mobileBlur}px)`,
            width: `${mobileSize}px`,
            height: `${mobileSize}px`,
            transition: "all 1s ease-in-out",
            zIndex: 22
        }
    }, void 0, false, {
        fileName: "[project]/src/components/BlurredBackground.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ProductLogo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>JuicyLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function JuicyLogo({ text, color = "white", fontSize = "clamp(10rem,10rem + 15vw,29rem)", fontFamily = "var(--font-thunder), sans-serif", className = "", isMobile = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute z-[-1]! left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: `leading-none select-none ${className} `,
            style: {
                fontFamily,
                color,
                fontWeight: 500,
                fontSize: isMobile ? "clamp(5rem,9rem + 15vw,10rem)" : fontSize,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                display: "inline-block"
            },
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/ProductLogo.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductLogo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTotalPrice": (()=>getTotalPrice),
    "sampleCartItems": (()=>sampleCartItems)
});
const sampleCartItems = [
    {
        id: 1,
        name: "Lemon Ginger Soda",
        price: 4.99,
        quantity: 1,
        image: "/assets/images/can/lemon.webp"
    },
    {
        id: 2,
        name: "Blueberry Açai Soda",
        price: 5.49,
        quantity: 1,
        image: "/assets/images/can/blueberry.webp"
    }
];
const getTotalPrice = (items)=>{
    return items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
};
}}),
"[project]/src/components/NavBar/NavLinks.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function NavLinks({ navItems, textColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden md:flex space-x-8",
        children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg font-medium cursor-pointer relative group",
                style: {
                    color: textColor
                },
                children: [
                    item.label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-0 bottom-0 w-0 h-[2px] group-hover:w-full transition-all duration-300",
                        style: {
                            backgroundColor: textColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar/NavLinks.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/NavBar/NavLinks.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/NavBar/NavLinks.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/MobileMenu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MobileMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-ssr] (ecmascript)");
;
;
;
function MobileMenu({ navItems, cartItemCount, textColor, activeDropdown, toggleDropdown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "relative z-10 flex flex-col justify-center items-center w-8 h-8 p-1",
                onClick: ()=>{
                    const newDropdown = activeDropdown === "menu" ? null : "menu";
                    toggleDropdown(newDropdown === null ? "menu" : "menu");
                },
                "aria-label": "Menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-5 h-0.5 transition-transform duration-300 ease-in-out ${activeDropdown === "menu" ? "rotate-45 translate-y-1" : ""}`,
                        style: {
                            backgroundColor: textColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-5 h-0.5 my-1 transition-opacity duration-300 ease-in-out ${activeDropdown === "menu" ? "opacity-0" : ""}`,
                        style: {
                            backgroundColor: textColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-5 h-0.5 transition-transform duration-300 ease-in-out ${activeDropdown === "menu" ? "-rotate-45 -translate-y-1" : ""}`,
                        style: {
                            backgroundColor: textColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            activeDropdown === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 right-0 top-[56px] mx-auto w-full max-w-[95%] bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden z-[500]",
                style: {
                    animation: "scaleIn 0.2s ease-out forwards"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3 space-y-2",
                    children: [
                        navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href || "#",
                                className: "block px-4 py-2.5 text-gray-800 hover:bg-gray-100 text-center text-lg font-medium transition-colors",
                                children: item.label
                            }, index, false, {
                                fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 mt-2 border-t border-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-6 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        toggleDropdown("account");
                                    },
                                    "data-dropdown": "account",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUser"], {
                                        size: 18,
                                        color: "#555"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        toggleDropdown("cart");
                                    },
                                    "data-dropdown": "cart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiShoppingBag"], {
                                            size: 18,
                                            color: "#555"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",
                                            children: cartItemCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NavBar/MobileMenu.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/AccountDropdown.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AccountDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AccountDropdown({ themeColor, isDesktop = true }) {
    const wrapperClass = isDesktop ? "absolute right-0 mt-4 w-64 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform origin-top-right transition-all duration-200 ease-out" : "fixed left-0 right-0 top-[56px] mx-auto w-[95%] max-w-sm bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform origin-top z-[600]";
    const animation = isDesktop ? {
        animation: "scaleIn 0.2s ease-out forwards",
        zIndex: 600
    } : {
        animation: "scaleIn 0.2s ease-out forwards"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        style: animation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: isDesktop ? "px-6 py-4" : "p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-800 mb-3",
                    children: "My Account"
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col ${isDesktop ? "gap-2" : "gap-3"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email",
                                    className: `${isDesktop ? "px-3 py-2 rounded-lg text-sm" : "px-4 py-3 rounded-xl text-base"} 
                border border-gray-200 focus:outline-none focus:ring-2 bg-white bg-opacity-80`,
                                    style: {
                                        "--tw-ring-color": `${themeColor}80`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Password",
                                    className: `${isDesktop ? "px-3 py-2 rounded-lg text-sm" : "px-4 py-3 rounded-xl text-base"} 
                border border-gray-200 focus:outline-none focus:ring-2 bg-white bg-opacity-80`,
                                    style: {
                                        "--tw-ring-color": `${themeColor}80`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-white ${isDesktop ? "py-2 px-4 rounded-lg text-sm" : "py-3 px-4 rounded-xl text-base"} 
                font-medium transition-all duration-300`,
                                    style: {
                                        backgroundColor: themeColor
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.8";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-t border-gray-100 ${isDesktop ? "pt-2" : "pt-3"} text-center`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${isDesktop ? "text-xs" : "text-sm mb-2"} text-gray-500`,
                                    children: "Don't have an account?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${isDesktop ? "text-sm" : "text-base"} font-medium transition-all duration-300`,
                                    style: {
                                        color: themeColor
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.8";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NavBar/AccountDropdown.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/CartDropdown.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/data.ts [app-ssr] (ecmascript)");
;
;
;
function CartDropdown({ cartItems, themeColor, isDesktop = true, onClose }) {
    const wrapperClass = isDesktop ? "absolute right-0 mt-4 w-80 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform origin-top-right transition-all duration-200 ease-out" : "fixed left-0 right-0 top-[56px] mx-auto w-[95%] max-w-sm bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform origin-top z-[600]";
    const animation = isDesktop ? {
        animation: "scaleIn 0.2s ease-out forwards",
        zIndex: 600
    } : {
        animation: "scaleIn 0.2s ease-out forwards"
    };
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTotalPrice"])(cartItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        style: animation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800",
                            children: "Shopping Cart"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        !isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-gray-400 hover:text-gray-600 p-1",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18 6L6 18M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `space-y-3 ${isDesktop ? 'max-h-60' : 'max-h-[40vh]'} overflow-y-auto styled-scrollbar`,
                    children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 bg-gray-50 p-2 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isDesktop ? 'w-12 h-12' : 'w-14 h-14'} bg-gray-100 rounded-md overflow-hidden flex-shrink-0`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gray-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.image,
                                            alt: item.name,
                                            className: "object-contain w-full h-[80%]",
                                            width: isDesktop ? 48 : 56,
                                            height: isDesktop ? 48 : 56
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600",
                                                    children: [
                                                        "Qty: ",
                                                        item.quantity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: [
                                                        "$",
                                                        item.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-gray-400 hover:text-gray-600 ${!isDesktop && 'p-2'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-100 mt-3 pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-600",
                                    children: "Subtotal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-gray-800",
                                    children: [
                                        "$",
                                        totalPrice.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `w-full text-white ${isDesktop ? "py-2 px-4 rounded-lg text-sm" : "py-3 px-4 rounded-xl text-base"} 
                font-medium transition-all duration-300`,
                                    style: {
                                        backgroundColor: themeColor
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.8";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `w-full ${isDesktop ? "py-2 px-4 rounded-lg text-sm" : "py-3 px-4 rounded-xl text-base"} 
                font-medium transition-all duration-300 border`,
                                    style: {
                                        color: themeColor,
                                        borderColor: `${themeColor}40`
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.8";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: "View Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NavBar/CartDropdown.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/NavBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavLinks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/NavLinks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/MobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$AccountDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/AccountDropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$CartDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/CartDropdown.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function NavBar({ logo, navItems, cartItemCount, textColor = "white", bgColor = "transparent", themeColor = "#82AF38" }) {
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const cartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const accountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            const target = event.target;
            // Check if clicking on dropdown buttons
            const clickingDropdownButton = target.closest("[data-dropdown]");
            if (clickingDropdownButton) {
                const buttonType = clickingDropdownButton.getAttribute("data-dropdown");
                // If clicking cart/account from menu, don't close menu
                if (activeDropdown === "menu" && (buttonType === "cart" || buttonType === "account")) {
                    return;
                }
            }
            // Check each dropdown separately
            if (activeDropdown === "cart" && cartRef.current && !cartRef.current.contains(target)) {
                setActiveDropdown(null);
            }
            if (activeDropdown === "account" && accountRef.current && !accountRef.current.contains(target)) {
                setActiveDropdown(null);
            }
            if (activeDropdown === "menu" && menuRef.current && !menuRef.current.contains(target)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        activeDropdown
    ]);
    // Toggle dropdown visibility
    const toggleDropdown = (dropdown)=>{
        setActiveDropdown((prev)=>{
            // If clicking the same dropdown that's already open, close it
            if (prev === dropdown) return null;
            return dropdown;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: bgColor,
            backdropFilter: "blur(2px)",
            transition: "background-color 0.3s ease"
        },
        className: "jsx-4e2e1bdc4e5d56a2" + " " + "flex fixed left-1/2 border-b-1 border-white/30 -translate-x-1/2 top-0 w-full max-w-[1440px] items-center justify-between ps-[6.2%] pe-[5.5%] py-3 z-[100] select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: textColor,
                    fontWeight: 900
                },
                className: "jsx-4e2e1bdc4e5d56a2" + " " + "text-2xl uppercase font-bold cursor-default",
                children: logo
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavLinks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                navItems: navItems,
                textColor: textColor
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuRef,
                className: "jsx-4e2e1bdc4e5d56a2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    navItems: navItems,
                    cartItemCount: cartItemCount,
                    themeColor: themeColor,
                    textColor: textColor,
                    activeDropdown: activeDropdown,
                    toggleDropdown: toggleDropdown
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar/NavBar.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4e2e1bdc4e5d56a2" + " " + `${isMobile ? "hidden" : "flex"} items-center space-x-4`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: accountRef,
                        className: "jsx-4e2e1bdc4e5d56a2" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: textColor
                                },
                                onClick: ()=>toggleDropdown("account"),
                                className: "jsx-4e2e1bdc4e5d56a2" + " " + "cursor-pointer hover:opacity-80 transition-opacity duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUser"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            !isMobile && activeDropdown === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$AccountDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                themeColor: themeColor,
                                isDesktop: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavBar/NavBar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: cartRef,
                        className: "jsx-4e2e1bdc4e5d56a2" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: textColor
                                },
                                onClick: ()=>toggleDropdown("cart"),
                                className: "jsx-4e2e1bdc4e5d56a2" + " " + "relative cursor-pointer hover:opacity-80 transition-opacity duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiShoppingBag"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4e2e1bdc4e5d56a2" + " " + "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center",
                                        children: cartItemCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            !isMobile && activeDropdown === "cart" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$CartDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                cartItems: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleCartItems"],
                                themeColor: themeColor,
                                isDesktop: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavBar/NavBar.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            isMobile && activeDropdown === "cart" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$CartDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                cartItems: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleCartItems"],
                themeColor: themeColor,
                isDesktop: false,
                onClose: ()=>setActiveDropdown(null)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            isMobile && activeDropdown === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$AccountDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                themeColor: themeColor,
                isDesktop: false,
                onClose: ()=>setActiveDropdown(null)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar/NavBar.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4e2e1bdc4e5d56a2",
                children: "@keyframes scaleIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.styled-scrollbar::-webkit-scrollbar{width:4px}.styled-scrollbar::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.styled-scrollbar::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:10px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NavBar/NavBar.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/NavBar/types.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/src/components/NavBar/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/NavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/data.ts [app-ssr] (ecmascript)");
;
;
;
}}),
"[project]/src/components/NavBar/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/NavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/NavBar/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/components/ProductInfo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function ProductInfo({ title, juiceData, buttonText, buttonBgColor = "white", buttonTextColor = "#82AF38" }) {
    // Create stable refs for elements that shouldn't re-render
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Content elements that will animate
    const contentWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [renderDelayComplete, setRenderDelayComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(title);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    // Add delay on initial render only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setRenderDelayComplete(true);
        }, 300);
        return ()=>clearTimeout(timer);
    }, []);
    // Handle content updates and animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!renderDelayComplete) return;
        // If the title has changed, animate content change
        if (previousTitle.current !== title && contentWrapperRef.current) {
            // Kill any existing animations
            if (animationRef.current) {
                animationRef.current.kill();
            }
            const juice = juiceData[title];
            // Update content
            if (titleRef.current) titleRef.current.textContent = juice?.title || "";
            if (descriptionRef.current) descriptionRef.current.textContent = juice?.description || "";
            // Create new animation with optimized settings
            animationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentWrapperRef.current, {
                opacity: 0,
                y: 20,
                force3D: true
            }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.1,
                overwrite: true,
                clearProps: "transform"
            });
            // Update previous title reference
            previousTitle.current = title;
        }
        // Update button colors if they change
        if (buttonRef.current) {
            buttonRef.current.style.backgroundColor = buttonBgColor;
            buttonRef.current.style.color = buttonTextColor;
        }
    }, [
        title,
        juiceData,
        renderDelayComplete,
        buttonBgColor,
        buttonTextColor
    ]);
    // Get initial juice data
    const initialJuice = juiceData[title];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `${isMobile ? 'absolute bottom-14 left-4 right-4 max-w-full min-w-0' : 'absolute bottom-2 left-20 max-w-[560px] min-w-[400px]'}`,
        style: {
            opacity: renderDelayComplete ? 1 : 0,
            transition: "opacity 0.3s ease",
            visibility: renderDelayComplete ? "visible" : "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 min-w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full mb-[6px] p-3 ${isMobile ? 'px-4' : 'px-6'} rounded-xl overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentWrapperRef,
                        className: "relative",
                        style: {
                            willChange: "transform, opacity"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: titleRef,
                                className: `text-shadow-xs ${isMobile ? 'text-4xl mb-2' : 'text-5xl mb-4'} font-light  text-white`,
                                children: initialJuice?.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductInfo.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: descriptionRef,
                                className: `text-white ${isMobile ? 'text-base line-clamp-3' : 'text-xl'} text-shadow-xs`,
                                children: initialJuice?.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductInfo.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductInfo.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: buttonRef,
                        className: `px-6 py-2 rounded-full font-medium transition-all duration-300 mt-4 ${isMobile ? 'text-sm hidden' : ''}`,
                        style: {
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor
                        },
                        onMouseOver: (e)=>{
                            e.currentTarget.style.opacity = "0.8";
                        },
                        onMouseOut: (e)=>{
                            e.currentTarget.style.opacity = "1";
                        },
                        children: buttonText
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductInfo.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductInfo.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProductInfo.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductInfo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ScrollDownButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollDownButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollDownButton({ firstLine, secondLine, size = 100, textColor = "white", themeColor = "#82AF38", isMobile }) {
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleClick = ()=>{
        setShowMenu((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const socialLinks = [
        {
            name: "Twitter",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaXTwitter"], {
                size: isMobile ? 20 : 24
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollDownButton.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            url: "https://x.com/mohamed_djoudir"
        },
        {
            name: "LinkedIn",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                size: isMobile ? 20 : 24
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollDownButton.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            url: "https://www.linkedin.com/in/mohamed-djoudir"
        },
        {
            name: "GitHub",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {
                size: isMobile ? 20 : 24
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollDownButton.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            url: "https://github.com/MohamedDjoudir"
        }
    ];
    const mobileSize = isMobile ? 60 : size;
    const mobileFontSize = isMobile ? 'text-xs' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute ${isMobile ? 'bottom-4 right-4' : 'bottom-[clamp(2rem,1.8vw,9rem)] right-[clamp(2rem,4.5vw,9rem)]'} z-50`,
        ref: buttonRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded-full border-1 border-white/50 flex flex-col items-center justify-center transition-all duration-300 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]",
                style: {
                    width: `${mobileSize}px`,
                    height: `${mobileSize}px`,
                    color: textColor
                },
                onClick: handleClick,
                onMouseOver: (e)=>{
                    if (!showMenu) {
                        e.currentTarget.style.opacity = "0.8";
                    }
                },
                onMouseOut: (e)=>{
                    if (!showMenu) {
                        e.currentTarget.style.opacity = "1";
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-shadow-xs ${mobileFontSize}`,
                        children: firstLine
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScrollDownButton.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-shadow-xs ${mobileFontSize}`,
                        children: secondLine
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScrollDownButton.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScrollDownButton.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full mb-4 right-0 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform origin-bottom-right transition-all",
                style: {
                    animation: "scaleIn 0.2s ease-out forwards",
                    zIndex: 600,
                    width: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `font-semibold mb-2 text-center ${isMobile ? 'text-sm' : ''}`,
                            style: {
                                color: themeColor
                            },
                            children: "Contact me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollDownButton.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `${isMobile ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center rounded-full transition-opacity duration-300`,
                                    style: {
                                        backgroundColor: themeColor,
                                        color: "white"
                                    },
                                    title: link.name,
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.8";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: link.icon
                                }, link.name, false, {
                                    fileName: "[project]/src/components/ScrollDownButton.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollDownButton.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScrollDownButton.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollDownButton.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScrollDownButton.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/SizeSelector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SizeSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function SizeSelector({ sizes, selectedColor = "white", unselectedColor = "#82AF38", textColor = "#82AF38", selectedTextColor = "white" }) {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute z-[50]! ${isMobile ? 'left-1/2 -translate-x-1/2 top-[calc(2rem+56px)] flex flex-row gap-4' : 'right-[clamp(2rem,4.8vw,9rem)] top-1/2 -translate-y-1/2 flex flex-col gap-4'}`,
        children: sizes.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${isMobile ? 'w-[60px] h-[60px]' : 'w-[80px] h-[80px]'} border-1 border-white/50 rounded-full flex items-center justify-center flex-col cursor-pointer transition-all duration-300`,
                style: {
                    backgroundColor: option.selected ? selectedColor : unselectedColor,
                    color: option.selected ? textColor : selectedTextColor,
                    outline: "none"
                },
                onMouseOver: (e)=>{
                    e.currentTarget.style.opacity = option.selected ? "1" : "0.8";
                },
                onMouseOut: (e)=>{
                    e.currentTarget.style.opacity = "1";
                },
                "aria-pressed": option.selected,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-bold ${isMobile ? 'text-sm' : ''}`,
                        children: option.size
                    }, void 0, false, {
                        fileName: "[project]/src/components/SizeSelector.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isMobile ? 'text-[10px]' : 'text-xs'}`,
                        children: option.unit
                    }, void 0, false, {
                        fileName: "[project]/src/components/SizeSelector.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/SizeSelector.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/SizeSelector.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Can3D)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Can3D({ modelPath, rotate = [
    0,
    0,
    0
], animate = true, animationSpeed = 0.5, oscillationAmplitude = [
    0.05,
    0.03,
    0.05
], onLoaded, isMobile = false }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])(modelPath);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const prevMobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isMobile);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle hover state to change cursor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hovered) {
            document.body.style.cursor = "grab";
        } else {
            document.body.style.cursor = "auto";
        }
        return ()=>{
            document.body.style.cursor = "auto";
        };
    }, [
        hovered
    ]);
    // Custom smooth oscillation function that doesn't glitch at cycle boundaries
    const smoothOscillation = (time, frequency)=>{
        const t = time * frequency % 2;
        return t <= 1 ? t : 2 - t;
    };
    // Reset animation timing when mobile state changes to ensure immediate effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prevMobileRef.current !== isMobile) {
            timeRef.current = 0;
            prevMobileRef.current = isMobile;
            // Force immediate update of model rotation
            if (modelRef.current) {
                modelRef.current.rotation.x = rotate[0];
                modelRef.current.rotation.y = rotate[1];
                modelRef.current.rotation.z = rotate[2];
            }
        }
    }, [
        isMobile,
        rotate
    ]);
    // Animation using useFrame for oscillating motion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((_state, delta)=>{
        if (modelRef.current && animate) {
            timeRef.current += delta * animationSpeed;
            // Reduce oscillation on mobile - defined here for immediate effect
            const mobileMultiplier = isMobile ? 0.3 : 1;
            const xOffset = (smoothOscillation(timeRef.current, 0.3) * 2 - 1) * oscillationAmplitude[0] * mobileMultiplier;
            const yOffset = (smoothOscillation(timeRef.current, 0.2) * 2 - 1) * oscillationAmplitude[1] * mobileMultiplier;
            const zOffset = (smoothOscillation(timeRef.current, 0.25) * 2 - 1) * oscillationAmplitude[2] * mobileMultiplier;
            modelRef.current.rotation.x = rotate[0] + xOffset;
            modelRef.current.rotation.y = rotate[1] + yOffset;
            modelRef.current.rotation.z = rotate[2] + zOffset;
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (modelRef.current) {
            const clonedScene = scene.clone();
            clonedScene.traverse((o)=>{
                if (o.isMesh) {
                    const mesh = o;
                    if (mesh.material) {
                        if (mesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                            mesh.material.metalness = 0.95;
                            mesh.material.roughness = 0.02;
                            mesh.material.alphaTest = 0.1;
                        }
                    }
                }
            });
            while(modelRef.current.children.length > 0){
                modelRef.current.remove(modelRef.current.children[0]);
            }
            modelRef.current.add(clonedScene);
            if (onLoaded && !loadedRef.current) {
                loadedRef.current = true;
                setTimeout(()=>{
                    if (onLoaded) onLoaded();
                }, 200);
            }
        }
    }, [
        scene,
        onLoaded
    ]);
    // Scale and position adjustments for mobile
    const scale = isMobile ? 0.75 : 1;
    const position = [
        0.005,
        0.045,
        0
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: modelRef,
        rotation: rotate,
        scale: scale,
        position: position,
        castShadow: true,
        receiveShadow: true,
        onPointerOver: ()=>setHovered(true),
        onPointerOut: ()=>setHovered(false),
        onPointerDown: ()=>{
            document.body.style.cursor = "grabbing";
        },
        onPointerUp: ()=>{
            document.body.style.cursor = hovered ? "grab" : "auto";
        }
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/Can3D.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/LoadingSpinner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingSpinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LoadingSpinner({ size = 24, color = "white", borderWidth = 2, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-block animate-spin ${className}`,
        style: {
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            borderTop: `${borderWidth}px solid ${color}`,
            borderRight: `${borderWidth}px solid transparent`,
            borderBottom: `${borderWidth}px solid ${color}`,
            borderLeft: `${borderWidth}px solid transparent`
        },
        role: "status",
        "aria-label": "Loading"
    }, void 0, false, {
        fileName: "[project]/src/components/LoadingSpinner.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/ThreeLoader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThreeLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingSpinner.tsx [app-ssr] (ecmascript)");
;
;
;
function ThreeLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    color: "white",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/ThreeLoader.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xs mt-1 opacity-80",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/ThreeLoader.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/carousel/ThreeLoader.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/ThreeLoader.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CarouselControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
function CarouselControls({ onPrev, onNext, isAnimating, isActiveModelLoaded, isMobile }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute flex gap-8 z-50! ${isMobile ? 'bottom-6' : 'bottom-10'} left-1/2 -translate-x-1/2 transition-opacity ${isActiveModelLoaded ? "opacity-100" : "opacity-0"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onPrev,
                className: `${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] flex items-center justify-center border-1 border-white/50 text-white transition-all`,
                "aria-label": "Previous juice",
                disabled: isAnimating || !isActiveModelLoaded,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                    size: isMobile ? 16 : 20
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/CarouselControls.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/carousel/CarouselControls.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                className: `${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] flex items-center justify-center border-1 border-white/50 text-white transition-all`,
                "aria-label": "Next juice",
                disabled: isAnimating || !isActiveModelLoaded,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                    size: isMobile ? 16 : 20
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/CarouselControls.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/carousel/CarouselControls.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/carousel/CarouselControls.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingIndicator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingSpinner.tsx [app-ssr] (ecmascript)");
;
;
function LoadingIndicator({ isLoading }) {
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-1/2 bottom-18 -translate-x-1/2 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    color: "white",
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/LoadingIndicator.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm mt-3 opacity-80",
                    children: "Loading models..."
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/LoadingIndicator.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/carousel/LoadingIndicator.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/LoadingIndicator.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/JuiceData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "juiceCans": (()=>juiceCans),
    "positionConfigs": (()=>positionConfigs)
});
const juiceCans = [
    {
        name: "Lemon Ginger",
        color: "#82AF38",
        model: "/assets/3d/can/lemon.glb",
        position: "top"
    },
    {
        name: "Blueberry Açai",
        color: "#6A5ACD",
        model: "/assets/3d/can/blueberry.glb",
        position: "right"
    },
    {
        name: "Mango Burst",
        color: "#FFA500",
        model: "/assets/3d/can/mango.glb",
        position: "bottom"
    },
    {
        name: "Raspberry Rosé",
        color: "#FF6B81",
        model: "/assets/3d/can/raspberry.glb",
        position: "left"
    }
];
const positionConfigs = [
    {
        className: "absolute top-0 left-1/2 -translate-x-1/2",
        transformOrigin: "center center",
        rotation: [
            0,
            Math.PI / 3,
            0
        ]
    },
    {
        className: "absolute top-1/2 right-0  -translate-y-1/2 rotate-90",
        transformOrigin: "center center",
        rotation: [
            0,
            Math.PI / 3,
            0
        ]
    },
    {
        className: "absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180",
        transformOrigin: "center center",
        rotation: [
            0,
            Math.PI / 3,
            0
        ]
    },
    {
        className: "absolute top-1/2 left-0 -translate-y-1/2  rotate-270",
        transformOrigin: "center center",
        rotation: [
            0,
            Math.PI / 3,
            0
        ]
    }
];
}}),
"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript) <export default as Can3D>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Can3D": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/carousel/CanvasContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CanvasContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$PresentationControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/PresentationControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Can3D$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript) <export default as Can3D>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$ThreeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/ThreeLoader.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function CanvasContainer({ modelPath, rotation, isMobile, isActivePosition, onLoaded }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                1.5
            ],
            gl: {
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                outputColorSpace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"],
                antialias: true,
                alpha: true,
                powerPreference: isMobile ? "default" : "high-performance"
            },
            camera: {
                position: [
                    0,
                    0,
                    1
                ],
                fov: isMobile ? 24 : 22,
                near: 0.01,
                far: 100
            },
            style: {
                width: "100%",
                height: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$ThreeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                    lineNumber: 49,
                    columnNumber: 29
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$PresentationControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresentationControls"], {
                        global: false,
                        cursor: false,
                        snap: true,
                        speed: isMobile ? 1.5 : 1,
                        zoom: 1,
                        rotation: [
                            0,
                            0,
                            0.1
                        ],
                        polar: [
                            0,
                            Math.PI / 10
                        ],
                        azimuth: [
                            -Math.PI,
                            Math.PI
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Can3D$3e$__["Can3D"], {
                            modelPath: modelPath,
                            rotate: rotation,
                            animate: true,
                            animationSpeed: 0.6,
                            oscillationAmplitude: [
                                0.05,
                                0.03,
                                0.05
                            ],
                            onLoaded: isActivePosition ? onLoaded : undefined,
                            isMobile: isMobile
                        }, void 0, false, {
                            fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                        preset: "forest",
                        resolution: isMobile ? 2 : 8,
                        environmentIntensity: 1.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 10
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        intensity: 20,
                        position: [
                            5,
                            5,
                            5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        intensity: 10,
                        position: [
                            -1,
                            -1,
                            -1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/CanvasContainer.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CarouselWheel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/JuiceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CanvasContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CanvasContainer.tsx [app-ssr] (ecmascript)");
;
;
;
;
function CarouselWheel({ activeIndex, isMobile, onActiveModelLoaded, wheelRef }) {
    const canModelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wheelRef,
        className: "relative w-full h-full flex items-center justify-center",
        style: {
            transformOrigin: "center center"
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"].map((can, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionConfigs"][index].className} ${isMobile ? "w-[45%] h-[45%] mx-auto" : "w-1/2 h-1/2"} transform-gpu`,
                style: {
                    transformOrigin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionConfigs"][index].transformOrigin,
                    willChange: "transform"
                },
                ref: (el)=>{
                    canModelsRef.current[index] = el;
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CanvasContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    modelPath: can.model,
                    rotation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionConfigs"][index].rotation,
                    isMobile: isMobile,
                    isActivePosition: index === activeIndex,
                    onLoaded: onActiveModelLoaded
                }, void 0, false, {
                    fileName: "[project]/src/components/carousel/CarouselWheel.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, can.name, false, {
                fileName: "[project]/src/components/carousel/CarouselWheel.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/CarouselWheel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/floating-fruits/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fruitTypeMap": (()=>fruitTypeMap),
    "getFruitConfigs": (()=>getFruitConfigs),
    "getFruitImagePath": (()=>getFruitImagePath)
});
const fruitTypeMap = {
    "Lemon Ginger": 'lemon.png',
    "Blueberry Açai": 'blueberry.png',
    "Mango Burst": 'mango.png',
    "Raspberry Rosé": 'raspberry.png',
    // Default to lemon for any unknown type
    default: 'lemon.png'
};
function getFruitImagePath(juiceType) {
    const filename = fruitTypeMap[juiceType] || fruitTypeMap.default;
    return `/assets/images/fruit/${filename}`;
}
function getFruitConfigs(isMobile) {
    // Use the same z-index for all fruits
    const commonZIndex = 20;
    // Size adjustments based on device
    const sizeMultiplier = isMobile ? 0.6 : 1; // 40% smaller on mobile
    // Make fruits 3x larger than original but then 20% smaller than that
    const smallSize = 50 * 3 * 0.8 * sizeMultiplier; // 120px on desktop, ~72px on mobile
    const largeSize = 90 * 3 * 0.8 * sizeMultiplier; // 216px on desktop, ~130px on mobile
    // Position fruits AWAY from the can, not hidden behind it
    return [
        // Top Left - Small
        {
            position: 'topLeft',
            size: smallSize,
            flipX: 1,
            zIndex: commonZIndex,
            offsetX: isMobile ? '-20%' : '-65%',
            offsetY: isMobile ? '35%' : '30%',
            blurAmount: isMobile ? 1.5 : 2,
            rotation: 'rotate(150deg)'
        },
        // Bottom Left - Big
        {
            position: 'bottomLeft',
            size: largeSize,
            flipX: 1,
            zIndex: commonZIndex,
            offsetX: isMobile ? '-20%' : '-55%',
            offsetY: isMobile ? '65%' : '70%',
            blurAmount: isMobile ? 0.5 : 0.7,
            rotation: 'rotate(165deg)'
        },
        // Top Right - Big
        {
            position: 'topRight',
            size: largeSize,
            flipX: 1,
            zIndex: commonZIndex,
            offsetX: isMobile ? '90%' : '120%',
            offsetY: isMobile ? '30%' : '30%',
            blurAmount: isMobile ? 0.7 : 1,
            rotation: 'rotate(-30deg)'
        },
        // Bottom Right - Small
        {
            position: 'bottomRight',
            size: smallSize,
            flipX: 1,
            zIndex: commonZIndex,
            offsetX: isMobile ? '100%' : '120%',
            offsetY: isMobile ? '60%' : '70%',
            blurAmount: isMobile ? 1 : 1.5,
            rotation: 'rotate(-15deg)'
        }
    ];
}
}}),
"[project]/src/components/floating-fruits/FruitElement.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "FruitElement": (()=>FruitElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function FruitElement({ fruitConfig, imagePath, animationState, fromCenter, isMobile }) {
    const fruitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const adjustedLeft = calculateAdjustedPosition(fruitConfig.offsetX, isMobile);
    // Enhanced blur values based on animation state and fruit size
    const getBlurAmount = (state, isMoving)=>{
        // Base blur amount from config
        const baseBlur = fruitConfig.blurAmount || 0;
        // Reduce blur on mobile for performance
        const mobileMultiplier = isMobile ? 0.7 : 1;
        // Enhanced blur for different states
        if (state === "entering" || state === "exiting") {
            return isMoving ? `blur(${baseBlur * 3 * mobileMultiplier}px)` : `blur(${baseBlur * mobileMultiplier}px)`;
        }
        // Size-dependent blur - larger fruits get more blur
        const sizeMultiplier = fruitConfig.size > 100 ? 1.5 : 1;
        return `blur(${baseBlur * sizeMultiplier * mobileMultiplier}px)`;
    };
    // GSAP animation with enhanced blur effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = fruitRef.current;
        if (!el) return;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            if (animationState === "visible") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    left: adjustedLeft,
                    top: fruitConfig.offsetY,
                    opacity: 1,
                    filter: getBlurAmount("visible", false),
                    transform: `translate(-50%, -50%) ${fruitConfig.rotation} scale(1)`
                });
            }
            if (animationState === "entering" && fromCenter) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    left: "50%",
                    top: "50%",
                    opacity: 1,
                    filter: getBlurAmount("entering", true),
                    transform: "translate(-50%, -50%) scale(0.2)"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                    left: adjustedLeft,
                    top: fruitConfig.offsetY,
                    filter: getBlurAmount("visible", false),
                    transform: `translate(-50%, -50%) ${fruitConfig.rotation} scale(1)`,
                    duration: isMobile ? 0.8 : 1,
                    ease: "power2.out"
                });
            }
            if (animationState === "exiting" && !fromCenter) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    left: adjustedLeft,
                    top: fruitConfig.offsetY,
                    opacity: 1,
                    filter: getBlurAmount("visible", false),
                    transform: `translate(-50%, -50%) ${fruitConfig.rotation} scale(1)`
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                    left: "50%",
                    top: "50%",
                    opacity: 0,
                    filter: getBlurAmount("exiting", true),
                    transform: "translate(-50%, -50%) scale(0.2)",
                    duration: isMobile ? 0.8 : 1,
                    ease: "power2.in"
                });
            }
        }, fruitRef);
        return ()=>ctx.revert();
    }, [
        animationState,
        fromCenter,
        adjustedLeft,
        fruitConfig.offsetY,
        fruitConfig.rotation,
        fruitConfig.blurAmount,
        fruitConfig.size,
        isMobile
    ]);
    // Add motion blur container to enhance blur effect
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: fruitRef,
        className: "absolute pointer-events-none select-none",
        style: {
            zIndex: fruitConfig.zIndex,
            width: `${fruitConfig.size}px`,
            height: `${fruitConfig.size}px`,
            transformOrigin: "center center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full motion-blur-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: imagePath,
                alt: "Fruit",
                width: fruitConfig.size,
                height: fruitConfig.size,
                style: {
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%"
                },
                className: "object-contain"
            }, void 0, false, {
                fileName: "[project]/src/components/floating-fruits/FruitElement.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/floating-fruits/FruitElement.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/floating-fruits/FruitElement.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
// Helper function to adjust position values, with mobile adjustments if needed
function calculateAdjustedPosition(position, isMobile) {
    const mobileOffset = isMobile ? 5 : 10; // Smaller offset for mobile
    if (position.endsWith("%")) {
        const value = parseFloat(position);
        return `${value + mobileOffset}%`;
    }
    const value = parseFloat(position);
    const unit = position.replace(/[0-9.-]/g, "") || "px";
    return `${value + (isMobile ? 50 : 100)}${unit}`;
}
}}),
"[project]/src/components/floating-fruits/FloatingFruits.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FloatingFruits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/floating-fruits/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FruitElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/floating-fruits/FruitElement.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FloatingFruits({ currentJuice, nextJuice, isTransitioning }) {
    const [exitingJuice, setExitingJuice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEntering, setShowEntering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFirstRender, setIsFirstRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    // Normal transition logic for subsequent changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Handle first render differently - always animate from center
        if (isFirstRender) {
            setShowEntering(true);
            setIsFirstRender(false);
            return;
        }
        // Normal transition logic for subsequent changes
        if (nextJuice && isTransitioning) {
            setExitingJuice(currentJuice);
            setShowEntering(false);
            // Start entering after 500ms (halfway through exit)
            const timer = setTimeout(()=>{
                setShowEntering(true);
            }, 500);
            return ()=>clearTimeout(timer);
        } else if (!nextJuice && isTransitioning) {
            setExitingJuice(null);
            setShowEntering(true);
        }
    }, [
        nextJuice,
        currentJuice,
        isTransitioning,
        isFirstRender
    ]);
    const fruitConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFruitConfigs"])(isMobile);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[200px] h-[600px]  pointer-events-none z-20",
        style: {
            transform: isMobile ? 'scale(0.75)' : 'none',
            transformOrigin: 'center center'
        },
        children: [
            (nextJuice && showEntering || !nextJuice && showEntering) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: fruitConfigs.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FruitElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FruitElement"], {
                        fruitConfig: config,
                        imagePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFruitImagePath"])(nextJuice || currentJuice),
                        animationState: "entering",
                        fromCenter: true,
                        isMobile: isMobile
                    }, `entering-${config.position}-${nextJuice || currentJuice}`, false, {
                        fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            exitingJuice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: fruitConfigs.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FruitElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FruitElement"], {
                        fruitConfig: config,
                        imagePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFruitImagePath"])(exitingJuice),
                        animationState: "exiting",
                        fromCenter: false,
                        isMobile: isMobile
                    }, `exiting-${config.position}-${exitingJuice}`, false, {
                        fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            !isTransitioning && !isFirstRender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: fruitConfigs.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FruitElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FruitElement"], {
                        fruitConfig: config,
                        imagePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFruitImagePath"])(currentJuice),
                        animationState: "visible",
                        fromCenter: false,
                        isMobile: isMobile
                    }, `visible-${config.position}-${currentJuice}`, false, {
                        fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/floating-fruits/FloatingFruits.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/floating-fruits/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FloatingFruits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/floating-fruits/FloatingFruits.tsx [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$FloatingFruits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FruitsContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/floating-fruits/index.ts [app-ssr] (ecmascript)");
;
;
function FruitsContainer({ isVisible, currentJuiceType, nextJuiceType, isTransitioning }) {
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute w-full h-full inset-0 flex items-center justify-center z-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2d$fruits$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            currentJuice: currentJuiceType,
            nextJuice: nextJuiceType,
            isTransitioning: isTransitioning
        }, void 0, false, {
            fileName: "[project]/src/components/carousel/FruitsContainer.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/FruitsContainer.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/carousel/useCarouselNavigation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCarouselNavigation": (()=>useCarouselNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCarouselNavigation(handleNext, handlePrev, isAnimating, isEnabled, enableScrollNavigation = true) {
    // Debounce timer reference
    const scrollTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle keyboard navigation
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!isEnabled || isAnimating) return;
        switch(event.key){
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                handleNext();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                handlePrev();
                break;
        }
    }, [
        handleNext,
        handlePrev,
        isAnimating,
        isEnabled
    ]);
    // Handle scroll navigation with debounce
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!isEnabled || isAnimating || !enableScrollNavigation) return;
        // Clear any existing timer
        if (scrollTimerRef.current) {
            clearTimeout(scrollTimerRef.current);
        }
        // Set a new debounce timer
        scrollTimerRef.current = setTimeout(()=>{
            const delta = event.deltaY;
            if (delta > 20) {
                handleNext();
            } else if (delta < -20) {
                handlePrev();
            }
        }, 150); // Debounce threshold
    }, [
        handleNext,
        handlePrev,
        isAnimating,
        isEnabled,
        enableScrollNavigation
    ]);
    // Set up event listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEnabled) {
            window.addEventListener('keydown', handleKeyDown);
            if (enableScrollNavigation) {
                window.addEventListener('wheel', handleWheel, {
                    passive: true
                });
            }
            return ()=>{
                window.removeEventListener('keydown', handleKeyDown);
                if (enableScrollNavigation) {
                    window.removeEventListener('wheel', handleWheel);
                }
                if (scrollTimerRef.current) {
                    clearTimeout(scrollTimerRef.current);
                }
            };
        }
    }, [
        handleKeyDown,
        handleWheel,
        isEnabled,
        enableScrollNavigation
    ]);
}
}}),
"[project]/src/components/carousel/types.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/src/components/carousel/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$ThreeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/ThreeLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CanvasContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CanvasContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/JuiceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$useCarouselNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/useCarouselNavigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/types.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/src/components/carousel/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$Can3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/Can3D.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$ThreeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/ThreeLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CanvasContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CanvasContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/JuiceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$useCarouselNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/useCarouselNavigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript) <export default as CarouselControls>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CarouselControls": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript) <export default as LoadingIndicator>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoadingIndicator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript) <export default as CarouselWheel>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CarouselWheel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript) <export default as FruitsContainer>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FruitsContainer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/JuiceCarousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "default": (()=>JuiceCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CarouselControls$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselControls.tsx [app-ssr] (ecmascript) <export default as CarouselControls>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingIndicator$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/LoadingIndicator.tsx [app-ssr] (ecmascript) <export default as LoadingIndicator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CarouselWheel$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/CarouselWheel.tsx [app-ssr] (ecmascript) <export default as CarouselWheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FruitsContainer$3e$__ = __turbopack_context__.i("[project]/src/components/carousel/FruitsContainer.tsx [app-ssr] (ecmascript) <export default as FruitsContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/JuiceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$useCarouselNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/useCarouselNavigation.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function JuiceCarousel({ onCanChange, enableScrollNavigation = true }) {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wheelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentJuiceType, setCurrentJuiceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][0].name);
    const [nextJuiceType, setNextJuiceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isActiveModelLoaded, setIsActiveModelLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFruits, setShowFruits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setLoadedModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [renderDelayComplete, setRenderDelayComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoadComplete, setInitialLoadComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Track if this component is in view/active
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener("resize", checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Track if the component is in the viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        "TURBOPACK unreachable";
        const observer = undefined;
        const containerElement = undefined;
    }, []);
    const markModelAsLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((modelPath)=>{
        setLoadedModels((prev)=>({
                ...prev,
                [modelPath]: true
            }));
    }, []);
    const handleActiveModelLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const activeCan = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][activeIndex];
        markModelAsLoaded(activeCan.model);
        setTimeout(()=>{
            // Set loading to false first
            setIsLoading(false);
            setIsActiveModelLoaded(true);
            // Mark loading as complete first
            setInitialLoadComplete(true);
            // Set transition state first and show fruits with a delay
            setIsTransitioning(true);
            // Only show fruits after a longer delay to ensure proper animation
            setTimeout(()=>{
                setShowFruits(true);
            }, 100);
        }, 100);
    }, [
        activeIndex,
        markModelAsLoaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialLoadComplete) {
            // Only start the delay timer after loading is complete
            const timer = setTimeout(()=>{
                setRenderDelayComplete(true);
            }, 300);
            return ()=>clearTimeout(timer);
        }
    }, [
        initialLoadComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initialRotation = activeIndex * 90;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(wheelRef.current, {
            rotation: initialRotation
        });
        setCurrentJuiceType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][activeIndex].name);
        if (onCanChange) onCanChange(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][activeIndex].name);
    }, []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isAnimating || !isActiveModelLoaded) return;
        setIsAnimating(true);
        const nextIndex = (activeIndex - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"].length;
        setNextJuiceType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
        setIsTransitioning(true);
        if (onCanChange) onCanChange(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wheelRef.current, {
            rotation: "+=90",
            duration: 1,
            ease: "power2.inOut",
            onComplete: ()=>{
                setActiveIndex(nextIndex);
                setCurrentJuiceType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
                setNextJuiceType(null);
                setIsAnimating(false);
            }
        });
    }, [
        activeIndex,
        isAnimating,
        isActiveModelLoaded,
        onCanChange
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isAnimating || !isActiveModelLoaded) return;
        setIsAnimating(true);
        const nextIndex = (activeIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"].length;
        setNextJuiceType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
        setIsTransitioning(true);
        if (onCanChange) onCanChange(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wheelRef.current, {
            rotation: "-=90",
            duration: 1,
            ease: "power2.inOut",
            onComplete: ()=>{
                setActiveIndex(nextIndex);
                setCurrentJuiceType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"][nextIndex].name);
                setNextJuiceType(null);
                setIsAnimating(false);
            }
        });
    }, [
        activeIndex,
        isAnimating,
        isActiveModelLoaded,
        onCanChange
    ]);
    // Use our custom navigation hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$useCarouselNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselNavigation"])(handleNext, handlePrev, isAnimating, isInView && isActiveModelLoaded, enableScrollNavigation);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const modelPaths = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$JuiceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["juiceCans"].map((can)=>can.model);
        const initialLoadingState = {};
        modelPaths.forEach((path)=>{
            initialLoadingState[path] = false;
        });
        setLoadedModels(initialLoadingState);
        modelPaths.forEach((path)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload(path);
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full z-50! juice-carousel-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$LoadingIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingIndicator$3e$__["LoadingIndicator"], {
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/src/components/JuiceCarousel.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                style: {
                    opacity: renderDelayComplete ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    visibility: renderDelayComplete ? "visible" : "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$FruitsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FruitsContainer$3e$__["FruitsContainer"], {
                        isVisible: isActiveModelLoaded && showFruits,
                        currentJuiceType: currentJuiceType,
                        nextJuiceType: nextJuiceType,
                        isTransitioning: isTransitioning
                    }, void 0, false, {
                        fileName: "[project]/src/components/JuiceCarousel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-0 left-1/2 -translate-x-1/2 
          ${isMobile ? "translate-y-[1%]" : "translate-y-[3%]"} 
          w-[300vh] h-[300vh] inset-0 flex items-center justify-center
          `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselWheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CarouselWheel$3e$__["CarouselWheel"], {
                            activeIndex: activeIndex,
                            isMobile: isMobile,
                            onActiveModelLoaded: handleActiveModelLoaded,
                            wheelRef: wheelRef
                        }, void 0, false, {
                            fileName: "[project]/src/components/JuiceCarousel.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/JuiceCarousel.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$CarouselControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CarouselControls$3e$__["CarouselControls"], {
                        onPrev: handlePrev,
                        onNext: handleNext,
                        isAnimating: isAnimating,
                        isActiveModelLoaded: isActiveModelLoaded,
                        isMobile: isMobile
                    }, void 0, false, {
                        fileName: "[project]/src/components/JuiceCarousel.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JuiceCarousel.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/JuiceCarousel.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/IceCubes/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createElement": (()=>createElement),
    "createElementWithSizeControl": (()=>createElementWithSizeControl),
    "generateColumnElements": (()=>generateColumnElements),
    "getImagePath": (()=>getImagePath),
    "processElementsForBlur": (()=>processElementsForBlur),
    "shuffleArray": (()=>shuffleArray)
});
function getImagePath(elementType, variant) {
    if (elementType === "cube") {
        return `/assets/images/ice/cube.webp`;
    } else if (elementType === "leaf" && variant) {
        return `/assets/images/leaf/${variant}.png`;
    }
    return `/assets/images/ice/cube.webp`; // Fallback
}
function generateColumnElements(side, cubeCount, leafCount) {
    const elements = [];
    // Create separate position slots for cubes and leaves
    // Each type gets distributed evenly within their own space
    // Generate cube positions (evenly distributed across 0-95%)
    const cubePositions = [];
    for(let i = 0; i < cubeCount; i++){
        // Calculate exact position for cubes - evenly spaced
        const position = i * (95 / (cubeCount - 1 || 1));
        cubePositions.push(`${position}%`);
    }
    // Generate leaf positions (evenly distributed across 0-95%)
    const leafPositions = [];
    for(let i = 0; i < leafCount; i++){
        // Calculate exact position for leaves - evenly spaced
        const position = i * (95 / (leafCount - 1 || 1));
        leafPositions.push(`${position}%`);
    }
    // Create cube elements with controlled sizes (limiting big cubes)
    const cubeElements = [];
    // Calculate indices for big cubes - one in upper third, one in lower third
    // This ensures they are far apart from each other
    const firstBigCubeIndex = Math.floor(cubeCount * 0.2); // Around 20% from the top
    const secondBigCubeIndex = Math.floor(cubeCount * 0.8); // Around 80% from the top
    for(let i = 0; i < cubeCount; i++){
        // For cubes, allow big size only at the specific positions
        const allowBigSize = (i === firstBigCubeIndex || i === secondBigCubeIndex) && cubeCount >= 4;
        cubeElements.push(createElementWithSizeControl("cube", side, i, undefined, cubePositions[i], allowBigSize));
    }
    // Sort cubes by size, largest first (to ensure the biggest ones are properly positioned)
    cubeElements.sort((a, b)=>b.size - a.size);
    // Add all cube elements to the final elements array
    elements.push(...cubeElements);
    // Create leaf elements with their positions (no size restriction needed)
    for(let i = 0; i < leafCount; i++){
        elements.push(createElement("leaf", side, i + cubeCount, i % 2 + 1, leafPositions[i]));
    }
    return elements;
}
function createElementWithSizeControl(elementType, side, index, variant, offsetY, allowBigSize = false) {
    // Increase size ranges, especially for leaves
    let minSize, maxSize;
    if (elementType === "cube") {
        if (allowBigSize) {
            // Big cubes size range
            minSize = side === "left" ? 80 : 90;
            maxSize = side === "left" ? 100 : 110;
        } else {
            // Regular cubes size range (smaller)
            minSize = side === "left" ? 40 : 50;
            maxSize = side === "left" ? 70 : 80;
        }
    } else {
        // Leaf sizes remain unchanged
        minSize = side === "left" ? 45 : 50;
        maxSize = side === "left" ? 90 : 100;
    }
    const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    // Different rotation ranges for left and right sides
    const rotationBase = elementType === "leaf" ? 30 : 20;
    const rotationFactor = side === "left" ? -rotationBase : rotationBase;
    const rotation = `rotate(${Math.floor(Math.random() * 30) + rotationFactor}deg)`;
    // Add random flipping
    const flipX = Math.random() > 0.5 ? -1 : 1;
    const flipY = Math.random() > 0.5 ? -1 : 1;
    // Opacity settings
    const opacityBase = side === "left" ? 0.6 : 0.65;
    const opacity = Math.random() * 0.3 + opacityBase;
    // Make z-index directly proportional to size
    // This ensures larger elements appear on top
    const zIndex = Math.floor(size / 10) + 5; // Size 40 -> z-index 9, Size 100 -> z-index 15
    // Animation delay
    const delayFactor = side === "left" ? 0 : 0.5;
    const animationDelay = Math.random() * 2 + delayFactor;
    return {
        size,
        rotation,
        flipX,
        flipY,
        zIndex,
        opacity,
        elementType,
        variant,
        offsetY: offsetY || "0%",
        animationDelay
    };
}
function createElement(elementType, side, index, variant, offsetY) {
    // Increase size ranges, especially for leaves
    let minSize, maxSize;
    if (elementType === "cube") {
        minSize = side === "left" ? 40 : 50;
        maxSize = side === "left" ? 100 : 110;
    } else {
        // Make leaves bigger
        minSize = side === "left" ? 45 : 50;
        maxSize = side === "left" ? 90 : 100;
    }
    const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    // Different rotation ranges for left and right sides
    const rotationBase = elementType === "leaf" ? 30 : 20;
    const rotationFactor = side === "left" ? -rotationBase : rotationBase;
    const rotation = `rotate(${Math.floor(Math.random() * 30) + rotationFactor}deg)`;
    // Add random flipping
    const flipX = Math.random() > 0.5 ? -1 : 1;
    const flipY = Math.random() > 0.5 ? -1 : 1;
    // Opacity settings
    const opacityBase = side === "left" ? 0.6 : 0.65;
    const opacity = Math.random() * 0.3 + opacityBase;
    // Make z-index directly proportional to size
    // This ensures larger elements appear on top
    const zIndex = Math.floor(size / 10) + 5; // Size 40 -> z-index 9, Size 100 -> z-index 15
    // Animation delay
    const delayFactor = side === "left" ? 0 : 0.5;
    const animationDelay = Math.random() * 2 + delayFactor;
    return {
        size,
        rotation,
        flipX,
        flipY,
        zIndex,
        opacity,
        elementType,
        variant,
        offsetY: offsetY || "0%",
        animationDelay
    };
}
function shuffleArray(array) {
    const newArray = [
        ...array
    ];
    for(let i = newArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [
            newArray[j],
            newArray[i]
        ];
    }
    return newArray;
}
function processElementsForBlur(elements) {
    // Sort elements by size (largest to smallest)
    const sortedBySize = [
        ...elements
    ].sort((a, b)=>b.size - a.size);
    // Calculate size thresholds for different blur levels
    const totalCount = elements.length;
    const noBlurThreshold = sortedBySize[Math.floor(totalCount * 0.6)]?.size || 0; // Top 60% - no blur
    const lightBlurThreshold = sortedBySize[Math.floor(totalCount * 0.8)]?.size || 0; // Next 20% - light blur
    // Bottom 20% - heavier blur
    // Return original elements with blur levels added
    return elements.map((element)=>{
        let blurLevel = 0;
        if (element.size < lightBlurThreshold) {
            blurLevel = 2; // Heavy blur for smallest 20%
        } else if (element.size < noBlurThreshold) {
            blurLevel = 1; // Light blur for next 20%
        } // No blur for top 60%
        return {
            ...element,
            blurLevel
        };
    });
}
}}),
"[project]/src/components/IceCubes/IceElement.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IceElement": (()=>IceElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function IceElement({ element, side, mounted, index }) {
    let blurAmount = 0;
    if (mounted && element.blurLevel === 1) {
        blurAmount = 1.5;
    } else if (mounted && element.blurLevel === 2) {
        blurAmount = 3;
    }
    const transform = mounted ? `${element.rotation} scaleX(${element.flipX || 1}) scaleY(${element.flipY || 1})` : "none";
    const position = mounted ? `${Math.random() * 30}%` : "0%";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute ${side}-cube`,
        style: {
            [side === "left" ? "left" : "right"]: position,
            top: element.offsetY,
            transform,
            zIndex: element.zIndex,
            opacity: mounted ? element.opacity : 0,
            width: `${element.size}px`,
            height: `${element.size}px`,
            filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none'
        },
        children: mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImagePath"])(element.elementType, element.variant),
            alt: element.elementType === "cube" ? "Ice cube" : "Leaf",
            width: element.size,
            height: element.size,
            className: "object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/IceCubes/IceElement.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, `${side}-${index}`, false, {
        fileName: "[project]/src/components/IceCubes/IceElement.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/IceCubes/IceColumn.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IceColumn": (()=>IceColumn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/IceElement.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const IceColumn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function IceColumn({ side, elements, containerWidth, mounted, columnRef }) {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: columnRef,
        className: `absolute ${side}-0 top-0 h-full z-10 ${isMobile ? 'hidden' : ''} 
        ${mounted ? "opacity-100" : "opacity-0"}
        ${side === "left" ? "-translate-x-[50%]" : "translate-x-[50%]"}
         `,
        style: {
            width: `calc((100% - ${containerWidth}px) / 2)`,
            transition: "opacity 0.01s ease-in"
        },
        children: elements.map((element, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IceElement"], {
                element: element,
                side: side,
                mounted: mounted,
                index: index
            }, `${side}-${index}`, false, {
                fileName: "[project]/src/components/IceCubes/IceColumn.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/IceCubes/IceColumn.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, this);
}, // Custom equality function to prevent unnecessary re-renders
(prevProps, nextProps)=>{
    // Only re-render when mounted changes from false to true
    // or when essential props actually change
    if (prevProps.mounted === false && nextProps.mounted === true) {
        return false; // Allow re-render for initial mounting
    }
    // Otherwise, prevent re-renders
    const sideEqual = prevProps.side === nextProps.side;
    const widthEqual = prevProps.containerWidth === nextProps.containerWidth;
    const elementsEqual = prevProps.elements.length === nextProps.elements.length && JSON.stringify(prevProps.elements) === JSON.stringify(nextProps.elements);
    return sideEqual && widthEqual && elementsEqual;
});
}}),
"[project]/src/components/IceCubes/IceCubes.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceColumn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/IceColumn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Memoize the entire IceCubes component to prevent unnecessary re-renders
const IceCubes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function IceCubes({ containerWidth = 1220, cubeCount = 6, leafCount = 4 }) {
    // State to track client-side rendering
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const leftColumnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightColumnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Empty placeholder elements for server-side rendering to avoid hydration mismatch
    const serverSideLeftElements = Array(cubeCount + leafCount).fill(null).map((_, i)=>({
            size: 50,
            rotation: "none",
            flipX: 1,
            flipY: 1,
            zIndex: 10,
            opacity: 0,
            elementType: "cube",
            offsetY: `${i * 10}%`,
            animationDelay: 0,
            blurLevel: 0
        }));
    const serverSideRightElements = Array(cubeCount + leafCount).fill(null).map((_, i)=>({
            size: 50,
            rotation: "none",
            flipX: 1,
            flipY: 1,
            zIndex: 10,
            opacity: 0,
            elementType: "cube",
            offsetY: `${i * 10}%`,
            animationDelay: 0,
            blurLevel: 0
        }));
    // Fix: Make the ref type nullable and initialize with null
    const generatedElementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!generatedElementsRef.current) {
        const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processElementsForBlur"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColumnElements"])("left", cubeCount, leafCount));
        const right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processElementsForBlur"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColumnElements"])("right", cubeCount, leafCount));
        generatedElementsRef.current = {
            left,
            right
        };
    }
    // Only initialize elements after component mounts on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        // Create a single GSAP context for better performance
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            setTimeout(()=>{
                const leftCubeElements = document.querySelectorAll(".left-cube");
                const rightCubeElements = document.querySelectorAll(".right-cube");
                // Batch animations for better performance
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                // Animate left cubes with fewer individual tweens
                leftCubeElements.forEach((cube, index)=>{
                    if (generatedElementsRef.current && index < generatedElementsRef.current.left.length) {
                        tl.to(cube, {
                            y: "+=10",
                            rotation: "+=5",
                            duration: 2 + Math.random() * 2,
                            repeat: -1,
                            yoyo: true,
                            ease: "power1.inOut",
                            delay: generatedElementsRef.current.left[index].animationDelay
                        }, index * 0.05 // Stagger for better performance
                        );
                    }
                });
                // Animate right cubes with fewer individual tweens
                rightCubeElements.forEach((cube, index)=>{
                    if (generatedElementsRef.current && index < generatedElementsRef.current.right.length) {
                        tl.to(cube, {
                            y: "+=10",
                            rotation: "-=5",
                            duration: 2 + Math.random() * 2,
                            repeat: -1,
                            yoyo: true,
                            ease: "power1.inOut",
                            delay: generatedElementsRef.current.right[index].animationDelay
                        }, index * 0.05 // Stagger for better performance
                        );
                    }
                });
            }, 100);
        });
        // Proper cleanup of GSAP animations
        return ()=>ctx.revert();
    }, []);
    // Use server-side elements for initial render, client-side after mount
    const leftElements = mounted && generatedElementsRef.current ? generatedElementsRef.current.left : serverSideLeftElements;
    const rightElements = mounted && generatedElementsRef.current ? generatedElementsRef.current.right : serverSideRightElements;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceColumn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IceColumn"], {
                side: "left",
                elements: leftElements,
                containerWidth: containerWidth,
                mounted: mounted,
                columnRef: leftColumnRef
            }, void 0, false, {
                fileName: "[project]/src/components/IceCubes/IceCubes.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceColumn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IceColumn"], {
                side: "right",
                elements: rightElements,
                containerWidth: containerWidth,
                mounted: mounted,
                columnRef: rightColumnRef
            }, void 0, false, {
                fileName: "[project]/src/components/IceCubes/IceCubes.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
});
const __TURBOPACK__default__export__ = IceCubes;
}}),
"[project]/src/components/IceCubes/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceCubes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/IceCubes.tsx [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$IceCubes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnimatedBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function AnimatedBackground({ backgroundColor }) {
    const [currentColor, setCurrentColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(backgroundColor);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentBgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextBgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [initialRender, setInitialRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Pre-create the animation timeline for reuse
    const createAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextBgElement, newColor)=>{
        // Kill any existing animations
        if (animationRef.current) {
            animationRef.current.kill();
        }
        // Pre-configure next background for animation
        nextBgElement.style.backgroundColor = "";
        nextBgElement.style.background = `radial-gradient(circle, ${newColor} 90%, ${newColor}00 100%)`;
        nextBgElement.style.boxShadow = `0 0 70px 20px ${newColor}`;
        nextBgElement.style.display = "block";
        // Apply initial GSAP properties with force3D for hardware acceleration
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(nextBgElement, {
            clipPath: "circle(0% at center)",
            scale: 0.1,
            opacity: 1,
            zIndex: 5,
            force3D: true,
            willChange: "transform"
        });
        // Create the optimized timeline
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setCurrentColor(newColor);
                setIsAnimating(false);
                // Update DOM after animation completes
                if (currentBgRef.current) {
                    currentBgRef.current.style.backgroundColor = newColor;
                }
                nextBgElement.style.display = "none";
            }
        });
    }, []);
    // Optimized effect for background color change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // On first render, just set the color directly
        if (initialRender) {
            if (currentBgRef.current) {
                currentBgRef.current.style.backgroundColor = backgroundColor;
            }
            setInitialRender(false);
            setCurrentColor(backgroundColor);
            return;
        }
        // Skip if color hasn't changed
        if (backgroundColor === currentColor) return;
        // Ensure we have DOM refs
        if (!currentBgRef.current || !nextBgRef.current) return;
        // Prepare for animation immediately
        setIsAnimating(true);
        // Use requestAnimationFrame to start animation on next frame for smoother transition
        requestAnimationFrame(()=>{
            const tl = createAnimation(nextBgRef.current, backgroundColor);
            // Start the animation immediately
            tl.to(nextBgRef.current, {
                clipPath: "circle(150% at center)",
                scale: 10,
                duration: 2,
                ease: "power3.out",
                immediateRender: true
            });
            // Store reference
            animationRef.current = tl;
        });
    }, [
        backgroundColor,
        currentColor,
        initialRender,
        createAnimation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: currentBgRef,
                className: "absolute inset-0 z-[-2] "
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: nextBgRef,
                className: "absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 z-[-1]! w-[200px] h-[200px] rounded-full",
                style: {
                    display: "none",
                    transformOrigin: "center center",
                    willChange: "transform, opacity"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlurredBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlurredBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductLogo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/NavBar/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar/NavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollDownButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollDownButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SizeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SizeSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JuiceCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JuiceCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IceCubes/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
// Optimize loading with specific settings to improve performance
const WaterWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-water-wave/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen max-h-[1100px] overflow-hidden relative"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, this)
});
// Can color and text color map
const canThemeMap = {
    "Lemon Ginger": {
        mainBgColor: "#82AF38",
        blurColor: "#E5F985",
        textColor: "white",
        accentColor: "rgba(255, 255, 255, 0.9)",
        buttonBgColor: "white",
        buttonTextColor: "#82AF38"
    },
    "Blueberry Açai": {
        mainBgColor: "#385dd2",
        blurColor: "#B6B6F9",
        textColor: "white",
        accentColor: "rgba(255, 255, 255, 0.9)",
        buttonBgColor: "white",
        buttonTextColor: "#385dd2"
    },
    "Mango Burst": {
        mainBgColor: "#FFA500",
        blurColor: "#FFF3B6",
        textColor: "#222",
        accentColor: "rgba(0,0,0,0.7)",
        buttonBgColor: "white",
        buttonTextColor: "#FFA500"
    },
    "Raspberry Rosé": {
        mainBgColor: "#FF6B81",
        blurColor: "#FFD6DE",
        textColor: "white",
        accentColor: "rgba(255,255,255,0.9)",
        buttonBgColor: "white",
        buttonTextColor: "#FF6B81"
    }
};
// Create juice data for pre-rendering with unique descriptions for each flavor
const juiceData = {
    "Lemon Ginger": {
        title: "Lemon Ginger",
        description: "A zesty and refreshing blend with a spicy kick. Our Lemon Ginger juice combines the citrusy brightness of fresh lemons with the warming properties of ginger."
    },
    "Blueberry Açai": {
        title: "Blueberry Açai",
        description: "A nutrient-packed superfood blend. Our Blueberry Açai juice brings together antioxidant-rich berries with the exotic taste of açai for a delicious health boost."
    },
    "Mango Burst": {
        title: "Mango Burst",
        description: "A tropical explosion of sweetness. Our Mango Burst juice captures the sun-ripened goodness of premium mangoes for a taste of paradise in every sip."
    },
    "Raspberry Rosé": {
        title: "Raspberry Rosé",
        description: "An elegant and sophisticated blend. Our Raspberry Rosé juice combines the delicate sweetness of raspberries with subtle floral notes for a refined exp."
    }
};
const content = {
    nav: {
        logo: "Juicy",
        items: [
            {
                label: "Flavour"
            },
            {
                label: "Drinks"
            },
            {
                label: "Fruit"
            },
            {
                label: "About"
            },
            {
                label: "Contact"
            }
        ],
        cartCount: 2
    },
    logo: {
        text: "JUICY"
    },
    sizes: [
        {
            size: "355",
            unit: "ML",
            selected: true
        },
        {
            size: "100",
            unit: "ML"
        },
        {
            size: "125",
            unit: "ML"
        }
    ],
    product: {
        title: "Cheeky lime",
        description: "Discover a world of vibrant flavors with our premium juice selection. At Fresh & Juicy, we believe in the power of nature's finest ingredients to bring you",
        buttonText: "See More"
    },
    scroll: {
        firstLine: "Get",
        secondLine: "This"
    }
};
function Home() {
    // Default to Lemon Ginger
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(canThemeMap["Lemon Ginger"]);
    const [productTitle, setProductTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Lemon Ginger");
    const [, setProductDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(content.product.description);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerWidth = 1220;
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 600);
        };
        // Set initial value
        checkMobile();
        // Add resize listener
        window.addEventListener("resize", checkMobile);
        // Cleanup listener
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Memoize the props for IceCubes to ensure stable references
    const iceCubesProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            theme,
            containerWidth,
            cubeCount: isMobile ? 6 : 8,
            leafCount: isMobile ? 10 : 14
        }), [
        theme,
        containerWidth,
        isMobile
    ]);
    // Update body background color when theme changes, with improved timing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Apply transition without delay first
        document.body.style.transition = "all 0.6s ease-in-out 0.3s";
        document.body.style.backgroundColor = theme.mainBgColor;
    }, [
        theme.mainBgColor
    ]);
    // Callback for JuiceCarousel with debounce to prevent rapid changes
    const handleCanChange = (canName)=>{
        // Type check to ensure canName is a valid key in canThemeMap
        if (Object.keys(canThemeMap).includes(canName)) {
            const typedCanName = canName;
            setTheme(canThemeMap[typedCanName]);
            setProductTitle(canName);
            setProductDesc(juiceData[typedCanName].description);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-[1440px] mx-auto max-h-screen sm:max-h-900px h-[100dvh] shadow-2xl select-none border-x-1 border-white/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IceCubes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...iceCubesProps
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                logo: content.nav.logo,
                navItems: content.nav.items,
                cartItemCount: content.nav.cartCount,
                textColor: "white",
                themeColor: theme.mainBgColor,
                buttonTextColor: theme.buttonTextColor
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WaterWave, {
                dropRadius: isMobile ? 8 : 10,
                perturbance: isMobile ? 0.006 : 0.01,
                imageUrl: "/assets/images/drop.png",
                resolution: isMobile ? 700 : 1900,
                children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-screen sm:max-h-900px h-[100dvh] overflow-hidden w-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                backgroundColor: theme.mainBgColor,
                                duration: 1
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-full z-[0]!  bg-black/5",
                                style: {
                                    backdropFilter: "blur(0px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[1440px] ${isMobile ? "px-4" : "pr-5 pl-[70px]"} h-full w-fzll max-h-[1080px] m-auto relative`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlurredBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        color: theme.blurColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isMobile: isMobile,
                                        text: "JUICY",
                                        color: "white",
                                        className: "theme-text "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isMobile ? "relative" : "absolute"}  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full z-50`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JuiceCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onCanChange: handleCanChange,
                                            enableScrollNavigation: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SizeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        sizes: content.sizes,
                                        selectedColor: theme.buttonBgColor,
                                        unselectedColor: theme.mainBgColor,
                                        textColor: theme.mainBgColor,
                                        selectedTextColor: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: productTitle,
                                        juiceData: juiceData,
                                        buttonText: content.product.buttonText,
                                        buttonBgColor: theme.buttonBgColor,
                                        buttonTextColor: theme.buttonTextColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollDownButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        firstLine: content.scroll.firstLine,
                                        secondLine: content.scroll.secondLine,
                                        textColor: "white",
                                        isMobile: isMobile,
                                        themeColor: theme.mainBgColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7f76c0b1._.js.map