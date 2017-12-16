import axios from 'axios';
import { 
	URL, 
	SAVE_ATTENDANCE_SUCCESS, 
	SAVE_ATTENDANCE_FAIL, 
	SAVE_ATTENDANCE_INFO,
	SEND_REQUEST,
	GET_RECORDS_SUCCESS,
	GET_RECORDS_FAIL
} from './types';

export const getAttendanceInfo = ({ prop, value }) => {
	return {
		type: SAVE_ATTENDANCE_INFO,
		payload: { prop, value }
	};
};

export const saveAttendanceRecord = ({ courseName, date, hours, students, teacherId }) => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		return axios.post(`${URL}/attendance`, { courseName, date, hours, students, teacherId })
			.then(result => {
				dispatch({
					type: SAVE_ATTENDANCE_SUCCESS,
					payload: result
				});
			})
			.catch(() => {
				dispatch({
					type: SAVE_ATTENDANCE_FAIL
				});
			});
	};
};

export const getRecords = ({ teacherId }) => {
	return dispatch => {
		dispatch({ type: SEND_REQUEST });
		return axios.post(`${URL}/attendance/getRecords`, { teacherId })
			.then(result => {
				dispatch({
					type: GET_RECORDS_SUCCESS,
					payload: result.data
				});
			})
			.catch(() => {
				dispatch({
					type: GET_RECORDS_FAIL,
				});
			});
	};
};
