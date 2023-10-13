import {all, call} from "redux-saga/effects";
// redux saga / redux thunk => asynchronous side effects state management library
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";
export function* rootSaga(){
  yield all([call(categoriesSaga), call(userSagas)]);
}