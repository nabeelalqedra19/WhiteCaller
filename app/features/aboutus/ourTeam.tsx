import Facebook from "@/app/Components/icons/facebook";
import Insta from "@/app/Components/icons/insta";
import Twitter from "@/app/Components/icons/twitter";
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
      <Image src={c.img} alt="photo" fill className="absolute object-cover object-top" />
      <div className="group absolute w-full h-full hover:bg-[#6B77E5B2] hover:flex hover:justify-center hover:items-center hover:gap-2 transition">
        <Link
          href={"#"}
          className="bg-secondary p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible rounded-full"
        >
          <Insta />
        </Link>
        <Link
          href={"#"}
          className="bg-secondary p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible rounded-full"
        >
          <Facebook />
        </Link>
        <Link
          href={"#"}
          className="bg-secondary p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible rounded-full"
        >
          <Twitter />
        </Link>
      </div>
      <div></div>
      <div className="absolute bottom-5 left-5 right-5 bg-white p-5 text-center m-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cardList}
      </div>
    </div>
  );
}
