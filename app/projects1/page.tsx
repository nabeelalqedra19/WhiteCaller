import Footer from "../Components/layout/footer";
import Header from "../Components/layout/header";
import Menu from "../Components/reusable/menu";
import Banner from "../features/projects1/banner";
import LatestProject from "../features/projects1/latestProject";

export default function Projects1() {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <LatestProject />
      <Footer />
    </div>
  );
}
