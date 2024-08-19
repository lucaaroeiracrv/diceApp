import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import { width, height } from "./src/constants/measures";
export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
});
