import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import StringType from './StringType';
import WindowWidth from './WindowWidth';
import Context from './Context';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/stringtype" element={<StringType/>} />
        <Route path="/windowwidth" element={<WindowWidth/>} />
        <Route path="/context" element={<Context/>} />
      </Routes>
    </div>
  );
}

export default App;
