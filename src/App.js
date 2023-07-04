import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [showList, setShowList] = useState(false);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
    setShowList(true);
  };
  console.log(usersList);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {!showList ? (
        <p className="p">USERLIST ARE NOT ADDED YET</p>
      ) : (
        <UserList users={usersList} />
      )}
    </div>
  );
}

export default App;
