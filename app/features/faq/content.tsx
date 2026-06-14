import Link from "next/link";
import Image from "next/image";

export default function Content() {
  return (
    <div className="app-container flex flex-col lg:flex-row gap-10 my-30">
      <div className="bg-[#F4F4F4] p-5">
        <h1 className="text-primary text-2xl font-semibold leading-[1.3] mb-4">
          Categories
        </h1>

        <div className="flex flex-col gap-4 lg:w-70">
          <Link
            href={"#"}
            className="text-xl sm:text-2xl lg:text-xl hover:bg-button hover:text-white transition cursor-pointer p-3 w-full"
          >
            Main Questions
          </Link>
          <Link
            href={"#"}
            className="text-xl sm:text-2xl lg:text-xl hover:bg-button hover:text-white transition cursor-pointer p-3 w-full"
          >
            Common Queries
          </Link>
          <Link
            href={"#"}
            className="text-xl sm:text-2xl lg:text-xl hover:bg-button hover:text-white transition cursor-pointer p-3 w-full"
          >
            General Questions
          </Link>
          <Link
            href={"#"}
            className="text-xl sm:text-2xl lg:text-xl hover:bg-button hover:text-white transition cursor-pointer p-3 w-full"
          >
            Legal information
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <Link
          href={"/pricePacks"}
          className="p-5 border-1 border-[#E3E3E3] flex justify-between"
        >
          <span className=" text-xl sm:text-2xl font-semibold">
            How does our pricing works ?
          </span>
          <Image
            src={"/servicesSingle/icons/plus.svg"}
            alt="Photo"
            width={16}
            height={16}
          />
        </Link>
        <Link
          href={"#"}
          className="p-5 border-1 border-[#E3E3E3] flex justify-between"
        >
          <span className="text-xl sm:text-2xl  font-semibold">
            How does our pricing works ?
          </span>
          <Image
            src={"/servicesSingle/icons/plus.svg"}
            alt="Photo"
            width={16}
            height={16}
          />
        </Link>
        <Link
          href={"#"}
          className="p-5 border-1 border-[#E3E3E3] flex justify-between"
        >
          <span className="text-xl sm:text-2xl  font-semibold">
            What Types Of Companies Do You Work With?
          </span>
          <Image
            src={"/servicesSingle/icons/plus.svg"}
            alt="Photo"
            width={16}
            height={16}
          />
        </Link>
        <Link
          href={"#"}
          className="p-5 border-1 border-[#E3E3E3] flex justify-between"
        >
          <span className="text-xl sm:text-2xl  font-semibold">
            What Types Of Companies Do You Work With?
          </span>
          <Image
            src={"/servicesSingle/icons/plus.svg"}
            alt="Photo"
            width={16}
            height={16}
          />
        </Link>
      </div>

    </div>
  );
}
