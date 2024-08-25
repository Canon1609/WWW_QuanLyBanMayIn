import {Button, Layout} from "antd"
import { Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../../components/MenuSider";
import './dashboard.scss'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DropDownAvt from "../../components/DropdownAvt";
function DashBoard() {
    const [collapsed , setCollapsed ] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }
    return(
        <>
            <Layout className="layout">
                <Sider width={"14%"} theme="light" className="sider" collapsed = {collapsed}  >
                    <MenuSider toggle = { toggle } collapsed = {collapsed} />
                    <Button className="button">Log out</Button>
                </Sider>
                <Layout className="layout">
                    <header className="layout__header">
                        <DropDownAvt/>
                    </header>
                    <Content className="content">
                        <Outlet></Outlet>
                    </Content>
                    {/* <footer className="footer">
                        Footer
                    </footer> */}
                </Layout>
            </Layout>        </>
    )
}
export default DashBoard;
