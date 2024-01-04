import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, {useState} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const img_ = require("../assets/dza12.png");
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
          <Text style={styles.lbltitle}>Login in to your account</Text>
        </View>
        <View style={{ marginTop: 70 }}>
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
        <View style={styles.middleTitle}>
          <Text>Keep login</Text>
          <Text style={styles.textForgot}>Forgot password</Text>
        </View>
        <View style={{ marginTop: 50 }} />
        <Pressable
        onPress={()=> navigation.navigate("Main")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#c20679" : "#FF039D",
              borderRadius: 15,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 10,
              width: 200,
            },
          ]}
        >
          <Text style={styles.textLogin}>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }}>
          <Text style={styles.txSignUp}>Don't have account, Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  txSignUp: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
  btLogin: {},
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
