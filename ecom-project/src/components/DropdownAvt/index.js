import { AppstoreOutlined, DownOutlined, LogoutOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import "./DropDownAvt.scss"

function DropDownAvt() {
    const items = [
        {
            key: '1',
            label: (
                <Link className="title" to={"/"}>DashBoard</Link>
            ),
            icon : <AppstoreOutlined />
        },
        {
            key: '2',
            label: (
                <Link className="title" to={"/"}>Edit Profile</Link>
            ),
            icon: <SmileOutlined  />,
            disabled: false,
        },
        {
            key: '3',
            danger: true,
            label: (
                <Link className="title" to={"/"}>Log Out</Link>
            ),
            icon : <LogoutOutlined />
        },
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                
            >
                <div className="layout__header-icon">
                            <button className="btn">
                                <span>A</span>
                            </button>
                </div>
            </Dropdown>
        </>
    )
}
export default DropDownAvt