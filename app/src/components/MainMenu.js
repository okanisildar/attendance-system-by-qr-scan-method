import React, { Component } from 'react';
import { Text } from 'react-native';
import MainContainer from './common/MainContainer';
import Button from './common/Button';

class MainMenu extends Component {
	render() {
		return (
			<MainContainer>
				<Text>Main Menu</Text>
				<Button>Create new attendance record</Button>
			</MainContainer>
		);
	}
}

export default MainMenu;
