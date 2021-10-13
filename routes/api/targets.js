const exspress = require("exspress");
const router = exspress();
const { controllerWrapper, validation } = require("../../middlewares");
const { targets: ctrl } = require("../../controllers");

router.get("/", controllerWrapper(ctrl.getAllTargets));

router.post("/", controllerWrapper(ctrl.addTargets));

router.patch("/targetId", controllerWrapper(ctrl.updateTargets));

module.exports = router;
