import { LOAD, LOAD_SUCCESS } from "../constants";

const initialState = [];

const imagesReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOAD_SUCCESS:
            return [...state, ...payload];
        default:
            return state;
    }
}

export default imagesReducer;