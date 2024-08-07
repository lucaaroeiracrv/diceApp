import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { height, width } from "../constants/measures";

export default function MainScreen() {
  return (
    <View>
      <View style={styles.topArea}>
        <Text></Text>
        <Text></Text>
      </View>
      <View>

        <TouchableOpacity>
          <Text>d6</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>d8</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>d10</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>d12</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>d20</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>d100</Text>
        </TouchableOpacity>
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
