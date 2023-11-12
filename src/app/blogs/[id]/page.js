"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";

const page = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();
  useEffect(() => {
    // Fetch the blog data when the component mounts
    const fetchData = async () => {
      const url = `http://localhost:3000/api/blogs/${params.id}`;
      const response = await fetch(url); // replace "123" with the actual blog ID
      const data = await response.json();
      setBlog(data.blog);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-20">
        <Header></Header>
      </div>
      <div className="grid lg:mx-40">
        <article className="flex bg-white transition hover:shadow-xl shadow-sm my-3">
          <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span class="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>
          <div class="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              class="aspect-square h-full w-full object-cover"
            />
          </div>
          <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 class="font-bold uppercase text-gray-900">{blog.title}</h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
