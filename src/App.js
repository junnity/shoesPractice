import logo from './logo.svg';
import './App.css';
import productData from './productData';
import ShoesList from './ShoesList';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';



function App() {

  let [shoes,setShoes] = useState(productData)
  let [shoePic,setShoePic] = useState(['https://codingapple1.github.io/shop/shoes1.jpg','https://codingapple1.github.io/shop/shoes2.jpg','https://codingapple1.github.io/shop/shoes3.jpg'])


  return (
    <div className="App">

      {/* 내브바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대표이미지 */}
      <div className="main-bg"></div> 

      {/* 상품리스트 */}
      <div className="container">
        <div className="row">
          {shoes.map(function(a,i){
            return (
              <ShoesList num = {i} shoes = {shoes} shoePic = {shoePic}></ShoesList>
            )
          })}

          
        </div>
      </div>
    
    </div>
  );
}



export default App;

