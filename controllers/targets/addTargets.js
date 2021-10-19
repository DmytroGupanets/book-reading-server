const { Target, Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const addTargets = async (req, res) => {
  const newTarget = { ...req.body, owner: req.user._id };
  const result = await Target.create(newTarget);

  await Book.updateMany(
    { _id: { $in: result.books } },
    { status: "inProgress" },
    { multi: true }
  );

  sendResponse({ res, statusMessage: "Success", data: { result } });
};

module.exports = addTargets;
