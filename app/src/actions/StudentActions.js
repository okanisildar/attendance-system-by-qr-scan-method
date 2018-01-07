import axios from 'axios';
import { 
	URL, 
	SEND_REQUEST, 
	CREATE_STUDENT_SUCCESS, 
	CREATE_STUDENT_FAIL, 
	GET_STUDENTS_SUCCESS,
	GET_STUDENTS_FAIL,
	GET_STUDENTS
 } from './types';

export const createStudent = ({ studentNumber, studentName, studentSurname, courses }) => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		return axios.post(`${URL}/students`, { studentNumber, studentName, studentSurname, courses })
			.then(result => {
				dispatch({
					type: CREATE_STUDENT_SUCCESS,
					payload: result.data
				});
			})
			.catch(() => {
				dispatch({
					type: CREATE_STUDENT_FAIL
				});
			});
	};
};

export const listStudentsByCourse = ({ courseName }) => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		return axios.get(`${URL}/students/getStudents`, { courseName })
			.then(result => {
				dispatch({
					type: GET_STUDENTS_SUCCESS,
					payload: result.data
				});
			})
			.catch(() => {
				dispatch({
					type: GET_STUDENTS_FAIL
				});
			});
	};
};

export const listStudents = () => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		return axios.get(`${URL}/students`)
			.then(result => {
				dispatch({
					type: GET_STUDENTS,
					payload: result.data
				});
			})
			.catch(() => {
				dispatch({
					type: GET_STUDENTS_FAIL
				});
			});
	};
};
