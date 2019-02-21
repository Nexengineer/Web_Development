// Main use of this file is to combine all the reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
// import samepleReducer from './sampleReducer';

export default combineReducers({
    item: itemReducer // ------> Key is give just to figure out what is name of reducer which we will use in the app.
    // sample: sampleReducer
});