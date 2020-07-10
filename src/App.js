import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationURL from "./router/NavigationURL";
import ScrollToTop from "./router/ScrollToTop";

function App() {
<<<<<<< HEAD

=======
>>>>>>> cc07ca88cef069c0de8ccae7f69d3104a0b9c99d
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(1);
  }, 2000);
  if (count === 1) {
<<<<<<< HEAD
=======
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <NavigationURL />
        </Router>
      </div>
    );
  }
>>>>>>> cc07ca88cef069c0de8ccae7f69d3104a0b9c99d
  return (
    <div class="showbox">
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle
            class="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
<<<<<<< HEAD
  }
  return <div>LOADING....</div>;
=======
>>>>>>> cc07ca88cef069c0de8ccae7f69d3104a0b9c99d
}
export default App;
