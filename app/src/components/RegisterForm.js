import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner, Label } from 'native-base';
import { onChangeTextHandler, signUp } from '../actions';
import { MainContainer, FieldContainer, ItemContainer } from './common';

class RegisterForm extends Component {
	state = {
		validation: true
	}
	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		const { email, password, name, surname } = this.props;
		const { navigate } = this.props.navigation;
		if (email && password && name && surname) {
			this.setState({ validation: true });
			this.props.signUp({ email, password, name, surname });
		} else {
			this.setState({ validation: false });
		}
	}

  render() {
  	const { validation } = this.state;
  	const { email, name, surname, password, loading, signUpError, signUpSuccess, result } = this.props;
  	console.log()
    return (
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
					<Icon active name='mail' style={styles.iconStyle} />
					<Label style={styles.labelStyle}>Email</Label>
					<Input
						autoCorrect={false}
						style={styles.inputStyle}
						placeholder="Email" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
						value={email}
					/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Icon active name='contact' style={styles.iconStyle} />
					<Label style={styles.labelStyle}>Name</Label>
					<Input
						autoCorrect={false}
						style={styles.inputStyle}
						placeholder="Name" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
						value={name}
					/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Icon active name='contact' style={styles.iconStyle} />
					<Label style={styles.labelStyle}>Surname</Label>
					<Input
						autoCorrect={false}
						style={styles.inputStyle}
						placeholder="Surname" 
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
						value={surname}
					/>
				</Item>
				<Item inlineLabel style={styles.itemStyle}>
					<Icon active name='lock' style={styles.iconStyle} />
					<Label style={styles.labelStyle}>Password</Label>
					<Input 
						style={styles.inputStyle}
						placeholder="Password"
						secureTextEntry
						onChangeText={(value) => this.onChangeTextHandler({ prop: 'password', value })}
						value={password}
					/>
				</Item>
					{!validation &&
						<Text style={styles.errorTextStyle}>
						Please fill the form
						</Text>
					}
					{result &&
						<Text style={styles.successfulTextStyle}>
							{signUpSuccess}
						</Text>
					}
					<Text style={styles.errorTextStyle}>
						{signUpError}
					</Text>
					{loading ? 
						<Spinner /> :
						<Button full onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle} >
							<Text style={{ color: '#fff' }}>Sign Up</Text>
						</Button>
					}
					
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
		borderColor: '#fff',
		marginBottom: 10,
		borderRadius: 15
	},
	labelStyle: {
		flex: 1
	},
	iconStyle: {
		marginLeft: 10
	},
	inputStyle: {
		flex: 2.5
	},
	buttonStyle: {
		borderRadius: 15,
		backgroundColor: '#00aced',
		marginLeft: 10,
		marginRight: 10
	},
	successfulTextStyle: {
		color: 'green',
		alignSelf: 'center',
		fontSize: 20
	},
};

const mapStateToProps = (state) => {
	const { email, password, name, surname, signUpError, signUpSuccess, loading, result } = state.auth;

	return { email, password, name, surname, signUpError, signUpSuccess, loading, result };
};


export default connect(mapStateToProps, { onChangeTextHandler, signUp })(RegisterForm);
