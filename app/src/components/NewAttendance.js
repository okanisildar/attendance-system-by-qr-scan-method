import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { Container, Item, Input, Button, Spinner, Label } from 'native-base';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import 
	{ getAttendanceInfo, saveAttendanceRecord, listStudentsByCourse } 
from '../actions';


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
		this.checkIfStudentExists();
		this.checkIfStudentAlreadySaved(data);
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'false' });
	}

	checkIfStudentExists() {
		const { courseName } = this.props;
		this.props.listStudentsByCourse({ courseName });
			console.log(this.props.allStudents);
	}

	checkIfStudentAlreadySaved(data) {
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
		const { courseName, hours, isSuccessful, result, loading, date } = this.props;		
		return (
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
				<Label>Course Code:</Label>
						<Input 
							style={styles.inputStyle}
							placeholder="Course Name"
							label="Course Name" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'courseName', value })}
							value={courseName}
						/>
				</Item>
					<Button 
						full 
						light 
						onPress={this.showDateTimePicker.bind(this)} 
						style={styles.buttonStyle}
					>
						{date === '' ?
							<Text style={{ color: '#000', fontSize: 18 }}>Choose Date</Text> :
							<Text style={{ color: 'green', fontSize: 18 }}>
								{moment(date).format('DD/MM/YYYY')}
							</Text>
						}
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
			<Container>
        <BarCodeScanner
          onBarCodeRead={(value) => this.handleBarCodeRead({ value })}
          style={{ flex: 1 }}
        />
        <View style={styles.qrHeader}>
          <Text style={styles.qrHeaderText}>Scan QR Code</Text>
        </View>
      </Container>
     
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
	},
	qrHeader: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  qrHeaderText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 20
  }
};

const mapStateToProps = (state) => {
	return {
			courseName: state.attendance.courseName,
			date: state.attendance.date,
			hours: state.attendance.hours,
			students: state.attendance.students,
			isSuccessful: state.attendance.isSuccessful,
			result: state.attendance.result,
			loading: state.attendance.loading,
			allStudents: state.student.allStudents
	};
};

export default connect(mapStateToProps, 
	{ getAttendanceInfo, saveAttendanceRecord, listStudentsByCourse })(NewAttendace);
