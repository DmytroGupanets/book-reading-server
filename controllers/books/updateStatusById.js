const { Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const updateStatusById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return sendResponse({
      res,
      status: 400,
      data: {
        message: "Missing status field",
      },
    });
  }

  const book = await Book.findByIdAndUpdate(id, { status }, { new: true });

  if (!book) {
    return sendResponse({
      res,
      status: 404,
      statusMessage: "Not Found",
      data: {
        message: `Book with id=${id} not found!`,
      },
    });
  }

  sendResponse({
    res,
    status: 200,
    statusMessage: "Success",
    data: {
      book,
    },
  });
};

module.exports = updateStatusById;
