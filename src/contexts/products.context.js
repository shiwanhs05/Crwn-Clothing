import { createContext, useState, useEffect} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  products: []
});
export const ProductsProvider = ({children}) => 
{
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    (async function getCategoriesMap(){
      const categoryMap = await getCategoriesAndDocuments();
    })();
  }, []);
  const value = {products};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};