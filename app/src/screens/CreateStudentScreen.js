import React, { Component } from 'react';
import CreateStudent from '../components/CreateStudent';

class CreateStudentScreen extends Component {
	render() {
		return (
			<CreateStudent navigation={this.props.navigation} />
		);
	}
}

export default CreateStudentScreen;
