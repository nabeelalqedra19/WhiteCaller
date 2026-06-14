import Image from "next/image";
import YearsOfExperience from "@/app/Components/icons/yearsOfExperience";
import Clients from "@/app/Components/icons/clients";
import ProblemsSolved from "@/app/Components/icons/problemsSolved";
import Team from "@/app/Components/icons/team";

export default function Counts() {
  const cards = [
    {
      id: 1,
      icon: <YearsOfExperience className="counts-icons" />,
      number: "10+",
      tittle: "Make Appointment",
      description: "Synopsishigh level overviews value proposition.",
    },
    {
      id: 2,
      icon: <Clients className="counts-icons" />,
      number: "5960",
      tittle: "Consultation",
      description: "Synopsishigh level overviews value proposition.",
    },
    {
      id: 3,
      icon: <ProblemsSolved className="counts-icons" />,
      number: "50k",
      tittle: "Enjoy the Service",
      description: "Synopsishigh level overviews value proposition.",
    },
    {
      id: 4,
      icon: <Team className="counts-icons" />,
      number: "25+",
      tittle: "Enjoy the Service",
      description: "Synopsishigh level overviews value proposition.",
    },
  ];

  const cardList = cards.map((c) => (
    <div key={c.id} className="flex flex-col gap-2 justify-center">
      {c.icon}

      <div className="text-secondary text-[40px] font-bold text-center">
        {c.number}
      </div>

      <h1 className="text-primary font-semibold text-lg text-center">
        {c.tittle}
      </h1>

      <p className="text-primary text-[#7D7D7D] text-lg leading-[1.4] text-center">
        {c.description}
      </p>
    </div>
  ));
  return (
    <div
      className="w-full lg:h-100 p-10"
      style={{
        backgroundImage: "url('/aboutus/counts.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="app-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {cardList}
      </div>
    </div>
  );
}
