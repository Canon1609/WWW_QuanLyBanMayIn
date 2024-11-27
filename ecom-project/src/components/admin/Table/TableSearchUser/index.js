import React, { useEffect, useState } from 'react';
import { Modal, Spin, Table } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

import EditForm from '../../DrawerEditCategory';
import EditFormUser from '../../DrawerEditUser';

const TableResultSearchUser = () => {
    const { confirm } = Modal;
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
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEdit onClick={() => { handleEdit(record.id) }} style={{fontSize : 20}} />
                    <DeleteOutlined onClick={() => { showDeleteConfirm(record.id) }} style={{fontSize : 20}} />
                </div>
            ),
        },
    ];
    // khai báo state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible , setVisible] = useState(false)
    const [selectedUser , setSelectetUser] = useState(null);
    const fetchData = async () => {

        setLoading(true);
        // Call API từ server để lấy dữ liệu
        const response = await fetch('http://localhost:8080/BE_PRINTER/api/v1/user');
        if (response.ok) {
            const result = await response.json();
            setData(result || []);
            // localStorage.setItem('users', JSON.stringify(result));
        }
        setLoading(false);
    }
    useEffect(() => {
    
        fetchData();
     
        
    }, [])
  
    // hàm delete category
    const showDeleteConfirm = (id) => {
        confirm({
            type: 'danger',
            title: 'Bạn có chắc chắn muốn xóa user này ?',
            icon: <ExclamationCircleFilled />,
            content: 'Hành động này không thể hoàn tác',
            onOk: async () => {
                setLoading(true);
                // callapi xóa
                try {
                    
                    const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/user/${id}`, {
                        method: "DELETE"
                    })
                    if (response.ok) {
                        const result = await response.json();
                        setData((preUser) => preUser.filter((user) => user.id !== id))
                        // fetchData();
                    
                        Modal.success({
                            content: "Xóa user thành công!",
                            
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
        const user = data.find(user => user.id === id);
        setSelectetUser(user)
        setVisible(true)

    }
    // hàm onClose 
    const handleOnClose = () => {
        setVisible(false)
    }
    return (
    
    <>
    {loading ? (<Spin size= "large" style={{display : "flex" , alignItems : 'center' , justifyContent : 'center' , marginTop : '100px'}}></Spin>):(
          <Table columns={columns} dataSource={data} key={data.id} />
    )}
 
    
    <EditFormUser user={selectedUser} onClose={handleOnClose} visible={visible} onSuccess = {fetchData} />
    </>
   
);
};

export default TableResultSearchUser;