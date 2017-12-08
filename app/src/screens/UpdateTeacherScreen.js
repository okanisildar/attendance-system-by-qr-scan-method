import React, { Component } from 'react';
import UpdateTeacherInformation from '../components/UpdateTeacherInformation';

class UpdateTeacherScreen extends Component {
	static navigationOptions = {
		title: 'Update Teacher'
	};

	render() {
		return (
			<UpdateTeacherInformation navigation={this.props.navigation} />
		);
	}
}

export default UpdateTeacherScreen;
