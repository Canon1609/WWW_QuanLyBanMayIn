import "./Product.scss"
import { Button, Col, Row } from "antd";
import ToolComponent from "../../../components/admin/ToolComponent";
import TableProduct from "../../../components/admin/TableProduct";
import { useState } from "react";
import AddProductForm from "../../../components/admin/AddProductForm";
const Product = ()=> {
    const [visible , setVisible] = useState(false)


    const handleClick = ()=>{
        setVisible(true);

    }
    const handleOnClose = ()=>{
        setVisible(false)
    }
    return (
        <>
            <div className="container">
                <Row gutter={[20,20]}>
                    <Col span={24} >
                        <div className="product">
                            <h3 className="product__title">SẢN PHẨM</h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="manage_btn mt-10 pd-10">
                            <Button className="btn-add" htmlType="button" type="primary" onClick={handleClick} >
                               Thêm sản phẩm
                            </Button>
                            <AddProductForm  visible={visible} onClose={handleOnClose} />
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