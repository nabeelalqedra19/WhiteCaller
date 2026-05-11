import Image  from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
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
          <Link href={"/ourServices"} className="link">
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
  );
}
