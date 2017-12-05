import axios from 'axios';
import { ON_CHANGE_TEXT } from './types';

export const onChangeTextHandler = ({ prop, value }) => {
	return {
		type: ON_CHANGE_TEXT,
		payload: { prop, value }
	};
};

export const signUp = ({ email, password, name, surname }) => {
	return dispatch => {
		return axios.post('http://192.168.1.4:3000/users', { email, password, name, surname })
			.then(result => {
				console.log(result);
			});
	};
};

export const login = ({ email, password }) => {
	return dispatch => {
		return axios.post('http://192.168.1.4:3000/users/login', { email, password })
			.then(result => {
				console.log(result);
			});
	}
}
