import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the component screen</Text>;
};

export default ComponentsScreen;
