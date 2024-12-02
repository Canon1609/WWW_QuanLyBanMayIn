import {Button, Layout} from "antd"
import { Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../../../components/admin/MenuSider";
import './dashboard.scss'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DropDownAvt from "../../../components/admin/DropdownAvt";
import { AppstoreOutlined } from "@ant-design/icons";
import Footers from "../../../components/Footer";
function DashBoard() {
    const [collapsed , setCollapsed ] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }
    const user = JSON.parse(localStorage.getItem("userName"));
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userName");
        localStorage.removeItem("role");
        window.location.href = "/login";
    }
    return(
        <>
            <Layout className="layout">
                <Sider width={"14%"} theme="light" className="sider" collapsed = {collapsed} >
                    <MenuSider toggle = { toggle } collapsed = {collapsed} />
                    <Button className="button" onClick={handleLogout}>Đăng xuất</Button>
                </Sider>
                <Layout >
                    <header className="layout__header">
                       
                        <div className="layout__header-avt">
                            <p> {user}</p>
                           
                        </div>
                        {/* <DropDownAvt/> */}
                    </header>
                    <Content className="content">
                        <Outlet></Outlet>
                    </Content>
                    {/* <Footers/> */}
                </Layout>
                
            </Layout>      
         </>
    )
}
export default DashBoard;
