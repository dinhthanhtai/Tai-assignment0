import { LOAD_SUCCESS } from "../constants";

const pageReducer = (state = 1, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_SUCCESS:
            return state + 1;
        
        default:
            return state;
    }
}

export default pageReducer;