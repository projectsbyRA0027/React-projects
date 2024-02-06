import { createContext,useState } from "react";
const CartContext = createContext(null);

function CartProvider({ children }) {   //main function pages
    const [cart, setCart] = useState([]);
  
    function addToCart(addedProduct) { /// fuction for add to cart
      let newCartValue = [];
      let isAlreadyAdded = cart.some((product) => {
        return product.id === addedProduct.id;
      });
      if (isAlreadyAdded) {
        newCartValue = cart.map((product) => {
          if (product.id === addedProduct.id) {
            return { ...product, qty: product.qty + 1 };
          }
          return product;
        });
      } else {
        newCartValue = [...cart, { ...addedProduct, qty: 1 }];
      }
      setCart(newCartValue);
    }
  
    function addProductQuantity(id, newQty) {    //add product quantity fucntion
      if (newQty < 0) {
        removeFromCart(id);
        return;
      }
      if (newQty > 20) return;
      let newCartValue = cart.map((product) => {
        if (product.id === id) {
          return { ...product, qty: newQty };
        }
        return product;
      });
      setCart(newCartValue);
    }
  
    function removeFromCart(productId) {   //function for removing from cart
      let filteredCart = cart.filter((product) => product.id !== productId);
      setCart(filteredCart);
    }
  
    function emptyCart() {  // function for emptying cart
      setCart([]);
    }
    let contextValue = {
      cart,
      addToCart,
      removeFromCart,
      addProductQuantity,
      emptyCart,
    };
  
    return (
      <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    );
  }
  
  export { CartContext };
  export default CartProvider;