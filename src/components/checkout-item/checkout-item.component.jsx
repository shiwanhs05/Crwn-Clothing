import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {Container, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveBtn} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

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