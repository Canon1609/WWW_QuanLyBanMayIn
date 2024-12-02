import { Button, Dropdown, Space } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import "./UserDropDown.scss"
import { FaLocationDot, FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { Link, Navigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../service/CartContext";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
const UserDropDown = ({ userName, onLogout }) => {

    const { cartItems } = useCart();
    useEffect(() => {

    }, [])

    const items = [
        {
            key: 1,
            class: 'key1',
            label: (
                <>
                    <div style={{display : 'flex'}}>
                        <FaRegUser />
                        <Link style={{color : 'black'}} to="/profile">Thông tin tài khoản</Link>
                        
                      
                    </div>


                </>
            ),
            icons: <FaCircleUser />
        },
        {
            key: 2,
            label: (
                <>
                  <div style={{display : 'flex'}}>
                        <IoCartOutline />
                        <p>Quản lí đơn hàng</p>
                    </div>
                </>
            )
        },
        {
            key: 3,
            label: (
                <>
                  <div style={{display : 'flex'}}>
                        <CiBellOn />
                        <p>Thông báo</p>
                    </div>
                </>
            )
        },
        {
            key: 4,
            label: (
                <>
                <Button style={{width : '100%'}}>
                <Link to={"/"} onClick={onLogout}>Đăng xuất</Link>
                </Button>
                    
                </>
            )
        },
    ]
    return (
        <>
            <Dropdown
                menu={{ items }}
                placement="bottomRight"
                overlayClassName='userDropDown'
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className="useravt">
                            <FaCircleUser />
                        </div>

                    </Space>
                </a>

            </Dropdown>
        </>
    )
}
export default UserDropDown;