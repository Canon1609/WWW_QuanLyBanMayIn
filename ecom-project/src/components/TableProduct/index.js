import { Table } from "antd";

const TableProduct = ()=>{
    const dataSource = [
        {
            key: '1',
            productName: 'Máy in 3d',
            category: 32,
            address: '10 Downing Street',
        },
    ]
    const columns = [
        {
            title: 'PRODUCT NAME',
            dataIndex: 'productName',
            key: 'name',
        },
        {
            title: 'CATEGORY',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'PRICE',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'SALE PRICE',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'STOCK',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'name',
            key: 'name',
        }
    ]
    return (
        <>
            <div className= "table-product">
                <Table columns={columns} dataSource={dataSource}></Table>
            </div>
        </>
    )
}
export default TableProduct;