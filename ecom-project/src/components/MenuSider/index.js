import { Image, Menu } from "antd"
import {MenuOutlined , DashboardOutlined ,MenuFoldOutlined,AppstoreOutlined , ProductOutlined} from '@ant-design/icons'
import "./menusider.scss"
import logo from "../../assets/images/logo.png"
import { FaPercent ,FaCircleUser , FaBox} from "react-icons/fa6"
import {Button} from "antd"
function MenuSider(props){
  const {collapsed , toggle} = props;
  console.log(collapsed);
  
    const items = [
        {
       
            label : "Dashboard",
            key : "1",
            icon : <AppstoreOutlined className="menu__icon" />,
            children : "",

        },
        {
       
          label : "Options",
          key : 2,
          icon :<DashboardOutlined/>,
          children : [
            {
              label : "Products",
              key : 2.1,
              icon : <ProductOutlined />
            },
            {
              label : "Category",
              key : 2.2,
              icon : <DashboardOutlined></DashboardOutlined>
            },
            {
              label : "Coupons",
              key : 2.3,
              icon : <FaPercent />
            }
          ],

      },
      {
        
        label : "Customer",
        key : 3,
        icon :<FaCircleUser />,
        children : "",

    },
    {
     
      label : "Order",
      key : 4,
      icon :<FaBox />,
      children : "",

  },
  
    ]
    return(
        <>
        <div className="header">
             <img className= "header__logo" src = { collapsed ? "" :  logo} ></img>
             <div className="header__icon" onClick={toggle} ><MenuFoldOutlined  /></div>
        </div>
          <Menu
            className="menu"
            defaultSelectedKeys={"1"}
            mode="inline"
            items = {items}
          >
          </Menu>
        </>
    )
}
export default MenuSider;