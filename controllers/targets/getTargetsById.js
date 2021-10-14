const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const getTargetById = async (req, res) => {
  const { id } = req.params;
  const result = await Target.find({ owner: id });

  if (!result) {
    sendResponse({
      res,
      status: 404,
      statusMessage: "Not found",
      data: { statusMessage: `Target with id=${id} not found` },
    });
  }
  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = getTargetById;
