const { Target, Book, User } = require("../../models");
const { sendResponse } = require("../../helpers");

const addTargets = async (req, res) => {
  const { _id } = req.user;

  const newTarget = { ...req.body, owner: req.user._id, isActive: true };

  const findUserTarget = await Target.findOne({ owner: _id });

  if (findUserTarget) {
    const { id } = findUserTarget;
    const { isActive, startDate, endDate, books } = newTarget;

    const result = await Target.findByIdAndUpdate(
      id,
      { isActive, startDate, endDate, books },
      { new: true }
    );

    await Book.updateMany(
      { _id: { $in: result.books } },
      { status: "inProgress" },
      { multi: true }
    );

    sendResponse({ res, statusMessage: "Success", data: { result } });
  } else {
    const result = await Target.create(newTarget);

    await Book.updateMany(
      { _id: { $in: result.books } },
      { status: "inProgress" },
      { multi: true }
    );

    sendResponse({ res, statusMessage: "Success", data: { result } });
  }
};

module.exports = addTargets;
