const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { joiUserSchema } = require("../../models");

router.post(
  "/register",
  validation(joiUserSchema),
  controllerWrapper(ctrl.signup)
);

router.post("/google", controllerWrapper(ctrl.google));

router.post("/login", controllerWrapper(ctrl.login));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

module.exports = router;
