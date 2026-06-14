import Banner from "../Components/reusable/banner"
import Content from "../features/team/content"

export default function Team() {
    return (
        <div>
            <Banner type={"Our Team"} tittle={"Meet Our Experts"} description={""} imageUrl={'/team/banner.png'}/>
            <Content />
        </div>
    )
}