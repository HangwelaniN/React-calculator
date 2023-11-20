import React, { useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState("");

  const value = (e) => {
    setResults(results + e.target.value);
  };

  const handleEqualClick = () => {
    setResults(eval(results));
  };

  return (
    <div className="App">
      <div className="main">
        <div className="display ">{results}</div>
        <div className="calculator">
          <input
            type="button"
            className="color"
            value="AC"
            onClick={(e) => setResults("")}
          />
          <input
            type="button"
            className="color"
            value="DE"
            onClick={(e) => setResults(results.slice(0, -1))}
          />
          <input type="button" className="color" value="." onClick={value} />
          <input type="button" className="color" value="/" onClick={value} />
        </div>
        <div className="calculator">
          <input type="button" value="7" onClick={value} />
          <input type="button" value="8" onClick={value} />
          <input type="button" value="9" onClick={value} />
          <input type="button" className="color" value="*" onClick={value} />
        </div>
        <div className="calculator">
          <input type="button" value="4" onClick={value} />
          <input type="button" value="5" onClick={value} />
          <input type="button" value="6" onClick={value} />
          <input type="button" className="color" value="-" onClick={value} />
        </div>
        <div className="calculator">
          <input type="button" value="1" onClick={value} />
          <input type="button" value="2" onClick={value} />
          <input type="button" value="3" onClick={value} />
          <input type="button" className="color" value="+" onClick={value} />
        </div>
        <div className="calculator">
          <input type="button" value="0" onClick={value} />
          <input type="button" value="00" onClick={value} />
          <input
            type="button"
            className="equal"
            value="="
            onClick={handleEqualClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
