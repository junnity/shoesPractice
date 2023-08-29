import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styled-component 쓰면 CSS 파일 없어도 되는데
import styled from "styled-components";
import Nav from "react-bootstrap/Nav"




function DetailPage(props){



  let AlertBox = styled.div`
    background : yellow;
    padding : 20px;
  `

  let [count, setCount] = useState(0)
  let [알박,set알박] = useState(true)
  let [인풋내용,인풋내용변경] = useState('');
  let [탭,탭변경] = useState(0);

  let {id} = useParams();
  let paramId = props.shoes.find(function(x){
    return x.id == id
  })
  let [끝,끝변경]=useState('')

  // 라이프사이클
  useEffect(()=>{
    let a = setTimeout(()=>{끝변경("end")},10)
    return(()=>{
      끝변경('')
      clearTimeout(a)
    })
  },[])

  useEffect(()=>{
    console.log('유즈이펙트')

    setTimeout(()=>{set알박(false)} , 2000)
  }, [])

  useEffect(()=>{
    if (isNaN(인풋내용) == true){
      alert('그러지마세요')
    }
  }, [인풋내용])

    return(
    <div className={"container start "+끝}>
     {알박 == (true) ? <AlertBox id="알박">2초안에 사면 할인!!</AlertBox> : null}
     <div className="row">
      <div className="col-md-6">
       <img src={'https://codingapple1.github.io/shop/shoes'+(Number(id)+1)+'.jpg'} width="100%" onClick={()=>{ setCount(count+1)}} />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{paramId.title}</h4>
        <p>{paramId.content}</p>
        <p>{paramId.price}</p>
        <button className="btn btn-danger" >주문하기</button>
        <button onClick={()=>{props.navigate(-1)}}>뒤로가기</button>
        <input onChange={(e)=>{ 인풋내용변경(e.target.value)}} />
      </div>
      <div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{탭변경(0)}}>탭0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{탭변경(1)}}>탭1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{탭변경(2)}}>
            탭2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      </div>
      <탭함수 탭={탭} />
     </div>
    </div>
    )
}

function 탭함수({탭}){
  let [끝,끝변경] = useState('')


  useEffect(()=>{
    let a = setTimeout(()=>{끝변경('end')},10)
    return ()=>{
      clearTimeout(a)
      끝변경('')
    }
  },[탭])

  return (<div className={"start "+끝}>
    {[<div>탭0</div>,<div>탭1</div>,<div>탭2</div>][탭]}</div>)
}

export default DetailPage;