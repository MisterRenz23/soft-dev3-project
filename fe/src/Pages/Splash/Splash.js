import React from "react";
import styles from "./Splash.module.css";
import SyncLoader from "react-spinners/SyncLoader";
import Image from "react-bootstrap/Image";

const Splash = (loading) => {
  return (
    <div className={styles["center-container"]}>
      <div className="body">
        <Image
          className={styles["image"]}
          src="/images/splash-logo.png"
          alt="show-logo"
        />
        <SyncLoader
          className={styles["center-loader"]}
          color={"#4B182F"}
          loading={loading}
          size={15}
        />
      </div>
      <div className={styles["loading-activity"]}></div>
    </div>
  );
};

export default Splash;
