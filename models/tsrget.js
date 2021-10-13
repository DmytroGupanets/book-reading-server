const { Schema, model } = require("mongoose");
const Joi = require("joi");

const targetShema = Schema(
  {
    id: { type: String, required: [true] },
    startDate: { type: String, required: [true] },
    endDate: { type: String, required: [true] },
    ownerId: { type: Schema.Types.ObjectId, ref: "user" },
    books: { type: String },
    records: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const joiTargetShema = Joi.object({});

const Targets = model("target", targetShema);

module.exports = { Targets, joiTargetShema };
