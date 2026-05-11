import Image from "next/image";

export default function Services() {
  return (
    <div className="app-container my-20 flex flex-col gap-10">
      <div>
        <div className="flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="text-primary font-medium text-sm sm:text-lg ">
            We Are Expertise In
          </div>
        </div>

        <h1 className="text-primary font-bold text-2xl sm:text-3xl md:text-[40px] leading[1.2] text-center ">
          We Provide Professional Business Solutions.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Financial Consultancy
            </h1>

            <div className="text-button font-semibold text-sm cursor-pointer">Read More</div>
          </div>

          <Image
            src={"/icons/financial.svg"}
            alt="Financial Consultancy "
            width={70}
            height={70}
            className="bg-secondary p-3 rounded-full "
          />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Business Management
            </h1>

            <div className="text-button font-semibold text-sm cursor-pointer">Read More</div>
          </div>

          <Image
            src={"/icons/business.svg"}
            alt="Financial Consultancy "
            width={70}
            height={70}
            className="bg-button p-3 rounded-full "
          />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Consultants & program
            </h1>

            <div className="text-button font-semibold text-sm cursor-pointer">Read More</div>
          </div>

          <Image
            src={"/icons/program.svg"}
            alt="Financial Consultancy "
            width={70}
            height={70}
            className="bg-secondary p-3 rounded-full "
          />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Company Management
            </h1>

            <div className="text-button font-semibold text-sm cursor-pointer">Read More</div>
          </div>

          <Image
            src={"/icons/company.svg"}
            alt="Financial Consultancy "
            width={70}
            height={70}
            className="bg-secondary p-3 rounded-full "
          />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Financial Consultancy
            </h1>

            <div className="text-button font-semibold text-sm cursor-pointer">Read More</div>
          </div>

          <div className="bg-secondary p-5 rounded-full ">
          <Image
            src={"/icons/experience2.svg"}
            alt="Financial Consultancy "
            width={40}
            height={40}
          />
          </div>
        </div>

        <button className="text-white font-semibold text-xl bg-button cursor-pointer p-8">More Services</button>
      </div>
    </div>
  );
}
