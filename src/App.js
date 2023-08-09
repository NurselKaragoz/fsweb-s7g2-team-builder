import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./companents/Form";

function App() {
  const [memberLists, setMemberLists] = useState([]);
  const memberAdd = (member) => setMemberLists([...memberLists, member]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Form memberAdd={memberAdd} />
        <h2>Takım Üyeleri</h2>
        <ul className="App-liste">
          {memberLists.map((member) => (
            <li>
              {member.name} {member.email} {member.job}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
