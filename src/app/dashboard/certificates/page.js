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
        certificate.map((t, index) => <h1 key={index}> {t.title}</h1>)
      ) : (
        <p>No certificates found.</p>
      )}
    </>
  );
}
