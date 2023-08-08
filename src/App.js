import "./index.css";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(100);
  let styles = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className="App">
      <div className="controls">
        <h3 onClick={() => setFontSize(fontSize - 100)}>-</h3>
        <h3 onClick={() => setFontSize(fontSize + 100)}>+</h3>
      </div>

      <h1 style={styles}>hello.</h1>
    </div>
  );
}

export default App;
