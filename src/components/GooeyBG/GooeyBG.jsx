import React from "react";
import Goo from "gooey-react";

function GooeyBG() {
  function generateRandomCY() {
    const rand = Math.random() * 50;

    return `${rand + 130}vh`;
  }
  function generateRandomSize() {
    const rand = Math.random() * 15;

    return `${rand + 5}vw`;
  }

  function generateRandomAnimation() {
    const possibles = [
      "vert8",
      "vert10",
      "vert12",
      "diagR8",
      "diagR10",
      "diagR12",
      "diagL8",
      "diagL10",
      "diagL12",
    ];
    const rand = Math.floor(Math.random() * possibles.length);

    return possibles[rand];
  }
  // function generateColor() {
  //   const possibles = [];
  //   const rand = Math.floor(Math.random() * possibles.length);

  //   return possibles[rand];
  // }

  // const color1 = "#ffbe0b";
  // const color2 = "#ff006e";
  const color1 = "#F4D06F";
  const color2 = "#FF9933";
  return (
    <Goo width="100vw" height="100vh" className="background-goo">
      <svg
        className="goo-container"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        {/* verticals */}
        <circle
          cx="29%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="85%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="87%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="4%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="15%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="60%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        {/* <circle
          cx="20%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className="vert10"
        /> */}
        <circle
          cx="66%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        {/* <circle
          cx="49%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="1%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className="vert10"
        />
        <circle
          cx="43%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="78%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        /> */}
        {/* diagonals right*/}
        <circle
          cx="60%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="66%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="49%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />{" "}
        /
        <circle
          cx="1%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="43%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="78%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="85%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        {/* <circle
          cx="29%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="87%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="12%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="4%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="15%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="20%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        /> */}
        {/* diagonal left */}
        <circle
          cx="1%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="43%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="78%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="85%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="29%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="87%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        {/* <circle
          cx="12%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="4%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="15%"
          cy={generateRandomCY()}
          fill={color1}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
        <circle
          cx="20%"
          cy={generateRandomCY()}
          fill={color2}
          r={generateRandomSize()}
          className={generateRandomAnimation()}
        />
           */}
      </svg>
    </Goo>
  );
}

export default GooeyBG;
