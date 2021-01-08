import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact</Text>
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

export default Contact;
