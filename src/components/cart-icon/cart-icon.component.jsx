import { useDispatch, useSelector } from "react-redux";

import {Container, Icon, ItemsCount} from "./cart-icon.styles";

import { setIsCartOpen } from "../../store/cart/cart.action";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";


const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <Container onClick={toggleIsCartOpen}>
    <Icon/>
    <ItemsCount>{cartCount}</ItemsCount>
    </Container>
  )
};

export default CartIcon;