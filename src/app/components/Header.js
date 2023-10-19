"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
// icons

import { BiMenuAltRight, BiX } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  // Initialize state variables separately
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-white shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 top-0`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* {logo} */}
          <a
            to="/home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo.svg"}
              width={194}
              height={64}
              alt="logo"
            ></Image>
          </a>

          {/* Nav Open Menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl"></BiMenuAltRight>
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav ? "max-h-max py-4 px-4 xl:py-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-400 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            href="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>

          <Link
            className="cursor-pointer"
            href="#about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <a href="/#blog">Blogs</a>
          <Link
            className="cursor-pointer"
            href="#certificate"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Certificate
          </Link>
          <Link
            className="cursor-pointer"
            href="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            href="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            href="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See More
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
