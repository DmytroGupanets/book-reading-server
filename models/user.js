const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { v4 } = require("uuid");

const joiUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
});

const joiUserVerificationRequestSchema = Joi.object({
  email: Joi.string().required(),
});

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      minLength: 6,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: 2,
    },
    token: {
      type: String,
      default: null,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      // required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const { SECRET_KEY } = process.env;

userSchema.methods.createToken = function () {
  const payload = {
    id: this._id,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
};

userSchema.methods.setVerifyToken = function () {
  this.verifyToken = v4();
};

const User = model("user", userSchema);

module.exports = {
  User,
  joiUserSchema,
  joiUserVerificationRequestSchema,
};
