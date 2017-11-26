import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';

class RegisterScreen extends Component {
	render() {
		return (
			<RegisterForm navigation={this.props.navigation} />
		);
	}
}

export default RegisterScreen;
