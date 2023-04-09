import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// all component are here
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';

const HomeStack = createNativeStackNavigator();

import {View, Text} from 'react-native';

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
      <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
