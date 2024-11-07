import { StyleSheet, Text, } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassName from '../Screen/ClassName';
import SelectBoard from '../Screen/SelectBoard';
import Subjects from '../Screen/Subjects';
import Deshboard from '../Screen/Deshboard';
import Practise from '../Screen/Practise';
import SubjectDetail from '../Screen/SubjectDetail';
import DownloadPdf from '../Screen/DownloadPdf';
import SubjuctsNote from '../Screen/SubjuctsNote';
import UtubeVideo from '../Screen/UtubeVideo';
import DetailNotes from '../Screen/DetailNotes';
import TransactionScreen from '../Screen/TransactionScreen';
import EnrolledCourse from '../Screen/EnrolledCourse';
import Account from '../Screen/Account';
import EditProfile from '../Screen/EditProfile';
const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Deshboard" component={Deshboard} />
        <Stack.Screen name="SubjectDetail" component={SubjectDetail} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="EnrolledCourse" component={EnrolledCourse} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SelectBoard" component={SelectBoard} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Practise" component={Practise} />
        <Stack.Screen name="DetailNotes" component={DetailNotes} />
        <Stack.Screen name="SubjurctsNote" component={SubjuctsNote} />
        <Stack.Screen name="UtubeVideo" component={UtubeVideo} />
        <Stack.Screen name="DownloadPdf" component={DownloadPdf} />
        <Stack.Screen name="ClassName" component={ClassName} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})
