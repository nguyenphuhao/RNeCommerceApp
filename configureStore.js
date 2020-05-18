import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './src/reducers';
import rootSagas from './src/sagas';
export default configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  return store;
}