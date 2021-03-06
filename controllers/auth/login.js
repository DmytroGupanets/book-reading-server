const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password) || !user.isVerified) {
    return sendResponse({
      res,
      status: 401,
      statusMessage: "Unauthorized",
      data: {
        message: "Email/password is wrong or user`s email is not verified",
      },
    });
  }

  const token = user.createToken();

  await User.findByIdAndUpdate(user._id, { token });

  sendResponse({
    res,
    status: 200,
    statusMessage: "Login success",
    data: {
      token,
      user: {
        email: user.email,
        name: user.name,
        isVerified: user.isVerified,
        id: user._id,
      },
    },
  });
};

module.exports = login;
