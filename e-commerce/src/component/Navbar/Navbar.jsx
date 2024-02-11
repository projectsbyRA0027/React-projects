import { useContext,useState } from "react";
import {CartContext} from "../../context/CartProvider";
import{Link,NavLink} from "react-router-dom";
import{ShoppingCart} from "phosphor-react";
import SlidingCart from "./SlidingCart";
import "./Navbar.css";

function Navbar(){
    const [showCart,setShowcart] = useState(false);

    function toggleShowcart(){
        setShowcart(!showCart);
    }

    return(
        <header className={`header ${showCart ? "visible":""}`}>
            <Navigations toggleShowcart={toggleShowcart}/>
            <SlidingCart toggleShowCart={toggleShowcart} />
            <CartSliderOverlay />
        </header>
    );
}

function CartButton({toggleShowCart}){
    const {cart} = useContext(CartContext);

    const totalCartQty = cart.reduse((totalQty,current)=>{
        return totalQty + current.qty;
    },0);

    return(
        <span onClick={toggleShowCart} className="cart-icon">
            <ShoppingCart size={22}/>
            <div className="cart-counter">{totalCartQty}</div>
        </span>
    );
}

function Navigations({toggleShowCart}){
    const [isNavOpen,setIsNavOpen] = useState(false);

    function handleOpenNavigation(){
        setIsNavOpen(!isNavOpen);
    }

    return(
        <nav className={`nav container ${isNavOpen ? "nav-open" :""}`}>
            <span className="brand">
              <Link to="/">Axe cloth Store</Link>
            </span>
            <ul className="nav-link_container">
             <li className="nav-link">
                <NavLink to="/">Home</NavLink>
             </li>
             <li className="nav-link">
                <NavLink to="/explore/men">Men</NavLink>
             </li>
             <li className="nav-link">
                <NavLink to="/explore/women">Women</NavLink>
             </li>
             <li className="nav-link">
                <NavLink to="/explore/all">Explore All</NavLink>
             </li>
            </ul>
            <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
                <span></span>
                <span></span>
                <span></span>
               
            </div>
            <div className="nav-secondary">
                <CartButton toggleShowCart={toggleShowCart} />
            </div>
            <div className="nav-overlay"></div>

        </nav>
    );
}

function CartSliderOverlay(){
    return <div className="cart-slide_overlay"></div>;
}

export default Navbar;
