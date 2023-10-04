import {clearItemFromCart, addItemToCart, removeItemFromCart} from "../../store/cart/cart.action";

import { useDispatch, useSelector } from 'react-redux';

import {Container, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveBtn} from "./checkout-item.styles";

import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price> {price}</Price>
      <RemoveBtn onClick={clearItemHandler}>
        &#10005;
      </RemoveBtn>
    </Container>
  );
};

export default CheckoutItem;