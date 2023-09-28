"use strict";
(() => {
var exports = {};
exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 4310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ products),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8138);
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function products({ products  }) {
    const handlerEdit = (item)=>console.log(item);
    const handlerDelete = (item)=>console.log(item);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Modificaci\xf3n | Productos"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Lista de productos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        items: products,
                        subList: "variants",
                        actionsList: [
                            {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEdit,
                                color: "var(--color-success)",
                                handler: handlerEdit
                            },
                            {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrash,
                                color: "var(--color-danger)",
                                handler: handlerDelete
                            }
                        ],
                        actionsSubList: [
                            {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEdit,
                                color: "var(--color-success)",
                                handler: handlerEdit
                            },
                            {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrash,
                                color: "var(--color-danger)",
                                handler: handlerDelete
                            }
                        ],
                        listItemTitle: "name",
                        subItemTitle: "color.name"
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const productsFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/products`);
    const products = await productsFetch.json();
    return {
        props: {
            products
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [543], () => (__webpack_exec__(4310)));
module.exports = __webpack_exports__;

})();