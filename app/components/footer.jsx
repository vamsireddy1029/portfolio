// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © The Portfolio of <Link target="_blank" href="https://www.linkedin.com/in/vamsi-reddy-450583269/" className="text-[#16f2b3]">Vamsi Reddy</Link>
          </p>
          <div className="flex items-center gap-5">
          <Link
              target="_blank"
              href="https://www.instagram.com/vamsireddy_11/"
              className="flex items-center gap-2 hover:text-[#16f2b3]"
            >
              <AiFillInstagram />
              <span>Follow</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/vamsireddy1029"
              className="flex items-center gap-2 hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;