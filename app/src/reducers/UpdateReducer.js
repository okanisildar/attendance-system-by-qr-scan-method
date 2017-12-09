import { ON_CHANGE_TEXT, UPDATE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	surname: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT:
			return { ...state, [action.payload.prop]: action.payload.value };
		case UPDATE_SUCCESS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
