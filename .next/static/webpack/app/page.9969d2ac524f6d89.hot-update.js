"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _searchbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbox.css */ \"(app-pages-browser)/./app/searchbox.css\");\n/* harmony import */ var _vault_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.css */ \"(app-pages-browser)/./app/vault.css\");\n/* harmony import */ var _components_gameCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameCard */ \"(app-pages-browser)/./app/components/gameCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Order\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Update the document title using the browser API\n        setLoading(true);\n        fetch(\"/api/game\", {\n            method: \"POST\"\n        }).then((res)=>res.json()).then((searchResponse)=>{\n            setSearchResults(searchResponse.games);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 29,\n        columnNumber: 25\n    }, this);\n    if (!searchResults) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 30,\n        columnNumber: 30\n    }, this);\n    // might not need this\n    let searchCriteria = {\n        textInput: \"\",\n        genre: [],\n        platform: []\n    };\n    const defaultList = searchResults.map((prop)=>{\n        var _prop_cover, _prop_genres, _prop_platforms;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: prop.name,\n            releaseDate: prop.first_release_date,\n            image_id: (_prop_cover = prop.cover) === null || _prop_cover === void 0 ? void 0 : _prop_cover.image_id,\n            summary: prop.summary,\n            genres: (_prop_genres = prop.genres) === null || _prop_genres === void 0 ? void 0 : _prop_genres.map((genre)=>genre.name + \" \"),\n            platforms: (_prop_platforms = prop.platforms) === null || _prop_platforms === void 0 ? void 0 : _prop_platforms.map((platform)=>platform.name + \" \")\n        }, \"default-\".concat(prop.id), false, {\n            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, this);\n    });\n    function getCompare(e) {\n        searchCriteria.textInput = e.target.value.toLowerCase();\n        setResult(()=>searchResults.filter((searchResults)=>{\n                var _searchResults_name;\n                return (_searchResults_name = searchResults.name) === null || _searchResults_name === void 0 ? void 0 : _searchResults_name.toLowerCase().includes(searchCriteria.textInput);\n            }));\n    }\n    function sortByProperty(array, propertyName, ascending) {\n        const newArray = [\n            ...array\n        ];\n        newArray.sort(function(a, b) {\n            const propA = a[propertyName];\n            const propB = b[propertyName];\n            if (ascending) {\n                if (propA < propB) return -1;\n                if (propA > propB) return 1;\n                return 0;\n            } else {\n                if (propA > propB) return -1;\n                if (propA < propB) return 1;\n                return 0;\n            }\n        });\n        return newArray;\n    }\n    function alphaSort() {\n        if (order === \"Asc\" || order === \"Order\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"name\", true)) : setSearchResults(sortByProperty(searchResults, \"name\", true));\n        } else if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"name\", false)) : setSearchResults(sortByProperty(searchResults, \"name\", false));\n        }\n    }\n    function dateSort() {\n        if (order === \"Asc\" || order === \"Order\") {\n            // result.length > 0 ? listItems : defaultList\n            result.length > 0 ? setResult(sortByProperty(result, \"first_release_date\", true)) : setSearchResults(sortByProperty(searchResults, \"first_release_date\", true));\n        } else if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"first_release_date\", false)) : setSearchResults(sortByProperty(searchResults, \"first_release_date\", false));\n        }\n    }\n    function toggleOrder() {\n        let sortProp = \"\";\n        //put a function in to determine whether date or alpha is currently selected\n        if (document.getElementById(\"radio-alpha\").checked) {\n            sortProp = \"name\";\n        } else if (document.getElementById(\"radio-date\").checked) {\n            sortProp = \"first_release_date\";\n        }\n        if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, sortProp, true)) : setSearchResults(sortByProperty(searchResults, sortProp, true));\n            setOrder(\"Asc\");\n        } else {\n            result.length > 0 ? setResult(sortByProperty(result, sortProp, false)) : setSearchResults(sortByProperty(searchResults, sortProp, false));\n            setOrder(\"Desc\");\n        }\n    }\n    const listItems = result.map((prop)=>{\n        var _prop_cover, _prop_genres, _prop_platforms;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: prop.name,\n            releaseDate: prop.first_release_date,\n            image_id: (_prop_cover = prop.cover) === null || _prop_cover === void 0 ? void 0 : _prop_cover.image_id,\n            summary: prop.summary,\n            genres: (_prop_genres = prop.genres) === null || _prop_genres === void 0 ? void 0 : _prop_genres.map((genre)=>genre.name + \" \"),\n            platforms: (_prop_platforms = prop.platforms) === null || _prop_platforms === void 0 ? void 0 : _prop_platforms.map((platform)=>platform.name + \" \")\n        }, \"gamecard-\".concat(prop.id), false, {\n            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n            lineNumber: 126,\n            columnNumber: 5\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"search-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" MGDb \"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            id: \"search-box\",\n                            htmlFor: \"Search\",\n                            variant: \"standard\",\n                            onKeyUp: getCompare\n                        }, void 0, false, {\n                            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sort\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sort-options\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"radio-alpha\",\n                                        value: \"alphabetical\",\n                                        name: \"sort\",\n                                        onClick: alphaSort\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"radio-alpha\",\n                                        children: \"  Abc...\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"radio-date\",\n                                        value: \"date\",\n                                        name: \"sort\",\n                                        onClick: dateSort\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"radio-date\",\n                                        children: \"  Date\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                lineNumber: 147,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sort-order\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sort-order-text\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: order\n                                        }, void 0, false, {\n                                            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                            lineNumber: 155,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"sort-switch\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"sort-switch\",\n                                        onClick: toggleOrder\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 54\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                lineNumber: 153,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-container\",\n                children: result.length > 0 ? listItems : searchCriteria ? listItems : defaultList\n            }, void 0, false, {\n                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PISbPwPHOPC3CthhDXWV+TfnLmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrREFDdkUsOERBQUNtQjt3Q0FBTU4sU0FBUTtrREFBYTs7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ0Q7Z0NBQUlKLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBSUosV0FBVTtrREFDYiw0RUFBQzdDO3NEQUFJVDs7Ozs7Ozs7Ozs7a0RBRVAsOERBQUM4RDt3Q0FBTUMsTUFBSzt3Q0FBV3JDLElBQUc7Ozs7OztrREFBZSw4REFBQ3VDO3dDQUFNTixTQUFRO3dDQUFjSyxTQUFVakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEYsOERBQUNXO2dCQUFJSixXQUFVOzBCQUVYeEQsT0FBTytDLE1BQU0sR0FBRyxJQUFJTyxZQUFZMUMsaUJBQWtCMEMsWUFBWXRDOzs7Ozs7Ozs7Ozs7QUFLeEU7R0E1SndCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCAnLi9zZWFyY2hib3guY3NzJztcbmltcG9ydCAnLi92YXVsdC5jc3MnO1xuXG5pbXBvcnQgR2FtZUNhcmQgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVDYXJkJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKCdPcmRlcicpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVcGRhdGUgdGhlIGRvY3VtZW50IHRpdGxlIHVzaW5nIHRoZSBicm93c2VyIEFQSVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBmZXRjaCgnL2FwaS9nYW1lJywge21ldGhvZDogJ1BPU1QnfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoc2VhcmNoUmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hSZXNwb25zZS5nYW1lcylcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoIXNlYXJjaFJlc3VsdHMpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGE8L3A+XG5cbi8vIG1pZ2h0IG5vdCBuZWVkIHRoaXNcbiAgbGV0IHNlYXJjaENyaXRlcmlhID0ge1xuICAgIHRleHRJbnB1dDogJycsXG4gICAgZ2VucmU6IFtdLFxuICAgIHBsYXRmb3JtOiBbXVxuICB9XG5cbiAgY29uc3QgZGVmYXVsdExpc3QgPSBzZWFyY2hSZXN1bHRzLm1hcCgocHJvcCkgPT4gXG4gICAgPEdhbWVDYXJkIFxuICAgICAga2V5PXtgZGVmYXVsdC0ke3Byb3AuaWR9YH1cbiAgICAgIHRpdGxlPXtwcm9wLm5hbWV9IFxuICAgICAgcmVsZWFzZURhdGU9e3Byb3AuZmlyc3RfcmVsZWFzZV9kYXRlfVxuICAgICAgaW1hZ2VfaWQ9e3Byb3AuY292ZXI/LmltYWdlX2lkfSBcbiAgICAgIHN1bW1hcnk9e3Byb3Auc3VtbWFyeX0gXG4gICAgICBnZW5yZXM9e3Byb3AuZ2VucmVzPy5tYXAoKGdlbnJlKSA9PiBnZW5yZS5uYW1lICsgXCIgXCIpfVxuICAgICAgcGxhdGZvcm1zPXtwcm9wLnBsYXRmb3Jtcz8ubWFwKChwbGF0Zm9ybSkgPT4gcGxhdGZvcm0ubmFtZSArIFwiIFwiKX1cbiAgICAvPlxuICApO1xuXG4gIGZ1bmN0aW9uIGdldENvbXBhcmUoZSkge1xuICAgIHNlYXJjaENyaXRlcmlhLnRleHRJbnB1dCA9IChlLnRhcmdldC52YWx1ZSkudG9Mb3dlckNhc2UoKVxuXG4gICAgc2V0UmVzdWx0KCgpID0+IHNlYXJjaFJlc3VsdHMuZmlsdGVyKChzZWFyY2hSZXN1bHRzKSA9PiBcbiAgICAgIHNlYXJjaFJlc3VsdHMubmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hDcml0ZXJpYS50ZXh0SW5wdXQpKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCeVByb3BlcnR5KGFycmF5LCBwcm9wZXJ0eU5hbWUsIGFzY2VuZGluZykge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLmFycmF5XTtcbiAgICBuZXdBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGNvbnN0IHByb3BBID0gYVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgY29uc3QgcHJvcEIgPSBiW3Byb3BlcnR5TmFtZV07XG4gICAgICBcbiAgICAgIGlmIChhc2NlbmRpbmcpIHtcbiAgICAgICAgaWYgKHByb3BBIDwgcHJvcEIpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKHByb3BBID4gcHJvcEIpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wQSA+IHByb3BCKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChwcm9wQSA8IHByb3BCKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gYWxwaGFTb3J0ICgpIHtcbiAgICBpZiAob3JkZXIgPT09IFwiQXNjXCIgfHwgb3JkZXI9PT0nT3JkZXInKXtcbiAgICAgIHJlc3VsdC5sZW5ndGggPiAwID9cbiAgICAgIHNldFJlc3VsdChzb3J0QnlQcm9wZXJ0eShyZXN1bHQsIFwibmFtZVwiLCB0cnVlKSk6XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHNvcnRCeVByb3BlcnR5KHNlYXJjaFJlc3VsdHMsIFwibmFtZVwiLCB0cnVlKSlcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSBcIkRlc2NcIil7XG4gICAgICByZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICBzZXRSZXN1bHQoc29ydEJ5UHJvcGVydHkocmVzdWx0LCBcIm5hbWVcIiwgZmFsc2UpKTpcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoc29ydEJ5UHJvcGVydHkoc2VhcmNoUmVzdWx0cywgXCJuYW1lXCIsIGZhbHNlKSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGF0ZVNvcnQoKSB7XG4gICAgaWYgKG9yZGVyID09PSBcIkFzY1wiIHx8IG9yZGVyPT09J09yZGVyJyl7XG4gICAgICAvLyByZXN1bHQubGVuZ3RoID4gMCA/IGxpc3RJdGVtcyA6IGRlZmF1bHRMaXN0XG4gICAgICByZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICBzZXRSZXN1bHQoc29ydEJ5UHJvcGVydHkocmVzdWx0LCBcImZpcnN0X3JlbGVhc2VfZGF0ZVwiLCB0cnVlKSkgOlxuICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzb3J0QnlQcm9wZXJ0eShzZWFyY2hSZXN1bHRzLCBcImZpcnN0X3JlbGVhc2VfZGF0ZVwiLCB0cnVlKSlcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSBcIkRlc2NcIil7XG4gICAgICByZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICBzZXRSZXN1bHQoc29ydEJ5UHJvcGVydHkocmVzdWx0LCBcImZpcnN0X3JlbGVhc2VfZGF0ZVwiLCBmYWxzZSkpIDpcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoc29ydEJ5UHJvcGVydHkoc2VhcmNoUmVzdWx0cywgXCJmaXJzdF9yZWxlYXNlX2RhdGVcIiwgZmFsc2UpKVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU9yZGVyKCkge1xuICAgIGxldCBzb3J0UHJvcCA9ICcnXG4gICAgLy9wdXQgYSBmdW5jdGlvbiBpbiB0byBkZXRlcm1pbmUgd2hldGhlciBkYXRlIG9yIGFscGhhIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpby1hbHBoYScpLmNoZWNrZWQpe1xuICAgICAgc29ydFByb3AgPSBcIm5hbWVcIlxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhZGlvLWRhdGUnKS5jaGVja2VkKXtcbiAgICAgIHNvcnRQcm9wID0gXCJmaXJzdF9yZWxlYXNlX2RhdGVcIlxuICAgIH1cblxuICAgIGlmIChvcmRlciA9PT0gXCJEZXNjXCIpe1xuICAgICAgcmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgc2V0UmVzdWx0KHNvcnRCeVByb3BlcnR5KHJlc3VsdCwgc29ydFByb3AsIHRydWUpKSA6XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHNvcnRCeVByb3BlcnR5KHNlYXJjaFJlc3VsdHMsIHNvcnRQcm9wLCB0cnVlKSk7XG4gICAgICBzZXRPcmRlcihcIkFzY1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICBzZXRSZXN1bHQoc29ydEJ5UHJvcGVydHkocmVzdWx0LCBzb3J0UHJvcCwgZmFsc2UpKSA6XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHNvcnRCeVByb3BlcnR5KHNlYXJjaFJlc3VsdHMsIHNvcnRQcm9wLCBmYWxzZSkpO1xuICAgICAgc2V0T3JkZXIoXCJEZXNjXCIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbGlzdEl0ZW1zID0gcmVzdWx0Lm1hcCgocHJvcCkgPT4gXG4gICAgPEdhbWVDYXJkXG4gICAgICBrZXk9e2BnYW1lY2FyZC0ke3Byb3AuaWR9YH1cbiAgICAgIHRpdGxlPXtwcm9wLm5hbWV9IFxuICAgICAgcmVsZWFzZURhdGU9e3Byb3AuZmlyc3RfcmVsZWFzZV9kYXRlfVxuICAgICAgaW1hZ2VfaWQ9e3Byb3AuY292ZXI/LmltYWdlX2lkfSBcbiAgICAgIHN1bW1hcnk9e3Byb3Auc3VtbWFyeX0gXG4gICAgICBnZW5yZXM9e3Byb3AuZ2VucmVzPy5tYXAoKGdlbnJlKSA9PiBnZW5yZS5uYW1lICsgXCIgXCIpfVxuICAgICAgcGxhdGZvcm1zPXtwcm9wLnBsYXRmb3Jtcz8ubWFwKChwbGF0Zm9ybSkgPT4gcGxhdGZvcm0ubmFtZSArIFwiIFwiKX1cbiAgICAvPlxuICApO1xuICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9eyBzdHlsZXMubWFpbiB9PlxuICAgICAgPHNlY3Rpb24gaWQ9J3NlYXJjaC1zZWN0aW9uJz5cbiAgICAgICAgPGgxPiBNR0RiIDwvaDE+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwic2VhcmNoLWJveFwiIGh0bWxGb3I9XCJTZWFyY2hcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBvbktleVVwPXsgZ2V0Q29tcGFyZSB9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0LW9wdGlvbnMnPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicmFkaW8tYWxwaGFcIiB2YWx1ZT1cImFscGhhYmV0aWNhbFwiIG5hbWU9XCJzb3J0XCIgb25DbGljaz17IGFscGhhU29ydCB9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdyYWRpby1hbHBoYSc+ICBBYmMuLi48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicmFkaW8tZGF0ZVwiIHZhbHVlPVwiZGF0ZVwiIG5hbWU9XCJzb3J0XCIgb25DbGljaz17IGRhdGVTb3J0IH0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3JhZGlvLWRhdGUnPiAgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnQtb3JkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnQtb3JkZXItdGV4dCc+XG4gICAgICAgICAgICAgIDxwPnsgb3JkZXIgfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0nc29ydC1zd2l0Y2gnLz48bGFiZWwgaHRtbEZvcj0nc29ydC1zd2l0Y2gnIG9uQ2xpY2s9eyB0b2dnbGVPcmRlciB9PjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzLWNvbnRhaW5lcic+XG4gICAgICAgIHsvKiB7IHJlc3VsdC5sZW5ndGggPiAwID8gbGlzdEl0ZW1zIDogZGVmYXVsdExpc3QgfSAqL31cbiAgICAgICAgeyByZXN1bHQubGVuZ3RoID4gMCA/IGxpc3RJdGVtcyA6IHNlYXJjaENyaXRlcmlhICA/IGxpc3RJdGVtcyA6IGRlZmF1bHRMaXN0IH1cbiAgICAgICAgey8qIEJVRyAtPiBpZiBubyBtYXRjaGluZyByZXN1bHRzIHJlc3VsdHMubGVuZ3RoID09IDAgYW5kIHRoZXJlZm9yZSBpdCBzd2l0Y2hlcyBiYWNrIHRvIGRlZmF1bHQgbGlzdCAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGV4dEZpZWxkIiwic3R5bGVzIiwiR2FtZUNhcmQiLCJIb21lIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib3JkZXIiLCJzZXRPcmRlciIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJzZWFyY2hSZXNwb25zZSIsImdhbWVzIiwicCIsInNlYXJjaENyaXRlcmlhIiwidGV4dElucHV0IiwiZ2VucmUiLCJwbGF0Zm9ybSIsImRlZmF1bHRMaXN0IiwibWFwIiwicHJvcCIsInRpdGxlIiwibmFtZSIsInJlbGVhc2VEYXRlIiwiZmlyc3RfcmVsZWFzZV9kYXRlIiwiaW1hZ2VfaWQiLCJjb3ZlciIsInN1bW1hcnkiLCJnZW5yZXMiLCJwbGF0Zm9ybXMiLCJpZCIsImdldENvbXBhcmUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsImluY2x1ZGVzIiwic29ydEJ5UHJvcGVydHkiLCJhcnJheSIsInByb3BlcnR5TmFtZSIsImFzY2VuZGluZyIsIm5ld0FycmF5Iiwic29ydCIsImEiLCJiIiwicHJvcEEiLCJwcm9wQiIsImFscGhhU29ydCIsImxlbmd0aCIsImRhdGVTb3J0IiwidG9nZ2xlT3JkZXIiLCJzb3J0UHJvcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwibGlzdEl0ZW1zIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsImJyIiwiZGl2IiwiaHRtbEZvciIsInZhcmlhbnQiLCJvbktleVVwIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});