import React from "react";
import { Name } from "./Name";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";

export const Home = () =>{

    return (
        <div className="container">
            <div className="name fade">
                <Name />
            </div>
            <div className="intro fade">
                <Intro />
            </div>
            <div className="skills fade">
                <Skills />
            </div>
            <div className="projects fade">
                <Projects />
            </div>
            <div className="contacts fade">
                <Contacts />
            </div>
        </div>
    )
}