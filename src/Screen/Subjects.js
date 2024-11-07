// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import Entypo from 'react-native-vector-icons/dist/Entypo';
// import {
//     responsiveHeight,
//     responsiveWidth,
//     responsiveFontSize
// } from "react-native-responsive-dimensions";
// import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';

// const Subjects = () => {
//     const [statusBarStyle, setStatusBarStyle] = useState();
//     const navigation = useNavigation();
//     const classsname = [
//         { class: "Assmese" },
//         { class: "English" },
//         { class: "Social Science" },
//         { class: "Mathematics" },
//         { class: "Hindi" },

//     ];
//     return (
//         <View style={{ flex: 1 }}>
//             <StatusBar
//                 animated={true}
//                 backgroundColor="#394c62"
//                 barStyle={statusBarStyle}
//             />

//             <View style={styles.header}>

//                 <View style={{}}>
//                     <Entypo
//                         style={{
//                             backgroundColor: 'rgba(160, 160, 160, 0.5)',
//                             padding: 2,
//                             fontSize: responsiveFontSize(3),
//                             color: "#fff",
//                             borderRadius: 50
//                         }}
//                         name="chevron-left" />
//                 </View>

//                 <View style={{ paddingRight: 40 }}>
//                     <Text style={styles.headerText}>Subjects</Text>
//                 </View>

//                 <View style={{}}>

//                 </View>
//             </View>
            
//         </View>
//     )
// }

// export default Subjects

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         paddingVertical: 8,
//         alignItems: 'center',
//         backgroundColor: "#394c62",
//         elevation: 1,
//         position: 'relative',
//         zIndex: 20,
//         height: 50,
//         justifyContent:"space-between",
//         paddingHorizontal:10
//     },
//     headerText: {
//         fontSize: responsiveFontSize(2.7),
//         color: "#fff",
//         fontWeight: "600"
//     },
//     subHeader: {
//         padding: 10,
//     },
//     subHeaderText: {
//         fontSize: responsiveFontSize(2.5),
//         color: "#394c62",
//         fontWeight: "300"
//     },
//     grid: {
//         padding: 10,
//     },
//     classItem: {
//         flex: 1,
//         margin: 5,
//         borderRadius: 10,
//     },
//     gradient: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 10,
//         padding: 20,
//     },
//     classText: {
//         fontSize: responsiveFontSize(2.5),
//         color: "#fff",
//         fontWeight: "400",
//     },
// });


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

const Subjects = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const classsname = [
        { class: "Assmese" },
        { class: "English" },
        { class: "Social Science" },
        { class: "Mathematics" },
        { class: "Hindi" },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.classItem}>
            <LinearGradient
                 colors={['#394c62', '#4b657f', '#2c3e50', '#1b2838']}
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
                backgroundColor="#394c62"
                barStyle={statusBarStyle}
            />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo
                        style={styles.backIcon}
                        name="chevron-left" />
                </TouchableOpacity>
                <View style={{ paddingRight: 40 }}>
                    <Text style={styles.headerText}>Subjects</Text>
                </View>
                <View style={{}}></View>
            </View>

            <FlatList
                data={classsname}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
};

export default Subjects;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: "#394c62",
        elevation: 1,
        position: 'relative',
        zIndex: 20,
        height: 50,
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    headerText: {
        fontSize: responsiveFontSize(2.7),
        color: "#fff",
        fontWeight: "600"
    },
    backIcon: {
        backgroundColor: 'rgba(160, 160, 160, 0.5)',
        padding: 2,
        fontSize: responsiveFontSize(3),
        color: "#fff",
        borderRadius: 50
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
