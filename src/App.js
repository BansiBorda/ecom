
import './App.css';
import Home from './Component/Home';
import Footer from './Component/Footer'
import Product from './Component/Cart';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import About from './Component/Cart'
import Contact from './Component/Contact'
import TodoList from './Component/TodoList'

import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import ABc from './Component/ABc';




function App() {
  
 
  return (
    <>
    
        
        <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route exact path="/home"  element={<Home/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/cart' element={<ABc/>}/>
        <Route exact path='/todo' element={<TodoList/>}/>
       
       
        
        <></>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
     
     <Footer/>

     
     
      </BrowserRouter>
    </>
  );
}

export default App;
