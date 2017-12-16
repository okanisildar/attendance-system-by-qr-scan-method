import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getRecords } from '../actions';

class ViewAttendance extends Component {
	componentDidMount() {
		const { teacherId } = this.props.navigation.state.params;
		this.props.getRecords({ teacherId });
	}
	render() {
		console.log(this.props.records)
		return (
			<View>
				<Text>ViewAttendance</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const { records } = state.attendance;
	return { records };
};


export default connect(mapStateToProps, { getRecords })(ViewAttendance);
