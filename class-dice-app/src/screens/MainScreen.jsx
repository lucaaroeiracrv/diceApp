import { View, Text, Button, StyleSheet } from "react-native";
import { height, width } from "../constants/measures";
import DiceButton from "../components/DiceButton";
import { useState } from "react";

export default function MainScreen() {

  const [diceResult, setDiceResult] = useState('null')
  /**
   * @param {number} x
   * @returns {number}
   * @description {sorteia um numero entre 1 e x, sendo x o numero do dado}
   */
  function rollDice(x){
    setDiceResult ((Math.random() * 10).toFixed(0));
  }

  return (
    <View>
      <View style={styles.topArea}>
        <Text>{diceResult}</Text>
        <Text></Text>
      </View>
      <View>
        <DiceButton dice = '2'   rolldice={ () => rollDice(2)} />
        <DiceButton dice = '4'   rolldice={ () =>rollDice(4)} />
        <DiceButton dice = '6'   rolldice={ () =>rollDice(6)} />
        <DiceButton dice = '8'   rolldice={ () =>rollDice(8)} />
        <DiceButton dice = '10'  rolldice={ () =>rollDice(10)} />
        <DiceButton dice = '12'  rolldice={ () =>rollDice(12)} />
        <DiceButton dice = '20'  rolldice={ () =>rollDice(20)} />
        <DiceButton dice = '100' rolldice={ () =>rollDice(100)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height * 0.7,
  },
});