import { combineReducers } from 'redux';
import tasksInfoReducer from './reducers/testReducer';

const rootReducer = combineReducers({
	tasksInfoReducer: tasksInfoReducer,
});
export default rootReducer;
