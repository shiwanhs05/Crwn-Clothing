import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
const CategoryPreview = ({title, products}) => 
{
  const navigate = useNavigate();
  const clickHandler = () => navigate(`${title}`);
  
  return (
  <div className="category-preview-container">
  <h2><span className="title" onClick={clickHandler}>{title.toUpperCase()}</span></h2>
  <div className="preview">
  {
    products.filter((_, idx) => idx < 4).map((product) => {
      return <ProductCard key={product.id} product={product}/>
    })
  }
  </div>
  </div>
  )
};
export default CategoryPreview;