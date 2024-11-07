// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { useState } from 'react';
// import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
// import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { responsiveFontSize } from "react-native-responsive-dimensions";

// const TabBar = () => {
//     const navigation = useNavigation();
//     const route = useRoute();
//     const primarycolor = "#181f29";
//     const Whitecolor = "#fff";

//     const getColor = (screen) => {
//         return route.name === screen ? Whitecolor : "#b2b2b2";
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{
//                 width: "100%",
//                 height: 53,
//                 flexDirection: "row",
//                 backgroundColor: primarycolor,
//                 alignItems: "center",
//                 justifyContent: "space-evenly",
//                 position: "absolute",
//                 bottom: 0,

//             }}>

//                 {/* home */}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Deshboard')}
//                     style={{
//                         width: "25%",
//                         height: 60,
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Icon name='home'
//                         style={{ color: getColor('Deshboard'), fontSize: responsiveFontSize(2.7) }}
//                     />
//                     <Text style={{ fontSize: responsiveFontSize(1.40), color: getColor('Deshboard'), fontWeight: "800" }}>Home</Text>
//                 </TouchableOpacity>

//                 {/* enrolled course*/}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate("Category")}
//                     style={{
//                         width: "25%",
//                         height: 60,
//                         justifyContent: "center",
//                         alignItems: "center",
//                         // backgroundColor: "red"
//                     }}
//                 >
//                     <Icon name='view-grid-plus-outline'
//                         style={{ color: getColor('Category'), fontSize: responsiveFontSize(2.6) }}
//                     />
//                     <Text style={{
//                         fontSize: responsiveFontSize(1.40),
//                         color: getColor('Category'),
//                         fontWeight: "800"
//                     }}>
//                         enrolled course
//                     </Text>
//                 </TouchableOpacity>

//                 {/* Transactions */}
//                 <TouchableOpacity
//                     style={{
//                         width: "25%",
//                         height: 60,
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                     onPress={() => navigation.navigate('Account')}
//                 >
//                     <Icon2 name='user'
//                         style={{ color: getColor('Account'), fontSize: responsiveFontSize(2.6) }}
//                     />
//                     <Text style={{ fontSize: responsiveFontSize(1.40), color: getColor('Account'), fontWeight: "800" }}>Transactions</Text>
//                 </TouchableOpacity>

//                 {/* Account */}
//                 <TouchableOpacity
//                     style={{
//                         width: "25%",
//                         height: 60,
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                     onPress={() => navigation.navigate('Account')}
//                 >
//                     <Icon2 name='user'
//                         style={{ color: getColor('Account'), fontSize: responsiveFontSize(2.6) }}
//                     />
//                     <Text style={{ fontSize: responsiveFontSize(1.40), color: getColor('Account'), fontWeight: "800" }}>Account</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default TabBar;

// const styles = StyleSheet.create({});



//////////////////////////////

import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { responsiveFontSize } from "react-native-responsive-dimensions";

const TabBar = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const primaryColor = "#181f29";
    const whiteColor = "#fff";

    // State to manage animation
    const [scaleValue] = useState(new Animated.Value(1));

    // Function to get the color based on active screen
    const getColor = (screen) => {
        return route.name === screen ? whiteColor : "#b2b2b2";
    }

    // Function to animate the scale
    const animateScale = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();
    }

    // Effect to animate on route change
    useEffect(() => {
        animateScale();
    }, [route.name]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: "100%",
                height: 53,
                flexDirection: "row",
                backgroundColor: primaryColor,
                alignItems: "center",
                justifyContent: "space-evenly",
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius:20,
                borderTopRightRadius:20
            }}>
                {/* Home */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Deshboard')}
                    style={styles.tabButton}
                >
                    <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'Deshboard' ? scaleValue : 1 }] }]}>
                        <Icon name='home' style={[styles.icon, { color: getColor('Deshboard') }]} />
                        <Text style={[styles.text, { color: getColor('Deshboard') }]}>Home</Text>
                    </Animated.View>
                </TouchableOpacity>

                {/* Enrolled Course */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("EnrolledCourse")}
                    style={styles.tabButton}
                >
                    <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'EnrolledCourse' ? scaleValue : 1 }] }]}>
                        <Icon name='view-grid-plus-outline' style={[styles.icon, { color: getColor('EnrolledCourse') }]} />
                        <Text style={[styles.text, { color: getColor('EnrolledCourse') }]}>Enrolled Course</Text>
                    </Animated.View>
                </TouchableOpacity>

                {/* Transactions */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('TransactionScreen')}
                    style={styles.tabButton}
                >
                    <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'TransactionScreen' ? scaleValue : 1 }] }]}>
                        <Icon2 name='user' style={[styles.icon, { color: getColor('TransactionScreen') }]} />
                        <Text style={[styles.text, { color: getColor('TransactionScreen') }]}>Transactions</Text>
                    </Animated.View>
                </TouchableOpacity>

                {/* Account */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Account')}
                    style={styles.tabButton}
                >
                    <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'Account' ? scaleValue : 1 }] }]}>
                        <Icon2 name='user' style={[styles.icon, { color: getColor('Account') }]} />
                        <Text style={[styles.text, { color: getColor('Account') }]}>Account</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({
    tabButton: {
        width: "25%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20
    },
    icon: {
        fontSize: responsiveFontSize(2.6),
    },
    text: {
        fontSize: responsiveFontSize(1.40),
        fontWeight: "800",
    }
});

//////////////////////////////////

// import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
// import { useState, useEffect } from 'react';
// import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { responsiveFontSize } from "react-native-responsive-dimensions";

// const TabBar = () => {
//     const navigation = useNavigation();
//     const route = useRoute();
//     const primaryColor = "#181f29";
//     const whiteColor = "#fff";

//     // State to manage animation
//     const [scaleValue] = useState(new Animated.Value(1));

//     // Function to get the color based on active screen
//     const getColor = (screen) => {
//         return route.name === screen ? whiteColor : "#b2b2b2";
//     }

//     // Function to animate the scale
//     const animateScale = () => {
//         Animated.sequence([
//             Animated.timing(scaleValue, {
//                 toValue: 1.2,
//                 duration: 100,
//                 useNativeDriver: true
//             }),
//             Animated.timing(scaleValue, {
//                 toValue: 1,
//                 duration: 100,
//                 useNativeDriver: true
//             })
//         ]).start();
//     }

//     // Effect to animate on route change
//     useEffect(() => {
//         animateScale();
//     }, [route.name]);

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{
//                 width: "100%",
//                 height: 53,
//                 flexDirection: "row",
//                 backgroundColor: primaryColor,
//                 alignItems: "center",
//                 justifyContent: "space-evenly",
//                 position: "absolute",
//                 bottom: 0,
//                 borderTopLeftRadius: 20,
//             }}>
//                 {/* Home */}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Deshboard')}
//                     style={styles.tabButton}
//                 >
//                     <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'Deshboard' ? scaleValue : 1 }] }]}>
//                         <Icon name='home' style={[styles.icon, { color: getColor('Deshboard') }]} />
//                         <Animated.Text style={[styles.text, { color: getColor('Deshboard'), transform: [{ scale: route.name === 'Deshboard' ? scaleValue : 1 }] }]}>Home</Animated.Text>
//                     </Animated.View>
//                 </TouchableOpacity>

//                 {/* Enrolled Course */}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate("EnrolledCourse")}
//                     style={styles.tabButton}
//                 >
//                     <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'EnrolledCourse' ? scaleValue : 1 }] }]}>
//                         <Icon name='view-grid-plus-outline' style={[styles.icon, { color: getColor('EnrolledCourse') }]} />
//                         <Animated.Text style={[styles.text, { color: getColor('EnrolledCourse'), transform: [{ scale: route.name === 'EnrolledCourse' ? scaleValue : 1 }] }]}>Enrolled Course</Animated.Text>
//                     </Animated.View>
//                 </TouchableOpacity>

//                 {/* Transactions */}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('TransactionScreen')}
//                     style={styles.tabButton}
//                 >
//                     <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'TransactionScreen' ? scaleValue : 1 }] }]}>
//                         <Icon2 name='money' style={[styles.icon, { color: getColor('TransactionScreen') }]} />
//                         <Animated.Text style={[styles.text, { color: getColor('TransactionScreen'), transform: [{ scale: route.name === 'TransactionScreen' ? scaleValue : 1 }] }]}>Transactions</Animated.Text>
//                     </Animated.View>
//                 </TouchableOpacity>

//                 {/* Account */}
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Account')}
//                     style={styles.tabButton}
//                 >
//                     <Animated.View style={[styles.iconContainer, { transform: [{ scale: route.name === 'Account' ? scaleValue : 1 }] }]}>
//                         <Icon2 name='user' style={[styles.icon, { color: getColor('Account') }]} />
//                         <Animated.Text style={[styles.text, { color: getColor('Account'), transform: [{ scale: route.name === 'Account' ? scaleValue : 1 }] }]}>Account</Animated.Text>
//                     </Animated.View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default TabBar;

// const styles = StyleSheet.create({
//     tabButton: {
//         width: "25%",
//         height: 60,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     iconContainer: {
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     icon: {
//         fontSize: responsiveFontSize(2.6),
//     },
//     text: {
//         fontSize: responsiveFontSize(1.40),
//         fontWeight: "800",
//     }
// });



