import React from "react";
import styles from "./Work.module.css";
import Separator from "../common/Separator";
import { WorkData } from "../data/work";
import Image from "next/image";

function WorkCard({ item }) {
  return (
    <div className={styles.workCard}>
      <Image
        src={item.companyLogo}
        height={80}
        width={80}
        className={styles.workLogo}
      />
      <div className={styles.workInfo}>
        <label className={styles.companyName}>{item.company}</label>
        <div className={styles.workDates}>
          <label className={styles}>{item.dateJoining}</label> -{" "}
          <label className={styles}>{item.dateEnd}</label>
        </div>
        <div className={styles.workDesc}>
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const data = WorkData;
  return (
    <div className={styles.work}>
      <Separator />
      <label className={styles.sectionTitle}>Work</label>
      <div className={styles.workList}>
        {data.map((item) => (
          <WorkCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Work;
