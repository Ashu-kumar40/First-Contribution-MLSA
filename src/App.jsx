import React from "react";
import "./App.css";
import data from "./assets/data";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <img className="mlsa-logo" src='./src/assets/mlsa-logo.png' alt="logo" />
        <div>
        <h1 className="headline">My First Contribution</h1>
        <p className="subheading">By Ashu Kumar</p>
        </div>
        <img className="mlsa-logo avatar-logo" src='https://avatars.githubusercontent.com/u/95637428?v=4' alt="logo" />
      </div>
      <div className="card-container">
        {data.data?.map((user) => (
          <ProfileCard username={user.username} />
        ))}
      </div>
    </div>
  );
}

export default App;
