import { Card, Col, Row } from "antd";
import "./ShopDetailBox.scss"
import { CheckOutlined, RetweetOutlined, ShoppingCartOutlined, TruckOutlined } from '@ant-design/icons'
function ShopDetailBox() {
    return (
        <>
            <Row gutter={[20,20]} justify={"space-around"}>
                <Col span={24}>
             
                    <Card 
                       className="w-250"
                        
                    >
                        <div className= "card-detail">
                            <div className="card-detail__logo bg">
                            <ShoppingCartOutlined className="logo" />
                            </div>
                            <div className="card-detail__content">
                                <p className="card-detail__content--title">Total Order</p>
                                <p className="card-detail__content--price">242</p>
                            </div>
                        </div>
                    </Card>
                
                
                

                        
                 
                   
                 
                </Col>

                <Col span={24}>
                <Card 
                       className="w-250"
                    >
                        <div className= "card-detail">
                            <div className="card-detail__logo bg-1">
                            <RetweetOutlined className="logo"/>
                            </div>
                            <div className="card-detail__content">
                                <p className="card-detail__content--title">Orders Pending</p>
                                <p className="card-detail__content--price">61</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={24}>
                <Card 
                       className="w-250"
                        
                    >
                        <div className= "card-detail">
                            <div className="card-detail__logo bg-2">
                            <TruckOutlined  className="logo"/>
                            </div>
                            <div className="card-detail__content">
                                <p className="card-detail__content--title">Orders Processing</p>
                                <p className="card-detail__content--price">32</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={24}>
                <Card 
                       className="w-250"
                        
                    >
                        <div className= "card-detail">
                            <div className="card-detail__logo bg-3">
                            <CheckOutlined className="logo" />
                            </div>
                            <div className="card-detail__content">
                                <p className="card-detail__content--title">Total Order</p>
                                <p className="card-detail__content--price">120</p>
                            </div>
                        </div>
                    </Card>
                   
                </Col>
            </Row>
        </>
    )
}
export default ShopDetailBox;