const { Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const add = async (req, res) => {
  const newBook = { ...req.body, owner: req.user._id };
  const book = await Book.create(newBook);

  return sendResponse({ res, data: { book }, status: 201 });
};

module.exports = add;
