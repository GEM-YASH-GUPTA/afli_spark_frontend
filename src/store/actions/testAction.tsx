import { testAction } from '../types/test';

export const doIncreament = () => ({
	type: testAction.INCREAMENT,
});

export const doDecreament = () => ({
	type: testAction.DECREAMENT,
});
