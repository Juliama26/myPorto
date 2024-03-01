import React from "react";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="flex flex-col justify-around lg:h-screen gap-y-6 md:gap-y-10 lg:gap-y-0 p-2 md:px-14 lg:px-28 md:py-10 lg:py-20 sticky top-0">
      <section className="flex flex-col gap-y-0 md:gap-y-1 lg:gap-y-2">
        <h1 className="font-protest font-bold text-xl md:text-3xl lg:text-6xl">
          Juliama Laoli
        </h1>
        <h2 className="md:font-protest md:text-xl lg:text-2xl">
          Software Engineer
        </h2>
        <p className="italic text-sm text-10%">
          "Membangun pengalaman yang menarik dibidang digital!"
        </p>
      </section>
      <main className="flex flex-col gap-2 md:gap-3">
        <ul className="flex flex-wrap gap-x-2 md:gap-x-4">
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →HTML
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →CSS
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →Tailwind CSS
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →Material UI
          </li>
        </ul>
        <ul className="flex flex-wrap gap-x-2 md:gap-x-4">
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →Node.js
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →Express.js
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →React.js
          </li>
          <li className="text-10% hover:text-5% duration-300 hover:cursor-pointer">
            →PostgreSQL
          </li>
        </ul>
      </main>
      <footer className="flex gap-x-3 text-2xl">
        <Link to={"#"} className="text-10% hover:text-5% duration-300">
          <FaGithub />
        </Link>
        <Link to={"#"} className="text-10% hover:text-5% duration-300 ">
          <FaLinkedin />
        </Link>
        <Link to={"#"} className="text-10% hover:text-5% duration-300 ">
          <FaInstagram />
        </Link>
      </footer>
    </div>
  );
}
