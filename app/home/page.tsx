import Banner from "./banner"
import AboutUs from "./aboutUs"
import ClientLogo from "./clientLogo"
import Services from "./services"
import WhyChoseMe from "./whyChoseMe"
import Project from "./project"
import Testimoials from "./testimonials"
import HowWeWork from "./howWeWork"
import Team from "./team"
import Blog from "./blog"
import SubscribeBox from "./subscribeBox"
import Footer from "./footer"

export default function HomePage() {
    return (
        <div>
            <Banner />
            <AboutUs />
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
    )
}