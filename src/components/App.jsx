import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./panelBody.css";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container panelBody">
        <header>
          {" "}
          <h1>Caluculator</h1>
        </header>
        <br />
        <div className="Pad">
          <input type="text" className="inputCss" />
        </div>
        <br />
        <div className="Pad">
          <input type="text" className="resultCss" readOnly />
        </div>
        <br />

        <div className="rowPad">
          <button className="btn btn-dark">1</button>
          <button className="btn btn-dark">2</button>
          <button className="btn btn-dark">3</button>
          <button className="btn btn-primary">+</button>
          <button className="btn btn-primary">(</button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark">4</button>
          <button className="btn btn-dark">5</button>
          <button className="btn btn-dark">6</button>
          <button className="btn btn-primary">-</button>
          <button className="btn btn-primary">)</button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark">7</button>
          <button className="btn btn-dark">8</button>
          <button className="btn btn-dark">9</button>
          <button className="btn btn-primary">*</button>
          <button className="btn btn-primary">%</button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark">0</button>
          <button className="btn btn-dark">.</button>
          <button className="btn btn-primary">^</button>
        </div>

        <div className="rowPad">
          <button className="btn btn-info">result</button>
          <button className="btn btn-info">clearall</button>
        </div>
      </div>
    </div>
  );
}

export default App;
