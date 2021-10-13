const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const getTargetById = async (req, res) => {
  const { targetId } = req.params;
  const result = await Target.findById(targetId);

  if (!result) {
    sendResponse({
      res,
      status: 404,
      statusMessage: "Not found",
      data: { statusMessage: `Target with id=${targetId} not found` },
    });
  }
  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = getTargetById;
