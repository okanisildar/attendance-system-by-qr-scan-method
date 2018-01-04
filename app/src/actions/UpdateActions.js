import axios from 'axios';
import { URL, ON_CHANGE_TEXT_UPDATE_TEACHER, UPDATE_SUCCESS, UPDATE_FAIL } from './types';


export const onChangeTextUpdateTeacher = ({ prop, value }) => {
	return {
		type: ON_CHANGE_TEXT_UPDATE_TEACHER,
		payload: { prop, value }
	};
};


export const updateTeacher = ({ _id, name, surname }) => {
	return dispatch => {
		return axios.put(`${URL}/teachers/update-teacher`, { _id, name, surname })
			.then(result => {
				dispatch({
					type: UPDATE_SUCCESS,
					payload: result
				});
			})
			.catch(() => {
				dispatch({
					type: UPDATE_FAIL
				});
			});
	};
};

