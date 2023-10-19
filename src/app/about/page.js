import React from "react";

function BlogPage() {
  return (
    <div className="bg-white lg:w-2/3 md:w-4/5 sm:w-full mx-auto">
      <header className="p-6 sm:p-12 bg-gray-900 text-gray-100 mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt=""
            className="self-center w-24 h-24 rounded-full border-2 border-gray-700"
          />
          <div className="flex flex-col text-center md:text-left">
            <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
            <p className="text-gray-400">
              Sed non nibh iaculis, posuere diam vitae, consectetur neque.
              Integer velit ligula, semper sed nisl in, cursus commodo elit.
              Pellentesque sit amet mi luctus ligula euismod lobortis ultricies
              et nibh.
            </p>
          </div>
        </div>
      </header>
      <div className="p-6 md:p-12">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel
          repudiandae similique sequi esse. Laudantium nemo atque repudiandae,
          eligendi delectus vitae voluptate, illo tempora ab eum expedita quam,
          libero iusto.
        </p>
        <hr className="my-4 border-t border-gray-300" />
        <h2 className="text-xl font-semibold mb-2">Section 1</h2>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel
          repudiandae similique sequi esse. Laudantium nemo atque repudiandae,
          eligendi delectus vitae voluptate, illo tempora ab eum expedita quam,
          libero iusto. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Error vel repudiandae similique sequi esse. Laudantium nemo
          atque repudiandae, eligendi delectus vitae voluptate, illo tempora ab
          eum expedita quam, libero iusto.
        </p>
        <hr className="my-4 border-t border-gray-300" />
        <h2 className="text-xl font-semibold mb-2">Section 2</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel
          repudiandae similique sequi esse. Laudantium nemo atque repudiandae,
          eligendi delectus vitae voluptate, illo tempora ab eum expedita quam,
          libero iusto.
        </p>
      </div>
    </div>
  );
}

export default BlogPage;
