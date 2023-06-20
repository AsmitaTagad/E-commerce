import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Navbar} from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Product } from './components/product/Product';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
     </Routes>
    </div>                                                
  );
}

export default App;
