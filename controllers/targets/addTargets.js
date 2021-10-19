const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const addTargets = async (req, res) => {
  const newTarget = { ...req.body, owner: req.user._id };

  const result = await Target.create(newTarget);

  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = addTargets;
