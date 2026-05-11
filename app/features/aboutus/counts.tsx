import Image from "next/image";

export default function Counts() {
  const cards = [
    {
      id: 1,
      icon: "/aboutus/icons/Icon1.svg",
      number: "10+",
      tittle: "Make Appointment",
      description:
        "Synopsishigh level overviews value proposition.",
    },
    {
      id: 2,
      icon: "/aboutus/icons/Icon2.svg",
      number: "5960",
      tittle: "Consultation",
      description:
        "Synopsishigh level overviews value proposition.",
    },
    {
      id: 3,
      icon: "/aboutus/icons/Icon3.svg",
      number: "50k",
      tittle: "Enjoy the Service",
      description:
        "Synopsishigh level overviews value proposition.",
    },
    {
      id: 4,
      icon: "/aboutus/icons/Icon4.svg",
      number: "25+",
      tittle: "Enjoy the Service",
      description:
        "Synopsishigh level overviews value proposition.",
    },
  ];

  const cardList = cards.map((c) => (
    <div key={c.id} className="flex flex-col gap-2 justify-center">
      <Image src={c.icon} alt="Icon" width={120} height={120} className="m-auto"/>

      <div className="text-secondary text-[40px] font-bold text-center">{c.number}</div>

      <h1 className="text-primary font-semibold text-lg text-center">{c.tittle}</h1>

      <p className="text-primary text-[#7D7D7D] text-lg leading-[1.4] text-center">{c.description}</p>
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
