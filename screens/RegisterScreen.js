import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUser] = useState("");
  const navigation = useNavigation();
  const img_ = require("../assets/dza12.png");
  const Registering = () => {
   
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(" dt ",user);
    axios
      .post("http://192.168.0.125:8000/register", user)
      .then((response) => {
       
        Alert.alert("Registration success", "Your Account now registered");
        console.log(response);
        setEmail("");
        setPassword("");
        setUser("");
      })
      .catch((err) => {
        Alert.alert("Failed", "Registration failed ");
        console.log("refis failed ", err);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={img_}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.ViewTitle}>
          <Text style={styles.lbltitle}>Register account</Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View style={styles.ViewInput}>
            <AntDesign name="user" style={styles.Icon} />
            <TextInput
              value={name}
              onChangeText={(text) => setUser(text)}
              style={styles.input}
              placeholder="enter your name"
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={styles.ViewInput}>
            <MaterialIcons name="email" style={styles.Icon} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="enter your email"
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={styles.ViewInput}>
            <AntDesign name="lock1" style={styles.Icon} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
              placeholder="enter your password"
            />
          </View>
        </View>

        <View style={{ marginTop: 70 }} />
        <Pressable
          style={styles.btLogin}
        >
          <Text style={styles.textLogin}>Register</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.txSignUp}>Already have account, Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  txSignUp: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
  btLogin: {
    backgroundColor:  "#FF039D",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    width: 200
  },
  textLogin: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  middleTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  textForgot: {
    color: "#18ACFF",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 50,
  },
  Icon: {
    marginLeft: 5,
    color: "gray",
    fontSize: 25,
  },
  image: {
    width: 100,
    height: 100,
  },
  lbltitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    color: "#FF039D",
  },
  ViewTitle: {
    alignItems: "center",
  },
  ViewInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#F7F5F5",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 35,
  },
  input: {
    color: "black",
    paddingStart: 5,
    marginVertical: 10,
    width: 300,
  },
});
