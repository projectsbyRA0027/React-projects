import { useContext } from "react";
import {link} from "react-router-dom";
import {CartContext} from "../../context/CartProvider";
import toast from "react-hot-toast";
import "./ProductCard.css";

function ProductCard({product}){
    let {addToCart} = useContext(CartContext);

    function handleAddToCart(){
        addToCart(product);
        toast.success("Added to Cart");
    }

    return(
        <div className="product-card_wrapper">
          <Link to={`/product/${product.id}`}>
            <div className="product-card_img">
                <img src="{product?.image}"/>
            </div>
          </Link>
          <div className="product-card_description">
            <h3>{product.title}</h3>
            <p>{product?.description}</p>
            <span className="product-card_bottom">
                <button className="add-cart_btn" onClick={handleAddToCart}>
                    add to cart
                </button>
                <b className="product-card_price">${product?.price}</b>
            </span>
          </div>
        </div>
    );
}

export default ProductCard;