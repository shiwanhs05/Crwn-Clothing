import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {Container, Icon, ItemsCount} from "./cart-icon.styles";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <Container onClick={toggleIsCartOpen}>
    <Icon/>
    <ItemsCount>{cartCount}</ItemsCount>
    </Container>
  )
};

export default CartIcon;