exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 7030:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "ProductsList_list__QVusC",
	"list_item": "ProductsList_list_item__NSwq3",
	"icons_list": "ProductsList_icons_list__kgT5P",
	"sublist": "ProductsList_sublist__ZKitQ"
};


/***/ }),

/***/ 8138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropdownList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7030);
/* harmony import */ var _ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductsListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductsListItem__WEBPACK_IMPORTED_MODULE_2__]);
_ProductsListItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function DropdownList({ items , subList , actionsList , actionsSubList , listItemTitle , subItemTitle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),
        children: items && items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductsListItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                item: item,
                subList: subList,
                actionsList: actionsList,
                actionsSubList: actionsSubList,
                listItemTitle: listItemTitle,
                subItemTitle: subItemTitle
            }, index))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductsListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7030);
/* harmony import */ var _ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProductsListItem({ item , subList , actionsList , actionsSubList , listItemTitle , subItemTitle  }) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const subItemTitleList = subItemTitle && subItemTitle.split(".");
    const getSubItemTitle = (item)=>{
        if (subItemTitleList.length === 1) {
            return item[subItemTitleList[0]];
        } else {
            return getSubItemTitle(item[subItemTitleList[0]], subItemTitleList.slice(1));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().list_item),
        onClick: ()=>{
            if (subList) {
                setOpen(!open);
            }
        },
        style: {
            color: open ? "#ffffff" : "#ffffff90",
            marginBottom: open ? `${item.variants.length * 70}px` : "0"
        },
        children: [
            item[listItemTitle],
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icons_list),
                children: [
                    actionsList && actionsList.map((action, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: action.icon,
                            color: action.color,
                            onClick: ()=>action.handler(item)
                        }, index)),
                    subList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronDown,
                        style: {
                            transform: open ? "rotate(180deg)" : "rotate(0deg)"
                        }
                    })
                ]
            }),
            subList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: [
                    (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublist),
                    (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublist_active)
                ].join(" "),
                style: {
                    clipPath: open ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)"
                },
                children: item[subList].map((itemSubList, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            "Color: ",
                            itemSubList.color.name,
                            " - Talle: ",
                            itemSubList.size.name,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ProductsList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icons_list),
                                children: actionsSubList && actionsSubList.map((action, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: action.icon,
                                        color: action.color,
                                        onClick: ()=>action.handler(itemSubList)
                                    }, index))
                            })
                        ]
                    }, index))
            })
        ]
    }, item._id);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
    //API_URL: 'https://fukushop.com.ar/api',
    //FRONTEND_URL: 'https://fukushop.com.ar',
    // dev
    API_URL: "http://localhost:4000/api",
    FRONTEND_URL: "http://localhost:3000"
});


/***/ })

};
;