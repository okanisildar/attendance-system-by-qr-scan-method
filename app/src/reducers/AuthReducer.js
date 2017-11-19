import { ON_CHANGE_TEXT } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT:
			return { ...state, [action.payload.prop]: [action.payload.value] };
		default:
			return state;
	}
};
