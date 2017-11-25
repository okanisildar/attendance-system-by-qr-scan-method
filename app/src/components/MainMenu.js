import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainContainer, FieldContainer, Button } from './common';

class MainMenu extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<MainContainer>
				<FieldContainer>
					<Button onPress={() => navigate('newAttendance')}>Create new attendance record</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('auth')}>Check attendance results</Button>
				</FieldContainer>
			</MainContainer>
		);
	}
}

export default MainMenu;
