"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCertificate = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [imgLink, setImgLink] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subTitle || !imgLink) {
      alert("are sob puron koro");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/certificates", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, subTitle, imgLink }),
      });

      if (res.ok) {
        router.push("/dashboard/certificates");
      } else {
        throw new Error("Faild to create a Certtificate");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full p-3 m-4">
          <h2 className="text-2xl font-semibold mb-4"> Add Certificate Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                name="title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subtitle"
              >
                Subtitle
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                onChange={(e) => setSubTitle(e.target.value)}
                id="subtitle"
                name="subtitle"
              />
            </div>
            <div className="mb-4">
              <label
                value="imgLink"
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imgLink"
              >
                Image Link
              </label>
              <input
                onChange={(e) => setImgLink(e.target.value)}
                className="w-full p-2 border rounded-md"
                type="text"
                id="imgLink"
                name="imgLink"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Next Page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCertificate;
