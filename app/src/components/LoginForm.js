import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner, Label } from 'native-base';
import { onChangeTextHandler, login } from '../actions';

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
		this.props.login({ email, password, navigate });
	}

  render() {
		const { loading, error } = this.props; 
    return (
			<Container style={styles.contentStyle}>
				<Item inlineLabel style={styles.itemStyle}>
					<Icon active name='mail' style={styles.iconStyle} />
					<Label style={styles.labelStyle}>Email</Label>
					<Input
					style={styles.inputStyle}
					autoCorrect={false}
					placeholder="Email" 
					icon={<Icon name="user" />}
					onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
					label='Email'
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
						label='Password' 
					/>
				</Item>
					<Text style={styles.errorTextStyle}>
						{error}
					</Text>
				{loading ? 
					<Spinner /> :
					<Button full onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
						<Text style={styles.buttonTextStyle}>Login</Text>
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
    paddingTop: 70,
		backgroundColor: '#c0deed'
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
	buttonStyle: {
		borderRadius: 15,
		backgroundColor: '#00aced',
		marginLeft: 10,
		marginRight: 10
	},
	buttonTextStyle: {
		fontSize: 18,
		color: '#fff'
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};


export default connect(mapStateToProps, { onChangeTextHandler, login })(LoginForm);
