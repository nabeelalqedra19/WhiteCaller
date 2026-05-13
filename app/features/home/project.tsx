import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="my-20">
      <div className="app-container flex flex-col md:flex-row justify-center md:justify-between items-center mb-5 md:mb-0">
        <div className="md:w-140 mb-5">
          <div className="flex gap-2 items-center justify-center md:justify-start mb-1 ">
            <div className="point w-3 h-3"></div>
            <div className="font-medium text-sm sm:text-lg">Our Project</div>
          </div>

          <h1 className="font-bold text-2xl sm:text-[40px] leading-[1.2] mb-3 text-center md:text-start">
            You can check our projects as inspirations.
          </h1>
        </div>

        <Link href={'/projects'} className="text-white font-semibold text-lg px-5 py-3 md:px-8 md:py-5 bg-secondary">Work More</Link>
      </div>

      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        <Image src={'/project1.png'} alt="project 1" width={770} height={500}/>
        <Image src={'/project2.png'} alt="project 2" width={770} height={500}/>
        <Image src={'/project3.png'} alt="project 3" width={770} height={500}/>
        <Image src={'/project4.png'} alt="project 4" width={770} height={500}/>
      </div>
    </div>
  );
}
