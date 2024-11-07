import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';

const SelectBoard = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const classsname = [
        { class: "1" },
        { class: "2" },
        { class: "3" },
        { class: "4" },
        { class: "5" },
        { class: "6" },
        { class: "7" },
        { class: "8" },
        { class: "9" },
        { class: "10" },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Deshboard")}
         style={styles.classItem}>
            <LinearGradient
                colors={['#0d1116', '#1b2838', '#2c3e50', '#4b657f']}
                style={styles.gradient}
            >
                <Text style={styles.classText}>{item.class}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#0d1116"
                barStyle={statusBarStyle}
            />

            <View style={styles.header}>
                <View style={{}}>
                  <Entypo 
                  style={{ 
                     backgroundColor: 'rgba(160, 160, 160, 0.5)',
                     padding:2,
                     fontSize: responsiveFontSize(3),
                     color:"#fff",
                     borderRadius:50
                    }}
                  name="chevron-left"/>
                </View>

                <View style={{paddingRight:40}}>
                <Text style={styles.headerText}>Classes</Text>
                </View>

                <View style={{}}>

                </View>
            </View>
            
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>
                    Please Select Your Preferred Class
                </Text>
            </View>

            <FlatList
                data={classsname}
                renderItem={renderItem}
                keyExtractor={(item) => item.class}
                numColumns={2}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
}

export default SelectBoard;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: "#0d1116",
        elevation: 1,
        position: 'relative',
        zIndex: 20,
        height: 50,
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    headerText: {
        fontSize: responsiveFontSize(2.7),
        color: "#fff",
        fontWeight: "600"
    },
    subHeader: {
        padding: 10,
    },
    subHeaderText: {
        fontSize: responsiveFontSize(2.5),
        color: "#0d1116",
        fontWeight: "300"
    },
    grid: {
        padding: 10,
    },
    classItem: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 20,
    },
    classText: {
        fontSize: responsiveFontSize(2.5),
        color: "#fff",
        fontWeight: "400",
    },
});

