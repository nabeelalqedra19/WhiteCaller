import Check from "@/app/Components/icons/check";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <div className="bg-button py-15 mt-30">
      <div className="app-container text-white grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div>
            <div className="flex items-center justify-center lg:justify-start  gap-1">
              <div className="point"></div>
              <div className=" font-medium text-lg ">How We Work</div>
            </div>

            <h1 className="font-bold text-2xl sm:text-[30px] lg:text-[40px] text-center lg:text-start leading[1.2] ">
              To Get Your Business To The Next Level
            </h1>

            <p className="text-lg mt-4 text-center lg:text-start">
              Leverage agile frameworks to provide synopsis for high level
              overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>
          </div>

          <div className="bg-secondary p-5 flex flex-col sm:flex-row items-center justify-center gap-4 my-5">
            <Image
              src={"/icons/projectsNumber.svg"}
              alt="Projects Number"
              width={150}
              height={150}
            />

            <p className="text-2xl leading-[1.3] text-center sm:text-start max-w-102">
              We have <span className="font-bold">50+</span> years of
              experience. We offer{" "}
              <span className="font-bold">whitecollar</span> services to you
            </p>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <Check className="text-secondary" />

              <div>
                <h1 className="font-semibold text-xl ">Planning</h1>
                <p className="text-lg leading-[1.4] pb-5 border-b-1">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
              <Check className="text-secondary" />

              <div>
                <h1 className="font-semibold text-xl ">Briefing</h1>
                <p className="text-lg leading-[1.4] pb-5 border-b-1">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
              <Check className="text-secondary" />

              <div>
                <h1 className="font-semibold text-xl ">Evaluation</h1>
                <p className="text-lg leading-[1.4]">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center gap-1 justify-center lg:justify-start">
              <div className="point"></div>
              <div className=" font-medium text-lg ">Book Now</div>
            </div>

            <h1 className="font-bold text-2xl sm:text-[30px] lg:text-[40px] leading[1.2] text-center lg:text-start ">
              Get Free Business Appointment
            </h1>
          </div>

          <form action="" className="bg-white p-10 grid grid-cols-2 gap-3 mt-5">
            <input
              type="text"
              placeholder="Yourname"
              className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2"
            />
            <input
              type="date"
              placeholder="Date"
              className="bg-[#F8F8F8] w-full py-3 px-5 mr-3 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-1"
            />
            <input
              type="time"
              placeholder="Time"
              className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-1"
            />
            <input
              type="description"
              placeholder="Service Description"
              className="bg-[#F8F8F8] w-full h-30 py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2"
            />
            <input
              type="submit"
              value="Submit"
              className="text-primary bg-secondary font-semibold text-lg py-3 px-5 cursor-pointer col-span-2 sm:col-span-1"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
