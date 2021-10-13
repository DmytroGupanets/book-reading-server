const { User } = require("./user");
const { joiUserSchema } = require("./user");
const { joiUserVerificationRequestSchema } = require("./user");

const { Target } = require("./target");
const { joiTargetShema } = require("./target");

module.exports = {
  User,
  joiUserSchema,
  joiUserVerificationRequestSchema,
  Target,
  joiTargetShema,
};
