import { SAVE_ATTENDANCE_INFO } from '../actions/types';

const INITIAL_STATE = {
	courseName: '',
	date: '',
	hours: '',
	students: [],
	isSuccessful: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_ATTENDANCE_INFO:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
