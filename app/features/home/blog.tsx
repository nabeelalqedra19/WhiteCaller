import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="my-30 app-container">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-1 text-center sm:text-start">
            <div className="point"></div>
            <div className="text-primary font-medium text-sm sm:text-lg ">
              Our Recent News
            </div>
          </div>

          <h1 className="text-primary font-bold text-xl sm:text-xl md:text-2xl lg:text-[40px] leading[1.2] text-center">
            Latest Posts
          </h1>
        </div>

        <button className="text-white bg-primary px-4 py-2 sm:px-5 sm:py-3 md:px-7 md:py-5 text-sm sm:text-lg font-semibold mt-5 sm:mt-3">
          More News
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div className="flex flex-col gap-3">
          <Image src={"/blog1.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary text-center sm:text-start text-semibold text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            A Business Consulting That Can Produce
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link href={"#"} className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg ">
            Read More
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Image src={"/blog2.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary text-semibold text-center sm:text-start text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            Team Identifiers, Benefits, and How to Build One that Works
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link href={"#"} className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg ">
            Read More
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}
