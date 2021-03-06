import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Portal from "./components/portal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndividualRundowns from "./components/IndividualRundowns";
import Rundowns from "./components/Rundowns";
import Requestpopup from "./components/Requestpopup";
import Announcements from "./components/Announcements";
import db from './firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import { useEffect } from "react";
import { useState } from "react";


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
            <Route path='/rundowns' exact component={Rundowns} />
            <Route path='/announcements' exact component={Announcements} />
            <Route path='/rundowns/:id' component={IndividualRundowns} />
            <Route path='/requests/:id' component={Requestpopup} />


          </div>


        </Switch>

      </div>

    </Router>

  );
}

export default App;
