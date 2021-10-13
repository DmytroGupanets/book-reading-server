const express = require("express");
const router = express.Router();
const { joiRecordSchema } = require("../../models");
const { controllerWrapper, validation } = require("../../middlewares");
const { targets: ctrl } = require("../../controllers");

router.post("/", controllerWrapper(ctrl.addTargets));

router.patch(
  "/records/:targetId",
  validation(joiRecordSchema),
  controllerWrapper(ctrl.updateRecords)
);

module.exports = router;
