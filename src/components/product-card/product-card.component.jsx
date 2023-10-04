import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import {Container, Image, Footer, Name, Price} from "./product-card.styles";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


const ProductCard = ({product}) => 
{
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCart = () => dispatch(addItemToCart(cartItems, product));
  
  const {name, imageUrl, price} = product;
  return <Container>
  <Image src={imageUrl} alt={name}/>
  <Footer>
  <Name>{name}</Name>
  <Price>{price}</Price>
  </Footer>
  <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to cart</Button>
  </Container>
};

export default ProductCard;