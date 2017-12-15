import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ViewAttendance extends Component {
	render() {
		console.log(this.props.navigation.state.params.teacherId)
		return (
			<View>
				<Text>ViewAttendance</Text>
			</View>
		);
	}
}

export default ViewAttendance;
