const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const updateRecords = async (req, res) => {
  const { targetId } = req.params;

  const result = await Target.findByIdAndUpdate(
    targetId,
    { $push: { records: req.body } },
    { new: true }
  );

  if (!result) {
    sendResponse({
      res,
      status: 404,
      statusMessage: "Not found",
      statusMessage: `Target with id=${targetId} not found `,
    });
  }
  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = updateRecords;
