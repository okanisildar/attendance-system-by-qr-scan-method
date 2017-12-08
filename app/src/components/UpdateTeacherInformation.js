import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeTextHandler } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class UpdateTeacherInformation extends Component {
	render() {
		const { user } = this.props.navigation.state.params.data;
		console.log(user)
		return (
			<MainContainer>
				<ItemContainer>
					<FieldContainer>
						<Input 
							placheholder="Name"
							label="Name"
							value={user.name}
						/>
					</FieldContainer>
					<FieldContainer>
						<Input 
							placheholder="Surname"
							label="Surname"
							value={user.surname}
						/>
					</FieldContainer>
					<FieldContainer>
						<Button>Update</Button>
					</FieldContainer>
				</ItemContainer>
			</MainContainer>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, surname } = state.update;
	return { name, surname };
};

export default connect(mapStateToProps, { onChangeTextHandler })(UpdateTeacherInformation);
