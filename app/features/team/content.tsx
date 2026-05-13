import Image from "next/image";
import Link from "next/link";

export default function Content() {
  const cards = [
    {
      id: 1,
      img: "/aboutus/Image1.png",
      name: "Nattasha Kelvin",
      job: "Managing Director",
    },
    {
      id: 2,
      img: "/aboutus/Image2.png",
      name: "David	Simpson",
      job: "Designer",
    },
    {
      id: 3,
      img: "/aboutus/Image3.png",
      name: "Madeleine	Grant",
      job: "Marketing Specialist",
    },
    {
      id: 4,
      img: "/team/image4.png",
      name: "Jonathan	Coleman",
      job: "Managing Director",
    },
    {
      id: 5,
      img: "/team/image5.png",
      name: "Wanda	Forsyth",
      job: "Designer",
    },
    {
      id: 6,
      img: "/team/image6.png",
      name: "Austin	Randall",
      job: "Marketing Specialist",
    },
  ];
  const cardList = cards.map((c) => (
    <div key={c.id} className="w-full h-[500px] relative cursor-pointer">
      <Image src={c.img} alt="photo" fill className="absolute" />
      <div className="absolute w-full h-full hidden hover:bg-[#6B77E5B2] hover:flex hover:justify-center hover:items-center hover:gap-2 transition">
        <Link href={"#"} className="bg-secondary p-4 rounded-full">
          <Image src={"/icons/insta.svg"} alt="Icon" width={30} height={30} />
        </Link>
        <Link href={"#"} className="bg-secondary p-4 rounded-full">
          <Image src={"/icons/fb.svg"} alt="Icon" width={30} height={30} />
        </Link>
        <Link href={"#"} className="bg-secondary p-4 rounded-full">
          <Image src={"/icons/twitter.svg"} alt="Icon" width={30} height={30} />
        </Link>
      </div>
      <div></div>
      <div className="absolute bottom-3 left-3 right-3 bg-white p-5 text-center m-5 mt-[115%]">
        <h1 className="text-2xl font-semibold ">{c.name}</h1>
        <span className="text-lg text-[#7D7D7D]">{c.job}</span>
      </div>
    </div>
  ));
  return (
    <div className="app-container my-30 flex flex-col gap-15">
      <div className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cardList}
        </div>
      </div>

      <div className=" bg-primary text-white flex flex-col lg:flex-row">
        <div className="text-center lg:text-start px-10 my-10 lg:my-auto">
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-1 ">
            <div className="point w-3 h-3"></div>
            <div className="font-medium text-sm sm:text-lg">Dedicated Team</div>
          </div>

          <h1 className="font-semibold text-xl sm:text-[30px] leading-[1.2] mb-3">
            Professional Individuals
          </h1>

          <p className="paragraph">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall proposition.{" "}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
            <Image src={"/team/icon.svg"} alt="PIC" width={120} height={120} />
            <div>
              <span className="text-[40px] font-semibold ">75%</span>
              <div className="text-lg leading-[1.5]">
                <span className="text-lg font-semibold ">Income Statement</span>
                Leverage agile frameworks to provide a robust proposition.{" "}
              </div>
            </div>
          </div>
        </div>

        <Image src={"/team/image.png"} alt="pic" width={1000} height={500} />
      </div>
    </div>
  );
}
