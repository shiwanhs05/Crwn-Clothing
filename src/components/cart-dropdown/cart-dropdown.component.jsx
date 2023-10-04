import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import { setIsCartOpen } from "../../store/cart/cart.action";

import Button from "../button/button.component";

import { Container, CartItems, EmptyMessage } from "./cart-dropdown.styles";

import { selectCartItems } from "../../store/cart/cart.selector";


const CartDropdown = () => 
{
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
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