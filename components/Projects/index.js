import React from "react";
import { ProjectData } from "../data/projects";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard";
import Separator from "../common/Separator";

function Projects() {
  const data = ProjectData;
  return (
    <div className={styles.projects}>
      <Separator />
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
