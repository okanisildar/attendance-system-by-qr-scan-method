import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainContainer, FieldContainer, Button } from './common';
import { getUser } from '../actions';

class MainMenu extends Component {
	componentDidMount() {
		const { _id } = this.props.navigation.state.params.user;
		this.props.getUser({ _id });
	}

	render() {
		const { navigate } = this.props.navigation;
		const { teacher } = this.props;
		return (
			<MainContainer>
				<FieldContainer>
					<Button onPress={() => navigate('newAttendance', { teacherId: teacher._id })}>
						Create new attendance record
					</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('viewAttendance', { teacherId: teacher._id })}>View attendance results</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('updateTeacherInfo', { teacher })}>
						Update Teacher Information
					</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('createStudent')}>Create Student</Button>
				</FieldContainer>
			</MainContainer>
		);
	}
}

const mapStateToProps = (state) => {
	const { teacher } = state.auth;
	return { teacher };
};

export default connect(mapStateToProps, { getUser })(MainMenu);

