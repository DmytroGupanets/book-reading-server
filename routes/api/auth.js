const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  //   validation,
  //   authenticate,
} = require("../../middlewares");
// const { joiUserSchema } = require("../../models");

// router.post(
//   "/register",
//   validation(joiUserSchema),
//   controllerWrapper(ctrl.signup)
// );

router.post("/login", controllerWrapper(ctrl.login));

// router.post("/logout", authenticate, controllerWrapper(ctrl.signout));

module.exports = router;
