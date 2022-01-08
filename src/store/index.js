import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer ,compose(applyMiddleware(sagaMiddleware), enhancer));

sagaMiddleware.run(rootSaga);

export default store;