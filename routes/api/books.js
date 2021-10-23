const express = require("express");
const router = express.Router();
const { books: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  authenticate,
  validation,
} = require("../../middlewares");
const {
  joiBookSchema,
  joiBookUpdateStatusSchema,
  joiBookAddResumeSchema,
} = require("../../models");

router.get("/", authenticate, controllerWrapper(ctrl.getAll));

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validation(joiBookSchema),
  controllerWrapper(ctrl.add)
);

router.patch(
  "/status/:id",
  authenticate,
  validation(joiBookUpdateStatusSchema),
  controllerWrapper(ctrl.updateStatusById)
);

router.put(
  "/resume/:id",
  validation(joiBookAddResumeSchema),
  controllerWrapper(ctrl.addResumeById)
);

module.exports = router;
