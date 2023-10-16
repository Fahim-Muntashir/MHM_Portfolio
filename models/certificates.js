import mongoose, { Schema } from "mongoose";

const certificatesSchema = new Schema(
  {
    title: String,
    subTitle: String,
    imgLink: String,
  },
  {
    timestamps: true,
  }
);

const Certificates =
  mongoose.models.Certificates ||
  mongoose.model("Certificates", certificatesSchema);

export default Certificates;
