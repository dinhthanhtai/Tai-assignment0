import { LOAD, LOAD_FAILED, LOAD_SUCCESS } from "../constants";

const errorReducer = (state = null, action) => {
    const { type, payload} = action;
    switch (type) {
        case LOAD_FAILED:
            return payload.error;
        case LOAD:
        case LOAD_SUCCESS:
            return null
        default:
            return state;
    }
}

export default errorReducer;