import { Button, Col, Empty, Input, List, Row, Table , Modal} from "antd";
import AddCustomerForm from "../../../components/admin/AddCustomerForm";
import { useEffect, useState } from "react";
// import TableResultSearchUser from "../../../components/admin/Table/TableSearchUser";
const Coupon = () => {
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
        fetchCoupon();
        console.log(data);
        
    }, []);
    const fetchCoupon = async () => {
        try {
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/coupons');
            if (response.ok) {
                const result = await response.json();
                setData(result.data || [])
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
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Loại khuyến mãi',
            dataIndex: 'discount_type',
            key: 'discount_type',
        },
        {
            title: "Giá trị",
            dataIndex: 'discount_value',
            key: 'discount_value',
        },
        {
            title: "Giá trị đơn hàng tối thiểu", 
            dataIndex: 'min_purchase',
            key: 'min_purchase',
        },
        {
            title: "Ngày bắt đầu", 
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: "Ngày kết thúc", 
            dataIndex: 'end_date',
            key: 'end_date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="primary" danger >
                    Xóa
                </Button>
            ),
        },
  
    ];
   
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/coupons/search?search=${search}`);
            if (response.ok) {
                const data = await response.json();
                setResultSearch(data.data);
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
                        <h3 className="title">Mã khuyến mãi</h3>

                    </Col>

                    <Col span={24}>
                        <div className="search-area">
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} allowClear={true} style={{ width: "50%", marginRight: "25px", height: "50px" }} 
                          
                            placeholder="Tìm kiếm theo code "></Input>
                            <Button type="primary" className="search-area__btn" onClick={handleSearch} >Tìm kiếm</Button>
                            <Button type="primary" className="search-area__btn" onClick={handleReset}>Làm mới</Button>
                            <Button className="btn-add" htmlType="button" type="primary" style={{ width: '20%', height: '50px' }} onClick={handleClick}  >Thêm Mã khuyến mãi</Button>
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


export default Coupon;