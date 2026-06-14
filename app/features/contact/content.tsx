import Call from "@/app/Components/icons/call";
import Email from "@/app/Components/icons/emai";
import Location from "@/app/Components/icons/location";
import Image from "next/image";

export default function Content() {
  return (
    <div className="app-container flex flex-col gap-15 my-30">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <Image
          src={"/contact/image1.png"}
          alt="photo"
          width={585}
          height={454}
        />
        <div>
          <div>
            <div className=" flex items-center justify-center lg:justify-start gap-1">
              <div className="point"></div>
              <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
                Let’s Talk
              </div>
            </div>
            <div className="font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] text-center lg:text-start">
              Get in touch with us
            </div>
            <p className="text-[#7D7D7D] leading-[1.4] text-lg my-5 m-auto text-center lg:text-start">
              Completely synergize resource taxing relationships via premier
              niche ynamically innovate state of the art customer service.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-fit lg:w-full mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-[#F4F4F4] p-4 rounded-full">
                <Call />
              </div>

              <div>
                <div className="text-sm font-normal text-[#7D7D7D]">
                  Have any question?
                </div>
                <div className="text-lg">Free +01 569 896 654</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F4F4F4] p-5 rounded-full">
                <Email />
              </div>

              <div>
                <div className="text-sm font-normal text-[#7D7D7D]">
                  Write email
                </div>
                <div className="text-lg">Info@whitecollar.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F4F4F4] p-5 rounded-full">
                <Location />
              </div>

              <div>
                <div className="text-sm font-normal text-[#7D7D7D]">
                  Visit anytime
                </div>
                <div className="text-lg">King Street, Prior Lake, New York</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className=" flex items-center justify-center gap-1">
            <div className="point"></div>
            <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
              Contact Us
            </div>
          </div>
          <div className="font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] text-center">
            Request A Call Back !
          </div>
        </div>

        <form action="" className="bg-white p-10 grid grid-cols-2 gap-3 mt-5">
          <input
            type="text"
            placeholder="Yourname"
            className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2 md:col-span-1"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2 md:col-span-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#F8F8F8] w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2 md:col-span-1"
          />
          <input
            type="description"
            placeholder="Message.."
            className="bg-[#F8F8F8] w-full h-30 py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent col-span-2"
          />
          <input
            type="submit"
            value="Submit"
            className="text-white bg-button font-semibold text-lg py-4 px-10 my-5 cursor-pointer col-span-2 sm:col-span-2 w-fit mx-auto"
          />
        </form>
      </div>
    </div>
  );
}
