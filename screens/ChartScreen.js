import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import FILTER from "../data/FILTER.json";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const ChartScreen = () => {
  const dtFilter = ["Status", "Product", "Date", "Shipping Address"];
  const dummyCart = require("../assets/shopping-cart.png");
  const [selectFilter, setSelectFilter] = useState();
  const { width } = Dimensions.get("window");
  const widthFilter = (width * 85) / 100;
  const dataCart = [
    {
      type: "Shopping",
      status: "Success",
      item: "Red Clothes Gucci",
      total: "$500",
      qty: 2,
      date: "21-05-2023",
      koderef: "08866784560981",
      image: "https://cdn-icons-png.flaticon.com/512/2038/2038767.png",
    },
    {
      type: "Credit Card Bill",
      status: "Expired",
      item: "CIMB ",
      total: "$1000",
      qty: 1,
      date: "25-05-2023",
      koderef: "09866784550001",
      image:
        "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/CIMB-512.png",
    },
    {
      type: "Internet & TV Vable",
      status: "Waiting",
      item: "Starlink",
      total: "$600",
      qty: 1,
      date: "28-12-2023",
      koderef: "09866784560041",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Starlink_Logo.svg/1280px-Starlink_Logo.svg.png",
    },
    {
      type: "Credit Card Bill",
      status: "Success",
      item: "Speda anak ",
      total: "$125",
      qty: 1,
      date: "25-05-2023",
      koderef: "09866784650001",
      image: "https://cdn-icons-png.flaticon.com/512/2038/2038767.png",
    },
  ];
  const [showModal, setshowModal] = useState(false);
  const [filterstatus, setFilterStatus] = useState();
  const renderOptionFilter = ({ item, index }) => {
    return (
      <View style={{ flexDirection: "column", marginBottom: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: widthFilter,
            marginEnd: 15,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700" }}>{item}</Text>
          <RadioButtonInput
            obj={item}
            index={index}
            isSelected={index === 0}
            onPress={() => {}}
            borderWidth={1}
            buttonInnerColor={"#05fa63"}
            buttonOuterColor={"#03a84d"}
            buttonSize={15}
            buttonOuterSize={24}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 10 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#cfd4d1",
            height: 1,
            width: "100%",
            marginTop: 5,
          }}
        />
      </View>
    );
  };
  const renderFilter = () => {
    return (
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={
            filterstatus === "Status"
              ? FILTER.Status
              : filterstatus === "Product"
              ? FILTER.Product
              : filterstatus === "Date"
              ? FILTER.Date
              : FILTER.Address
          }
          renderItem={renderOptionFilter}
        ></FlatList>
      </View>
    );
  };
  const renderCategory = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setshowModal(!showModal), setFilterStatus(item);
        }}
      >
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderColor: "gray",
            borderRadius: 5,
            gap: 7,
          }}
        >
          <AntDesign name="filter" size={15} color="gray" />
          <Text style={{ fontSize: 14, color: "#456354", fontWeight: "300" }}>
            {item}
            {"   "} <Ionicons name="caret-down" size={15} color="gray" />
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  function btnStatus(status) {
    if (status === "Success") {
      return (
        <TouchableOpacity
          style={[styles.btnStatusOutlne, { backgroundColor: "#03a84d" }]}
        >
          <Text style={[styles.TaskBtn, { color: "white" }]}> Buy Again </Text>
        </TouchableOpacity>
      );
    } else if (status === "Waiting") {
      return (
        <TouchableOpacity
          style={[styles.btnStatusOutlne, { backgroundColor: "gray" }]}
        >
          <Text style={[styles.TaskBtn, { color: "white" }]}> Detail </Text>
        </TouchableOpacity>
      );
    } else {
    }
  }
  const renderCart = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          {
            marginTop: 5,
            marginStart: 10,
            marginEnd: 10,
            borderRadius: 5,
            padding: 5,
          },
          styles.shadow,
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
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
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                >
                  {item.type}
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
                  fontSize: 10,
                  fontWeight: "400",
                  color: "#d1580d",
                }}
              >
                {item.date}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginEnd: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                backgroundColor:
                  item.status === "Success"
                    ? "#05fa63"
                    : item.status === "Waiting"
                    ? "orange"
                    : "red",
                padding: 2,
                color: "white",
                borderRadius: 4,
              }}
            >
              {" "}
              {item.status}{" "}
            </Text>
            <Entypo name="dots-three-vertical" size={20} color="gray" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#cfd4d1",
            height: 1,
            width: "94%",
            marginTop: 3,
            marginStart: "3%",
            marginEnd: "3%",
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
            />
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: item.image,
              }}
            />
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
                }}
              >
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: -1,
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                  numberOfLines={1}
                >
                  {item.item}
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
                  marginTop: -4,
                  marginLeft: 5,
                  fontSize: 10,
                  fontWeight: "400",
                  color: "#d1580d",
                  fontStyle: "italic",
                }}
              >
                {item.koderef}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            justifyContent: "space-between",
            marginStart: 10,
            marginEnd: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 12 }}>Total </Text>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              {item.total}
            </Text>
          </View>
          {btnStatus(item.status)}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <Header></Header>
          <FlatList
            horizontal
            data={dtFilter}
            renderItem={renderCategory}
            keyExtractor={(item) => item}
          ></FlatList>
        </View>
        <TouchableOpacity
          style={{
            borderColor: "gray",
            borderWidth: 0.3,
            borderRadius: 6,
            paddingStart: 5,
            paddingEnd: 5,
            paddingBottom: 10,
            paddingTop: 10,
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 7,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons
              name="bank-transfer-in"
              style={{ color: "#666967", marginStart: 5, fontSize: 24 }}
            />
            <Text style={{ fontSize: 13, color: "#979998" }}>
              Waiting for payments
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 10,
                color: "white",
                backgroundColor: "orange",
                padding: 4,
                borderRadius: 5,
              }}
            >
              1
            </Text>
          </View>
          <AntDesign
            name="right"
            style={{
              fontSize: 20,
              color: "gray",
              marginStart: -100,
              marginEnd: 10,
            }}
          />
        </TouchableOpacity>
        <FlatList data={dataCart} renderItem={renderCart}></FlatList>
      </SafeAreaView>
      <BottomModal
        onBackdropPress={() => setshowModal(!showModal)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setshowModal(!showModal)}
        visible={showModal}
        onTouchOutside={() => setshowModal(!showModal)}
      >
        <ModalContent style={{ width: "100%", height: 320 }}>
          <View style={{ flexDirection: "row", gap: 9 }}>
            <AntDesign name="filter" size={15} color="gray" />
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                filter by {filterstatus}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#cfd4d1",
              height: 1,
              width: "100%",
              marginTop: 1,
            }}
          />
          <ScrollView horizontal={true}>{renderFilter()}</ScrollView>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default ChartScreen;

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
  TaskBtn: {
    marginStart: 3,
    marginEnd: 3,
    fontSize: 11,
    fontWeight: "700",
  },
  btnStatusOutlne: {
    borderWidth: 0.3,
    borderColor: "#06c25a",
    borderRadius: 5,
    justifyContent: "center",
    height: 22,
  },
  image: {
    width: 30,
    height: 30,
  },
});
