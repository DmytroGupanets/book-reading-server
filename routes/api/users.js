const express = require("express");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { controllerWrapper, authenticate } = require("../../middlewares");

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

module.exports = router;
