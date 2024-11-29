import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { categories } from "@/constant/category";

function Category() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4">
      {/* Header Section */}
      <div className="text-center my-8 xsm:my-12">
        <h2 className="font-[roboto] font-bold text-3xl xsm:text-4xl leading-tight">
          Explore Courses By Category
        </h2>
        <p className="font-roboto text-base xsm:text-lg leading-relaxed mt-4 text-[#000000] ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid  gap-y-16 gap-x-6 grid-cols-1 xsm:grid-cols-2  lg:grid-cols-3  xsm:gap-6 mt-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-mybackground  rounded-[5px]  flex flex-col xsm:flex-row items-center p-4 gap-4"
          >
            {/* Left: Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFFFFF] flex items-center justify-center rounded-md">
              <Image
                src={category.image}
                alt={category.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            {/* Right: Text */}
            <div className="text-center xsm:text-left">
              <p className="font-[roboto] font-semibold text-lg xsm:text-xl leading-6 text-[#000000] ">
                {category.title}
              </p>
              <p className="font-[roboto] font-normal text-sm xsm:text-base leading-5 text-[#000000] ">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8 xsm:mt-12">
        <Button variant="transparentBtn" className="px-4 py-2 xsm:px-6 xsm:py-3 text-sm xsm:text-base">
          View All Courses
        </Button>
      </div>
    </div>
  );
}

export default Category;
