const mongoose = require("mongoose");

const validationById = ({ id, res }) => {
  const valid = mongoose.Types.ObjectId.isValid(id);
  if (!valid) {
    res.status(404).json({
      status: `Error this id=${id} is not found`,
      statusMessage: "Not found",
      code: 404,
    });
  }
};

module.exports = validationById;
