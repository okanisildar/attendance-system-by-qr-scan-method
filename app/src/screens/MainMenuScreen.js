import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/common/Button';

class MainMenuScreen extends Component {
	static navigationOptions = {
		title: 'Main Menu'
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>MainMenuScreen</Text>
				<Button onPress={() => navigate('auth')}>Click</Button>
			</View>
		);
	}
}

export default MainMenuScreen;
