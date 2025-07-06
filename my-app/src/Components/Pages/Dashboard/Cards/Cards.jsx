const Cards=({products})=>{
    return(
        <>
            <div className="container" >
                <div className="row">
                    {products.map(item =>(
                        <div className="col-sm-3 card m-5" style={{width: "10rem;"}}>
                                    <img src={item.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.category}</p>
                                            <p class="card-text">{item.price}</p>
                                            <a href="/dashboard" class="btn btn-primary">Add To Cart</a>
                                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Cards;