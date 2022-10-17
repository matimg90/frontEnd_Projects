import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import Detail from './pages/Detail.jsx';
import Footer from './components/Footer';
import { createContext } from 'react';
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const UserContext = createContext(null);


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value={{value: [cartItems,setCartItems],value2: [searchTerm, setSearchTerm]} }>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/shop/:title" element={<Shop/>}></Route>
          <Route path="/detail/:title" element={<Detail/>}></Route>
          {/* <Route path="/users/:id" element={<Users/>}></Route> */}
        </Routes>
        </UserContext.Provider>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;