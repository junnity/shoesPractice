import './App.css';
import productData from './productData';
import ShoesList from './ShoesList';
import DetailPage from './pages/detail';
import NowLoading from './NowLoading';
import Cart from './pages/Cart'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';



function App() {

  let [shoes,setShoes] = useState(productData)
  let [shoePic,setShoePic] = useState(['https://codingapple1.github.io/shop/shoes1.jpg','https://codingapple1.github.io/shop/shoes2.jpg','https://codingapple1.github.io/shop/shoes3.jpg'])
  let navigate = useNavigate();
  let [loadingSwc, setLoadingSwc] = useState(false)
  let [numClick, setNumClick] = useState(2)
  let [clickArt,setClickArt] = useState(false)



  useEffect(()=>{

  },[loadingSwc])

  return (
    <div className="App">

      {/* 내브바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대표이미지 */}
      <div className="main-bg"></div>

      <Link to="/" style={{margin:"30px"}}>홈</Link>
      <Link to="/detail"style={{margin:"30px"}}>상세페이지</Link>

      {/* Routes */}
      <Routes>
        <Route path='/detail/:id' element={<div>
            <DetailPage navigate={navigate} shoes={shoes}/>
          </div>} />
          

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
            <button onClick={()=>{
        setLoadingSwc(true)
        setNumClick(numClick+1)
        console.log(numClick)
        if(numClick < 4){
          return(
            axios.get('https://codingapple1.github.io/shop/data'+(numClick)+'.json')
         .then((결과)=>{
            let copy = [...shoes, ...결과.data];
            setShoes(copy)
            console.log(결과.data)
            setLoadingSwc(false)
           
          })
          .catch(()=>{
              console.log('실패!')
              setLoadingSwc(false)
          })
          )
        }
        else{
          return(
            setClickArt(true)+
            setLoadingSwc(false)
          )
        }
        }}>상품 더보기</button>
        
      {loadingSwc === true ? <NowLoading/> : null}
      {clickArt === true ? <div>더이상 상품이 없습니다.</div> : null}
          </>
        }/>
        {/* 404페이지 */}
        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
        <Route path='/cart' element={<div><Cart/></div>}/>
      </Routes>


      
    
    </div>
  );
}


export default App;

