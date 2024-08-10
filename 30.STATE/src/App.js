
import CounterFunction from './CounterFunction';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import Prac1 from './Prac1';
import Prac2 from './Prac2';

function App() {
  return (
 <div>  
  <Counter/>  
  <SayFunction/>
  <CounterFunction value={"plus 1"}/>
  <Prac1/>
  <Prac2/>
  </div>  
  );
}

export default App;
