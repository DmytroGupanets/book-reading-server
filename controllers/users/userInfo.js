const { sendResponse } = require("../../helpers");

const userInfo = async (req, res) => {
  sendResponse({
    res,
    data: {
      email: req.user.email,
      name: req.user.name,
      isVerified: req.user.isVerified,
      id: req.user._id,
    },
  });
};

module.exports = userInfo;
