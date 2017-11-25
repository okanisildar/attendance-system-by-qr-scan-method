import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AttendanceReducer from './AttendanceReducer';

export default combineReducers({
	auth: AuthReducer,
	newAttendance: AttendanceReducer
});
