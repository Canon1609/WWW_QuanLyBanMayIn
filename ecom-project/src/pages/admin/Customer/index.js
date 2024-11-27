import { Button, Col, Empty, Input, List, Row, Table , Modal} from "antd";
import TableCategory from "../../../components/admin/Table/TableCategory";
import TableCustomer from "../../../components/admin/Table/TableCustomer";
import "./Customer.scss"
import AddCustomerForm from "../../../components/admin/AddCustomerForm";
import { useState } from "react";
import TableResultSearchUser from "../../../components/admin/Table/TableSearchUser";
const Customer = () => {
    const { confirm } = Modal;
    const [visible, setVisible] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [loading , setLoading] = useState(false);
    const handleClick = () => {
        setVisible(true);

    }
    const handleOnClose = () => {
        setVisible(false)
    }

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Shipping Address',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     render: (_, record) => (
        //         <div style={{ display: 'flex', alignItems: 'center' }}>
        //             <FaEdit onClick={() => { handleEdit(record.id) }} style={{fontSize : 20}} />
        //             <DeleteOutlined onClick={() => { showDeleteConfirm(record.id) }} style={{fontSize : 20}} />
        //         </div>
        //     ),
        // },
    ];
   
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/user/search?search=${search}`);
            if (response.ok) {
                const data = await response.json();
                setResultSearch(data);

            }
        }

        catch (error) {
            console.log(error);
        }
    }
    const handleReset = () => {
        setSearch(""); // Làm sạch trường tìm kiếm
        setResultSearch([]); // Xóa kết quả tìm kiếm
        setIsSearch(false); // Ẩn kết quả tìm kiếm
    }

    return (
        <>
            <div className="container">
                <Row gutter={[20, 20]}>

                    <Col span={24}>
                        <h3 className="title">Customer</h3>

                    </Col>

                    <Col span={24}>
                        <div className="search-area">
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} allowClear={true} style={{ width: "50%", marginRight: "25px", height: "50px" }} onFocus={()=>setIsSearch(true)}
                          
                            placeholder="Search by user name , email , ..."></Input>
                            <Button type="primary" className="search-area__btn" onClick={handleSearch} >Fillter</Button>
                            <Button type="primary" className="search-area__btn" onClick={handleReset}>Reset</Button>
                            <Button className="btn-add" htmlType="button" type="primary" style={{ width: '20%', height: '50px' }} onClick={handleClick}  >Add Customer</Button>
                            <AddCustomerForm visible={visible} onClose={handleOnClose} />
                        </div>
                    </Col>
                </Row>

                <Row gutter={[24, 24]} style={{ marginTop: 50 }}>
                    <Col span={24}>
                        {isSearch ?
                         (<>
                            <Table dataSource={resultSearch}  columns={columns} key={resultSearch.id}></Table>
                         </>):
                         
                         (
                             <TableCustomer />
                         )}
                       

                    </Col>
                </Row>
               


            </div>
        </>
    )
}


export default Customer;