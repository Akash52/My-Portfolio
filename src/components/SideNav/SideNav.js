import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars0.githubusercontent.com/u/31063892?s=460&u=3d25d6c59c176b164420acc86c678e893cb8732e&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Akash Chauhan</h2>
            <p className="subtitle">"A Coder Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};