import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeTextUpdateTeacher, updateTeacher } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class UpdateTeacherInformation extends Component {
	componentWillMount() {
		const { user } = this.props.navigation.state.params;
		console.log(user)
		_.each(user, (value, prop) => {
				this.props.onChangeTextUpdateTeacher({ prop, value });
		});
  }

	onChangeTextHandler(value) {
		this.props.onChangeTextUpdateTeacher(value);
	}

	onButtonPressed(name, surname) {
		const { _id, navigation } = this.props;
		//const { navigate } = this.props.navigation;
		this.props.updateTeacher({ _id, name, surname });
	}

	render() {
		const { name, surname } = this.props;
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
				</ItemContainer>
			</MainContainer>
		);
	}
}

const mapStateToProps = (state) => {
	const { _id, name, surname } = state.update;
	return { _id, name, surname };
};

export default connect(mapStateToProps, 
	{ onChangeTextUpdateTeacher, updateTeacher })(UpdateTeacherInformation);
