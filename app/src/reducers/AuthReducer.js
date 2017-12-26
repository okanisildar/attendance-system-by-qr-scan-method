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
	email: '', password: '', user: null, error: '', loading: null, signUpError: '', name: '', surname: '', signUpSuccess: '', result: null
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
			return { ...state, teacher: action.payload };
		case SIGNUP_SUCCESS:
			return { ...state, user: action.payload, loading: false, signUpSuccess: 'Successfuly created please login', result: true };
		case SIGNUP_FAIL:
			return { 
				...state, signUpError: 'Registration failed', email: '', password: '', loading: false, name: '', surname: '' 
			};
		default:
			return state;
	}
};
