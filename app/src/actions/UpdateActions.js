import { ON_CHANGE_TEXT, UPDATE_SUCCESS, UPDATE_FAIL } from './types';

export const onChangeTextHandler = ({ prop, value }) => {
	return {
		type: ON_CHANGE_TEXT,
		payload: { prop, value }
	};
};