import Banner from "../Components/reusable/banner";
import Services from "../Components/reusable/services";
import Offering from "../features/ourServices/offering";
import WhyChose from "../features/ourServices/whyChoose";
import Testimoials from "../Components/reusable/testimonials";

export default function OurServices() {
  return (
    <div>
      <Banner type={"Our Services"} tittle={"We’re Offering"} description={"Collaboratively administrate empowered markets plugand play networks dynamically procrastinated "} imageUrl={'/ourServices/services.png'}/>
      <Services />
      <Offering />
      <WhyChose />
      <Testimoials />
    </div>
  );
}
