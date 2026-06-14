import Check from "@/app/Components/icons/check";
import Image from "next/image";

export default function WhyChoseMe() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 my-20">
      <div className="bg-primary flex items-center">
        <div className=" text-white flex flex-col gap-6 ml-auto p-20">
          <div className="text-center md:text-start">
            <div className="flex gap-2 items-center justify-center md:justify-start mb-1 ">
              <div className="point w-3 h-3"></div>
              <div className="font-medium text-sm sm:text-lg">
                Why Choose Me
              </div>
            </div>

            <h1 className="font-semibold text-xl sm:text-[30px] leading-[1.2] mb-3">
              We Provide Solutions To Grow Your Business
            </h1>

            <p className="paragraph">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proposition.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-[#2E2F34] flex flex-col sm:flex-row justify-between items-center p-5 gap-3">
              <Image
                src={"/icons/Chart.svg"}
                alt="Photo"
                width={60}
                height={60}
              />

              <div className="text-center sm:text-start">
                <h1 className="leading-[1.4]">Clients</h1>
                <div className="font-semibold text-[16px] ">Quick Response</div>
              </div>
            </div>
            <div className="bg-[#2E2F34] flex flex-col sm:flex-row justify-between items-center p-5">
              <Image
                src={"/icons/Chart (1).svg"}
                alt="Photo"
                width={60}
                height={60}
              />

              <div className="text-center sm:text-start">
                <h1 className="leading-[1.4]">Project</h1>
                <div className="font-semibold text-lg ">Finished Jobs</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:place-items-center md:items-stretch md:justify-items-stretch">
            <div className="flex items-center gap-2">
              <Check className="text-secondary" />
              <div className="font-normal text-xl ">
                <span className="font-bold">2,800+</span> Active clients
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-secondary" />
              <span className="text-xl font-bold">106+</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-secondary" />
              <div className="font-normal text-xl ">
                <span className="font-smibold">1,670+ </span>
                <span className="text-amber-400">5 stars</span> reviews
              </div>
            </div>

            <div className="text-secondary font-semibold text-lg cursor-pointer">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/whyChooseMe.png"}
        alt="Why Choose Me"
        width={1000}
        height={1000}
        className="hidden xl:block"
      />
    </div>
  );
}
