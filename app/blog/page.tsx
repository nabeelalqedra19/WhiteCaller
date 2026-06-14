import Banner from "../Components/reusable/banner";
import Content from "../features/blog/content";

export default function Blog() {
  return (
    <div>
      <Banner type={"Recent News"} tittle={"We Keep You Updated"} imageUrl={'/blog/banner.png'} description={""} />
      <Content />
    </div>
  );
}
