import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../contexts/cart.context";

import Button from "../button/button.component";
import { Container, CartItems, EmptyMessage } from "./cart-dropdown.styles";


const CartDropdown = () => 
{
  const {cartItems, setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout")
    setIsCartOpen(false);
  };
  return <Container>
  <CartItems>
  {
    cartItems.length ? (
      cartItems.map(item =>{
      return <CartItem key={item.id} cartItem={item}/>})) : (<EmptyMessage>Add items to cart</EmptyMessage>)
  }
  </CartItems>
  <Button onClick={goToCheckoutHandler}>Proceed To Buy</Button>
  </Container>
}
export default CartDropdown;