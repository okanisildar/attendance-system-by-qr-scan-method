import axios from 'axios';
import { 
	URL,
	ON_CHANGE_TEXT, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	GET_USER,
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
		return axios.post(`${URL}/teachers`, { email, password, name, surname })
			.then(result => {
				dispatch({
					type: SIGNUP_SUCCESS,
					payload: result.data
				});
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

		return axios.post(`${URL}/teachers/login`, { email, password })
			.then(result => {
				dispatch({
					type: LOGIN_USER_SUCCESS,
					payload: result.data
				});
				navigate('mainMenu', { user: result.data.teacher });
			})
			.catch(() => {
				dispatch({
					type: LOGIN_USER_FAIL
				});
			});
	};
};

export const getUser = ({ _id }) => {
	return dispatch => {
		return axios.post(`${URL}/teachers/get-user`, { _id })
			.then(result => {
				dispatch({
					type: GET_USER,
					payload: result.data.teacher
				});
			});
	};
};
