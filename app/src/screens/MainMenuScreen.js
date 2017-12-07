import React, { Component } from 'react';
import MainMenu from '../components/MainMenu';

class MainMenuScreen extends Component {
	static navigationOptions = {
		title: 'Main Menu'
	};

	render() {
		return (
			<MainMenu navigation={this.props.navigation} />
		);
	}
}

export default MainMenuScreen;
