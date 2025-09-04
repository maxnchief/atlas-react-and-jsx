import React from "react";
import dayImg from "../assets/day.svg";
import eveningImg from "../assets/evening.svg";
import nightImg from "../assets/night.svg";

function Greeting() {
  const now = new Date();
  const hour = now.getHours();
  let imgSrc, text;

  if (hour >= 6 && hour < 12) {
    imgSrc = dayImg;
    text = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    imgSrc = dayImg;
    text = "Good Afternoon!";
  } else if (hour >= 17 && hour < 21) {
    imgSrc = eveningImg;
    text = "Good Evening!";
  } else {
    imgSrc = nightImg;
    text = "Good Night!";
  }

  return (
    <h1 className="greeting">
      <img src={imgSrc} alt="greeting icon" style={{ verticalAlign: "middle", marginRight: "0.5em" }} />
      {text}
    </h1>
  );
}

export default Greeting;
