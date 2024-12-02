import { Button, Col, Input, Modal, Row, Table } from "antd";
import ToolComponent from "../../../components/admin/ToolComponent";
import TableProduct from "../../../components/admin/TableProduct";
import { useEffect, useState } from "react";
import AddProductForm from "../../../components/admin/AddProductForm";
import TableOrder from "../../../components/admin/Table/TableOrder";
const Order = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [resultSearch, setResultSearch] = useState([]);
    const [search, setSearch] = useState("");
    // const [isSearch, setIsSearch] = useState(false);
    useEffect(() => {
        fetchOrder();
    }, []);
    const fetchOrder = async () => {
        try {
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/orders');
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
            title: 'Order Id',
            dataIndex: 'id',
            key: 'name',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Địa chỉ nhận hàng',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
        },
        {
            title: 'Ngày Tạo',
            dataIndex: 'createAt',
            key: 'createAt',
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     render: (_, record) => (
        //         <div style={{ display: 'flex', alignItems: 'center' }}>
        //             <FaEdit onClick={()=>{handleEdit(record.id)}} />
        //             <DeleteOutlined onClick={() => {showDeleteConfirm(record.id) }} />
        //         </div>
        //     ),
        // },

    ]

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/orders/search?search=${search}`);
            if (response.ok) {
                const data = await response.json();
                setResultSearch(data);
                if(data.length > 0){
                    console.log(data);
                }
                else{
                    Modal.error({
                        title: 'Không tìm thấy order ',
                    })
                }
                
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
                <Col span={24} >
                        <div className="Orders">
                            <h3 className="product__title">Đơn hàng</h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="search-area">
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} allowClear={true} style={{ width: "50%", marginRight: "25px", height: "50px" }} 
                                placeholder="Tìm kiếm theo tên , email , phương thức thanh toán"></Input>
                            <Button type="primary" className="search-area__btn" onClick={handleSearch}>Tìm kiếm</Button>
                            <Button type="primary" className="search-area__btn" onClick={handleReset}>Làm mới</Button>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                  
                    <Col span={24} style={{marginTop : 100}} >
                    {resultSearch.length > 0 ? 
                        <Table dataSource={resultSearch} columns={columns} key={resultSearch.id}></Table> :
                        <TableOrder data={data} setdata={setData} />
                    }
                    </Col>
                </Row>
            </div>

        </>
    )
}
export default Order;