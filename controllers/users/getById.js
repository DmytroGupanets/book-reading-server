const { sendResponse, validationById } = require("../../helpers");
const { User } = require("../../models");

const userGetById = async (req, res) => {
  const { id } = req.params;

  validationById({ id, res });
  const result = await User.findById(id);
  sendResponse({
    res,
    status: 200,
    data: result,
    statusMessage: "Success",
  });
};

module.exports = userGetById;
