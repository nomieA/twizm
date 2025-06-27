import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserSearch from "./components/UserSearch";

function App() {
  const [username, setUsername] = useState("");


  const handleSearch = (name) => {
    // example request to backend or twitter API
    fetch(`/api/users/${encodeURIComponent(name)}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const handleChange = (value) => {
    setUsername(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* 保留旋转 Logo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* 输入框与按钮组件 */}
        <UserSearch onSearch={handleSearch} onChange={handleChange} />


      </header>
    </div>
  );
}

export default App;
