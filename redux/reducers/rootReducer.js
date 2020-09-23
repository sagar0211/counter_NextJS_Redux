import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

//Imp when we have more reducer components 
const rootReducer = combineReducers({
    counter: counterReducer 
});

export default rootReducer;