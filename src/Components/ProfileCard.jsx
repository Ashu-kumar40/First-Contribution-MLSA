import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.png";
import githubIcon from "../assets/github.png";

export default function ProfileCard({ username }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((result) => setInfo(result));
    };
    getData();
    // console.log(info)
  }, []);

  return (
    <div className="contributors-container">
      <div className="contributor-profile">
        <div className="sec-1">
          <img className="profile-image" src={info.avatar_url} alt="Profile" />
          <div className="name-content">
            <h3 className="Profile-name">{info.name}</h3>
            <p className="username">{username}</p>
          </div>
        </div>

        <a
          href={`https://github.com/${username}`}
          className="profile-btn"
          target="blank"
        >
          <img className="github-btn" src={githubIcon} alt="github" />
          <span>View Profile</span>
        </a>
      </div>
    </div>
  );
}
