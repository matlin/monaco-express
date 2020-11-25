const fs = require('fs');
const express = require('express');
const router = express.Router();


router.get('/', async function (req, res, next) {
    const files = fs.readdirSync("./user_files");
    res.send(files);
});

router.get('*', async function (req, res, next) {
    const strippedPath = req.path.replace('..', '');
    const file = fs.readFileSync("./user_files" + strippedPath);
    res.send(file);
});

module.exports = router;