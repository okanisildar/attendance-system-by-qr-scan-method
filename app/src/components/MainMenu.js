import React, { Component } from 'react';
import { MainContainer, FieldContainer, Button } from './common';

class MainMenu extends Component {
	render() {
		const { navigate, state } = this.props.navigation;
		console.log(state);
		return (
			<MainContainer>
				<FieldContainer>
					<Button onPress={() => navigate('newAttendance')}>Create new attendance record</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('viewAttendance')}>View attendance results</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('updateTeacherInfo', { data: state.params.user })}>
						Update Teacher Information
					</Button>
				</FieldContainer>
			</MainContainer>
		);
	}
}

export default MainMenu;
