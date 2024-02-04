import React from "react";
import "./Checkout.css";
import Userinfo from "../component/Checkout/Userinfo";
import OrderSummary from "../component/Checkout/OrderSummary";


function Checkout(){
    return(
        <div className="container checkout-container">
            <Userinfo />
            <OrderSummary />
        </div>
    );
}

export default Checkout;