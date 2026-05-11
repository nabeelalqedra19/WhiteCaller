import Header from "../Components/layout/header";
import Menu from "../Components/reusable/menu";
import Banner from "../features/home/banner";
import About from "../Components/reusable/aboutUs";
import ClientLogo from "../features/home/clientLogo";
import Services from "../Components/reusable/services";
import WhyChoseMe from "../features/home/whyChoseMe";
import Project from "../features/home/project";
import Testimoials from "../Components/reusable/testimonials";
import HowWeWork from "../features/home/howWeWork";
import Team from "../features/home/team";
import Blog from "../features/home/blog";
import SubscribeBox from "../features/home/subscribeBox";
import Footer from "../Components/layout/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <About />
      <ClientLogo />
      <Services />
      <WhyChoseMe />
      <Project />
      <Testimoials />
      <HowWeWork />
      <Team />
      <Blog />
      <SubscribeBox />
      <Footer />
    </div>
  );
}
