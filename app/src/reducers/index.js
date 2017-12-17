import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AttendanceReducer from './AttendanceReducer';
import UpdateReducer from './UpdateReducer';
import StudentReducer from './StudentReducer';

export default combineReducers({
	auth: AuthReducer,
	attendance: AttendanceReducer,
	update: UpdateReducer,
	student: StudentReducer
});
