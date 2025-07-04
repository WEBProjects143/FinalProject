import './App.css';
import Routing from './Router/Route';
import {BrowserRouter} from "react-router"
function App() {

  return (
    <BrowserRouter>
       <Routing/>
    </BrowserRouter>
  );
}

export default App;
