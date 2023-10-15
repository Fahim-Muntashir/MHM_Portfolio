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
