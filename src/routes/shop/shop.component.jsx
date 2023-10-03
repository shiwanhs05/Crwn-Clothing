import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";


import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {setCategories} from "../../store/categories/category.action";


const Shop = () => 
{
  const dispatch = useDispatch();
  useEffect(()=> {
    (async function getCategoriesMap(){
      const categoriesArr = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArr));
    })();
  }, []);
  return (
    <Routes>
    <Route index element={<CategoriesPreview />}/>
    <Route path=":category" element={<Category />} />
    <Route />
    </Routes>
    )
};

export default Shop;