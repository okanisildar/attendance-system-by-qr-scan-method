import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeTextHandler } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class UpdateTeacherInformation extends Component {
	componentDidMount() {
		let { user } = this.props.navigation.state.params.data;
		_.each(user, (value, prop) => {
				this.props.onChangeTextHandler({ prop, value });
		});
  }
	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
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
