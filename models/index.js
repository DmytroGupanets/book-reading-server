const { User } = require("./user");
const { joiUserSchema } = require("./user");
const { joiUserVerificationRequestSchema } = require("./user");

const { Target } = require("./tsrget");
const { joiTargetShema } = require("./tsrget");

module.exports = {
  User,
  joiUserSchema,
  joiUserVerificationRequestSchema,
  Target,
  joiTargetShema,
};
