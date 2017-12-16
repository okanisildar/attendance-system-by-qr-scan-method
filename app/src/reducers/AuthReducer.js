import { 
	ON_CHANGE_TEXT, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	GET_USER,
	SIGNUP_SUCCESS, 
	SIGNUP_FAIL 
} from '../actions/types';

const INITIAL_STATE = { 
	email: '', password: '', user: null, error: '', loading: null, singUpError: '' 
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT:
			return { ...state, [action.payload.prop]: action.payload.value, error: '' };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication failed', email: '', password: '', loading: false };
		case GET_USER:
			return { ...state, user: action.payload };
		case SIGNUP_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case SIGNUP_FAIL:
			return { 
				...state, singUpError: 'Registration failed', email: '', password: '', loading: false 
			};
		default:
			return state;
	}
};
