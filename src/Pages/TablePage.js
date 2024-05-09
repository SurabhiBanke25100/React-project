//import Table from "../components/Table";
import SortTable from "../components/SortableTable";

function Tablepage(){
const data=[
{name:"Orange",color:"bg-orange-500",score:3},
{name:"Green",color:"bg-green-500",score:10},
{name:"red",color:"bg-red-500",score:7},
{name:"Yellow",color:"bg-yellow-500",score:9}

];

const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue:(fruit)=>fruit.name,

    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      header: ()=><th className="bg-red-500">Score</th>,
      sortValue:(fruit)=>fruit.score,
    },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };

return (
        <div>
           <SortTable data={data} config={config} keyFn={keyFn} />
        </div>
    ); 
}
export default Tablepage;  


