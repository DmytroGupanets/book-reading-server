const express = require("express");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  authenticate,
  validation,
} = require("../../middlewares");
const { joiUserVerifySchema } = require("../../models");

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

router.post("/current", authenticate, controllerWrapper(ctrl.userInfo));

router.get("/verify/:verifyToken", controllerWrapper(ctrl.verify));

router.post(
  "/verify",
  validation(joiUserVerifySchema),
  controllerWrapper(ctrl.repeatVerify)
);

module.exports = router;
