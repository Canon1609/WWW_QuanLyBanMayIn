import { Button, Col, Input, Row } from "antd";
import "./Category.scss"
import ToolComponent from "../../../components/admin/ToolComponent";
import TableCategory from "../../../components/admin/Table/TableCategory";

const Category = ()=>{
    return (
        <>
           <div className="container">
                <Row gutter={[20,20]}>
                    <Col span={24}>
                        <h3 className="title">Loại sản phẩm</h3>
                     </Col>
                     <Col span={24}>
                        <div className="search-area">
                        <Input style={{width: "50%" , marginRight : "25px", height : "50px"}} placeholder="Search by category name"></Input>
                        <Button type="primary" className="search-area__btn">Lọc</Button>
                        <Button type="primary" className="search-area__btn">Làm mới</Button>
                        </div>
                     </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <TableCategory/>
                    </Col>
                </Row>
           </div>
        </>
    )
}
export default Category;