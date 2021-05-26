import React from "react";
import "./App.css";
import user from "./data/usersData";
import Header from "./component/Header";
import Add from "./component/Add";
import Main from "./component/Main";

let currentUser = user[0];
let expenses = [];
let users = user;

function dispatchExpense(expense) {
  let findOwner = expense.ownerExpense;
  let findIndexOwner;
  users.forEach((user, index) => {
    if (findOwner === user.name) {
      findIndexOwner = index;
    }
  });
  users[findIndexOwner].amountPayed.push(parseInt(expense.totalAmount));
  let numberOfUserExpense= expense.userExpense.length
  let arrOfExpense = expense.userExpense
  users.forEach((user) => {
    if (arrOfExpense.includes(user.name)) {
      user.restToPay.push(parseInt(expense.totalAmount / numberOfUserExpense));
    }
  });
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseName: "",
      totalAmount: null,
      date: null,
      ownerExpense: "",
      userExpense: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //work for all text base input as soon they have a name props than match the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleMultiChange(event) {
    this.setState(() => {
      return {
        userExpense: event.target.value,
      };
    });
  }

  handleDateChange(event) {
    let [month, date, year] = event.toLocaleDateString("en-US").split("/");
    this.setState(() => {
      return {
        date: `${month}/${date}/${year}`,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newExp = this.state;
    dispatchExpense(newExp);

    expenses.push(this.state);

    this.setState({
      expenseName: "",
      totalAmount: null,
      date: null,
      ownerExpense: "",
      userExpense: [],
    });
  }

  render() {
    console.log(users);
    return (
      <div className="App">
        <Header user={currentUser} />
        <Main dataExpenses={expenses} />
        <Add
          handleSubmit={this.handleSubmit}
          onChange={(value) => this.handleChange(value)}
          onMultiChange={(value) => this.handleMultiChange(value)}
          handleDateChange={(value) => this.handleDateChange(value)}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
