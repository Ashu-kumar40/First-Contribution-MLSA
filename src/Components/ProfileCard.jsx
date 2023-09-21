import React from 'react'
import profileImage from '../assets/profile.png'
import githubIcon from '../assets/github.png'


export default function ProfileCard({ name, username, imgURL }) {
    return <>
        <div>
            
            <div className="contributors-container">
                <div className="contributor-profile">
                    <div className="sec-1">
                        <img className="profile-image" src={imgURL} alt="Profile" />
                        <div className="name-content">
                            <h3 className="Profile-name">{name}</h3>
                            <p className="username">{username}</p>
                        </div>
                    </div>

                    <a href={`https://github.com/${username}`} className="profile-btn" target='blank'>
                        <img className="github-btn" src={githubIcon} alt="github" />
                        <span>View Profile</span>
                    </a>

                </div>
            </div>
        </div>
    </>
}