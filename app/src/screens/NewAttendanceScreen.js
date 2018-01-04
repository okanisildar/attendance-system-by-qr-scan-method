import React, { Component } from 'react';
import NewAttendance from '../components/NewAttendance';

class NewAttendanceScreen extends Component {
	static navigationOptions = {
		title: 'Create Attendance'
	};

	render() {
		return (
			<NewAttendance navigation={this.props.navigation} />
			
		);
	}
}

export default NewAttendanceScreen;

