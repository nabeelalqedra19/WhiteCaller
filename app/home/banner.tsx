import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="font-inter">
      {/* Header */}
      <div className=" hidden md:flex w-full bg-primary items-center justify-center">
        <div className="app-container my-5 text-white flex flex-col justify-center gap-8 sm:flex-row sm:w-full sm:justify-between">
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-between md:gap-10">
            <div className="flex gap-1 items-center">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={15}
                height={22}
              />
              <span className="font-normal text-sm leading-none">
                24 Olive Street, Prairie, NY 53590
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="/icons/email.svg"
                alt="email"
                width={20}
                height={15}
              />
              <span className="font-normal text-sm leading-none">
                whitecollar@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-between md:gap-10">
            <div className="flex gap-1 items-center">
              <Image src="/icons/time.svg" alt="time" width={14} height={14} />
              <span className="font-normal text-sm leading-none">
                Mon - Fri: 8:00 am - 5:00 pm
              </span>
            </div>

            <div className="flex justify-start items-center gap-2">
              <a href="">
                <Image
                  src="/icons/insta.svg"
                  alt="insta"
                  width={17}
                  height={16}
                />
              </a>
              <a href="">
                <Image
                  src="/icons/fb.svg"
                  alt="facebook"
                  width={18}
                  height={14}
                />
              </a>
              <a href="">
                <Image
                  src="/icons/twitter.svg"
                  alt="twitter"
                  width={17}
                  height={20}
                />
              </a>
              <a href="">
                <Image
                  src="/icons/pintrest.svg"
                  alt="pintrest"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}

      {/* Menu */}
      <div className="app-container my-6 w-full flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={200} height={38} />

        <div className="hidden lg:flex justify-between items-center gap-7">
          <div className="flex justify-between gap-7">
            <Link href={"/"} className="link">
              Home
            </Link>
            <Link href={"/aboutus"} className="link">
              About Us
            </Link>
            <Link href={"/pages"} className="link">
              Pages
            </Link>
            <Link href={"/services"} className="link">
              Services
            </Link>
            <Link href={"/blog"} className="link">
              Blog
            </Link>
            <Link href={"/contactus"} className="link">
              Contact Us
            </Link>
          </div>

          <button className="h-full p-4 bg-button text-white cursor-pointer">
            Get Consulting
          </button>
        </div>

        <button className="lg:hidden bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/* Menu */}

      {/* Banner */}
      <div className="bg-gray-400 w-full md:h-100 lg:h-200 bg-cover">
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
                <button className="font-semibold text-18 leading-none cursor-pointer bg-secondary px-7 py-5">Get Consluting</button>

                <div className="flex justify-center items-center gap-2">
                  <Image src={'/icons/play Butten.svg'} alt="Play Button" width={60} height={60} />
                  <p className="text-white font-semibold text-lg leading-none">Watch Vedio</p>
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
