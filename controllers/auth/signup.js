const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    sendResponse({
      res,
      status: 409,
      statusMessage: "error",
      data: { message: "Email in use" },
    });
    return;
  }

  const newUser = new User({ email, name });
  newUser.setPassword(password);
  newUser.setVerifyToken();
  await newUser.save();

  sendResponse({
    res,
    status: 201,
    data: {
      user: {
        email: newUser.email,
        name: newUser.name,
      },
    },
  });
};

module.exports = signup;
