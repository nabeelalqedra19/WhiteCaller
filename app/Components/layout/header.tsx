import Image from "next/image";

export default function Header() {
  return (
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
            <Image src="/icons/email.svg" alt="email" width={20} height={15} />
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
  );
}
