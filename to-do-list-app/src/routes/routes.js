import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Register from "../pages/Register";
import Admin from "../pages/Admin";

function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/admin" element={<Admin/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;