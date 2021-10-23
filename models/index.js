const { User } = require("./user");
const { joiUserSchema } = require("./user");
const { joiUserVerificationRequestSchema } = require("./user");

const { Target } = require("./target");
const { joiTargetSchema } = require("./target");
const { joiRecordSchema } = require("./target");

const { Book } = require("./book");
const { joiBookSchema } = require("./book");
const { joiBookUpdateStatusSchema } = require("./book");
const { joiBookAddResumeSchema } = require("./book");

module.exports = {
  User,
  joiUserSchema,
  joiUserVerificationRequestSchema,
  Target,
  joiTargetSchema,
  joiRecordSchema,
  Book,
  joiBookSchema,
  joiBookUpdateStatusSchema,
  joiBookAddResumeSchema,
};
