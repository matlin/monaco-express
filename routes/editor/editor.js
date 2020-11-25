const Bundler = require('parcel-bundler');
const fs = require('fs');
var express = require('express');
var router = express.Router();

const sources = [__dirname + "/app/index.html", __dirname + "../../node_modules/monaco-editor/esm/vs/language/json/json.worker.js", __dirname + "../../node_modules/monaco-editor/esm/vs/language/css/css.worker.js", __dirname + "../../node_modules/monaco-editor/esm/vs/language/html/html.worker.js", __dirname + "../../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js", __dirname + "../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js"];
const bundler = new Bundler(__dirname + "/app/index.html", {
    outDir: `./public/dist`,
    publicUrl: "/dist",
});

const parcel_middleware = bundler.middleware();

router.use(async (req, res, next) => {
    return parcel_middleware(req, res, next);
});

module.exports = router;