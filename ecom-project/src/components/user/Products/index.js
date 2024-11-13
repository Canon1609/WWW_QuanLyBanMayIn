import { Button } from "antd";
import ProductItem from "../ProductItem"
import "./Products.scss"
const Product = () => {
    return (
        <>
            <div className="product-top">
                <h2>PRODUCT</h2>
                <Button style={{ width: 100 }} type="primary" className="brand__btn">View all</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                <ProductItem />
            </div>

        </>
    )
}
export default Product;