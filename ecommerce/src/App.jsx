import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import Detail from './pages/Detail.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/shop/ :title" element={<Shop/>}></Route>
          <Route path="/detail/:title" element={<Detail/>}></Route>
          {/* <Route path="/users/:id" element={<Users/>}></Route> */}
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
