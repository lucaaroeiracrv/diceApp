import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiceButton({ dice, rollDice, imageSource }) {
  return (
    <TouchableOpacity onPress={rollDice} style={styles.button}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80  ,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80, // Ajuste o tamanho da imagem conforme necessário
    height: 80,
    resizeMode: 'contain',
  },
});
