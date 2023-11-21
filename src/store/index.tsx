import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		rootReducer,
		// You are free to call the LHS what you like, but it must have a reducer on the RHS.
	},
	middleware: [thunk],
});
