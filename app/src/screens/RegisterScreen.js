import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';

class RegisterScreen extends Component {
	static navigationOptions = {
		title: 'Create Account'
	};
	render() {
		return (
			<RegisterForm navigation={this.props.navigation} />
		);
	}
}

export default RegisterScreen;
