import Link from "next/link";
import React from "react";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch Blogs");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Blogs: ", error);
  }
};

const Blog = async () => {
  const { blogs } = await getBlogs();
  const slicedBlogs = blogs.slice(0, 4);
  return (
    <section id="blog">
      <div className="bg-w w-full shadow-inner">
        <div className="text-center my-10 py-20">
          {" "}
          <h1 className="text-2xl font-bold">
            Some of My Interestering Blogs
          </h1>{" "}
          <p>
            Embark on a reading adventure as you delve into some of my most
            awesome blog posts.
          </p>
        </div>
        <div class="lg:flex items-stretch md:mt-12 mt-8 container mx-auto">
          <div class="lg:w-full">
            <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              {slicedBlogs.map((blog) => (
                <div className="sm:w-full relative" key={blog._id}>
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {blog.createdAt}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold text-white">
                        {blog.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2"></p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <Link
                          href={`blogs/${blog._id}`}
                          class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                          Read Blog
                        </Link>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/DYxtCJq/img-1.png"
                    className="w-full"
                    alt="blog image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
