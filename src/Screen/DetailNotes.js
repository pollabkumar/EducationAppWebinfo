import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
const DetailNotes = () => {
    const backgroundColor = "#0d1116";
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: backgroundColor,flex:1}}>

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

            </View>
            
            <ScrollView contentContainerStyle={{padding: 16,}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 16,
                }}>
                    <Image
                        source={require("../assets/Chemicalreactions.png")}
                        resizeMode="stretch"
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 5,
                            marginRight: 16,
                        }}
                    />
                    <View style={{ flex: 1, }}>
                        <Text style={{
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: 'bold',
                        }}>Introduction</Text>
                        <Text style={{
                            fontSize: responsiveFontSize(2),
                            color: '#666',
                        }}>Chemical Reactions</Text>
                        <Text style={{
                            fontSize: responsiveFontSize(2),
                            color: '#666',
                        }}>Science (English)</Text>
                    </View>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={{
                        fontSize: responsiveFontSize(1.8),
                        color: '#fff',
                        marginTop: 10,
                        textAlign: "justify",
                        fontWeight: "300",
                        lineHeight: 20
                    }}>
                        Chemical reaction, a process in which one or more substances, the reactants,
                        are converted to one or more different substances, the products. Substances are either chemical
                        elements or compounds. A chemical reaction rearranges the constituent atoms of the reactants to create different substances as products.
                        Chemical reactions are an integral part of technology, of culture, and indeed of life itself. Burning fuels, smelting iron, making glass and pottery,
                        brewing beer, and making wine and cheese are among many examples of activities incorporating chemical reactions that have been known and used for thousands of years. Chemical reactions abound in the geology of Earth, in the atmosphere and oceans, and in a vast array of complicated processes that occur in all living systems.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};



export default DetailNotes;
