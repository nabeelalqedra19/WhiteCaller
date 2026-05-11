import Header from "../Components/layout/header";
import Menu from "../Components/reusable/menu";
import Banner from "../features/ourServices/banner";
import Services from "../Components/reusable/services";
import Offering from "../features/ourServices/offering";
import WhyChose from "../features/ourServices/whyChoose";
import Testimoials from "../Components/reusable/testimonials";
import Footer from "../Components/layout/footer";

export default function OurServices() {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <Services />
      <Offering />
      <WhyChose />
      <Testimoials />
      <Footer />
    </div>
  );
}
