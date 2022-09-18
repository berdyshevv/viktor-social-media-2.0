import "./App.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const onButtonClickNext = () => {
    setIndex((index) => index + 1);
  };

  return (
    <div className="App">
      {index}
      <div>
        <button onClick={onButtonClickNext}>next</button>
      </div>
    </div>
  );
}

export default App;
