const express = require("express");
const router = express.Router();
const { controllerWrapper, validation } = require("../../middlewares");
const { targets: ctrl } = require("../../controllers");

router.post("/", controllerWrapper(ctrl.addTargets));

router.patch("/records/:targetId", controllerWrapper(ctrl.updateRecords));

module.exports = router;
