import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { MaterialIcons } from "@expo/vector-icons";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import Checkbox from "expo-checkbox";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const AddressScreen = () => {
  const nav = useNavigation();
  const [showModal, setshowModal] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isAgree, setAgree] = useState(false);
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100 / 2;
  const [ mapRegion, setRegion ] = useState( null )
  const [mapMarker, setmapMarker] = useState({
    latitude: -7.004182,
    longitude: 110.434038,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const initRegion ={
    latitude: -7.005145,
    longitude: 110.438126,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={[styles.viewTop, { justifyContent: "space-between" }]}>
            <View>
              <TouchableOpacity onPress={() => nav.navigate("Main")}>
                <Feather name="arrow-left" style={styles.icn} />
              </TouchableOpacity>
            </View>
            <Pressable onPress={() => setshowModal(!showModal)}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Add Address
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={{ flexDirection: "row", marginBottom: 15, marginTop: 5 }}
          >
            <Pressable style={styles.pressTop}>
              <Feather
                name="search"
                style={{
                  color: "gray",
                  paddingLeft: 5,
                  fontSize: 22,
                  color: "#06c25a",
                }}
              />
              <TextInput placeholder="Search Address" />
            </Pressable>
          </View>
          <View>
            <Text style={styles.space} />
          </View>

          <View
            style={{
              flexDirection: "column",
              gap: 8,
              alignItems: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 10,
                width: "90%",
                borderRadius: 10,
                borderColor: "#03a84d",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
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

                <AntDesign name="edit" size={24} color="#03a84d" />
              </View>
              <View style={{ flexDirection: "column", marginTop: 5 }}>
                <Text style={[{ fontWeight: "700" }, styles.listLoc]}>
                  John Doe
                </Text>
                <Text>+62 886 521 333</Text>
                <Text style={styles.listLoc}>
                  Jl Letjen South Parman Kav 62-63 Wisma Barito Pacific Tower B
                </Text>
                <Text style={styles.listLoc}>Semarang, Central Java</Text>
                <Text style={styles.listLoc}>Indonesia</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                <SimpleLineIcons
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "#03a84d",
                  }}
                />
                <Text>Location Pinned</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 10,
                width: "90%",
                borderRadius: 10,
                borderColor: "#03a84d",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <Text>Office</Text>
                </View>
                <AntDesign name="edit" size={24} color="#03a84d" />
              </View>
              <View style={{ flexDirection: "column", marginTop: 5 }}>
                <Text style={[{ fontWeight: "700" }, styles.listLoc]}>
                  John Doe
                </Text>
                <Text>+62 886 521 333</Text>
                <Text style={styles.listLoc}>
                  Jl Merdeka Raya, Burj Khalifa Tower B
                </Text>
                <Text style={styles.listLoc}>Semarang, Central Java</Text>
                <Text style={styles.listLoc}>Indonesia</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                <SimpleLineIcons
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "red",
                  }}
                />
                <Text>Set Pin location</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 10,
                width: "90%",
                borderRadius: 10,
                borderColor: "#03a84d",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <Text>Office Address</Text>
                </View>
                <AntDesign name="edit" size={24} color="#03a84d" />
              </View>
              <View style={{ flexDirection: "column", marginTop: 5 }}>
                <Text style={[{ fontWeight: "700" }, styles.listLoc]}>
                  John Doe
                </Text>
                <Text>+62 886 521 333</Text>
                <Text style={styles.listLoc}>
                  Jl Merdeka Raya, Burj Khalifa Tower B
                </Text>
                <Text style={styles.listLoc}>Semarang, Central Java</Text>
                <Text style={styles.listLoc}>Indonesia</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                <SimpleLineIcons
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "red",
                  }}
                />
                <Text>Set Pin location</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 10,
                width: "90%",
                borderRadius: 10,
                borderColor: "#03a84d",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <Text>Friend Home</Text>
                </View>
                <AntDesign name="edit" size={24} color="#03a84d" />
              </View>
              <View style={{ flexDirection: "column", marginTop: 5 }}>
                <Text style={[{ fontWeight: "700" }, styles.listLoc]}>
                  Avril Natalie
                </Text>
                <Text>+62 354 111 987</Text>
                <Text style={styles.listLoc}>
                  Jl Gold mate Raya, Burj Khalifa Tower C
                </Text>
                <Text style={styles.listLoc}>Solo, Central Java</Text>
                <Text style={styles.listLoc}>Indonesia</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                <SimpleLineIcons
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "red",
                  }}
                />
                <Text>Set Pin location</Text>
              </View>
            </TouchableOpacity>
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
        <ModalContent style={{ width: "100%", height: "300" }}>
          <ScrollView>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Add Address
              </Text>
              <View>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    backgroundColor: "gray",
                    height: 1,
                  }}
                />
              </View>
              <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
                Detail Address
              </Text>
              <View style={{ flex: 1, width: "100%" }}>
                 <MapView
                  style={{
                    width: width,
                    height: height,
                  }}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={initRegion}
                  showsMyLocationButton={true}
                  showsUserLocation={true}
                >
                 
                    <Marker coordinate={mapMarker} title="Dzavira" />
                   

                </MapView>
              </View>

              <View style={{ marginTop: 18 }}>
                <Text style={styles.lblAddress}>Label Address</Text>
                <TextInput
                  placeholder="Label Address"
                  style={styles.lblInputAddress}
                />
                <Text style={[styles.lblAddress, { marginTop: 5 }]}>
                  Full Address
                </Text>
                <TextInput
                  placeholder="Full Address"
                  multiline
                  numberOfLines={4}
                  style={styles.lblInputAddress}
                />
                <Text style={[styles.lblAddress, { marginTop: 5 }]}>
                  Notes (Optional)
                </Text>
                <TextInput
                  placeholder="Notes"
                  multiline
                  numberOfLines={4}
                  style={styles.lblInputAddress}
                />
                <Text style={[styles.lblAddress, { marginTop: 5 }]}>
                  Receiver Name
                </Text>
                <TextInput placeholder="Name" style={styles.lblInputAddress} />
                <Text style={[styles.lblAddress, { marginTop: 5 }]}>
                  Phone Number
                </Text>
                <TextInput
                  placeholder="Phone Number"
                  style={styles.lblInputAddress}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "#03a84d" : undefined}
                  />
                  <Text>Set to Main Address</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={isAgree}
                    onValueChange={setAgree}
                    color={isAgree ? "#03a84d" : undefined}
                  />
                  <Text>
                    Agree to the terms and conditions and the privacy policy
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#03a84d",
                  padding: 10,
                  alignItems: "center",
                  marginTop: 15,
                  marginStart: 25,
                  marginEnd: 25,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
  },
  lblInputAddress: {
    marginStart: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
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
  space: {
    height: 8,
    borderColor: "#D0D0D0",
    backgroundColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 0,
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
