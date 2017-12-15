import React, { Component } from 'react';
import ViewAttendance from '../components/ViewAttendance';

class ViewAttendanceScreen extends Component {
	render() {
		return (
			<ViewAttendance navigation={this.props.navigation} />
		);
	}
}

export default ViewAttendanceScreen;
