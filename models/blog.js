import mongoose, { Schema } from "mongoose";

const blogSceama = new Schema(
  {
    title: String,
    description: String,
    imgLink: String,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSceama);

export default Blog;
