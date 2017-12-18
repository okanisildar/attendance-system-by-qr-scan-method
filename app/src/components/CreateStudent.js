import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { onChangeTextHandler, createStudent, getRecords } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class CreateStudent extends Component {

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPressed() {
		const { studentNumber, name, surname, courses } = this.props;
		console.log(courses)
		this.props.createStudent({ studentNumber, name, surname, courses });
	}

	render() {
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
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
								label='Surname' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Input 
								placeholder="Course(s)"
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'courses', value })}
								label='Course(s)' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Button onPress={this.onButtonPressed.bind(this)}>Create Student</Button>
						</FieldContainer>
					</ItemContainer>
				</MainContainer>
			</View>
    );
	}
}

const mapStateToProps = state => {
	const { studentNumber, name, surname, error, loading, courses } = state.student;
	const { records } = state.attendance;
	return { studentNumber, name, surname, error, loading, records, courses }; 
};


export default connect(mapStateToProps, { onChangeTextHandler, createStudent, getRecords })(CreateStudent);

