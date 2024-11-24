import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from '../Images/Screenshot (178).png';
import project2 from '../Images/Screenshot (173).png';
import project3 from '../Images/Screenshot (174).png';
import project4 from '../Images/Screenshot (175).png';
import project5 from '../Images/Screenshot (176).png';

export const Projects = () => {
    const navigate = useNavigate();

    const handleClick = (e,projectId) =>{
        e.stopPropagation()
        navigate(`/projects/${projectId}`);
    }

    return (
        <div className="projectsPage">
            <h1>Projects</h1>
            <div class="portfolio-look" onClick={(e) => handleClick(e,'1')}>
                <img src={project1} alt="project1" />
                <div class="text">
                    <p>PORTFOLIO</p>
                    <p>Click to get detail</p>
                </div>

            </div>
            <div class="portfolio-look" onClick={(e) => handleClick(e,'2')}>
                <img src={project2} alt="project1" />
                <div class="text">
                    <p>Easily</p>
                    <p>Click to get detail</p>
                </div>

            </div>
            <div class="portfolio-look" onClick={(e) => handleClick(e,'3')}>
                <img src={project3} alt="project1" />
                <div class="text">
                    <p>IMDB CLONE</p>
                    <p>Click to get detail</p>
                </div>

            </div>
            <div class="portfolio-look" onClick={(e) => handleClick(e,'4')}>
                <img src={project4} alt="project1" />
                <div class="text">
                    <p>MUSIC PLAYER</p>
                    <p>Click to get detail</p>
                </div>

            </div>
            <div class="portfolio-look" onClick={(e) => handleClick(e,'5')}>
                <img src={project5} alt="project1" />
                <div class="text">
                    <p>TO_DO_LIST</p>
                    <p>Click to get detail</p>
                </div>

            </div>
        </div>
    )
}