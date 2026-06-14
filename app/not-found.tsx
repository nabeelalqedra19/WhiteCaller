import Link from "next/link";

export default function Error() {
  return (
    <div
      className="text-white w-full md:h-200 py-20 flex justify-center items-center"
      style={{
        backgroundImage: "url(/error/Image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="app-container text-center w-200">
        <div className="text-[100px] sm:text-[170px] md:text-[200px] font-bold text-center">
          404
        </div>
        <h1 className="text-[40px] sm:text[50px] md:text-[60px] font-bold leading-[1.1] text-center">
          Oops! Page not found!
        </h1>

        <p className="text-sm sm:text-lg leading-[1.5] my-8">
          Leveling customer service for state of the art customer service
          innovate product for reliable supply engage web services cutting-edge
          deliverables.
        </p>

        <Link
          href={"/home"}
          className="bg-secondary text-primary py-3 px-8 text-lg font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
