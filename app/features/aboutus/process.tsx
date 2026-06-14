import Image from "next/image";
import Link from "next/link";
import Date from "@/app/Components/icons/date";
import Consultation from "@/app/Components/icons/consultation";
import Enjoy from "@/app/Components/icons/enjoy";

export default function Process() {
  const cards = [
    {
      id: 1,
      icon: <Date className="services-icons m-auto" />,
      tittle: "Make Appointment",
      description:
        "Leverage agile frameworks provide synopsishigh level overviewsvalue proposition",
    },
    {
      id: 2,
      icon: <Consultation className="services-icons m-auto" />,
      tittle: "Consultation",
      description:
        "Leverage agile frameworks provide synopsishigh level overviewsvalue proposition",
    },
    {
      id: 3,
      icon: <Enjoy className="services-icons m-auto" />,
      tittle: "Enjoy the Service",
      description:
        "Leverage agile frameworks provide synopsishigh level overviewsvalue proposition",
    },
  ];

  const cardList = cards.map((c) => (
    <div key={c.id} className="p-5 bg-[#F4F4F4] text-center">
      {c.icon}
      <h1 className="text-shadow-primary text-2xl font-semibold leading[1.3] text-center mt-3">
        {c.tittle}
      </h1>
      <p className="text-lg leading-[1.4] text-[#7D7D7D] text-center my-5">
        {c.description}
      </p>
      <Link
        href={"#"}
        className="text-button font-semibold text-lg text-center"
      >
        Testimonials
      </Link>
    </div>
  ));
  return (
    <div className="app-container flex flex-col gap-10 my-20">
      <div className="text-primary">
        <div className=" flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            Work Process
          </div>
        </div>
        <div className="text-center font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
          How We Work
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">{cardList}</div>
    </div>
  );
}
