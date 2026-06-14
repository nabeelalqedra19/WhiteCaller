import Check from "@/app/Components/icons/check";
import Image from "next/image";

export default function WhyChose() {
  return (
    <div className="app-container flex flex-col lg:flex-row items-center gap-10 my-30">
      <div className="flex flex-col gap-7">
        <div className="text-center md:text-start">
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-1 ">
            <div className="point w-3 h-3"></div>
            <div className="font-medium text-sm sm:text-lg">Why Choose Me</div>
          </div>

          <h1 className="lg:w-100 font-semibold text-xl sm:text-[30px] leading-[1.2] mb-3 text-center lg:text-start">
            We Provide Solutions To Grow Your Business
          </h1>

          <p className="paragraph text-center lg:text-start">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall proposition.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center md:items-stretch md:justify-items-stretch ">
          <div className="flex items-start gap-2">
            <Check className="text-secondary" />
            <div className="font-normal text-xl ">
              <span className="font-bold">2,800+</span> Active clients
              <p className="text-lg text-[#7D7D7D] mt-1">
                provide a robust synopsis for high level overviews.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-secondary" />
            <div className="font-normal text-xl ">
              <span className="font-bold">106+</span> Team members
              <p className="text-lg text-[#7D7D7D] mt-1">
                provide a robust synopsis for high level overviews.
              </p>
            </div>{" "}
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-secondary" />
            <div className="font-normal text-xl ">
              <span className="font-bold">106+</span> Team members
              <p className="text-lg text-[#7D7D7D] mt-1">
                provide a robust synopsis for high level overviews.
              </p>
            </div>{" "}
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-secondary" />
            <div className="font-normal text-xl ">
              <span className="font-bold">1,670+ </span>
              <span className="text-amber-400">5 stars</span> reviews
              <p className="text-lg text-[#7D7D7D] mt-1">
                provide a robust synopsis for high level overviews.
              </p>
            </div>
          </div>
        </div>
        <button className="text-white w-fit px-7 py-5 bg-button text-lg font-semibold cursor-pointer m-auto lg:m-0">
          Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div className="bg-[#F4F4F4] flex justify-between items-center gap-3 p-5">
          <Image
            src={"/ourServices/Chart.png"}
            alt="Photo"
            width={90}
            height={90}
          />

          <div>
            <h1 className="leading-[1.4]">Clients</h1>
            <div className="font-semibold text-[16px] ">Quick Response</div>
            <p className="text-lg leading-[1.4] text-[#7D7D7D]">
              Objectively products whereas parallel platforms procedures
            </p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] flex justify-between items-center gap-3 p-5">
          <Image
            src={"/ourServices/Chart1.png"}
            alt="Photo"
            width={90}
            height={90}
          />

          <div>
            <h1 className="leading-[1.4]">Project</h1>
            <div className="font-semibold text-lg ">Finished Jobs</div>
            <p className="text-lg leading-[1.4] text-[#7D7D7D]">
              Objectively products whereas parallel platforms procedures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
