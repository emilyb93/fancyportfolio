import "./App.css";
import GooeyBG from "./components/GooeyBG/GooeyBG";
import Splash from "./components/Splash/Splash";

function App() {
  return (
    <div className="App">
      <section id="bg"></section>
      <GooeyBG />
      <Splash />
    </div>
  );
}

export default App;
