import {createStore} from "redux";
const initialValue={
    wishlist:[]
}
const WishlistReducer=(store=initialValue,action)=>{
    switch(action.type){
        case "Add":
            return {
                ...store,
                wishlist:[...store.wishlist,action.payload]
            }
            default:
                return store;
    }

}
const reduxWishlist=createStore(WishlistReducer);
export default reduxWishlist;