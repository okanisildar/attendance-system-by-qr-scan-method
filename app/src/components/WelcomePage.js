import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Item, Input, Icon, Button, Spinner } from 'native-base';

class WelcomePage extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<Container style={styles.containerStyle}>
				<Text style={styles.titleStyle}>Student attendance system</Text>
				<Image
					style={styles.imageStyle}
          source={require('../images/logo.png')} 
        />
				<Text style={styles.textStyle}>If you do not have account please</Text>
					<Button 
						full rounded dark 
						onPress={() => navigate('register')} 
						style={styles.buttonStyle} 
					>
						<Text style={styles.buttonTextStyle}>
							Register
						</Text>
					</Button>
				<Text style={styles.textStyle}>or </Text>
					<Button full rounded dark onPress={() => navigate('login')} style={styles.buttonStyle}>
						<Text style={styles.buttonTextStyle}>Login</Text>
					</Button>	
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#c0deed'
	},
	imageStyle: {
		width: 100,
		height: 100,
		alignSelf: 'center',
		marginTop: 15
	},
	titleStyle: {
		fontSize: 30,
		color: '#000',
		textAlign: 'center',
		marginTop: 15
	},
	textStyle: {
		fontSize: 20,
		color: '#000',
		textAlign: 'center',
		marginTop: 15,
		marginBottom: 15
	},
	buttonStyle: {
		marginLeft: 25,
		marginRight: 25
	},
	buttonTextStyle: {
		color: '#fff',
		fontSize: 20
	},
	linkStyle: {
		fontSize: 14,
		color: '#0bb2e5',
		textAlign: 'center'
	}
};

export default WelcomePage;
