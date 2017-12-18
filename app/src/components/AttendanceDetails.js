import React, { Component } from 'react';
import { Text, View } from 'react-native';


class AttendanceDetails extends Component {
	render() {
		const { record } = this.props.navigation.state.params;
		console.log(record)
		return (
			<View>
				<Text>AttendanceDetail</Text>
			</View>
		);
	}
}

export default AttendanceDetails;
