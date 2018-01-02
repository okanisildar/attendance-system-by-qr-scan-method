import React, { Component } from 'react';
import CreateStudent from '../components/CreateStudent';

class CreateStudentScreen extends Component {
	static navigationOptions = {
		title: 'New Student'
	};
	
	render() {
		return (
			<CreateStudent navigation={this.props.navigation} />
		);
	}
}

export default CreateStudentScreen;
