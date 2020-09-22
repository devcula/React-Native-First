/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const navHeaderStyles = {
  headerStyle: {
    backgroundColor: '#000000',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={navHeaderStyles}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Page',
        }}
      />
    </HomeStack.Navigator>
  );
}

function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator screenOptions={navHeaderStyles}>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details Screen',
        }}
      />
    </DetailsStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={navHeaderStyles}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details Screen',
          }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
