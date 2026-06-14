import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="font-inter">
      {/* Banner */}
      <div
        className="w-full h-100 md:h-130"
        style={{
          backgroundImage: "url('/contact/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full lg:w-200 py-10 px-5 bg-[#37393FE8] flex justify-center items-center">
          <div className="w-130 flex flex-col justify-start items-between gap-5">
            <div className=" flex items-center justify-center lg:justify-start gap-1">
              <div className="point"></div>
              <div className="text-white font-semibold text-sm lg:text-lg leading-[1.4]">
                Quick Solution
              </div>
            </div>
            <div className="text-white text-center lg:text-start font-bold text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
              Frequently Asked Questions
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
    </div>
  );
}
