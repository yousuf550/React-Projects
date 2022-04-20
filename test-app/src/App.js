import { Message } from "./Message";
import { MUI } from "./MUI";
import NavBar from "./Components/NavBar";
import InfoPanel from "./Components/InfoPanel";
import { useState } from "react";

function App() {
  let customStyle = {
    background: "#F0F8FF	",
    padding: "10px",
    margin: "10px 0",
}
  let [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <Message counter={count} />
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <MUI />
      <div style={customStyle}>
        <NavBar />
        <InfoPanel />
      </div>
    </div>
  );
}

export default App;
