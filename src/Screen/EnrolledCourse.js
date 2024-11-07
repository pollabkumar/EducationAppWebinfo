import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
import TabBar from '../common/TabBar';

const { width } = Dimensions.get('window');
const imageSize = width / 2; // Width of each image (half of screen width)

const images = [
  require('../assets/1.png'),
  require('../assets/2.png'),
  require('../assets/3.png'),
  require('../assets/4.png'),
  // Add more image sources here
];

const EnrolledCourse = () => {
  const backgroundColor = "#0d1116";
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }} >
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            style={styles.backButton}
            name="chevron-left" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Enrolled Course</Text>
      </View>

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate("SubjectDetail")}
            style={{}}>
                <Image
                    source={item}
                    style={styles.image}
                    resizeMode="contain"
                  />

            </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.imageContainer}
      />

      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0d1116",
    paddingVertical: 4,
    elevation: 1,
    position: 'relative',
    zIndex: 20,
    height: 45,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: "center",
  },
  backButton: {
    backgroundColor: 'rgba(160, 160, 160, 0.5)',
    padding: 2,
    fontSize: responsiveFontSize(3),
    color: "#fff",
    borderRadius: 50
  },
  headerText: {
    fontSize: responsiveFontSize(2),
    color: "#fff",
    paddingLeft: 10
  },
  image: {
    width: imageSize,
    height: 200,
    margin: 2,
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:10
  },
  imageContainer: {
    paddingHorizontal: 5,
    
  }
});

export default EnrolledCourse;
