import { View, Text, StyleSheet, Butten } from 'react-native';
import React from 'react';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is Over!</Text>
			<Text>Number of Rounds: {roundsNumber} </Text>
			<Text>Number was: {userNumber} </Text>
			<Button title='NEW GAME' onPress={onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default GameOverScreen;
