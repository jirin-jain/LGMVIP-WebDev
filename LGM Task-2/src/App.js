import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Loader from "./components/loader/Loader";
import Card from "./components/card/Card";

const API = "https://reqres.in/api/users?page=1";
function App() {
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);
  const [isDataFetch, setisDataFetch] = useState(false);

  const fetchUser = async () => {
    setisBtnClick(true);
    await fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setInterval(() => {
          setisDataFetch(true);
        }, 2000);
      });
  };
  return (
    <div className="App">
      <Navbar getUser={fetchUser} />
      {isBtnClick ? (
        isDataFetch ? (
          <Card person={users} />
        ) : (
          <Loader />
        )
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
