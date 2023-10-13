import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Blog from "../../../../models/blog";

export async function POST(request) {
  const { title, description, imgLink } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, description, imgLink });
  return NextResponse.json({ message: "topic created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
}
