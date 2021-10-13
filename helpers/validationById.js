const mongoose = require("mongoose");
const { sendResponse } = require("./sendResponse");

const validationById = (id) => {
  const valid = mongoose.Types.ObjectId.isValid(id);
  if (!valid) {
    sendResponse({
      res,
      status: 404,
      statusMessage: `User with id=${id} not found`,
    });
  }
};

module.exports = { validationById };
