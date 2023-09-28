exports.id = 158;
exports.ids = [158];
exports.modules = {

/***/ 7185:
/***/ ((module) => {

// Exports
module.exports = {
	"product_card": "ProductCard_product_card__See_q",
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
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7185);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductColorsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__]);
_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProductCard({ product  }) {
    const [variantSelected, setVariantSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [colorSelected, setColorSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [productColors, setProductColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [productSizes, setProductSizes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const getColors = ()=>{
        const colors = product.variants.map((variant)=>variant.color);
        // Eliminamos los colores repetidos
        const colorsWithoutDuplicates = colors.map((color)=>JSON.stringify(color)).filter((value, index, self)=>self.indexOf(value) === index).map((color)=>JSON.parse(color));
        setProductColors(colorsWithoutDuplicates);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const variant = product.variants.find((variant)=>variant.color.name === "Negro");
        if (!variant) return setVariantSelected(product.variants[0]);
        setVariantSelected(variant);
        getColors();
    }, [
        product
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const color = productColors.find((color)=>color.name === variantSelected.color.name);
        setColorSelected(color);
        if (variantSelected) {
            setProductSizes(product.variants.filter((variant)=>variant.color.name === variantSelected.color.name).map((variant)=>variant.size));
        }
    }, [
        variantSelected
    ]);
    if (variantSelected) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_card),
        animation: "appear",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: variantSelected.image,
                alt: product.name
            }),
            product.discount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_card__discount),
                children: [
                    product.discount,
                    "% OFF"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductColorsList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                colors: productColors,
                product: product,
                setVariantSelected: setVariantSelected,
                colorSelected: colorSelected,
                setColorSelected: setColorSelected
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_card__info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_name),
                        children: product.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().clothe_type),
                        children: product.clothe_type.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_price),
                        children: product.discount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                "$",
                                product.priceWithOffer,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_price__discount),
                                    children: product.price
                                })
                            ]
                        }) : `$${product.price}`
                    }),
                    productSizes.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_sizes),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_sizes__list),
                            children: productSizes.map((size)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_sizes__item),
                                    children: size.name
                                }, size._id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: encodeURI(`/producto/${product.name}`).replaceAll("%20", "_"),
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_card__link),
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





function ProductColorsList({ colors , colorSelected , setColorSelected , product , setVariantSelected  }) {
    const handleColorSelected = (color)=>{
        const variant = product.variants.find((variant)=>variant.color.name === color.name);
        setColorSelected(color);
        setVariantSelected(variant);
    };
    if (colorSelected) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_colors_list),
        children: colors.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handleColorSelected(color),
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product_color),
                style: {
                    background: color.color
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

/***/ }),

/***/ 4811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductCard__WEBPACK_IMPORTED_MODULE_3__]);
_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ProductsContainer({ products  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-edf52e8392181c8e" + " " + "products_container",
        children: [
            products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    product: product
                }, product._id)),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "edf52e8392181c8e",
                children: ".products_container.jsx-edf52e8392181c8e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:0 50px;margin-top:var(--margin-within-sections);width:100%}@media screen and (max-width:768px){.products_container.jsx-edf52e8392181c8e{padding:0 20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;