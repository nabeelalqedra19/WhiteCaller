import Banner from "../Components/reusable/banner"
import Project from "../features/projectsSingle/project"
import Post from "../features/projectsSingle/post"

export default function ProjectsSingle() {
    return (
        <div>
            <Banner type={"LT Techs"} tittle={"Financial Investment"} description={""} imageUrl={'/projectsSingle/banner.png'}/>
            <Project />
            <Post />
        </div>
    )
}