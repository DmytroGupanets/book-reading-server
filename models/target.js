const { Schema, model } = require("mongoose");
const Joi = require("joi");

const targetShema = Schema(
  {
    startDate: { type: String, required: [true] },
    endDate: { type: String, required: [true] },
    ownerId: { type: Schema.Types.ObjectId, ref: "user" },
    books: { type: String },
    records: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const joiTargetShema = Joi.object({});

const Target = model("target", targetShema);

module.exports = { Target, joiTargetShema };
