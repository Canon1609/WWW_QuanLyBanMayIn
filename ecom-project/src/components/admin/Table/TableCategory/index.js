import React, { useEffect, useState } from 'react';
import { Modal, Spin, Table } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import EditForm  from "../../DrawerEditCategory"
const { confirm } = Modal;
const TableCategory = () => {
    const columns = [
        {
            title: 'Category ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEdit onClick={() => { handleEdit(record.id) }} />
                    <DeleteOutlined onClick={() => { showDeleteConfirm(record.id) }} />
                </div>
            ),
        },
    ];
    // khai báo state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible , setVisible] = useState(false)
    const [selectedCate , setSelectetCate] = useState(null);
    const fetchData = async () => {
        setLoading(true);
        // Call API here
        const response = await fetch('http://localhost:8080/BE_PRINTER/api/v1/categories');
        if (response.ok) {
            const result = await response.json();
            setData(result || []);

        }
        setLoading(false);
    }
    useEffect(() => {
    
        fetchData();
     
        
    }, [])
  
    // hàm delete category
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này??',
            icon: <ExclamationCircleFilled />,
            content: 'Hành động này không thể hoàn tác',
            onOk: async () => {
                setLoading(true);
                // callapi xóa
                try {
                    
                    const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/categories/${id}`, {
                        method: "DELETE"
                    })
                    if (response.ok) {
                        const result = await response.json();
                        setData((preCate) => preCate.filter((cate) => cate.id !== id))
                        Modal.success({
                            content: "Xóa sản phẩm thành công!",
                    
                        });
                        setLoading(false);
                    }


                }
                catch (error) {
                    Modal.error({
                        title: "Xóa thất bại",
                        content: "Không thể xóa. Vui lòng thử lại!",
                    });
                }

            },
            onCancel() {
                setLoading(false);
            },
        });
    };
    // hàm sửa category
    const handleEdit = (id) => {
        const category = data.find(category => category.id === id);
        setSelectetCate(category)
        setVisible(true)

    }
    // hàm onClose 
    const handleOnClose = () => {
        setVisible(false)
    }
    return (
    
    <>
    {loading ? (<Spin size= "large" style={{display : "flex" , alignItems : 'center' , justifyContent : 'center' , marginTop : '100px'}}></Spin>):(
          <Table columns={columns} dataSource={data} />
    )}
 
    
    <EditForm category={selectedCate} onClose={handleOnClose} visible={visible} onSuccess = {fetchData} />
    </>
   
);
};

export default TableCategory;