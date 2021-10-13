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
      statusMessage: `Target with id=${id} not found `,
    });
  }
  sendResponse({ res, data: { result } });
};

module.exports = updateRecords;
