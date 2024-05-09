import {  useState } from "react";

//note:do not add jsx in the hooks , only the state related data will be added in this hook file.

function useSort(data,config){
 
 const [sortOrder,setsortOrder]=useState(null);
 const [sortBy,setsortBy]=useState(null);

 const setSortColumn=(label)=>{
   if(sortBy && label !== sortBy){
    setsortOrder('asc');
    setsortBy(label);
    return;
   }
   if(sortOrder === null){
    setsortOrder('asc');
    setsortBy(label);
   }

   else if(sortOrder ==='asc'){
    setsortOrder('desc');
    setsortBy(label);
   }
   else if(sortOrder ==='desc'){
     setsortOrder(null);
     setsortBy(null);
   }
 };
 
 

//sort data only if the sortorder is asc or desc
//make copy of the 'data' prop
//find the correct sortvalue function and use it for the sorting

let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
         return valueA.localeCompare(valueB) * reverseOrder;
      }
       else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

return{
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
};

}

export default useSort;
