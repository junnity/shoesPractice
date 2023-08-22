import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styled-component 쓰면 CSS 파일 없어도 되는데
import styled from "styled-components";



function DetailPage(props){

  


  let AlertBox = styled.div`
    background : yellow;
    padding : 20px;
  `

  let [count, setCount] = useState(0)
  let [알박,set알박] = useState(true)
  let [인풋내용,인풋내용변경] = useState('');

  let {id} = useParams();
  let paramId = props.shoes.find(function(x){
    return x.id == id
  })


  // 라이프사이클
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
    <div className="container">
     {알박 == (true) ? <AlertBox id="알박">2초안에 사면 할인!!</AlertBox> : null}
     <div className="row">
      <div className="col-md-6">
       <img src={props.shoePic[id] } width="100%" onClick={()=>{ setCount(count+1)}} />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{paramId.title}</h4>
        <p>{paramId.content}</p>
        <p>{paramId.price}</p>
        <button className="btn btn-danger" >주문하기</button>
        <button onClick={()=>{props.navigate(-1)}}>뒤로가기</button>
        <input onChange={(e)=>{ 인풋내용변경(e.target.value)}} />
      </div>
     </div>
    </div>
    )
}

export default DetailPage;