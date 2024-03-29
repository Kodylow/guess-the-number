import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import { useState } from 'react';
import BodyText from '../components/BodyText';

const StartGameScreen = ({onStartGame}) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState('');

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNan(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (!confirmed) {
		confirmedOutput = (
		<Card style={styles.summaryContainer}>
			<Text>You selected:</Text>
			<NumberContainer>{selectedNumber}</NumberContainer>
			<Button title='START GAME' onPress={() => onStartGame(selectedNumber)}/>
		</Card>
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text>Start a new game!</Text>
				<Card>
					<BodyText />Select an Integer:</BodyText>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Reset'
								onPress={resetInputHandler}
								color={Colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								onPress={confirmInputHandler}
								color={Colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
		fontFamily: 'open-sans-bold'
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
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	}
});

export default StartGameScreen;
