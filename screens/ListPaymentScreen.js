import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ListPaymentScreen = () => {
  const today = new Date();
  const date2 = () => {
    const day_ = new Date();
    day_.setDate(day_.getDate() + 2);
    return day_.toDateString();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTop}>
          <Pressable style={styles.pressTop}>
            <Feather name="search" style={styles.icnSearch} />
            <TextInput placeholder="Search" />
          </Pressable>
        </View>
        <View style={{ marginStart: 25, marginTop: 15 }}>
          <Text style={{ fontSize: 13, fontWeight: "400", color: "gray" }}>
            List Waiting for Payment
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            height: 1,
            width: "90%",
            marginTop: 3,
            marginStart: "5%",
            marginEnd: "5%",
          }}
        ></View>

        <View
          style={[
            {
              marginTop: 15,
              marginStart: 10,
              marginEnd: 10,
              borderRadius: 5,
              padding: 5,
            },
            styles.shadow,
          ]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginLeft: 5,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="storefront" size={20} color="#05fa63" />
              </View>

              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="star-circle"
                    size={14}
                    color="#06c25a"
                  />
                  <Text
                    style={{
                      marginLeft: 3,
                      marginTop: -1,
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    Sample Store
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: 2,
                  }}
                ></View>
                <Text
                  style={{
                    marginTop: 2,
                    marginLeft: 16,
                    fontSize: 11,
                    fontWeight: "400",
                    color: "#d1580d",
                  }}
                >
                  {today.toDateString()}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-end",
                marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 12 }}>Pay Before</Text>
              <Text style={{ fontSize: 12, color: "#d1580d" }}>{date2()}</Text>
              <Text style={{ fontSize: 12, color: "#d1580d" }}>12:00 PM</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "gray",
              height: 1,
              width: "90%",
              marginTop: 3,
              marginStart: "5%",
              marginEnd: "5%",
            }}
          />
          <View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View
                style={{
                  marginLeft: 5,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="piggy-bank"
                  size={30}
                  color="pink"
                />
              </View>

              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 3,
                      marginTop: -1,
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Piggy Bank
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: 2,
                  }}
                ></View>
                <Text
                  style={{
                    marginTop: 2,
                    marginLeft: 16,
                    fontSize: 11,
                    fontWeight: "400",
                    color: "#de074b",
                  }}
                >
                  09878997865675
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "space-between",
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 12 }}>Total </Text>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>$150.50</Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#06c25a",
                borderRadius: 5,
                padding: 5,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "970" }}>
                Detail Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "white",
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
  icn: {
    paddingLeft: 5,
    fontSize: 22,
    color: "white",
  },
  viewTop: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#05fa63",
  },
  pressTop: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    flex: 1,
  },
  icnSearch: {
    paddingLeft: 5,
    fontSize: 22,
    color: "darkgray",
  },
});
