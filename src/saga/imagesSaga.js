import { call, put, select, takeEvery } from "redux-saga/effects";

import { setError, setImages } from "../actions";
import { fetchImages } from "../api";
import { LOAD } from "../constants";

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(LOAD, handleImagesLoad);
}

