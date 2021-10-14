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
        <p>{project.about}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <label className={styles.projectTag}>{tag}</label>
          ))}
        </div>
      </div>
      <div className={styles.projectPhotoContainer}>
        <Image
          src={project.image}
          className={styles.projectPhoto}
          layout="fill"
          // width={500}
          // height={500}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
