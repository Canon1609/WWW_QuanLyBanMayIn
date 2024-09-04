import { Col, Row } from "antd";
import "./Admin.scss"
import BoxDashBoard from "../../components/BoxDashBoard";
import ShopDetailBox from "../../components/ShopDetailBox";
import RecentOrder from "../../components/RecentOrder";
function Admin(){
    return (
        <>
            <div className="container">
                <Row className="row">
                    <Col span ={24}>
                    <h3 className="admin-title">DashBoard OverView</h3>
                    </Col>
                </Row>  

                <Row >
                <Col span={24}>
                        <BoxDashBoard/>
                </Col>
                </Row>

                <Row className="row" >
                    <Col span={24}>
                        <ShopDetailBox/>
                    </Col>
                </Row>

                <Row>
                    <Col span = {24}>
                        <RecentOrder/>
                    </Col>
                </Row>

            </div>  
               
          
            
            
        </>
    )
}
export default Admin;