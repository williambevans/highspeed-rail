import React from "react";
import "../styles/TexasCentral.css";
import Project from "../images/Project.png";



function Projects() {
return (
    <div className="theProject">
        <div className="project">
            <img className="project" src={Project} alt='icon' />
        </div>
    </div>
    
    );
}
export default Projects;