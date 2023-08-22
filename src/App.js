import './App.css';
import productData from './productData';
import ShoesList from './ShoesList';
import DetailPage from './pages/detail';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import styled from 'styled-components';

function App() {

  let [shoes,setShoes] = useState(productData)
  let [shoePic,setShoePic] = useState(['https://codingapple1.github.io/shop/shoes1.jpg','https://codingapple1.github.io/shop/shoes2.jpg','https://codingapple1.github.io/shop/shoes3.jpg'])
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* 내브바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대표이미지 */}
      <div className="main-bg"></div>

      <Link to="/" style={{margin:"30px"}}>홈</Link>
      <Link to="/detail"style={{margin:"30px"}}>상세페이지</Link>

      {/* Routes */}
      <Routes>
        <Route path='/detail/:id' element={<div><DetailPage navigate={navigate} shoes={shoes} shoePic={shoePic}/></div>} />

        {/* 홈페이지 */}
        <Route path="/" element={
          <>
            {/* 상품리스트 */}
            <div className="container">
            <div className="row">
             {shoes.map(function(a,i){
              return (
                <ShoesList  num = {i} shoes = {shoes} shoePic = {shoePic} navigate={navigate}></ShoesList>
              )
            })}          
            </div>
            </div>
          </>
        }/>
        {/* 404페이지 */}
        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>
    
    </div>
  );
}


export default App;

