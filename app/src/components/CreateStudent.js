import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { onChangeTextHandler, createStudent, getRecords } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button, Spinner } from './common';

class CreateStudent extends Component {

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPressed() {
		const { studentNumber, name, surname, courses } = this.props;
		this.props.createStudent({ studentNumber, name, surname, courses });
	}

	render() {
		const { loading, error, isSuccessful } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<MainContainer>
					<ItemContainer>
					<FieldContainer>
							<Input
								placeholder="Number" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'studentNumber', value })}
								label='Number'
								keyboardType="numeric" 
							/>
						</FieldContainer>
						<FieldContainer>
							<Input
								placeholder="Name" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
								label='Name'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input 
								placeholder="Surname"
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
								label='Surname' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Input 
								placeholder="Course(s)"
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'courses', value })}
								label='Course(s)' 
							/>
						</FieldContainer>
						<FieldContainer>
						{loading ? <Spinner /> :
							<Button onPress={this.onButtonPressed.bind(this)}>Create Student</Button>
						}
						</FieldContainer>
						{isSuccessful &&
							<Text style={styles.successfulTextStyle}>
								Successfully saved, next student
							</Text>
						}
						<Text style={styles.warningTextStyle}>
							{error}
						</Text>
					</ItemContainer>
				</MainContainer>
			</View>
    );
	}
}

const styles = {
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
	const { studentNumber, name, surname, courses, error, loading, isSuccessful } = state.student;
	const { records } = state.attendance;
	return { studentNumber, name, surname, error, loading, records, courses, isSuccessful }; 
};


export default connect(mapStateToProps, { onChangeTextHandler, createStudent, getRecords })(CreateStudent);

