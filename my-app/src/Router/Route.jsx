 import {Routes, Route} from "react-router";
 import RegisterPage from "../Components/Pages/Reg/Reg";
import LoginPage from "../Components/Pages/login";
import Dash from "../Components/Pages/Dashboard/Dashboard";
const Routing =()=>{
    return(
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={ <LoginPage/>}/>
            <Route path="/dashboard" element={<Dash/>}/>
        </Routes>
    )
}
export default Routing;