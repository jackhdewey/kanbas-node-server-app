import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    qType: {
      type: String,
      enum: ["GRADED", "PRACTICE", "GRADED SURVEY", "UNGRADED SURVEY"],
      default: "GRADED",
    },
    points: Number,
    group: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES",
    },
    dueDate: Date,
    availableData: Date,
    untilDate: Date,
    timeLimit: Number,
    multipleAttempts: { type: Boolean, default: true},
    course: { type: String, required: true },
  },
  { collection: "quizzes" }
);
export default quizSchema;