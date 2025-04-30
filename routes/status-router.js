const Router = require("express");
const router = new Router();
const statusController = require("../controllers/StatusController");

router.post("/create", statusController.create);
router.delete("/", statusController.delete);

module.exports = router;
