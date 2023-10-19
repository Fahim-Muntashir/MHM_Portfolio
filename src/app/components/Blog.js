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
  console.log(blogs);
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
              <div class="sm:w-full relative">
                <div>
                  <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/DYxtCJq/img-1.png"
                  class="w-full"
                  alt="chair"
                />
              </div>
              <div class="sm:w-full sm:mt-0 mt-4 relative">
                <div>
                  <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive ffinto minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3C5HvxC/img-2.png"
                  class="w-full"
                  alt="wall design"
                />
              </div>
              <div class="sm:w-full relative">
                <div>
                  <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/DYxtCJq/img-1.png"
                  class="w-full"
                  alt="chair"
                />
              </div>
              <div class="sm:w-full sm:mt-0 mt-4 relative">
                <div>
                  <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive ffinto minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3C5HvxC/img-2.png"
                  class="w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
