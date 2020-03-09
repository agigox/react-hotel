import { createStore, applyMiddleware } from "redux";

import {addToCart} from "./reducers";
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();


export default createStore(addToCart, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

