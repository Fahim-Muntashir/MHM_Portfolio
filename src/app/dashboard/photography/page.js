"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ImageForm() {
  // State to manage the input field
  const [imgLink, setImgLink] = useState("");
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imgLink) {
      alert("img link all are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/photography", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ imgLink }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Faild to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Image Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="imgLinkInput"
            className="block text-sm font-medium text-gray-700"
          >
            Image Link:
          </label>
          <input
            type="text"
            id="imgLinkInput"
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
            className="mt-1 p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ImageForm;
