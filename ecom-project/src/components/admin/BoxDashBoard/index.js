import { Card, Col, Row } from "antd"
import "./BoxDashBoard.scss"
import { useEffect, useState } from "react"
import { formatCurrency } from "../../../helper/convertMoney";
function BoxDashBoard() {
    // call api 
    const [data , setData]  = useState([]);
    const [loading , setLoading] = useState(false);
    const [user  , setUser]  = useState([]);
    const [product , setProduct] = useState(
        localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
    );
    // format total from data
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/orders')
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log("Failed to fetch data: ", error);
        }
    }

    const fetchUser = async () => {
        try{
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/user')
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUser(data);
        }
        catch(error){
            console.log("Failed to fetch data: ", error);
        }
    }


    const total = data.reduce((acc, item) => acc + Number(item.totalPrice), 0);
    console.log(total);
    
    useEffect(() => {
        fetchData();
        fetchUser();
    }, [])
    console.log(data);
    
    return (
        <>
            <Row gutter={[16, 16]} justify={"space-around"}  >
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card className="card"  bordered={true} >
                        <p className="card__header">Tổng Doanh Thu {formatCurrency(total)}</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card className="card"  bordered={false} style={{backgroundColor : "#00966B"}}>
                        <p className="card__header">Tổng Đơn Hàng <br/> {data.length} </p>
            
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                    <Card className="card"  bordered={false} style={{backgroundColor : "#FF914B"}} >
                        <p className="card__header">Tổng Khách Hàng <br/> {user.length} </p>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card className="card"  bordered={false} style={{backgroundColor : "#2882F0"}} >
                        <p className="card__header">Tổng Sản Phẩm <br/> {product.length}</p>
                       
                    
                    </Card>
                </Col>
            
            </Row>
        </>
    )
}
export default BoxDashBoard