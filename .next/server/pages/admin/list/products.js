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
/* harmony import */ var _src_api_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8404);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__, _src_api_axios__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _src_components_admin_list_DropdownList__WEBPACK_IMPORTED_MODULE_4__, _src_api_axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function products({ products  }) {
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_7__.useSnackbar)();
    const [productsList, setProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(products);
    const handlerGetProducts = async ()=>{
        const res = await _src_api_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getProducts */ .Z.getProducts();
        setProductsList(res);
    };
    const handlerEdit = (item)=>console.log(item);
    const handlerDelete = async (item)=>{
        const res = await _src_api_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].deleteProduct */ .Z.deleteProduct(item._id);
        if (res.status) {
            enqueueSnackbar("Producto eliminado correctamente", {
                variant: "success"
            });
            handlerGetProducts();
        }
    };
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
                        items: productsList,
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

/***/ 8404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const request = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _env_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].API_URL */ .Z.API_URL
});
const petitions = {};
// * AUTENTICACIÓN
petitions.login = async (data)=>{
    try {
        const response = await request.post("/auth/login", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.register = async (data)=>{
    try {
        const response = await request.post("/auth/register", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.identifyUser = async ()=>{
    try {
        const response = await request.get("/auth/login/identify");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * CATEGORÍAS
petitions.getCategories = async ()=>{
    try {
        const response = await request.get("/category");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getCategory = async (id)=>{
    try {
        const response = await request.get(`/category/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createCategory = async (data)=>{
    try {
        const response = await request.post("/category", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateCategory = async (id, data)=>{
    try {
        const response = await request.put(`/category/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteCategory = async (id)=>{
    try {
        const response = await request.delete(`/category/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * EMAIL
petitions.contact = async (data)=>{
    try {
        const response = await request.post("/email/contact", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * COLORES
petitions.getColors = async ()=>{
    try {
        const response = await request.get("/productColor");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getColor = async (id)=>{
    try {
        const response = await request.get(`/productColor/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createColor = async (data)=>{
    try {
        const response = await request.post("/productColor", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateColor = async (id, data)=>{
    try {
        const response = await request.put(`/productColor/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteColor = async (id)=>{
    try {
        const response = await request.delete(`/productColor/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * PRODUCTOS
petitions.getProducts = async ()=>{
    try {
        const response = await request.get("/products");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getProduct = async (name)=>{
    try {
        const response = await request.get(`/products/${name}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.filterProducts = async (data)=>{
    try {
        const response = await request.post("/products/filter", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createProduct = async (data)=>{
    try {
        const response = await request.post("/products", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateProduct = async (id, data)=>{
    try {
        const response = await request.put(`/products/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteProduct = async (id)=>{
    try {
        const response = await request.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * TALLES
petitions.getSizes = async ()=>{
    try {
        const response = await request.get("/sizes");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getSize = async (id)=>{
    try {
        const response = await request.get(`/sizes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createSize = async (data)=>{
    try {
        const response = await request.post("/sizes", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateSize = async (id, data)=>{
    try {
        const response = await request.put(`/sizes/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteSize = async (id)=>{
    try {
        const response = await request.delete(`/sizes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * SUBCATEGORÍAS
petitions.getSubcategories = async ()=>{
    try {
        const response = await request.get("/subcategories");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getSubcategory = async (id)=>{
    try {
        const response = await request.get(`/subcategories/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createSubcategory = async (data)=>{
    try {
        const response = await request.post("/subcategories", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateSubcategory = async (id, data)=>{
    try {
        const response = await request.put(`/subcategories/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteSubcategory = async (id)=>{
    try {
        const response = await request.delete(`/subcategories/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * SUBTIPOS
petitions.getSubtypes = async ()=>{
    try {
        const response = await request.get("/subTypes");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getSubtype = async (id)=>{
    try {
        const response = await request.get(`/subTypes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createSubtype = async (data)=>{
    try {
        const response = await request.post("/subTypes", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateSubtype = async (id, data)=>{
    try {
        const response = await request.put(`/subTypes/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteSubtype = async (id)=>{
    try {
        const response = await request.delete(`/subTypes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// * TIPOS
petitions.getTypes = async ()=>{
    try {
        const response = await request.get("/types");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.getType = async (id)=>{
    try {
        const response = await request.get(`/types/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.createType = async (data)=>{
    try {
        const response = await request.post("/types", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.updateType = async (id, data)=>{
    try {
        const response = await request.put(`/types/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
petitions.deleteType = async (id)=>{
    try {
        const response = await request.delete(`/types/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (petitions);

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

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

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