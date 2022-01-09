import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up-component';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>      
          <Route path='/shop' element={<ShopPage/>}/>      
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>      
        </Routes>
      </Router>
    </div>
  );
}

export default App;