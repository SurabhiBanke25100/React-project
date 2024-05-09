import usenavigation from "../hooks/use-navigation";

function  Route({path,children}){
const {currentpath} = usenavigation();

if(path === currentpath){
    return children;
}
return null;

}

export default Route;