import React, { Component } from 'react';
import { MainContainer, FieldContainer, Button } from './common';

class MainMenu extends Component {
	render() {
		const { navigate, state } = this.props.navigation;
		console.log(state.params);
		return (
			<MainContainer>
				<FieldContainer>
					<Button onPress={() => navigate('newAttendance')}>Create new attendance record</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('viewAttendance')}>View attendance results</Button>
				</FieldContainer>
			</MainContainer>
		);
	}
}

export default MainMenu;
