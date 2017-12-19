import React from 'react';
import { View } from 'react-native';

const MainContainer = (props) => (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
);

const styles = {
	containerStyle: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		marginTop: 20,
		marginBottom: 5
	}
};
export { MainContainer };
