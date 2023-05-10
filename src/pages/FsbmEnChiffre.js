import React from 'react';
import Navbar from '../composants/Navbar';
import Sidebar from '../composants/Sidebar';
//import MyGrid from '../composants/MyGrid';
import HorizontalScrollList from './../composants/HorizontalScrollList';
import logo_Fsbm from './../images/logo_FSBM.jpg';

const FsbmEnChiffre = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <h1>Fsbm en chiffre</h1>
      <img src={logo_Fsbm}></img>
   
      <div>
  <h1>Ma page</h1>
  <HorizontalScrollList />
</div>
      </div>
      
  );
};

export default FsbmEnChiffre;