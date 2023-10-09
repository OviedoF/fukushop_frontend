(() => {
var exports = {};
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 2450:
/***/ ((module) => {

// Exports
module.exports = {
	"images_slider": "ImagesSlider_images_slider__dseUt",
	"principal_image_container": "ImagesSlider_principal_image_container__e_6Hm",
	"zoom_icon": "ImagesSlider_zoom_icon__uRmjo",
	"gallery_images_container": "ImagesSlider_gallery_images_container__nOJLq",
	"gallery_image_container": "ImagesSlider_gallery_image_container__Ev7fs"
};


/***/ }),

/***/ 5298:
/***/ ((module) => {

// Exports
module.exports = {
	"product_presentation": "ProductPresentation_product_presentation__YUjKy",
	"product_presentation_description": "ProductPresentation_product_presentation_description__fZW5A",
	"product_presentation_sizes": "ProductPresentation_product_presentation_sizes__aLB9R",
	"product_presentation_colors": "ProductPresentation_product_presentation_colors__leJgt",
	"product_presentation_quantity__buttons": "ProductPresentation_product_presentation_quantity__buttons__i6IdL",
	"minus": "ProductPresentation_minus__cLBxY",
	"add": "ProductPresentation_add__ymQNo",
	"product_presentation_price": "ProductPresentation_product_presentation_price__nWx9h",
	"product_price": "ProductPresentation_product_price__bVSuW",
	"product_price__discount": "ProductPresentation_product_price__discount__5GKuW",
	"product_presentation_actions": "ProductPresentation_product_presentation_actions__fiJsQ",
	"product_presentation_action": "ProductPresentation_product_presentation_action__VVwqE"
};


/***/ }),

/***/ 9202:
/***/ ((module) => {

// Exports
module.exports = {
	"zoom_image_container": "ZoomImage_zoom_image_container__ktz85",
	"close_icon": "ZoomImage_close_icon__Dbj_g",
	"zoom_image": "ZoomImage_zoom_image__eK2Rw"
};


/***/ }),

/***/ 5594:
/***/ ((module) => {

// Exports
module.exports = {
	"section_dtf": "DTFText_section_dtf__Y5NJf"
};


/***/ }),

/***/ 1685:
/***/ ((module) => {

// Exports
module.exports = {
	"text_section": "TextSection_text_section__ccqgF"
};


/***/ }),

/***/ 1282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_product_page_ImagesSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8310);
/* harmony import */ var _src_components_product_page_ProductPresentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1702);
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2577);
/* harmony import */ var _src_components_product_page_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_product_page_ImagesSlider__WEBPACK_IMPORTED_MODULE_4__, _src_components_product_page_ProductPresentation__WEBPACK_IMPORTED_MODULE_5__, _src_components_product_page_Details__WEBPACK_IMPORTED_MODULE_7__]);
([_src_components_product_page_ImagesSlider__WEBPACK_IMPORTED_MODULE_4__, _src_components_product_page_ProductPresentation__WEBPACK_IMPORTED_MODULE_5__, _src_components_product_page_Details__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ProductPage({ product , sizes  }) {
    const [colorSelected, setColorSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(product.colors[0]);
    const [sizeSelected, setSizeSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        console.log(colorSelected);
    }, [
        colorSelected
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            product.name,
                            " | Fuku Shop"
                        ]
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
                        content: "ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime, sakura"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `${product.name} | Fuku Shop`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "\xa1Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selecci\xf3n de ropa de estilo asi\xe1tico y anime, con dise\xf1os exclusivos y de tendencia. \uD83E\uDD73\uD83E\uDD73"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: colorSelected.principalImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: `https://fukushop.com.ar/${product.name.replaceAll(" ", "_")}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "jsx-16ac772962a0141d",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-16ac772962a0141d" + " " + "product",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_product_page_ImagesSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                colorSelected: colorSelected,
                                product: product
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_product_page_ProductPresentation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                product: product,
                                colorSelected: colorSelected,
                                setColorSelected: setColorSelected,
                                sizes: sizes,
                                colors: product.colors,
                                sizeSelected: sizeSelected,
                                setSizeSelected: setSizeSelected
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_product_page_Details__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        product: product,
                        sizes: sizes
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "16ac772962a0141d",
                        children: "main.jsx-16ac772962a0141d{margin-top:3rem;padding:70px var(--padding-from-borders)}.product.jsx-16ac772962a0141d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}@media screen and (max-width:768px){.product.jsx-16ac772962a0141d{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
                    })
                ]
            })
        ]
    });
}
const getStaticPaths = async ()=>{
    const res = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_6__/* ["default"].API_URL */ .Z.API_URL}/products`);
    const products = await res.json();
    const paths = products.map((product)=>({
            params: {
                name: product.name.replaceAll(" ", "_")
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const productName = decodeURIComponent(params.name).replaceAll("_", " ");
    const res = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_6__/* ["default"].API_URL */ .Z.API_URL}/products/${productName}`);
    const product = await res.json();
    const sizesFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_6__/* ["default"].API_URL */ .Z.API_URL}/sizes`);
    const sizes = await sizesFetch.json();
    return {
        props: {
            product,
            sizes
        },
        revalidate: 1
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sizes_page_SizesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7990);
/* harmony import */ var _globals_Texts_TextSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5020);
/* harmony import */ var _globals_Texts_DTFText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_Texts_DTFText__WEBPACK_IMPORTED_MODULE_4__]);
_globals_Texts_DTFText__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Details({ product , sizes  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_Texts_TextSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: product.clothe_type.name,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: product.clothe_type.description
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_Texts_DTFText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Impresion DTF"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sizes_page_SizesTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                sizes: sizes,
                title: "Tabla de talles",
                titleAlign: "left",
                padding: 0
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImagesSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2450);
/* harmony import */ var _ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ZoomImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _ZoomImage__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _ZoomImage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ImagesSlider({ colorSelected , product  }) {
    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(colorSelected.principalImage);
    const [gallery, setGallery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(colorSelected.images);
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedImage(colorSelected.principalImage);
        setGallery(colorSelected.images);
    }, [
        colorSelected
    ]);
    const handleImageClick = (image)=>{
        setSelectedImage(image);
        const allImages = [
            ...colorSelected.images,
            colorSelected.principalImage
        ];
        // remove the selected image from the gallery
        const newGallery = allImages.filter((img)=>img !== image);
        setGallery(newGallery);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().images_slider),
        children: [
            zoom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ZoomImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                images: [
                    zoom
                ],
                setZoom: setZoom
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().principal_image_container),
                onClick: (e)=>setZoom(selectedImage),
                animation: "appearBottom",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowUpRightFromSquare,
                        className: (_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zoom_icon)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: selectedImage,
                        alt: `${product.name} en color ${colorSelected.name}`,
                        fill: true,
                        style: {
                            objectFit: "contain"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gallery_images_container),
                animation: "appearBottom",
                children: gallery.filter((image)=>image !== null).map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ImagesSlider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gallery_image_container),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: image,
                            alt: `${product.name} en color ${colorSelected.name}`,
                            fill: true,
                            style: {
                                objectFit: "contain"
                            },
                            onClick: ()=>handleImageClick(image)
                        })
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductPresentation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5298);
/* harmony import */ var _ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_FormatNumbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7230);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function ProductPresentation({ product , setColorSelected , sizes , colors , colorSelected , sizeSelected , setSizeSelected  }) {
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)();
    const message = `¡Hola! me interesa el producto ${product.name}.
    ${colorSelected.name ? `En el color ${colorSelected.name}` : ""} 
    ${sizeSelected.name ? `y talle ${sizeSelected.name}` : ""}
    `;
    const addProductToCart = ()=>{
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (!colorSelected.name || !sizeSelected.name) {
            enqueueSnackbar("Debes seleccionar un color y un talle", {
                variant: "error"
            });
            return;
        }
        const productInCart = cart.find((productInCart)=>productInCart.id === product.id && productInCart.color === colorSelected.name && productInCart.size === sizeSelected.name);
        if (productInCart) {
            productInCart.quantity = productInCart.quantity + quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity,
                color: colorSelected.name,
                size: sizeSelected.name
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        enqueueSnackbar("Producto agregado al carrito", {
            variant: "success"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: product.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    product.clothe_type.name,
                    " ",
                    product.category.name,
                    " ",
                    product.subCategory && product.subCategory.name
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_description),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: product.description
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_sizes),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: sizes.map((size, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            style: {
                                background: sizeSelected.name === size.name ? "var(--color-alternative)" : "var(--color-primary)",
                                color: sizeSelected.name === size.name ? "var(--color-primary)" : "var(--color-text)"
                            },
                            onClick: ()=>setSizeSelected(size),
                            children: size.name
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_colors),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: colors.map((color, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            style: {
                                background: color.hex
                            },
                            onClick: ()=>setColorSelected(color),
                            children: color.hex === colorSelected.hex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheck,
                                color: "var(--color-alternative)"
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_quantity),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_quantity__buttons),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setQuantity(quantity - 1),
                            disabled: quantity === 1,
                            className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().minus),
                            children: "-"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: quantity
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setQuantity(quantity + 1),
                            className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().add),
                            children: "+"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_price),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_price),
                    children: product.discount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "ARS $",
                            (0,_utils_FormatNumbers__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(quantity * product.priceWithOffer),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_price__discount),
                                children: [
                                    "ARS ",
                                    (0,_utils_FormatNumbers__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(quantity * product.price)
                                ]
                            })
                        ]
                    }) : `ARS $${(0,_utils_FormatNumbers__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(quantity * product.price)}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `https://api.whatsapp.com/send?phone=543492287151&text=${message}`,
                target: "_blank",
                rel: "noreferrer",
                className: (_ProductPresentation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product_presentation_button),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "button_design",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "\xa1Quiero este producto!",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "1em",
                                viewBox: "0 0 576 512",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z",
                                    style: {
                                        fill: "var(--color-text)"
                                    }
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ZoomImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9202);
/* harmony import */ var _ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ZoomImage({ images , setZoom  }) {
    const [isZoomed, setIsZoomed] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const handleMouseMove = (event)=>{
        if (isZoomed) {
            const { left , top , width , height  } = event.currentTarget.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            setX(mouseX / width * 20);
            setY(mouseY / height * 70);
        }
    };
    const handleClick = (event)=>{
        const { left , top , width , height  } = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setX(mouseX / width * 20);
        setY(mouseY / height * 70);
        setIsZoomed(!isZoomed);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().zoom_image_container),
        onMouseMove: handleMouseMove,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faXmark,
                className: (_ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close_icon),
                onClick: ()=>setZoom(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ZoomImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().zoom_image),
                style: {
                    width: isZoomed ? "1500px" : "100%",
                    height: isZoomed ? "1500px" : "100%",
                    cursor: isZoomed ? "zoom-out" : "zoom-in"
                },
                onClick: ()=>setIsZoomed(!isZoomed),
                children: [
                    !isZoomed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: images[0],
                        alt: "Zoomed image",
                        fill: true,
                        style: {
                            objectFit: "contain",
                            cursor: "zoom-in"
                        },
                        onClick: handleClick
                    }),
                    isZoomed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: images[0],
                        alt: "Zoomed image",
                        width: 1500,
                        height: 1500,
                        style: {
                            objectFit: "contain",
                            cursor: "zoom-out",
                            transform: `translate(-${x}%, -${y}%)`
                        },
                        onMouseMove: handleMouseMove,
                        onClick: ()=>setIsZoomed(!isZoomed)
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DTFText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DTFText_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5594);
/* harmony import */ var _DTFText_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DTFText_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function DTFText({ title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_DTFText_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section_dtf),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "El m\xe9todo de impresi\xf3n DTF utiliza una pel\xedcula especial que se imprime con la imagen deseada y se adhiere a la prenda mediante calor y presi\xf3n. A diferencia de la serigraf\xeda y la impresi\xf3n directa sobre prendas de vestir (DTG), el DTF permite imprimir dise\xf1os detallados y complejos en una amplia variedad de colores, incluyendo tonos vibrantes y ne\xf3n. Adem\xe1s, el DTF se puede usar para imprimir en una amplia variedad de materiales, incluidos algod\xf3n, poli\xe9ster y mezclas."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Ventajas de la impresi\xf3n DTF"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight
                            }),
                            "Calidad de imagen superior: El DTF produce una imagen n\xedtida y detallada que se ve casi como una impresi\xf3n fotogr\xe1fica. La pel\xedcula de impresi\xf3n se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight
                            }),
                            "Colores brillantes y vibrantes: La impresi\xf3n DTF permite imprimir colores brillantes y vibrantes, incluyendo tonos fluorescentes y ne\xf3n, que no son posibles de lograr con otros m\xe9todos de impresi\xf3n. Esto se debe a que la pel\xedcula de impresi\xf3n DTF es m\xe1s densa y permite la absorci\xf3n completa de la tinta, lo que resulta en una imagen de alta calidad."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight
                            }),
                            "Durabilidad y resistencia: La impresi\xf3n DTF es muy duradera y resistente al lavado y al desgaste. La pel\xedcula de impresi\xf3n se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo. Adem\xe1s, la impresi\xf3n DTF no se agrieta ni se pela, lo que significa que la prenda se ver\xe1 como nueva durante mucho tiempo."
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextSection_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1685);
/* harmony import */ var _TextSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextSection_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function TextSection({ title , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_TextSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text_section),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: title
            }),
            children
        ]
    });
}


/***/ }),

/***/ 7230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatNumbers = (number)=>{
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = "$1.";
    return number.toString().replace(exp, rep);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNumbers);


/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 3142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 303:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,789], () => (__webpack_exec__(1282)));
module.exports = __webpack_exports__;

})();