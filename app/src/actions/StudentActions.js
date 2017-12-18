import axios from 'axios';
import { URL, SEND_REQUEST, CREATE_STUDENT_SUCCESS, CREATE_STUDENT_FAIL } from './types';

export const createStudent = ({ studentNumber, name, surname, courses }) => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		console.log("SEND_REQUEST")
		return axios.post(`${URL}/students`, { studentNumber, name, surname, courses })
		console.log("axios")
			.then(result => {
				dispatch({
					type: CREATE_STUDENT_SUCCESS,
					payload: result.data
				});
				console.log(result);
			})
			.catch(() => {
				dispatch({
					type: CREATE_STUDENT_FAIL
				});
			});
	};
};

