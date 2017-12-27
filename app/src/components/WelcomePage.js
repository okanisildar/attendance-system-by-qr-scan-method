import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Button } from 'native-base';

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
						full 
						onPress={() => navigate('register')} 
						style={styles.buttonStyle} 
					>
						<Text style={styles.buttonTextStyle}>
							Register
						</Text>
					</Button>
				<Text style={styles.textStyle}>or </Text>
					<Button full onPress={() => navigate('login')} style={styles.buttonStyle}>
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
		width: 150,
		height: 150,
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
		borderRadius: 15,
		backgroundColor: '#00aced',
		marginLeft: 10,
		marginRight: 10
	},
	buttonTextStyle: {
		color: '#fff',
		fontSize: 18
	},
	linkStyle: {
		fontSize: 14,
		color: '#0bb2e5',
		textAlign: 'center'
	}
};

export default WelcomePage;
