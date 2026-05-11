import Header from "../Components/layout/header";
import Menu from "../Components/reusable/menu";
import Banner from "../features/aboutus/banner";
import About from "../Components/reusable/aboutUs";
import Process from "../features/aboutus/process";
import Counts from "../features/aboutus/counts";
import Video from "../features/aboutus/video";
import OurTeam from "../features/aboutus/ourTeam";
import Footer from "../Components/layout/footer";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <About />
      <Process />
      <Counts />
      <Video />
      <OurTeam />
      <Footer />
    </div>
  );
}
