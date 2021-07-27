import React from "react";
import profileImage from "./img/unnamed.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Andrey Tantsiura</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
