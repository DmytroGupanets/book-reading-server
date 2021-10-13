const { User } = require("./user");
const { joiUserSchema } = require("./user");
const { joiUserVerificationRequestSchema } = require("./user");

const { Target } = require("./target");
const { joiTargetSchema } = require("./target");
const { joiRecordSchema } = require("./target");

module.exports = {
  User,
  joiUserSchema,
  joiUserVerificationRequestSchema,
  Target,
  joiTargetSchema,
  joiRecordSchema,
};
