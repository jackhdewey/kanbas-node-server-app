import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    quiz_type: {
      type: String,
      enum: ["GRADED", "PRACTICE", "GRADED SURVEY", "UNGRADED SURVEY"],
      default: "GRADED"
    },
    points: Number,
    group: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES"
    },
    questions: [],
    shuffle_answers: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "NO"
    },
    time_limit: {type: Number, default: 1},
    multiple_attempts: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "NO"
    },
    num_attempts: {type: Number, default: 1},
    show_answers: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "NO"
    },
    access_code: { type: String, default: ""},
    one_question_at_a_time: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "YES"
    },
    webcam: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "NO"
    },
    lock_after_answering: { 
      type: String, 
      enum: ["YES", "NO"],
      default: "NO"
    },
    due_date: String,
    date_available: String,
    available_until: String,
    course: { type: String, required: true }
  },
  { collection: "quizzes" }
);
export default quizSchema;