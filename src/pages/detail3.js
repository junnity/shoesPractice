import { Outlet } from "react-router-dom";

function DetailPage3(props){
    return(
    <div className="container">
     <div className="row">
      <div className="col-md-6">
       <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button>
        <button onClick={()=>{props.navigate("/detail3/caution")}}>주의사항</button>
      </div>
     </div>
     <Outlet></Outlet>
    </div>
    )
}

export default DetailPage3;