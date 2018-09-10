import React, { Component } from "react";
import { FetchBills } from "../services/FetchBills";

class Lister extends Component {
  constructor(props) {
    super(props);
  }

  async getTransactions() {
    const billOrNoBill = await FetchBills();
  }

  async componentDidMount() {
    await this.getTransactions();

    let transactions = [];
  }
}
