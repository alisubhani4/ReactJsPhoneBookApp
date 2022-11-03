import { useState } from "react";

import AddContact from "./pages/AddContact";
import AllContacts from "./pages/AllContacts";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <AddContact addUser={addUser} />
      <AllContacts users={users} />
    </div>
  );
}

export default App;
