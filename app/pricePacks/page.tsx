import Banner from "../Components/reusable/banner"
import Price from "../features/pricePacks/price"

export default function PricePacks() {
    return (
        <div>
            <Banner type={"Pricing Package"} tittle={"Affordable Plans For Customers"} description={""} imageUrl={'/pricePacks/banner.png'}/>
            <Price />
        </div>
    )
}