import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { getAttendanceInfo } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class NewAttendace extends Component {
	state = {
    hasCameraPermission: null,
    students: [],
    showModal: false
  }

	onChangeTextHandler(value) {
		console.log(value);
		this.props.getAttendanceInfo(value);
	}

	async	onPressButton() {
		const { className, date, hours } = this.props;
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	async handleBarCodeRead(value) {
		let { students } = this.state;
		students.push(value);
		this.setState({ showModal: true, students });
	}

	renderForm() {
		return (
			<MainContainer>
				<ItemContainer>
					<FieldContainer>
						<Input 
							placeholder="Class Name"
							label="Class Name" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'className', value })}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input
							placeholder="16-10-2017" 
							label="Date"
							keyboardType="numeric" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'date', value })}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input
							placeholder="Hour(s)" 
							label="Hour(s)"
							keyboardType="numeric" 
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'hours', value })}
						/>
					</FieldContainer>
					<FieldContainer>
						<Button onPress={this.onPressButton.bind(this)}>Save and Open Scanning</Button>
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
          style={{ flex: 1 }}
        />
      </MainContainer>
     
    );
	}

	renderLogic() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return this.renderForm();
		} else {
			return this.renderCamera();
		}
	}

	render() {
		console.log(this.state.students);
		return (
			this.renderLogic()
		);
	}
}

const styles = {
	modalStyle: {
		flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
	}
};

const mapStateToProps = ({ newAttendance }) => {
	return {
			className: newAttendance.className,
			date: newAttendance.date,
			hours: newAttendance.hours
	};
};

export default connect(mapStateToProps, { getAttendanceInfo })(NewAttendace);
