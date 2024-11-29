import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { testiTeam } from "@/constant/testimonial";

function Testimonials() {
  return (
    <section
      className="
        w-full 
        px-[24px] xsm:px-[64px] 
        py-[112px]
        bg-mybackground
      "
    >
      {/* Header */}
      <h1 className="my_h1 mb-[24px]">Customer Testimonials</h1>
      <p className="text-[#000000] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards Container */}
      <div className="mt-[80px] w-full flex gap-[32px] flex-row overflow-x-auto">
        {testiTeam.map ((team) => (
          <div
            key={team.id}
            className="
              shrink-0 grow-0 
              p-[32px] w-[362px] 
              border-[1px] border-black 
             bg-mybackground 
            "
          >
            {/* Rating */}
            <div className="flex gap-1 mb-[24px] text-[#000000] ">
              {[...Array(team.rating)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>

            {/* Feedback */}
            <p className="mb-[24px] text-[#000000]">
              {team.feedback}
            </p>

            {/* User Info */}
            <div className="flex gap-[20px] items-center">
              {/* Profile Image */}
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image
                  src={team.image}
                  alt={`${team.name}'s picture`}
                  width={56}
                  height={56}
                />
              </div>

              {/* Name and Role */}
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{team.name}</p>
                <p className="text-sm text-gray-500">{team.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
