import logo from './logo.svg';
import Headerpage from './components/Headerpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { Mywebcontext } from './components/mywebcontext/Mywebcontext';
function App() {
  return (
    <Mywebcontext>
    <div className="App">
      <BrowserRouter>
        <Headerpage />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Mywebcontext>
  );
}

export default App;
