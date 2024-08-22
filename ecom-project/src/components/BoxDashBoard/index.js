import { Card, Col, Row } from "antd"
import "./BoxDashBoard.scss"
function BoxDashBoard() {
    return (
        <>
            <Row gutter={[16, 16]} >
                <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                    <Card className="card"  bordered={false} >
                        <p className="card__header">Today Orders</p>
                        <p className="card__title">0.00 $</p>
                        <div className="card__detail">
                        <p className="card__detail--item">Cash: 1.00 $</p>
                        <p className="card__detail--item">Card: 0.00 $</p>
                        <p className="card__detail--item">Credit: 0.00 $</p>
                        </div>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                    <Card className="card"  bordered={false} style={{backgroundColor : "#FF914B"}} >
                        <p className="card__header">Today Orders</p>
                        <p className="card__title">0.00 $</p>
                        <div className="card__detail">
                        <p className="card__detail--item">Cash: 1.00 $</p>
                        <p className="card__detail--item">Card: 0.00 $</p>
                        <p className="card__detail--item">Credit: 0.00 $</p>
                        </div>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                    <Card className="card"  bordered={false} style={{backgroundColor : "#2882F0"}} >
                        <p className="card__header">Today Orders</p>
                        <p className="card__title">0.00 $</p>
                        <div className="card__detail">
                        <p className="card__detail--item">Cash: 1.00 $</p>
                        <p className="card__detail--item">Card: 0.00 $</p>
                        <p className="card__detail--item">Credit: 0.00 $</p>
                        </div>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                    <Card className="card"  bordered={false} style={{backgroundColor : "#0091AF"}} >
                        <p className="card__header">Today Orders</p>
                        <p className="card__title">0.00 $</p>
                        <div className="card__detail">
                        <p className="card__detail--item">Cash: 1.00 $</p>
                        <p className="card__detail--item">Card: 0.00 $</p>
                        <p className="card__detail--item">Credit: 0.00 $</p>
                        </div>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                    <Card className="card"  bordered={false} style={{backgroundColor : "#00966B"}}>
                        <p className="card__header">Today Orders</p>
                        <p className="card__title">0.00 $</p>
                        <div className="card__detail">
                        <p className="card__detail--item">Cash: 1.00 $</p>
                        <p className="card__detail--item">Card: 0.00 $</p>
                        <p className="card__detail--item">Credit: 0.00 $</p>
                        </div>
                    
                    </Card>
                </Col>

               

                

               
            </Row>
        </>
    )
}
export default BoxDashBoard