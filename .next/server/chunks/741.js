exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 3940:
/***/ ((module) => {

// Exports
module.exports = {
	"modal_form": "ModalForm_modal_form__aMZeF",
	"close": "ModalForm_close__p3eAx",
	"form": "ModalForm_form__5M5zG",
	"form_group": "ModalForm_form_group__UmTt4",
	"file_picker": "ModalForm_file_picker__FBDUO"
};


/***/ }),

/***/ 7741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3940);
/* harmony import */ var _ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ModalForm({ inputs , onSubmit , title , submitText ="submitText prop" , form , setForm , editing , setter , setSetter , defaultValues , status  }) {
    const [filesSelected, setFilesSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleFileChange = (e)=>{
        if (e.target.multiple) {
            setFilesSelected({
                ...filesSelected,
                [e.target.name]: `${e.target.files.length} files selected`
            });
            return setForm({
                ...form,
                [e.target.name]: e.target.files
            });
        }
        setFilesSelected({
            ...filesSelected,
            [e.target.name]: `${e.target.files[0].name} selected!`
        });
        return setForm({
            ...form,
            [e.target.name]: e.target.files[0]
        });
    };
    if (status && status.status === "loading") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal_form),
        animation: "appear",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faXmark,
                className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
                onClick: ()=>setSetter(!setter)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                onSubmit: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__.HashLoader, {
                    color: "white",
                    size: 50
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal_form),
        animation: "appear",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faXmark,
                className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
                onClick: ()=>setSetter(!setter)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                onSubmit: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: title
                    }),
                    inputs.map((input, index)=>{
                        if (input.type === "select") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: input.name,
                                    children: input.label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    name: input.name,
                                    id: input.name,
                                    value: form[input.name],
                                    onChange: handleChange,
                                    children: input.options.map((option, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: option.value,
                                            children: option.label
                                        }, index);
                                    })
                                })
                            ]
                        }, index);
                        if (input.type === "color") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: input.name,
                                    children: input.label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: input.type,
                                    name: input.name,
                                    id: input.name,
                                    defaultValue: editing ? form[input.name] : defaultValues[input.name],
                                    onChange: (e)=>handleChange(e)
                                })
                            ]
                        }, index);
                        if (input.type === "textarea") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: input.name,
                                    children: input.label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    name: input.name,
                                    id: input.name,
                                    value: editing ? form[input.name] : defaultValues[input.name],
                                    onChange: (e)=>handleChange(e)
                                })
                            ]
                        }, index);
                        if (input.type === "file") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: input.name,
                                    children: input.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    htmlFor: input.name,
                                    className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().file_picker),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Choose a file"
                                        }),
                                        input.multiple && filesSelected[input.name] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                fontSize: 12,
                                                color: "var(--color-success)"
                                            },
                                            children: filesSelected[input.name]
                                        }),
                                        !input.multiple && filesSelected[input.name] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                fontSize: 12,
                                                color: "var(--color-success)"
                                            },
                                            children: filesSelected[input.name]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: input.type,
                                    name: input.name,
                                    id: input.name,
                                    onChange: (e)=>handleFileChange(e),
                                    multiple: input.multiple ? true : false
                                })
                            ]
                        }, index);
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ModalForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: input.name,
                                    children: input.label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: input.type,
                                    name: input.name,
                                    id: input.name,
                                    value: editing ? form[input.name] : defaultValues[input.name],
                                    onChange: (e)=>handleChange(e)
                                })
                            ]
                        }, index);
                    }),
                    status && status.status === "error" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        animation: "appear",
                        className: "error",
                        children: status.message
                    }),
                    status && status.status === "success" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        animation: "appear",
                        className: "success",
                        children: status.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        onClick: onSubmit,
                        children: submitText
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;