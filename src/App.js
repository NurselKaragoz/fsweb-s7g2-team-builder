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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Takım Üyeleri</h2>
          <ul>
            {memberLists.map((member) => (
              <li>{member}</li>
            ))}
          </ul>
        </a>
        <Form onSubmit={memberAdd} />
      </header>
    </div>
  );
}

export default App;
