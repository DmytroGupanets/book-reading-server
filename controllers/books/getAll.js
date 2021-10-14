const { Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const getAll = async (req, res) => {
  const books = await Book.find({ owner: req.user._id });

  sendResponse({
    res,
    status: 200,
    statusMessage: "success",
    data: {
      books,
    },
  });
};

module.exports = getAll;
