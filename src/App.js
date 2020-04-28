import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationURL from "./router/NavigationURL";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavigationURL />
      </Router>
    </div>
  );
}

export default App;
