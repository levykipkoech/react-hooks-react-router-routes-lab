import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route path="/" exact component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
