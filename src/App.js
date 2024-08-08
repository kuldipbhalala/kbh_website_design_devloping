import logo from './logo.svg';
import Headerpage from './Header/Headerpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { Mywebcontext } from './mywebcontext/Mywebcontext';
import Checkout from './cart/Checkout';
function App() {
  return (
    <Mywebcontext>
      <div className="App">
        <BrowserRouter>
          <Headerpage />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Mywebcontext>
  );
}

export default App;
