import { ON_CHANGE_TEXT_UPDATE_TEACHER, UPDATE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	surname: '',
	isSuccessful: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT_UPDATE_TEACHER:
			return { ...state, [action.payload.prop]: action.payload.value };
		case UPDATE_SUCCESS:
			return { ...state, user: action.payload, isSuccessful: true };
		default:
			return state;
	}
};
