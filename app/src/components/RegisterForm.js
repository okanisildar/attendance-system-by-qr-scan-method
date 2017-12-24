import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner } from 'native-base';
import { onChangeTextHandler, signUp } from '../actions';
import { MainContainer, FieldContainer, ItemContainer } from './common';

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
			<Container style={styles.contentStyle}>
				<Item rounded style={styles.itemStyle}>
					<Icon active name='mail' />
					<Input
						placeholder="Email" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
						label='Email'
					/>
				</Item>
				<Item rounded style={styles.itemStyle}>
					<Icon active name='contact' />
					<Input
						placeholder="Name" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
						label='Name'
					/>
				</Item>
				<Item rounded style={styles.itemStyle}>
					<Icon active name='contact' />
					<Input
						placeholder="Surname" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
						label='Surname'
					/>
				</Item>
				<Item rounded style={styles.itemStyle}>
					<Icon active name='lock' />
					<Input 
						placeholder="Password"
						secureTextEntry
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'password', value })}
						label='Password' 
					/>
				</Item>
					<Text style={styles.errorTextStyle}>
						{this.props.singUpError}
					</Text>
							<Button full rounded dark onPress={this.onButtonPress.bind(this)}>
								<Text style={{ color: '#fff' }}>Sign Up</Text>
							</Button>
			</Container>
    );
  }
}

const styles = {
	contentStyle: {
		flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: '#c0deed'
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	itemStyle: {
		borderColor: 'white',
		marginBottom: 10
	}
};

const mapStateToProps = (state) => {
	const { email, password, name, surname, singUpError, loading } = state.auth;

	return { email, password, name, surname, singUpError, loading };
};


export default connect(mapStateToProps, { onChangeTextHandler, signUp })(RegisterForm);
