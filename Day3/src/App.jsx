import React from "react";
import "./App.css";

import UseEffect from "./UseEffect";
import WindowResize from "./WindowResize";
import Routing from "./Routing";


const App = () => {
  return (
    <div className="container">
      <h1 className="title">Day 3</h1>
      <div><Routing/></div>

      <div className="grid">
        <div className="card">
          <UseEffect />
        </div>

        <div className="card">
          <WindowResize />
        </div>
      </div>
    </div>
  );
};

export default App;