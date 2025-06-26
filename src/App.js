import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // 在组件中声明输入框的状态
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {/* 保留旋转 Logo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* 输入框替换原有文字 */}
<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
  <span style={{ marginRight: "6px", fontSize: "20px" }}>@</span>
  <input
    type="text"
    placeholder="请输入用户名"
    value={username}
    onChange={e => setUsername(e.target.value)}
    style={{
      padding: "8px 12px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "none"
    }}
  />
</div>

      </header>
    </div>
  );
}

export default App;
