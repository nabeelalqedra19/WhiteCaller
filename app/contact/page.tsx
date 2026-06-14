import Banner from "../Components/reusable/banner"
import Content from "../features/contact/content"

export default function Contact() {
    return (
        <div>
            <Banner type={"Contact Us"} tittle={"Feel Free Reach Us"} description={""} imageUrl={'/contact/banner.png'}/>
            <Content />
        </div>
    )
}