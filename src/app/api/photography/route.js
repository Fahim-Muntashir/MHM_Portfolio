import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Photography from "../../../../models/photography";

export async function POST(request) {
  const { imgLink } = await request.json();
  await connectMongoDB();
  await Photography.create({ imgLink });
  return NextResponse.json({ message: "Image Link Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const photography = await Photography.find();
  return NextResponse.json({ photography });
}
