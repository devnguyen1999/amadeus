import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationURL from "./router/NavigationURL";
import ScrollToTop from "./router/ScrollToTop";
import store from './store.js';
import { Provider } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(1);
  }, 2000);
  if (count === 1) {
    return (
      <Provider store={store}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <NavigationURL />
        </Router>
      </div>
      </Provider>
    );
  }
  return (
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx={50}
            cy={50}
            r={20}
            fill="none"
            strokeWidth={2}
            strokeMiterlimit={10}
          />
        </svg>
      </div>
      <h1 className="text-center text-white mt-3">Amadeus Shop</h1>
    </div>
  );
}
export default App;
