const { Target } = require("../../models");
const { sendResponse } = require("../../helpers");

const updateRecords = async (req, res) => {
  const { id } = req.params;

  const result = await Target.findByIdAndUpdate(
    id,
    { $push: { records: req.body } },
    { new: true }
  );

  if (!result) {
    return sendResponse({
      res,
      status: 404,
      statusMessage: "Not found",
      statusMessage: `Target with id=${id} not found `,
    });
  }
  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = updateRecords;
