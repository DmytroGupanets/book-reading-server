const express = require("express");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  // authnticate,
} = require("../../middlewares");
const { joiUserSchema } = require("../../models");

router.get("/:id", controllerWrapper(ctrl.getById));

module.exports = router;
