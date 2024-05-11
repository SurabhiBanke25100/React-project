import Sidebar from './components/SideBar';
import Route from './components/Route';
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdownPage';
import ButtonPage from './Pages/ButtonPage';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';
import CounterPage from './Pages/CounterPage';
import CounterPage1 from './Pages/CounterPage1';
function App() { 
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5"> 
        <Route path="/Accordion"> 
          <AccordionPage /> 
        </Route> 
        <Route path="/">
          <DropdownPage /> 
        </Route> 
        <Route path="/buttons"> 
          <ButtonPage />
        </Route> 
        <Route path="/modal">
          <ModalPage /> 
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage  initialCount={10}/>
        </Route>
        <Route path="/counter1">
          <CounterPage1   initialCount={12} />
        </Route>
      </div>
    </div>
  );
}

export default App;
