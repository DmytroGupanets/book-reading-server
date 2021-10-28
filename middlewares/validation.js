const sendResponse = require("../helpers/sendResponse.js");

const validation = (scheme) => {
  const func = (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      return sendResponse({
        res,
        status: 400,
        statusMessage: "Bad request",
        data: {
          message: error.message,
        },
      });
    }
    next();
  };
  return func;
};

module.exports = validation;
