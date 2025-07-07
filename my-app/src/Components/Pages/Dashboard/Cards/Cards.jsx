import {useCart} from "../../../../Utils/CartContext"
const Cards=({products})=>{
    const {AddToCart}=useCart()
    return(
        <>
            <div className="container" >
                <div className="row">
                    {products.map(item =>(
                        <div className="col-sm-3 card m-5" style={{width: "18rem;"}} key={item.id}>
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