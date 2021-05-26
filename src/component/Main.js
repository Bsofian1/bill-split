import { Doughnut, Bar } from "react-chartjs-2";
import React, { Component } from "react";
import Users from "../data/usersData";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users,
      expenses: props.dataExpenses,
    };
    this.setState = this.setState.bind(this);
  }


  render() {
    let names = [];
    this.state.users.map((user) => names.push(user.name));

    let totalAmount = 0;
    let arrayAmount = [];
    

    for (let expense of this.state.expenses) {
      totalAmount += parseInt(expense.totalAmount);
    }
    this.state.users.forEach(user=> {
      arrayAmount.push(user.amountPayed.reduce((a,b) => a+b))
    })

    let currentSituation=[]
    this.state.users.forEach(user => {
      currentSituation.push(user.amountPayed.reduce((a,b) => a+b) - user.restToPay.reduce((a,b) => a+b))
    })
    
    console.log(currentSituation)

    const data = {
      labels: names,
      datasets: [
        {
          data: arrayAmount,
          backgroundColor: ["#ffcdd2", "#bbdefb", "#b2dfdb", "#ffe0b2"],
          borderWidth: 1,
        },
      ],
    };

    const dataUser = {
      labels: names,
      datasets: [
        {
          label: 'Current situation',
          data: currentSituation,
          backgroundColor: ["#ffcdd2", "#bbdefb", "#b2dfdb", "#ffe0b2"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div style={{ maxWidth: 400, margin: "auto", paddingBottom: 20 }}>
        <Doughnut data={data} />
        <Bar data={dataUser} options={{indexAxis: "y"}}/>
        <h1>Total amount: {totalAmount}€</h1>
      </div>
    );
  }
}

