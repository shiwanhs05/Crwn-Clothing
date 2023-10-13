import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// strike through createStore is just signifying that I am using "plain-redux" and these patterns are harder to use, so instead use Redux-toolkit.

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

import thunk from "redux-thunk";


const persistConfig = {
  key: "root", 
  storage, 
  whitelist: ["cart"],
  // backlist: ["user", "categories"]
}; 

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// process.env.NODE_ENV === "development/test/production"
const middleWare = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

// [false].filter(Boolean) => []
// [2].filter(Boolean) => [2]

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);