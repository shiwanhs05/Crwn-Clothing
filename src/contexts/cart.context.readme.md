```js
import { createContext, useEffect, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [], 
  cartCount: 0, 
  cartTotal: 0,
}
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS : "SET_CART_ITEMS", 
  SET_CART_COUNT : "SET_CART_COUNT",
  SET_CART_TOTAL : "SET_CART_TOTAL", 
}
// Cart Reducer
const CartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) 
  {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state, 
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, 
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state, 
        cartCount: payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state, 
        cartTotal: payload,
      };
    default: 
      throw new Error(`Unhandled type of ${type} in CartReducer`);
  }
}
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;
  const setIsCartOpen = () => {
    dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: !isCartOpen})
  }
  const setCartItems = (cartItems) => {
    dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: cartItems})
  };
  const setCartCount = (cartCount) => {
    dispatch({type: CART_ACTION_TYPES.SET_CART_COUNT, payload: cartCount})
  };
  const setCartTotal = (cartTotal) => {
    dispatch({type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: cartTotal})
  };
  
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
```