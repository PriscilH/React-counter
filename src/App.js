import './App.css';
import Counter from './Component/Counter';
import image from "./image/favicon.png";

function App() {
  return (
    <div className='App'>
      <header>
        <div className='Header'>
        <img src={image} alt="img"></img>
        <h1>REACT COUNTER</h1>
        </div>
      </header>
      <Counter />
    </div>
  );
};

export default App;
