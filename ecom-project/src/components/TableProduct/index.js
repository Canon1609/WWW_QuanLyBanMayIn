import { Table } from "antd";
import "./TableProduct.scss"
import {DeleteOutlined, FileSearchOutlined} from "@ant-design/icons"
const TableProduct = ()=>{
    const dataSource = [
        {
            key: '1',
            productName: 'Máy in 3D',
            category: "máy in",
            price: 1000,
            salePrice: 900,
            stock: 1200,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '2',
            productName: 'Máy in laser Canon LBP2900',
            category: "máy in",
            price: 1500,
            salePrice: 1300,
            stock: 850,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '3',
            productName: 'Máy in phun màu Epson L3110',
            category: "máy in",
            price: 1200,
            salePrice: 1100,
            stock: 300,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '4',
            productName: 'Máy in đa chức năng Brother DCP-L2520D',
            category: "máy in",
            price: 2500,
            salePrice: 2300,
            stock: 150,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '5',
            productName: 'Máy in laser HP 107A',
            category: "máy in",
            price: 800,
            salePrice: 750,
            stock: 600,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '6',
            productName: 'Máy in phun màu Canon PIXMA G2010',
            category: "máy in",
            price: 1700,
            salePrice: 1600,
            stock: 400,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '7',
            productName: 'Máy in laser Brother HL-L2321D',
            category: "máy in",
            price: 1300,
            salePrice: 1200,
            stock: 500,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '8',
            productName: 'Máy in laser đa chức năng HP LaserJet Pro MFP M130fw',
            category: "máy in",
            price: 2900,
            salePrice: 2700,
            stock: 350,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '9',
            productName: 'Máy in phun Brother MFC-T810W',
            category: "máy in",
            price: 1800,
            salePrice: 1700,
            stock: 200,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '10',
            productName: 'Máy in laser màu HP Color LaserJet Pro MFP M180nw',
            category: "máy in",
            price: 4000,
            salePrice: 3800,
            stock: 100,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '11',
            productName: 'Máy in phun đa chức năng Canon PIXMA MG2577S',
            category: "máy in",
            price: 900,
            salePrice: 850,
            stock: 1000,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '12',
            productName: 'Máy in laser Brother HL-L8360CDW',
            category: "máy in",
            price: 3500,
            salePrice: 3300,
            stock: 250,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '13',
            productName: 'Máy in laser đen trắng HP LaserJet Pro M404dn',
            category: "máy in",
            price: 2200,
            salePrice: 2100,
            stock: 500,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '14',
            productName: 'Máy in phun màu đa năng Canon PIXMA G3010',
            category: "máy in",
            price: 1600,
            salePrice: 1500,
            stock: 300,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '15',
            productName: 'Máy in laser màu Brother HL-L3270CDW',
            category: "máy in",
            price: 2700,
            salePrice: 2500,
            stock: 200,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '16',
            productName: 'Máy in laser đơn năng Ricoh SP 210SU',
            category: "máy in",
            price: 1000,
            salePrice: 950,
            stock: 800,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '17',
            productName: 'Máy in laser đen trắng Canon LBP6230DN',
            category: "máy in",
            price: 1400,
            salePrice: 1350,
            stock: 500,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '18',
            productName: 'Máy in laser Samsung Xpress M2020',
            category: "máy in",
            price: 1200,
            salePrice: 1100,
            stock: 650,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '19',
            productName: 'Máy in đa chức năng HP LaserJet Pro MFP M227sdn',
            category: "máy in",
            price: 2000,
            salePrice: 1900,
            stock: 150,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        },
        {
            key: '20',
            productName: 'Máy in laser Ricoh SP 230DNw',
            category: "máy in",
            price: 1800,
            salePrice: 1750,
            stock: 300,
            actions: (<> 
                <div className="icon">
                    <FileSearchOutlined style={{marginRight: "20px"}}/>
                    <DeleteOutlined />
                </div>
            </>)
        }
    ];
    const columns = [
        {
            title: 'PRODUCT NAME',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'CATEGORY',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'PRICE',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'SALE PRICE',
            dataIndex: 'salePrice',
            key: 'salePrice',
        },
        {
            title: 'STOCK',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'actions',
            key: 'actions',
        },
        
    ]
    return (
        <>
            <div className= "table-product">
                <Table columns={columns} dataSource={dataSource}
                 className="table" 
                pagination={{
                position: ["topRight"]
                }}
                scroll={{y : 500}}
                >
                </Table>
            </div>
        </>
    )
}
export default TableProduct;