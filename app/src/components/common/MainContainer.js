import React from 'react';
import { View } from 'react-native';

const MainContainer = (props) => (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
);

const styles = {
	containerStyle: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 25,
		marginBottom: 5
	}
};
export default MainContainer;
