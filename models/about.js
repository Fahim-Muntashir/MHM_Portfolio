import mongoose, { Schema } from "mongoose";

const aboutSceama = new Schema(
  {
    description: String,
    imgLink: String,
  },
  {
    timestamps: true,
  }
);

const About = mongoose.models.About || mongoose.model("About", blogSceama);

export default About;
