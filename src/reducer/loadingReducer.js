import { LOAD, LOAD_FAILED, LOAD_SUCCESS } from "../constants";

const loadingReducer = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD:
            return true;
        case LOAD_FAILED:
            return false;
        case LOAD_SUCCESS:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;