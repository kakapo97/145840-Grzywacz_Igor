import React, {useState} from 'react';
import './App.css';

const Counter = (props: any) => {
  const {value} = props;

  return (
    <>
    <span>{value}</span>
    {value >= 10 && <h1> Staph clicking!</h1>}
    </>
  )
};

const App = () => {
  const [counter, setCounter ] = useState(0);
  
  const modifyCounter:any = (amount:number) => setCounter(counter + amount);

  return (
    <div className="App">
      <button onClick={() => modifyCounter(-1)}>-</button>
      <button onClick={() => modifyCounter(1)}>+</button>
      <Counter value={counter}/>
    </div>
  )
};

export default App;
