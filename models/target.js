const { Schema, model } = require("mongoose");
const Joi = require("joi");

const targetSchema = Schema(
  {
    startDate: { type: String, required: [true] },
    endDate: { type: String, required: [true] },
    ownerId: { type: Schema.Types.ObjectId, ref: "user" },
    books: { type: Array },
    records: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

const joiTargetSchema = Joi.object({});

const joiRecordSchema = Joi.object({
  date: Joi.string().required(),
  time: Joi.string().required(),
  pages: Joi.string().min(1).max(3).required(),
});

const Target = model("target", targetSchema);

module.exports = { Target, joiTargetSchema, joiRecordSchema };
