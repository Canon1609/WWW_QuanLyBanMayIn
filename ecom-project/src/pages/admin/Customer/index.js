import { Button, Col, Input, Row } from "antd";
import TableCategory from "../../../components/admin/Table/TableCategory";
import TableCustomer from "../../../components/admin/Table/TableCustomer";
import "./Customer.scss"
import AddCustomerForm from "../../../components/admin/AddCustomerForm";
import { useState } from "react";
const Customer = ()=>{
    const [visible , setVisible] = useState(false)
    const handleClick = ()=>{
        setVisible(true);

    }
    const handleOnClose = ()=>{
        setVisible(false)
    }
    return(
        <>
         <div className="container">
                <Row gutter={[20,20]}>
                    
                    <Col span={24}>
                        <h3 className="title">Customer</h3>
                        
                     </Col>
                   
                     <Col span={24}>
                        <div className="search-area">
                        <Input allowClear  = {true} style={{width: "50%" , marginRight : "25px", height : "50px"}} placeholder="Search by user name , email , ..."></Input>
                        <Button type="primary" className="search-area__btn">Fillter</Button>
                        <Button type="primary" className="search-area__btn">Reset</Button>
                        <Button className="btn-add" htmlType="button" type="primary" style={{width : '20%' , height : '50px'}} onClick={handleClick}  >Add Customer</Button>
                         <AddCustomerForm visible={visible} onClose={handleOnClose} /> 
                        </div>
                     </Col>
                </Row>

                <Row gutter={[24,24]} style={{marginTop : 50}}>
                    <Col span={24}>
                        <TableCustomer/>
                    </Col>
                </Row>
           </div>
        </>
    )
}

export default Customer;