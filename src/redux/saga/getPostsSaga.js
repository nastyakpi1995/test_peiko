import {takeEvery, call, put} from 'redux-saga/effects';
import {FETCH_TYPES} from '../constants';
import server from '../../server';

function* getPostsSaga({page}) {
  try {
    const res = yield call(() => server.get({page}));
    yield put({
      type: FETCH_TYPES.ASYNC_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({type: FETCH_TYPES.ASYNC_POSTS_FAILED, payload: e.data});
  }
}

export default function* getRequest() {
  yield takeEvery(FETCH_TYPES.ASYNC_POSTS_REQUEST, getPostsSaga);
}
