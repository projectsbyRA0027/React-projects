import { useContext } from "react";
import {CartContext} from "../../context/CartProvider";
import {ShoppingCart,X}from "phosphor-react";
import {Link} from "react-router-dom";
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

function CartTop({toggleShowCart}){
    return(
        <div className="cart-top">
            <ShoppingCart size={20}/>
            <h2>Your Shopping Carts</h2>
            <div className="close-shopping-cart" onClick={toggleShowCart}>
                <X size="22px"/>
            </div>
        </div>
    );
}

function CartMain({cart,addProductQuantity,removeFormCart}){
    const products = cart.map((product)=>{
        return(
            <CartProducts
            product={product}
            addProductQuantity={addProductQuantity}
            removeFormCart = {removeFormCart}
            key = {product.id}
            />
        );
    });

      return(
        <div className="cart-main_container">
         {products.length < 1 ? (
            <div style={{textAlign:"center",fontSize:"1.6rem"}}>
                your cart is empty :({" "}
                </div>
          ) :(
           products
                )}
        </div>
      );
}

function CartProducts({ product, addProductQuantity, removeFromCart }) {
    function inputHandler(e) {
      addProductQuantity(product.id, Number(e.target.value));
    }
  
    function removeProduct() {
      removeFromCart(product.id);
      toast.error("Removed from Cart ");
    }
  
    return (
      <div className="cart-product">
        <img src={product.image} />
        <div className="cart-product_info">
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p className="qty">
            Qty:
            <input
              type="number"
              value={product.qty}
              onChange={inputHandler}
              id="qty"
            />
          </p>
        </div>
        <p className="cart-product_price">
          ${(product.price * product.qty).toFixed(2)}
        </p>
        <span className="cart-product_x" onClick={removeProduct}>
          <X size="16px" />
        </span>
      </div>
    );
  }
  
  function CartCheckOut({ cart, toggleShowCart }) {
    const totalPrice = cart.reduce((accumulator, current) => {
      return accumulator + current.price * current.qty;
    }, 0);
  
    return (
      <div className="cart-checkout_container">
        <h3>Checkout</h3>
        <p>${totalPrice.toFixed(2)}</p>
        <Link to="checkout" onClick={toggleShowCart}>
          Go to Checkout
        </Link>
      </div>
    );
  }
  
  export default SlidingCart;
