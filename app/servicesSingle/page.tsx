import Link from "next/link";
import Image from "next/image";
import Banner from "../Components/reusable/banner";

export default function ServicesSingle() {
  return (
    <div>
        <Banner type={"About The Services"} tittle={"Business Management"} description={""} imageUrl={'/servicesSingle/image3.png'}/>
      <div className="app-container flex flex-col lg:flex-row gap-10 my-30">
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col md:flex-row lg:flex-col gap-5">
            <div className="bg-[#F4F4F4] p-5">
              <h1 className="text-primary text-2xl font-semibold leading-[1.3] text-center">
                Services
              </h1>

              <div className="p-3 flex justify-between items-center gap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl sm:text-2xl lg:text-xl">
                  Financial Consultancy
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
              <div className="p-3 flex justify-between items-center gap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl ">
                  Business Management
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
              <div className="p-3 flex justify-between items-center gap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl ">
                  Consultancy Program
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
              <div className="p-3 flex justify-between items-center gap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl ">
                  Marketing Consultancy
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
              <div className="p-3 flex justify-between items-centergap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl ">
                  Financial Insurance & Jobs
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
              <div className="p-3 flex justify-between items-center gap-30 md:gap-20 hover:bg-button hover:text-white transition cursor-pointer">
                <Link href={"#"} className="text-xl ">
                  Bank Management
                </Link>
                <Image
                  src={"/servicesSingle/icons/toright.svg"}
                  alt="icon"
                  width={10}
                  height={5}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="bg-[#F4F4F4] p-5">
              <h1 className="text-primary text-2xl font-semibold leading-[1.3] border-b-1 border-primary pb-5">
                Download
              </h1>

              <p className="text-lg leading-[1.4] text-[#7D7D7D] lg:w-100 py-5">
                One-to-one customer service with robust deliverables.
              </p>

              <div className="flex flex-col justify-center gap-5 lg:w-fit">
              <button className="py-4 px-8 lg:py-2 lg:px-4 flex items-center justify-center lg:justify-start gap-2 bg-button text-white">
                <Image
                  src={"/servicesSingle/icons/pdf.svg"}
                  alt="Icon"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-semibold ">Document.pdf</span>
              </button>

              <button className="py-4 px-8 lg:py-2 lg:px-4 flex items-center justify-center gap-2 bg-button text-white">
                <Image
                  src={"/servicesSingle/icons/zip.svg"}
                  alt="Icon"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-semibold ">Document.zip</span>
              </button>
              </div>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center p-15"
            style={{
              backgroundImage: "url('/aboutus/video.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-primary md:w-90">
              <div className=" flex items-center justify-center gap-1">
                <div className="point bg-button"></div>
                <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
                  Have any question?
                </div>
              </div>
              <div className="text-center font-bold text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
                Do you need <span className="text-white">any help?</span>
              </div>
              <p className="text-lg leading-[1.4] text-center my-7">
                Leverage agile frameworks to provide a robust synopsis for high
                level.
              </p>
              <Image
                src={"/aboutus/icons/playButtom.svg"}
                alt="Photo"
                width={70}
                height={70}
                className="m-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Image
              src={"/servicesSingle/image.png"}
              alt="Photo"
              width={730}
              height={450}
              className="m-auto"
            />

            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[1.3] text-center lg:text-start">
              Why Us For International Business Management Consulting!
            </h1>
            <p className="paragraph text-[#7D7D7D] text-center lg:text-start">
              Completely synergized resourced taxings relationships premiers
              markets ultivate one-to-one customer service with robust ideas
              dynamically innovated resources leveling customer service for
              state of the art customer service innovate product for reliable
              supply engage web services cutting-edge deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-button text-lg sm:text-xl text-semibold leading-[1.3] text-center lg:text-start">
              Proactively envisioned multimedia based expertise media growth
              superior collaboration.
            </p>
            <p className="paragraph text-[#7D7D7D] text-center lg:text-start">
              One-to-one customer service with robust ideas dynamically
              innovated resources for reliable supply engage web services
              cutting-edge deliverables.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <Image
                src={"/servicesSingle/image2.png"}
                alt="photo"
                width={450}
                height={260}
              />
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold leading-[1.3]">
                  Our benefits
                </h1>
                <p className="text-secondary text-xl font-semibold leading-[1.3]">
                  Incubate standards compliant channels benefits.
                </p>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/check.svg"}
                    alt="icon"
                    width={27}
                    height={27}
                  />

                  <span className="text-lg text-[#7D7D7D]">
                    Credibly reintermediate backend
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/check.svg"}
                    alt="icon"
                    width={27}
                    height={27}
                  />

                  <span className="text-lg text-[#7D7D7D]">
                    Credibly reintermediate backend
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/check.svg"}
                    alt="icon"
                    width={27}
                    height={27}
                  />

                  <span className="text-lg text-[#7D7D7D]">
                    Credibly reintermediate backend
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl leading-[1.3] text-center lg:text-start">
              Frequently Asked Questions
            </h1>
            <p className="paragraph text-[#7D7D7D] mb-7 text-center lg:text-start">
              Leveling customer service for state of the art customer service
              innovate product for reliable supply engage web services
              cutting-edge deliverables.
            </p>

            <div className="flex flex-col gap-2">
              <Link
                href={"/pricePacks"}
                className="p-5 border-1 border-[#E3E3E3] flex justify-between"
              >
                <span className=" text-xl sm:text-2xl font-semibold">
                  How does our pricing works ?
                </span>
                <Image
                  src={"/servicesSingle/icons/plus.svg"}
                  alt="Photo"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href={"#"}
                className="p-5 border-1 border-[#E3E3E3] flex justify-between"
              >
                <span className="text-xl sm:text-2xl  font-semibold">
                  Where do I look for “Frequently Asked” Questions?
                </span>
                <Image
                  src={"/servicesSingle/icons/plus.svg"}
                  alt="Photo"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href={"#"}
                className="p-5 border-1 border-[#E3E3E3] flex justify-between"
              >
                <span className="text-xl sm:text-2xl  font-semibold">
                  Which template is the best for business?
                </span>
                <Image
                  src={"/servicesSingle/icons/plus.svg"}
                  alt="Photo"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href={"#"}
                className="p-5 border-1 border-[#E3E3E3] flex justify-between"
              >
                <span className="text-xl sm:text-2xl  font-semibold">
                  Which template is the best for business?
                </span>
                <Image
                  src={"/servicesSingle/icons/plus.svg"}
                  alt="Photo"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
