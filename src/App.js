import logo from "./logo.svg";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Banner from "./Components/Banner/Banner";
import Feature1 from "./Components/Features/Feature1/Feature1";
import Footer from "./Components/Footer/Footer";
import Feature2 from "./Components/Features/Feature2/Feature2";
import Feature3 from "./Components/Features/Feature3/Feature3";
import Feature4 from "./Components/Features/Feature4/Feature4";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Feature3></Feature3>
      <Feature4></Feature4>
      <Footer></Footer>
    </div>
  );
}

export default App;
