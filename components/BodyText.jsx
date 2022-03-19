import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BodyText = (props) => {
	return <Text style={styles.body}>BodyText</Text>;
};

const styles = StyleSheet.create({
	body: {
		fontFamily: 'open-sans-bold',
	},
});

export default BodyText;
