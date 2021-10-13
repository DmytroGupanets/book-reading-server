const express = require("express");
const { users: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  // validation,
  // authnticate,
} = require("../../middlewares");
// const { joiUserschema } = require("../../module/");

const router = express.Router();

router.get("/:id", controllerWrapper(ctrl.userGetById));

module.exports = router;
