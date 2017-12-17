import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';


class AttendanceDetails extends Component {
	render() {
		console.log(this.props.navigation)
		return (
			<View>
				<Text>AttendanceDetail</Text>
			</View>
		);
	}
}

export default AttendanceDetails;
