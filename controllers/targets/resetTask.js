const { sendResponse } = require("../../helpers");
const { Target, Book } = require("../../models");

const resetTask = async (req, res) => {
  const { id } = req.params;

  const target = await Target.findById(id);

  await Book.updateMany(
    { _id: { $in: target.books } },
    { status: "completed" },
    { multi: true }
  );

  const resetedTarget = {
    startDate: "00.00.0000",
    endDate: "00.00.0000",
    books: [],
    records: [],
    isActive: false,
  };

  const result = await Target.findByIdAndUpdate(
    id,
    { ...resetedTarget },
    { new: true }
  );

  sendResponse({
    res,
    status: 200,
    statusMessage: "Target reset successfully",
    data: {
      target: result,
    },
  });
};

module.exports = resetTask;
