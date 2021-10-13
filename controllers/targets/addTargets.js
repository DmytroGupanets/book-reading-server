const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const addTargets = async (req, res) => {
  const newTarget = req.body;

  const result = await Target.create(newTarget);

  sendResponse({ res, data: { result } });
};

module.exports = addTargets;