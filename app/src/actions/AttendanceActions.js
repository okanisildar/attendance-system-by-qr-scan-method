import { SAVE_ATTENDANCE_INFO } from './types';

export const getAttendanceInfo = ({ prop, value }) => {
	return {
		type: SAVE_ATTENDANCE_INFO,
		payload: { prop, value }
	};
};

export const saveAttendanceRecord = ({ courseName, date, hours, students, teacherId }) => {
	return {

	};
};
