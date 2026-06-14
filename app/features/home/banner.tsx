import PlayBottun from "@/app/Components/icons/playBottun";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="font-inter">
      {/* Banner */}
      <div
        className="w-full md:h-100 lg:h-200"
        style={{
          backgroundImage: "url('Image2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full lg:w-200 p-10 bg-[#37393FE8] flex justify-center items-center">
          <div className="w-110 md:h-85 lg:w-147 lg:h-101 flex flex-col justify-start items-between gap-5">
            <div className=" flex items-center justify-center lg:justify-start gap-1">
              <div className="point"></div>
              <div className="text-white font-semibold text-sm lg:text-lg leading-[1.4]">
                Welcome to Whitecpollar Solution
              </div>
            </div>
            <div className="text-white text-center lg:text-start font-bold text-2xl sm:text-[30px] md:text-[40px] lg:text-[60px] leading-[1.1]">
              The Best Value For{" "}
              <span className="text-secondary">Business</span> And Corporation
            </div>

            <div className="flex flex-col gap-9">
              <p className="text-[#B9B9B9] font-medium text-center lg:text-start text-sm lg:text-lg leading-[1.4]">
                Collaboratively administrate empowered markets plug and play
                networks dynamically procrastinated{" "}
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <button className="font-semibold text-18 leading-none cursor-pointer bg-secondary px-7 py-5">
                  Get Consluting
                </button>

                <div className="flex justify-center items-center gap-2">
                  <PlayBottun />
                  <p className="text-white font-semibold text-lg leading-none">
                    Watch Vedio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
    </div>
  );
}
