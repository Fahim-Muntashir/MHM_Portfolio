"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditCertificateForm = ({ id, title, description, imgLink }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newSubTitle, setNewSubTitle] = useState(description);
  const [newImgLink, setNewImgLink] = useState(imgLink);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/certificates/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newSubTitle, newImgLink }),
      });
      if (!res.ok) {
        throw new Error("error throw in updateing");
      }
      router.push("/dashboard/blog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="text-gray-600">
          Blog Title
        </label>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          id="title"
          name="title"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageUrl" className="text-gray-600">
          Image URL
        </label>
        <input
          onChange={(e) => setNewImgLink(e.target.value)}
          value={newImgLink}
          type="text"
          id="imgLink"
          name="imgLink"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="text-gray-600">
          Blog Content
        </label>
        <textarea
          onChange={(e) => setNewSubTitle(e.target.value)}
          id="subTitle"
          name="subTitle"
          value={newSubTitle}
          className="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Blog
      </button>
    </form>
  );
};

export default EditCertificateForm;
