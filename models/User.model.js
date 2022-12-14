const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: Number },
  location: String,
  interests: String,
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  imageUrl: String,
});


module.exports = model("User", userSchema);
