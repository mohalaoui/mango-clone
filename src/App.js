import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PubPanel from "./components/pub/PubPanel";
import Catalogue from "./pages/catalogue/Catalogue";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/cart">
            <Header />
          </Route>
          <Route path="/catalogue">
            <Header />
            <Catalogue />
          </Route>
          <Route path="/">
            <Header />
            <PubPanel />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
