import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ResultsModel", schema);
export default model;
