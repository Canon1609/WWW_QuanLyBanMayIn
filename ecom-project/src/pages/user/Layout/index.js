import { Layout } from "antd"
import Headers from "../../../components/user/Header"
import "../../../assets/base/base.scss"
import { Outlet} from "react-router-dom"
import "./Layout.scss"
import Footers from "../../../components/Footer"
const {Content } = Layout
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
            <div className="footer">
              <Footers/>
            </div>
          
        </Layout>
    </>
   ) 
}
export default Layouts