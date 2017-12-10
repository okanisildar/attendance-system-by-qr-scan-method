import React, { Component } from 'react';
import NewAttendance from '../components/NewAttendance';

class NewAttendanceScreen extends Component {
	render() {
		return (
			<NewAttendance navigation={this.props.navigation}/>
		);
	}
}

export default NewAttendanceScreen;
