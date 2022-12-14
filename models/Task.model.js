const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  description: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Task", taskSchema);
