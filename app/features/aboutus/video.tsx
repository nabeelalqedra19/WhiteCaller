import Image from "next/image";

export default function Video() {
  return (
    <div
      className="w-full md:h-130 flex justify-center items-center p-10"
      style={{
        backgroundImage: "url('/aboutus/video.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-primary">
        <div className=" flex items-center justify-center gap-1">
          <div className="point bg-button"></div>
          <div className="font-semibold text-sm lg:text-lg leading-[1.4]">
            Short Video
          </div>
        </div>
        <div className="text-center font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1]">
          Our Presentation
        </div>
        <p className="text-lg leading-[1.4] text-center md:w-120 my-7">
          Collaboratively administrate channels whereas virtual tailers
          predominate procedures reliable supply chains.
        </p>
        <Image src={'/aboutus/icons/playButtom.svg'} alt="Photo" width={70} height={70} className="m-auto" />
      </div>
    </div>
  );
}
