import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.buttonStyle} disabled={props.disabled}>
				<Text style={styles.textStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1, 
		alignSelf: 'stretch', //it only position itself unlike alignItems (it tells all its children)
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#ddd'
	},
	textStyle: {
		alignSelf: 'center',
		color: '#000',
		fontSize: 16,
		fontWeight: '600', //it is for boldness/thinness of font
		paddingTop: 10,
		paddingBottom: 10
	}
};
	

export { Button };
