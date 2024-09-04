import React, { useState } from 'react';
import { Space, Table, Tag , Select } from 'antd';
import "./RecentOrder.scss"
const RecentOrder = ()=>{
  const topOptions = [
    {
      label: 'topLeft',
      value: 'topLeft',
    },
    {
      label: 'topCenter',
      value: 'topCenter',
    },
    {
      label: 'topRight',
      value: 'topRight',
    },
    {
      label: 'none',
      value: 'none',
    },
  ];
  const bottomOptions = [
    {
      label: 'bottomLeft',
      value: 'bottomLeft',
    },
    {
      label: 'bottomCenter',
      value: 'bottomCenter',
    },
    {
      label: 'bottomRight',
      value: 'bottomRight',
    },
    {
      label: 'none',
      value: 'none',
    },
  ];
  const [top, setTop] = useState('topRight');
  const [bottom, setBottom] = useState('bottomRight');
    const columns = [
        {
          title: 'INVOICE NO',
          dataIndex: 'invoice_no',
          key: 'invoiceNo',
          // render: (text) => <a>{text}</a>,
        },
        {
          title: 'ORDER TIME',
          dataIndex: 'ordertime',
          key: 'ordertime',
        },
        {
          title: 'Customer Name',
          dataIndex: 'customername',
          key: 'customername',
        },
        {
          title: 'METHOD',
          key: 'method',
          dataIndex: 'method',
        },
        {
          title: 'AMOUNT',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
            title : "STATUS",
            dataIndex : "status",
            key : "status",
        }
        ,
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
      const data = [
        {
          key: 1,
          invoice_no : 1,
          ordertime : "10/2/2024",
          customername : "huy nguyen ",
          method : "banking",
          amount : 100,
          status : "pending"
        },
        {
          key: 2,
          invoice_no: 2,
          ordertime: "10/3/2024",
          customername: "hoa tran",
          method: "cash",
          amount: 150,
          status: "completed"
        },
        {
          key: 3,
          invoice_no: 3,
          ordertime: "10/4/2024",
          customername: "minh le",
          method: "credit card",
          amount: 200,
          status: "pending"
        },
        {
          key: 4,
          invoice_no: 4,
          ordertime: "10/5/2024",
          customername: "quang nguyen",
          method: "banking",
          amount: 250,
          status: "pending"
        },
        {
          key: 5,
          invoice_no: 5,
          ordertime: "10/6/2024",
          customername: "lan nguyen",
          method: "cash",
          amount: 300,
          status: "completed"
        },
        {
          key: 6,
          invoice_no: 6,
          ordertime: "10/7/2024",
          customername: "bao tran",
          method: "credit card",
          amount: 350,
          status: "pending"
        },
        {
          key: 7,
          invoice_no: 7,
          ordertime: "10/8/2024",
          customername: "hien vu",
          method: "banking",
          amount: 400,
          status: "pending"
        },
        {
          key: 8,
          invoice_no: 8,
          ordertime: "10/9/2024",
          customername: "son nguyen",
          method: "cash",
          amount: 450,
          status: "completed"
        },
        {
          key: 9,
          invoice_no: 9,
          ordertime: "10/10/2024",
          customername: "thu pham",
          method: "credit card",
          amount: 500,
          status: "pending"
        },
        {
          key: 10,
          invoice_no: 10,
          ordertime: "10/11/2024",
          customername: "tam le",
          method: "banking",
          amount: 550,
          status: "pending"
        },
        {
          key: 11,
          invoice_no: 11,
          ordertime: "10/12/2024",
          customername: "ngoc vu",
          method: "cash",
          amount: 600,
          status: "completed"
        },
        {
          key: 12,
          invoice_no: 12,
          ordertime: "10/13/2024",
          customername: "an nguyen",
          method: "credit card",
          amount: 650,
          status: "pending"
        },
        {
          key: 13,
          invoice_no: 13,
          ordertime: "10/14/2024",
          customername: "hieu tran",
          method: "banking",
          amount: 700,
          status: "pending"
        },
        {
          key: 14,
          invoice_no: 14,
          ordertime: "10/15/2024",
          customername: "nam pham",
          method: "cash",
          amount: 750,
          status: "completed"
        },
        {
          key: 15,
          invoice_no: 15,
          ordertime: "10/16/2024",
          customername: "bao vu",
          method: "credit card",
          amount: 800,
          status: "pending"
        },
        {
          key: 16,
          invoice_no: 16,
          ordertime: "10/17/2024",
          customername: "linh nguyen",
          method: "banking",
          amount: 850,
          status: "pending"
        },
        {
          key: 17,
          invoice_no: 17,
          ordertime: "10/18/2024",
          customername: "kien pham",
          method: "cash",
          amount: 900,
          status: "completed"
        },
        {
          key: 18,
          invoice_no: 18,
          ordertime: "10/19/2024",
          customername: "vy tran",
          method: "credit card",
          amount: 950,
          status: "pending"
        },
        {
          key: 19,
          invoice_no: 19,
          ordertime: "10/20/2024",
          customername: "hoang vu",
          method: "banking",
          amount: 1000,
          status: "pending"
        },
        {
          key: 20,
          invoice_no: 20,
          ordertime: "10/21/2024",
          customername: "khanh nguyen",
          method: "cash",
          amount: 1050,
          status: "completed"
        },
        {
          key: 21,
          invoice_no: 21,
          ordertime: "10/22/2024",
          customername: "yen pham",
          method: "credit card",
          amount: 1100,
          status: "pending"
        } 
      ];
    return (
        <>
            <Table className='recent-order' size='small' columns={columns} dataSource={data} 
            pagination = {{pageSize : 50}}
            scroll={{
              y : 240,
            }}
            
            ></Table>
        </>
    )
}
export default RecentOrder;