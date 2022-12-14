const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, enum: ['Male', 'Female', 'Others'] },
  location: String,
  interests: String,
  projects: { type: Schema.Types.ObjectId, ref: "Project" },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  imageUrl: String,
});


module.exports = model("User", userSchema);
