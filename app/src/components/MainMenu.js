import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainContainer, FieldContainer, Button } from './common';
import { getUser } from '../actions';

class MainMenu extends Component {
	componentDidMount() {
		/*console.log("ad")
		const { _id } = this.props.navigation.state.params.user.user;
		this.props.getUser({ _id });*/
	}

	render() {
		const { navigate } = this.props.navigation;
		//const { user } = this.props;
		return (
			<MainContainer>
				<FieldContainer>
					<Button onPress={() => navigate('newAttendance')}>Create new attendance record</Button>
				</FieldContainer>
				<FieldContainer>
					<Button onPress={() => navigate('viewAttendance')}>View attendance results</Button>
				</FieldContainer>
				<FieldContainer>
					{/*<Button onPress={() => navigate('updateTeacherInfo', { user })}>
						Update Teacher Information
					</Button>*/}
				</FieldContainer>
			</MainContainer>
		);
	}
}

const mapStateToProps = (state) => {
	const { user } = state.auth;
	return { user };
};

export default connect(mapStateToProps, { getUser })(MainMenu);

