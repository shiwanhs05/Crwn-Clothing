import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { selectCategoriesMap , selectCategoriesIsLoading} from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContainer, Title } from "./category.styles";

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(()=> {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  return (
    <Fragment>
    <Title>{category.toUpperCase()}</Title>
    {
      isLoading ? <Spinner/> :<ProductsContainer>
      {products &&
        products.map(product => <ProductCard key={product.id} product={product}/>)
      }
      </ProductsContainer>
    }
    </Fragment>)
}
export default Category;