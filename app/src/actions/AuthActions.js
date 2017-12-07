import axios from 'axios';
import { 
	ON_CHANGE_TEXT, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	SIGNUP_SUCCESS, 
	SIGNUP_FAIL 
} from './types';

export const onChangeTextHandler = ({ prop, value }) => {
	return {
		type: ON_CHANGE_TEXT,
		payload: { prop, value }
	};
};

export const signUp = ({ email, password, name, surname }) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		return axios.post('http://192.168.1.5:3000/users', { email, password, name, surname })
			.then(result => {
				dispatch({
					type: SIGNUP_SUCCESS,
					payload: result.data
				});
				navigate('mainMenu', { token: result.data });
			})
			.catch(() => {
				dispatch({
					type: SIGNUP_FAIL
				});
			});
	};
};

export const login = ({ email, password, navigate }) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });

		return axios.post('http://192.168.1.5:3000/users/login', { email, password })
			.then(result => {
				dispatch({
					type: LOGIN_USER_SUCCESS,
					payload: result.data
				});
				navigate('mainMenu', { user: result.data });
			})
			.catch(() => {
				dispatch({
					type: LOGIN_USER_FAIL
				});
			});
	};
};
