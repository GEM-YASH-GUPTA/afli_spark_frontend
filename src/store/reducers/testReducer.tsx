import { testAction } from '../types/test';

const initialState = {
	ITasksData: 0,
};

const tasksInfoReducer = (state = initialState, action: { type: string }) => {
	switch (action.type) {
		case testAction.INCREAMENT:
			return {
				ITasksData: state.ITasksData + 1,
			};
		case testAction.DECREAMENT:
			return {
				ITasksData: state.ITasksData - 1,
			};
		default:
			return state;
	}
};

export default tasksInfoReducer;
