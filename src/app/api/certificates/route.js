import { NextResponse } from "next/server";
import Certificate from "../../../../models/certificates";
import connectMongoDB from "../../../../libs/mongodb";

export async function POST(request) {
  const { title, subTitle, imgLink } = await request.json();
  await connectMongoDB();
  await Certificate.create({ title, subTitle, imgLink });
  return NextResponse.json({ message: "Certificate Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const certificate = await Certificate.find();
  return NextResponse.json({ certificate });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Certificate.findByIdAndDelete(id);
  return NextResponse.json({ message: "Certificate Deleted" }, { status: 200 });
}
