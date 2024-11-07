import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LottieView from "lottie-react-native";
import {
    responsiveFontSize
} from "react-native-responsive-dimensions";
const { width } = Dimensions.get('window');
const DownloadPdf = () => {
    const [statusBarStyle, setStatusBarStyle] = useState('light-content');
    const backgroundColor = "#0d1116";
    return (
        <View style={{ flex: 1, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor="#0d1116"
                barStyle={statusBarStyle}
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

                <View>
                    <Entypo
                        style={{
                            backgroundColor: 'rgba(160, 160, 160, 0.5)',
                            padding: 2,
                            fontSize: responsiveFontSize(3),
                            color: "#fff",
                            borderRadius: 50
                        }}
                        name="chevron-left" />
                </View>
                <View style={{ marginLeft: 5 }}>
                    <Text style={{
                        fontSize: responsiveFontSize(2.2),
                        color: "#fff",
                    }}>
                        Subject-specific PDF
                    </Text>
                </View>

            </View>



        

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: 10,
                    borderRadius: 5
                }}>
                    <View style={{ width: "25%", alignItems: "center" }}>

                        <Image
                            source={require('../assets/Chemicalreactions.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>

                    <View style={{ width: "60%", }}>
                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(2),
                                fontWeight: "700",
                                paddingLeft: 8,
                                paddingTop: 5
                            }}>
                                Introduction
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Chemical Reactions
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Science (English)
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{ width: "15%", alignItems:"center",justifyContent:"center"}}>
                        <LottieView
                            style={{ width: "100%", height: 30,paddingVertical:20 }}
                            source={require('../assets/Animation - 1722408574301.json')} autoPlay loop />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 2 }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: 10,
                    borderRadius: 5
                }}>
                    <View style={{ width: "25%", alignItems: "center" }}>

                        <Image
                            source={require('../assets/Chemicalreactions.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>

                    <View style={{ width: "60%", }}>
                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(2),
                                fontWeight: "700",
                                paddingLeft: 8,
                                paddingTop: 5
                            }}>
                                Introduction
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Chemical Reactions
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Science (English)
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{ width: "15%", alignItems:"center",justifyContent:"center"}}>
                        <LottieView
                            style={{ width: "100%", height: 30,paddingVertical:20 }}
                            source={require('../assets/Animation - 1722408574301.json')} autoPlay loop />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 2 }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: 10,
                    borderRadius: 5
                }}>
                    <View style={{ width: "25%", alignItems: "center" }}>

                        <Image
                            source={require('../assets/Chemicalreactions.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>

                    <View style={{ width: "60%", }}>
                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(2),
                                fontWeight: "700",
                                paddingLeft: 8,
                                paddingTop: 5
                            }}>
                                Introduction
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Chemical Reactions
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Science (English)
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{ width: "15%", alignItems:"center",justifyContent:"center"}}>
                        <LottieView
                            style={{ width: "100%", height: 30,paddingVertical:20 }}
                            source={require('../assets/Animation - 1722408574301.json')} autoPlay loop />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 2 }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: 10,
                    borderRadius: 5
                }}>
                    <View style={{ width: "25%", alignItems: "center" }}>

                        <Image
                            source={require('../assets/Chemicalreactions.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>

                    <View style={{ width: "60%", }}>
                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(2),
                                fontWeight: "700",
                                paddingLeft: 8,
                                paddingTop: 5
                            }}>
                                Introduction
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Chemical Reactions
                            </Text>
                        </View>

                        <View style={{}}>
                            <Text style={{
                                color: "#fff",
                                fontSize: responsiveFontSize(1.8),
                                fontWeight: "300",
                                paddingLeft: 8,
                                paddingTop: 2
                            }}>
                                Science (English)
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{ width: "15%", alignItems:"center",justifyContent:"center"}}>
                        <LottieView
                            style={{ width: "100%", height: 30,paddingVertical:20 }}
                            source={require('../assets/Animation - 1722408574301.json')} autoPlay loop />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DownloadPdf

const styles = StyleSheet.create({})