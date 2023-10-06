import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {createAction} from "../../utils/reducer/reducer.utils";

import {CATEGORY_ACTION_TYPES} from "./category.types";


export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArr) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoriesFailed = (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArr = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArr));
  } 
  catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}
