import { children, createContext, useState ,useEffect} from "react";

const NavigationContext=createContext();

const NavProvider=({children})=>{
   const [currentpath,setcurrentpath]=useState(window.location.pathname);
//useeffect logic is basically referred coz to forward and backward the page for navigation
useEffect(()=>{
   const handler=()=>{

   setcurrentpath(window.location.pathname);
   };

   window.addEventListener('popstate',handler);

   //had to cleanup the route also when move forward or backward

   return ()=>{
    window.removeEventListener('popstate',handler);
   }
},[]);

const navigate=(to)=>{
window.history.pushState({},'',to);
setcurrentpath(to);

};

return <NavigationContext.Provider  value={{currentpath,navigate}}>
   {children} 
</NavigationContext.Provider>

};
export  {NavProvider};
export default  NavigationContext;