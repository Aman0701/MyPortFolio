import React from "react";
import screenshot from "../Images/Screenshot (166).png"; // Adjust path based on location
import profile from "../Images/WhatsApp_Image_2024-11-21_at_09.39.15-removebg.png";
import { useNavigate } from "react-router-dom";

export const Name = () => {
  const navigate = useNavigate();


  const handleClick = (e,path) =>{
    e.stopPropagation();
    navigate(path)
  }

  return (
    <div className="namePage">
      <div className="nav">
        <div className="logo">
          <img src={screenshot} alt="logo" onClick={(e) => handleClick(e,"/")}  />
        </div>
        <div className="links">
          <p onClick={(e) => handleClick(e,'/intro')}>About</p>
          <p onClick={(e) => handleClick(e,'/projects')}>Projects</p>
          <p onClick={(e) => handleClick(e,'/skills')}>Skills</p>
          <p onClick={(e) => handleClick(e,'/contact')}>Contacts</p>
        </div>
      </div>
      <div className="detail">
        <div>
          <h1>Aman Agrawal</h1>
        </div>
        <div>
          <img src={profile} alt="profile" />
        </div>
        <div className="socialMedia">
        <a href="https://www.linkedin.com/in/aman-agrawal-081541113/" target="blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
        <a href="https://leetcode.com/u/agraaman/" target="blank"><i class="fa-solid fa-code fa-2x"></i></a>
        </div>
      </div>
      <div className="introduction">
        <p>~Introduction</p>
        <h2>Software Developer</h2>
        <h3> <b>Fullstack Developer</b> with expertise in Node.js, JavaScript, Express.js, MongoDB, HTML5, CSS3, and Git. </h3>
      </div>

      <div className="profile-detail" onClick={(e) => handleClick(e,'/contact')}>
        <p>Interested in working with me? Let's talk!</p>
      </div>

    </div>
  );
};
