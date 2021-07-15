import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about__container">
            <span>Movie Service App</span><br/>
            <span>Front-end developer</span>
            <ul>
                <li>Developed a movie web service that exhibits features such as title, summary, and poster using React.js</li>
                <li>Utilized Axios to fetch data from yts-proxy API</li>
                <li>Implemented React Router to navigate through different pages without refreshing</li>
                <li>Uploaded application on GitHub</li>
            </ul>
        </div>
    );
}

export default About;