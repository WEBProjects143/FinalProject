import {createContext,useContext, useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const CartItem=createContext();


const CartItems =({children})=>{
    const navigate = useNavigate();
    const [cart,setCart]=useState(()=>{
        const savedCart=localStorage.getItem("cart")
        return savedCart? JSON.parse(savedCart):[];

    });

    const AddToCart=(item)=>{
        setCart(prev=>[...prev,item])    
        navigate('/cart');
    }
     const removeCart=(id)=>{
        const data=cart.filter(items=>items.id !== id )   
        setCart(data)
    }
    const Sort=(value)=>{
        console.log("cart" +cart)
        console.log("value" + value)

    }


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])


    return(
        <>
        <CartItem.Provider value={{cart,AddToCart,removeCart,Sort}}>
            {children}
        </CartItem.Provider>
        </>
    )

}
export const useCart =()=>useContext(CartItem)
export default CartItems;