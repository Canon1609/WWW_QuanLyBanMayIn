import "../../../assets/base/base.scss"
import Banner from "../../../components/user/Banner"
import Brand from "../../../components/user/Brand"
import ProductItem from "../../../components/user/ProductItem"
import Product from "../../../components/user/Products"
import ProductByBrand from "../../../components/user/ProductByBrand"
import "./Home.scss"
import RecentProduct from "../../../components/user/RecentProduct"

const Home = () => {
   return (
    <>
        <div className="home">
                <Banner/>
                <Brand/>
                <div className="container">
                <Product/>
                <ProductByBrand/>
                {/* <RecentProduct/> */}
                </div>   
        </div>
    </>
   ) 
}
export default Home