import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Item, Input, Icon, Button, Spinner } from 'native-base';
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
		//navigate('mainMenu')
		this.props.login({ email, password, navigate });
	}

  render() {
		const { loading, error } = this.props; 
    return (
			<Container style={styles.contentStyle}>
				<Item rounded style={styles.itemStyle}>
					<Icon active name='mail' />
					<Input
					autoCorrect={false}
					placeholder="Email" 
					icon={<Icon name="user" />}
					onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
					label='Email'
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
						{error}
					</Text>
				{loading ? 
					<Spinner /> :
					<Button full rounded dark onPress={this.onButtonPress.bind(this)}>
						<Text style={{ color: '#fff' }}>Login</Text>
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
		borderColor: 'white',
		marginBottom: 10
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
