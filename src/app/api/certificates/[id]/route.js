import connectMongoDB from "../../../../../libs/mongodb";
import Certificates from "../../../../../models/certificates";
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newSubTitle: subTitle,
    newImgLink: imgLink,
  } = await request.json();
  await connectMongoDB();
  await Certificates.findByIdAndUpdate(id, { title, subTitle, imgLink });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const certificate = await Certificates.findOne({ _id: id });
  return NextResponse.json({ certificate }, { status: 200 });
}
