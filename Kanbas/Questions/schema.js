import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
 {
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   title: String,
   type: String,
   points: Number,
   text: String,
   choices: [],
   correctAnswer: String,
 },
 { collection: "questions" }
);
export default questionSchema;