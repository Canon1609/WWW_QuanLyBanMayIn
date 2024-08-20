import {Button, Layout} from "antd"
import { Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../../components/MenuSider";
import './dashboard.scss'
import { Outlet } from "react-router-dom";
function DashBoard() {
    return(
        <>
            <Layout className="layout">
                <Sider width={"14%"} theme="light" className="sider">
                    <MenuSider/>
                    <Button className="button">Log out</Button>
                </Sider>
                <Layout className="layout">
                    <header className="layout__header">
                        Header
                    </header>
                    <Content className="content">
                        <Outlet></Outlet>
                    </Content>
                    <footer className="footer">
                        Footer
                    </footer>
                </Layout>
            </Layout>
        </>
    )
}
export default DashBoard;
