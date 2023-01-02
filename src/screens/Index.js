import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";

const Index = ({ navigation }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.userInput}
        placeholder="user name"
        value={user}
      />
      <TextInput
        style={styles.userpassword}
        placeholder="user password"
        value={password}
      />
      <Button title="login" />
      <View style={styles.rigester}>
        <Text>don't have account ? /</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Rigester");
          }}
        >
          <Text>Rigester</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    backgroundColor: "#F7EEB9",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#000000",
    width: "100%",
    height: 40,
    paddingHorizontal: 30,
  },
  userpassword: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#000000",
    width: "100%",
    height: 40,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  rigester: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default Index;
