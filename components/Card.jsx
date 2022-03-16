import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Card = (props) => {
	return (
		<View styles={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		padding: 20,
		elevation: 5,
		borderRadius: 10,
	},
});

export default Card;
