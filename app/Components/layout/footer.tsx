import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary py-20">
      <div className="app-container text-white">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
          <Image src={"/icons/logo2.svg"} alt="Logo" width={250} height={60} />

          <div className="flex flex-col md:flex-row justify-center lg:justify-between gap-10">
            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#4C4D52] p-5 rounded-full">
                <Image
                  src={"/icons/call.svg"}
                  alt="Icon"
                  width={26}
                  height={20}
                />
              </div>

              <div>
                <div className="text-xl font-semibold ">Call Us</div>
                <div className="text-lg">+01 569 896 654</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#4C4D52] p-5 rounded-full">
                <Image
                  src={"/icons/email.svg"}
                  alt="Icon"
                  width={26}
                  height={20}
                />
              </div>

              <div>
                <div className="text-xl font-semibold ">Mail Us</div>
                <div className="text-lg">Info@Example.com</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#4C4D52] p-5 rounded-full">
                <Image
                  src={"/icons/location.svg"}
                  alt="Icon"
                  width={20}
                  height={30}
                />
              </div>

              <div>
                <div className="text-xl font-semibold ">Location</div>
                <div className="text-lg">Amsterdam, 109-74</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between py-10 my-10 border-y-1 border-[#6C6D72] gap-10">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-15">
            <div className="flex flex-col justify-center gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <div className="point bg-button"></div>
                <div className="font-medium text-lg text-secondary">
                  Quick Link
                </div>
              </div>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Home
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                About Us
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Services
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                <div className="point bg-button"></div>
                <div className="font-medium text-lg text-secondary">
                  Our Services
                </div>
              </div>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Financial Consulting
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Business Management
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Consultant & Programs
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Company Management
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Insurance & Finance
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                <div className="point bg-button"></div>
                <div className="font-medium text-lg text-secondary">
                  Uitility Page
                </div>
              </div>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Style Guide
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Licenses
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Instructions
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                Changelog
              </Link>
              <Link
                href={"#"}
                className="text-xl sm:text-lg hover:text-secondary transition text-center sm:text-start"
              >
                404 Page
              </Link>
            </div>
          </div>

          <div className="bg-[#474950] p-10 h-fit flex flex-col gap-3 justify-center">
            <div className="font-semibold text-2xl md:text-xl text-center md:text-start  ">
              Subscribe
            </div>
            <div className="text-xl md:text-lg leading-[2.2] text-center md:text-start">
              Join Our Mailing List & to get our news.
            </div>
            <form
              action=""
              className="w-full bg-white flex flex-col md:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="Your Email Address"
                className="p-5 w-full text-xl text-primary focus:outline-none focus:placeholder:text-transparent placeholder:text-primary placeholder:text-xl placeholder:text-center md:placeholder:text-start transition"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-button px-8 py-5 text-lg font-semibold cursor-pointer"
              />
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="text-lg leading-[1.5] text-center lg:text-start ">
            Copyright © <span className="text-secondary">WhiteCollar</span> |
            Designed by <span className="text-button">VictorFlow</span>{" "}
            Templates - Powered by Webflow
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-3">
            <div className="text-lg">Follow : </div>
            <Link href="">
              <Image
                src="/icons/insta.svg"
                alt="insta"
                width={17}
                height={16}
              />
            </Link>
            <Link href="">
              <Image
                src="/icons/fb.svg"
                alt="facebook"
                width={18}
                height={14}
              />
            </Link>
            <Link href="">
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                width={17}
                height={20}
              />
            </Link>
            <Link href="">
              <Image
                src="/icons/pintrest.svg"
                alt="pintrest"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
