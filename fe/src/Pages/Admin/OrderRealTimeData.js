import React, { useState } from "react";
import StartFirebase from "../../components/FireBase/firebaseRealTimeData";
import { ref, onValue, remove, set, update, push } from "firebase/database";
import { Table } from "react-bootstrap";
import styles from "./Admin.module.css";

const db = StartFirebase();
const [user, setProfile] = JSON.parse(localStorage.getItem("user_data"));

export class OrderRealtimeData extends React.Component {
  DeleteData() {
    const dbRef = ref(db, `SentOrders/`);
    remove(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, `SentOrders/`);
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <div>
        <Table>
          <thead className={styles["thead-style"]}>
            <tr className={styles["header-style"]}>
              <th>Order No.</th>
              <th>Date Ordered</th>
              <th>Username</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody className={styles["tbody-style"]}>
            {this.state.tableData.map((row, index) => {
              return (
                <tr>
                  <td>{row.key}</td>
                  <td>{row.data.DateOrdered}</td>
                  <td>{row.data.UserName}</td>
                  <td>{row.data.Email}</td>
                  <td>{row.data.PhoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
