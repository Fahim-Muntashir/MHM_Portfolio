import mongoose, { Schema } from "mongoose";

const photographySchema = new Schema(
  {
    imgLink: String,
  },
  {
    timestamps: true,
  }
);
const Photography =
  mongoose.models.Photography ||
  mongoose.model("Photography", photographySchema);
export default Photography;
