import React, { Component } from 'react';
import AttendanceDetails from '../components/AttendanceDetails';

class AttendanceDetailsScreen extends Component {
	render() {
		return (
			<AttendanceDetails navigation={this.props.navigation} />
		);
	}
}

export default AttendanceDetailsScreen;