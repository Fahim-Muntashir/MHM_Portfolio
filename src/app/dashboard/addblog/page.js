"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDesctiotion] = useState("");
  const [imgLink, setImageLink] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !imgLink) {
      alert("title description and img link all are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, imgLink }),
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
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="text-gray-600">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageUrl" className="text-gray-600">
          Image URL
        </label>
        <input
          type="text"
          id="imgLink"
          name="imgLink"
          value={imgLink}
          onChange={(e) => setImageLink(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="text-gray-600">
          Blog Content
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDesctiotion(e.target.value)}
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

export default page;
