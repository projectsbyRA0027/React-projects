import React from "react";
import { useContext } from "react";
import {CartContext} from "../../context/CartProvider"
import "./Userinfo.css";
import toast from "react-hot-toast";
import {link,useNavigate} from "react-router-dom";

function Userinfo(){
    return(
        <div className="user-info_container">
            <ContactInformation/>
            <ShippingAddress />
        </div>
    );
}

function ContactInformation(){
    return(
        <div className="conatct-info_container">
            <h3>Contact Information</h3>
            <input type="email" placeholder="Email" />
        </div>
    );
}

function ShippingAddress(){
    const {emptyCart,cart} = useContext(CartContext);
    let navigate = useNavigate();


function checkoutHandler(){
    if(cart.length < 1){
        toast.error("Your Shopping list is Empty");
        return;
    }
    let totalPrice = cart.reduce((acc,cur)=>{
        return acc + cur.qty * cur.price;
    }, 0);
    if (totalPrice < 1){
        toast.error("Cannot Process Order Value Of Zero(0).");
        return;
    }

    emptyCart();
    toast.success("checked out");
    navigate("/")
}

return(
    <div className="shipping-address_container">
        <h3>Shipping address</h3>
        <div className="shipping-address_wrapper">
            <input type="name" placeholder="First name" id="firstname" />
            <input type="name" placeholder="Last name" id="firstname" />
            <input type="name" placeholder="Address" id="address" />
            <input type="name" placeholder="City" id="city" />
            <button className="checkout-btn" onClick={checkoutHandler}>
                Checkout
            </button>
        </div>

    </div>
);

}