import React, { useState } from "react";
import StartFirebase from "../../components/FireBase/firebaseRealTimeData";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";
import styles from "./BagSummary.module.css";
const db = StartFirebase();
const [user, setProfile] = JSON.parse(localStorage.getItem("user_data"));

var total = 0;
export class RealtimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, `Cart/${user.username}`);
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
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((row, index) => {
              const product_quantity_price =
                [row.data.ProductPrice] * [row.data.ProductQuantity];
              total += product_quantity_price;
              return (
                <tr>
                  <td>{row.key}</td>
                  <td>{row.data.ProductName}</td>
                  <td>{row.data.ProductQuantity}</td>
                  <td>{product_quantity_price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className={styles["total-description"]}>
          <h1>Total</h1>
          <h1>{total}</h1>
        </div>
      </div>
    );
  }
}
