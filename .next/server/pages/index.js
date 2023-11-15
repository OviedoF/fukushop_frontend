(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2361:
/***/ ((module) => {

// Exports
module.exports = {
	"section_featured": "Featured_section_featured__cXiL1"
};


/***/ }),

/***/ 5596:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__CvWwv",
	"hero_description": "Hero_hero_description__e_g7j",
	"hero_description_text": "Hero_hero_description_text__khLj_",
	"button": "Hero_button__lGCXq"
};


/***/ }),

/***/ 831:
/***/ ((module) => {

// Exports
module.exports = {
	"card_container": "HeroCard_card_container__WvnnB",
	"credits": "HeroCard_credits__Oz811",
	"animateY": "HeroCard_animateY__nsu7b",
	"animate": "HeroCard_animate__1_7Mv",
	"card": "HeroCard_card__YpZfn"
};


/***/ }),

/***/ 3723:
/***/ ((module) => {

// Exports
module.exports = {
	"hero_name": "HeroTitle_hero_name__GhH89",
	"title": "HeroTitle_title__TCEbZ",
	"traduction_container": "HeroTitle_traduction_container__Zkmj_",
	"traduction_slider": "HeroTitle_traduction_slider__9Fjf2",
	"scroll": "HeroTitle_scroll__hc8XH",
	"traduction": "HeroTitle_traduction__Nsaa8",
	"traduction_alternative": "HeroTitle_traduction_alternative__Nv_YQ"
};


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_home_hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4944);
/* harmony import */ var _src_components_home_categories_ShowCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1561);
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2577);
/* harmony import */ var _src_components_home_featured_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_home_featured_Featured__WEBPACK_IMPORTED_MODULE_5__]);
_src_components_home_featured_Featured__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Home({ products , categories , sizes  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Fuku Shop | Tienda de ropa urbana en Argentina ✨"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_home_hero_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_home_featured_Featured__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        products: products,
                        sizes: sizes
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const res = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].API_URL */ .Z.API_URL}/products`);
    const resCategories = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].API_URL */ .Z.API_URL}/category`);
    const products = await res.json();
    const categories = await resCategories.json();
    const sizesFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].API_URL */ .Z.API_URL}/sizes`);
    const sizes = await sizesFetch.json();
    return {
        props: {
            products: products || [],
            categories: categories || [],
            sizes: sizes || []
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1561:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/routes.js
var src_routes = __webpack_require__(233);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/globals/Cards/TextToTopHoverCard.jsx






const TextToTopHoverCard_TextToTopHoverCard = ({ img , text , align  })=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: `${routes.products}?category=${text}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.category,
            align: align,
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: img,
                    fill: "cover",
                    alt: "category"
                }),
                /*#__PURE__*/ _jsx("h3", {
                    children: text
                })
            ]
        })
    });
};
/* harmony default export */ const Cards_TextToTopHoverCard = ((/* unused pure expression or super */ null && (TextToTopHoverCard_TextToTopHoverCard)));

;// CONCATENATED MODULE: ./src/components/home/categories/ShowCategories.jsx



function ShowCategories({ categories  }) {
    return /*#__PURE__*/ _jsxs("section", {
        className: styles.show_categories,
        children: [
            /*#__PURE__*/ _jsx("h2", {
                children: "disfruta lo que te gusta!"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.categories,
                children: categories.map((category, index)=>/*#__PURE__*/ _jsx("div", {
                        className: index === 1 ? styles.category_1 : "",
                        children: /*#__PURE__*/ _jsx(TextToTopHoverCard, {
                            img: category.image,
                            text: category.name,
                            align: index === 1 ? "vertical" : "horizontal"
                        })
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const categories_ShowCategories = ((/* unused pure expression or super */ null && (ShowCategories)));


/***/ }),

/***/ 8031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Featured)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Featured_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2361);
/* harmony import */ var _Featured_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Featured_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_Products_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_Products_ProductCard__WEBPACK_IMPORTED_MODULE_3__]);
_globals_Products_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Featured({ products , sizes  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: (_Featured_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section_featured),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                animation: "appear",
                children: "PRODUCTOS DESTACADOS"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-89a85778f3985c6b" + " " + "products_container",
                children: [
                    products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_Products_ProductCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product,
                            sizes: sizes
                        }, product._id)),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "89a85778f3985c6b",
                        children: ".products_container.jsx-89a85778f3985c6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:0 50px;margin-top:var(--margin-within-sections);width:100%}@media screen and (max-width:768px){.products_container.jsx-89a85778f3985c6b{padding:0 20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/home/hero/Hero.module.scss
var Hero_module = __webpack_require__(5596);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
// EXTERNAL MODULE: ./src/components/home/hero/HeroTitle.module.scss
var HeroTitle_module = __webpack_require__(3723);
var HeroTitle_module_default = /*#__PURE__*/__webpack_require__.n(HeroTitle_module);
// EXTERNAL MODULE: ./src/components/home/hero/HeroCard.module.scss
var HeroCard_module = __webpack_require__(831);
var HeroCard_module_default = /*#__PURE__*/__webpack_require__.n(HeroCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/home/hero/HeroCard.jsx




const HeroCard = ({ containerStyles , image , credits  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HeroCard_module_default()).card_container,
        style: containerStyles,
        animation: "appear",
        children: [
            credits && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (HeroCard_module_default()).credits,
                children: credits
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HeroCard_module_default()).card,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (HeroCard_module_default()).card_image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        alt: "Modelo Fuku",
                        fill: true,
                        style: {
                            objectFit: "cover"
                        }
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const hero_HeroCard = (HeroCard);

;// CONCATENATED MODULE: ./public/hero_vertical.jpg
/* harmony default export */ const hero_vertical = ({"src":"/_next/static/media/hero_vertical.8f4e14bc.jpg","height":3097,"width":4336,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBQQRMQb/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMhBP/aAAwDAQACEQMRAD8Ai6qvqpfM2b34xM8Ije2TpaSdEA74iIrvLiZGUopGif/Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/components/home/hero/HeroTitle.jsx





const HeroTitle = ({ title , span , sliderText , sliderTextAlternative  })=>{
    const cardStyle = {
        height: "180%",
        width: "25%",
        position: "absolute",
        top: "0%",
        right: "3%"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HeroTitle_module_default()).hero_name,
        animation: "appear",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeroTitle_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "["
                            }),
                            span,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "]"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeroTitle_module_default()).traduction_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HeroTitle_module_default()).traduction_slider,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HeroTitle_module_default()).traduction_slider,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: sliderText
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (HeroTitle_module_default()).traduction_alternative,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Fuku",
                                        fontSize: 26
                                    },
                                    children: sliderTextAlternative
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_HeroCard, {
                containerStyles: cardStyle,
                image: hero_vertical,
                credits: "@millerband_"
            })
        ]
    });
};
/* harmony default export */ const hero_HeroTitle = (HeroTitle);

;// CONCATENATED MODULE: ./public/miller 25.jpg
/* harmony default export */ const miller_25 = ({"src":"/_next/static/media/miller 25.59659ffa.jpg","height":3264,"width":4570,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAEAAQUBAQAAAAAAAAAAAAABAgADBAURIUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABgRAAMBAQAAAAAAAAAAAAAAAAECAwAh/9oADAMBAAIRAxEAPwCFysW1rdRayZ2yU7yRjI9VOPXvziAUpSq8rUC8OSKMvAd//9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/components/home/hero/HeroInfo.jsx





const HeroInfo = ()=>{
    const cardStyles = {
        width: "90%",
        height: "100%",
        position: "relative"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Hero_module_default()).hero_description,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Hero_module_default()).hero_description_text,
                animation: "appear",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Somos FukuShop, donde podr\xe1s encontrar ropa con estilo callejero y una gran calidad! La mejor alternativa en Argentina!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Podr\xe1s ver todo nuestro cat\xe1logo si sigues scrolleando, esperemos que seamos de tu agrado ;)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "button_design",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                marginBottom: 0
                            },
                            children: "\xa1Conoce nuestros productos!"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_HeroCard, {
                containerStyles: cardStyles,
                image: miller_25,
                credits: "@millerband_"
            })
        ]
    });
};
/* harmony default export */ const hero_HeroInfo = (HeroInfo);

;// CONCATENATED MODULE: ./src/components/home/hero/Hero.jsx





const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: (Hero_module_default()).hero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(hero_HeroTitle, {
                title: "FUKU SHOP",
                span: "服店",
                sliderText: "服ショップ",
                sliderTextAlternative: "FUKU SHOP"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_HeroInfo, {})
        ]
    });
};
/* harmony default export */ const hero_Hero = (Hero);


/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    home: "/",
    products: "/productos",
    contact: "/contacto",
    sizes: "/talles",
    about: "/sobre-nosotros",
    politics: "/politicas",
    /* admin */ adminLogin: "/adminlogin",
    adminPanel: "/admin/panel",
    createType: "/admin/create/clothetype",
    createCategory: "/admin/create/category",
    createSubcategory: "/admin/create/subcategory",
    createProduct: "/admin/create/product",
    createSubType: "/admin/create/subtype",
    createSize: "/admin/create/size",
    createColor: "/admin/create/color",
    /* admin / list */ listCategories: "/admin/list/categories",
    listSubcategories: "/admin/list/subcategories",
    listTypes: "/admin/list/clotheTypes",
    listSubTypes: "/admin/list/subtypes",
    listSizes: "/admin/list/sizes",
    listColors: "/admin/list/colors",
    listProducts: "/admin/list/products"
});


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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,92], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();