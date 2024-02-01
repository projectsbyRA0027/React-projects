import { useContext } from "react";
import {CartContext} from "../../context/CartProvider";
import {ShoppingCart,X}from "phosper-react";
import {link} from "react-router-dom";
import "./SlidingCart.css";
import toast from "react-hot-toast";

function SlidingCart({toggleShowCart}){
    const{cart,addProductQuantity,removeFormCart} = useContext(CartContext);

    return(
        <div className={`sliding-cart_container`}>
        <CartTop toggleShowCart={toggleShowCart}/>
        <CartMain 
         cart={cart}
         addProductQuantity ={addProductQuantity}
         removeFormCart = {removeFormCart}
        />
        <CartCheckOut cart={cart} toggleShowCart={toggleShowCart} />
        
        </div>
    );
}