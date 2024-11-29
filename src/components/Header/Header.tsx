import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <header className="w-full flex flex-col gap-[16px] ">
        {/* top div header */}
        <div className=" bg-mybackground h-[54px]  w-full px-[62px] xsm:flex items-center justify-between hidden border-b-[1px] border-black ">
          <div
            className="h-[30px] flex items-center justify-center gap-[16px] text- 
           [14px] leading-[150%] "
          >
            <p>Phone Number: 956 742 455 678</p>
            <div className="w-[1px] h-[30px] bg-[#676767] "></div>
            <p>Email:info@ddsgnr.com</p>
          </div>

          {/* social icons div */}
          <div className="flex items-center justify-center gap-3">
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>

        {/* botom div */}
        <div className="w-full h-[72px] xsm:px-16 py-4 bg-mybackground flex justify-between items-center px-6  border-b-[1px] border-black  ">
          {/* Ddsgnr img */}
          <Image
            src={"/images/nav-img.svg"}
            alt={"logo-img"}
            width={130.6}
            height={30.38}
          ></Image>
          <div className=" xsm:flex items-center justify-between gap-8 hidden ">
            <ul className=" flex gap-[52px] items-center justify-center text-[16px] ">
              <li>
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  Courses
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  Achievement
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="hover:text-blue-500 transition duration-300"
                  href="#"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-4 ">
              <Button variant={"transparentBtn"}> Login</Button>
              <Button > Sign Up</Button>
            </div>
          </div>

          <IoMenu size={24} className="xsm:hidden"/>
        </div>
      </header>
    </>
  );
}

export default Header;
