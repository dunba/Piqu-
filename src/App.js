import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Portal from "./components/portal";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (


    <Router>


      <div className="App">



        <div id="navbar">
          <Nav />
        </div>




        <div id="homepage">
          <Home />
        </div>




      </div>

    </Router>

  );
}

export default App;
