const express = require("express");
const router = express.Router();
const { joiRecordSchema, joiTargetSchema } = require("../../models");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { targets: ctrl } = require("../../controllers");

router.post(
  "/",
  authenticate,
  validation(joiTargetSchema),
  controllerWrapper(ctrl.addTargets)
);

router.get("/records/:id", authenticate, controllerWrapper(ctrl.getTargetById));

router.patch(
  "/records/:id",
  authenticate,
  validation(joiRecordSchema),
  controllerWrapper(ctrl.updateRecords)
);

module.exports = router;
