import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner, Text } from 'native-base';
import { MainContainer, FieldContainer } from './common';
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
			<Container style={styles.contentStyle}>
				
					<Button  full onPress={() => navigate('newAttendance', { teacherId: teacher._id })}>
						<Text>Create new attendance record</Text>
					</Button>
				
			
					<Button style={styles.buttonStyle} full rounded primary onPress={() => navigate('viewAttendance', { teacherId: teacher._id })}>
						<Text>View attendance results</Text>
					</Button>
				
				
					<Button full rounded  onPress={() => navigate('updateTeacherInfo', { teacher })}>
						<Text>Update Teacher Information</Text>
					</Button>
	

					<Button full rounded dark onPress={() => navigate('createStudent')}>
					<Text>Create Student</Text>
					</Button>
	
			</Container>
		);
	}
}

const styles = {
	contentStyle: {
		flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
		backgroundColor: '#c0deed',
		paddingTop: 100,
		paddingBottom: 100
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	itemStyle: {
		borderColor: 'white',
		marginBottom: 10
	},
	buttonStyle: {
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#00aced'
	}
};

const mapStateToProps = (state) => {
	const { teacher } = state.auth;
	return { teacher };
};

export default connect(mapStateToProps, { getUser })(MainMenu);

