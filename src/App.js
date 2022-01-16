import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Portal from "./components/portal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rundowns from "./components/Rundowns";
function App() {
  return (


    <Router>


      <div className="App">


        <div id="navbar">
          <Nav />
        </div>
        <Switch>

          <div id="homepage">
            <Route path='/' component={Home} exact />
            <Route path='/rundowns' component={Rundowns} />
          </div>



        </Switch>

      </div>

    </Router>

  );
}

export default App;
