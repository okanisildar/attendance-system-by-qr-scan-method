import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler } from '../actions';
import MainContainer from './common/MainContainer';
import Input from './common/Input';
import FieldContainer from './common/FieldContainer';
import ItemContainer from './common/ItemContainer';
import Button from './common/Button';

class LoginForm extends Component {

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		const { email, password } = this.props;
		console.log(email, password);
	}

  render() {
    return (
			<View style={{ flex: 1 }}>
				<MainContainer>
					<ItemContainer style={{ marginTop: 200 }}>
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


export default connect(mapStateToProps, { onChangeTextHandler })(LoginForm);
