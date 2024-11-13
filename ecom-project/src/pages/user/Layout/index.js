import { Layout } from "antd"
import Headers from "../../../components/user/Header"
import "../../../assets/base/base.scss"
import { Outlet} from "react-router-dom"
import "./Layout.scss"
import Footers from "../../../components/user/Footer"
import { useState } from "react"
const {Header, Footer , Content } = Layout
const Layouts = () => {
   
   return (
    <>
        <Layout className="layout-main">
            <header>
                <Headers/>
            </header>
            <div className="container">
            <Content className="content">
                <Outlet/>
            </Content>
            </div>
            <footer className="footer">
                <Footers/>
            </footer>
          
        </Layout>
    </>
   ) 
}
export default Layouts