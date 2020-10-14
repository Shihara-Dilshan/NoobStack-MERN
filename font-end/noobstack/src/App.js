import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nevbar from "./components/Layout/Nevbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App test">
      <Nevbar />
      <Home />
    </div>
  );
}

export default App;
