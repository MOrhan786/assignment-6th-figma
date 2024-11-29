import React from "react";

function Achievment() {
  return (
    <div className="w-full py-8 bg-[#FFFFFF]  ">
      {/* Inside main div */}
      <div className="w-full max-w-[1152px] mx-auto flex flex-col items-center gap-8 px-4">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="font-[roboto] font-bold text-3xl xsm:text-5xl text-[#000000]">
            Our Achievements
          </h2>
          <p className="font-[roboto] font-normal text-base xsm:text-lg text-[#000000] mt-4 leading-6 xsm:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>

        {/* List Items Section */}
        <div className="w-full">
          <ul
            className="
              flex flex-wrap justify-between items-center
              gap-y-6 sm:gap-y-0 
              text-center
              font-[roboto] font-bold text-2xl xsm:text-[40px] leading-[48px] text-[#000000]
            "
          >
            <li className="w-1/2 xsm:w-auto">
              +200
              <br />
              <p className="font-normal text-sm xsm:text-base leading-6 text-[#000000]">
                Courses
              </p>
            </li>
            <li className="w-1/2 sm:w-auto">
              50K
              <br />
              <p className="font-normal text-sm xsm:text-base leading-6 text-[#000000]">
                Mentors
              </p>
            </li>
            <li className="w-1/2 sm:w-auto">
              370k
              <br />
              <p className="font-normal text-sm xsm:text-base leading-6 text-[#000000]">
                Students
              </p>
            </li>
            <li className="w-1/2 sm:w-auto">
              100+
              <br />
              <p className="font-normal text-sm xsm:text-base leading-6 text-[#000000]">
                Recognition
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievment;

