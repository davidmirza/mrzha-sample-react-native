import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import Header from "./Header";
import Space from "./Space";

LogBox.ignoreAllLogs();
export default function HomeScreen() {
  const Nav = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataProducts, setProducts] = useState([]);
  const [filterProducts, setFilterProd] = useState([]);
  let dt = [];
  let width = Dimensions.get("window").width / 2 - 35;
  const banner_1 = require("../assets/banner/BANNER1.jpg");
  const banner_2 = require("../assets/banner/BANNER2.jpg");
  const banner_3 = require("../assets/banner/BANNER3.jpg");
  const icoJewel = require("../assets/jewel.png");
  const icoMen = require("../assets/men.png");
  const icoWomen = require("../assets/women.png");
  const icoElectronic = require("../assets/electronic.png");
  const [showModal, setshowModal] = useState(false);
  const ImageSlider = [
    {
      id: 1,
      name: banner_1,
    },
    {
      id: 2,
      name: banner_2,
    },
    {
      id: 3,
      name: banner_3,
    },
  ];
  const Categories = [
    {
      name: "electronics",
      icon: icoElectronic,
    },
    {
      name: "jewelery",
      icon: icoJewel,
    },
    {
      name: "men's clothing",
      icon: icoMen,
    },
    {
      name: "women's clothing",
      icon: icoWomen,
    },
  ];
  const bannerItems = ImageSlider.map((img) => (
    <View style={styles.slider} key={img.id}>
      <Image
        source={img.name}
        resizeMode="contain"
        style={styles.bannerImage}
      />
    </View>
  ));
  useEffect(() => {
    const getCategories = async () => {
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((response) => {
          setDataCategory(response.data);
          console.log("init");
        })
        .catch((err) => console.log("data error ", err))
        .finally(() => setLoading(false));
    };
    const getProducts = async () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setFilterProd(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    getCategories();
    getProducts();
  }, []);
  const stCategory = (item) => {
    dt = filterProducts.filter((items) => items.category === item);
    setProducts(dt);
  };
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => stCategory(item.name)}>
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderLeftWidth: index === 0 ? 0 : 0.2,
            paddingRight: 5,
            paddingLeft: 10,
            paddingTop: 5,
            borderColor: "gray",
            paddingBottom: 5,
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{ width: 35, height: 35 }}
          />
          <Text style={{ fontSize: 13, color: "#456354", fontWeight: "300" }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header></Header>
          <View
            style={{
              backgroundColor: "#05fa63",
              marginTop: -2,
              paddingBottom: 2,
              borderBottomWidth: 1,
              borderBottomColor: "#f0f0f0",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              onPress={() => setshowModal(!showModal)}
            >
              <SimpleLineIcons
                name="location-pin"
                style={{
                  fontSize: 14,
                  color: "white",
                  marginStart: 15,
                  marginBottom: 5,
                }}
              />
              <Text style={{ marginStart: 5, color: "white", fontSize: 12 }}>
                Deliver to
              </Text>
              <Text
                style={{
                  marginStart: 3,
                  color: "white",
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                David Mirza
              </Text>
              <Octicons
                name="chevron-down"
                style={{
                  marginStart: 5,
                  marginBottom: 1,
                  color: "gray",
                  fontSize: 15,
                  fontWeight: "800",
                }}
              />
            </Pressable>
          </View>

          <View style={[styles.pressBelow, { elevation: 1 }]}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                style={[styles.iconPressBelow, styles.colorIcon]}
              />
            </TouchableOpacity>
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
                    style={[styles.colorIcon, styles.iconGroupPressBelow]}
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
                    style={[styles.colorIcon, styles.iconGroupPressBelow]}
                  />
                  <Text style={[styles.colorBasic, styles.lblPressBelow]}>
                    5
                  </Text>
                </View>
                <Text style={[styles.colorIcon, styles.lblDescription]}>
                  Free Shipping
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.viewCategories}>
            <View>
              <Text
                style={[
                  {
                    fontSize: 11,
                    fontWeight: "300",
                    marginStart: 5,
                    marginBottom: -10,
                    zIndex: 99,
                    color: "#696b6a",
                  },
                ]}
              ></Text>
            </View>
            <FlatList
              horizontal
              data={Categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item}
              style={{ backgroundColor: "#f5faf7", elevation: 1 }}
            />
          </View>

          <View style={[styles.bannerSection]}>
            <Swiper
              autoplay
              autoplayTimeout={10}
              style={[styles.banner, { marginTop: -0 }]}
              dot={<View style={[styles.dot, styles.minMargin]} />}
              activeDot={<View style={[styles.activeDot, styles.minMargin]} />}
            >
              {bannerItems}
            </Swiper>
          </View>
          <Space></Space>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#fafffd",
              marginTop: 2,
            }}
          >
            <View>
              <Text
                style={{ marginStart: 10, color: "#434544", fontWeight: "400" }}
              >
                Products
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {dataProducts?.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    Nav.navigate("Detail", {
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      description: item.description,
                      category: item.category,
                      image: item.image,
                      rating: item.rating.rate,
                      count: item.rating.count,
                    })
                  }
                >
                  <View
                    style={[
                      {
                        flexDirection: "column",
                        padding: 2,
                        margin: 4,
                        backgroundColor: "white",
                        elevation: 3,
                        borderRadius: 5,
                      },
                      styles.shadowColor,
                    ]}
                  >
                    <Pressable key={item.id} style={{ margin: 5, padding: 5 }}>
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: width,
                            height: 130,
                            resizeMode: "center",
                          }}
                          source={{ uri: item?.image }}
                        />
                      </TouchableOpacity>
                    </Pressable>
                    <View style={{ width: 130, alignItems: "center" }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          flexWrap: "wrap",
                          flexShrink: 1,
                          fontSize: 13,
                          fontWeight: "300",
                          color: "#696b6a",
                        }}
                      >
                        {item?.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          marginStart: 5,
                          fontSize: 13,
                          fontWeight: "800",
                        }}
                      >
                        $ {item?.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 3,
                        alignItems: "center",
                      }}
                    >
                      <View style={{ marginStart: 5 }}>
                        <AntDesign name="star" size={12} color="gold" />
                      </View>
                      <View>
                        <Text
                          style={{
                            marginStart: 5,
                            color: "gray",
                            fontSize: 12,
                          }}
                        >
                          {item?.rating.rate}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginStart: 1,
                            color: "#d7dbda",
                            fontSize: 12,
                            marginTop: -2,
                          }}
                        >
                          |
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginStart: 5,
                            color: "gray",
                            fontSize: 12,
                          }}
                        >
                          {item?.rating.count} Sold
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
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
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Location</Text>

            <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Choose address to delivery
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", gap: 7, marginBottom: 30 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: 200,
                  borderRadius: 10,
                  borderColor: "#03a84d",
                }}
              >
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <Text>Home</Text>
                  <Text
                    style={{
                      backgroundColor: "gray",
                      padding: 2,
                      fontSize: 12,
                      color: "white",
                    }}
                  >
                    Main address
                  </Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 5 }}>
                  <Text style={[{ fontWeight: "700" }, styles.listLoc]}>
                    John Doe
                  </Text>
                  <Text>+62 886 521 333</Text>
                  <Text numberOfLines={2} style={styles.listLoc}>
                    Jl Letjen South Parman Kav 62-63 Wisma Barito Pacific Tower
                    B
                  </Text>
                  <Text style={styles.listLoc}>Semarang, Central Java</Text>
                  <Text style={styles.listLoc}>Indonesia</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: 200,
                  borderRadius: 10,
                  borderColor: "#03a84d",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <TouchableOpacity
                  style={[
                    {
                      borderWidth: 0,
                      height: 40,
                      width: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      elevation: 2,
                    },
                    styles.shadowColor,
                  ]}
                  onPress={() => {
                    setshowModal(!showModal), Nav.navigate("Address");
                  }}
                >
                  <MaterialIcons
                    name="chevron-right"
                    size={28}
                    color="#03a84d"
                  />
                </TouchableOpacity>

                <View>
                  <Text> Select another address </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  shadowColor: {
    borderColor: "#03a84d",
    borderWidth: 0.1,
    backgroundColor: "white",
    shadowColor: "black",
    borderBottomColor: "#d9dedb",
    borderBottomWidth: 1,
  },
  listLoc: {
    fontSize: 13,
  },
  banner: {
    marginTop: -60,
  },
  bannerSection: {
    flexDirection: "column",
    height: 155,
    width: "100%",
    alignItems: "flex-start",
    padding: 0,
  },
  activeDot: {
    backgroundColor: "#ebdd17",
    width: 15,
    height: 8,
    borderRadius: 5,
    margin: 3,
  },
  minMargin: {
    marginBottom: -25,
  },
  bannerImage: {
    width: "90%",
    height: "85%",
  },
  dot: {
    backgroundColor: "#dae3e1",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  slider: {
    flex: 1,
    alignContent: "center",
  },
  bannerImage: {
    width: "97%",
    height: "100%",
  },
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  viewCategories: {
    flexDirection: "column",
    padding: 5,
    marginTop: -5,
  },
  image: {
    width: 100,
    height: 100,
  },
  grpPressBelow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lblPressBelow: {
    fontSize: 12,
    marginLeft: 5,
  },
  lblDescription: {
    fontSize: 10,
    fontWeight: "400",
  },
  colorIcon: {
    color: "gray",
  },
  colorBasic: {
    color: "#05fa63",
  },
  iconGroupPressBelow: {
    fontSize: 16,
  },

  pressBelow: {
    marginTop: 5,
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
