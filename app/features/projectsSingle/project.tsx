import Image from "next/image";

export default function Project() {
  return (
    <div className="app-container my-20">
      <Image
        src={"/projectsSingle/image1.png"}
        alt={"Code"}
        width={1220}
        height={700}
        className="mb-10"
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-[#F4F4F4] text-2xl font-semibold leading-[1.3] h-fit">
          <h1 className="bg-secondary text-white p-5">Project Details</h1>
          <div className="p-5 lg:w-80">
            <div className="pb-3 border-b-1 border-[#C5C5C5]">
              <h1 className="text-lg sm:text-2xl lg:text-lg font-semibold">Client :</h1>
              <span className="text-lg sm:text-2xl lg:text-lg text-[#7D7D7D]">Katherine Coleman</span>
            </div>
            <div className="py-3  border-b-1 border-[#C5C5C5]">
              <h1 className="text-lg sm:text-2xl lg:text-lg font-semibold">Location :</h1>
              <span className="text-lg sm:text-2xl lg:text-lg text-[#7D7D7D]">
                New York United States
              </span>
            </div>
            <div className="py-3 border-b-1 border-[#C5C5C5]">
              <h1 className="text-lg sm:text-2xl lg:text-lg font-semibold">Project Date :</h1>
              <span className="text-lg sm:text-2xl lg:text-lg text-[#7D7D7D]">15 September ,2023</span>
            </div>
            <div className="py-3 border-b-1 border-[#C5C5C5]">
              <h1 className="text-lg sm:text-2xl lg:text-lg font-semibold">Website :</h1>
              <span className="text-lg sm:text-2xl lg:text-lg text-[#7D7D7D]">
                http://whitecollar.com
              </span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-3xl sm:text-[40px] font-bold leading-[1.3]">
              Project Information
            </h1>
            <p className="text-lg leading-[1.5] text-[#7D7D7D] mb-5 mt-3">
              Distinctively re-engineer revolutionary meta service and premium
              architectures incubate intuitive opportunities and real-time
              potentialities. Appropriately communicates once one technology
              after plug-and-play networks.
            </p>
            <p className="text-lg leading-[1.5] text-[#7D7D7D]">
              Quickly aggregates users and worldwides potentialities
              progressively plagiarize resource leveling e-commerce through
              resource leveling cores competencies dramatically mesh low risk
              high yield alignments before transparent e-tailers.
            </p>
          </div>

          <ul className="unorder-list my-8">
            <li className="list">
              the printing and typesetting industry.
            </li>
            <li className="list py-3">
              Lorem Ipsum has been the industrys standard{" "}
            </li>
            <li className="list">
              It has survived not only five centuries.
            </li>
          </ul>

          <p className="text-lg leading-[1.5] text-[#7D7D7D]">
            Compellingly embrace empowered e-business after user friendly
            intellectual capitals Interactively actualize front-end processes
            with effectives convergenced Synergistically deliver performanced
            based methods empowerment whereas distributed expertised efficiently
            enable enabled sources and cost effective products completely
            ethical communities.
          </p>

          <ol className="list-decimal text-[#7D7D7D] pl-8 py-8">
            <li className="text-lg font-medium leading-[1.5]">
              the printing and typesetting industry.
            </li>
            <li className="text-lg font-medium leading-[1.5] py-5">
              Lorem Ipsum has been the industrys standard{" "}
            </li>
            <li className="text-lg font-medium leading-[1.5]">
              It has survived not only five centuries.
            </li>
          </ol>

          <p className="text-lg leading-[1.5] text-[#7D7D7D]">
            Compellingly embrace empowered e-business after user friendly
            intellectual capitals Interactively actualize front-end processes
            with effectives convergenced Synergistically deliver performanced
            based methods empowerment whereas distributed expertised efficiently
            enable enabled sources and cost effective products completely
            ethical communities.
          </p>
        </div>
      </div>
    </div>
  );
}
