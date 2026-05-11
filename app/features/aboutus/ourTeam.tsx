import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
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
    <div className="app-container my-30">
      <div>
        <div className=" flex items-center justify-center gap-1">
          <div className="point bg-button"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            Our Team
          </div>
        </div>
        <div className="text-center font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
          Meet Our Experts
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cardList}
      </div>
    </div>
  );
}
