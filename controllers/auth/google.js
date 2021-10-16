const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { User } = require("../../models/user");
const { sendResponse } = require("../../helpers");

const google = async (req, res) => {
  const { token: googleToken } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: googleToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { name, email } = ticket.getPayload();
  const user = await User.findOneAndUpdate(
    { email },
    { name, isVerified: true },
    { upsert: true, new: true }
  );
  user.token = user.createToken();
  await user.save();

  sendResponse({
    res,
    status: 200,
    statusMessage: "Login success",
    data: {
      token: user.token,
      user: {
        name: user.name,
        email: user.email,
        subscription: user.subscription,
      },
    },
  });
};

module.exports = google;
