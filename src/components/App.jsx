import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./panelBody.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container panelBody">
        <header>
          <h1>Caluculator</h1>
        </header>
        <br />
        <from>
          <input
            className="inputCss"
            type="text"
            value={result}
            ref={inputRef}
          />
        </from>
        <br />

        <div className="rowPad">
          <button className="btn btn-dark" name="1" onClick={handleClick}>
            1
          </button>
          <button className="btn btn-dark" name="2" onClick={handleClick}>
            2
          </button>
          <button className="btn btn-dark" name="3" onClick={handleClick}>
            3
          </button>
          <button className="btn btn-primary" name="+" onClick={handleClick}>
            +
          </button>
          <button className="btn btn-primary" name="(" onClick={handleClick}>
            (
          </button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark" name="4" onClick={handleClick}>
            4
          </button>
          <button className="btn btn-dark" name="5" onClick={handleClick}>
            5
          </button>
          <button className="btn btn-dark" name="6" onClick={handleClick}>
            6
          </button>
          <button className="btn btn-primary" name="-" onClick={handleClick}>
            -
          </button>
          <button className="btn btn-primary" name=")" onClick={handleClick}>
            )
          </button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark" name="7" onClick={handleClick}>
            7
          </button>
          <button className="btn btn-dark" name="8" onClick={handleClick}>
            8
          </button>
          <button className="btn btn-dark" name="9" onClick={handleClick}>
            9
          </button>
          <button className="btn btn-primary" name="*" onClick={handleClick}>
            *
          </button>
          <button className="btn btn-primary" name="%" onClick={handleClick}>
            %
          </button>
        </div>

        <div className="rowPad">
          <button className="btn btn-dark" name="0" onClick={handleClick}>
            0
          </button>
          <button className="btn btn-dark" name="." onClick={handleClick}>
            .
          </button>
          <button className="btn btn-primary" name="^" onClick={handleClick}>
            ^
          </button>
          <button className="btn btn-info" id="backspace" onClick={backspace}>
            C
          </button>
        </div>

        <div className="rowPad">
          <button className="btn btn-info" id="result" onClick={calculate}>
            result
          </button>
          <button className="btn btn-info" id="clearall" onClick={clear}>
            clearall
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
