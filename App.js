import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as mapDefs from "./mapDefs";




export default function App() {


	function _doSomething(){

		alert(JSON.stringify(mapDefs.mapDef));
	};

	return (
		<View style={styles.container}>
			<View style={styles.container2}>
				<Text>This is cool!</Text>

				<Button style={styles.button}
					onPress={_doSomething}
					title="Learn More"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#808080',
		alignItems: 'center',
		justifyContent: 'center',
	},

	container2:
	{
		backgroundColor: '#ff0',
		height: 120,
		width: 200,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},

	button: {
		color: "#0080ff",
		marginVertical: 24
	}
});
