import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName , plusAge } from './../store/userSlice.js';
import { plusCount,minusCount } from "../store.js";

function Cart(){

    let a = useSelector((state)=>{ return state.user})
    let cartData = useSelector((state)=>{return state.cartData})
    let dispatch = useDispatch()

    return(
        <div>
          {a.age}의 장바구니
          <button onClick={()=>{
            dispatch(plusAge())
          }}>버튼</button>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartData.map((a,i)=>{
                    return(
                    <tr key={i}>
                      <td>{cartData[i].id}</td>
                      <td>{cartData[i].name}</td>
                      <td>{cartData[i].count}</td>
                      <td><button onClick={()=>{
                        dispatch(changeName())
                        dispatch(plusCount(cartData[i].id))
                      }}>+</button>
                      <button onClick={()=>{
                        dispatch(minusCount(cartData[i].id))
                      }}>-</button></td>
                    </tr>)
                  })
                }
              </tbody>
            </Table>
        </div>
    )
}

export default Cart;