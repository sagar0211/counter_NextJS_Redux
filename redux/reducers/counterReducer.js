import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "../actions/counterActions";

//initializing state with value 0
const counterReducer = (state = {value: 0}, action) => {
    
    switch (action.type){
        case INCREMENT_COUNTER:
            return {...state,value: state.value + action.payload};
        case DECREMENT_COUNTER:
            return {...state,value: state.value - action.payload};
        default:
            return {...state};
    }
};

export default counterReducer;