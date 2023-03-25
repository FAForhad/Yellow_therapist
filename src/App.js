import logo from "./logo.svg";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Banner from "./Components/Banner/Banner";
import Feature1 from "./Components/Features/Feature1/Feature1";
import Footer from "./Components/Footer/Footer";
import Feature2 from "./Components/Features/Feature2/Feature2";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Footer></Footer>
    </div>
  );
}

export default App;
