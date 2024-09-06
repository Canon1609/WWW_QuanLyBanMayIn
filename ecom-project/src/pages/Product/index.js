import "./Product.scss"
import { Button, Col, Row } from "antd";
import ToolComponent from "../../components/ToolComponent";
import TableProduct from "../../components/TableProduct";
const Product = ()=> {
    return (
        <>
            <div className="container">
                <Row gutter={[20,20]}>
                    <Col span={24} >
                        <div className="product">
                            <h3 className="product__title">Products</h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="manage_btn mt-10 pd-10">
                            <Button className="btn-add" htmlType="button" type="primary">
                                Add product
                            </Button>
                        </div>
                    </Col>
                    <Col span={24} >
                        <ToolComponent/>
                    </Col>
                    <Col span={24} >
                        <TableProduct/>
                    </Col>
                </Row>
            </div>
          
        </>
    )
}
export default Product;