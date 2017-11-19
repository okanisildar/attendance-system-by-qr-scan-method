import { ON_CHANGE_TEXT } from './types';

export const onChangeTextHandler = ({ prop, value }) => {
	return {
		type: ON_CHANGE_TEXT,
		payload: { prop, value }
	};
};
