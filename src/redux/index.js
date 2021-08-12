import {createStore, combineReducers, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import postsReducer from './reducers/postsReducer';

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
export default store;
