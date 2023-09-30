import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null, 
  setCurrentUser: () => null, 
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => 
{
  const {type, payload} = action;
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: payload,
      }
    default :
      throw new Error(`Unhandled type of ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
}
export const UserProvider = ({children}) => 
{
  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  // Reducer
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }
  const value = {currentUser, setCurrentUser};
  return <UserContext.Provider value={value}>
  {children}
  </UserContext.Provider>
}