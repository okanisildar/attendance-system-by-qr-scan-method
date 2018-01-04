import { 
	ON_CHANGE_TEXT, 
	CREATE_STUDENT_SUCCESS, 
	CREATE_STUDENT_FAIL,
	GET_STUDENTS_SUCCESS,
	GET_STUDENTS_FAIL,
	GET_STUDENTS
} from '../actions/types';

const INITIAL_STATE = {
	studentNumber: '',
	studentName: '',
	studentSurname: '',
	loading: null,
	error: '',
	isSuccessful: null 
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_CHANGE_TEXT:
			return { ...state, [action.payload.prop]: action.payload.value };
		case CREATE_STUDENT_SUCCESS:
			return { ...state, loading: false, isSuccessful: true, studentNumber: '', studentName: '', studentSurname: '', courses: '' };
		case CREATE_STUDENT_FAIL:
			return { ...state, error: 'Student could not created', loading: false };
		case GET_STUDENTS_SUCCESS:
			return { ...state, allStudents: action.payload.students, loading: false };
		case GET_STUDENTS_FAIL:
			return { ...state, getError: 'Students could not found', loading: false };
		case GET_STUDENTS:
			return { ...state, students: action.payload.students, loading: false };
		default:
			return state;
	}
};
