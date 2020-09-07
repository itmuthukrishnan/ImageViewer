/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import {Provider} from 'react-redux'
import store from './store'

const StackNavigator = createStackNavigator()
const HomeStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#333",
        shadowColor: "#333", //ios
        elevation: 0 //android
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <StackNavigator.Screen name="home" component={Home} options={{
        title:'Image Gallery'
      }} />
    </StackNavigator.Navigator>
  )
}


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>

  )
}

export default App;
