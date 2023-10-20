"use client";
import Link from "next/link";
import React, { useState } from "react";

export const metadata = {
  title: "MAHMUDUL HASAN",
  description: "staywithmoon",
};

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-screen">
      {/* Sidebar */}
      <nav
        className={`bg-white text-white p-2 lg:col-span-1 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/*sidebar header  */}
        <div>
          <img
            src="https://i.ibb.co/ZxRmCW2/20230526-214320.jpg"
            className="w-40 h-40 object-cover rounded-full mx-auto"
            alt=""
          />
          <p className="text-sm text-center text-red-400 py-2">Administrator</p>
          <h2 className="text-2xl text-blue-800 text-center font-semibold">
            Mahmudul Hasan
          </h2>
        </div>

        {/* Sidebar Content */}
        <ul className="w-40 lg:w-full mx-auto text-black">
          {/* Sidebar Items */}
          <li>
            <Link
              href="/dashboard/blog"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              Blog
            </Link>
          </li>
          <li>
            <a
              href="/dashboard/addblog"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              Add Blog
            </a>
          </li>
          <li>
            <a
              href="/dashboard/certificate"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              Certificate
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              amar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              amar
            </a>
          </li>
          <li>
            <a
              href="dashboard/photography"
              className="flex bg-slate-900 border-blue-300 my-4 py-1 rounded text-white items-center justify-center"
            >
              Img Add
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="bg-white p-4 lg:col-span-3">{children}</main>

      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 right-4 lg:hidden text-white bg-gray-800 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
