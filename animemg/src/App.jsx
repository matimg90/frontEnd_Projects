import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Anime from './Pages/Anime';
import React from 'react';
import Login from './Components/Login';
import Chat from './Pages/Chat';

export const AppContext = React.createContext("");

function App() {
const [currentUser, setCurrentUser] = React.useState();
const [openLogin, setOpenLogin] = React.useState(false);
//Persist user data after refresh
// React.useEffect(() => {
//   const data = window.localStorage.getItem('USER_DATA');
//   if(data !== null){setCurrentUser(JSON.parse(data));}
// }, []);

// React.useEffect(() => {
//   window.localStorage.setItem('USER_DATA', JSON.stringify(currentUser));
// }, [currentUser]);


  return (
    <AppContext.Provider value={{login:[openLogin, setOpenLogin],user:[currentUser, setCurrentUser]}}>
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/watch=" element={<Watch/>}>
            <Route path={`":url"`} element={<Watch/>}></Route>
            <Route path="" element={<Watch/>}></Route>
          </Route>
          <Route path="/anime" element={<Anime/>}>
            <Route path=":name" element={<Anime/>}></Route>
          </Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
        <Login></Login>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;
