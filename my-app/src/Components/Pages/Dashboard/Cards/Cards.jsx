import {useCart} from "../../../../Utils/CartContext"
import { useDispatch } from "react-redux"
const Cards=({state})=>{
    const dispatch=useDispatch()
    const {AddToCart}=useCart()
    const onDoubleClickHandler=(value)=>{
        dispatch({type:"Add",payload:value})
    }
    return(
        <>
                <div className="container ms-3">
                <div className="row">
                    {state.map(item =>(
                        <div className="col-sm-4 card m-5" onDoubleClick={()=>onDoubleClickHandler(item)} style={{width:"20rem"}} key={item.id}>
                                <img src={item.image} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <p className="card-text">{item.price}</p>
                                        <button type="button" class="btn btn-primary" onClick={()=>AddToCart(item)}>Add To Cart</button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Cards;