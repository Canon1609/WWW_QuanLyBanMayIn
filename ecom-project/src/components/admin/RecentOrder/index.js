import React, { useEffect, useState } from 'react';
import { Space, Table, Tag , Select } from 'antd';
import "./RecentOrder.scss"
const RecentOrder = ()=>{

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/orders');
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.log('Failed to fetch product: ', error);
      }
      setLoading(false);
    };
    fetchOrder();
  }, []);

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          // render: (text) => <a>{text}</a>,
        },
        {
          title: 'Ngày đặt hàng',
          dataIndex: 'createAt',
          key: 'ordertime',
        },
        {
          title: 'Hình thức thanh toán',
          dataIndex: 'paymentMethod',
          key: 'customername',
        },
        {
          title: 'Trạng Thái',
          key: 'status',
          dataIndex: 'status',
        },
        {
          title: 'Tổng tiền',
          dataIndex: 'totalPrice',
          key: 'amount',
        },
        {
            title : "ACTION",
            dataIndex : "action",
            key : "action",
            render: () => <>
                <Select
                    defaultValue={"đã giao"}
                    style={
                        {
                            width : 120,
                        }
                    }
                    options={[
                        {
                             value : "delivered",
                             label: 'đã giao',
                        },
                        {
                            value : "pending",
                            label: 'đang chờ',
                        },
                        {
                            value : "processing",
                            label: 'đang xử lý',
                        },
                        {
                            value : "cancel",
                            label: 'đã hủy',
                        },
                    ]}
                >
                </Select>
            </>,
        }
      ];

    return (
        <>
            <Table className='recent-order' size='large' columns={columns} dataSource={order} loading={loading} 
            pagination = {{pageSize : 50}}
            scroll={{
              y : 400,
            }}
            ></Table>
        </>
    )
}
export default RecentOrder;