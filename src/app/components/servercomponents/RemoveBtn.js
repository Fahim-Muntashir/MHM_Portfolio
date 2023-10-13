"use client";

import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeBlog = async () => {
    const confirmed = confirm("are you sure to confirm");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div>
      {" "}
      <div class="sm:flex sm:items-end sm:justify-end">
        <button
          onClick={removeBlog}
          class="block bg-red-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-300"
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default RemoveBtn;
