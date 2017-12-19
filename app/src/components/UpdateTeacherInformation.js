import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextUpdateTeacher, updateTeacher } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

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
			<MainContainer>
				<ItemContainer>
					<FieldContainer>
						<Input 
							placheholder="Name"
							label="Name"
							value={name}
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input 
							placheholder="Surname"
							label="Surname"
							value={surname}
							onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
						/>
					</FieldContainer>
					<FieldContainer>
						<Button onPress={this.onButtonPressed.bind(this, name, surname)}>Update</Button>
					</FieldContainer>
					{isSuccessful && 
						<FieldContainer>
							<Text style={styles.successfulTextStyle}>
								Successfully updated
							</Text>
						</FieldContainer>
					}
				</ItemContainer>
			</MainContainer>
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

const mapStateToProps = (state) => {
	const { _id, name, surname, isSuccessful } = state.update;
	return { _id, name, surname, isSuccessful };
};

export default connect(mapStateToProps, 
	{ onChangeTextUpdateTeacher, updateTeacher })(UpdateTeacherInformation);
