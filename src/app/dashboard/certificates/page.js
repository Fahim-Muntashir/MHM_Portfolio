import RemoveCertificate from "@/app/components/servercomponents/RemoveCertificate";

const getCertificates = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/certificates", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch certificates");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading in  certificate:", error);
    throw error;
  }
};
export default async function page() {
  const { certificate } = await getCertificates();
  console.log(certificate);
  return (
    <>
      {certificate && certificate.length > 0 ? (
        certificate.map((t, index) => (
          <div>
            <h1 key={index}> {t._id}</h1>
            <RemoveCertificate id={t._id}></RemoveCertificate>
          </div>
        ))
      ) : (
        <p>No certificates found.</p>
      )}
    </>
  );
}
