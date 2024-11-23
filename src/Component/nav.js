import React from "react";
import screenshot from "../Images/Screenshot (166).png";
import { useNavigate,useLocation } from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (e,path) =>{
        e.stopPropagation();
        navigate(path)
      }

      if(location.pathname === '/'){
        return null;
      }
    return (
            <div className="navbar">
                <div className="logo">
                    <img src={screenshot} alt="logo" onClick={(e) => handleClick(e, "/")} />
                </div>
                <div className="links">
                    <p onClick={(e) => handleClick(e, '/intro')}>About</p>
                    <p onClick={(e) => handleClick(e, '/projects')}>Projects</p>
                    <p onClick={(e) => handleClick(e, '/skills')}>Skills</p>
                    <p onClick={(e) => handleClick(e, '/contact')}>Contacts</p>
                </div>
            </div>
            )
}