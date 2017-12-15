import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { getAttendanceInfo, saveAttendanceRecord } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';


class NewAttendace extends Component {

	state = {
    hasCameraPermission: null,
  }

	onChangeTextHandler(value) {
		this.props.getAttendanceInfo(value);
	}

	async	onPressButton() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	async handleBarCodeRead(value) {
		const { students } = this.props;
		students.push(value);
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'false' });
		const studentRecords = { prop: 'students', value: students };
		const isSuccessful = { prop: 'isSuccessful', value: true };
		this.onChangeTextHandler(isSuccessful);
		this.onChangeTextHandler(studentRecords);
	}

	saveAttendanceRecord() {
		const { courseName, date, hours, students } = this.props;
		//const { teacherId } = this.props.navigation.state.params;
		const teacherId = 3;
		this.props.saveAttendanceRecord({ courseName, date, hours, students, teacherId });
	}

	renderForm() {
		//const { isSuccessful } = this.state;
		const { courseName, date, hours, isSuccessful } = this.props;
		return (
			<MainContainer>
				<ItemContainer>
					<FieldContainer>
						<Input 
							placeholder="Course Name"
							label="Course Name" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'courseName', value })}
							value={courseName}
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
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission == null || hasCameraPermission === false) {
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
	return {
			courseName: newAttendance.courseName,
			date: newAttendance.date,
			hours: newAttendance.hours,
			students: newAttendance.students,
			isSuccessful: newAttendance.isSuccessful
	};
};

export default connect(mapStateToProps, { getAttendanceInfo, saveAttendanceRecord })(NewAttendace);
