import React from "react";
import { Name } from "./Name";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { useNavigate } from "react-router-dom";
export const Home = () =>{
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="name" onClick={() => navigate('/name')}>
                <Name />
            </div>
            <div className="intro" onClick={() => navigate('/intro')}>
                <Intro />
            </div>
            <div className="skills"  onClick={() => navigate('/skills')}>
                <Skills />
            </div>
            <div className="projects" onClick={() => navigate('/projects')}>
                <Projects />
            </div>
            <div className="contacts" onClick={() => navigate('/contact')}>
                <Contacts />
            </div>
        </div>
    )
}