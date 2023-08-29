import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Cart(){

    let a = useSelector((state)=>{ return state.stock})
    console.log(a.stock)
    let cartData = useSelector((state)=>{return state.cartData})

    return(
        <div>
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
                <tr>
                  <td>1</td>
                  <td>{cartData[0].name}</td>
                  <td>{cartData[0].count}</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>{cartData[1].name}</td>
                  <td>{cartData[1].count}</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
        </div>
    )
}

export default Cart;