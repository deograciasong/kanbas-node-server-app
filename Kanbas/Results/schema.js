import mongoose from "mongoose";
const resultsSchema = new mongoose.Schema(
 {
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"   },
   score: Number,
   answers: [],
   attempts: Number,
 },
 { collection: "results" }
);
export default resultsSchema;