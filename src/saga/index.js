// function* workerSaga() {
//     console.log('heelo day la mot worker');

//     yield put({ type: 'ACTION_FROM_WORKER'})
// }

// function* bySaga() {
//     console.log('Buy buy saga');
// }

// // watcher saga 
// function* rootSaga() {
//     yield take('LOGIN');
//     yield call(workerSaga);
//     // yield take('LOGOUT');
//     // yield call(bySaga);
// }

// watcher saga => action => worker saga


import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';

export default function* rootSaga() {
    yield all([imagesSaga()]);
}
