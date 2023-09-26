import { createContext, useEffect, useState } from "react";
const addCartItems = (cartItems, productToAdd) => {
  const productToAddPresentInCart = cartItems.find(item => {
    return item.id === productToAdd.id;
  });
  if(productToAddPresentInCart) 
  {
    return cartItems.map(item => {
      return ((item.id === productToAdd.id) ? {...item, quantity: item.quantity + 1} : item);
  })
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
}
export const CartContext = createContext({
  isCartOpen: false, 
  setIsCartOpen: () => null, 
  cartItems: [], 
  addItemToCart: () => null,
  cartCount: 0, 
});

export const CartProvider = ({children}) => 
{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(()=> {
    const count = cartItems.reduce((total, cartItem)=>{ return total + cartItem.quantity}, 0);
    setCartCount(count);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    // setCartCount((count) => count + 1);
    setCartItems(addCartItems(cartItems, productToAdd));
  }
  const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount};
  return <CartContext.Provider value={value}>
  {children}
  </CartContext.Provider>;
};