import React from 'react';
import { View } from 'react-native';

const FieldContainer = (props) => (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
);

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};
export { FieldContainer };
