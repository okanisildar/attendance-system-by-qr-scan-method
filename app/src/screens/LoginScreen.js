import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class RegisterScreen extends Component {
	render() {
		return (
			<LoginForm navigation={this.props.navigation} />
		);
	}
}

export default RegisterScreen;
