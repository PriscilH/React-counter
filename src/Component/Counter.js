import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div>
    <div className="Counter">
      <button className="Moins"
        // ATTENTION le click doit toujours contenir une DECLARATION de fonction
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <buttondiv className="buttonCount">{counter}</buttondiv>
    <button className="Plus"
        onClick={() => {
            setCounter(counter + 1);
        }}
      >
        +
      </button>
      
    </div>
    <div className="Reset">
    <button
      className="buttonReset"
      onClick={() => {
        setCounter(0);
      }}
    >
      Reset
    </button>
    </div>
    <footer className="Footer">
        <p>
          Made with <span className="bold">React</span> at{" "}
          <span className="bold">Le Reacteur</span> by{" "}
          <span className="bold"> Priscil</span>
        </p>
      </footer>
    </div>

  );
};
  export default Counter;