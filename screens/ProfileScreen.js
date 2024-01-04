import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const img_ = require("../assets/dza12.png");
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.viewTop, { justifyContent: "space-between" }]}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginStart: 15,
                fontWeight: "500",
              }}
            >
              Profile Account
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
            marginStart: 15,
            marginEnd: 15,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderWidth: 0.3,
                borderRadius: 50,
                borderColor: "gray",
              }}
              source={img_}
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>John Doe</Text>
              <Text style={{ fontSize: 12 }}>+62 886521333</Text>
              <Text style={{ fontSize: 12 }}>Email.account@mail.com</Text>
            </View>
          </View>
          <Feather name="edit" size={24} color="#03a84d" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginTop: 25,
              marginStart: 15,
            }}
          >
            Credit & Points
          </Text>
        </View>
        <View
          style={[
            styles.pressBelow,
            { elevation: 1, padding: 15, marginTop: 1 },
          ]}
        >
          <View>
            <TouchableOpacity>
              <View style={styles.grpPressBelow}>
                <Fontisto
                  name="dollar"
                  style={[styles.colorIcon, styles.iconGroupPressBelow]}
                />
                <Text style={[styles.colorBasic, styles.lblPressBelow]}>
                  9000
                </Text>
              </View>
              <Text style={[styles.colorIcon, styles.lblDescription]}>
                Top Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.grpPressBelow}>
                <FontAwesome5
                  name="coins"
                  style={[{ color: "gold" }, styles.iconGroupPressBelow]}
                />
                <Text style={[styles.colorBasic, styles.lblPressBelow]}>
                  200
                </Text>
              </View>
              <Text style={[styles.colorIcon, styles.lblDescription]}>
                Coins
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={styles.grpPressBelow}>
                <MaterialIcons
                  name="local-shipping"
                  style={[{ color: "#06c25a" }, styles.iconGroupPressBelow]}
                />
                <Text style={[styles.colorBasic, styles.lblPressBelow]}>5</Text>
              </View>
              <Text style={[styles.colorIcon, styles.lblDescription]}>
                Free Shipping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginTop: 25,
              marginStart: 15,
            }}
          >
            Setting Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="storefront" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                List Address
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Set Address for delivery
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="bank" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Bank Account
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Set Bank Account for payment
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="payment" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Instant Payment
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Register E-Wallet, Credit Card
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="security" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Account Security
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Set Password, PIN & Verification Account
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="notification" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Notification
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Manage Notification Message
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="privacy-tip" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Privacy Account
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Set data Account
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 5,
            justifyContent: "space-between",
            borderBottomWidth: 0.3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="log-out" size={30} color="black" />
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -1,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Log Out Account
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Log Out Account
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => nav.navigate("Login")}>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 17,
                marginEnd: 25,
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
  },
  shadow: {
    borderColor: "#03a84d",
    borderWidth: 0.1,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 30,
    elevation: 3,
    marginBottom: 10,
    borderBottomColor: "#d9dedb",
    borderBottomWidth: 2,
  },
  lblInputAddress: {
    marginStart: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  colorIcon: {
    color: "black",
  },
  lblPressBelow: {
    fontSize: 12,
    marginLeft: 5,
  },
  lblDescription: {
    fontSize: 10,
    fontWeight: "400",
  },
  lblAddress: {
    fontSize: 12,
    color: "gray",
  },
  icnCart: {
    marginLeft: 5,
    marginRight: 5,
    color: "white",
    fontSize: 23,
  },

  icn: {
    paddingLeft: 5,
    fontSize: 22,
    color: "white",
  },
  pressTop: {
    marginTop: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    gap: 10,
    backgroundColor: "white",
    borderColor: "#06c25a",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    flex: 1,
  },
  grpPressBelow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewTop: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#05fa63",
  },
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  iconGroupPressBelow: {
    fontSize: 20,
  },

  pressBelow: {
    marginTop: 25,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2f7f5",
    padding: 8,
    borderColor: "black",
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 9,
    borderWidth: 0,
  },
  iconPressBelow: {
    marginTop: 4,
    fontSize: 24,
  },
});
