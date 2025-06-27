import React, { useState } from "react";

function UserSearch({ onSearch, onChange }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleSearch = () => {
    if (!username) return;
    if (onSearch) {
      onSearch(username);
    }
    // clear input after search
    setUsername("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
      <span style={{ marginRight: "6px", fontSize: "20px" }}>@</span>
      <input
        type="text"
        placeholder="请输入用户名"
        value={username}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: "8px", fontSize: "18px", cursor: "pointer" }}
      >
        🚽
      </button>
    </div>
  );
}

export default UserSearch;
