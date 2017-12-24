import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
	const { containerStyle, textStyle, labelStyle } = styles;
	const { label, secureTextEntry, onChangeText } = props;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				keyboardType={props.keyboardType}
				autoCorrect={false}
				icon={props.icon}
				placeholder={props.placeholder} 
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
				style={textStyle}
				value={props.value} 
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		borderWidth: 2,
		borderColor: '#ddd',
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	textStyle: {
		flex: 2.5,
		height: 40,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 15,
		fontSize: 18,
		lineHeight: 23
	},
	labelStyle: {
		fontSize: 16,
		paddingLeft: 20,
		flex: 1.5
	}
};
export { Input };

