"use strict";
(() => {
var exports = {};
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 6406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ talles),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2577);
/* harmony import */ var _src_components_sizes_page_SizesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7990);






function talles({ sizes  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Fuku Shop | Talles"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "\xa1Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selecci\xf3n de ropa de estilo asi\xe1tico y anime, con dise\xf1os exclusivos y de tendencia. \uD83E\uDD73\uD83E\uDD73 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma m\xe1s consciente. \xa1Vis\xedtanos ahora y vive la experiencia Fuku Shop!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeproductsFetch, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Fuku Shop | Ropa estilo japones y anime para argentina \uD83C\uDF59"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "\xa1Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selecci\xf3n de ropa de estilo asi\xe1tico y anime, con dise\xf1os exclusivos y de tendencia. \uD83E\uDD73\uD83E\uDD73"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://fukushop.com.ar/talles"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                initial: {
                    y: -50,
                    opacity: 0,
                    scale: 0.8
                },
                animation: "appear",
                className: "jsx-6d84a2e7242bcbf8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "jsx-6d84a2e7242bcbf8",
                        children: "Tablas de talles"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sizes_page_SizesTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        sizes: sizes,
                        title: "Remera oversize"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "6d84a2e7242bcbf8",
                        children: "@media(min-width:768px){main.jsx-6d84a2e7242bcbf8{padding-top:3rem}}"
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const res = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].API_URL */ .Z.API_URL}/sizes`);
    const sizes = await res.json();
    return {
        props: {
            sizes
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [789], () => (__webpack_exec__(6406)));
module.exports = __webpack_exports__;

})();