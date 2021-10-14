const { Book } = require("../../models");
const { sendResponse } = require("../../helpers");

const addResumeById = async (req, res) => {
  const { id } = req.params;
  const { resume } = req.body;

  if (!resume) {
    sendResponse({
      res,
      status: 400,
      statusMessage: "Bad Request",
      data: {
        message: "Resume field is empty",
      },
    });
  }

  const book = await Book.findById(id);

  if (book.status !== "completed") {
    sendResponse({
      res,
      status: 400,
      statusMessage: "Bad Request",
      data: {
        message: `Book with id=${id} have not been read`,
      },
    });
  }

  const result = await Book.findByIdAndUpdate(id, { resume }, { new: true });

  sendResponse({
    res,
    status: 200,
    statusMessage: "Success",
    data: {
      result,
    },
  });
};

module.exports = addResumeById;
