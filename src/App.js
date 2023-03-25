import logo from "./logo.svg";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Banner from "./Components/Banner/Banner";
import Feature1 from "./Components/Features/Feature1/Feature1";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <Feature1></Feature1>
    </div>
  );
}

export default App;
