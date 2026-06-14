import Image from "next/image";
import Check from "../icons/check";
import Experience from "../icons/experience";
import Winner from "../icons/winner";

export default function About() {
  return (
    <div className="">
      <div className="app-container flex gap-7 flex-col lg:flex-row">
        <div className="py-15 px-8 flex justify-center lg:justify-end">
          <div className=" w-100 flex justify-end flex-col gap-5 lg:gap-3">
            <Image
              src={"/Image3.png"}
              alt="Photo"
              width={370}
              height={390}
              className="m-auto lg:m-0"
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-xl sm:text-[30px] leading-[1.2] text-center lg:text-start">
                We are Ready To Grow Your Business With Us
              </h1>

              <p className="font-normal text-lg leading-[1.4] text-[#7D7D7D] text-center lg:text-start">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. thinking to further the overall value
                proposition.{" "}
              </p>

              <div className="font-semibold text-primary text-lg leading-none cursor-pointer text-center lg:text-start">
                Get in Touch
              </div>
            </div>
          </div>
        </div>

        <div className="py-15 flex flex-col justify-start gap-6 bg-white">
          <div>
            <div className=" flex items-center gap-1 justify-center lg:justify-start">
              <div className="point"></div>
              <h1 className="font-medium text-lg leading-none text-primary">
                Welcome Whitecollar
              </h1>
            </div>

            <h1 className="font-bold text-2xl sm:text-[30px] lg:text-[40px] leading-[1.2] text-center lg:text-start">
              We Care About Your Business Plan.
            </h1>
          </div>

          <div className=" w-full lg:w-130 text-center lg:text-start">
            <p className="font-normal text-lg leading-[1.4] text-[#7D7D7D]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>

            <p className="pargaraph mt-3">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy{" "}
            </p>
          </div>

          <div className="m-auto lg:m-0">
            <div className="flex items-center gap-2 m-auto">
              <Check className="text-button"/>

              <div className="text-primary font-normal text-lg sm:text-xl leading-none">
                Components of a Business Strategy
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Check className="text-button"/>

              <div className="text-primary font-normal text-xl leading-none">
                Business Consulting
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            <div className="flex gap-3 items-start p-7 border-1 border-[#E5E5E5] justify-center lg:justify-start">
              <Experience />

              <div className="w-55">
                <h1 className="text-primary font-semibold text-xl">
                  Experience
                </h1>
                <p className="paragraph text-[#7D7D7D]">
                  Leverage frameworks toprovidee werment.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-7 border-1 border-[#E5E5E5] justify-center lg:justify-start">
              <Winner />

              <div className="w-55">
                <h1 className="text-primary font-semibold text-xl">
                  Awards Winner
                </h1>
                <p className="paragraph text-[#7D7D7D]">
                  Leverage frameworks toprovidee werment.
                </p>
              </div>
            </div>
          </div>

          <button className="text-white font-semibold w-fit text-lg bg-button p-5 cursor-pointer m-auto lg:m-0">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
