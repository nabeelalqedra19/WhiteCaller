import Banner from "../Components/reusable/banner";
import About from "../Components/reusable/aboutUs";
import Process from "../features/aboutus/process";
import Counts from "../features/aboutus/counts";
import Video from "../features/aboutus/video";
import OurTeam from "../features/aboutus/ourTeam";

export default function AboutUs() {
  return (
    <div>
      <Banner
        type={"About Us"}
        tittle={"Know About Us"}
        imageUrl={"/aboutus/banner.png"}
        description={
          "Collaboratively administrate empowered markets plugand play networks dynamically procrastinated "
        }
      />
      <About />
      <Process />
      <Counts />
      <Video />
      <OurTeam />
    </div>
  );
}
