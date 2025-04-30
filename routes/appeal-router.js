const Router = require("express");
const router = new Router();
const appealController = require("../controllers/AppealController");

router.post("/create", appealController.create);
router.post("/work", appealController.takeToWork);
router.post("/solving", appealController.solving);
router.post("/cancel", appealController.cancel);
router.get("/cancel", appealController.cancel_all);
router.get("/", appealController.getAll);

module.exports = router;
