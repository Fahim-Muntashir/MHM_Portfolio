import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newImgLink: imgLink,
  } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, description, imgLink });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}
