import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    description: String
  },
  { collection: "quizzes" }
);
export default quizSchema;