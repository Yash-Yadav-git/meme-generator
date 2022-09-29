import React from "react";
import "../index.css";

function header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="../Images/Logo.png" alt="" className="header-logo" />
        <h1 className="header-title">Meme Generator</h1>
      </div>
      <div className="project-title">
        <h4 className="project-titles">React  Project</h4>
      </div>
    </header>
  );
}

export default header;
