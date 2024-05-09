import { GoTriangleUp ,GoTriangleDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-Sort";

function SortableTable(props){
 const {config, data}=props;
 const {sortBy,sortOrder,setSortColumn,sortedData} = useSort(data,config);

 const updatedconfig = config.map((column)=>{
    if(!column.sortValue){
        return column;
    }
    return {
       ...column,
       header: () => 
        (
         <th className="cursor-pointer hover:bg-gray-100"
            onClick={()=> setSortColumn(column.label)}>{column.label} 
            <div className="flex items-center">
               {getIcons(column.label,sortOrder,sortBy)}
            </div>
         </th>
        )
    };
 })



  return (
    <Table {...props} data={sortedData} config={updatedconfig} />
    
  );

}

function getIcons(label,sortBy,sortOrder){
  if(label !== sortBy){
    return (
    <div>
         <GoTriangleUp/>
        <GoTriangleDown/>
    </div>
    );
  }
  else if(sortOrder ==='asc'){
    return (
        <div>
      <GoTriangleUp/>
      </div>
    );
  }
  else if(sortOrder === 'desc'){
    return (
        <div>
        <GoTriangleDown/>
        </div>
    );
  }

}

export default SortableTable;
