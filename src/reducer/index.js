import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import imagesReducer from "./imageReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";

const reducer = combineReducers({ 
    images: imagesReducer,
    loading: loadingReducer,
    error: errorReducer,
    nextPage: pageReducer
})

export default reducer;