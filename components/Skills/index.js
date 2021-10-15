import React from "react";
import styles from "./Skills.module.css";
import Separator from "../common/Separator";
import { SkillsData } from "../data/skills";

function SkillCard({ skill }) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>{skill.icon}</div>
      <label className={styles.skillName}>{skill.name}</label>
    </div>
  );
}

function Skills() {
  const data = SkillsData;
  return (
    <div className={styles.skills}>
      <Separator />
      <lable className={styles.sectionTitle}>Skills</lable>
      <div className={styles.skillsContainer}>
        {data.map((item) => (
          <div className={styles.skillsSection}>
            <label className={styles.skillsSectionTitle}>{item.type}</label>
            <div className={styles.skillsList}>
              {item.list.map((skill) => (
                <SkillCard skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
