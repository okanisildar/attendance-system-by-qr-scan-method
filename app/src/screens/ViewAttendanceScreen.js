import React, { Component } from 'react';
import ViewAttendance from '../components/ViewAttendance';

class ViewAttendanceScreen extends Component {
	static navigationOptions = {
		title: 'Records'
	};

	render() {
		return (
			<ViewAttendance navigation={this.props.navigation} />
		);
	}
}

export default ViewAttendanceScreen;
