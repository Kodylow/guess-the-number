import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
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

const GameScreen = ({userChoice, onGameOver}) => {
  const [currGuess, setCurrGuess] = useState(generateRandomBetween(1, 100, userChoice));
	const [rounds, setRounds] = useState(0);
  
  const currLow = useRef(1);
  const currHigh = useRef(100);

  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currGuess, ]);
  

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currGuess < userChoice) || (direction === 'greater' && currGuess > userChoice)) {
      Alert.alert('Liar!', 'You know that\'s wrong...', [{text: 'Sorry!', style: 'cancel'}]);
      return
    }
    if (direction === 'lower') {
      currHigh.current = currGuess;
    } else {
      currLow.current = currGuess;
    }

    const nextNumber = generateRandomBetween(currLow.current, currHigh.current, currGuess);
    setCurrGuess(nextNumber);
    setRounds(rounds + 1)
  }

  return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card style={styles.buttonContainer} >
        <Button title="LOWER" onPress={() => {nextGuessHandler.bind(this, 'lower')}} />
        <Button title="GREATER" onPress={() => {nextGuessHandler.bind(this, 'lower')}} />
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
