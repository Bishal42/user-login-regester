import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Rigester = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rigester</Text>
      <Text>Full name</Text>
      <TextInput placeholder="full name" style={styles.input} />
      <Text>user name</Text>
      <TextInput placeholder="user_name" style={styles.input} />
      <Text>email</Text>
      <TextInput placeholder="email" style={styles.input} />
      <Text>password</Text>
      <TextInput placeholder="password" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text> Rigester</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E3CD",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#D8A33F",
    height: 60,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 15,
  },
});

export default Rigester;
