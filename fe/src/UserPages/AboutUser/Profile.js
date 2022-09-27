import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ right, Name, Position, altImage, Image, left }) => {
  return (
    <div
      className={styles["profile-container"]}
      style={{ marginRight: `${right}`, marginLeft: `${left}` }}
    >
      <img src={`/images/about-us-profiles/${Image}`} alt={`${altImage}`} />
      <p className={styles["text-name"]}>{Name}</p>
      <p className={styles["text-position"]}>{Position}</p>
    </div>
  );
};

export default Profile;
