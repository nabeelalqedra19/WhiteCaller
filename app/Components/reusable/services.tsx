import Image from "next/image";
import Link from "next/link";
import Consultancy from "../icons/consultancy";
import BusinessManagment from "../icons/businessManagment";
import Program from "../icons/program";
import Company from "../icons/company";
import Jobs from "../icons/jobs";

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

            <Link
              href={"#"}
              className="text-button font-semibold text-lg cursor-pointer"
            >
              Read More
            </Link>
          </div>

          <Consultancy className="services-icons" />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Business Management
            </h1>

            <Link
              href={"/servicesSingle"}
              className="text-button font-semibold text-lg cursor-pointer"
            >
              Read More
            </Link>
          </div>

          <BusinessManagment className="services-icons" />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Consultants & program
            </h1>

            <Link
              href={"#"}
              className="text-button font-semibold text-lg cursor-pointer"
            >
              Read More
            </Link>
          </div>

          <Program className="services-icons" />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Company Management
            </h1>

            <Link
              href={"#"}
              className="text-button font-semibold text-lg cursor-pointer"
            >
              Read More
            </Link>
          </div>

          <Company className="services-icons" />
        </div>
        <div className="p-5 bg-[#F4F4F4] flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10">
            <h1 className="w-1/2 text-primary font-semibold text-[27px] leading-[1.3]">
              Financial Consultancy
            </h1>

            <Link
              href={"#"}
              className="text-button font-semibold text-lg cursor-pointer"
            >
              Read More
            </Link>
          </div>

          <Jobs className="services-icons"/>
        </div>

        <button className="text-white font-semibold text-xl bg-button cursor-pointer p-8">
          More Services
        </button>
      </div>
    </div>
  );
}
