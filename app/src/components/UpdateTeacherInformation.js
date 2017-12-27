import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Item, Input, Button, Label } from 'native-base';
import { onChangeTextUpdateTeacher, updateTeacher } from '../actions';

class UpdateTeacherInformation extends Component {
	componentWillMount() {
		const { teacher } = this.props.navigation.state.params;
		_.each(teacher, (value, prop) => {
				this.props.onChangeTextUpdateTeacher({ prop, value });
		});
  }

	onChangeTextHandler(value) {
		this.props.onChangeTextUpdateTeacher(value);
	}

	onButtonPressed(name, surname) {
		const { _id } = this.props;
		this.props.updateTeacher({ _id, name, surname });
	}

	render() {
		const { name, surname, isSuccessful } = this.props;
		return (
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
					<Label style={styles.labelStyle}>Name:</Label>
					<Input 
						autocorrect={false}
						placheholder="Name"
						label="Name"
						value={name}
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
						style={styles.inputStyle}
					/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Label>Surname:</Label>
					<Input 
						autocorrect={false}
						placheholder="Surname"
						label="Surname"
						value={surname}
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
						style={styles.inputStyle}
					/>
				</Item>
						<Button 
							full primary rounded
							onPress={this.onButtonPressed.bind(this, name, surname)}
							style={styles.submitButton}
						>
							<Text style={styles.buttonTextStyle}>Update</Text>
						</Button>
					{isSuccessful && 
							<Text style={styles.successfulTextStyle}>
								Successfully updated
							</Text>
					}
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
		flex: 3
	},
	submitButton: {
		marginTop: 20,
		borderRadius: 15,
		backgroundColor: '#00aced'
	},
	successfulTextStyle: {
		color: 'green',
		alignSelf: 'center',
		fontSize: 20,
		marginTop: 10
	},
	buttonTextStyle: {
		color: '#fff',
		fontSize: 18
	}
};

const mapStateToProps = (state) => {
	const { _id, name, surname, isSuccessful } = state.update;
	return { _id, name, surname, isSuccessful };
};

export default connect(mapStateToProps, 
	{ onChangeTextUpdateTeacher, updateTeacher })(UpdateTeacherInformation);
