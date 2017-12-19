import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { getAttendanceInfo, saveAttendanceRecord } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button, Spinner } from './common';


class NewAttendace extends Component {
	state = {
    hasCameraPermission: null,
    isDateTimePickerVisible: false,
    isRepeating: false
  }

	onChangeTextHandler(value) {
		this.props.getAttendanceInfo(value);
	}

	async	onPressButton() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	async handleBarCodeRead(value) {
		const { data } = value.value;
		this.checkIfStudentExists(data);
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'false' });
	}

	checkIfStudentExists(data) {
		const { students } = this.props;
		if (students.includes(data)) {
			this.setState({ isRepeating: true });
		} else {
			students.push(data);
			this.setState({ isRepeating: false });
			const studentRecords = { prop: 'students', value: students };
			const isSuccessful = { prop: 'isSuccessful', value: true };
			this.onChangeTextHandler(isSuccessful);
			this.onChangeTextHandler(studentRecords);
		}
	}

	showDateTimePicker() {
		this.setState({ isDateTimePickerVisible: true });
	}

	hideDateTimePicker() {
		this.setState({ isDateTimePickerVisible: false });
	}

	saveAttendanceRecord() {
		const { courseName, date, hours, students } = this.props;
		const { teacherId } = this.props.navigation.state.params;
		this.props.saveAttendanceRecord({ courseName, date, hours, students, teacherId });
	}

	renderForm() {
		const { isRepeating } = this.state;
		const { courseName, hours, isSuccessful, result, loading } = this.props;
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
						<Button onPress={this.showDateTimePicker.bind(this)}>
							Choose Date
						</Button>
						<DateTimePicker
							isVisible={this.state.isDateTimePickerVisible}
							onConfirm={(value) => { 
								this.onChangeTextHandler({ prop: 'date', value }); 
								this.setState({ isDateTimePickerVisible: false });
							}}
							onCancel={this.hideDateTimePicker.bind(this)}
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
					{isSuccessful && !isRepeating &&
						<Text style={styles.successfulTextStyle}>
							Successfully saved, next student
						</Text>
					}
					{isRepeating &&
						<Text style={styles.successfulTextStyle}>
							Duplicated student
						</Text>
					}
					<FieldContainer>
						<Button onPress={this.onPressButton.bind(this)}>Open Scanning</Button>
					</FieldContainer>
					<FieldContainer>
					{loading ?
						<Spinner /> :
						<Button onPress={this.saveAttendanceRecord.bind(this)}>Save Attendance Record</Button>
					}
					</FieldContainer>
					{result && 
						<Text style={styles.successfulTextStyle}>
							Successfully saved
						</Text>
					}
				</ItemContainer>
			</MainContainer>
		);
	}

	renderCamera() {
		return (
			<MainContainer>
        <BarCodeScanner
          onBarCodeRead={(value) => this.handleBarCodeRead({ value })}
          style={{ height: 250, width: 250, alignSelf: 'center' }}
        />
      </MainContainer>
     
    );
	}

	renderLogic() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission == null || hasCameraPermission === false) {
			return this.renderForm();
		} 
			return this.renderCamera();
	}

	render() {
		return (
			this.renderLogic()
		);
	}
}

const styles = {
	successfulTextStyle: {
		color: 'green',
		alignSelf: 'center',
		fontSize: 20
	}
};

const mapStateToProps = ({ attendance }) => {
	return {
			courseName: attendance.courseName,
			date: attendance.date,
			hours: attendance.hours,
			students: attendance.students,
			isSuccessful: attendance.isSuccessful,
			result: attendance.result,
			loading: attendance.loading
	};
};

export default connect(mapStateToProps, { getAttendanceInfo, saveAttendanceRecord })(NewAttendace);
