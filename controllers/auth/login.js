const login = (req, res) => {
  sendResponse({
    res,
    status: 200,
    statusMessage: "Login success",
    // data: {
    //   token,
    //   user: { email: user.email, subscription: user.subscription },
    // },
  });
};

module.exports = login;
