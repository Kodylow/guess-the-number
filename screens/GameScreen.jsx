import { View, Text, StyleSheet, Button } from 'react-native';
import React, {useState} from 'react';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Match.ceil(min);
  max = Math.floor(max);
  const r = Math.floor(Math.random() * (max - min)) + min;
  ir (r === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return r;
  }
}

const GameScreen = () => {
  const [currGuess, setCurrGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
	
  return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card style={styles.buttonContainer} >
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
		</View>
	);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;
