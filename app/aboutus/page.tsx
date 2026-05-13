import Banner from "../features/aboutus/banner";
import About from "../Components/reusable/aboutUs";
import Process from "../features/aboutus/process";
import Counts from "../features/aboutus/counts";
import Video from "../features/aboutus/video";
import OurTeam from "../features/aboutus/ourTeam";

export default function AboutUs() {
  return (
    <div>
      <Banner />
      <About />
      <Process />
      <Counts />
      <Video />
      <OurTeam />
    </div>
  );
}
