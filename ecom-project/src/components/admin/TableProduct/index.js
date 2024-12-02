import { Spin, Table } from "antd";
import "./TableProduct.scss"
import { DeleteOutlined, ExclamationCircleFilled} from "@ant-design/icons"
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Modal } from 'antd'
import EditForm from "../DrawerEditProduct";
const { confirm } = Modal;
const TableProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [visible , setVisible] = useState(false)
    const [selectedProduct , setSelectedProduct] = useState(null);

    useEffect(() => {
       
        fetchProduct();
    }, []);
    const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                
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
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này??',
            icon: <ExclamationCircleFilled />,
            content: 'Hành động này không thể hoàn tác',
            onOk: async () => {
                // callapi xóa
                try {
                    const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/products/${id}`, {
                        method: "DELETE"
                    })
                    if (!response.ok) {
                        throw new Error("không thể xóa sản phẩm")
                    }
                    const result = await response.json();
                    setData((preProducts) => preProducts.filter((product) => product.id !== id))
                    Modal.success({
                        content: "Xóa sản phẩm thành công!",
                    });

                } catch (error) {
                    console.error("Lỗi khi xóa sản phẩm : ", error)
                    Modal.error({
                        
                        title: "Xóa thất bại",
                        content: "Không thể xóa sản phẩm. Vui lòng thử lại!",
                    });
                }

            },
            onCancel() {
              
            },
        
        });
    };
    const handleEdit = (id)=>{
        const product = data.find(product => product.id === id);
        setSelectedProduct(product)
        setVisible(true)
        
    }
    const handleOnClose = ()=>{
         setVisible(false)
    
    }
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price) => price.toLocaleString("vi-VN"),
        },
        {
            title: 'Bộ nhớ',
            dataIndex: 'ram' ,
            key: 'ram',
        },
        {
            title: 'Khổ giấy in',
            dataIndex: 'sizePage',
            key: 'sizepage',
        },
        {
            title: "Hành động",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEdit onClick={()=>{handleEdit(record.id)}} style={{fontSize : '24px'}} />
                    <DeleteOutlined onClick={() => {showDeleteConfirm(record.id) }}  style={{fontSize : '24px'}} />
                </div>
            ),
        },

    ]
    return (
        <>
            {loading ? (<Spin size="large"></Spin>)
                : (
                    <div className="table-product">
                        <Table columns={columns} dataSource={data}
                            className="table"
                            pagination={{
                                position: ["center"]
                            }}
                            scroll={{ y: 400 }}
                            rowKey="id"
                        >
                        </Table>
                      
                    </div>

                  
                )}
      <EditForm product={selectedProduct} onClose={handleOnClose} visible={visible} onSuccess = {fetchProduct} />
        </>
    )
}
export default TableProduct;