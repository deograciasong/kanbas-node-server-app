import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    score: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    points: String,
    numberOfQuestions: String,
    availability: String,
    instructions: String,
    group: String,
    type: String,
    start: String,
    due: String,
    end: String,
  },
  { collection: "quizzes" }
);
export default schema;