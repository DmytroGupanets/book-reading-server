const { User } = require("../../models");
const { sendResponse, sendEmail } = require("../../helpers");
const emailVerify = require("../../tpl/emailVerify");

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

  const { verifyToken } = await User.create(newUser);

  const data = {
    to: email,
    subject: "Email verification",
    html: emailVerify(verifyToken, email),
  };

  await sendEmail(data);

  sendResponse({
    res,
    status: 201,
    data: {
      user: {
        message: "Registration success",
        email: newUser.email,
        name: newUser.name,
        verifyToken,
      },
    },
  });
};

module.exports = signup;
