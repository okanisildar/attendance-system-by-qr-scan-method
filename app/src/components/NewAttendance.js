import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { Container, Item, Input, Icon, Button, Spinner, Label } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { getAttendanceInfo, saveAttendanceRecord } from '../actions';
import { MainContainer, FieldContainer, ItemContainer } from './common';


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
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
				<Label>Course Name:</Label>
						<Input 
							style={styles.inputStyle}
							placeholder="Course Name"
							label="Course Name" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'courseName', value })}
							value={courseName}
						/>
				</Item>
				
						<Button full light onPress={this.showDateTimePicker.bind(this)} style={styles.buttonStyle}>
							<Text style={{ color: '#000', fontSize: 18 }}>Choose Date</Text>
						</Button>
						<DateTimePicker
							isVisible={this.state.isDateTimePickerVisible}
							onConfirm={(value) => { 
								this.onChangeTextHandler({ prop: 'date', value }); 
								this.setState({ isDateTimePickerVisible: false });
							}}
							onCancel={this.hideDateTimePicker.bind(this)}
						/>

				<Item inlineLabel style={styles.itemStyle}>
				<Label>Hour(s):</Label>
						<Input
							placeholder="Hour(s)" 
							label="Hour(s)"
							keyboardType="numeric" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'hours', value })}
							value={hours}
						/>
				</Item>
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
				
					<Button full light onPress={this.onPressButton.bind(this)} style={styles.buttonStyle}>
						<Text style={{ color: '#000', fontSize: 18 }}>Open Scanning</Text>
					</Button>
			
				
				{loading ?
					<Spinner /> :
					<Button 
						full primary rounded
						onPress={this.saveAttendanceRecord.bind(this)} 
						style={styles.submitButton}
					>
						<Text style={{ color: '#fff', fontSize: 18 }}>Save Attendance Record</Text>
					</Button>
					}
			
					{result && 
						<Text style={styles.successfulTextStyle}>
							Successfully saved
						</Text>
					}
			</Container>
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
	contentStyle: {
		paddingTop: 20,
		backgroundColor: '#c0deed',
		paddingLeft: 10,
		paddingRight: 10
	},
	successfulTextStyle: {
		color: 'green',
		alignSelf: 'center',
		fontSize: 20
	},
	itemStyle: {
		borderColor: 'white',
		marginBottom: 10
	},
	inputStyle: {
		borderColor: '#fff'
	},
	buttonStyle: {
		marginBottom: 10
	},
	submitButton: {
		marginTop: 20,
		borderRadius: 15,
		backgroundColor: '#00aced'
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
