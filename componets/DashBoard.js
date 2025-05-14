import {  NavLink, Outlet } from "react-router-dom";
import '../admin.scss'

const DashBoard = () => {
    const navStyle={
        textDecoration:"none",
        color:"white",
        fontSize:"20px"
    }
  return (
    <div className="wrap main" >
  <div style={{backgroundColor:"black",padding:"20px",display:"flex", gap:"50px"}}>
        <NavLink style={navStyle} to="/about">About</NavLink>
      <NavLink style={navStyle} to="/setting">Setting</NavLink>
  </div>
      <Outlet />
    </div>
  );
};

export default DashBoard;
