const express = require("express");
const router = express.Router();
const { joiRecordSchema, joiTargetSchema } = require("../../models");
const { controllerWrapper, validation } = require("../../middlewares");
const { targets: ctrl } = require("../../controllers");

router.post(
  "/",
  validation(joiTargetSchema),
  controllerWrapper(ctrl.addTargets)
);

router.get("/records/:id", controllerWrapper(ctrl.getTargetById));

router.patch(
  "/records/:id",
  validation(joiRecordSchema),
  controllerWrapper(ctrl.updateRecords)
);

module.exports = router;
