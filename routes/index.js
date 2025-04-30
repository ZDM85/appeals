const Router = require("express");
const router = new Router();
const appealRouter = require("./appeal-router");
const statusRouter = require("./status-router");

router.use("/appeal", appealRouter);
router.use("/status", statusRouter);

module.exports = router;
