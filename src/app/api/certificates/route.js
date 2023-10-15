import Certificates from "../../../../models/certificates";

const { default: connectMongoDB } = require("../../../../libs/mongodb");

export async function POST(request) {
  const { title, subTitle, imgLink } = await request.json();
  await connectMongoDB();
  await Certificates.create({ title, subTitle, imgLink });
  return NextResponse.json({ message: "Certificate Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const certificates = await Certificates.find();
  return NextResponse.json({ certificates });
}

export async function Delete(request) {
  const id = request.nextURL.searchParams.get("id");
  await connectMongoDB();
  await Certificates.findByIdAndDelete(id);
  return NextResponse.json({ message: "certificate deleted" }, { status: 200 });
}
