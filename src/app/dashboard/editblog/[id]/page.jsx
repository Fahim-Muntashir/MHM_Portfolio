import { useState } from "react";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { blog } = await getBlogById(id);
  const { title, imgLink, description } = blog;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(title);
  const [newImgLink, setNewImgLink] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          type="text"
          id="imgLink"
          name="imgLink"
          value={imgLink}
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
