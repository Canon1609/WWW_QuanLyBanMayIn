import {Input, Space} from "antd"
import Search from "antd/es/transfer/search"
import { FaSearch } from "react-icons/fa";
const SearchBar = ()=>{
    return(
        <>
         <Input placeholder="Nhập từ khóa tìm kiếm ..."
         size="large"
         allowClear
         style={{width : "700px"}}
         suffix = {<FaSearch />}
         />
        </>
    )
}
export default SearchBar