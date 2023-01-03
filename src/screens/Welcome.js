import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>You are login to the welcome page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
