import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />

			<Text style={styles.text}>Hello monorepo!</Text>

			<SafeAreaView />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		fontSize: 27,
	},
});

export default App;
