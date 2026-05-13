import Banner from "../features/ourServices/banner";
import Services from "../Components/reusable/services";
import Offering from "../features/ourServices/offering";
import WhyChose from "../features/ourServices/whyChoose";
import Testimoials from "../Components/reusable/testimonials";

export default function OurServices() {
  return (
    <div>
      <Banner />
      <Services />
      <Offering />
      <WhyChose />
      <Testimoials />
    </div>
  );
}
