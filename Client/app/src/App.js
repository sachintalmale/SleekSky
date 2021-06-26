import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Logo from './components/Logo';
import Footer from './components/Footer';

const App = () => { 
  return (
    <div className='app'>
      <div className='logo'><Logo/></div>
      <div className='header'><Header/></div>
      <div className='sidebar'><SideBar/></div>
      <div className='content'><Content/></div>
      <div className='footer'><Footer/></div>
      
    </div>
  );
}

export default App;
