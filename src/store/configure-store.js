import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const configureStore = (...middlewares) => createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore;