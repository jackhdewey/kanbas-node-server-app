import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    department: String,
    description: String,
    credits: Number,
    startDate: Date,
    endDate: Date,
    author: String
  },
  { collection: "courses" }
);
export default courseSchema;