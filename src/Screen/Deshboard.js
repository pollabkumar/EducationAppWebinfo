import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Image,
    Dimensions,
    FlatList,
    Text,
    Animated,
    TouchableOpacity
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Modal from "react-native-modal";
import {
    responsiveFontSize
} from "react-native-responsive-dimensions";
import SidebarModal from '../common/SidebarModal';
import TabBar from '../common/TabBar';
const { width } = Dimensions.get('window');

const Deshboard = () => {
    const [sidebaropen, setsidebaropen] = useState(false);
    const [modelopen, setmodelopen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();
    const backgroundColor = "#0d1116";
    // const backgroundColor = "#fff";
    const scrollViewRef = useRef(null);

    const bannerImages = [
        require('../assets/banner1.jpg'),
        require('../assets/banner2.jpg'),
    ];

    useEffect(() => {
        let bannerIndex = 0;
        const interval = setInterval(() => {
            bannerIndex = (bannerIndex + 1) % bannerImages.length;
            scrollViewRef.current.scrollTo({ x: bannerIndex * width, animated: true });
        }, 3000);
        return () => clearInterval(interval);
    }, [bannerImages.length]);

    const images = [
        { id: '1', source: require('../assets/1.png') },
        { id: '2', source: require('../assets/2.png') },
        { id: '3', source: require('../assets/3.png') },
        { id: '4', source: require('../assets/4.png') },
        // { id: '5', source: require('../assets/5.png') },
    ];

    const scrollX = useRef(new Animated.Value(0)).current;

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    };

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50,
    };

    const purchasefunction = (data) => {

        navigation.navigate(setmodelopen(true))

    }

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 1) * width * 0.8,
            index * width * 0.8,
            (index + 1) * width * 0.8,
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
        });

        return (
            <TouchableOpacity
                // onPress={() => navigation.navigate("SubjectDetail")}
                // onPress={() => navigation.navigate("SubjectDetail")}
                onPress={() => setmodelopen(true)}
                // onPress={() =>purchasefunction(item)}

                style={styles.imageContainer}>
                <Animated.Image
                    source={item.source}
                    style={[
                        styles.imagess,
                        {
                            transform: [{ scale }],
                            opacity,
                        },
                    ]}
                />
            </TouchableOpacity>
        );
    };



    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [animatedValue]);

    const animatedStyle = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                }),
            },
        ],
    };


    return (
        <View style={{ flex: 1, backgroundColor }}>
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
                justifyContent: "space-between",
                flexDirection: 'row',
                alignItems: "center"
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}>

                    <TouchableOpacity
                        onPress={() => setsidebaropen(true)}
                    >
                        <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={{
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5

                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    fontSize: responsiveFontSize(2.9),
                                    color: "#fff",
                                    // borderRadius: 50,
                                }}
                                name="view-dashboard-outline"
                            />
                        </LinearGradient>
                    </TouchableOpacity>

                    <Text style={{
                        paddingLeft: 5,
                        fontSize: responsiveFontSize(2.2),
                        color: "#fff",
                        fontWeight: "700"
                    }}>
                        Hey, Pollab 👋
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{}}>
                        <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={{
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5

                            }}
                        >
                            <MaterialIcons
                                style={{
                                    fontSize: responsiveFontSize(2.9),
                                    color: "#fff",
                                    // borderRadius: 50,
                                }}
                                name="notifications"
                            />
                        </LinearGradient>
                    </View>


                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 8, height: 180 }}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollView}
                    >
                        {bannerImages.map((image, index) => (
                            <Image
                                key={index}
                                source={image}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        ))}
                    </ScrollView>
                </View>

                <View>
                    <View style={{ marginTop: 15, marginLeft: 10, marginBottom: 15, flexDirection: 'row', alignItems: "center" }}>
                        <View style={{
                            backgroundColor: '#7e94f5',
                            padding: 5,
                            borderRadius: 10
                        }}>

                            <Animated.View style={[{ backgroundColor: '#7e94f5', padding: 2, borderRadius: 10 }, animatedStyle]}>
                                <Entypo
                                    style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                                    name="open-book"
                                />
                            </Animated.View>
                        </View>

                        <Text style={{
                            color: "#fff",
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: "400",
                            paddingLeft: 8
                        }}>
                            Select Subjects
                        </Text>
                    </View>

                    <Animated.FlatList
                        data={images}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={viewabilityConfig}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        contentContainerStyle={{
                            paddingHorizontal: (width - width * 0.8) / 2,
                        }}
                        snapToInterval={width * 0.7}
                        decelerationRate="fast"
                    />

                    <View style={styles.dotContainer}>
                        {images.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    { backgroundColor: index === currentIndex ? '#fff' : '#9b9b9b' },
                                ]}
                            />
                        ))}
                    </View>
                </View>


                <View style={{
                    marginTop: 15,
                    marginBottom: 15,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10

                }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{
                            backgroundColor: '#7e94f5',
                            padding: 5,
                            borderRadius: 10
                        }}>
                            {/* <Feather
                            style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                            name="book"

                        /> */}
                            <Animated.View style={[{ backgroundColor: '#7e94f5', padding: 2, borderRadius: 10 }, animatedStyle]}>
                                <Feather
                                    style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                                    name="book"
                                />
                            </Animated.View>
                        </View>

                        <Text style={{
                            color: "#fff",
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: "400",
                            paddingLeft: 8
                        }}>
                            Trending Concepts
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize: responsiveFontSize(1.5), color: "#fff" }}>
                            View all
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("UtubeVideo")}
                    style={{ marginHorizontal: 10 }}>
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

                        <View style={{ width: "70%" }}>
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
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("UtubeVideo")}
                    style={{ marginHorizontal: 10, marginTop: 2 }}>
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

                        <View style={{ width: "70%" }}>
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
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("UtubeVideo")}
                    style={{ marginHorizontal: 10, marginTop: 2 }}>
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

                        <View style={{ width: "70%" }}>
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
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("UtubeVideo")}
                    style={{ marginHorizontal: 10, marginTop: 2 }}>
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

                        <View style={{ width: "70%" }}>
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
                    </View>
                </TouchableOpacity>

            </ScrollView>




            {/* <Modal
                isVisible={modelopen}
                onBackdropPress={() => setmodelopen(false)}
                onSwipeComplete={() => setmodelopen(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0, marginTop: 0, }}
            >
                <View
                    style={{
                        height: "auto",
                        // backgroundColor:transparent,
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        // borderColor: "#F29D38",
                        // borderWidth: 0.55
                    }}>

                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        padding:10
                    }}>
                        <Image
                            source={require('../assets/1.png')}
                            style={{ width: 180, height: 200 }} />

                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: "#000", fontSize: 20, fontWeight: "800" }}>
                                Mathematics
                            </Text>

                            <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                <Feather
                                    style={{ color: "#000", fontSize: responsiveFontSize(2) }}
                                    name="check-circle" />
                                <Text style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(1.9),
                                    paddingLeft: 5
                                }}>
                                    Subject Notes
                                </Text>
                            </View>

                            <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center" }}>
                                <Feather
                                    style={{ color: "#000", fontSize: responsiveFontSize(2) }}
                                    name="check-circle" />
                                <Text style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(1.9),
                                    paddingLeft: 5
                                }}>
                                    Topic Videos
                                </Text>
                            </View>

                            <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center" }}>
                                <Feather
                                    style={{ color: "#000", fontSize: responsiveFontSize(2) }}
                                    name="check-circle" />
                                <Text style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(1.9),
                                    paddingLeft: 5
                                }}>
                                    Subject PDFs
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{}}>jhhgddjh</Text>

                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal> */}

<Modal
    isVisible={modelopen}
    onBackdropPress={() => setmodelopen(false)}
    onSwipeComplete={() => setmodelopen(false)}
    backdropOpacity={0.5}
    style={{ justifyContent: 'flex-end', margin: 0 }}
>
    <View
        style={{
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 15, 
        }}
    >
        <View style={{ flexDirection: "row", marginTop: 10,width:"100%"}}>
            <View style={{width:"40%"}}>
             <Image
                source={require('../assets/1.png')}
                style={{ width: "100%", height: 160 ,}}
                resizeMode="stretch"
            />
            </View>         
            <View style={{ marginLeft: 15,width:"60%" }}>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: "800" }}>
                    Mathematics
                </Text>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Feather style={{ color: "#07692d", fontSize: 20 }} name="check-circle" />
                        <Text style={{ color: "#000", fontSize: 16, paddingLeft: 5 }}>
                            Subject Notes
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                        <Feather style={{ color: "#07692d", fontSize: 20 }} name="check-circle" />
                        <Text style={{ color: "#000", fontSize: 16, paddingLeft: 5 }}>
                            Topic Videos
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                        <Feather style={{ color: "#07692d", fontSize: 20 }} name="check-circle" />
                        <Text style={{ color: "#000", fontSize: 16, paddingLeft: 5 }}>
                            Subject PDFs
                        </Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" ,color: "#0d1116"}}>
                Enrollment Fee: $99
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate("SubjectDetail")}
                style={{
                    backgroundColor: "#0d1116",
                    paddingVertical: 12,
                    borderRadius: 5,
                    marginTop: 10,
                    alignItems: "center"
                }}
              
            >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                    Buy Now
                </Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>



            <SidebarModal isVisible={sidebaropen} onClose={() => setsidebaropen(false)} />
            <TabBar />
        </View>
    );
}

export default Deshboard;

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
    },
    image: {
        width: width - 20,
        height: 180,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagess: {
        width: width * 0.7,
        height: width * 0.7,
        resizeMode: 'contain',
        borderRadius: 15,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
});
