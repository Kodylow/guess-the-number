import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [guessRounds, setGuessRounds] = useState(0);

	const newGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};
	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onRestart={newGameHandler}
			/>
		);
	}
	return (
		<View style={styles.screen}>
			<Header title='Guess a Number'></Header>
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
