import React from "react";

const Photography = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="text-center my-10 py-10 shadow-inner">
        {" "}
        <h1 className="text-2xl font-bold">My Photography</h1>{" "}
        <p className="py-3">
          Explore a glimpse of my world through the lens, featuring a collection{" "}
          <br />
          of my passion photography.
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/301x301/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
      </div>
    </section>
  );
};

export default Photography;
