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
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";
import Swiper from "react-native-swiper";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";

LogBox.ignoreAllLogs();
export default function HomeScreen() {
  const Nav = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [dataCategory, setDataCategory] = useState([]);
  const [Category, setCategory] = useState();
  const [dataProducts, setProducts] = useState([]);
  const [filterProducts, setFilterProd] = useState([]);
  let dt = [];
  let ScreenHeight = Dimensions.get("window").height;
  const banner_1 = require("../assets/banner/BANNER1.jpg");
  const banner_2 = require("../assets/banner/BANNER2.jpg");
  const banner_3 = require("../assets/banner/BANNER3.jpg");
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
  const renderCategory = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => stCategory(item)}>
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 20,
          }}
        >
          <AntDesign name="antdesign" size={24} color="#05fa63" />
          <Text style={{ fontSize: 14, color: "#456354", fontWeight: "300" }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewTop}>
            <Pressable style={styles.pressTop}>
              <Feather name="search" style={styles.icnSearch} />
              <TextInput placeholder="Search" />
            </Pressable>
            <AntDesign name="shoppingcart" style={styles.icnCart} />
            <Ionicons name="chatbox-ellipses-outline" style={styles.icnCart} />
          </View>
          <View
            style={{
              backgroundColor: "#05fa63",
              marginTop: -5,
              paddingBottom: 2,
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
          <View style={styles.pressBelow}>
            <TouchableOpacity>
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
              >
                Categories
              </Text>
            </View>
            <FlatList
              horizontal
              data={dataCategory}
              renderItem={renderCategory}
              keyExtractor={(item) => item}
              style={{ backgroundColor: "#f5faf7" }}
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
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          />
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
                    style={{
                      flexDirection: "column",
                      padding: 2,
                      margin: 4,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#d7dbda",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Pressable key={item.id} style={{ margin: 5, padding: 5 }}>
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 130,
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
        <ModalContent style={{ width: "100%", height: 400 }}>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Location</Text>

            <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select address to delivery location
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 7, marginBottom: 30 }}>
            <TouchableOpacity
              style={{ borderWidth: 1, padding: 10, width: 200, borderRadius:10, borderColor:"#03a84d" }}
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
                  Main Location
                </Text>
              </View>
              <View style={{ flexDirection: "column", marginTop: 5 }}>
                <Text style={[{fontWeight:"700"}, styles.listLoc]}>John Doe</Text>
                <Text>+62 886 521 333</Text>
                <Text numberOfLines={2} style={styles.listLoc}>
                  Jl Letjen South Parman Kav 62-63 Wisma Barito Pacific Tower B
                </Text>
                <Text style={styles.listLoc}>Semarang, Central Java</Text>
                <Text style={styles.listLoc}>Indonesia</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
    listLoc:{
        fontSize:13
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
    paddingTop: Platform.OS === "android" ? 40 : 0,
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
  icnCart: {
    marginLeft: 5,
    marginRight: 5,
    color: "white",
    fontSize: 23,
  },
  icnSearch: {
    paddingLeft: 5,
    fontSize: 22,
    color: "darkgray",
  },
  viewTop: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#05fa63",
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
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 5,
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
});
