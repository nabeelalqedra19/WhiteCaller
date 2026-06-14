import Banner from "../Components/reusable/banner";
import LatestProject from "../features/projects1/latestProject";

export default function Projects1() {
  return (
    <div>
      <Banner type={"The Case Studies"} tittle={"Our Latest Projects"} description={""} imageUrl={'/projects1.png'}/>
      <LatestProject />
    </div>
  );
}
