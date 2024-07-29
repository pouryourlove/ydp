
import './App.css';
import Button from './Button';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './classComponent';

function App() {
  return (
    <>
    <ClassComponent/>
    <ClassComponent name ="sesac 6기"/>
    <hr />

    <FunctionComponent/>
    <FunctionComponent name="sesac 6기"/>
    <hr />

    <Button link="https://www.google.com">Google</Button>
    </>
  );
}

export default App;
