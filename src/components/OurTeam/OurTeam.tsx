import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from "../ui/button";
import { team } from "@/constant/team";

function OurTeam() {
  return (
    <section
      className="
        w-full 
        py-[48px] xsm:py-[112px] 
        text-center
        bg-mybackground
      "
    >
      {/* Header Section */}

      <h1 className="my_h1 mb-[24px]">Our Team</h1>
      <p className="text-[#000000] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards Section */}
      <div
        className="
          w-full
          h-auto
          grid 
          grid-cols-1 xsm:grid-cols-3 
          gap-x-[48px] gap-y-[48px] xsm:gap-y-[64px]
          mt-[48px] xsm:mt-[80px]
          
        "
      >
        {team.map ((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Image */}
            <div className="inline-block mb-[24px]">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
             
              />
            </div>

            {/* Name and Role */}
            <h1 className="text-[20px] leading-[150%] font-semibold">
              {member.name}
            </h1>
            <p className="text-[18px] leading-[150%] mb-[24px]">
              {member.role}
            </p>

            {/* Social Links */}
            <div className='flex gap-[14px] justify-center m-auto'>
              <FaLinkedin size={24}/>
              <FaTwitter size={24}/>
              <CiGlobe size={24}/>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <Button
        variant="transparentBtn"
        className="
          mt-[48px]
          xsm:hidden
        "
      >
        View All
      </Button>
    </section>
  );
}

export default OurTeam;
