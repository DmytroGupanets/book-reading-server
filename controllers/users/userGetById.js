// const { Users } = require("../../module");
const { sendResponse } = require("../../helpers");
const { validationById } = require("../../helpers");

const userGetById = async (req, res) => {
  const { id } = req.params;
  validationById(id);
  const result = await Users.findById(id);
  sendResponse({
    res,
    data: result,
    statusMessage: "Success",
  });
};

module.exports = userGetById;
