import axios from 'axios';
import { 
	URL, 
	SAVE_ATTENDANCE, 
	SAVE_ATTENDANCE_SUCCESS, 
	SAVE_ATTENDANCE_FAIL, 
	SAVE_ATTENDANCE_INFO 
} from './types';

export const getAttendanceInfo = ({ prop, value }) => {
	return {
		type: SAVE_ATTENDANCE_INFO,
		payload: { prop, value }
	};
};

export const saveAttendanceRecord = ({ courseName, date, hours, students, teacherId }) => {
	return dispatch => {
		dispatch({ type: SAVE_ATTENDANCE });
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
