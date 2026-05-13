import Link from "next/link";
import Image from "next/image";

export default function Content() {
  return (
    <div className="app-container my-30">
      <div className="mb-8">
        <div className=" flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            Our Recent News
          </div>
        </div>
        <div className="text-center font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
          Featured News And Insights
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={"/blog1.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary text-center sm:text-start font-semibold text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            A Business Consulting That Can Produce
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link
            href={"#"}
            className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg "
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={"/blog2.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary font-semibold text-center sm:text-start text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            Popular Email Marketing Techniques 2022
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link
            href={"#"}
            className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg "
          >
            Read More
          </Link>
        </div>{" "}
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={"/blog/image3.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary text-center sm:text-start font-semibold text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            What are backlinks and Why They are Important
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link
            href={"#"}
            className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg "
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={"/blog/image.png"} alt="blog" width={579} height={300} />
          <h1 className="text-primary font-semibold text-center sm:text-start text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
            Importance of Keyword Research in a Blog
          </h1>
          <p className="text-[#7D7D7D] text-center sm:text-start text-sm sm:text-lg leading-[1.4]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking.
          </p>
          <Link
            href={"#"}
            className="text-button font-semibold text-center sm:text-start text-sm sm:text-lg "
          >
            Read More
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}
