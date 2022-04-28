import React from "react";
import TextFlipper from "../elements/TextFlipper";
import CodingCard from "./Cards/CodingCard";
import "./MainSection.css";

const MainSection = (props) => {
  const showResume = () => {
    console.clear();
    console.group(
      "resume is now available. This is a temporary resume and will be removed soon. Thanks for visiting."
    );
    // setTimeout(() => {
    // 	alert('Sorry currenlty resume is not available. As soon as I complete that I will upload it here.');
    // 	console.group('Thanks for visiting. Explore The Website');
    // }, 500);

    fetch(
      "https://raw.githubusercontent.com/sobhanbera/portfolio/7be9c517da29480307065c667ddea11d25fc27ed/src/assets/files/Sobhan%20Bera's%20Resume.pdf"
    )
      .then((res) => {
        res
          .blob()
          .then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = "Sobhan Bera's CV.pdf";
            a.click();
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  return (
    <div className={`main-home ${props.theme}`}>
      <div className="main-home-section">
        <h2>Hi, Geeks. I am Sobhan Bera.</h2>
        <TextFlipper theme={props.theme} />
        <p>
          Welcome to this website. This website is portfolio of mine Here you
          can know about me in breif Scroll Up To know more about me.
        </p>
        <div>
          <button onClick={showResume}>Resume</button>
        </div>
      </div>
      <CodingCard theme={props.theme} />
    </div>
  );
};

export default MainSection;
