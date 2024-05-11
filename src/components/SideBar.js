import Link from "./Link";

function  Sidebar(){
const links=[
{label:'Dropdown',path:'/'},
{label:'Accordion',path:'/Accordion'},
{label:'Button',path:'/buttons'},
{label:'Modals',path:'/modal'},
{label:'Table',path:'/table'},
{label:'Counter',path:'/counter'},
{label:'Counter1',path:'./counter1'},
];
const renderedlinks=links.map((link)=>{
    return (
    <Link 
    key={link.label}  
    to={link.path}
    className="mb-3"  
    activeClassName="font-bold border-l-4 border-blue-500 pl-2"
    > 
      {link.label}
      </Link>
    );
})

return(
  <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
  {renderedlinks}
</div> 
);
} 


export default Sidebar;