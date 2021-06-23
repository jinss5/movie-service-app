import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about__container">
            <span>My first JS project using React.js. Front-end</span>
            <li>Developed a movie web service using React.js</li>
            <li>Utilized Axios to fetch data from yts-proxy API</li>
            <li>Implemented React Router to navigate through different pages without refreshing</li>
            <li>Uploaded application on GitHub</li>
        </div>
    );
}

export default About;