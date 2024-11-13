import { Dropdown, Space } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import "./UserDropDown.scss"
import { FaLocationDot, FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { Link, Navigate, useNavigation } from "react-router-dom";
const UserDropDown = ({userName , onLogout}) => {
    
    const items = [
        {
            key: 1,
            class : 'key1',
            label: (
                <>
                    <p>{userName}</p>
                </>
            ),
            icons: <FaCircleUser />
        },
        {
            key: 2,
            label: (
                <>
                    <p>Thông tin</p>
                </>
            )
        },
        {
            key: 3,
            label: (
                <>
                     <Link to={"/"} onClick={onLogout}>Sign Out</Link>
                </>
            )
        },
    ]
    return (
        <>
            <Dropdown
                menu={{ items }}
                placement="bottomRight"
                overlayClassName = 'userDropDown'
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