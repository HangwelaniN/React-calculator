import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="display ">00</div>

        <div className="calculator">
          <input type="Button" className="color" value="AC" />
          <input type="Button" className="color" value="DE" />
          <input type="Button" className="color" value="." />
          <input type="Button" className="color" value="/" />
        </div>
        <div className="calculator">
          <input type="Button" value="7" />
          <input type="Button" value="8" />
          <input type="Button" value="9" />
          <input type="Button" className="color" value="*" />
        </div>
        <div className="calculator">
          <input type="Button" value="4" />
          <input type="Button" value="5" />
          <input type="Button" value="6" />
          <input type="Button" className="color" value="-" />
        </div>
        <div className="calculator">
          <input type="Button" value="1" />
          <input type="Button" value="2" />
          <input type="Button" value="3" />
          <input type="Button" className="color" value="+" />
        </div>
        <div className="calculator">
          <input type="Button" value="0" />
          <input type="Button" value="00" />
          <input type="Button" className="equal" value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
