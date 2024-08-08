import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    description: String
  },
  { collection: "modules" }
);
export default moduleSchema;