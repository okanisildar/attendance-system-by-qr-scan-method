import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler, signUp } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class RegisterForm extends Component {
	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		//Not working
		const { email, password, name, surname } = this.props;
		const { navigate } = this.props.navigation;
		this.props.signUp({ email, password, name, surname, navigate });
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
							<Text style={styles.errorTextStyle}>
								{this.props.error}
							</Text>
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

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = (state) => {
	const { email, password, name, surname, error, loading } = state.auth;

	return { email, password, name, surname, error, loading };
};


export default connect(mapStateToProps, { onChangeTextHandler, signUp })(RegisterForm);
