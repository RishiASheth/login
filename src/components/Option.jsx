import React from "react";
import "../styles/Option.css";

const Option = () => {
  return (
    <div className="option-container">
      <header>
        <img src="/logo.png" alt="Website Logo" className="logo" />
        <h1>Welcome to Our Service</h1>
      </header>
      <div className="buttons">
        <a href="https://example-stream.com" target="_blank" rel="noopener noreferrer">
          <button>Stream</button>
        </a>
        <a href="https://example-view.com" target="_blank" rel="noopener noreferrer">
          <button>View</button>
        </a>
      </div>
    </div>
  );
};

export default Option;
