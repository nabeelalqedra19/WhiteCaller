import Image from "next/image";
import Location from "../icons/location";
import Email from "../icons/emai";
import Time from "../icons/time";
import Insta from "../icons/insta";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Pintrest from "../icons/pintrest";

export default function Header() {
  return (
    <div className=" hidden md:flex w-full bg-primary items-center justify-center">
      <div className="app-container my-5 text-white flex flex-col justify-center gap-8 sm:flex-row sm:w-full sm:justify-between">
        <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-between md:gap-10">
          <div className="flex gap-1 items-center">
            <Location />
            <span className="font-normal text-sm leading-none">
              24 Olive Street, Prairie, NY 53590
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <Email />
            <span className="font-normal text-sm leading-none">
              whitecollar@gmail.com
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-between md:gap-10">
          <div className="flex gap-1 items-center">
            <Time />
            <span className="font-normal text-sm leading-none">
              Mon - Fri: 8:00 am - 5:00 pm
            </span>
          </div>

          <div className="flex justify-start items-center gap-2">
            <a href="">
              <Insta />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Pintrest />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
