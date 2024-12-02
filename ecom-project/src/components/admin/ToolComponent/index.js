import { Button, Input, Select, Table } from "antd";
import "./ToolComponent.scss"
import "../../../assets/base/base.scss"
import TableCategory from "../Table/TableCategory";

const ToolComponent = ()=>{
    
    return(
        <>
           <div className="tool mt-10 pd-10">
           <Input placeholder="Nhập tên , loại sản phẩm ..." className="tool__input"></Input>
          <Select 
           showSearch
           placeholder = "Loại máy in"
           style={{width: "200px"}}
           
          options={[
            {
              value: '1',
              label: 'máy in phun',
            },
            {
              value: '2',
              label: 'máy in laser',
            },
          
          ]}
          className="tool__category"></Select>
          <Select
            // onSelect={handleChange}
           showSearch
           placeholder = "price"
           style={{width: "200px"}}
           
          options={[
            {
              value: '1',
              label: 'thấp đến cao',
            },
            {
              value: '2',
              label: 'cao đến thấp',
            },
           
          ]}
          className="tool__price"></Select>
          <Button type="primary" className="tool__filler">Lọc</Button>
          <Button type="primary" className="tool__reset">Làm mới</Button>
        
           </div>
        
          
        </>
    )
}
export default ToolComponent;