import {Routes, Route} from "react-router";
import RegisterPage from "../Components/Pages/Reg/Reg";
import LoginPage from "../Components/Pages/login";
import Dash from "../Components/Pages/Dashboard/Dashboard";
import CartPage from "../Components/Pages/Dashboard/CartItems/CartItems";
const Routing =()=>{
    return(
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={ <LoginPage/>}/>
                <Route path="/cart" element={ <CartPage/>}/>
            <Route path="/" element={<Dash/>}>
            
            </Route>
        </Routes>
    )
}
export default Routing;