import { useEffect } from "react";
import { API_KEY } from "../helper";
import VideoContainer from "./VideoContainer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="body-container">
            <Header />
            <div style={{display:"flex"}}>
            <Sidebar />
            <Outlet />
            </div>
            
        </div>
    );
}
 
export default Body;