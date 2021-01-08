import React from "react";
import { StyleSheet, View, Text } from "react-native";

function About({ route }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default About;
