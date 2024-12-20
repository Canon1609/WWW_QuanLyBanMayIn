import { Image, Menu } from "antd"
import {DashboardOutlined ,MenuFoldOutlined,AppstoreOutlined , ProductOutlined} from '@ant-design/icons'
import "./menusider.scss"
import logo from "../../../assets/images/logo.png"
import { FaPercent ,FaCircleUser , FaBox} from "react-icons/fa6"
import {Button} from "antd"
import { Link, useNavigate, useNavigation } from "react-router-dom"
function MenuSider(props){
  const {collapsed , toggle} = props;
  const navigator = useNavigate();
  
    const items = [
        {
       

            label : (<Link to={"/admin/dashboard"}>Trang chủ</Link>),


            key : "1",
            icon : <AppstoreOutlined className="menu__icon" />,
            children : "",

        },
        {
       
          label : "Quản Lý",
          key : 2,
          icon :<DashboardOutlined/>,
          children : [
            {
              label : (<Link to={"/admin/products"}>Sản Phẩm</Link>),
              key : 2.1,
              icon : <ProductOutlined />
            },
            {
              label : (<Link to={"/admin/category"}>Loại Sản Phẩm</Link>),
              key : 2.2,
              icon : <DashboardOutlined></DashboardOutlined>
            },
            {
              label : (<Link to={"admin/coupons"}>Mã Khuyến Mãi</Link>),
              key : 2.3,
              icon : <FaPercent />
            }
          ],

      },
      {
        
        label : (<Link to={"/admin/customer"}>Khách Hàng</Link>),
        key : 3,
        icon :<FaCircleUser />,
        children : "",

    },
    {
     
      label : (<Link to={"/admin/order"}>Đơn Hàng</Link>),
      key : 4,
      icon :<FaBox/>,
      children : "",

  },
  
    ]
    const handleClick = ()=>{
        navigator("/admin/dashboard")
    }
    return(
        <>
        <div className="header">
            <div className="header__logo"> {collapsed ? (<></>):(<img src={logo} alt="logo"></img>)} </div>
            {collapsed? (   <div onClick={toggle} className="header__icon center" ><MenuFoldOutlined/></div>):(<div onClick={toggle} className="header__icon" ><MenuFoldOutlined/></div>)}
          
            
        </div>

          <Menu
            className="menu"
            defaultSelectedKeys={"1"}
            defaultActiveFirst = {"1"}
            mode="inline"
            items = {items}
          >
          </Menu>
        </>
    )
}
export default MenuSider;