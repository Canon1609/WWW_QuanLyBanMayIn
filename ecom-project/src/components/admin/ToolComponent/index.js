import { Button, Input, Select, Table } from "antd";
import "./ToolComponent.scss"
import "../../../assets/base/base.scss"
import TableCategory from "../Table/TableCategory";

const ToolComponent = ()=>{
    
    return(
        <>
           <div className="tool mt-10 pd-10">
           <Input placeholder="Search Product" className="tool__input"></Input>
          <Select 
           showSearch
           placeholder = "category"
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
            {
              value: '3',
              label: 'máy in kim',
            },
          ]}
          className="tool__category"></Select>
          <Select
           showSearch
           placeholder = "price"
           style={{width: "200px"}}
           
          options={[
            {
              value: '1',
              label: 'low to hight',
            },
            {
              value: '2',
              label: 'hight to low',
            },
            {
              value: '3',
              label: 'selling',
            },
          ]}
          className="tool__price"></Select>
          <Button type="primary" className="tool__filler">Filler</Button>
          <Button type="primary" className="tool__reset">Reset</Button>
        
           </div>
        
          
        </>
    )
}
export default ToolComponent;