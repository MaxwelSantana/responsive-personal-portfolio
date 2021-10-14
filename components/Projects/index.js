import React from "react";
import { ProjectData } from "../data/projects";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard";

function Projects() {
  const data = ProjectData;
  return (
    <div className={styles.projects}>
      <label className={styles.sectionTitle}>Projects</label>
      <div>
        {data.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
