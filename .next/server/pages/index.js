"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Card.js


function Card({ name , wins , loses , prevChamp , nc  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: prevChamp !== "x" && "champ",
                        src: `./img/${name}.jpg`,
                        alt: name
                    }),
                    prevChamp !== "x" && /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: prevChamp
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: wins
                            }),
                            " wins | ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: loses
                            }),
                            "  loses"
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./libs/google_sheet.js

async function getDataFromList() {
    try {
        const target = [
            "https://www.googleapis.com/auth/spreadsheets.readonly"
        ];
        const jwt = new external_googleapis_namespaceObject.google.auth.JWT(process.env.GOOGLE_SHEETS_CLIENT_EMAIL, null, (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"), target);
        const sheets = external_googleapis_namespaceObject.google.sheets({
            version: "v4",
            auth: jwt
        });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: "main"
        });
        const rows = response.data.values;
        if (rows.length) {
            return rows.map((row)=>({
                    name: row[4],
                    wins: row[1],
                    loses: row[2],
                    nc: row[3],
                    prevChamp: row[0]
                }));
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}

;// CONCATENATED MODULE: ./pages/index.js




// import styles from '../styles/Home.module.css'

function IndexPage({ main  }) {
    const sorted = main.sort((a, b)=>b.wins - a.wins);
    const cards = sorted.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
            name: item.name,
            wins: item.wins,
            loses: item.loses,
            nc: item.nc,
            prevChamp: item.prevChamp
        }, item.name));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Balls of Fury"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Balls of Fury"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "September championship"
                    }),
                    cards
                ]
            })
        ]
    });
}
async function getStaticProps(context) {
    const main = await getDataFromList();
    return {
        props: {
            main: main.slice(1, main.length)
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(421)));
module.exports = __webpack_exports__;

})();