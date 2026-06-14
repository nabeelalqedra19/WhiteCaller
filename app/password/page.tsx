import Image from "next/image";

export default function Password() {
  return (
    <div className="app-container bg-[#F8F8F8] p-20 flex flex-col gap-7 my-30">
      <Image
        src={"/password/icon.svg"}
        alt="icon"
        width={150}
        height={150}
        className="m-auto"
      />

      <div>
        <div className=" flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            Password
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] text-center">
          Protected Page
        </div>
      </div>

      <form action="">
        <input
          type="text"
          placeholder="Yourname"
          className="bg-white w-full py-3 px-5 text-primary text-lg placeholder:text-primary placeholder:text-lg focus:outline-none focus:placeholder-transparent"
        />
        <input
          type="submit"
          value="Submit"
          className="text-white bg-button font-semibold text-lg py-4 px-10 my-5 cursor-pointer w-full"
        />
      </form>
    </div>
  );
}
