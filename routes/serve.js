const Bundler = require('parcel-bundler');
const express = require('express');
const router = express.Router();


router.use(async (req, res, next) => {
    try {
        const strippedPath = req.path.replace('..', '');
        const bundler = new Bundler("./user_files" + strippedPath, {
            outDir: `./public/serve`,
            publicUrl: "/serve",
        });
        const parcel_middleware = bundler.middleware();
        return parcel_middleware(req, res, next);
    } catch (e) {
        console.log(e);
        return res.sendStatus(404);
    }
});

module.exports = router; 