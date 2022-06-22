import React from "react";
import Goo from "gooey-react";

function GooeyBG() {
  function generateRandom() {
    const rand = Math.random() * 15;

    return `${rand + 180}vh`;
  }

  const color1 = "#ffbe0b";
  const color2 = "#ff006e";

  return (
    <Goo width="100vw" height="100vh" className="background-goo">
      <svg className="goo-container">
        {/* verticals */}
        {/* color 1 */}
        <circle
          cx="12%"
          cy={generateRandom()}
          fill={color1}
          r="31vw"
          className="vert8"
        />
        <circle
          cx="85%"
          cy={generateRandom()}
          fill={color1}
          r="33vw"
          className="vert8"
        />
        <circle
          cx="29%"
          cy={generateRandom()}
          fill={color1}
          r="32vw"
          className="vert8"
        />
        <circle
          cx="87%"
          cy={generateRandom()}
          fill={color1}
          r="57vw"
          className="vert12"
        />
        <circle
          cx="4%"
          cy={generateRandom()}
          fill={color1}
          r="34vw"
          className="vert8"
        />
        <circle
          cx="15%"
          cy={generateRandom()}
          fill={color1}
          r="55vw"
          className="vert12"
        />
        {/* color 2 */}
        <circle
          cx="60%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="vert10"
        />
        <circle
          cx="50%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="vert10"
        />
        {/* color 3 */}
        <circle
          cx="66%"
          cy={generateRandom()}
          fill={color2}
          r="53vw"
          className="vert12"
        />
        <circle
          cx="49%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="vert8"
        />
        <circle
          cx="3%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="vert10"
        />
        <circle
          cx="43%"
          cy={generateRandom()}
          fill={color2}
          r="55vw"
          className="vert12"
        />
        <circle
          cx="78%"
          cy={generateRandom()}
          fill={color2}
          r="55vw"
          className="vert12"
        />
        {/* diagonals right*/}
        {/* color 1 */}
        {/* color 2 */}
        {/* color 3 */}
        <circle
          cx="60%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="diagR8"
        />
        <circle
          cx="66%"
          cy={generateRandom()}
          fill={color2}
          r="33vw"
          className="diagR10"
        />
        <circle
          cx="49%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagR12"
        />{" "}
        /
        <circle
          cx="3%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagR8"
        />
        <circle
          cx="43%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagR12"
        />
        <circle
          cx="78%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagR10"
        />
        <circle
          cx="85%"
          cy={generateRandom()}
          fill={color1}
          r="39vw"
          className="diagR10"
        />
        <circle
          cx="29%"
          cy={generateRandom()}
          fill={color1}
          r="31vw"
          className="diagR8"
        />
        <circle
          cx="87%"
          cy={generateRandom()}
          fill={color1}
          r="37vw"
          className="diagR12"
        />
        <circle
          cx="12%"
          cy={generateRandom()}
          fill={color1}
          r="31vw"
          className="diagR10"
        />
        <circle
          cx="4%"
          cy={generateRandom()}
          fill={color1}
          r="34vw"
          className="diagR10"
        />
        <circle
          cx="15%"
          cy={generateRandom()}
          fill={color1}
          r="35vw"
          className="diagR12"
        />
        <circle
          cx="50%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="diagR8"
        />
        {/* diagonal left */}
        {/* color 1 */}
        {/* color 2 */}
        {/* color 3 */}
        <circle
          cx="3%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagL8"
        />
        <circle
          cx="43%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagL10"
        />
        <circle
          cx="78%"
          cy={generateRandom()}
          fill={color2}
          r="31vw"
          className="diagL8"
        />
        <circle
          cx="85%"
          cy={generateRandom()}
          fill={color1}
          r="39vw"
          className="diagL10"
        />
        <circle
          cx="29%"
          cy={generateRandom()}
          fill={color1}
          r="31vw"
          className="diagL8"
        />
        <circle
          cx="87%"
          cy={generateRandom()}
          fill={color1}
          r="37vw"
          className="diagL8"
        />
        <circle
          cx="12%"
          cy={generateRandom()}
          fill={color1}
          r="31vw"
          className="diagL8"
        />
        <circle
          cx="4%"
          cy={generateRandom()}
          fill={color1}
          r="34vw"
          className="diagL8"
        />
        <circle
          cx="15%"
          cy={generateRandom()}
          fill={color1}
          r="35vw"
          className="diagL8"
        />
        <circle
          cx="50%"
          cy={generateRandom()}
          fill={color2}
          r="35vw"
          className="diagL8"
        />
      </svg>
    </Goo>
  );
}

export default GooeyBG;
