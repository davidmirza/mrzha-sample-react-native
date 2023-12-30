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
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://lh3.googleusercontent.com/pw/ABLVV85L-t_5YZQzMD-QocW4LILpkRsAygYFSzP2bN7AnxPblIY1b5Hjd6pAr8SCIKlooflCHuUk5JGuyQ0baxKa6RkRHwu51mRFdGIblACEoWZW6AGhNqSXmDDR8Ja_mgEozOlTr26igr0nWfrH0zEHoLbchi6n434b-8dOAvofPAsERu2fSQl8S2xQcl93pO6NbvOf0dS7YDInz_hUPjWLI93J907BZ6cZO95pWy9gfqtmWYp8_scEm-iuDHBx34pVGaA4voLLe1Faegh2PkE8zXelZJHNBe02z-C3qOC0VCXag-2R16xNDfO8eKQdxaw18n2QGjfVGzmlbYWw02y3TiOtQjWnLClx_w1c32uY2rUc1YDNWhBJ2JzdEa7_pXbXb1xXsyjaU2ukFbLUZMNnDN8D-_5ucWMToB-7b29dWSt88kg67Ly7xw8pFi9248BOfXG8PCMyMIsEQPKsRSNjwr0Ejs5A4_5i_l3H8sHCJeERJgXcSSw6Q8F4YeQJ2d6428F-z8qTvqA4wOEkQQZkA4bwtFynHepjJYgnl8m43_mqV_yLUeQ8XM1f36rWluHXbPsMz0CBnx6tJ2hC_Mu_83YCBEJSRh144mVXMQbcon7dfhJNEYCU50s5ZjCbmuRKb9u6C73-RKI2GFOaiKcuze8UVQv2--n-RYoGiNIrCVb0i3O2je4KK5rhuwdnEkGlzBPio2aE8o1z8LCCexsy7AfN8CrdGZ_RMUzzH9jiNjTRYTcFkfz9PHPWByUbvzpW8vjZvgizmWgYijDbhEmW3_ONEuqB6FyvfdhPtal5wvy8Fm5Bi7udaEpGOzHT_j7mzUJCVSqwxdHIGErZPEpEwtbaSG2CV-NKvFgtdmQdzLom_w41WVGg5o-DQ4JNzwWCiCx4UEyf_y8VWm7dkhJuSGnk8ElE14r-WGI32cOXZodrEOCsV3KPTPu5qKiIv7BZ1r3GRE8HvZcEp1cjC8n4ox-YybLff4cDQgJkHdYxGufrsxDQ=w925-h924-s-no-gm?authuser=0",
          }}
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
