import React from "react";

function Splash() {
  return (
    <main id="page">
      <section id="info-container">
        <section id="info-section">
          <h1 id="info">
            Hi, I'm Emily. I'm a full stack and React engineer. <br />
            Come work with me!
          </h1>

          <section id="buttons">
            <button className="link" id="work">
              Work
            </button>
            <button className="link" id="about">
              About
            </button>
            <button className="link" id="contact">
              Contact
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Splash;
