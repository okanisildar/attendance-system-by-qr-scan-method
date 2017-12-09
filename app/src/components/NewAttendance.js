import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { getAttendanceInfo } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class NewAttendace extends Component {
	state = {
    hasCameraPermission: null,
    students: [],
    isSuccessful: null
  }

	onChangeTextHandler(value) {
		this.props.getAttendanceInfo(value);
	}

	async	onPressButton() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	async handleBarCodeRead(value) {
		const { students } = this.state;
		students.push(value);
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'false', students, isSuccessful: true });
		const studentsField = { prop: 'studentsField', value: students };
		this.onChangeTextHandler(studentsField);
	}

	saveAttendanceRecord() {
		const { className, date, hours, studentsField } = this.props;
		console.log(className, studentsField);
	}

	renderForm() {
		const { isSuccessful } = this.state;
		const { className, date, hours } = this.props;
		return (
			<MainContainer>
				<ItemContainer>
					<FieldContainer>
						<Input 
							placeholder="Class Name"
							label="Class Name" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'className', value })}
							value={className}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input
							placeholder="16-10-2017" 
							label="Date"
							keyboardType="numeric" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'date', value })}
							value={date}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input
							placeholder="Hour(s)" 
							label="Hour(s)"
							keyboardType="numeric" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'hours', value })}
							value={hours}
						/>
					</FieldContainer>
					{isSuccessful && 
						<FieldContainer>
							<Text style={styles.successfulTextStyle}>
								 Successfully saved, next student
							</Text>
						</FieldContainer>
					}
					<FieldContainer>
						<Button onPress={this.onPressButton.bind(this)}>Open Scanning</Button>
					</FieldContainer>
					<FieldContainer>
						<Button onPress={this.saveAttendanceRecord.bind(this)}>Save Attendance Record</Button>
					</FieldContainer>
				</ItemContainer>
			</MainContainer>
		);
	}

	renderCamera() {
		return (
			<MainContainer>
        <BarCodeScanner
          onBarCodeRead={(value) => this.handleBarCodeRead({ value })}
          style={{ height: 250, width: 250 }}
        />
      </MainContainer>
     
    );
	}

	renderLogic() {
		const { hasCameraPermission, students } = this.state;
		console.log(students)
		if (hasCameraPermission == null || hasCameraPermission == false) {
			return this.renderForm();
		} else {
			return this.renderCamera();
		}
	}

	render() {
		//console.log(this.state.students);
		return (
			this.renderLogic()
		);
	}
}

const styles = {
	successfulTextStyle: {
		color: 'green'
	}
};

const mapStateToProps = ({ newAttendance }) => {
	console.log(newAttendance)
	return {
			className: newAttendance.className,
			date: newAttendance.date,
			hours: newAttendance.hours,
			studentsField: newAttendance.studentsField
	};
};

export default connect(mapStateToProps, { getAttendanceInfo })(NewAttendace);
