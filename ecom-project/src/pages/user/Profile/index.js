import { Card, Col, Form, Row } from "antd";
import "./Profile.scss";
import { useEffect, useState } from "react";
const Profile = () => {
    const [userName , setUserName] = useState(
        localStorage.getItem('userName')
    );
    const fechUser = async () => {
        try {
            const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/user/profile/${userName}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    }
    useEffect(() => {
      
        fechUser();

    },[])
    return (
        <>
            <div className="profile">
                <h3 style={{ color: 'black', fontSize: '22px', fontWeight: 600, textAlign: 'center' , marginBottom : '50px' }}>THÔNG TIN TÀI KHOẢN</h3>
                <Row gutter={[24, 24]} style={{display : 'flex' , justifyContent : 'center'}}>
                    <Col span={12}>
                        <Card>
                          
                                
                        </Card>
                    </Col>
                </Row>
            </div>


        </>
    )
}
export default Profile;