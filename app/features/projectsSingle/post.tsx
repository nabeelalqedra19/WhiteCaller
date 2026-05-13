import Image from "next/image";

export default function Post() {
  return (
    <div className="app-container my-30">
      <h1 className="text-3xl sm:text-[40px] font-bold leading-[1.3] mb-8 text-center">Related Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
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
      </div>
    </div>
  );
}
