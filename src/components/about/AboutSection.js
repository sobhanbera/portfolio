import React from "react";
import "./AboutSection.css";
// import MyImage from "../../assets/imgs/android.png";

const About = (props) => {
  return (
    <div id="about" className={`main-about ${props.theme}`}>
      <div className={`blur-background ${props.theme}`}>
        <div className="semi-card">
          <h3>About Me!</h3>
          <p>
            {`Hello, Geeks! I am Sobhan Bera,\n\n Very enthusiastic about open-source
            development. I am very passionate to learn new things quickly. I am
            an experienced full-stack web developer and an android developer.
            Besides this, I enjoy solving the Rubik cube and cycling.\n`}
          </p>
          <h4>Tech-Fields</h4>
          <ul>
            <li>Android Development</li>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Linux Development</li>
          </ul>
          <h4>Language</h4>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>And Many More...</li>
          </ul>
          <h4>Tech-Stack</h4>
          <ul>
            <li>React.JS</li>
            <li>React Native</li>
            <li>Next.JS</li>
            <li>Express.JS</li>
          </ul>
          <h4>Tools</h4>
          <ul>
            <li>Git, GitHub</li>
            <li>Arch Linux</li>
            <li>Neovim</li>
            <li>Android Studio</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>And Many More...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
