import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { courses } from "@/constant/courses";

function Courses() {
  return (
    <div className="w-full h-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="font-[roboto] font-bold text-4xl sm:text-5xl leading-tight">
          Courses
        </h1>
        <p className="font-[roboto] font-normal text-lg leading-[27px] mt-2">
          Your Ultimate Guide to Learning
        </p>
      </div>

      {/* Tabs Section */}
      <ul className="font-[roboto] font-normal text-base flex items-center justify-center gap-8 mb-8">
        <li className="cursor-pointer">Popular</li>
        <li className="cursor-pointer">Recommended</li>
        <li className="cursor-pointer">Best Price</li>
      </ul>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 px-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-full max-w-[416px] mx-auto bg-[#F7F7F7] rounded-[5px] shadow-md overflow-hidden"
          >
            {/* Card Image */}
            <Image
              src={course.image}
              alt={`${course.title} image`}
              width={416}
              height={300}
              className="object-cover"
            />

            {/* Card Content */}
            <div className="p-6">
              {/* Category and Rating */}
              <div className="flex items-center justify-between mb-4">
                <h6 className="font-[roboto] font-semibold text-lg">
                  {course.category}
                </h6>
                <Image
                  src={course.ratingImage}
                  alt="Rating Star"
                  width={48}
                  height={24}
                />
              </div>

              {/* Title and Description */}
              <h5 className="font-[roboto] font-bold text-2xl leading-[33.6px] mb-2">
                {course.title}
              </h5>
              <p className="font-[roboto] font-normal text-base text-[#000000]  mb-4">
                {course.description}
              </p>

              {/* Enroll Button and Price */}
              <div className="flex items-center justify-between ">
                <Button
                  variant="transparentBtn"
                  className="px-4 py-2 text-base "
                >
                  Enroll Now
                </Button>
                <p className="text-lg font-semibold pr-[172px] ">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Button
          variant="transparentBtn"
          className="px-6 py-3 text-sm   rounded-md hover:bg-blue-600"
        >
          View All Courses
        </Button>
      </div>
    </div>
  );
}

export default Courses;
