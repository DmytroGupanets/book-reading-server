const { Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    return sendResponse({
      res,
      status: 404,
      statusMessage: "Not Found",
      data: {
        message: `Book with id=${id} not found`,
      },
    });
  }

  sendResponse({
    res,
    status: 200,
    data: {
      book,
    },
  });
};

module.exports = getById;
