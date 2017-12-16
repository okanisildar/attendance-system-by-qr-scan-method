import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={props.size || 'large'} color={props.size || 'blue'} />
		</View>
	);
};


const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };
