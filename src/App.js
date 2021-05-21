import React from "react";
import "./App.css";
import user from "./data/usersData";
import Header from "./component/Header";
import Add from "./component/Add";
import Main from "./component/Main";

let currentUser = user[0];
let expenses = [];

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

  handleSubmit(event) {
    event.preventDefault();
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
    return (
      <div className="App">
        <Header user={currentUser} />
        <Main data={expenses} />
        <Add
          handleSubmit={this.handleSubmit}
          onChange={(value) => this.handleChange(value)}
          onMultiChange={(value) => this.handleMultiChange(value)}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
