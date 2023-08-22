import { useParams } from "react-router-dom";

function DetailPage(props){

  let {id} = useParams();
  let paramId = props.shoes.find(function(x){
    return x.id == id
  })

    return(
    <div className="container">
     <div className="row">
      <div className="col-md-6">
       <img src={props.shoePic[id]} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{paramId.title}</h4>
        <p>{paramId.content}</p>
        <p>{paramId.price}</p>
        <button className="btn btn-danger">주문하기</button>
        <button onClick={()=>{props.navigate(-1)}}>뒤로가기</button>
      </div>
     </div>
    </div>
    )
}

export default DetailPage;