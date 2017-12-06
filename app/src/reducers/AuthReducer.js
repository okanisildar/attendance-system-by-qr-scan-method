import { ON_CHANGE_TEXT, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT:
			return { ...state, [action.payload.prop]: action.payload.value };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication failed', email: '', password: '', loading: false };
		default:
			return state;
	}
};
