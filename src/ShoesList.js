function ShoesList(props){
    return(
      <div className="col-md-4" >
        <img src={props.shoePic[props.num]} width="80%" />
        <h4>{props.shoes[props.num].title}</h4>
        <p>{props.shoes[props.num].price}</p>
      </div>
    )
  }
  export default ShoesList;