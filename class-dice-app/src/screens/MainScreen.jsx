import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import DiceButton from '../components/DiceButton';
import { width, height } from '../constants/measures';

export default function MainScreen() {
  const [diceCount, setDiceCount] = useState(1);
  const [diceResults, setDiceResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistoryText, setShowHistoryText] = useState(false);

  function rollDice(maxValue) {
    const results = [];
    for (let i = 0; i < diceCount; i++) {
      const result = Math.floor(Math.random() * maxValue) + 1;
      results.push(result);
    }
    setDiceResults(results);
    setHistory([...history, { maxValue, results }]);
  }

  function increaseDice() {
    setDiceCount(diceCount + 1);
  }

  function decreaseDice() {
    if (diceCount > 1) {
      setDiceCount(diceCount - 1);
    }
  }

  function resetRoll() {
    setDiceResults([]);
    setDiceCount(1);
  }

  function toggleHistory() {
    setShowHistoryText(!showHistoryText);
  }

  return (
    <View style={styles.phone}>
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

        <TouchableOpacity onPress={resetRoll} style={styles.resetButton}>
          <Image source={require('../img/reset.png')} style={styles.buttonImage} />
        </TouchableOpacity>

        <View style={styles.diceContainer}>
          <DiceButton dice="2" rollDice={() => rollDice(2)} imageSource={require('../img/dice2.png')} />
          <DiceButton dice="4" rollDice={() => rollDice(4)} imageSource={require('../img/dice4.png')} />
          <DiceButton dice="6" rollDice={() => rollDice(6)} imageSource={require('../img/dice6.png')} />
          <DiceButton dice="8" rollDice={() => rollDice(8)} imageSource={require('../img/dice8.png')} />
          <DiceButton dice="10" rollDice={() => rollDice(10)} imageSource={require('../img/dice10.png')} />
          <DiceButton dice="12" rollDice={() => rollDice(12)} imageSource={require('../img/dice12.png')} />
          <DiceButton dice="20" rollDice={() => rollDice(20)} imageSource={require('../img/dice20.png')} />
          <DiceButton dice="100" rollDice={() => rollDice(100)} imageSource={require('../img/dice100.png')} />
        </View>

        <TouchableOpacity onPress={toggleHistory} style={styles.historyButton}>
          <Image source={require('../img/history.png')} style={styles.buttonImage} />
        </TouchableOpacity>

        {showHistoryText && (
          <View style={styles.historyTextContainer}>
            <ScrollView>
              <Text>
                {history.length > 0
                  ? history.map((entry, index) => `Jogada ${index + 1}: D${entry.maxValue} -> Resultados: ${entry.results.join(', ')}`).join('\n')
                  : "Nenhuma jogada foi realizada ainda."}
              </Text>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phone: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  topArea: {
    marginBottom: 20,
    alignItems: 'center',
  },
  diceControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  controlButton: {
    padding: 30,
    marginHorizontal: 70,
  },
  controlButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  diceCountText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  diceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'whitesmoke',
    padding: 28
    
  },
  resetButton: {
    padding: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  historyButton: {
    position: 'absolute',
    top: 40,
    right: 40,
    padding: 10,
    borderRadius: 5,
  },
  historyTextContainer: {
    height: 150, // Altura fixa para o container do histórico
    width: '80%', // Largura do container do histórico
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
  },
});
