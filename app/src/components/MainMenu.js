import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner, Text } from 'native-base';
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
				<Button 
					style={styles.buttonStyle} full 
					onPress={() => navigate('newAttendance', { teacherId: teacher._id })} 
				>
					<Text>Create new attendance record</Text>
				</Button>

				<Button 
					style={styles.buttonStyle} full 
					onPress={() => navigate('viewAttendance', { teacherId: teacher._id })} 
				>
					<Text>View attendance results</Text>
				</Button>

				<Button 
					style={styles.buttonStyle} full 
					onPress={() => navigate('updateTeacherInfo', { teacher })} 
				>
					<Text>Update Teacher Information</Text>
				</Button>

				<Button 
					style={styles.buttonStyle} full 
					onPress={() => navigate('createStudent')}
				>
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
		paddingTop: 80,
		paddingBottom: 100
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	buttonStyle: {
		borderRadius: 15,
		backgroundColor: '#00aced',
		marginLeft: 10,
		marginRight: 10
	}
};

const mapStateToProps = (state) => {
	const { teacher } = state.auth;
	return { teacher };
};

export default connect(mapStateToProps, { getUser })(MainMenu);

