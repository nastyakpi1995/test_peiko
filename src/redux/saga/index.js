import {all, fork} from 'redux-saga/effects';
import getRequest from './getPostsSaga';

export default function* rootSaga() {
  yield all([fork(getRequest)]);
}
