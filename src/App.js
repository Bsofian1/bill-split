import "./App.css";
import user from "./data/usersData";
import Header from "./component/Header";
import Add from "./component/Add"

function App() {
  const currentUser = user[0];


  return (
    <div className="App">
      <Header user={currentUser} />
      <Add />
    </div>
  );
}

export default App;
