import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler, login } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';


class LoginForm extends Component {
	static navigationOptions = {
		title: 'Please Login'
	};

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		const { email, password } = this.props;
		const { navigate } = this.props.navigation;
		//navigate('mainMenu')
		this.props.login({ email, password });
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
								placeholder="Password"
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'password', value })}
								label='Password' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
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
		password: state.auth.password
	};
};


export default connect(mapStateToProps, { onChangeTextHandler, login })(LoginForm);
