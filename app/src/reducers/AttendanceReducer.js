import { 
	SEND_REQUEST, 
	SAVE_ATTENDANCE_INFO, 
	SAVE_ATTENDANCE_SUCCESS, 
	GET_RECORDS_SUCCESS 
} from '../actions/types';

const INITIAL_STATE = {
	courseName: '',
	date: '',
	hours: '',
	students: [],
	isSuccessful: null,
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEND_REQUEST:
			return { ...state, loading: true };
		case SAVE_ATTENDANCE_INFO:
			return { ...state, [action.payload.prop]: action.payload.value, loading: false };
		case SAVE_ATTENDANCE_SUCCESS:
			return { ...state, result: action.payload, loading: false };
		case GET_RECORDS_SUCCESS:
			return { ...state, records: action.payload.records, loading: false };
		default:
			return state;
	}
};
