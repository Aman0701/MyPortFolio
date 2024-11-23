import React from "react";
import { useNavigate } from "react-router-dom";

export const Skills = () => {
    const navigate = useNavigate();
    const skills = [{lang:'JAVA',complete:'eighty-five-percent',color:" mb-blue"},
        {lang:'JavaScript',complete:'ninety-percent',color:" orange"},
        {lang:'HTML',complete:'ninety-percent',color:"Tiger"},
        {lang:'CSS',complete:'ninety-percent',color:" mauve"},
        {lang:'NodeJs',complete:'eighty-percent',color:"green"},
        {lang:'ReactJs',complete:'eighty-percent',color:" mb-blue"},
        {lang:'MongoDB',complete:'seventy-percent',color:" orange"},
        {lang:'FireBase',complete:'seventy-percent',color:"Tiger"},
        {lang:'ExpressJs',complete:'eighty-five-percent',color:" mauve"},
        {lang:'DSA',complete:'eighty-five-percent',color:" green"},
        ]
    return (
        <>
         
         <div className="skillsPage" onClick={() => navigate('/skills')}>
         <h1>Skills</h1>
           {skills.map((skill) => (
               <div className="skills-progress">
                   <div className={`${skill.complete} ${skill.color}`}>
                       <div className="skills-name">
                           <span>{skill.lang}</span>
                       </div>
                   </div>
               </div>
           ))}
       </div>
        </>
       
    )
}