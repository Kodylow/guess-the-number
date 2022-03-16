import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Start a new game!</Text>
			<Card>
				<Text>Select a Number:</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Reset' onPress={() => {}} color={Colors.accent} />
					</View>
					<View style={styles.button}>
						<Button title='Confirm' color={Colors.primary} />
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 20,
	},
	buttonContainer: {
		flexdirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
});

export default StartGameScreen;
