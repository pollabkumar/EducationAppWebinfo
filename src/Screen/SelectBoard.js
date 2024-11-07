import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const SelectBoard = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#0d1116"
                barStyle={statusBarStyle}
            />

            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 8,
                    alignItems: 'center',
                    backgroundColor: "#0d1116",
                    elevation: 1,
                    position: 'relative',
                    zIndex: 20,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <View>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", fontWeight: "600" }}>Educational Board.</Text>
                </View>
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: responsiveFontSize(2.5), color: "#0d1116", fontWeight: "300" }}>
                    Please select your preferred educational board.
                </Text>
            </View>

            <View style={{ marginHorizontal: 20 }}>

                <LinearGradient
                    colors={['#0d1116', '#394c62']}
                    style={{ elevation: 10, width: '100%', padding: 10, borderRadius: 10, flexDirection: "row", elevation: 10 }}>
                    <TouchableOpacity style={{ width: '20%', alignItems: 'center' }}>
                        <Image
                            source={require("../assets/seba15.png")}
                            style={{ height: 50, width: '100%' }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate("ClassName")}
                        style={{
                            width: '80%',
                            alignItems: "flex-start",
                            justifyContent: "center",
                            marginLeft: 5,
                            // backgroundColor:"red"
                        }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: "#fff", fontWeight: "600" }}>
                            SEBA BOARD
                        </Text>
                    </TouchableOpacity>


                </LinearGradient>

                <LinearGradient
                    colors={['#0d1116', '#394c62']}
                    style={{ width: '100%', padding: 10, borderRadius: 10, flexDirection: "row", elevation: 10, marginTop: 10 }}>
                    <TouchableOpacity style={{ width: '20%', }}>
                        <View style={{ width: '90%', alignItems: 'center', backgroundColor: "#fff", paddingVertical: 4, borderRadius: 150 }}>
                            <Image
                                source={require("../assets/11.png")}
                                style={{ height: 45, width: 200 }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("ClassName")}
                    style={{  width: '80%',
                            alignItems: "flex-start",justifyContent: "center", marginLeft: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: "#fff", fontWeight: "600" }}>
                            AHSEC BOARD
                        </Text>
                    </TouchableOpacity>

                    <View style={{}}>

                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={['#0d1116', '#394c62']}
                    style={{ width: '100%', padding: 10, borderRadius: 10, flexDirection: "row", elevation: 10, marginTop: 10 }}
                >
                    <TouchableOpacity style={{ width: '20%' }}>
                        <View style={{ width: '90%', alignItems: 'center', backgroundColor: "#fff", paddingVertical: 4, borderRadius: 150 }}>
                            <Image
                                source={require("../assets/cbsc6.png")}
                                style={{ height: 44, width: '90%' }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("ClassName")}
                    style={{ width: '80%',
                            alignItems: "flex-start", justifyContent: "center", marginLeft: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: "#fff", fontWeight: "600" }}>
                            CBCS BOARD
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>

                {/* <LinearGradient
                    colors={['#0d1116', '#394c62']}
                    style={{ width: '100%', padding: 10, borderRadius: 10, flexDirection: "row", elevation: 10, marginTop: 10 }}>
                    <TouchableOpacity style={{ width: '20%', }}>
                        <View style={{ width: '90%', alignItems: 'center', backgroundColor: "#fff", paddingVertical: 4, borderRadius: 150 }}>
                            <Image
                                source={require("../assets/cbsc6.png")}
                                style={{ height: 44, width: '90%' }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={{ width: '40%', alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: "#fff", fontWeight: "600" }}>
                            CBCS BOARD
                        </Text>
                    </View>

                 
                </LinearGradient>
              */}
            </View>
        </View>
    );
}

export default SelectBoard;

const styles = StyleSheet.create({});
