import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class RegisterForm extends Component {
	static navigationOptions = {
		title: 'Register'
	};

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		//Not working
		fetch('http://10.127.59.189:3000/users/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.props.email,
				name: this.props.name,
				surname: this.props.surname,
				password: this.props.password
			})
		})
		.then(result => result.json()
      .then(resultJson => console.log(resultJson)));
	}

  render() {
    return (
			<View style={{ flex: 1 }}>
				<MainContainer>
					<ItemContainer>
						<FieldContainer>
							<Input
								placeholder="Email" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
								label='Email'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input
								placeholder="Name" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
								label='Name'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input
								placeholder="Surname" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
								label='Surname'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input 
								placeholder="Password"
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'password', value })}
								label='Password' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Button onPress={this.onButtonPress.bind(this)}>Sign Up</Button>
						</FieldContainer>
					</ItemContainer>
				</MainContainer>
			</View>
    );
  }
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		name: state.auth.name,
		surname: state.auth.name
	};
};


export default connect(mapStateToProps, { onChangeTextHandler })(RegisterForm);
