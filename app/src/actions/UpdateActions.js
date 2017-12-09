import axios from 'axios';
import { URL, UPDATE_SUCCESS, UPDATE_FAIL } from './types';

export const updateTeacher = ({ _id, name, surname }) => {
	return dispatch => {
		return axios.put(`${URL}/users/update-teacher`, { _id, name, surname })
			.then(result => {
				dispatch({
					type: UPDATE_SUCCESS,
					payload: result
				});
				//navigate('mainMenu');
			})
			.catch(() => {
				dispatch({
					type: UPDATE_FAIL
				});
			});
	};
};

