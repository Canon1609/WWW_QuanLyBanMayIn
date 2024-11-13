import "../../../assets/base/base.scss"
import Banner from "../../../components/user/Banner"
import Brand from "../../../components/user/Brand"
import Product from "../../../components/user/Products"
import "./Home.scss"

const Home = () => {
   return (
    <>
        <div className="home">
                <Banner/>
                <Brand/>
                <Product/>
        </div>
    </>
   ) 
}
export default Home