
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

import './styles/App.css';
import Prac1 from './Prac1';
import CssModuleComponets from './CssModuleComponents';

function App() {
    return (
        <div className="App">
            <h1>React Styling</h1>
            <hr />
            <CssModuleComponets/>
            <hr />
            <SassComponent />
            <hr />
            <StyledComponent />
            <hr />
            <Prac1/>
        </div>
    );
}

export default App;
