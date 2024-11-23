import React from "react";
import { useParams } from "react-router-dom";
import { ProjectData } from "../AllProjects";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = ProjectData[projectId];

  if (!project) {
    return <div>Project not found!</div>; // Handle invalid projectId
  }

  return (
    <div className="projectDetail">
      <div className="projectHeader">
        <h1>{project.title}</h1>
      </div>

      <div className="projectContent">
        <p className="projectDescription">{project.description}</p>

        <h3>Key Features:</h3>
        <ul>
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3>Technologies Used:</h3>
        <ul>
          {project.technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="projectLinks">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {project.hostedLink && (
            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer">
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
