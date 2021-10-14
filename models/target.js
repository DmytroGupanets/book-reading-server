const { Schema, model } = require("mongoose");
const Joi = require("joi");

const targetSchema = Schema(
  {
    startDate: { type: String, required: [true, "StartDate is required"] },
    endDate: { type: String, required: [true, "EndDate is required"] },
    owner: { type: Schema.Types.ObjectId, ref: "user" },
    books: [{ type: String }],
    records: [
      {
        date: { type: String },
        time: { type: String },
        pages: { type: String },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const joiTargetSchema = Joi.object({
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  books: Joi.array().items(Joi.string()).required(),
});

const joiRecordSchema = Joi.object({
  date: Joi.string().required(),
  time: Joi.string().required(),
  pages: Joi.array().min(1).max(3).required(),
});

const Target = model("target", targetSchema);

module.exports = { Target, joiTargetSchema, joiRecordSchema };
