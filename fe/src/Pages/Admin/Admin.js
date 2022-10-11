import React from "react";
import { RealtimeData } from "../BagSummary/RealTimeData";
import styles from "./Admin.module.css";
import { OrderRealtimeData } from "./OrderRealTimeData";
import "./Admin.css";

const Admin = () => {
  return (
    <div className={styles["whole-page"]}>
      <div className={styles["margin"]}>
        <div className={styles["title-text"]}>
          <h1>Order Confirmation</h1>
        </div>
        <div className={styles["pink-color"]}>
          <OrderRealtimeData />
        </div>
      </div>
    </div>
  );
};

export default Admin;
