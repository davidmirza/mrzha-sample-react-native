import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const DetailProducts = () => {
  const route = useRoute();
  const nav = useNavigation();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.viewTop, { justifyContent: "space-between" }]}>
          <View>
            <TouchableOpacity onPress={() => nav.navigate("Main")}>
              <Feather name="arrow-left" style={styles.icnSearch} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="search" style={styles.icnSearch} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="shoppingcart" style={styles.icnCart} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="sharealt" style={styles.icnCart} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{ width, height, margin: 5, resizeMode: "contain" }}
              source={{
                uri: route.params.image,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={[styles.colorDark, { fontSize: 16, fontWeight: "400" }]}
            >
              {route.params.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.colorDark,
                { fontSize: 18, fontWeight: "500", marginTop: 5 },
              ]}
            >
              $ {route.params.price}
            </Text>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                style={[styles.colorDark, { fontSize: 24, marginRight: 10 }]}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              alignItems: "center",
            }}
          >
            <View style={{ marginStart: 0 }}>
              <AntDesign name="star" size={17} color="gold" />
            </View>
            <View>
              <Text style={{ marginStart: 5, color: "gray", fontSize: 15 }}>
                {route.params.rating}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginStart: 1,
                  color: "#d7dbda",
                  fontSize: 15,
                  marginTop: -2,
                }}
              >
                |
              </Text>
            </View>
            <View>
              <Text style={{ marginStart: 5, color: "gray", fontSize: 15 }}>
                {route.params.count} Sold
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.space} />
        </View>
        <View style={{ padding: 5, flexDirection: "column" }}>
          <View>
            <Text
              style={[styles.colorDark, { fontSize: 17, fontWeight: "700" }]}
            >
              Description
            </Text>
          </View>
          <View
            style={[
              styles.colorDark,
              {
                padding: 7,
                marginBottom: 5,
                backgroundColor: "#fafcfb",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#cccfcd",
              },
            ]}
          >
            <Text>{route.params.description}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.space} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 15,
                height: 80,
                width: 80,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 40,
                  borderColor: "#d7dbd9",
                  padding: 10,
                  height: 70,
                  width: 70,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name="storefront" size={35} color="#05fa63" />
              </TouchableOpacity>
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
                  size={18}
                  color="#06c25a"
                />
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 16,
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
              >
                <Text
                  style={{
                    marginTop: 1,
                    marginLeft: 8,
                    fontSize: 11,
                    fontWeight: "300",
                  }}
                >
                  online
                </Text>
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  1 hr ago
                </Text>
              </View>
              <Text
                style={{
                  marginTop: -1,
                  marginLeft: 8,
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Semarang, City
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              marginStart: 25,
              marginBottom: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="staro" size={16} color="gray" />
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: 0,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                4.6
              </Text>
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: 0,
                  fontSize: 12,
                  fontWeight: "400",
                  color: "gray",
                }}
              >
                average review
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 2,
              }}
            >
              <AntDesign name="clockcircleo" size={13} color="gray" />
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: -2,
                  fontSize: 14,
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              >
                +
              </Text>
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: 0,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                2 hours
              </Text>
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: 0,
                  fontSize: 12,
                  fontWeight: "400",
                  color: "gray",
                }}
              >
                order processed
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                marginRight: 15,
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#06c25a",
                padding: 8,
              }}
            >
              <SimpleLineIcons
                name="user-follow"
                style={{ color: "#05fa63", fontSize: 18, marginRight: 6 }}
              />
              <Text style={{ color: "#06c25a", fontSize: 13 }}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.space} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 25 }}>
            <View
              style={{
                marginTop: 10,
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
                <FontAwesome5 name="shipping-fast" size={18} color="#06c25a" />

                <Text
                  style={{
                    marginLeft: 5,
                    marginTop: 0,
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "500",
                  }}
                >
                  Shipping Cost
                </Text>
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: 0,
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  $5
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 2,
                }}
              >
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 12,
                    fontWeight: "300",
                  }}
                >
                  Estimation
                </Text>
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  1 - 3 Days
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                marginRight: 8,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              Courier :
            </Text>
            <MaterialCommunityIcons name="bike-fast" size={14} color="black" />
            <Text style={{ backgroundColor: "#c7c9c5", marginStart: 5 }}>
              {" "}
              COD{" "}
            </Text>
          </View>
          <View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
        </View>
        <View>
          <Text style={styles.space} />
        </View>
        <View style={{ height: 20 }}></View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          backgroundColor: "#05fa63",
        }}
      >
        <TouchableOpacity>
          <View style={{ borderWidth: 0, padding: 2, borderRadius: 8 }}>
            <Ionicons name="chatbox-ellipses-outline" style={styles.icnCart} />
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 0,
            width: 250,
            marginRight: 15,
          }}
        >
          <TouchableOpacity>
            <View
              style={[
                styles.btnBuy,
                { backgroundColor: "white", borderColor: "#d7dbd9" },
              ]}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: "#06c25a" }}
              >
                Quick Buy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.btnBuy,
                {
                  backgroundColor: "#06c25a",
                  borderColor: "#03a84d",
                  flexDirection: "row",
                },
              ]}
            >
              <MaterialCommunityIcons
                name="cart-plus"
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "white",
                  marginRight: 5,
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: "700", color: "white" }}>
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailProducts;

const styles = StyleSheet.create({
  space: {
    height: 8,
    borderColor: "#D0D0D0",
    backgroundColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 0,
  },
  btnBuy: {
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 6,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  colorDark: {
    color: "#434544",
  },
  icnCart: {
    marginLeft: 5,
    marginRight: 5,
    color: "white",
    fontSize: 23,
  },
  icnSearch: {
    paddingLeft: 5,
    fontSize: 22,
    color: "#ffffff",
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
});
