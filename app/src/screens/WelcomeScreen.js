import React, { Component } from 'react';
import WelcomePage from '../components/WelcomePage';

class WelcomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome'
	};

	render() {
		return (
			<WelcomePage navigation={this.props.navigation} />
		);
	}
}

export default WelcomeScreen;
