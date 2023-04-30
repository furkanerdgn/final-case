import Logo from ".././svgs/logo";
import DarthVader from ".././svgs/darthVader";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="w-full border-b-2 px-8 sticky z-50 top-0 p-2 bg-black">
        <ul className="w-full flex items-center gap-5 justify-between">
          <li className="flex shrink-0 gap-3 ">
            <Link to="/">
              <Logo className="w-32 h-32 " />
            </Link>
          </li>
          <li className="mr-16">
            <Link to="/credits">
              <DarthVader className="w-20 h-20 p-2 fill-white" />
            </Link>
          </li>
        </ul>
        {show && (
          <div className="z-10 bg-black absolute right-8 top-24 border-2 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
              <li className="flex items-center justify-center  hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
                <a
                  href="https://twitter.com/FurkandevEN"
                  className="block px-4 py-2 text-white "
                >
                  Furkan Erdoğan
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r z-50 from-yellow-400 via-red-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

export default Navbar;
