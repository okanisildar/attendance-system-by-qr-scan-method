import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RegisterForm from '../components/RegisterForm';

class AuthScreen extends Component {
	render() {
		return (
			<RegisterForm navigation={this.props.navigation} />
		);
	}
}

export default AuthScreen;
