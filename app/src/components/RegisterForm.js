import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler, signUp } from '../actions';
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
		const { email, password, name, surname } = this.props;
		const { navigate } = this.props.navigation;
		console.log(this.props);
		this.props.signUp({ email, password, name, surname });
		//navigate('mainMenu');
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

const mapStateToProps = (state) => {
	const { email, password, name, surname } = state.auth;

	return { email, password, name, surname };
};


export default connect(mapStateToProps, { onChangeTextHandler, signUp })(RegisterForm);
