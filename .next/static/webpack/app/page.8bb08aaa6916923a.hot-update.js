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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _searchbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbox.css */ \"(app-pages-browser)/./app/searchbox.css\");\n/* harmony import */ var _vault_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.css */ \"(app-pages-browser)/./app/vault.css\");\n/* harmony import */ var _components_gameCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameCard */ \"(app-pages-browser)/./app/components/gameCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Order\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Update the document title using the browser API\n        setLoading(true);\n        fetch(\"/api/game\", {\n            method: \"POST\"\n        }).then((res)=>res.json()).then((searchResponse)=>{\n            setSearchResults(searchResponse.games);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 29,\n        columnNumber: 25\n    }, this);\n    if (!searchResults) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 30,\n        columnNumber: 30\n    }, this);\n    // might not need this\n    let searchCriteria = {\n        textInput: \"\",\n        genre: [],\n        platform: []\n    };\n    const defaultList = searchResults.map((prop)=>{\n        var _prop_cover, _prop_genres, _prop_platforms;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: prop.name,\n            releaseDate: prop.first_release_date,\n            image_id: (_prop_cover = prop.cover) === null || _prop_cover === void 0 ? void 0 : _prop_cover.image_id,\n            summary: prop.summary,\n            genres: (_prop_genres = prop.genres) === null || _prop_genres === void 0 ? void 0 : _prop_genres.map((genre)=>genre.name + \" \"),\n            platforms: (_prop_platforms = prop.platforms) === null || _prop_platforms === void 0 ? void 0 : _prop_platforms.map((platform)=>platform.name + \" \")\n        }, \"default-\".concat(prop.id), false, {\n            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, this);\n    });\n    function getCompare(e) {\n        searchCriteria.textInput = e.target.value.toLowerCase();\n        setResult(()=>searchResults.filter((searchResults)=>{\n                var _searchResults_name;\n                return (_searchResults_name = searchResults.name) === null || _searchResults_name === void 0 ? void 0 : _searchResults_name.toLowerCase().includes(searchCriteria.textInput);\n            }));\n    }\n    function sortByProperty(array, propertyName, ascending) {\n        const newArray = [\n            ...array\n        ];\n        newArray.sort(function(a, b) {\n            const propA = a[propertyName];\n            const propB = b[propertyName];\n            if (ascending) {\n                if (propA < propB) return -1;\n                if (propA > propB) return 1;\n                return 0;\n            } else {\n                if (propA > propB) return -1;\n                if (propA < propB) return 1;\n                return 0;\n            }\n        });\n        return newArray;\n    }\n    function alphaSort() {\n        if (order === \"Asc\" || order === \"Order\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"name\", true)) : setSearchResults(sortByProperty(searchResults, \"name\", true));\n        } else if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"name\", false)) : setSearchResults(sortByProperty(searchResults, \"name\", false));\n        }\n    }\n    function dateSort() {\n        if (order === \"Asc\" || order === \"Order\") {\n            // result.length > 0 ? listItems : defaultList\n            result.length > 0 ? setResult(sortByProperty(result, \"first_release_date\", true)) : setSearchResults(sortByProperty(searchResults, \"first_release_date\", true));\n        } else if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, \"first_release_date\", false)) : setSearchResults(sortByProperty(searchResults, \"first_release_date\", false));\n        }\n    }\n    function toggleOrder() {\n        let sortProp = \"\";\n        //put a function in to determine whether date or alpha is currently selected\n        if (document.getElementById(\"radio-alpha\").checked) {\n            sortProp = \"name\";\n        } else if (document.getElementById(\"radio-date\").checked) {\n            sortProp = \"first_release_date\";\n        }\n        if (order === \"Desc\") {\n            result.length > 0 ? setResult(sortByProperty(result, sortProp, true)) : setSearchResults(sortByProperty(searchResults, sortProp, true));\n            setOrder(\"Asc\");\n        } else {\n            result.length > 0 ? setResult(sortByProperty(result, sortProp, false)) : setSearchResults(sortByProperty(searchResults, sortProp, false));\n            setOrder(\"Desc\");\n        }\n    }\n    const listItems = result.map((prop)=>{\n        var _prop_cover, _prop_genres, _prop_platforms;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: prop.name,\n            releaseDate: prop.first_release_date,\n            image_id: (_prop_cover = prop.cover) === null || _prop_cover === void 0 ? void 0 : _prop_cover.image_id,\n            summary: prop.summary,\n            genres: (_prop_genres = prop.genres) === null || _prop_genres === void 0 ? void 0 : _prop_genres.map((genre)=>genre.name + \" \"),\n            platforms: (_prop_platforms = prop.platforms) === null || _prop_platforms === void 0 ? void 0 : _prop_platforms.map((platform)=>platform.name + \" \")\n        }, \"gamecard-\".concat(prop.id), false, {\n            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n            lineNumber: 126,\n            columnNumber: 5\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"search-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" MGDb \"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            id: \"search-box\",\n                            htmlFor: \"Search\",\n                            variant: \"standard\",\n                            onKeyUp: getCompare\n                        }, void 0, false, {\n                            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sort\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sort-options\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"radio-alpha\",\n                                        value: \"alphabetical\",\n                                        name: \"sort\",\n                                        onClick: alphaSort\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"radio-alpha\",\n                                        children: \"  Abc...\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"radio-date\",\n                                        value: \"date\",\n                                        name: \"sort\",\n                                        onClick: dateSort\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"radio-date\",\n                                        children: \"  Date\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                lineNumber: 147,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sort-order\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sort-order-text\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: order\n                                        }, void 0, false, {\n                                            fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                            lineNumber: 155,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"sort-switch\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"sort-switch\",\n                                        onClick: toggleOrder\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 54\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                                lineNumber: 153,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-container\",\n                children: result.length > 0 ? listItems : searchCriteria.textInput.length > 0 ? listItems : defaultList\n            }, void 0, false, {\n                fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertspillane/Documents/repos/nextJS/app/page.jsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PISbPwPHOPC3CthhDXWV+TfnLmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDSDtBQUVUO0FBQ2Q7QUFDSjtBQUV3QjtBQUc5QixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNRLFdBQVdDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLGtEQUFrRDtRQUNsRFEsV0FBVztRQUNYSyxNQUFNLGFBQWE7WUFBQ0MsUUFBUTtRQUFNLEdBQy9CQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0xaLGlCQUFpQlksZUFBZUMsS0FBSztZQUNyQ1gsV0FBVztRQUNiO0lBQ0osR0FBRSxFQUFFO0lBRUosSUFBSUQsV0FBVyxxQkFBTyw4REFBQ2E7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNmLGVBQWUscUJBQU8sOERBQUNlO2tCQUFFOzs7Ozs7SUFFaEMsc0JBQXNCO0lBQ3BCLElBQUlDLGlCQUFpQjtRQUNuQkMsV0FBVztRQUNYQyxPQUFPLEVBQUU7UUFDVEMsVUFBVSxFQUFFO0lBQ2Q7SUFFQSxNQUFNQyxjQUFjcEIsY0FBY3FCLEdBQUcsQ0FBQyxDQUFDQztZQUt6QkEsYUFFRkEsY0FDR0E7NkJBUGIsOERBQUN4Qiw0REFBUUE7WUFFUHlCLE9BQU9ELEtBQUtFLElBQUk7WUFDaEJDLGFBQWFILEtBQUtJLGtCQUFrQjtZQUNwQ0MsUUFBUSxHQUFFTCxjQUFBQSxLQUFLTSxLQUFLLGNBQVZOLGtDQUFBQSxZQUFZSyxRQUFRO1lBQzlCRSxTQUFTUCxLQUFLTyxPQUFPO1lBQ3JCQyxNQUFNLEdBQUVSLGVBQUFBLEtBQUtRLE1BQU0sY0FBWFIsbUNBQUFBLGFBQWFELEdBQUcsQ0FBQyxDQUFDSCxRQUFVQSxNQUFNTSxJQUFJLEdBQUc7WUFDakRPLFNBQVMsR0FBRVQsa0JBQUFBLEtBQUtTLFNBQVMsY0FBZFQsc0NBQUFBLGdCQUFnQkQsR0FBRyxDQUFDLENBQUNGLFdBQWFBLFNBQVNLLElBQUksR0FBRztXQU54RCxXQUFtQixPQUFSRixLQUFLVSxFQUFFOzs7Ozs7SUFVM0IsU0FBU0MsV0FBV0MsQ0FBQztRQUNuQmxCLGVBQWVDLFNBQVMsR0FBRyxFQUFHa0IsTUFBTSxDQUFDQyxLQUFLLENBQUVDLFdBQVc7UUFFdkRoQyxVQUFVLElBQU1MLGNBQWNzQyxNQUFNLENBQUMsQ0FBQ3RDO29CQUNwQ0E7d0JBQUFBLHNCQUFBQSxjQUFjd0IsSUFBSSxjQUFsQnhCLDBDQUFBQSxvQkFBb0JxQyxXQUFXLEdBQUdFLFFBQVEsQ0FBQ3ZCLGVBQWVDLFNBQVM7O0lBRXZFO0lBRUEsU0FBU3VCLGVBQWVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxTQUFTO1FBQ3BELE1BQU1DLFdBQVc7ZUFBSUg7U0FBTTtRQUMzQkcsU0FBU0MsSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBRUMsQ0FBQztZQUN6QixNQUFNQyxRQUFRRixDQUFDLENBQUNKLGFBQWE7WUFDN0IsTUFBTU8sUUFBUUYsQ0FBQyxDQUFDTCxhQUFhO1lBRTdCLElBQUlDLFdBQVc7Z0JBQ2IsSUFBSUssUUFBUUMsT0FBTyxPQUFPLENBQUM7Z0JBQzNCLElBQUlELFFBQVFDLE9BQU8sT0FBTztnQkFDMUIsT0FBTztZQUNULE9BQU87Z0JBQ0wsSUFBSUQsUUFBUUMsT0FBTyxPQUFPLENBQUM7Z0JBQzNCLElBQUlELFFBQVFDLE9BQU8sT0FBTztnQkFDMUIsT0FBTztZQUNUO1FBQ0Y7UUFDQSxPQUFPTDtJQUNUO0lBRUEsU0FBU007UUFDUCxJQUFJNUMsVUFBVSxTQUFTQSxVQUFRLFNBQVE7WUFDckNGLE9BQU8rQyxNQUFNLEdBQUcsSUFDaEI5QyxVQUFVbUMsZUFBZXBDLFFBQVEsUUFBUSxTQUN6Q0gsaUJBQWlCdUMsZUFBZXhDLGVBQWUsUUFBUTtRQUN6RCxPQUFPLElBQUlNLFVBQVUsUUFBTztZQUMxQkYsT0FBTytDLE1BQU0sR0FBRyxJQUNoQjlDLFVBQVVtQyxlQUFlcEMsUUFBUSxRQUFRLFVBQ3pDSCxpQkFBaUJ1QyxlQUFleEMsZUFBZSxRQUFRO1FBQ3pEO0lBQ0Y7SUFDQSxTQUFTb0Q7UUFDUCxJQUFJOUMsVUFBVSxTQUFTQSxVQUFRLFNBQVE7WUFDckMsOENBQThDO1lBQzlDRixPQUFPK0MsTUFBTSxHQUFHLElBQ2hCOUMsVUFBVW1DLGVBQWVwQyxRQUFRLHNCQUFzQixTQUN2REgsaUJBQWlCdUMsZUFBZXhDLGVBQWUsc0JBQXNCO1FBQ3ZFLE9BQU8sSUFBSU0sVUFBVSxRQUFPO1lBQzFCRixPQUFPK0MsTUFBTSxHQUFHLElBQ2hCOUMsVUFBVW1DLGVBQWVwQyxRQUFRLHNCQUFzQixVQUN2REgsaUJBQWlCdUMsZUFBZXhDLGVBQWUsc0JBQXNCO1FBQ3ZFO0lBRUY7SUFFQSxTQUFTcUQ7UUFDUCxJQUFJQyxXQUFXO1FBQ2YsNEVBQTRFO1FBQzVFLElBQUdDLFNBQVNDLGNBQWMsQ0FBQyxlQUFlQyxPQUFPLEVBQUM7WUFDaERILFdBQVc7UUFDYixPQUFPLElBQUlDLFNBQVNDLGNBQWMsQ0FBQyxjQUFjQyxPQUFPLEVBQUM7WUFDdkRILFdBQVc7UUFDYjtRQUVBLElBQUloRCxVQUFVLFFBQU87WUFDbkJGLE9BQU8rQyxNQUFNLEdBQUcsSUFDaEI5QyxVQUFVbUMsZUFBZXBDLFFBQVFrRCxVQUFVLFNBQzNDckQsaUJBQWlCdUMsZUFBZXhDLGVBQWVzRCxVQUFVO1lBQ3pEL0MsU0FBUztRQUNYLE9BQU87WUFDTEgsT0FBTytDLE1BQU0sR0FBRyxJQUNoQjlDLFVBQVVtQyxlQUFlcEMsUUFBUWtELFVBQVUsVUFDM0NyRCxpQkFBaUJ1QyxlQUFleEMsZUFBZXNELFVBQVU7WUFDekQvQyxTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1tRCxZQUFZdEQsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDQztZQUtoQkEsYUFFRkEsY0FDR0E7NkJBUGIsOERBQUN4Qiw0REFBUUE7WUFFUHlCLE9BQU9ELEtBQUtFLElBQUk7WUFDaEJDLGFBQWFILEtBQUtJLGtCQUFrQjtZQUNwQ0MsUUFBUSxHQUFFTCxjQUFBQSxLQUFLTSxLQUFLLGNBQVZOLGtDQUFBQSxZQUFZSyxRQUFRO1lBQzlCRSxTQUFTUCxLQUFLTyxPQUFPO1lBQ3JCQyxNQUFNLEdBQUVSLGVBQUFBLEtBQUtRLE1BQU0sY0FBWFIsbUNBQUFBLGFBQWFELEdBQUcsQ0FBQyxDQUFDSCxRQUFVQSxNQUFNTSxJQUFJLEdBQUc7WUFDakRPLFNBQVMsR0FBRVQsa0JBQUFBLEtBQUtTLFNBQVMsY0FBZFQsc0NBQUFBLGdCQUFnQkQsR0FBRyxDQUFDLENBQUNGLFdBQWFBLFNBQVNLLElBQUksR0FBRztXQU54RCxZQUFvQixPQUFSRixLQUFLVSxFQUFFOzs7Ozs7SUFVNUIscUJBQ0UsOERBQUMyQjtRQUFLQyxXQUFZL0QsOERBQVc7OzBCQUMzQiw4REFBQ2dFO2dCQUFRN0IsSUFBRzs7a0NBQ1YsOERBQUM4QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNDO3dCQUFJSixXQUFVO2tDQUNiLDRFQUFDaEUsK0RBQVNBOzRCQUFDb0MsSUFBRzs0QkFBYWlDLFNBQVE7NEJBQVNDLFNBQVE7NEJBQVdDLFNBQVVsQzs7Ozs7Ozs7Ozs7a0NBRzNFLDhEQUFDK0I7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBSUosV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUFNQyxNQUFLO3dDQUFRckMsSUFBRzt3Q0FBY0ksT0FBTTt3Q0FBZVosTUFBSzt3Q0FBTzhDLFNBQVVwQjs7Ozs7O2tEQUNoRiw4REFBQ3FCO3dDQUFNTixTQUFRO2tEQUFjOzs7Ozs7a0RBQzdCLDhEQUFDRzt3Q0FBTUMsTUFBSzt3Q0FBUXJDLElBQUc7d0NBQWFJLE9BQU07d0NBQU9aLE1BQUs7d0NBQU84QyxTQUFVbEI7Ozs7OztrREFDdkUsOERBQUNtQjt3Q0FBTU4sU0FBUTtrREFBYTs7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ0Q7Z0NBQUlKLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBSUosV0FBVTtrREFDYiw0RUFBQzdDO3NEQUFJVDs7Ozs7Ozs7Ozs7a0RBRVAsOERBQUM4RDt3Q0FBTUMsTUFBSzt3Q0FBV3JDLElBQUc7Ozs7OztrREFBZSw4REFBQ3VDO3dDQUFNTixTQUFRO3dDQUFjSyxTQUFVakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEYsOERBQUNXO2dCQUFJSixXQUFVOzBCQUVYeEQsT0FBTytDLE1BQU0sR0FBRyxJQUFJTyxZQUFZMUMsZUFBZUMsU0FBUyxDQUFDa0MsTUFBTSxHQUFHLElBQUtPLFlBQVl0Qzs7Ozs7Ozs7Ozs7O0FBSzdGO0dBNUp3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgJy4vc2VhcmNoYm94LmNzcyc7XG5pbXBvcnQgJy4vdmF1bHQuY3NzJztcblxuaW1wb3J0IEdhbWVDYXJkIGZyb20gJy4vY29tcG9uZW50cy9nYW1lQ2FyZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnT3JkZXInKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXBkYXRlIHRoZSBkb2N1bWVudCB0aXRsZSB1c2luZyB0aGUgYnJvd3NlciBBUElcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2goJy9hcGkvZ2FtZScsIHttZXRob2Q6ICdQT1NUJ30pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHNlYXJjaFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzcG9uc2UuZ2FtZXMpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICB9LFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgaWYgKCFzZWFyY2hSZXN1bHRzKSByZXR1cm4gPHA+Tm8gcHJvZmlsZSBkYXRhPC9wPlxuXG4vLyBtaWdodCBub3QgbmVlZCB0aGlzXG4gIGxldCBzZWFyY2hDcml0ZXJpYSA9IHtcbiAgICB0ZXh0SW5wdXQ6ICcnLFxuICAgIGdlbnJlOiBbXSxcbiAgICBwbGF0Zm9ybTogW11cbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRMaXN0ID0gc2VhcmNoUmVzdWx0cy5tYXAoKHByb3ApID0+IFxuICAgIDxHYW1lQ2FyZCBcbiAgICAgIGtleT17YGRlZmF1bHQtJHtwcm9wLmlkfWB9XG4gICAgICB0aXRsZT17cHJvcC5uYW1lfSBcbiAgICAgIHJlbGVhc2VEYXRlPXtwcm9wLmZpcnN0X3JlbGVhc2VfZGF0ZX1cbiAgICAgIGltYWdlX2lkPXtwcm9wLmNvdmVyPy5pbWFnZV9pZH0gXG4gICAgICBzdW1tYXJ5PXtwcm9wLnN1bW1hcnl9IFxuICAgICAgZ2VucmVzPXtwcm9wLmdlbnJlcz8ubWFwKChnZW5yZSkgPT4gZ2VucmUubmFtZSArIFwiIFwiKX1cbiAgICAgIHBsYXRmb3Jtcz17cHJvcC5wbGF0Zm9ybXM/Lm1hcCgocGxhdGZvcm0pID0+IHBsYXRmb3JtLm5hbWUgKyBcIiBcIil9XG4gICAgLz5cbiAgKTtcblxuICBmdW5jdGlvbiBnZXRDb21wYXJlKGUpIHtcbiAgICBzZWFyY2hDcml0ZXJpYS50ZXh0SW5wdXQgPSAoZS50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKClcblxuICAgIHNldFJlc3VsdCgoKSA9PiBzZWFyY2hSZXN1bHRzLmZpbHRlcigoc2VhcmNoUmVzdWx0cykgPT4gXG4gICAgICBzZWFyY2hSZXN1bHRzLm5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQ3JpdGVyaWEudGV4dElucHV0KSlcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzb3J0QnlQcm9wZXJ0eShhcnJheSwgcHJvcGVydHlOYW1lLCBhc2NlbmRpbmcpIHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFsuLi5hcnJheV07XG4gICAgbmV3QXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBjb25zdCBwcm9wQSA9IGFbcHJvcGVydHlOYW1lXTtcbiAgICAgIGNvbnN0IHByb3BCID0gYltwcm9wZXJ0eU5hbWVdO1xuICAgICAgXG4gICAgICBpZiAoYXNjZW5kaW5nKSB7XG4gICAgICAgIGlmIChwcm9wQSA8IHByb3BCKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChwcm9wQSA+IHByb3BCKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvcEEgPiBwcm9wQikgcmV0dXJuIC0xO1xuICAgICAgICBpZiAocHJvcEEgPCBwcm9wQikgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFscGhhU29ydCAoKSB7XG4gICAgaWYgKG9yZGVyID09PSBcIkFzY1wiIHx8IG9yZGVyPT09J09yZGVyJyl7XG4gICAgICByZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICBzZXRSZXN1bHQoc29ydEJ5UHJvcGVydHkocmVzdWx0LCBcIm5hbWVcIiwgdHJ1ZSkpOlxuICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzb3J0QnlQcm9wZXJ0eShzZWFyY2hSZXN1bHRzLCBcIm5hbWVcIiwgdHJ1ZSkpXG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gXCJEZXNjXCIpe1xuICAgICAgcmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgc2V0UmVzdWx0KHNvcnRCeVByb3BlcnR5KHJlc3VsdCwgXCJuYW1lXCIsIGZhbHNlKSk6XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHNvcnRCeVByb3BlcnR5KHNlYXJjaFJlc3VsdHMsIFwibmFtZVwiLCBmYWxzZSkpXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRhdGVTb3J0KCkge1xuICAgIGlmIChvcmRlciA9PT0gXCJBc2NcIiB8fCBvcmRlcj09PSdPcmRlcicpe1xuICAgICAgLy8gcmVzdWx0Lmxlbmd0aCA+IDAgPyBsaXN0SXRlbXMgOiBkZWZhdWx0TGlzdFxuICAgICAgcmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgc2V0UmVzdWx0KHNvcnRCeVByb3BlcnR5KHJlc3VsdCwgXCJmaXJzdF9yZWxlYXNlX2RhdGVcIiwgdHJ1ZSkpIDpcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoc29ydEJ5UHJvcGVydHkoc2VhcmNoUmVzdWx0cywgXCJmaXJzdF9yZWxlYXNlX2RhdGVcIiwgdHJ1ZSkpXG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gXCJEZXNjXCIpe1xuICAgICAgcmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgc2V0UmVzdWx0KHNvcnRCeVByb3BlcnR5KHJlc3VsdCwgXCJmaXJzdF9yZWxlYXNlX2RhdGVcIiwgZmFsc2UpKSA6XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHNvcnRCeVByb3BlcnR5KHNlYXJjaFJlc3VsdHMsIFwiZmlyc3RfcmVsZWFzZV9kYXRlXCIsIGZhbHNlKSlcbiAgICB9XG4gICAgXG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVPcmRlcigpIHtcbiAgICBsZXQgc29ydFByb3AgPSAnJ1xuICAgIC8vcHV0IGEgZnVuY3Rpb24gaW4gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgZGF0ZSBvciBhbHBoYSBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFkaW8tYWxwaGEnKS5jaGVja2VkKXtcbiAgICAgIHNvcnRQcm9wID0gXCJuYW1lXCJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpby1kYXRlJykuY2hlY2tlZCl7XG4gICAgICBzb3J0UHJvcCA9IFwiZmlyc3RfcmVsZWFzZV9kYXRlXCJcbiAgICB9XG5cbiAgICBpZiAob3JkZXIgPT09IFwiRGVzY1wiKXtcbiAgICAgIHJlc3VsdC5sZW5ndGggPiAwID9cbiAgICAgIHNldFJlc3VsdChzb3J0QnlQcm9wZXJ0eShyZXN1bHQsIHNvcnRQcm9wLCB0cnVlKSkgOlxuICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzb3J0QnlQcm9wZXJ0eShzZWFyY2hSZXN1bHRzLCBzb3J0UHJvcCwgdHJ1ZSkpO1xuICAgICAgc2V0T3JkZXIoXCJBc2NcIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgc2V0UmVzdWx0KHNvcnRCeVByb3BlcnR5KHJlc3VsdCwgc29ydFByb3AsIGZhbHNlKSkgOlxuICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzb3J0QnlQcm9wZXJ0eShzZWFyY2hSZXN1bHRzLCBzb3J0UHJvcCwgZmFsc2UpKTtcbiAgICAgIHNldE9yZGVyKFwiRGVzY1wiKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxpc3RJdGVtcyA9IHJlc3VsdC5tYXAoKHByb3ApID0+IFxuICAgIDxHYW1lQ2FyZFxuICAgICAga2V5PXtgZ2FtZWNhcmQtJHtwcm9wLmlkfWB9XG4gICAgICB0aXRsZT17cHJvcC5uYW1lfSBcbiAgICAgIHJlbGVhc2VEYXRlPXtwcm9wLmZpcnN0X3JlbGVhc2VfZGF0ZX1cbiAgICAgIGltYWdlX2lkPXtwcm9wLmNvdmVyPy5pbWFnZV9pZH0gXG4gICAgICBzdW1tYXJ5PXtwcm9wLnN1bW1hcnl9IFxuICAgICAgZ2VucmVzPXtwcm9wLmdlbnJlcz8ubWFwKChnZW5yZSkgPT4gZ2VucmUubmFtZSArIFwiIFwiKX1cbiAgICAgIHBsYXRmb3Jtcz17cHJvcC5wbGF0Zm9ybXM/Lm1hcCgocGxhdGZvcm0pID0+IHBsYXRmb3JtLm5hbWUgKyBcIiBcIil9XG4gICAgLz5cbiAgKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXsgc3R5bGVzLm1haW4gfT5cbiAgICAgIDxzZWN0aW9uIGlkPSdzZWFyY2gtc2VjdGlvbic+XG4gICAgICAgIDxoMT4gTUdEYiA8L2gxPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgICAgPFRleHRGaWVsZCBpZD1cInNlYXJjaC1ib3hcIiBodG1sRm9yPVwiU2VhcmNoXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgb25LZXlVcD17IGdldENvbXBhcmUgfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29ydC1vcHRpb25zJz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJhZGlvLWFscGhhXCIgdmFsdWU9XCJhbHBoYWJldGljYWxcIiBuYW1lPVwic29ydFwiIG9uQ2xpY2s9eyBhbHBoYVNvcnQgfS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncmFkaW8tYWxwaGEnPiAgQWJjLi4uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJhZGlvLWRhdGVcIiB2YWx1ZT1cImRhdGVcIiBuYW1lPVwic29ydFwiIG9uQ2xpY2s9eyBkYXRlU29ydCB9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdyYWRpby1kYXRlJz4gIERhdGU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0LW9yZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0LW9yZGVyLXRleHQnPlxuICAgICAgICAgICAgICA8cD57IG9yZGVyIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQ9J3NvcnQtc3dpdGNoJy8+PGxhYmVsIGh0bWxGb3I9J3NvcnQtc3dpdGNoJyBvbkNsaWNrPXsgdG9nZ2xlT3JkZXIgfT48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkcy1jb250YWluZXInPlxuICAgICAgICB7LyogeyByZXN1bHQubGVuZ3RoID4gMCA/IGxpc3RJdGVtcyA6IGRlZmF1bHRMaXN0IH0gKi99XG4gICAgICAgIHsgcmVzdWx0Lmxlbmd0aCA+IDAgPyBsaXN0SXRlbXMgOiBzZWFyY2hDcml0ZXJpYS50ZXh0SW5wdXQubGVuZ3RoID4gMCAgPyBsaXN0SXRlbXMgOiBkZWZhdWx0TGlzdCB9XG4gICAgICAgIHsvKiBCVUcgLT4gaWYgbm8gbWF0Y2hpbmcgcmVzdWx0cyByZXN1bHRzLmxlbmd0aCA9PSAwIGFuZCB0aGVyZWZvcmUgaXQgc3dpdGNoZXMgYmFjayB0byBkZWZhdWx0IGxpc3QgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRleHRGaWVsZCIsInN0eWxlcyIsIkdhbWVDYXJkIiwiSG9tZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9yZGVyIiwic2V0T3JkZXIiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VhcmNoUmVzcG9uc2UiLCJnYW1lcyIsInAiLCJzZWFyY2hDcml0ZXJpYSIsInRleHRJbnB1dCIsImdlbnJlIiwicGxhdGZvcm0iLCJkZWZhdWx0TGlzdCIsIm1hcCIsInByb3AiLCJ0aXRsZSIsIm5hbWUiLCJyZWxlYXNlRGF0ZSIsImZpcnN0X3JlbGVhc2VfZGF0ZSIsImltYWdlX2lkIiwiY292ZXIiLCJzdW1tYXJ5IiwiZ2VucmVzIiwicGxhdGZvcm1zIiwiaWQiLCJnZXRDb21wYXJlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNvcnRCeVByb3BlcnR5IiwiYXJyYXkiLCJwcm9wZXJ0eU5hbWUiLCJhc2NlbmRpbmciLCJuZXdBcnJheSIsInNvcnQiLCJhIiwiYiIsInByb3BBIiwicHJvcEIiLCJhbHBoYVNvcnQiLCJsZW5ndGgiLCJkYXRlU29ydCIsInRvZ2dsZU9yZGVyIiwic29ydFByb3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImxpc3RJdGVtcyIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDEiLCJiciIsImRpdiIsImh0bWxGb3IiLCJ2YXJpYW50Iiwib25LZXlVcCIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});