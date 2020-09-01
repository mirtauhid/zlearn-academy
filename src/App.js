import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  )
}

export default App;
