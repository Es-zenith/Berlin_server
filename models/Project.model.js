const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  peopleLimit: Number,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  imageUrl: String,
  date: String,
  time: String,
  place: String,
});

module.exports = model("Project", projectSchema);