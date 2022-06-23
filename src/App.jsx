import "./App.css";
import GooeyBG from "./components/GooeyBG/GooeyBG";
import Splash from "./components/Splash/Splash";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useState, useEffect } from "react";

import { MutatingDots } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <section id="bg"></section>
      {isLoading ? (
        <section id="loader">
          <MutatingDots
            height="100"
            width="100"
            color="#ff7b00"
            ariaLabel="loading"
          />
        </section>
      ) : (
        <>
          <GooeyBG />
          <Splash />
        </>
      )}
    </div>
  );
}

export default App;
