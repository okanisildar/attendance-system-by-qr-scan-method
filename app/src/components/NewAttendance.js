import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAttendanceInfo } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class NewAttendace extends Component {

	onChangeTextHandler(value) {
		console.log(value);
		this.props.getAttendanceInfo(value);
	}

	onPressButton() {
		console.log(this.props)
		let { className, date, hours } = this.props;
		console.log(className, date, hours);
	}

	render() {
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
}

const mapStateToProps = ({ newAttendance }) => {
	return {
			className: newAttendance.className,
			date: newAttendance.date,
			hours: newAttendance.hours
	};
};

export default connect(mapStateToProps, { getAttendanceInfo })(NewAttendace);
