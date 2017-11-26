import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomePage extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.containerStyle}>
				<Text style={styles.titleStyle}>Student attendance system</Text>
				<Text style={styles.textStyle}>If you do not have account please
					<Text style={styles.linkStyle} onPress={() => navigate('register')}> Register</Text>
				</Text>
				<Text style={styles.textStyle}>or 
					<Text style={styles.linkStyle} onPress={() => navigate('login')}> Login </Text>
					here
				</Text>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		marginTop: 20
	},
	titleStyle: {
		fontSize: 20,
		color: '#000',
		textAlign: 'center'
	},
	textStyle: {
		fontSize: 14,
		color: '#000',
		textAlign: 'center',
		marginTop: 15
	},
	linkStyle: {
		fontSize: 14,
		color: '#0bb2e5',
		textAlign: 'center'
	}
};

export default WelcomePage;
