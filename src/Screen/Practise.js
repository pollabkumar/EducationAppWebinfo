// src/ProfilePage.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveFontSize
} from "react-native-responsive-dimensions";
const ProfilePage = () => {
  const backgroundColor = "#0d1116";
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor, }}>
      <StatusBar
        animated={true}
        backgroundColor="#0d1116"
      />

      <View style={{
        backgroundColor: backgroundColor,
        paddingVertical: 4,
        elevation: 1,
        position: 'relative',
        zIndex: 20,
        height: 45,
        paddingHorizontal: 10,
        // justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center"
      }}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Entypo
            style={{
              backgroundColor: 'rgba(160, 160, 160, 0.5)',
              padding: 2,
              fontSize: responsiveFontSize(3),
              color: "#fff",
              borderRadius: 50
            }}
            name="chevron-left" />
        </TouchableOpacity>

        <View style={{ paddingLeft: 4 }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "500"
            }}>
            Profile
          </Text>
        </View>

      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.View style={[styles.profileContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

          <TouchableOpacity 
          onPress={()=>navigation.navigate("")}
          style={{alignItems:"flex-end"}}>
            <Feather
              name="edit"
              style={{ fontSize: responsiveFontSize(2.2), }}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/user.jpg")}
            style={styles.profileImage} />

          <Text style={styles.name}>Pollab Kumar</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="email"
              style={{
                fontSize: responsiveFontSize(2),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                padding: 5,
                borderRadius: 50
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>Pollabkumar123@gmail.com</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Feather name="phone-call"
              style={{
                fontSize: responsiveFontSize(1.8),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                padding: 5,
                borderRadius: 50
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>6000598659</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Ionicons name="location"
              style={{
                fontSize: responsiveFontSize(1.7),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                borderRadius: 50,
                // paddingHorizontal:3.5,
                padding: 5,
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>Rajabari path,Guwahati,assam</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Feather name="phone-call"
              style={{
                fontSize: responsiveFontSize(1.8),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                padding: 5,
                borderRadius: 50
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>24-08-1998</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome5 name="transgender-alt"
              style={{
                fontSize: responsiveFontSize(1.8),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                padding: 5,
                borderRadius: 50
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>Male</Text>
          </View>

          <Text style={styles.academicDetails}>Academic Details:</Text>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome name="university"
              style={{
                fontSize: responsiveFontSize(1.8),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                padding: 5,
                borderRadius: 50
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>SEBA</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Ionicons name="school"
              style={{
                fontSize: responsiveFontSize(1.9),
                color: 'rgba(160, 160, 160, 0.5)',
                backgroundColor: "#0d1116",
                borderRadius: 50,
                // paddingHorizontal:3.5,
                padding: 5,
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "500",
                paddingLeft: 5,
                color: "#0d1116"
              }}>9</Text>
          </View>
          <Text style={styles.otherDetails}>Other Details:</Text>


          <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{
              fontSize: responsiveFontSize(2),
              fontWeight: "500",
              // paddingLeft: 5,
              color: "#0d1116"
            }}>
              Enrolled Course
            </Text>


            <TouchableOpacity
              onPress={() => navigation.navigate("EnrolledCourse")}
              style={{}}>
              <AntDesign
                name="rightcircleo"
                style={{
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: "700",
                  // paddingLeft: 5,
                  color: "#0d1116"
                }}
              />
            </TouchableOpacity>
          </View>


        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#0d1116",
    marginTop:5
  },
  profileContainer: {
    width: '100%',
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: "#000"
  },
  detail: {
    fontSize: 16,
    // marginBottom: 5,
    color: "#000"
  },
  academicDetails: {

    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
    fontSize: responsiveFontSize(2.5),
  },
  otherDetails: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: "#000"
  },
});

export default ProfilePage;
