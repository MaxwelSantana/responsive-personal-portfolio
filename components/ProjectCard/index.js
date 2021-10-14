import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <label className={styles.projectTitle}>{project.title}</label>
        <div className={styles.projectLinks}>
          {project.demo && (
            <a className={styles.projectLink} href={project.demo}>
              <div className={styles.linkButton}>
                <i className="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className={styles.projectLink} href={project.github}>
              <div className={styles.linkButton}>
                <i className="devicon-github-original"></i>Github
              </div>
            </a>
          )}
        </div>
      </div>
      <Image
        src={project.image}
        className={styles.projectPhoto}
        width={500}
        height={500}
      />
    </div>
  );
}

export default ProjectCard;
