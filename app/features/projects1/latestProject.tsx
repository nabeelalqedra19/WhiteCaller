import Image from "next/image";

export default function LatestProject() {
  return (
    <div className="app-container py-20">
      <div className="text-primary">
        <div className=" flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            The Case Studies
          </div>
        </div>
        <div className="text-center font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
          Discover our latest client projects
        </div>
        <p className="text-[#7D7D7D] leading-[1.4] text-lg text-center my-5 lg:w-200 m-auto" >
          Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <Image
            src={"/project1.png"}
            alt="project 1"
            width={770}
            height={500}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Financial Investment
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/project2.png"}
            alt="project 1"
            width={770}
            height={500}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Marketing Strategy
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/project3.png"}
            alt="project 1"
            width={770}
            height={500}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Business Consulting
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/project4.png"}
            alt="project 1"
            width={770}
            height={500}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Financial Investment
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/project5.png"}
            alt="project 1"
            width={770}
            height={200}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Marketing Strategy
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/project6.png"}
            alt="project 1"
            width={770}
            height={500}
          />
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1 className="text-primary font-semibold text-xl mb-3">
                Business Consulting
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"icons/date2.svg"}
                  alt="Date"
                  width={22}
                  height={22}
                />
                <span className="text-[#7D7D7D] leading-[1.4]">Sep 2022</span>
              </div>
            </div>
            <div className="p-3 bg-toRight rounded-full cursor-pointer hover:bg-button transition">
              <Image
                src={"icons/toRight.svg"}
                alt="Nabeel"
                width={10}
                height={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
