import { compose, createStore, applyMiddleware } from "redux";
// strike through createStore is just signifying that I am using "plain-redux" and these patterns are harder to use, so instead use Redux-toolkit.
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWare = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWare));
export const store = createStore(rootReducer, undefined, composedEnhancers);