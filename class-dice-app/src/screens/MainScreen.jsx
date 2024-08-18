import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DiceButton from '../components/DiceButton';

export default function MainScreen() {
  const [diceCount, setDiceCount] = useState(1);  // Estado para controlar o número de dados
  const [diceResults, setDiceResults] = useState([]); // Estado para armazenar os resultados de cada dado

  // Função para rolar os dados e garantir que o resultado nunca seja 0
  function rollDice(maxValue) {
    const results = [];
    for (let i = 0; i < diceCount; i++) {
      const result = Math.floor(Math.random() * maxValue) + 1; // Garante que nunca seja 0
      results.push(result);
    }
    setDiceResults(results);
  }

  // Função para aumentar o número de dados
  function increaseDice() {
    setDiceCount(diceCount + 1);
  }

  // Função para diminuir o número de dados, garantindo que sempre tenha pelo menos 1
  function decreaseDice() {
    if (diceCount > 1) {
      setDiceCount(diceCount - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        {diceResults.length > 0 ? (
          <Text>
            Resultados: {diceResults.join(', ')} | Soma: {diceResults.reduce((a, b) => a + b, 0)}
          </Text>
        ) : (
          <Text>Rolar um dado!</Text>
        )}
        <View style={styles.diceControl}>
          <TouchableOpacity onPress={decreaseDice} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.diceCountText}>{diceCount}</Text>
          <TouchableOpacity onPress={increaseDice} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.diceContainer}>
        <DiceButton dice="2" rollDice={() => rollDice(2)} />
        <DiceButton dice="4" rollDice={() => rollDice(4)} />
        <DiceButton dice="6" rollDice={() => rollDice(6)} />
        <DiceButton dice="8" rollDice={() => rollDice(8)} />
        <DiceButton dice="10" rollDice={() => rollDice(10)} />
        <DiceButton dice="12" rollDice={() => rollDice(12)} />
        <DiceButton dice="20" rollDice={() => rollDice(20)} />
        <DiceButton dice="100" rollDice={() => rollDice(100)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  topArea: {
    marginBottom: 20,
    alignItems: 'center',
  },
  diceControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  controlButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  controlButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  diceCountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  diceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
  