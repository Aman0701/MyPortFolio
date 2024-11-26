import React from "react";
import { useNavigate } from "react-router-dom";
import resume from '../Resume/Aman.pdf'
export const Intro = () =>{

    const navigate = useNavigate();

    const openResume = () =>{
        window.open(resume,'_blank')
    }

  
    return (
        <div className="introPage">
            <h1>About Me</h1>
            <div className="about-me" >
                <p>
                I am a Node.js Backend Developer with expertise in Node.js, JavaScript, Express.js, MongoDB, HTML5, CSS3, and Git. On the backend, I have got specialized in creating robust APIs, working with databases, and delivering high-quality server-side applications. My approach to development is always centered on writing clean, maintainable code and following best practices to ensure the quality and reliability of the applications I build.
                </p>
            </div>
            <div className="personal-detail">
                <h2>Personal Detail</h2>
                <p><b>Date of Birth:</b> 7<sup>th</sup> Jan 1995</p>
                <p><b>Languages Known:</b> English,Hindi</p>
                <p><b>Address:</b> Mohania,Bihar</p>
                <button onClick={openResume}>Resume</button>
            </div>
        </div>
    )
}