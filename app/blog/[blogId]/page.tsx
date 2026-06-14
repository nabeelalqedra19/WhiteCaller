import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ blogId: string }>;
}

export default async function Page({ params }: PageProps) {
  const data: Record<string, { image: string; tittle: string }> = {
    one: {
      image: "/blog1.png",
      tittle: "A Business Consulting That Can Produce",
    },
    two: {
      image: "/blog2.png",
      tittle: "Popular Email Marketing Techniques 2022",
    },
    three: {
      image: "/blog/image3.png",
      tittle: "Importance of Keyword Research in a Blog",
    },
    four: {
      image: "blog/image.png",
      tittle: "Importance of Keyword Research in a Blog",
    },
  };

  const { blogId } = await params;
  const currentData = data[blogId];

  return (
    <div className="app-container mb-30">
      <div className="flex flex-col gap-8 mb-30">
        <Image src={currentData.image} alt="Photo" width={1220} height={750} />

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-[1.3] mb-3 text-center sm:text-start">
            {currentData.tittle}
          </h1>
          <p className="text-lg leading-[1.5] text-[#7D7D7D] text-center sm:text-start">
            Bring to the table win win survival strategies to ensure proactive
            domination at the end of the day going forward a new normal that has
            evolved from generation on the runway heading towards a streamlined
            cloud solution user generated content in real time will have
            multiple touchpoints for offshoring capitalize on low hanging fruit
            to identify a ballpark values added activity to beta test overrided
            the digital divided with additional clickthroughs from close the
            loop on focusing solely on the bottom line.
          </p>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-[1.3] mb-3 text-center sm:text-start">
            The Work & Life Style For All
          </h1>
          <p className="text-lg leading-[1.5] text-[#7D7D7D] text-center sm:text-start">
            Bring to the table win win survival strategies to ensure proactive
            domination at the end of the day going forward a new normal that has
            evolved from generation on the runway heading towards a streamlined
            cloud solution user generated content in real time will have
            multiple touchpoints for offshoring capitalize on low hanging fruit
            to identify a ballpark values added activity to beta test overrided.
          </p>
        </div>

        <ul className="unorder-list">
          <li className="list">
            Dynamically target high-payoff intellectual capital for customized
          </li>
          <li className="list my-4">
            Interactively procrastinate high-payoff content
          </li>
          <li className="list">
            Credibly reinter mediate backend ideas for cross-platform models
          </li>
        </ul>

        <div>
          <div className="bg-button w-full h-5"></div>
          <p className="bg-secondary p-15 text-lg sm:text-xl leading-[1.5] text-center">
            “For the longest time, computers have been associated with work.
            Mainframes were for the Army, government agencies, and then large
            companies. Workstations were for engineers and software programmers.
            PCs were initially for other white-collar jobs.”
          </p>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-[1.3] mb-3 text-center sm:text-start">
            The Work & Life Style For All
          </h1>
          <p className="text-lg leading-[1.5] text-[#7D7D7D] text-center sm:text-start">
            Bring to the table win win survival strategies to ensure proactive
            domination at the end of the day going forward a new normal that has
            evolved from generation on the runway heading towards a streamlined
            cloud solution user generated content.
          </p>
        </div>

        <ol className="order-list">
          <li className="list">
            Dynamically target high-payoff intellectual capital for customized
          </li>
          <li className="list my-4">
            Interactively procrastinate high-payoff content
          </li>
          <li className="list">
            Credibly reinter mediate backend ideas for cross-platform models
          </li>
        </ol>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-primary font-bold text-3xl md:text-[40px] leading[1.2] text-center">
            Related News
          </h1>

          <button className="text-white bg-primary px-4 py-2 sm:px-5 sm:py-3 md:px-7 md:py-5 text-sm sm:text-lg font-semibold mt-5 sm:mt-3">
            More News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="flex flex-col gap-3 md:justify-start items-center md:items-start">
            <Image
              src={"/blogSingle/Image1.png"}
              alt="blog"
              width={579}
              height={300}
            />
            <h1 className="text-primary text-center md:text-start font-semibold text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
              A Business Consulting That Can Produce
            </h1>
            <p className="text-[#7D7D7D] text-center md:text-start text-sm sm:text-lg leading-[1.4]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking.
            </p>
            <Link
              href={"#"}
              className="text-button font-semibold text-center md:text-start text-sm sm:text-lg "
            >
              Read More
            </Link>
          </div>
          <div className="flex flex-col gap-3 justify-center md:justify-start items-center md:items-start">
            <Image
              src={"/blogSingle/Image2.png"}
              alt="blog"
              width={579}
              height={300}
            />
            <h1 className="text-primary font-semibold text-center md:text-start text-xl sm:text-2xl md:text-[30px] leading-[1.3]">
              Popular Email Marketing Techniques 2022
            </h1>
            <p className="text-[#7D7D7D] text-center md:text-start text-sm sm:text-lg leading-[1.4]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking.
            </p>
            <Link
              href={"#"}
              className="text-button font-semibold text-center md:text-start text-sm sm:text-lg "
            >
              Read More
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
