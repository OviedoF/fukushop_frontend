(() => {
var exports = {};
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 5207:
/***/ ((module) => {

// Exports
module.exports = {
	"filters_button_active": "Filters_filters_button_active__8IW3o",
	"products_filter": "Filters_products_filter__SH8y5",
	"close_filters": "Filters_close_filters__VmmzI",
	"filter": "Filters_filter__mdvon"
};


/***/ }),

/***/ 802:
/***/ ((module) => {

// Exports
module.exports = {
	"products_section": "ProductsSection_products_section__hJhCJ"
};


/***/ }),

/***/ 8145:
/***/ ((module) => {

// Exports
module.exports = {
	"selectionable_items": "CheckboxList_selectionable_items___rgLV",
	"selectionable_items__item": "CheckboxList_selectionable_items__item__pQUYY",
	"box": "CheckboxList_box__qKwfM",
	"label": "CheckboxList_label__esM7I"
};


/***/ }),

/***/ 7930:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "DoubleRangeSelecter_card__w2ijo",
	"current_value": "DoubleRangeSelecter_current_value__fFmJn",
	"values": "DoubleRangeSelecter_values__5elb9",
	"slider": "DoubleRangeSelecter_slider__k_2xY",
	"min": "DoubleRangeSelecter_min__JxR77",
	"min_drag": "DoubleRangeSelecter_min_drag__HuMXm",
	"max": "DoubleRangeSelecter_max__enPnW",
	"max_drag": "DoubleRangeSelecter_max_drag__c0zV9"
};


/***/ }),

/***/ 707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ products),
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
/* harmony import */ var _src_components_products_page_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8381);
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2577);
/* harmony import */ var _src_components_products_page_ProductsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5582);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_products_page_Filters__WEBPACK_IMPORTED_MODULE_4__, _src_components_products_page_ProductsSection__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_products_page_Filters__WEBPACK_IMPORTED_MODULE_4__, _src_components_products_page_ProductsSection__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function products({ products , categories , types , colors , sizes  }) {
    const [productsState, setProductsState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);
    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.min(...products.map((product)=>product.priceWithOffer || product.price)));
    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.max(...products.map((product)=>product.priceWithOffer || product.price)) + 500);
    const [queryCategory, setQueryCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const originalProducts = products;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { category  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (category) {
            setQueryCategory(categories.find((cat)=>cat.name === category));
        }
    }, [
        category
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setProductsState(products);
    }, [
        products
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Fuku Shop | Cat\xe1logo de ropa anime o japonesa"
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
                        href: "https://fukushop.com.ar/productos"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "jsx-2fa593d3f84fcd72",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_products_page_Filters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        categories: categories,
                        types: types,
                        colors: colors,
                        sizes: sizes,
                        products: productsState,
                        setProducts: setProductsState,
                        originalProducts: originalProducts,
                        maxPrice: maxPrice,
                        minPrice: minPrice,
                        queryCategory: queryCategory ? queryCategory._id : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_products_page_ProductsSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        products: productsState
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "2fa593d3f84fcd72",
                        children: "main.jsx-2fa593d3f84fcd72{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100vw}@media screen and (max-width:900px){main.jsx-2fa593d3f84fcd72{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const productsFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/products`);
    const products = await productsFetch.json();
    const categoriesFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/category`);
    const categories = await categoriesFetch.json();
    const typesFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/types`);
    const types = await typesFetch.json();
    const colorsFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/productColor`);
    const colors = await colorsFetch.json();
    const sizesFetch = await fetch(`${_src_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_URL */ .Z.API_URL}/sizes`);
    const sizes = await sizesFetch.json();
    return {
        props: {
            products: products || [],
            categories: categories || [],
            types: types || [],
            colors: colors || [],
            sizes: sizes || []
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5207);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globals_libs_CheckboxList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5785);
/* harmony import */ var _globals_libs_DoubleRangeSelecter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2323);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Filters({ categories , types , colors , sizes , setProducts , originalProducts , maxPrice , minPrice , queryCategory  }) {
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        categories: [],
        types: [],
        colors: [],
        sizes: [],
        price: {
            min: minPrice,
            max: maxPrice
        }
    });
    const [filtersActiveInResponsive, setFiltersActiveInResponsive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFilters = (filter, value)=>{
        setFilters({
            ...filters,
            [filter]: value
        });
    };
    const handleMax = (max)=>{
        setFilters({
            ...filters,
            price: {
                ...filters.price,
                max
            }
        });
    };
    const handleMin = (min)=>{
        setFilters({
            ...filters,
            price: {
                ...filters.price,
                min
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const productsFiltered = originalProducts.filter((product)=>{
            let category = true;
            let type = true;
            let color = true;
            let size = true;
            let price = true;
            if (filters.categories.length > 0) {
                category = filters.categories.includes(product.category._id);
            }
            if (filters.types.length > 0) {
                type = filters.types.includes(product.clothe_type._id);
            }
            if (filters.colors.length > 0) {
                color = product.variants.some((variant)=>filters.colors.includes(variant.color._id));
            }
            if (filters.sizes.length > 0) {
                size = product.variants.some((variant)=>filters.sizes.includes(variant.size._id));
            }
            if (filters.price.min > 0 || filters.price.max < 50000) {
                price = product.priceWithOffer ? product.priceWithOffer >= filters.price.min && product.priceWithOffer <= filters.price.max : product.price >= filters.price.min && product.price <= filters.price.max;
            }
            if (!(category && type && color && size && price)) return setProducts([]);
            return category && type && color && size && price;
        });
        setProducts(productsFiltered);
    }, [
        filters
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (queryCategory) {
            setFilters({
                ...filters,
                categories: [
                    queryCategory
                ]
            });
        }
    }, [
        queryCategory
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "button_design",
                id: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filters_button_active),
                onClick: (e)=>setFiltersActiveInResponsive(!filtersActiveInResponsive),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Filtros ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleRight,
                            style: {
                                transform: filtersActiveInResponsive ? "rotate(180deg)" : "none"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                id: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().products_filter),
                style: {
                    left: filtersActiveInResponsive ? "0" : "-100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Filtros"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft,
                        id: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close_filters),
                        onClick: (e)=>setFiltersActiveInResponsive(false),
                        style: {
                            transform: !filtersActiveInResponsive ? "rotate(180deg)" : "none"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Categor\xedas"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_libs_CheckboxList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                handleFilters: handleFilters,
                                filterName: "categories",
                                filters: filters,
                                items: categories,
                                default: queryCategory
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Tipo de prenda"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_libs_CheckboxList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                handleFilters: handleFilters,
                                filterName: "types",
                                filters: filters,
                                items: types
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Colores"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_libs_CheckboxList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                handleFilters: handleFilters,
                                filterName: "colors",
                                filters: filters,
                                items: colors
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Tallas"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_libs_CheckboxList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                handleFilters: handleFilters,
                                filterName: "sizes",
                                filters: filters,
                                items: sizes
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6___default().filter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Precio"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_libs_DoubleRangeSelecter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                handleMax: handleMax,
                                handleMin: handleMin,
                                min: filters.price.min,
                                max: filters.price.max,
                                minValueBetween: 10
                            })
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

/***/ 5582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_2__]);
_globals_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ProductsSection({ products  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: (_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products_section),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Nuestro catalogo!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_globals_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                products: products
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8145);
/* harmony import */ var _CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2__);



class CheckboxList extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            type: "checkbox",
            selection: []
        };
        this.handleFilters = this.props.handleFilters;
        this.filterName = this.props.filterName;
        this.filters = this.props.filters;
        this.props = props;
        this.activeDefault = true;
    }
    /**
    * This method controls the logic of the form.
    * Depending on the form type (defined in this.state.type)
    **/ toggleSelection(id) {
        const { type , selection  } = this.state;
        if (type === "checkbox") {
            if (selection.includes(id)) {
                this.setState({
                    selection: selection.filter((sel)=>sel !== id)
                });
                if (this.props.default && this.props.default === id) {
                    this.activeDefault = false;
                }
                // Opcional
                this.props.handleFilters(this.filterName, selection.filter((sel)=>sel !== id));
            } else {
                this.setState({
                    selection: [
                        ...selection,
                        id
                    ]
                });
                // Opcional
                this.props.handleFilters(this.filterName, [
                    ...selection,
                    id
                ]);
            }
        } else {
            this.setState({
                selection: [
                    id
                ]
            });
            this.props.handleFilters(this.filterName, selection);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.default && this.activeDefault && !this.state.selection.includes(this.props.default)) {
            this.setState({
                selection: [
                    this.props.default
                ]
            });
        }
    }
    render() {
        const { selection  } = this.state;
        const { items  } = this.props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: (_CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selectionable_items),
            children: items.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Checkbox, {
                    selected: selection.includes(item._id),
                    onClick: ()=>this.toggleSelection(item._id),
                    label: item.name
                }, i))
        });
    }
}
class Checkbox extends (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) {
    render() {
        const { selected , onClick , label , effect ="checkmark"  } = this.props; // label is the only optional prop
        const length = 126.36953735351562; // hard-coded length dependent on the path used
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selectionable_items__item),
            onClick: onClick,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        stroke: "lightgreen",
                        strokeWidth: "14",
                        fill: "none",
                        d: "M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16",
                        strokeDashoffset: selected ? 0 : length,
                        style: {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            transition: "stroke-dashoffset 0.2s ease-in-out",
                            strokeDasharray: `${length} ${length}`
                        }
                    })
                }),
                label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_CheckboxList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().label),
                    style: {
                        color: selected ? "lightgreen" : "white"
                    },
                    children: label
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxList);


/***/ }),

/***/ 2323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7930);
/* harmony import */ var _DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2__);



class DoubleRangeSlider extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            sliderWidth: 0,
            offsetSliderWidht: 0,
            min: 0,
            max: this.props.max,
            minValueBetween: 10,
            currentMin: 0,
            inputMin: 0,
            currentMax: this.props.max,
            inputMax: this.props.max
        };
        this.handleMin = this.props.handleMin;
        this.handleMax = this.props.handleMax;
        this.props = props;
    }
    componentDidMount() {
        const { currentMin , currentMax , max  } = this.state;
        this.minValue.style.width = currentMin * 100 / max + "%";
        this.maxValue.style.width = currentMax * 100 / max + "%";
        this.setState({
            sliderWidth: this.slider.offsetWidth,
            offsetSliderWidht: this.slider.offsetLeft
        });
    }
    setMin = (e)=>{
        const { min , max , currentMax , minValueBetween  } = this.state;
        const inputMin = e.target.value;
        this.setState({
            inputMin
        });
        if (inputMin >= min && inputMin <= currentMax - minValueBetween) {
            this.setState({
                currentMin: parseInt(inputMin)
            });
            this.minValue.style.width = inputMin * 100 / max + "%";
        }
    };
    changeMinValue = (e)=>{
        e.preventDefault();
        document.addEventListener("mousemove", this.onMouseMoveMin);
        document.addEventListener("mouseup", this.onMouseUpMin);
        document.addEventListener("touchmove", this.onMouseMoveMin);
        document.addEventListener("touchend", this.onMouseUpMin);
    };
    onMouseMoveMin = (e)=>{
        const { min , max , currentMax , minValueBetween , sliderWidth , offsetSliderWidht  } = this.state;
        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = dragedWidht * 100 / sliderWidth;
        const currentMin = Math.abs(parseInt(max * dragedWidhtInPercent / 100));
        if (currentMin >= min && currentMin <= currentMax - minValueBetween) {
            this.minValue.style.width = dragedWidhtInPercent + "%";
            this.minValue.dataset.content = currentMin;
            this.setState({
                currentMin,
                inputMin: max * dragedWidhtInPercent / 100 < 0 ? 0 : currentMin
            });
            this.props.handleMin(parseInt(currentMin));
        }
    };
    onMouseUpMin = ()=>{
        document.removeEventListener("mouseup", this.onMouseUpMin);
        document.removeEventListener("mousemove", this.onMouseMoveMin);
        document.removeEventListener("touchend", this.onMouseMoveMin);
        document.removeEventListener("touchmove", this.onMouseUpMin);
    };
    setMax = (e)=>{
        const { min , max , currentMin , currentMax , minValueBetween  } = this.state;
        const inputMax = e.target.value;
        this.setState({
            inputMax
        });
        if (inputMax >= currentMin + minValueBetween && inputMax <= max) {
            this.setState({
                currentMax: parseInt(inputMax)
            });
            this.maxValue.style.width = inputMax * 100 / max + "%";
        }
    };
    changeMaxValue = (e)=>{
        e.preventDefault();
        document.addEventListener("mousemove", this.onMouseMoveMax);
        document.addEventListener("mouseup", this.onMouseUpMax);
        document.addEventListener("touchmove", this.onMouseMoveMax);
        document.addEventListener("touchend", this.onMouseUpMax);
    };
    onMouseMoveMax = (e)=>{
        const { max , currentMin , minValueBetween , sliderWidth , offsetSliderWidht  } = this.state;
        const maxWalueThumb = this.maxValue;
        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = dragedWidht * 100 / sliderWidth;
        const currentMax = Math.abs(parseInt(max * dragedWidhtInPercent / 100));
        if (currentMax >= currentMin + minValueBetween && currentMax <= max) {
            maxWalueThumb.style.width = dragedWidhtInPercent + "%";
            maxWalueThumb.dataset.content = currentMax;
            this.setState({
                currentMax,
                inputMax: parseInt(max * dragedWidhtInPercent / 100) > 0 ? currentMax : 0
            });
            this.props.handleMax(parseInt(currentMax));
        }
    };
    onMouseUpMax = ()=>{
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMoveMax);
        document.removeEventListener("touchend", this.onMouseUp);
        document.removeEventListener("touchmove", this.onMouseMoveMax);
    };
    maxForMin = ()=>{
        const { currentMax , minValueBetween  } = this.state;
        return currentMax - minValueBetween;
    };
    minForMax = ()=>{
        const { currentMin , minValueBetween  } = this.state;
        return currentMin + minValueBetween;
    };
    render() {
        const { min , max , currentMin , inputMin , currentMax , inputMax , minValueBetween  } = this.state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().current_value),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginBottom: 10
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().min_input),
                                    children: "Min: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().min_input),
                                    type: "number",
                                    onChange: this.setMin,
                                    value: inputMin,
                                    min: min,
                                    max: this.maxForMin()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().max_input),
                                    children: "Max: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().max_input),
                                    type: "number",
                                    onChange: this.setMax,
                                    value: inputMax,
                                    min: this.minForMax(),
                                    max: max
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().values),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: min
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: max
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: (ref)=>this.slider = ref,
                    id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slider),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: (ref)=>this.minValue = ref,
                            id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().min),
                            "data-content": currentMin,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: (ref)=>this.minValueDrag = ref,
                                id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().min_drag),
                                onMouseDown: this.changeMinValue,
                                onTouchStart: this.changeMinValue
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: (ref)=>this.maxValue = ref,
                            id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().max),
                            "data-content": currentMax,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: (ref)=>this.maxValueDrag = ref,
                                id: (_DoubleRangeSelecter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().max_drag),
                                onMouseDown: this.changeMaxValue,
                                onTouchStart: this.changeMaxValue
                            })
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoubleRangeSlider);


/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,158], () => (__webpack_exec__(707)));
module.exports = __webpack_exports__;

})();