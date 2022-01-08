import { LOAD, LOAD_FAILED, LOAD_SUCCESS } from "../constants"


const loadImages = () => ({
    type: LOAD
});

const setImages = images => ({
    type: LOAD_SUCCESS,
    payload: images,
})

const setError = error => ({
    type: LOAD_FAILED,
    payload: error
})

export {
    loadImages,
    setImages,
    setError
}