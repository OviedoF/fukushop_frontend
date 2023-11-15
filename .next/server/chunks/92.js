exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 7185:
/***/ ((module) => {

// Exports
module.exports = {
	"product_card": "ProductCard_product_card__See_q",
	"product_card__image_container": "ProductCard_product_card__image_container__s27xb",
	"product_card__info": "ProductCard_product_card__info__P9reZ",
	"product_sizes": "ProductCard_product_sizes__Z_ot4",
	"product_card__link": "ProductCard_product_card__link__Kk8LB",
	"product_card__discount": "ProductCard_product_card__discount__5FFzR",
	"product_colors_list": "ProductCard_product_colors_list__E7ItJ",
	"product_color": "ProductCard_product_color__c1uEZ",
	"product_color__selected": "ProductCard_product_color__selected__xIsiO",
	"product_name": "ProductCard_product_name__uO1BP",
	"clothe_type": "ProductCard_clothe_type__0HWTd",
	"product_price": "ProductCard_product_price__RThHA",
	"product_price__discount": "ProductCard_product_price__discount__oIAKG",
	"product_sizes__list": "ProductCard_product_sizes__list__B9Sba",
	"product_sizes__item": "ProductCard_product_sizes__item__tYJZg"
};


/***/ }),

/***/ 2577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    FUKU_WHATSAPP: "https://wa.me/543492287151?text=",
    // prod
    API_URL: "https://fukushop.com.ar/api",
    FRONTEND_URL: "https://fukushop.com.ar"
});


/***/ }),

/***/ 5396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7185);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductColorsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7913);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__]);
_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ProductCard({ product , sizes  }) {
    const [colorSelected, setColorSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [productColors, setProductColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const getColors = ()=>{
        const colors = product.colors.map((variant)=>variant.name);
        setProductColors(colors);
        setColorSelected(product.colors[0]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getColors();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_card),
        animation: "appear",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_card__image_container),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: colorSelected.principalImage,
                    alt: product.name,
                    fill: true,
                    style: {
                        objectFit: "contain"
                    }
                })
            }),
            product.discount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_card__discount),
                children: [
                    product.discount,
                    "% OFF"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                colors: product.colors,
                product: product,
                colorSelected: colorSelected,
                setColorSelected: setColorSelected
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_card__info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_name),
                        children: product.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().clothe_type),
                        children: product.clothe_type.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_price),
                        children: product.discount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                "$",
                                product.priceWithOffer,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_price__discount),
                                    children: product.price
                                })
                            ]
                        }) : `$${product.price}`
                    }),
                    sizes.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_sizes),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_sizes__list),
                            children: sizes.map((size)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_sizes__item),
                                    children: size.name
                                }, size._id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: encodeURI(`/producto/${product.name}`).replaceAll("%20", "_"),
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_card__link),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            children: "Ver producto"
                        })
                    })
                ]
            })
        ]
    }, product._id);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductColorsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7185);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProductColorsList({ colors , colorSelected , setColorSelected  }) {
    const handleColorSelected = (color)=>{
        setColorSelected(color);
    };
    if (colorSelected) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_colors_list),
        children: colors.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handleColorSelected(color),
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_color),
                style: {
                    background: color.hex
                },
                children: colorSelected.name === color.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_color__selected),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheck
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "sr-only",
                            children: [
                                "Cambiar a color ",
                                color.name
                            ]
                        })
                    ]
                })
            }, color._id))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;