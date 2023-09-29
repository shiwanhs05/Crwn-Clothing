import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {Container, Title, Preview} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => 
{
  const navigate = useNavigate();
  const clickHandler = () => navigate(`${title}`);
  return (
  <Container>
  <h2><Title onClick={clickHandler}>{title.toUpperCase()}</Title></h2>
  <Preview>
  {
    products.filter((_, idx) => idx < 4).map((product) => {
      return <ProductCard key={product.id} product={product}/>
    })
  }
  </Preview>
  </Container>
  )
};
export default CategoryPreview;