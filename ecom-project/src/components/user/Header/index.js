import { Avatar, Badge, Col, Menu, Row, Select } from "antd";
import logo from "../../../assets/images/logo.png"
import { FaLocationDot, FaCircleUser, FaCartShopping } from "react-icons/fa6";
import "./Header.scss"
import SearchBar from "../SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getCookie } from "../../../auth/cookie"; 
import UserDropDown from "../UserDropDown";
import { getCookie } from "../../../auth/cookie";
import { useAuth } from "../../../auth/AuthContext";
import Cart from "../../../pages/user/Cart";
import Home from "../../../pages/user/Home";
// import { useAuth } from "../../helper/AuthContext/AuthContext";
const Headers = () => {
    const { isAuth, userName, logout } = useAuth();

    const navigate = useNavigate();


    return (
        <>
            <div className="header-top-side">
                <div>
                    <p className="header-top-side__title">Giao hàng miễn phí và giảm giá 40% cho 3 đơn hàng tiếp theo! Đặt đơn hàng đầu tiên của bạn vào</p>
                </div>
                <div>
                    <p className="header-top-side__title">Kết thúc sau : 47 ngày 6 giờ  59 phút 59s</p>
                </div>
            </div>
            {/* <div className="header-mid container ">
                <div className="header-mid__menu">
                    <ul style={{ display: 'flex', alignItems: 'center' }}>
                        <li>About us</li>
                        <li>My account</li>
                        <li>Wishlist</li>
                    </ul>
                    <p>We diliver to you every day from 7:00 - 23:00</p>
                </div>
                <div>
                    <p>Order Tracking</p>
                </div>
            </div> */}
            <div className="container">
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div className="header-top">
                            <div className="header-top__logo">
                                <div className="img">
                                    {/* <img src={logo}></img> */}
                                </div>

                            </div>
                            <div className="header-top__search">
                                <SearchBar />
                            </div>
                            {isAuth ? (
                                <>
                                    <div className="header-top__user">
                                        <UserDropDown userName={userName} onLogout={logout} />
                                        <Cart></Cart>
                                    </div>
                                </>) :
                                (
                                    <>
                                        <div className="header-top__user">
                                            <FaCircleUser />
                                            <Link to={"/login"}>Đăng Nhập</Link>
                                            <FaCartShopping />
                                        </div>
                                    </>
                                )
                            }

                        </div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div className="header-menu">
                                <Menu mode="horizontal">
                                    <Menu.Item>
                                        <Link to="/">Trang Chủ</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/shop">Cửa Hàng</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/blog">Blog</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/contact">Liên Hệ</Link>
                                    </Menu.Item>
                                </Menu>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}
export default Headers;