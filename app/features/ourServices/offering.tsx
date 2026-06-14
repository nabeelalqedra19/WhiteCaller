import DataAnalysis from "@/app/Components/icons/dataAnalysis";
import Designing from "@/app/Components/icons/designing";
import Development from "@/app/Components/icons/development";
import Management from "@/app/Components/icons/management";
import Image from "next/image";

export default function Offering() {
  const cards = [
    {
      id: 1,
      icon: <Development className="m-auto" />,
      tittle: "Product development",
      description: "level overviews proposition. ",
    },
    {
      id: 2,
      icon: <Designing className="m-auto" />,
      tittle: "UI/UX designing",
      description: "level overviews proposition. ",
    },
    {
      id: 3,
      icon: <DataAnalysis className="m-auto" />,
      tittle: "Data analysis",
      description: "level overviews proposition. ",
    },
    {
      id: 4,
      icon: <Management className="m-auto" />,
      tittle: "Content management",
      description: "level overviews proposition. ",
    },
  ];

  const cardsList = cards.map((c) => (
    <div key={c.id} className="p-5 border-1 border-[#636363] text-center hover:bg-button cursor-pointer transition">
      {c.icon}

      <h1 className="text-2xl fonte-semibold leading-[1.3] my-3">{c.tittle}</h1>

      <p className="text-sm leading-[1.4] w-40 m-auto">{c.description}</p>
    </div>
  ));
  return (
    <div className="bg-primary py-20 my-30">
      <div className="app-container text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="lg:w-100">
            <div className="flex items-center justify-center lg:justify-start gap-1">
              <div className="point"></div>
              <div className="font-medium text-sm sm:text-lg">
                What we’re offering
              </div>
            </div>

            <h1 className="font-semibold text-xl md:text-3xl leading-[1.2] text-center lg:text-start">
              Services we’re providing to our customers
            </h1>
          </div>

          <p className="text-sm leading-[1.4] font-normal md:w-130 text-center lg:text-start">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            service for state of the art customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-7">
          {cardsList}
        </div>
      </div>
    </div>
  );
}
