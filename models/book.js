const Joi = require("joi");
const { Schema, model } = require("mongoose");

const joiBookSchema = Joi.object({
  name: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
  year: Joi.number().min(1).required(),
  pages: Joi.number().min(1).required(),
});

const joiBookUpdateStatusSchema = Joi.object({
  status: Joi.string().valid("planned", "inProgress", "completed"),
});

const joiBookAddResumeSchema = Joi.object({
  resume: Joi.object({
    rating: Joi.number().min(0).max(5).required(),
    text: Joi.string().allow(""),
  }),
});

const bookSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for book"],
      minLength: 2,
    },
    author: {
      type: String,
      required: [true, "Set author for book"],
      minLength: 2,
    },
    year: {
      type: Number,
      required: [true, "Set year for book"],
      minLength: 4,
      maxLength: 4,
    },
    pages: {
      type: Number,
      required: [true, "Set pages for book"],
      minLength: 1,
    },
    status: {
      type: String,
      default: "planned",
    },
    resume: {
      type: Object,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

module.exports = {
  Book,
  joiBookSchema,
  joiBookAddResumeSchema,
  joiBookUpdateStatusSchema,
};
