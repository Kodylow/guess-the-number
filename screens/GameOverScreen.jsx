import { View, Text, StyleSheet, Button, Image } from 'react-native';
import React from 'react';

import BodyText from '../components/BodyText';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<BodyText>The Game is Over!</BodyText>
			<Image source={require('../assets/game_over.webp')} />
			<BodyText>Number of Rounds: {roundsNumber} </BodyText>
			<BodyText>Number was: {userNumber} </BodyText>
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
