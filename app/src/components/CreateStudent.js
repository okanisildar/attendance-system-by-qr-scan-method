import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Container, Item, Input, Button, Label } from 'native-base';
import { onChangeTextHandler, createStudent, getRecords } from '../actions';
import { Spinner } from './common';

class CreateStudent extends Component {

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPressed() {
		const { studentNumber, studentName, studentSurname, courses } = this.props;
		this.props.createStudent({ studentNumber, studentName, studentSurname, courses });
	}

	render() {
		const { studentNumber, name, surname, courses, loading, error, isSuccessful } = this.props;
		return (
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
					<Label style={styles.labelStyle}>Number:</Label>
						<Input
							placeholder="Number" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'studentNumber', value })}
							keyboardType="numeric" 
							value={studentNumber}
						/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Label style={styles.labelStyle}>Name:</Label>
							<Input
								autocorrect={false}
								placeholder="Name" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'studentName', value })}
								value={name}
							/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Label style={styles.labelStyle}>Surname:</Label>
							<Input 
								autocorrect={false}
								placeholder="Surname"
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'studentSurname', value })}
								value={surname}
							/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Label style={styles.labelStyle}>Course(s):</Label>
							<Input 
								autocorrect={false}
								placeholder="Course(s)"
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'courses', value })}
								label='Course(s)' 
								value={courses}
							/>
				</Item>
						{loading ? <Spinner /> :
							<Button 
								full primary rounded
								onPress={this.onButtonPressed.bind(this)}
								style={styles.submitButton}
							>
									<Text style={styles.buttonTextStyle}>Create Student</Text>
							</Button>
						}
						{isSuccessful &&
							<Text style={styles.successfulTextStyle}>
								Successfully saved
							</Text>
						}
						<Text style={styles.warningTextStyle}>
							{error}
						</Text>
		</Container>
    );
	}
}

const styles = {
	contentStyle: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 20,
		backgroundColor: '#c0deed',
		paddingLeft: 10,
		paddingRight: 10
	},
	labelStyle: {
		flex: 1
	},
	itemStyle: {
		borderColor: 'white',
		marginBottom: 10
	},
	inputStyle: {
		borderColor: '#fff',
		flex: 5
	},
	submitButton: {
		marginTop: 20,
		borderRadius: 15,
		backgroundColor: '#00aced'
	},
	buttonTextStyle: {
		color: '#fff',
		fontSize: 18
	},
	successfulTextStyle: {
		color: 'green',
		alignSelf: 'center',
		fontSize: 20
	},
	warningTextStyle: {
		color: 'red',
		alignSelf: 'center',
		fontSize: 20
	}
};

const mapStateToProps = state => {
	const { studentNumber, studentName, studentSurname, courses, error, loading, isSuccessful } = state.student;
	const { records } = state.attendance;
	return { studentNumber, studentName, studentSurname, error, loading, records, courses, isSuccessful }; 
};


export default connect(mapStateToProps, { onChangeTextHandler, createStudent, getRecords })(CreateStudent);

