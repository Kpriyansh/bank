import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar';
import '../node_modules/jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import Register from './Components/Register';
import 'tachyons';


const App = () => {
  const [username, setUsername] = useState('');

  const [curRoute, setRoute] = useState('signin');

  const loadUser = (data) => {
    setUsername(data.username);

  }
  
  useEffect(() => {
    // checkAutoLogin();
    const token = localStorage.getItem('dashboard');
    
    if (token==null||token.length<=2) {
    
      localStorage.removeItem('dashboard');
      handleRouteChange('signin');
      
    }
    else{
    let name = JSON.parse(token);
    setUsername(name);
    handleRouteChange('home');
    }
  },[])

  useEffect(() => {
    window.localStorage.setItem('dashboard', JSON.stringify(username));
    
  })
  const handleRouteChange = (route) => {
   
    if(route!=='home'){
      localStorage.removeItem('dashboard');
      
    }
    setRoute(route);

  }
  return (
    <div>
      {curRoute === 'signin' ?
        <Signin login={() => handleRouteChange('home')} loadUser={loadUser} register={() => handleRouteChange('register')} />
        : curRoute === 'register' ?
          <Register login={() => handleRouteChange('signin')} signin={() => handleRouteChange('home')} loadUser={loadUser} />
          :
          <div>
            <NavBar logout={() => handleRouteChange('signin')} />
            <Header username={username} />
            <Footer />
          </div>
      }

    </div>
  );
}

export default App;
