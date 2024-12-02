import { Button, Col, Empty, Input, List, Row, Table , Modal} from "antd";
import TableCategory from "../../../components/admin/Table/TableCategory";
import TableCustomer from "../../../components/admin/Table/TableCustomer";
import "./Customer.scss"
import AddCustomerForm from "../../../components/admin/AddCustomerForm";
import { useEffect, useState } from "react";
import TableResultSearchUser from "../../../components/admin/Table/TableSearchUser";
const Customer = () => {
    const [data , setData] = useState([]);
    const { confirm } = Modal;
    const [visible, setVisible] = useState(false)

    const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
    const [loading , setLoading] = useState(false);
    
    const handleClick = () => {
        setVisible(true);

    }
    const handleOnClose = () => {
        setVisible(false)
    }
    useEffect(() => {
        fetchCus();
    }, []);
    const fetchCus = async () => {
        try {
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/user');
            if (response.ok) {
                const result = await response.json();

                setData(result || [])
            }
            else {
                setData('');
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
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
            title: "Số điện thoại",
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Địa chỉ nhận hàng',
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
  
    ];
   
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/user/search?search=${search}`);
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

    }

    return (
        <>
            <div className="container">
                <Row gutter={[20, 20]}>

                    <Col span={24}>
                        <h3 className="title">Khách hàng</h3>

                    </Col>

                    <Col span={24}>
                        <div className="search-area">
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} allowClear={true} style={{ width: "50%", marginRight: "25px", height: "50px" }} 
                          
                            placeholder="Search by user name , email , ..."></Input>
                            <Button type="primary" className="search-area__btn" onClick={handleSearch} >Tìm kiếm</Button>
                            <Button type="primary" className="search-area__btn" onClick={handleReset}>Làm mới</Button>
                            <Button className="btn-add" htmlType="button" type="primary" style={{ width: '20%', height: '50px' }} onClick={handleClick}  >Thêm khách hàng</Button>
                            <AddCustomerForm visible={visible} onClose={handleOnClose} />
                        </div>
                    </Col>
                </Row>

                <Row gutter={[24, 24]} style={{ marginTop: 50 }}>
                    <Col span={24}>
                        {search.length > 0  ?
                         (<>
                            <Table dataSource={resultSearch}  columns={columns} key={resultSearch.id}></Table>
                         </>):
                         
                         (
                              <Table dataSource={data}  columns={columns} key={resultSearch.id}></Table>
                         )}
                       

                    </Col>
                </Row>
               


            </div>
        </>
    )
}


export default Customer;