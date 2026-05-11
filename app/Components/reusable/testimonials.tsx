import Image from "next/image";

export default function Testimoials() {
  return (
    <div className="app-container pt-20 my-30 grid grid-cols-1 place-items-center lg:items-stretch lg:justify-items-stretch lg:grid-cols-3 gap-5">
      <div className="lg:w-70">
        <div className="flex gap-2 items-center justify-center lg:justify-start mb-1 ">
          <div className="point w-3 h-3"></div>
          <div className="font-medium text-sm sm:text-lg">Our Project</div>
        </div>

        <h1 className="font-bold text-2xl sm:text-[40px] leading-[1.2] mb-3 text-center lg:text-start">
          What Our Client Says
        </h1>

        <p className="paragraph text-[#7D7D7D] text-center lg:text-start">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.Iterative{" "}
        </p>
      </div>

      <div className="bg-[#F6F6F6] p-10">
        <div className="flex items-center gap-4 mb-4">
          <Image src={"/testi1.png"} alt={"Photo"} width={100} height={100} />

          <div>
            <h1 className="text-primary font-semibold text-xl ">
              Nattasha Kelvin
            </h1>
            <p className="text-[#7D7D7D] text-sm">Designer</p>

            <Image
              src={"/icons/stars.svg"}
              alt="Stars"
              width={120}
              height={25}
              className="mt-1"
            />
          </div>
        </div>

        <p className="text-[#7D7D7D] leading-[1.5] max-w-145">
          “ dd an excerpt from your personal biography, or simply let the world
          know who you are and what you have to offer. Connect with your site
          visitor’s on a personal level and make sure that your site.
        </p>
      </div>
      <div className="bg-[#F6F6F6] p-10">
        <div className="flex items-center gap-4 mb-4">
          <Image src={"/testi2.png"} alt={"Photo"} width={100} height={100} />

          <div>
            <h1 className="text-primary font-semibold text-xl ">Cincinnati</h1>
            <p className="text-[#7D7D7D] text-sm">Designer</p>
            <Image
              src={"/icons/stars.svg"}
              alt="Stars"
              width={120}
              height={25}
              className="mt-1"
            />
          </div>
        </div>

        <p className="text-[#7D7D7D] leading-[1.5]">
          “ Leverage agile frameworks to provide a robust synopsis for high
          level overviews ”
        </p>
      </div>
    </div>
  );
}
